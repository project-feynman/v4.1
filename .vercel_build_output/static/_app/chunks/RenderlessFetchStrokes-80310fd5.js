var ge=Object.defineProperty;var J=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var K=(t,s,e)=>s in t?ge(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,z=(t,s)=>{for(var e in s||(s={}))pe.call(s,e)&&K(t,e,s[e]);if(J)for(var e of J(s))be.call(s,e)&&K(t,e,s[e]);return t};import{S as N,i as j,s as q,e as D,t as ke,c as P,a as A,g as ye,d as w,b as S,M as R,f as T,N as F,a1 as W,O as B,k as H,n as M,W as X,a2 as we,F as G,A as Se,X as De,a3 as O,I as Y,J as Z,K as x,L as $,x as ee,u as te,P as se,Q as I,a4 as Pe,a5 as oe,a6 as Ae,a7 as Re,a8 as Te,a9 as Fe}from"./vendor-d35e056c.js";import{d as ne,r as Ie,a as Le}from"./canvas-74f91cf9.js";import{a as Ue,c as ze}from"./navigation-e96c681c.js";/* empty css                                                  */function ae(t){let s,e,o,n;return{c(){s=D("span"),e=ke("play_circle"),this.h()},l(a){s=P(a,"SPAN",{class:!0,style:!0});var u=A(s);e=ye(u,"play_circle"),u.forEach(w),this.h()},h(){S(s,"class","material-icons overlay-center svelte-12w6n3q"),R(s,"color","white"),R(s,"font-size","6rem"),R(s,"width","120px"),R(s,"height","120px"),R(s,"z-index","5")},m(a,u){T(a,s,u),F(s,e),o||(n=W(s,"click",t[10]),o=!0)},p:B,d(a){a&&w(s),o=!1,n()}}}function We(t){let s,e,o,n,a,u,k,h,p,c,d,f,_,y,l=!t[8]&&t[6]===!1&&t[0]&&ae(t);return{c(){l&&l.c(),s=H(),e=D("div"),o=D("canvas"),a=H(),u=D("canvas"),h=H(),p=D("div"),c=D("audio"),this.h()},l(i){l&&l.l(i),s=M(i),e=P(i,"DIV",{style:!0});var g=A(e);o=P(g,"CANVAS",{style:!0});var C=A(o);C.forEach(w),a=M(g),u=P(g,"CANVAS",{style:!0});var L=A(u);L.forEach(w),g.forEach(w),h=M(i),p=P(i,"DIV",{});var U=A(p);c=P(U,"AUDIO",{src:!0,style:!0});var v=A(c);v.forEach(w),U.forEach(w),this.h()},h(){S(o,"style",n=`
      position: absolute; 
      z-index: 1; 
      margin-top: 0; 
      margin-left: 0; 
      width: ${t[5]}px; 
      height: ${t[4]}px; 
      background-color: transparent`),S(u,"style",k=`
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      display: block;
      width: ${t[5]}px; 
      height: ${t[4]}px;
      background-color: rgb(46, 49, 49);`),R(e,"position","relative"),X(c.src,d=t[1])||S(c,"src",d),c.controls=!0,S(c,"style",f=`width: ${t[5]}px; height: 40px; position: absolute; bottom: 0; top: auto;`)},m(i,g){l&&l.m(i,g),T(i,s,g),T(i,e,g),F(e,o),t[17](o),F(e,a),F(e,u),t[18](u),T(i,h,g),T(i,p,g),F(p,c),t[19](c),_||(y=[W(o,"click",t[9]),W(c,"play",t[11]),W(c,"seeking",t[12])],_=!0)},p(i,[g]){!i[8]&&i[6]===!1&&i[0]?l?l.p(i,g):(l=ae(i),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null),g&48&&n!==(n=`
      position: absolute; 
      z-index: 1; 
      margin-top: 0; 
      margin-left: 0; 
      width: ${i[5]}px; 
      height: ${i[4]}px; 
      background-color: transparent`)&&S(o,"style",n),g&48&&k!==(k=`
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      display: block;
      width: ${i[5]}px; 
      height: ${i[4]}px;
      background-color: rgb(46, 49, 49);`)&&S(u,"style",k),g&2&&!X(c.src,d=i[1])&&S(c,"src",d),g&32&&f!==(f=`width: ${i[5]}px; height: 40px; position: absolute; bottom: 0; top: auto;`)&&S(c,"style",f)},i:B,o:B,d(i){l&&l.d(i),i&&w(s),i&&w(e),t[17](null),t[18](null),i&&w(h),i&&w(p),t[19](null),_=!1,we(y)}}}let re=2;function Ce(t){return(t.endTime-t.startTime)/t.points.length}function ve(t,s,e){let o,n;G(t,Ue,r=>e(4,o=r)),G(t,ze,r=>e(5,n=r));let{strokesArray:a}=s,{audioDownloadURL:u}=s,{backgroundImageDownloadURL:k}=s,h=!1,p,c,d,f,_,y,l,i;Se(()=>{e(15,_=d.getContext("2d")),e(16,y=f.getContext("2d")),e(7,l.playbackRate=re,l),e(7,l.onended=r=>e(6,h=!1),l),e(7,l.onpause=r=>e(6,h=!1),l)}),De(()=>{i&&clearTimeout(i)});function g(){!i&&h===!1&&a?L():h?l.pause():l.play()}function C(){for(const m of a)ne(m,null,_,d);const r=[];for(let m=0;m<a.length;m++)for(let b=1;b<a[m].points.length;b++){const V={strokeIndex:m,pointIndex:b};r.push(z({startTime:U(V)},V))}e(14,p=r.sort((m,b)=>m.startTime-b.startTime))}function L(){l.play()}function U({strokeIndex:r,pointIndex:m}){const b=a[r];return b.startTime+(m-1)*Ce(b)}function v(){e(6,h=!0),c=0,_.clearRect(0,0,n,o),Q()}function Q(){if(!!l&&(E(),c<p.length)){const r=p[c],m=1e3*(r.startTime-l.currentTime);e(8,i=setTimeout(Q,m/re))}}function E(){if(!l)return;const r=p[c];(!r||r.startTime>l.currentTime)&&(_.clearRect(0,0,d.width,d.height),c=0),ce()}function ce(){const{currentTime:r}=l;for(let m=c;m<p.length;m++){const b=p[m];if(b.startTime>r)break;ue(b),c+=1}}function ue({strokeIndex:r,pointIndex:m}){const b=a[r],_e=b.lineWidth*(d.scrollWidth/1e3);Le(b.points,m,b.isErasing,_,b.color,_e,d)}function fe(){return new Promise(async r=>{if(i)c=0,E();else for(const m of a)ne(m,null,_,d);r()})}function de(r){O[r?"unshift":"push"](()=>{d=r,e(2,d),e(15,_),e(5,n),e(4,o),e(0,a)})}function he(r){O[r?"unshift":"push"](()=>{f=r,e(3,f),e(15,_),e(5,n),e(4,o),e(0,a)})}function me(r){O[r?"unshift":"push"](()=>{l=r,e(7,l)})}return t.$$set=r=>{"strokesArray"in r&&e(0,a=r.strokesArray),"audioDownloadURL"in r&&e(1,u=r.audioDownloadURL),"backgroundImageDownloadURL"in r&&e(13,k=r.backgroundImageDownloadURL)},t.$$.update=()=>{t.$$.dirty&32817&&_&&(e(2,d.width=n,d),e(2,d.height=o,d),e(3,f.width=n,f),e(3,f.height=o,f),a&&fe()),t.$$.dirty&49153&&_&&a&&!p&&C(),t.$$.dirty&73740&&y&&(y.clearRect(0,0,f.scrollWidth,f.scrollHeight),Ie(k,d,y))},[a,u,d,f,o,n,h,l,i,g,L,v,E,k,p,_,y,de,he,me]}class Xe extends N{constructor(s){super();j(this,s,ve,We,q,{strokesArray:0,audioDownloadURL:1,backgroundImageDownloadURL:13})}}const Ee=t=>({boardDoc:t&1}),ie=t=>({boardDoc:t[0]});function Ve(t){let s;const e=t[3].default,o=Y(e,t,t[2],ie);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,a){o&&o.m(n,a),s=!0},p(n,[a]){o&&o.p&&(!s||a&5)&&Z(o,e,n,n[2],s?$(e,n[2],a,Ee):x(n[2]),ie)},i(n){s||(ee(o,n),s=!0)},o(n){te(o,n),s=!1},d(n){o&&o.d(n)}}}function Ne(t,s,e){let{$$slots:o={},$$scope:n}=s,{dbPath:a}=s,u;const k=se(I(),a);return Pe(k,h=>{e(0,u=z({id:h.id},h.data()))}),t.$$set=h=>{"dbPath"in h&&e(1,a=h.dbPath),"$$scope"in h&&e(2,n=h.$$scope)},[u,a,n,o]}class Ge extends N{constructor(s){super();j(this,s,Ne,Ve,q,{dbPath:1})}}async function je({boardPath:t}){return new Promise(async s=>{const e=[];let o=oe(I()),n=0;for(const a of strokesArray){n>=500&&(e.push(o.commit()),o=oe(I()),n=0);const u=se(I(),`${t}/strokes/${a.id}`);o.delete(u),n+=1}e.push(o.commit()),await Promise.all(e),strokesArray=[],s()})}const qe=t=>({strokesArray:t&2,deleteAllStrokesFromDb:t&1}),le=t=>({fetchStrokes:t[2],strokesArray:t[1],deleteAllStrokesFromDb:t[6]});function Be(t){let s;const e=t[5].default,o=Y(e,t,t[4],le);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,a){o&&o.m(n,a),s=!0},p(n,[a]){o&&o.p&&(!s||a&19)&&Z(o,e,n,n[4],s?$(e,n[4],a,qe):x(n[4]),le)},i(n){s||(ee(o,n),s=!0)},o(n){te(o,n),s=!1},d(n){o&&o.d(n)}}}function He(t,s,e){let{$$slots:o={},$$scope:n}=s,{dbPath:a}=s,{autoFetchStrokes:u=!1}=s,k;const h=Ae(I(),`${a}/strokes`),p=Re(h,Te("timestamp"));u&&c();async function c(){const f=await Fe(p),_=[];for(const y of f.docs)_.push(z({id:y.id},y.data()));e(1,k=_)}const d=()=>je({boardPath:a});return t.$$set=f=>{"dbPath"in f&&e(0,a=f.dbPath),"autoFetchStrokes"in f&&e(3,u=f.autoFetchStrokes),"$$scope"in f&&e(4,n=f.$$scope)},[a,k,c,u,n,o,d]}class Ye extends N{constructor(s){super();j(this,s,He,Be,q,{dbPath:0,autoFetchStrokes:3})}}export{Xe as D,Ge as R,Ye as a};