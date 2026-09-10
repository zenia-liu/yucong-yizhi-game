import * as THREE from "three";
import thatchTextureUrl from "../assets/liangzhu-thatch-v2.png";

const C={grass:0x688d72,earth:0x8d7858,water:0x3f95aa,deepWater:0x215a70,wood:0x765137,roof:0x4e4033,jade:0x78a58a,gold:0xe0bd65,stone:0x777061};
const dist=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);

export class World {
  constructor(canvas,callbacks={}) {
    this.canvas=canvas;this.callbacks=callbacks;this.started=false;this.keys=new Set();this.target=null;this.route=[];this.near=null;this.boat=false;this.yaw=.36;this.water=[];this.interactables=[];this.floaters=[];this.elevatedAreas=[];this.ramps=[];this.wallColliders=[];this.groundColliders=[];this.navigationMeshes=[];this.solidCircles=[];this.momentActors=[];this.questMarkers=[];this.ambientBoats=[];this.villagers=[];this.swayers=[];this.animals=[];this.activeMoment=null;this.pad=null;this.clearings=[];this.textures={};
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:"high-performance"});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.shadowMap.autoUpdate=false;this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.04;
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color(0x9fc9d6);this.scene.fog=new THREE.FogExp2(0x9fc9d6,.012);this.camera=new THREE.PerspectiveCamera(34,1,.1,260);this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();this.clock=new THREE.Clock();this.drag=null;this.yaw=1.95;
    addEventListener("resize",()=>this.resize());addEventListener("keydown",e=>this.keys.add(e.key.toLowerCase()));addEventListener("keyup",e=>this.keys.delete(e.key.toLowerCase()));
    canvas.addEventListener("pointerdown",e=>this.pointerDown(e));canvas.addEventListener("pointermove",e=>this.pointerMove(e));canvas.addEventListener("pointerup",e=>this.pointerUp(e));this.resize();this.animate();
  }
  resize(){const w=this.canvas.clientWidth||innerWidth,h=this.canvas.clientHeight||innerHeight;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix()}
  texture(kind){
    if(this.textures[kind])return this.textures[kind];
    // A generated, project-owned reed material gives roofs an actual fibre scale;
    // it is kept separate from the tiny procedural maps used for broad ground cover.
    if(kind==="thatch"){const texture=new THREE.TextureLoader().load(thatchTextureUrl);texture.colorSpace=THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(2.4,2.4);texture.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy());this.textures[kind]=texture;return texture}
    const canvas=document.createElement("canvas"),size=128,ctx=canvas.getContext("2d");canvas.width=canvas.height=size;
    const fill=(color)=>{ctx.fillStyle=color;ctx.fillRect(0,0,size,size)};
    if(kind==="water"){
      fill("#4b9eb3");ctx.globalAlpha=.35;for(let y=10;y<size;y+=17){ctx.strokeStyle=y%34?"#9acbd0":"#d2e4d5";ctx.lineWidth=2;ctx.beginPath();for(let x=-8;x<size+9;x+=12){const py=y+Math.sin((x+y)*.13)*2;x===-8?ctx.moveTo(x,py):ctx.lineTo(x,py)}ctx.stroke()}ctx.globalAlpha=1;
    }else if(kind==="waterNormal"){
      // 低频水纹作为法线贴图，而非另一张颜色图：水面会随光线出现细小起伏。
      fill("#8080ff");for(let y=7;y<size;y+=13){for(let x=0;x<size;x+=5){const wave=Math.round(128+Math.sin(x*.19+y*.11)*32);ctx.fillStyle=`rgb(${wave},${128+(y%3-1)*18},255)`;ctx.fillRect(x,y,5,3)}}
    }else if(kind==="grass"){
      fill("#6e9271");for(let i=0;i<260;i++){const x=(i*37)%size,y=(i*71)%size;ctx.fillStyle=i%3?"#638764":"#7c9d74";ctx.fillRect(x,y,2+(i%3),4+(i%5))}
    }else if(kind==="earth"){
      fill("#917451");for(let i=0;i<170;i++){const x=(i*41)%size,y=(i*53)%size;ctx.fillStyle=i%3?"#7b6043":"#b08c61";ctx.fillRect(x,y,2+(i%4),1+(i%3))}
    }else if(kind==="wood"){
      fill("#795338");for(let y=6;y<size;y+=13){ctx.strokeStyle=y%26?"#9a7049":"#4d3528";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,y);ctx.bezierCurveTo(34,y-5,78,y+5,size,y-1);ctx.stroke()}for(let i=0;i<8;i++){ctx.strokeStyle="#4e3528";ctx.lineWidth=2;ctx.beginPath();ctx.ellipse((i*29)%size,(i*47)%size,5,2,0,0,Math.PI*2);ctx.stroke()}
    }else if(kind==="jade"){
      // 玉的沁色、石纹和矿物斑点让玉琮与玉胚摆脱纯色塑料感。
      fill("#70937b");ctx.globalAlpha=.46;for(let i=0;i<16;i++){const y=(i*23)%size;ctx.strokeStyle=i%3?"#9bb39a":"#466d60";ctx.lineWidth=1+(i%3);ctx.beginPath();ctx.moveTo(-8,y);ctx.bezierCurveTo(30,y-9,64,y+7,136,y-4);ctx.stroke()}ctx.globalAlpha=.34;for(let i=0;i<30;i++){ctx.fillStyle=i%2?"#c5ceac":"#365f54";ctx.beginPath();ctx.ellipse((i*37)%size,(i*61)%size,2+(i%5),1+(i%3),i*.4,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;
    }else if(kind==="stone"){
      fill("#777061");ctx.globalAlpha=.48;for(let i=0;i<74;i++){const x=(i*41)%size,y=(i*67)%size;ctx.fillStyle=i%3?"#958b75":"#4e514b";ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+5+(i%7),y+2);ctx.lineTo(x+2,y+5+(i%5));ctx.closePath();ctx.fill()}ctx.globalAlpha=1;
    }else if(kind==="clay"){
      // 同一片陶土上的手拉痕、烟熏与细砂颗粒让陶罐、陶窑有火候差异，
      // 也将它们和木器、玉器从材质上明确区分开。
      fill("#a96849");ctx.globalAlpha=.45;for(let y=5;y<size;y+=11){ctx.strokeStyle=y%22?"#d18b60":"#6e3d31";ctx.lineWidth=1.7;ctx.beginPath();ctx.moveTo(0,y+Math.sin(y)*2);ctx.bezierCurveTo(28,y-2,88,y+3,size,y-1);ctx.stroke()}for(let i=0;i<95;i++){ctx.fillStyle=i%3?"#714031":"#d39368";ctx.globalAlpha=.22+(i%4)*.06;ctx.fillRect((i*47)%size,(i*73)%size,1+(i%3),1+(i%2))}ctx.globalAlpha=1;
    }else if(kind==="thatch"){
      fill("#71563b");for(let x=-20;x<size+20;x+=8){ctx.strokeStyle=x%16?"#a17a4c":"#c0985d";ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+24,size);ctx.stroke()}
    }else if(kind==="weave"){
      fill("#a77f58");for(let y=7;y<size;y+=13){ctx.fillStyle=y%26?"#d0a66d":"#865f40";ctx.fillRect(0,y,size,4)}for(let x=8;x<size;x+=17){ctx.fillStyle=x%34?"#bd9360":"#765338";ctx.fillRect(x,0,4,size)}
    }
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=kind==="waterNormal"?THREE.NoColorSpace:THREE.SRGBColorSpace;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(kind==="water"||kind==="waterNormal"?4:3,kind==="water"||kind==="waterNormal"?4:3);texture.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy());this.textures[kind]=texture;return texture
  }
  mat(color,opt={}){const {texture,normalTexture,...rest}=opt;return new THREE.MeshStandardMaterial({color,roughness:.8,metalness:0,map:texture?this.texture(texture):null,normalMap:normalTexture?this.texture(normalTexture):null,normalScale:normalTexture?new THREE.Vector2(.32,.32):undefined,...rest})}
  mesh(geo,color,x=0,y=0,z=0,opt={}){const m=new THREE.Mesh(geo,this.mat(color,opt));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;this.scene.add(m);return m}
  shape(points,color,y=0,opt={}){const s=new THREE.Shape();points.forEach(([x,z],i)=>i?s.lineTo(x,-z):s.moveTo(x,-z));s.closePath();const g=new THREE.ShapeGeometry(s);g.rotateX(-Math.PI/2);const m=new THREE.Mesh(g,this.mat(color,opt));m.position.y=y;m.castShadow=true;m.receiveShadow=true;this.scene.add(m);return m}
  islandMesh(){
    // A single, flat silhouette is intentional: the former extruded polygon
    // self-intersected at this camera angle and read as an accidental mountain.
    const s=new THREE.Shape();this.landPolygon.forEach(([x,z],i)=>i?s.lineTo(x,-z):s.moveTo(x,-z));s.closePath();
    const g=new THREE.ShapeGeometry(s);g.rotateX(-Math.PI/2);
    const m=new THREE.Mesh(g,this.mat(C.grass,{texture:"grass",roughness:1}));m.position.y=.01;m.castShadow=true;m.receiveShadow=true;this.scene.add(m);return m
  }
  build(){
    // Animation stays paused until a complete, navigable scene exists.  A
    // construction error can therefore never masquerade as an empty sky world.
    this.started=false;this.player=null;this.scene.clear();this.water=[];this.interactables=[];this.floaters=[];this.elevatedAreas=[];this.ramps=[];this.wallColliders=[];this.groundColliders=[];this.navigationMeshes=[];this.solidCircles=[];this.momentActors=[];this.questMarkers=[];this.ambientBoats=[];this.villagers=[];this.swayers=[];this.animals=[];this.activeMoment=null;this.scene.background.set(0x9fc9d6);this.scene.fog.color.set(0x9fc9d6);this.scene.fog.density=.012;
    this.hemi=new THREE.HemisphereLight(0xf4f1dc,0x395d47,2.9);this.scene.add(this.hemi);this.sun=new THREE.DirectionalLight(0xffedc1,3.5);this.sun.position.set(-48,58,35);this.sun.castShadow=true;this.sun.shadow.mapSize.set(1024,1024);Object.assign(this.sun.shadow.camera,{left:-65,right:65,top:65,bottom:-65});this.scene.add(this.sun);
    this.landPolygon=[[-58,-26],[-51,-35],[-38,-31],[-25,-34],[-10,-30],[4,-33],[19,-30],[34,-34],[51,-27],[58,-16],[55,-4],[60,10],[53,25],[40,33],[23,29],[7,34],[-8,30],[-26,33],[-43,29],[-56,18],[-60,5],[-55,-8]];
    // The outer water is a horizontal world surface.  Keeping PlaneGeometry in
    // its default vertical orientation made it behave like a blue curtain when
    // the camera turned toward z=0.
    this.outerWater=this.mesh(new THREE.PlaneGeometry(164,116),C.deepWater,0,-.42,0,{texture:"water",normalTexture:"waterNormal",roughness:.26,metalness:.14});this.outerWater.rotation.x=-Math.PI/2;
    this.island=this.islandMesh();this.hitPlane=this.mesh(new THREE.PlaneGeometry(164,116),0xffffff,0,-.30,0,{visible:false});this.hitPlane.rotation.x=-Math.PI/2;this.seedClearings();
    this.buildSky();this.buildOuterRiver();this.buildRivers();this.buildShore();this.buildWaterworks();this.scatterLandscape();this.buildTerrainScreens();this.buildSettlement();this.buildFarDistricts();this.buildDailyLife();this.buildCraftScenes();this.buildLandmarks();this.buildWaterTraffic();this.validateTransitNetwork();this.createMomentActors();this.createPlayer();this.renderer.shadowMap.needsUpdate=true;this.callbacks.onMapReady?.({land:this.landPolygon,water:this.water,docks:this.docks});this.positionCamera(true);this.resize();this.started=true;
  }
  buildSky(){
    this.skyMaterial=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vPos;uniform float uTime;void main(){float h=clamp(normalize(vPos).y*.5+.5,0.0,1.0);float breath=.5+.5*sin(uTime*.035);vec3 horizon=mix(vec3(0.72,0.81,0.78),vec3(0.79,0.86,0.80),breath);vec3 zenith=mix(vec3(0.32,0.56,0.66),vec3(0.41,0.66,0.72),breath);vec3 warm=vec3(0.90,0.77,0.61);vec3 col=mix(horizon,zenith,smoothstep(.42,1.0,h));col=mix(warm,col,smoothstep(.2,.5,h));gl_FragColor=vec4(col,1.0);}"});const sky=new THREE.Mesh(new THREE.SphereGeometry(150,32,16),this.skyMaterial);this.scene.add(sky);
    const cloud=(x,y,z,s)=>{const g=new THREE.Group();for(const [dx,dy,scale]of[[-.9,0,.8],[0,.18,1.1],[.92,.02,.76],[1.55,-.1,.5]]){const puff=new THREE.Mesh(new THREE.SphereGeometry(s*scale,10,7),new THREE.MeshLambertMaterial({color:0xf8f5e7,transparent:true,opacity:.9}));puff.position.set(dx*s,dy*s,0);puff.scale.y=.42;g.add(puff)}g.position.set(x,y,z);this.scene.add(g);this.floaters.push({mesh:g,base:y,phase:x*.13,cloud:true})};
    cloud(-34,15,27,3.4);cloud(-14,12,18,2.25);cloud(17,17,35,2.7);cloud(42,13,8,2.2);cloud(-46,12,-10,2.1);
    for(const [x,y,z,phase]of[[-18,11,25,.1],[8,13,31,.36],[36,11,20,.67]]){const bird=new THREE.Group();for(const side of[-1,1]){const wing=new THREE.Mesh(new THREE.ConeGeometry(.12,.55,3),new THREE.MeshBasicMaterial({color:0x33483e}));wing.rotation.z=side*.95;wing.position.x=side*.16;bird.add(wing)}bird.position.set(x,y,z);bird.scale.setScalar(.5);this.scene.add(bird);this.floaters.push({mesh:bird,base:y,phase,bird:true})}
  }
  foam(x,z,s=1){const g=new THREE.Group();for(const [dx,dz,r]of[[-.24,0,.12],[0,.05,.16],[.25,-.02,.1]]){const f=new THREE.Mesh(new THREE.SphereGeometry(r*s,8,5),new THREE.MeshBasicMaterial({color:0xd7f0eb,transparent:true,opacity:.5}));f.position.set(dx*s,.11,dz*s);f.scale.y=.16;g.add(f)}g.position.set(x,0,z);this.scene.add(g);this.floaters.push({mesh:g,base:0,phase:x*.23+z*.17,foam:true})}
  ripple(x,z,s=1){const r=new THREE.Mesh(new THREE.TorusGeometry(.22*s,.018*s,5,20),new THREE.MeshBasicMaterial({color:0x71b8be,transparent:true,opacity:.52}));r.rotation.x=Math.PI/2;r.position.set(x,.108,z);this.scene.add(r);this.floaters.push({mesh:r,base:.108,phase:x*.1+z*.2,ripple:true})}
  buildOuterRiver(){
    for(let i=0;i<28;i++){const a=i/28*Math.PI*2;const r=65+Math.sin(i*2.7)*3.2;this.foam(Math.cos(a)*r,Math.sin(a)*r*.67,.9)}
  }
  river(points,width){
    const left=[],right=[];for(let i=0;i<points.length;i++){const p=points[i],a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)],dx=b[0]-a[0],dz=b[1]-a[1],l=Math.hypot(dx,dz)||1,nx=-dz/l*width/2,nz=dx/l*width/2;left.push([p[0]+nx,p[1]+nz]);right.unshift([p[0]-nx,p[1]-nz]);}
    const poly=[...left,...right],m=this.shape(poly,C.water,.075,{texture:"water",normalTexture:"waterNormal",roughness:.24,metalness:.13});m.material.transparent=true;m.material.opacity=.98;this.water.push(poly);
    // Soft foam clusters signal moving water without turning it into white bars.
    for(let i=1;i<points.length-1;i++){
      const [x,z]=points[i];for(let j=0;j<3;j++)this.foam(x+(Math.random()-.5)*width*.55,z+(Math.random()-.5)*width*.22,.55+Math.random()*.45);for(let j=0;j<2;j++)this.ripple(x+(Math.random()-.5)*width*.42,z+(Math.random()-.5)*width*.24,.7+Math.random()*.65)
    }
    for(let i=0;i<points.length-1;i++){const [x,z]=points[i];for(let j=0;j<4;j++)this.reed(x+(Math.random()-.5)*width*.98,z+(Math.random()-.5)*width*.42)}
  }
  paddy(x,z,w,d){
    // 田埂围住浅水和成行的稻株，远看是规则水田，近看也有可辨认的结构。
    const outer=[[x-w*.57,z-d*.54],[x+w*.5,z-d*.5],[x+w*.58,z+d*.48],[x-w*.49,z+d*.55]];this.shape(outer,0x6c7650,.035,{texture:"earth"});
    const inner=[[x-w*.45,z-d*.4],[x+w*.4,z-d*.37],[x+w*.43,z+d*.35],[x-w*.38,z+d*.4]];this.shape(inner,0x789b85,.065,{texture:"water",normalTexture:"waterNormal",roughness:.36,metalness:.08});
    for(const side of[-1,1]){this.mesh(new THREE.BoxGeometry(.12,.11,d*1.03),0x877450,x+side*w*.51,.105,z);this.mesh(new THREE.BoxGeometry(w*1.04,.11,.12),0x877450,x,.105,z+side*d*.51)}
    // Shallow water is broken into furrows, then every clump has several blades:
    // the field reads as cultivated land instead of a flat green rectangle.
    for(let row=0;row<5;row++){const ridge=this.mesh(new THREE.BoxGeometry(w*.8,.022,.027),0x9caf79,x,.094,z-d*.28+row*d*.14);ridge.rotation.y=(row%2?-.012:.012);for(let col=0;col<7;col++){const rx=x-w*.32+col*w*.105+(row%2)*.035,rz=z-d*.28+row*d*.14;for(let blade=0;blade<3;blade++){const stalk=this.mesh(new THREE.CylinderGeometry(.009,.014,.28+(blade%2)*.05,4),blade===2?0xa7ad62:0x5b8f54,rx+(blade-1)*.027,.2,rz);stalk.rotation.z=(blade-1)*.14;this.swayers.push({mesh:stalk,base:(blade-1)*.14,phase:rx*1.7+rz*.9})}}}
  }
  buildRivers(){
    // A water-city needs a network, not a decorative stroke. Every branch is
    // broad enough for a canoe and joins another branch or the outer water.
    this.river([[-56,-5.7],[-42,-5.2],[-30,-4.9],[-20,-4.4],[-15,-4.2],[-10,-4.45],[-5,-4.0],[0,-3.5],[5,-3.8],[10,-3.05],[15,-3.35],[20,-2.7],[32,-3.4],[44,-2.1],[56,-3.6]],9.0);
    this.river([[-2,33],[-1.4,22],[-1,16],[-1.6,12],[-.8,8],[-1.5,4],[-.4,.2],[0,-3.4]],4.7);
    this.river([[5,35],[8,33],[10,19],[8,14],[11,12.4],[15,12.6],[20,10.8],[32,12],[43,15],[55,17],[61,15]],4.65);
    // West channel remains in the northern wetland. It must not cut through
    // the opening courtyard, the farm district, or the quarry approach.
    this.river([[-47,28],[-40,25],[-33,23],[-26,22],[-20,20],[-14,19],[-8,18],[-4,17],[-1,16]],4.55);
    this.river([[12,-32],[14,-27],[15,-23],[17,-18],[19,-13],[21,-8],[20,-3.1]],4.6);
  }
  reed(x,z){const h=.22+Math.random()*.38;const m=this.mesh(new THREE.CylinderGeometry(.014,.025,h,5),0x3b6f4a,x,h/2+.08,z);m.rotation.z=(Math.random()-.5)*.24}
  buildShore(){for(let i=0;i<this.landPolygon.length;i++){const [x,z]=this.landPolygon[i];for(let k=0;k<3;k++){const rock=this.mesh(new THREE.DodecahedronGeometry(.16+Math.random()*.25),C.stone,x+(Math.random()-.5)*1.8,.12,z+(Math.random()-.5)*1.8,{texture:"stone"});rock.rotation.y=Math.random()*4;this.reed(x+(Math.random()-.5)*2,z+(Math.random()-.5)*2)}}}
  buildWaterworks(){
    // 良渚的水城不靠一条河来“说明”。东侧堤坝露出夯土层、木桩和编束护坡，
    // 让玩家能从远处读到这是一套为聚落服务的水利工程。
    for(let i=0;i<15;i++){const z=-8.5+i*1.82,x=54.15+Math.sin(i*.73)*.19;this.solidCircles.push({x,z,r:.53});const core=this.mesh(new THREE.BoxGeometry(1.18,.32,1.45),i%3?0x857555:0x97835e,x,.17,z,{texture:"earth"});core.rotation.y=Math.sin(i*.5)*.04;for(const side of[-1,1]){const fascine=this.mesh(new THREE.CylinderGeometry(.038,.052,1.27,6),0x6e4c33,x+side*.52,.28,z,{texture:"wood"});fascine.rotation.z=Math.PI/2;fascine.rotation.y=side*.12}if(i%3===0){const marker=this.mesh(new THREE.CylinderGeometry(.045,.065,1.35,6),C.wood,x-.42,.67,z+.34,{texture:"wood"});const level=this.mesh(new THREE.BoxGeometry(.24,.06,.045),0xd9c66d,x-.42,.94,z+.34);level.rotation.y=.18}}
    // Bundled reeds at the toe make the dam meet the water as a protected bank, not a hard blue cut.
    for(let i=0;i<22;i++){const z=-8.9+i*1.25;for(const offset of[-.78,-.65]){const reed=this.mesh(new THREE.CylinderGeometry(.012,.02,.52+(i%3)*.07,5),0x597e4e,53.5+offset*.18,.34,z);reed.rotation.z=offset*.13}}
    // Sluice boards, a gauge and a small platform let players read this as a
    // maintained water-control point, not merely the invisible end of a map.
    const gx=52.95,gz=6.0;for(const side of[-1,1]){this.mesh(new THREE.CylinderGeometry(.075,.1,2.05,7),C.wood,gx+side*.72,1.02,gz,{texture:"wood"});const cap=this.mesh(new THREE.ConeGeometry(.15,.22,6),0x5d422f,gx+side*.72,2.12,gz,{texture:"wood"});cap.rotation.y=side*.3}for(let row=0;row<4;row++){const board=this.mesh(new THREE.BoxGeometry(1.34,.3,.09),row%2?0x755037:0x94704b,gx,.54+row*.29,gz-.19,{texture:"wood"});board.rotation.y=.04}const beam=this.mesh(new THREE.CylinderGeometry(.055,.075,1.78,7),C.wood,gx,1.87,gz,{texture:"wood"});beam.rotation.z=Math.PI/2;this.mesh(new THREE.BoxGeometry(.17,.82,.035),0xd8c66f,gx-.96,.73,gz+.18);for(let i=0;i<5;i++)this.mesh(new THREE.BoxGeometry(.11,.022,.04),0x72563d,gx-.96,.4+i*.14,gz+.155);
  }
  seedClearings(){
    // Scenery is generated before structures, so it needs the same site plan.
    // These are open courtyards / farm plots, not invisible collision hacks.
    const sites=[[-12.8,5.1,4.8,3.6],[-39.5,14.2,5,4.5],[-21,.7,4.5,4],[-20,20,4.5,5],[-11,13,9,7],[26,8,8.5,7],[38,18,7,7],[30,-18,8,7],[51,6,6,7],[-31,-16,5,4.5],[-22,-17,5,4.5],[-12,-17.5,5,4.5],[-3,-16,5,4.5],[-30,-25,4.7,4.4],[-20,-25.5,4.7,4.4],[-9,-25,4.7,4.4],[-52,12,5,4.5],[-47,11,5,4.5],[28,22,5,4.5],[43,25,5,4.5],[39,-22,5,4.5],[-38,-25,5,4.5]];
    this.clearings=sites.map(([x,z,rx,rz])=>({x,z,rx,rz}));
    // Exploration stays on natural ground.  We retain a few vegetation-free
    // clearings around sites, but deliberately draw no artificial road ribbons:
    // those read as roads crossing the river when viewed from an oblique angle.
  }
  inClearing(x,z){return this.clearings.some(c=>Math.abs(x-c.x)<c.rx&&Math.abs(z-c.z)<c.rz)}
  tree(x,z,s=1,solid=false){
    if(solid)this.solidCircles.push({x,z,r:.18*s});
    const trunk=this.mesh(new THREE.CylinderGeometry(.06*s,.13*s,.98*s,7),C.wood,x,.49*s,z);
    const bark=this.mesh(new THREE.CylinderGeometry(.014*s,.018*s,.64*s,5),0x9b7046,x+.1*s,.52*s,z+.04*s);bark.rotation.z=.13;
    for(const [dx,dz,sy,c]of[[-.25,.04,.7,0x3a694b],[.18,-.18,.82,0x456f50],[.08,.18,1,0x527c59],[-.05,-.05,1.05,0x365f45]]){const crown=this.mesh(new THREE.DodecahedronGeometry(.42*s,1),c,x+dx*s,(1.05+sy*.26)*s,z+dz*s);crown.scale.set(1.08,sy,1);crown.rotation.y=Math.random()*3}
    return trunk
  }
  tuft(x,z,s=.25){for(let i=0;i<3;i++){const leaf=this.mesh(new THREE.ConeGeometry(.06*s,.45*s,4),i%2?0x3c754b:0x527f50,x+(Math.random()-.5)*s,.18*s,z+(Math.random()-.5)*s);leaf.rotation.z=(Math.random()-.5)*.65}}
  meadowPatch(x,z,s=1){
    for(let i=0;i<7;i++)this.tuft(x+(Math.random()-.5)*s*1.6,z+(Math.random()-.5)*s,.45+Math.random()*.45);
    if(Math.random()>.42){for(let i=0;i<4;i++){const flower=this.mesh(new THREE.SphereGeometry(.045,7,5),[0xf0cf70,0xe7b2bd,0xe9e6d6][i%3],x+(Math.random()-.5)*s,z? .22: .22,z+(Math.random()-.5)*s);flower.position.y=.28}}
  }
  shrub(x,z,s=1){
    const stems=3+Math.round(s*2);for(let i=0;i<stems;i++){const a=i/stems*Math.PI*2+(x+z)*.13,r=s*(.08+(i%3)*.06);const stem=this.mesh(new THREE.CylinderGeometry(.018,.027,.28*s,5),0x5d5637,x+Math.cos(a)*r,.14*s,z+Math.sin(a)*r,{texture:"wood"});stem.rotation.z=Math.cos(a)*.18;const crown=this.mesh(new THREE.DodecahedronGeometry(.18*s,1),i%2?0x456f50:0x587e55,x+Math.cos(a)*r*1.35,.28*s,z+Math.sin(a)*r*1.35);crown.scale.y=.72}}
  scatterLandscape(){
    // Keep sightlines open around the spawn, quarry, river and landmarks, but
    // make the larger city feel like fields and woods rather than a flat board.
    // Keep the world readable without flooding the GPU with thousands of tiny meshes.
    for(let i=0;i<170;i++){const x=-55+Math.random()*110,z=-30+Math.random()*60;if(!this.onLand(x,z)||this.isWater(x,z)||this.inClearing(x,z))continue;this.tree(x,z,.82+Math.random()*1.02)}
    for(let i=0;i<105;i++){const x=-55+Math.random()*110,z=-30+Math.random()*60;if(!this.onLand(x,z)||this.isWater(x,z)||this.inClearing(x,z))continue;this.shrub(x,z,.42+Math.random()*.68)}
    for(let i=0;i<55;i++){const x=-54+Math.random()*108,z=-29+Math.random()*58;if(!this.onLand(x,z)||this.isWater(x,z)||this.inClearing(x,z))continue;const rock=this.mesh(new THREE.DodecahedronGeometry(.17+Math.random()*.35),C.stone,x,.13,z,{texture:"stone"});rock.scale.y=.7}
    for(let i=0;i<35;i++){const x=-54+Math.random()*108,z=-29+Math.random()*58;if(!this.onLand(x,z)||this.isWater(x,z)||this.inClearing(x,z))continue;this.meadowPatch(x,z,.55+Math.random()*.75)}
    this.mountain(-43,17.4,4.1,2.65);this.mountain(-39.5,18.2,2.8,1.9);this.mountain(-45.2,13.7,2.5,1.65);
    for(const [x,z]of[[-43,15.6],[-39.9,16.3],[-44.4,13.9]]){const jade=this.mesh(new THREE.DodecahedronGeometry(.32),C.jade,x,.43,z,{emissive:0x123c2b,emissiveIntensity:.65});this.floaters.push({mesh:jade,base:.43,phase:Math.random()*4,spin:true})}
  }
  buildTerrainScreens(){
    // Layered groves and low earthworks create districts and near/middle/far planes;
    // routes remain deliberately open, so this is exploration rather than a maze.
    const grove=(x,z,r)=>{for(let i=0;i<11;i++){const a=i/11*Math.PI*2+.19,rr=r*(.55+(i%3)*.14);this.tree(x+Math.cos(a)*rr,z+Math.sin(a)*rr,.72+(i%4)*.1,true);if(i%3===0){const stone=this.mesh(new THREE.DodecahedronGeometry(.32),0x6f6d5d,x+Math.cos(a+.19)*rr*.74,.17,z+Math.sin(a+.19)*rr*.74);stone.scale.y=.62}}};
    const mound=(x,z,rx,rz,h)=>{const earth=this.mesh(new THREE.SphereGeometry(1,15,9),0x6e7f58,x,h*.25,z);earth.scale.set(rx,h,rz);this.solidCircles.push({x,z,r:Math.min(rx,rz)*.65});for(let i=0;i<5;i++)this.tuft(x+(Math.random()-.5)*rx*1.45,z+(Math.random()-.5)*rz*1.25,.85)};
    grove(4,20,3.2);grove(18,25,3.2);grove(-31,-3,3.5);grove(3,-26,3.1);
    mound(-7,24,4.5,2.1,1.1);mound(45,4,3.8,2.2,.9);mound(-43,-12,3.4,2,.82);
    // The eastern dike is a visible, raised end to the world rather than an invisible map edge.
    for(let i=0;i<16;i++){const z=-9+i*1.9,x=53.3+Math.sin(i*.7)*.35;const bank=this.mesh(new THREE.DodecahedronGeometry(.46+(i%3)*.08),0x786e55,x,.24,z);bank.scale.set(1.15,.55,1.65);this.tuft(x-.45,z,.8)}
  }
  mountain(x,z,r,h){
    this.solidCircles.push({x,z,r:r*.68});
    // Low hills in the Liangzhu plain need a planted foot, broken slope and exposed rock,
    // not a stack of cones. Lumps overlap slightly so their silhouette changes by angle.
    const g=new THREE.Group(),part=(geo,tint,px,py,pz,sx,sy,sz,rot=0,opt={})=>{const m=new THREE.Mesh(geo,this.mat(tint,{roughness:1,...opt}));m.position.set(px,py,pz);m.scale.set(sx,sy,sz);m.rotation.y=rot;m.castShadow=m.receiveShadow=true;g.add(m);return m};
    part(new THREE.SphereGeometry(1,16,11),0x617d5a,x,h*.18,z,r,h*.42,r*.78,.12);
    part(new THREE.IcosahedronGeometry(1,2),0x717762,x-r*.14,h*.48,z+.03,r*.78,h*.62,r*.61,.38,{texture:"stone"});
    part(new THREE.DodecahedronGeometry(1,1),0x888370,x+r*.19,h*.7,z-r*.12,r*.52,h*.53,r*.42,-.25,{texture:"stone"});
    part(new THREE.DodecahedronGeometry(1,1),0x696d5f,x-r*.36,h*.38,z-r*.3,r*.35,h*.34,r*.32,.46,{texture:"stone"});
    for(let i=0;i<9;i++){const a=i/9*Math.PI*2+.24,rr=r*(.38+(i%3)*.11),b=part(new THREE.DodecahedronGeometry(.23+(i%3)*.11,0),i%3?C.stone:0x6b725b,x+Math.cos(a)*rr,.16,z+Math.sin(a)*rr,.9,.55,.82,a,{texture:"stone"});b.rotation.z=(i%2?-.12:.1)}
    g.position.y=.02;this.scene.add(g);
  }
  gableRoof(x,y,z,w,d,h,roofTint=C.roof){
    // A complete 人字形 roof: both sloping thatch faces *and* the two triangular
    // end walls are present, so it reads as a built roof instead of two floating V strips.
    const v=new Float32Array([-
      -w/2,0,-d/2, w/2,0,-d/2, -w/2,h,0, w/2,h,0, -w/2,0,d/2, w/2,0,d/2
    ]),geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(v,3));geo.setIndex([0,1,3,0,3,2,2,3,5,2,5,4,0,2,4,1,5,3]);geo.computeVertexNormals();const roof=new THREE.Mesh(geo,this.mat(roofTint,{texture:"thatch",side:THREE.DoubleSide}));roof.position.set(x,y,z);roof.castShadow=roof.receiveShadow=true;this.scene.add(roof);
    for(let i=0;i<7;i++){const strip=this.mesh(new THREE.CylinderGeometry(.018,.028,w*1.05,5),0x9b7449,x,y+.08+i*h*.12,z-d*.43+i*d*.14,{texture:"thatch"});strip.rotation.z=Math.PI/2}const ridge=this.mesh(new THREE.CylinderGeometry(.052,.07,w*1.1,7),0x624a37,x,y+h+.015,z,{texture:"wood"});ridge.rotation.z=Math.PI/2;return roof
  }
  house(x,z,s=1){
    // A real raised home: a person reaches the upper room only by the front stair,
    // then is held by its floor and walls.  The shaded ground level remains a pig pen.
    const floorY=1.72*s,w=3.18*s,d=2.52*s,front=z+d*.5,doorW=.78*s,style=Math.abs(Math.round(x*3+z))%3,wallTint=[0xa77f58,0xb18b60,0x9b7654][style],roofTint=[0x4e4033,0x5b4937,0x433a31][style],floorTint=[0xb78d5d,0xa77c51,0xc09361][style];
    const home={x,z,w,d,y:floorY,front,doorW};this.elevatedAreas.push(home);this.groundColliders.push({x,z,w:w*.9,d:d*.9});
    // Invisible to rendering but raycastable: a click on an elevated roof/floor must
    // identify the house itself, not the distant patch of ground behind it.
    const nav=new THREE.Mesh(new THREE.BoxGeometry(w,floorY+1.45*s,d),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));nav.position.set(x,(floorY+1.45*s)/2,z);nav.userData.home=home;this.scene.add(nav);this.navigationMeshes.push(nav);
    for(const dx of[-w*.43,w*.43])for(const dz of[-d*.43,d*.43])this.mesh(new THREE.CylinderGeometry(.09*s,.13*s,floorY,7),C.wood,x+dx,floorY/2,z+dz,{texture:"wood"});
    this.mesh(new THREE.BoxGeometry(w,.16*s,d),floorTint,x,floorY,z,{texture:"wood"});
    // Woven walls: rear + sides + two front sections leave a real doorway for the stairs.
    const wall=(wx,wz,ww,dd)=>{this.mesh(new THREE.BoxGeometry(ww,.78*s,dd),wallTint,wx,floorY+.43*s,wz,{texture:"weave"});for(let i=0;i<7;i++){const slat=this.mesh(new THREE.BoxGeometry(.035*s,.74*s,.03*s),i%2?0xc19b6d:0x936944,wx-ww*.42+i*ww*.14,floorY+.43*s,wz,{texture:"wood"});slat.rotation.z=(i%2?-.025:.025)}for(let row=0;row<4;row++){const weave=this.mesh(new THREE.BoxGeometry(Math.max(.12,ww*.9),.025*s,.035*s),row%2?0xd1aa70:0x865f40,wx,floorY+.16*s+row*.18*s,wz+.025*s,{texture:"wood"});weave.rotation.z=(row%2?-.01:.01)}};
    wall(x,z-d*.47,w,.1*s);wall(x-w*.47,z,.1*s,d);wall(x+w*.47,z,.1*s,d);wall(x-(doorW+w)*.25,front,w*.5-doorW*.5,.1*s);wall(x+(doorW+w)*.25,front,w*.5-doorW*.5,.1*s);
    // These plan-view strips are the actual solid walls used for movement collision.
    this.wallColliders.push({x,z:z-d*.47,w,d:.16*s},{x:x-w*.47,z,w:.16*s,d},{x:x+w*.47,z,w:.16*s,d},{x:x-(doorW+w)*.25,z:front,w:w*.5-doorW*.5,d:.16*s},{x:x+(doorW+w)*.25,z:front,w:w*.5-doorW*.5,d:.16*s});
    this.mesh(new THREE.BoxGeometry(.88*s,.09*s,.56*s),0xc8ad76,x+.3*s,floorY+.2*s,z+.18*s);
    for(const dx of[-.34,.34])this.mesh(new THREE.CylinderGeometry(.025*s,.035*s,.64*s,5),C.wood,x+dx*s,floorY+.43*s,z+.25*s);
    this.gableRoof(x,floorY+1.06*s,z,w*1.2,d*1.22,.55*s,roofTint);
    // The six tread boxes form a continuous climb from the ground to the doorway.
    const stairLength=1.58*s,stairStart=front+.12*s;for(let i=0;i<6;i++){const t=(i+1)/6;this.mesh(new THREE.BoxGeometry(doorW,.13*s,stairLength/6+.03),0x9a764f,x,t*floorY,stairStart+stairLength*(1-t));}
    // Carry the invisible walkable slope slightly through the doorway. Without
    // that overlap, the final tread falls inside the ground-level collision box.
    this.ramps.push({x,z0:front-.34*s,z1:stairStart+stairLength,w:doorW*.62,y:floorY});
    const pen=this.mesh(new THREE.BoxGeometry(w*.82,.07,d*.67),0x795e42,x,.08,z-.04);for(const dx of[-w*.39,w*.39])for(const dz of[-d*.31,d*.31])this.mesh(new THREE.CylinderGeometry(.045,.06,.56*s,5),C.wood,x+dx,.28,z+dz);
    // A household pen is a small herd, with adults and piglets instead of one
    // decorative animal stranded under an otherwise empty house.
    for(const [ox,oz,scale,tint]of[[-.26,-.12,.92,0xc79b7a],[.25,-.08,.76,0xd5ad8c],[.02,.24,.58,0xb87e65],[-.33,.27,.54,0xe0b69f]]){const pigX=x+ox*s,pigZ=z+oz*s,unit=s*scale,pig=new THREE.Group(),add=(geo,tint,px,py,pz)=>{const part=new THREE.Mesh(geo,this.mat(tint));part.position.set(px,py,pz);part.castShadow=part.receiveShadow=true;pig.add(part);return part};const body=add(new THREE.SphereGeometry(.27*unit,10,7),tint,0,.3*unit,0);body.scale.set(1.35,.76,.8);add(new THREE.SphereGeometry(.11*unit,8,6),0xd5ad8c,.31*unit,.28*unit,0);add(new THREE.SphereGeometry(.052*unit,7,5),0xe1b69d,.395*unit,.275*unit,-.07*unit);for(const side of[-1,1]){const ear=add(new THREE.ConeGeometry(.055*unit,.11*unit,5),0xd9aa91,.27*unit,.42*unit,side*.075*unit);ear.rotation.z=side*.48}for(const dx of[-.17,.17])for(const dz of[-.1,.1])add(new THREE.CylinderGeometry(.032*unit,.042*unit,.22*unit,5),0x9d725c,dx*unit,.12*unit,dz*unit);const tail=add(new THREE.TorusGeometry(.065*unit,.012*unit,5,9,Math.PI*1.3),0xc48771,-.37*unit,.38*unit,.02*unit);tail.rotation.y=Math.PI/2;pig.position.set(pigX,0,pigZ);this.scene.add(pig);this.animals.push({mesh:pig,phase:pigX*.31+pigZ*.21,anchor:{x:pigX,z:pigZ},range:.13*s})}
    return home;
  }
  buildSettlement(){
    // There are intentionally no painted roads.  The player crosses dry land
    // directly and must use watercraft for water, which is both clearer and
    // more physically believable for this wetland settlement.
    // South-bank village: larger homes occupy separate family plots, all set
    // back from the river so their entrance stairs land on dry ground.
    for(const [x,z,s]of[[-31,-16,1.58],[-22,-17,1.62],[-12,-17.5,1.56],[-3,-16,1.52],[-30,-25,1.46],[-20,-25.5,1.52],[-9,-25,1.46]])this.house(x,z,s);
    // The farm district has its own lanes: plots never overlap one another or a road.
    // The eastern plot met the wetland edge at some camera angles; keep three
    // dry fields with clear earthen gaps instead of forcing a fourth plot in.
    for(const [x,z,w,d] of [[-14,10.5,3.9,2.9],[-8.2,10.5,3.7,2.9],[-14,15,4.1,3.0]])this.paddy(x,z,w,d);
    const roof=this.mesh(new THREE.BoxGeometry(9.4,.18,5.2),0x6b5c42,26,2.8,8,{texture:"thatch"});for(const x of[21.8,24.6,27.4,30.2])for(const z of[5.5,10.5])this.mesh(new THREE.CylinderGeometry(.075,.11,2.75,6),C.wood,x,1.38,z,{texture:"wood"});this.buildWorkshopDetails(26,8);
    this.buildRitualPlatform(38,18);
    for(const[x,z,s]of[[30,-18,1.55],[33,-20.4,1.16],[27,-21,1]]){const mound=this.mesh(new THREE.SphereGeometry(1.25*s,16,10),0x776e5b,x,.32,z);mound.scale.y=.45}
    for(const [x,z,w]of[[-17,5.8,3.1],[-15.3,5.8,1.2],[-18.6,4.4,1.8]]){for(let i=0;i<6;i++){const post=this.mesh(new THREE.CylinderGeometry(.035,.05,.55,5),C.wood,x-w/2+i*w/5,.28,z);post.rotation.z=(Math.random()-.5)*.08}}
  }
  buildWorkshopDetails(x,z){
    // A jade workshop is a working surface with abrasive basins, water and unfinished blanks.
    const bench=(bx,bz,angle=0)=>{const top=this.mesh(new THREE.BoxGeometry(2.05,.13,.58),0x765137,bx,.72,bz,{texture:"wood"});top.rotation.y=angle;for(const dx of[-.78,.78])for(const dz of[-.16,.16]){const px=bx+dx*Math.cos(angle)-dz*Math.sin(angle),pz=bz+dx*Math.sin(angle)+dz*Math.cos(angle);this.mesh(new THREE.CylinderGeometry(.04,.055,.69,6),C.wood,px,.35,pz,{texture:"wood"})}};
    bench(x-1.72,z-.6,.03);bench(x+.85,z+.7,-.06);
    for(const [dx,dz,s]of[[-1.72,-.62,.34],[-.8,-.6,.25],[.83,.7,.37],[1.63,.78,.22]]){const tray=this.mesh(new THREE.CylinderGeometry(s,s,.08,16),0x7f7a66,x+dx,.84,z+dz);const slurry=this.mesh(new THREE.CylinderGeometry(s*.72,s*.72,.012,16),0x9da69a,x+dx,.887,z+dz,{roughness:.4});slurry.material.transparent=true;slurry.material.opacity=.76}
    for(const [dx,dz,scale]of[[-2.48,.9,.23],[-2.15,1.06,.17],[2.1,-.95,.21],[1.86,-1.15,.16]]){const blank=this.mesh(new THREE.DodecahedronGeometry(scale,1),C.jade,x+dx,.19,z+dz,{texture:"jade",emissive:0x173f30,emissiveIntensity:.22});blank.rotation.set(.2,.4,.1)}
    for(const [dx,dz]of[[-3.05,-.9],[2.85,1.1]]){const jar=this.mesh(new THREE.SphereGeometry(.22,10,7),0xb57952,x+dx,.2,z+dz,{texture:"clay"});jar.scale.y=1.2;this.mesh(new THREE.CylinderGeometry(.09,.11,.12,9),0x8d5d43,x+dx,.48,z+dz,{texture:"clay"})}
    const rail=this.mesh(new THREE.BoxGeometry(7.9,.06,.08),C.wood,x,1.45,z-2.15,{texture:"wood"});rail.rotation.y=.01;
  }
  jadeCong(x,y,z,scale=1){
    // 玉琮的辨识点不只是“绿色玉石”：外方、内圆和四面的神人兽面纹
    // 让它即使在俯视镜头里也能和普通石柱区别开来。
    const g=new THREE.Group(),jade=this.mat(0x70977d,{texture:"jade",emissive:0x102d22,emissiveIntensity:.2}),dark=this.mat(0x244338,{roughness:.55});
    const width=.58*scale,height=.54*scale;
    const body=new THREE.Mesh(new THREE.BoxGeometry(width,height,width),jade);body.position.y=height*.5;body.castShadow=body.receiveShadow=true;g.add(body);
    // Raised corners preserve the square outline while the dark bore reads as the inner circle.
    for(const dx of[-1,1])for(const dz of[-1,1]){const corner=new THREE.Mesh(new THREE.BoxGeometry(.12*scale,height*.92,.12*scale),this.mat(0x88ad91,{texture:"jade"}));corner.position.set(dx*width*.39,height*.5,dz*width*.39);corner.castShadow=corner.receiveShadow=true;g.add(corner)}
    const bore=new THREE.Mesh(new THREE.CylinderGeometry(.155*scale,.155*scale,height*1.025,18),dark);bore.position.y=height*.5;g.add(bore);
    const rim=new THREE.Mesh(new THREE.TorusGeometry(.158*scale,.022*scale,6,18),this.mat(0xb4c69e,{texture:"jade"}));rim.rotation.x=Math.PI/2;rim.position.y=height+0.006;g.add(rim);
    // Four shallow eye plaques suggest the Liangzhu deity-and-beast mask without faux realism.
    const face=(px,pz,rot)=>{const plate=new THREE.Mesh(new THREE.BoxGeometry(.26*scale,.15*scale,.018*scale),this.mat(0x9cb58f));plate.position.set(px,height*.57,pz);plate.rotation.y=rot;g.add(plate);for(const eye of[-1,1]){const pupil=new THREE.Mesh(new THREE.SphereGeometry(.028*scale,7,5),this.mat(0xd6d58b));pupil.position.set(px+(rot?0:eye*.07*scale),height*.59,pz+(rot?eye*.07*scale:-.012*scale));g.add(pupil)}};
    face(0,-width*.51,0);face(width*.51,0,Math.PI/2);face(0,width*.51,Math.PI);face(-width*.51,0,-Math.PI/2);
    g.position.set(x,y,z);this.scene.add(g);return g
  }
  buildRitualPlatform(x,z){
    // A compact, walkable altar rather than an opaque stack of boxes.  Its
    // footprint deliberately stops well north of the eastern ferry dock.
    const tiers=[[7.1,5.1,.3,.15,0x75654d],[5.9,4.05,.32,.46,0x8b7658],[4.75,3.05,.3,.77,0xa78c64],[4.15,2.55,.16,.995,0xc0a778]];
    for(const [w,d,h,y,c]of tiers){const tier=this.mesh(new THREE.BoxGeometry(w,h,d),c,x,y,z);for(let i=0;i<7;i++){const inlay=this.mesh(new THREE.BoxGeometry(w*.78,.025,.07),i%2?0x9a815d:0xc3aa79,x,y+h*.52+.012,z-d*.38+i*d*.125);inlay.rotation.y=(i%2?-.008:.008)}}
    // One broad south stair shares the same elevated surface used by movement.
    const topY=1.075,front=z+1.28,stairEnd=z+3.55;this.ritualEntry={x,z,topY,stairEnd};for(let i=0;i<6;i++){const t=(i+1)/6;this.mesh(new THREE.BoxGeometry(1.72,.16,(stairEnd-front)/6+.035),0x987d59,x,t*topY,stairEnd-(i+.5)*(stairEnd-front)/6)}
    this.elevatedAreas.push({x,z,w:4.1,d:2.5,y:topY,type:"platform"});this.groundColliders.push({x,z,w:4.52,d:3.05,type:"platform"});this.ramps.push({x,z0:front-.3,z1:stairEnd,w:1.02,y:topY,type:"platform"});
    // Clicking any visible part of the platform uses the same stair route as
    // clicking the priest; it never asks the player to phase through a tier.
    const nav=new THREE.Mesh(new THREE.BoxGeometry(4.15,1.7,2.58),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));nav.position.set(x,.85,z);nav.userData.goTo={x,z,ritual:true};this.scene.add(nav);this.navigationMeshes.push(nav);
    // Four carved wooden posts, their jade eye plaques, and cross-boundary
    // cords give the precinct a ritual edge without enclosing the characters.
    for(const dx of[-2.38,2.38])for(const dz of[-1.45,1.45]){this.mesh(new THREE.CylinderGeometry(.075,.11,1.9,7),C.wood,x+dx,1.0,z+dz);const plaque=this.mesh(new THREE.BoxGeometry(.42,.34,.075),0x76977c,x+dx,1.62,z+dz+(dz<0?-.06:.06));for(const eye of[-1,1])this.mesh(new THREE.SphereGeometry(.052,8,6),0xd9d58b,x+dx+eye*.105,1.64,z+dz+(dz<0?-.11:.11));}
    const altar=this.mesh(new THREE.BoxGeometry(1.12,.48,.74),0x74523b,x,1.31,z-.05);for(const dx of[-.42,.42])for(const dz of[-.24,.24])this.mesh(new THREE.CylinderGeometry(.04,.06,.42,6),C.wood,x+dx,1.1,z+dz);
    this.jadeCong(x,1.56,z-.05,.72);for(const dx of[-1.35,1.35]){this.mesh(new THREE.CylinderGeometry(.18,.24,.22,8),0x6e5540,x+dx,1.19,z-.45);const fire=this.mesh(new THREE.ConeGeometry(.1,.38,7),0xf1a74b,x+dx,1.46,z-.45,{emissive:0xa94d24,emissiveIntensity:.85});this.floaters.push({mesh:fire,base:1.46,phase:dx+x,spin:true})}
    for(const dx of[-2.35,2.35]){const pole=this.mesh(new THREE.CylinderGeometry(.035,.05,1.35,6),C.wood,x+dx,2.35,z-.02);const flag=this.mesh(new THREE.PlaneGeometry(.62,.48),0xb8684d,x+dx+(dx<0?-.3:.3),2.58,z-.02,{side:THREE.DoubleSide});flag.rotation.y=Math.PI/2;pole.rotation.z=(dx<0?-.03:.03)}
  }
  buildFarDistricts(){
    // These separate districts turn the land beyond the opening screen into places to walk to.
    for(const [x,z,s]of[[28,22,1.6],[43,25,1.54],[-38,-25,1.52]])this.house(x,z,s);
    // Public sites remain separated by terrain, water and vegetation rather
    // than by a painted road surface.
    for(const [x,z]of[[-39.5,14.2],[-48,13],[37,18],[30,-18]]){this.mesh(new THREE.CylinderGeometry(.28,.38,.7,8),0x8d7455,x,.35,z);const fire=this.mesh(new THREE.ConeGeometry(.17,.55,7),0xf2a84e,x,.76,z,{emissive:0xa94d24,emissiveIntensity:.7});this.floaters.push({mesh:fire,base:.76,phase:x,spin:true})}
    // Distant palisades and granaries form silhouettes that invite the player farther out.
    for(const [cx,cz,count]of[[-55,7,10],[45,17,11],[-31,-24,9]])for(let i=0;i<count;i++){const p=this.mesh(new THREE.CylinderGeometry(.06,.1,1.45,6),C.wood,cx+i*.48,.72,cz+(Math.sin(i*.9)*.25));p.rotation.z=(Math.random()-.5)*.08}
    this.raisedGranary(34,25);
    this.buildPalaceCompound(-48,12.5);
    this.buildNecropolis(31,-19.3);
    this.buildRiceProcessing(-20,15.8);
    this.buildFoodProcessing(-35,-12.8);
    this.mountain(-52,25,5.1,3.5);this.mountain(49,25,4.8,3.1);this.mountain(-46,-20,4.1,2.7);
  }
  buildPalaceCompound(x,z){
    // A timber, earth and thatch high-status compound—not a later gold palace.
    // The raised precinct makes the north-west worth reaching without claiming a
    // precise reconstruction of a specific building.
    // It is deliberately a compound rather than one oversized hut: the main
    // hall, stores and work rooms make the district read as a place where a
    // settlement's labour and ceremony are coordinated.
    const w=12.8,d=9.4;this.shape([[x-w/2,z-d/2],[x+w/2,z-d/2],[x+w/2,z+d/2],[x-w/2,z+d/2]],0x9d805b,.09,{texture:"earth"});
    // The enclosure has a real gate gap; it reads as a precinct without asking
    // the player to phase through posts or invisible walls.
    this.wallColliders.push({x:x-w*.48,z,w:.13,d:d*.9},{x:x+w*.48,z,w:.13,d:d*.9},{x,z:z-d*.45,w:w*.9,d:.13},{x:x-w*.31,z:z+d*.45,w:w*.28,d:.13},{x:x+w*.31,z:z+d*.45,w:w*.28,d:.13});
    for(const side of[-1,1])for(let i=0;i<14;i++){const p=this.mesh(new THREE.CylinderGeometry(.055,.085,1.05,6),C.wood,x+side*(w*.48),.53,z-d*.42+i*d*.064,{texture:"wood"});p.rotation.z=side*.02}
    // Leave the same broad south-side opening in the visible palisade that
    // exists in its collision wall.  A gate is only legible when eyes and feet
    // agree about where the player may pass.
    for(const side of[-1,1])for(let i=0;i<17;i++){const px=x-w*.45+i*w*.056;if(side===1&&Math.abs(px-x)<1.55)continue;this.mesh(new THREE.CylinderGeometry(.045,.07,.9,6),C.wood,px,.45,z+side*d*.45,{texture:"wood"});}
    // Gate opening and broad timber hall on a rammed-earth platform.
    for(const dx of[-1.25,1.25])this.mesh(new THREE.CylinderGeometry(.12,.16,1.7,7),C.wood,x+dx,.85,z+d*.49,{texture:"wood"});const lintel=this.mesh(new THREE.CylinderGeometry(.075,.1,2.85,7),C.wood,x,1.66,z+d*.49,{texture:"wood"});lintel.rotation.z=Math.PI/2;
    const hallY=.46,hallZ=z-.48;this.mesh(new THREE.BoxGeometry(6.8,.34,4.15),0xa58860,x,hallY,hallZ,{texture:"earth"});this.groundColliders.push({x,z:hallZ,w:6.95,d:4.3,type:"palace-hall"});
    for(const dx of[-2.85,-.95,.95,2.85])for(const dz of[-1.52,1.52])this.mesh(new THREE.CylinderGeometry(.11,.15,2.1,7),C.wood,x+dx,1.48,hallZ+dz,{texture:"wood"});this.mesh(new THREE.BoxGeometry(6.02,.74,.13),0xaa8058,x,1.47,hallZ-2.15,{texture:"weave"});for(const side of[-1,1])this.mesh(new THREE.BoxGeometry(.13,.74,2.98),0xaa8058,x+side*3.02,1.47,hallZ,{texture:"weave"});this.gableRoof(x,1.9,hallZ,7.65,5.05,1.22,0x463a30);
    // Two unequal annexes stop the enclosure reading as a duplicate of a
    // household: one stores grain and vessels, the other supports preparation.
    const annex=(ax,az,aw,ad,tint)=>{this.mesh(new THREE.BoxGeometry(aw,.18,ad),0x9b7956,ax,.18,az,{texture:"earth"});this.groundColliders.push({x:ax,z:az,w:aw*.96,d:ad*.96,type:"palace-annex"});for(const dx of[-aw*.37,aw*.37])for(const dz of[-ad*.36,ad*.36])this.mesh(new THREE.CylinderGeometry(.07,.095,1.18,6),C.wood,ax+dx,.59,az+dz,{texture:"wood"});this.mesh(new THREE.BoxGeometry(aw*.78,.52,ad*.68),tint,ax,.55,az,{texture:"weave"});this.gableRoof(ax,1.06,az,aw*1.08,ad*1.18,.61,0x594534)};
    annex(x-4.35,z-1.45,2.35,2.18,0xb28c5f);annex(x+4.2,z-1.62,2.05,1.86,0x997452);
    // A court has evidence of organisation: sorted bundles, a tally board and
    // food bowls.  These quiet props distinguish it from both family yards and
    // the ceremonial platform without turning it into a fantasy throne room.
    for(const [dx,dz]of[[-2.15,1.32],[-.65,1.45],[.95,1.3],[2.32,1.48]]){const mat=this.mesh(new THREE.CylinderGeometry(.34,.34,.028,12),0xb99458,x+dx,.12,z+dz,{texture:"weave"});for(let i=0;i<5;i++){const bowl=this.mesh(new THREE.SphereGeometry(.09,8,6),i%2?0xb77852:0x8a7150,x+dx+(i-2)*.08,.23,z+dz+(i%2)*.05,{texture:"clay"});bowl.scale.y=.55}}
    for(const [dx,dz,scale]of[[-4.65,2.65,.78],[-3.72,2.64,.64],[4.2,2.38,.58]]){const bundle=this.mesh(new THREE.ConeGeometry(.13*scale,.55*scale,5),0xb79c50,x+dx,.31*scale,z+dz,{texture:"weave"});bundle.rotation.z=(dx<0?-.09:.08)}
    const tallyPost=this.mesh(new THREE.CylinderGeometry(.045,.065,.86,6),C.wood,x+3.8,.43,z+2.55,{texture:"wood"});const tally=this.mesh(new THREE.BoxGeometry(.48,.38,.045),0x9c7550,x+3.8,.72,z+2.52,{texture:"wood"});for(let i=0;i<4;i++){const notch=this.mesh(new THREE.BoxGeometry(.25,.012,.014),0x5d402d,x+3.8,.58+i*.07,z+2.49);notch.rotation.z=(i%2?-.04:.04)}
    for(const [dx,dz]of[[-5.0,1.85],[-4.65,2.15],[4.55,1.7]]){const jar=this.mesh(new THREE.SphereGeometry(.18,10,7),0xb77952,x+dx,.19,z+dz,{texture:"clay"});jar.scale.y=1.18}
    this.discovery("palace","城内高台居所","木柱、夯土台、粮仓和茅草屋顶围出一处高台居所。它不以金银炫耀，却让人看见组织修堤、制玉与祭仪所需的聚落权力。",x+5.15,z+2.7,.02);
    this.discovery("palace-tally","高台的刻痕板","木板上是分粮、工具与劳作的刻痕；大聚落也要有人记住每天怎样安排。",x+3.8,z+2.25,.02);
    this.discovery("palace-store","高台院里的储物罐","谷物与种子被收在陶罐里，避开潮气，也让高台院落有真正的日常用途。",x-5.0,z+2.6,.02);
  }
  buildNecropolis(x,z){
    // Several varied tomb mounds make this a cemetery landscape rather than a
    // single quest guard standing beside one generic hill.
    const graves=[[-3.65,1.75,.72,.24],[-2.2,.5,1.25,.42],[-.45,-.2,1.62,.55],[1.7,.58,1.1,.35],[3.25,1.9,.74,.25],[2.9,-1.1,.82,.28],[-2.8,-1.7,.76,.26],[-3.45,-2.35,.67,.22],[3.65,-2.25,.7,.23]];
    for(const [dx,dz,r,h]of graves){this.solidCircles.push({x:x+dx,z:z+dz,r:r*.72});const mound=this.mesh(new THREE.SphereGeometry(r,16,10),0x796e59,x+dx,h,z+dz,{texture:"earth"});mound.scale.y=.52;for(let i=0;i<3;i++){const a=i/3*Math.PI*2;this.mesh(new THREE.CylinderGeometry(.025,.04,.68,5),i===0?0xd7d1b7:C.wood,x+dx+Math.cos(a)*r*.72,.34,z+dz+Math.sin(a)*r*.52,{texture:"wood"})}if(r>.9){const offering=this.mesh(new THREE.CylinderGeometry(.11,.15,.12,9),0xb37952,x+dx-r*.18,.16,z+dz+r*.4,{texture:"clay"});const cover=this.mesh(new THREE.CylinderGeometry(.075,.09,.028,9),0x87614a,x+dx-r*.18,.235,z+dz+r*.4,{texture:"clay"});cover.rotation.y=.2}}
    for(let i=0;i<7;i++){const pole=this.mesh(new THREE.CylinderGeometry(.035,.05,.95,6),C.wood,x-3.8+i*1.12,.48,z+2.1,{texture:"wood"});const streamer=this.mesh(new THREE.PlaneGeometry(.22,.48),i%2?0xd7d0b5:0x9b765e,x-3.8+i*1.12,.82,z+2.1,{side:THREE.DoubleSide});streamer.rotation.y=Math.PI/2;pole.rotation.z=(i%2?-.025:.025)}
    const bier=this.mesh(new THREE.BoxGeometry(1.65,.18,.5),0x765137,x-.2,.42,z+2.65,{texture:"wood"});for(const dx of[-.62,.62])for(const dz of[-.15,.15])this.mesh(new THREE.CylinderGeometry(.035,.05,.6,6),C.wood,x+dx,.18,z+2.65+dz,{texture:"wood"});this.discovery("necropolis","反山墓地","大小不一的墓丘、木幡与送葬用的木架把这里读成墓地。墓葬的规格差异，也保留下社会如何分工与纪念逝者的线索。",x+3.75,z+1.75,.02);this.discovery("grave-offering","墓前的陶器","陶器安放在墓丘旁，让后人看见当时的人愿意留下怎样的日常与心意。",x-.82,z+.38,.02);this.discovery("grave-banner","送葬的白幡","风里的白幡把墓地从普通山坡中区分出来，也提示这里有不同规格的安放。",x-3.9,z+2.1,.02);
  }
  buildRiceProcessing(x,z){
    // Harvest is a separate worksite: drying, dehusking and storing are visible.
    const floor=this.mesh(new THREE.CylinderGeometry(1.82,1.92,.09,14),0xb58d55,x,.05,z,{texture:"earth"});for(let i=0;i<28;i++){const grain=this.mesh(new THREE.CylinderGeometry(.014,.02,.1,5),i%3?0xd7bd63:0xaf9746,x+(Math.random()-.5)*2.6,.14,z+(Math.random()-.5)*2.1);grain.rotation.z=(i%3-1)*.16}for(const dx of[-1.3,1.3]){const mortar=this.mesh(new THREE.CylinderGeometry(.28,.36,.38,12),0x817766,x+dx,.19,z-.55,{texture:"stone"});const pestle=this.mesh(new THREE.CylinderGeometry(.045,.065,.78,7),C.wood,x+dx+.08,.59,z-.55,{texture:"wood"});pestle.rotation.z=.24}for(let i=0;i<4;i++){const bundle=this.mesh(new THREE.ConeGeometry(.13,.66,5),0xbea24d,x-1.05+i*.68,.33,z+1.3,{texture:"weave"});bundle.rotation.z=(i%2?-.1:.1)}this.discovery("rice-yard","晒谷与舂米场","稻子离开田里后，还要晒干、脱粒、舂去外壳，最后才进高仓。田、晒场与粮仓是一条完整的生活链。",x+2.3,z+.8,.02);
  }
  buildFoodProcessing(x,z){
    // Deliberately non-graphic: a food-processing shed, drying rack and wash
    // basin make animal husbandry visible without turning a family game gory.
    for(const dx of[-1.5,1.5])for(const dz of[-.8,.8])this.mesh(new THREE.CylinderGeometry(.065,.09,1.45,6),C.wood,x+dx,.72,z+dz,{texture:"wood"});this.gableRoof(x,1.22,z,3.65,2.45,.76);const table=this.mesh(new THREE.BoxGeometry(1.75,.12,.68),0x765137,x,.75,z+.15,{texture:"wood"});for(const dx of[-.68,.68])for(const dz of[-.2,.2])this.mesh(new THREE.CylinderGeometry(.035,.05,.7,6),C.wood,x+dx,.37,z+.15+dz,{texture:"wood"});const basin=this.mesh(new THREE.CylinderGeometry(.38,.44,.18,12),0x766e5e,x-1.9,.11,z-.35,{texture:"stone"});const water=this.mesh(new THREE.CylinderGeometry(.31,.31,.018,12),0x719a93,x-1.9,.21,z-.35,{texture:"water",normalTexture:"waterNormal"});for(let i=0;i<5;i++){const strip=this.mesh(new THREE.BoxGeometry(.14,.46,.05),i%2?0xa77952:0xbd8c60,x+1.95,.75,z-.65+i*.3,{texture:"weave"});strip.rotation.z=(i%2?-.04:.04)}this.discovery("food-yard","肉食处理棚","屋下饲养之外，清洗、分切、晾晒和储存也需要独立的棚与水盆。这里不展示血腥，只让人看见食物如何被认真处理。",x+2.45,z+.75,.02);
  }
  raisedGranary(x,z){
    // 稻作城市需要把收成跨过潮湿季节。高仓以粗壮柱脚、封闭编墙和挑檐
    // 说明“晒—藏—防潮”的连续逻辑；它位于支聚落，不拦截任何主线道路。
    const w=2.35,d=1.78,floorY=1.48;this.groundColliders.push({x,z,w:w*.88,d:d*.88,type:"granary"});
    for(const dx of[-w*.42,w*.42])for(const dz of[-d*.42,d*.42]){const post=this.mesh(new THREE.CylinderGeometry(.09,.13,floorY,7),C.wood,x+dx,floorY*.5,z+dz,{texture:"wood"});const foot=this.mesh(new THREE.CylinderGeometry(.18,.23,.13,8),C.stone,x+dx,.065,z+dz,{texture:"stone"});post.rotation.z=dx*-.015}
    this.mesh(new THREE.BoxGeometry(w,.14,d),0x996d47,x,floorY,z,{texture:"wood"});
    const bin=this.mesh(new THREE.BoxGeometry(w*.84,.82,d*.72),0xa77f58,x,floorY+.43,z,{texture:"weave"});
    for(let i=0;i<6;i++){const band=this.mesh(new THREE.BoxGeometry(w*.86,.035,.04),i%2?0xd0a66b:0x805a3e,x,floorY+.11+i*.14,z-d*.37,{texture:"wood"});band.rotation.z=(i%2?-.015:.015)}
    // The granary is a distinct high-storage building, but it still has a
    // complete 人字形 roof with visible end walls—never two detached V strips.
    this.gableRoof(x,floorY+.92,z,w*1.18,d*1.22,.54);
    for(const [dx,dz,s]of[[-.5,-.28,.17],[.13,-.25,.2],[.47,.19,.16]]){const jar=this.mesh(new THREE.SphereGeometry(s,10,7),0xb87852,x+dx,floorY+.2,z+dz,{texture:"clay"});jar.scale.y=1.2;}
    for(let i=0;i<5;i++){const sack=this.mesh(new THREE.ConeGeometry(.16,.35,7),i%2?0xc1a45d:0xa98a4c,x-.68+i*.32,.22,z+1.0,{texture:"weave"});sack.rotation.z=(i%2?-.07:.07)}
    this.discovery("granary-store","聚落的高仓","收好的稻谷先晒干，再装进陶器和编筐，存到离地的高仓里。粮食能过潮湿的季节，一座城才有余力做玉、修堤、举行仪式。",x+1.46,z+.52,.02);
  }
  chicken(x,z,s=.42,tint=0xd8c7a2){
    // Small domestic fowl give the courts and drying grounds a second, quieter
    // moving scale.  They stay tied to one household work area rather than
    // wandering across the settlement like decorative particles.
    const g=new THREE.Group(),add=(geo,color,px,py,pz)=>{const part=new THREE.Mesh(geo,this.mat(color));part.position.set(px,py,pz);part.castShadow=part.receiveShadow=true;g.add(part);return part};
    const body=add(new THREE.SphereGeometry(.22*s,9,6),tint,0,.2*s,0);body.scale.set(1.28,.84,.92);const head=add(new THREE.SphereGeometry(.105*s,8,6),0xe3bea0,.19*s,.37*s,-.04*s);add(new THREE.ConeGeometry(.035*s,.12*s,5),0xc88a40,.245*s,.36*s,-.1*s).rotation.x=Math.PI/2;
    const comb=add(new THREE.SphereGeometry(.038*s,6,5),0xaf4d3f,.18*s,.49*s,-.025*s);comb.scale.y=.6;for(const side of[-1,1]){const tail=add(new THREE.ConeGeometry(.1*s,.3*s,5),side<0?0x755b48:0x93745a,-.2*s,.34*s,side*.065*s);tail.rotation.z=side*.82;const leg=add(new THREE.CylinderGeometry(.018*s,.024*s,.22*s,5),0xb68442,side*.06*s,.08*s,.04*s);leg.rotation.z=side*.04}
    g.position.set(x,0,z);this.scene.add(g);this.animals.push({kind:"fowl",mesh:g,head,phase:x*.29-z*.17,anchor:{x,z},range:.28*s});return g
  }
  buildDailyLife(){
    // Small, repeated work objects make the settlement read as a lived-in water town:
    // tools at the workshop, grain at homes, and gear at the water's edge.
    const jar=(x,z,s=.22,color=0xb77a52)=>{const g=new THREE.Group();const body=new THREE.Mesh(new THREE.SphereGeometry(s,10,7),this.mat(color,{texture:"clay"}));body.scale.y=1.15;body.position.y=s*.9;g.add(body);const neck=new THREE.Mesh(new THREE.CylinderGeometry(s*.42,s*.5,s*.28,9),this.mat(0x8c5c42,{texture:"clay"}));neck.position.y=s*1.8;g.add(neck);g.position.set(x,0,z);this.scene.add(g)};
    const basket=(x,z,s=.3)=>{const g=new THREE.Group();const body=new THREE.Mesh(new THREE.CylinderGeometry(s*.72,s,s*.55,10),this.mat(0xa87943,{texture:"weave"}));body.position.y=s*.28;g.add(body);const handle=new THREE.Mesh(new THREE.TorusGeometry(s*.62,s*.055,6,12),this.mat(0x765137));handle.rotation.x=Math.PI/2;handle.position.y=s*.6;g.add(handle);g.position.set(x,0,z);this.scene.add(g)};
    const woodpile=(x,z,s=1)=>{for(let row=0;row<3;row++)for(let i=0;i<4-row;i++){const log=this.mesh(new THREE.CylinderGeometry(.065*s,.075*s,.75*s,7),row%2?0x5e402e:0x84583a,x+(i-(3-row)*.5)*.19*s,.1+row*.13*s,z+(row%2)*.15*s,{texture:"wood"});log.rotation.z=Math.PI/2}};
    const rack=(x,z,s=1)=>{for(const dx of[-.56,.56])this.mesh(new THREE.CylinderGeometry(.04*s,.055*s,.88*s,6),C.wood,x+dx*s,.44*s,z,{texture:"wood"});const bar=this.mesh(new THREE.CylinderGeometry(.035*s,.05*s,1.32*s,6),C.wood,x,.78*s,z,{texture:"wood"});bar.rotation.z=Math.PI/2;for(let i=0;i<4;i++){const bundle=this.mesh(new THREE.ConeGeometry(.09*s,.48*s,5),i%2?0xc5a65a:0x9b873e,x-.42*s+i*.28*s,.48*s,z+.02);bundle.rotation.z=(i%2?-.1:.1)}};
    for(const [x,z]of[[-33,-14.8],[-24,-14.6],[-14,-15.1],[-5,-15],[-31,-23],[-21,-23.2],[-10,-23]]){basket(x,z,.28);jar(x+.45,z+.18,.19);woodpile(x-.38,z+.62,.72)}
    rack(-10.3,13.3,.85);basket(-11.8,12.9,.34);jar(-8.2,12.4,.2);woodpile(23.8,5.7,.82);woodpile(28.6,10.4,.7);jar(27.4,6.3,.24);jar(29.2,6.7,.18);
    for(const [x,z]of[[-21,1.85],[7,1.95],[25,2.85],[21.2,-17.4]]){const coil=new THREE.Mesh(new THREE.TorusGeometry(.23,.035,7,14),this.mat(0xbd9a62));coil.rotation.x=Math.PI/2;coil.position.set(x,.12,z);this.scene.add(coil);const post=this.mesh(new THREE.CylinderGeometry(.045,.07,.7,6),C.wood,x+.35,.35,z+.25,{texture:"wood"});post.rotation.z=.07}
    // 晒垫、谷束、石磨和火塘把“有人在这里生活”的时间感留在院落边，
    // 同时不侵占道路和任务路线，避免以视觉代价制造新的移动碰撞。
    const dryingMat=(x,z,s=1)=>{this.mesh(new THREE.CylinderGeometry(.56*s,.56*s,.035,14),0xb88e56,x,.055,z,{texture:"weave"});for(let i=0;i<13;i++){const grain=this.mesh(new THREE.CylinderGeometry(.016,.022,.11,5),i%2?0xd4bb61:0xb49a4d,x+((i*37)%100/100-.5)*.78*s,.125,z+((i*61)%100/100-.5)*.78*s);grain.rotation.z=(i%3-.8)*.16}};
    dryingMat(-34.2,-20.6,.98);dryingMat(-6.1,-20.5,.85);dryingMat(-49.2,13.8,.78);
    const mill=(x,z)=>{this.mesh(new THREE.CylinderGeometry(.48,.56,.17,14),0x777061,x,.09,z,{texture:"stone"});this.mesh(new THREE.TorusGeometry(.26,.075,7,16),0x9a907b,x,.2,z,{texture:"stone"});const hand=this.mesh(new THREE.CylinderGeometry(.06,.075,.58,7),0x746c5d,x+.08,.3,z,{texture:"stone"});hand.rotation.z=.8};
    mill(-30.4,-20.1);mill(-49.6,12.8);
    const hearth=(x,z)=>{for(let i=0;i<8;i++){const a=i/8*Math.PI*2,stone=this.mesh(new THREE.DodecahedronGeometry(.12,0),0x716b5f,x+Math.cos(a)*.35,.1,z+Math.sin(a)*.35,{texture:"stone"});stone.scale.y=.55}this.mesh(new THREE.CylinderGeometry(.2,.25,.02,12),0x4f4c43,x,.07,z);const flame=this.mesh(new THREE.ConeGeometry(.075,.25,6),0xee9b49,x,.22,z,{emissive:0xa64a23,emissiveIntensity:.6});this.floaters.push({mesh:flame,base:.22,phase:x+z,spin:true})};
    hearth(-33.8,-20.1);hearth(-49.2,12.7);
    for(const [x,z,s,tint]of[[-17.75,7.35,.54,0xd9c9a7],[-10.75,8.0,.43,0xb9825d],[-21.55,14.2,.48,0xd5c4a1],[-33.55,-13.7,.52,0xc9b18d],[-36.0,-12.1,.4,0xa97055]])this.chicken(x,z,s,tint);
    this.buildCourtyardDetails();
  }
  buildCourtyardDetails(){
    // Open ground in a settlement is not a drawn road.  It is a lived-in yard:
    // herbs grow at its edge, tools wait near a wall, and the middle remains
    // clear enough for people to carry water and grain.
    const herb=(x,z,s=1,tint=0x507a4d)=>{for(let i=0;i<5;i++){const a=i/5*Math.PI*2+(x-z)*.17,r=.12*s+(i%2)*.06*s;const blade=this.mesh(new THREE.ConeGeometry(.026*s,.23*s,4),i%2?tint:0x6c9256,x+Math.cos(a)*r,.115*s,z+Math.sin(a)*r);blade.rotation.z=Math.cos(a)*.38}};
    const pebble=(x,z,s=.1)=>{const stone=this.mesh(new THREE.DodecahedronGeometry(s,0),0x7a7565,x,s*.38,z,{texture:"stone"});stone.scale.y=.58};
    const jar=(x,z,s=.2)=>{const body=this.mesh(new THREE.SphereGeometry(s,10,7),0xb57952,x,s*.82,z,{texture:"clay"});body.scale.y=1.16;this.mesh(new THREE.CylinderGeometry(s*.38,s*.48,s*.24,8),0x80513d,x,s*1.64,z,{texture:"clay"})};
    // Spawn courtyard: retain a clear ring around 阿玉, then place small household
    // activity at its boundaries so the opening shot has scale and a reason to explore.
    for(const [x,z,s]of[[-16.2,3.6,.95],[-15.8,6.9,.8],[-10.1,3.5,.9],[-9.7,6.8,.72],[-13.9,8.0,.68],[-17.1,5.5,.62]])herb(x,z,s);
    for(const [x,z,s]of[[-16.7,4.3,.13],[-16.2,7.3,.09],[-10.2,4.4,.12],[-9.4,6.2,.1],[-14.7,8.2,.1],[-17.4,6.1,.08]])pebble(x,z,s);
    const rackX=-16.25,rackZ=6.8;for(const dx of[-.46,.46])this.mesh(new THREE.CylinderGeometry(.035,.05,.7,6),C.wood,rackX+dx,.35,rackZ,{texture:"wood"});const bar=this.mesh(new THREE.CylinderGeometry(.03,.04,1.06,6),C.wood,rackX,.66,rackZ,{texture:"wood"});bar.rotation.z=Math.PI/2;for(let i=0;i<3;i++){const bundle=this.mesh(new THREE.ConeGeometry(.075,.34,5),i%2?0xc2a45c:0x9f8843,rackX-.25+i*.25,.42,rackZ+.02,{texture:"weave"});bundle.rotation.z=(i-1)*.08}
    jar(-10.15,6.75,.2);jar(-9.72,6.52,.15);const basket=this.mesh(new THREE.CylinderGeometry(.23,.3,.2,10),0xaa7f4d,-10.8,.1,7.25,{texture:"weave"});const handle=new THREE.Mesh(new THREE.TorusGeometry(.18,.026,6,12),this.mat(0x765137));handle.rotation.x=Math.PI/2;handle.position.set(-10.8,.24,7.25);this.scene.add(handle);
    // The north farm edge gets an equally small drying corner, preventing the
    // paddy district from reading as fields pasted onto an empty lawn.
    for(const [x,z,s]of[[-16.7,12.4,.75],[-6.8,12.1,.68],[-17.4,16.7,.62],[-7.2,15.6,.58]])herb(x,z,s);
    for(const [x,z,s]of[[-17.25,11.9,.09],[-6.35,11.7,.11],[-17.8,16.1,.08],[-6.8,16.4,.12]])pebble(x,z,s);
  }
  buildCraftScenes(){
    // Separate work scenes make the settlement legible as a chain of real livelihoods,
    // not a row of identical houses with NPC labels.
    const kilnX=-13.35,kilnZ=-17.35;this.solidCircles.push({x:kilnX,z:kilnZ,r:.72});
    const kilnBase=this.mesh(new THREE.CylinderGeometry(.78,.92,.28,12),0x8d6047,kilnX,.14,kilnZ,{texture:"clay"});const kilnDome=this.mesh(new THREE.SphereGeometry(.76,14,10),0x9d6c4e,kilnX,.52,kilnZ,{texture:"clay"});kilnDome.scale.y=.72;const mouth=this.mesh(new THREE.CylinderGeometry(.19,.22,.025,12),0x281f1a,kilnX,.31,kilnZ-.73);mouth.rotation.x=Math.PI/2;const flame=this.mesh(new THREE.ConeGeometry(.08,.27,6),0xef9c4e,kilnX,.34,kilnZ-.76,{emissive:0xb74a25,emissiveIntensity:.8});this.floaters.push({mesh:flame,base:.34,phase:kilnX,spin:true});
    for(const [dx,dz,s]of[[-1.02,-.22,.17],[-.86,.14,.13],[-.98,.45,.2],[-.58,-.63,.14]]){const pot=this.mesh(new THREE.SphereGeometry(s,10,7),0xb87852,kilnX+dx,s*.86,kilnZ+dz,{texture:"clay"});pot.scale.y=1.22;this.mesh(new THREE.CylinderGeometry(s*.42,s*.5,s*.24,8),0x744636,kilnX+dx,s*1.8,kilnZ+dz,{texture:"clay"})}
    const net=(x,z)=>{for(const dx of[-.72,.72])this.mesh(new THREE.CylinderGeometry(.045,.06,1.65,6),C.wood,x+dx,.82,z,{texture:"wood"});for(let row=0;row<4;row++)for(let col=0;col<5;col++){const knot=this.mesh(new THREE.SphereGeometry(.025,6,5),0xc5b281,x-.52+col*.26,.94-row*.22,z-.025);knot.scale.y=.6}for(let row=0;row<4;row++){const line=this.mesh(new THREE.CylinderGeometry(.008,.008,1.1,5),0xc5b281,x,.94-row*.22,z-.02);line.rotation.z=Math.PI/2}for(let col=0;col<5;col++){const line=this.mesh(new THREE.CylinderGeometry(.008,.008,.78,5),0xc5b281,x-.52+col*.26,.55,z-.02)}};
    net(-8.95,-9.25);for(const [dx,dz]of[[-.3,.56],[.22,.48],[.52,.2]]){const fish=this.mesh(new THREE.SphereGeometry(.08,8,5),0xb7c5b2,-8.95+dx,.18,-9.25+dz);fish.scale.set(1.5,.5,.65)}
    const loomX=2.15,loomZ=13.25;for(const dx of[-.7,.7])this.mesh(new THREE.CylinderGeometry(.045,.06,1.35,6),C.wood,loomX+dx,.68,loomZ,{texture:"wood"});for(const y of[.24,.92,1.3]){const beam=this.mesh(new THREE.CylinderGeometry(.03,.045,1.55,6),C.wood,loomX,y,loomZ,{texture:"wood"});beam.rotation.z=Math.PI/2}for(let i=0;i<11;i++){const thread=this.mesh(new THREE.CylinderGeometry(.009,.009,.8,5),i%2?0xd2bf9a:0xb69770,loomX-.5+i*.1,.6,loomZ-.018);thread.rotation.z=.02}const cloth=this.mesh(new THREE.PlaneGeometry(1.04,.46),0x8a747e,loomX,.58,loomZ+.04,{side:THREE.DoubleSide});cloth.rotation.y=Math.PI;
  }
  label(text,y=1.85,color="#fff2c5"){
    const canvas=document.createElement("canvas");canvas.width=320;canvas.height=72;const ctx=canvas.getContext("2d");
    ctx.font="600 30px sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle="rgba(16,38,30,.78)";ctx.roundRect(8,8,304,56,20);ctx.fill();ctx.fillStyle=color;ctx.fillText(text,160,38);
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthTest:false}));sprite.position.y=y;sprite.scale.set(1.95,.44,1);return sprite
  }
  questMarker(y=1.98){
    const g=new THREE.Group();const material=new THREE.MeshBasicMaterial({color:0xffd66a});
    const stem=new THREE.Mesh(new THREE.CapsuleGeometry(.062,.34,4,8),material);stem.position.y=.22;g.add(stem);
    const dot=new THREE.Mesh(new THREE.SphereGeometry(.072,9,7),material);dot.position.y=-.12;g.add(dot);
    const halo=new THREE.Mesh(new THREE.RingGeometry(.25,.29,20),new THREE.MeshBasicMaterial({color:0xffda72,transparent:true,opacity:.72,side:THREE.DoubleSide}));halo.rotation.x=-Math.PI/2;halo.position.y=-.22;g.add(halo);
    g.position.y=y;g.visible=false;g.userData.questMarker=true;this.questMarkers.push(g);this.floaters.push({mesh:g,base:y,phase:Math.random()*5,marker:true});return g
  }
  makeNPC(id,name,copy,x,z,color=0xd3a876,kind="side"){
    const g=new THREE.Group();g.position.set(x,.02,z);
    const complexion={quarry:0xb97855,boat:0xc88d66,rice:0xc18b68,workshop:0xa97052,ritual:0xd3a17a,tomb:0xb87f60,fisher:0xa86f51,weaver:0xc58e6c}[id]||0xc88d66;
    const hairStyle=["ritual","weaver","rice","palace","palace-resident","cook"].includes(id)?"bun":["boat","fisher","carpenter","quarry","workshop","potter"].includes(id)?"cropped":"braid";
    // People are built from separate legs, feet, hands, face and clothing layers:
    // an unmistakable human silhouette at both close and map-view distances.
    const robe=new THREE.Mesh(new THREE.CylinderGeometry(.2,.29,.66,8),this.mat(color,{texture:"weave"}));robe.position.y=.66;g.add(robe);
    const hem=new THREE.Mesh(new THREE.CylinderGeometry(.3,.31,.1,8),this.mat(0x6f5945));hem.position.y=.35;g.add(hem);
    for(const side of[-1,1]){const leg=new THREE.Mesh(new THREE.CylinderGeometry(.07,.08,.38,7),this.mat(0x6a4637));leg.position.set(side*.12,.22,.02);g.add(leg);const foot=new THREE.Mesh(new THREE.SphereGeometry(.095,8,6),this.mat(0x412f2a));foot.scale.set(1,.45,1.35);foot.position.set(side*.12,.035,.075);g.add(foot)}
    const belt=new THREE.Mesh(new THREE.TorusGeometry(.245,.022,6,16),this.mat(0xd6b366));belt.rotation.x=Math.PI/2;belt.position.y=.64;g.add(belt);
    // Woven robe, contrasting seams and a small pendant keep the shared body
    // legible as clothing rather than one coloured cone. The adornment is modest:
    // it reads as a jade ornament, not ceremonial costume on every villager.
    const yoke=new THREE.Mesh(new THREE.BoxGeometry(.34,.07,.025),this.mat(0xd8b875));yoke.position.set(0,.98,-.213);g.add(yoke);
    const seam=new THREE.Mesh(new THREE.BoxGeometry(.075,.34,.025),this.mat(0xc1a56f));seam.position.set(0,.76,-.268);g.add(seam);
    const collar=new THREE.Mesh(new THREE.TorusGeometry(.116,.014,6,14),this.mat(0xd9bf80));collar.rotation.x=Math.PI/2;collar.position.y=1.08;g.add(collar);
    const pendant=new THREE.Mesh(new THREE.CylinderGeometry(.037,.037,.014,8),this.mat(C.jade,{texture:"jade",emissive:0x163c2e,emissiveIntensity:.12}));pendant.rotation.x=Math.PI/2;pendant.position.set(0,1.01,-.22);g.add(pendant);
    // Each arm has a shoulder pivot: sleeve and hand stay connected while a villager works.
    // This avoids the old toy-like effect of rotating a cylinder around its middle.
    const arms=[];for(const side of[-1,1]){const rig=new THREE.Group();rig.position.set(side*.235,.95,.01);rig.rotation.z=side*.72;const arm=new THREE.Mesh(new THREE.CylinderGeometry(.052,.068,.42,7),this.mat(color,{texture:"weave"}));arm.position.y=-.19;rig.add(arm);const cuff=new THREE.Mesh(new THREE.TorusGeometry(.058,.012,6,10),this.mat(0xd0ae6c));cuff.rotation.x=Math.PI/2;cuff.position.y=-.36;rig.add(cuff);const hand=new THREE.Mesh(new THREE.SphereGeometry(.065,8,6),this.mat(complexion));hand.position.set(0,-.405,.02);rig.add(hand);g.add(rig);arms.push({rig,side})}
    const neck=new THREE.Mesh(new THREE.CylinderGeometry(.08,.1,.14,8),this.mat(complexion));neck.position.y=1.08;g.add(neck);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.205,14,10),this.mat(complexion));head.position.y=1.23;g.add(head);
    for(const side of[-1,1]){const eye=new THREE.Mesh(new THREE.SphereGeometry(.014,7,5),this.mat(0x382d27));eye.position.set(side*.069,1.27,-.19);g.add(eye);const brow=new THREE.Mesh(new THREE.BoxGeometry(.06,.009,.012),this.mat(0x58382e));brow.position.set(side*.07,1.315,-.195);brow.rotation.z=side*.08;g.add(brow)}const faceBridge=new THREE.Mesh(new THREE.SphereGeometry(.016,7,5),this.mat(0xb8795b));faceBridge.scale.set(1,.65,.65);faceBridge.position.set(0,1.21,-.199);g.add(faceBridge);
    // Hair is intentionally varied but small.  A shared cone or large topknot
    // made every villager read as a costume; cropped hair, a low bun and a
    // back braid create different silhouettes while retaining the same body rig.
    const hair=new THREE.Mesh(new THREE.SphereGeometry(.217,12,8),this.mat(0x382d27));hair.scale.y=hairStyle==="cropped"?.31:.43;hair.position.y=hairStyle==="cropped"?1.39:1.4;g.add(hair);
    if(hairStyle==="bun"){const bun=new THREE.Mesh(new THREE.SphereGeometry(.078,9,7),this.mat(0x382d27));bun.position.set(0,1.5,.045);g.add(bun)}
    if(hairStyle==="braid"){const braid=new THREE.Mesh(new THREE.CylinderGeometry(.032,.044,.28,6),this.mat(0x382d27));braid.position.set(-.09,1.25,.16);braid.rotation.z=.22;g.add(braid)}
    if(["ritual","palace","palace-resident","boat","tomb"].includes(id)){const headband=new THREE.Mesh(new THREE.TorusGeometry(.205,.018,8,18),this.mat(id==="ritual"?0xd8c26b:0x947353));headband.rotation.x=Math.PI/2;headband.position.y=1.32;g.add(headband)}
    for(const side of[-1,1]){const ear=new THREE.Mesh(new THREE.SphereGeometry(.04,7,5),this.mat(complexion));ear.position.set(side*.205,1.23,.01);g.add(ear)}
    this.addRoleDetails(g,id,color);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.58,.03,6,24),new THREE.MeshBasicMaterial({color:0xd9e0bb,transparent:true,opacity:.7}));ring.rotation.x=Math.PI/2;ring.position.y=.04;g.add(ring);
    // Identity stays visible before interaction: children can find the named
    // person from a task prompt instead of guessing from identical figures.
    g.add(this.label(name,1.86,kind==="quest"?"#ffe394":"#f7f0df"));
    const marker=this.questMarker(2.35);g.add(marker);g.userData={...g.userData,id,name,copy,kind,marker,ring,arms};this.scene.add(g);this.interactables.push(g);this.villagers.push({mesh:g,id,phase:x*.19+z*.13,anchor:{x,z},baseY:.02});
    const nav=new THREE.Mesh(new THREE.CylinderGeometry(.62,.62,1.9,10),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));nav.position.set(x,.95,z);nav.userData.goTo=id==="ritual"?{x,z,ritual:true}:{x,z};this.scene.add(nav);this.navigationMeshes.push(nav);this.floaters.push({mesh:ring,base:.04,phase:Math.random()*5});return g
  }
  addRoleDetails(g,id,color){
    const add=(geo,tint,x,y,z,rotation=null,opt={})=>{const m=new THREE.Mesh(geo,this.mat(tint,opt));m.position.set(x,y,z);if(rotation)m.rotation.set(...rotation);m.castShadow=m.receiveShadow=true;g.add(m);return m};
    // Roles use objects and silhouettes, not a different label colour alone.
    if(id==="quarry"){
      const handle=add(new THREE.CylinderGeometry(.025,.035,.82,6),0x694631,.36,.74,.02,[0,0,-.48]);const head=add(new THREE.BoxGeometry(.36,.11,.09),0x777061,.55,1.06,.02,[0,0,-.48]);handle.userData.tool=true;head.userData.tool=true;g.userData.motion={type:"quarry",tools:[handle,head]};
    }else if(id.startsWith("boat")){
      const scarf=add(new THREE.TorusGeometry(.22,.035,8,18),0xd8c0a1,0,1.34,-.01,[Math.PI/2,0,0]);const tail=add(new THREE.BoxGeometry(.07,.28,.03),0xd8c0a1,.19,1.18,.04,[0,0,-.22]);scarf.userData.costume=tail.userData.costume=true;
    }else if(id==="rice"){
      const hat=add(new THREE.ConeGeometry(.34,.17,12),0xc3a15e,0,1.54,0);hat.scale.z=.92;const basket=add(new THREE.CylinderGeometry(.13,.18,.22,9),0xa87943,-.34,.4,.08,[0,0,.18]);basket.rotation.z=.2;g.userData.motion={type:"harvest",tools:[basket]};
    }else if(id==="workshop"){
      const apron=add(new THREE.BoxGeometry(.27,.4,.035),0xc4a26d,0,.68,-.255);const wheel=add(new THREE.CylinderGeometry(.17,.17,.035,12),0x85806d,.4,.48,.12,[Math.PI/2,0,0]);apron.userData.costume=true;wheel.userData.tool=true;g.userData.motion={type:"grind",tools:[wheel]};
    }else if(id==="ritual"){
      const crown=add(new THREE.ConeGeometry(.16,.34,5),0xd8c26b,0,1.67,.01);const plaque=add(new THREE.BoxGeometry(.16,.24,.045),C.jade,0,.98,-.27,null,{texture:"jade",emissive:0x183c2e,emissiveIntensity:.16});plaque.userData.costume=true;crown.userData.costume=true;
    }else if(id==="tomb"){
      const sash=add(new THREE.BoxGeometry(.09,.55,.04),0xd8d5bb,.15,.73,-.27,[0,0,-.12]);sash.userData.costume=true;
    }else if(id==="fisher"){
      const pole=add(new THREE.CylinderGeometry(.018,.026,.98,6),0x6f4a31,.37,.77,.08,[0,0,-.6]);const float=add(new THREE.SphereGeometry(.055,7,5),0xe5c85d,.67,.37,.08);pole.userData.tool=float.userData.tool=true;g.userData.motion={type:"cast",tools:[pole,float]};
    }else if(id==="weaver"){
      const yarn=add(new THREE.TorusGeometry(.11,.022,6,12),0xd7c49c,.3,.6,-.03,[Math.PI/2,0,0]);yarn.userData.tool=true;g.userData.motion={type:"weave",tools:[yarn]};
    }
  }
  momentFigure(scene,x,z,color=0x9d8069,start=null,end=null,baseY=.02){
    const g=new THREE.Group();const robe=new THREE.Mesh(new THREE.CylinderGeometry(.18,.25,.76,7),this.mat(color));robe.position.y=.4;g.add(robe);const head=new THREE.Mesh(new THREE.SphereGeometry(.18,10,8),this.mat(0xc88d66));head.position.y=.9;g.add(head);const hair=new THREE.Mesh(new THREE.SphereGeometry(.19,9,7),this.mat(0x382d27));hair.scale.y=.4;hair.position.y=1.05;g.add(hair);const arms=[];for(const side of[-1,1]){const arm=new THREE.Mesh(new THREE.CylinderGeometry(.04,.055,.38,6),this.mat(color));arm.position.set(side*.2,.58,.02);arm.rotation.z=side*.72;g.add(arm);arms.push(arm)}g.position.set(x,baseY,z);g.visible=false;this.scene.add(g);this.momentActors.push({scene,mesh:g,arms,start:start||{x,z},end,baseY});return g
  }
  createMomentActors(){
    // Each milestone briefly turns into a living tableau instead of resolving as a line of text.
    for(const [x,z,c]of[[-40.4,14.7,0x6e8b72],[-39.1,13.8,0x98704e],[-38.8,15.4,0x775d46]])this.momentFigure("quarry",x,z,c);
    for(const [x,z,c]of[[-20.5,-1.7,0x5e91a1],[-21.5,-1.9,0x9d8069]])this.momentFigure("boat",x,z,c);
    for(const [x,z,c]of[[2.6,-3.45,0x5e91a1],[4.2,-3.45,0x9d8069],[5.5,-3.45,0x9d8069]])this.momentFigure("transport",x,z,c);
    for(const [x,z,c]of[[24.8,7.5,0x947653],[27.3,8.4,0x7b9a77],[26.2,6.8,0x926b4d]])this.momentFigure("workshop",x,z,c);
    for(const [x,z,c]of[[36.4,17.4,0x9c6d52],[37.35,18.75,0x806a9b],[38.95,17.4,0x74906f],[39.55,18.55,0xb08a53],[38,18.7,0x9c805f]])this.momentFigure("ritual",x,z,c,null,null,1.075);
    for(let i=0;i<6;i++)this.momentFigure("tomb",24.5+i*.45,-14.5-i*.35,[0x756e92,0x987454,0x6a8b78][i%3],{x:24.5+i*.45,z:-14.5-i*.35},{x:29+i*.3,z:-18-i*.15});
    for(const [x,z,c]of[[49.5,5.8,0x5e91a1],[51,7.1,0x826f98],[52.2,5.7,0x9d8069]])this.momentFigure("flood",x,z,c);
    const jade=new THREE.Mesh(new THREE.CylinderGeometry(.18,.23,.56,8),this.mat(C.jade,{emissive:0x183c2e,emissiveIntensity:.65}));jade.position.set(38,2.18,18);jade.visible=false;this.scene.add(jade);this.momentActors.push({scene:"ritual",mesh:jade,jade:true,arms:[]});
  }
  playMoment(id){
    this.activeMoment=id;this.momentStarted=this.clock.elapsedTime;for(const a of this.momentActors)a.mesh.visible=a.scene===id;
    const frames={quarry:[-39.5,14.2],boat:[-21,-1.8],transport:[4,-3.45],workshop:[26,8],ritual:[38,18],tomb:[30,-18],flood:[51,6]};const [x,z]=frames[id]||[this.player.position.x,this.player.position.z];this.cinema={x,z,until:this.clock.elapsedTime+7};
    const labels={quarry:"采玉场景开始：工人正在山脚取料。",boat:"码头场景开始：独木舟准备出发。",transport:"水路场景开始：玉料顺河进入城中。",workshop:"制玉场景开始：匠人以砂与水慢慢磨玉。",ritual:"祭仪开始：人群聚向高台，玉琮被举起。",tomb:"送葬队正在前往反山王陵。",flood:"堤坝外的水声渐渐盖过城里的声音。"};this.callbacks.onMoment?.(labels[id]||"");
  }
  updateMoments(time){
    if(!this.activeMoment)return;const elapsed=time-(this.momentStarted||time);
    for(const a of this.momentActors){
      if(a.scene!==this.activeMoment)continue;
      if(a.jade){a.mesh.position.y=2.18+Math.sin(elapsed*2.2)*.13;continue}
      if(a.end){const t=Math.min(1,elapsed/7);a.mesh.position.x=THREE.MathUtils.lerp(a.start.x,a.end.x,t);a.mesh.position.z=THREE.MathUtils.lerp(a.start.z,a.end.z,t);a.mesh.rotation.y=Math.atan2(a.end.x-a.start.x,a.end.z-a.start.z)}
      if(a.scene==="transport")a.mesh.position.x=a.start.x+Math.min(3.8,elapsed*.55);
      a.mesh.position.y=a.baseY+Math.abs(Math.sin(elapsed*2.4+a.start.x))*.025;
      for(const arm of a.arms)arm.rotation.z=(arm.position.x<0?-1:1)*(.7+Math.sin(elapsed*3+a.start.z)*.24);
    }
  }
  landmark(id,name,copy,x,z){const g=new THREE.Group();g.position.set(x,.02,z);const stone=new THREE.Mesh(new THREE.CylinderGeometry(.48,.62,.52,8),this.mat(0x978464));stone.position.y=.25;g.add(stone);const light=new THREE.Mesh(new THREE.SphereGeometry(.16,12,8),new THREE.MeshBasicMaterial({color:C.gold}));light.position.y=.86;g.add(light);const halo=new THREE.Mesh(new THREE.TorusGeometry(.64,.024,6,30),new THREE.MeshBasicMaterial({color:C.gold,transparent:true,opacity:.85}));halo.rotation.x=Math.PI/2;halo.position.y=.05;g.add(halo);g.add(this.label(name,1.32,"#ffe394"));const marker=this.questMarker(1.85);g.add(marker);g.userData={id,name,copy,kind:"quest",marker,ring:halo};this.scene.add(g);this.interactables.push(g);this.floaters.push({mesh:halo,base:.05,phase:Math.random()*5});return g}
  discovery(id,name,copy,x,z,y=.02){
    const g=new THREE.Group();g.position.set(x,y,z);const pot=new THREE.Mesh(new THREE.CylinderGeometry(.16,.23,.3,9),this.mat(id==="hearth"?0x9a4931:0xb27d54,{texture:"clay"}));pot.position.y=.16;g.add(pot);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.36,.018,6,20),new THREE.MeshBasicMaterial({color:0xd9e0bb,transparent:true,opacity:.82}));ring.rotation.x=Math.PI/2;ring.position.y=.025;g.add(ring);g.userData={id,name,copy,kind:"side"};this.scene.add(g);this.interactables.push(g);this.floaters.push({mesh:ring,base:.025,phase:Math.random()*5});return g
  }
  buildLandmarks(){
    this.makeNPC("quarry","采玉人 · 阿岑","山里的玉脉刚刚露出来。",-39.5,14.2,0x7f9e7b,"quest");
    // A landing only exists where a boatman is actually present.  Each retained
    // crossing has a keeper on *both* shores, so a player is never stranded at
    // a decorative dock (especially on the ritual route).
    this.docks=[
      {id:"west-north",crossing:"west-main",x:-21,z:1.25,launch:{x:-21,z:-4.15},keeper:"boat",name:"船娘 · 阿汀",copy:"她的独木舟系在河湾的木桩上。"},{id:"west-south",crossing:"west-main",x:-21,z:-9.35,launch:{x:-21,z:-4.15},keeper:"boat-west-south",name:"南岸船夫 · 阿沅",copy:"她守着西岸回程的舟，潮水涨落也不离开木桩。"},
      {id:"workshop-north",crossing:"workshop-main",x:7,z:1.6,launch:{x:7,z:-3.55},keeper:"boat-workshop",name:"工坊渡口的船夫",copy:"这条大河把南北两岸分开，独木舟每天都在这里靠岸。"},{id:"workshop-south",crossing:"workshop-main",x:7,z:-8.55,launch:{x:7,z:-3.55},keeper:"boat-workshop-south",name:"南岸船夫 · 阿澄",copy:"想回到工坊与北岸，就从这处有船夫的渡口上舟。"},
      {id:"west-channel-north",crossing:"west-channel",x:-20.5,z:23.35,launch:{x:-20,z:20},keeper:"boat-west-channel",name:"西汊的船夫",copy:"西边的水路从山脚穿过田地，两岸都留了木桩。"},{id:"west-channel-south",crossing:"west-channel",x:-19.5,z:16.65,launch:{x:-20,z:20},keeper:"boat-west-channel-south",name:"南岸船夫 · 阿芰",copy:"西汊的船就在身旁，探索完北边也能随时回来。"},
      {id:"east-north",crossing:"ritual-channel",x:32,z:15.0,launch:{x:32,z:12},keeper:"boat-north",name:"北汊的船夫",copy:"北面的水网能把你带到宫殿区附近。"},{id:"east-south",crossing:"ritual-channel",x:32,z:9.0,launch:{x:32,z:12},keeper:"boat-ritual-south",name:"祭台渡口的船夫",copy:"去高台之前先在这里上舟；对岸也有船夫等候。"},
      {id:"east-main-north",crossing:"tomb-main",x:25,z:2.25,launch:{x:25,z:-3.25},keeper:"boat-east",name:"东渡口的船夫",copy:"南岸的反山王陵在河对面；这里的舟每日往返。"},{id:"east-main-south",crossing:"tomb-main",x:25,z:-8.1,launch:{x:25,z:-3.25},keeper:"boat-south",name:"南岸的船夫",copy:"这里的舟靠岸后会等下一位渡河的人。"},
      {id:"south-west",crossing:"tomb-canal",x:12.9,z:-18,launch:{x:17,z:-18},keeper:"boat-tomb-west",name:"陵前西岸船夫",copy:"这条水道从城外接进来，西岸也能返航。"},{id:"south-east",crossing:"tomb-canal",x:21.2,z:-18,launch:{x:17,z:-18},keeper:"boat-tomb",name:"陵前水道的船夫",copy:"这条水道从城外接进来，两边都留了渡口。"}
    ];this.dockBoatByCrossing={};this.docks.forEach(d=>{if(!this.dockBoatByCrossing[d.crossing])this.dockBoatByCrossing[d.crossing]=this.addBoat(d.launch.x,d.launch.z,false);d.boat=this.dockBoatByCrossing[d.crossing]});this.dockBoats=this.docks.map(d=>d.boat);this.docks.forEach(d=>this.makeNPC(d.keeper,d.name,d.copy,d.x,d.z,0x5e91a1,"boat"));
    this.landmark("transport","工坊运料栈台","东岸的木棚下传来磨玉的声音。",12.2,4.5);this.makeNPC("workshop","制玉匠 巫宁","他正用水和砂磨一枚玉胚。",26,8,0x947653,"quest");const priest=this.makeNPC("ritual","祭司","高台上的火焰在风里摇动。",38,18,0xa36d58,"quest");priest.position.y=1.075;this.makeNPC("tomb","陵墓守卫","土丘旁立着安静的白色幡旗。",30,-18,0x766f8b,"quest");this.landmark("flood","东堤","堤坝把城与更大的水分开。",51,6);
    this.makeNPC("rice","稻田里的阿禾","她在看天色，也在看田里的水。",-14,10.5,0xc9ad5a);this.makeNPC("potter","陶工","刚烧好的陶罐还带着温度。",-12,-17.5,0xb2755c);this.makeNPC("fisher","渔人","他把鱼篓搁在船头。",-8,-9.4,0x5e90a0);this.makeNPC("child","堤岸上的孩子","他正沿着堤岸追一只蜻蜓。",23,9.5,0xa27f50);this.makeNPC("weaver","织麻人","她把长长的麻线绕成一束。",3,13.2,0x8973a0);this.makeNPC("palace","高台居所的管事","夯土台上的木屋不靠金银炫耀；修堤、分粮、备祭，都要有人把事情组织起来。",-46.2,16.0,0x896d52,"side");this.makeNPC("palace-resident","高台居所的执事","木柱和夯土台围起的是处理粮食、劳作与祭仪的地方；一座城靠许多人分担事情，而不是靠金银装饰。",-51.65,13.8,0x635c77,"side");this.makeNPC("rice-yard","晒谷场的阿萤","稻子收回来不能立刻进仓。晒干、脱粒、舂米，每一步都怕赶上潮气。",-20,15.8,0xb48655,"side");this.makeNPC("food-yard","食物棚的阿嵘","牲畜、鱼和谷物都要清洗、分装、晾晒。吃进嘴里的食物，也有一段辛苦的来路。",-35,-12.8,0x7f8157,"side");this.makeNPC("necropolis","墓地守望人","这里有许多大小不同的墓丘。每一处安放，都在告诉后人这座城如何记住一个人。",34.5,-17.6,0x766f8b,"side");
    const family=this.makeNPC("family","屋里的阿槐","上层铺着草席，下面的一群小猪正在拱土。",-22,-17,0x9d8069,"side");family.position.y=2.58;
    this.makeNPC("cook","高台居所的阿婉","她在高台居所旁整理炊具，烟从木屋的屋脊缓慢散开。",-42.5,13.8,0xa36d58,"side");
    this.makeNPC("herder","猪圈旁的阿乐","几头小猪在屋下躲雨，人住在高处，潮水涨起来也不怕。",42.1,22.7,0x698a67,"side");
    this.makeNPC("carpenter","制舟人","独木舟要掏得又轻又稳，河道没有桥，水上的路全靠它。",-8,1.35,0x916d4c,"side");
    this.discovery("loom","屋里的织机","麻线穿过木架，慢慢变成能遮雨、能交换的布。",-22.35,-16.92,2.58);
    this.discovery("hearth","火塘","火塘的烟从屋顶散出去，屋里的人围着它煮饭、修工具、讲一天的见闻。",-21.72,-16.8,2.58);
    this.discovery("granary","陶罐和谷物","稻谷被晒干后装进陶罐，架在高处，避开潮气和小兽。",-22.18,-17.15,2.58);
    this.discovery("pigpen","屋下的一群小猪","猪群住在高脚屋下面，能躲雨，也能让人住的地方离潮湿的地面更远。",-21.82,-17.05,.02);
    this.quarryCamp(-39.5,14.2);this.docks.forEach(d=>this.dock(d.x,d.z));
  }
  quarryCamp(x,z){for(const [dx,dz]of[[-1.5,.5],[-.7,-.6],[.8,.55],[1.4,-.3]]){const pile=this.mesh(new THREE.DodecahedronGeometry(.35+Math.random()*.22),C.stone,x+dx,.25,z+dz);pile.rotation.set(Math.random(),Math.random(),0)}const frame=this.mesh(new THREE.BoxGeometry(2.5,.12,.12),C.wood,x-1.4,1.4,z-1.2);frame.rotation.z=.65;const frame2=this.mesh(new THREE.BoxGeometry(2.5,.12,.12),C.wood,x+1.4,1.4,z-1.2);frame2.rotation.z=-.65;this.mesh(new THREE.BoxGeometry(3.1,.12,.12),C.wood,x,2.22,z-1.2);const fire=this.mesh(new THREE.ConeGeometry(.13,.48,7),0xf0a54e,x+1.35,.28,z+1.1,{emissive:0xd76325,emissiveIntensity:1})}
  dock(x,z){
    // A landing is a small piece of water infrastructure: staggered planks, driven
    // piles and coiled rope explain how a canoe is tied and where a person steps ashore.
    for(let i=0;i<5;i++){const plank=this.mesh(new THREE.BoxGeometry(.45,.12,1.95),C.wood,x-1+i*.5,.13,z,{texture:"wood"});plank.rotation.y=.05+(i%2?-.012:.012);const grain=this.mesh(new THREE.BoxGeometry(.36,.018,.045),0xa67a4e,x-1+i*.5,.205,z+(i%2?-.45:.45),{texture:"wood"});grain.rotation.y=plank.rotation.y}
    for(const side of[-1,1]){const pile=this.mesh(new THREE.CylinderGeometry(.07,.095,.94,7),C.wood,x+side*1.2,.47,z+.7,{texture:"wood"});const cap=this.mesh(new THREE.ConeGeometry(.12,.15,6),0x66452f,x+side*1.2,.99,z+.7,{texture:"wood"});cap.rotation.y=side*.25;const line=this.mesh(new THREE.CylinderGeometry(.012,.012,.62,5),0xcdb47c,x+side*.77,.39,z+.47);line.rotation.z=side*.9}
    const bollard=this.mesh(new THREE.CylinderGeometry(.075,.09,.32,7),0x725038,x-.82,.25,z-.67,{texture:"wood"});const coil=new THREE.Mesh(new THREE.TorusGeometry(.17,.022,6,14),this.mat(0xc6aa70));coil.rotation.x=Math.PI/2;coil.position.set(x-.48,.215,z-.54);this.scene.add(coil);
  }
  addBoat(x,z,player){const g=new THREE.Group();const hull=new THREE.Mesh(new THREE.SphereGeometry(.68,14,7),this.mat(C.wood,{texture:"wood"}));hull.scale.set(1.6,.3,.64);hull.position.y=.16;g.add(hull);const rim=new THREE.Mesh(new THREE.TorusGeometry(.61,.045,7,14),this.mat(0x8c5c3c,{texture:"wood"}));rim.rotation.x=Math.PI/2;rim.scale.x=1.58;rim.position.y=.27;g.add(rim);const seat=new THREE.Mesh(new THREE.BoxGeometry(.9,.09,.32),this.mat(0xab7d4d,{texture:"wood"}));seat.position.y=.31;g.add(seat);for(const side of[-1,1]){const lash=new THREE.Mesh(new THREE.TorusGeometry(.12,.012,5,10),this.mat(0xc7aa71));lash.rotation.x=Math.PI/2;lash.position.set(side*.46,.31,.05);g.add(lash)}g.position.set(x,.03,z);this.scene.add(g);if(player){this.playerBoat=g;g.visible=false}return g}
  buildWaterTraffic(){
    // Canoes make the river network feel like working infrastructure, not a blue barrier.
    const canoe=(route,phase,robe)=>{if(!this.waterRouteIsSafe(route))throw new Error("环境独木舟路线离开了河道");const [x,z]=route[0],g=this.addBoat(x,z,false);const body=new THREE.Mesh(new THREE.CylinderGeometry(.11,.16,.42,7),this.mat(robe));body.position.set(-.08,.55,0);g.add(body);const head=new THREE.Mesh(new THREE.SphereGeometry(.105,9,7),this.mat(0xc88d66));head.position.set(-.08,.86,0);g.add(head);const oar=new THREE.Mesh(new THREE.CylinderGeometry(.018,.026,1.1,6),this.mat(0x755037,{texture:"wood"}));oar.position.set(.16,.48,.05);oar.rotation.z=-.78;g.add(oar);this.ambientBoats.push({mesh:g,route,phase,speed:.026+phase*.004,oar})};
    // These are surveyed river-centre lines.  A route is rejected as soon as even
    // a sampled segment leaves water: filtering individual bad points could join
    // two safe points with an unsafe straight line across a bank.
    canoe([[-56,-5.7],[-42,-5.2],[-30,-4.9],[-20,-4.4],[-10,-4.45],[0,-3.5],[10,-3.05],[20,-2.7],[32,-3.4],[44,-2.1],[55.8,-3.55]],.12,0x8d7654);
    canoe([[5,35],[8,33],[10,19],[8,14],[11,12.4],[15,12.6],[20,10.8],[32,12],[43,15],[55,17],[60.8,15.05]],.42,0x6a8779);
    canoe([[12,-32],[14,-27],[15,-23],[17,-18],[19,-13],[21,-8],[20,-3.1]],.71,0x95714e);
    canoe([[-47,28],[-40,25],[-33,23],[-26,22],[-20,20],[-14,19],[-8,18],[-4,17],[-1.2,16.1]],.88,0x6a7c97);
    // Small waterfowl provide a near-scale reference for the wide channels.
    const duck=(x,z,phase)=>{const g=new THREE.Group();const body=new THREE.Mesh(new THREE.SphereGeometry(.15,9,6),this.mat(0x506d58));body.scale.set(1.3,.64,.8);body.position.y=.1;g.add(body);const neck=new THREE.Mesh(new THREE.SphereGeometry(.075,8,6),this.mat(0x5d735d));neck.position.set(.13,.18,-.05);g.add(neck);const beak=new THREE.Mesh(new THREE.ConeGeometry(.035,.12,5),this.mat(0xc89947));beak.rotation.x=Math.PI/2;beak.position.set(.16,.18,-.12);g.add(beak);g.position.set(x,.1,z);this.scene.add(g);this.floaters.push({mesh:g,base:.1,phase,x,z,duck:true})};
    duck(-36,-4.7,.1);duck(-31,-4.25,.55);duck(13,-3.25,.78);duck(22,11.7,.3);duck(-14,18.8,.92);
    const smoke=(x,z,scale=1)=>{const g=new THREE.Group();for(const [dx,dy,s]of[[0,0,.15],[.08,.26,.22],[-.04,.55,.28],[.11,.84,.34]]){const puff=new THREE.Mesh(new THREE.SphereGeometry(s*scale,8,6),new THREE.MeshLambertMaterial({color:0xd8d2bd,transparent:true,opacity:.32}));puff.scale.set(1,.72,1);puff.position.set(dx,dy,0);g.add(puff)}g.position.set(x,1.8,z);this.scene.add(g);this.floaters.push({mesh:g,base:1.8,phase:x*.19+z*.11,smoke:true})};
    smoke(-22,-17,1);smoke(-52,12,.86);smoke(26,8,1.05);
  }
  waterRouteIsSafe(route){
    if(route.length<2||!route.every(([x,z])=>this.isWater(x,z)))return false;
    for(let i=0;i<route.length-1;i++){const [ax,az]=route[i],[bx,bz]=route[i+1];for(let step=1;step<9;step++){const t=step/9;if(!this.isWater(THREE.MathUtils.lerp(ax,bx,t),THREE.MathUtils.lerp(az,bz,t)))return false}}
    return true
  }
  validateTransitNetwork(){
    // A ferry point is valid only when its keeper stands on dry land while its
    // launch point and every sampled ambient route point are in real water.
    const keepers=new Set((this.villagers||[]).map(v=>v.id));
    const invalidDocks=(this.docks||[]).filter(d=>!d.keeper||!keepers.has(d.keeper)||!this.onLand(d.x,d.z)||this.isWater(d.x,d.z)||!this.isWater(d.launch.x,d.launch.z));
    const invalidBoats=(this.ambientBoats||[]).filter(b=>!this.waterRouteIsSafe(b.route));
    if(invalidDocks.length||invalidBoats.length)throw new Error(`水路网络校验失败：${invalidDocks.map(d=>d.id).join(",")||"环境船"}`);
  }
  updateAmbientBoats(time){
    for(const boat of this.ambientBoats){const t0=(time*boat.speed+boat.phase)%1,t=t0<.5?t0*2:(1-t0)*2,segments=boat.route.length-1,at=Math.min(segments-.0001,t*segments),i=Math.floor(at),u=at-i,a=boat.route[i],b=boat.route[i+1];boat.mesh.position.set(THREE.MathUtils.lerp(a[0],b[0],u),.03+Math.sin(time*2.4+boat.phase*8)*.026,THREE.MathUtils.lerp(a[1],b[1],u));const dir=t0<.5?1:-1;boat.mesh.rotation.y=Math.atan2((b[0]-a[0])*dir,(b[1]-a[1])*dir);if(boat.oar)boat.oar.rotation.z=-.78+Math.sin(time*3.4+boat.phase*9)*.25}
  }
  updateVillagers(time){
    // Workers make short, role-shaped loops around their own station rather
    // than swaying in place. Boatmen intentionally stay at their dock.
    for(const villager of this.villagers){const boatman=villager.id.startsWith("boat"),worker=["quarry","rice","workshop","potter","fisher","weaver","carpenter","child","cook","herder","palace","palace-resident","rice-yard","food-yard","necropolis"].includes(villager.id),pace=villager.id==="quarry"?3.4:villager.id==="rice"?2.25:villager.id==="workshop"?3.8:worker?1.35:1.15,amount=villager.id==="quarry"?.34:villager.id==="workshop"?.28:.08;if(worker&&!boatman){const r=villager.id==="rice"?.34:villager.id==="palace-resident"?.14:["palace","rice-yard","food-yard","necropolis"].includes(villager.id)?.16:.18,angle=time*.42+villager.phase;villager.mesh.position.x=villager.anchor.x+Math.sin(angle)*r;villager.mesh.position.z=villager.anchor.z+Math.cos(angle*1.37)*r*.62;villager.mesh.rotation.y=Math.atan2(Math.cos(angle)*r,-Math.sin(angle)*r)}for(const arm of villager.mesh.userData.arms||[]){arm.rig.rotation.z=arm.side*(.72+Math.sin(time*pace+villager.phase+arm.side)*amount)}const motion=villager.mesh.userData.motion;if(!motion)continue;const beat=time*pace+villager.phase;if(motion.type==="quarry"){motion.tools[0].rotation.z=-.48+Math.sin(beat)*.19;motion.tools[1].rotation.z=-.48+Math.sin(beat)*.19}else if(motion.type==="harvest"){motion.tools[0].position.y=.4+Math.abs(Math.sin(beat))*.065}else if(motion.type==="grind"){motion.tools[0].rotation.z=beat*2.5}else if(motion.type==="cast"){motion.tools[0].rotation.z=-.6+Math.sin(beat*.75)*.17;motion.tools[1].position.y=.37+Math.abs(Math.sin(beat*.75))*.045}else if(motion.type==="weave"){motion.tools[0].rotation.z=Math.sin(beat)*.26}}
  }
  updateSwayers(time){
    for(const stalk of this.swayers)stalk.mesh.rotation.z=stalk.base+Math.sin(time*1.3+stalk.phase)*.095;
  }
  updateAnimals(time){
    // Livestock follows small closed foraging loops: heading and a brief
    // pecking motion replace the old in-place bob.  Each species has a scale-
    // appropriate range, so chickens never roam as far as the pigs below a home.
    for(const animal of this.animals){const fowl=animal.kind==="fowl",a=time*(fowl?.88:.52)+animal.phase;animal.mesh.position.x=animal.anchor.x+Math.sin(a)*animal.range;animal.mesh.position.z=animal.anchor.z+Math.cos(a*1.31)*animal.range*.68;animal.mesh.position.y=Math.sin(a*(fowl?3.6:2.7))*(fowl?.004:.009);animal.mesh.rotation.y=Math.atan2(Math.cos(a)*animal.range,-Math.sin(a)*animal.range);if(fowl&&animal.head)animal.head.position.y=.37*(animal.range/.42)-Math.max(0,Math.sin(a*2.2))*.065}
  }
  createPlayer(){
    this.player=new THREE.Group();
    const limbs={legs:[],arms:[]};for(const side of[-1,1]){const rig=new THREE.Group();rig.position.set(side*.16,.5,0);const leg=new THREE.Mesh(new THREE.CylinderGeometry(.09,.105,.48,8),this.mat(0x4e3530));leg.position.y=-.24;rig.add(leg);const foot=new THREE.Mesh(new THREE.SphereGeometry(.12,9,7),this.mat(0x30272a));foot.scale.set(1,.45,1.4);foot.position.set(0,-.48,.1);rig.add(foot);this.player.add(rig);limbs.legs.push({rig,side})}
    const robe=new THREE.Mesh(new THREE.CylinderGeometry(.31,.38,1.02,8),this.mat(0x315f76,{texture:"weave"}));robe.position.y=.76;this.player.add(robe);
    const cape=new THREE.Mesh(new THREE.BoxGeometry(.46,.75,.06),this.mat(0xc55c43,{texture:"weave"}));cape.position.set(0,.76,.31);this.player.add(cape);
    const sash=new THREE.Mesh(new THREE.TorusGeometry(.32,.045,7,20),this.mat(0xe3bb61));sash.rotation.x=Math.PI/2;sash.position.y=.63;this.player.add(sash);
    const backpack=new THREE.Mesh(new THREE.BoxGeometry(.3,.44,.16),this.mat(0x8c5c3c));backpack.position.set(0,.8,.33);this.player.add(backpack);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.25,12,9),this.mat(0xd39668));head.position.y=1.4;this.player.add(head);
    // A restrained face keeps 阿玉 human at close range without turning the
    // player into a mascot; the robe panel and backpack still show direction.
    for(const side of[-1,1]){const eye=new THREE.Mesh(new THREE.SphereGeometry(.017,7,5),this.mat(0x342e29));eye.position.set(side*.078,1.43,-.237);this.player.add(eye)}const faceBridge=new THREE.Mesh(new THREE.SphereGeometry(.018,7,5),this.mat(0xc08663));faceBridge.scale.set(1,.65,.65);faceBridge.position.set(0,1.38,-.245);this.player.add(faceBridge);
    const frontPanel=new THREE.Mesh(new THREE.BoxGeometry(.16,.54,.035),this.mat(0x4b8aa0,{texture:"weave"}));frontPanel.position.set(0,.84,-.322);this.player.add(frontPanel);
    const yoke=new THREE.Mesh(new THREE.BoxGeometry(.47,.08,.03),this.mat(0xe3bb61));yoke.position.set(0,1.14,-.31);this.player.add(yoke);
    const collar=new THREE.Mesh(new THREE.TorusGeometry(.15,.019,7,16),this.mat(0xe7c674));collar.rotation.x=Math.PI/2;collar.position.y=1.16;this.player.add(collar);
    const hair=new THREE.Mesh(new THREE.SphereGeometry(.28,10,8),this.mat(0x342e29));hair.scale.y=.44;hair.position.y=1.62;this.player.add(hair);
    const bun=new THREE.Mesh(new THREE.SphereGeometry(.1,8,6),this.mat(0x342e29));bun.position.set(0,1.75,.02);this.player.add(bun);
    for(const side of[-1,1]){const rig=new THREE.Group();rig.position.set(side*.32,1.12,.02);rig.rotation.z=side*.65;const arm=new THREE.Mesh(new THREE.CylinderGeometry(.07,.085,.48,7),this.mat(0x315f76));arm.position.y=-.22;rig.add(arm);const hand=new THREE.Mesh(new THREE.SphereGeometry(.075,8,6),this.mat(0xd39668));hand.position.set(0,-.46,.04);rig.add(hand);this.player.add(rig);limbs.arms.push({rig,side})}
    const glow=new THREE.Mesh(new THREE.TorusGeometry(.78,.06,8,28),new THREE.MeshBasicMaterial({color:0xffdc62,transparent:true,opacity:1}));glow.rotation.x=Math.PI/2;glow.position.y=.045;this.player.add(glow);
    const jadeTag=new THREE.Mesh(new THREE.TorusGeometry(.09,.025,6,12),this.mat(C.jade,{emissive:0x1b4737,emissiveIntensity:.7}));jadeTag.rotation.x=Math.PI/2;jadeTag.position.set(0,1.02,-.3);this.player.add(jadeTag);this.player.add(this.label("你 · 阿玉",2.28,"#fff0a2"));
    // Same body scale as villagers; colour and a modest foot ring identify the player.
    const spawn=this.safeSpawn(-12.8,5.1);this.player.scale.setScalar(.72);this.player.position.set(spawn.x,0,spawn.z);this.player.rotation.y=Math.PI;this.player.userData.facing=Math.PI;this.player.userData.limbs=limbs;this.scene.add(this.player);this.addBoat(spawn.x,spawn.z,true)
  }
  setQuest(id){
    this.quest=id;let target=null;
    this.interactables.forEach(o=>{const active=o.userData.id===id,ring=o.userData.ring||o.children.find(c=>c.geometry?.type==="TorusGeometry");if(ring?.material?.color)ring.material.color.set(active?0xffd970:0xd7dfba);if(o.userData.marker)o.userData.marker.visible=active;if(active)target={x:o.position.x,z:o.position.z,name:o.userData.name};});
    if(target)this.callbacks.onMapReady?.({land:this.landPolygon,water:this.water,docks:this.docks,target});
  }
  setBoat(on){
    if(on){const index=this.docks.findIndex(d=>Math.hypot(this.player.position.x-d.x,this.player.position.z-d.z)<4);this.activeDockIndex=index<0?0:index;const dock=this.docks[this.activeDockIndex];this.player.position.set(dock.launch.x,0,dock.launch.z);if(this.dockBoats?.[this.activeDockIndex])this.dockBoats[this.activeDockIndex].visible=false}
    this.boat=on;
    if(!on&&this.player){const index=this.docks.findIndex(d=>Math.hypot(this.player.position.x-d.x,this.player.position.z-d.z)<2.1);if(index>=0){const dock=this.docks[index];this.player.position.set(dock.x,0,dock.z);if(this.dockBoats?.[index])this.dockBoats[index].visible=true}this.player.position.y=this.elevatedAt(this.player.position.x,this.player.position.z);this.disembarkUntil=this.clock.elapsedTime+1.5;this.near=null;this.callbacks.onNearChange?.(null)}
    if(this.playerBoat)this.playerBoat.visible=on
  }
  closestDock(p,r=2.05){return this.docks?.find(d=>Math.hypot(p.x-d.x,p.z-d.z)<r)}
  safeSpawn(x,z){
    if(this.onLand(x,z)&&!this.isWater(x,z)&&!this.boxObstacleAt(this.groundColliders,x,z))return{x,z};
    for(let r=.7;r<12;r+=.7)for(let i=0;i<20;i++){const a=i/20*Math.PI*2,p={x:x+Math.cos(a)*r,z:z+Math.sin(a)*r};if(this.onLand(p.x,p.z)&&!this.isWater(p.x,p.z)&&!this.boxObstacleAt(this.groundColliders,p.x,p.z))return p}
    return{x,z}
  }
  onLand(x,z){let inside=false;for(let i=0,j=this.landPolygon.length-1;i<this.landPolygon.length;j=i++){const [xi,zi]=this.landPolygon[i],[xj,zj]=this.landPolygon[j];if(((zi>z)!==(zj>z))&&(x<(xj-xi)*(z-zi)/(zj-zi)+xi))inside=!inside}return inside}
  pointIn(poly,x,z){let inside=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const [xi,zi]=poly[i],[xj,zj]=poly[j];if(((zi>z)!==(zj>z))&&(x<(xj-xi)*(z-zi)/(zj-zi)+xi))inside=!inside}return inside}
  isWater(x,z){return this.water.some(poly=>this.pointIn(poly,x,z))}
  elevatedAt(x,z){const a=this.elevatedAreas.find(area=>Math.abs(x-area.x)<area.w*.43&&Math.abs(z-area.z)<area.d*.43);return a?.y||0}
  rampAt(x,z){return this.ramps.find(r=>Math.abs(x-r.x)<r.w&&z>=r.z0&&z<=r.z1)}
  surfaceAt(x,z,currentY=0){
    const ramp=this.rampAt(x,z);if(ramp){const t=Math.max(0,Math.min(1,(ramp.z1-z)/(ramp.z1-ramp.z0)));return ramp.y*t}
    const floor=this.elevatedAt(x,z);return currentY>.18&&floor?floor:0
  }
  circleObstacleAt(x,z){return this.solidCircles.find(c=>Math.hypot(x-c.x,z-c.z)<c.r+.3)}
  boxObstacleAt(items,x,z){
    // Circle-versus-AABB, the same broad collision shape idea used by voxel games.
    return items.find(c=>{const qx=Math.max(c.x-c.w*.5,Math.min(x,c.x+c.w*.5)),qz=Math.max(c.z-c.d*.5,Math.min(z,c.z+c.d*.5));return Math.hypot(x-qx,z-qz)<.3})
  }
  blockedByWall(x,z,currentY){
    if(this.circleObstacleAt(x,z))return true;
    // The pig pen is solid at ground level; the only opening aligns with its stair.
    if(currentY<.25)return !!this.boxObstacleAt(this.groundColliders,x,z)&&!this.rampAt(x,z);
    return !!this.boxObstacleAt(this.wallColliders,x,z)
  }
  blockReason(x,z){
    if(!this.onLand(x,z))return "boundary";
    if(this.boat)return this.isWater(x,z)||!!this.closestDock({x,z},1.3)?null:"boat";
    if(this.isWater(x,z))return "water";
    const currentY=this.player?.position.y||0;
    if(this.circleObstacleAt(x,z))return "terrain";
    if(this.blockedByWall(x,z,currentY))return currentY<.25?"house":"wall";
    // A player already upstairs cannot walk through a wall or step off a floating floor.
    if(currentY>.18&&!this.elevatedAt(x,z)&&!this.rampAt(x,z))return "edge";
    return null;
  }
  valid(x,z){return !this.blockReason(x,z)}
  houseAt(x,z){return this.elevatedAreas.find(a=>Math.abs(x-a.x)<a.w*.46&&Math.abs(z-a.z)<a.d*.46)}
  pointerDown(e){this.drag={x:e.clientX,y:e.clientY,moved:false}}
  pointerMove(e){if(!this.drag)return;const dx=e.clientX-this.drag.x,dy=e.clientY-this.drag.y;if(Math.hypot(dx,dy)>6)this.drag.moved=true;if(this.drag.moved){this.yaw-=dx*.009;this.drag.x=e.clientX;this.drag.y=e.clientY;this.callbacks.onDirection?.(this.directionName())}}
  pointerUp(e){if(!this.drag)return;const moved=this.drag.moved;this.drag=null;if(!moved)this.pick(e)}
  routeIntoHouse(home,p={x:home.x,z:home.z}){const ramp=this.ramps.find(a=>Math.abs(a.x-home.x)<.01&&a.z0<home.front&&a.z1>home.front);if(!ramp)return false;this.target=new THREE.Vector3(home.x,0,ramp.z1+.06);this.route=[new THREE.Vector3(home.x,home.y,home.front-.24),new THREE.Vector3(p.x,home.y,p.z)];this.callbacks.onBlocked?.("高脚屋的入口在正面。阿玉正在绕到木梯，并会上楼。");return true}
  routeOutOfHouse(home,p){const ramp=this.ramps.find(a=>Math.abs(a.x-home.x)<.01&&a.z0<home.front&&a.z1>home.front);if(!ramp)return false;this.target=new THREE.Vector3(home.x,home.y,home.front-.24);this.route=[new THREE.Vector3(home.x,0,ramp.z1+.06),new THREE.Vector3(p.x,0,p.z)];this.callbacks.onBlocked?.("阿玉正在沿正面的木梯下楼。");return true}
  pick(e){
    if(!this.started)return;const r=this.canvas.getBoundingClientRect();this.pointer.x=((e.clientX-r.left)/r.width)*2-1;this.pointer.y=-((e.clientY-r.top)/r.height)*2+1;this.raycaster.setFromCamera(this.pointer,this.camera);
    const houseHit=this.raycaster.intersectObjects(this.navigationMeshes,false)[0];if(houseHit?.object.userData.home){this.routeIntoHouse(houseHit.object.userData.home);return}if(houseHit?.object.userData.goTo){const p=houseHit.object.userData.goTo;if(p.ritual&&this.ritualEntry){const r=this.ritualEntry;this.target=new THREE.Vector3(r.x,0,r.stairEnd+.08);this.route=[new THREE.Vector3(p.x,r.topY,p.z)];this.callbacks.onBlocked?.("祭司在祭台上。阿玉正沿南侧台阶登台。");return}this.route=[];this.target=new THREE.Vector3(p.x,0,p.z);return}
    const hit=this.raycaster.intersectObject(this.hitPlane)[0];if(!hit)return;const p=hit.point;const reason=this.blockReason(p.x,p.z);
    if(reason==="house"){const home=this.houseAt(p.x,p.z);if(home&&this.routeIntoHouse(home,p))return}
    if(reason==="edge"){const home=this.elevatedAreas.find(a=>Math.abs(this.player.position.x-a.x)<a.w*.45&&Math.abs(this.player.position.z-a.z)<a.d*.45);if(home&&this.routeOutOfHouse(home,p))return}
    if(reason){const copy={water:"河水挡住了脚步。先到码头登上独木舟。",boat:"独木舟只能沿河行进；靠近码头会自动靠岸。",terrain:"山石或树丛挡住了去路，阿玉会沿边缘绕行。",wall:"屋墙挡住了去路。请从门洞或木梯离开。",edge:"高脚屋有栏墙，回到木梯才能下楼。",boundary:"前方是堤坝外的水域；世界边界在蓝色水面之外。"};this.callbacks.onBlocked?.(copy[reason]||copy.boundary);return}
    this.route=[];this.target=new THREE.Vector3(p.x,0,p.z)
  }
  nudge(direction){const v={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[direction];if(!v||!this.started)return;const rightX=Math.cos(this.yaw),rightZ=-Math.sin(this.yaw),forwardX=-Math.sin(this.yaw),forwardZ=-Math.cos(this.yaw);this.route=[];this.target=null;this.move((rightX*v[0]+forwardX*v[1])*1.15,(rightZ*v[0]+forwardZ*v[1])*1.15)}
  setPad(direction){this.pad=direction}
  turnCamera(){this.yaw=Math.round(this.yaw/(Math.PI/2)+1)*Math.PI/2;this.callbacks.onDirection?.(this.directionName())}
  resetCamera(){this.cinema=null;this.yaw=1.95;this.positionCamera(true)}
  directionName(){const n=((Math.round(this.yaw/(Math.PI/2))%4)+4)%4;return["北","西","南","东"][n]}
  update(dt){if(!this.started)return;if(this.textures.water){this.textures.water.offset.x=(this.textures.water.offset.x+dt*.018)%1;this.textures.water.offset.y=(this.textures.water.offset.y+dt*.009)%1}let sx=0,sz=0;if(this.keys.has("w")||this.keys.has("arrowup"))sz-=1;if(this.keys.has("s")||this.keys.has("arrowdown"))sz+=1;if(this.keys.has("a")||this.keys.has("arrowleft"))sx-=1;if(this.keys.has("d")||this.keys.has("arrowright"))sx+=1;const padVector={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[this.pad];if(padVector){sx+=padVector[0];sz+=padVector[1]}if(sx||sz){this.route=[];this.target=null;const l=Math.hypot(sx,sz);const rightX=Math.cos(this.yaw),rightZ=-Math.sin(this.yaw),forwardX=-Math.sin(this.yaw),forwardZ=-Math.cos(this.yaw);this.move((rightX*sx+forwardX*sz)/l*dt*6.2,(rightZ*sx+forwardZ*sz)/l*dt*6.2)}else if(this.target){const dx=this.target.x-this.player.position.x,dz=this.target.z-this.player.position.z,d=Math.hypot(dx,dz);if(d<.15)this.target=this.route.shift()||null;else this.move(dx/d*dt*5.7,dz/d*dt*5.7)}
    if(this.player){const walking=!!(sx||sz||this.target)&&!this.boat,cycle=walking?Math.sin(this.clock.elapsedTime*9):0,limbs=this.player.userData.limbs;for(const leg of limbs?.legs||[])leg.rig.rotation.x=leg.side*cycle*.42;for(const arm of limbs?.arms||[])arm.rig.rotation.x=-arm.side*cycle*.3}
    if(this.playerBoat?.visible){this.playerBoat.position.x=this.player.position.x;this.playerBoat.position.z=this.player.position.z;this.playerBoat.rotation.y=this.player.rotation.y;this.playerBoat.position.y=.03+Math.sin(this.clock.elapsedTime*2)*.035}
    this.updateAmbientBoats(this.clock.elapsedTime);this.updateVillagers(this.clock.elapsedTime);this.updateSwayers(this.clock.elapsedTime);this.updateAnimals(this.clock.elapsedTime);this.positionCamera();this.updateMoments(this.clock.elapsedTime);
    let found=null,best=1.75;for(const o of this.interactables){if(this.clock.elapsedTime<(this.disembarkUntil||0)&&o.userData.kind==="boat")continue;const d=dist(o.position,this.player.position);if(d<best){best=d;found=o.userData}}if(found?.id!==this.near?.id){this.near=found;this.callbacks.onNearChange?.(found)}this.callbacks.onPosition?.(this.player.position);
    for(const f of this.floaters){if(f.cloud){f.mesh.position.y=f.base+Math.sin(this.clock.elapsedTime*.22+f.phase)*.11;f.mesh.position.x+=Math.sin(this.clock.elapsedTime*.08+f.phase)*.001;continue}if(f.bird){f.mesh.position.y=f.base+Math.sin(this.clock.elapsedTime*.8+f.phase*6)*.35;f.mesh.position.x+=Math.cos(this.clock.elapsedTime*.18+f.phase*6)*.003;f.mesh.children.forEach((wing,i)=>wing.rotation.z=(i?1:-1)*(.65+Math.sin(this.clock.elapsedTime*5+f.phase*9)*.4));continue}if(f.duck){f.mesh.position.y=f.base+Math.sin(this.clock.elapsedTime*2.2+f.phase)*.018;f.mesh.position.x=f.x+Math.sin(this.clock.elapsedTime*.42+f.phase)*.46;f.mesh.rotation.y=Math.cos(this.clock.elapsedTime*.42+f.phase)*.34;continue}if(f.smoke){f.mesh.position.y=f.base+Math.sin(this.clock.elapsedTime*.35+f.phase)*.09;f.mesh.position.x+=Math.sin(this.clock.elapsedTime*.16+f.phase)*.0015;f.mesh.scale.setScalar(1+Math.sin(this.clock.elapsedTime*.4+f.phase)*.06);continue}if(f.foam){f.mesh.position.y=f.base+Math.sin(this.clock.elapsedTime*1.2+f.phase)*.008;continue}f.mesh.position.y=f.base+Math.sin(this.clock.elapsedTime*1.6+f.phase)*.025;if(f.spin)f.mesh.rotation.y+=dt*.75}
  }
  move(dx,dz){
    const from=this.player.position,x=from.x+dx,z=from.z+dz;let next=null;
    if(this.valid(x,z))next={x,z};
    else {
      // Resolve horizontal movement per axis. This lets the player slide along a
      // mountain or house face instead of freezing on the first blocked diagonal step.
      const xOnly=this.valid(x,from.z),zOnly=this.valid(from.x,z);
      if(xOnly&&zOnly){const tx=this.target?.x??(from.x+dx*2),tz=this.target?.z??(from.z+dz*2);const sx=Math.hypot(x-tx,from.z-tz),sz=Math.hypot(from.x-tx,z-tz);next=sx<=sz?{x,z:from.z}:{x:from.x,z};}
      else if(xOnly)next={x,z:from.z};else if(zOnly)next={x:from.x,z};
    }
    if(!next){if(this.target)this.target=null;return false}
    this.player.position.x=next.x;this.player.position.z=next.z;if(!this.boat)this.player.position.y=this.surfaceAt(next.x,next.z,this.player.position.y);
    // Three.js local -Z is the character's face.  The previous formula turned
    // the backpack toward the destination, making rotation look broken.
    const facing=Math.atan2(next.x-from.x,next.z-from.z)+Math.PI;this.player.userData.facing=facing;this.player.rotation.y=facing;
    if(this.boat&&!this.isWater(next.x,next.z)&&this.closestDock(next,1.3)){this.setBoat(false);this.callbacks.onBoatChange?.(false)}return true
  }
  positionCamera(snap=false){const cinematic=this.cinema&&this.clock.elapsedTime<this.cinema.until?this.cinema:null;const fx=cinematic?.x??this.player.position.x,fz=cinematic?.z??this.player.position.z,py=cinematic?0:this.player.position.y,range=cinematic?8.7:12.8;let cameraRange=range;
    // The camera is an observer on dry ground, never a floating boat.  Shorten
    // its arm when a cardinal turn would otherwise put it over a river, which
    // prevents water from swallowing the foreground at the spawn or a dock.
    if(!cinematic){for(let r=range;r>=4;r-=.4){const cx=fx+Math.sin(this.yaw)*r,cz=fz+Math.cos(this.yaw)*r;if(this.onLand(cx,cz)&&!this.isWater(cx,cz)){cameraRange=r;break}}}
    const desired=new THREE.Vector3(fx+Math.sin(this.yaw)*cameraRange,py+(cinematic?4.6:6.7),fz+Math.cos(this.yaw)*cameraRange);if(snap)this.camera.position.copy(desired);else this.camera.position.lerp(desired,cinematic?.until? .07:.1);this.camera.lookAt(fx,py+1.05,fz)}
  collapse(){this.scene.fog.color.set(0x607b78);this.scene.fog.density=.055;this.scene.background.set(0x607b78)}
  animate(){requestAnimationFrame(()=>this.animate());this.update(Math.min(.04,this.clock.getDelta()));this.renderer.render(this.scene,this.camera)}
}
