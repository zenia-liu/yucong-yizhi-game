import { AudioSystem } from "./Audio.js";
import { PuzzleSystem } from "./Puzzles.js";
import { World } from "./World.js";
import { INTRO_LINES, PUZZLES, REGIONS, REGION_COMPLETE_LINES } from "./data.js";

const SAVE_KEY = "city-within-cong-save-v3";

export class Game {
  constructor() {
    this.audio = new AudioSystem();
    this.state = {
      started: false,
      phase: "title",
      currentRegion: 0,
      solved: [],
      openingProgress: [],
      assemblyProgress: [],
      sound: true
    };
    this.nearId = null;
    this.dialogueQueue = [];
    this.dialogueCallback = null;
    this.world = new World(document.getElementById("world"), {
      onLockPart: (index, id) => this.onLockPart(index, id),
      onNearChange: (id, solved) => this.onNearChange(id, solved)
    });
    this.puzzles = new PuzzleSystem(this.audio);
    this.bindUI();
    this.buildGlyphs();
    this.refreshContinue();
  }

  bindUI() {
    this.ui = {
      title: document.getElementById("title-screen"),
      start: document.getElementById("start-game"),
      continue: document.getElementById("continue-game"),
      hud: document.getElementById("hud"),
      region: document.getElementById("region-name"),
      objective: document.getElementById("objective"),
      objectiveText: document.getElementById("objective-text"),
      interaction: document.getElementById("interaction"),
      interactionLabel: document.getElementById("interaction-label"),
      interactionAction: document.getElementById("interaction-action"),
      dialogue: document.getElementById("dialogue"),
      speaker: document.getElementById("dialogue-speaker"),
      dialogueText: document.getElementById("dialogue-text"),
      dialogueNext: document.getElementById("dialogue-next"),
      chapter: document.getElementById("chapter-card"),
      chapterNumber: document.getElementById("chapter-number"),
      chapterTitle: document.getElementById("chapter-title"),
      chapterSubtitle: document.getElementById("chapter-subtitle"),
      ending: document.getElementById("ending"),
      restart: document.getElementById("restart-game"),
      sound: document.getElementById("sound-toggle"),
      toast: document.getElementById("toast")
    };
    this.ui.start.addEventListener("click", () => this.startNew());
    this.ui.continue.addEventListener("click", () => this.continueGame());
    this.ui.restart.addEventListener("click", () => this.startNew());
    this.ui.dialogueNext.addEventListener("click", () => this.advanceDialogue());
    this.ui.interactionAction.addEventListener("click", () => this.activateNear());
    const paintSound=(enabled)=>{this.ui.sound.innerHTML=enabled?'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 13h6l7-6v18l-7-6H6z"/><path d="M23 11c2.5 2.6 2.5 7.4 0 10M26 8c4.3 4.5 4.3 11.5 0 16"/></svg>':'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 13h6l7-6v18l-7-6H6z"/><path d="m23 13 6 6m0-6-6 6"/></svg>';};this.paintSound=paintSound;paintSound(this.state.sound);
    this.ui.sound.addEventListener("click", () => {
      this.state.sound = !this.state.sound;
      this.audio.setEnabled(this.state.sound);
      paintSound(this.state.sound);
      this.ui.sound.setAttribute("aria-label", this.state.sound ? "关闭声音" : "开启声音");
      this.save();
    });
    window.addEventListener("keydown", (e) => {
      const qa = new URLSearchParams(location.search).has("qa");
      if (qa && e.key.toLowerCase() === "q" && this.state.phase === "region") {
        const id = REGIONS[this.state.currentRegion].puzzles.find((puzzleId) => !this.state.solved.includes(puzzleId));
        if (id) this.puzzles.show(id, (solvedId) => this.solvePuzzle(solvedId));
      }
      if (qa && e.key.toLowerCase() === "x" && this.puzzles.active) this.puzzles.solved("验收模式：交互状态与完成回调正常。");
      if (qa && e.key.toLowerCase() === "n" && this.state.phase === "region") {
        if (this.state.currentRegion < REGIONS.length - 1) this.enterRegion(this.state.currentRegion + 1, false); else this.enterAssembly();
      }
      if (/^[1-6]$/.test(e.key) && ["lock", "assembly"].includes(this.state.phase)) {
        this.onLockPart(Number(e.key) - 1, "keyboard");
      }
      if ((e.key === " " || e.key === "Enter") && !this.ui.dialogue.classList.contains("is-hidden")) {
        e.preventDefault(); this.advanceDialogue();
      }
      if ((e.key === "e" || e.key === "Enter") && !this.ui.interaction.classList.contains("is-hidden") && this.ui.dialogue.classList.contains("is-hidden")) {
        e.preventDefault(); this.activateNear();
      }
    });
  }

