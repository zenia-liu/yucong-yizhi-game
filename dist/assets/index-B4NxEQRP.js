(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Ta="180",ol=0,to=1,cl=2,mc=1,gc=2,vn=3,Ln=0,Fe=1,ye=2,Rn=0,vi=1,eo=2,no=3,io=4,ll=5,Vn=100,hl=101,ul=102,dl=103,fl=104,pl=200,ml=201,gl=202,xl=203,Ur=204,Nr=205,_l=206,vl=207,yl=208,Ml=209,Sl=210,wl=211,bl=212,El=213,Tl=214,Fr=0,Or=1,Br=2,Mi=3,kr=4,zr=5,Hr=6,Vr=7,Aa=0,Al=1,Cl=2,Pn=0,Rl=1,Pl=2,Ll=3,xc=4,Dl=5,Il=6,Ul=7,_c=300,Si=301,wi=302,Gr=303,Wr=304,Ys=306,qi=1e3,Wn=1001,Xr=1002,We=1003,Nl=1004,cs=1005,an=1006,Ks=1007,Xn=1008,hn=1009,vc=1010,yc=1011,Yi=1012,Ca=1013,qn=1014,on=1015,is=1016,Ra=1017,Pa=1018,Zi=1020,Mc=35902,Sc=35899,wc=1021,bc=1022,en=1023,Ji=1026,ji=1027,La=1028,Da=1029,Ec=1030,Ia=1031,Ua=1033,Os=33776,Bs=33777,ks=33778,zs=33779,qr=35840,Yr=35841,Zr=35842,Jr=35843,jr=36196,$r=37492,Kr=37496,Qr=37808,ta=37809,ea=37810,na=37811,ia=37812,sa=37813,ra=37814,aa=37815,oa=37816,ca=37817,la=37818,ha=37819,ua=37820,da=37821,fa=36492,pa=36494,ma=36495,ga=36283,xa=36284,_a=36285,va=36286,Fl=3200,Ol=3201,Na=0,Bl=1,yn="",Ne="srgb",bi="srgb-linear",Gs="linear",ie="srgb",Kn=7680,so=519,kl=512,zl=513,Hl=514,Tc=515,Vl=516,Gl=517,Wl=518,Xl=519,ya=35044,ro="300 es",cn=2e3,Ws=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ao=1234567;const Hi=Math.PI/180,$i=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function Fa(s,t){return(s%t+t)%t}function ql(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Yl(s,t,e){return s!==t?(e-s)/(t-s):0}function Vi(s,t,e){return(1-e)*s+e*t}function Zl(s,t,e,n){return Vi(s,t,1-Math.exp(-e*n))}function Jl(s,t=1){return t-Math.abs(Fa(s,t*2)-t)}function jl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $l(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Kl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ql(s,t){return s+Math.random()*(t-s)}function th(s){return s*(.5-Math.random())}function eh(s){s!==void 0&&(ao=s);let t=ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nh(s){return s*Hi}function ih(s){return s*$i}function sh(s){return(s&s-1)===0&&s!==0}function rh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ah(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function oh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const He={DEG2RAD:Hi,RAD2DEG:$i,generateUUID:ln,clamp:Wt,euclideanModulo:Fa,mapLinear:ql,inverseLerp:Yl,lerp:Vi,damp:Zl,pingpong:Jl,smoothstep:jl,smootherstep:$l,randInt:Kl,randFloat:Ql,randFloatSpread:th,seededRandom:eh,degToRad:nh,radToDeg:ih,isPowerOfTwo:sh,ceilPowerOfTwo:rh,floorPowerOfTwo:ah,setQuaternionFromProperEuler:oh,normalize:te,denormalize:tn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*x,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),A=Math.atan2(R,p*S);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}const y=a*S;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new I,oo=new ss;class zt{constructor(t,e,n,i,r,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],S=i[1],b=i[4],y=i[7],R=i[2],A=i[5],D=i[8];return r[0]=o*x+a*S+c*R,r[3]=o*g+a*b+c*A,r[6]=o*p+a*y+c*D,r[1]=l*x+h*S+u*R,r[4]=l*g+h*b+u*A,r[7]=l*p+h*y+u*D,r[2]=d*x+f*S+m*R,r[5]=d*g+f*b+m*A,r[8]=d*p+f*y+m*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tr.makeScale(t,e)),this}rotate(t){return this.premultiply(tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new zt;function Ac(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ki(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ch(){const s=Ki("canvas");return s.style.display="block",s}const co={};function Qi(s){s in co||(co[s]=!0,console.warn(s))}function lh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const lo=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const s={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(i.r=Mn(i.r),i.g=Mn(i.g),i.b=Mn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?Gs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bi]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:lo,fromXYZ:ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:lo,fromXYZ:ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const jt=hh();function Mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qn;class uh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qn===void 0&&(Qn=Ki("canvas")),Qn.width=t.width,Qn.height=t.height;const i=Qn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Qn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ki("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dh=0;class Oa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(er(i[o].image)):r.push(er(i[o]))}else r=er(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function er(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;const nr=new I;class Ae extends Ai{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Wn,i=Wn,r=an,o=Xn,a=en,c=hn,l=Ae.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ln(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nr).x}get height(){return this.source.getSize(nr).y}get depth(){return this.source.getSize(nr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=_c;Ae.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(f+1)/2,R=(p+1)/2,A=(h+d)/4,D=(u+x)/4,T=(m+g)/4;return b>y&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=D/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=T/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=D/r,i=T/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ae(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Oa(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),hs.subVectors(this.max,Pi),ti.subVectors(t.a,Pi),ei.subVectors(t.b,Pi),ni.subVectors(t.c,Pi),wn.subVectors(ei,ti),bn.subVectors(ni,ei),Un.subVectors(ti,ni);let e=[0,-wn.z,wn.y,0,-bn.z,bn.y,0,-Un.z,Un.y,wn.z,0,-wn.x,bn.z,0,-bn.x,Un.z,0,-Un.x,-wn.y,wn.x,0,-bn.y,bn.x,0,-Un.y,Un.x,0];return!ir(e,ti,ei,ni,hs)||(e=[1,0,0,0,1,0,0,0,1],!ir(e,ti,ei,ni,hs))?!1:(us.crossVectors(wn,bn),e=[us.x,us.y,us.z],ir(e,ti,ei,ni,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fn=[new I,new I,new I,new I,new I,new I,new I,new I],$e=new I,ls=new Jn,ti=new I,ei=new I,ni=new I,wn=new I,bn=new I,Un=new I,Pi=new I,hs=new I,us=new I,Nn=new I;function ir(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Nn.fromArray(s,r);const a=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gh=new Jn,Li=new I,sr=new I;class rs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Li,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(sr)),this.expandByPoint(Li.copy(t.center).sub(sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pn=new I,rr=new I,ds=new I,En=new I,ar=new I,fs=new I,or=new I;class Rc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),En.copy(this.origin).sub(rr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=En.dot(this.direction),c=-En.dot(ds),l=En.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rr).addScaledVector(ds,d),f}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,r){ar.subVectors(e,t),fs.subVectors(n,t),or.crossVectors(ar,fs);let o=this.direction.dot(or),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(fs.crossVectors(En,fs));if(c<0)return null;const l=a*this.direction.dot(ar.cross(En));if(l<0||c+l>o)return null;const h=-a*En.dot(or);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),o=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,_h)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Tn.crossVectors(n,Ve),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Tn.crossVectors(n,Ve)),Tn.normalize(),ps.crossVectors(Ve,Tn),i[0]=Tn.x,i[4]=ps.x,i[8]=Ve.x,i[1]=Tn.y,i[5]=ps.y,i[9]=Ve.y,i[2]=Tn.z,i[6]=ps.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],b=n[7],y=n[11],R=n[15],A=i[0],D=i[4],T=i[8],v=i[12],_=i[1],C=i[5],P=i[9],N=i[13],k=i[2],q=i[6],G=i[10],rt=i[14],X=i[3],ct=i[7],pt=i[11],_t=i[15];return r[0]=o*A+a*_+c*k+l*X,r[4]=o*D+a*C+c*q+l*ct,r[8]=o*T+a*P+c*G+l*pt,r[12]=o*v+a*N+c*rt+l*_t,r[1]=h*A+u*_+d*k+f*X,r[5]=h*D+u*C+d*q+f*ct,r[9]=h*T+u*P+d*G+f*pt,r[13]=h*v+u*N+d*rt+f*_t,r[2]=m*A+x*_+g*k+p*X,r[6]=m*D+x*C+g*q+p*ct,r[10]=m*T+x*P+g*G+p*pt,r[14]=m*v+x*N+g*rt+p*_t,r[3]=S*A+b*_+y*k+R*X,r[7]=S*D+b*C+y*q+R*ct,r[11]=S*T+b*P+y*G+R*pt,r[15]=S*v+b*N+y*rt+R*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],S=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,b=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,y=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,R=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,A=e*S+n*b+i*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=S*D,t[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*D,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*D,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*D,t[4]=b*D,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*D,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*D,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*D,t[8]=y*D,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*D,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*D,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*D,t[12]=R*D,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*D,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*D,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,S=c*l,b=c*h,y=c*u,R=n.x,A=n.y,D=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+y)*R,i[2]=(m-b)*R,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(g+S)*A,i[7]=0,i[8]=(m+b)*D,i[9]=(g-S)*D,i[10]=(1-(d+x))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),a=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const l=1/r,h=1/o,u=1/a;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=cn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===cn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=cn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===cn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new I,Ke=new ae,xh=new I(0,0,0),_h=new I(1,1,1),Tn=new I,ps=new I,Ve=new I,uo=new ae,fo=new ss;class nn{constructor(t=0,e=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fo.setFromEuler(this),this.setFromQuaternion(fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vh=0;const po=new I,si=new ss,mn=new ae,ms=new I,Di=new I,yh=new I,Mh=new ss,mo=new I(1,0,0),go=new I(0,1,0),xo=new I(0,0,1),_o={type:"added"},Sh={type:"removed"},ri={type:"childadded",child:null},cr={type:"childremoved",child:null};class Me extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new I,e=new nn,n=new ss,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(mo,t)}rotateY(t){return this.rotateOnAxis(go,t)}rotateZ(t){return this.rotateOnAxis(xo,t)}translateOnAxis(t,e){return po.copy(t).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mo,t)}translateY(t){return this.translateOnAxis(go,t)}translateZ(t){return this.translateOnAxis(xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Di,ms,this.up):mn.lookAt(ms,Di,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(mn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_o),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),cr.child=t,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_o),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new I(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new I,gn=new I,lr=new I,xn=new I,ai=new I,oi=new I,vo=new I,hr=new I,ur=new I,dr=new I,fr=new xe,pr=new xe,mr=new xe;class je{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qe.subVectors(t,e),i.cross(Qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Qe.subVectors(i,e),gn.subVectors(n,e),lr.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(gn),c=Qe.dot(lr),l=gn.dot(gn),h=gn.dot(lr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return fr.setScalar(0),pr.setScalar(0),mr.setScalar(0),fr.fromBufferAttribute(t,e),pr.fromBufferAttribute(t,n),mr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fr,r.x),o.addScaledVector(pr,r.y),o.addScaledVector(mr,r.z),o}static isFrontFacing(t,e,n,i){return Qe.subVectors(n,e),gn.subVectors(t,e),Qe.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qe.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ai.subVectors(i,n),oi.subVectors(r,n),hr.subVectors(t,n);const c=ai.dot(hr),l=oi.dot(hr);if(c<=0&&l<=0)return e.copy(n);ur.subVectors(t,i);const h=ai.dot(ur),u=oi.dot(ur);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ai,o);dr.subVectors(t,r);const f=ai.dot(dr),m=oi.dot(dr);if(m>=0&&f<=m)return e.copy(r);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(oi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return vo.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(vo,a);const p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ai,o).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},gs={h:0,s:0,l:0};function gr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Fa(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gr(o,r,t+1/3),this.g=gr(o,r,t),this.b=gr(o,r,t-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return jt.workingToColorSpace(Pe.copy(this),t),Math.round(Wt(Pe.r*255,0,255))*65536+Math.round(Wt(Pe.g*255,0,255))*256+Math.round(Wt(Pe.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,r=Pe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Ne){jt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(gs);const n=Vi(An.h,gs.h,e),i=Vi(An.s,gs.s,e),r=Vi(An.l,gs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Gt;Gt.NAMES=Pc;let wh=0;class jn extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=vi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Te extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new I,xs=new ut;let bh=0;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ya&&(t.usage=this.usage),t}}class Lc extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Dc extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eh=0;const Ze=new ae,xr=new Me,ci=new I,Ge=new Jn,Ii=new Jn,Ee=new I;class Le extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Dc:Lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return xr.lookAt(t),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ge.min,Ii.min),Ge.expandByPoint(Ee),Ee.addVectors(Ge.max,Ii.max),Ge.expandByPoint(Ee)):(Ge.expandByPoint(Ii.min),Ge.expandByPoint(Ii.max))}Ge.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(t,l),Ee.add(ci)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new I,c[T]=new I;const l=new I,h=new I,u=new I,d=new ut,f=new ut,m=new ut,x=new I,g=new I;function p(T,v,_){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,v),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[T].add(x),a[v].add(x),a[_].add(x),c[T].add(g),c[v].add(g),c[_].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let T=0,v=S.length;T<v;++T){const _=S[T],C=_.start,P=_.count;for(let N=C,k=C+P;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new I,y=new I,R=new I,A=new I;function D(T){R.fromBufferAttribute(i,T),A.copy(R);const v=a[T];b.copy(v),b.sub(R.multiplyScalar(R.dot(v))).normalize(),y.crossVectors(A,v);const C=y.dot(c[T])<0?-1:1;o.setXYZW(T,b.x,b.y,b.z,C)}for(let T=0,v=S.length;T<v;++T){const _=S[T],C=_.start,P=_.count;for(let N=C,k=C+P;N<k;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new ae,Fn=new Rc,_s=new rs,Mo=new I,vs=new I,ys=new I,Ms=new I,_r=new I,Ss=new I,So=new I,ws=new I;class W extends Me{constructor(t=new Le,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(_r.fromBufferAttribute(u,t),o?Ss.addScaledVector(_r,h):Ss.addScaledVector(_r.sub(e),h))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(_s.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(_s,Mo)===null||Fn.origin.distanceToSquared(Mo)>(t.far-t.near)**2))&&(yo.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,R=b;y<R;y+=3){const A=a.getX(y),D=a.getX(y+1),T=a.getX(y+2);i=bs(this,p,t,n,l,h,u,A,D,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);i=bs(this,o,t,n,l,h,u,S,b,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,R=b;y<R;y+=3){const A=y,D=y+1,T=y+2;i=bs(this,p,t,n,l,h,u,A,D,T),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=g,b=g+1,y=g+2;i=bs(this,o,t,n,l,h,u,S,b,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Th(s,t,e,n,i,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ln,a),c===null)return null;ws.copy(a),ws.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ws);return l<e.near||l>e.far?null:{distance:l,point:ws.clone(),object:s}}function bs(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,vs),s.getVertexPosition(c,ys),s.getVertexPosition(l,Ms);const h=Th(s,t,e,n,vs,ys,Ms,So);if(h){const u=new I;je.getBarycoord(So,vs,ys,Ms,u),i&&(h.uv=je.getInterpolatedAttribute(i,a,c,l,u,new ut)),r&&(h.uv1=je.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=je.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};je.getNormal(vs,ys,Ms,d.normal),h.face=d,h.barycoord=u}return h}class nt extends Le{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function m(x,g,p,S,b,y,R,A,D,T,v){const _=y/D,C=R/T,P=y/2,N=R/2,k=A/2,q=D+1,G=T+1;let rt=0,X=0;const ct=new I;for(let pt=0;pt<G;pt++){const _t=pt*C-N;for(let Ft=0;Ft<q;Ft++){const ee=Ft*_-P;ct[x]=ee*S,ct[g]=_t*b,ct[p]=k,l.push(ct.x,ct.y,ct.z),ct[x]=0,ct[g]=0,ct[p]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Ft/D),u.push(1-pt/T),rt+=1}}for(let pt=0;pt<T;pt++)for(let _t=0;_t<D;_t++){const Ft=d+_t+q*pt,ee=d+_t+q*(pt+1),oe=d+(_t+1)+q*(pt+1),Zt=d+(_t+1)+q*pt;c.push(Ft,ee,Zt),c.push(ee,oe,Zt),X+=6}a.addGroup(f,X,v),f+=X,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Ei(s[e]);for(const i in n)t[i]=n[i]}return t}function Ah(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ic(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Ch={clone:Ei,merge:Ue};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new I,wo=new ut,bo=new ut;class Je extends Uc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,wo,bo),e.subVectors(bo,wo)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class Lh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new Je(li,hi,t,e);r.layers=this.layers,this.add(r);const o=new Je(li,hi,t,e);o.layers=this.layers,this.add(o);const a=new Je(li,hi,t,e);a.layers=this.layers,this.add(a);const c=new Je(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Je(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Nc extends Ae{constructor(t=[],e=Si,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dh extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nt(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Rn});r.uniforms.tEquirect.value=e;const o=new W(i,r),a=e.minFilter;return e.minFilter===Xn&&(e.minFilter=an),new Lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Qt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ih={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ih)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ka{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uh extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ya,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new I;class Xs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fc extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ui;const Ui=new I,di=new I,fi=new I,pi=new ut,Ni=new ut,Oc=new ae,Es=new I,Fi=new I,Ts=new I,Eo=new ut,yr=new ut,To=new ut;class Fh extends Me{constructor(t=new Fc){if(super(),this.isSprite=!0,this.type="Sprite",ui===void 0){ui=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nh(e,5);ui.setIndex([0,1,2,0,2,3]),ui.setAttribute("position",new Xs(n,3,0,!1)),ui.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=ui,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),di.setFromMatrixScale(this.matrixWorld),Oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&di.multiplyScalar(-fi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;As(Es.set(-.5,-.5,0),fi,o,di,i,r),As(Fi.set(.5,-.5,0),fi,o,di,i,r),As(Ts.set(.5,.5,0),fi,o,di,i,r),Eo.set(0,0),yr.set(1,0),To.set(1,1);let a=t.ray.intersectTriangle(Es,Fi,Ts,!1,Ui);if(a===null&&(As(Fi.set(-.5,.5,0),fi,o,di,i,r),yr.set(0,1),a=t.ray.intersectTriangle(Es,Ts,Fi,!1,Ui),a===null))return;const c=t.ray.origin.distanceTo(Ui);c<t.near||c>t.far||e.push({distance:c,point:Ui.clone(),uv:je.getInterpolation(Ui,Es,Fi,Ts,Eo,yr,To,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function As(s,t,e,n,i,r){pi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ni.x=r*pi.x-i*pi.y,Ni.y=i*pi.x+r*pi.y):Ni.copy(pi),s.copy(t),s.x+=Ni.x,s.y+=Ni.y,s.applyMatrix4(Oc)}class Oh extends Ae{constructor(t=null,e=1,n=1,i,r,o,a,c,l=We,h=We,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const mi=new ae,Co=new ae,Cs=[],Ro=new Jn,Bh=new ae,Oi=new W,Bi=new rs;class Mr extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),Ro.copy(t.boundingBox).applyMatrix4(mi),this.boundingBox.union(Ro)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mi),Bi.copy(t.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Bi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(n),t.ray.intersectsSphere(Bi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,mi),Co.multiplyMatrices(n,mi),Oi.matrixWorld=Co,Oi.raycast(t,Cs);for(let o=0,a=Cs.length;o<a;o++){const c=Cs[o];c.instanceId=r,c.object=this,e.push(c)}Cs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oh(new Float32Array(i*this.count),i,this.count,La,on));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sr=new I,kh=new I,zh=new zt;class zn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Sr.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),i=this.coplanarPoint(Sr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new rs,Hh=new ut(.5,.5),Rs=new I;class za{constructor(t=new zn,e=new zn,n=new zn,i=new zn,r=new zn,o=new zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],S=r[12],b=r[13],y=r[14],R=r[15];if(i[0].setComponents(l-o,f-h,p-m,R-S).normalize(),i[1].setComponents(l+o,f+h,p+m,R+S).normalize(),i[2].setComponents(l+a,f+u,p+x,R+b).normalize(),i[3].setComponents(l-a,f-u,p-x,R-b).normalize(),n)i[4].setComponents(c,d,g,y).normalize(),i[5].setComponents(l-c,f-d,p-g,R-y).normalize();else if(i[4].setComponents(l-c,f-d,p-g,R-y).normalize(),e===cn)i[5].setComponents(l+c,f+d,p+g,R+y).normalize();else if(e===Ws)i[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){On.center.set(0,0,0);const e=Hh.distanceTo(t.center);return On.radius=.7071067811865476+e,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rs.x=i.normal.x>0?t.max.x:t.min.x,Rs.y=i.normal.y>0?t.max.y:t.min.y,Rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Po extends Ae{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bc extends Ae{constructor(t,e,n=qn,i,r,o,a=We,c=We,l,h=Ji,u=1){if(h!==Ji&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Oa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class kc extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ha extends Le{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,x=i+1,g=new I,p=new I;for(let S=0;S<=m;S++){let b=0,y=0,R=0,A=0;if(S<=n){const v=S/n,_=v*Math.PI/2;y=-h-t*Math.cos(_),R=t*Math.sin(_),A=-t*Math.cos(_),b=v*u}else if(S<=n+r){const v=(S-n)/r;y=-h+v*e,R=t,A=0,b=u+v*d}else{const v=(S-n-r)/n,_=v*Math.PI/2;y=h+t*Math.sin(_),R=t*Math.cos(_),A=t*Math.sin(_),b=u+d+v*u}const D=Math.max(0,Math.min(1,b/f));let T=0;S===0?T=.5/i:S===m&&(T=-.5/i);for(let v=0;v<=i;v++){const _=v/i,C=_*Math.PI*2,P=Math.sin(C),N=Math.cos(C);p.x=-R*N,p.y=y,p.z=R*P,a.push(p.x,p.y,p.z),g.set(-R*N,A,R*P),g.normalize(),c.push(g.x,g.y,g.z),l.push(_+T,D)}if(S>0){const v=(S-1)*x;for(let _=0;_<i;_++){const C=v+_,P=v+_+1,N=S*x+_,k=S*x+_+1;o.push(C,P,N),o.push(P,k,N)}}}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class B extends Le{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;S(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function S(){const y=new I,R=new I;let A=0;const D=(e-t)/n;for(let T=0;T<=r;T++){const v=[],_=T/r,C=_*(e-t)+t;for(let P=0;P<=i;P++){const N=P/i,k=N*c+a,q=Math.sin(k),G=Math.cos(k);R.x=C*q,R.y=-_*n+g,R.z=C*G,u.push(R.x,R.y,R.z),y.set(q,D,G).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-_),v.push(m++)}x.push(v)}for(let T=0;T<i;T++)for(let v=0;v<r;v++){const _=x[v][T],C=x[v+1][T],P=x[v+1][T+1],N=x[v][T+1];(t>0||v!==0)&&(h.push(_,C,N),A+=3),(e>0||v!==r-1)&&(h.push(C,P,N),A+=3)}l.addGroup(p,A,0),p+=A}function b(y){const R=m,A=new ut,D=new I;let T=0;const v=y===!0?t:e,_=y===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;const C=m;for(let P=0;P<=i;P++){const k=P/i*c+a,q=Math.cos(k),G=Math.sin(k);D.x=v*G,D.y=g*_,D.z=v*q,u.push(D.x,D.y,D.z),d.push(0,_,0),A.x=q*.5+.5,A.y=G*.5*_+.5,f.push(A.x,A.y),m++}for(let P=0;P<i;P++){const N=R+P,k=C+P;y===!0?h.push(k,k+1,N):h.push(k+1,k,N),T+=3}l.addGroup(p,T,y===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new B(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kt extends B{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Kt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zs extends Le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new I,y=new I,R=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],b),f(e[A+1],y),f(e[A+2],R),c(b,y,R,S)}function c(S,b,y,R){const A=R+1,D=[];for(let T=0;T<=A;T++){D[T]=[];const v=S.clone().lerp(y,T/A),_=b.clone().lerp(y,T/A),C=A-T;for(let P=0;P<=C;P++)P===0&&T===A?D[T][P]=v:D[T][P]=v.clone().lerp(_,P/C)}for(let T=0;T<A;T++)for(let v=0;v<2*(A-T)-1;v++){const _=Math.floor(v/2);v%2===0?(d(D[T][_+1]),d(D[T+1][_]),d(D[T][_])):(d(D[T][_+1]),d(D[T+1][_+1]),d(D[T+1][_]))}}function l(S){const b=new I;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(S),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){const S=new I;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const y=g(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;o.push(y,1-R)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){const b=o[S+0],y=o[S+2],R=o[S+4],A=Math.max(b,y,R),D=Math.min(b,y,R);A>.9&&D<.1&&(b<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,b){const y=S*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function m(){const S=new I,b=new I,y=new I,R=new I,A=new ut,D=new ut,T=new ut;for(let v=0,_=0;v<r.length;v+=9,_+=6){S.set(r[v+0],r[v+1],r[v+2]),b.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),A.set(o[_+0],o[_+1]),D.set(o[_+2],o[_+3]),T.set(o[_+4],o[_+5]),R.copy(S).add(b).add(y).divideScalar(3);const C=g(R);x(A,_+0,S,C),x(D,_+2,b,C),x(T,_+4,y,C)}}function x(S,b,y,R){R<0&&S.x===1&&(o[b]=S.x-1),y.x===0&&y.z===0&&(o[b]=R/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.vertices,t.indices,t.radius,t.details)}}class ge extends Zs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ge(t.radius,t.detail)}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ut:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],r=[],o=[],a=new I,c=new ae;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Wt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Va extends un{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Vh extends Va{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ga(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ps=new I,wr=new Ga,br=new Ga,Er=new Ga;class Gh extends un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ps.subVectors(i[0],i[1]).add(i[0]),l=Ps);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ps.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),wr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),br.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Er.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(wr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),br.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Er.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(wr.calc(c),br.calc(c),Er.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lo(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Wh(s,t){const e=1-s;return e*e*t}function Xh(s,t){return 2*(1-s)*s*t}function qh(s,t){return s*s*t}function Gi(s,t,e,n){return Wh(s,t)+Xh(s,e)+qh(s,n)}function Yh(s,t){const e=1-s;return e*e*e*t}function Zh(s,t){const e=1-s;return 3*e*e*s*t}function Jh(s,t){return 3*(1-s)*s*s*t}function jh(s,t){return s*s*s*t}function Wi(s,t,e,n,i){return Yh(s,t)+Zh(s,e)+Jh(s,n)+jh(s,i)}class zc extends un{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wi(t,i.x,r.x,o.x,a.x),Wi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $h extends un{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wi(t,i.x,r.x,o.x,a.x),Wi(t,i.y,r.y,o.y,a.y),Wi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hc extends un{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends un{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vc extends un{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gi(t,i.x,r.x,o.x),Gi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends un{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gi(t,i.x,r.x,o.x),Gi(t,i.y,r.y,o.y),Gi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Lo(a,c.x,l.x,h.x,u.x),Lo(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var Do=Object.freeze({__proto__:null,ArcCurve:Vh,CatmullRomCurve3:Gh,CubicBezierCurve:zc,CubicBezierCurve3:$h,EllipseCurve:Va,LineCurve:Hc,LineCurve3:Kh,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Qh,SplineCurve:Gc});class tu extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Do[i.type]().fromJSON(i))}return this}}class Io extends tu{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Vc(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new zc(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Va(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ma extends Io{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Io().fromJSON(i))}return this}}function eu(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Wc(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=au(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=s[d],m=s[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ts(r,o,e,a,c,l,0),o}function Wc(s,t,e,n,i){let r;if(i===xu(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Uo(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Uo(o/n|0,s[o],s[o+1],r);return r&&Ti(r,r.next)&&(ns(r),r=r.next),r}function Zn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ti(e,e.next)||pe(e.prev,e,e.next)===0)){if(ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ts(s,t,e,n,i,r,o){if(!s)return;!o&&r&&uu(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?iu(s,n,i,r):nu(s)){t.push(c.i,s.i,l.i),ns(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=su(Zn(s),t),ts(s,t,e,n,i,r,2)):o===2&&ru(s,t,e,n,i,r):ts(Zn(s),t,e,n,i,r,1);break}}}function nu(s){const t=s.prev,e=s,n=s.next;if(pe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),d=Math.max(i,r,o),f=Math.max(a,c,l);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ki(i,a,r,c,o,l,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function iu(s,t,e,n){const i=s.prev,r=s,o=s.next;if(pe(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),x=Math.max(a,c,l),g=Math.max(h,u,d),p=Sa(f,m,t,e,n),S=Sa(x,g,t,e,n);let b=s.prevZ,y=s.nextZ;for(;b&&b.z>=p&&y&&y.z<=S;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ki(a,h,c,u,l,d,b.x,b.y)&&pe(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ki(a,h,c,u,l,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ki(a,h,c,u,l,d,b.x,b.y)&&pe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ki(a,h,c,u,l,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function su(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ti(n,i)&&qc(n,e,e.next,i)&&es(n,i)&&es(i,n)&&(t.push(n.i,e.i,i.i),ns(e),ns(e.next),e=s=i),e=e.next}while(e!==s);return Zn(e)}function ru(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pu(o,a)){let c=Yc(o,a);o=Zn(o,o.next),c=Zn(c,c.next),ts(o,t,e,n,i,r,0),ts(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function au(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Wc(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(fu(l))}i.sort(ou);for(let r=0;r<i.length;r++)e=cu(i[r],e);return e}function ou(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function cu(s,t){const e=lu(s,t);if(!e)return t;const n=Yc(e,s);return Zn(n,n.next),Zn(e,e.next)}function lu(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Ti(s,e))return e;do{if(Ti(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Xc(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);es(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&hu(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function hu(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function uu(s,t,e,n){let i=s;do i.z===0&&(i.z=Sa(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,du(i)}function du(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Sa(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Xc(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ki(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Xc(s,t,e,n,i,r,o,a)}function pu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!mu(s,t)&&(es(s,t)&&es(t,s)&&gu(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||Ti(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ti(s,t){return s.x===t.x&&s.y===t.y}function qc(s,t,e,n){const i=Ds(pe(s,t,e)),r=Ds(pe(s,t,n)),o=Ds(pe(e,n,s)),a=Ds(pe(e,n,t));return!!(i!==r&&o!==a||i===0&&Ls(s,e,t)||r===0&&Ls(s,n,t)||o===0&&Ls(e,s,n)||a===0&&Ls(e,t,n))}function Ls(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ds(s){return s>0?1:s<0?-1:0}function mu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&qc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function es(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function gu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Yc(s,t){const e=wa(s.i,s.x,s.y),n=wa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uo(s,t,e,n){const i=wa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ns(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wa(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xu(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class _u{static triangulate(t,e,n=2){return eu(t,e,n)}}class Xi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Xi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];No(t),Fo(n,t);let o=t.length;e.forEach(No);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Fo(n,e[c]);const a=_u.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function No(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Fo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Wa extends Zs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wa(t.radius,t.detail)}}class Be extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const S=p*d-o;for(let b=0;b<l;b++){const y=b*u-r;m.push(y,-S,0),x.push(0,0,1),g.push(b/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const b=S+l*p,y=S+l*(p+1),R=S+1+l*(p+1),A=S+1+l*p;f.push(b,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xa extends Le{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new I,m=new ut;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const S=p+g,b=S,y=S+n+1,R=S+n+2,A=S+1;a.push(b,y,A),a.push(y,R,A)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qs extends Le{constructor(t=new Ma([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new se(i,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Xi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const S=m[g];Xi.isClockWise(S)===!0&&(m[g]=S.reverse())}const x=Xi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const S=m[g];f=f.concat(S)}for(let g=0,p=f.length;g<p;g++){const S=f[g];i.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,p=x.length;g<p;g++){const S=x[g],b=S[0]+u,y=S[1]+u,R=S[2]+u;n.push(b,y,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return vu(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new qs(n,t.curveSegments)}}function vu(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class mt extends Le{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+y,1-b),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const b=h[p][S+1],y=h[p][S],R=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(b,y,A),(p!==n-1||c<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qt extends Le{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,S=(i+1)*f+m;o.push(x,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yu extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oo extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mu extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Su extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class wu{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bu=new wu;class qa{constructor(t){this.manager=t!==void 0?t:bu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi=new WeakMap;class Eu extends qa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Tr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=gi.get(o);u===void 0&&(u=[],gi.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Ki("img");function c(){h(),e&&e(this);const u=gi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}gi.delete(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),Tr.remove(`image:${t}`);const d=gi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}gi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Tr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Tu extends qa{constructor(t){super(t)}load(t,e,n,i){const r=new Ae,o=new Eu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Zc extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Au extends Zc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ar=new ae,Bo=new I,ko=new I;class Cu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bo),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),Ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jc extends Uc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ru extends Cu{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends Zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Ru}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lu extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Du{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const zo=new ae;class Iu{constructor(t,e,n=0,i=1/0){this.ray=new Rc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zo),this}intersectObject(t,e=!0,n=[]){return ba(t,this,n,e),n.sort(Ho),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ba(t[i],this,n,e);return n.sort(Ho),n}}function Ho(s,t){return s.distance-t.distance}function ba(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ba(r[o],t,e,!0)}}function Vo(s,t,e,n){const i=Uu(n);switch(e){case wc:return s*t;case La:return s*t/i.components*i.byteLength;case Da:return s*t/i.components*i.byteLength;case Ec:return s*t*2/i.components*i.byteLength;case Ia:return s*t*2/i.components*i.byteLength;case bc:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case Ua:return s*t*4/i.components*i.byteLength;case Os:case Bs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ks:case zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yr:case Jr:return Math.max(s,16)*Math.max(t,8)/4;case qr:case Zr:return Math.max(s,8)*Math.max(t,8)/2;case jr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ea:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case na:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ia:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case aa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fa:case pa:case ma:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ga:case xa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _a:case va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uu(s){switch(s){case hn:case vc:return{byteLength:1,components:1};case Yi:case yc:case is:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case qn:case Ca:case on:return{byteLength:4,components:1};case Mc:case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);function jc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Nu(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Fu,alphahash_pars_fragment:Ou,alphamap_fragment:Bu,alphamap_pars_fragment:ku,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:Vu,aomap_pars_fragment:Gu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:qu,beginnormal_vertex:Yu,bsdfs:Zu,iridescence_fragment:Ju,bumpmap_pars_fragment:ju,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:ad,defaultnormal_vertex:od,displacementmap_pars_vertex:cd,displacementmap_vertex:ld,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Cd,envmap_vertex:_d,fog_vertex:vd,fog_pars_vertex:yd,fog_fragment:Md,fog_pars_fragment:Sd,gradientmap_pars_fragment:wd,lightmap_pars_fragment:bd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Td,lights_pars_begin:Ad,lights_toon_fragment:Rd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Dd,lights_physical_fragment:Id,lights_physical_pars_fragment:Ud,lights_fragment_begin:Nd,lights_fragment_maps:Fd,lights_fragment_end:Od,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:Gd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:Zd,morphcolor_vertex:Jd,morphnormal_vertex:jd,morphtarget_pars_vertex:$d,morphtarget_vertex:Kd,normal_fragment_begin:Qd,normal_fragment_maps:tf,normal_pars_fragment:ef,normal_pars_vertex:nf,normal_vertex:sf,normalmap_pars_fragment:rf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:cf,iridescence_pars_fragment:lf,opaque_fragment:hf,packing:uf,premultiplied_alpha_fragment:df,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:vf,shadowmap_vertex:yf,shadowmask_pars_fragment:Mf,skinbase_vertex:Sf,skinning_pars_vertex:wf,skinning_vertex:bf,skinnormal_vertex:Ef,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:Cf,tonemapping_pars_fragment:Rf,transmission_fragment:Pf,transmission_pars_fragment:Lf,uv_pars_fragment:Df,uv_pars_vertex:If,uv_vertex:Uf,worldpos_vertex:Nf,background_vert:Ff,background_frag:Of,backgroundCube_vert:Bf,backgroundCube_frag:kf,cube_vert:zf,cube_frag:Hf,depth_vert:Vf,depth_frag:Gf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:qf,equirect_frag:Yf,linedashed_vert:Zf,linedashed_frag:Jf,meshbasic_vert:jf,meshbasic_frag:$f,meshlambert_vert:Kf,meshlambert_frag:Qf,meshmatcap_vert:tp,meshmatcap_frag:ep,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:sp,meshphong_frag:rp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:cp,meshtoon_frag:lp,points_vert:hp,points_frag:up,shadow_vert:dp,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},lt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},rn={basic:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ue([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ue([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ue([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ue([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ue([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ue([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ue([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ue([lt.lights,lt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};rn.physical={uniforms:Ue([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Is={r:0,b:0,g:0},Bn=new nn,gp=new ae;function xp(s,t,e,n,i,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1;const R=m(b);R===null?p(a,c):R&&R.isColor&&(p(R,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,y){const R=m(y);R&&(R.isCubeTexture||R.mapping===Ys)?(h===void 0&&(h=new W(new nt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ei(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bn.copy(y.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(Bn)),h.material.toneMapped=jt.getTransfer(R.colorSpace)!==ie,(u!==R||d!==R.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new W(new Be(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ei(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=jt.getTransfer(R.colorSpace)!==ie,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(Is,Ic(s)),n.buffers.color.setClear(Is.r,Is.g,Is.b,y,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:x,addToRenderList:g,dispose:S}}function _p(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,C,P,N,k){let q=!1;const G=u(N,P,C);r!==G&&(r=G,l(r.object)),q=f(_,N,P,k),q&&m(_,N,P,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(_,C,P,N),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,C,P){const N=P.wireframe===!0;let k=n[_.id];k===void 0&&(k={},n[_.id]=k);let q=k[C.id];q===void 0&&(q={},k[C.id]=q);let G=q[N];return G===void 0&&(G=d(c()),q[N]=G),G}function d(_){const C=[],P=[],N=[];for(let k=0;k<e;k++)C[k]=0,P[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:N,object:_,attributes:{},index:null}}function f(_,C,P,N){const k=r.attributes,q=C.attributes;let G=0;const rt=P.getAttributes();for(const X in rt)if(rt[X].location>=0){const pt=k[X];let _t=q[X];if(_t===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),pt===void 0||pt.attribute!==_t||_t&&pt.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function m(_,C,P,N){const k={},q=C.attributes;let G=0;const rt=P.getAttributes();for(const X in rt)if(rt[X].location>=0){let pt=q[X];pt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));const _t={};_t.attribute=pt,pt&&pt.data&&(_t.data=pt.data),k[X]=_t,G++}r.attributes=k,r.attributesNum=G,r.index=N}function x(){const _=r.newAttributes;for(let C=0,P=_.length;C<P;C++)_[C]=0}function g(_){p(_,0)}function p(_,C){const P=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;P[_]=1,N[_]===0&&(s.enableVertexAttribArray(_),N[_]=1),k[_]!==C&&(s.vertexAttribDivisor(_,C),k[_]=C)}function S(){const _=r.newAttributes,C=r.enabledAttributes;for(let P=0,N=C.length;P<N;P++)C[P]!==_[P]&&(s.disableVertexAttribArray(P),C[P]=0)}function b(_,C,P,N,k,q,G){G===!0?s.vertexAttribIPointer(_,C,P,k,q):s.vertexAttribPointer(_,C,P,N,k,q)}function y(_,C,P,N){x();const k=N.attributes,q=P.getAttributes(),G=C.defaultAttributeValues;for(const rt in q){const X=q[rt];if(X.location>=0){let ct=k[rt];if(ct===void 0&&(rt==="instanceMatrix"&&_.instanceMatrix&&(ct=_.instanceMatrix),rt==="instanceColor"&&_.instanceColor&&(ct=_.instanceColor)),ct!==void 0){const pt=ct.normalized,_t=ct.itemSize,Ft=t.get(ct);if(Ft===void 0)continue;const ee=Ft.buffer,oe=Ft.type,Zt=Ft.bytesPerElement,J=oe===s.INT||oe===s.UNSIGNED_INT||ct.gpuType===Ca;if(ct.isInterleavedBufferAttribute){const K=ct.data,vt=K.stride,Nt=ct.offset;if(K.isInstancedInterleavedBuffer){for(let Ct=0;Ct<X.locationSize;Ct++)p(X.location+Ct,K.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)g(X.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Ct=0;Ct<X.locationSize;Ct++)b(X.location+Ct,_t/X.locationSize,oe,pt,vt*Zt,(Nt+_t/X.locationSize*Ct)*Zt,J)}else{if(ct.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,ct.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<X.locationSize;K++)g(X.location+K);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let K=0;K<X.locationSize;K++)b(X.location+K,_t/X.locationSize,oe,pt,_t*Zt,_t/X.locationSize*K*Zt,J)}}else if(G!==void 0){const pt=G[rt];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(X.location,pt);break;case 3:s.vertexAttrib3fv(X.location,pt);break;case 4:s.vertexAttrib4fv(X.location,pt);break;default:s.vertexAttrib1fv(X.location,pt)}}}}S()}function R(){T();for(const _ in n){const C=n[_];for(const P in C){const N=C[P];for(const k in N)h(N[k].object),delete N[k];delete C[P]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const P in C){const N=C[P];for(const k in N)h(N[k].object),delete N[k];delete C[P]}delete n[_.id]}function D(_){for(const C in n){const P=n[C];if(P[_.id]===void 0)continue;const N=P[_.id];for(const k in N)h(N[k].object),delete N[k];delete P[_.id]}}function T(){v(),o=!0,r!==i&&(r=i,l(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function vp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function yp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==en&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const T=D===is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==hn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==on&&!T)}function c(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Mp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new zn,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,b=S*4;let y=p.clippingState||null;c.value=y,y=h(m,d,b,f);for(let R=0;R!==b;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Sp(s){let t=new WeakMap;function e(o,a){return a===Gr?o.mapping=Si:a===Wr&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gr||a===Wr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Dh(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const _i=4,Go=[.125,.215,.35,.446,.526,.582],Gn=20,Cr=new Jc,Wo=new Gt;let Rr=null,Pr=0,Lr=0,Dr=!1;const Hn=(1+Math.sqrt(5))/2,xi=1/Hn,Xo=[new I(-Hn,xi,0),new I(Hn,xi,0),new I(-xi,0,Hn),new I(xi,0,Hn),new I(0,Hn,-xi),new I(0,Hn,xi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],wp=new I;class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=wp}=r;Rr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rr,Pr,Lr),this._renderer.xr.enabled=Dr,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:is,format:en,colorSpace:bi,depthBuffer:!1},i=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(r)),this._blurMaterial=Ep(r,t,e)}return i}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,i,r){const c=new Je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Wo),u.toneMapping=Pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new Te({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new W(new nt,x);let p=!1;const S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,p=!0):(x.color.copy(Wo),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const R=this._cubeSize;Us(i,y*R,b>2?R:0,R,R),u.setRenderTarget(i),p&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Si||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xo[(i-r-1)%Xo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new W(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Gn;g>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gn}`);const p=[];let S=0;for(let D=0;D<Gn;++D){const T=D/x,v=Math.exp(-T*T/2);p.push(v),D===0?S+=v:D<g&&(S+=2*v)}for(let D=0;D<p.length;D++)p[D]=p[D]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const y=this._sizeLods[i],R=3*y*(i>b-_i?i-b+_i:0),A=4*(this._cubeSize-y);Us(e,R,A,3*y,2*y),c.setRenderTarget(e),c.render(u,Cr)}}function bp(s){const t=[],e=[],n=[];let i=s;const r=s-_i+1+Go.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-_i?c=Go[o-s+_i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,S=new Float32Array(x*m*f),b=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){const D=A%3*2/3-1,T=A>2?0:-1,v=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];S.set(v,x*m*A),b.set(d,g*m*A);const _=[A,A,A,A,A,A];y.set(_,p*m*A)}const R=new Le;R.setAttribute("position",new Xe(S,x)),R.setAttribute("uv",new Xe(b,g)),R.setAttribute("faceIndex",new Xe(y,p)),t.push(R),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yo(s,t,e){const n=new Yn(s,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ep(s,t,e){const n=new Float32Array(Gn),i=new I(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Zo(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Jo(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gr||c===Wr,h=c===Si||c===wi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qo(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new qo(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ap(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cp(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let b=0,y=S.length;b<y;b+=3){const R=S[b+0],A=S[b+1],D=S[b+2];d.push(R,A,A,D,D,R)}}else if(m!==void 0){const S=m.array;x=m.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const R=b+0,A=b+1,D=b+2;d.push(R,A,A,D,D,R)}}else return;const g=new(Ac(d)?Dc:Lc)(d,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Rp(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lp(s,t,e){const n=new WeakMap,i=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*R*4*u),D=new Cc(A,y,R,u);D.type=on,D.needsUpdate=!0;const T=b*4;for(let _=0;_<u;_++){const C=g[_],P=p[_],N=S[_],k=y*R*4*_;for(let q=0;q<C.count;q++){const G=q*T;f===!0&&(i.fromBufferAttribute(C,q),A[k+G+0]=i.x,A[k+G+1]=i.y,A[k+G+2]=i.z,A[k+G+3]=0),m===!0&&(i.fromBufferAttribute(P,q),A[k+G+4]=i.x,A[k+G+5]=i.y,A[k+G+6]=i.z,A[k+G+7]=0),x===!0&&(i.fromBufferAttribute(N,q),A[k+G+8]=i.x,A[k+G+9]=i.y,A[k+G+10]=i.z,A[k+G+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new ut(y,R)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Dp(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const $c=new Ae,jo=new Bc(1,1),Kc=new Cc,Qc=new mh,tl=new Nc,$o=[],Ko=[],Qo=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function Ci(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=$o[i];if(r===void 0&&(r=new Float32Array(i),$o[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Js(s,t){let e=Ko[t];e===void 0&&(e=new Int32Array(t),Ko[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ip(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function Op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;ec.set(n),s.uniformMatrix2fv(this.addr,!1,ec),we(e,n)}}function Bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;tc.set(n),s.uniformMatrix3fv(this.addr,!1,tc),we(e,n)}}function kp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Qo.set(n),s.uniformMatrix4fv(this.addr,!1,Qo),we(e,n)}}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function Vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function Gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function Wp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function Yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function Zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(jo.compareFunction=Tc,r=jo):r=$c,e.setTexture2D(t||r,i)}function Jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qc,i)}function jp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tl,i)}function $p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kc,i)}function Kp(s){switch(s){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return kp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return $p}}function Qp(s,t){s.uniform1fv(this.addr,t)}function tm(s,t){const e=Ci(t,this.size,2);s.uniform2fv(this.addr,e)}function em(s,t){const e=Ci(t,this.size,3);s.uniform3fv(this.addr,e)}function nm(s,t){const e=Ci(t,this.size,4);s.uniform4fv(this.addr,e)}function im(s,t){const e=Ci(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sm(s,t){const e=Ci(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rm(s,t){const e=Ci(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function am(s,t){s.uniform1iv(this.addr,t)}function om(s,t){s.uniform2iv(this.addr,t)}function cm(s,t){s.uniform3iv(this.addr,t)}function lm(s,t){s.uniform4iv(this.addr,t)}function hm(s,t){s.uniform1uiv(this.addr,t)}function um(s,t){s.uniform2uiv(this.addr,t)}function dm(s,t){s.uniform3uiv(this.addr,t)}function fm(s,t){s.uniform4uiv(this.addr,t)}function pm(s,t,e){const n=this.cache,i=t.length,r=Js(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||$c,r[o])}function mm(s,t,e){const n=this.cache,i=t.length,r=Js(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qc,r[o])}function gm(s,t,e){const n=this.cache,i=t.length,r=Js(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tl,r[o])}function xm(s,t,e){const n=this.cache,i=t.length,r=Js(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Kc,r[o])}function _m(s){switch(s){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return cm;case 35669:case 35673:return lm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return xm}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kp(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function nc(s,t){s.seq.push(t),s.map[t.id]=t}function Sm(s,t,e){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){nc(e,l===void 0?new vm(a,s,t):new ym(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Mm(a),nc(e,u)),e=u}}}class Hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Sm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ic(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const wm=37297;let bm=0;function Em(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sc=new zt;function Tm(s){jt._getMatrix(sc,jt.workingColorSpace,s);const t=`mat3( ${sc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Gs:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Em(s.getShaderSource(t),a)}else return r}function Am(s,t){const e=Tm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cm(s,t){let e;switch(t){case Rl:e="Linear";break;case Pl:e="Reinhard";break;case Ll:e="Cineon";break;case xc:e="ACESFilmic";break;case Il:e="AgX";break;case Ul:e="Neutral";break;case Dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ns=new I;function Rm(){jt.getLuminanceCoefficients(Ns);const s=Ns.x.toFixed(4),t=Ns.y.toFixed(4),e=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function Lm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function zi(s){return s!==""}function ac(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(s){return s.replace(Im,Nm)}const Um=new Map;function Nm(s,t){let e=Vt[t];if(e===void 0){const n=Um.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ea(e)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(s){return s.replace(Fm,Om)}function Om(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function km(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case wi:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===wi&&(t="ENVMAP_MODE_REFRACTION"),t}function Hm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case Al:t="ENVMAP_BLENDING_MIX";break;case Cl:t="ENVMAP_BLENDING_ADD";break}return t}function Vm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Bm(e),l=km(e),h=zm(e),u=Hm(e),d=Vm(e),f=Pm(e),m=Lm(r),x=i.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zi).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zi).join(`
`),p.length>0&&(p+=`
`)):(g=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),p=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Am("linearToOutputTexel",e.outputColorSpace),Rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zi).join(`
`)),o=Ea(o),o=ac(o,e),o=oc(o,e),a=Ea(a),a=ac(a,e),a=oc(a,e),o=cc(o),a=cc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+g+o,y=S+p+a,R=ic(i,i.VERTEX_SHADER,b),A=ic(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(R)||"",k=i.getShaderInfoLog(A)||"",q=P.trim(),G=N.trim(),rt=k.trim();let X=!0,ct=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,A);else{const pt=rc(i,R,"vertex"),_t=rc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+pt+`
`+_t)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||rt==="")&&(ct=!1);ct&&(C.diagnostics={runnable:X,programLog:q,vertexShader:{log:G,prefix:g},fragmentShader:{log:rt,prefix:p}})}i.deleteShader(R),i.deleteShader(A),T=new Hs(i,x),v=Dm(i,x)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,wm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qm(t),e.set(t,n)),n}}class qm{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function Ym(s,t,e,n,i,r,o){const a=new Ba,c=new Xm,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,_,C,P,N){const k=P.fog,q=N.geometry,G=v.isMeshStandardMaterial?P.environment:null,rt=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),X=rt&&rt.mapping===Ys?rt.image.height:null,ct=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=pt!==void 0?pt.length:0;let Ft=0;q.morphAttributes.position!==void 0&&(Ft=1),q.morphAttributes.normal!==void 0&&(Ft=2),q.morphAttributes.color!==void 0&&(Ft=3);let ee,oe,Zt,J;if(ct){const $t=rn[ct];ee=$t.vertexShader,oe=$t.fragmentShader}else ee=v.vertexShader,oe=v.fragmentShader,c.update(v),Zt=c.getVertexShaderID(v),J=c.getFragmentShaderID(v);const K=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,Ct=N.isBatchedMesh===!0,Yt=!!v.map,Ce=!!v.matcap,L=!!rt,he=!!v.aoMap,Bt=!!v.lightMap,It=!!v.bumpMap,St=!!v.normalMap,ue=!!v.displacementMap,wt=!!v.emissiveMap,Ht=!!v.metalnessMap,be=!!v.roughnessMap,_e=v.anisotropy>0,E=v.clearcoat>0,M=v.dispersion>0,z=v.iridescence>0,Z=v.sheen>0,$=v.transmission>0,Y=_e&&!!v.anisotropyMap,At=E&&!!v.clearcoatMap,at=E&&!!v.clearcoatNormalMap,bt=E&&!!v.clearcoatRoughnessMap,Et=z&&!!v.iridescenceMap,it=z&&!!v.iridescenceThicknessMap,ft=Z&&!!v.sheenColorMap,Dt=Z&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,ht=!!v.specularColorMap,kt=!!v.specularIntensityMap,U=$&&!!v.transmissionMap,st=$&&!!v.thicknessMap,ot=!!v.gradientMap,xt=!!v.alphaMap,tt=v.alphaTest>0,j=!!v.alphaHash,Mt=!!v.extensions;let Ot=Pn;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const ce={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:oe,defines:v.defines,customVertexShaderID:Zt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:bi,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Ce,envMap:L,envMapMode:L&&rt.mapping,envMapCubeUVHeight:X,aoMap:he,lightMap:Bt,bumpMap:It,normalMap:St,displacementMap:d&&ue,emissiveMap:wt,normalMapObjectSpace:St&&v.normalMapType===Bl,normalMapTangentSpace:St&&v.normalMapType===Na,metalnessMap:Ht,roughnessMap:be,anisotropy:_e,anisotropyMap:Y,clearcoat:E,clearcoatMap:At,clearcoatNormalMap:at,clearcoatRoughnessMap:bt,dispersion:M,iridescence:z,iridescenceMap:Et,iridescenceThicknessMap:it,sheen:Z,sheenColorMap:ft,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:ht,specularIntensityMap:kt,transmission:$,transmissionMap:U,thicknessMap:st,gradientMap:ot,opaque:v.transparent===!1&&v.blending===vi&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:tt,alphaHash:j,combine:v.combine,mapUv:Yt&&x(v.map.channel),aoMapUv:he&&x(v.aoMap.channel),lightMapUv:Bt&&x(v.lightMap.channel),bumpMapUv:It&&x(v.bumpMap.channel),normalMapUv:St&&x(v.normalMap.channel),displacementMapUv:ue&&x(v.displacementMap.channel),emissiveMapUv:wt&&x(v.emissiveMap.channel),metalnessMapUv:Ht&&x(v.metalnessMap.channel),roughnessMapUv:be&&x(v.roughnessMap.channel),anisotropyMapUv:Y&&x(v.anisotropyMap.channel),clearcoatMapUv:At&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(v.sheenRoughnessMap.channel),specularMapUv:Tt&&x(v.specularMap.channel),specularColorMapUv:ht&&x(v.specularColorMap.channel),specularIntensityMapUv:kt&&x(v.specularIntensityMap.channel),transmissionMapUv:U&&x(v.transmissionMap.channel),thicknessMapUv:st&&x(v.thicknessMap.channel),alphaMapUv:xt&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(St||_e),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(Yt||xt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:wt&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ye,flipSided:v.side===Fe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Mt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&v.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function p(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)_.push(C),_.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(S(_,v),b(_,v),_.push(s.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function S(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function b(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const _=m[v.type];let C;if(_){const P=rn[_];C=Ch.clone(P.uniforms)}else C=v.uniforms;return C}function R(v,_){let C;for(let P=0,N=h.length;P<N;P++){const k=h[P];if(k.cacheKey===_){C=k,++C.usedTimes;break}}return C===void 0&&(C=new Gm(s,_,v,r),h.push(C)),C}function A(v){if(--v.usedTimes===0){const _=h.indexOf(v);h[_]=h[h.length-1],h.pop(),v.destroy()}}function D(v){c.remove(v)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:T}}function Zm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Jm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function uc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Jm),n.length>1&&n.sort(d||hc),i.length>1&&i.sort(d||hc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function jm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new uc,s.set(n,[o])):i>=r.length?(o=new uc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Km(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Qm=0;function t0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e0(s){const t=new $m,e=Km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new ae,o=new ae;function a(l){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,S=0,b=0,y=0,R=0,A=0,D=0;l.sort(t0);for(let v=0,_=l.length;v<_;v++){const C=l[v],P=C.color,N=C.intensity,k=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=P.r*N,u+=P.g*N,d+=P.b*N;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],N);D++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const rt=C.shadow,X=e.get(C);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(P).multiplyScalar(N),G.distance=k,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const rt=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,rt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=rt.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=q,y++}x++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(P).multiplyScalar(N),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=G,g++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const rt=C.shadow,X=e.get(C);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=C.shadow.matrix,b++}n.point[m]=G,m++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(N),G.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==b||T.numSpotShadows!==y||T.numSpotMaps!==R||T.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,T.directionalLength=f,T.pointLength=m,T.spotLength=x,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=b,T.numSpotShadows=y,T.numSpotMaps=R,T.numLightProbes=D,n.version=Qm++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const b=l[p];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function dc(s){const t=new e0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function n0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new dc(s),t.set(i,[a])):r>=o.length?(a=new dc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r0(s,t,e){let n=new za;const i=new ut,r=new ut,o=new xe,a=new Mu({depthPacking:Ol}),c=new Su,l={},h=e.maxTextureSize,u={[Ln]:Fe,[Fe]:Ln,[ye]:ye},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Le;m.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new W(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let p=this.type;this.render=function(A,D,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const v=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Rn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=p!==vn&&this.type===vn,k=p===vn&&this.type!==vn;for(let q=0,G=A.length;q<G;q++){const rt=A[q],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ct=X.getFrameExtents();if(i.multiply(ct),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ct.x),i.x=r.x*ct.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ct.y),i.y=r.y*ct.y,X.mapSize.y=r.y)),X.map===null||N===!0||k===!0){const _t=this.type!==vn?{minFilter:We,magFilter:We}:{};X.map!==null&&X.map.dispose(),X.map=new Yn(i.x,i.y,_t),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const pt=X.getViewportCount();for(let _t=0;_t<pt;_t++){const Ft=X.getViewport(_t);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),P.viewport(o),X.updateMatrices(rt,_t),n=X.getFrustum(),y(D,T,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===vn&&S(X,T),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(v,_,C)};function S(A,D){const T=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(D,null,T,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(D,null,T,f,x,null)}function b(A,D,T,v){let _=null;const C=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)_=C;else if(_=T.isPointLight===!0?c:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const P=_.uuid,N=D.uuid;let k=l[P];k===void 0&&(k={},l[P]=k);let q=k[N];q===void 0&&(q=_.clone(),k[N]=q,D.addEventListener("dispose",R)),_=q}if(_.visible=D.visible,_.wireframe=D.wireframe,v===vn?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=s.properties.get(_);P.light=T}return _}function y(A,D,T,v,_){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const N=t.update(A),k=A.material;if(Array.isArray(k)){const q=N.groups;for(let G=0,rt=q.length;G<rt;G++){const X=q[G],ct=k[X.materialIndex];if(ct&&ct.visible){const pt=b(A,ct,v,_);A.onBeforeShadow(s,A,D,T,N,pt,X),s.renderBufferDirect(T,null,N,pt,A,X),A.onAfterShadow(s,A,D,T,N,pt,X)}}}else if(k.visible){const q=b(A,k,v,_);A.onBeforeShadow(s,A,D,T,N,q,null),s.renderBufferDirect(T,null,N,q,A,null),A.onAfterShadow(s,A,D,T,N,q,null)}}const P=A.children;for(let N=0,k=P.length;N<k;N++)y(P[N],D,T,v,_)}function R(A){A.target.removeEventListener("dispose",R);for(const T in l){const v=l[T],_=A.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const a0={[Fr]:Or,[Br]:Hr,[kr]:Vr,[Mi]:zr,[Or]:Fr,[Hr]:Br,[Vr]:kr,[zr]:Mi};function o0(s,t){function e(){let U=!1;const st=new xe;let ot=null;const xt=new xe(0,0,0,0);return{setMask:function(tt){ot!==tt&&!U&&(s.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){U=tt},setClear:function(tt,j,Mt,Ot,ce){ce===!0&&(tt*=Ot,j*=Ot,Mt*=Ot),st.set(tt,j,Mt,Ot),xt.equals(st)===!1&&(s.clearColor(tt,j,Mt,Ot),xt.copy(st))},reset:function(){U=!1,ot=null,xt.set(-1,0,0,0)}}}function n(){let U=!1,st=!1,ot=null,xt=null,tt=null;return{setReversed:function(j){if(st!==j){const Mt=t.get("EXT_clip_control");j?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),st=j;const Ot=tt;tt=null,this.setClear(Ot)}},getReversed:function(){return st},setTest:function(j){j?K(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(j){ot!==j&&!U&&(s.depthMask(j),ot=j)},setFunc:function(j){if(st&&(j=a0[j]),xt!==j){switch(j){case Fr:s.depthFunc(s.NEVER);break;case Or:s.depthFunc(s.ALWAYS);break;case Br:s.depthFunc(s.LESS);break;case Mi:s.depthFunc(s.LEQUAL);break;case kr:s.depthFunc(s.EQUAL);break;case zr:s.depthFunc(s.GEQUAL);break;case Hr:s.depthFunc(s.GREATER);break;case Vr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=j}},setLocked:function(j){U=j},setClear:function(j){tt!==j&&(st&&(j=1-j),s.clearDepth(j),tt=j)},reset:function(){U=!1,ot=null,xt=null,tt=null,st=!1}}}function i(){let U=!1,st=null,ot=null,xt=null,tt=null,j=null,Mt=null,Ot=null,ce=null;return{setTest:function($t){U||($t?K(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function($t){st!==$t&&!U&&(s.stencilMask($t),st=$t)},setFunc:function($t,dn,sn){(ot!==$t||xt!==dn||tt!==sn)&&(s.stencilFunc($t,dn,sn),ot=$t,xt=dn,tt=sn)},setOp:function($t,dn,sn){(j!==$t||Mt!==dn||Ot!==sn)&&(s.stencilOp($t,dn,sn),j=$t,Mt=dn,Ot=sn)},setLocked:function($t){U=$t},setClear:function($t){ce!==$t&&(s.clearStencil($t),ce=$t)},reset:function(){U=!1,st=null,ot=null,xt=null,tt=null,j=null,Mt=null,Ot=null,ce=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,b=null,y=null,R=null,A=null,D=new Gt(0,0,0),T=0,v=!1,_=null,C=null,P=null,N=null,k=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,rt=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=rt>=2);let ct=null,pt={};const _t=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ee=new xe().fromArray(_t),oe=new xe().fromArray(Ft);function Zt(U,st,ot,xt){const tt=new Uint8Array(4),j=s.createTexture();s.bindTexture(U,j),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<ot;Mt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(st+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return j}const J={};J[s.TEXTURE_2D]=Zt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Zt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Zt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Zt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(s.DEPTH_TEST),o.setFunc(Mi),It(!1),St(to),K(s.CULL_FACE),he(Rn);function K(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function vt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Nt(U,st){return u[U]!==st?(s.bindFramebuffer(U,st),u[U]=st,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(U,st){let ot=f,xt=!1;if(U){ot=d.get(st),ot===void 0&&(ot=[],d.set(st,ot));const tt=U.textures;if(ot.length!==tt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let j=0,Mt=tt.length;j<Mt;j++)ot[j]=s.COLOR_ATTACHMENT0+j;ot.length=tt.length,xt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ot)}function Yt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const Ce={[Vn]:s.FUNC_ADD,[hl]:s.FUNC_SUBTRACT,[ul]:s.FUNC_REVERSE_SUBTRACT};Ce[dl]=s.MIN,Ce[fl]=s.MAX;const L={[pl]:s.ZERO,[ml]:s.ONE,[gl]:s.SRC_COLOR,[Ur]:s.SRC_ALPHA,[Sl]:s.SRC_ALPHA_SATURATE,[yl]:s.DST_COLOR,[_l]:s.DST_ALPHA,[xl]:s.ONE_MINUS_SRC_COLOR,[Nr]:s.ONE_MINUS_SRC_ALPHA,[Ml]:s.ONE_MINUS_DST_COLOR,[vl]:s.ONE_MINUS_DST_ALPHA,[wl]:s.CONSTANT_COLOR,[bl]:s.ONE_MINUS_CONSTANT_COLOR,[El]:s.CONSTANT_ALPHA,[Tl]:s.ONE_MINUS_CONSTANT_ALPHA};function he(U,st,ot,xt,tt,j,Mt,Ot,ce,$t){if(U===Rn){x===!0&&(vt(s.BLEND),x=!1);return}if(x===!1&&(K(s.BLEND),x=!0),U!==ll){if(U!==g||$t!==v){if((p!==Vn||y!==Vn)&&(s.blendEquation(s.FUNC_ADD),p=Vn,y=Vn),$t)switch(U){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFunc(s.ONE,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case io:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case no:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case io:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,b=null,R=null,A=null,D.set(0,0,0),T=0,g=U,v=$t}return}tt=tt||st,j=j||ot,Mt=Mt||xt,(st!==p||tt!==y)&&(s.blendEquationSeparate(Ce[st],Ce[tt]),p=st,y=tt),(ot!==S||xt!==b||j!==R||Mt!==A)&&(s.blendFuncSeparate(L[ot],L[xt],L[j],L[Mt]),S=ot,b=xt,R=j,A=Mt),(Ot.equals(D)===!1||ce!==T)&&(s.blendColor(Ot.r,Ot.g,Ot.b,ce),D.copy(Ot),T=ce),g=U,v=!1}function Bt(U,st){U.side===ye?vt(s.CULL_FACE):K(s.CULL_FACE);let ot=U.side===Fe;st&&(ot=!ot),It(ot),U.blending===vi&&U.transparent===!1?he(Rn):he(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const xt=U.stencilWrite;a.setTest(xt),xt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(U){_!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),_=U)}function St(U){U!==ol?(K(s.CULL_FACE),U!==C&&(U===to?s.cullFace(s.BACK):U===cl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),C=U}function ue(U){U!==P&&(G&&s.lineWidth(U),P=U)}function wt(U,st,ot){U?(K(s.POLYGON_OFFSET_FILL),(N!==st||k!==ot)&&(s.polygonOffset(st,ot),N=st,k=ot)):vt(s.POLYGON_OFFSET_FILL)}function Ht(U){U?K(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function be(U){U===void 0&&(U=s.TEXTURE0+q-1),ct!==U&&(s.activeTexture(U),ct=U)}function _e(U,st,ot){ot===void 0&&(ct===null?ot=s.TEXTURE0+q-1:ot=ct);let xt=pt[ot];xt===void 0&&(xt={type:void 0,texture:void 0},pt[ot]=xt),(xt.type!==U||xt.texture!==st)&&(ct!==ot&&(s.activeTexture(ot),ct=ot),s.bindTexture(U,st||J[U]),xt.type=U,xt.texture=st)}function E(){const U=pt[ct];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(U){ee.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function Dt(U){oe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),oe.copy(U))}function Tt(U,st){let ot=l.get(st);ot===void 0&&(ot=new WeakMap,l.set(st,ot));let xt=ot.get(U);xt===void 0&&(xt=s.getUniformBlockIndex(st,U.name),ot.set(U,xt))}function ht(U,st){const xt=l.get(st).get(U);c.get(st)!==xt&&(s.uniformBlockBinding(st,xt,U.__bindingPointIndex),c.set(st,xt))}function kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,pt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,b=null,y=null,R=null,A=null,D=new Gt(0,0,0),T=0,v=!1,_=null,C=null,P=null,N=null,k=null,ee.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:vt,bindFramebuffer:Nt,drawBuffers:Ct,useProgram:Yt,setBlending:he,setMaterial:Bt,setFlipSided:It,setCullFace:St,setLineWidth:ue,setPolygonOffset:wt,setScissorTest:Ht,activeTexture:be,bindTexture:_e,unbindTexture:E,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Et,texImage3D:it,updateUBOMapping:Tt,uniformBlockBinding:ht,texStorage2D:at,texStorage3D:bt,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:At,scissor:ft,viewport:Dt,reset:kt}}function c0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,M){return f?new OffscreenCanvas(E,M):Ki("canvas")}function x(E,M,z){let Z=1;const $=_e(E);if(($.width>z||$.height>z)&&(Z=z/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(Z*$.width),At=Math.floor(Z*$.height);u===void 0&&(u=m(Y,At));const at=M?m(Y,At):u;return at.width=Y,at.height=At,at.getContext("2d").drawImage(E,0,0,Y,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+At+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(E,M,z,Z,$=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=M;if(M===s.RED&&(z===s.FLOAT&&(Y=s.R32F),z===s.HALF_FLOAT&&(Y=s.R16F),z===s.UNSIGNED_BYTE&&(Y=s.R8)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.R8UI),z===s.UNSIGNED_SHORT&&(Y=s.R16UI),z===s.UNSIGNED_INT&&(Y=s.R32UI),z===s.BYTE&&(Y=s.R8I),z===s.SHORT&&(Y=s.R16I),z===s.INT&&(Y=s.R32I)),M===s.RG&&(z===s.FLOAT&&(Y=s.RG32F),z===s.HALF_FLOAT&&(Y=s.RG16F),z===s.UNSIGNED_BYTE&&(Y=s.RG8)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RG8UI),z===s.UNSIGNED_SHORT&&(Y=s.RG16UI),z===s.UNSIGNED_INT&&(Y=s.RG32UI),z===s.BYTE&&(Y=s.RG8I),z===s.SHORT&&(Y=s.RG16I),z===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),z===s.UNSIGNED_INT&&(Y=s.RGB32UI),z===s.BYTE&&(Y=s.RGB8I),z===s.SHORT&&(Y=s.RGB16I),z===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),z===s.UNSIGNED_INT&&(Y=s.RGBA32UI),z===s.BYTE&&(Y=s.RGBA8I),z===s.SHORT&&(Y=s.RGBA16I),z===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),M===s.RGBA){const At=$?Gs:jt.getTransfer(Z);z===s.FLOAT&&(Y=s.RGBA32F),z===s.HALF_FLOAT&&(Y=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Y=At===ie?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(E,M){let z;return E?M===null||M===qn||M===Zi?z=s.DEPTH24_STENCIL8:M===on?z=s.DEPTH32F_STENCIL8:M===Yi&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qn||M===Zi?z=s.DEPTH_COMPONENT24:M===on?z=s.DEPTH_COMPONENT32F:M===Yi&&(z=s.DEPTH_COMPONENT16),z}function R(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==We&&E.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M)}function D(E){const M=E.target;M.removeEventListener("dispose",D),_(M)}function T(E){const M=n.get(E);if(M.__webglInit===void 0)return;const z=E.source,Z=d.get(z);if(Z){const $=Z[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(E),Object.keys(Z).length===0&&d.delete(z)}n.remove(E)}function v(E){const M=n.get(E);s.deleteTexture(M.__webglTexture);const z=E.source,Z=d.get(z);delete Z[M.__cacheKey],o.memory.textures--}function _(E){const M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let $=0;$<M.__webglFramebuffer[Z].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[Z][$]);else s.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[Z]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=E.textures;for(let Z=0,$=z.length;Z<$;Z++){const Y=n.get(z[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(E)}let C=0;function P(){C=0}function N(){const E=C;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),C+=1,E}function k(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function q(E,M){const z=n.get(E);if(E.isVideoTexture&&Ht(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,E,M);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function G(E,M){const z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){J(z,E,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function rt(E,M){const z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){J(z,E,M);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function X(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){K(z,E,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}const ct={[qi]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},pt={[We]:s.NEAREST,[Nl]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[Ks]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},_t={[kl]:s.NEVER,[Xl]:s.ALWAYS,[zl]:s.LESS,[Tc]:s.LEQUAL,[Hl]:s.EQUAL,[Wl]:s.GEQUAL,[Vl]:s.GREATER,[Gl]:s.NOTEQUAL};function Ft(E,M){if(M.type===on&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Ks||M.magFilter===cs||M.magFilter===Xn||M.minFilter===an||M.minFilter===Ks||M.minFilter===cs||M.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ct[M.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ct[M.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ct[M.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,pt[M.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===We||M.minFilter!==cs&&M.minFilter!==Xn||M.type===on&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ee(E,M){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const Z=M.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const Y=k(M);if(Y!==E.__cacheKey){$[Y]===void 0&&($[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[Y].usedTimes++;const At=$[E.__cacheKey];At!==void 0&&($[E.__cacheKey].usedTimes--,At.usedTimes===0&&v(M)),E.__cacheKey=Y,E.__webglTexture=$[Y].texture}return z}function oe(E,M,z){return Math.floor(Math.floor(E/z)/M)}function Zt(E,M,z,Z){const Y=E.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,z,Z,M.data);else{Y.sort((it,ft)=>it.start-ft.start);let At=0;for(let it=1;it<Y.length;it++){const ft=Y[At],Dt=Y[it],Tt=ft.start+ft.count,ht=oe(Dt.start,M.width,4),kt=oe(ft.start,M.width,4);Dt.start<=Tt+1&&ht===kt&&oe(Dt.start+Dt.count-1,M.width,4)===ht?ft.count=Math.max(ft.count,Dt.start+Dt.count-ft.start):(++At,Y[At]=Dt)}Y.length=At+1;const at=s.getParameter(s.UNPACK_ROW_LENGTH),bt=s.getParameter(s.UNPACK_SKIP_PIXELS),Et=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let it=0,ft=Y.length;it<ft;it++){const Dt=Y[it],Tt=Math.floor(Dt.start/4),ht=Math.ceil(Dt.count/4),kt=Tt%M.width,U=Math.floor(Tt/M.width),st=ht,ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,kt,U,st,ot,z,Z,M.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,at),s.pixelStorei(s.UNPACK_SKIP_PIXELS,bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Et)}}function J(E,M,z){let Z=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=s.TEXTURE_3D);const $=ee(E,M),Y=M.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+z);const At=n.get(Y);if(Y.version!==At.__version||$===!0){e.activeTexture(s.TEXTURE0+z);const at=jt.getPrimaries(jt.workingColorSpace),bt=M.colorSpace===yn?null:jt.getPrimaries(M.colorSpace),Et=M.colorSpace===yn||at===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let it=x(M.image,!1,i.maxTextureSize);it=be(M,it);const ft=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Tt=b(M.internalFormat,ft,Dt,M.colorSpace,M.isVideoTexture);Ft(Z,M);let ht;const kt=M.mipmaps,U=M.isVideoTexture!==!0,st=At.__version===void 0||$===!0,ot=Y.dataReady,xt=R(M,it);if(M.isDepthTexture)Tt=y(M.format===ji,M.type),st&&(U?e.texStorage2D(s.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Tt,it.width,it.height,0,ft,Dt,null));else if(M.isDataTexture)if(kt.length>0){U&&st&&e.texStorage2D(s.TEXTURE_2D,xt,Tt,kt[0].width,kt[0].height);for(let tt=0,j=kt.length;tt<j;tt++)ht=kt[tt],U?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,ft,Dt,ht.data):e.texImage2D(s.TEXTURE_2D,tt,Tt,ht.width,ht.height,0,ft,Dt,ht.data);M.generateMipmaps=!1}else U?(st&&e.texStorage2D(s.TEXTURE_2D,xt,Tt,it.width,it.height),ot&&Zt(M,it,ft,Dt)):e.texImage2D(s.TEXTURE_2D,0,Tt,it.width,it.height,0,ft,Dt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&st&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Tt,kt[0].width,kt[0].height,it.depth);for(let tt=0,j=kt.length;tt<j;tt++)if(ht=kt[tt],M.format!==en)if(ft!==null)if(U){if(ot)if(M.layerUpdates.size>0){const Mt=Vo(ht.width,ht.height,M.format,M.type);for(const Ot of M.layerUpdates){const ce=ht.data.subarray(Ot*Mt/ht.data.BYTES_PER_ELEMENT,(Ot+1)*Mt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Ot,ht.width,ht.height,1,ft,ce)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,it.depth,ft,ht.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Tt,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ot&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,it.depth,ft,Dt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Tt,ht.width,ht.height,it.depth,0,ft,Dt,ht.data)}else{U&&st&&e.texStorage2D(s.TEXTURE_2D,xt,Tt,kt[0].width,kt[0].height);for(let tt=0,j=kt.length;tt<j;tt++)ht=kt[tt],M.format!==en?ft!==null?U?ot&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,ft,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Tt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ht.width,ht.height,ft,Dt,ht.data):e.texImage2D(s.TEXTURE_2D,tt,Tt,ht.width,ht.height,0,ft,Dt,ht.data)}else if(M.isDataArrayTexture)if(U){if(st&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Tt,it.width,it.height,it.depth),ot)if(M.layerUpdates.size>0){const tt=Vo(it.width,it.height,M.format,M.type);for(const j of M.layerUpdates){const Mt=it.data.subarray(j*tt/it.data.BYTES_PER_ELEMENT,(j+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,ft,Dt,Mt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,Dt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,ft,Dt,it.data);else if(M.isData3DTexture)U?(st&&e.texStorage3D(s.TEXTURE_3D,xt,Tt,it.width,it.height,it.depth),ot&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,Dt,it.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,ft,Dt,it.data);else if(M.isFramebufferTexture){if(st)if(U)e.texStorage2D(s.TEXTURE_2D,xt,Tt,it.width,it.height);else{let tt=it.width,j=it.height;for(let Mt=0;Mt<xt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Tt,tt,j,0,ft,Dt,null),tt>>=1,j>>=1}}else if(kt.length>0){if(U&&st){const tt=_e(kt[0]);e.texStorage2D(s.TEXTURE_2D,xt,Tt,tt.width,tt.height)}for(let tt=0,j=kt.length;tt<j;tt++)ht=kt[tt],U?ot&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft,Dt,ht):e.texImage2D(s.TEXTURE_2D,tt,Tt,ft,Dt,ht);M.generateMipmaps=!1}else if(U){if(st){const tt=_e(it);e.texStorage2D(s.TEXTURE_2D,xt,Tt,tt.width,tt.height)}ot&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Dt,it)}else e.texImage2D(s.TEXTURE_2D,0,Tt,ft,Dt,it);g(M)&&p(Z),At.__version=Y.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function K(E,M,z){if(M.image.length!==6)return;const Z=ee(E,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const Y=n.get($);if($.version!==Y.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const At=jt.getPrimaries(jt.workingColorSpace),at=M.colorSpace===yn?null:jt.getPrimaries(M.colorSpace),bt=M.colorSpace===yn||At===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Et=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Et&&!it?ft[j]=x(M.image[j],!0,i.maxCubemapSize):ft[j]=it?M.image[j].image:M.image[j],ft[j]=be(M,ft[j]);const Dt=ft[0],Tt=r.convert(M.format,M.colorSpace),ht=r.convert(M.type),kt=b(M.internalFormat,Tt,ht,M.colorSpace),U=M.isVideoTexture!==!0,st=Y.__version===void 0||Z===!0,ot=$.dataReady;let xt=R(M,Dt);Ft(s.TEXTURE_CUBE_MAP,M);let tt;if(Et){U&&st&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,kt,Dt.width,Dt.height);for(let j=0;j<6;j++){tt=ft[j].mipmaps;for(let Mt=0;Mt<tt.length;Mt++){const Ot=tt[Mt];M.format!==en?Tt!==null?U?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,Ot.width,Ot.height,Tt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,Ot.width,Ot.height,Tt,ht,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,kt,Ot.width,Ot.height,0,Tt,ht,Ot.data)}}}else{if(tt=M.mipmaps,U&&st){tt.length>0&&xt++;const j=_e(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,kt,j.width,j.height)}for(let j=0;j<6;j++)if(it){U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Tt,ht,ft[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,ft[j].width,ft[j].height,0,Tt,ht,ft[j].data);for(let Mt=0;Mt<tt.length;Mt++){const ce=tt[Mt].image[j].image;U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,ce.width,ce.height,Tt,ht,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,kt,ce.width,ce.height,0,Tt,ht,ce.data)}}else{U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Tt,ht,ft[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,Tt,ht,ft[j]);for(let Mt=0;Mt<tt.length;Mt++){const Ot=tt[Mt];U?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,Tt,ht,Ot.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,kt,Tt,ht,Ot.image[j])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),Y.__version=$.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function vt(E,M,z,Z,$,Y){const At=r.convert(z.format,z.colorSpace),at=r.convert(z.type),bt=b(z.internalFormat,At,at,z.colorSpace),Et=n.get(M),it=n.get(z);if(it.__renderTarget=M,!Et.__hasExternalTextures){const ft=Math.max(1,M.width>>Y),Dt=Math.max(1,M.height>>Y);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,Y,bt,ft,Dt,M.depth,0,At,at,null):e.texImage2D($,Y,bt,ft,Dt,0,At,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),wt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,it.__webglTexture,0,ue(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,it.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(E,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),M.depthBuffer){const Z=M.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,Y=y(M.stencilBuffer,$),At=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=ue(M);wt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Y,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Y,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Y,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,E)}else{const Z=M.textures;for(let $=0;$<Z.length;$++){const Y=Z[$],At=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),bt=b(Y.internalFormat,At,at,Y.colorSpace),Et=ue(M);z&&wt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,bt,M.width,M.height):wt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,bt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,bt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const $=Z.__webglTexture,Y=ue(M);if(M.depthTexture.format===Ji)wt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(M.depthTexture.format===ji)wt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Yt(E){const M=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=Z}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Z=E.texture.mipmaps;Z&&Z.length>0?Ct(M.__webglFramebuffer[0],E):Ct(M.__webglFramebuffer,E)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=s.createRenderbuffer(),Nt(M.__webglDepthbuffer[Z],E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}else{const Z=E.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Nt(M.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(E,M,z){const Z=n.get(E);M!==void 0&&vt(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Yt(E)}function L(E){const M=E.texture,z=n.get(E),Z=n.get(M);E.addEventListener("dispose",D);const $=E.textures,Y=E.isWebGLCubeRenderTarget===!0,At=$.length>1;if(At||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=M.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let bt=0;bt<M.mipmaps.length;bt++)z.__webglFramebuffer[at][bt]=s.createFramebuffer()}else z.__webglFramebuffer[at]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)z.__webglFramebuffer[at]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(At)for(let at=0,bt=$.length;at<bt;at++){const Et=n.get($[at]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&wt(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const bt=$[at];z.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Et=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),ft=b(bt.internalFormat,Et,it,bt.colorSpace,E.isXRRenderTarget===!0),Dt=ue(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ft,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,z.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)vt(z.__webglFramebuffer[at][bt],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt);else vt(z.__webglFramebuffer[at],E,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let at=0,bt=$.length;at<bt;at++){const Et=$[at],it=n.get(Et);let ft=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ft=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),Ft(ft,Et),vt(z.__webglFramebuffer,E,Et,s.COLOR_ATTACHMENT0+at,ft,0),g(Et)&&p(ft)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Ft(at,M),M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)vt(z.__webglFramebuffer[bt],E,M,s.COLOR_ATTACHMENT0,at,bt);else vt(z.__webglFramebuffer,E,M,s.COLOR_ATTACHMENT0,at,0);g(M)&&p(at),e.unbindTexture()}E.depthBuffer&&Yt(E)}function he(E){const M=E.textures;for(let z=0,Z=M.length;z<Z;z++){const $=M[z];if(g($)){const Y=S(E),At=n.get($).__webglTexture;e.bindTexture(Y,At),p(Y),e.unbindTexture()}}}const Bt=[],It=[];function St(E){if(E.samples>0){if(wt(E)===!1){const M=E.textures,z=E.width,Z=E.height;let $=s.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(E),at=M.length>1;if(at)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const bt=E.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const it=n.get(M[Et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,$,s.NEAREST),c===!0&&(Bt.length=0,It.length=0,Bt.push(s.COLOR_ATTACHMENT0+Et),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Bt.push(Y),It.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,It)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,At.__webglColorRenderbuffer[Et]);const it=n.get(M[Et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,it,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const M=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ue(E){return Math.min(i.maxSamples,E.samples)}function wt(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ht(E){const M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function be(E,M){const z=E.colorSpace,Z=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==bi&&z!==yn&&(jt.getTransfer(z)===ie?(Z!==en||$!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=Ce,this.setupRenderTarget=L,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=wt}function l0(s,t){function e(n,i=yn){let r;const o=jt.getTransfer(i);if(n===hn)return s.UNSIGNED_BYTE;if(n===Ra)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===vc)return s.BYTE;if(n===yc)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===Ca)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===is)return s.HALF_FLOAT;if(n===wc)return s.ALPHA;if(n===bc)return s.RGB;if(n===en)return s.RGBA;if(n===Ji)return s.DEPTH_COMPONENT;if(n===ji)return s.DEPTH_STENCIL;if(n===La)return s.RED;if(n===Da)return s.RED_INTEGER;if(n===Ec)return s.RG;if(n===Ia)return s.RG_INTEGER;if(n===Ua)return s.RGBA_INTEGER;if(n===Os||n===Bs||n===ks||n===zs)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qr||n===Yr||n===Zr||n===Jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===$r||n===Kr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jr||n===$r)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===ca||n===la||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fa)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ga||n===xa||n===_a||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new kc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:h0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f0 extends Ai{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new d0,p={},S=e.getContextAttributes();let b=null,y=null;const R=[],A=[],D=new ut;let T=null;const v=new Je;v.viewport=new xe;const _=new Je;_.viewport=new xe;const C=[v,_],P=new Lu;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=R[J];return K===void 0&&(K=new vr,R[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=R[J];return K===void 0&&(K=new vr,R[J]=K),K.getGripSpace()},this.getHand=function(J){let K=R[J];return K===void 0&&(K=new vr,R[J]=K),K.getHandSpace()};function q(J){const K=A.indexOf(J.inputSource);if(K===-1)return;const vt=R[K];vt!==void 0&&(vt.update(J.inputSource,J.frame,l||o),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",rt);for(let J=0;J<R.length;J++){const K=A[J];K!==null&&(A[J]=null,R[J].disconnect(K))}N=null,k=null,g.reset();for(const J in p)delete p[J];t.setRenderTarget(b),f=null,d=null,u=null,i=null,y=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",G),i.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Nt=null,Ct=null;S.depth&&(Ct=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?ji:Ji,Nt=S.stencil?Zi:qn);const Yt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Yn(d.textureWidth,d.textureHeight,{format:en,type:hn,depthTexture:new Bc(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Yn(f.framebufferWidth,f.framebufferHeight,{format:en,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(J){for(let K=0;K<J.removed.length;K++){const vt=J.removed[K],Nt=A.indexOf(vt);Nt>=0&&(A[Nt]=null,R[Nt].disconnect(vt))}for(let K=0;K<J.added.length;K++){const vt=J.added[K];let Nt=A.indexOf(vt);if(Nt===-1){for(let Yt=0;Yt<R.length;Yt++)if(Yt>=A.length){A.push(vt),Nt=Yt;break}else if(A[Yt]===null){A[Yt]=vt,Nt=Yt;break}if(Nt===-1)break}const Ct=R[Nt];Ct&&Ct.connect(vt)}}const X=new I,ct=new I;function pt(J,K,vt){X.setFromMatrixPosition(K.matrixWorld),ct.setFromMatrixPosition(vt.matrixWorld);const Nt=X.distanceTo(ct),Ct=K.projectionMatrix.elements,Yt=vt.projectionMatrix.elements,Ce=Ct[14]/(Ct[10]-1),L=Ct[14]/(Ct[10]+1),he=(Ct[9]+1)/Ct[5],Bt=(Ct[9]-1)/Ct[5],It=(Ct[8]-1)/Ct[0],St=(Yt[8]+1)/Yt[0],ue=Ce*It,wt=Ce*St,Ht=Nt/(-It+St),be=Ht*-It;if(K.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(be),J.translateZ(Ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const _e=Ce+Ht,E=L+Ht,M=ue-be,z=wt+(Nt-be),Z=he*L/E*_e,$=Bt*L/E*_e;J.projectionMatrix.makePerspective(M,z,Z,$,_e,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _t(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let K=J.near,vt=J.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),P.near=_.near=v.near=K,P.far=_.far=v.far=vt,(N!==P.near||k!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,k=P.far),P.layers.mask=J.layers.mask|6,v.layers.mask=P.layers.mask&3,_.layers.mask=P.layers.mask&5;const Nt=J.parent,Ct=P.cameras;_t(P,Nt);for(let Yt=0;Yt<Ct.length;Yt++)_t(Ct[Yt],Nt);Ct.length===2?pt(P,v,_):P.projectionMatrix.copy(v.projectionMatrix),Ft(J,P,Nt)};function Ft(J,K,vt){vt===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$i*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(J){return p[J]};let ee=null;function oe(J,K){if(h=K.getViewerPose(l||o),m=K,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Nt=!1;vt.length!==P.cameras.length&&(P.cameras.length=0,Nt=!0);for(let L=0;L<vt.length;L++){const he=vt[L];let Bt=null;if(f!==null)Bt=f.getViewport(he);else{const St=u.getViewSubImage(d,he);Bt=St.viewport,L===0&&(t.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(y))}let It=C[L];It===void 0&&(It=new Je,It.layers.enable(L),It.viewport=new xe,C[L]=It),It.matrix.fromArray(he.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(he.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),L===0&&(P.matrix.copy(It.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Nt===!0&&P.cameras.push(It)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const L=u.getDepthInformation(vt[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<vt.length;L++){const he=vt[L].camera;if(he){let Bt=p[he];Bt||(Bt=new kc,p[he]=Bt);const It=u.getCameraImage(he);Bt.sourceTexture=It}}}}for(let vt=0;vt<R.length;vt++){const Nt=A[vt],Ct=R[vt];Nt!==null&&Ct!==void 0&&Ct.update(Nt,K,l||o)}ee&&ee(J,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const Zt=new jc;Zt.setAnimationLoop(oe),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const kn=new nn,p0=new ae;function m0(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ic(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),b=S.envMap,y=S.envMapRotation;b&&(g.envMap.value=b,kn.copy(y),kn.x*=-1,kn.y*=-1,kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),g.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(kn)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function l(S,b){let y=i[S.id];y===void 0&&(m(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",g));const R=b.program;n.updateUBOMapping(S,R);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const b=u();S.__bindingPointIndex=b;const y=s.createBuffer(),R=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=i[S.id],y=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,D=y.length;A<D;A++){const T=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,_=T.length;v<_;v++){const C=T[v];if(f(C,A,v,R)===!0){const P=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let q=0;q<N.length;q++){const G=N[q],rt=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,P+k,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,k),k+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,b,y,R){const A=S.value,D=b+"_"+y;if(R[D]===void 0)return typeof A=="number"||typeof A=="boolean"?R[D]=A:R[D]=A.clone(),!0;{const T=R[D];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return R[D]=A,!0}else if(T.equals(A)===!1)return T.copy(A),!0}return!1}function m(S){const b=S.uniforms;let y=0;const R=16;for(let D=0,T=b.length;D<T;D++){const v=Array.isArray(b[D])?b[D]:[b[D]];for(let _=0,C=v.length;_<C;_++){const P=v[_],N=Array.isArray(P.value)?P.value:[P.value];for(let k=0,q=N.length;k<q;k++){const G=N[k],rt=x(G),X=y%R,ct=X%rt.boundary,pt=X+ct;y+=ct,pt!==0&&R-pt<rt.storage&&(y+=R-pt),P.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=rt.storage}}}const A=y%R;return A>0&&(y+=R-A),S.__size=y,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function g(S){const b=S.target;b.removeEventListener("dispose",g);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class x0{constructor(t={}){const{canvas:e=ch(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let R=!1;this._outputColorSpace=Ne;let A=0,D=0,T=null,v=-1,_=null;const C=new xe,P=new xe;let N=null;const k=new Gt(0);let q=0,G=e.width,rt=e.height,X=1,ct=null,pt=null;const _t=new xe(0,0,G,rt),Ft=new xe(0,0,G,rt);let ee=!1;const oe=new za;let Zt=!1,J=!1;const K=new ae,vt=new I,Nt=new xe,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ce(){return T===null?X:1}let L=n;function he(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ta}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){const F="webgl2";if(L=he(F,w),L===null)throw he(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,It,St,ue,wt,Ht,be,_e,E,M,z,Z,$,Y,At,at,bt,Et,it,ft,Dt,Tt,ht,kt;function U(){Bt=new Ap(L),Bt.init(),Tt=new l0(L,Bt),It=new yp(L,Bt,t,Tt),St=new o0(L,Bt),It.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),ue=new Pp(L),wt=new Zm,Ht=new c0(L,Bt,St,wt,It,Tt,ue),be=new Sp(y),_e=new Tp(y),E=new Nu(L),ht=new _p(L,E),M=new Cp(L,E,ue,ht),z=new Dp(L,M,E,ue),it=new Lp(L,It,Ht),at=new Mp(wt),Z=new Ym(y,be,_e,Bt,It,ht,at),$=new m0(y,wt),Y=new jm,At=new n0(Bt),Et=new xp(y,be,_e,St,z,f,c),bt=new r0(y,z,It),kt=new g0(L,ue,It,St),ft=new vp(L,Bt,ue),Dt=new Rp(L,Bt,ue),ue.programs=Z.programs,y.capabilities=It,y.extensions=Bt,y.properties=wt,y.renderLists=Y,y.shadowMap=bt,y.state=St,y.info=ue}U();const st=new f0(y,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(G,rt,!1))},this.getSize=function(w){return w.set(G,rt)},this.setSize=function(w,F,H=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,rt=F,e.width=Math.floor(w*X),e.height=Math.floor(F*X),H===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(G*X,rt*X).floor()},this.setDrawingBufferSize=function(w,F,H){G=w,rt=F,X=H,e.width=Math.floor(w*H),e.height=Math.floor(F*H),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(_t)},this.setViewport=function(w,F,H,V){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,F,H,V),St.viewport(C.copy(_t).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ft)},this.setScissor=function(w,F,H,V){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,F,H,V),St.scissor(P.copy(Ft).multiplyScalar(X).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){St.setScissorTest(ee=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){pt=w},this.getClearColor=function(w){return w.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,H=!0){let V=0;if(w){let O=!1;if(T!==null){const et=T.texture.format;O=et===Ua||et===Ia||et===Da}if(O){const et=T.texture.type,dt=et===hn||et===qn||et===Yi||et===Zi||et===Ra||et===Pa,yt=Et.getClearColor(),gt=Et.getClearAlpha(),Lt=yt.r,Ut=yt.g,Rt=yt.b;dt?(m[0]=Lt,m[1]=Ut,m[2]=Rt,m[3]=gt,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Lt,x[1]=Ut,x[2]=Rt,x[3]=gt,L.clearBufferiv(L.COLOR,0,x))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Et.dispose(),Y.dispose(),At.dispose(),wt.dispose(),be.dispose(),_e.dispose(),z.dispose(),ht.dispose(),kt.dispose(),Z.dispose(),st.dispose(),st.removeEventListener("sessionstart",sn),st.removeEventListener("sessionend",Za),Dn.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=ue.autoReset,F=bt.enabled,H=bt.autoUpdate,V=bt.needsUpdate,O=bt.type;U(),ue.autoReset=w,bt.enabled=F,bt.autoUpdate=H,bt.needsUpdate=V,bt.type=O}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function j(w){const F=w.target;F.removeEventListener("dispose",j),Mt(F)}function Mt(w){Ot(w),wt.remove(w)}function Ot(w){const F=wt.get(w).programs;F!==void 0&&(F.forEach(function(H){Z.releaseProgram(H)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,H,V,O,et){F===null&&(F=Ct);const dt=O.isMesh&&O.matrixWorld.determinant()<0,yt=el(w,F,H,V,O);St.setMaterial(V,dt);let gt=H.index,Lt=1;if(V.wireframe===!0){if(gt=M.getWireframeAttribute(H),gt===void 0)return;Lt=2}const Ut=H.drawRange,Rt=H.attributes.position;let Xt=Ut.start*Lt,ne=(Ut.start+Ut.count)*Lt;et!==null&&(Xt=Math.max(Xt,et.start*Lt),ne=Math.min(ne,(et.start+et.count)*Lt)),gt!==null?(Xt=Math.max(Xt,0),ne=Math.min(ne,gt.count)):Rt!=null&&(Xt=Math.max(Xt,0),ne=Math.min(ne,Rt.count));const me=ne-Xt;if(me<0||me===1/0)return;ht.setup(O,V,yt,H,gt);let le,re=ft;if(gt!==null&&(le=E.get(gt),re=Dt,re.setIndex(le)),O.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*Ce()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(O.isLine){let Pt=V.linewidth;Pt===void 0&&(Pt=1),St.setLineWidth(Pt*Ce()),O.isLineSegments?re.setMode(L.LINES):O.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else O.isPoints?re.setMode(L.POINTS):O.isSprite&&re.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))re.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,de=O._multiDrawCounts,Jt=O._multiDrawCount,ke=gt?E.get(gt).bytesPerElement:1,$n=wt.get(V).currentProgram.getUniforms();for(let ze=0;ze<Jt;ze++)$n.setValue(L,"_gl_DrawID",ze),re.render(Pt[ze]/ke,de[ze])}else if(O.isInstancedMesh)re.renderInstances(Xt,me,O.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,de=Math.min(H.instanceCount,Pt);re.renderInstances(Xt,me,de)}else re.render(Xt,me)};function ce(w,F,H){w.transparent===!0&&w.side===ye&&w.forceSinglePass===!1?(w.side=Fe,w.needsUpdate=!0,os(w,F,H),w.side=Ln,w.needsUpdate=!0,os(w,F,H),w.side=ye):os(w,F,H)}this.compile=function(w,F,H=null){H===null&&(H=w),p=At.get(H),p.init(F),b.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const et=O.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){const yt=et[dt];ce(yt,H,O),V.add(yt)}else ce(et,H,O),V.add(et)}),p=b.pop(),V},this.compileAsync=function(w,F,H=null){const V=this.compile(w,F,H);return new Promise(O=>{function et(){if(V.forEach(function(dt){wt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){O(w);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let $t=null;function dn(w){$t&&$t(w)}function sn(){Dn.stop()}function Za(){Dn.start()}const Dn=new jc;Dn.setAnimationLoop(dn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(w){$t=w,st.setAnimationLoop(w),w===null?Dn.stop():Dn.start()},st.addEventListener("sessionstart",sn),st.addEventListener("sessionend",Za),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(F),F=st.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,T),p=At.get(w,b.length),p.init(F),b.push(p),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),oe.setFromProjectionMatrix(K,cn,F.reversedDepth),J=this.localClippingEnabled,Zt=at.init(this.clippingPlanes,J),g=Y.get(w,S.length),g.init(),S.push(g),st.enabled===!0&&st.isPresenting===!0){const et=y.xr.getDepthSensingMesh();et!==null&&js(et,F,-1/0,y.sortObjects)}js(w,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ct,pt),Yt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Yt&&Et.addToRenderList(g,w),this.info.render.frame++,Zt===!0&&at.beginShadows();const H=p.state.shadowsArray;bt.render(H,w,F),Zt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const et=F.cameras;if(O.length>0)for(let dt=0,yt=et.length;dt<yt;dt++){const gt=et[dt];ja(V,O,w,gt)}Yt&&Et.render(w);for(let dt=0,yt=et.length;dt<yt;dt++){const gt=et[dt];Ja(g,w,gt,gt.viewport)}}else O.length>0&&ja(V,O,w,F),Yt&&Et.render(w),Ja(g,w,F);T!==null&&D===0&&(Ht.updateMultisampleRenderTarget(T),Ht.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(y,w,F),ht.resetDefaultState(),v=-1,_=null,b.pop(),b.length>0?(p=b[b.length-1],Zt===!0&&at.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function js(w,F,H,V){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){V&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const dt=z.update(w),yt=w.material;yt.visible&&g.push(w,dt,yt,H,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){const dt=z.update(w),yt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Nt.copy(dt.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(yt)){const gt=dt.groups;for(let Lt=0,Ut=gt.length;Lt<Ut;Lt++){const Rt=gt[Lt],Xt=yt[Rt.materialIndex];Xt&&Xt.visible&&g.push(w,dt,Xt,H,Nt.z,Rt)}}else yt.visible&&g.push(w,dt,yt,H,Nt.z,null)}}const et=w.children;for(let dt=0,yt=et.length;dt<yt;dt++)js(et[dt],F,H,V)}function Ja(w,F,H,V){const O=w.opaque,et=w.transmissive,dt=w.transparent;p.setupLightsView(H),Zt===!0&&at.setGlobalState(y.clippingPlanes,H),V&&St.viewport(C.copy(V)),O.length>0&&as(O,F,H),et.length>0&&as(et,F,H),dt.length>0&&as(dt,F,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ja(w,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Yn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?is:hn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=p.state.transmissionRenderTarget[V.id],dt=V.viewport||C;et.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);const yt=y.getRenderTarget(),gt=y.getActiveCubeFace(),Lt=y.getActiveMipmapLevel();y.setRenderTarget(et),y.getClearColor(k),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&Et.render(H);const Ut=y.toneMapping;y.toneMapping=Pn;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Zt===!0&&at.setGlobalState(y.clippingPlanes,V),as(w,H,V),Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ne=0,me=F.length;ne<me;ne++){const le=F[ne],re=le.object,Pt=le.geometry,de=le.material,Jt=le.group;if(de.side===ye&&re.layers.test(V.layers)){const ke=de.side;de.side=Fe,de.needsUpdate=!0,$a(re,H,V,Pt,de,Jt),de.side=ke,de.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et))}y.setRenderTarget(yt,gt,Lt),y.setClearColor(k,q),Rt!==void 0&&(V.viewport=Rt),y.toneMapping=Ut}function as(w,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,et=w.length;O<et;O++){const dt=w[O],yt=dt.object,gt=dt.geometry,Lt=dt.group;let Ut=dt.material;Ut.allowOverride===!0&&V!==null&&(Ut=V),yt.layers.test(H.layers)&&$a(yt,F,H,gt,Ut,Lt)}}function $a(w,F,H,V,O,et){w.onBeforeRender(y,F,H,V,O,et),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,H,V,w,et),O.transparent===!0&&O.side===ye&&O.forceSinglePass===!1?(O.side=Fe,O.needsUpdate=!0,y.renderBufferDirect(H,F,V,O,w,et),O.side=Ln,O.needsUpdate=!0,y.renderBufferDirect(H,F,V,O,w,et),O.side=ye):y.renderBufferDirect(H,F,V,O,w,et),w.onAfterRender(y,F,H,V,O,et)}function os(w,F,H){F.isScene!==!0&&(F=Ct);const V=wt.get(w),O=p.state.lights,et=p.state.shadowsArray,dt=O.state.version,yt=Z.getParameters(w,O.state,et,F,H),gt=Z.getProgramCacheKey(yt);let Lt=V.programs;V.environment=w.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(w.isMeshStandardMaterial?_e:be).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",j),Lt=new Map,V.programs=Lt);let Ut=Lt.get(gt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===dt)return Qa(w,yt),Ut}else yt.uniforms=Z.getUniforms(w),w.onBeforeCompile(yt,y),Ut=Z.acquireProgram(yt,gt),Lt.set(gt,Ut),V.uniforms=yt.uniforms;const Rt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=at.uniform),Qa(w,yt),V.needsLights=il(w),V.lightsStateVersion=dt,V.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function Ka(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Hs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Qa(w,F){const H=wt.get(w);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function el(w,F,H,V,O){F.isScene!==!0&&(F=Ct),Ht.resetTextureUnits();const et=F.fog,dt=V.isMeshStandardMaterial?F.environment:null,yt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:bi,gt=(V.isMeshStandardMaterial?_e:be).get(V.envMap||dt),Lt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,ne=!!H.morphAttributes.color;let me=Pn;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=y.toneMapping);const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=le!==void 0?le.length:0,Pt=wt.get(V),de=p.state.lights;if(Zt===!0&&(J===!0||w!==_)){const De=w===_&&V.id===v;at.setState(V,w,De)}let Jt=!1;V.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==de.state.version||Pt.outputColorSpace!==yt||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==gt||V.fog===!0&&Pt.fog!==et||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Lt||Pt.vertexTangents!==Ut||Pt.morphTargets!==Rt||Pt.morphNormals!==Xt||Pt.morphColors!==ne||Pt.toneMapping!==me||Pt.morphTargetsCount!==re)&&(Jt=!0):(Jt=!0,Pt.__version=V.version);let ke=Pt.currentProgram;Jt===!0&&(ke=os(V,F,O));let $n=!1,ze=!1,Ri=!1;const fe=ke.getUniforms(),qe=Pt.uniforms;if(St.useProgram(ke.program)&&($n=!0,ze=!0,Ri=!0),V.id!==v&&(v=V.id,ze=!0),$n||_!==w){St.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),fe.setValue(L,"projectionMatrix",w.projectionMatrix),fe.setValue(L,"viewMatrix",w.matrixWorldInverse);const Oe=fe.map.cameraPosition;Oe!==void 0&&Oe.setValue(L,vt.setFromMatrixPosition(w.matrixWorld)),It.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,ze=!0,Ri=!0)}if(O.isSkinnedMesh){fe.setOptional(L,O,"bindMatrix"),fe.setOptional(L,O,"bindMatrixInverse");const De=O.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),fe.setValue(L,"boneTexture",De.boneTexture,Ht))}O.isBatchedMesh&&(fe.setOptional(L,O,"batchingTexture"),fe.setValue(L,"batchingTexture",O._matricesTexture,Ht),fe.setOptional(L,O,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",O._indirectTexture,Ht),fe.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",O._colorsTexture,Ht));const Ye=H.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&it.update(O,H,ke),(ze||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,fe.setValue(L,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(qe.envMap.value=gt,qe.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(qe.envMapIntensity.value=F.environmentIntensity),ze&&(fe.setValue(L,"toneMappingExposure",y.toneMappingExposure),Pt.needsLights&&nl(qe,Ri),et&&V.fog===!0&&$.refreshFogUniforms(qe,et),$.refreshMaterialUniforms(qe,V,X,rt,p.state.transmissionRenderTarget[w.id]),Hs.upload(L,Ka(Pt),qe,Ht)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hs.upload(L,Ka(Pt),qe,Ht),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(L,"center",O.center),fe.setValue(L,"modelViewMatrix",O.modelViewMatrix),fe.setValue(L,"normalMatrix",O.normalMatrix),fe.setValue(L,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const De=V.uniformsGroups;for(let Oe=0,$s=De.length;Oe<$s;Oe++){const In=De[Oe];kt.update(In,ke),kt.bind(In,ke)}}return ke}function nl(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function il(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,H){const V=wt.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),wt.get(w.texture).__webglTexture=F,wt.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const H=wt.get(w);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const sl=L.createFramebuffer();this.setRenderTarget=function(w,F=0,H=0){T=w,A=F,D=H;let V=!0,O=null,et=!1,dt=!1;if(w){const gt=wt.get(w);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(gt.__webglFramebuffer===void 0)Ht.setupRenderTarget(w);else if(gt.__hasExternalTextures)Ht.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Rt=w.depthTexture;if(gt.__boundDepthTexture!==Rt){if(Rt!==null&&wt.has(Rt)&&(w.width!==Rt.image.width||w.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Ut=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?O=Ut[F][H]:O=Ut[F],et=!0):w.samples>0&&Ht.useMultisampledRTT(w)===!1?O=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?O=Ut[H]:O=Ut,C.copy(w.viewport),P.copy(w.scissor),N=w.scissorTest}else C.copy(_t).multiplyScalar(X).floor(),P.copy(Ft).multiplyScalar(X).floor(),N=ee;if(H!==0&&(O=sl),St.bindFramebuffer(L.FRAMEBUFFER,O)&&V&&St.drawBuffers(w,O),St.viewport(C),St.scissor(P),St.setScissorTest(N),et){const gt=wt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,gt.__webglTexture,H)}else if(dt){const gt=F;for(let Lt=0;Lt<w.textures.length;Lt++){const Ut=wt.get(w.textures[Lt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Lt,Ut.__webglTexture,H,gt)}}else if(w!==null&&H!==0){const gt=wt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,H)}v=-1},this.readRenderTargetPixels=function(w,F,H,V,O,et,dt,yt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt){St.bindFramebuffer(L.FRAMEBUFFER,gt);try{const Lt=w.textures[yt],Ut=Lt.format,Rt=Lt.type;if(!It.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-V&&H>=0&&H<=w.height-O&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt),L.readPixels(F,H,V,O,Tt.convert(Ut),Tt.convert(Rt),et))}finally{const Lt=T!==null?wt.get(T).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,F,H,V,O,et,dt,yt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt)if(F>=0&&F<=w.width-V&&H>=0&&H<=w.height-O){St.bindFramebuffer(L.FRAMEBUFFER,gt);const Lt=w.textures[yt],Ut=Lt.format,Rt=Lt.type;if(!It.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt),L.readPixels(F,H,V,O,Tt.convert(Ut),Tt.convert(Rt),0);const ne=T!==null?wt.get(T).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,ne);const me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lh(L,me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer(Xt),L.deleteSync(me),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,H=0){const V=Math.pow(2,-H),O=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),dt=F!==null?F.x:0,yt=F!==null?F.y:0;Ht.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,dt,yt,O,et),St.unbindTexture()};const rl=L.createFramebuffer(),al=L.createFramebuffer();this.copyTextureToTexture=function(w,F,H=null,V=null,O=0,et=null){et===null&&(O!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=O,O=0):et=0);let dt,yt,gt,Lt,Ut,Rt,Xt,ne,me;const le=w.isCompressedTexture?w.mipmaps[et]:w.image;if(H!==null)dt=H.max.x-H.min.x,yt=H.max.y-H.min.y,gt=H.isBox3?H.max.z-H.min.z:1,Lt=H.min.x,Ut=H.min.y,Rt=H.isBox3?H.min.z:0;else{const Ye=Math.pow(2,-O);dt=Math.floor(le.width*Ye),yt=Math.floor(le.height*Ye),w.isDataArrayTexture?gt=le.depth:w.isData3DTexture?gt=Math.floor(le.depth*Ye):gt=1,Lt=0,Ut=0,Rt=0}V!==null?(Xt=V.x,ne=V.y,me=V.z):(Xt=0,ne=0,me=0);const re=Tt.convert(F.format),Pt=Tt.convert(F.type);let de;F.isData3DTexture?(Ht.setTexture3D(F,0),de=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ht.setTexture2DArray(F,0),de=L.TEXTURE_2D_ARRAY):(Ht.setTexture2D(F,0),de=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Jt=L.getParameter(L.UNPACK_ROW_LENGTH),ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$n=L.getParameter(L.UNPACK_SKIP_PIXELS),ze=L.getParameter(L.UNPACK_SKIP_ROWS),Ri=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rt);const fe=w.isDataArrayTexture||w.isData3DTexture,qe=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ye=wt.get(w),De=wt.get(F),Oe=wt.get(Ye.__renderTarget),$s=wt.get(De.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,Oe.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let In=0;In<gt;In++)fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,O,Rt+In),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.get(F).__webglTexture,et,me+In)),L.blitFramebuffer(Lt,Ut,dt,yt,Xt,ne,dt,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||wt.has(w)){const Ye=wt.get(w),De=wt.get(F);St.bindFramebuffer(L.READ_FRAMEBUFFER,rl),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,al);for(let Oe=0;Oe<gt;Oe++)fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,O,Rt+Oe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,O),qe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,et,me+Oe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,et),O!==0?L.blitFramebuffer(Lt,Ut,dt,yt,Xt,ne,dt,yt,L.COLOR_BUFFER_BIT,L.NEAREST):qe?L.copyTexSubImage3D(de,et,Xt,ne,me+Oe,Lt,Ut,dt,yt):L.copyTexSubImage2D(de,et,Xt,ne,Lt,Ut,dt,yt);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else qe?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(de,et,Xt,ne,me,dt,yt,gt,re,Pt,le.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(de,et,Xt,ne,me,dt,yt,gt,re,le.data):L.texSubImage3D(de,et,Xt,ne,me,dt,yt,gt,re,Pt,le):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,et,Xt,ne,dt,yt,re,Pt,le.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,et,Xt,ne,le.width,le.height,re,le.data):L.texSubImage2D(L.TEXTURE_2D,et,Xt,ne,dt,yt,re,Pt,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$n),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ri),et===0&&F.generateMipmaps&&L.generateMipmap(de),St.unbindTexture()},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&Ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ht.setTextureCube(w,0):w.isData3DTexture?Ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ht.setTexture2DArray(w,0):Ht.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){A=0,D=0,T=null,St.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const _0=""+new URL("liangzhu-thatch-v2-UKjjfxMD.png",import.meta.url).href,Q={grass:6851954,water:4167082,deepWater:2185840,wood:7754039,roof:5128243,jade:7906698,gold:14728549,stone:7827553},v0=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z);class y0{constructor(t,e={}){this.canvas=t,this.callbacks=e,this.started=!1,this.keys=new Set,this.target=null,this.route=[],this.near=null,this.boat=!1,this.yaw=.36,this.water=[],this.interactables=[],this.floaters=[],this.elevatedAreas=[],this.ramps=[],this.wallColliders=[],this.groundColliders=[],this.navigationMeshes=[],this.solidCircles=[],this.momentActors=[],this.questMarkers=[],this.ambientBoats=[],this.villagers=[],this.swayers=[],this.animals=[],this.taskStations=[],this.treeCount=0,this.activeMoment=null,this.pad=null,this.clearings=[],this.textures={},this.explorationScale=1.55,this.interiorCamera=!1,this.currentHome=null,this.renderer=new x0({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gc,this.renderer.shadowMap.autoUpdate=!1,this.renderer.outputColorSpace=Ne,this.renderer.toneMapping=xc,this.renderer.toneMappingExposure=1.04,this.scene=new Uh,this.scene.background=new Gt(10471894),this.scene.fog=new ka(10471894,.012),this.camera=new Je(34,1,.1,260),this.raycaster=new Iu,this.pointer=new ut,this.clock=new Du,this.drag=null,this.yaw=Math.PI*1.5,addEventListener("resize",()=>this.resize()),addEventListener("keydown",n=>this.keys.add(n.key.toLowerCase())),addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),t.addEventListener("pointerdown",n=>this.pointerDown(n)),t.addEventListener("pointermove",n=>this.pointerMove(n)),t.addEventListener("pointerup",n=>this.pointerUp(n)),this.resize(),this.animate()}resize(){const t=this.canvas.clientWidth||innerWidth,e=this.canvas.clientHeight||innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}texture(t){if(this.textures[t])return this.textures[t];if(t==="thatch"){const a=new Tu().load(_0);return a.colorSpace=Ne,a.wrapS=a.wrapT=qi,a.repeat.set(2.4,2.4),a.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.textures[t]=a,a}const e=document.createElement("canvas"),n=128,i=e.getContext("2d");e.width=e.height=n;const r=a=>{i.fillStyle=a,i.fillRect(0,0,n,n)};if(t==="water"){r("#4b9eb3"),i.globalAlpha=.35;for(let a=10;a<n;a+=17){i.strokeStyle=a%34?"#9acbd0":"#d2e4d5",i.lineWidth=2,i.beginPath();for(let c=-8;c<n+9;c+=12){const l=a+Math.sin((c+a)*.13)*2;c===-8?i.moveTo(c,l):i.lineTo(c,l)}i.stroke()}i.globalAlpha=1}else if(t==="waterNormal"){r("#8080ff");for(let a=7;a<n;a+=13)for(let c=0;c<n;c+=5){const l=Math.round(128+Math.sin(c*.19+a*.11)*32);i.fillStyle=`rgb(${l},${128+(a%3-1)*18},255)`,i.fillRect(c,a,5,3)}}else if(t==="grass"){r("#6b8d70"),i.globalAlpha=.32;for(let a=0;a<560;a++){const c=(a*83+a*a*7)%n,l=(a*47+a*a*11)%n;i.fillStyle=a%4?"#50795d":"#91a77d",i.beginPath(),i.ellipse(c,l,1+a%3*.45,.55+a%2*.35,a%7*.4,0,Math.PI*2),i.fill()}i.globalAlpha=.13;for(let a=0;a<34;a++){const c=a*29%n;i.strokeStyle="#b0bc8c",i.lineWidth=.55,i.beginPath(),i.moveTo(-6,c),i.bezierCurveTo(32,c-2,80,c+3,n+6,c-1),i.stroke()}i.globalAlpha=1}else if(t==="earth"){r("#917451");for(let a=0;a<170;a++){const c=a*41%n,l=a*53%n;i.fillStyle=a%3?"#7b6043":"#b08c61",i.fillRect(c,l,2+a%4,1+a%3)}}else if(t==="wood"){r("#795338");for(let a=6;a<n;a+=13)i.strokeStyle=a%26?"#9a7049":"#4d3528",i.lineWidth=3,i.beginPath(),i.moveTo(0,a),i.bezierCurveTo(34,a-5,78,a+5,n,a-1),i.stroke();for(let a=0;a<8;a++)i.strokeStyle="#4e3528",i.lineWidth=2,i.beginPath(),i.ellipse(a*29%n,a*47%n,5,2,0,0,Math.PI*2),i.stroke()}else if(t==="jade"){r("#70937b"),i.globalAlpha=.46;for(let a=0;a<16;a++){const c=a*23%n;i.strokeStyle=a%3?"#9bb39a":"#466d60",i.lineWidth=1+a%3,i.beginPath(),i.moveTo(-8,c),i.bezierCurveTo(30,c-9,64,c+7,136,c-4),i.stroke()}i.globalAlpha=.34;for(let a=0;a<30;a++)i.fillStyle=a%2?"#c5ceac":"#365f54",i.beginPath(),i.ellipse(a*37%n,a*61%n,2+a%5,1+a%3,a*.4,0,Math.PI*2),i.fill();i.globalAlpha=1}else if(t==="stone"){r("#777061"),i.globalAlpha=.48;for(let a=0;a<74;a++){const c=a*41%n,l=a*67%n;i.fillStyle=a%3?"#958b75":"#4e514b",i.beginPath(),i.moveTo(c,l),i.lineTo(c+5+a%7,l+2),i.lineTo(c+2,l+5+a%5),i.closePath(),i.fill()}i.globalAlpha=1}else if(t==="clay"){r("#a96849"),i.globalAlpha=.45;for(let a=5;a<n;a+=11)i.strokeStyle=a%22?"#d18b60":"#6e3d31",i.lineWidth=1.7,i.beginPath(),i.moveTo(0,a+Math.sin(a)*2),i.bezierCurveTo(28,a-2,88,a+3,n,a-1),i.stroke();for(let a=0;a<95;a++)i.fillStyle=a%3?"#714031":"#d39368",i.globalAlpha=.22+a%4*.06,i.fillRect(a*47%n,a*73%n,1+a%3,1+a%2);i.globalAlpha=1}else if(t==="thatch"){r("#71563b");for(let a=-20;a<n+20;a+=8)i.strokeStyle=a%16?"#a17a4c":"#c0985d",i.lineWidth=3,i.beginPath(),i.moveTo(a,0),i.lineTo(a+24,n),i.stroke()}else if(t==="weave"){r("#a77f58");for(let a=7;a<n;a+=13)i.fillStyle=a%26?"#d0a66d":"#865f40",i.fillRect(0,a,n,4);for(let a=8;a<n;a+=17)i.fillStyle=a%34?"#bd9360":"#765338",i.fillRect(a,0,4,n)}const o=new Po(e);return o.colorSpace=t==="waterNormal"?yn:Ne,o.wrapS=o.wrapT=qi,o.repeat.set(t==="water"||t==="waterNormal"?4:3,t==="water"||t==="waterNormal"?4:3),o.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),this.textures[t]=o,o}mat(t,e={}){const{texture:n,normalTexture:i,...r}=e,o={color:t,roughness:.8,metalness:0,map:n?this.texture(n):null,normalMap:i?this.texture(i):null,...r};return i&&(o.normalScale=new ut(.32,.32)),new yu(o)}mesh(t,e,n=0,i=0,r=0,o={}){const a=new W(t,this.mat(e,o));return a.position.set(n,i,r),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),a}shape(t,e,n=0,i={}){const r=new Ma;t.forEach(([c,l],h)=>h?r.lineTo(c,-l):r.moveTo(c,-l)),r.closePath();const o=new qs(r);o.rotateX(-Math.PI/2);const a=new W(o,this.mat(e,i));return a.position.y=n,a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),a}islandMesh(){const t=new Ma;this.landPolygon.forEach(([i,r],o)=>o?t.lineTo(i,-r):t.moveTo(i,-r)),t.closePath();const e=new qs(t);e.rotateX(-Math.PI/2);const n=new W(e,this.mat(Q.grass,{texture:"grass",roughness:1}));return n.position.y=.01,n.castShadow=!0,n.receiveShadow=!0,this.scene.add(n),n}build(){this.started=!1,this.player=null,this.scene.clear(),this.scene.scale.set(this.explorationScale,1,this.explorationScale),this.water=[],this.interactables=[],this.floaters=[],this.elevatedAreas=[],this.ramps=[],this.wallColliders=[],this.groundColliders=[],this.navigationMeshes=[],this.solidCircles=[],this.momentActors=[],this.questMarkers=[],this.ambientBoats=[],this.villagers=[],this.swayers=[],this.animals=[],this.taskStations=[],this.activityEffects=[],this.treeCount=0,this.activeMoment=null,this.scene.background.set(10471894),this.scene.fog.color.set(10471894),this.scene.fog.density=.012,this.hemi=new Au(16052700,3759431,2.9),this.scene.add(this.hemi),this.sun=new Pu(16772545,3.5),this.sun.position.set(-48,58,35),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{left:-65,right:65,top:65,bottom:-65}),this.scene.add(this.sun),this.landPolygon=[[-58,-26],[-51,-35],[-38,-31],[-25,-34],[-10,-30],[4,-33],[19,-30],[34,-34],[51,-27],[58,-16],[55,-4],[60,10],[53,25],[40,33],[23,29],[7,34],[-8,30],[-26,33],[-43,29],[-56,18],[-60,5],[-55,-8]],this.outerWater=this.mesh(new Be(164,116),Q.deepWater,0,-.42,0,{texture:"water",normalTexture:"waterNormal",roughness:.26,metalness:.14}),this.outerWater.rotation.x=-Math.PI/2,this.island=this.islandMesh(),this.hitPlane=this.mesh(new Be(164,116),16777215,0,-.3,0,{visible:!1}),this.hitPlane.rotation.x=-Math.PI/2,this.seedClearings(),this.buildSky(),this.buildOuterRiver(),this.buildRivers(),this.buildShore(),this.buildWaterworks(),this.scatterLandscape(),this.buildTerrainScreens(),this.buildSettlement(),this.buildFarDistricts(),this.buildDailyLife(),this.buildCraftScenes(),this.buildExplorationEdges(),this.buildLandmarks(),this.buildHandsOnActivities(),this.buildWaterTraffic(),this.validateTransitNetwork(),this.createMomentActors(),this.createPlayer(),this.renderer.shadowMap.needsUpdate=!0,this.callbacks.onMapReady?.({land:this.landPolygon,water:this.water,docks:this.docks}),this.positionCamera(!0),this.resize(),this.started=!0}buildSky(){this.skyMaterial=new Sn({side:Fe,depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec3 vPos;uniform float uTime;void main(){float h=clamp(normalize(vPos).y*.5+.5,0.0,1.0);float breath=.5+.5*sin(uTime*.035);vec3 horizon=mix(vec3(0.72,0.81,0.78),vec3(0.79,0.86,0.80),breath);vec3 zenith=mix(vec3(0.32,0.56,0.66),vec3(0.41,0.66,0.72),breath);vec3 warm=vec3(0.90,0.77,0.61);vec3 col=mix(horizon,zenith,smoothstep(.42,1.0,h));col=mix(warm,col,smoothstep(.2,.5,h));gl_FragColor=vec4(col,1.0);}"});const t=new W(new mt(150,32,16),this.skyMaterial);this.scene.add(t);const e=(n,i,r,o)=>{const a=new Qt;for(const[c,l,h]of[[-.9,0,.8],[0,.18,1.1],[.92,.02,.76],[1.55,-.1,.5]]){const u=new W(new mt(o*h,10,7),new Oo({color:16315879,transparent:!0,opacity:.9}));u.position.set(c*o,l*o,0),u.scale.y=.42,a.add(u)}a.position.set(n,i,r),this.scene.add(a),this.floaters.push({mesh:a,base:i,phase:n*.13,cloud:!0})};e(-34,15,27,3.4),e(-14,12,18,2.25),e(17,17,35,2.7),e(42,13,8,2.2),e(-46,12,-10,2.1);for(const[n,i,r,o]of[[-18,11,25,.1],[8,13,31,.36],[36,11,20,.67]]){const a=new Qt;for(const c of[-1,1]){const l=new W(new Kt(.12,.55,3),new Te({color:3360830}));l.rotation.z=c*.95,l.position.x=c*.16,a.add(l)}a.position.set(n,i,r),a.scale.setScalar(.5),this.scene.add(a),this.floaters.push({mesh:a,base:i,phase:o,bird:!0})}}foam(t,e,n=1){const i=new Qt;for(const[r,o,a]of[[-.24,0,.12],[0,.05,.16],[.25,-.02,.1]]){const c=new W(new mt(a*n,8,5),new Te({color:14151915,transparent:!0,opacity:.5}));c.position.set(r*n,.11,o*n),c.scale.y=.16,i.add(c)}i.position.set(t,0,e),this.scene.add(i),this.floaters.push({mesh:i,base:0,phase:t*.23+e*.17,foam:!0})}ripple(t,e,n=1){const i=new W(new qt(.22*n,.018*n,5,20),new Te({color:7452862,transparent:!0,opacity:.52}));i.rotation.x=Math.PI/2,i.position.set(t,.108,e),this.scene.add(i),this.floaters.push({mesh:i,base:.108,phase:t*.1+e*.2,ripple:!0})}buildOuterRiver(){for(let t=0;t<28;t++){const e=t/28*Math.PI*2,n=65+Math.sin(t*2.7)*3.2;this.foam(Math.cos(e)*n,Math.sin(e)*n*.67,.9)}}river(t,e){const n=[],i=[];for(let a=0;a<t.length;a++){const c=t[a],l=t[Math.max(0,a-1)],h=t[Math.min(t.length-1,a+1)],u=h[0]-l[0],d=h[1]-l[1],f=Math.hypot(u,d)||1,m=-d/f*e/2,x=u/f*e/2;n.push([c[0]+m,c[1]+x]),i.unshift([c[0]-m,c[1]-x])}const r=[...n,...i],o=this.shape(r,Q.water,.075,{texture:"water",normalTexture:"waterNormal",roughness:.24,metalness:.13});o.material.transparent=!0,o.material.opacity=.98,this.water.push(r);for(let a=1;a<t.length-1;a++){const[c,l]=t[a];for(let h=0;h<3;h++)this.foam(c+(Math.random()-.5)*e*.55,l+(Math.random()-.5)*e*.22,.55+Math.random()*.45);for(let h=0;h<2;h++)this.ripple(c+(Math.random()-.5)*e*.42,l+(Math.random()-.5)*e*.24,.7+Math.random()*.65)}for(let a=0;a<t.length-1;a++){const[c,l]=t[a];for(let h=0;h<4;h++)this.reed(c+(Math.random()-.5)*e*.98,l+(Math.random()-.5)*e*.42)}}paddy(t,e,n,i){const r=[[t-n*.57,e-i*.54],[t+n*.5,e-i*.5],[t+n*.58,e+i*.48],[t-n*.49,e+i*.55]];this.shape(r,7108176,.035,{texture:"earth"});const o=[[t-n*.45,e-i*.4],[t+n*.4,e-i*.37],[t+n*.43,e+i*.35],[t-n*.38,e+i*.4]];this.shape(o,7904133,.065,{texture:"water",normalTexture:"waterNormal",roughness:.36,metalness:.08});for(const a of[-1,1])this.mesh(new nt(.12,.11,i*1.03),8877136,t+a*n*.51,.105,e),this.mesh(new nt(n*1.04,.11,.12),8877136,t,.105,e+a*i*.51);for(let a=0;a<5;a++){const c=this.mesh(new nt(n*.8,.022,.027),10268537,t,.094,e-i*.28+a*i*.14);c.rotation.y=a%2?-.012:.012;for(let l=0;l<7;l++){const h=t-n*.32+l*n*.105+a%2*.035,u=e-i*.28+a*i*.14;for(let d=0;d<3;d++){const f=this.mesh(new B(.009,.014,.28+d%2*.05,4),d===2?10988898:6000468,h+(d-1)*.027,.2,u);f.rotation.z=(d-1)*.14,this.swayers.push({mesh:f,base:(d-1)*.14,phase:h*1.7+u*.9})}}}}buildRivers(){this.river([[-56,-5.7],[-42,-5.2],[-30,-4.9],[-20,-4.4],[-15,-4.2],[-10,-4.45],[-5,-4],[0,-3.5],[5,-3.8],[10,-3.05],[15,-3.35],[20,-2.7],[32,-3.4],[44,-2.1],[56,-3.6]],9),this.river([[-2,33],[-1.4,22],[-1,16],[-1.6,12],[-.8,8],[-1.5,4],[-.4,.2],[0,-3.4]],4.7),this.river([[5,35],[8,33],[10,19],[8,14],[11,12.4],[15,12.6],[20,10.8],[32,12],[43,15],[55,17],[61,15]],4.65),this.river([[-47,28],[-40,25],[-33,23],[-26,22],[-20,20],[-14,19],[-8,18],[-4,17],[-1,16]],4.55),this.river([[12,-32],[14,-27],[15,-23],[17,-18],[19,-13],[21,-8],[20,-3.1]],4.6)}reed(t,e){const n=.22+Math.random()*.38,i=this.mesh(new B(.014,.025,n,5),3895114,t,n/2+.08,e);i.rotation.z=(Math.random()-.5)*.24}buildShore(){for(let t=0;t<this.landPolygon.length;t++){const[e,n]=this.landPolygon[t];for(let i=0;i<3;i++){const r=this.mesh(new ge(.16+Math.random()*.25),Q.stone,e+(Math.random()-.5)*1.8,.12,n+(Math.random()-.5)*1.8,{texture:"stone"});r.rotation.y=Math.random()*4,this.reed(e+(Math.random()-.5)*2,n+(Math.random()-.5)*2)}}}buildWaterworks(){for(let i=0;i<15;i++){const r=-8.5+i*1.82,o=54.15+Math.sin(i*.73)*.19;this.solidCircles.push({x:o,z:r,r:.53});const a=this.mesh(new nt(1.18,.32,1.45),i%3?8746325:9929566,o,.17,r,{texture:"earth"});a.rotation.y=Math.sin(i*.5)*.04;for(const c of[-1,1]){const l=this.mesh(new B(.038,.052,1.27,6),7228467,o+c*.52,.28,r,{texture:"wood"});l.rotation.z=Math.PI/2,l.rotation.y=c*.12}if(i%3===0){this.mesh(new B(.045,.065,1.35,6),Q.wood,o-.42,.67,r+.34,{texture:"wood"});const c=this.mesh(new nt(.24,.06,.045),14272109,o-.42,.94,r+.34);c.rotation.y=.18}}for(let i=0;i<22;i++){const r=-8.9+i*1.25;for(const o of[-.78,-.65]){const a=this.mesh(new B(.012,.02,.52+i%3*.07,5),5865038,53.5+o*.18,.34,r);a.rotation.z=o*.13}}const t=52.95,e=6;for(const i of[-1,1]){this.mesh(new B(.075,.1,2.05,7),Q.wood,t+i*.72,1.02,e,{texture:"wood"});const r=this.mesh(new Kt(.15,.22,6),6111791,t+i*.72,2.12,e,{texture:"wood"});r.rotation.y=i*.3}for(let i=0;i<4;i++){const r=this.mesh(new nt(1.34,.3,.09),i%2?7688247:9728075,t,.54+i*.29,e-.19,{texture:"wood"});r.rotation.y=.04}const n=this.mesh(new B(.055,.075,1.78,7),Q.wood,t,1.87,e,{texture:"wood"});n.rotation.z=Math.PI/2,this.mesh(new nt(.17,.82,.035),14206575,t-.96,.73,e+.18);for(let i=0;i<5;i++)this.mesh(new nt(.11,.022,.04),7493181,t-.96,.4+i*.14,e+.155)}seedClearings(){const t=[[-12.8,5.1,4.8,3.6],[-39.5,14.2,5,4.5],[-21,.7,4.5,4],[-20,20,4.5,5],[-11,13,9,7],[-26,14.2,4.2,3.7],[26,8,8.5,7],[38,18,7,7],[30,-18,8,7],[51,6,6,7],[-31,-16,5,4.5],[-22,-17,5,4.5],[-12,-17.5,5,4.5],[-3,-16,5,4.5],[-30,-25,4.7,4.4],[-20,-25.5,4.7,4.4],[-9,-25,4.7,4.4],[-45,-17,7.8,6.4],[-43,-13.5,4.4,3.5],[28,22,5,4.5],[43,25,5,4.5],[39,-22,5,4.5],[-38,-25,5,4.5]];this.clearings=t.map(([e,n,i,r])=>({x:e,z:n,rx:i,rz:r}))}inClearing(t,e){return this.clearings.some(n=>Math.abs(t-n.x)<n.rx&&Math.abs(e-n.z)<n.rz)}tree(t,e,n=1,i=!1){i&&this.solidCircles.push({x:t,z:e,r:.18*n});const r=this.mesh(new B(.06*n,.13*n,.98*n,7),Q.wood,t,.49*n,e),o=this.mesh(new B(.014*n,.018*n,.64*n,5),10186822,t+.1*n,.52*n,e+.04*n);o.rotation.z=.13;for(const[a,c,l,h]of[[-.25,.04,.7,3828043],[.18,-.18,.82,4550480],[.08,.18,1,5405785],[-.05,-.05,1.05,3563333]]){const u=this.mesh(new ge(.42*n,1),h,t+a*n,(1.05+l*.26)*n,e+c*n);u.scale.set(1.08,l,1),u.rotation.y=Math.random()*3}if(!i){const a=new Qt;a.position.set(t,.02,e),a.userData={id:`tree-${this.treeCount++}`,name:"树荫下的栎树",action:"摇一摇树",copy:"枝叶晃动，几颗果实落进湿草。",kind:"activity",pieces:[],complete:!1,tree:!0},this.scene.add(a),this.interactables.push(a)}return r}tuft(t,e,n=.25){for(let i=0;i<3;i++){const r=this.mesh(new Kt(.06*n,.45*n,4),i%2?3962187:5406544,t+(Math.random()-.5)*n,.18*n,e+(Math.random()-.5)*n);r.rotation.z=(Math.random()-.5)*.65}}meadowPatch(t,e,n=1){for(let i=0;i<7;i++)this.tuft(t+(Math.random()-.5)*n*1.6,e+(Math.random()-.5)*n,.45+Math.random()*.45);if(Math.random()>.42)for(let i=0;i<4;i++){const r=this.mesh(new mt(.045,7,5),[15781744,15184573,15328982][i%3],t+(Math.random()-.5)*n,.22,e+(Math.random()-.5)*n);r.position.y=.28}}groundCover(){const t=new Be(.055,.34),e=new Kt(.055,.27,3),n=this.mat(4812615,{side:ye}),i=this.mat(7246168,{side:ye}),r=this.mat(4615499),o=780,a=new Mr(t,n,o),c=new Mr(t,i,o),l=new Mr(e,r,180),h=new Me;let u=0,d=0;for(let f=0;u<o&&f<4200;f++){const m=-56+Math.random()*112,x=-31+Math.random()*62;if(!this.onLand(m,x)||this.isWater(m,x)||this.inClearing(m,x))continue;const g=Math.random()*Math.PI;for(const[p,S]of[[a,0],[c,Math.PI/2]])h.position.set(m+(Math.random()-.5)*.26,.18,x+(Math.random()-.5)*.26),h.rotation.set((Math.random()-.5)*.18,g+S,(Math.random()-.5)*.15),h.scale.setScalar(.65+Math.random()*.85),h.updateMatrix(),p.setMatrixAt(u,h.matrix);u++}for(let f=0;d<180&&f<2200;f++){const m=-55+Math.random()*110,x=-30+Math.random()*60;!this.onLand(m,x)||this.isWater(m,x)||this.inClearing(m,x)||(h.position.set(m,.14,x),h.rotation.set(0,Math.random()*Math.PI,0),h.scale.set(1,.72+Math.random()*.9,1),h.updateMatrix(),l.setMatrixAt(d++,h.matrix))}a.count=c.count=u,l.count=d;for(const f of[a,c,l])f.instanceMatrix.needsUpdate=!0,f.castShadow=!1,f.receiveShadow=!0,this.scene.add(f)}shrub(t,e,n=1){const i=3+Math.round(n*2);for(let r=0;r<i;r++){const o=r/i*Math.PI*2+(t+e)*.13,a=n*(.08+r%3*.06),c=this.mesh(new B(.018,.027,.28*n,5),6116919,t+Math.cos(o)*a,.14*n,e+Math.sin(o)*a,{texture:"wood"});c.rotation.z=Math.cos(o)*.18;const l=this.mesh(new ge(.18*n,1),r%2?4550480:5799509,t+Math.cos(o)*a*1.35,.28*n,e+Math.sin(o)*a*1.35);l.scale.y=.72}}scatterLandscape(){for(let t=0;t<170;t++){const e=-55+Math.random()*110,n=-30+Math.random()*60;!this.onLand(e,n)||this.isWater(e,n)||this.inClearing(e,n)||this.tree(e,n,.82+Math.random()*1.02)}for(let t=0;t<105;t++){const e=-55+Math.random()*110,n=-30+Math.random()*60;!this.onLand(e,n)||this.isWater(e,n)||this.inClearing(e,n)||this.shrub(e,n,.42+Math.random()*.68)}for(let t=0;t<55;t++){const e=-54+Math.random()*108,n=-29+Math.random()*58;if(!this.onLand(e,n)||this.isWater(e,n)||this.inClearing(e,n))continue;const i=this.mesh(new ge(.17+Math.random()*.35),Q.stone,e,.13,n,{texture:"stone"});i.scale.y=.7}for(let t=0;t<35;t++){const e=-54+Math.random()*108,n=-29+Math.random()*58;!this.onLand(e,n)||this.isWater(e,n)||this.inClearing(e,n)||this.meadowPatch(e,n,.55+Math.random()*.75)}this.groundCover(),this.mountain(-43,17.4,4.1,2.65),this.mountain(-39.5,18.2,2.8,1.9),this.mountain(-45.2,13.7,2.5,1.65);for(const[t,e]of[[-43,15.6],[-39.9,16.3],[-44.4,13.9]]){const n=this.mesh(new ge(.32),Q.jade,t,.43,e,{emissive:1195051,emissiveIntensity:.65});this.floaters.push({mesh:n,base:.43,phase:Math.random()*4,spin:!0})}}buildTerrainScreens(){const t=(n,i,r)=>{for(let o=0;o<11;o++){const a=o/11*Math.PI*2+.19,c=r*(.55+o%3*.14);if(this.tree(n+Math.cos(a)*c,i+Math.sin(a)*c,.72+o%4*.1,!0),o%3===0){const l=this.mesh(new ge(.32),7302493,n+Math.cos(a+.19)*c*.74,.17,i+Math.sin(a+.19)*c*.74);l.scale.y=.62}}},e=(n,i,r,o,a)=>{this.mesh(new mt(1,15,9),7241560,n,a*.25,i).scale.set(r,a,o),this.solidCircles.push({x:n,z:i,r:Math.min(r,o)*.65});for(let l=0;l<5;l++)this.tuft(n+(Math.random()-.5)*r*1.45,i+(Math.random()-.5)*o*1.25,.85)};t(4,20,3.2),t(18,25,3.2),t(-31,-3,3.5),t(3,-26,3.1),e(-7,24,4.5,2.1,1.1),e(45,4,3.8,2.2,.9),e(-43,-12,3.4,2,.82);for(let n=0;n<16;n++){const i=-9+n*1.9,r=53.3+Math.sin(n*.7)*.35;this.mesh(new ge(.46+n%3*.08),7892565,r,.24,i).scale.set(1.15,.55,1.65),this.tuft(r-.45,i,.8)}}mountain(t,e,n,i){this.solidCircles.push({x:t,z:e,r:n*.68});const r=new Qt,o=(a,c,l,h,u,d,f,m,x=0,g={})=>{const p=new W(a,this.mat(c,{roughness:1,...g}));return p.position.set(l,h,u),p.scale.set(d,f,m),p.rotation.y=x,p.castShadow=p.receiveShadow=!0,r.add(p),p};o(new mt(1,16,11),6389082,t,i*.18,e,n,i*.42,n*.78,.12),o(new Wa(1,2),7436130,t-n*.14,i*.48,e+.03,n*.78,i*.62,n*.61,.38,{texture:"stone"}),o(new ge(1,1),8946544,t+n*.19,i*.7,e-n*.12,n*.52,i*.53,n*.42,-.25,{texture:"stone"}),o(new ge(1,1),6909279,t-n*.36,i*.38,e-n*.3,n*.35,i*.34,n*.32,.46,{texture:"stone"});for(let a=0;a<9;a++){const c=a/9*Math.PI*2+.24,l=n*(.38+a%3*.11),h=o(new ge(.23+a%3*.11,0),a%3?Q.stone:7041627,t+Math.cos(c)*l,.16,e+Math.sin(c)*l,.9,.55,.82,c,{texture:"stone"});h.rotation.z=a%2?-.12:.1}r.position.y=.02,this.scene.add(r)}gableRoof(t,e,n,i,r,o,a=Q.roof){const c=new Float32Array([- -i/2,0,-r/2,i/2,0,-r/2,-i/2,o,0,i/2,o,0,-i/2,0,r/2,i/2,0,r/2]),l=new Le;l.setAttribute("position",new Xe(c,3)),l.setIndex([0,1,3,0,3,2,2,3,5,2,5,4,0,2,4,1,5,3]),l.computeVertexNormals();const h=new W(l,this.mat(a,{texture:"thatch",side:ye}));h.position.set(t,e,n),h.castShadow=h.receiveShadow=!0,this.scene.add(h);const u=[h];for(let f=0;f<7;f++){const m=this.mesh(new B(.018,.028,i*1.05,5),10187849,t,e+.08+f*o*.12,n-r*.43+f*r*.14,{texture:"thatch"});m.rotation.z=Math.PI/2,u.push(m)}const d=this.mesh(new B(.052,.07,i*1.1,7),6441527,t,e+o+.015,n,{texture:"wood"});return d.rotation.z=Math.PI/2,u.push(d),h.userData.parts=u,h}house(t,e,n=1){const i=1.72*n,r=3.18*n,o=2.52*n,a=e+o*.5,c=.78*n,l=Math.abs(Math.round(t*3+e))%3,h=[10977112,11635552,10188372][l],u=[5128243,5982519,4405809][l],d=[12029277,10976337,12620641][l],f={x:t,z:e,w:r,d:o,y:i,front:a,doorW:c};this.elevatedAreas.push(f),this.groundColliders.push({x:t,z:e,w:r*.9,d:o*.9});const m=new W(new nt(r,i+1.45*n,o),new Te({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}));m.position.set(t,(i+1.45*n)/2,e),m.userData.home=f,this.scene.add(m),this.navigationMeshes.push(m);for(const T of[-r*.43,r*.43])for(const v of[-o*.43,o*.43])this.mesh(new B(.09*n,.13*n,i,7),Q.wood,t+T,i/2,e+v,{texture:"wood"});this.mesh(new nt(r,.16*n,o),d,t,i,e,{texture:"wood"});const x=(T,v,_,C)=>{this.mesh(new nt(_,.78*n,C),h,T,i+.43*n,v,{texture:"weave"});for(let P=0;P<7;P++){const N=this.mesh(new nt(.035*n,.74*n,.03*n),P%2?12688237:9660740,T-_*.42+P*_*.14,i+.43*n,v,{texture:"wood"});N.rotation.z=P%2?-.025:.025}for(let P=0;P<4;P++){const N=this.mesh(new nt(Math.max(.12,_*.9),.025*n,.035*n),P%2?13740656:8806208,T,i+.16*n+P*.18*n,v+.025*n,{texture:"wood"});N.rotation.z=P%2?-.01:.01}};x(t,e-o*.47,r,.1*n),x(t-r*.47,e,.1*n,o),x(t+r*.47,e,.1*n,o),x(t-(c+r)*.25,a,r*.5-c*.5,.1*n),x(t+(c+r)*.25,a,r*.5-c*.5,.1*n),this.wallColliders.push({x:t,z:e-o*.47,w:r,d:.16*n},{x:t-r*.47,z:e,w:.16*n,d:o},{x:t+r*.47,z:e,w:.16*n,d:o},{x:t-(c+r)*.25,z:a,w:r*.5-c*.5,d:.16*n},{x:t+(c+r)*.25,z:a,w:r*.5-c*.5,d:.16*n}),this.mesh(new nt(.88*n,.09*n,.56*n),13151606,t+.3*n,i+.2*n,e+.18*n);for(const T of[-.34,.34])this.mesh(new B(.025*n,.035*n,.64*n,5),Q.wood,t+T*n,i+.43*n,e+.25*n);const g=[.5,.66,.58][l]*n,p=[0,.06,-.04][l]*n,S=r*[1.16,1.38,1.18][l],b=o*[1.18,1.46,1.32][l];f.roof=this.gableRoof(t,i+1.06*n,e,S,b,g+p,u),this.mesh(new B(.18,.23,.04,10),4867646,t-r*.22,i+.11,e-.18);for(let T=0;T<4;T++){const v=this.mesh(new ge(.06,0),T%2?12348725:7625034,t-r*.22+Math.cos(T*Math.PI/2)*.14,i+.16,e-.18+Math.sin(T*Math.PI/2)*.14);v.scale.y=.5}this.mesh(new nt(.66*n,.07*n,.92*n),10779984,t+r*.22,i+.13,e-.23,{texture:"weave"});const y=this.mesh(new B(.1*n,.1*n,.58*n,8),12691055,t+r*.22,i+.22,e-.56,{texture:"weave"});if(y.rotation.z=Math.PI/2,l===0){const T=e-o*.27;for(const[v,_]of[[-.67,.14],[-.43,.11]]){const C=this.mesh(new mt(_*n,9,7),11631188,t+v*n,i+.14*n,T,{texture:"clay"});C.scale.y=1.23,this.mesh(new B(_*.38*n,_*.48*n,.08*n,8),7753784,t+v*n,i+.32*n,T,{texture:"clay"})}this.mesh(new B(.18*n,.23*n,.18*n,10),11897685,t-.58*n,i+.1*n,T+.32*n,{texture:"weave"}),this.mesh(new B(.14*n,.17*n,.025*n,10),7754041,t-.58*n,i+.21*n,T+.32*n,{texture:"wood"}),t===-12&&e===-17.5&&this.interiorActivity("home-grain","屋内的谷罐与编筐","整理谷种","陶罐和编筐靠墙放好。住处抬高离开湿地，也让粮食和种子有更干爽的地方可放。",t-.58*n,T+.32*n,i,v=>{const _=[];for(let C=0;C<9;C++){const P=new W(new mt(.025,6,5),this.mat(C%2?13676117:11110723));P.position.set((C%3-1)*.06,.055,Math.floor(C/3)*.055-.05),v.add(P),_.push(P)}return _})}else if(l===1){const T=t-.56*n,v=e-o*.27;for(const _ of[-.28,.28])this.mesh(new B(.022*n,.03*n,.44*n,6),Q.wood,T+_*n,i+.27*n,v,{texture:"wood"});for(const _ of[.12,.43]){const C=this.mesh(new B(.018*n,.026*n,.72*n,6),Q.wood,T,i+_*n,v,{texture:"wood"});C.rotation.z=Math.PI/2}for(let _=0;_<7;_++){const C=this.mesh(new B(.006*n,.006*n,.28*n,5),_%2?13811610:11966320,T-.21*n+_*.07*n,i+.27*n,v-.018*n);C.rotation.z=.02}t===-31&&e===-16&&this.interiorActivity("home-loom","屋内的小织架","拨正麻线","几根横木把麻线绷得笔直。进到屋内，能看清纺线不是背景纹理，而是一户人家手边的工作。",T,v,i,_=>{const C=[];for(let P=0;P<4;P++){const N=new W(new Be(.05,.27),this.mat(P%2?13811610:11966320,{side:ye}));N.position.set(-.1+P*.067,.18,.015),_.add(N),C.push(N)}return C})}else{const T=t+.62*n,v=e-o*.26;this.mesh(new nt(.14*n,.46*n,.64*n),9661001,T,i+.28*n,v,{texture:"wood"});for(const _ of[-.18,.18]){const C=this.mesh(new mt(.13*n,9,7),11368017,T-.13*n,i+.2*n,v+_*n,{texture:"clay"});C.scale.y=1.18,this.mesh(new B(.05*n,.065*n,.08*n,8),7620149,T-.13*n,i+.37*n,v+_*n,{texture:"clay"})}t===-20&&e===-25.5&&this.interiorActivity("home-pottery","屋内的陶罐架","盖好陶罐","几只陶罐被架离地板，里面装着要避潮的食物和日常器物。屋内的小收纳，也和高仓一样是在应对湿地。",T-.13*n,v,i,_=>{const C=[];for(const P of[-.15,.15]){const N=new W(new B(.06,.075,.024,8),this.mat(7620149,{texture:"clay"}));N.position.set(0,.08,P),_.add(N),C.push(N)}return C})}if(t===-22&&e===-17&&(this.discovery("family-hearth","屋内火塘","石头围住火塘，火光既能煮食，也能在潮湿的夜里让一家人围坐。",t-r*.22,e-.18,i),this.discovery("family-mat","编席与睡具","编席被卷起靠在墙边。高脚屋把住处抬离湿地，屋内仍围绕最朴素的睡、食与收纳。",t+r*.22,e-.23,i)),l===0)for(const T of[-1,1]){const v=this.mesh(new nt(.045*n,.82*n,.03*n),7688503,t+T*r*.3,i+.47*n,a+.065*n,{texture:"wood"});v.rotation.z=T*.58,this.mesh(new B(.15*n,.2*n,.22*n,9),10976069,t+T*r*.29,.25*n,e-o*.48,{texture:"weave"});const _=this.mesh(new B(.12*n,.14*n,.028*n,9),7557175,t+T*r*.29,.38*n,e-o*.48,{texture:"wood"});_.rotation.y=T*.14}else if(l===1){const T=t-r*.28,v=a+.18*n;this.mesh(new nt(1.18*n,.075*n,.58*n),11831899,T,i+.07*n,v,{texture:"wood"});for(const C of[-.5,.5]){const P=this.mesh(new B(.025*n,.035*n,.52*n,6),Q.wood,T+C*.52*n,i+.35*n,v+.2*n,{texture:"wood"});P.rotation.z=C*.02}const _=this.mesh(new B(.022*n,.03*n,1.18*n,6),Q.wood,T,i+.58*n,v+.2*n,{texture:"wood"});_.rotation.z=Math.PI/2;for(let C=0;C<3;C++){const P=this.mesh(new B(.018*n,.025*n,.44*n,6),C%2?12755302:7754039,T-.28*n+C*.28*n,i+.3*n,v-.17*n,{texture:"wood"});P.rotation.z=(C-1)*.08}}else{const T=t+r*.56,v=e-.18*n;this.mesh(new nt(.72*n,.18*n,1.02*n),9595464,T,.22*n,v,{texture:"wood"});for(const P of[-.36,.36])this.mesh(new B(.05*n,.07*n,.74*n,6),Q.wood,T,.46*n,v+P,{texture:"wood"});for(const P of[-.22,.22]){const N=this.mesh(new mt(.13*n,9,7),11368017,T+.08*n,.55*n,v+P,{texture:"clay"});N.scale.y=1.2}const _=this.mesh(new nt(.86*n,.065*n,1.18*n),5982519,T+.08*n,i+.92*n,v,{texture:"thatch"});_.rotation.z=-.36,f.roof.userData.parts.push(_);for(const P of[-.44,.44])this.mesh(new B(.045*n,.06*n,.9*n,6),Q.wood,T+.42*n,.45*n,v+P*n,{texture:"wood"});const C=this.mesh(new nt(.07*n,.95*n,.07*n),Q.wood,t+r*.46,i*.48,a-.38*n,{texture:"wood"});C.rotation.z=-.36}const R=1.58*n,A=a+.12*n;for(let T=0;T<6;T++){const v=(T+1)/6;this.mesh(new nt(c,.13*n,R/6+.03),10122831,t,v*i,A+R*(1-v))}const D={x:t,z0:a-.34*n,z1:A+R,w:c*.62,y:i};this.ramps.push(D),f.ramp=D,f.entrance={x:t,z:D.z1},this.mesh(new nt(r*.82,.07,o*.67),7953986,t,.08,e-.04);for(const T of[-r*.39,r*.39])for(const v of[-o*.31,o*.31])this.mesh(new B(.045,.06,.56*n,5),Q.wood,t+T,.28,e+v);for(const[T,v,_,C]of[[-.26,-.12,.92,13081466],[.25,-.08,.76,14003596],[.02,.24,.58,12090981],[-.33,.27,.54,14726815]]){const P=t+T*n,N=e+v*n,k=n*_,q=new Qt,G=(_t,Ft,ee,oe,Zt)=>{const J=new W(_t,this.mat(Ft));return J.position.set(ee,oe,Zt),J.castShadow=J.receiveShadow=!0,q.add(J),J};G(new mt(.27*k,10,7),C,0,.3*k,0).scale.set(1.35,.76,.8),G(new mt(.11*k,8,6),14003596,.31*k,.28*k,0),G(new mt(.052*k,7,5),14792349,.395*k,.275*k,-.07*k);for(const _t of[-1,1]){const Ft=G(new Kt(.055*k,.11*k,5),14264977,.27*k,.42*k,_t*.075*k);Ft.rotation.z=_t*.48}for(const _t of[-.17,.17])for(const Ft of[-.1,.1])G(new B(.032*k,.042*k,.22*k,5),10318428,_t*k,.12*k,Ft*k);const X=G(new qt(.065*k,.012*k,5,9,Math.PI*1.3),12879729,-.37*k,.38*k,.02*k);X.rotation.y=Math.PI/2,q.position.set(P,0,N),this.scene.add(q);const ct={x:P-.11*n,z:N-.05*n},pt={x:P+.13*n,z:N+.08*n};this.animals.push({mesh:q,phase:P*.31+N*.21,start:ct,end:pt,homeStart:{...ct},homeEnd:{...pt},pen:{x:t,z:e},kind:"pig"})}return f}buildSettlement(){for(const[t,e,n]of[[-31,-16,1.58],[-22,-17,1.62],[-12,-17.5,1.56],[-3,-16,1.52],[-30,-25,1.46],[-20,-25.5,1.52],[-9,-25,1.46]])this.house(t,e,n);for(const[t,e,n,i]of[[-14,10.5,3.9,2.9],[-8.2,10.5,3.7,2.9],[-14,15,4.1,3]])this.paddy(t,e,n,i);this.mesh(new nt(9.4,.18,5.2),7035970,26,2.8,8,{texture:"thatch"});for(const t of[21.8,24.6,27.4,30.2])for(const e of[5.5,10.5])this.mesh(new B(.075,.11,2.75,6),Q.wood,t,1.38,e,{texture:"wood"});this.buildWorkshopDetails(26,8),this.buildRitualPlatform(38,18);for(const[t,e,n]of[[30,-18,1.55],[33,-20.4,1.16],[27,-21,1]]){const i=this.mesh(new mt(1.25*n,16,10),7827035,t,.32,e);i.scale.y=.45}for(const[t,e,n]of[[-17,5.8,3.1],[-15.3,5.8,1.2],[-18.6,4.4,1.8]])for(let i=0;i<6;i++){const r=this.mesh(new B(.035,.05,.55,5),Q.wood,t-n/2+i*n/5,.28,e);r.rotation.z=(Math.random()-.5)*.08}}buildWorkshopDetails(t,e){const n=(r,o,a=0)=>{const c=this.mesh(new nt(2.05,.13,.58),7754039,r,.72,o,{texture:"wood"});c.rotation.y=a;for(const l of[-.78,.78])for(const h of[-.16,.16]){const u=r+l*Math.cos(a)-h*Math.sin(a),d=o+l*Math.sin(a)+h*Math.cos(a);this.mesh(new B(.04,.055,.69,6),Q.wood,u,.35,d,{texture:"wood"})}};n(t-1.72,e-.6,.03),n(t+.85,e+.7,-.06);for(const[r,o,a]of[[-1.72,-.62,.34],[-.8,-.6,.25],[.83,.7,.37],[1.63,.78,.22]]){this.mesh(new B(a,a,.08,16),8354406,t+r,.84,e+o);const c=this.mesh(new B(a*.72,a*.72,.012,16),10331802,t+r,.887,e+o,{roughness:.4});c.material.transparent=!0,c.material.opacity=.76}for(const[r,o,a]of[[-2.48,.9,.23],[-2.15,1.06,.17],[2.1,-.95,.21],[1.86,-1.15,.16]])this.mesh(new ge(a,1),Q.jade,t+r,.19,e+o,{texture:"jade",emissive:1523504,emissiveIntensity:.22}).rotation.set(.2,.4,.1);for(const[r,o]of[[-3.05,-.9],[2.85,1.1]]){const a=this.mesh(new mt(.22,10,7),11893074,t+r,.2,e+o,{texture:"clay"});a.scale.y=1.2,this.mesh(new B(.09,.11,.12,9),9264451,t+r,.48,e+o,{texture:"clay"})}const i=this.mesh(new nt(7.9,.06,.08),Q.wood,t,1.45,e-2.15,{texture:"wood"});i.rotation.y=.01}jadeCong(t,e,n,i=1){const r=new Qt,o=this.mat(7378813,{texture:"jade",emissive:1060130,emissiveIntensity:.2}),a=this.mat(2376504,{roughness:.55}),c=.58*i,l=.54*i,h=new W(new nt(c,l,c),o);h.position.y=l*.5,h.castShadow=h.receiveShadow=!0,r.add(h);for(const m of[-1,1])for(const x of[-1,1]){const g=new W(new nt(.12*i,l*.92,.12*i),this.mat(8957329,{texture:"jade"}));g.position.set(m*c*.39,l*.5,x*c*.39),g.castShadow=g.receiveShadow=!0,r.add(g)}const u=new W(new B(.155*i,.155*i,l*1.025,18),a);u.position.y=l*.5,r.add(u);const d=new W(new qt(.158*i,.022*i,6,18),this.mat(11847326,{texture:"jade"}));d.rotation.x=Math.PI/2,d.position.y=l+.006,r.add(d);const f=(m,x,g)=>{const p=new W(new nt(.26*i,.15*i,.018*i),this.mat(10270095));p.position.set(m,l*.57,x),p.rotation.y=g,r.add(p);for(const S of[-1,1]){const b=new W(new mt(.028*i,7,5),this.mat(14079371));b.position.set(m+(g?0:S*.07*i),l*.59,x+(g?S*.07*i:-.012*i)),r.add(b)}};return f(0,-c*.51,0),f(c*.51,0,Math.PI/2),f(0,c*.51,Math.PI),f(-c*.51,0,-Math.PI/2),r.position.set(t,e,n),this.scene.add(r),r}buildRitualPlatform(t,e){const n=[[7.1,5.1,.3,.15,7693645],[5.9,4.05,.32,.46,9139800],[4.75,3.05,.3,.77,10980452],[4.15,2.55,.16,.995,12625784]];for(const[c,l,h,u,d]of n){this.mesh(new nt(c,h,l),d,t,u,e);for(let f=0;f<7;f++){const m=this.mesh(new nt(c*.78,.025,.07),f%2?10125661:12823161,t,u+h*.52+.012,e-l*.38+f*l*.125);m.rotation.y=f%2?-.008:.008}}const i=1.075,r=e+1.28,o=e+3.55;this.ritualEntry={x:t,z:e,topY:i,stairEnd:o};for(let c=0;c<6;c++){const l=(c+1)/6;this.mesh(new nt(1.72,.16,(o-r)/6+.035),9993561,t,l*i,o-(c+.5)*(o-r)/6)}this.elevatedAreas.push({x:t,z:e,w:4.1,d:2.5,y:i,type:"platform"}),this.groundColliders.push({x:t,z:e,w:4.52,d:3.05,type:"platform"}),this.ramps.push({x:t,z0:r-.3,z1:o,w:1.02,y:i,type:"platform"});const a=new W(new nt(4.15,1.7,2.58),new Te({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}));a.position.set(t,.85,e),a.userData.goTo={x:t,z:e,ritual:!0},this.scene.add(a),this.navigationMeshes.push(a);for(const c of[-2.38,2.38])for(const l of[-1.45,1.45]){this.mesh(new B(.075,.11,1.9,7),Q.wood,t+c,1,e+l),this.mesh(new nt(.42,.34,.075),7772028,t+c,1.62,e+l+(l<0?-.06:.06));for(const h of[-1,1])this.mesh(new mt(.052,8,6),14275979,t+c+h*.105,1.64,e+l+(l<0?-.11:.11))}this.mesh(new nt(1.12,.48,.74),7623227,t,1.31,e-.05);for(const c of[-.42,.42])for(const l of[-.24,.24])this.mesh(new B(.04,.06,.42,6),Q.wood,t+c,1.1,e+l);this.jadeCong(t,1.56,e-.05,.72);for(const c of[-1.35,1.35]){this.mesh(new B(.18,.24,.22,8),7230784,t+c,1.19,e-.45);const l=this.mesh(new Kt(.1,.38,7),15837003,t+c,1.46,e-.45,{emissive:11095332,emissiveIntensity:.85});this.floaters.push({mesh:l,base:1.46,phase:c+t,spin:!0})}for(const c of[-2.35,2.35]){const l=this.mesh(new B(.035,.05,1.35,6),Q.wood,t+c,2.35,e-.02),h=this.mesh(new Be(.62,.48),12085325,t+c+(c<0?-.3:.3),2.58,e-.02,{side:ye});h.rotation.y=Math.PI/2,l.rotation.z=c<0?-.03:.03}}buildFarDistricts(){for(const[t,e,n]of[[28,22,1.6],[43,25,1.54],[-38,-25,1.52]])this.house(t,e,n);for(const[t,e]of[[-39.5,14.2],[-45,-17],[37,18],[30,-18]]){this.mesh(new B(.28,.38,.7,8),9270357,t,.35,e);const n=this.mesh(new Kt(.17,.55,7),15902798,t,.76,e,{emissive:11095332,emissiveIntensity:.7});this.floaters.push({mesh:n,base:.76,phase:t,spin:!0})}for(const[t,e,n]of[[-55,7,10],[45,17,11],[-31,-24,9]])for(let i=0;i<n;i++){const r=this.mesh(new B(.06,.1,1.45,6),Q.wood,t+i*.48,.72,e+Math.sin(i*.9)*.25);r.rotation.z=(Math.random()-.5)*.08}this.raisedGranary(34,25),this.buildPalaceCompound(-45,-17),this.buildNecropolis(31,-19.3),this.buildRiceProcessing(-26,14.2),this.buildFoodProcessing(-35,-12.8),this.mountain(-52,25,5.1,3.5),this.mountain(49,25,4.8,3.1)}buildPalaceCompound(t,e){this.shape([[t-12.8/2,e-9.4/2],[t+12.8/2,e-9.4/2],[t+12.8/2,e+9.4/2],[t-12.8/2,e+9.4/2]],10322011,.09,{texture:"earth"}),this.wallColliders.push({x:t-12.8*.48,z:e,w:.13,d:9.4*.9},{x:t+12.8*.48,z:e,w:.13,d:9.4*.9},{x:t,z:e-9.4*.45,w:12.8*.9,d:.13},{x:t-12.8*.31,z:e+9.4*.45,w:12.8*.28,d:.13},{x:t+12.8*.31,z:e+9.4*.45,w:12.8*.28,d:.13});for(const d of[-1,1])for(let f=0;f<14;f++){const m=this.mesh(new B(.055,.085,1.05,6),Q.wood,t+d*6.144,.53,e-3.948+f*9.4*.064,{texture:"wood"});m.rotation.z=d*.02}for(const d of[-1,1])for(let f=0;f<17;f++){const m=t-5.760000000000001+f*12.8*.056;d===1&&Math.abs(m-t)<1.55||this.mesh(new B(.045,.07,.9,6),Q.wood,m,.45,e+d*9.4*.45,{texture:"wood"})}for(const d of[-1.25,1.25])this.mesh(new B(.12,.16,1.7,7),Q.wood,t+d,.85,e+9.4*.49,{texture:"wood"});const r=this.mesh(new B(.075,.1,2.85,7),Q.wood,t,1.66,e+9.4*.49,{texture:"wood"});r.rotation.z=Math.PI/2;const o=.46,a=e-.48;this.mesh(new nt(6.8,.34,4.15),10848352,t,o,a,{texture:"earth"}),this.groundColliders.push({x:t,z:a,w:6.95,d:4.3,type:"palace-hall"});for(const d of[-2.85,-.95,.95,2.85])for(const f of[-1.52,1.52])this.mesh(new B(.11,.15,2.1,7),Q.wood,t+d,1.48,a+f,{texture:"wood"});this.mesh(new nt(6.02,.74,.13),11173976,t,1.47,a-2.15,{texture:"weave"});for(const d of[-1,1])this.mesh(new nt(.13,.74,2.98),11173976,t+d*3.02,1.47,a,{texture:"weave"});this.gableRoof(t,1.9,a,7.65,5.05,1.22,4602416);const c=(d,f,m,x,g)=>{this.mesh(new nt(m,.18,x),10189142,d,.18,f,{texture:"earth"}),this.groundColliders.push({x:d,z:f,w:m*.96,d:x*.96,type:"palace-annex"});for(const p of[-m*.37,m*.37])for(const S of[-x*.36,x*.36])this.mesh(new B(.07,.095,1.18,6),Q.wood,d+p,.59,f+S,{texture:"wood"});this.mesh(new nt(m*.78,.52,x*.68),g,d,.55,f,{texture:"weave"}),this.gableRoof(d,1.06,f,m*1.08,x*1.18,.61,5850420)};c(t-4.35,e-1.45,2.35,2.18,11701343),c(t+4.2,e-1.62,2.05,1.86,10056786);const l=e+2.38;this.mesh(new nt(4.7,.14,2.18),10779991,t,.1,l,{texture:"earth"});for(const d of[-1.95,1.95])for(const f of[-.72,.72])this.mesh(new B(.085,.11,1.48,7),Q.wood,t+d,.74,l+f,{texture:"wood"});this.gableRoof(t,1.45,l,4.78,2.54,.72,5587763);for(const d of[-1.14,0,1.14]){const f=this.mesh(new nt(.78,.1,.32),7557176,t+d,.37,l+.26,{texture:"wood"});for(const m of[-1,1])this.mesh(new B(.035,.05,.32,6),Q.wood,t+d+m*.28,.2,l+.26,{texture:"wood"});f.rotation.y=d*.025}const h=this.mesh(new B(.19,.19,.4,10),9133374,t-1.38,.44,l-.42,{texture:"clay"});h.rotation.z=Math.PI/2;for(const d of[-1,1])this.mesh(new B(.025,.025,.48,6),13942658,t-1.38,.44,l+d*.22);const u=this.mesh(new mt(.22,10,7),11105360,t+1.47,.2,l-.38,{texture:"clay"});u.scale.y=1.2;for(const[d,f]of[[-2.15,1.32],[-.65,1.45],[.95,1.3],[2.32,1.48]]){this.mesh(new B(.34,.34,.028,12),12162136,t+d,.12,e+f,{texture:"weave"});for(let m=0;m<5;m++){const x=this.mesh(new mt(.09,8,6),m%2?12023890:9072976,t+d+(m-2)*.08,.23,e+f+m%2*.05,{texture:"clay"});x.scale.y=.55}}for(const[d,f,m]of[[-4.65,2.65,.78],[-3.72,2.64,.64],[4.2,2.38,.58]]){const x=this.mesh(new Kt(.13*m,.55*m,5),12033104,t+d,.31*m,e+f,{texture:"weave"});x.rotation.z=d<0?-.09:.08}this.mesh(new B(.045,.065,.86,6),Q.wood,t+3.8,.43,e+2.55,{texture:"wood"}),this.mesh(new nt(.48,.38,.045),10253648,t+3.8,.72,e+2.52,{texture:"wood"});for(let d=0;d<4;d++){const f=this.mesh(new nt(.25,.012,.014),6111277,t+3.8,.58+d*.07,e+2.49);f.rotation.z=d%2?-.04:.04}for(const[d,f]of[[-5,1.85],[-4.65,2.15],[4.55,1.7]]){const m=this.mesh(new mt(.18,10,7),12024146,t+d,.19,e+f,{texture:"clay"});m.scale.y=1.18}this.discovery("palace","城内高台居所","木柱、夯土台、粮仓和茅草屋顶围出一处高台居所。它不以金银炫耀，却让人看见组织修堤、制玉与祭仪所需的聚落权力。",t+5.15,e+2.7,.02),this.discovery("palace-tally","高台的刻痕板","木板上是分粮、工具与劳作的刻痕；大聚落也要有人记住每天怎样安排。",t+3.8,e+2.25,.02),this.discovery("palace-store","高台院里的储物罐","谷物与种子被收在陶罐里，避开潮气，也让高台院落有真正的日常用途。",t-5,e+2.6,.02),this.discovery("palace-court","高台院的议事棚","低矮的屋棚、木凳、水罐与击鼓器把院子变成能停下来说事的地方。这里不是后世宫殿，而是把粮食、劳作和仪式聚拢起来的高台院。",t+.72,l+.63,.02)}buildNecropolis(t,e){const n=[[-3.65,1.75,.72,.24],[-2.2,.5,1.25,.42],[-.45,-.2,1.62,.55],[1.7,.58,1.1,.35],[3.25,1.9,.74,.25],[2.9,-1.1,.82,.28],[-2.8,-1.7,.76,.26],[-3.45,-2.35,.67,.22],[3.65,-2.25,.7,.23],[-4.65,-3.15,.56,.19],[-1.35,-3.05,.62,.21],[.95,-3.35,.58,.2],[3.85,-3.7,.55,.18],[4.7,.35,.53,.18],[-4.85,.15,.56,.19]];for(const[o,a,c,l]of n){this.solidCircles.push({x:t+o,z:e+a,r:c*.72});const h=this.mesh(new mt(c,16,10),7958105,t+o,l,e+a,{texture:"earth"});h.scale.y=.52;for(let u=0;u<3;u++){const d=u/3*Math.PI*2;this.mesh(new B(.025,.04,.68,5),u===0?14143927:Q.wood,t+o+Math.cos(d)*c*.72,.34,e+a+Math.sin(d)*c*.52,{texture:"wood"})}if(c>.9){this.mesh(new B(.11,.15,.12,9),11762002,t+o-c*.18,.16,e+a+c*.4,{texture:"clay"});const u=this.mesh(new B(.075,.09,.028,9),8872266,t+o-c*.18,.235,e+a+c*.4,{texture:"clay"});u.rotation.y=.2}}for(let o=0;o<7;o++){const a=this.mesh(new B(.035,.05,.95,6),Q.wood,t-3.8+o*1.12,.48,e+2.1,{texture:"wood"}),c=this.mesh(new Be(.22,.48),o%2?14143669:10188382,t-3.8+o*1.12,.82,e+2.1,{side:ye});c.rotation.y=Math.PI/2,a.rotation.z=o%2?-.025:.025}this.mesh(new nt(1.65,.18,.5),7754039,t-.2,.42,e+2.65,{texture:"wood"});for(const o of[-.62,.62])for(const a of[-.15,.15])this.mesh(new B(.035,.05,.6,6),Q.wood,t+o,.18,e+2.65+a,{texture:"wood"});const i=t-5.1,r=e-2.65;for(const[o,a]of[[0,0],[.48,.22],[-.42,.18]]){this.mesh(new B(.16,.22,.18,9),10910793,i+o,.1,r+a,{texture:"weave"});const c=new W(new qt(.13,.018,6,12),this.mat(7754039));c.rotation.x=Math.PI/2,c.position.set(i+o,.25,r+a),this.scene.add(c)}for(const[o,a]of[[.8,-.08],[1.13,.25]]){const c=this.mesh(new B(.045,.065,.82,6),Q.wood,i+o,.42,r+a,{texture:"wood"});c.rotation.z=.22,this.mesh(new B(.13,.16,.1,8),8482129,i+o+.09,.08,r+a,{texture:"earth"})}this.discovery("necropolis","反山墓地","大小不一的墓丘、木幡与送葬用的木架把这里读成墓地。墓葬的规格差异，也保留下社会如何分工与纪念逝者的线索。",t+3.75,e+1.75,.02),this.discovery("grave-offering","墓前的陶器","陶器安放在墓丘旁，让后人看见当时的人愿意留下怎样的日常与心意。",t-.82,e+.38,.02),this.discovery("grave-banner","送葬的白幡","风里的白幡把墓地从普通山坡中区分出来，也提示这里有不同规格的安放。",t-3.9,e+2.1,.02),this.discovery("grave-earth","封土人的木夯","夯土、编筐和运来的土，说明墓丘是被人一层层做出来的。",i+.55,r-.2,.02)}buildRiceProcessing(t,e){this.riceYard={x:t,z:e},this.mesh(new B(1.82,1.92,.09,14),11898197,t,.05,e,{texture:"earth"});for(let n=0;n<28;n++){const i=this.mesh(new B(.014,.02,.1,5),n%3?14138723:11507526,t+(Math.random()-.5)*2.6,.14,e+(Math.random()-.5)*2.1);i.rotation.z=(n%3-1)*.16}for(const n of[-1.3,1.3]){this.mesh(new B(.28,.36,.38,12),8484710,t+n,.19,e-.55,{texture:"stone"});const i=this.mesh(new B(.045,.065,.78,7),Q.wood,t+n+.08,.59,e-.55,{texture:"wood"});i.rotation.z=.24}for(let n=0;n<4;n++){const i=this.mesh(new Kt(.13,.66,5),12493389,t-1.05+n*.68,.33,e+1.3,{texture:"weave"});i.rotation.z=n%2?-.1:.1}this.discovery("rice-yard","晒谷与舂米场","稻子离开田里后，还要晒干、脱粒、舂去外壳，最后才进高仓。田、晒场与粮仓是一条完整的生活链。",t+2.3,e+.8,.02)}buildFoodProcessing(t,e){for(const n of[-1.5,1.5])for(const i of[-.8,.8])this.mesh(new B(.065,.09,1.45,6),Q.wood,t+n,.72,e+i,{texture:"wood"});this.gableRoof(t,1.22,e,3.65,2.45,.76),this.mesh(new nt(1.75,.12,.68),7754039,t,.75,e+.15,{texture:"wood"});for(const n of[-.68,.68])for(const i of[-.2,.2])this.mesh(new B(.035,.05,.7,6),Q.wood,t+n,.37,e+.15+i,{texture:"wood"});this.mesh(new B(.38,.44,.18,12),7761502,t-1.9,.11,e-.35,{texture:"stone"}),this.mesh(new B(.31,.31,.018,12),7445139,t-1.9,.21,e-.35,{texture:"water",normalTexture:"waterNormal"});for(let n=0;n<5;n++){const i=this.mesh(new nt(.14,.46,.05),n%2?10975570:12422240,t+1.95,.75,e-.65+n*.3,{texture:"weave"});i.rotation.z=n%2?-.04:.04}this.discovery("food-yard","肉食处理棚","屋下饲养之外，清洗、分切、晾晒和储存也需要独立的棚与水盆。这里不展示血腥，只让人看见食物如何被认真处理。",t+2.45,e+.75,.02)}raisedGranary(t,e){this.groundColliders.push({x:t,z:e,w:2.35*.88,d:1.78*.88,type:"granary"});for(const o of[-2.35*.42,2.35*.42])for(const a of[-1.78*.42,1.78*.42]){const c=this.mesh(new B(.09,.13,1.48,7),Q.wood,t+o,.74,e+a,{texture:"wood"});this.mesh(new B(.18,.23,.13,8),Q.stone,t+o,.065,e+a,{texture:"stone"}),c.rotation.z=o*-.015}this.mesh(new nt(2.35,.14,1.78),10054983,t,1.48,e,{texture:"wood"}),this.mesh(new nt(2.35*.84,.82,1.78*.72),10977112,t,1.48+.43,e,{texture:"weave"});for(let o=0;o<6;o++){const a=this.mesh(new nt(2.021,.035,.04),o%2?13674091:8411710,t,1.59+o*.14,e-.6586,{texture:"wood"});a.rotation.z=o%2?-.015:.015}this.gableRoof(t,1.48+.92,e,2.35*1.18,1.78*1.22,.54);for(const[o,a,c]of[[-.5,-.28,.17],[.13,-.25,.2],[.47,.19,.16]]){const l=this.mesh(new mt(c,10,7),12089426,t+o,1.68,e+a,{texture:"clay"});l.scale.y=1.2}for(let o=0;o<5;o++){const a=this.mesh(new Kt(.16,.35,7),o%2?12690525:11110988,t-.68+o*.32,.22,e+1,{texture:"weave"});a.rotation.z=o%2?-.07:.07}this.discovery("granary-store","聚落的高仓","收好的稻谷先晒干，再装进陶器和编筐，存到离地的高仓里。粮食能过潮湿的季节，一座城才有余力做玉、修堤、举行仪式。",t+1.46,e+.52,.02)}chicken(t,e,n=.42,i=14206882){const r=new Qt,o=(h,u,d,f,m)=>{const x=new W(h,this.mat(u));return x.position.set(d,f,m),x.castShadow=x.receiveShadow=!0,r.add(x),x};o(new mt(.22*n,9,6),i,0,.2*n,0).scale.set(1.28,.84,.92);const c=o(new mt(.105*n,8,6),14925472,.19*n,.37*n,-.04*n);o(new Kt(.035*n,.12*n,5),13142592,.245*n,.36*n,-.1*n).rotation.x=Math.PI/2;const l=o(new mt(.038*n,6,5),11488575,.18*n,.49*n,-.025*n);l.scale.y=.6;for(const h of[-1,1]){const u=o(new Kt(.1*n,.3*n,5),h<0?7691080:9663578,-.2*n,.34*n,h*.065*n);u.rotation.z=h*.82;const d=o(new B(.018*n,.024*n,.22*n,5),11961410,h*.06*n,.08*n,.04*n);d.rotation.z=h*.04}return r.position.set(t,0,e),this.scene.add(r),this.animals.push({kind:"fowl",mesh:r,head:c,phase:t*.29-e*.17,start:{x:t-.22*n,z:e-.08*n},end:{x:t+.25*n,z:e+.1*n}}),r}buildDailyLife(){const t=(c,l,h=.22,u=12024402)=>{const d=new Qt,f=new W(new mt(h,10,7),this.mat(u,{texture:"clay"}));f.scale.y=1.15,f.position.y=h*.9,d.add(f);const m=new W(new B(h*.42,h*.5,h*.28,9),this.mat(9198658,{texture:"clay"}));m.position.y=h*1.8,d.add(m),d.position.set(c,0,l),this.scene.add(d)},e=(c,l,h=.3)=>{const u=new Qt,d=new W(new B(h*.72,h,h*.55,10),this.mat(11041091,{texture:"weave"}));d.position.y=h*.28,u.add(d);const f=new W(new qt(h*.62,h*.055,6,12),this.mat(7754039));f.rotation.x=Math.PI/2,f.position.y=h*.6,u.add(f),u.position.set(c,0,l),this.scene.add(u)},n=(c,l,h=1)=>{for(let u=0;u<3;u++)for(let d=0;d<4-u;d++){const f=this.mesh(new B(.065*h,.075*h,.75*h,7),u%2?6176814:8673338,c+(d-(3-u)*.5)*.19*h,.1+u*.13*h,l+u%2*.15*h,{texture:"wood"});f.rotation.z=Math.PI/2}},i=(c,l,h=1)=>{for(const d of[-.56,.56])this.mesh(new B(.04*h,.055*h,.88*h,6),Q.wood,c+d*h,.44*h,l,{texture:"wood"});const u=this.mesh(new B(.035*h,.05*h,1.32*h,6),Q.wood,c,.78*h,l,{texture:"wood"});u.rotation.z=Math.PI/2;for(let d=0;d<4;d++){const f=this.mesh(new Kt(.09*h,.48*h,5),d%2?12953178:10192702,c-.42*h+d*.28*h,.48*h,l+.02);f.rotation.z=d%2?-.1:.1}};for(const[c,l]of[[-33,-14.8],[-24,-14.6],[-14,-15.1],[-5,-15],[-31,-23],[-21,-23.2],[-10,-23]])e(c,l,.28),t(c+.45,l+.18,.19),n(c-.38,l+.62,.72);i(-10.3,13.3,.85),e(-11.8,12.9,.34),t(-8.2,12.4,.2),n(23.8,5.7,.82),n(28.6,10.4,.7),t(27.4,6.3,.24),t(29.2,6.7,.18);for(const[c,l]of[[-21,1.85],[7,1.95],[25,2.85],[21.2,-17.4]]){const h=new W(new qt(.23,.035,7,14),this.mat(12425826));h.rotation.x=Math.PI/2,h.position.set(c,.12,l),this.scene.add(h);const u=this.mesh(new B(.045,.07,.7,6),Q.wood,c+.35,.35,l+.25,{texture:"wood"});u.rotation.z=.07}const r=(c,l,h=1)=>{this.mesh(new B(.56*h,.56*h,.035,14),12095062,c,.055,l,{texture:"weave"});for(let u=0;u<13;u++){const d=this.mesh(new B(.016,.022,.11,5),u%2?13941601:11835981,c+(u*37%100/100-.5)*.78*h,.125,l+(u*61%100/100-.5)*.78*h);d.rotation.z=(u%3-.8)*.16}};r(-34.2,-20.6,.98),r(-6.1,-20.5,.85),r(-47.6,-13.85,.78);const o=(c,l)=>{this.mesh(new B(.48,.56,.17,14),7827553,c,.09,l,{texture:"stone"}),this.mesh(new qt(.26,.075,7,16),10129531,c,.2,l,{texture:"stone"});const h=this.mesh(new B(.06,.075,.58,7),7629917,c+.08,.3,l,{texture:"stone"});h.rotation.z=.8};o(-30.4,-20.1),o(-49.5,-14.45);const a=(c,l)=>{for(let u=0;u<8;u++){const d=u/8*Math.PI*2,f=this.mesh(new ge(.12,0),7433055,c+Math.cos(d)*.35,.1,l+Math.sin(d)*.35,{texture:"stone"});f.scale.y=.55}this.mesh(new B(.2,.25,.02,12),5196867,c,.07,l);const h=this.mesh(new Kt(.075,.25,6),15637321,c,.22,l,{emissive:10897955,emissiveIntensity:.6});this.floaters.push({mesh:h,base:.22,phase:c+l,spin:!0})};a(-33.8,-20.1),a(-50.1,-13.75);for(const[c,l,h,u]of[[-17.75,7.35,.54,14272935],[-10.75,8,.43,12157533],[-21.55,14.2,.48,14009505],[-33.55,-13.7,.52,13218189],[-36,-12.1,.4,11104341]])this.chicken(c,l,h,u);this.buildCourtyardDetails()}buildCourtyardDetails(){const t=(l,h,u=1,d=5274189)=>{for(let f=0;f<5;f++){const m=f/5*Math.PI*2+(l-h)*.17,x=.12*u+f%2*.06*u,g=this.mesh(new Kt(.026*u,.23*u,4),f%2?d:7115350,l+Math.cos(m)*x,.115*u,h+Math.sin(m)*x);g.rotation.z=Math.cos(m)*.38}},e=(l,h,u=1)=>{for(let d=0;d<9;d++){const f=d/9*Math.PI*2+(l+h)*.11,m=d%3*.065*u,x=this.mesh(new Kt(.035*u,.46*u+d%3*.07,4),d%2?4812615:7573852,l+Math.cos(f)*m,.23*u,h+Math.sin(f)*m);x.rotation.z=Math.cos(f)*.42,this.swayers.push({mesh:x,base:x.rotation.z,phase:l*1.1+h*.7+d})}},n=(l,h,u=.1)=>{const d=this.mesh(new ge(u,0),8025445,l,u*.38,h,{texture:"stone"});d.scale.y=.58},i=(l,h,u=.2)=>{const d=this.mesh(new mt(u,10,7),11893074,l,u*.82,h,{texture:"clay"});d.scale.y=1.16,this.mesh(new B(u*.38,u*.48,u*.24,8),8409405,l,u*1.64,h,{texture:"clay"})};for(const[l,h,u]of[[-16.2,3.6,.95],[-15.8,6.9,.8],[-10.1,3.5,.9],[-9.7,6.8,.72],[-13.9,8,.68],[-17.1,5.5,.62]])t(l,h,u);for(const[l,h,u]of[[-17.35,2.7,1.05],[-17.55,7.65,.95],[-8.55,3.05,1.08],[-8.45,7.75,.9],[-14.7,8.55,.82]])e(l,h,u);for(const[l,h,u]of[[-16.7,4.3,.13],[-16.2,7.3,.09],[-10.2,4.4,.12],[-9.4,6.2,.1],[-14.7,8.2,.1],[-17.4,6.1,.08]])n(l,h,u);const r=-16.25,o=6.8;for(const l of[-.46,.46])this.mesh(new B(.035,.05,.7,6),Q.wood,r+l,.35,o,{texture:"wood"});const a=this.mesh(new B(.03,.04,1.06,6),Q.wood,r,.66,o,{texture:"wood"});a.rotation.z=Math.PI/2;for(let l=0;l<3;l++){const h=this.mesh(new Kt(.075,.34,5),l%2?12756060:10455107,r-.25+l*.25,.42,o+.02,{texture:"weave"});h.rotation.z=(l-1)*.08}i(-10.15,6.75,.2),i(-9.72,6.52,.15),this.mesh(new B(.23,.3,.2,10),11173709,-10.8,.1,7.25,{texture:"weave"});const c=new W(new qt(.18,.026,6,12),this.mat(7754039));c.rotation.x=Math.PI/2,c.position.set(-10.8,.24,7.25),this.scene.add(c);for(const[l,h,u]of[[-16.7,12.4,.75],[-6.8,12.1,.68],[-17.4,16.7,.62],[-7.2,15.6,.58]])t(l,h,u);for(const[l,h,u]of[[-17.25,11.9,.09],[-6.35,11.7,.11],[-17.8,16.1,.08],[-6.8,16.4,.12]])n(l,h,u)}buildCraftScenes(){this.solidCircles.push({x:-13.35,z:-17.35,r:.72}),this.mesh(new B(.78,.92,.28,12),9265223,-13.35,.14,-17.35,{texture:"clay"});const n=this.mesh(new mt(.76,14,10),10316878,-13.35,.52,-17.35,{texture:"clay"});n.scale.y=.72;const i=this.mesh(new B(.19,.22,.025,12),2629402,-13.35,.31,-17.35-.73);i.rotation.x=Math.PI/2;const r=this.mesh(new Kt(.08,.27,6),15703118,-13.35,.34,-17.35-.76,{emissive:12012069,emissiveIntensity:.8});this.floaters.push({mesh:r,base:.34,phase:-13.35,spin:!0});for(const[h,u,d]of[[-1.02,-.22,.17],[-.86,.14,.13],[-.98,.45,.2],[-.58,-.63,.14]]){const f=this.mesh(new mt(d,10,7),12089426,-13.35+h,d*.86,-17.35+u,{texture:"clay"});f.scale.y=1.22,this.mesh(new B(d*.42,d*.5,d*.24,8),7620150,-13.35+h,d*1.8,-17.35+u,{texture:"clay"})}((h,u)=>{for(const d of[-.72,.72])this.mesh(new B(.045,.06,1.65,6),Q.wood,h+d,.82,u,{texture:"wood"});for(let d=0;d<4;d++)for(let f=0;f<5;f++){const m=this.mesh(new mt(.025,6,5),12956289,h-.52+f*.26,.94-d*.22,u-.025);m.scale.y=.6}for(let d=0;d<4;d++){const f=this.mesh(new B(.008,.008,1.1,5),12956289,h,.94-d*.22,u-.02);f.rotation.z=Math.PI/2}for(let d=0;d<5;d++)this.mesh(new B(.008,.008,.78,5),12956289,h-.52+d*.26,.55,u-.02)})(-8.95,-9.25);for(const[h,u]of[[-.3,.56],[.22,.48],[.52,.2]])this.mesh(new mt(.08,8,5),12043698,-8.95+h,.18,-9.25+u).scale.set(1.5,.5,.65);const a=2.15,c=13.25;for(const h of[-.7,.7])this.mesh(new B(.045,.06,1.35,6),Q.wood,a+h,.68,c,{texture:"wood"});for(const h of[.24,.92,1.3]){const u=this.mesh(new B(.03,.045,1.55,6),Q.wood,a,h,c,{texture:"wood"});u.rotation.z=Math.PI/2}for(let h=0;h<11;h++){const u=this.mesh(new B(.009,.009,.8,5),h%2?13811610:11966320,a-.5+h*.1,.6,c-.018);u.rotation.z=.02}const l=this.mesh(new Be(1.04,.46),9073790,a,.58,c+.04,{side:ye});l.rotation.y=Math.PI}buildExplorationEdges(){this.mesh(new B(.72,.86,.18,14),7761500,-5.1,.1,5.25,{texture:"stone"}),this.mesh(new B(.57,.57,.018,14),8103844,-5.1,.205,5.25,{texture:"water",normalTexture:"waterNormal"});for(let f=0;f<9;f++){const m=f/9*Math.PI*2,x=this.mesh(new ge(.105,0),f%2?8419946:7170654,-5.1+Math.cos(m)*.73,.16,5.25+Math.sin(m)*.73,{texture:"stone"});x.scale.y=.55}for(const[f,m,x]of[[-1.14,.34,.19],[-.9,.75,.15],[1.05,.18,.21]]){const g=this.mesh(new mt(x,10,7),11499091,-5.1+f,x*.92,5.25+m,{texture:"clay"});g.scale.y=1.2,this.mesh(new B(x*.36,x*.46,x*.24,8),8212539,-5.1+f,x*1.82,5.25+m,{texture:"clay"})}const n=this.mesh(new B(.04,.055,1.1,6),Q.wood,-5.1+.92,.84,5.25-.7,{texture:"wood"});n.rotation.z=Math.PI/2,this.discovery("water-court","汲水与分水的小台","几只陶罐、石砌水槽和担水木杆说明，水网城市不只靠大堤，也靠每天把干净的水带回院落。",-5.1+1.38,5.25+.78,.02);const i=-8.2,r=3;for(const f of[-1.15,1.15]){const m=this.mesh(new nt(.2,.24,.56),7950647,i+f,.12,r,{texture:"wood"});m.rotation.z=f<0?.08:-.08}this.mesh(new mt(1.58,14,7),7358511,i,.36,r,{texture:"wood"}).scale.set(1,.23,.42),this.mesh(new mt(1.18,14,7),3024932,i,.48,r,{roughness:.96}).scale.set(1,.075,.29);for(let f=0;f<6;f++){const m=this.mesh(new qt(.27,.018,5,12,Math.PI),12689777,i-1.02+f*.4,.52,r,{texture:"wood"});m.rotation.x=Math.PI/2,m.rotation.z=Math.PI/2}const c=this.mesh(new B(.035,.05,.88,6),Q.wood,i+1.5,.26,r-.55,{texture:"wood"});c.rotation.z=.86,this.mesh(new nt(.16,.06,.1),5988956,i+1.78,.55,r-.55,{texture:"stone"});for(let f=0;f<12;f++){const m=this.mesh(new qt(.045,.009,4,7,Math.PI*1.45),f%2?12095580:8540982,i+.45+f%4*.17,.06,r+.65+Math.floor(f/4)*.12,{texture:"wood"});m.rotation.x=Math.PI/2,m.rotation.z=f*.28}this.discovery("boat-yard","修补独木舟的木架","舟被托在木架上，旁边有石刃和削下来的木屑。对河网中的人来说，修好一条舟就是重新接通一段路。",i-1.7,r+.62,.02);const l=13.8,h=6.8;for(const f of[-1.35,1.35])this.mesh(new B(.055,.075,1.45,6),Q.wood,l+f,.72,h,{texture:"wood"});const u=this.mesh(new B(.04,.055,2.95,6),Q.wood,l,1.28,h,{texture:"wood"});u.rotation.z=Math.PI/2;for(let f=0;f<9;f++){const m=this.mesh(new B(.018,.028,.8+f%3*.12,5),f%2?10129998:12626521,l-1.05+f*.26,.72,h+.04,{texture:"weave"});m.rotation.z=(f-4)*.022}for(const[f,m]of[[-.85,.68],[.03,.71],[.94,.62]]){const x=this.mesh(new nt(.72,.035,.46),12097110,l+f,.05,h+m,{texture:"weave"});x.rotation.y=f*.08}const d=this.mesh(new qt(.18,.022,6,14),12823412,l+1.65,.15,h-.42,{texture:"weave"});d.rotation.x=Math.PI/2,this.discovery("reed-yard","编苇与晾晒的场地","芦苇被分束、挂起，再编成席和绳。屋顶、容器与水边的日常，都离不开这种看似普通的植物。",l+1.84,h+.54,.02)}label(t,e=1.85,n="#fff2c5"){const i=document.createElement("canvas");i.width=320,i.height=72;const r=i.getContext("2d");r.font="600 30px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(16,38,30,.78)",r.roundRect(8,8,304,56,20),r.fill(),r.fillStyle=n,r.fillText(t,160,38);const o=new Fh(new Fc({map:new Po(i),transparent:!0,depthTest:!1}));return o.position.y=e,o.scale.set(1.95,.44,1),o}questMarker(t=1.98){const e=new Qt,n=new Te({color:16766570}),i=new W(new Ha(.062,.34,4,8),n);i.position.y=.22,e.add(i);const r=new W(new mt(.072,9,7),n);r.position.y=-.12,e.add(r);const o=new W(new Xa(.25,.29,20),new Te({color:16767602,transparent:!0,opacity:.72,side:ye}));return o.rotation.x=-Math.PI/2,o.position.y=-.22,e.add(o),e.position.y=t,e.visible=!1,e.userData.questMarker=!0,this.questMarkers.push(e),this.floaters.push({mesh:e,base:t,phase:Math.random()*5,marker:!0}),e}makeNPC(t,e,n,i,r,o=13871222,a="side"){const c=new Qt;c.position.set(i,.02,r),c.scale.set(1/this.explorationScale,1,1/this.explorationScale);const l={quarry:12154965,boat:13143398,rice:12684136,workshop:11104338,ritual:13869434,tomb:12091232,fisher:11038545,weaver:12947052}[t]||13143398,h=new Gt(o).lerp(new Gt(7629396),.38),u=this.mat(o,{texture:"weave"}),d=["ritual","weaver","rice","palace","palace-resident","palace-gate","cook"].includes(t)?"bun":["boat","fisher","carpenter","quarry","workshop","potter"].includes(t)?"cropped":"braid",f=new W(new B(.2,.29,.66,8),this.mat(h,{texture:"weave"}));f.position.y=.66,c.add(f);const m=new W(new mt(.28,12,8),this.mat(h,{texture:"weave"}));m.scale.set(.94,.34,.78),m.position.y=.96,c.add(m);const x=new W(new B(.3,.31,.1,8),this.mat(7297349));x.position.y=.35,c.add(x);for(const P of[-1,1]){const N=new W(new B(.07,.08,.38,7),this.mat(6964791));N.position.set(P*.12,.22,.02),c.add(N);const k=new W(new mt(.095,8,6),this.mat(4271914));k.scale.set(1,.45,1.35),k.position.set(P*.12,.035,-.075),c.add(k);const q=new W(new nt(.16,.028,.25),this.mat(6901818,{texture:"wood"}));q.position.set(P*.12,.005,-.085),c.add(q)}const g=new W(new qt(.245,.022,6,16),this.mat(8938819,{texture:"weave"}));g.rotation.x=Math.PI/2,g.position.y=.64,c.add(g);const p=new W(new nt(.34,.07,.025),this.mat(11836008,{texture:"weave"}));p.position.set(0,.98,-.213),c.add(p);const S=new W(new nt(.055,.34,.025),u);S.position.set(0,.76,-.268),c.add(S);const b=new W(new qt(.116,.014,6,14),this.mat(9070407));if(b.rotation.x=Math.PI/2,b.position.y=1.08,c.add(b),["ritual","palace","palace-resident","palace-gate","tomb"].includes(t)){const P=new W(new B(.037,.037,.014,8),this.mat(Q.jade,{texture:"jade",emissive:1457198,emissiveIntensity:.12}));P.rotation.x=Math.PI/2,P.position.set(0,1.01,-.22),c.add(P)}const y=[];for(const P of[-1,1]){const N=new Qt;N.position.set(P*.235,.95,.01),N.rotation.z=P*.72;const k=new W(new B(.052,.068,.42,7),this.mat(h,{texture:"weave"}));k.position.y=-.19,N.add(k);const q=new W(new qt(.058,.012,6,10),this.mat(10782553));q.rotation.x=Math.PI/2,q.position.y=-.36,N.add(q);const G=new W(new mt(.065,8,6),this.mat(l));G.position.set(0,-.405,.02),N.add(G),c.add(N),y.push({rig:N,side:P})}const R=new W(new B(.08,.1,.14,8),this.mat(l));R.position.y=1.08,c.add(R);const A=new W(new mt(.205,14,10),this.mat(l));A.position.y=1.23,c.add(A);for(const P of[-1,1]){const N=new W(new mt(.009,7,5),this.mat(3681575));N.scale.set(.8,1,.38),N.position.set(P*.07,1.27,-.197),c.add(N)}const D=new W(new mt(.012,7,5),this.mat(12089691));D.scale.set(.7,.75,.52),D.position.set(0,1.21,-.204),c.add(D);const T=new W(new mt(.217,12,8),this.mat(3681575));if(T.scale.y=d==="cropped"?.31:.43,T.position.y=d==="cropped"?1.39:1.4,c.add(T),d==="bun"){const P=new W(new mt(.078,9,7),this.mat(3681575));P.position.set(0,1.5,.045),c.add(P)}if(d==="braid"){const P=new W(new B(.032,.044,.28,6),this.mat(3681575));P.position.set(-.09,1.25,.16),P.rotation.z=.22,c.add(P)}if(["ritual","palace","palace-resident","palace-gate","boat","tomb"].includes(t)){const P=new W(new qt(.205,.018,8,18),this.mat(t==="ritual"?14205547:9728851));P.rotation.x=Math.PI/2,P.position.y=1.32,c.add(P)}for(const P of[-1,1]){const N=new W(new mt(.04,7,5),this.mat(l));N.position.set(P*.205,1.23,.01),c.add(N)}this.addRoleDetails(c,t,o);const v=new W(new qt(.58,.03,6,24),new Te({color:14278843,transparent:!0,opacity:.7}));v.rotation.x=Math.PI/2,v.position.y=.04,c.add(v),c.add(this.label(e,1.86,a==="quest"?"#ffe394":"#f7f0df"));const _=this.questMarker(2.35);c.add(_),c.userData={...c.userData,id:t,name:e,copy:n,kind:a,marker:_,ring:v,arms:y},this.scene.add(c),this.interactables.push(c),this.villagers.push({mesh:c,id:t,phase:i*.19+r*.13,anchor:{x:i,z:r},baseY:.02});const C=new W(new B(.62,.62,1.9,10),new Te({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}));return C.position.set(i,.95,r),C.userData.goTo=t==="ritual"?{x:i,z:r,ritual:!0}:{x:i,z:r},this.scene.add(C),this.navigationMeshes.push(C),this.floaters.push({mesh:v,base:.04,phase:Math.random()*5}),c}addRoleDetails(t,e,n){const i=(r,o,a,c,l,h=null,u={})=>{const d=new W(r,this.mat(o,u));return d.position.set(a,c,l),h&&d.rotation.set(...h),d.castShadow=d.receiveShadow=!0,t.add(d),d};if(e==="quarry"){const r=i(new B(.025,.035,.82,6),6899249,.36,.74,.02,[0,0,-.48]),o=i(new nt(.36,.11,.09),7827553,.55,1.06,.02,[0,0,-.48]);r.userData.tool=!0,o.userData.tool=!0,t.userData.motion={type:"quarry",tools:[r,o]}}else if(e.startsWith("boat")){const r=i(new qt(.22,.035,8,18),14205089,0,1.34,-.01,[Math.PI/2,0,0]),o=i(new nt(.07,.28,.03),14205089,.19,1.18,.04,[0,0,-.22]);r.userData.costume=o.userData.costume=!0}else if(e==="rice"){const r=i(new Kt(.34,.17,12),12820830,0,1.54,0);r.scale.z=.92;const o=i(new B(.13,.18,.22,9),11041091,-.34,.4,.08,[0,0,.18]);o.rotation.z=.2,t.userData.motion={type:"harvest",tools:[o]}}else if(e==="workshop"){const r=i(new nt(.27,.4,.035),12886637,0,.68,-.255),o=i(new B(.17,.17,.035,12),8749165,.4,.48,.12,[Math.PI/2,0,0]);r.userData.costume=!0,o.userData.tool=!0,t.userData.motion={type:"grind",tools:[o]}}else if(e==="ritual"){const r=i(new Kt(.16,.34,5),14205547,0,1.67,.01),o=i(new nt(.16,.24,.045),Q.jade,0,.98,-.27,null,{texture:"jade",emissive:1588270,emissiveIntensity:.16});o.userData.costume=!0,r.userData.costume=!0}else if(e==="tomb"){const r=i(new nt(.09,.55,.04),14210491,.15,.73,-.27,[0,0,-.12]);r.userData.costume=!0}else if(e==="fisher"){const r=i(new B(.018,.026,.98,6),7293489,.37,.77,.08,[0,0,-.6]),o=i(new mt(.055,7,5),15059037,.67,.37,.08);r.userData.tool=o.userData.tool=!0,t.userData.motion={type:"cast",tools:[r,o]}}else if(e==="weaver"){const r=i(new qt(.11,.022,6,12),14140572,.3,.6,-.03,[Math.PI/2,0,0]);r.userData.tool=!0,t.userData.motion={type:"weave",tools:[r]}}else if(e==="water-carrier"){const r=i(new B(.025,.035,.92,6),Q.wood,0,1.22,.03,[0,0,Math.PI/2]),o=i(new B(.09,.12,.18,9),11040848,.43,.94,.03),a=i(new B(.009,.009,.24,5),12954489,.43,1.1,.03);r.userData.tool=o.userData.tool=a.userData.tool=!0,t.userData.motion={type:"carry",tools:[r,o,a]}}else if(e==="boatwright"){const r=i(new B(.022,.032,.7,6),Q.wood,.34,.72,.02,[0,0,-.55]),o=i(new nt(.22,.07,.08),6582379,.52,1,.02,[0,0,-.55]);r.userData.tool=o.userData.tool=!0,t.userData.motion={type:"adze",tools:[r,o]}}else if(e==="reedworker"){const r=i(new B(.075,.1,.62,6),11835986,.29,.67,-.02,[0,0,.38]),o=i(new qt(.08,.012,5,10),13150832,.29,.67,-.02,[Math.PI/2,0,0]);r.userData.tool=o.userData.tool=!0,t.userData.motion={type:"bind",tools:[r,o]}}}momentFigure(t,e,n,i=10322025,r=null,o=null,a=.02){const c=new Qt;c.scale.set(1/this.explorationScale,1,1/this.explorationScale);const l=new W(new B(.18,.25,.76,7),this.mat(i));l.position.y=.4,c.add(l);const h=new W(new mt(.18,10,8),this.mat(13143398));h.position.y=.9,c.add(h);const u=new W(new mt(.19,9,7),this.mat(3681575));u.scale.y=.4,u.position.y=1.05,c.add(u);const d=[];for(const f of[-1,1]){const m=new W(new B(.04,.055,.38,6),this.mat(i));m.position.set(f*.2,.58,.02),m.rotation.z=f*.72,c.add(m),d.push(m)}return c.position.set(e,a,n),c.visible=!1,this.scene.add(c),this.momentActors.push({scene:t,mesh:c,arms:d,start:r||{x:e,z:n},end:o,baseY:a}),c}createMomentActors(){for(const[e,n,i]of[[-40.4,14.7,7244658],[-39.1,13.8,9990222],[-38.8,15.4,7822662]])this.momentFigure("quarry",e,n,i);for(const[e,n,i]of[[-20.5,-1.7,6197665],[-21.5,-1.9,10322025]])this.momentFigure("boat",e,n,i);for(const[e,n,i]of[[2.6,-3.45,6197665],[4.2,-3.45,10322025],[5.5,-3.45,10322025]])this.momentFigure("transport",e,n,i);for(const[e,n,i]of[[24.8,7.5,9729619],[27.3,8.4,8100471],[26.2,6.8,9595725]])this.momentFigure("workshop",e,n,i);for(const[e,n,i]of[[36.4,17.4,10251602],[37.35,18.75,8415899],[38.95,17.4,7639151],[39.55,18.55,11569747],[38,18.7,10256479]])this.momentFigure("ritual",e,n,i,null,null,1.075);for(let e=0;e<6;e++)this.momentFigure("tomb",24.5+e*.45,-14.5-e*.35,[7696018,9991252,6982520][e%3],{x:24.5+e*.45,z:-14.5-e*.35},{x:29+e*.3,z:-18-e*.15});for(const[e,n,i]of[[49.5,5.8,6197665],[51,7.1,8548248],[52.2,5.7,10322025]])this.momentFigure("flood",e,n,i);const t=new W(new B(.18,.23,.56,8),this.mat(Q.jade,{emissive:1588270,emissiveIntensity:.65}));t.position.set(38,2.18,18),t.visible=!1,this.scene.add(t),this.momentActors.push({scene:"ritual",mesh:t,jade:!0,arms:[]})}playMoment(t){this.activeMoment=t,this.momentStarted=this.clock.elapsedTime;for(const o of this.momentActors)o.mesh.visible=o.scene===t;const e={quarry:[-39.5,14.2],boat:[-21,-1.8],transport:[4,-3.45],workshop:[26,8],ritual:[38,18],tomb:[30,-18],flood:[51,6]},[n,i]=e[t]||[this.player.position.x,this.player.position.z];this.cinema={x:n,z:i,until:this.clock.elapsedTime+7};const r={quarry:"采玉场景开始：工人正在山脚取料。",boat:"码头场景开始：独木舟准备出发。",transport:"水路场景开始：玉料顺河进入城中。",workshop:"制玉场景开始：匠人以砂与水慢慢磨玉。",ritual:"祭仪开始：人群聚向高台，玉琮被举起。",tomb:"送葬队正在前往反山王陵。",flood:"堤坝外的水声渐渐盖过城里的声音。"};this.callbacks.onMoment?.(r[t]||"")}updateMoments(t){if(!this.activeMoment)return;const e=t-(this.momentStarted||t);for(const n of this.momentActors)if(n.scene===this.activeMoment){if(n.jade){n.mesh.position.y=2.18+Math.sin(e*2.2)*.13;continue}if(n.end){const i=Math.min(1,e/7);n.mesh.position.x=He.lerp(n.start.x,n.end.x,i),n.mesh.position.z=He.lerp(n.start.z,n.end.z,i),n.mesh.rotation.y=Math.atan2(n.end.x-n.start.x,n.end.z-n.start.z)}n.scene==="transport"&&(n.mesh.position.x=n.start.x+Math.min(3.8,e*.55)),n.mesh.position.y=n.baseY+Math.abs(Math.sin(e*2.4+n.start.x))*.025;for(const i of n.arms)i.rotation.z=(i.position.x<0?-1:1)*(.7+Math.sin(e*3+n.start.z)*.24)}}landmark(t,e,n,i,r){const o=new Qt;o.position.set(i,.02,r);const a=new W(new B(.48,.62,.52,8),this.mat(9929828));a.position.y=.25,o.add(a);const c=new W(new mt(.16,12,8),new Te({color:Q.gold}));c.position.y=.86,o.add(c);const l=new W(new qt(.64,.024,6,30),new Te({color:Q.gold,transparent:!0,opacity:.85}));l.rotation.x=Math.PI/2,l.position.y=.05,o.add(l),o.add(this.label(e,1.32,"#ffe394"));const h=this.questMarker(1.85);return o.add(h),o.userData={id:t,name:e,copy:n,kind:"quest",marker:h,ring:l},this.scene.add(o),this.interactables.push(o),this.floaters.push({mesh:l,base:.05,phase:Math.random()*5}),o}discovery(t,e,n,i,r,o=.02){const a=new Qt;a.position.set(i,o,r);const c=new W(new B(.16,.23,.3,9),this.mat(t==="hearth"?10111281:11697492,{texture:"clay"}));c.position.y=.16,a.add(c);const l=new W(new qt(.36,.018,6,20),new Te({color:14278843,transparent:!0,opacity:.82}));return l.rotation.x=Math.PI/2,l.position.y=.025,a.add(l),a.userData={id:t,name:e,copy:n,kind:"side"},this.scene.add(a),this.interactables.push(a),this.floaters.push({mesh:l,base:.025,phase:Math.random()*5}),a}activity(t,e,n,i,r,o,a){const c=new Qt;c.position.set(r,.02,o);const l=new W(new qt(.48,.024,6,22),new Te({color:11460773,transparent:!0,opacity:.9}));l.rotation.x=Math.PI/2,l.position.y=.024,c.add(l);const h=a?.(c)||[];return c.userData={id:t,name:e,action:n,copy:i,kind:"activity",ring:l,pieces:h,complete:!1},this.scene.add(c),this.interactables.push(c),this.floaters.push({mesh:l,base:.024,phase:Math.random()*5}),c}interiorActivity(t,e,n,i,r,o,a,c){const l=this.activity(t,e,n,i,r,o,c);return l.position.y=a,l}buildHandsOnActivities(){this.activity("flowers","河岸野花","采一束花","花被收进背篓，空出的湿土上明年还会长出新的颜色。",-5.5,12.4,t=>{const e=[];for(let n=0;n<9;n++){const i=n/9*Math.PI*2,r=.24+n%3*.11,o=new W(new B(.008,.012,.28,5),this.mat(5144140));o.position.set(Math.cos(i)*r,.14,Math.sin(i)*r),t.add(o);const a=new W(new mt(.07,8,6),this.mat([15781744,15184573,15328982][n%3]));a.position.set(Math.cos(i)*r,.3,Math.sin(i)*r),t.add(a),e.push(a)}return e}),this.activity("weeds","稻田边的杂草","拔除杂草","水田边清爽了些，稻苗就不会和杂草争水、争光。",-18.2,12.2,t=>{const e=[];for(let n=0;n<11;n++){const i=new W(new Kt(.035,.38,4),this.mat(n%2?4027462:6851663));i.position.set(n%4*.12-.18,.19,Math.floor(n/4)*.13-.12),i.rotation.z=(n%3-1)*.32,t.add(i),e.push(i)}return e}),this.activity("fruit-tree","结实的栎树","摇一摇树","几颗果子落在地上。树荫、果实和木材，都是聚落在湿地里寻找的日常资源。",-7.4,6.8,t=>{const e=new W(new B(.08,.15,1.25,7),this.mat(Q.wood,{texture:"wood"}));e.position.y=.62,t.add(e);const n=[];for(let i=0;i<7;i++){const r=new W(new mt(.055,7,5),this.mat(13870677));r.position.set(Math.sin(i*2.2)*.35,1.05+i%2*.18,Math.cos(i*1.7)*.32),t.add(r),n.push(r)}return n}),this.activity("pig-chase","跑出圈的小猪","把小猪赶回圈","小猪哼哼着跑回高脚屋下。潮湿的地面留给牲畜，人住在上层，彼此都更安全。",-23.5,-13.6,t=>{const e=new W(new Kt(.12,.46,5),this.mat(14267237));return e.position.y=.28,t.add(e),[]});for(const[t,e,n]of[["flowers-west",-34.2,-12.8],["flowers-east",18.1,23.5]])this.activity(t,"野花小片","采一束花","湿地边的野花被仔细摘下，花茎会在下个雨季重新抽芽。",e,n,i=>{const r=[];for(let o=0;o<7;o++){const a=o/7*Math.PI*2,c=.18+o%3*.1,l=new W(new B(.008,.012,.25,5),this.mat(5144140));l.position.set(Math.cos(a)*c,.12,Math.sin(a)*c),i.add(l);const h=new W(new mt(.06,8,6),this.mat([15781744,15184573,15328982][o%3]));h.position.set(Math.cos(a)*c,.27,Math.sin(a)*c),i.add(h),r.push(h)}return r});for(const[t,e,n]of[["weeds-north",-7.1,16.9],["weeds-south",-30.6,-20.3]])this.activity(t,"田埂杂草","拔除杂草","拔去杂草后，田埂上留下新翻过的湿土和更开阔的稻苗。",e,n,i=>{const r=[];for(let o=0;o<8;o++){const a=new W(new Kt(.035,.34,4),this.mat(o%2?4027462:6851663));a.position.set(o%4*.11-.16,.17,Math.floor(o/4)*.14-.07),a.rotation.z=(o%3-1)*.32,i.add(a),r.push(a)}return r});for(const[t,e,n]of[["reeds-west",-6.6,13],["reeds-central",15.3,6.2],["reeds-east",20,24]])this.activity(t,"河湾芦苇","割一把芦苇","芦苇被扎成一小束。编席、搓绳和补屋顶时，水边的草也会成为手边的材料。",e,n,i=>{const r=[];for(let o=0;o<10;o++){const a=new W(new B(.014,.024,.48+o%3*.08,5),this.mat(o%2?9409869:11642458,{texture:"weave"}));a.position.set(o%5*.09-.18,.27,Math.floor(o/5)*.14-.07),a.rotation.z=(o%3-1)*.11,i.add(a),r.push(a)}return r});for(const[t,e,n]of[["fruit-tree-west",-45.5,-16.4],["fruit-tree-east",29.1,22.3]])this.activity(t,"结实的栎树","摇一摇树","果子落进草里。聚落里的人也会把树荫、果实和木料编进每天的生活。",e,n,i=>{const r=new W(new B(.08,.15,1.25,7),this.mat(Q.wood,{texture:"wood"}));r.position.y=.62,i.add(r);const o=[];for(let a=0;a<6;a++){const c=new W(new mt(.055,7,5),this.mat(13870677));c.position.set(Math.sin(a*2.2)*.31,1.05+a%2*.18,Math.cos(a*1.7)*.29),i.add(c),o.push(c)}return o})}doActivity(t){const e=this.interactables.find(n=>n.userData.id===t);if(!e||e.userData.complete)return"这里已经收拾好了，留一点时间给湿地自己恢复。";if(e.userData.complete=!0,this.playActivityEffect(e,t),e.userData.ring&&(e.userData.ring.visible=!1),e.userData.tree)for(let n=0;n<3;n++){const i=new W(new mt(.055,7,5),this.mat(13870677));i.position.set(Math.sin(n*2.1)*.28,.06,Math.cos(n*1.7)*.25),i.castShadow=i.receiveShadow=!0,e.add(i),e.userData.pieces.push(i)}if(e.userData.pieces.forEach((n,i)=>{n.visible=!1,(t.startsWith("fruit-tree")||e.userData.tree)&&(n.visible=!0,n.position.y=.06,n.position.x+=Math.sin(i*2.2)*.22,n.position.z+=Math.cos(i*1.7)*.22)}),t==="pig-chase"){const n=this.animals.filter(i=>i.kind==="pig"&&Math.hypot(i.pen.x+22,i.pen.z+17)<1.2);for(const i of n)i.chaseFrom={x:i.mesh.position.x,z:i.mesh.position.z},i.chaseTo={x:i.pen.x+(i.homeEnd.x-i.pen.x)*.45,z:i.pen.z+(i.homeEnd.z-i.pen.z)*.45},i.chaseStarted=this.clock.elapsedTime,i.chaseUntil=this.clock.elapsedTime+1.45}return e.userData.copy}playActivityEffect(t,e){const n=new Qt,i=e.startsWith("fruit-tree")||t.userData.tree,r=e.includes("weed")||e.includes("reed"),o=i?13870677:r?9545297:15255930;n.position.copy(t.position);for(let a=0;a<(i?6:8);a++){const c=new W(i?new mt(.045,7,5):new Be(.09,.15),this.mat(o,{side:ye,transparent:!0,opacity:1}));c.position.set((a%4-1.5)*.05,.12+a%3*.035,Math.floor(a/4)*.04),c.rotation.set(.4+a*.31,a*.67,.2),c.userData={x:(a%4-1.5)*.36,z:(Math.floor(a/4)-.4)*.32,up:.45+a%3*.13,spin:(a%2?1:-1)*(2.6+a*.12)},n.add(c)}this.scene.add(n),this.activityEffects.push({mesh:n,started:this.clock.elapsedTime})}updateActivityEffects(t){for(let e=this.activityEffects.length-1;e>=0;e--){const n=this.activityEffects[e],i=t-n.started;if(i>1.05){this.scene.remove(n.mesh),this.activityEffects.splice(e,1);continue}const r=Math.max(0,1-i/.9);for(const o of n.mesh.children){const a=o.userData;o.position.x=a.x*i,o.position.z=a.z*i,o.position.y=.12+a.up*i-1.1*i*i,o.rotation.y+=a.spin*.018,o.material.opacity=r}}}clearTaskStations(){for(const t of this.taskStations){this.scene.remove(t);const e=this.floaters.findIndex(n=>n.mesh===t.userData.ring);e>=0&&this.floaters.splice(e,1)}this.interactables=this.interactables.filter(t=>t.userData.kind!=="task"),this.taskStations=[],this.taskStep=0,this.activeTaskId=null,this.near?.kind==="task"&&(this.near=null,this.callbacks.onNearChange?.(null))}taskStationProp(t,e,n){const i=(r,o,a,c,l,h={})=>{const u=new W(r,this.mat(o,h));return u.position.set(a,c,l),u.castShadow=u.receiveShadow=!0,n.add(u),u};t==="boat"?e===0?(i(new nt(.9,.16,.48),Q.wood,0,.25,0,{texture:"wood"}),i(new qt(.19,.035,6,12),13083492,0,.38,0).rotation.x=Math.PI/2):e===1?(i(new B(.045,.06,.65,7),Q.wood,0,.36,0,{texture:"wood"}),i(new qt(.2,.025,6,15),13214570,0,.18,0).rotation.x=Math.PI/2):(i(new nt(1.1,.12,.46),Q.wood,0,.23,0,{texture:"wood"}),i(new B(.04,.05,.6,6),Q.wood,.2,.46,0,{texture:"wood"}).rotation.z=Math.PI/2):t==="transport"?e===0?(i(new B(.06,.08,.68,6),Q.wood,0,.34,0,{texture:"wood"}),i(new qt(.2,.025,6,14),13214570,0,.12,0).rotation.x=Math.PI/2):e===1?i(new ge(.25,1),Q.jade,0,.31,0,{texture:"jade",emissive:1523504,emissiveIntensity:.25}):(i(new nt(.9,.12,.65),Q.wood,0,.3,0,{texture:"wood"}),i(new ge(.16,1),Q.jade,0,.48,0,{texture:"jade"})):t==="workshop"?e===0?(i(new nt(.78,.1,.32),Q.wood,0,.25,0,{texture:"wood"}),i(new nt(.46,.08,.08),7827553,0,.38,0)):e===1?(i(new B(.26,.26,.06,16),7827553,0,.25,0,{texture:"stone"}),i(new ge(.13,1),Q.jade,0,.38,0,{texture:"jade"})):(i(new nt(.14,.5,.14),Q.wood,-.22,.34,0,{texture:"wood"}),i(new nt(.14,.5,.14),Q.wood,.22,.34,0,{texture:"wood"}),i(new B(.045,.045,.6,8),7827553,0,.44,0).rotation.z=Math.PI/2):t==="ritual"?e===0?(i(new nt(.48,.32,.48),7772028,0,.3,0,{texture:"jade",emissive:1523504,emissiveIntensity:.3}),i(new B(.13,.13,.34,12),2309684,0,.47,0)):e===1?(i(new B(.18,.24,.2,9),7230784,0,.16,0,{texture:"clay"}),i(new Kt(.1,.38,7),15837003,0,.45,0,{emissive:11095332,emissiveIntensity:.8})):(i(new B(.035,.05,.86,6),Q.wood,0,.43,0,{texture:"wood"}),i(new Be(.36,.44),12085325,.18,.62,0,{side:ye}).rotation.y=Math.PI/2):t==="tomb"?e===0?i(new nt(.62,.12,.42),Q.jade,0,.26,0,{texture:"jade"}):e===1?i(new nt(.74,.08,.52),12953199,0,.26,0,{texture:"weave"}):(i(new B(.035,.05,.8,6),Q.wood,0,.4,0,{texture:"wood"}),i(new Be(.34,.4),14210491,.18,.56,0,{side:ye}).rotation.y=Math.PI/2):e===0?(i(new nt(.92,.1,.58),8415823,0,.2,0,{texture:"wood"}),i(new nt(.06,.38,.05),14206575,-.26,.42,0)):e===1?(i(new B(.33,.36,.13,12),7827553,0,.16,0,{texture:"stone"}),i(new qt(.16,.03,6,14),9611424,0,.27,0).rotation.x=Math.PI/2):i(new ge(.22,1),Q.jade,0,.3,0,{texture:"jade",emissive:1523504,emissiveIntensity:.4})}beginTaskStations(t,e){this.clearTaskStations(),this.activeTaskId=t;const n={boat:[[-18.8,1.25],[-20.8,2.35],[-23,1.35]],transport:[[10.3,4.7],[11.7,5.75],[13.3,4.75]],workshop:[[23.5,7.05],[25.15,5.95],[28.1,7.25]],ritual:[[38,17.82],[36.72,17.42],[39.28,18.62]],tomb:[[27.65,-17],[29.25,-16],[31.1,-16.95]],flood:[[49.25,5.25],[50.85,7.4],[52.35,5.25]]}[t]||[];e.forEach((i,r)=>{let[o,a]=n[r]||[this.player.position.x+r,this.player.position.z],c=t==="ritual";if(!c&&(!this.onLand(o,a)||this.isWater(o,a)||this.boxObstacleAt(this.groundColliders,o,a))){const u=this.safeSpawn(o,a);o=u.x,a=u.z}const l=new Qt;l.position.set(o,c?this.ritualEntry.topY+.02:.02,a);const h=new W(new qt(.52,.026,6,24),new Te({color:6066034,transparent:!0,opacity:.86}));h.rotation.x=Math.PI/2,h.position.y=.025,l.add(h),this.taskStationProp(t,r,l),l.add(this.label("可操作",1.12,"#f8dfa0")),l.userData={id:`task-${t}-${r}`,name:i.label,action:"进行操作",kind:"task",taskId:t,step:r,ring:h,done:!1},this.scene.add(l),this.interactables.push(l),this.floaters.push({mesh:h,base:c?this.ritualEntry.topY+.045:.025,phase:r*.9+o*.1}),this.taskStations.push(l)}),this.updateTaskStations(0)}updateTaskStations(t){this.taskStep=t;for(const e of this.taskStations){const n=e.userData.step===t,i=e.userData.done;e.visible=!i,!i&&(e.userData.ring.material.color.set(n?15779934:6066034),e.userData.ring.material.opacity=n?.94:.48)}}completeTaskStation(t,e){if(t!==this.activeTaskId)return!1;const n=this.taskStations.find(i=>i.userData.step===e);return e!==this.taskStep?(n&&(n.userData.ring.material.color.set(13131341),n.userData.ring.material.opacity=.92),"wrong"):(n&&(n.userData.done=!0,n.userData.ring.material.color.set(15255916),n.visible=!1),this.taskStep++,this.taskStep>=this.taskStations.length?(this.clearTaskStations(),!0):(this.updateTaskStations(this.taskStep),!1))}buildLandmarks(){this.makeNPC("quarry","采玉人 · 阿岑","山里的玉脉刚刚露出来。",-39.5,14.2,8363643,"quest"),this.docks=[{id:"west-north",crossing:"west-main",x:-21,z:1.25,launch:{x:-21,z:-4.15},keeper:"boat",name:"船娘 · 阿汀",copy:"她的独木舟系在河湾的木桩上。"},{id:"west-south",crossing:"west-main",x:-21,z:-9.35,launch:{x:-21,z:-4.15},keeper:"boat-west-south",name:"南岸船夫 · 阿沅",copy:"她守着西岸回程的舟，潮水涨落也不离开木桩。"},{id:"workshop-north",crossing:"workshop-main",x:7,z:1.6,launch:{x:7,z:-3.55},keeper:"boat-workshop",name:"工坊渡口的船夫",copy:"这条大河把南北两岸分开，独木舟每天都在这里靠岸。"},{id:"workshop-south",crossing:"workshop-main",x:7,z:-8.55,launch:{x:7,z:-3.55},keeper:"boat-workshop-south",name:"南岸船夫 · 阿澄",copy:"想回到工坊与北岸，就从这处有船夫的渡口上舟。"},{id:"west-channel-north",crossing:"west-channel",x:-20.5,z:23.35,launch:{x:-20,z:20},keeper:"boat-west-channel",name:"西汊的船夫",copy:"西边的水路从山脚穿过田地，两岸都留了木桩。"},{id:"west-channel-south",crossing:"west-channel",x:-19.5,z:16.65,launch:{x:-20,z:20},keeper:"boat-west-channel-south",name:"南岸船夫 · 阿芰",copy:"西汊的船就在身旁，探索完北边也能随时回来。"},{id:"east-north",crossing:"ritual-channel",x:32,z:15,launch:{x:32,z:12},keeper:"boat-north",name:"北汊的船夫",copy:"北面的水网能把你带到宫殿区附近。"},{id:"east-south",crossing:"ritual-channel",x:32,z:9,launch:{x:32,z:12},keeper:"boat-ritual-south",name:"祭台渡口的船夫",copy:"去高台之前先在这里上舟；对岸也有船夫等候。"},{id:"east-main-north",crossing:"tomb-main",x:25,z:2.25,launch:{x:25,z:-3.25},keeper:"boat-east",name:"东渡口的船夫",copy:"南岸的反山王陵在河对面；这里的舟每日往返。"},{id:"east-main-south",crossing:"tomb-main",x:25,z:-8.1,launch:{x:25,z:-3.25},keeper:"boat-south",name:"南岸的船夫",copy:"这里的舟靠岸后会等下一位渡河的人。"},{id:"south-west",crossing:"tomb-canal",x:12.9,z:-18,launch:{x:17,z:-18},keeper:"boat-tomb-west",name:"陵前西岸船夫",copy:"这条水道从城外接进来，西岸也能返航。"},{id:"south-east",crossing:"tomb-canal",x:21.2,z:-18,launch:{x:17,z:-18},keeper:"boat-tomb",name:"陵前水道的船夫",copy:"这条水道从城外接进来，两边都留了渡口。"}],this.dockBoatByCrossing={},this.docks.forEach(r=>{this.dockBoatByCrossing[r.crossing]||(this.dockBoatByCrossing[r.crossing]=this.addBoat(r.launch.x,r.launch.z,!1)),r.boat=this.dockBoatByCrossing[r.crossing]}),this.dockBoats=this.docks.map(r=>r.boat),this.docks.forEach(r=>this.makeNPC(r.keeper,r.name,r.copy,r.x,r.z,6197665,"boat")),this.landmark("transport","工坊运料栈台","东岸的木棚下传来磨玉的声音。",12.2,4.5),this.makeNPC("workshop","制玉匠 巫宁","他正用水和砂磨一枚玉胚。",26,8,9729619,"quest");const t=this.makeNPC("ritual","祭司","高台上的火焰在风里摇动。",38,18,10710360,"quest");t.position.y=1.075,this.makeNPC("tomb","陵墓守卫","土丘旁立着安静的白色幡旗。",30,-18,7761803,"quest"),this.landmark("flood","东堤","堤坝把城与更大的水分开。",51,6),this.makeNPC("rice","稻田里的阿禾","她在看天色，也在看田里的水。",-14,10.5,13217114),this.makeNPC("potter","陶工","刚烧好的陶罐还带着温度。",-12,-17.5,11695452),this.makeNPC("fisher","渔人","他把鱼篓搁在船头。",-8,-9.4,6197408),this.makeNPC("child","堤岸上的孩子","他正沿着堤岸追一只蜻蜓。",23,9.5,10649424),this.makeNPC("weaver","织麻人","她把长长的麻线绕成一束。",3,13.2,9008032),this.makeNPC("palace","高台居所的管事","夯土台上的木屋不靠金银炫耀；修堤、分粮、备祭，都要有人把事情组织起来。",-43.2,-13.5,9006418,"side"),this.makeNPC("palace-resident","高台居所的执事","木柱和夯土台围起的是处理粮食、劳作与祭仪的地方；一座城靠许多人分担事情，而不是靠金银装饰。",-49,-15.5,6511735,"side"),this.makeNPC("palace-gate","高台院的值守人","他站在院门旁，不是守着金殿，而是记下谁带来粮食、木料和消息，再把人领进能商量事情的院子。",-45,-12.42,8088407,"side"),this.makeNPC("rice-yard","晒谷场的阿萤","稻子收回来不能立刻进仓。晒干、脱粒、舂米，每一步都怕赶上潮气。",-20,15.8,11830869,"side"),this.makeNPC("food-yard","食物棚的阿嵘","牲畜、鱼和谷物都要清洗、分装、晾晒。吃进嘴里的食物，也有一段辛苦的来路。",-35,-12.8,8356183,"side"),this.makeNPC("necropolis","墓地守望人","这里有许多大小不同的墓丘。每一处安放，都在告诉后人这座城如何记住一个人。",34.5,-17.6,7761803,"side"),this.makeNPC("grave-worker","封土人 · 阿川","他把湿土一层层填进墓丘边缘，木夯落下时，土地发出沉闷的声音。",25.8,-21.85,10122583,"side"),this.makeNPC("water-carrier","汲水人 · 阿澜","她把水罐挂在担木两端，准备把水送进附近的院子。",-6.3,5.8,8294771,"side"),this.makeNPC("boatwright","修舟人 · 阿朔","他顺着舟身削去毛刺，河网里的每条独木舟都要经常修补。",-8.2,4.15,8874573,"side"),this.makeNPC("reedworker","编苇人 · 阿菁","她把晒干的芦苇束紧，准备编成席和绳。",15.15,7.45,10256468,"side");const e=this.villagers.find(r=>r.id==="rice-yard");e&&(e.anchor={x:-26,z:14.2},e.mesh.position.set(-26,.02,14.2));const n=this.navigationMeshes.find(r=>r.userData.goTo?.x===-20&&r.userData.goTo?.z===15.8);n&&(n.position.set(-26,.95,14.2),n.userData.goTo={x:-26,z:14.2});const i=this.makeNPC("family","屋里的阿槐","上层铺着草席，下面的一群小猪正在拱土。",-22,-17,10322025,"side");i.position.y=2.58,this.makeNPC("cook","高台居所的阿婉","她在高台居所旁整理炊具，烟从木屋的屋脊缓慢散开。",-39.55,-14.7,10710360,"side"),this.makeNPC("herder","猪圈旁的阿乐","几头小猪在屋下躲雨，人住在高处，潮水涨起来也不怕。",42.1,22.7,6916711,"side"),this.makeNPC("carpenter","制舟人","独木舟要掏得又轻又稳，河道没有桥，水上的路全靠它。",-8,1.35,9530700,"side"),this.discovery("loom","屋里的织机","麻线穿过木架，慢慢变成能遮雨、能交换的布。",-22.35,-16.92,2.58),this.discovery("hearth","火塘","火塘的烟从屋顶散出去，屋里的人围着它煮饭、修工具、讲一天的见闻。",-21.72,-16.8,2.58),this.discovery("granary","陶罐和谷物","稻谷被晒干后装进陶罐，架在高处，避开潮气和小兽。",-22.18,-17.15,2.58),this.discovery("pigpen","屋下的一群小猪","猪群住在高脚屋下面，能躲雨，也能让人住的地方离潮湿的地面更远。",-21.82,-17.05,.02),this.quarryCamp(-39.5,14.2),this.docks.forEach(r=>this.dock(r.x,r.z))}quarryCamp(t,e){for(const[r,o]of[[-1.5,.5],[-.7,-.6],[.8,.55],[1.4,-.3]])this.mesh(new ge(.35+Math.random()*.22),Q.stone,t+r,.25,e+o).rotation.set(Math.random(),Math.random(),0);const n=this.mesh(new nt(2.5,.12,.12),Q.wood,t-1.4,1.4,e-1.2);n.rotation.z=.65;const i=this.mesh(new nt(2.5,.12,.12),Q.wood,t+1.4,1.4,e-1.2);i.rotation.z=-.65,this.mesh(new nt(3.1,.12,.12),Q.wood,t,2.22,e-1.2),this.mesh(new Kt(.13,.48,7),15770958,t+1.35,.28,e+1.1,{emissive:14115621,emissiveIntensity:1})}dock(t,e){for(let i=0;i<5;i++){const r=this.mesh(new nt(.45,.12,1.95),Q.wood,t-1+i*.5,.13,e,{texture:"wood"});r.rotation.y=.05+(i%2?-.012:.012);const o=this.mesh(new nt(.36,.018,.045),10910286,t-1+i*.5,.205,e+(i%2?-.45:.45),{texture:"wood"});o.rotation.y=r.rotation.y}for(const i of[-1,1]){this.mesh(new B(.07,.095,.94,7),Q.wood,t+i*1.2,.47,e+.7,{texture:"wood"});const r=this.mesh(new Kt(.12,.15,6),6702383,t+i*1.2,.99,e+.7,{texture:"wood"});r.rotation.y=i*.25;const o=this.mesh(new B(.012,.012,.62,5),13481084,t+i*.77,.39,e+.47);o.rotation.z=i*.9}this.mesh(new B(.075,.09,.32,7),7491640,t-.82,.25,e-.67,{texture:"wood"});const n=new W(new qt(.17,.022,6,14),this.mat(13019760));n.rotation.x=Math.PI/2,n.position.set(t-.48,.215,e-.54),this.scene.add(n)}addBoat(t,e,n){const i=new Qt,r=new W(new mt(.68,14,7),this.mat(Q.wood,{texture:"wood"}));r.scale.set(1.6,.3,.64),r.position.y=.16,i.add(r);const o=new W(new qt(.61,.045,7,14),this.mat(9198652,{texture:"wood"}));o.rotation.x=Math.PI/2,o.scale.x=1.58,o.position.y=.27,i.add(o);const a=new W(new nt(.9,.09,.32),this.mat(11238733,{texture:"wood"}));a.position.y=.31,i.add(a);for(const c of[-1,1]){const l=new W(new qt(.12,.012,5,10),this.mat(13085297));l.rotation.x=Math.PI/2,l.position.set(c*.46,.31,.05),i.add(l)}return i.position.set(t,.03,e),this.scene.add(i),n&&(this.playerBoat=i,i.visible=!1),i}buildWaterTraffic(){const t=(i,r,o)=>{if(!this.waterRouteIsSafe(i))throw new Error("环境独木舟路线离开了河道");const[a,c]=i[0],l=this.addBoat(a,c,!1),h=new W(new B(.11,.16,.42,7),this.mat(o));h.position.set(-.08,.55,0),l.add(h);const u=new W(new mt(.105,9,7),this.mat(13143398));u.position.set(-.08,.86,0),l.add(u);const d=new W(new B(.018,.026,1.1,6),this.mat(7688247,{texture:"wood"}));d.position.set(.16,.48,.05),d.rotation.z=-.78,l.add(d),this.ambientBoats.push({mesh:l,route:i,phase:r,speed:.026+r*.004,oar:d})};t([[-56,-5.7],[-42,-5.2],[-30,-4.9],[-20,-4.4],[-10,-4.45],[0,-3.5],[10,-3.05],[20,-2.7],[32,-3.4],[44,-2.1],[55.8,-3.55]],.12,9270868),t([[5,35],[8,33],[10,19],[8,14],[11,12.4],[15,12.6],[20,10.8],[32,12],[43,15],[55,17],[60.8,15.05]],.42,6981497),t([[12,-32],[14,-27],[15,-23],[17,-18],[19,-13],[21,-8],[20,-3.1]],.71,9793870),t([[-47,28],[-40,25],[-33,23],[-26,22],[-20,20],[-14,19],[-8,18],[-4,17],[-1.2,16.1]],.88,6978711);const e=(i,r,o)=>{const a=new Qt,c=new W(new mt(.15,9,6),this.mat(5270872));c.scale.set(1.3,.64,.8),c.position.y=.1,a.add(c);const l=new W(new mt(.075,8,6),this.mat(6124381));l.position.set(.13,.18,-.05),a.add(l);const h=new W(new Kt(.035,.12,5),this.mat(13146439));h.rotation.x=Math.PI/2,h.position.set(.16,.18,-.12),a.add(h),a.position.set(i,.1,r),this.scene.add(a),this.floaters.push({mesh:a,base:.1,phase:o,x:i,z:r,duck:!0})};e(-36,-4.7,.1),e(-31,-4.25,.55),e(13,-3.25,.78),e(22,11.7,.3),e(-14,18.8,.92);const n=(i,r,o=1)=>{const a=new Qt;for(const[c,l,h]of[[0,0,.15],[.08,.26,.22],[-.04,.55,.28],[.11,.84,.34]]){const u=new W(new mt(h*o,8,6),new Oo({color:14209725,transparent:!0,opacity:.32}));u.scale.set(1,.72,1),u.position.set(c,l,0),a.add(u)}a.position.set(i,1.8,r),this.scene.add(a),this.floaters.push({mesh:a,base:1.8,phase:i*.19+r*.11,smoke:!0})};n(-22,-17,1),n(-50.1,-13.75,.86),n(26,8,1.05)}waterRouteIsSafe(t){if(t.length<2||!t.every(([e,n])=>this.isWater(e,n)))return!1;for(let e=0;e<t.length-1;e++){const[n,i]=t[e],[r,o]=t[e+1];for(let a=1;a<9;a++){const c=a/9;if(!this.isWater(He.lerp(n,r,c),He.lerp(i,o,c)))return!1}}return!0}validateTransitNetwork(){const t=new Set((this.villagers||[]).map(r=>r.id)),e=(this.docks||[]).filter(r=>!r.keeper||!t.has(r.keeper)||!this.onLand(r.x,r.z)||this.isWater(r.x,r.z)||!this.isWater(r.launch.x,r.launch.z)),n=(this.ambientBoats||[]).filter(r=>!this.waterRouteIsSafe(r.route)),i=this.riceYard&&this.docks.find(r=>Math.hypot(r.x-this.riceYard.x,r.z-this.riceYard.z)<4.6);if(e.length||n.length||i)throw new Error(`水路网络校验失败：${e.map(r=>r.id).join(",")||i?.id||"环境船"}`)}updateAmbientBoats(t){for(const e of this.ambientBoats){const n=(t*e.speed+e.phase)%1,i=n<.5?n*2:(1-n)*2,r=e.route.length-1,o=Math.min(r-1e-4,i*r),a=Math.floor(o),c=o-a,l=e.route[a],h=e.route[a+1];e.mesh.position.set(He.lerp(l[0],h[0],c),.03+Math.sin(t*2.4+e.phase*8)*.026,He.lerp(l[1],h[1],c));const u=n<.5?1:-1;e.mesh.rotation.y=Math.atan2((h[0]-l[0])*u,(h[1]-l[1])*u),e.oar&&(e.oar.rotation.z=-.78+Math.sin(t*3.4+e.phase*9)*.25)}}updateVillagers(t){for(const e of this.villagers){const n=e.id.startsWith("boat"),i=["quarry","rice","workshop","potter","fisher","weaver","carpenter","child","cook","herder","palace","palace-resident","palace-gate","water-carrier","boatwright","reedworker","rice-yard","food-yard","necropolis","grave-worker"].includes(e.id),r=e.id==="quarry"?3.4:e.id==="rice"?2.25:e.id==="workshop"?3.8:["boatwright","reedworker"].includes(e.id)?2.1:i?1.35:1.15,o=e.id==="quarry"?.34:e.id==="workshop"?.28:.08;if(i&&!n){const l=e.id==="rice"?.34:["palace-resident","palace-gate","water-carrier","boatwright","reedworker"].includes(e.id)?.14:["palace","rice-yard","food-yard","necropolis","grave-worker"].includes(e.id)?.16:.18,h=(Math.sin(t*.42+e.phase)+1)/2,u=Math.cos(e.phase)*l,d=Math.sin(e.phase)*l*.62;e.mesh.position.x=e.anchor.x+He.lerp(-u,u,h),e.mesh.position.z=e.anchor.z+He.lerp(-d,d,h),e.mesh.rotation.y=Math.atan2(u*(h<.5?1:-1),d*(h<.5?1:-1))+Math.PI}for(const l of e.mesh.userData.arms||[])l.rig.rotation.z=l.side*(.72+Math.sin(t*r+e.phase+l.side)*o);const a=e.mesh.userData.motion;if(!a)continue;const c=t*r+e.phase;a.type==="quarry"?(a.tools[0].rotation.z=-.48+Math.sin(c)*.19,a.tools[1].rotation.z=-.48+Math.sin(c)*.19):a.type==="harvest"?a.tools[0].position.y=.4+Math.abs(Math.sin(c))*.065:a.type==="grind"?a.tools[0].rotation.z=c*2.5:a.type==="cast"?(a.tools[0].rotation.z=-.6+Math.sin(c*.75)*.17,a.tools[1].position.y=.37+Math.abs(Math.sin(c*.75))*.045):a.type==="weave"?a.tools[0].rotation.z=Math.sin(c)*.26:a.type==="carry"?(a.tools[0].rotation.z=Math.PI/2+Math.sin(c)*.08,a.tools[1].position.y=.94+Math.abs(Math.sin(c))*.05,a.tools[2].position.y=1.1+Math.abs(Math.sin(c))*.05):a.type==="adze"?(a.tools[0].rotation.z=-.55+Math.sin(c*1.9)*.22,a.tools[1].rotation.z=-.55+Math.sin(c*1.9)*.22):a.type==="bind"&&(a.tools[0].rotation.z=.38+Math.sin(c*1.5)*.08,a.tools[1].scale.setScalar(1+Math.sin(c*1.5)*.08))}}updateSwayers(t){for(const e of this.swayers)e.mesh.rotation.z=e.base+Math.sin(t*1.3+e.phase)*.095}updateAnimals(t){for(const e of this.animals){if(e.chaseUntil){if(t<e.chaseUntil){const a=He.smoothstep((t-e.chaseStarted)/(e.chaseUntil-e.chaseStarted),0,1),c=e.chaseFrom,l=e.chaseTo;e.mesh.position.x=He.lerp(c.x,l.x,a),e.mesh.position.z=He.lerp(c.z,l.z,a),e.mesh.position.y=Math.sin(t*16+e.phase)*.018,e.mesh.rotation.y=Math.atan2(l.x-c.x,l.z-c.z)+Math.PI;continue}e.chaseUntil=0,e.start={...e.homeStart},e.end={...e.homeEnd},e.phase+=.7}const n=e.kind==="fowl",i=t*(n?.88:.52)+e.phase,r=(Math.sin(i)+1)/2,o=r<.5?1:-1;e.mesh.position.x=He.lerp(e.start.x,e.end.x,r),e.mesh.position.z=He.lerp(e.start.z,e.end.z,r),e.mesh.position.y=Math.sin(i*(n?3.6:2.7))*(n?.004:.009),e.mesh.rotation.y=Math.atan2((e.end.x-e.start.x)*o,(e.end.z-e.start.z)*o)+Math.PI,n&&e.head&&(e.head.position.y=.37-Math.max(0,Math.sin(i*2.2))*.065)}}createPlayer(){this.player=new Qt;const t={legs:[],arms:[]};for(const p of[-1,1]){const S=new Qt;S.position.set(p*.16,.5,0);const b=new W(new B(.09,.105,.48,8),this.mat(5125424));b.position.y=-.24,S.add(b);const y=new W(new mt(.12,9,7),this.mat(3155754));y.scale.set(1,.45,1.4),y.position.set(0,-.48,-.1),S.add(y);const R=new W(new nt(.2,.035,.29),this.mat(6770746,{texture:"wood"}));R.position.set(0,-.575,-.11),S.add(R),this.player.add(S),t.legs.push({rig:S,side:p})}const e=new W(new B(.285,.35,1.02,8),this.mat(5466202,{texture:"weave"}));e.position.y=.76,this.player.add(e);const n=new W(new mt(.38,12,8),this.mat(5466202,{texture:"weave"}));n.scale.set(.94,.31,.78),n.position.y=1.08,this.player.add(n);const i=new W(new nt(.4,.54,.045),this.mat(7104336,{texture:"weave"}));i.position.set(0,.79,.31),this.player.add(i);const r=new W(new qt(.32,.045,7,20),this.mat(9070406,{texture:"weave"}));r.rotation.x=Math.PI/2,r.position.y=.63,this.player.add(r);const o=new W(new B(.16,.19,.34,8),this.mat(10121283,{texture:"weave"}));o.rotation.x=Math.PI/2,o.position.set(0,.84,.35),this.player.add(o);const a=new W(new mt(.25,12,9),this.mat(13866600));a.position.y=1.4,this.player.add(a);for(const p of[-1,1]){const S=new W(new mt(.011,7,5),this.mat(3419689));S.scale.set(.8,1,.38),S.position.set(p*.078,1.43,-.244),this.player.add(S)}const c=new W(new mt(.014,7,5),this.mat(12617315));c.scale.set(.7,.75,.52),c.position.set(0,1.38,-.25),this.player.add(c);const l=new W(new nt(.16,.54,.035),this.mat(7307620,{texture:"weave"}));l.position.set(0,.84,-.322),this.player.add(l);const h=new W(new nt(.47,.08,.03),this.mat(11638890,{texture:"weave"}));h.position.set(0,1.14,-.31),this.player.add(h);const u=new W(new qt(.15,.019,7,16),this.mat(9070407));u.rotation.x=Math.PI/2,u.position.y=1.16,this.player.add(u);const d=new W(new mt(.28,10,8),this.mat(3419689));d.scale.y=.44,d.position.y=1.62,this.player.add(d);const f=new W(new mt(.1,8,6),this.mat(3419689));f.position.set(0,1.75,.02),this.player.add(f);for(const p of[-1,1]){const S=new Qt;S.position.set(p*.32,1.12,.02),S.rotation.z=p*.65;const b=new W(new B(.07,.085,.48,7),this.mat(5466202,{texture:"weave"}));b.position.y=-.22,S.add(b);const y=new W(new mt(.075,8,6),this.mat(13866600));y.position.set(0,-.46,.04),S.add(y),this.player.add(S),t.arms.push({rig:S,side:p})}const m=new W(new qt(.78,.06,8,28),new Te({color:16768098,transparent:!0,opacity:1}));m.rotation.x=Math.PI/2,m.position.y=.045,this.player.add(m);const x=new W(new qt(.09,.025,6,12),this.mat(Q.jade,{emissive:1787703,emissiveIntensity:.7}));x.rotation.x=Math.PI/2,x.position.set(0,1.02,-.3),this.player.add(x),this.player.add(this.label("你 · 阿玉",2.28,"#fff0a2"));const g=this.safeSpawn(-12.8,5.1);this.player.scale.set(.82/this.explorationScale,.82,.82/this.explorationScale),this.player.position.set(g.x,0,g.z),this.player.rotation.y=Math.PI,this.player.userData.facing=Math.PI,this.player.userData.limbs=t,this.scene.add(this.player),this.addBoat(g.x,g.z,!0)}setQuest(t){this.quest=t;let e=null;this.interactables.forEach(n=>{const i=n.userData.id===t,r=n.userData.ring||n.children.find(o=>o.geometry?.type==="TorusGeometry");r?.material?.color&&r.material.color.set(i?16767344:14147514),n.userData.marker&&(n.userData.marker.visible=i),i&&(e={x:n.position.x,z:n.position.z,name:n.userData.name})}),e&&this.callbacks.onMapReady?.({land:this.landPolygon,water:this.water,docks:this.docks,target:e})}setBoat(t){if(t){const e=this.docks.findIndex(i=>Math.hypot(this.player.position.x-i.x,this.player.position.z-i.z)<4);this.activeDockIndex=e<0?0:e;const n=this.docks[this.activeDockIndex];this.player.position.set(n.launch.x,0,n.launch.z),this.dockBoats?.[this.activeDockIndex]&&(this.dockBoats[this.activeDockIndex].visible=!1)}if(this.boat=t,!t&&this.player){const e=this.docks.findIndex(n=>Math.hypot(this.player.position.x-n.x,this.player.position.z-n.z)<2.1);if(e>=0){const n=this.docks[e];this.player.position.set(n.x,0,n.z),this.dockBoats?.[e]&&(this.dockBoats[e].visible=!0)}this.player.position.y=this.elevatedAt(this.player.position.x,this.player.position.z),this.disembarkUntil=this.clock.elapsedTime+1.5,this.near=null,this.callbacks.onNearChange?.(null)}this.playerBoat&&(this.playerBoat.visible=t)}setHomeRoofVisible(t,e){for(const n of t?.roof?.userData.parts||[t?.roof])n&&(n.visible=e)}toggleInteriorView(){return this.currentHome?(this.interiorCamera=!this.interiorCamera,this.setHomeRoofVisible(this.currentHome,!this.interiorCamera),this.callbacks.onInteriorChange?.(this.interiorCamera),this.interiorCamera):(this.callbacks.onBlocked?.("先沿木梯进入一座高脚屋，才能切换屋内视角。"),!1)}updateInteriorState(){const t=this.player?.position.y>.18?this.houseAt(this.player.position.x,this.player.position.z):null;t!==this.currentHome&&(this.setHomeRoofVisible(this.currentHome,!0),this.currentHome=t,this.interiorCamera=!1,this.callbacks.onInteriorChange?.(!1))}closestDock(t,e=2.05){return this.docks?.find(n=>Math.hypot(t.x-n.x,t.z-n.z)<e)}safeSpawn(t,e){if(this.onLand(t,e)&&!this.isWater(t,e)&&!this.boxObstacleAt(this.groundColliders,t,e))return{x:t,z:e};for(let n=.7;n<12;n+=.7)for(let i=0;i<20;i++){const r=i/20*Math.PI*2,o={x:t+Math.cos(r)*n,z:e+Math.sin(r)*n};if(this.onLand(o.x,o.z)&&!this.isWater(o.x,o.z)&&!this.boxObstacleAt(this.groundColliders,o.x,o.z))return o}return{x:t,z:e}}onLand(t,e){let n=!1;for(let i=0,r=this.landPolygon.length-1;i<this.landPolygon.length;r=i++){const[o,a]=this.landPolygon[i],[c,l]=this.landPolygon[r];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}pointIn(t,e,n){let i=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const[a,c]=t[r],[l,h]=t[o];c>n!=h>n&&e<(l-a)*(n-c)/(h-c)+a&&(i=!i)}return i}isWater(t,e){return this.water.some(n=>this.pointIn(n,t,e))}elevatedAt(t,e){return this.elevatedAreas.find(i=>Math.abs(t-i.x)<i.w*.43&&Math.abs(e-i.z)<i.d*.43)?.y||0}rampAt(t,e){return this.ramps.find(n=>Math.abs(t-n.x)<n.w&&e>=n.z0&&e<=n.z1)}surfaceAt(t,e,n=0){const i=this.rampAt(t,e);if(i){const o=Math.max(0,Math.min(1,(i.z1-e)/(i.z1-i.z0)));return i.y*o}const r=this.elevatedAt(t,e);return n>.18&&r?r:0}circleObstacleAt(t,e){return this.solidCircles.find(n=>Math.hypot(t-n.x,e-n.z)<n.r+.3)}boxObstacleAt(t,e,n){return t.find(i=>{const r=Math.max(i.x-i.w*.5,Math.min(e,i.x+i.w*.5)),o=Math.max(i.z-i.d*.5,Math.min(n,i.z+i.d*.5));return Math.hypot(e-r,n-o)<.3})}blockedByWall(t,e,n){return this.circleObstacleAt(t,e)?!0:n<.25?!!this.boxObstacleAt(this.groundColliders,t,e)&&!this.rampAt(t,e):!!this.boxObstacleAt(this.wallColliders,t,e)}blockReason(t,e){if(!this.onLand(t,e))return"boundary";if(this.boat)return this.isWater(t,e)||this.closestDock({x:t,z:e},1.3)?null:"boat";if(this.isWater(t,e))return"water";const n=this.player?.position.y||0;return this.circleObstacleAt(t,e)?"terrain":this.blockedByWall(t,e,n)?n<.25?"house":"wall":n>.18&&!this.elevatedAt(t,e)&&!this.rampAt(t,e)?"edge":null}valid(t,e){return!this.blockReason(t,e)}houseAt(t,e){return this.elevatedAreas.find(n=>Math.abs(t-n.x)<n.w*.46&&Math.abs(e-n.z)<n.d*.46)}pointerDown(t){this.drag={x:t.clientX,y:t.clientY,moved:!1}}pointerMove(t){if(!this.drag)return;const e=t.clientX-this.drag.x,n=t.clientY-this.drag.y;Math.hypot(e,n)>6&&(this.drag.moved=!0),this.drag.moved&&(this.yaw-=e*.009,this.drag.x=t.clientX,this.drag.y=t.clientY,this.callbacks.onDirection?.(this.directionName()))}pointerUp(t){if(!this.drag)return;const e=this.drag.moved;this.drag=null,e||this.pick(t)}routeIntoHouse(t,e={x:t.x,z:t.z}){const n=this.ramps.find(i=>Math.abs(i.x-t.x)<.01&&i.z0<t.front&&i.z1>t.front);return n?(this.target=new I(t.x,0,n.z1+.06),this.route=[new I(t.x,t.y,t.front-.24),new I(e.x,t.y,e.z)],this.callbacks.onBlocked?.("高脚屋的入口在正面。阿玉正在绕到木梯，并会上楼；进入后可点右上角“屋内视角”。"),!0):!1}routeOutOfHouse(t,e){const n=this.ramps.find(i=>Math.abs(i.x-t.x)<.01&&i.z0<t.front&&i.z1>t.front);return n?(this.target=new I(t.x,t.y,t.front-.24),this.route=[new I(t.x,0,n.z1+.06),new I(e.x,0,e.z)],this.callbacks.onBlocked?.("阿玉正在沿正面的木梯下楼。"),!0):!1}pick(t){if(!this.started)return;const e=this.canvas.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObjects(this.navigationMeshes,!1)[0];if(n?.object.userData.home){this.routeIntoHouse(n.object.userData.home);return}if(n?.object.userData.goTo){const a=n.object.userData.goTo;if(a.ritual&&this.ritualEntry){const c=this.ritualEntry;this.target=new I(c.x,0,c.stairEnd+.08),this.route=[new I(a.x,c.topY,a.z)],this.callbacks.onBlocked?.("祭司在祭台上。阿玉正沿南侧台阶登台。");return}this.route=[],this.target=new I(a.x,0,a.z);return}const i=this.raycaster.intersectObject(this.hitPlane)[0];if(!i)return;const r={x:i.point.x/this.explorationScale,z:i.point.z/this.explorationScale},o=this.blockReason(r.x,r.z);if(o==="house"){const a=this.houseAt(r.x,r.z);if(a&&this.routeIntoHouse(a,r))return}if(o==="edge"){const a=this.elevatedAreas.find(c=>Math.abs(this.player.position.x-c.x)<c.w*.45&&Math.abs(this.player.position.z-c.z)<c.d*.45);if(a&&this.routeOutOfHouse(a,r))return}if(o){const a={water:"河水挡住了脚步。先到码头登上独木舟。",boat:"独木舟只能沿河行进；靠近码头会自动靠岸。",terrain:"山石或树丛挡住了去路，阿玉会沿边缘绕行。",wall:"屋墙挡住了去路。请从门洞或木梯离开。",edge:"高脚屋有栏墙，回到木梯才能下楼。",boundary:"前方是堤坝外的水域；世界边界在蓝色水面之外。"};this.callbacks.onBlocked?.(a[o]||a.boundary);return}this.route=[],this.target=new I(r.x,0,r.z)}nudge(t){const e={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[t];if(!e||!this.started)return;const n=Math.cos(this.yaw),i=-Math.sin(this.yaw),r=-Math.sin(this.yaw),o=-Math.cos(this.yaw);this.route=[],this.target=null,this.move((n*e[0]+r*e[1])*1.15,(i*e[0]+o*e[1])*1.15)}setPad(t){this.pad=t}turnCamera(){this.yaw=Math.round(this.yaw/(Math.PI/2)+1)*Math.PI/2,this.callbacks.onDirection?.(this.directionName())}resetCamera(){this.cinema=null,this.yaw=Math.PI*1.5,this.positionCamera(!0)}directionName(){const t=(Math.round(this.yaw/(Math.PI/2))%4+4)%4;return["北","西","南","东"][t]}update(t){if(!this.started)return;this.textures.water&&(this.textures.water.offset.x=(this.textures.water.offset.x+t*.018)%1,this.textures.water.offset.y=(this.textures.water.offset.y+t*.009)%1);let e=0,n=0;(this.keys.has("w")||this.keys.has("arrowup"))&&(n-=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(n+=1),(this.keys.has("a")||this.keys.has("arrowleft"))&&(e-=1),(this.keys.has("d")||this.keys.has("arrowright"))&&(e+=1);const i={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[this.pad];if(i&&(e+=i[0],n+=i[1]),e||n){this.route=[],this.target=null;const a=Math.hypot(e,n),c=Math.cos(this.yaw),l=-Math.sin(this.yaw),h=-Math.sin(this.yaw),u=-Math.cos(this.yaw);this.move((c*e+h*n)/a*t*6.2,(l*e+u*n)/a*t*6.2)}else if(this.target){const a=this.target.x-this.player.position.x,c=this.target.z-this.player.position.z,l=Math.hypot(a,c);l<.15?this.target=this.route.shift()||null:this.move(a/l*t*5.7,c/l*t*5.7)}if(this.player){const a=!!(e||n||this.target)&&!this.boat,c=a?Math.sin(this.clock.elapsedTime*9):0,l=this.player.userData.limbs;for(const h of l?.legs||[])h.rig.rotation.x=h.side*c*.42;for(const h of l?.arms||[])h.rig.rotation.x=-h.side*c*.3}this.updateInteriorState(),this.playerBoat?.visible&&(this.playerBoat.position.x=this.player.position.x,this.playerBoat.position.z=this.player.position.z,this.playerBoat.rotation.y=this.player.rotation.y,this.playerBoat.position.y=.03+Math.sin(this.clock.elapsedTime*2)*.035),this.updateAmbientBoats(this.clock.elapsedTime),this.updateVillagers(this.clock.elapsedTime),this.updateSwayers(this.clock.elapsedTime),this.updateAnimals(this.clock.elapsedTime),this.updateActivityEffects(this.clock.elapsedTime),this.positionCamera(),this.updateMoments(this.clock.elapsedTime);let r=null,o=1.75;for(const a of this.interactables){if(a.userData.complete||this.clock.elapsedTime<(this.disembarkUntil||0)&&a.userData.kind==="boat")continue;const c=v0(a.position,this.player.position);c<o&&(o=c,r=a.userData)}if(!r&&!this.boat&&this.player.position.y<.25)for(const a of this.elevatedAreas){if(!a.entrance)continue;const c=Math.hypot(a.entrance.x-this.player.position.x,a.entrance.z-this.player.position.z);c<o&&(o=c,r={id:`home-${a.x}-${a.z}`,name:"高脚屋的木梯",action:"沿木梯进屋",kind:"home",home:a})}r?.id!==this.near?.id&&(this.near=r,this.callbacks.onNearChange?.(r)),this.callbacks.onPosition?.(this.player.position);for(const a of this.floaters){if(a.cloud){a.mesh.position.y=a.base+Math.sin(this.clock.elapsedTime*.22+a.phase)*.11,a.mesh.position.x+=Math.sin(this.clock.elapsedTime*.08+a.phase)*.001;continue}if(a.bird){a.mesh.position.y=a.base+Math.sin(this.clock.elapsedTime*.8+a.phase*6)*.35,a.mesh.position.x+=Math.cos(this.clock.elapsedTime*.18+a.phase*6)*.003,a.mesh.children.forEach((c,l)=>c.rotation.z=(l?1:-1)*(.65+Math.sin(this.clock.elapsedTime*5+a.phase*9)*.4));continue}if(a.duck){a.mesh.position.y=a.base+Math.sin(this.clock.elapsedTime*2.2+a.phase)*.018,a.mesh.position.x=a.x+Math.sin(this.clock.elapsedTime*.42+a.phase)*.46,a.mesh.rotation.y=Math.cos(this.clock.elapsedTime*.42+a.phase)*.34;continue}if(a.smoke){a.mesh.position.y=a.base+Math.sin(this.clock.elapsedTime*.35+a.phase)*.09,a.mesh.position.x+=Math.sin(this.clock.elapsedTime*.16+a.phase)*.0015,a.mesh.scale.setScalar(1+Math.sin(this.clock.elapsedTime*.4+a.phase)*.06);continue}if(a.foam){a.mesh.position.y=a.base+Math.sin(this.clock.elapsedTime*1.2+a.phase)*.008;continue}a.mesh.position.y=a.base+Math.sin(this.clock.elapsedTime*1.6+a.phase)*.025,a.spin&&(a.mesh.rotation.y+=t*.75)}}move(t,e){const n=this.player.position,i=n.x+t,r=n.z+e;let o=null;if(this.valid(i,r))o={x:i,z:r};else{const c=this.valid(i,n.z),l=this.valid(n.x,r);if(c&&l){const h=this.target?.x??n.x+t*2,u=this.target?.z??n.z+e*2,d=Math.hypot(i-h,n.z-u),f=Math.hypot(n.x-h,r-u);o=d<=f?{x:i,z:n.z}:{x:n.x,z:r}}else c?o={x:i,z:n.z}:l&&(o={x:n.x,z:r})}if(!o)return this.target&&(this.target=null),!1;this.player.position.x=o.x,this.player.position.z=o.z,this.boat||(this.player.position.y=this.surfaceAt(o.x,o.z,this.player.position.y));const a=Math.atan2(o.x-n.x,o.z-n.z)+Math.PI;return this.player.userData.facing=a,this.player.rotation.y=a,this.boat&&!this.isWater(o.x,o.z)&&this.closestDock(o,1.3)&&(this.setBoat(!1),this.callbacks.onBoatChange?.(!1)),!0}positionCamera(t=!1){const e=this.cinema&&this.clock.elapsedTime<this.cinema.until?this.cinema:null,n=e?.x??this.player.position.x,i=e?.z??this.player.position.z,r=e?0:this.player.position.y,o=e?8.7:this.interiorCamera?3.05:12.8;let a=o;if(!e)for(let h=o;h>=4;h-=.4){const u=n+Math.sin(this.yaw)*h,d=i+Math.cos(this.yaw)*h;if(this.onLand(u,d)&&!this.isWater(u,d)){a=h;break}}const c=new I(n*this.explorationScale+Math.sin(this.yaw)*a,r+(e?4.6:this.interiorCamera?2.15:6.7),i*this.explorationScale+Math.cos(this.yaw)*a);t?this.camera.position.copy(c):this.camera.position.lerp(c,e?.until?.07:.1);const l=e?0:this.interiorCamera?.16:2.05;this.camera.lookAt((n-Math.sin(this.yaw)*l)*this.explorationScale,r+(this.interiorCamera?.78:1.05),(i-Math.cos(this.yaw)*l)*this.explorationScale)}collapse(){this.scene.fog.color.set(6323064),this.scene.fog.density=.055,this.scene.background.set(6323064)}animate(){requestAnimationFrame(()=>this.animate()),this.update(Math.min(.04,this.clock.getDelta())),this.renderer.render(this.scene,this.camera)}}const _n=[{id:"quarry",title:"寻找玉料的山",copy:"玉琮王不记得自己从哪里来。先去西侧山脚，问问采玉人。",memory:"第 1 段：它曾是一块仍在山里的玉料",chapter:0,target:"采玉人",hint:"西边的低山旁有白色玉脉。",speaker:"采玉人 阿岑",line:"这块石头在山里睡了很久。你手里这件玉器，原先也是一块带着石皮的玉料。拿上这枚玉胚，沿水路送进城吧。",fact:"良渚出土玉器保留着器形、纹样、材料和复杂加工技术的证据。"},{id:"boat",title:"借一只船",copy:"玉料太重，不能绕着河网走。带着玉胚去西南码头，请船娘借船。",memory:"第 2 段：玉料必须沿水路进入城中",chapter:1,target:"船娘",hint:"水上聚落的西南码头。",speaker:"船娘 阿汀",line:"内城河的水路比陆路近得多。船借你，不过要记得：没有船，河就是边界；有了船，河才是路。",fact:"良渚城址处在河网交织的平原；水利系统不是背景，而是城市组织的一部分。"},{id:"transport",title:"把玉料运过内城河",copy:"登船后，穿过河道，抵达东岸的工坊运料栈台。",memory:"第 2 段：船桨划开河网，玉胚进入内城",chapter:1,target:"工坊运料栈台",hint:"登船后可穿水；靠岸后穿过草地与木棚，到栈台卸下玉胚。",speaker:"玉琮王",line:"我记起来一点了：船桨划开水面，玉胚在船舱里轻轻碰撞。原来我曾经这样进城。",fact:"高坝、平原低坝与城址共同构成外围水利体系，也说明了水路与聚落空间的联系。"},{id:"workshop",title:"在工坊慢慢成形",copy:"和制玉工坊里的匠人交谈，看看一块玉料怎样被磨成玉琮。",memory:"第 3 段：砂、水和漫长的时间，让玉料成器",chapter:2,target:"制玉匠",hint:"工坊在东岸木棚下。",speaker:"制玉匠 巫宁",line:"不是一刀刻出来的。先切开，再用砂和水一点点磨；中间的孔，要从两端对着钻。做玉，是一件很慢的事。",fact:"精细玉器是良渚手工业能力最直观的物证之一。"},{id:"ritual",title:"登上宫殿区祭台",copy:"玉琮做好后被带往宫殿区。穿过草坡与林间空地，去有火光的高台。",memory:"第 4 段：成器被举上祭台，连接一座城",chapter:3,target:"祭司",hint:"东侧高台上有火光与旗幡；若被河网挡住，就去有船夫的渡口。",speaker:"祭司",line:"玉琮被举起来时，所有人都能看见它。它不是给一个人看的玉，而是把人、神与这座城连在一起的玉。",fact:"祭坛与成组玉器共同呈现了良渚统一的信仰体系。"},{id:"tomb",title:"抵达反山王陵",copy:"仪式结束后，去东渡口上船，随送葬队渡河前往反山王陵。",memory:"第 4 段：它被郑重安放进王陵，成为随葬的记忆",chapter:3,target:"陵墓守卫",hint:"南岸的土丘与白色幡旗。",speaker:"守陵人",line:"最后，它和许多珍贵的玉器一起留在这里。不是消失，是把那座城的记忆藏进黑暗里。",fact:"不同规格的墓葬，是理解良渚社会分工与等级结构的重要线索。"},{id:"flood",title:"听见堤坝外的水",copy:"玉琮王想起了完整的来时路。去东边堤坝上，望一望城外的水。",memory:"第 5 段：城安静下来，而它穿过五千年留下",chapter:4,target:"东堤",hint:"世界尽头那道高高的堤坝。",speaker:"玉琮王",line:"后来，水变得陌生，屋舍与道路慢慢安静下来。但我被留住了。五千年后，你又替我把这条路走了一遍。",fact:"良渚遗址约在公元前3300至前2300年间延续；城址、水利、墓葬与玉器共同讲述这座早期城市。"}],fc=[{id:"rice",name:"稻田里的阿禾",copy:"打谷不是把稻子收回来就结束了。晒、藏、运，都要看天和水。"},{id:"potter",name:"陶工",copy:"你看，这个罐子要放在船上。圆一点，才不容易在水里磕坏。"},{id:"fisher",name:"渔人",copy:"河里有鱼，河边有路。我们每天都从水上回家。"},{id:"child",name:"堤坝上的孩子",copy:"城外不能走太远，阿母说堤坝外面是很大的水和很远的山。"},{id:"weaver",name:"织麻人",copy:"这条麻线会被换成石料、木头，也会换来别处的故事。"},{id:"family",name:"屋里的阿槐",copy:"上面住人，下面养猪。雨天时，我们在高高的地板上听见猪在屋下打呼噜。"},{id:"herder",name:"猪圈旁的阿乐",copy:"小猪在屋下躲雨，人住在高处，潮水涨起来也不怕。"},{id:"cook",name:"河湾的阿婉",copy:"她在高脚屋里煮饭，烟从屋顶缝里慢慢散出去。"},{id:"carpenter",name:"制舟人",copy:"独木舟要掏得又轻又稳。河道没有桥，水上的路全靠它。"},{id:"loom",name:"屋里的织机",copy:"麻线穿过木架，慢慢变成能遮雨、能交换的布。"},{id:"hearth",name:"火塘",copy:"火塘的烟从屋顶散出去，屋里的人围着它煮饭、修工具、讲一天的见闻。"},{id:"granary",name:"陶罐和谷物",copy:"稻谷被晒干后装进陶罐，架在高处，避开潮气和小兽。"},{id:"granary-store",name:"聚落的高仓",copy:"收好的稻谷先晒干，再装进陶器和编筐，存到离地的高仓里。粮食能过潮湿的季节，一座城才有余力做玉、修堤、举行仪式。"},{id:"pigpen",name:"屋下的小猪",copy:"猪住在高脚屋下面，能躲雨，也能让人住的地方离潮湿的地面更远。"},{id:"family-hearth",name:"屋内火塘",copy:"石头围住火塘，火光既能煮食，也能在潮湿的夜里让一家人围坐。"},{id:"family-mat",name:"编席与睡具",copy:"编席被卷起靠在墙边。高脚屋把住处抬离湿地，屋内仍围绕最朴素的睡、食与收纳。"},{id:"home-grain",name:"屋内的谷罐与编筐",copy:"陶罐和编筐靠墙放好。住处抬高离开湿地，也让粮食和种子有更干爽的地方可放。"},{id:"home-loom",name:"屋内的小织架",copy:"几根横木把麻线绷得笔直。进到屋内，能看清纺线不是背景纹理，而是一户人家手边的工作。"},{id:"home-pottery",name:"屋内的陶罐架",copy:"几只陶罐被架离地板，里面装着要避潮的食物和日常器物。屋内的小收纳，也和高仓一样是在应对湿地。"},{id:"palace",name:"城内高台居所",copy:"木柱、夯土台和茅草屋顶围出一处高台居所。它不以金银炫耀，却让人看见组织修堤、制玉与祭仪所需的聚落权力。"},{id:"palace-resident",name:"高台居所的执事",copy:"这里不是后世想象中的金殿。木屋、夯土台、粮食和祭器，把安排劳作、分配物资与组织仪式的人聚到一起。"},{id:"palace-tally",name:"高台的刻痕板",copy:"木板上一道道刻痕，记的不是金银，而是谷物、工具与要分派的劳作。大型聚落里，记住这些事情也是一种本领。"},{id:"palace-store",name:"高台院里的储物罐",copy:"罐里的干粮和种子需要避潮保存。高台院落并不神秘，它也要面对一座城每天吃什么、存什么、怎样分给大家。"},{id:"palace-court",name:"高台院的议事棚",copy:"低矮屋棚、木凳、水罐与击鼓器让院落成为商量粮食、劳作与祭仪的地方。它不是后世金殿，而是一个处理城中事情的高台院。"},{id:"water-court",name:"汲水与分水的小台",copy:"石砌水槽、陶罐和担水木杆，提醒人们：水网城市不只靠大堤，也靠每天把水带回各个院落。"},{id:"boat-yard",name:"修补独木舟的木架",copy:"舟被托在木架上，石刃和木屑留在旁边。修好一条舟，就是把河网里的两岸重新接通。"},{id:"reed-yard",name:"编苇与晾晒的场地",copy:"芦苇被分束、挂起，再编成席和绳。屋顶、容器与水边的日常，都离不开这种普通却重要的植物。"},{id:"rice-yard",name:"晒谷与舂米场",copy:"稻子离开田里后，还要晒干、脱粒、舂去外壳，最后才进高仓。田、晒场与粮仓是一条完整的生活链。"},{id:"food-yard",name:"肉食处理棚",copy:"屋下饲养之外，清洗、分切、晾晒和储存也需要独立的棚与水盆。这里不展示血腥，只让人看见食物如何被认真处理。"},{id:"necropolis",name:"反山墓地",copy:"大小不一的墓丘、木幡与送葬用的木架把这里读成墓地。墓葬的规格差异，也保留下社会如何分工与纪念逝者的线索。"},{id:"grave-offering",name:"墓前的陶器",copy:"陶器被安放在墓丘旁，不是装饰。它让后来的人看见，当时的人愿意把怎样的日常和心意，一起留给逝者。"},{id:"grave-banner",name:"送葬的白幡",copy:"风吹动白幡，也把墓地从普通山坡中区分出来。大小不同的墓丘并列在一起，提醒人们这座城有不同的身份与分工。"},{id:"grave-earth",name:"封土人的木夯",copy:"墓丘不是一夜长出来的。人们把土一层层铺平、夯实，才让安放的地方能经得住雨水和岁月。"},{id:"grave-worker",name:"封土人 · 阿川",copy:"主墓更大，旁边也有许多较小的墓丘。这里的人用同一片土地安放不同的人，也留下了不同身份的线索。"}],Fs={quarry:{mode:"select",action:"帮忙辨玉",kicker:"采玉 · 01",title:"替阿岑辨出玉料",intro:"山脚的碎石里，只有真正的玉胚经得起后面的切、磨与钻。选出该带走的一块。",success:"你从石皮下辨出了坚硬的青白玉胚。阿岑把它郑重交给阿玉。",options:[{label:"带石皮、透出青白光的硬玉胚",correct:!0},{label:"一捏就散的潮湿黄土",correct:!1},{label:"层层开裂的松脆页岩",correct:!1}]},boat:{mode:"sequence",action:"取得借船许可",kicker:"水路 · 02",title:"把独木舟备好",intro:"阿汀把船借给你之前，要先确认它能安全离岸。按水上人的次序完成准备。",success:"缆绳收好，船腹稳当。阿汀点头：现在，这条河可以成为你的路。",options:[{label:"检查船腹有没有裂缝"},{label:"收起系在木桩上的缆绳"},{label:"把独木舟推离浅滩"}]},transport:{mode:"sequence",action:"卸下玉料",kicker:"运料 · 03",title:"把玉胚交进工坊",intro:"船靠上东岸栈台后，重玉料不能随手抛下。按稳妥的卸料顺序把它交给工坊。",success:"玉胚没有磕碰，顺利进入了木棚。砂、水和匠人的手正在等它。",options:[{label:"把船系回东岸木桩"},{label:"两手托住玉胚上栈台"},{label:"交给等候的制玉匠"}]},workshop:{mode:"sequence",action:"一起制玉",kicker:"制玉 · 04",title:"让玉料慢慢成形",intro:"良渚的玉不是一刀刻成。把三道关键工序按正确次序排好。",success:"切、磨、对钻之后，原本粗糙的玉料终于有了玉琮的轮廓。",options:[{label:"先沿着玉料切出外形"},{label:"用砂和水反复慢磨"},{label:"从两端对着钻通中孔"}]},ritual:{mode:"sequence",action:"协助祭仪",kicker:"祭仪 · 05",title:"让玉琮登上高台",intro:"祭仪不靠点一行答案完成。沿着高台上亮起的器物与火光，亲手完成安放、点火与立幡。",success:"玉琮被安放在供案中央，火光映出它四面的纹样。",options:[{label:"把玉琮安到供案中央"},{label:"点燃两侧火盆"},{label:"立好高台四角的幡旗"}]},tomb:{mode:"sequence",action:"协助入葬",kicker:"王陵 · 06",title:"郑重安放玉琮",intro:"反山王陵里没有匆忙。跟着守陵人的手势，完成最后的安放。",success:"木板合上前，玉琮已安静躺好；它把整座城的记忆留在了土丘之下。",options:[{label:"把玉琮放进预留的位置"},{label:"覆上保护玉器的软垫"},{label:"立起白幡，送别队伍"}]},flood:{mode:"sequence",action:"登堤听水",kicker:"堤坝 · 07",title:"把城留在记忆里",intro:"站在东堤上，阿玉最后要做的不是阻止洪水，而是认清一座城如何被时间留下。",success:"你看见堤坝、水线与远去的屋舍。玉琮王的来时路，至此完整。",options:[{label:"站上堤坝，辨认城内外的水线"},{label:"回望玉矿、河网、工坊和高台"},{label:"把这座城的故事记进玉琮王的记忆"}]}};class M0{constructor(){this.ctx=null,this.master=null,this.enabled=!0,this.ambientNodes=[],this.ambientTimers=[]}ensure(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.22,this.master.connect(this.ctx.destination))}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?.22:0,this.ctx.currentTime,.05)}tone(t=440,e=.2,n="sine",i=.18,r=0){if(!this.enabled)return;this.ensure();const o=this.ctx.currentTime+r,a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(t,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.018),c.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(c).connect(this.master),a.start(o),a.stop(o+e+.03)}jade(){this.tone(740,.55,"sine",.14),this.tone(1120,.4,"sine",.07,.05),this.tone(380,.7,"triangle",.06,.02)}click(){this.tone(280,.1,"triangle",.08)}error(){this.tone(120,.22,"sawtooth",.06)}daily(t=""){t.includes("pig")?(this.tone(118,.16,"triangle",.11),this.tone(94,.13,"triangle",.07,.12)):t.includes("tree")||t.includes("fruit")?(this.tone(340,.12,"triangle",.07),this.tone(510,.16,"sine",.045,.08)):t.includes("flowers")?(this.tone(610,.16,"sine",.055),this.tone(760,.13,"sine",.035,.07)):(this.tone(205,.1,"triangle",.065),this.tone(268,.12,"triangle",.04,.06))}success(){[392,523,659,784].forEach((t,e)=>this.tone(t,.65,"sine",.09,e*.08))}water(){if(!this.enabled)return;this.ensure(),this.stopAmbient();const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0;for(let c=0;c<t;c+=1){const l=Math.random()*2-1;i=i*.985+l*.015,n[c]=i*.55}const r=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.buffer=e,r.loop=!0,o.type="lowpass",o.frequency.value=620,a.gain.value=.16,r.connect(o).connect(a).connect(this.master),r.start(),this.ambientNodes.push(r,a)}settlement(){this.water();const t=()=>{if(!this.enabled||!this.ctx)return;const n=1040+Math.random()*170;this.tone(n,.1,"sine",.045),this.tone(n*1.23,.14,"sine",.026,.11),this.ambientTimers.push(setTimeout(t,7e3+Math.random()*9e3))},e=()=>{if(!this.enabled||!this.ctx)return;const i=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.055),this.ctx.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l+=1)r[l]=(Math.random()*2-1)*(1-l/r.length);const o=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),c=this.ctx.createGain();o.buffer=i,a.type="bandpass",a.frequency.value=1350,c.gain.value=.026,o.connect(a).connect(c).connect(this.master),o.start(),this.ambientTimers.push(setTimeout(e,3e3+Math.random()*5200))};this.ambientTimers.push(setTimeout(t,1200+Math.random()*2200)),this.ambientTimers.push(setTimeout(e,1700+Math.random()*1800))}drone(t=0){if(!this.enabled)return;this.ensure(),this.stopAmbient();const e=[98,110,123,92][t]||98;[e,e*1.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type=i?"sine":"triangle",r.frequency.value=n,o.gain.value=i?.035:.05,r.connect(o).connect(this.master),r.start(),this.ambientNodes.push(r,o)})}stopAmbient(){for(const t of this.ambientTimers)clearTimeout(t);this.ambientTimers=[];for(const t of this.ambientNodes){try{t.stop&&t.stop()}catch{}try{t.disconnect()}catch{}}this.ambientNodes=[]}}const Vs=Object.freeze({state:"awaiting-approved-asset",sourceUrl:"https://bzdt.tianditu.gov.cn/",catalogHint:"中国地图 1:4800万 64开 分省设色 有邻国 线划二",approvalNo:null,assetUrl:null,assetSha256:null,reviewRecord:null});function S0(s=Vs){return!!(s.assetUrl&&s.approvalNo&&s.assetSha256&&s.reviewRecord)}const pc="huaxia-artifact-journey-v1";class w0{constructor(){this.state={quest:0,boat:!1,boatEver:!1,done:!1,discoveries:[]},this.near=null,this.queue=[],this.recentConversation=null,this.mapTarget=null,this.audio=new M0,this.ui={timeline:document.querySelector("#timeline-screen"),map:document.querySelector("#map-screen"),world:document.querySelector("#world-screen"),ending:document.querySelector("#ending-screen"),questCard:document.querySelector("#quest-card"),questToggle:document.querySelector("#quest-toggle"),questCount:document.querySelector("#quest-count"),questTitle:document.querySelector("#quest-title"),questGoal:document.querySelector("#quest-goal"),questCopy:document.querySelector("#quest-copy"),questMemory:document.querySelector("#quest-memory"),memoryRoute:document.querySelector("#memory-route"),mapObjective:document.querySelector("#map-objective"),interaction:document.querySelector("#interaction"),inName:document.querySelector("#interaction-name"),action:document.querySelector("#interaction-action"),dialogue:document.querySelector("#dialogue"),speaker:document.querySelector("#dialogue-speaker"),text:document.querySelector("#dialogue-text"),toast:document.querySelector("#toast"),worldMap:document.querySelector("#world-map"),mapCanvas:document.querySelector("#mini-map-canvas"),lampStatus:document.querySelector("#lamp-status"),lampCard:document.querySelector("#lamp-card"),direction:document.querySelector("#camera-direction"),viewToggle:document.querySelector("#interior-toggle"),journal:document.querySelector("#journal"),journalCount:document.querySelector("#journal-count"),journalList:document.querySelector("#journal-list"),taskPanel:document.querySelector("#task-panel"),taskKicker:document.querySelector("#task-kicker"),taskTitle:document.querySelector("#task-title"),taskIntro:document.querySelector("#task-intro"),taskActions:document.querySelector("#task-actions"),taskFeedback:document.querySelector("#task-feedback"),taskCancel:document.querySelector("#task-cancel"),mapBase:document.querySelector("#official-map-base"),mapReview:document.querySelector("#map-review-copy"),mapApproval:document.querySelector("#map-approval")},this.world=new y0(document.querySelector("#world"),{onNearChange:t=>this.setNear(t),onPosition:t=>this.updateDot(t),onMapReady:t=>{this.mapData={...this.mapData,...t},t.target&&(this.mapTarget=t.target),this.drawMiniMap()},onBlocked:t=>this.toast(t),onMoment:t=>this.toast(t),onDirection:t=>this.ui.direction.textContent=t,onInteriorChange:t=>{this.ui.viewToggle.classList.toggle("is-active",t),this.ui.viewToggle.textContent=t?"屋内视角 · 开":"屋内视角"},onBoatChange:t=>{this.state.boat=t,this.save(),t||(this.ui.interaction.classList.add("is-hidden"),this.toast("独木舟已经靠岸。"))}}),this.bind(),this.load(),this.normalizeJourney(),this.refreshMap()}bind(){document.querySelector(".era-active").addEventListener("click",()=>{this.audio.click(),this.show("map")}),document.querySelector("[data-back]").addEventListener("click",()=>this.show("timeline")),document.querySelector("#liangzhu-marker").addEventListener("click",()=>this.startWorld()),document.querySelector("#return-map").addEventListener("click",()=>this.show("map")),document.querySelector("#map-toggle").addEventListener("click",()=>this.ui.worldMap.classList.remove("is-hidden")),document.querySelector("#map-close").addEventListener("click",()=>this.ui.worldMap.classList.add("is-hidden")),document.querySelector("#journal-toggle").addEventListener("click",()=>{this.audio.click(),this.renderJournal(),this.ui.journal.classList.remove("is-hidden")}),document.querySelector("#journal-close").addEventListener("click",()=>this.ui.journal.classList.add("is-hidden")),document.querySelector("#journey-reset").addEventListener("click",()=>this.resetJourney()),this.ui.questToggle.addEventListener("click",()=>{this.audio.click();const t=this.ui.questCard.classList.toggle("is-expanded");this.ui.questToggle.textContent=t?"收起任务":"展开任务",this.ui.questToggle.setAttribute("aria-expanded",String(t))}),document.querySelector("#camera-turn").addEventListener("click",()=>{this.audio.click(),this.world.turnCamera()}),this.ui.viewToggle.addEventListener("click",()=>{this.audio.click(),this.world.toggleInteriorView()}),this.ui.action.addEventListener("click",()=>this.activate()),this.ui.taskCancel.addEventListener("click",()=>this.cancelTask()),document.addEventListener("pointerup",()=>{this.ui.dialogue.classList.contains("is-hidden")||this.closeDialogue()}),addEventListener("keydown",t=>{(t.key==="e"||t.key==="Enter")&&!this.ui.interaction.classList.contains("is-hidden")&&this.activate(),(t.key===" "||t.key==="Enter"||t.key==="Escape")&&!this.ui.dialogue.classList.contains("is-hidden")&&(t.preventDefault(),this.closeDialogue())})}show(t){["timeline","map","world","ending"].forEach(e=>this.ui[e].classList.toggle("is-hidden",e!==t)),t!=="world"&&(this.ui.worldMap.classList.add("is-hidden"),this.ui.journal.classList.add("is-hidden"),this.audio.stopAmbient()),t==="map"&&this.refreshMap()}normalizeJourney(){Array.isArray(this.state.discoveries)||(this.state.discoveries=[]);const t=Number(this.state.quest);return Number.isInteger(t)&&t>=0&&t<_n.length?!1:(this.state.quest=0,this.state.boat=!1,this.state.boatEver=!1,this.save(),!0)}resetJourney(){confirm("要从玉料山重新开始玉琮王的旅程吗？当前任务进度与见闻簿将被清除。")&&(this.state={quest:0,boat:!1,boatEver:!1,done:!1,discoveries:[]},this.activeTask=null,this.recentConversation=null,this.ui.taskPanel.classList.add("is-hidden"),this.ui.dialogue.classList.add("is-hidden"),this.save(),this.refreshMap(),this.world.build(),this.startWorld())}startWorld(){const t=this.normalizeJourney();if(this.show("world"),this.audio.settlement(),this.world.started||this.world.build(),this.state.boat=!1,this.world.setBoat(!1),this.updateQuest(),this.renderJournal(),t&&this.toast("上一轮旅程已结束；现在从玉料的山重新开始。"),this.state.quest===0)this.say([["玉琮王","我忘了自己的来时路。你可以自由探索这座城；若想替我找回记忆，就从西边的玉矿山开始。"]]);else{const e=_n[this.state.quest];this.toast(`继续记忆：${e.title}。${e.hint}`)}}updateQuest(){const t=_n[this.state.quest];t&&(this.ui.questCount.textContent=`${String(this.state.quest+1).padStart(2,"0")} / 07`,this.ui.questTitle.textContent=t.title,this.ui.questGoal.textContent=`目标：${t.target} · ${t.hint}`,this.ui.questCopy.textContent=t.copy,this.ui.questMemory.textContent=t.memory,this.ui.mapObjective.textContent=`当前目标：${t.target}`,[...this.ui.memoryRoute.children].forEach((e,n)=>e.classList.toggle("is-current",n===t.chapter)),this.world.setQuest(t.id),this.drawMiniMap())}setNear(t){const e=t?.id!==this.near?.id;if(this.near=t,e&&(this.recentConversation=null),!t||!this.ui.dialogue.classList.contains("is-hidden")||!this.ui.taskPanel.classList.contains("is-hidden")||this.recentConversation===t.id){this.ui.interaction.classList.add("is-hidden");return}this.ui.inName.textContent=t.name;const n=_n[this.state.quest],i=t.id===n?.id;this.ui.action.textContent=t.kind==="boat"?this.state.boat?"靠岸中":i?Fs[n.id].action:"登船":t.kind==="home"||t.kind==="task"||t.kind==="activity"?t.action:i?Fs[n.id].action:t.kind==="quest"?"交谈":"听他说说",this.ui.interaction.classList.remove("is-hidden")}recordDiscovery(t){const e=t?.tree?"tree-fruit":t?.id;return e?this.state.discoveries.includes(e)?!1:(this.state.discoveries.push(e),this.save(),this.renderJournal(),!0):!1}journalEntry(t){return t==="tree-fruit"?{name:"树荫下的栎树",copy:"摇动枝叶后，果实落进湿草。树荫、果实和木材都是湿地聚落的日常资源。"}:fc.find(e=>e.id===t)||this.world.interactables.find(e=>e.userData.id===t)?.userData}renderJournal(){const t=this.state.discoveries.map(e=>({id:e,...this.journalEntry(e)})).filter(e=>e.name&&e.copy);if(this.ui.journalCount.textContent=t.length,this.ui.journalList.replaceChildren(),!t.length){const e=document.createElement("li");e.className="journal-empty",e.textContent="尚未记录。先去看看一棵树、一处水台，或一间高脚屋。",this.ui.journalList.append(e);return}for(const e of t.slice().reverse()){const n=document.createElement("li"),i=document.createElement("b"),r=document.createElement("span");i.textContent=e.name,r.textContent=e.copy,n.append(i,r),this.ui.journalList.append(n)}}talk(t,e,n){this.recentConversation=t.id,this.say(e,n)}startTask(t,e){this.activeTask={id:t.id,object:e};const n=Fs[t.id];if(this.world.playMoment(t.id),n.mode==="sequence"){this.world.beginTaskStations(t.id,n.options),this.toast("任务开始：跟着浮光找到场景里的第一件工具。完成一步，下一件才会出现。");return}this.ui.taskKicker.textContent=n.kicker,this.ui.taskTitle.textContent=n.title,this.ui.taskIntro.textContent=n.intro,this.ui.taskFeedback.textContent="",this.ui.taskActions.replaceChildren(),this.ui.taskPanel.classList.remove("is-hidden"),t.id==="quarry"?this.renderMaterialTask(t,n):this.renderSelectTask(t,n)}taskButton(t){const e=document.createElement("button");return e.type="button",e.className="task-choice",e.textContent=t,this.ui.taskActions.append(e),e}renderSequenceTask(t,e){let n=0;const i={boat:["◒","⌇","➜"],transport:["⌁","◈","▰"],workshop:["╱","◌","⊙"],tomb:["◇","▱","⚑"],flood:["⌂","◉","✦"]}[t.id]||["①","②","③"],r=e.options.map((o,a)=>{const c=this.taskButton(o.label);return c.classList.add("task-gesture"),c.innerHTML=`<span class="task-glyph" aria-hidden="true">${i[a]}</span><span class="task-step">${o.label}</span><i>步骤 ${a+1}</i>`,c.addEventListener("click",()=>{if(!(!this.activeTask||this.activeTask.id!==t.id)){if(a!==n){this.audio.error(),n=0,r.forEach(l=>{l.disabled=!1,l.classList.remove("is-done")}),this.ui.taskFeedback.textContent="顺序不对，工具回到原位；看看场景里的动作提示后再试。";return}this.audio.click(),c.disabled=!0,c.classList.add("is-done"),n++,n===e.options.length?this.solveTask(t,e):this.ui.taskFeedback.textContent=`动作完成。接着执行第 ${n+1} 步。`}}),c});this.ui.taskFeedback.textContent="按场景里的工作顺序，依次点选手边的工具与动作。"}renderSelectTask(t,e){const n=e.options.filter(r=>r.correct).length,i=new Set;e.options.forEach((r,o)=>{const a=this.taskButton(r.label);a.addEventListener("click",()=>{if(!(!this.activeTask||this.activeTask.id!==t.id||a.disabled)){if(!r.correct){this.audio.error(),a.classList.add("is-wrong"),a.disabled=!0,this.ui.taskFeedback.textContent="这不是要找的东西。看看材质和它将要承担的用途。";return}this.audio.jade(),i.add(o),a.disabled=!0,a.classList.add("is-done"),i.size===n?this.solveTask(t,e):this.ui.taskFeedback.textContent="找对了一件，再看看还有没有同样重要的物件。"}})}),this.ui.taskFeedback.textContent="仔细选择；选错不会扣进度。"}renderMaterialTask(t,e){const n=["jade-ore","loose-earth","layered-slate"],i=["A","B","C"],r=document.createElement("div");r.className="material-choices",e.options.forEach((o,a)=>{const c=document.createElement("button");c.type="button",c.className="material-choice",c.setAttribute("aria-label",`${i[a]}：${o.label}`),c.innerHTML=`<span class="voxel-stage" aria-hidden="true"><span class="voxel-cube ${n[a]}"><i class="voxel-face voxel-front"></i><i class="voxel-face voxel-right"></i><i class="voxel-face voxel-top"></i><i class="voxel-face voxel-back"></i><i class="voxel-face voxel-left"></i><i class="voxel-face voxel-bottom"></i></span></span><b>${i[a]}</b>`,c.addEventListener("click",()=>{if(!(!this.activeTask||this.activeTask.id!==t.id||c.disabled)){if(!o.correct){this.audio.error(),c.disabled=!0,c.classList.add("is-wrong"),this.ui.taskFeedback.textContent="这块质地松散或层裂，磨制时会破。再观察石皮下的光泽与纹理。";return}this.audio.jade(),c.disabled=!0,c.classList.add("is-done"),this.solveTask(t,e)}}),r.append(c)}),this.ui.taskActions.append(r),this.ui.taskFeedback.textContent="请选择适合制作玉琮的玉料。"}solveTask(t,e){if(!this.activeTask||this.activeTask.id!==t.id)return;this.audio.success(),this.world.clearTaskStations(),this.activeTask=null,this.ui.taskPanel.classList.add("is-hidden");const n=this.completeQuest(t.id);if(this.recentConversation=null,n&&!this.state.done){const i=t.fact?` 考古线索：${t.fact}`:"";this.say([[t.speaker,`${e.success} ${t.line}${i}`]])}}cancelTask(){this.activeTask&&(this.world.clearTaskStations(),this.activeTask=null,this.ui.taskPanel.classList.add("is-hidden"),this.ui.taskFeedback.textContent="",this.setNear(this.near))}activate(){const t=this.near;if(!t)return;if(this.ui.interaction.classList.add("is-hidden"),t.kind==="task"){const n=Fs[t.taskId];if(!this.activeTask||this.activeTask.id!==t.taskId||!n)return;const i=this.world.completeTaskStation(t.taskId,t.step);if(i==="wrong"){this.audio.error(),this.toast("这一步还太早。看看场景里哪件物品应当先被处理。"),this.setNear(t);return}this.audio.click(),i?this.solveTask({id:t.taskId},n):this.toast("操作完成。场景中的其余物件仍可自由查看，下一步已经亮起。");return}if(t.kind==="home"){this.world.routeIntoHouse(t.home);return}if(this.activeTask)return;let e=_n[this.state.quest];if(!e){this.normalizeJourney(),this.updateQuest(),e=_n[this.state.quest],this.toast("记忆进度已恢复到第一段，请重新与采玉人交谈。"),this.setNear(this.near);return}if(t.kind==="activity"){const n=this.recordDiscovery(t);this.audio.daily(t.id),this.toast(`${this.world.doActivity(t.id)}${n?" 见闻簿 +1":""}`);return}if(t.kind==="boat"&&e.id==="boat"){this.startTask(e,t);return}if(t.kind==="boat"){if(this.state.boat){this.toast("靠近码头会自动下船，不需要再点借船。");return}if(this.state.quest<2){this.toast("先从采玉人那里完成辨玉任务，再来找船娘。");return}this.state.boat=!0,this.state.boatEver=!0,this.world.setBoat(!0),this.toast("你坐上独木舟。沿河行进，靠近码头会自动下船。"),this.save();return}if(t.kind==="side"){const n=fc.find(i=>i.id===t.id);this.recordDiscovery(t),this.talk(t,[[n.name,n.copy]]);return}if(t.id!==e.id){this.talk(t,[[t.name,t.copy]]);return}if(e.id==="transport"&&!this.state.boatEver){this.toast("河道挡住了去路。先在西南码头借船并登船。");return}this.startTask(e,t)}completeQuest(t=null){const e=_n[this.state.quest];return!e||this.completing||t&&e.id!==t?!1:(this.completing=!0,this.state.quest++,this.state.quest>=_n.length?(this.state.done=!0,this.save(),this.world.collapse(),this.refreshMap(),this.show("ending"),this.completing=!1,!0):(this.updateQuest(),this.save(),this.toast(`任务完成：${e.title}。下一步：${_n[this.state.quest].target}`),this.completing=!1,!0))}say(t,e=null){const n=t.at(-1);n&&(this.after=e,this.ui.speaker.textContent=n[0],this.ui.text.textContent=n[1],this.ui.dialogue.classList.remove("is-hidden"))}closeDialogue(){if(this.ui.dialogue.classList.contains("is-hidden"))return;this.ui.dialogue.classList.add("is-hidden");const t=this.after;this.after=null,t?t():this.setNear(this.near)}updateDot(t){this.lastPosition={x:t.x,z:t.z},this.drawMiniMap()}drawMiniMap(){const t=this.ui.mapCanvas,e=this.mapData,n=this.lastPosition;if(!t||!e)return;const i=t.getContext("2d"),r=t.width,o=t.height,a=-64,c=64,l=-40,h=40,u=x=>(x-a)/(c-a)*r,d=x=>(x-l)/(h-l)*o,f=(x,g,p)=>{i.beginPath(),x.forEach(([S,b],y)=>y?i.lineTo(u(S),d(b)):i.moveTo(u(S),d(b))),i.closePath(),i.fillStyle=g,i.fill(),p&&(i.strokeStyle=p,i.stroke())};i.clearRect(0,0,r,o),i.fillStyle="#215a70",i.fillRect(0,0,r,o),f(e.land,"#6f8e67","#c2aa76"),e.water.forEach(x=>f(x,"#4d9eb5")),i.fillStyle="#c7c3a2",e.docks.forEach(x=>i.fillRect(u(x.x)-1.5,d(x.z)-1.5,3,3));const m=e.target||this.mapTarget;if(m){const x=6+Math.sin(performance.now()/230)*1.5,g=u(m.x),p=d(m.z);i.strokeStyle="#fff0a5",i.lineWidth=2.5,i.beginPath(),i.arc(g,p,x,0,Math.PI*2),i.stroke(),i.fillStyle="#ef783d",i.beginPath(),i.arc(g,p,5,0,Math.PI*2),i.fill(),i.fillStyle="#172e26",i.font="bold 14px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("!",g,p+.4),i.fillStyle="#fff0bd",i.font="bold 10px sans-serif",i.fillText("当前任务",g,p-11)}n&&(i.beginPath(),i.arc(u(n.x),d(n.z),4.3,0,Math.PI*2),i.fillStyle="#fff3a8",i.fill(),i.strokeStyle="#274438",i.lineWidth=1.5,i.stroke())}toast(t){this.ui.toast.textContent=t,this.ui.toast.classList.remove("is-hidden"),clearTimeout(this.timer),this.timer=setTimeout(()=>this.ui.toast.classList.add("is-hidden"),2600)}refreshMap(){this.ui.lampStatus.textContent=this.state.done?"西汉 · 已解锁（下一世界）":"西汉 · 待解锁",this.ui.lampCard.classList.toggle("unlocked",this.state.done);const t=S0();this.ui.mapBase.classList.toggle("is-approved",t),this.ui.mapBase.style.backgroundImage=t?`url(${Vs.assetUrl})`:"",this.ui.mapReview.textContent=t?"正式底图已加载；文物标记以独立图层叠加。":"尚未载入带审图号且已完成公开使用审核的正式底图。",this.ui.mapApproval.textContent=t?`审图号：${Vs.approvalNo}`:`待补：${Vs.catalogHint}`}save(){localStorage.setItem(pc,JSON.stringify(this.state))}load(){try{this.state={...this.state,...JSON.parse(localStorage.getItem(pc)||"{}")}}catch{}this.state.boat=!1}}window.addEventListener("DOMContentLoaded",()=>{window.game=new w0});
