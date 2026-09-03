import { PUZZLES } from "./data.js";

const DIRS = [[0,-1,1,4],[1,0,2,8],[0,1,4,1],[-1,0,8,2]];

export class PuzzleSystem {
  constructor(audio) {
    this.audio=audio;this.panel=document.getElementById("puzzle-panel");this.kicker=document.getElementById("puzzle-kicker");this.title=document.getElementById("puzzle-title");this.copy=document.getElementById("puzzle-copy");this.content=document.getElementById("puzzle-content");this.feedback=document.getElementById("puzzle-feedback");this.close=document.getElementById("puzzle-close");
    this.close.addEventListener("click",()=>this.hide());
  }
  show(id,onSolve){const p=PUZZLES[id];if(!p)return;this.active=id;this.onSolve=onSolve;this.kicker.textContent=p.kicker;this.title.textContent=p.title;this.copy.textContent=p.copy;this.feedback.textContent="";this.content.replaceChildren();this.panel.classList.remove("is-hidden");this.render(p.type);}
  hide(){this.panel.classList.add("is-hidden");this.active=null;}
  button(label,cls="puzzle-submit"){const b=document.createElement("button");b.type="button";b.className=cls;b.textContent=label;return b;}
  wrong(msg){this.audio.error();this.feedback.textContent=msg;this.panel.classList.remove("shake");requestAnimationFrame(()=>this.panel.classList.add("shake"));}
  solved(msg){this.audio.success();this.feedback.textContent=msg;this.content.classList.add("solved");this.content.querySelectorAll("button,input,[draggable]").forEach(e=>{e.disabled=true;e.draggable=false;});setTimeout(()=>{const cb=this.onSolve,id=this.active;this.hide();this.content.classList.remove("solved");if(cb)cb(id);},1350);}
  render(type){({pipes:()=>this.pipes(),bridge:()=>this.bridge(),timeline:()=>this.timeline(),cargo:()=>this.cargo(),light:()=>this.light(),drill:()=>this.drill(),map:()=>this.map(),pattern:()=>this.pattern()})[type]();}
  submit(label,fn){const b=this.button(label);b.addEventListener("click",fn);this.content.append(b);return b;}
  note(html){const d=document.createElement("div");d.className="puzzle-note";d.innerHTML=html;this.content.append(d);return d;}
  assist(reveal){const button=this.button("","puzzle-answer-button");button.setAttribute("aria-label","查看答案");button.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10.5 21.5h11M12 25h8M16 3.5a8 8 0 0 0-4.8 14.4c1.2.9 1.8 1.8 1.8 3.1h6c0-1.3.6-2.2 1.8-3.1A8 8 0 0 0 16 3.5Z"/></svg>';button.onclick=()=>{const restore=reveal();this.audio.jade();button.hidden=true;const veil=document.createElement("div");veil.className="puzzle-answer-veil";veil.innerHTML='<span>答案</span><button type="button" aria-label="关闭答案">×</button>';veil.querySelector("button").onclick=()=>{restore?.();veil.remove();button.hidden=false;this.feedback.textContent="";};this.content.append(veil);};this.content.append(button);return button;}

  // 题面直接采用 Simon Tatham《Net》5×5 的公开可复现题面：
  // 5x5:1319827eb3e918b6ae4b1a326。该题经独立枚举仅有一个解。
  // 这里把原描述的方向位转换为本项目的 N/E/S/W 位序，保留原题的初始朝向。
  pipes(){
    const n=5;
    const masks=[2,3,2,6,4,1,11,13,7,3,13,6,2,4,7,9,5,13,8,7,2,5,3,1,9];
    const rotations=Array(n*n).fill(0);let moves=0;
    const board=document.createElement("div");board.className="net-board";board.setAttribute("aria-label","五乘五旋转闸渠网");
    const rotateMask=(mask,r)=>{let out=mask;for(let k=0;k<r;k++)out=((out<<1)&15)|((out>>3)&1);return out;};
    const pathFor=mask=>{let d="";if(mask&1)d+="M50 50V0 ";if(mask&2)d+="M50 50H100 ";if(mask&4)d+="M50 50V100 ";if(mask&8)d+="M50 50H0 ";return d;};
    const buttons=masks.map((mask,i)=>{const b=this.button("","net-tile");b.dataset.i=i;b.innerHTML=`<svg viewBox="0 0 100 100"><path></path><circle cx="50" cy="50" r="8"/></svg>${i===12?'<span class="net-source">水源</span>':''}`;b.onclick=()=>{rotations[i]=(rotations[i]+1)%4;moves++;draw();this.audio.waterTick?.(rotations[i])||this.audio.click();};board.append(b);return b;});
    const state=()=>masks.map((mask,i)=>rotateMask(mask,rotations[i]));
    const connected=now=>{const reached=new Set([12]),q=[12];while(q.length){const i=q.shift(),x=i%n,y=Math.floor(i/n);for(const [dx,dy,bit,back] of DIRS){const nx=x+dx,ny=y+dy,ni=ny*n+nx;if(nx<0||nx>=n||ny<0||ny>=n||!(now[i]&bit)||!(now[ni]&back)||reached.has(ni))continue;reached.add(ni);q.push(ni);}}return reached;};
    const valid=now=>{for(let i=0;i<now.length;i++){const x=i%n,y=Math.floor(i/n);for(const [dx,dy,bit,back] of DIRS){if(!(now[i]&bit))continue;const nx=x+dx,ny=y+dy;if(nx<0||nx>=n||ny<0||ny>=n||!(now[ny*n+nx]&back))return false;}}return connected(now).size===n*n;};
    const meta=this.note('<span>亮起 <b class="net-count">1/25</b></span><span>转动 <b class="move-count">0</b> 次</span><span>Net 题面 · 无漏口 · 全连通</span>');
    const draw=()=>{const now=state(),reached=connected(now);buttons.forEach((b,i)=>{b.querySelector("path").setAttribute("d",pathFor(now[i]));b.classList.toggle("powered",reached.has(i));});meta.querySelector(".net-count").textContent=`${reached.size}/25`;meta.querySelector(".move-count").textContent=moves;};
    this.content.append(board);draw();this.assist(()=>{const before=[...rotations];[0,2,1,0,1,2,1,1,3,2,2,2,1,3,2,1,1,0,2,2,0,1,3,1,0].forEach((v,i)=>rotations[i]=v);draw();return()=>{before.forEach((v,i)=>rotations[i]=v);draw();};});this.submit("提闸验水",()=>valid(state())?this.solved(`二十五段闸渠成为一张无漏口的水网，共转动 ${moves} 次。`):this.wrong("仍有水线撞上木壁，或有一片渠网没有从中央水源亮起。先处理边角，再向内推。"));
  }

  // 采用公开的 7×7 Hashiwokakero 练习题（Code Golf 4790 的小题面）。
  // 不预画候选水道：玩家自己从岛的横、纵视线中找出可架桥的对象。
  bridge(){
    const nodes=[
      {id:"a",c:0,r:0,n:2},{id:"b",c:2,r:0,n:2},{id:"c",c:5,r:0,n:1},
      {id:"d",c:1,r:1,n:1},{id:"e",c:4,r:1,n:4},{id:"f",c:6,r:1,n:3},
      {id:"g",c:0,r:2,n:3},{id:"h",c:3,r:2,n:2},{id:"i",c:4,r:3,n:4},
      {id:"j",c:1,r:4,n:3},{id:"k",c:3,r:4,n:2},{id:"l",c:6,r:4,n:3},
      {id:"m",c:0,r:5,n:1},{id:"n",c:1,r:6,n:3},{id:"o",c:4,r:6,n:4},{id:"p",c:6,r:6,n:2}
    ];
    const visible=(a,b)=>{if(a.c!==b.c&&a.r!==b.r)return false;return !nodes.some(n=>n!==a&&n!==b&&(a.c===b.c?n.c===a.c&&n.r>Math.min(a.r,b.r)&&n.r<Math.max(a.r,b.r):n.r===a.r&&n.c>Math.min(a.c,b.c)&&n.c<Math.max(a.c,b.c)));};
    const pairs=nodes.flatMap((a,i)=>nodes.slice(i+1).filter(b=>visible(a,b)).map(b=>[a.id,b.id]));
    const counts=Array(pairs.length).fill(0),pos=n=>({x:9+n.c*82/6,y:9+n.r*82/6});let selected=null;
    const stage=document.createElement("div");stage.className="hashi-board";
    const edgeEls=pairs.map(([a,b])=>{const p=pos(nodes.find(n=>n.id===a)),q=pos(nodes.find(n=>n.id===b)),el=document.createElement("div");el.className="hashi-edge";const vertical=p.x===q.x,len=vertical?Math.abs(q.y-p.y):Math.abs(q.x-p.x);Object.assign(el.style,{left:`${Math.min(p.x,q.x)}%`,top:`${Math.min(p.y,q.y)}%`,width:vertical?'18px':`${len}%`,height:vertical?`${len}%`:'18px'});el.classList.toggle("vertical",vertical);stage.append(el);return el;});
    const pairIndex=(a,b)=>pairs.findIndex(p=>p.includes(a)&&p.includes(b));
    const nodeEls=nodes.map(p=>{const at=pos(p),el=document.createElement("button");el.type="button";el.className="hashi-island";el.style.left=`${at.x}%`;el.style.top=`${at.y}%`;el.innerHTML=`<b>${p.n}</b><small>0</small>`;el.setAttribute("aria-label",`桥数为${p.n}的洲岛`);el.onclick=()=>{if(!selected||selected===p.id){selected=selected===p.id?null:p.id;draw();this.audio.click();return;}const i=pairIndex(selected,p.id);if(i>=0){counts[i]=(counts[i]+1)%3;selected=null;draw();this.audio.click();}else{selected=p.id;draw();this.audio.click();}};stage.append(el);return el;});
    const totals=()=>Object.fromEntries(nodes.map(n=>[n.id,pairs.reduce((s,e,i)=>s+(e.includes(n.id)?counts[i]:0),0)]));
    const crosses=(a,b)=>{const [a1,a2]=pairs[a].map(id=>nodes.find(n=>n.id===id)),[b1,b2]=pairs[b].map(id=>nodes.find(n=>n.id===id));const av=a1.c===a2.c,bv=b1.c===b2.c;if(av===bv)return false;const v=av?[a1,a2]:[b1,b2],h=av?[b1,b2]:[a1,a2];return v[0].c>Math.min(h[0].c,h[1].c)&&v[0].c<Math.max(h[0].c,h[1].c)&&h[0].r>Math.min(v[0].r,v[1].r)&&h[0].r<Math.max(v[0].r,v[1].r);};
    const hasCrossing=()=>counts.some((n,i)=>n&&counts.some((m,j)=>m&&i<j&&crosses(i,j)));
    const draw=()=>{const t=totals();edgeEls.forEach((e,i)=>{e.dataset.bridges=counts[i];e.classList.toggle("crossing",counts[i]&&counts.some((m,j)=>m&&j!==i&&crosses(i,j)));e.setAttribute("aria-label",`${pairs[i].join("到")}：${counts[i]}座桥`);});nodeEls.forEach((el,i)=>{el.querySelector("small").textContent=t[nodes[i].id];el.classList.toggle("exact",t[nodes[i].id]===nodes[i].n);el.classList.toggle("over",t[nodes[i].id]>nodes[i].n);el.classList.toggle("selected",nodes[i].id===selected);});};
    this.note("<span>先点一座岛，再点同横列或同竖列、之间没有别岛的目标岛</span><span>重复连接：无桥 → 单桥 → 双桥 → 无桥</span><span>大字是目标桥数；桥不能相交，全部洲岛必须连通</span>");this.content.append(stage);draw();this.assist(()=>{const before=[...counts],oldSelected=selected,answer={"a-b":1,"b-c":1,"a-g":1,"d-e":1,"e-f":1,"e-i":2,"f-l":2,"g-h":1,"g-m":1,"h-k":1,"d-j":0,"j-k":1,"j-n":2,"i-o":2,"l-p":1,"n-o":1,"o-p":1};pairs.forEach((p,i)=>counts[i]=answer[p.join("-")]??answer[[...p].reverse().join("-")]??0);selected=null;draw();return()=>{before.forEach((v,i)=>counts[i]=v);selected=oldSelected;draw();};});
    this.submit("放行渡河",()=>{const t=totals();if(hasCrossing())return this.wrong("两条桥在水面中央相交了；桥只能在洲岛上会合。红色河道需要先撤回。");if(nodes.some(n=>t[n.id]!==n.n))return this.wrong("仍有洲岛的桥数没有等于岛上的大字。红色小字表示已经超出。");const reach=new Set(['a']),q=['a'];while(q.length){const id=q.shift();pairs.forEach((e,i)=>{if(!counts[i]||!e.includes(id))return;const other=e[0]===id?e[1]:e[0];if(!reach.has(other)){reach.add(other);q.push(other);}});}return reach.size===nodes.length?this.solved("十五座洲岛的桥数都吻合，整片水网也终于可以往返。") : this.wrong("数字都吻合了，但桥群仍分成几片；必须保留一条通往所有洲岛的水上道路。")});
  }

  sequenceBoard(items){
    const bank=document.createElement("div");bank.className="sequence-bank";const row=document.createElement("div");row.className="sequence-row";const slots=[];
    for(let i=0;i<items.length;i++){const s=document.createElement("div");s.className="sequence-slot";s.innerHTML=`<span>${i+1}</span>`;row.append(s);slots.push(s);}
    items.forEach(item=>{const b=this.button(item.label,"sequence-piece");b.dataset.id=item.id;b.draggable=true;bank.append(b);b.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",item.id));b.onclick=()=>{if(b.parentElement===bank){const empty=slots.find(s=>!s.querySelector(".sequence-piece"));if(empty)empty.append(b);}else bank.append(b);this.audio.click();};});
    [...slots,bank].forEach(zone=>{zone.addEventListener("dragover",e=>e.preventDefault());zone.addEventListener("drop",e=>{e.preventDefault();const b=this.content.querySelector(`.sequence-piece[data-id="${e.dataTransfer.getData("text/plain")}"]`);if(!b)return;if(zone!==bank){const old=zone.querySelector(".sequence-piece");if(old)bank.append(old);}zone.append(b);this.audio.click();});});
    const wrap=document.createElement("div");wrap.className="sequence-wrap";wrap.append(bank,row);this.content.append(wrap);const get=()=>slots.map(s=>s.querySelector(".sequence-piece")?.dataset.id||null);get.set=order=>{this.content.querySelectorAll(".sequence-piece").forEach(p=>bank.append(p));order.forEach((id,i)=>{if(id)slots[i].append(this.content.querySelector(`.sequence-piece[data-id="${id}"]`));});};return get;
  }
  timeline(){
    this.note("<span>西田收割早于东田；两田都收完才可脱粒</span><span>扬场紧接脱粒</span><span>东田收割与晒谷之间恰好隔两道工序</span><span>装篓在晒谷之后，且紧接水运</span><span>入仓是最后一步</span>");
    const target=["west","east","thresh","winnow","dry","pack","ferry","store"],get=this.sequenceBoard([{id:"pack",label:"▦ 装篓"},{id:"east",label:"东田收割"},{id:"store",label:"▣ 入仓"},{id:"winnow",label:"⌁ 扬场"},{id:"west",label:"西田收割"},{id:"ferry",label:"≈ 水运"},{id:"dry",label:"☀ 晒谷"},{id:"thresh",label:"✣ 脱粒"}]);
    this.assist(()=>{const before=get();get.set(target);return()=>get.set(before);});
    this.submit("推演雨线",()=>{const a=get();if(a.some(v=>!v))return this.wrong("八个时刻还没有排满。点木牌可收回，再拖到想要的位置。");return a.every((v,i)=>v===target[i])?this.solved("收割、脱粒、扬场、晒谷与水运互相咬合，最后一筐谷物赶在雨线前入仓。") : this.wrong("至少有一条现场线索被破坏。先把两个相邻组合当成整体，再利用东田与晒谷的间距定位。")});
  }

  allocationBoard(items,boats){
    const bank=document.createElement("div");bank.className="cargo-bank";const docks=document.createElement("div");docks.className="cargo-docks";const zones={bank};
    boats.forEach(b=>{const z=document.createElement("div");z.className="cargo-boat";z.dataset.id=b.id;z.innerHTML=`<header><b>${b.label}</b><span>0 / ${b.cap}</span></header><div></div>`;docks.append(z);zones[b.id]=z.querySelector("div");});
    const update=()=>boats.forEach(b=>{const used=[...zones[b.id].querySelectorAll(".cargo-piece")].reduce((s,p)=>s+Number(p.dataset.weight),0),boat=zones[b.id].parentElement;boat.querySelector("header span").textContent=`${used} / ${b.cap}`;boat.classList.toggle("over",used>b.cap);});
    items.forEach(it=>{const p=this.button(`${it.label} · ${it.weight}`,"cargo-piece");p.dataset.id=it.id;p.dataset.weight=it.weight;p.draggable=true;bank.append(p);p.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",it.id));p.onclick=()=>{const order=[bank,...boats.map(b=>zones[b.id])],next=order[(order.indexOf(p.parentElement)+1)%order.length];next.append(p);update();this.audio.click();};});
    [bank,...boats.map(b=>zones[b.id])].forEach(z=>{z.addEventListener("dragover",e=>e.preventDefault());z.addEventListener("drop",e=>{e.preventDefault();const p=this.content.querySelector(`.cargo-piece[data-id="${e.dataTransfer.getData("text/plain")}"]`);if(p){z.append(p);update();this.audio.click();}});});
    const wrap=document.createElement("div");wrap.className="cargo-layout";wrap.append(bank,docks);this.content.append(wrap);update();const get=()=>Object.fromEntries(boats.map(b=>[b.id,[...zones[b.id].querySelectorAll(".cargo-piece")].map(p=>p.dataset.id)]));get.set=groups=>{this.content.querySelectorAll(".cargo-piece").forEach(p=>bank.append(p));Object.entries(groups).forEach(([id,list])=>list.forEach(item=>zones[id].append(this.content.querySelector(`.cargo-piece[data-id="${item}"]`))));update();};return get;
  }
  cargo(){
    this.note("<span>四条船都恰好载 5 格；容量不再告诉你该选哪条水道</span><span>鲜鱼只能走渔汊，必须垫芦苇；漆桶不可与谷物同舟</span><span>采料木排是唯一能入玉坑的船：玉料须和细砂、石钻一起回程</span><span>木料只能走仓前大舟，系缆必须随木料；贝片不可接触细砂</span><span>种谷必须随稻谷，竹篓不可离开谷物；陶器不能上渔汊、木排或大舟</span>");
    const items=[{id:"fish",label:"鲜鱼",weight:2},{id:"reed",label:"芦苇",weight:1},{id:"lacquer",label:"漆桶",weight:2},{id:"jade",label:"玉料",weight:2},{id:"sand",label:"细砂",weight:2},{id:"tools",label:"石钻",weight:1},{id:"timber",label:"木料",weight:3},{id:"rope",label:"系缆",weight:1},{id:"shell",label:"贝片",weight:1},{id:"rice",label:"稻谷",weight:2},{id:"seed",label:"种谷",weight:1},{id:"basket",label:"竹篓",weight:1},{id:"pot",label:"陶器",weight:1}],boats=[{id:"canoe",label:"渔汊独木舟",cap:5},{id:"raft",label:"采料木排",cap:5},{id:"big",label:"仓前大舟",cap:5},{id:"small",label:"内河平底船",cap:5}],get=this.allocationBoard(items,boats);
    this.assist(()=>{const before=get();get.set({canoe:["fish","reed","lacquer"],raft:["jade","sand","tools"],big:["timber","rope","shell"],small:["rice","seed","basket","pot"]});return()=>get.set(before);});
    this.submit("等待同一潮次",()=>{const a=get(),where=id=>Object.keys(a).find(k=>a[k].includes(id)),all=Object.values(a).flat(),same=(...ids)=>ids.every(id=>where(id)===where(ids[0]));if(all.length<items.length)return this.wrong("还有物资留在岸上；这一潮所有货物都必须离岸。");if(boats.some(b=>a[b.id].reduce((s,id)=>s+items.find(i=>i.id===id).weight,0)!==b.cap))return this.wrong("四条船的吃水都要刚好到线：既不能超载，也不能空出一格。");const ok=where("fish")==="canoe"&&same("fish","reed")&&where("lacquer")!==where("rice")&&where("jade")==="raft"&&same("jade","sand","tools")&&where("timber")==="big"&&same("timber","rope")&&where("shell")!==where("sand")&&same("rice","seed","basket")&&where("pot")==="small";return ok?this.solved("四条水路同时离岸：这次靠的是水道、货性与装载关系，而不是把重量逐格对上。") : this.wrong("有一条货性或水道线索还没有满足。先锁定只能走某条水道的货物，再用同舟与避让条件收束剩余位置。")});
  }

  light(){
    // Nikoli 的 Light Up / Akari：6×6 题面经穷举灯位确认只有一个完成状态。
    // 深色玉料更密，零与一的局部约束会迫使玩家同时观察多条受光通道。
    const n=6,walls=new Map([[28,2],[0,1],[33,1],[11,1],[5,0],[30,1],[13,0],[27,0],[16,1],[26,1],[17,0],[19,1],[7,1],[24,0]]),bulbs=new Set(),cells=[];
    const board=document.createElement("div");board.className="akari-board";board.style.setProperty("--n",n);board.setAttribute("aria-label","制玉看料灯阵");
    const at=(r,c)=>r*n+c,inBounds=(r,c)=>r>=0&&r<n&&c>=0&&c<n;
    const rays=i=>{const r=Math.floor(i/n),c=i%n,out=[i];for(const [dr,dc] of [[1,0],[-1,0],[0,1],[0,-1]])for(let y=r+dr,x=c+dc;inBounds(y,x);y+=dr,x+=dc){const j=at(y,x);if(walls.has(j))break;out.push(j);}return out;};
    for(let i=0;i<n*n;i++){
      const b=this.button("","akari-cell");b.dataset.i=i;
      if(walls.has(i)){b.classList.add("stone");b.disabled=true;b.textContent=walls.get(i)??"";b.setAttribute("aria-label",walls.get(i)==null?"不透光玉料":"相邻需放置"+walls.get(i)+"盏灯");}
      else{b.setAttribute("aria-label",`第${Math.floor(i/n)+1}行第${i%n+1}列灯位`);b.onclick=()=>{bulbs.has(i)?bulbs.delete(i):bulbs.add(i);draw();this.audio.jade();};}
      board.append(b);cells.push(b);
    }
    const lit=()=>{const all=new Set();bulbs.forEach(i=>rays(i).forEach(j=>all.add(j)));return all;};
    const clash=i=>[...bulbs].some(j=>j!==i&&rays(i).includes(j));
    const clueCount=i=>{const r=Math.floor(i/n),c=i%n;return [[1,0],[-1,0],[0,1],[0,-1]].filter(([dr,dc])=>inBounds(r+dr,c+dc)&&bulbs.has(at(r+dr,c+dc))).length;};
    const draw=()=>{const glow=lit();cells.forEach((b,i)=>{if(walls.has(i)){const wanted=walls.get(i);b.classList.toggle("exact",wanted!=null&&clueCount(i)===wanted);b.classList.toggle("over",wanted!=null&&clueCount(i)>wanted);return;}b.classList.toggle("lit",glow.has(i));b.classList.toggle("bulb",bulbs.has(i));b.classList.toggle("clash",bulbs.has(i)&&clash(i));b.textContent=bulbs.has(i)?"✦":"";});status.querySelector("b").textContent=`${glow.size}/${n*n-walls.size}`;};
    const status=this.note('<span>照亮 <b>0/22</b> 块玉料</span><span>点格放灯；灯不能互照，数字石旁必须恰有对应盏数</span>');this.content.append(board);draw();this.assist(()=>{const before=[...bulbs];bulbs.clear();[3,6,10,20,29,31,34].forEach(i=>bulbs.add(i));draw();return()=>{bulbs.clear();before.forEach(i=>bulbs.add(i));draw();};});
    this.submit("复核灯阵",()=>{const glow=lit(),allLit=[...Array(n*n).keys()].every(i=>walls.has(i)||glow.has(i)),numbers=[...walls].every(([i,v])=>v==null||clueCount(i)===v),safe=[...bulbs].every(i=>!clash(i));return allLit&&numbers&&safe?this.solved("灯火沿玉料纹理铺开：每一处都被照亮，没有两盏灯互相夺光。") : this.wrong("还不能定稿：所有空格都要受光，灯之间不能直视，数字石四周的灯数也要正好吻合。")});
  }

  drill(){
    // 推钻芯：不是在纸面填满符号，而是在断面中实际把三枚钻芯推入对应孔位。
    const rows=["#######","#  .  #","#  $  #","# $$# #","# . @ #","#   . #","#######"],h=rows.length,w=rows[0].length,wall=new Set(),targets=new Set();let player=0,stones=[];
    rows.forEach((row,y)=>[...row].forEach((ch,x)=>{const i=y*w+x;if(ch==="#")wall.add(i);if(ch===".")targets.add(i);if(ch==="$")stones.push(i);if(ch==="@")player=i;}));
    const board=document.createElement("div");board.className="core-board";board.style.setProperty("--n",w);const cells=[];
    const icon=i=>stones.includes(i)?"◆":i===player?"●":"";
    const draw=()=>cells.forEach((cell,i)=>{cell.textContent=icon(i);cell.classList.toggle("wall",wall.has(i));cell.classList.toggle("target",targets.has(i));cell.classList.toggle("stone",stones.includes(i));cell.classList.toggle("worker",i===player);});
    const move=(dx,dy)=>{const x=player%w+dx,y=Math.floor(player/w)+dy,next=y*w+x;if(wall.has(next))return;const at=stones.indexOf(next);if(at>=0){const beyond=(y+dy)*w+x+dx;if(wall.has(beyond)||stones.includes(beyond))return;stones[at]=beyond;}player=next;draw();this.audio.jade();};
    for(let i=0;i<w*h;i++){const b=this.button("","core-cell");b.setAttribute("aria-label",`断面坐标 ${Math.floor(i/w)+1}-${i%w+1}`);if(!wall.has(i))b.onclick=()=>{const x=i%w-player%w,y=Math.floor(i/w)-Math.floor(player/w);if(Math.abs(x)+Math.abs(y)===1)move(x,y);};board.append(b);cells.push(b);}
    const controls=document.createElement("div");controls.className="core-controls";[[0,-1,"↑"],[-1,0,"←"],[0,1,"↓"],[1,0,"→"]].forEach(([x,y,label])=>{const b=this.button(label,"core-control");b.onclick=()=>move(x,y);controls.append(b);});
    const won=()=>stones.every(i=>targets.has(i));this.note("<span>推动工人相邻的钻芯；钻芯只能推、不能拉</span><span>把三枚钻芯分别送入发光孔位</span><span>可点相邻格，也可用方向键式按钮移动</span>");this.content.append(board,controls);draw();this.assist(()=>{const before={player,stones:[...stones]};stones=[...targets];draw();return()=>{player=before.player;stones=[...before.stones];draw();};});
    this.submit("校准三孔",()=>won()?this.solved("三枚钻芯都在断面中归位；这次不是算出一条线，而是亲手腾挪出了三条对钻孔道。 "):this.wrong("还有钻芯没有入孔。注意别把它推到墙角；先为最上方孔位留出转身空间。"));
  }

  map(){
    // 10×10 数织：不再以对称外轮廓直接送出答案，而是要求行、列交叉推导出城台夯层与探沟。
    const target=[[1,1,1,1,1,0,1,1,0,1],[0,0,1,1,1,1,1,0,0,0],[1,1,0,1,1,1,0,0,0,1],[0,0,0,1,0,0,0,0,0,0],[0,1,0,0,1,1,0,1,1,1],[0,1,0,1,1,1,0,1,1,1],[0,1,1,0,1,1,0,0,0,0],[1,1,1,1,0,1,0,1,1,1],[1,0,1,1,1,0,0,0,1,1],[1,0,1,1,1,0,1,1,1,1]],rows=['5·2·1','5','2·3·1','1','1·2·3','1·3·3','2·2','4·1·3','1·3·2','1·3·4'],cols=['1·1·3','1·1·4','2·4','4·1·3','3·3·2','2·4','2·1','1·2·1·1','2·3','1·1·2·3'];
    const grid=document.createElement("div");grid.className="nonogram";grid.style.setProperty('--n',target.length);grid.innerHTML=`<div></div>${cols.map(c=>`<b class="col-clue">${c}</b>`).join("")}${target.map((row,y)=>`<b class="row-clue">${rows[y]}</b>${row.map((_,x)=>`<button type="button" class="dig-cell" data-x="${x}" data-y="${y}" aria-label="第${y+1}行第${x+1}格"></button>`).join("")}`).join("")}`;
    this.note("<span>数字表示该行或列中连续夯土块的长度</span><span>“2·1”表示两块连续夯土、留空后再一块</span><span>从长度接近整行的夯层开始，再用列线索切开探沟</span>");this.content.append(grid);grid.querySelectorAll(".dig-cell").forEach(c=>c.onclick=()=>{c.classList.toggle("filled");this.audio.click();});this.assist(()=>{const cells=[...grid.querySelectorAll(".dig-cell")],before=cells.map(c=>c.classList.contains("filled"));cells.forEach(c=>c.classList.toggle("filled",!!target[+c.dataset.y][+c.dataset.x]));return()=>cells.forEach((c,i)=>c.classList.toggle("filled",before[i]));});
    this.submit("核对夯土边界",()=>{const ok=[...grid.querySelectorAll(".dig-cell")].every(c=>c.classList.contains("filled")===!!target[+c.dataset.y][+c.dataset.x]);return ok?this.solved("一百个探方连成错落夯层与探沟，零散土色终于显出了城台基址。") : this.wrong("某一行或列的连续段长度还不吻合。先固定长夯层，再让列线索决定它们之间的探沟。")});
  }

  pattern(){
    // 经典 Fifteen 的 3×3 变体；初始局面由 20 次合法滑动得到，保证必定可复原。
    let tiles=[1,4,8,7,3,5,6,2,0],moves=0;const board=document.createElement("div");board.className="motif-slide";
    const art=id=>{const r=Math.floor((id-1)/3),c=(id-1)%3;return `<svg viewBox="${c*100} ${r*100} 100 100"><path class="crest" d="M8 105Q55 8 102 105M48 108Q104 2 155 108M105 110Q151 0 200 110M155 108Q205 2 252 108M198 105Q246 8 292 105"/><path class="face" d="M105 78Q150 40 195 78L187 152Q150 184 113 152Z"/><circle class="human-eye" cx="132" cy="111" r="11"/><circle class="human-eye" cx="168" cy="111" r="11"/><path class="beast" d="M8 274Q48 192 105 225Q150 270 195 225Q252 192 292 274"/><circle class="beast-eye" cx="75" cy="245" r="45"/><circle class="beast-eye" cx="225" cy="245" r="45"/><circle class="beast-pupil" cx="75" cy="245" r="12"/><circle class="beast-pupil" cx="225" cy="245" r="12"/><path class="fang" d="M130 246L150 289L170 246"/></svg>`};
    const solved=()=>tiles.every((v,i)=>v===(i===8?0:i+1));
    const draw=()=>{board.replaceChildren();tiles.forEach((id,i)=>{const b=this.button("","motif-slide-tile");if(!id){b.classList.add("gap");b.disabled=true;b.setAttribute("aria-label","空槽");}else{b.dataset.tile=id;b.setAttribute("aria-label",`第${id}块拓片`);b.innerHTML=art(id);b.onclick=()=>{const gap=tiles.indexOf(0),d=Math.abs(gap-i);if(!(d===1&&Math.floor(gap/3)===Math.floor(i/3)||d===3))return this.wrong("只有与空槽相邻的拓片能滑入空位。先利用空槽逐步移动。 ");[tiles[gap],tiles[i]]=[tiles[i],tiles[gap]];moves++;draw();this.audio.jade();};}board.append(b);});meta.querySelector("b").textContent=moves;};
    const meta=this.note('<span>点击与空槽相邻的拓片滑动</span><span>已移动 <b>0</b> 次</span><span>让羽冠在上、兽面重圈眼在下，复原完整神徽</span>');this.content.append(board);draw();this.assist(()=>{const before=[...tiles];tiles=[1,2,3,4,5,6,7,8,0];draw();return()=>{tiles=before;draw();};});
    this.submit("合拢微雕拓片",()=>solved()?this.solved(`九块拓片重新嵌合，羽冠、神人面与兽面在同一中轴复原，共移动 ${moves} 次。`):this.wrong("神徽还没有连续。先固定最上层羽冠，再借空槽由下往上整理兽面与下颌。"));
  }
}
