export class AudioSystem {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.enabled = true;
    this.ambientNodes = [];
  }

  ensure() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.22;
    this.master.connect(this.ctx.destination);
  }

  setEnabled(value) {
    this.enabled = value;
    if (this.master) this.master.gain.setTargetAtTime(value ? 0.22 : 0, this.ctx.currentTime, 0.05);
  }

  tone(freq = 440, duration = .2, type = "sine", volume = .18, delay = 0) {
    if (!this.enabled) return;
    this.ensure();
    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + .018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain).connect(this.master);
    osc.start(now);
    osc.stop(now + duration + .03);
  }

  jade() {
    this.tone(740, .55, "sine", .14);
    this.tone(1120, .4, "sine", .07, .05);
    this.tone(380, .7, "triangle", .06, .02);
  }

  click() { this.tone(280, .1, "triangle", .08); }
  error() { this.tone(120, .22, "sawtooth", .06); }
  success() {
    [392, 523, 659, 784].forEach((f, i) => this.tone(f, .65, "sine", .09, i * .08));
  }

  water() {
    if (!this.enabled) return;
    this.ensure();
    this.stopAmbient();
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < bufferSize; i += 1) {
      const white = Math.random() * 2 - 1;
      last = last * .985 + white * .015;
      data[i] = last * .55;
    }
    const src = this.ctx.createBufferSource();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    src.buffer = buffer;
    src.loop = true;
    filter.type = "lowpass";
    filter.frequency.value = 620;
    gain.gain.value = .16;
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    this.ambientNodes.push(src, gain);
  }

  drone(region = 0) {
    if (!this.enabled) return;
    this.ensure();
    this.stopAmbient();
    const base = [98, 110, 123, 92][region] || 98;
    [base, base * 1.5].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i ? "sine" : "triangle";
      osc.frequency.value = freq;
      gain.gain.value = i ? .035 : .05;
      osc.connect(gain).connect(this.master);
      osc.start();
      this.ambientNodes.push(osc, gain);
    });
  }

  stopAmbient() {
    for (const node of this.ambientNodes) {
      try { if (node.stop) node.stop(); } catch (_) { /* already stopped */ }
      try { node.disconnect(); } catch (_) { /* already disconnected */ }
    }
    this.ambientNodes = [];
  }
}
