/** @license
 * fzf v0.5.1
 * Copyright (c) 2021-2022 Ajit
 * Licensed under BSD 3-Clause
 */
 var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,n)=>e in t?__defProp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,__spreadValues=(t,e)=>{for(var n in e||(e={}))__hasOwnProp.call(e,n)&&__defNormalProp(t,n,e[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(e))__propIsEnum.call(e,n)&&__defNormalProp(t,n,e[n]);return t},__spreadProps=(t,e)=>__defProps(t,__getOwnPropDescs(e));!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).fzf={})}(this,(function(t){"use strict";const e={216:"O",223:"s",248:"o",273:"d",295:"h",305:"i",320:"l",322:"l",359:"t",383:"s",384:"b",385:"B",387:"b",390:"O",392:"c",393:"D",394:"D",396:"d",398:"E",400:"E",402:"f",403:"G",407:"I",409:"k",410:"l",412:"M",413:"N",414:"n",415:"O",421:"p",427:"t",429:"t",430:"T",434:"V",436:"y",438:"z",477:"e",485:"g",544:"N",545:"d",549:"z",564:"l",565:"n",566:"t",567:"j",570:"A",571:"C",572:"c",573:"L",574:"T",575:"s",576:"z",579:"B",580:"U",581:"V",582:"E",583:"e",584:"J",585:"j",586:"Q",587:"q",588:"R",589:"r",590:"Y",591:"y",592:"a",593:"a",595:"b",596:"o",597:"c",598:"d",599:"d",600:"e",603:"e",604:"e",605:"e",606:"e",607:"j",608:"g",609:"g",610:"G",613:"h",614:"h",616:"i",618:"I",619:"l",620:"l",621:"l",623:"m",624:"m",625:"m",626:"n",627:"n",628:"N",629:"o",633:"r",634:"r",635:"r",636:"r",637:"r",638:"r",639:"r",640:"R",641:"R",642:"s",647:"t",648:"t",649:"u",651:"v",652:"v",653:"w",654:"y",655:"Y",656:"z",657:"z",663:"c",665:"B",666:"e",667:"G",668:"H",669:"j",670:"k",671:"L",672:"q",686:"h",867:"a",868:"e",869:"i",870:"o",871:"u",872:"c",873:"d",874:"h",875:"m",876:"r",877:"t",878:"v",879:"x",7424:"A",7427:"B",7428:"C",7429:"D",7431:"E",7432:"e",7433:"i",7434:"J",7435:"K",7436:"L",7437:"M",7438:"N",7439:"O",7440:"O",7441:"o",7442:"o",7443:"o",7446:"o",7447:"o",7448:"P",7449:"R",7450:"R",7451:"T",7452:"U",7453:"u",7454:"u",7455:"m",7456:"V",7457:"W",7458:"Z",7522:"i",7523:"r",7524:"u",7525:"v",7834:"a",7835:"s",8305:"i",8341:"h",8342:"k",8343:"l",8344:"m",8345:"n",8346:"p",8347:"s",8348:"t",8580:"c"};for(let ot="̀".codePointAt(0);ot<="ͯ".codePointAt(0);++ot){const t=String.fromCodePoint(ot);for(const n of"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"){const r=(n+t).normalize().codePointAt(0);r>126&&(e[r]=n)}}const n={a:[7844,7863],e:[7870,7879],o:[7888,7907],u:[7912,7921]};for(const ot of Object.keys(n)){const t=ot.toUpperCase();for(let r=n[ot][0];r<=n[ot][1];++r)e[r]=r%2==0?t:ot}function r(t){if(t<192||t>8580)return t;const n=e[t];return void 0!==n?n.codePointAt(0):t}function s(t,e){return t>e?t:e}const o=t=>t.split("").map((t=>t.codePointAt(0))),i=t=>t.map((t=>String.fromCodePoint(t))).join(""),l=new Set(" \f\n\r\t\v  \u2028\u2029  　\ufeff".split("").map((t=>t.codePointAt(0))));for(let ot=" ".codePointAt(0);ot<=" ".codePointAt(0);ot++)l.add(ot);const a=t=>l.has(t),c=t=>{let e=0;for(const n of t){if(!a(n))break;e++}return e},u=t=>{let e=0;for(let n=t.length-1;n>=0&&a(t[n]);n--)e++;return e},f="".codePointAt(0),h="A".codePointAt(0),d="Z".codePointAt(0),p="a".codePointAt(0),g="z".codePointAt(0),m="0".codePointAt(0),b="9".codePointAt(0);function y(t,e,n){return n?t:e-t-1}const P=16;var _,w;function z(t){return t?new Set:null}function S(t,e,n){if(null!==e&&e.i16.length>t+n){return[t+n,e.i16.subarray(t,t+n)]}return[t,new Int16Array(n)]}function L(t,e,n){if(null!==e&&e.i32.length>t+n){return[t+n,e.i32.subarray(t,t+n)]}return[t,new Int32Array(n)]}function A(t){return t>=p&&t<=g?1:t>=h&&t<=d?2:t>=m&&t<=b?4:0}function v(t){const e=String.fromCodePoint(t);return e!==e.toUpperCase()?1:e!==e.toLowerCase()?2:null!==e.match(/\p{Number}/gu)?4:null!==e.match(/\p{Letter}/gu)?3:0}function C(t){return t<=f?A(t):v(t)}function O(t,e){return 0===t&&0!==e?8:1===t&&2===e||4!==t&&4===e?7:0===e?8:0}function x(t,e,n,r){let s=t.slice(r),o=s.indexOf(n);if(0===o)return r;if(!e&&n>=p&&n<=g){o>0&&(s=s.slice(0,o));const t=s.indexOf(n-32);t>=0&&(o=t)}return o<0?-1:r+o}function k(t){for(const e of t)if(e>=128)return!1;return!0}function j(t,e,n){if(!k(t))return 0;if(!k(e))return-1;let r=0,s=0;for(let o=0;o<e.length;o++){if(s=x(t,n,e[o],s),s<0)return-1;0===o&&s>0&&(r=s-1),s++}return r}(w=_||(_={}))[w.NonWord=0]="NonWord",w[w.Lower=1]="Lower",w[w.Upper=2]="Upper",w[w.Letter=3]="Letter",w[w.Number=4]="Number";const E=(t,e,n,o,i,l,a)=>{const c=i.length;if(0===c)return[{start:0,end:0,score:0},z(l)];const u=o.length;if(null!==a&&u*c>a.i16.length)return N(t,e,n,o,i,l);const h=j(o,i,t);if(h<0)return[{start:-1,end:-1,score:0},null];let d=0,p=0,g=null,m=null,b=null,y=null;[d,g]=S(d,a,u),[d,m]=S(d,a,u),[d,b]=S(d,a,u),[p,y]=L(p,a,c);const[,_]=L(p,a,u);for(let r=0;r<_.length;r++)_[r]=o[r];let w=0,C=0,x=0,k=0;const E=i[0];let M=i[0],V=0,F=0,I=!1,R=_.subarray(h),q=g.subarray(h).subarray(0,R.length),W=m.subarray(h).subarray(0,R.length),B=b.subarray(h).subarray(0,R.length);for(let[z,S]of R.entries()){let o=null;S<=f?(o=A(S),t||2!==o||(S+=32)):(o=v(S),t||2!==o||(S=String.fromCodePoint(S).toLowerCase().codePointAt(0)),e&&(S=r(S))),R[z]=S;const l=O(F,o);if(B[z]=l,F=o,S===M&&(x<c&&(y[x]=h+z,x++,M=i[Math.min(x,c-1)]),k=h+z),S===E){const t=P+2*l;if(q[z]=t,W[z]=1,1===c&&(n&&t>w||!n&&t>=w)&&(w=t,C=h+z,n&&8===l))break;I=!1}else q[z]=s(I?V+-1:V+-3,0),W[z]=0,I=!0;V=q[z]}if(x!==c)return[{start:-1,end:-1,score:0},null];if(1===c){const t={start:C,end:C+1,score:w};if(!l)return[t,null];const e=new Set;return e.add(C),[t,e]}const T=y[0],D=k-T+1;let U=null;[d,U]=S(d,a,D*c);{const t=g.subarray(T,k+1);for(const[e,n]of t.entries())U[e]=n}let[,G]=S(d,a,D*c);{const t=m.subarray(T,k+1);for(const[e,n]of t.entries())G[e]=n}const J=y.subarray(1),Y=i.slice(1).slice(0,J.length);for(const[r,f]of J.entries()){let t=!1;const e=Y[r],o=r+1,i=o*D,l=_.subarray(f,k+1),a=b.subarray(f).subarray(0,l.length),u=G.subarray(i+f-T).subarray(0,l.length),h=G.subarray(i+f-T-1-D).subarray(0,l.length),d=U.subarray(i+f-T).subarray(0,l.length),p=U.subarray(i+f-T-1-D).subarray(0,l.length),g=U.subarray(i+f-T-1).subarray(0,l.length);g[0]=0;for(const[r,m]of l.entries()){const i=r+f;let l=0,y=0,_=0;if(y=t?g[r]+-1:g[r]+-3,e===m){l=p[r]+P;let t=a[r];_=h[r]+1,8===t?_=1:_>1&&(t=s(t,s(4,b[i-_+1]))),l+t<y?(l+=a[r],_=0):l+=t}u[r]=_,t=l<y;const z=s(s(l,y),0);o===c-1&&(n&&z>w||!n&&z>=w)&&(w=z,C=i),d[r]=z}}const Z=z(l);let H=T;if(l&&null!==Z){let t=c-1;H=C;let e=!0;for(;;){const n=t*D,r=H-T,s=U[n+r];let o=0,i=0;if(t>0&&H>=y[t]&&(o=U[n-D+r-1]),H>y[t]&&(i=U[n+r-1]),s>o&&(s>i||s===i&&e)){if(Z.add(H),0===t)break;t--}e=G[n+r]>1||n+D+r+1<G.length&&G[n+D+r+1]>0,H--}}return[{start:H,end:C+1,score:w},Z]};function M(t,e,n,o,i,l,a){let c=0,u=0,p=!1,g=0,m=0;const b=z(a);let y=0;i>0&&(y=C(n[i-1]));for(let _=i;_<l;_++){let i=n[_];const l=C(i);if(t||(i>=h&&i<=d?i+=32:i>f&&(i=String.fromCodePoint(i).toLowerCase().codePointAt(0))),e&&(i=r(i)),i===o[c]){a&&null!==b&&b.add(_),u+=P;let t=O(y,l);0===g?m=t:(8===t&&(m=t),t=s(s(t,m),4)),u+=0===c?2*t:t,p=!1,g++,c++}else u+=p?-1:-3,p=!0,g=0,m=0;y=l}return[u,b]}const N=(t,e,n,s,o,i,l)=>{if(0===o.length)return[{start:0,end:0,score:0},null];if(j(s,o,t)<0)return[{start:-1,end:-1,score:0},null];let a=0,c=-1,u=-1;const p=s.length,g=o.length;for(let m=0;m<p;m++){let i=s[y(m,p,n)];t||(i>=h&&i<=d?i+=32:i>f&&(i=String.fromCodePoint(i).toLowerCase().codePointAt(0))),e&&(i=r(i));if(i===o[y(a,g,n)]&&(c<0&&(c=m),a++,a===g)){u=m+1;break}}if(c>=0&&u>=0){a--;for(let e=u-1;e>=c;e--){let r=s[y(e,p,n)];t||(r>=h&&r<=d?r+=32:r>f&&(r=String.fromCodePoint(r).toLowerCase().codePointAt(0)));if(r===o[y(a,g,n)]&&(a--,a<0)){c=e;break}}if(!n){const t=c;c=p-u,u=p-t}const[r,l]=M(t,e,s,o,c,u,i);return[{start:c,end:u,score:r},l]}return[{start:-1,end:-1,score:0},null]},V=(t,e,n,s,o,i,l)=>{if(0===o.length)return[{start:0,end:0,score:0},null];const a=s.length,c=o.length;if(a<c)return[{start:-1,end:-1,score:0},null];if(j(s,o,t)<0)return[{start:-1,end:-1,score:0},null];let u=0,p=-1,g=0,m=-1;for(let _=0;_<a;_++){const i=y(_,a,n);let l=s[i];t||(l>=h&&l<=d?l+=32:l>f&&(l=String.fromCodePoint(l).toLowerCase().codePointAt(0))),e&&(l=r(l));const w=y(u,c,n);if(o[w]===l){if(0===w&&(b=s,g=0===(P=i)?8:O(C(b[P-1]),C(b[P]))),u++,u===c){if(g>m&&(p=_,m=g),8===g)break;_-=u-1,u=0,g=0}}else _-=u,u=0,g=0}var b,P;if(p>=0){let r=0,i=0;n?(r=p-c+1,i=p+1):(r=a-(p+1),i=a-(p-c+1));const[l]=M(t,e,s,o,r,i,!1);return[{start:r,end:i,score:l},null]}return[{start:-1,end:-1,score:0},null]};const F=(I=2048,{i16:new Int16Array(102400),i32:new Int32Array(I)});var I,R,q;(q=R||(R={}))[q.Fuzzy=0]="Fuzzy",q[q.Exact=1]="Exact",q[q.Prefix=2]="Prefix",q[q.Suffix=3]="Suffix",q[q.Equal=4]="Equal";const W={0:E,1:V,2:(t,e,n,s,o,i,l)=>{if(0===o.length)return[{start:0,end:0,score:0},null];let u=0;if(a(o[0])||(u=c(s)),s.length-u<o.length)return[{start:-1,end:-1,score:0},null];for(const[a,c]of o.entries()){let n=s[u+a];if(t||(n=String.fromCodePoint(n).toLowerCase().codePointAt(0)),e&&(n=r(n)),n!==c)return[{start:-1,end:-1,score:0},null]}const f=o.length,[h]=M(t,e,s,o,u,u+f,!1);return[{start:u,end:u+f,score:h},null]},3:(t,e,n,s,o,i,l)=>{let c=s.length;if(0!==o.length&&a(o[o.length-1])||(c-=u(s)),0===o.length)return[{start:c,end:c,score:0},null];const f=c-o.length;if(f<0)return[{start:-1,end:-1,score:0},null];for(const[a,u]of o.entries()){let n=s[a+f];if(t||(n=String.fromCodePoint(n).toLowerCase().codePointAt(0)),e&&(n=r(n)),n!==u)return[{start:-1,end:-1,score:0},null]}const h=c-o.length,d=c,[p]=M(t,e,s,o,h,d,!1);return[{start:h,end:d,score:p},null]},4:(t,e,n,s,o,l,f)=>{const h=o.length;if(0===h)return[{start:-1,end:-1,score:0},null];let d=0;a(o[0])||(d=c(s));let p=0;if(a(o[h-1])||(p=u(s)),s.length-d-p!=h)return[{start:-1,end:-1,score:0},null];let g=!0;if(e){const e=s;for(const[n,s]of o.entries()){let o=e[d+n];if(t||(o=String.fromCodePoint(o).toLowerCase().codePointAt(0)),r(s)!==r(o)){g=!1;break}}}else{let e=i(s).substring(d,s.length-p);t||(e=e.toLowerCase()),g=e===i(o)}return g?[{start:d,end:d+h,score:24*h+8},null]:[{start:-1,end:-1,score:0},null]}};function B(t,e,n,s){let l=!0;{const t=(s=s.trimLeft()).trimRight();s=t.endsWith("\\")&&" "===s[t.length]?t+" ":t}let a=!1,c=[];c=function(t,e,n,s){const l=(s=s.replace(/\\ /g,"\t")).split(/ +/),a=[];let c=[],u=!1,f=!1;for(const h of l){let s=0,l=!1,d=h.replace(/\t/g," ");const p=d.toLowerCase(),g="case-sensitive"===e||"smart-case"===e&&d!==p,m=n&&p===i(o(p).map(r));if(g||(d=p),t||(s=1),c.length>0&&!f&&"|"===d)u=!1,f=!0;else if(f=!1,d.startsWith("!")&&(l=!0,s=1,d=d.substring(1)),"$"!==d&&d.endsWith("$")&&(s=3,d=d.substring(0,d.length-1)),d.startsWith("'")?(s=t&&!l?1:0,d=d.substring(1)):d.startsWith("^")&&(s=3===s?4:2,d=d.substring(1)),d.length>0){u&&(a.push(c),c=[]);let t=o(d);m&&(t=t.map(r)),c.push({typ:s,inv:l,text:t,caseSensitive:g,normalize:m}),u=!0}}c.length>0&&a.push(c);return a}(t,e,n,s);t:for(const r of c)for(const[e,n]of r.entries())if(n.inv||(a=!0),(!l||e>0||n.inv||t&&0!==n.typ||!t&&1!==n.typ)&&(l=!1,a))break t;return{str:s,termSets:c,sortable:a,cacheable:l,fuzzy:t}}const T=(t,e,n)=>{let s=!1;switch(e){case"smart-case":t.toLowerCase()!==t&&(s=!0);break;case"case-sensitive":s=!0;break;case"case-insensitive":t=t.toLowerCase(),s=!1}let i=o(t);return n&&(i=i.map(r)),{queryRunes:i,caseSensitive:s}};function D(t,e,n,r,s,o,i){for(const l of e){const[e,a]=t(n,r,s,l.text,o,!0,i);if(e.start>=0){const t=e.start+l.prefixLength,n=e.end+l.prefixLength;if(null!==a){const r=new Set;return a.forEach((t=>r.add(l.prefixLength+t))),[[t,n],e.score,r]}return[[t,n],e.score,a]}}return[[-1,-1],0,null]}function U(t,e){const n=Object.keys(t).map((t=>parseInt(t,10))).sort(((t,e)=>e-t));let r=[];for(const s of n)if(r=r.concat(t[s]),r.length>=e)break;return r}function G(t,e,n){return r=>{const s=this.runesList[r];if(e.length>s.length)return;let[o,i]=this.algoFn(n,this.opts.normalize,this.opts.forward,s,e,!0,F);if(-1===o.start)return;if(!1===this.opts.fuzzy){i=new Set;for(let t=o.start;t<o.end;++t)i.add(t)}const l=this.opts.sort?o.score:0;void 0===t[l]&&(t[l]=[]),t[l].push(__spreadProps(__spreadValues({item:this.items[r]},o),{positions:null!=i?i:new Set}))}}function J(t,e){return n=>{const r=function(t,e,n,r){const s=[{text:t,prefixLength:0}],o=[];let i=0;const l=new Set;for(const a of e.termSets){let t=[0,0],e=0,c=!1;for(const o of a){let i=W[o.typ];o.typ===R.Fuzzy&&(i=n);const[a,u,f]=D(i,s,o.caseSensitive,o.normalize,r,o.text,F);if(a[0]>=0){if(o.inv)continue;if(t=a,e=u,c=!0,null!==f)f.forEach((t=>l.add(t)));else for(let t=a[0];t<a[1];++t)l.add(t);break}o.inv&&(t=[0,0],e=0,c=!0)}c&&(o.push(t),i+=e)}return{offsets:o,totalScore:i,allPos:l}}(this.runesList[n],e,this.algoFn,this.opts.forward);if(r.offsets.length!==e.termSets.length)return;let s=-1,o=-1;r.allPos.size>0&&(s=Math.min(...r.allPos),o=Math.max(...r.allPos)+1);const i=this.opts.sort?r.totalScore:0;void 0===t[i]&&(t[i]=[]),t[i].push({score:r.totalScore,item:this.items[n],positions:r.allPos,start:s,end:o})}}function Y(t){const{queryRunes:e,caseSensitive:n}=T(t,this.opts.casing,this.opts.normalize),r={},s=G.bind(this)(r,e,n);for(let o=0,i=this.runesList.length;o<i;++o)s(o);return U(r,this.opts.limit)}const Z="undefined"!=typeof require&&"undefined"==typeof window;function H(t,e,n,r){return new Promise(((s,o)=>{let i=0,l=Math.min(1e3,e);const a=()=>{if(t.cancelled)return o("search cancelled");for(;i<l;++i)n(i);l<e?(l=Math.min(l+1e3,e),Z?setImmediate(a):setTimeout(a)):s(r())};a()}))}function K(t,e){const{queryRunes:n,caseSensitive:r}=T(t,this.opts.casing,this.opts.normalize),s={};return H(e,this.runesList.length,G.bind(this)(s,n,r),(()=>U(s,this.opts.limit)))}const Q={limit:1/0,selector:t=>t,casing:"smart-case",normalize:!0,fuzzy:"v2",tiebreakers:[],sort:!0,forward:!0};class ${constructor(t,...e){switch(this.opts=__spreadValues(__spreadValues({},Q),e[0]),this.items=t,this.runesList=t.map((t=>o(this.opts.selector(t).normalize()))),this.algoFn=V,this.opts.fuzzy){case"v2":this.algoFn=E;break;case"v1":this.algoFn=N}}}const X=__spreadProps(__spreadValues({},Q),{match:Y});class tt extends ${constructor(t,...e){super(t,...e),this.opts=__spreadValues(__spreadValues({},X),e[0])}find(t){if(0===t.length||0===this.items.length)return this.items.slice(0,this.opts.limit).map(rt);return t=t.normalize(),st(this.opts.match.bind(this)(t),this.opts)}}const et=__spreadProps(__spreadValues({},Q),{match:K});class nt extends ${constructor(t,...e){super(t,...e),this.opts=__spreadValues(__spreadValues({},et),e[0]),this.token={cancelled:!1}}async find(t){if(this.token.cancelled=!0,this.token={cancelled:!1},0===t.length||0===this.items.length)return this.items.slice(0,this.opts.limit).map(rt);return t=t.normalize(),st(await this.opts.match.bind(this)(t,this.token),this.opts)}}const rt=t=>({item:t,start:-1,end:-1,score:0,positions:new Set});function st(t,e){if(e.sort){const{selector:n}=e;t.sort(((t,r)=>{if(t.score===r.score)for(const s of e.tiebreakers){const e=s(t,r,n);if(0!==e)return e}return 0}))}return Number.isFinite(e.limit)&&t.splice(e.limit),t}t.AsyncFzf=class{constructor(t,...e){this.finder=new nt(t,...e),this.find=this.finder.find.bind(this.finder)}},t.Fzf=class{constructor(t,...e){this.finder=new tt(t,...e),this.find=this.finder.find.bind(this.finder)}},t.asyncBasicMatch=K,t.asyncExtendedMatch=function(t,e){const n=B(Boolean(this.opts.fuzzy),this.opts.casing,this.opts.normalize,t),r={};return H(e,this.runesList.length,J.bind(this)(r,n),(()=>U(r,this.opts.limit)))},t.basicMatch=Y,t.byLengthAsc=function(t,e,n){return n(t.item).length-n(e.item).length},t.byStartAsc=function(t,e){return t.start-e.start},t.extendedMatch=function(t){const e=B(Boolean(this.opts.fuzzy),this.opts.casing,this.opts.normalize,t),n={},r=J.bind(this)(n,e);for(let s=0,o=this.runesList.length;s<o;++s)r(s);return U(n,this.opts.limit)},Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"}));