  buildGlyphs() {
    const wrap = document.getElementById("glyphs");
    wrap.replaceChildren();
    for (let i = 0; i < 8; i += 1) {
      const glyph = document.createElement("span");
      glyph.className = "glyph";
      glyph.setAttribute("aria-label", `第${i + 1}幅纹样`);
      wrap.append(glyph);
    }
    this.glyphEls = [...wrap.children];
  }

  refreshContinue() {
    const saved = localStorage.getItem(SAVE_KEY);
    this.ui.continue.classList.toggle("is-hidden", !saved);
  }

  startNew() {
    localStorage.removeItem(SAVE_KEY);
    this.state = { started: true, phase: "lock", currentRegion: 0, solved: [], openingProgress: [], assemblyProgress: [], sound: true };
    this.paintSound(true);
    this.audio.ensure(); this.audio.setEnabled(true); this.audio.drone(0);
    this.ui.title.classList.remove("active");
    this.ui.ending.classList.add("is-hidden");
    this.ui.hud.classList.remove("is-hidden");
    this.updateGlyphs();
    this.enterLock();
    this.say(INTRO_LINES, () => this.setObjective("拖动空处旋转观察；按住玉面向外拉。四面展开后，才能分离上、下射口。"));
  }

  continueGame() {
    const saved = this.load();
    if (!saved) return this.startNew();
    this.state = { ...this.state, ...saved, started: true, phase: "region" };
    this.paintSound(this.state.sound);
    this.audio.ensure(); this.audio.setEnabled(this.state.sound);
    this.ui.title.classList.remove("active");
    this.ui.ending.classList.add("is-hidden");
    this.ui.hud.classList.remove("is-hidden");
    this.updateGlyphs();
    this.enterRegion(this.state.currentRegion, false);
    this.toast("旅程从保存的神徽继续");
  }

  enterLock() {
    this.state.phase = "lock";
    this.state.openingProgress = [];
    this.ui.region.textContent = "玉琮王 · 外部";
    this.ui.objective.classList.remove("is-hidden");
    this.ui.interaction.classList.add("is-hidden");
    this.world.buildLock(false);
  }

  onLockPart(index) {
    if (this.state.phase === "lock") {
      if (this.state.openingProgress.includes(index)) return;
      const wallsOpen = this.state.openingProgress.filter((i) => i < 4).length;
      if (index >= 4 && wallsOpen < 4) { this.audio.error(); this.world.setLockPart(index, false); this.toast("射口仍被四壁咬合。先展开四个带纹样的立面。"); return; }
      this.world.setLockPart(index, true);
      this.state.openingProgress.push(index);
      this.audio.jade();
      const count = this.state.openingProgress.length;
      this.setObjective(count < 4 ? `器内地貌已显现 ${count}/4 面` : `结构投影已展开 ${count}/6`);
      if (count === 6) {
        window.setTimeout(() => {
          this.say([["结构投影", "四面地貌在中央圆孔中接成一张地图。最先抵达的是水声。"]], () => this.enterRegion(0));
        }, 900);
      }
      return;
    }
    if (this.state.phase === "assembly") {
      if (this.state.assemblyProgress.includes(index)) return;
      const rimsClosed = this.state.assemblyProgress.filter((i) => i >= 4).length;
      if (index < 4 && rimsClosed < 2) { this.audio.error(); this.world.setLockPart(index, true); this.toast("先让上、下射口归位，四壁才有承托。"); return; }
      this.world.setLockPart(index, false);
      this.state.assemblyProgress.push(index);
      this.audio.jade();
      this.setObjective(`结构已归位 ${this.state.assemblyProgress.length}/6`);
      if (this.state.assemblyProgress.length === 6) window.setTimeout(() => this.finish(), 1400);
    }
  }

  enterRegion(index, showChapter = true) {
    this.state.phase = "region";
    this.state.currentRegion = index;
    const region = REGIONS[index];
    this.ui.region.textContent = region.name;
    this.setObjective(region.objective);
    this.world.buildRegion(index, this.state.solved);
    this.audio.drone(index);
    if (showChapter) this.showChapter(region);
    this.save();
  }

  showChapter(region) {
    this.ui.chapterNumber.textContent = region.chapter;
    this.ui.chapterTitle.textContent = region.name;
    this.ui.chapterSubtitle.textContent = region.subtitle;
    this.ui.chapter.classList.remove("is-hidden");
    window.setTimeout(() => this.ui.chapter.classList.add("is-hidden"), 3000);
  }

  onNearChange(id, solved = false) {
    this.nearId = id;
    if (!id || !this.ui.dialogue.classList.contains("is-hidden") || !this.puzzles.panel.classList.contains("is-hidden")) {
      this.ui.interaction.classList.add("is-hidden"); return;
    }
    if (id.startsWith("portal:")) {
      this.ui.interactionLabel.textContent = id === "portal:final" ? "中央之门已经开启" : "前往下一座城域";
      this.ui.interactionAction.textContent = "穿过";
    } else {
      const puzzle = PUZZLES[id];
      this.ui.interactionLabel.textContent = solved ? `${puzzle.title} · 纹样已亮` : puzzle.title;
      this.ui.interactionAction.textContent = solved ? "聆听" : "调查";
    }
    this.ui.interaction.classList.remove("is-hidden");
  }

