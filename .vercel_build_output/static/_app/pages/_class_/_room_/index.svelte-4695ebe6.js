var Ee=Object.defineProperty;var de=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var pe=(s,e,r)=>e in s?Ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,me=(s,e)=>{for(var r in e||(e={}))Qe.call(e,r)&&pe(s,r,e[r]);if(de)for(var r of de(e))qe.call(e,r)&&pe(s,r,e[r]);return s};import{S as Oe,i as Ve,s as We,e as L,j as N,k as q,t as y,c as j,a as z,m as U,n as O,d as p,g as I,K as k,U as _e,f as h,o as A,L as B,_ as re,aC as Fe,aD as He,w as F,x as b,u as g,v as S,l as C,D as ee,A as Ke,N as te,O as X,W as Ge,r as H,Z as Je,ax as K,aE as Xe,aF as Ze,ag as Ye,ah as xe,aG as et,ak as tt,aj as ot,aH as $e,aI as he,aJ as rt,aK as st,aL as nt,X as lt,h as Z,aM as Y,b as V,a6 as x,$ as at,aN as it,M as se,a1 as ne,an as ut,a2 as ft,ao as ct,ap as dt}from"../../../chunks/vendor-17902641.js";import{R as pt,T as mt,a as _t,D as $t,B as ht}from"../../../chunks/TextAreaAutoResizing-bae243ec.js";import{f as bt}from"../../../chunks/database-902d744c.js";import{g as kt}from"../../../chunks/canvas-5b7b0e82.js";import{g as gt,r as be,k as oe,u as vt,c as wt,a as Dt}from"../../../chunks/store-74a31db2.js";import"../../../chunks/preload-helper-ec9aa979.js";import"../../../chunks/singletons-12a22614.js";function yt(s,e){let r=document.getElementById(e);return r==null||r.appendChild(s),{destroy(){s.remove()}}}function ke(s,e){let r=new IntersectionObserver(o=>{for(const t of o)if(t.isIntersecting){e(),r.unobserve(s);return}},{root:null,threshold:.2,rootMargin:"0px"});r.observe(s)}function ge(s,e,r){const o=s.slice();return o[35]=e[r],o}function ve(s){let e,r,o,t,n,l=[],a=new Map,i,u,d,f,c,w,D;r=new Ge({props:{disabled:E(s[1].name)&&s[1].askerUID&&s[6].uid!==s[1].askerUID,value:s[1].name,class:"room-title",style:`width: ${s[7]}px;`,$$slots:{helper:[At]},$$scope:{ctx:s}}}),r.$on("input",s[17]);let M=s[1].blackboards;const Q=$=>$[35];for(let $=0;$<M.length;$+=1){let m=ge(s,M,$),R=Q(m);a.set(R,l[$]=Ie(R,m))}return{c(){e=L("div"),N(r.$$.fragment),o=q(),t=L("div"),n=q();for(let $=0;$<l.length;$+=1)l[$].c();i=q(),u=L("div"),d=y("New blackboard"),this.h()},l($){e=j($,"DIV",{style:!0});var m=z(e);U(r.$$.fragment,m),o=O(m),t=j(m,"DIV",{style:!0}),z(t).forEach(p),n=O(m);for(let G=0;G<l.length;G+=1)l[G].l(m);i=O(m),u=j(m,"DIV",{style:!0});var R=z(u);d=I(R,"New blackboard"),R.forEach(p),m.forEach(p),this.h()},h(){k(t,"margin-bottom","20px"),k(u,"display","flex"),k(u,"justify-content","center"),k(u,"align-items","center"),k(u,"margin-top","40px"),k(u,"background-color","#2e3131"),k(u,"font-family","Roboto, sans-serif"),k(u,"text-transform","uppercase"),k(u,"height","35px"),k(e,"padding","16px"),_e(e,"question",E(s[1].name))},m($,m){h($,e,m),A(r,e,null),B(e,o),B(e,t),B(e,n);for(let R=0;R<l.length;R+=1)l[R].m(e,null);B(e,i),B(e,u),B(u,d),c=!0,w||(D=re(f=yt.call(null,e,"main-content")),w=!0)},p($,m){const R={};m[0]&66&&(R.disabled=E($[1].name)&&$[1].askerUID&&$[6].uid!==$[1].askerUID),m[0]&2&&(R.value=$[1].name),m[0]&128&&(R.style=`width: ${$[7]}px;`),m[0]&62|m[1]&65536&&(R.$$scope={dirty:m,ctx:$}),r.$set(R),m[0]&30659|m[1]&63360&&(M=$[1].blackboards,H(),l=Fe(l,m,Q,1,$,M,a,e,He,Ie,i,ge),F()),m[0]&2&&_e(e,"question",E($[1].name))},i($){if(!c){b(r.$$.fragment,$);for(let m=0;m<M.length;m+=1)b(l[m]);c=!0}},o($){g(r.$$.fragment,$);for(let m=0;m<l.length;m+=1)g(l[m]);c=!1},d($){$&&p(e),S(r);for(let m=0;m<l.length;m+=1)l[m].d();w=!1,D()}}}function It(s){let e,r=s[1].askerName+"",o,t,n=oe(s[1].dateAsked)+"",l;return{c(){e=y("Marked as question by "),o=y(r),t=y(" on "),l=y(n)},l(a){e=I(a,"Marked as question by "),o=I(a,r),t=I(a," on "),l=I(a,n)},m(a,i){h(a,e,i),h(a,o,i),h(a,t,i),h(a,l,i)},p(a,i){i[0]&2&&r!==(r=a[1].askerName+"")&&Z(o,r),i[0]&2&&n!==(n=oe(a[1].dateAsked)+"")&&Z(l,n)},d(a){a&&p(e),a&&p(o),a&&p(t),a&&p(l)}}}function Rt(s){let e,r,o;return{c(){e=y("Resolving this question in "),r=y(s[5]),o=y(", cancel by re-adding ?")},l(t){e=I(t,"Resolving this question in "),r=I(t,s[5]),o=I(t,", cancel by re-adding ?")},m(t,n){h(t,e,n),h(t,r,n),h(t,o,n)},p(t,n){n[0]&32&&Z(r,t[5])},d(t){t&&p(e),t&&p(r),t&&p(o)}}}function Nt(s){let e,r,o;return{c(){e=y("Pinging server members in "),r=y(s[3]),o=y(", cancel by backtracking the ?")},l(t){e=I(t,"Pinging server members in "),r=I(t,s[3]),o=I(t,", cancel by backtracking the ?")},m(t,n){h(t,e,n),h(t,r,n),h(t,o,n)},p(t,n){n[0]&8&&Z(r,t[3])},d(t){t&&p(e),t&&p(r),t&&p(o)}}}function we(s){let e,r=oe(s[1].dateResolved)+"",o;return{c(){e=y(", resolved "),o=y(r)},l(t){e=I(t,", resolved "),o=I(t,r)},m(t,n){h(t,e,n),h(t,o,n)},p(t,n){n[0]&2&&r!==(r=oe(t[1].dateResolved)+"")&&Z(o,r)},d(t){t&&p(e),t&&p(o)}}}function Ut(s){let e,r;function o(a,i){if(a[2])return Nt;if(a[4])return Rt;if(a[1].askerName&&a[1].askerUID&&a[1].date)return It}let t=o(s),n=t&&t(s),l=s[1].dateResolved&&we(s);return{c(){n&&n.c(),e=q(),l&&l.c(),r=C()},l(a){n&&n.l(a),e=O(a),l&&l.l(a),r=C()},m(a,i){n&&n.m(a,i),h(a,e,i),l&&l.m(a,i),h(a,r,i)},p(a,i){t===(t=o(a))&&n?n.p(a,i):(n&&n.d(1),n=t&&t(a),n&&(n.c(),n.m(e.parentNode,e))),a[1].dateResolved?l?l.p(a,i):(l=we(a),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(a){n&&n.d(a),a&&p(e),l&&l.d(a),a&&p(r)}}}function At(s){let e,r;return e=new Je({props:{slot:"helper",persistent:!0,$$slots:{default:[Ut]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,t){A(e,o,t),r=!0},p(o,t){const n={};t[0]&62|t[1]&65536&&(n.$$scope={dirty:t,ctx:o}),e.$set(n)},i(o){r||(b(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){S(e,o)}}}function De(s){let e,r,o,t,n,l;function a(...f){return s[18](s[35],...f)}e=new mt({props:{value:s[38].description||""}}),e.$on("input",a);const i=[Ct,St],u=[];function d(f,c){return f[38].audioDownloadURL?0:1}return o=d(s),t=u[o]=i[o](s),{c(){N(e.$$.fragment),r=q(),t.c(),n=C()},l(f){U(e.$$.fragment,f),r=O(f),t.l(f),n=C()},m(f,c){A(e,f,c),h(f,r,c),u[o].m(f,c),h(f,n,c),l=!0},p(f,c){s=f;const w={};c[1]&128&&(w.value=s[38].description||""),e.$set(w);let D=o;o=d(s),o===D?u[o].p(s,c):(H(),g(u[D],1,1,()=>{u[D]=null}),F(),t=u[o],t?t.p(s,c):(t=u[o]=i[o](s),t.c()),b(t,1),t.m(n.parentNode,n))},i(f){l||(b(e.$$.fragment,f),b(t),l=!0)},o(f){g(e.$$.fragment,f),g(t),l=!1},d(f){S(e,f),f&&p(r),u[o].d(f),f&&p(n)}}}function St(s){let e,r,o,t,n,l,a;function i(...u){return s[23](s[35],...u)}return r=new _t({props:{$$slots:{default:[Et,({startRecording:u,stopRecording:d,currentTime:f})=>({44:u,45:d,46:f}),({startRecording:u,stopRecording:d,currentTime:f})=>[0,(u?8192:0)|(d?16384:0)|(f?32768:0)]]},$$scope:{ctx:s}}}),r.$on("record-end",i),{c(){e=L("div"),N(r.$$.fragment),this.h()},l(u){e=j(u,"DIV",{style:!0});var d=z(e);U(r.$$.fragment,d),d.forEach(p),this.h()},h(){V(e,"style",o=`width: ${s[7]}px; height: ${s[8]}px; position: relative`)},m(u,d){h(u,e,d),A(r,e,null),n=!0,l||(a=re(t=ke.call(null,e,s[40])),l=!0)},p(u,d){s=u;const f={};d[0]&513|d[1]&128e3&&(f.$$scope={dirty:d,ctx:s}),r.$set(f),(!n||d[0]&384&&o!==(o=`width: ${s[7]}px; height: ${s[8]}px; position: relative`))&&V(e,"style",o),t&&x(t.update)&&d[1]&512&&t.update.call(null,s[40])},i(u){n||(b(r.$$.fragment,u),n=!0)},o(u){g(r.$$.fragment,u),n=!1},d(u){u&&p(e),S(r),l=!1,a()}}}function Ct(s){let e,r,o,t,n,l,a;return r=new $t({props:{strokesArray:s[41],audioDownloadURL:s[38].audioDownloadURL,$$slots:{default:[qt]},$$scope:{ctx:s}}}),{c(){e=L("div"),N(r.$$.fragment),this.h()},l(i){e=j(i,"DIV",{style:!0});var u=z(e);U(r.$$.fragment,u),u.forEach(p),this.h()},h(){V(e,"style",o=`width: ${s[7]}px; height: ${s[8]+80}px; position: relative`)},m(i,u){h(i,e,u),A(r,e,null),n=!0,l||(a=re(t=ke.call(null,e,s[39])),l=!0)},p(i,u){const d={};u[1]&1024&&(d.strokesArray=i[41]),u[1]&128&&(d.audioDownloadURL=i[38].audioDownloadURL),u[0]&64|u[1]&65664&&(d.$$scope={dirty:u,ctx:i}),r.$set(d),(!n||u[0]&384&&o!==(o=`width: ${i[7]}px; height: ${i[8]+80}px; position: relative`))&&V(e,"style",o),t&&x(t.update)&&u[1]&256&&t.update.call(null,i[39])},i(i){n||(b(r.$$.fragment,i),n=!0)},o(i){g(r.$$.fragment,i),n=!1},d(i){i&&p(e),S(r),l=!1,a()}}}function Mt(s){let e,r,o;return r=new it({props:{class:"my-four-colors",style:"height: 32px; width: 32px;",indeterminate:!0,fourColor:!0}}),{c(){e=L("div"),N(r.$$.fragment),this.h()},l(t){e=j(t,"DIV",{style:!0});var n=z(e);U(r.$$.fragment,n),n.forEach(p),this.h()},h(){k(e,"display","flex"),k(e,"justify-content","center"),k(e,"margin-left","20px"),k(e,"margin-right","20px")},m(t,n){h(t,e,n),A(r,e,null),o=!0},p:se,i(t){o||(b(r.$$.fragment,t),o=!0)},o(t){g(r.$$.fragment,t),o=!1},d(t){t&&p(e),S(r)}}}function Pt(s){let e,r,o,t;return{c(){e=L("span"),r=y("stop_circle"),this.h()},l(n){e=j(n,"SPAN",{class:!0,style:!0});var l=z(e);r=I(l,"stop_circle"),l.forEach(p),this.h()},h(){V(e,"class","material-icons"),k(e,"font-size","2.5rem"),k(e,"color","cyan"),k(e,"margin-left","24px"),k(e,"margin-right","20px")},m(n,l){h(n,e,l),B(e,r),o||(t=ne(e,"click",function(){x(s[45])&&s[45].apply(this,arguments)}),o=!0)},p(n,l){s=n},i:se,o:se,d(n){n&&p(e),o=!1,t()}}}function Tt(s){let e,r,o,t,n,l,a,i,u,d,f={style:"left: 100px; top: 50px; width: 300px",$$slots:{default:[zt]},$$scope:{ctx:s}};return a=new ut({props:f}),s[21](a),{c(){e=L("span"),r=y("radio_button_checked"),o=q(),t=L("span"),n=y("more_horiz"),l=q(),N(a.$$.fragment),this.h()},l(c){e=j(c,"SPAN",{class:!0,style:!0});var w=z(e);r=I(w,"radio_button_checked"),w.forEach(p),o=O(c),t=j(c,"SPAN",{class:!0,style:!0});var D=z(t);n=I(D,"more_horiz"),D.forEach(p),l=O(c),U(a.$$.fragment,c),this.h()},h(){V(e,"class","material-icons"),k(e,"font-size","2.5rem"),k(e,"color","cyan"),k(e,"margin-left","24px"),k(e,"margin-right","20px"),V(t,"class","material-icons"),k(t,"margin-right","10px"),k(t,"color","white"),k(t,"font-size","2rem")},m(c,w){h(c,e,w),B(e,r),h(c,o,w),h(c,t,w),B(t,n),h(c,l,w),A(a,c,w),i=!0,u||(d=[ne(e,"click",function(){x(s[44])&&s[44].apply(this,arguments)}),ne(t,"click",s[20])],u=!0)},p(c,w){s=c;const D={};w[1]&69632&&(D.$$scope={dirty:w,ctx:s}),a.$set(D)},i(c){i||(b(a.$$.fragment,c),i=!0)},o(c){g(a.$$.fragment,c),i=!1},d(c){c&&p(e),c&&p(o),c&&p(t),c&&p(l),s[21](null),S(a,c),u=!1,ft(d)}}}function Lt(s){let e;return{c(){e=y("Wipe board")},l(r){e=I(r,"Wipe board")},m(r,o){h(r,e,o)},d(r){r&&p(e)}}}function jt(s){let e,r;return e=new dt({props:{$$slots:{default:[Lt]},$$scope:{ctx:s}}}),e.$on("SMUI:action",function(){x(s[43])&&s[43].apply(this,arguments)}),{c(){N(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,t){A(e,o,t),r=!0},p(o,t){s=o;const n={};t[1]&65536&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(o){r||(b(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){S(e,o)}}}function zt(s){let e,r;return e=new ct({props:{$$slots:{default:[jt]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,t){A(e,o,t),r=!0},p(o,t){const n={};t[1]&69632&&(n.$$scope={dirty:t,ctx:o}),e.$set(n)},i(o){r||(b(e.$$.fragment,o),r=!0)},o(o){g(e.$$.fragment,o),r=!1},d(o){S(e,o)}}}function Bt(s){let e,r,o,t;const n=[Tt,Pt,Mt],l=[];function a(i,u){return i[9]==="pre_record"?0:i[9]==="mid_record"?1:2}return e=a(s),r=l[e]=n[e](s),{c(){r.c(),o=C()},l(i){r.l(i),o=C()},m(i,u){l[e].m(i,u),h(i,o,u),t=!0},p(i,u){let d=e;e=a(i),e===d?l[e].p(i,u):(H(),g(l[d],1,1,()=>{l[d]=null}),F(),r=l[e],r?r.p(i,u):(r=l[e]=n[e](i),r.c()),b(r,1),r.m(o.parentNode,o))},i(i){t||(b(r),t=!0)},o(i){g(r),t=!1},d(i){l[e].d(i),i&&p(o)}}}function Et(s){let e,r;function o(...t){return s[22](s[42],...t)}return e=new ht({props:{strokesArray:s[41],currentTime:s[46],$$slots:{default:[Bt]},$$scope:{ctx:s}}}),e.$on("stroke-drawn",o),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,n){A(e,t,n),r=!0},p(t,n){s=t;const l={};n[1]&1024&&(l.strokesArray=s[41]),n[1]&32768&&(l.currentTime=s[46]),n[0]&513|n[1]&94208&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function ye(s){let e,r;function o(){return s[19](s[38],s[43])}return e=new at({props:{color:"primary",$$slots:{default:[Qt]},$$scope:{ctx:s}}}),e.$on("click",o),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,n){A(e,t,n),r=!0},p(t,n){s=t;const l={};n[1]&65536&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){S(e,t)}}}function Qt(s){let e;return{c(){e=y("Delete video")},l(r){e=I(r,"Delete video")},m(r,o){h(r,e,o)},d(r){r&&p(e)}}}function qt(s){let e,r,o=s[6].uid===s[38].creatorUID&&ye(s);return{c(){o&&o.c(),e=C()},l(t){o&&o.l(t),e=C()},m(t,n){o&&o.m(t,n),h(t,e,n),r=!0},p(t,n){t[6].uid===t[38].creatorUID?o?(o.p(t,n),n[0]&64|n[1]&128&&b(o,1)):(o=ye(t),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(H(),g(o,1,1,()=>{o=null}),F())},i(t){r||(b(o),r=!0)},o(t){g(o),r=!1},d(t){o&&o.d(t),t&&p(e)}}}function Ot(s){let e,r,o=s[38]&&De(s);return{c(){o&&o.c(),e=q()},l(t){o&&o.l(t),e=O(t)},m(t,n){o&&o.m(t,n),h(t,e,n),r=!0},p(t,n){t[38]?o?(o.p(t,n),n[1]&128&&b(o,1)):(o=De(t),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(H(),g(o,1,1,()=>{o=null}),F())},i(t){r||(b(o),r=!0)},o(t){g(o),r=!1},d(t){o&&o.d(t),t&&p(e)}}}function Ie(s,e){let r,o,t;return o=new pt({props:{dbPath:e[10]+e[35],$$slots:{default:[Ot,({boardDoc:n,fetchStrokes:l,listenToStrokes:a,strokesArray:i,handleNewlyDrawnStroke:u,deleteAllStrokesFromDb:d})=>({38:n,39:l,40:a,41:i,42:u,43:d}),({boardDoc:n,fetchStrokes:l,listenToStrokes:a,strokesArray:i,handleNewlyDrawnStroke:u,deleteAllStrokesFromDb:d})=>[0,(n?128:0)|(l?256:0)|(a?512:0)|(i?1024:0)|(u?2048:0)|(d?4096:0)]]},$$scope:{ctx:e}}}),{key:s,first:null,c(){r=C(),N(o.$$.fragment),this.h()},l(n){r=C(),U(o.$$.fragment,n),this.h()},h(){this.first=r},m(n,l){h(n,r,l),A(o,n,l),t=!0},p(n,l){e=n;const a={};l[0]&2&&(a.dbPath=e[10]+e[35]),l[0]&963|l[1]&71552&&(a.$$scope={dirty:l,ctx:e}),o.$set(a)},i(n){t||(b(o.$$.fragment,n),t=!0)},o(n){g(o.$$.fragment,n),t=!1},d(n){n&&p(r),S(o,n)}}}function Vt(s){let e,r,o=s[1]&&ve(s);return{c(){o&&o.c(),e=C()},l(t){o&&o.l(t),e=C()},m(t,n){o&&o.m(t,n),h(t,e,n),r=!0},p(t,n){t[1]?o?(o.p(t,n),n[0]&2&&b(o,1)):(o=ve(t),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(H(),g(o,1,1,()=>{o=null}),F())},i(t){r||(b(o),r=!0)},o(t){g(o),r=!1},d(t){o&&o.d(t),t&&p(e)}}}async function xt({page:s}){return{props:{classID:s.params.class,roomID:s.params.room}}}function E(s){return s.charAt(s.length-1)==="?"}function le(s){return s.askerName&&s.dateAsked&&s.askerUID}function Wt(s,e,r){let o,t,n,l,a;ee(s,vt,_=>r(6,t=_)),ee(s,wt,_=>r(7,n=_)),ee(s,Dt,_=>r(8,l=_)),ee(s,be,_=>r(9,a=_));let{classID:i}=e,{roomID:u}=e,d,f;const c=`classes/${i}/blackboards/`,w=`classes/${i}/rooms/`;let D="",M=5,Q,$=5;t.uid||kt("/");async function m({srcElement:_}){const{value:v}=_,T={name:v};!E(f.name)&&E(v)&&!le(f)?R():D&&!E(v)?ae():!E(v)&&le(f)?G():Q&&E(v)&&le(f)&&Ne(),await K(o,T)}function R(){r(3,M=5),r(2,D=setInterval(()=>{r(3,M-=1),M===0&&(Ue(),Ae(),ae())},1e3))}function G(){r(5,$=5),r(4,Q=setInterval(()=>{r(5,$-=1),$===0&&Re()},1e3))}function Re(){K(o,{dateResolved:new Date().toISOString()})}function Ne(){clearTimeout(Q),r(4,Q="")}function ae(){clearTimeout(D),r(2,D="")}function Ue(){K(o,{askerName:t.name||"Beaver #999",askerUID:t.uid,dateAsked:new Date().toISOString()})}async function Ae(){const _=[],v=Xe(),T=Ze(v,"sendTextMessage"),P=Ye(X(),"users"),J=xe(P,et("willReceiveText","==",!0)),W=await tt(J);if(W.docs)for(const ce of W.docs){console.log("phoneNumber =",ce.data().phoneNumber);try{_.push(T({content:`${t.name} asked: "${f.name||"Fake question here"}"`,toWho:ce.data().phoneNumber}))}catch(Be){alert(Be)}}await Promise.all(_),console.log("success, sent all texts.")}async function ie({detail:_},v){const T=te(X(),c+v);await K(T,{description:_})}Ke(async()=>{ot(o,_=>{r(1,f=me({id:_.id},_.data()))})});async function Se(){r(1,f=await bt(w+u))}async function ue(_,v){const T=$e(),P=he(T,`audio/${gt()}`);await rt(P,_);const J=await st(P),W=te(X(),c+v);await K(W,{creatorUID:t.uid,creatorPhoneNumber:t.phoneNumber,date:new Date().toISOString(),audioDownloadURL:J,audioRefFullPath:P.fullPath}),be.set("pre_record")}async function fe({id:_,audioRefFullPath:v},T){const P=[],J=te(X(),c+_);if(v){const W=he($e(),v);P.push(nt(W))}P.push(K(J,{creator:Y(),creatorPhoneNumber:Y(),date:Y(),audioDownloadURL:Y(),audioRefFullPath:Y()})),P.push(T()),await Promise.all(P)}const Ce=_=>m(_),Me=(_,v)=>ie(v,_),Pe=(_,v)=>fe(_,v),Te=()=>d.setOpen(!0);function Le(_){lt[_?"unshift":"push"](()=>{d=_,r(0,d)})}const je=(_,v)=>_(v.detail.newStroke),ze=(_,v)=>ue(v.detail.audioBlob,_);return s.$$set=_=>{"classID"in _&&r(15,i=_.classID),"roomID"in _&&r(16,u=_.roomID)},s.$$.update=()=>{s.$$.dirty[0]&65536&&(o=te(X(),w+u)),s.$$.dirty[0]&65536&&Se()},[d,f,D,M,Q,$,t,n,l,a,c,m,ie,ue,fe,i,u,Ce,Me,Pe,Te,Le,je,ze]}class eo extends Oe{constructor(e){super();Ve(this,e,Wt,Vt,We,{classID:15,roomID:16},null,[-1,-1])}}export{eo as default,xt as load};
