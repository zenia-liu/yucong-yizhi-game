import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { REGIONS } from "./data.js";

const C={ink:0x202a27,jade:0x718e78,jadeDark:0x365446,jadeLight:0xa6bda0,gold:0xd4b66f,wood:0x76543c,earth:0x9d8c6b,water:0x55a4b2,cream:0xe7dfc5};

export class World{
  constructor(canvas,callbacks={}){
    this.canvas=canvas;this.callbacks=callbacks;
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:"high-performance"});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.08;
    this.scene=new THREE.Scene();this.camera=new THREE.OrthographicCamera(-9,9,6,-6,.1,120);this.clock=new THREE.Clock();
    this.root=new THREE.Group();this.scene.add(this.root);this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();
    this.interactables=[];this.walkSurfaces=[];this.walkZones=[];this.obstacles=[];this.floaters=[];this.waterMeshes=[];this.lockParts=[];this.gates={};this.playerPath=[];
    this.drag={active:false,moved:false,x:0,y:0,part:null,amount:0};this.keys=new Set();
    this.addLights();this.resize();this.buildTitle();this.animate();
    addEventListener("resize",()=>this.resize());addEventListener("keydown",e=>this.keys.add(e.key.toLowerCase()));addEventListener("keyup",e=>this.keys.delete(e.key.toLowerCase()));
    canvas.addEventListener("pointerdown",e=>this.pointerDown(e));canvas.addEventListener("pointermove",e=>this.pointerMove(e));canvas.addEventListener("pointerup",e=>this.pointerUp(e));
  }
  addLights(){
    this.scene.add(new THREE.HemisphereLight(0xf1ead4,0x384640,2.5));
    const sun=new THREE.DirectionalLight(0xfff1cc,4.1);sun.position.set(-10,18,11);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-20,right:20,top:20,bottom:-20});this.scene.add(sun);
    const fill=new THREE.DirectionalLight(0x9ac4ca,1.1);fill.position.set(12,8,-8);this.scene.add(fill);
  }
  resize(){const w=this.canvas.clientWidth||innerWidth,h=this.canvas.clientHeight||innerHeight,a=w/h,v=a<1?7.4:6.35;Object.assign(this.camera,{left:-v*a,right:v*a,top:v,bottom:-v});this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);}
  clearRoot(){
    this.root.traverse(o=>{o.geometry?.dispose();if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());});
    this.scene.remove(this.root);this.root=new THREE.Group();this.scene.add(this.root);this.interactables=[];this.walkSurfaces=[];this.walkZones=[];this.obstacles=[];this.floaters=[];this.waterMeshes=[];this.lockParts=[];this.gates={};this.player=null;this.nearId=null;this.playerPath=[];
  }
  mat(color,opt={}){return new THREE.MeshStandardMaterial({color,roughness:.76,metalness:0,...opt});}
  jade(emissive=0x07140f){return new THREE.MeshPhysicalMaterial({color:C.jade,roughness:.43,metalness:0,clearcoat:.28,clearcoatRoughness:.5,transmission:.025,thickness:1.3,emissive,emissiveIntensity:.12});}
  edged(mesh,color=C.ink,opacity=.22,angle=35){const e=new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,angle),new THREE.LineBasicMaterial({color,transparent:true,opacity}));mesh.add(e);return mesh;}
  mesh(geo,color,opt={}){const m=new THREE.Mesh(geo,this.mat(color,opt));m.castShadow=true;m.receiveShadow=true;return m;}
  buildTitle(){
    this.clearRoot();this.mode="title";this.scene.background=new THREE.Color(0x162521);this.scene.fog=new THREE.FogExp2(0x162521,.02);this.camera.position.set(8,7,10);this.camera.lookAt(0,0,0);
    const plinth=this.edged(this.mesh(new THREE.CylinderGeometry(4.1,4.5,.45,48),0x2d3833));plinth.position.y=-2.35;this.root.add(plinth);
    this.createCong(false,true);const halo=new THREE.Mesh(new THREE.TorusGeometry(3.65,.018,8,120),new THREE.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.35}));halo.rotation.x=Math.PI/2;halo.position.y=-2.08;this.root.add(halo);this.floaters.push({mesh:halo,rotate:.06});
  }
  frameGeometry(size=6.25,hole=1.05,depth=.35){
    const s=size/2,r=.32,sh=new THREE.Shape();sh.moveTo(-s+r,-s);sh.lineTo(s-r,-s);sh.quadraticCurveTo(s,-s,s,-s+r);sh.lineTo(s,s-r);sh.quadraticCurveTo(s,s,s-r,s);sh.lineTo(-s+r,s);sh.quadraticCurveTo(-s,s,-s,s-r);sh.lineTo(-s,-s+r);sh.quadraticCurveTo(-s,-s,-s+r,-s);sh.closePath();
    const p=new THREE.Path();p.absarc(0,0,hole,0,Math.PI*2,true);sh.holes.push(p);return new THREE.ExtrudeGeometry(sh,{depth,bevelEnabled:true,bevelSize:.07,bevelThickness:.06,bevelSegments:3,curveSegments:36});
  }
  createCong(exploded=false,decorative=false){
    this.lockGroup=new THREE.Group();this.lockGroup.rotation.y=.55;this.root.add(this.lockGroup);
    const defs=[
      {id:"north",order:0,axis:"z",sign:-1,pos:[0,0,-2.82],out:[0,0,-5.7]},
      {id:"east",order:1,axis:"x",sign:1,pos:[2.82,0,0],out:[5.7,0,0]},
      {id:"south",order:2,axis:"z",sign:1,pos:[0,0,2.82],out:[0,0,5.7]},
      {id:"west",order:3,axis:"x",sign:-1,pos:[-2.82,0,0],out:[-5.7,0,0]},
      {id:"top",order:4,axis:"y",sign:1,pos:[0,1.62,0],out:[0,5.3,0]},
      {id:"bottom",order:5,axis:"y",sign:-1,pos:[0,-1.62,0],out:[0,-5.3,0]}
    ];
    defs.forEach((d,i)=>{
      const g=new THREE.Group();g.position.set(...d.pos);let body;
      if(d.axis==="y"){body=this.edged(new THREE.Mesh(this.frameGeometry(),this.jade()),0x28463a,.34);body.rotation.x=Math.PI/2;body.position.y=d.id==="top"?-.18:.18;}
      else{const geo=d.axis==="z"?new RoundedBoxGeometry(5.7,2.9,.55,5,.14):new RoundedBoxGeometry(.55,2.9,5.7,5,.14);body=this.edged(new THREE.Mesh(geo,this.jade()),0x28463a,.32);this.addCongPattern(g,d);this.addInteriorRelief(g,d,i);}
      body.castShadow=true;body.receiveShadow=true;body.userData.parentPart=g;g.add(body);
      g.userData={...g.userData,id:d.id,order:d.order,home:g.position.clone(),out:new THREE.Vector3(...d.out),extracted:exploded,lockPart:true,progress:exploded?1:0,kind:d.axis==="y"?"rim":"wall"};
      if(exploded)g.position.copy(g.userData.out);this.lockParts.push(g);this.lockGroup.add(g);
    });
    const inner=new THREE.Mesh(new THREE.CylinderGeometry(1.02,1.02,2.9,64,1,true),new THREE.MeshPhysicalMaterial({color:0x29483c,side:THREE.BackSide,roughness:.7}));this.lockGroup.add(inner);
    this.floaters.push({mesh:this.lockGroup,subtle:true,rotate:decorative?.07:0});
  }
  motifTexture(){
    if(this._motifTexture)return this._motifTexture;
    const canvas=document.createElement("canvas");canvas.width=1800;canvas.height=620;const x=canvas.getContext("2d");
    const jade="#6f8d77",deep="#1f4034",mid="#416454",light="#a8bba4",shadow="#315347";x.fillStyle=jade;x.fillRect(0,0,canvas.width,canvas.height);x.lineCap="round";x.lineJoin="round";
    const line=(width=7,color=deep)=>{x.lineWidth=width;x.strokeStyle=color;};
    const stroke=points=>{x.beginPath();points.forEach((p,i)=>i?x.lineTo(...p):x.moveTo(...p));x.stroke();};
    const curl=(cx,cy,r,flip=1)=>{x.beginPath();x.moveTo(cx+flip*r,cy);x.bezierCurveTo(cx+flip*r,cy-r*.8,cx-flip*r*.85,cy-r*.83,cx-flip*r*.67,cy);x.bezierCurveTo(cx-flip*r*.5,cy+r*.55,cx+flip*r*.48,cy+r*.48,cx+flip*r*.43,cy-.05*r);x.bezierCurveTo(cx+flip*r*.35,cy-r*.25,cx-flip*r*.2,cy-r*.23,cx-flip*r*.17,cy+.04*r);x.stroke();};
    const eye=(cx,cy,rx,ry)=>{line(8);x.beginPath();x.ellipse(cx,cy,rx,ry,0,0,Math.PI*2);x.stroke();line(4,light);x.beginPath();x.ellipse(cx,cy,rx-13,ry-11,0,0,Math.PI*2);x.stroke();line(6,deep);x.beginPath();x.arc(cx,cy,Math.min(rx,ry)*.37,0,Math.PI*2);x.stroke();x.fillStyle=shadow;x.beginPath();x.arc(cx,cy,Math.min(rx,ry)*.13,0,Math.PI*2);x.fill();};
    // 两道边框把神徽限定为玉面浅浮雕，不再像贴在表面的白色图案。
    line(5,mid);x.strokeRect(26,22,1748,576);line(2,light);x.strokeRect(39,35,1722,550);
    // 羽冠是平展、分层的：从额冠向两侧展开，而不是一排粗硬的“头发”。
    line(7);for(let i=-10;i<=10;i++){const side=Math.sign(i)||1,ax=900+i*66,tipY=72+Math.abs(i)*7,rootX=900+i*16;x.beginPath();x.moveTo(rootX,206);x.bezierCurveTo(900+i*28,164,ax-side*18,116,ax,tipY);x.bezierCurveTo(ax+side*25,115,900+i*32,167,900+i*23,207);x.stroke();}
    line(2.2,light);for(let i=-9;i<=9;i++){const ax=900+i*65,tipY=82+Math.abs(i)*7;x.beginPath();x.moveTo(900+i*18,199);x.quadraticCurveTo(900+i*39,137,ax,tipY);x.stroke();}
    // 额冠为横向卷云带；下方才是神人的一张真实小脸，层次不会与兽面混淆。
    line(9);x.beginPath();x.moveTo(657,205);x.quadraticCurveTo(790,178,900,194);x.quadraticCurveTo(1010,178,1143,205);x.lineTo(1120,250);x.quadraticCurveTo(1005,231,900,243);x.quadraticCurveTo(795,231,680,250);x.closePath();x.stroke();
    line(4,light);for(const cx of [718,782,846,954,1018,1082])curl(cx,221,22,cx<900?1:-1);
    line(8);x.beginPath();x.moveTo(754,247);x.quadraticCurveTo(770,322,820,350);x.quadraticCurveTo(900,385,980,350);x.quadraticCurveTo(1030,322,1046,247);x.quadraticCurveTo(974,269,900,263);x.quadraticCurveTo(826,269,754,247);x.stroke();
    for(const ex of [842,958]){line(7);x.beginPath();x.ellipse(ex,292,35,25,0,0,Math.PI*2);x.stroke();x.fillStyle=deep;x.beginPath();x.arc(ex,292,8,0,Math.PI*2);x.fill();}
    line(6);x.beginPath();x.moveTo(900,285);x.lineTo(878,321);x.quadraticCurveTo(900,336,922,321);x.stroke();x.beginPath();x.moveTo(850,335);x.quadraticCurveTo(900,366,950,335);x.stroke();
    // 神人耳侧的卷饰连接上层人面与下层兽面，保留良渚神徽“叠层”而非卡通五官。
    line(6);for(const side of [-1,1]){for(let k=0;k<3;k++)curl(755+side*k*43,295+k*18,22,side);x.beginPath();x.moveTo(760*side+900*(1-side),342);x.quadraticCurveTo(690*side+900*(1-side),376,650*side+900*(1-side),406);x.stroke();}
    // 下层兽面：两只巨大重圈眼、中央鼻梁与下颌；兽的比例显著大于上层神人面。
    eye(552,454,112,88);eye(1248,454,112,88);
    line(10);x.beginPath();x.moveTo(716,405);x.bezierCurveTo(782,370,836,382,900,415);x.bezierCurveTo(964,382,1018,370,1084,405);x.lineTo(1056,494);x.quadraticCurveTo(996,535,900,520);x.quadraticCurveTo(804,535,744,494);x.closePath();x.stroke();
    line(6,light);x.beginPath();x.moveTo(900,411);x.lineTo(864,474);x.quadraticCurveTo(900,497,936,474);x.stroke();line(6);x.beginPath();x.moveTo(832,493);x.quadraticCurveTo(900,544,968,493);x.stroke();
    // 外缘的卷纹和獠牙用细线收束，给大眼留出读形空间；纹样的“兽”一眼能认出。
    line(6);for(const side of [-1,1]){const sx=side<0?1:-1;for(let k=0;k<4;k++)curl(270+(k%2)*70+(side>0?1190:0),357+Math.floor(k/2)*95,34,sx);x.beginPath();x.moveTo(740+(side>0?320:0),452);x.quadraticCurveTo(706+(side>0?388:0),530,660+(side>0?476:0),552);x.quadraticCurveTo(710+(side>0?362:0),566,748+(side>0?286:0),529);x.stroke();}
    line(3,light);stroke([[96,105],[318,105]]);stroke([[1482,105],[1704,105]]);stroke([[98,565],[338,565]]);stroke([[1462,565],[1702,565]]);
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this._motifTexture=tex;return tex;
  }
  motifGroup(d,y){
    const g=new THREE.Group(),tex=this.motifTexture();
    const mat=new THREE.MeshStandardMaterial({map:tex,bumpMap:tex,bumpScale:-.055,roughness:.48,metalness:0});
    const panel=new THREE.Mesh(new THREE.PlaneGeometry(4.7,1.28,40,14),mat);panel.castShadow=true;panel.receiveShadow=true;g.add(panel);
    g.position.y=y;
    if(d.axis==="z"){g.position.z=d.sign*.286;g.rotation.y=d.sign<0?Math.PI:0;}
    else{g.position.x=d.sign*.286;g.rotation.y=d.sign>0?Math.PI/2:-Math.PI/2;}
    return g;
  }
  addCongPattern(group,d){group.add(this.motifGroup(d,.72),this.motifGroup(d,-.72));}
  addInteriorRelief(group,d,index){
    const relief=new THREE.Group(),city=new THREE.Group();
    const inward=d.axis==="z"?(d.sign<0?0:Math.PI):(d.sign>0?-Math.PI/2:Math.PI/2);city.rotation.y=inward;
    const add=(geo,color,x,y,z,opt={})=>{const m=this.mesh(geo,color,opt);m.position.set(x,y,z);city.add(m);return m;};
    add(new RoundedBoxGeometry(4.75,.08,2.1,3,.08),0x536b5d,0,-1.28,1.22);
    // 内壁先形成一张真正朝向器心的微缩地景，墙片外侧只保留神徽。
    for(let i=0;i<9;i++){const x=-1.75+(i%5)*.86,z=.55+Math.floor(i/5)*.72,h=.18+(i%3)*.1;add(new RoundedBoxGeometry(.42,h,.34,2,.035),i%2?0xb9a77e:0x8f785d,x,-1.14+h/2,z);const roof=add(new THREE.ConeGeometry(.31,.18,4),0x5e5948,x,-1.02+h,z);roof.rotation.y=Math.PI/4;}
    if(index===0){for(let i=-2;i<=2;i++)add(new THREE.BoxGeometry(.1,.025,1.75),i===0?0x87c8ce:C.water,i*.44,-1.215,1.24,{emissive:C.water,emissiveIntensity:.14});for(const x of [-1.55,1.55])add(new THREE.BoxGeometry(.75,.06,.18),C.wood,x,-1.17,1.1);}
    if(index===1){for(let i=-7;i<=7;i++)add(new THREE.BoxGeometry(.055,.045,1.72),i%2?0xd9bd58:0xb9a34d,i*.14,-1.2,1.24);add(new THREE.CylinderGeometry(.3,.3,.05,24),0xe2c773,1.55,-1.18,.62);}
    if(index===2){for(let i=0;i<12;i++)add(new THREE.DodecahedronGeometry(.09+(i%3)*.025),i%2?C.jadeLight:C.jade,-1.7+(i%6)*.65,-1.12,.72+Math.floor(i/6)*.82);for(const x of [-.75,.75])add(new THREE.TorusGeometry(.22,.035,6,24),C.wood,x,-.92,1.24);}
    if(index===3){for(let i=0;i<4;i++)add(new RoundedBoxGeometry(3.35-i*.55,.09,1.55-i*.22,2,.04),[0x846f5d,0x9a8068,0xb09072,0xc0a07c][i],0,-1.2+i*.1,1.25);for(const x of [-1.65,1.65])add(new THREE.CylinderGeometry(.05,.07,.85,8),C.gold,x,-.76,.64);}
    relief.add(city);relief.scale.setScalar(.001);group.add(relief);group.userData.relief=relief;
  }
  buildLock(ending=false){this.clearRoot();this.mode=ending?"assembly":"lock";this.scene.background.set(0x111b19);this.scene.fog.color.set(0x111b19);this.scene.fog.density=.017;this.camera.position.set(8.8,7.2,10.5);this.camera.lookAt(0,0,0);const p=this.edged(this.mesh(new THREE.CylinderGeometry(4.3,4.7,.42,64),0x313b35));p.position.y=-2.55;this.root.add(p);this.createCong(ending,false);}
  setLockPart(index,extracted){const p=this.lockParts.find(x=>x.userData.order===index);if(!p)return;p.userData.extracted=extracted;p.userData.progress=extracted?1:0;}
  resetLock(extracted=false){this.lockParts.forEach(p=>{p.userData.extracted=extracted;p.userData.progress=extracted?1:0;});}
  buildRegion(regionIndex,solved=[]){
    this.clearRoot();this.mode="region";this.regionIndex=regionIndex;const d=REGIONS[regionIndex],bg=[0x9fc7c9,0xd7c797,0xa8beb1,0xc0a393][regionIndex];this.scene.background.set(bg);this.scene.fog.color.set(bg);this.scene.fog.density=.018;this.camera.position.set(11.5,13.5,12.5);this.camera.lookAt(0,0,0);
    const lower=this.edged(this.mesh(new RoundedBoxGeometry(18,1.25,14.8,5,.3),0x4d574b));lower.position.y=-1.3;this.root.add(lower);const base=this.edged(this.mesh(new RoundedBoxGeometry(17.2,.65,14,5,.24),d.ground));base.position.y=-.48;this.root.add(base);this.walkSurfaces.push(base);this.addPerimeterDetails(regionIndex);
    if(d.id==="water")this.buildWaterCity(solved);if(d.id==="grain")this.buildGrainCity(solved);if(d.id==="jade")this.buildJadeCity(solved);if(d.id==="ritual")this.buildRitualCity(solved);
    this.createPlayer(new THREE.Vector3(0,.05,5.25));d.puzzles.forEach((id,i)=>{const o=this.interactables.find(x=>x.userData.id===id);if(o){o.userData.solved=solved.includes(id);o.userData.active=i===0||solved.includes(d.puzzles[0]);this.setLandmarkSolved(o,solved.includes(id));}});
    // 每面都有一条完整的固定道路链；传送门放在第二机关之后的“回程门”上，
    // 绝不依赖玩家从道路外穿地形抵达。
    const exits=[new THREE.Vector3(0,0,-5.45),new THREE.Vector3(0,0,-5.45),new THREE.Vector3(6.9,0,-5.05),new THREE.Vector3(4.6,0,-5.0)];
    const done=d.puzzles.every(id=>solved.includes(id));this.createPortal(exits[regionIndex],done,regionIndex===3?"portal:final":"portal:next");
  }
  addPerimeterDetails(index){for(let i=0;i<28;i++){const x=-8.2+(i%14)*1.26,z=i<14?-6.55:6.55,s=this.mesh(new THREE.DodecahedronGeometry(.13+(i%4)*.025),index===2?0x6f8e79:0x7d7864);s.position.set(x,-.02,z);s.rotation.set(i*.2,i*.5,0);this.root.add(s);}}
  zone(x1,x2,z1,z2,id=null,enabled=true){this.walkZones.push({x1,x2,z1,z2,id,enabled});}
  obstacle(x1,x2,z1,z2){this.obstacles.push({x1,x2,z1,z2});}
  road(x,z,w,d,color=0xc1ae83){const m=this.mesh(new RoundedBoxGeometry(w,.12,d,3,.08),color);m.position.set(x,-.06,z);this.root.add(m);this.walkSurfaces.push(m);this.zone(x-w/2,x+w/2,z-d/2,z+d/2);return m;}
  building(x,z,w,h,d,color=0xc4b68d,roof=0x6d6752){const g=new THREE.Group(),body=this.edged(this.mesh(new RoundedBoxGeometry(w,h,d,3,.08),color));body.position.y=h/2;const top=this.edged(this.mesh(new THREE.ConeGeometry(Math.max(w,d)*.74,.55,4),roof));top.position.y=h+.26;top.rotation.y=Math.PI/4;g.add(body,top);g.position.set(x,0,z);this.root.add(g);this.obstacle(x-w/2-.18,x+w/2+.18,z-d/2-.18,z+d/2+.18);for(let i=0;i<3;i++){const p=this.mesh(new THREE.BoxGeometry(.05,.55,.05),C.wood);p.position.set(x-w*.3+i*w*.3,.3,z+d*.52);this.root.add(p);}return g;}
  tree(x,z,s=1,color=0x66855e){const g=new THREE.Group(),tr=this.mesh(new THREE.CylinderGeometry(.07,.11,.75,7),C.wood),cr=this.mesh(new THREE.IcosahedronGeometry(.42,1),color);tr.position.y=.35;cr.position.y=.94;g.add(tr,cr);g.position.set(x,0,z);g.scale.setScalar(s);this.root.add(g);this.obstacle(x-.25*s,x+.25*s,z-.25*s,z+.25*s);}
  waterMaterial(river=false){
    return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{uTime:{value:0},uRiver:{value:river?1:0}},vertexShader:`
      varying vec2 vUv;uniform float uTime;
      void main(){vUv=uv;vec3 p=position;p.z+=sin((uv.y*18.0)+(uTime*1.1)+sin(uv.x*9.0))*.018;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}
    `,fragmentShader:`
      varying vec2 vUv;uniform float uTime;uniform float uRiver;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){
        float center=sin(vUv.y*7.2+0.5)*.10+sin(vUv.y*15.0)*.025;
        float lateral=abs((vUv.x*2.0-1.0)-center);
        float width=.78+sin(vUv.y*10.0)*.035;
        float mask=mix(1.0,1.0-smoothstep(width-.04,width,lateral),uRiver);
        if(mask<.02)discard;
        float flow=.5+.5*sin(vUv.y*34.0-uTime*1.65+sin(vUv.x*7.0+uTime*.18)*1.25);
        float fine=.5+.5*sin(vUv.y*57.0-uTime*2.15+vUv.x*8.0);
        float glintBreak=step(.52,hash(floor(vec2(vUv.y*18.0-uTime*.45,vUv.x*5.0))));
        float ribbons=(smoothstep(.95,.995,flow)*.11+smoothstep(.975,1.0,fine)*.045)*glintBreak;
        float shore=smoothstep(width-.15,width-.055,lateral)*(1.0-smoothstep(width-.055,width,lateral));
        float broken=.45+.55*hash(floor(vec2(vUv.y*38.0-uTime*1.2,vUv.x*9.0)));
        vec3 deep=vec3(.20,.52,.59),shallow=vec3(.40,.70,.72),foam=vec3(.82,.88,.80);
        vec3 col=mix(deep,shallow,.3+vUv.x*.12+ribbons);col=mix(col,foam,shore*broken*.48);
        gl_FragColor=vec4(col,mask*.88);
      }
    `});
  }
  water(x,z,w,d){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d,48,24),this.waterMaterial(false));m.rotation.x=-Math.PI/2;m.position.set(x,-.14,z);this.root.add(m);this.waterMeshes.push(m);return m;}
  river(x,z,w,d){
    const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d,72,28),this.waterMaterial(true));m.rotation.x=-Math.PI/2;m.position.set(x,-.135,z);this.root.add(m);this.waterMeshes.push(m);
    const bankMat=this.mat(0x7d8066,{roughness:1});
    for(const side of [-1,1]){const pts=[];for(let i=0;i<=22;i++){const v=i/22,zz=z-d/2+v*d,center=Math.sin(v*7.2+.5)*w*.05+Math.sin(v*15)*w*.0125,xx=x+center+side*w*.39;pts.push(new THREE.Vector3(xx,-.105,zz));}const bank=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),64,.055,5,false),bankMat);bank.castShadow=true;this.root.add(bank);}
    return m;
  }
  landmark(id,x,z,kind){
    const g=new THREE.Group();g.position.set(x,0,z);g.userData={id,active:true,kind};
    if(kind==="sluice"){for(const dx of [-.65,.65]){const p=this.mesh(new THREE.BoxGeometry(.14,1.7,.14),C.wood);p.position.set(dx,.85,0);g.add(p);}const wheel=this.mesh(new THREE.TorusGeometry(.52,.08,8,28),C.gold);wheel.position.y=1;wheel.rotation.y=Math.PI/2;g.add(wheel);}
    if(kind==="bridge")for(let i=0;i<5;i++){const b=this.mesh(new THREE.BoxGeometry(1.6,.12,.25),C.wood);b.position.set(0,.18+i*.03,(i-2)*.32);g.add(b);}
    if(kind==="weather"){const pole=this.mesh(new THREE.CylinderGeometry(.05,.08,2.5,8),C.wood);pole.position.y=1.25;const flag=this.mesh(new THREE.PlaneGeometry(1,.52),0xb86b52,{side:THREE.DoubleSide});flag.position.set(.52,1.95,0);flag.rotation.y=.25;const disk=this.mesh(new THREE.CylinderGeometry(.65,.65,.12,24),0xd8c17b);disk.position.y=.12;g.add(pole,flag,disk);}
    if(kind==="boats")for(let i=0;i<2;i++){const b=this.mesh(new THREE.CapsuleGeometry(.25,.9,5,10),C.wood);b.rotation.z=Math.PI/2;b.scale.y=.35;b.position.set((i-.5)*1.3,.18,0);g.add(b);}
    if(kind==="jade-light"){const rock=this.mesh(new THREE.DodecahedronGeometry(.78,1),C.jadeLight);rock.position.y=.72;const lamp=this.mesh(new THREE.SphereGeometry(.16,16,10),C.gold,{emissive:C.gold,emissiveIntensity:1.5});lamp.position.set(-.9,1.5,.4);const light=new THREE.PointLight(0xffd889,2.4,4);light.position.copy(lamp.position);g.add(rock,lamp,light);}
    if(kind==="drill"){for(const x1 of [-.55,.55]){const p=this.mesh(new THREE.BoxGeometry(.11,2.2,.11),C.wood);p.position.set(x1,1.1,0);g.add(p);}const ring=this.mesh(new THREE.TorusGeometry(.48,.1,8,28),C.jadeLight);ring.position.y=1.1;ring.rotation.x=Math.PI/2;g.add(ring);}
    if(kind==="map"){const slab=this.mesh(new THREE.BoxGeometry(2.2,.2,1.55),0xb6a786);slab.position.y=.28;g.add(slab);for(let i=0;i<7;i++){const dot=this.mesh(new THREE.CylinderGeometry(.07,.07,.06,12),i<4?C.jadeLight:0x8b6757);dot.position.set(-.75+(i%4)*.48,.42,-.35+Math.floor(i/4)*.65);g.add(dot);}}
    if(kind==="steles")for(let i=0;i<4;i++){const s=this.mesh(new RoundedBoxGeometry(.42,1.35,.18,2,.04),C.jade);s.position.set(-.78+i*.52,.68,0);g.add(s);const eye=this.mesh(new THREE.TorusGeometry(.08,.025,6,16),C.gold);eye.position.set(s.position.x,.78,.12);g.add(eye);}
    const glow=new THREE.PointLight(C.gold,.45,3);glow.position.y=.8;g.add(glow);g.userData.glow=glow;this.root.add(g);this.interactables.push(g);return g;
  }
  setLandmarkSolved(g,yes){if(!g)return;g.userData.solved=yes;if(g.userData.glow){g.userData.glow.intensity=yes?3:.45;g.userData.glow.color.set(yes?0xffd36d:C.gold);}}
  createGate(id,x,z,orientation="x"){const g=new THREE.Group();g.position.set(x,0,z);const bar=this.mesh(new THREE.BoxGeometry(orientation==="x"?2.3:.18,.28,orientation==="x"?.18:2.3),C.wood);bar.position.y=.35;g.add(bar);this.root.add(g);const block=orientation==="x"?{x1:x-1.2,x2:x+1.2,z1:z-.24,z2:z+.24}:{x1:x-.24,x2:x+.24,z1:z-1.2,z2:z+1.2};this.obstacles.push(block);g.userData.block=block;this.gates[id]=g;return g;}
  initGate(g,open){g.visible=!open;if(open&&g.userData.block)this.obstacles=this.obstacles.filter(o=>o!==g.userData.block);}
  buildWaterCity(solved){
    this.river(0,0,4.1,13.4);this.road(-5,2.6,6.1,1.25);this.road(-5,-2.7,6.1,1.25);this.road(-7.2,0,1.25,11.2);this.road(5,2.6,6.1,1.25);this.road(5,-2.7,6.1,1.25);this.road(7.2,0,1.25,11.2);this.road(0,5.25,15.5,1.1);
    // 水闸桥把起点左岸接到洲岛题所在的右岸；洲岛题再放下下游桥，
    // 连接到南侧的离城堤路。这两段水面都没有可绕行的陆路。
    const drawBridge=(id,z,open,zoneId)=>{const bridge=new THREE.Group();bridge.position.set(-1.9,.05,z);const deck=this.mesh(new THREE.BoxGeometry(3.8,.16,.96),C.wood);deck.position.x=1.9;bridge.add(deck);for(let i=0;i<9;i++){const plank=this.mesh(new THREE.BoxGeometry(.32,.04,1.04),i%2?0x8f6847:0x7c573c);plank.position.set(.25+i*.42,.1,0);bridge.add(plank);}for(const zz of [-.5,.5]){const rope=new THREE.Mesh(new THREE.CylinderGeometry(.018,.018,3.75,6),this.mat(0xc1a676));rope.rotation.z=Math.PI/2;rope.position.set(1.9,.28,zz);bridge.add(rope);}bridge.rotation.z=open?0:-1.05;bridge.userData.zoneId=zoneId;this.root.add(bridge);this.gates[id]=bridge;this.zone(-1.9,1.9,z-.55,z+.55,zoneId,open);};
    drawBridge("water-gates",2.6,solved.includes("water-gates"),"water-upper-bridge");
    drawBridge("water-crossing",-2.7,solved.includes("water-crossing"),"water-lower-bridge");
    this.road(0,-4.25,1.1,2.9,0xb69a70);
    for(const z of [-4.7,0,4.7])for(const x of [-1.3,1.3]){const p=this.mesh(new THREE.CylinderGeometry(.07,.09,1.2,8),C.wood);p.position.set(x,.45,z);this.root.add(p);}
    for(const [x,z] of [[-6,3.9],[-4.2,3.9],[5.5,3.9],[6,-4]]){const h=this.building(x,z,1.25,1.2,1.2);h.position.y=.18;for(const dx of [-.42,.42]){const pile=this.mesh(new THREE.CylinderGeometry(.045,.06,.5,6),C.wood);pile.position.set(x+dx,.05,z+.42);this.root.add(pile);}}
    for(let i=0;i<13;i++)this.tree(-8+i*.55,-5.6+(i%2)*.28,.65,0x5e8567);
    for(let i=0;i<28;i++){const side=i%2?-1:1,z=-5.7+(i%14)*.84,x=side*(2.05+.12*Math.sin(i));for(let k=0;k<3;k++){const reed=this.mesh(new THREE.CylinderGeometry(.012,.022,.48+(k%2)*.16,5),0x7f9660);reed.position.set(x+k*.07*side,.12,z+k*.05);reed.rotation.z=side*.08;this.root.add(reed);}}
    for(const z of [-4.9,-1.25,4.75])for(const side of [-1,1]){const stone=this.mesh(new RoundedBoxGeometry(.42,.18,.34,2,.04),0x8f8b72);stone.position.set(side*2.08,-.03,z);stone.rotation.y=z*.2;this.root.add(stone);}
    this.landmark("water-gates",-5,-2.7,"sluice");this.landmark("water-crossing",5,-2.7,"bridge");
  }
  buildGrainCity(solved){
    this.road(0,5.2,13.8,1.1);this.road(-5,1,1.1,7.7);this.road(0,-2.25,9.2,1.05);this.road(5,1,1.1,7.7);this.road(0,1.2,1.05,5.8);this.road(0,-4.0,1.05,3.7,0xbca774);
    for(let x=-7.5;x<=7.5;x+=1.25)for(let z=-5.5;z<=3.8;z+=1.2){if(Math.abs(x)<.8||Math.abs(x-5)<.8||Math.abs(x+5)<.8||Math.abs(z+2.25)<.8)continue;const p=this.mesh(new THREE.BoxGeometry(.92,.08,.78),((Math.round(x+z)+20)%3)?0xc7aa50:0x9b9a54);p.position.set(x,-.08,z);this.root.add(p);for(let k=0;k<3;k++){const rice=this.mesh(new THREE.CylinderGeometry(.012,.022,.38,5),0xe0bf55);rice.position.set(x-.25+k*.25,.15,z);this.root.add(rice);}}
    this.water(6.9,-4.9,3.1,2.4);this.building(-2.5,-4.2,2.2,1.8,1.7);this.building(2.5,-4.2,2.2,2.15,1.7);this.landmark("grain-weather",-5,1.1,"weather");this.landmark("grain-ferry",5,-2.25,"boats");const gate=this.createGate("grain-weather",0,-.9,"x");this.initGate(gate,solved.includes("grain-weather"));this.zone(-.6,.6,-1.1,-.65,"grain-pass",solved.includes("grain-weather"));
  }
  buildJadeCity(solved){
    this.road(0,5.2,14,1.05);this.road(-6,1.2,1.1,7.4);this.road(-2.1,-2.1,6.8,1.05);this.road(1.05,-1.4,1.05,1.35);this.road(1.05,1.55,1.05,6.3);this.road(4.6,4.1,6.1,1.05);this.road(6.9,1,1.05,6.7);this.road(6.9,-3.65,1.05,2.9,0x9bad90);
    for(let i=0;i<18;i++){const x=-4.5+(i%6)*1.75,z=-5+(Math.floor(i/6))*1.15,r=this.mesh(new THREE.DodecahedronGeometry(.36+(i%4)*.09),i%3?0x78947e:0x9db39d);r.position.set(x,.28,z);r.rotation.set(i*.3,i*.7,0);this.root.add(r);this.obstacle(x-.38,x+.38,z-.38,z+.38);}
    const roof=this.mesh(new THREE.BoxGeometry(6.8,.15,3.9),0x736951);roof.position.set(4.2,2.55,1);this.root.add(roof);for(const x of [1.2,4.2,7.2])for(const z of [-.8,2.8]){const p=this.mesh(new THREE.CylinderGeometry(.06,.09,2.5,7),C.wood);p.position.set(x,1.25,z);this.root.add(p);}for(let i=0;i<3;i++){const t=this.mesh(new THREE.BoxGeometry(1.5,.16,.72),C.wood);t.position.set(2.2+i*1.8,.62,1.1);this.root.add(t);this.obstacle(1.42+i*1.8,2.98+i*1.8,.68,1.52);}
    this.landmark("jade-light",-6,-2.1,"jade-light");this.landmark("jade-drill",6.9,1,"drill");const gate=this.createGate("jade-light",1.05,-.75,"z");this.initGate(gate,solved.includes("jade-light"));this.zone(.5,1.6,-1.25,-.25,"jade-pass",solved.includes("jade-light"));
  }
  buildRitualCity(solved){
    // 中轴经由右侧回廊明确接到中央之门；加宽接点，避免纹样台阶在视觉与碰撞上切断终局道路。
    this.road(0,5.2,13.8,1.05);this.road(0,0,1.15,9.5,0xbba180);this.road(-2.3,1.6,5.7,1.05,0xbba180);this.road(2.3,-1.4,6.7,1.28,0xbba180);this.road(4.6,-2.8,1.5,5.9,0xbba180);
    for(let l=0;l<3;l++){const p=this.mesh(new RoundedBoxGeometry(6.4-l*1.05,.42,4.2-l*.7,3,.12),[0x7c6d5e,0x91806c,0xa59076][l]);p.position.set(0,l*.36,-4.0);this.root.add(p);this.obstacle(-3.2+l*.52,3.2-l*.52,-6.1+l*.35,-1.9-l*.35);}
    for(const [x,z] of [[-6,3],[-6,-.2],[6,3],[6,-3.2]]){const mound=this.mesh(new THREE.CylinderGeometry(.85,1.15,.45,18),0x766d5d);mound.position.set(x,.06,z);this.root.add(mound);this.obstacle(x-1,x+1,z-1,z+1);}
    this.landmark("ritual-map",-4.6,1.6,"map");this.landmark("ritual-pattern",4.6,-1.4,"steles");const gate=this.createGate("ritual-map",0,-1.35,"x");this.initGate(gate,solved.includes("ritual-map"));this.zone(-.58,.58,-1.7,-1.05,"ritual-pass",solved.includes("ritual-map"));
  }
  createPlayer(pos){
    const g=new THREE.Group(),skin=0xc99c78,coat=0xd9ccb0,trouser=0x354640,hair=0x292d2a;
    const shadow=new THREE.Mesh(new THREE.CircleGeometry(.34,24),new THREE.MeshBasicMaterial({color:0x1f2825,transparent:true,opacity:.18,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.01;g.add(shadow);
    for(const x of [-.11,.11]){const leg=this.mesh(new THREE.CapsuleGeometry(.065,.28,4,8),trouser);leg.position.set(x,.27,0);g.add(leg);}
    const torso=this.mesh(new THREE.CapsuleGeometry(.21,.42,6,10),coat);torso.position.y=.68;g.add(torso);
    for(const x of [-.28,.28]){const arm=this.mesh(new THREE.CapsuleGeometry(.055,.32,4,8),coat);arm.position.set(x,.7,0);arm.rotation.z=x<0?-.22:.22;g.add(arm);}
    const pack=this.mesh(new RoundedBoxGeometry(.34,.42,.16,2,.04),0x7b5d44);pack.position.set(0,.72,-.2);g.add(pack);
    const head=this.mesh(new THREE.SphereGeometry(.17,18,12),skin);head.position.y=1.12;g.add(head);const hairCap=this.mesh(new THREE.SphereGeometry(.175,18,10,0,Math.PI*2,0,Math.PI*.58),hair);hairCap.position.y=1.16;g.add(hairCap);
    const brim=this.mesh(new THREE.CylinderGeometry(.27,.27,.035,20),0xb99e69);brim.position.y=1.23;g.add(brim);const crown=this.mesh(new THREE.CylinderGeometry(.15,.18,.13,16),0xc5aa73);crown.position.y=1.3;g.add(crown);
    const scarf=this.mesh(new THREE.TorusGeometry(.2,.025,6,18),0xa64e43);scarf.rotation.x=Math.PI/2;scarf.position.y=.94;g.add(scarf);
    g.position.copy(pos);this.player=g;this.root.add(g);
  }
  createPortal(pos,active,id){const g=new THREE.Group();g.position.copy(pos);g.userData={id,active};const ring=this.mesh(new THREE.TorusGeometry(.76,.1,10,48,Math.PI),C.gold,{emissive:C.gold,emissiveIntensity:.55});ring.rotation.z=Math.PI;ring.position.y=.78;const base=this.mesh(new RoundedBoxGeometry(1.8,.16,.55,3,.06),0x5f6d5c);base.position.y=.06;g.add(ring,base);g.visible=active;this.root.add(g);this.interactables.push(g);this.floaters.push({mesh:ring,baseY:.78,rotate:.12});}
  completePuzzle(id){const n=this.interactables.find(x=>x.userData.id===id);this.setLandmarkSolved(n,true);const region=REGIONS[this.regionIndex],idx=region.puzzles.indexOf(id);if(idx===0){const next=this.interactables.find(x=>x.userData.id===region.puzzles[1]);if(next)next.userData.active=true;}const gate=this.gates[id];if(gate){if(gate.userData.zoneId){gate.userData.lowering=true;const z=this.walkZones.find(q=>q.id===gate.userData.zoneId);if(z)z.enabled=true;}else if(idx===0){gate.visible=false;if(gate.userData.block)this.obstacles=this.obstacles.filter(o=>o!==gate.userData.block);const z=this.walkZones.find(q=>q.id===region.id+"-pass");if(z)z.enabled=true;}}}
  revealPortal(){const p=this.interactables.find(x=>x.userData.id?.startsWith("portal:"));if(p){p.visible=true;p.userData.active=true;}}
  canStand(x,z){const inZone=this.walkZones.some(r=>r.enabled&&x>=r.x1&&x<=r.x2&&z>=r.z1&&z<=r.z2);if(!inZone)return false;return !this.obstacles.some(r=>x>=r.x1&&x<=r.x2&&z>=r.z1&&z<=r.z2);}
  findPath(start,end){
    const step=.42,key=(x,z)=>String(x)+","+String(z),toGrid=v=>Math.round(v/step),sx=toGrid(start.x),sz=toGrid(start.z),ex=toGrid(end.x),ez=toGrid(end.z),open=[[sx,sz]],came=new Map(),seen=new Set([key(sx,sz)]),dirs=[[1,0],[-1,0],[0,1],[0,-1]];let found=null;
    for(let loops=0;open.length&&loops<5000;loops++){open.sort((a,b)=>(Math.abs(a[0]-ex)+Math.abs(a[1]-ez))-(Math.abs(b[0]-ex)+Math.abs(b[1]-ez)));const cur=open.shift();if(Math.abs(cur[0]-ex)+Math.abs(cur[1]-ez)<=1){found=cur;break;}for(const d of dirs){const n=[cur[0]+d[0],cur[1]+d[1]],k=key(...n);if(seen.has(k)||!this.canStand(n[0]*step,n[1]*step))continue;seen.add(k);came.set(k,cur);open.push(n);}}
    if(!found)return[];const out=[new THREE.Vector3(end.x,.05,end.z)];while(found[0]!==sx||found[1]!==sz){out.push(new THREE.Vector3(found[0]*step,.05,found[1]*step));found=came.get(key(...found));if(!found)break;}return out.reverse();
  }
  pointerDown(e){this.drag={active:true,moved:false,x:e.clientX,y:e.clientY,part:null,amount:0};this.canvas.setPointerCapture?.(e.pointerId);this.setPointer(e);if(["lock","assembly"].includes(this.mode)){this.raycaster.setFromCamera(this.pointer,this.camera);const hit=this.raycaster.intersectObjects(this.lockParts,true).map(h=>{let o=h.object;while(o&&!o.userData.lockPart)o=o.parent;return o;}).find(Boolean);if(hit)this.drag.part=hit;}}
  pointerMove(e){if(!this.drag.active)return;const dx=e.clientX-this.drag.x,dy=e.clientY-this.drag.y;if(Math.abs(dx)+Math.abs(dy)>4)this.drag.moved=true;if(["lock","assembly","title"].includes(this.mode)&&this.lockGroup){if(this.drag.part&&this.mode!=="title"){const p=this.drag.part,sign=this.mode==="assembly"?-1:1,delta=(Math.abs(dx)+Math.abs(dy))*.012*sign;p.userData.progress=THREE.MathUtils.clamp(p.userData.progress+delta,0,1);p.userData.extracted=p.userData.progress>.5;this.drag.amount+=Math.abs(dx)+Math.abs(dy);}else{this.lockGroup.rotation.y+=dx*.006;this.lockGroup.rotation.x=THREE.MathUtils.clamp(this.lockGroup.rotation.x+dy*.003,-.32,.32);}this.drag.x=e.clientX;this.drag.y=e.clientY;}}
  pointerUp(e){if(!this.drag.active)return;const part=this.drag.part,moved=this.drag.moved,amount=this.drag.amount;this.drag.active=false;if(part&&["lock","assembly"].includes(this.mode)){if(amount<8){part.userData.progress=this.mode==="assembly"?0:1;part.userData.extracted=this.mode!=="assembly";}if(part.userData.progress>.82||part.userData.progress<.18)this.callbacks.onLockPart?.(part.userData.order,part.userData.id);return;}if(moved)return;if(this.mode==="region"){this.setPointer(e);this.raycaster.setFromCamera(this.pointer,this.camera);const hit=this.raycaster.intersectObjects(this.walkSurfaces,false)[0];if(hit){const p=hit.point;if(this.canStand(p.x,p.z)){const path=this.findPath(this.player.position,p);if(path.length)this.playerPath=path;}}}}
  setPointer(e){const r=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);}
  updatePlayer(dt){
    if(!this.player)return;const move=new THREE.Vector3((this.keys.has("d")||this.keys.has("arrowright")?1:0)-(this.keys.has("a")||this.keys.has("arrowleft")?1:0),0,(this.keys.has("s")||this.keys.has("arrowdown")?1:0)-(this.keys.has("w")||this.keys.has("arrowup")?1:0));
    if(move.lengthSq()){this.playerPath=[];move.normalize().multiplyScalar(dt*3);const nx=this.player.position.x+move.x,nz=this.player.position.z+move.z;if(this.canStand(nx,nz))this.player.position.set(nx,.05,nz);else{if(this.canStand(nx,this.player.position.z))this.player.position.x=nx;if(this.canStand(this.player.position.x,nz))this.player.position.z=nz;}}
    else if(this.playerPath.length){const t=this.playerPath[0],d=t.clone().sub(this.player.position);d.y=0;if(d.length()<.12)this.playerPath.shift();else{this.player.rotation.y=Math.atan2(d.x,d.z);this.player.position.add(d.normalize().multiplyScalar(Math.min(dt*3,d.length())));}}
    let near=null,dist=Infinity;for(const o of this.interactables){if(!o.visible||o.userData.active===false)continue;const d=o.position.distanceTo(this.player.position);if(d<1.7&&d<dist){near=o;dist=d;}}const id=near?.userData.id||null;if(id!==this.nearId){this.nearId=id;this.callbacks.onNearChange?.(id,near?.userData.solved);}
  }
  updateLock(dt){for(const p of this.lockParts){const dest=p.userData.home.clone().lerp(p.userData.out,p.userData.progress);p.position.lerp(dest,1-Math.pow(.0008,dt));if(p.userData.relief){const target=p.userData.progress>.12?1:.001;p.userData.relief.scale.lerp(new THREE.Vector3(target,target,target),1-Math.pow(.001,dt));}}}
  animate(){requestAnimationFrame(()=>this.animate());const dt=Math.min(this.clock.getDelta(),.04),t=this.clock.elapsedTime;if(this.mode==="region")this.updatePlayer(dt);if(["lock","assembly"].includes(this.mode))this.updateLock(dt);for(const f of this.floaters){if(f.subtle){if(!this.drag.active&&f.rotate)f.mesh.rotation.y+=dt*f.rotate;}else{if(f.baseY!==undefined)f.mesh.position.y=f.baseY+Math.sin(t*.8)*.04;if(f.rotate)f.mesh.rotation.z+=dt*f.rotate;}}for(const w of this.waterMeshes)if(w.material.uniforms?.uTime)w.material.uniforms.uTime.value=t;for(const g of Object.values(this.gates))if(g.userData.lowering){g.rotation.z=THREE.MathUtils.lerp(g.rotation.z,0,dt*2.6);if(Math.abs(g.rotation.z)<.03)g.userData.lowering=false;}this.renderer.render(this.scene,this.camera);}
}