  activateNear() {
    const id = this.nearId;
    if (!id) return;
    if (id === "portal:next") {
      const next = Math.min(this.state.currentRegion + 1, REGIONS.length - 1);
      this.ui.interaction.classList.add("is-hidden");
      this.enterRegion(next); return;
    }
    if (id === "portal:final") {
      this.ui.interaction.classList.add("is-hidden");
      this.enterAssembly(); return;
    }
    if (this.state.solved.includes(id)) {
      this.audio.jade(); this.toast("这组纹样已经复原，装置仍在安静运转"); return;
    }
    this.ui.interaction.classList.add("is-hidden");
    this.puzzles.show(id, (solvedId) => this.solvePuzzle(solvedId));
  }

  solvePuzzle(id) {
    if (!this.state.solved.includes(id)) this.state.solved.push(id);
    this.world.completePuzzle(id);
    this.updateGlyphs();
    const region = REGIONS[this.state.currentRegion];
    const regionSolved = region.puzzles.every((puzzleId) => this.state.solved.includes(puzzleId));
    if (regionSolved) {
      this.world.revealPortal();
      this.say([[region.name, REGION_COMPLETE_LINES[region.id]]], () => {
        this.setObjective(this.state.currentRegion === REGIONS.length - 1 ? "穿过中央圆孔，把八幅纹样带回器表。" : "这一面已经恢复。沿道路寻找金色门扉。");
      });
    } else {
      const remaining = region.puzzles.find((puzzleId) => !this.state.solved.includes(puzzleId));
      this.setObjective(`第一处装置改变了道路。前往“${PUZZLES[remaining].title}”。`);
    }
    this.save();
  }

  enterAssembly() {
    this.state.phase = "assembly";
    this.state.assemblyProgress = [];
    this.nearId = null;
    this.ui.interaction.classList.add("is-hidden");
    this.ui.region.textContent = "玉琮王 · 归器";
    this.setObjective("先把上、下射口向中心拖回，再让四个带城域的立面归位。" );
    this.world.buildLock(true);
    this.audio.drone(3);
    this.say([
      ["观察记录", "水利、稻作、制玉与城台不再是四段说明，它们已经成为同一座城市的互证。"],
      ["结构投影", "把六个面拖回中央。纹样会留在器表，地貌会退回玉中。"]
    ]);
  }

  finish() {
    this.state.phase = "ending";
    this.audio.stopAmbient(); this.audio.success();
    localStorage.removeItem(SAVE_KEY);
    this.ui.dialogue.classList.add("is-hidden");
    this.ui.hud.classList.add("is-hidden");
    this.ui.objective.classList.add("is-hidden");
    this.ui.interaction.classList.add("is-hidden");
    this.ui.ending.classList.remove("is-hidden");
    this.refreshContinue();
  }

  updateGlyphs() {
    this.glyphEls.forEach((glyph, i) => {
      const lit = Object.values(PUZZLES).some((puzzle) => puzzle.glyph === i && this.state.solved.includes(Object.keys(PUZZLES).find((key) => PUZZLES[key] === puzzle)));
      glyph.classList.toggle("lit", lit);
      glyph.setAttribute("aria-label", `第${i + 1}幅纹样${lit ? "已复原" : "未复原"}`);
    });
  }

  setObjective(text) {
    this.ui.objectiveText.textContent = text;
    this.ui.objective.classList.remove("is-hidden");
  }

  say(lines, callback = null) {
    this.dialogueQueue = [...lines];
    this.dialogueCallback = callback;
    this.ui.interaction.classList.add("is-hidden");
    this.ui.dialogue.classList.remove("is-hidden");
    this.advanceDialogue(true);
  }

  advanceDialogue(initial = false) {
    if (!initial && this.dialogueQueue.length === 0) {
      this.ui.dialogue.classList.add("is-hidden");
      const callback = this.dialogueCallback;
      this.dialogueCallback = null;
      if (callback) callback();
      return;
    }
    const line = this.dialogueQueue.shift();
    if (!line) return this.advanceDialogue(false);
    this.audio.click();
    this.ui.speaker.textContent = line[0];
    this.ui.dialogueText.textContent = line[1];
    this.ui.dialogueNext.textContent = this.dialogueQueue.length ? "继续" : "进入";
  }

  toast(text) {
    this.ui.toast.textContent = text;
    this.ui.toast.classList.remove("is-hidden");
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => this.ui.toast.classList.add("is-hidden"), 2200);
  }

  save() {
    if (!this.state.started || this.state.phase === "ending") return;
    localStorage.setItem(SAVE_KEY, JSON.stringify({ currentRegion: this.state.currentRegion, solved: this.state.solved, sound: this.state.sound }));
    this.refreshContinue();
  }

  load() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (_) { return null; }
  }
}
