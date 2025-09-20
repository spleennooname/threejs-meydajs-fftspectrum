var Ev=Object.defineProperty,Tv=Object.defineProperties;var Cv=Object.getOwnPropertyDescriptors;var id=Object.getOwnPropertySymbols;var Av=Object.prototype.hasOwnProperty,Pv=Object.prototype.propertyIsEnumerable;var rd=(i,t,e)=>t in i?Ev(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Nl=(i,t)=>{for(var e in t||(t={}))Av.call(t,e)&&rd(i,e,t[e]);if(id)for(var e of id(t))Pv.call(t,e)&&rd(i,e,t[e]);return i},sd=(i,t)=>Tv(i,Cv(t));const Rv=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}};Rv();function _i(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Bf(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ms={duration:.5,overwrite:!1,delay:0},Iu,On=1e8,we=1/On,Tc=Math.PI*2,Dv=Tc/4,Lv=0,Vf=Math.sqrt,Iv=Math.cos,Uv=Math.sin,Ge=function(t){return typeof t=="string"},He=function(t){return typeof t=="function"},Mi=function(t){return typeof t=="number"},Uu=function(t){return typeof t=="undefined"},Ei=function(t){return typeof t=="object"},fn=function(t){return t!==!1},zf=function(){return typeof window!="undefined"},ta=function(t){return He(t)||Ge(t)},Hf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qe=Array.isArray,Cc=/(?:-?\.?\d|\.)+/gi,Gf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ds=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wf=/[+-]=-?[.\d]+/,Xf=/[^,'"\[\]\s]+/gi,Nv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,Jn,Ac,Nu,En={},ka={},qf,Yf=function(t){return(ka=Rr(t,En))&&$n},Fu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ba=function(t,e){return!e&&console.warn(t)},jf=function(t,e){return t&&(En[t]=e)&&ka&&(ka[t]=e)||En},bo=function(){return 0},Ou={},Yi=[],Pc={},Kf,bn={},Ol={},od=30,Ca=[],ku="",Bu=function(t){var e=t[0],n,r;if(Ei(e)||He(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Ca.length;r--&&!Ca[r].targetTest(e););n=Ca[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new gp(t[r],n)))||t.splice(r,1);return t},Cr=function(t){return t._gsap||Bu(kn(t))[0]._gsap},$f=function(t,e,n){return(n=t[e])&&He(n)?t[e]():Uu(n)&&t.getAttribute&&t.getAttribute(e)||n},pn=function(t,e){return(t=t.split(",")).forEach(e)||t},De=function(t){return Math.round(t*1e5)/1e5||0},Ze=function(t){return Math.round(t*1e7)/1e7||0},_s=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Fv=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Va=function(){var t=Yi.length,e=Yi.slice(0),n,r;for(Pc={},Yi.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Zf=function(t,e,n,r){Yi.length&&Va(),t.render(e,n,r),Yi.length&&Va()},Jf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xf).length<2?e:Ge(t)?t.trim():t},Qf=function(t){return t},zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ov=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Rr=function(t,e){for(var n in e)t[n]=e[n];return t},ad=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ei(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},za=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},uo=function(t){var e=t.parent||Pe,n=t.keyframes?Ov(Qe(t.keyframes)):zn;if(fn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},kv=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},tp=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t[r],l;if(s)for(l=e[s];a&&a[s]>l;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},nl=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},gi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ar=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Bv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vv=function i(t){return!t||t._ts&&i(t.parent)},ld=function(t){return t._repeat?Es(t._tTime,t=t.duration()+t._rDelay)*t:0},Es=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ha=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},il=function(t){return t._end=Ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Vu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),il(t),n._dirty||Ar(n,t)),t},ep=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ha(t.rawTime(),e),(!e._dur||Io(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Ar(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},ti=function(t,e,n,r){return e.parent&&gi(e),e._start=Ze((Mi(n)?n:n||t!==Pe?In(t,n,e):t._time)+e._delay),e._end=Ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),tp(t,e,"_first","_last",t._sort?"_start":0),Rc(e)||(t._recent=e),r||ep(t,e),t},np=function(t,e){return(En.ScrollTrigger||Fu("scrollTrigger",e))&&En.ScrollTrigger.create(e,t)},ip=function(t,e,n,r){if(Hu(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kf!==yn.frame)return Yi.push(t),t._lazy=[e,r],1},zv=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Rc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Hv=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&zv(t)&&!(!t._initted&&Rc(t))||(t._ts<0||t._dp._ts<0)&&!Rc(t))?0:1,l=t._rDelay,d=0,h,f,m;if(l&&t._repeat&&(d=Io(0,t._tDur,e),f=Es(d,l),t._yoyo&&f&1&&(a=1-a),f!==Es(t._tTime,l)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||r||t._zTime===we||!e&&t._zTime){if(!t._initted&&ip(t,e,r,n))return;for(m=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!m),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=d,h=t._pt;h;)h.r(a,h.d),h=h._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!n&&Bn(t,"onUpdate"),d&&t._repeat&&!n&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&gi(t,1),n||(Bn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Gv=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ts=function(t,e,n,r){var s=t._repeat,a=Ze(e)||0,l=t._tTime/t._tDur;return l&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ze(a*(s+1)+t._rDelay*s):a,l>0&&!r?Vu(t,t._tTime=t._tDur*l):t.parent&&il(t),n||Ar(t.parent,t),t},cd=function(t){return t instanceof dn?Ar(t):Ts(t,t._dur)},Wv={_start:0,endTime:bo,totalDuration:bo},In=function i(t,e,n){var r=t.labels,s=t._recent||Wv,a=t.duration()>=On?s.endTime(!1):t._dur,l,d,h;return Ge(e)&&(isNaN(e)||e in r)?(d=e.charAt(0),h=e.substr(-1)==="%",l=e.indexOf("="),d==="<"||d===">"?(l>=0&&(e=e.replace(/=/,"")),(d==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(l<0?s:n).totalDuration()/100:1)):l<0?(e in r||(r[e]=a),r[e]):(d=parseFloat(e.charAt(l-1)+e.substr(l+1)),h&&n&&(d=d/100*(Qe(n)?n[0]:n).totalDuration()),l>1?i(t,e.substr(0,l-1),n)+d:a+d)):e==null?a:+e},ho=function(t,e,n){var r=Mi(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],l,d;if(r&&(a.duration=e[1]),a.parent=n,t){for(l=a,d=n;d&&!("immediateRender"in l);)l=d.vars.defaults||{},d=fn(d.vars.inherit)&&d.parent;a.immediateRender=fn(l.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ze(e[0],a,e[s+1])},tr=function(t,e){return t||t===0?e(t):e},Io=function(t,e,n){return n<t?t:n>e?e:n},Je=function(t,e){return!Ge(t)||!(e=Nv.exec(t))?"":e[1]},Xv=function(t,e,n){return tr(n,function(r){return Io(t,e,r)})},Dc=[].slice,rp=function(t,e){return t&&Ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ei(t[0]))&&!t.nodeType&&t!==Jn},qv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ge(r)&&!e||rp(r,1)?(s=n).push.apply(s,kn(r)):n.push(r)})||n},kn=function(t,e,n){return Ge(t)&&!n&&(Ac||!Cs())?Dc.call((e||Nu).querySelectorAll(t),0):Qe(t)?qv(t,n):rp(t)?Dc.call(t,0):t?[t]:[]},Yv=function(t){return t=kn(t)[0]||Ba("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return kn(e,n.querySelectorAll?n:n===t?Ba("Invalid scope")||Nu.createElement("div"):t)}},sp=function(t){return t.sort(function(){return .5-Math.random()})},op=function(t){if(He(t))return t;var e=Ei(t)?t:{each:t},n=Pr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},l=r>0&&r<1,d=isNaN(r)||l,h=e.axis,f=r,m=r;return Ge(r)?f=m={center:.5,edges:.5,end:1}[r]||0:!l&&d&&(f=r[0],m=r[1]),function(_,g,w){var y=(w||e).length,b=a[y],v,P,L,A,N,U,O,V,E;if(!b){if(E=e.grid==="auto"?0:(e.grid||[1,On])[1],!E){for(O=-On;O<(O=w[E++].getBoundingClientRect().left)&&E<y;);E--}for(b=a[y]=[],v=d?Math.min(E,y)*f-.5:r%E,P=E===On?0:d?y*m/E-.5:r/E|0,O=0,V=On,U=0;U<y;U++)L=U%E-v,A=P-(U/E|0),b[U]=N=h?Math.abs(h==="y"?A:L):Vf(L*L+A*A),N>O&&(O=N),N<V&&(V=N);r==="random"&&sp(b),b.max=O-V,b.min=V,b.v=y=(parseFloat(e.amount)||parseFloat(e.each)*(E>y?y-1:h?h==="y"?y/E:E:Math.max(E,y/E))||0)*(r==="edges"?-1:1),b.b=y<0?s-y:s,b.u=Je(e.amount||e.each)||0,n=n&&y<0?pp(n):n}return y=(b[_]-b.min)/b.max||0,Ze(b.b+(n?n(y):y)*b.v)+b.u}},Lc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Math.round(parseFloat(n)/t)*t*e;return(r-r%1)/e+(Mi(n)?0:Je(n))}},ap=function(t,e){var n=Qe(t),r,s;return!n&&Ei(t)&&(r=n=t.radius||On,t.values?(t=kn(t.values),(s=!Mi(t[0]))&&(r*=r)):t=Lc(t.increment)),tr(e,n?He(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var l=parseFloat(s?a.x:a),d=parseFloat(s?a.y:0),h=On,f=0,m=t.length,_,g;m--;)s?(_=t[m].x-l,g=t[m].y-d,_=_*_+g*g):_=Math.abs(t[m]-l),_<h&&(h=_,f=m);return f=!r||h<=r?t[f]:a,s||f===a||Mi(a)?f:f+Je(a)}:Lc(t))},lp=function(t,e,n,r){return tr(Qe(t)?!e:n===!0?!!(n=0):!r,function(){return Qe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},jv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},Kv=function(t,e){return function(n){return t(parseFloat(n))+(e||Je(n))}},$v=function(t,e,n){return up(t,e,0,1,n)},cp=function(t,e,n){return tr(n,function(r){return t[~~e(r)]})},Zv=function i(t,e,n){var r=e-t;return Qe(t)?cp(t,i(0,t.length),e):tr(n,function(s){return(r+(s-t)%r)%r+t})},Jv=function i(t,e,n){var r=e-t,s=r*2;return Qe(t)?cp(t,i(0,t.length-1),e):tr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},yo=function(t){for(var e=0,n="",r,s,a,l;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),l=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(l?Xf:Cc),n+=t.substr(e,r-e)+lp(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},up=function(t,e,n,r,s){var a=e-t,l=r-n;return tr(s,function(d){return n+((d-t)/a*l||0)})},Qv=function i(t,e,n,r){var s=isNaN(t+e)?0:function(g){return(1-g)*t+g*e};if(!s){var a=Ge(t),l={},d,h,f,m,_;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(Qe(t)&&!Qe(e)){for(f=[],m=t.length,_=m-2,h=1;h<m;h++)f.push(i(t[h-1],t[h]));m--,s=function(w){w*=m;var y=Math.min(_,~~w);return f[y](w-y)},n=e}else r||(t=Rr(Qe(t)?[]:{},t));if(!f){for(d in e)zu.call(l,t,d,"get",e[d]);s=function(w){return Xu(w,l)||(a?t.p:t)}}}return tr(n,s)},ud=function(t,e,n){var r=t.labels,s=On,a,l,d;for(a in r)l=r[a]-e,l<0==!!n&&l&&s>(l=Math.abs(l))&&(d=a,s=l);return d},Bn=function(t,e,n){var r=t.vars,s=r[e],a,l;if(!!s)return a=r[e+"Params"],l=r.callbackScope||t,n&&Yi.length&&Va(),a?s.apply(l,a):s.call(l)},oo=function(t){return gi(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Bn(t,"onInterrupt"),t},fs,t0=function(t){t=!t.name&&t.default||t;var e=t.name,n=He(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:bo,render:Xu,add:zu,kill:_0,modifier:m0,rawVars:0},a={targetTest:0,get:0,getSetter:Wu,aliases:{},register:0};if(Cs(),t!==r){if(bn[e])return;zn(r,zn(za(t,s),a)),Rr(r.prototype,Rr(s,za(t,a))),bn[r.prop=e]=r,t.targetTest&&(Ca.push(r),Ou[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}jf(e,r),t.register&&t.register($n,r,mn)},ye=255,ao={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},kl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},hp=function(t,e,n){var r=t?Mi(t)?[t>>16,t>>8&ye,t&ye]:0:ao.black,s,a,l,d,h,f,m,_,g,w;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ao[t])r=ao[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),l=t.charAt(3),t="#"+s+s+a+a+l+l+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ye,r&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(r=w=t.match(Cc),!e)d=+r[0]%360/360,h=+r[1]/100,f=+r[2]/100,a=f<=.5?f*(h+1):f+h-f*h,s=f*2-a,r.length>3&&(r[3]*=1),r[0]=kl(d+1/3,s,a),r[1]=kl(d,s,a),r[2]=kl(d-1/3,s,a);else if(~t.indexOf("="))return r=t.match(Gf),n&&r.length<4&&(r[3]=1),r}else r=t.match(Cc)||ao.transparent;r=r.map(Number)}return e&&!w&&(s=r[0]/ye,a=r[1]/ye,l=r[2]/ye,m=Math.max(s,a,l),_=Math.min(s,a,l),f=(m+_)/2,m===_?d=h=0:(g=m-_,h=f>.5?g/(2-m-_):g/(m+_),d=m===s?(a-l)/g+(a<l?6:0):m===a?(l-s)/g+2:(s-a)/g+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(f*100+.5)),n&&r.length<4&&(r[3]=1),r},dp=function(t){var e=[],n=[],r=-1;return t.split(ji).forEach(function(s){var a=s.match(ds)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},hd=function(t,e,n){var r="",s=(t+r).match(ji),a=e?"hsla(":"rgba(",l=0,d,h,f,m;if(!s)return t;if(s=s.map(function(_){return(_=hp(_,e,1))&&a+(e?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(f=dp(t),d=n.c,d.join(r)!==f.c.join(r)))for(h=t.replace(ji,"1").split(ds),m=h.length-1;l<m;l++)r+=h[l]+(~d.indexOf(l)?s.shift()||a+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!h)for(h=t.split(ji),m=h.length-1;l<m;l++)r+=h[l]+s[l];return r+h[m]},ji=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ao)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),e0=/hsl[a]?\(/,fp=function(t){var e=t.join(" "),n;if(ji.lastIndex=0,ji.test(e))return n=e0.test(e),t[1]=hd(t[1],n),t[0]=hd(t[0],n,dp(t[1])),!0},wo,yn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,l=[],d,h,f,m,_,g,w=function y(b){var v=i()-r,P=b===!0,L,A,N,U;if(v>t&&(n+=v-e),r+=v,N=r-n,L=N-a,(L>0||P)&&(U=++m.frame,_=N-m.time*1e3,m.time=N=N/1e3,a+=L+(L>=s?4:s-L),A=1),P||(d=h(y)),A)for(g=0;g<l.length;g++)l[g](N,_,U,b)};return m={time:0,frame:0,tick:function(){w(!0)},deltaRatio:function(b){return _/(1e3/(b||60))},wake:function(){qf&&(!Ac&&zf()&&(Jn=Ac=window,Nu=Jn.document||{},En.gsap=$n,(Jn.gsapVersions||(Jn.gsapVersions=[])).push($n.version),Yf(ka||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),f=Jn.requestAnimationFrame),d&&m.sleep(),h=f||function(b){return setTimeout(b,a-m.time*1e3+1|0)},wo=1,w(2))},sleep:function(){(f?Jn.cancelAnimationFrame:clearTimeout)(d),wo=0,h=bo},lagSmoothing:function(b,v){t=b||1/we,e=Math.min(v,t,0)},fps:function(b){s=1e3/(b||240),a=m.time*1e3+s},add:function(b,v,P){var L=v?function(A,N,U,O){b(A,N,U,O),m.remove(L)}:b;return m.remove(b),l[P?"unshift":"push"](L),Cs(),L},remove:function(b,v){~(v=l.indexOf(b))&&l.splice(v,1)&&g>=v&&g--},_listeners:l},m}(),Cs=function(){return!wo&&yn.wake()},re={},n0=/^[\d.\-M][\d.\-,\s]/,i0=/["']/g,r0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,l,d,h;s<a;s++)d=n[s],l=s!==a-1?d.lastIndexOf(","):d.length,h=d.substr(0,l),e[r]=isNaN(h)?h.replace(i0,"").trim():+h,r=d.substr(l+1).trim();return e},s0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},o0=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[r0(e[1])]:s0(t).split(",").map(Jf)):re._CE&&n0.test(t)?re._CE("",t):n},pp=function(t){return function(e){return 1-t(1-e)}},mp=function i(t,e){for(var n=t._first,r;n;)n instanceof dn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Pr=function(t,e){return t&&(He(t)?t:re[t]||o0(t))||e},Ir=function(t,e,n,r){n===void 0&&(n=function(d){return 1-e(1-d)}),r===void 0&&(r=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return pn(t,function(l){re[l]=En[l]=s,re[a=l.toLowerCase()]=n;for(var d in s)re[a+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=re[l+"."+d]=s[d]}),s},_p=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bl=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Tc*(Math.asin(1/r)||0),l=function(f){return f===1?1:r*Math.pow(2,-10*f)*Uv((f-a)*s)+1},d=t==="out"?l:t==="in"?function(h){return 1-l(1-h)}:_p(l);return s=Tc/s,d.config=function(h,f){return i(t,h,f)},d},Vl=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:_p(n);return r.config=function(s){return i(t,s)},r};pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Ir(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;Ir("Elastic",Bl("in"),Bl("out"),Bl());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(l){return l<e?i*l*l:l<n?i*Math.pow(l-1.5/t,2)+.75:l<r?i*(l-=2.25/t)*l+.9375:i*Math.pow(l-2.625/t,2)+.984375};Ir("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ir("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ir("Circ",function(i){return-(Vf(1-i*i)-1)});Ir("Sine",function(i){return i===1?1:-Iv(i*Dv)+1});Ir("Back",Vl("in"),Vl("out"),Vl());re.SteppedEase=re.steps=En.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-we;return function(l){return((r*Io(0,a,l)|0)+s)*n}}};Ms.ease=re["quad.out"];pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ku+=i+","+i+"Params,"});var gp=function(t,e){this.id=Lv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:$f,this.set=e?e.getSetter:Wu},So=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ts(this,+e.duration,1,1),this.data=e.data,wo||yn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vu(this,n),!s._dp||s.parent||ep(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===we||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zf(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ld(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Es(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ha(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(Io(-this._delay,this._tDur,r),!0),il(this),Bv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ti(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ha(r.rawTime(n),this):this._tTime:this._tTime},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,cd(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(In(this,n),fn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,fn(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-we)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this;return new Promise(function(s){var a=He(n)?n:Qf,l=function(){var h=r.then;r.then=null,He(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),s(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){oo(this)},i}();zn(So.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var dn=function(i){Bf(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=fn(n.sortChildren),Pe&&ti(n.parent||Pe,_i(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&np(_i(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return ho(0,arguments,this),this},e.from=function(r,s,a){return ho(1,arguments,this),this},e.fromTo=function(r,s,a,l){return ho(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,uo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ze(r,s,In(this,a),1),this},e.call=function(r,s,a){return ti(this,ze.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,l,d,h,f){return a.duration=s,a.stagger=a.stagger||l,a.onComplete=h,a.onCompleteParams=f,a.parent=this,new ze(r,a,In(this,d)),this},e.staggerFrom=function(r,s,a,l,d,h,f){return a.runBackwards=1,uo(a).immediateRender=fn(a.immediateRender),this.staggerTo(r,s,a,l,d,h,f)},e.staggerFromTo=function(r,s,a,l,d,h,f,m){return l.startAt=a,uo(l).immediateRender=fn(l.immediateRender),this.staggerTo(r,s,l,d,h,f,m)},e.render=function(r,s,a){var l=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,f=r<=0?0:Ze(r),m=this._zTime<0!=r<0&&(this._initted||!h),_,g,w,y,b,v,P,L,A,N,U,O;if(this!==Pe&&f>d&&r>=0&&(f=d),f!==this._tTime||a||m){if(l!==this._time&&h&&(f+=this._time-l,r+=this._time-l),_=f,A=this._start,L=this._ts,v=!L,m&&(h||(l=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(U=this._yoyo,b=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(b*100+r,s,a);if(_=Ze(f%b),f===d?(y=this._repeat,_=h):(y=~~(f/b),y&&y===f/b&&(_=h,y--),_>h&&(_=h)),N=Es(this._tTime,b),!l&&this._tTime&&N!==y&&(N=y),U&&y&1&&(_=h-_,O=1),y!==N&&!this._lock){var V=U&&N&1,E=V===(U&&y&1);if(y<N&&(V=!V),l=V?0:h,this._lock=1,this.render(l||(O?0:Ze(y*b)),s,!h)._lock=0,this._tTime=f,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),l&&l!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,E&&(this._lock=2,l=V?h:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;mp(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(P=Gv(this,Ze(l),Ze(_)),P&&(f-=_-(_=P._start))),this._tTime=f,this._time=_,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&_&&!s&&(Bn(this,"onStart"),this._tTime!==f))return this;if(_>=l&&r>=0)for(g=this._first;g;){if(w=g._next,(g._act||_>=g._start)&&g._ts&&P!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(_-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(_-g._start)*g._ts,s,a),_!==this._time||!this._ts&&!v){P=0,w&&(f+=this._zTime=-we);break}}g=w}else{g=this._last;for(var I=r<0?r:_;g;){if(w=g._prev,(g._act||I<=g._end)&&g._ts&&P!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(I-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(I-g._start)*g._ts,s,a),_!==this._time||!this._ts&&!v){P=0,w&&(f+=this._zTime=I?-we:we);break}}g=w}}if(P&&!s&&(this.pause(),P.render(_>=l?0:-we)._zTime=_>=l?1:-1,this._ts))return this._start=A,il(this),this.render(r,s,a);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(f===d&&this._tTime>=this.totalDuration()||!f&&l)&&(A===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(f===d&&this._ts>0||!f&&this._ts<0)&&gi(this,1),!s&&!(r<0&&!l)&&(f||l||!d)&&(Bn(this,f===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(Mi(s)||(s=In(this,s,r)),!(r instanceof So)){if(Qe(r))return r.forEach(function(l){return a.add(l,s)}),this;if(Ge(r))return this.addLabel(r,s);if(He(r))r=ze.delayedCall(0,r);else return this}return this!==r?ti(this,r,s):this},e.getChildren=function(r,s,a,l){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=-On);for(var d=[],h=this._first;h;)h._start>=l&&(h instanceof ze?s&&d.push(h):(a&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,s,a)))),h=h._next;return d},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Ge(r)?this.removeLabel(r):He(r)?this.killTweensOf(r):(nl(this,r),r===this._recent&&(this._recent=this._last),Ar(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ze(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=In(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var l=ze.delayedCall(0,s||bo,a);return l.data="isPause",this._hasPause=1,ti(this,l,In(this,r))},e.removePause=function(r){var s=this._first;for(r=In(this,r);s;)s._start===r&&s.data==="isPause"&&gi(s),s=s._next},e.killTweensOf=function(r,s,a){for(var l=this.getTweensOf(r,a),d=l.length;d--;)Gi!==l[d]&&l[d].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],l=kn(r),d=this._first,h=Mi(s),f;d;)d instanceof ze?Fv(d._targets,l)&&(h?(!Gi||d._initted&&d._ts)&&d.globalTime(0)<=s&&d.globalTime(d.totalDuration())>s:!s||d.isActive())&&a.push(d):(f=d.getTweensOf(l,s)).length&&a.push.apply(a,f),d=d._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,l=In(a,r),d=s,h=d.startAt,f=d.onStart,m=d.onStartParams,_=d.immediateRender,g,w=ze.to(a,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(h&&"time"in h?h.time:a._time))/a.timeScale())||we,onStart:function(){if(a.pause(),!g){var b=s.duration||Math.abs((l-(h&&"time"in h?h.time:a._time))/a.timeScale());w._dur!==b&&Ts(w,b,0,1).render(w._time,!0,!0),g=1}f&&f.apply(w,m||[])}},s));return _?w.render(0):w},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,zn({startAt:{time:In(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),ud(this,In(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),ud(this,In(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var l=this._first,d=this.labels,h;l;)l._start>=a&&(l._start+=r,l._end+=r),l=l._next;if(s)for(h in d)d[h]>=a&&(d[h]+=r);return Ar(this)},e.invalidate=function(){var r=this._first;for(this._lock=0;r;)r.invalidate(),r=r._next;return i.prototype.invalidate.call(this)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ar(this)},e.totalDuration=function(r){var s=0,a=this,l=a._last,d=On,h,f,m;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(m=a.parent;l;)h=l._prev,l._dirty&&l.totalDuration(),f=l._start,f>d&&a._sort&&l._ts&&!a._lock?(a._lock=1,ti(a,l,f-l._delay,1)._lock=0):d=f,f<0&&l._ts&&(s-=f,(!m&&!a._dp||m&&m.smoothChildTiming)&&(a._start+=f/a._ts,a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),d=0),l._end>s&&l._ts&&(s=l._end),l=h;Ts(a,a===Pe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Pe._ts&&(Zf(Pe,Ha(r,Pe)),Kf=yn.frame),yn.frame>=od){od+=Sn.autoSleep||120;var s=Pe._first;if((!s||!s._ts)&&Sn.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},t}(So);zn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var a0=function(t,e,n,r,s,a,l){var d=new mn(this._pt,t,e,0,1,Sp,null,s),h=0,f=0,m,_,g,w,y,b,v,P;for(d.b=n,d.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=yo(r)),a&&(P=[n,r],a(P,t,e),n=P[0],r=P[1]),_=n.match(Fl)||[];m=Fl.exec(r);)w=m[0],y=r.substring(h,m.index),g?g=(g+1)%5:y.substr(-5)==="rgba("&&(g=1),w!==_[f++]&&(b=parseFloat(_[f-1])||0,d._pt={_next:d._pt,p:y||f===1?y:",",s:b,c:w.charAt(1)==="="?_s(b,w)-b:parseFloat(w)-b,m:g&&g<4?Math.round:0},h=Fl.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=l,(Wf.test(r)||v)&&(d.e=0),this._pt=d,d},zu=function(t,e,n,r,s,a,l,d,h){He(r)&&(r=r(s||0,t,a));var f=t[e],m=n!=="get"?n:He(f)?h?t[e.indexOf("set")||!He(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,_=He(f)?h?d0:yp:Gu,g;if(Ge(r)&&(~r.indexOf("random(")&&(r=yo(r)),r.charAt(1)==="="&&(g=_s(m,r)+(Je(m)||0),(g||g===0)&&(r=g))),m!==r||Ic)return!isNaN(m*r)&&r!==""?(g=new mn(this._pt,t,e,+m||0,r-(m||0),typeof f=="boolean"?p0:wp,0,_),h&&(g.fp=h),l&&g.modifier(l,this,t),this._pt=g):(!f&&!(e in t)&&Fu(e,r),a0.call(this,t,e,m,r,_,d||Sn.stringFilter,h))},l0=function(t,e,n,r,s){if(He(t)&&(t=fo(t,s,e,n,r)),!Ei(t)||t.style&&t.nodeType||Qe(t)||Hf(t))return Ge(t)?fo(t,s,e,n,r):t;var a={},l;for(l in t)a[l]=fo(t[l],s,e,n,r);return a},vp=function(t,e,n,r,s,a){var l,d,h,f;if(bn[t]&&(l=new bn[t]).init(s,l.rawVars?e[t]:l0(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=d=new mn(n._pt,s,t,0,1,l.render,l,0,l.priority),n!==fs))for(h=n._ptLookup[n._targets.indexOf(s)],f=l._props.length;f--;)h[l._props[f]]=d;return l},Gi,Ic,Hu=function i(t,e){var n=t.vars,r=n.ease,s=n.startAt,a=n.immediateRender,l=n.lazy,d=n.onUpdate,h=n.onUpdateParams,f=n.callbackScope,m=n.runBackwards,_=n.yoyoEase,g=n.keyframes,w=n.autoRevert,y=t._dur,b=t._startAt,v=t._targets,P=t.parent,L=P&&P.data==="nested"?P.parent._targets:v,A=t._overwrite==="auto"&&!Iu,N=t.timeline,U,O,V,E,I,H,j,D,T,F,C,z,G;if(N&&(!g||!r)&&(r="none"),t._ease=Pr(r,Ms.ease),t._yEase=_?pp(Pr(_===!0?r:_,Ms.ease)):0,_&&t._yoyo&&!t._repeat&&(_=t._yEase,t._yEase=t._ease,t._ease=_),t._from=!N&&!!n.runBackwards,!N||g&&!n.stagger){if(D=v[0]?Cr(v[0]).harness:0,z=D&&n[D.prop],U=za(n,Ou),b&&(gi(b.render(-1,!0)),b._lazy=0),s)if(gi(t._startAt=ze.set(v,zn({data:"isStart",overwrite:!1,parent:P,immediateRender:!0,lazy:fn(l),startAt:null,delay:0,onUpdate:d,onUpdateParams:h,callbackScope:f,stagger:0},s))),e<0&&!a&&!w&&t._startAt.render(-1,!0),a){if(e>0&&!w&&(t._startAt=0),y&&e<=0){e&&(t._zTime=e);return}}else w===!1&&(t._startAt=0);else if(m&&y){if(b)!w&&(t._startAt=0);else if(e&&(a=!1),V=zn({overwrite:!1,data:"isFromStart",lazy:a&&fn(l),immediateRender:a,stagger:0,parent:P},U),z&&(V[D.prop]=z),gi(t._startAt=ze.set(v,V)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!a)i(t._startAt,we);else if(!e)return}for(t._pt=t._ptCache=0,l=y&&fn(l)||l&&!y,O=0;O<v.length;O++){if(I=v[O],j=I._gsap||Bu(v)[O]._gsap,t._ptLookup[O]=F={},Pc[j.id]&&Yi.length&&Va(),C=L===v?O:L.indexOf(I),D&&(T=new D).init(I,z||U,t,C,L)!==!1&&(t._pt=E=new mn(t._pt,I,T.name,0,1,T.render,T,0,T.priority),T._props.forEach(function(et){F[et]=E}),T.priority&&(H=1)),!D||z)for(V in U)bn[V]&&(T=vp(V,U,t,C,I,L))?T.priority&&(H=1):F[V]=E=zu.call(t,I,V,"get",U[V],C,L,0,n.stringFilter);t._op&&t._op[O]&&t.kill(I,t._op[O]),A&&t._pt&&(Gi=t,Pe.killTweensOf(I,F,t.globalTime(e)),G=!t.parent,Gi=0),t._pt&&l&&(Pc[j.id]=1)}H&&Mp(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!G,g&&e<=0&&N.render(On,!0,!0)},c0=function(t,e,n,r,s,a,l){var d=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,m;if(!d)for(d=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(h=f[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e;)h=h._next;if(!h)return Ic=1,t.vars[e]="+=0",Hu(t,l),Ic=0,1;d.push(h)}for(m=d.length;m--;)h=d[m],h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,h.e&&(h.e=De(n)+Je(h.e)),h.b&&(h.b=h.s+Je(h.b))},u0=function(t,e){var n=t[0]?Cr(t[0]).harness:0,r=n&&n.aliases,s,a,l,d;if(!r)return e;s=Rr({},e);for(a in r)if(a in s)for(d=r[a].split(","),l=d.length;l--;)s[d[l]]=s[a];return s},h0=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,l;if(Qe(e))l=n[t]||(n[t]=[]),e.forEach(function(d,h){return l.push({t:h/(e.length-1)*100,v:d,e:s})});else for(a in e)l=n[a]||(n[a]=[]),a==="ease"||l.push({t:parseFloat(t),v:e[a],e:s})},fo=function(t,e,n,r,s){return He(t)?t.call(e,n,r,s):Ge(t)&&~t.indexOf("random(")?yo(t):t},xp=ku+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bp={};pn(xp+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return bp[i]=1});var ze=function(i){Bf(t,i);function t(n,r,s,a){var l;typeof r=="number"&&(s.duration=r,r=s,s=null),l=i.call(this,a?r:uo(r))||this;var d=l.vars,h=d.duration,f=d.delay,m=d.immediateRender,_=d.stagger,g=d.overwrite,w=d.keyframes,y=d.defaults,b=d.scrollTrigger,v=d.yoyoEase,P=r.parent||Pe,L=(Qe(n)||Hf(n)?Mi(n[0]):"length"in r)?[n]:kn(n),A,N,U,O,V,E,I,H;if(l._targets=L.length?Bu(L):Ba("GSAP target "+n+" not found. https://greensock.com",!Sn.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,w||_||ta(h)||ta(f)){if(r=l.vars,A=l.timeline=new dn({data:"nested",defaults:y||{}}),A.kill(),A.parent=A._dp=_i(l),A._start=0,_||ta(h)||ta(f)){if(O=L.length,I=_&&op(_),Ei(_))for(V in _)~xp.indexOf(V)&&(H||(H={}),H[V]=_[V]);for(N=0;N<O;N++)U=za(r,bp),U.stagger=0,v&&(U.yoyoEase=v),H&&Rr(U,H),E=L[N],U.duration=+fo(h,_i(l),N,E,L),U.delay=(+fo(f,_i(l),N,E,L)||0)-l._delay,!_&&O===1&&U.delay&&(l._delay=f=U.delay,l._start+=f,U.delay=0),A.to(E,U,I?I(N,E,L):0),A._ease=re.none;A.duration()?h=f=0:l.timeline=0}else if(w){uo(zn(A.vars.defaults,{ease:"none"})),A._ease=Pr(w.ease||r.ease||"none");var j=0,D,T,F;if(Qe(w))w.forEach(function(C){return A.to(L,C,">")});else{U={};for(V in w)V==="ease"||V==="easeEach"||h0(V,w[V],U,w.easeEach);for(V in U)for(D=U[V].sort(function(C,z){return C.t-z.t}),j=0,N=0;N<D.length;N++)T=D[N],F={ease:T.e,duration:(T.t-(N?D[N-1].t:0))/100*h},F[V]=T.v,A.to(L,F,j),j+=F.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||l.duration(h=A.duration())}else l.timeline=0;return g===!0&&!Iu&&(Gi=_i(l),Pe.killTweensOf(L),Gi=0),ti(P,_i(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(m||!h&&!w&&l._start===Ze(P._time)&&fn(m)&&Vv(_i(l))&&P.data!=="nested")&&(l._tTime=-we,l.render(Math.max(0,-f))),b&&np(_i(l),b),l}var e=t.prototype;return e.render=function(r,s,a){var l=this._time,d=this._tDur,h=this._dur,f=r>d-we&&r>=0?d:r<we?0:r,m,_,g,w,y,b,v,P,L;if(!h)Hv(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=r<0){if(m=f,P=this.timeline,this._repeat){if(w=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(w*100+r,s,a);if(m=Ze(f%w),f===d?(g=this._repeat,m=h):(g=~~(f/w),g&&g===f/w&&(m=h,g--),m>h&&(m=h)),b=this._yoyo&&g&1,b&&(L=this._yEase,m=h-m),y=Es(this._tTime,w),m===l&&!a&&this._initted)return this._tTime=f,this;g!==y&&(P&&this._yEase&&mp(P,b),this.vars.repeatRefresh&&!b&&!this._lock&&(this._lock=a=1,this.render(Ze(w*g),!0).invalidate()._lock=0))}if(!this._initted){if(ip(this,r<0?r:m,a,s))return this._tTime=0,this;if(l!==this._time)return this;if(h!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(L||this._ease)(m/h),this._from&&(this.ratio=v=1-v),m&&!l&&!s&&(Bn(this,"onStart"),this._tTime!==f))return this;for(_=this._pt;_;)_.r(v,_.d),_=_._next;P&&P.render(r<0?r:!m&&b?-we:P._dur*P._ease(m/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(r<0&&this._startAt&&this._startAt.render(r,!0,a),Bn(this,"onUpdate")),this._repeat&&g!==y&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(r<0&&this._startAt&&!this._onUpdate&&this._startAt.render(r,!0,!0),(r||!h)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gi(this,1),!s&&!(r<0&&!l)&&(f||l)&&(Bn(this,f===d?"onComplete":"onReverseComplete",!0),this._prom&&!(f<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),i.prototype.invalidate.call(this)},e.resetTo=function(r,s,a,l){wo||yn.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Hu(this,d),h=this._ease(d/this._dur),c0(this,r,s,a,l,h,d)?this.resetTo(r,s,a,l):(Vu(this,0),this.parent||tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?oo(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Gi&&Gi.vars.overwrite!==!0)._first||oo(this),this.parent&&a!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/a,0,1),this}var l=this._targets,d=r?kn(r):l,h=this._ptLookup,f=this._pt,m,_,g,w,y,b,v;if((!s||s==="all")&&kv(l,d))return s==="all"&&(this._pt=0),oo(this);for(m=this._op=this._op||[],s!=="all"&&(Ge(s)&&(y={},pn(s,function(P){return y[P]=1}),s=y),s=u0(l,s)),v=l.length;v--;)if(~d.indexOf(l[v])){_=h[v],s==="all"?(m[v]=s,w=_,g={}):(g=m[v]=m[v]||{},w=s);for(y in w)b=_&&_[y],b&&((!("kill"in b.d)||b.d.kill(y)===!0)&&nl(this,b,"_pt"),delete _[y]),g!=="all"&&(g[y]=1)}return this._initted&&!this._pt&&f&&oo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ho(1,arguments)},t.delayedCall=function(r,s,a,l){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:l})},t.fromTo=function(r,s,a){return ho(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return Pe.killTweensOf(r,s,a)},t}(So);zn(ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pn("staggerTo,staggerFrom,staggerFromTo",function(i){ze[i]=function(){var t=new dn,e=Dc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Gu=function(t,e,n){return t[e]=n},yp=function(t,e,n){return t[e](n)},d0=function(t,e,n,r){return t[e](r.fp,n)},f0=function(t,e,n){return t.setAttribute(e,n)},Wu=function(t,e){return He(t[e])?yp:Uu(t[e])&&t.setAttribute?f0:Gu},wp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},p0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Sp=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Xu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},m0=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},_0=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?nl(this,e,"_pt"):e.dep||(n=1),e=r;return!n},g0=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Mp=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},mn=function(){function i(e,n,r,s,a,l,d,h,f){this.t=n,this.s=s,this.c=a,this.p=r,this.r=l||wp,this.d=d||this,this.set=h||Gu,this.pr=f||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=g0,this.m=n,this.mt=s,this.tween=r},i}();pn(ku+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Ou[i]=1});En.TweenMax=En.TweenLite=ze;En.TimelineLite=En.TimelineMax=dn;Pe=new dn({sortChildren:!1,defaults:Ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=fp;var Ga={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return t0(r)})},timeline:function(t){return new dn(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ge(t)&&(t=kn(t)[0]);var s=Cr(t||{}).get,a=n?Qf:Jf;return n==="native"&&(n=""),t&&(e?a((bn[e]&&bn[e].get||s)(t,e,n,r)):function(l,d,h){return a((bn[l]&&bn[l].get||s)(t,l,d,h))})},quickSetter:function(t,e,n){if(t=kn(t),t.length>1){var r=t.map(function(f){return $n.quickSetter(f,e,n)}),s=r.length;return function(f){for(var m=s;m--;)r[m](f)}}t=t[0]||{};var a=bn[e],l=Cr(t),d=l.harness&&(l.harness.aliases||{})[e]||e,h=a?function(f){var m=new a;fs._pt=0,m.init(t,n?f+n:f,fs,0,[t]),m.render(1,m),fs._pt&&Xu(1,fs)}:l.set(t,d);return a?h:function(f){return h(t,d,n?f+n:f,l,1)}},quickTo:function(t,e,n){var r,s=$n.to(t,Rr((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),a=function(d,h,f){return s.resetTo(e,d,h,f)};return a.tween=s,a},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pr(t.ease,Ms.ease)),ad(Ms,t||{})},config:function(t){return ad(Sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!bn[l]&&!En[l]&&Ba(e+" effect requires "+l+" plugin.")}),Ol[e]=function(l,d,h){return n(kn(l),zn(d||{},s),h)},a&&(dn.prototype[e]=function(l,d,h){return this.add(Ol[e](l,Ei(d)?d:(h=d)&&{},this),h)})},registerEase:function(t,e){re[t]=Pr(e)},parseEase:function(t,e){return arguments.length?Pr(t,e):re},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new dn(t),r,s;for(n.smoothChildTiming=fn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,r=Pe._first;r;)s=r._next,(e||!(!r._dur&&r instanceof ze&&r.vars.onComplete===r._targets[0]))&&ti(n,r,r._start-r._delay),r=s;return ti(Pe,n,0),n},utils:{wrap:Zv,wrapYoyo:Jv,distribute:op,random:lp,snap:ap,normalize:$v,getUnit:Je,clamp:Xv,splitColor:hp,toArray:kn,selector:Yv,mapRange:up,pipe:jv,unitize:Kv,interpolate:Qv,shuffle:sp},install:Yf,effects:Ol,ticker:yn,updateRoot:dn.updateRoot,plugins:bn,globalTimeline:Pe,core:{PropTween:mn,globals:jf,Tween:ze,Timeline:dn,Animation:So,getCache:Cr,_removeLinkedListItem:nl,suppressOverwrites:function(t){return Iu=t}}};pn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ga[i]=ze[i]});yn.add(dn.updateRoot);fs=Ga.to({},{duration:0});var v0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},x0=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=v0(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},zl=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(l){var d,h;if(Ge(s)&&(d={},pn(s,function(f){return d[f]=1}),s=d),e){d={};for(h in s)d[h]=e(s[h]);s=d}x0(l,s)}}}},$n=Ga.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,l;for(a in e)l=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],r,s,0,0,a),l&&(l.op=a),this._props.push(a)}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n])}},zl("roundProps",Lc),zl("modifiers"),zl("snap",ap))||Ga;ze.version=dn.version=$n.version="3.10.4";qf=1;zf()&&Cs();re.Power0;re.Power1;re.Power2;re.Power3;re.Power4;re.Linear;re.Quad;re.Cubic;re.Quart;re.Quint;re.Strong;re.Elastic;re.Back;re.SteppedEase;re.Bounce;re.Sine;re.Expo;re.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dd,Wi,gs,qu,Mr,fd,b0=function(){return typeof window!="undefined"},$i={},_r=180/Math.PI,vs=Math.PI/180,jr=Math.atan2,pd=1e8,Ep=/([A-Z])/g,y0=/(left|right|width|margin|padding|x)/i,w0=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},S0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},M0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},E0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Cp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ap=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},T0=function(t,e,n){return t.style[e]=n},C0=function(t,e,n){return t.style.setProperty(e,n)},A0=function(t,e,n){return t._gsap[e]=n},P0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},R0=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},D0=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ye="transform",Zi=Ye+"Origin",Pp,Uc=function(t,e){var n=Wi.createElementNS?Wi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wi.createElement(t);return n.style?n:Wi.createElement(t)},vi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Ep,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,As(e)||e,1)||""},md="O,Moz,ms,Ms,Webkit".split(","),As=function(t,e,n){var r=e||Mr,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(md[a]+t in s););return a<0?null:(a===3?"ms":a>=0?md[a]:"")+t},Nc=function(){b0()&&window.document&&(dd=window,Wi=dd.document,gs=Wi.documentElement,Mr=Uc("div")||{style:{}},Uc("div"),Ye=As(Ye),Zi=Ye+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pp=!!As("perspective"),qu=1)},Hl=function i(t){var e=Uc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(gs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),gs.removeChild(e),this.style.cssText=s,a},_d=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rp=function(t){var e;try{e=t.getBBox()}catch{e=Hl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Hl||(e=Hl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+_d(t,["x","cx","x1"])||0,y:+_d(t,["y","cy","y1"])||0,width:0,height:0}:e},Dp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rp(t))},Mo=function(t,e){if(e){var n=t.style;e in $i&&e!==Zi&&(e=Ye),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Ep,"-$1").toLowerCase())):n.removeAttribute(e)}},qi=function(t,e,n,r,s,a){var l=new mn(t._pt,e,n,0,1,a?Ap:Cp);return t._pt=l,l.b=r,l.e=s,t._props.push(n),l},gd={deg:1,rad:1,turn:1},Ji=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",l=Mr.style,d=y0.test(e),h=t.tagName.toLowerCase()==="svg",f=(h?"client":"offset")+(d?"Width":"Height"),m=100,_=r==="px",g=r==="%",w,y,b,v;return r===a||!s||gd[r]||gd[a]?s:(a!=="px"&&!_&&(s=i(t,e,n,"px")),v=t.getCTM&&Dp(t),(g||a==="%")&&($i[e]||~e.indexOf("adius"))?(w=v?t.getBBox()[d?"width":"height"]:t[f],De(g?s/w*m:s/100*w)):(l[d?"width":"height"]=m+(_?a:r),y=~e.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,v&&(y=(t.ownerSVGElement||{}).parentNode),(!y||y===Wi||!y.appendChild)&&(y=Wi.body),b=y._gsap,b&&g&&b.width&&d&&b.time===yn.time?De(s/b.width*m):((g||a==="%")&&(l.position=vi(t,"position")),y===t&&(l.position="static"),y.appendChild(Mr),w=Mr[f],y.removeChild(Mr),l.position="absolute",d&&g&&(b=Cr(y),b.time=yn.time,b.width=y[f]),De(_?w*s/m:w&&s?m/w*s:0))))},gr=function(t,e,n,r){var s;return qu||Nc(),e in Xi&&e!=="transform"&&(e=Xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),$i[e]&&e!=="transform"?(s=To(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Xa(vi(t,Zi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Wa[e]&&Wa[e](t,e,n)||vi(t,e)||$f(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(t,e,s,n)+n:s},L0=function(t,e,n,r){if(!n||n==="none"){var s=As(e,t,1),a=s&&vi(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=vi(t,"borderTopColor"))}var l=new mn(this._pt,t.style,e,0,1,Sp),d=0,h=0,f,m,_,g,w,y,b,v,P,L,A,N;if(l.b=n,l.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=vi(t,e)||r,t.style[e]=n),f=[n,r],fp(f),n=f[0],r=f[1],_=n.match(ds)||[],N=r.match(ds)||[],N.length){for(;m=ds.exec(r);)b=m[0],P=r.substring(d,m.index),w?w=(w+1)%5:(P.substr(-5)==="rgba("||P.substr(-5)==="hsla(")&&(w=1),b!==(y=_[h++]||"")&&(g=parseFloat(y)||0,A=y.substr((g+"").length),b.charAt(1)==="="&&(b=_s(g,b)+A),v=parseFloat(b),L=b.substr((v+"").length),d=ds.lastIndex-L.length,L||(L=L||Sn.units[e]||A,d===r.length&&(r+=L,l.e+=L)),A!==L&&(g=Ji(t,e,y,L)||0),l._pt={_next:l._pt,p:P||h===1?P:",",s:g,c:v-g,m:w&&w<4||e==="zIndex"?Math.round:0});l.c=d<r.length?r.substring(d,r.length):""}else l.r=e==="display"&&r==="none"?Ap:Cp;return Wf.test(r)&&(l.e=0),this._pt=l,l},vd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I0=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=vd[n]||n,e[1]=vd[r]||r,e.join(" ")},U0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,l,d,h;if(s==="all"||s===!0)r.cssText="",d=1;else for(s=s.split(","),h=s.length;--h>-1;)l=s[h],$i[l]&&(d=1,l=l==="transformOrigin"?Zi:Ye),Mo(n,l);d&&(Mo(n,Ye),a&&(a.svg&&n.removeAttribute("transform"),To(n,1),a.uncache=1))}},Wa={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new mn(t._pt,e,n,0,0,U0);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},Eo=[1,0,0,1,0,0],Lp={},Ip=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},xd=function(t){var e=vi(t,Ye);return Ip(e)?Eo:e.substr(7).match(Gf).map(De)},Yu=function(t,e){var n=t._gsap||Cr(t),r=t.style,s=xd(t),a,l,d,h;return n.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,s=[d.a,d.b,d.c,d.d,d.e,d.f],s.join(",")==="1,0,0,1,0,0"?Eo:s):(s===Eo&&!t.offsetParent&&t!==gs&&!n.svg&&(d=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(h=1,l=t.nextSibling,gs.appendChild(t)),s=xd(t),d?r.display=d:Mo(t,"display"),h&&(l?a.insertBefore(t,l):a?a.appendChild(t):gs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fc=function(t,e,n,r,s,a){var l=t._gsap,d=s||Yu(t,!0),h=l.xOrigin||0,f=l.yOrigin||0,m=l.xOffset||0,_=l.yOffset||0,g=d[0],w=d[1],y=d[2],b=d[3],v=d[4],P=d[5],L=e.split(" "),A=parseFloat(L[0])||0,N=parseFloat(L[1])||0,U,O,V,E;n?d!==Eo&&(O=g*b-w*y)&&(V=A*(b/O)+N*(-y/O)+(y*P-b*v)/O,E=A*(-w/O)+N*(g/O)-(g*P-w*v)/O,A=V,N=E):(U=Rp(t),A=U.x+(~L[0].indexOf("%")?A/100*U.width:A),N=U.y+(~(L[1]||L[0]).indexOf("%")?N/100*U.height:N)),r||r!==!1&&l.smooth?(v=A-h,P=N-f,l.xOffset=m+(v*g+P*y)-v,l.yOffset=_+(v*w+P*b)-P):l.xOffset=l.yOffset=0,l.xOrigin=A,l.yOrigin=N,l.smooth=!!r,l.origin=e,l.originIsAbsolute=!!n,t.style[Zi]="0px 0px",a&&(qi(a,l,"xOrigin",h,A),qi(a,l,"yOrigin",f,N),qi(a,l,"xOffset",m,l.xOffset),qi(a,l,"yOffset",_,l.yOffset)),t.setAttribute("data-svg-origin",A+" "+N)},To=function(t,e){var n=t._gsap||new gp(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",l="deg",d=vi(t,Zi)||"0",h,f,m,_,g,w,y,b,v,P,L,A,N,U,O,V,E,I,H,j,D,T,F,C,z,G,et,rt,ot,st,ht,Wt;return h=f=m=w=y=b=v=P=L=0,_=g=1,n.svg=!!(t.getCTM&&Dp(t)),U=Yu(t,n.svg),n.svg&&(C=(!n.uncache||d==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),Fc(t,C||d,!!C||n.originIsAbsolute,n.smooth!==!1,U)),A=n.xOrigin||0,N=n.yOrigin||0,U!==Eo&&(I=U[0],H=U[1],j=U[2],D=U[3],h=T=U[4],f=F=U[5],U.length===6?(_=Math.sqrt(I*I+H*H),g=Math.sqrt(D*D+j*j),w=I||H?jr(H,I)*_r:0,v=j||D?jr(j,D)*_r+w:0,v&&(g*=Math.abs(Math.cos(v*vs))),n.svg&&(h-=A-(A*I+N*j),f-=N-(A*H+N*D))):(Wt=U[6],st=U[7],et=U[8],rt=U[9],ot=U[10],ht=U[11],h=U[12],f=U[13],m=U[14],O=jr(Wt,ot),y=O*_r,O&&(V=Math.cos(-O),E=Math.sin(-O),C=T*V+et*E,z=F*V+rt*E,G=Wt*V+ot*E,et=T*-E+et*V,rt=F*-E+rt*V,ot=Wt*-E+ot*V,ht=st*-E+ht*V,T=C,F=z,Wt=G),O=jr(-j,ot),b=O*_r,O&&(V=Math.cos(-O),E=Math.sin(-O),C=I*V-et*E,z=H*V-rt*E,G=j*V-ot*E,ht=D*E+ht*V,I=C,H=z,j=G),O=jr(H,I),w=O*_r,O&&(V=Math.cos(O),E=Math.sin(O),C=I*V+H*E,z=T*V+F*E,H=H*V-I*E,F=F*V-T*E,I=C,T=z),y&&Math.abs(y)+Math.abs(w)>359.9&&(y=w=0,b=180-b),_=De(Math.sqrt(I*I+H*H+j*j)),g=De(Math.sqrt(F*F+Wt*Wt)),O=jr(T,F),v=Math.abs(O)>2e-4?O*_r:0,L=ht?1/(ht<0?-ht:ht):0),n.svg&&(C=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ip(vi(t,Ye)),C&&t.setAttribute("transform",C))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(_*=-1,v+=w<=0?180:-180,w+=w<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=m+a,n.scaleX=De(_),n.scaleY=De(g),n.rotation=De(w)+l,n.rotationX=De(y)+l,n.rotationY=De(b)+l,n.skewX=v+l,n.skewY=P+l,n.transformPerspective=L+a,(n.zOrigin=parseFloat(d.split(" ")[2])||0)&&(r[Zi]=Xa(d)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?F0:Pp?Up:N0,n.uncache=0,n},Xa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Gl=function(t,e,n){var r=Je(e);return De(parseFloat(e)+parseFloat(Ji(t,"x",n+"px",r)))+r},N0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Up(t,e)},lr="0deg",Qs="0px",cr=") ",Up=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,l=n.y,d=n.z,h=n.rotation,f=n.rotationY,m=n.rotationX,_=n.skewX,g=n.skewY,w=n.scaleX,y=n.scaleY,b=n.transformPerspective,v=n.force3D,P=n.target,L=n.zOrigin,A="",N=v==="auto"&&t&&t!==1||v===!0;if(L&&(m!==lr||f!==lr)){var U=parseFloat(f)*vs,O=Math.sin(U),V=Math.cos(U),E;U=parseFloat(m)*vs,E=Math.cos(U),a=Gl(P,a,O*E*-L),l=Gl(P,l,-Math.sin(U)*-L),d=Gl(P,d,V*E*-L+L)}b!==Qs&&(A+="perspective("+b+cr),(r||s)&&(A+="translate("+r+"%, "+s+"%) "),(N||a!==Qs||l!==Qs||d!==Qs)&&(A+=d!==Qs||N?"translate3d("+a+", "+l+", "+d+") ":"translate("+a+", "+l+cr),h!==lr&&(A+="rotate("+h+cr),f!==lr&&(A+="rotateY("+f+cr),m!==lr&&(A+="rotateX("+m+cr),(_!==lr||g!==lr)&&(A+="skew("+_+", "+g+cr),(w!==1||y!==1)&&(A+="scale("+w+", "+y+cr),P.style[Ye]=A||"translate(0, 0)"},F0=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,l=n.y,d=n.rotation,h=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,g=n.target,w=n.xOrigin,y=n.yOrigin,b=n.xOffset,v=n.yOffset,P=n.forceCSS,L=parseFloat(a),A=parseFloat(l),N,U,O,V,E;d=parseFloat(d),h=parseFloat(h),f=parseFloat(f),f&&(f=parseFloat(f),h+=f,d+=f),d||h?(d*=vs,h*=vs,N=Math.cos(d)*m,U=Math.sin(d)*m,O=Math.sin(d-h)*-_,V=Math.cos(d-h)*_,h&&(f*=vs,E=Math.tan(h-f),E=Math.sqrt(1+E*E),O*=E,V*=E,f&&(E=Math.tan(f),E=Math.sqrt(1+E*E),N*=E,U*=E)),N=De(N),U=De(U),O=De(O),V=De(V)):(N=m,V=_,U=O=0),(L&&!~(a+"").indexOf("px")||A&&!~(l+"").indexOf("px"))&&(L=Ji(g,"x",a,"px"),A=Ji(g,"y",l,"px")),(w||y||b||v)&&(L=De(L+w-(w*N+y*O)+b),A=De(A+y-(w*U+y*V)+v)),(r||s)&&(E=g.getBBox(),L=De(L+r/100*E.width),A=De(A+s/100*E.height)),E="matrix("+N+","+U+","+O+","+V+","+L+","+A+")",g.setAttribute("transform",E),P&&(g.style[Ye]=E)},O0=function(t,e,n,r,s){var a=360,l=Ge(s),d=parseFloat(s)*(l&&~s.indexOf("rad")?_r:1),h=d-r,f=r+h+"deg",m,_;return l&&(m=s.split("_")[1],m==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),m==="cw"&&h<0?h=(h+a*pd)%a-~~(h/a)*a:m==="ccw"&&h>0&&(h=(h-a*pd)%a-~~(h/a)*a)),t._pt=_=new mn(t._pt,e,n,r,h,S0),_.e=f,_.u="deg",t._props.push(n),_},bd=function(t,e){for(var n in e)t[n]=e[n];return t},k0=function(t,e,n){var r=bd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,l,d,h,f,m,_,g,w;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ye]=e,l=To(n,1),Mo(n,Ye),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Ye],a[Ye]=e,l=To(n,1),a[Ye]=h);for(d in $i)h=r[d],f=l[d],h!==f&&s.indexOf(d)<0&&(g=Je(h),w=Je(f),m=g!==w?Ji(n,d,h,w):parseFloat(h),_=parseFloat(f),t._pt=new mn(t._pt,l,d,m,_-m,Tp),t._pt.u=w||0,t._props.push(d));bd(l,r)};pn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(l){return t<2?i+l:"border"+l+i});Wa[t>1?"border"+i:i]=function(l,d,h,f,m){var _,g;if(arguments.length<4)return _=a.map(function(w){return gr(l,w,h)}),g=_.join(" "),g.split(_[0]).length===5?_[0]:g;_=(f+"").split(" "),g={},a.forEach(function(w,y){return g[w]=_[y]=_[y]||_[(y-1)/2|0]}),l.init(d,g,m)}});var Np={name:"css",register:Nc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,l=t.style,d=n.vars.startAt,h,f,m,_,g,w,y,b,v,P,L,A,N,U,O;qu||Nc();for(y in e)if(y!=="autoRound"&&(f=e[y],!(bn[y]&&vp(y,e,n,r,t,s)))){if(g=typeof f,w=Wa[y],g==="function"&&(f=f.call(n,r,t,s),g=typeof f),g==="string"&&~f.indexOf("random(")&&(f=yo(f)),w)w(this,t,y,f,n)&&(O=1);else if(y.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(y)+"").trim(),f+="",ji.lastIndex=0,ji.test(h)||(b=Je(h),v=Je(f)),v?b!==v&&(h=Ji(t,y,h,v)+v):b&&(f+=b),this.add(l,"setProperty",h,f,r,s,0,0,y),a.push(y);else if(g!=="undefined"){if(d&&y in d?(h=typeof d[y]=="function"?d[y].call(n,r,t,s):d[y],Ge(h)&&~h.indexOf("random(")&&(h=yo(h)),Je(h+"")||(h+=Sn.units[y]||Je(gr(t,y))||""),(h+"").charAt(1)==="="&&(h=gr(t,y))):h=gr(t,y),_=parseFloat(h),P=g==="string"&&f.charAt(1)==="="&&f.substr(0,2),P&&(f=f.substr(2)),m=parseFloat(f),y in Xi&&(y==="autoAlpha"&&(_===1&&gr(t,"visibility")==="hidden"&&m&&(_=0),qi(this,l,"visibility",_?"inherit":"hidden",m?"inherit":"hidden",!m)),y!=="scale"&&y!=="transform"&&(y=Xi[y],~y.indexOf(",")&&(y=y.split(",")[0]))),L=y in $i,L){if(A||(N=t._gsap,N.renderTransform&&!e.parseTransform||To(t,e.parseTransform),U=e.smoothOrigin!==!1&&N.smooth,A=this._pt=new mn(this._pt,l,Ye,0,1,N.renderTransform,N,0,-1),A.dep=1),y==="scale")this._pt=new mn(this._pt,N,"scaleY",N.scaleY,(P?_s(N.scaleY,P+m):m)-N.scaleY||0),a.push("scaleY",y),y+="X";else if(y==="transformOrigin"){f=I0(f),N.svg?Fc(t,f,0,U,0,this):(v=parseFloat(f.split(" ")[2])||0,v!==N.zOrigin&&qi(this,N,"zOrigin",N.zOrigin,v),qi(this,l,y,Xa(h),Xa(f)));continue}else if(y==="svgOrigin"){Fc(t,f,1,U,0,this);continue}else if(y in Lp){O0(this,N,y,_,P?_s(_,P+f):f);continue}else if(y==="smoothOrigin"){qi(this,N,"smooth",N.smooth,f);continue}else if(y==="force3D"){N[y]=f;continue}else if(y==="transform"){k0(this,f,t);continue}}else y in l||(y=As(y)||y);if(L||(m||m===0)&&(_||_===0)&&!w0.test(f)&&y in l)b=(h+"").substr((_+"").length),m||(m=0),v=Je(f)||(y in Sn.units?Sn.units[y]:b),b!==v&&(_=Ji(t,y,h,v)),this._pt=new mn(this._pt,L?N:l,y,_,(P?_s(_,P+m):m)-_,!L&&(v==="px"||y==="zIndex")&&e.autoRound!==!1?E0:Tp),this._pt.u=v||0,b!==v&&v!=="%"&&(this._pt.b=h,this._pt.r=M0);else if(y in l)L0.call(this,t,y,h,P?P+f:f);else if(y in t)this.add(t,y,h||t[y],P?P+f:f,r,s);else{Fu(y,f);continue}a.push(y)}}O&&Mp(this)},get:gr,aliases:Xi,getSetter:function(t,e,n){var r=Xi[e];return r&&r.indexOf(",")<0&&(e=r),e in $i&&e!==Zi&&(t._gsap.x||gr(t,"x"))?n&&fd===n?e==="scale"?P0:A0:(fd=n||{})&&(e==="scale"?R0:D0):t.style&&!Uu(t.style[e])?T0:~e.indexOf("-")?C0:Wu(t,e)},core:{_removeProperty:Mo,_getMatrix:Yu}};$n.utils.checkPrefix=As;(function(i,t,e,n){var r=pn(i+","+t+","+e,function(s){$i[s]=1});pn(t,function(s){Sn.units[s]="deg",Lp[s]=1}),Xi[r[13]]=i+","+t,pn(n,function(s){var a=s.split(":");Xi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Sn.units[i]="px"});$n.registerPlugin(Np);var qa=$n.registerPlugin(Np)||$n;qa.core.Tween;var ju=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Fp={exports:{}};(function(i,t){(function(e,n){i.exports=n()})(ju,function(){var e=function(){function n(g){return a.appendChild(g.dom),g}function r(g){for(var w=0;w<a.children.length;w++)a.children[w].style.display=w===g?"block":"none";s=g}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(g){g.preventDefault(),r(++s%a.children.length)},!1);var l=(performance||Date).now(),d=l,h=0,f=n(new e.Panel("FPS","#0ff","#002")),m=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var _=n(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:n,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){h++;var g=(performance||Date).now();if(m.update(g-l,200),g>d+1e3&&(f.update(1e3*h/(g-d),100),d=g,h=0,_)){var w=performance.memory;_.update(w.usedJSHeapSize/1048576,w.jsHeapSizeLimit/1048576)}return g},update:function(){l=this.end()},domElement:a,setMode:r}};return e.Panel=function(n,r,s){var a=1/0,l=0,d=Math.round,h=d(window.devicePixelRatio||1),f=80*h,m=48*h,_=3*h,g=2*h,w=3*h,y=15*h,b=74*h,v=30*h,P=document.createElement("canvas");P.width=f,P.height=m,P.style.cssText="width:80px;height:48px";var L=P.getContext("2d");return L.font="bold "+9*h+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=s,L.fillRect(0,0,f,m),L.fillStyle=r,L.fillText(n,_,g),L.fillRect(w,y,b,v),L.fillStyle=s,L.globalAlpha=.9,L.fillRect(w,y,b,v),{dom:P,update:function(A,N){a=Math.min(a,A),l=Math.max(l,A),L.fillStyle=s,L.globalAlpha=1,L.fillRect(0,0,f,y),L.fillStyle=r,L.fillText(d(A)+" "+n+" ("+d(a)+"-"+d(l)+")",_,g),L.drawImage(P,w+h,y,b-h,v,w,y,b-h,v),L.fillRect(w+b-h,y,h,v),L.fillStyle=s,L.globalAlpha=.9,L.fillRect(w+b-h,y,h,d((1-A/N)*v))}}},e})})(Fp);var B0=Fp.exports,Oc={exports:{}};/*! Tweakpane 3.0.8 (c) 2016 cocopon, licensed under the MIT license. */(function(i,t){(function(e,n){n(t)})(ju,function(e){class n{constructor(o){const[c,p]=o.split("-"),S=c.split(".");this.major=parseInt(S[0],10),this.minor=parseInt(S[1],10),this.patch=parseInt(S[2],10),this.prerelease=p!=null?p:null}toString(){const o=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[o,this.prerelease].join("-"):o}}class r{constructor(o){this.controller_=o}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(o){this.controller_.viewProps.set("disabled",o)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(o){this.controller_.viewProps.set("hidden",o)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class s{constructor(o){this.target=o}}class a extends s{constructor(o,c,p,S){super(o),this.value=c,this.presetKey=p,this.last=S!=null?S:!0}}class l extends s{constructor(o,c,p){super(o),this.value=c,this.presetKey=p}}class d extends s{constructor(o,c){super(o),this.expanded=c}}function h(u){return u}function f(u){return u==null}function m(u,o){if(u.length!==o.length)return!1;for(let c=0;c<u.length;c++)if(u[c]!==o[c])return!1;return!0}const _={alreadydisposed:()=>"View has been already disposed",invalidparams:u=>`Invalid parameters for '${u.name}'`,nomatchingcontroller:u=>`No matching controller for '${u.key}'`,nomatchingview:u=>`No matching view for '${JSON.stringify(u.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:u=>`Property '${u.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class g{constructor(o){var c;this.message=(c=_[o.type](o.context))!==null&&c!==void 0?c:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=o.type}static alreadyDisposed(){return new g({type:"alreadydisposed"})}static notBindable(){return new g({type:"notbindable"})}static propertyNotFound(o){return new g({type:"propertynotfound",context:{name:o}})}static shouldNeverHappen(){return new g({type:"shouldneverhappen"})}}class w{constructor(o,c,p){this.obj_=o,this.key_=c,this.presetKey_=p!=null?p:c}static isBindable(o){return!(o===null||typeof o!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(o){this.obj_[this.key_]=o}writeProperty(o,c){const p=this.read();if(!w.isBindable(p))throw g.notBindable();if(!(o in p))throw g.propertyNotFound(o);p[o]=c}}class y extends r{get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get title(){var o;return(o=this.controller_.valueController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.valueController.props.set("title",o)}on(o,c){const p=c.bind(this);return this.controller_.valueController.emitter.on(o,()=>{p(new s(this))}),this}}class b{constructor(){this.observers_={}}on(o,c){let p=this.observers_[o];return p||(p=this.observers_[o]=[]),p.push({handler:c}),this}off(o,c){const p=this.observers_[o];return p&&(this.observers_[o]=p.filter(S=>S.handler!==c)),this}emit(o,c){const p=this.observers_[o];!p||p.forEach(S=>{S.handler(c)})}}const v="tp";function P(u){return(c,p)=>[v,"-",u,"v",c?`_${c}`:"",p?`-${p}`:""].join("")}function L(u,o){return c=>o(u(c))}function A(u){return u.rawValue}function N(u,o){u.emitter.on("change",L(A,o)),o(u.rawValue)}function U(u,o,c){N(u.value(o),c)}function O(u,o,c){c?u.classList.add(o):u.classList.remove(o)}function V(u,o){return c=>{O(u,o,c)}}function E(u,o){N(u,c=>{o.textContent=c!=null?c:""})}const I=P("btn");class H{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(I()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("button");p.classList.add(I("b")),c.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const S=o.createElement("div");S.classList.add(I("t")),E(c.props.value("title"),S),this.buttonElement.appendChild(S)}}class j{constructor(o,c){this.emitter=new b,this.onClick_=this.onClick_.bind(this),this.props=c.props,this.viewProps=c.viewProps,this.view=new H(o,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class D{constructor(o,c){var p;this.constraint_=c==null?void 0:c.constraint,this.equals_=(p=c==null?void 0:c.equals)!==null&&p!==void 0?p:(S,W)=>S===W,this.emitter=new b,this.rawValue_=o}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,c){const p=c!=null?c:{forceEmit:!1,last:!0},S=this.constraint_?this.constraint_.constrain(o):o;!!this.equals_(this.rawValue_,S)&&!p.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=S,this.emitter.emit("change",{options:p,rawValue:S,sender:this}))}}class T{constructor(o){this.emitter=new b,this.value_=o}get rawValue(){return this.value_}set rawValue(o){this.setRawValue(o,{forceEmit:!1,last:!0})}setRawValue(o,c){const p=c!=null?c:{forceEmit:!1,last:!0};this.value_===o&&!p.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=o,this.emitter.emit("change",{options:p,rawValue:this.value_,sender:this}))}}function F(u,o){const c=o==null?void 0:o.constraint,p=o==null?void 0:o.equals;return!c&&!p?new T(u):new D(u,o)}class C{constructor(o){this.emitter=new b,this.valMap_=o;for(const c in this.valMap_)this.valMap_[c].emitter.on("change",()=>{this.emitter.emit("change",{key:c,sender:this})})}static createCore(o){return Object.keys(o).reduce((p,S)=>Object.assign(p,{[S]:F(o[S])}),{})}static fromObject(o){const c=this.createCore(o);return new C(c)}get(o){return this.valMap_[o].rawValue}set(o,c){this.valMap_[o].rawValue=c}value(o){return this.valMap_[o]}}function z(u,o){const p=Object.keys(o).reduce((S,W)=>{if(S===void 0)return;const gt=o[W](u[W]);return gt.succeeded?Object.assign(Object.assign({},S),{[W]:gt.value}):void 0},{});return p}function G(u,o){return u.reduce((c,p)=>{if(c===void 0)return;const S=o(p);if(!(!S.succeeded||S.value===void 0))return[...c,S.value]},[])}function et(u){return u===null?!1:typeof u=="object"}function rt(u){return o=>c=>{if(!o&&c===void 0)return{succeeded:!1,value:void 0};if(o&&c===void 0)return{succeeded:!0,value:void 0};const p=u(c);return p!==void 0?{succeeded:!0,value:p}:{succeeded:!1,value:void 0}}}function ot(u){return{custom:o=>rt(o)(u),boolean:rt(o=>typeof o=="boolean"?o:void 0)(u),number:rt(o=>typeof o=="number"?o:void 0)(u),string:rt(o=>typeof o=="string"?o:void 0)(u),function:rt(o=>typeof o=="function"?o:void 0)(u),constant:o=>rt(c=>c===o?o:void 0)(u),raw:rt(o=>o)(u),object:o=>rt(c=>{if(!!et(c))return z(c,o)})(u),array:o=>rt(c=>{if(!!Array.isArray(c))return G(c,o)})(u)}}const st={optional:ot(!0),required:ot(!1)};function ht(u,o){const c=st.required.object(o)(u);return c.succeeded?c.value:void 0}function Wt(u){return u&&u.parentElement&&u.parentElement.removeChild(u),null}function Mt(){return["veryfirst","first","last","verylast"]}const nt=P(""),at={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class xt{constructor(o){this.parent_=null,this.blade=o.blade,this.view=o.view,this.viewProps=o.viewProps;const c=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Mt().forEach(p=>{c.classList.remove(nt(void 0,at[p]))}),this.blade.get("positions").forEach(p=>{c.classList.add(nt(void 0,at[p]))})}),this.viewProps.handleDispose(()=>{Wt(c)})}get parent(){return this.parent_}}const Lt="http://www.w3.org/2000/svg";function vt(u){u.offsetHeight}function Bt(u,o){const c=u.style.transition;u.style.transition="none",o(),u.style.transition=c}function se(u){return u.ontouchstart!==void 0}function B(){return new Function("return this")()}function Se(){return B().document}function jt(u){const o=u.ownerDocument.defaultView;return o&&"document"in o?u.getContext("2d"):null}const Xt={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function At(u,o){const c=u.createElementNS(Lt,"svg");return c.innerHTML=Xt[o],c}function ve(u,o,c){u.insertBefore(o,u.children[c])}function Rt(u){u.parentElement&&u.parentElement.removeChild(u)}function Kt(u){for(;u.children.length>0;)u.removeChild(u.children[0])}function Ie(u){for(;u.childNodes.length>0;)u.removeChild(u.childNodes[0])}function Ee(u){return u.relatedTarget?u.relatedTarget:"explicitOriginalTarget"in u?u.explicitOriginalTarget:null}const k=P("lbl");function M(u,o){const c=u.createDocumentFragment();return o.split(`
`).map(S=>u.createTextNode(S)).forEach((S,W)=>{W>0&&c.appendChild(u.createElement("br")),c.appendChild(S)}),c}class K{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(k()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(k("l")),U(c.props,"label",W=>{f(W)?this.element.classList.add(k(void 0,"nol")):(this.element.classList.remove(k(void 0,"nol")),Ie(p),p.appendChild(M(o,W)))}),this.element.appendChild(p),this.labelElement=p;const S=o.createElement("div");S.classList.add(k("v")),this.element.appendChild(S),this.valueElement=S}}class it extends xt{constructor(o,c){const p=c.valueController.viewProps;super(Object.assign(Object.assign({},c),{view:new K(o,{props:c.props,viewProps:p}),viewProps:p})),this.props=c.props,this.valueController=c.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ct={id:"button",type:"blade",accept(u){const o=st,c=ht(u,{title:o.required.string,view:o.required.constant("button"),label:o.optional.string});return c?{params:c}:null},controller(u){return new it(u.document,{blade:u.blade,props:C.fromObject({label:u.params.label}),valueController:new j(u.document,{props:C.fromObject({title:u.params.title}),viewProps:u.viewProps})})},api(u){return!(u.controller instanceof it)||!(u.controller.valueController instanceof j)?null:new y(u.controller)}};class tt extends xt{constructor(o){super(o),this.value=o.value}}function Dt(){return new C({positions:F([],{equals:m})})}class _t extends C{constructor(o){super(o)}static create(o){const c={completed:!0,expanded:o,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},p=C.createCore(c);return new _t(p)}get styleExpanded(){var o;return(o=this.get("temporaryExpanded"))!==null&&o!==void 0?o:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const o=this.get("expandedHeight");return this.get("shouldFixHeight")&&!f(o)?`${o}px`:"auto"}bindExpandedClass(o,c){const p=()=>{this.styleExpanded?o.classList.add(c):o.classList.remove(c)};U(this,"expanded",p),U(this,"temporaryExpanded",p)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function It(u,o){let c=0;return Bt(o,()=>{u.set("expandedHeight",null),u.set("temporaryExpanded",!0),vt(o),c=o.clientHeight,u.set("temporaryExpanded",null),vt(o)}),c}function Ut(u,o){o.style.height=u.styleHeight}function dt(u,o){u.value("expanded").emitter.on("beforechange",()=>{u.set("completed",!1),f(u.get("expandedHeight"))&&u.set("expandedHeight",It(u,o)),u.set("shouldFixHeight",!0),vt(o)}),u.emitter.on("change",()=>{Ut(u,o)}),Ut(u,o),o.addEventListener("transitionend",c=>{c.propertyName==="height"&&u.cleanUpTransition()})}class bt extends r{constructor(o,c){super(o),this.rackApi_=c}}function Gt(u,o){return u.addBlade(Object.assign(Object.assign({},o),{view:"button"}))}function Nt(u,o){return u.addBlade(Object.assign(Object.assign({},o),{view:"folder"}))}function yt(u,o){const c=o||{};return u.addBlade(Object.assign(Object.assign({},c),{view:"separator"}))}function $t(u,o){return u.addBlade(Object.assign(Object.assign({},o),{view:"tab"}))}class X{constructor(o){this.emitter=new b,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=o}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(o){for(const c of this.allItems())if(o(c))return c;return null}includes(o){return this.cache_.has(o)}add(o,c){if(this.includes(o))throw g.shouldNeverHappen();const p=c!==void 0?c:this.items_.length;this.items_.splice(p,0,o),this.cache_.add(o);const S=this.extract_(o);S&&(S.emitter.on("add",this.onSubListAdd_),S.emitter.on("remove",this.onSubListRemove_),S.allItems().forEach(W=>{this.cache_.add(W)})),this.emitter.emit("add",{index:p,item:o,root:this,target:this})}remove(o){const c=this.items_.indexOf(o);if(c<0)return;this.items_.splice(c,1),this.cache_.delete(o);const p=this.extract_(o);p&&(p.emitter.off("add",this.onSubListAdd_),p.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:c,item:o,root:this,target:this})}onSubListAdd_(o){this.cache_.add(o.item),this.emitter.emit("add",{index:o.index,item:o.item,root:this,target:o.target})}onSubListRemove_(o){this.cache_.delete(o.item),this.emitter.emit("remove",{index:o.index,item:o.item,root:this,target:o.target})}}class ft extends r{constructor(o){super(o),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new b,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(o){const c=o.sender.target.read();this.emitter_.emit("change",{event:new a(this,c,this.controller_.binding.target.presetKey,o.options.last)})}}class mt extends it{constructor(o,c){super(o,c),this.binding=c.binding}}class Tt extends r{constructor(o){super(o),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new b,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(o){const c=o.sender.target.read();this.emitter_.emit("update",{event:new l(this,c,this.controller_.binding.target.presetKey)})}}class ut extends it{constructor(o,c){super(o,c),this.binding=c.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function lt(u){return u instanceof ue?u.apiSet_:u instanceof bt?u.rackApi_.apiSet_:null}function Ct(u,o){const c=u.find(p=>p.controller_===o);if(!c)throw g.shouldNeverHappen();return c}function qt(u,o,c){if(!w.isBindable(u))throw g.notBindable();return new w(u,o,c)}class ue extends r{constructor(o,c){super(o),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new b,this.apiSet_=new X(lt),this.pool_=c;const p=this.controller_.rack;p.emitter.on("add",this.onRackAdd_),p.emitter.on("remove",this.onRackRemove_),p.emitter.on("inputchange",this.onRackInputChange_),p.emitter.on("monitorupdate",this.onRackMonitorUpdate_),p.children.forEach(S=>{this.setUpApi_(S)})}get children(){return this.controller_.rack.children.map(o=>Ct(this.apiSet_,o))}addInput(o,c,p){const S=p||{},W=this.controller_.view.element.ownerDocument,Z=this.pool_.createInput(W,qt(o,c,S.presetKey),S),gt=new ft(Z);return this.add(gt,S.index)}addMonitor(o,c,p){const S=p||{},W=this.controller_.view.element.ownerDocument,Z=this.pool_.createMonitor(W,qt(o,c),S),gt=new Tt(Z);return this.add(gt,S.index)}addFolder(o){return Nt(this,o)}addButton(o){return Gt(this,o)}addSeparator(o){return yt(this,o)}addTab(o){return $t(this,o)}add(o,c){this.controller_.rack.add(o.controller_,c);const p=this.apiSet_.find(S=>S.controller_===o.controller_);return p&&this.apiSet_.remove(p),this.apiSet_.add(o),o}remove(o){this.controller_.rack.remove(o.controller_)}addBlade(o){const c=this.controller_.view.element.ownerDocument,p=this.pool_.createBlade(c,o),S=this.pool_.createBladeApi(p);return this.add(S,o.index)}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}setUpApi_(o){this.apiSet_.find(p=>p.controller_===o)||this.apiSet_.add(this.pool_.createBladeApi(o))}onRackAdd_(o){this.setUpApi_(o.bladeController)}onRackRemove_(o){if(o.isRoot){const c=Ct(this.apiSet_,o.bladeController);this.apiSet_.remove(c)}}onRackInputChange_(o){const c=o.bladeController;if(c instanceof mt){const p=Ct(this.apiSet_,c),S=c.binding;this.emitter_.emit("change",{event:new a(p,S.target.read(),S.target.presetKey,o.options.last)})}else if(c instanceof tt){const p=Ct(this.apiSet_,c);this.emitter_.emit("change",{event:new a(p,c.value.rawValue,void 0,o.options.last)})}}onRackMonitorUpdate_(o){if(!(o.bladeController instanceof ut))throw g.shouldNeverHappen();const c=Ct(this.apiSet_,o.bladeController),p=o.bladeController.binding;this.emitter_.emit("update",{event:new l(c,p.target.read(),p.target.presetKey)})}}class oe extends bt{constructor(o,c){super(o,new ue(o.rackController,c)),this.emitter_=new b,this.controller_.foldable.value("expanded").emitter.on("change",p=>{this.emitter_.emit("fold",{event:new d(this,p.sender.rawValue)})}),this.rackApi_.on("change",p=>{this.emitter_.emit("change",{event:p})}),this.rackApi_.on("update",p=>{this.emitter_.emit("update",{event:p})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(o){this.controller_.foldable.set("expanded",o)}get title(){return this.controller_.props.get("title")}set title(o){this.controller_.props.set("title",o)}get children(){return this.rackApi_.children}addInput(o,c,p){return this.rackApi_.addInput(o,c,p)}addMonitor(o,c,p){return this.rackApi_.addMonitor(o,c,p)}addFolder(o){return this.rackApi_.addFolder(o)}addButton(o){return this.rackApi_.addButton(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,c){return this.rackApi_.add(o,c)}remove(o){this.rackApi_.remove(o)}addBlade(o){return this.rackApi_.addBlade(o)}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}}class gn extends xt{constructor(o){super({blade:o.blade,view:o.view,viewProps:o.rackController.viewProps}),this.rackController=o.rackController}}class Cn{constructor(o,c){const p=P(c.viewName);this.element=o.createElement("div"),this.element.classList.add(p()),c.viewProps.bindClassModifiers(this.element)}}function ko(u,o){for(let c=0;c<u.length;c++){const p=u[c];if(p instanceof mt&&p.binding===o)return p}return null}function ai(u,o){for(let c=0;c<u.length;c++){const p=u[c];if(p instanceof ut&&p.binding===o)return p}return null}function zs(u,o){for(let c=0;c<u.length;c++){const p=u[c];if(p instanceof tt&&p.value===o)return p}return null}function Or(u){return u instanceof Ai?u.rack:u instanceof gn?u.rackController.rack:null}function Bo(u){const o=Or(u);return o?o.bcSet_:null}class kr{constructor(o){var c;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new b,this.blade_=o!=null?o:null,(c=this.blade_)===null||c===void 0||c.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new X(Bo),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(o,c){o.parent&&o.parent.remove(o),o.parent_=this,this.bcSet_.add(o,c)}remove(o){o.parent_=null,this.bcSet_.remove(o)}find(o){return this.bcSet_.allItems().filter(c=>c instanceof o)}onSetAdd_(o){this.updatePositions_();const c=o.target===o.root;if(this.emitter.emit("add",{bladeController:o.item,index:o.index,isRoot:c,sender:this}),!c)return;const p=o.item;if(p.viewProps.emitter.on("change",this.onChildViewPropsChange_),p.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),p.viewProps.handleDispose(this.onChildDispose_),p instanceof mt)p.binding.emitter.on("change",this.onChildInputChange_);else if(p instanceof ut)p.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(p instanceof tt)p.value.emitter.on("change",this.onChildValueChange_);else{const S=Or(p);if(S){const W=S.emitter;W.on("layout",this.onDescendantLayout_),W.on("inputchange",this.onDescendantInputChange_),W.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(o){this.updatePositions_();const c=o.target===o.root;if(this.emitter.emit("remove",{bladeController:o.item,isRoot:c,sender:this}),!c)return;const p=o.item;if(p instanceof mt)p.binding.emitter.off("change",this.onChildInputChange_);else if(p instanceof ut)p.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(p instanceof tt)p.value.emitter.off("change",this.onChildValueChange_);else{const S=Or(p);if(S){const W=S.emitter;W.off("layout",this.onDescendantLayout_),W.off("inputchange",this.onDescendantInputChange_),W.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const o=this.bcSet_.items.filter(S=>!S.viewProps.get("hidden")),c=o[0],p=o[o.length-1];this.bcSet_.items.forEach(S=>{const W=[];S===c&&(W.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&W.push("veryfirst")),S===p&&(W.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&W.push("verylast")),S.blade.set("positions",W)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(c=>c.viewProps.get("disposed")).forEach(c=>{this.bcSet_.remove(c)})}onChildInputChange_(o){const c=ko(this.find(mt),o.sender);if(!c)throw g.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:c,options:o.options,sender:this})}onChildMonitorUpdate_(o){const c=ai(this.find(ut),o.sender);if(!c)throw g.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:c,sender:this})}onChildValueChange_(o){const c=zs(this.find(tt),o.sender);if(!c)throw g.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:c,options:o.options,sender:this})}onDescendantLayout_(o){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(o){this.emitter.emit("inputchange",{bladeController:o.bladeController,options:o.options,sender:this})}onDescendantMonitorUpdate_(o){this.emitter.emit("monitorupdate",{bladeController:o.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ai extends xt{constructor(o,c){super(Object.assign(Object.assign({},c),{view:new Cn(o,{viewName:"brk",viewProps:c.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const p=new kr(c.root?void 0:c.blade);p.emitter.on("add",this.onRackAdd_),p.emitter.on("remove",this.onRackRemove_),this.rack=p,this.viewProps.handleDispose(()=>{for(let S=this.rack.children.length-1;S>=0;S--)this.rack.children[S].viewProps.set("disposed",!0)})}onRackAdd_(o){!o.isRoot||ve(this.view.element,o.bladeController.view.element,o.index)}onRackRemove_(o){!o.isRoot||Rt(o.bladeController.view.element)}}const nr=P("cnt");class Vo{constructor(o,c){this.className_=P(c.viewName||"fld"),this.element=o.createElement("div"),this.element.classList.add(this.className_(),nr()),c.viewProps.bindClassModifiers(this.element),this.foldable_=c.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),U(this.foldable_,"completed",V(this.element,this.className_(void 0,"cpl")));const p=o.createElement("button");p.classList.add(this.className_("b")),U(c.props,"title",gt=>{f(gt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),c.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const S=o.createElement("div");S.classList.add(this.className_("t")),E(c.props.value("title"),S),this.buttonElement.appendChild(S),this.titleElement=S;const W=o.createElement("div");W.classList.add(this.className_("m")),this.buttonElement.appendChild(W);const Z=c.containerElement;Z.classList.add(this.className_("c")),this.element.appendChild(Z),this.containerElement=Z}}class Br extends gn{constructor(o,c){var p;const S=_t.create((p=c.expanded)!==null&&p!==void 0?p:!0),W=new Ai(o,{blade:c.blade,root:c.root,viewProps:c.viewProps});super(Object.assign(Object.assign({},c),{rackController:W,view:new Vo(o,{containerElement:W.view.element,foldable:S,props:c.props,viewName:c.root?"rot":void 0,viewProps:c.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=c.props,this.foldable=S,dt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const ll={id:"folder",type:"blade",accept(u){const o=st,c=ht(u,{title:o.required.string,view:o.required.constant("folder"),expanded:o.optional.boolean});return c?{params:c}:null},controller(u){return new Br(u.document,{blade:u.blade,expanded:u.params.expanded,props:C.fromObject({title:u.params.title}),viewProps:u.viewProps})},api(u){return u.controller instanceof Br?new oe(u.controller,u.pool):null}};class Pi extends tt{constructor(o,c){const p=c.valueController.viewProps;super(Object.assign(Object.assign({},c),{value:c.valueController.value,view:new K(o,{props:c.props,viewProps:p}),viewProps:p})),this.props=c.props,this.valueController=c.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class zo extends r{}const Ho=P("spr");class cl{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(Ho()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("hr");p.classList.add(Ho("r")),this.element.appendChild(p)}}class Go extends xt{constructor(o,c){super(Object.assign(Object.assign({},c),{view:new cl(o,{viewProps:c.viewProps})}))}}const R={id:"separator",type:"blade",accept(u){const c=ht(u,{view:st.required.constant("separator")});return c?{params:c}:null},controller(u){return new Go(u.document,{blade:u.blade,viewProps:u.viewProps})},api(u){return u.controller instanceof Go?new zo(u.controller):null}},q=P("");function Q(u,o){return V(u,q(void 0,o))}class J extends C{constructor(o){super(o)}static create(o){var c,p;const S=o!=null?o:{},W={disabled:(c=S.disabled)!==null&&c!==void 0?c:!1,disposed:!1,hidden:(p=S.hidden)!==null&&p!==void 0?p:!1},Z=C.createCore(W);return new J(Z)}bindClassModifiers(o){U(this,"disabled",Q(o,"disabled")),U(this,"hidden",Q(o,"hidden"))}bindDisabled(o){U(this,"disabled",c=>{o.disabled=c})}bindTabIndex(o){U(this,"disabled",c=>{o.tabIndex=c?-1:0})}handleDispose(o){this.value("disposed").emitter.on("change",c=>{c&&o()})}}const Y=P("tbi");class pt{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(Y()),c.viewProps.bindClassModifiers(this.element),U(c.props,"selected",W=>{W?this.element.classList.add(Y(void 0,"sel")):this.element.classList.remove(Y(void 0,"sel"))});const p=o.createElement("button");p.classList.add(Y("b")),c.viewProps.bindDisabled(p),this.element.appendChild(p),this.buttonElement=p;const S=o.createElement("div");S.classList.add(Y("t")),E(c.props.value("title"),S),this.buttonElement.appendChild(S),this.titleElement=S}}class St{constructor(o,c){this.emitter=new b,this.onClick_=this.onClick_.bind(this),this.props=c.props,this.viewProps=c.viewProps,this.view=new pt(o,{props:c.props,viewProps:c.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Pt{constructor(o,c){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new St(o,{props:c.itemProps,viewProps:J.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ai(o,{blade:Dt(),viewProps:J.create()}),this.props=c.props,U(this.props,"selected",p=>{this.itemController.props.set("selected",p),this.contentController.viewProps.set("hidden",!p)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Et{constructor(o,c){this.controller_=o,this.rackApi_=c}get title(){var o;return(o=this.controller_.itemController.props.get("title"))!==null&&o!==void 0?o:""}set title(o){this.controller_.itemController.props.set("title",o)}get selected(){return this.controller_.props.get("selected")}set selected(o){this.controller_.props.set("selected",o)}get children(){return this.rackApi_.children}addButton(o){return this.rackApi_.addButton(o)}addFolder(o){return this.rackApi_.addFolder(o)}addSeparator(o){return this.rackApi_.addSeparator(o)}addTab(o){return this.rackApi_.addTab(o)}add(o,c){this.rackApi_.add(o,c)}remove(o){this.rackApi_.remove(o)}addInput(o,c,p){return this.rackApi_.addInput(o,c,p)}addMonitor(o,c,p){return this.rackApi_.addMonitor(o,c,p)}addBlade(o){return this.rackApi_.addBlade(o)}}class Vt extends bt{constructor(o,c){super(o,new ue(o.rackController,c)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.emitter_=new b,this.pageApiMap_=new Map,this.rackApi_.on("change",p=>{this.emitter_.emit("change",{event:p})}),this.rackApi_.on("update",p=>{this.emitter_.emit("update",{event:p})}),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(p=>{this.setUpPageApi_(p)})}get pages(){return this.controller_.pageSet.items.map(o=>{const c=this.pageApiMap_.get(o);if(!c)throw g.shouldNeverHappen();return c})}addPage(o){const c=this.controller_.view.element.ownerDocument,p=new Pt(c,{itemProps:C.fromObject({selected:!1,title:o.title}),props:C.fromObject({selected:!1})});this.controller_.add(p,o.index);const S=this.pageApiMap_.get(p);if(!S)throw g.shouldNeverHappen();return S}removePage(o){this.controller_.remove(o)}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}setUpPageApi_(o){const c=this.rackApi_.apiSet_.find(S=>S.controller_===o.contentController);if(!c)throw g.shouldNeverHappen();const p=new Et(o,c);this.pageApiMap_.set(o,p)}onPageAdd_(o){this.setUpPageApi_(o.item)}onPageRemove_(o){if(!this.pageApiMap_.get(o.item))throw g.shouldNeverHappen();this.pageApiMap_.delete(o.item)}}const zt=P("tab");class Ot{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(zt(),nr()),c.viewProps.bindClassModifiers(this.element),N(c.empty,V(this.element,zt(void 0,"nop")));const p=o.createElement("div");p.classList.add(zt("i")),this.element.appendChild(p),this.itemsElement=p;const S=c.contentsElement;S.classList.add(zt("c")),this.element.appendChild(S),this.contentsElement=S}}class Qt extends gn{constructor(o,c){const p=new Ai(o,{blade:c.blade,viewProps:c.viewProps}),S=F(!0);super({blade:c.blade,rackController:p,view:new Ot(o,{contentsElement:p.view.element,empty:S,viewProps:c.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onPageSelectedChange_=this.onPageSelectedChange_.bind(this),this.pageSet_=new X(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.empty_=S,this.applyPages_()}get pageSet(){return this.pageSet_}add(o,c){this.pageSet_.add(o,c!=null?c:this.pageSet_.items.length)}remove(o){this.pageSet_.remove(this.pageSet_.items[o])}applyPages_(){this.keepSelection_(),this.empty_.rawValue=this.pageSet_.items.length===0}onPageAdd_(o){const c=o.item;ve(this.view.itemsElement,c.itemController.view.element,o.index),this.rackController.rack.add(c.contentController,o.index),c.props.value("selected").emitter.on("change",this.onPageSelectedChange_),this.applyPages_()}onPageRemove_(o){const c=o.item;Rt(c.itemController.view.element),this.rackController.rack.remove(c.contentController),c.props.value("selected").emitter.off("change",this.onPageSelectedChange_),this.applyPages_()}keepSelection_(){if(this.pageSet_.items.length===0)return;const o=this.pageSet_.items.findIndex(c=>c.props.get("selected"));o<0?this.pageSet_.items.forEach((c,p)=>{c.props.set("selected",p===0)}):this.pageSet_.items.forEach((c,p)=>{c.props.set("selected",p===o)})}onPageSelectedChange_(o){if(o.rawValue){const c=this.pageSet_.items.findIndex(p=>p.props.value("selected")===o.sender);this.pageSet_.items.forEach((p,S)=>{p.props.set("selected",S===c)})}else this.keepSelection_()}}const he={id:"tab",type:"blade",accept(u){const o=st,c=ht(u,{pages:o.required.array(o.required.object({title:o.required.string})),view:o.required.constant("tab")});return!c||c.pages.length===0?null:{params:c}},controller(u){const o=new Qt(u.document,{blade:u.blade,viewProps:u.viewProps});return u.params.pages.forEach(c=>{const p=new Pt(u.document,{itemProps:C.fromObject({selected:!1,title:c.title}),props:C.fromObject({selected:!1})});o.add(p)}),o},api(u){return u.controller instanceof Qt?new Vt(u.controller,u.pool):null}};function Te(u,o){const c=u.accept(o.params);if(!c)return null;const p=st.optional.boolean(o.params.disabled).value,S=st.optional.boolean(o.params.hidden).value;return u.controller({blade:Dt(),document:o.document,params:Object.assign(Object.assign({},c.params),{disabled:p,hidden:S}),viewProps:J.create({disabled:p,hidden:S})})}class xe{constructor(){this.disabled=!1,this.emitter=new b}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class fe{constructor(o,c){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=o,this.emitter=new b,this.interval_=c,this.setTimer_()}get disabled(){return this.disabled_}set disabled(o){this.disabled_=o,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const o=this.doc_.defaultView;o&&o.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const o=this.doc_.defaultView;o&&(this.timerId_=o.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ft{constructor(o){this.constraints=o}constrain(o){return this.constraints.reduce((c,p)=>p.constrain(c),o)}}function ae(u,o){if(u instanceof o)return u;if(u instanceof Ft){const c=u.constraints.reduce((p,S)=>p||(S instanceof o?S:null),null);if(c)return c}return null}class te{constructor(o){this.options=o}constrain(o){const c=this.options;return c.length===0||c.filter(S=>S.value===o).length>0?o:c[0].value}}class be{constructor(o){this.maxValue=o.max,this.minValue=o.min}constrain(o){let c=o;return f(this.minValue)||(c=Math.max(c,this.minValue)),f(this.maxValue)||(c=Math.min(c,this.maxValue)),c}}class an{constructor(o){this.step=o}constrain(o){return(o<0?-Math.round(-o/this.step):Math.round(o/this.step))*this.step}}const We=P("lst");class ir{constructor(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.props_=c.props,this.element=o.createElement("div"),this.element.classList.add(We()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("select");p.classList.add(We("s")),U(this.props_,"options",W=>{Kt(p),W.forEach((Z,gt)=>{const Ht=o.createElement("option");Ht.dataset.index=String(gt),Ht.textContent=Z.text,Ht.value=String(Z.value),p.appendChild(Ht)})}),c.viewProps.bindDisabled(p),this.element.appendChild(p),this.selectElement=p;const S=o.createElement("div");S.classList.add(We("m")),S.appendChild(At(o,"dropdown")),this.element.appendChild(S),c.value.emitter.on("change",this.onValueChange_),this.value_=c.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class pe{constructor(o,c){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=c.props,this.value=c.value,this.viewProps=c.viewProps,this.view=new ir(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(o){const p=o.currentTarget.selectedOptions.item(0);if(!p)return;const S=Number(p.dataset.index);this.value.rawValue=this.props.get("options")[S].value}}const en=P("pop");class ln{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(en()),c.viewProps.bindClassModifiers(this.element),N(c.shows,V(this.element,en(void 0,"v")))}}class Be{constructor(o,c){this.shows=F(!1),this.viewProps=c.viewProps,this.view=new ln(o,{shows:this.shows,viewProps:this.viewProps})}}const Xe=P("txt");class Hs{constructor(o,c){this.onChange_=this.onChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Xe()),c.viewProps.bindClassModifiers(this.element),this.props_=c.props,this.props_.emitter.on("change",this.onChange_);const p=o.createElement("input");p.classList.add(Xe("i")),p.type="text",c.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,c.value.emitter.on("change",this.onChange_),this.value_=c.value,this.refresh()}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value_.rawValue)}onChange_(){this.refresh()}}class An{constructor(o,c){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=c.parser,this.props=c.props,this.value=c.value,this.viewProps=c.viewProps,this.view=new Hs(o,{props:c.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const p=o.currentTarget.value,S=this.parser_(p);f(S)||(this.value.rawValue=S),this.view.refresh()}}function Hm(u){return String(u)}function Sh(u){return u==="false"?!1:!!u}function Mh(u){return Hm(u)}class Gm{constructor(o){this.text=o}evaluate(){return Number(this.text)}toString(){return this.text}}const Wm={"**":(u,o)=>Math.pow(u,o),"*":(u,o)=>u*o,"/":(u,o)=>u/o,"%":(u,o)=>u%o,"+":(u,o)=>u+o,"-":(u,o)=>u-o,"<<":(u,o)=>u<<o,">>":(u,o)=>u>>o,">>>":(u,o)=>u>>>o,"&":(u,o)=>u&o,"^":(u,o)=>u^o,"|":(u,o)=>u|o};class Xm{constructor(o,c,p){this.left=c,this.operator=o,this.right=p}evaluate(){const o=Wm[this.operator];if(!o)throw new Error(`unexpected binary operator: '${this.operator}`);return o(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const qm={"+":u=>u,"-":u=>-u,"~":u=>~u};class Ym{constructor(o,c){this.operator=o,this.expression=c}evaluate(){const o=qm[this.operator];if(!o)throw new Error(`unexpected unary operator: '${this.operator}`);return o(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ul(u){return(o,c)=>{for(let p=0;p<u.length;p++){const S=u[p](o,c);if(S!=="")return S}return""}}function Gs(u,o){var c;const p=u.substr(o).match(/^\s+/);return(c=p&&p[0])!==null&&c!==void 0?c:""}function jm(u,o){const c=u.substr(o,1);return c.match(/^[1-9]$/)?c:""}function Ws(u,o){var c;const p=u.substr(o).match(/^[0-9]+/);return(c=p&&p[0])!==null&&c!==void 0?c:""}function Km(u,o){const c=Ws(u,o);if(c!=="")return c;const p=u.substr(o,1);if(o+=1,p!=="-"&&p!=="+")return"";const S=Ws(u,o);return S===""?"":p+S}function hl(u,o){const c=u.substr(o,1);if(o+=1,c.toLowerCase()!=="e")return"";const p=Km(u,o);return p===""?"":c+p}function Eh(u,o){const c=u.substr(o,1);if(c==="0")return c;const p=jm(u,o);return o+=p.length,p===""?"":p+Ws(u,o)}function $m(u,o){const c=Eh(u,o);if(o+=c.length,c==="")return"";const p=u.substr(o,1);if(o+=p.length,p!==".")return"";const S=Ws(u,o);return o+=S.length,c+p+S+hl(u,o)}function Zm(u,o){const c=u.substr(o,1);if(o+=c.length,c!==".")return"";const p=Ws(u,o);return o+=p.length,p===""?"":c+p+hl(u,o)}function Jm(u,o){const c=Eh(u,o);return o+=c.length,c===""?"":c+hl(u,o)}const Qm=ul([$m,Zm,Jm]);function t_(u,o){var c;const p=u.substr(o).match(/^[01]+/);return(c=p&&p[0])!==null&&c!==void 0?c:""}function e_(u,o){const c=u.substr(o,2);if(o+=c.length,c.toLowerCase()!=="0b")return"";const p=t_(u,o);return p===""?"":c+p}function n_(u,o){var c;const p=u.substr(o).match(/^[0-7]+/);return(c=p&&p[0])!==null&&c!==void 0?c:""}function i_(u,o){const c=u.substr(o,2);if(o+=c.length,c.toLowerCase()!=="0o")return"";const p=n_(u,o);return p===""?"":c+p}function r_(u,o){var c;const p=u.substr(o).match(/^[0-9a-f]+/i);return(c=p&&p[0])!==null&&c!==void 0?c:""}function s_(u,o){const c=u.substr(o,2);if(o+=c.length,c.toLowerCase()!=="0x")return"";const p=r_(u,o);return p===""?"":c+p}const o_=ul([e_,i_,s_]),a_=ul([o_,Qm]);function l_(u,o){const c=a_(u,o);return o+=c.length,c===""?null:{evaluable:new Gm(c),cursor:o}}function c_(u,o){const c=u.substr(o,1);if(o+=c.length,c!=="(")return null;const p=Ch(u,o);if(!p)return null;o=p.cursor,o+=Gs(u,o).length;const S=u.substr(o,1);return o+=S.length,S!==")"?null:{evaluable:p.evaluable,cursor:o}}function u_(u,o){return l_(u,o)||c_(u,o)}function Th(u,o){const c=u_(u,o);if(c)return c;const p=u.substr(o,1);if(o+=p.length,p!=="+"&&p!=="-"&&p!=="~")return null;const S=Th(u,o);return S?(o=S.cursor,{cursor:o,evaluable:new Ym(p,S.evaluable)}):null}function h_(u,o,c){c+=Gs(o,c).length;const p=u.filter(S=>o.startsWith(S,c))[0];return p?(c+=p.length,c+=Gs(o,c).length,{cursor:c,operator:p}):null}function d_(u,o){return(c,p)=>{const S=u(c,p);if(!S)return null;p=S.cursor;let W=S.evaluable;for(;;){const Z=h_(o,c,p);if(!Z)break;p=Z.cursor;const gt=u(c,p);if(!gt)return null;p=gt.cursor,W=new Xm(Z.operator,W,gt.evaluable)}return W?{cursor:p,evaluable:W}:null}}const f_=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((u,o)=>d_(u,o),Th);function Ch(u,o){return o+=Gs(u,o).length,f_(u,o)}function p_(u){const o=Ch(u,0);return!o||o.cursor+Gs(u,o.cursor).length!==u.length?null:o.evaluable}function li(u){var o;const c=p_(u);return(o=c==null?void 0:c.evaluate())!==null&&o!==void 0?o:null}function Ah(u){if(typeof u=="number")return u;if(typeof u=="string"){const o=li(u);if(!f(o))return o}return 0}function m_(u){return String(u)}function cn(u){return o=>o.toFixed(Math.max(Math.min(u,20),0))}const __=cn(0);function Wo(u){return __(u)+"%"}function Ph(u){return String(u)}function dl(u){return u}function Rh(u,o){for(;u.length<o;)u.push(void 0)}function g_(u){const o=[];return Rh(o,u),F(o)}function v_(u){const o=u.indexOf(void 0);return o<0?u:u.slice(0,o)}function x_(u,o){const c=[...v_(u),o];return c.length>u.length?c.splice(0,c.length-u.length):Rh(c,u.length),c}function Xs({primary:u,secondary:o,forward:c,backward:p}){let S=!1;function W(Z){S||(S=!0,Z(),S=!1)}u.emitter.on("change",Z=>{W(()=>{o.setRawValue(c(u,o),Z.options)})}),o.emitter.on("change",Z=>{W(()=>{u.setRawValue(p(u,o),Z.options)}),W(()=>{o.setRawValue(c(u,o),Z.options)})}),W(()=>{o.setRawValue(c(u,o),{forceEmit:!1,last:!0})})}function un(u,o){const c=u*(o.altKey?.1:1)*(o.shiftKey?10:1);return o.upKey?+c:o.downKey?-c:0}function qs(u){return{altKey:u.altKey,downKey:u.key==="ArrowDown",shiftKey:u.shiftKey,upKey:u.key==="ArrowUp"}}function ci(u){return{altKey:u.altKey,downKey:u.key==="ArrowLeft",shiftKey:u.shiftKey,upKey:u.key==="ArrowRight"}}function b_(u){return u==="ArrowUp"||u==="ArrowDown"}function Dh(u){return b_(u)||u==="ArrowLeft"||u==="ArrowRight"}function fl(u,o){const c=o.ownerDocument.defaultView,p=o.getBoundingClientRect();return{x:u.pageX-((c&&c.scrollX||0)+p.left),y:u.pageY-((c&&c.scrollY||0)+p.top)}}class rr{constructor(o){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=o,this.emitter=new b,o.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),o.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),o.addEventListener("touchend",this.onTouchEnd_),o.addEventListener("mousedown",this.onMouseDown_)}computePosition_(o){const c=this.elem_.getBoundingClientRect();return{bounds:{width:c.width,height:c.height},point:o?{x:o.x,y:o.y}:null}}onMouseDown_(o){var c;o.preventDefault(),(c=o.currentTarget)===null||c===void 0||c.focus();const p=this.elem_.ownerDocument;p.addEventListener("mousemove",this.onDocumentMouseMove_),p.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(fl(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseMove_(o){this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(fl(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onDocumentMouseUp_(o){const c=this.elem_.ownerDocument;c.removeEventListener("mousemove",this.onDocumentMouseMove_),c.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(fl(o,this.elem_)),sender:this,shiftKey:o.shiftKey})}onTouchStart_(o){o.preventDefault();const c=o.targetTouches.item(0),p=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:o.altKey,data:this.computePosition_(c?{x:c.clientX-p.left,y:c.clientY-p.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=c}onTouchMove_(o){const c=o.targetTouches.item(0),p=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:o.altKey,data:this.computePosition_(c?{x:c.clientX-p.left,y:c.clientY-p.top}:void 0),sender:this,shiftKey:o.shiftKey}),this.lastTouch_=c}onTouchEnd_(o){var c;const p=(c=o.targetTouches.item(0))!==null&&c!==void 0?c:this.lastTouch_,S=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:o.altKey,data:this.computePosition_(p?{x:p.clientX-S.left,y:p.clientY-S.top}:void 0),sender:this,shiftKey:o.shiftKey})}}function Ce(u,o,c,p,S){const W=(u-o)/(c-o);return p+W*(S-p)}function Lh(u){return String(u.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Me(u,o,c){return Math.min(Math.max(u,o),c)}function pl(u,o){return(u%o+o)%o}const Pn=P("txt");class y_{constructor(o,c){this.onChange_=this.onChange_.bind(this),this.props_=c.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(Pn(),Pn(void 0,"num")),c.arrayPosition&&this.element.classList.add(Pn(void 0,c.arrayPosition)),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("input");p.classList.add(Pn("i")),p.type="text",c.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=c.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Pn()),this.inputElement.classList.add(Pn("i"));const S=o.createElement("div");S.classList.add(Pn("k")),this.element.appendChild(S),this.knobElement=S;const W=o.createElementNS(Lt,"svg");W.classList.add(Pn("g")),this.knobElement.appendChild(W);const Z=o.createElementNS(Lt,"path");Z.classList.add(Pn("gb")),W.appendChild(Z),this.guideBodyElem_=Z;const gt=o.createElementNS(Lt,"path");gt.classList.add(Pn("gh")),W.appendChild(gt),this.guideHeadElem_=gt;const Ht=o.createElement("div");Ht.classList.add(P("tt")()),this.knobElement.appendChild(Ht),this.tooltipElem_=Ht,c.value.emitter.on("change",this.onChange_),this.value=c.value,this.refresh()}onDraggingChange_(o){if(o.rawValue===null){this.element.classList.remove(Pn(void 0,"drg"));return}this.element.classList.add(Pn(void 0,"drg"));const c=o.rawValue/this.props_.get("draggingScale"),p=c+(c>0?-1:c<0?1:0),S=Me(-p,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${p+S},0 L${p},4 L${p+S},8`,`M ${c},-1 L${c},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${c},4`);const W=this.props_.get("formatter");this.tooltipElem_.textContent=W(this.value.rawValue),this.tooltipElem_.style.left=`${c}px`}refresh(){const o=this.props_.get("formatter");this.inputElement.value=o(this.value.rawValue)}onChange_(){this.refresh()}}class Ys{constructor(o,c){this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=c.baseStep,this.parser_=c.parser,this.props=c.props,this.value=c.value,this.viewProps=c.viewProps,this.dragging_=F(null),this.view=new y_(o,{arrayPosition:c.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const p=new rr(this.view.knobElement);p.emitter.on("down",this.onPointerDown_),p.emitter.on("move",this.onPointerMove_),p.emitter.on("up",this.onPointerUp_)}onInputChange_(o){const p=o.currentTarget.value,S=this.parser_(p);f(S)||(this.value.rawValue=S),this.view.refresh()}onInputKeyDown_(o){const c=un(this.baseStep_,qs(o));c!==0&&this.value.setRawValue(this.value.rawValue+c,{forceEmit:!1,last:!1})}onInputKeyUp_(o){un(this.baseStep_,qs(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(o){if(!o.point)return null;const c=o.point.x-o.bounds.width/2;return this.originRawValue_+c*this.props.get("draggingScale")}onPointerMove_(o){const c=this.computeDraggingValue_(o.data);c!==null&&(this.value.setRawValue(c,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(o){const c=this.computeDraggingValue_(o.data);c!==null&&(this.value.setRawValue(c,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ml=P("sld");class w_{constructor(o,c){this.onChange_=this.onChange_.bind(this),this.props_=c.props,this.props_.emitter.on("change",this.onChange_),this.element=o.createElement("div"),this.element.classList.add(ml()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(ml("t")),c.viewProps.bindTabIndex(p),this.element.appendChild(p),this.trackElement=p;const S=o.createElement("div");S.classList.add(ml("k")),this.trackElement.appendChild(S),this.knobElement=S,c.value.emitter.on("change",this.onChange_),this.value=c.value,this.update_()}update_(){const o=Me(Ce(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${o}%`}onChange_(){this.update_()}}class S_{constructor(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=c.baseStep,this.value=c.value,this.viewProps=c.viewProps,this.props=c.props,this.view=new w_(o,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,c){!o.point||this.value.setRawValue(Ce(Me(o.point.x,0,o.bounds.width),0,o.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),c)}onPointerDownOrMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const c=un(this.baseStep_,ci(o));c!==0&&this.value.setRawValue(this.value.rawValue+c,{forceEmit:!1,last:!1})}onKeyUp_(o){un(this.baseStep_,ci(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const _l=P("sldtxt");class M_{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(_l());const p=o.createElement("div");p.classList.add(_l("s")),this.sliderView_=c.sliderView,p.appendChild(this.sliderView_.element),this.element.appendChild(p);const S=o.createElement("div");S.classList.add(_l("t")),this.textView_=c.textView,S.appendChild(this.textView_.element),this.element.appendChild(S)}}class gl{constructor(o,c){this.value=c.value,this.viewProps=c.viewProps,this.sliderC_=new S_(o,{baseStep:c.baseStep,props:c.sliderProps,value:c.value,viewProps:this.viewProps}),this.textC_=new Ys(o,{baseStep:c.baseStep,parser:c.parser,props:c.textProps,value:c.value,viewProps:c.viewProps}),this.view=new M_(o,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function js(u,o){u.write(o)}function Xo(u){const o=st;if(Array.isArray(u))return o.required.array(o.required.object({text:o.required.string,value:o.required.raw}))(u).value;if(typeof u=="object")return o.required.raw(u).value}function Ih(u){if(u==="inline"||u==="popup")return u}function Ri(u){const o=st;return o.required.object({max:o.optional.number,min:o.optional.number,step:o.optional.number})(u).value}function Uh(u){if(Array.isArray(u))return u;const o=[];return Object.keys(u).forEach(c=>{o.push({text:c,value:u[c]})}),o}function vl(u){return f(u)?null:new te(Uh(u))}function xl(u){const o=u?ae(u,te):null;return o?o.options:null}function E_(u){const o=u?ae(u,an):null;return o?o.step:null}function qo(u,o){const c=u&&ae(u,an);return c?Lh(c.step):Math.max(Lh(o),2)}function Vr(u){const o=E_(u);return o!=null?o:1}function zr(u,o){var c;const p=u&&ae(u,an),S=Math.abs((c=p==null?void 0:p.step)!==null&&c!==void 0?c:o);return S===0?.1:Math.pow(10,Math.floor(Math.log10(S))-1)}const Yo=P("ckb");class T_{constructor(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Yo()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("label");p.classList.add(Yo("l")),this.element.appendChild(p);const S=o.createElement("input");S.classList.add(Yo("i")),S.type="checkbox",p.appendChild(S),this.inputElement=S,c.viewProps.bindDisabled(this.inputElement);const W=o.createElement("div");W.classList.add(Yo("w")),p.appendChild(W);const Z=At(o,"check");W.appendChild(Z),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class C_{constructor(o,c){this.onInputChange_=this.onInputChange_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new T_(o,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(o){const c=o.currentTarget;this.value.rawValue=c.checked}}function A_(u){const o=[],c=vl(u.options);return c&&o.push(c),new Ft(o)}const P_={id:"input-bool",type:"input",accept:(u,o)=>{if(typeof u!="boolean")return null;const p=ht(o,{options:st.optional.custom(Xo)});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Sh,constraint:u=>A_(u.params),writer:u=>js},controller:u=>{var o;const c=u.document,p=u.value,S=u.constraint;return S&&ae(S,te)?new pe(c,{props:C.fromObject({options:(o=xl(S))!==null&&o!==void 0?o:[]}),value:p,viewProps:u.viewProps}):new C_(c,{value:p,viewProps:u.viewProps})}},sr=P("col");class R_{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(sr()),c.foldable.bindExpandedClass(this.element,sr(void 0,"expanded")),U(c.foldable,"completed",V(this.element,sr(void 0,"cpl")));const p=o.createElement("div");p.classList.add(sr("h")),this.element.appendChild(p);const S=o.createElement("div");S.classList.add(sr("s")),p.appendChild(S),this.swatchElement=S;const W=o.createElement("div");if(W.classList.add(sr("t")),p.appendChild(W),this.textElement=W,c.pickerLayout==="inline"){const Z=o.createElement("div");Z.classList.add(sr("p")),this.element.appendChild(Z),this.pickerElement=Z}else this.pickerElement=null}}function D_(u,o,c){const p=Me(u/255,0,1),S=Me(o/255,0,1),W=Me(c/255,0,1),Z=Math.max(p,S,W),gt=Math.min(p,S,W),Ht=Z-gt;let Yt=0,le=0;const de=(gt+Z)/2;return Ht!==0&&(le=Ht/(1-Math.abs(Z+gt-1)),p===Z?Yt=(S-W)/Ht:S===Z?Yt=2+(W-p)/Ht:Yt=4+(p-S)/Ht,Yt=Yt/6+(Yt<0?1:0)),[Yt*360,le*100,de*100]}function L_(u,o,c){const p=(u%360+360)%360,S=Me(o/100,0,1),W=Me(c/100,0,1),Z=(1-Math.abs(2*W-1))*S,gt=Z*(1-Math.abs(p/60%2-1)),Ht=W-Z/2;let Yt,le,de;return p>=0&&p<60?[Yt,le,de]=[Z,gt,0]:p>=60&&p<120?[Yt,le,de]=[gt,Z,0]:p>=120&&p<180?[Yt,le,de]=[0,Z,gt]:p>=180&&p<240?[Yt,le,de]=[0,gt,Z]:p>=240&&p<300?[Yt,le,de]=[gt,0,Z]:[Yt,le,de]=[Z,0,gt],[(Yt+Ht)*255,(le+Ht)*255,(de+Ht)*255]}function I_(u,o,c){const p=Me(u/255,0,1),S=Me(o/255,0,1),W=Me(c/255,0,1),Z=Math.max(p,S,W),gt=Math.min(p,S,W),Ht=Z-gt;let Yt;Ht===0?Yt=0:Z===p?Yt=60*(((S-W)/Ht%6+6)%6):Z===S?Yt=60*((W-p)/Ht+2):Yt=60*((p-S)/Ht+4);const le=Z===0?0:Ht/Z,de=Z;return[Yt,le*100,de*100]}function Nh(u,o,c){const p=pl(u,360),S=Me(o/100,0,1),W=Me(c/100,0,1),Z=W*S,gt=Z*(1-Math.abs(p/60%2-1)),Ht=W-Z;let Yt,le,de;return p>=0&&p<60?[Yt,le,de]=[Z,gt,0]:p>=60&&p<120?[Yt,le,de]=[gt,Z,0]:p>=120&&p<180?[Yt,le,de]=[0,Z,gt]:p>=180&&p<240?[Yt,le,de]=[0,gt,Z]:p>=240&&p<300?[Yt,le,de]=[gt,0,Z]:[Yt,le,de]=[Z,0,gt],[(Yt+Ht)*255,(le+Ht)*255,(de+Ht)*255]}function U_(u,o,c){const p=c+o*(100-Math.abs(2*c-100))/200;return[u,p!==0?o*(100-Math.abs(2*c-100))/p:0,c+o*(100-Math.abs(2*c-100))/(2*100)]}function N_(u,o,c){const p=100-Math.abs(c*(200-o)/100-100);return[u,p!==0?o*c/p:0,c*(200-o)/(2*100)]}function Hr(u){return[u[0],u[1],u[2]]}function Fh(u,o){return[u[0],u[1],u[2],o]}const F_={hsl:{hsl:(u,o,c)=>[u,o,c],hsv:U_,rgb:L_},hsv:{hsl:N_,hsv:(u,o,c)=>[u,o,c],rgb:Nh},rgb:{hsl:D_,hsv:I_,rgb:(u,o,c)=>[u,o,c]}};function O_(u,o,c){return F_[o][c](...u)}const k_={hsl:u=>{var o;return[pl(u[0],360),Me(u[1],0,100),Me(u[2],0,100),Me((o=u[3])!==null&&o!==void 0?o:1,0,1)]},hsv:u=>{var o;return[pl(u[0],360),Me(u[1],0,100),Me(u[2],0,100),Me((o=u[3])!==null&&o!==void 0?o:1,0,1)]},rgb:u=>{var o;return[Me(u[0],0,255),Me(u[1],0,255),Me(u[2],0,255),Me((o=u[3])!==null&&o!==void 0?o:1,0,1)]}};function jo(u,o){return typeof u!="object"||f(u)?!1:o in u&&typeof u[o]=="number"}class ie{constructor(o,c){this.mode_=c,this.comps_=k_[c](o)}static black(){return new ie([0,0,0],"rgb")}static fromObject(o){const c="a"in o?[o.r,o.g,o.b,o.a]:[o.r,o.g,o.b];return new ie(c,"rgb")}static toRgbaObject(o){return o.toRgbaObject()}static isRgbColorObject(o){return jo(o,"r")&&jo(o,"g")&&jo(o,"b")}static isRgbaColorObject(o){return this.isRgbColorObject(o)&&jo(o,"a")}static isColorObject(o){return this.isRgbColorObject(o)}static equals(o,c){if(o.mode_!==c.mode_)return!1;const p=o.comps_,S=c.comps_;for(let W=0;W<p.length;W++)if(p[W]!==S[W])return!1;return!0}get mode(){return this.mode_}getComponents(o){return Fh(O_(Hr(this.comps_),this.mode_,o||this.mode_),this.comps_[3])}toRgbaObject(){const o=this.getComponents("rgb");return{r:o[0],g:o[1],b:o[2],a:o[3]}}}const Di=P("colp");class B_{constructor(o,c){this.alphaViews_=null,this.element=o.createElement("div"),this.element.classList.add(Di());const p=o.createElement("div");p.classList.add(Di("hsv"));const S=o.createElement("div");S.classList.add(Di("sv")),this.svPaletteView_=c.svPaletteView,S.appendChild(this.svPaletteView_.element),p.appendChild(S);const W=o.createElement("div");W.classList.add(Di("h")),this.hPaletteView_=c.hPaletteView,W.appendChild(this.hPaletteView_.element),p.appendChild(W),this.element.appendChild(p);const Z=o.createElement("div");if(Z.classList.add(Di("rgb")),this.textView_=c.textView,Z.appendChild(this.textView_.element),this.element.appendChild(Z),c.alphaViews){this.alphaViews_={palette:c.alphaViews.palette,text:c.alphaViews.text};const gt=o.createElement("div");gt.classList.add(Di("a"));const Ht=o.createElement("div");Ht.classList.add(Di("ap")),Ht.appendChild(this.alphaViews_.palette.element),gt.appendChild(Ht);const Yt=o.createElement("div");Yt.classList.add(Di("at")),Yt.appendChild(this.alphaViews_.text.element),gt.appendChild(Yt),this.element.appendChild(gt)}}get allFocusableElements(){const o=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(c=>c.inputElement)];return this.alphaViews_&&o.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),o}}function bl(u){const o=st;return ht(u,{alpha:o.optional.boolean,expanded:o.optional.boolean,picker:o.optional.custom(Ih)})}function or(u){return u?.1:1}function Rn(u,o){const c=u.match(/^(.+)%$/);return Math.min(c?parseFloat(c[1])*.01*o:parseFloat(u),o)}const V_={deg:u=>u,grad:u=>u*360/400,rad:u=>u*360/(2*Math.PI),turn:u=>u*360};function Oh(u){const o=u.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!o)return parseFloat(u);const c=parseFloat(o[1]),p=o[2];return V_[p](c)}const yl={"func.rgb":u=>{const o=u.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const c=[Rn(o[1],255),Rn(o[2],255),Rn(o[3],255)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:new ie(c,"rgb")},"func.rgba":u=>{const o=u.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const c=[Rn(o[1],255),Rn(o[2],255),Rn(o[3],255),Rn(o[4],1)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:new ie(c,"rgb")},"func.hsl":u=>{const o=u.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const c=[Oh(o[1]),Rn(o[2],100),Rn(o[3],100)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])?null:new ie(c,"hsl")},"func.hsla":u=>{const o=u.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!o)return null;const c=[Oh(o[1]),Rn(o[2],100),Rn(o[3],100),Rn(o[4],1)];return isNaN(c[0])||isNaN(c[1])||isNaN(c[2])||isNaN(c[3])?null:new ie(c,"hsl")},"hex.rgb":u=>{const o=u.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return new ie([parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16)],"rgb");const c=u.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return c?new ie([parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)],"rgb"):null},"hex.rgba":u=>{const o=u.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(o)return new ie([parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16),parseInt(o[3]+o[3],16),Ce(parseInt(o[4]+o[4],16),0,255,0,1)],"rgb");const c=u.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return c?new ie([parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),Ce(parseInt(c[4],16),0,255,0,1)],"rgb"):null}};function Ko(u){return Object.keys(yl).reduce((c,p)=>c||(yl[p](u)?p:null),null)}const $o=u=>{const o=Ko(u);return o?yl[o](u):null};function z_(u){return u==="func.hsla"||u==="func.rgba"||u==="hex.rgba"}function H_(u){if(typeof u=="string"){const o=$o(u);if(o)return o}return ie.black()}function kh(u){const o=Me(Math.floor(u),0,255).toString(16);return o.length===1?`0${o}`:o}function wl(u,o="#"){const c=Hr(u.getComponents("rgb")).map(kh).join("");return`${o}${c}`}function Zo(u,o="#"){const c=u.getComponents("rgb"),p=[c[0],c[1],c[2],c[3]*255].map(kh).join("");return`${o}${p}`}function Bh(u){const o=cn(0);return`rgb(${Hr(u.getComponents("rgb")).map(p=>o(p)).join(", ")})`}function Jo(u){const o=cn(2),c=cn(0);return`rgba(${u.getComponents("rgb").map((S,W)=>(W===3?o:c)(S)).join(", ")})`}function G_(u){const o=[cn(0),Wo,Wo];return`hsl(${Hr(u.getComponents("hsl")).map((p,S)=>o[S](p)).join(", ")})`}function W_(u){const o=[cn(0),Wo,Wo,cn(2)];return`hsla(${u.getComponents("hsl").map((p,S)=>o[S](p)).join(", ")})`}const X_={"func.hsl":G_,"func.hsla":W_,"func.rgb":Bh,"func.rgba":Jo,"hex.rgb":wl,"hex.rgba":Zo};function Vh(u){return X_[u]}const Ks=P("apl");class q_{constructor(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Ks()),c.viewProps.bindTabIndex(this.element);const p=o.createElement("div");p.classList.add(Ks("b")),this.element.appendChild(p);const S=o.createElement("div");S.classList.add(Ks("c")),p.appendChild(S),this.colorElem_=S;const W=o.createElement("div");W.classList.add(Ks("m")),this.element.appendChild(W),this.markerElem_=W;const Z=o.createElement("div");Z.classList.add(Ks("p")),this.markerElem_.appendChild(Z),this.previewElem_=Z,this.update_()}update_(){const o=this.value.rawValue,c=o.getComponents("rgb"),p=new ie([c[0],c[1],c[2],0],"rgb"),S=new ie([c[0],c[1],c[2],255],"rgb"),W=["to right",Jo(p),Jo(S)];this.colorElem_.style.background=`linear-gradient(${W.join(",")})`,this.previewElem_.style.backgroundColor=Jo(o);const Z=Ce(c[3],0,1,0,100);this.markerElem_.style.left=`${Z}%`}onValueChange_(){this.update_()}}class Y_{constructor(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new q_(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,c){if(!o.point)return;const p=o.point.x/o.bounds.width,S=this.value.rawValue,[W,Z,gt]=S.getComponents("hsv");this.value.setRawValue(new ie([W,Z,gt,p],"hsv"),c)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const c=un(or(!0),ci(o));if(c===0)return;const p=this.value.rawValue,[S,W,Z,gt]=p.getComponents("hsv");this.value.setRawValue(new ie([S,W,Z,gt+c],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){un(or(!0),ci(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Gr=P("coltxt");function j_(u){const o=u.createElement("select"),c=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return o.appendChild(c.reduce((p,S)=>{const W=u.createElement("option");return W.textContent=S.text,W.value=S.value,p.appendChild(W),p},u.createDocumentFragment())),o}class K_{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(Gr());const p=o.createElement("div");p.classList.add(Gr("m")),this.modeElem_=j_(o),this.modeElem_.classList.add(Gr("ms")),p.appendChild(this.modeSelectElement);const S=o.createElement("div");S.classList.add(Gr("mm")),S.appendChild(At(o,"dropdown")),p.appendChild(S),this.element.appendChild(p);const W=o.createElement("div");W.classList.add(Gr("w")),this.element.appendChild(W),this.textsElem_=W,this.textViews_=c.textViews,this.applyTextViews_(),N(c.colorMode,Z=>{this.modeElem_.value=Z})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(o){this.textViews_=o,this.applyTextViews_()}applyTextViews_(){Kt(this.textsElem_);const o=this.element.ownerDocument;this.textViews_.forEach(c=>{const p=o.createElement("div");p.classList.add(Gr("c")),p.appendChild(c.element),this.textsElem_.appendChild(p)})}}const $_=cn(0),Z_={rgb:()=>new be({min:0,max:255}),hsl:u=>u===0?new be({min:0,max:360}):new be({min:0,max:100}),hsv:u=>u===0?new be({min:0,max:360}):new be({min:0,max:100})};function Sl(u,o,c){return new Ys(u,{arrayPosition:c===0?"fst":c===3-1?"lst":"mid",baseStep:or(!1),parser:o.parser,props:C.fromObject({draggingScale:1,formatter:$_}),value:F(0,{constraint:Z_[o.colorMode](c)}),viewProps:o.viewProps})}class J_{constructor(o,c){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.parser_=c.parser,this.value=c.value,this.viewProps=c.viewProps,this.colorMode=F(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(o),this.view=new K_(o,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(o){const c={colorMode:this.colorMode.rawValue,parser:this.parser_,viewProps:this.viewProps},p=[Sl(o,c,0),Sl(o,c,1),Sl(o,c,2)];return p.forEach((S,W)=>{Xs({primary:this.value,secondary:S.value,forward:Z=>Z.rawValue.getComponents(this.colorMode.rawValue)[W],backward:(Z,gt)=>{const Ht=this.colorMode.rawValue,Yt=Z.rawValue.getComponents(Ht);return Yt[W]=gt.rawValue,new ie(Fh(Hr(Yt),Yt[3]),Ht)}})}),p}onModeSelectChange_(o){const c=o.currentTarget;this.colorMode.rawValue=c.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ml=P("hpl");class Q_{constructor(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(Ml()),c.viewProps.bindTabIndex(this.element);const p=o.createElement("div");p.classList.add(Ml("c")),this.element.appendChild(p);const S=o.createElement("div");S.classList.add(Ml("m")),this.element.appendChild(S),this.markerElem_=S,this.update_()}update_(){const o=this.value.rawValue,[c]=o.getComponents("hsv");this.markerElem_.style.backgroundColor=Bh(new ie([c,100,100],"hsv"));const p=Ce(c,0,360,0,100);this.markerElem_.style.left=`${p}%`}onValueChange_(){this.update_()}}class tg{constructor(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new Q_(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,c){if(!o.point)return;const p=Ce(Me(o.point.x,0,o.bounds.width),0,o.bounds.width,0,359),S=this.value.rawValue,[,W,Z,gt]=S.getComponents("hsv");this.value.setRawValue(new ie([p,W,Z,gt],"hsv"),c)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){const c=un(or(!1),ci(o));if(c===0)return;const p=this.value.rawValue,[S,W,Z,gt]=p.getComponents("hsv");this.value.setRawValue(new ie([S+c,W,Z,gt],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){un(or(!1),ci(o))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const El=P("svp"),zh=64;class eg{constructor(o,c){this.onValueChange_=this.onValueChange_.bind(this),this.value=c.value,this.value.emitter.on("change",this.onValueChange_),this.element=o.createElement("div"),this.element.classList.add(El()),c.viewProps.bindTabIndex(this.element);const p=o.createElement("canvas");p.height=zh,p.width=zh,p.classList.add(El("c")),this.element.appendChild(p),this.canvasElement=p;const S=o.createElement("div");S.classList.add(El("m")),this.element.appendChild(S),this.markerElem_=S,this.update_()}update_(){const o=jt(this.canvasElement);if(!o)return;const p=this.value.rawValue.getComponents("hsv"),S=this.canvasElement.width,W=this.canvasElement.height,Z=o.getImageData(0,0,S,W),gt=Z.data;for(let le=0;le<W;le++)for(let de=0;de<S;de++){const ar=Ce(de,0,S,0,100),Zs=Ce(le,0,W,100,0),Js=Nh(p[0],ar,Zs),Yr=(le*S+de)*4;gt[Yr]=Js[0],gt[Yr+1]=Js[1],gt[Yr+2]=Js[2],gt[Yr+3]=255}o.putImageData(Z,0,0);const Ht=Ce(p[1],0,100,0,100);this.markerElem_.style.left=`${Ht}%`;const Yt=Ce(p[2],0,100,100,0);this.markerElem_.style.top=`${Yt}%`}onValueChange_(){this.update_()}}class ng{constructor(o,c){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.view=new eg(o,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(o,c){if(!o.point)return;const p=Ce(o.point.x,0,o.bounds.width,0,100),S=Ce(o.point.y,0,o.bounds.height,100,0),[W,,,Z]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new ie([W,p,S,Z],"hsv"),c)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onKeyDown_(o){Dh(o.key)&&o.preventDefault();const[c,p,S,W]=this.value.rawValue.getComponents("hsv"),Z=or(!1),gt=un(Z,ci(o)),Ht=un(Z,qs(o));gt===0&&Ht===0||this.value.setRawValue(new ie([c,p+gt,S+Ht,W],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(o){const c=or(!1),p=un(c,ci(o)),S=un(c,qs(o));p===0&&S===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ig{constructor(o,c){this.value=c.value,this.viewProps=c.viewProps,this.hPaletteC_=new tg(o,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ng(o,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=c.supportsAlpha?{palette:new Y_(o,{value:this.value,viewProps:this.viewProps}),text:new Ys(o,{parser:li,baseStep:.1,props:C.fromObject({draggingScale:.01,formatter:cn(2)}),value:F(0,{constraint:new be({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Xs({primary:this.value,secondary:this.alphaIcs_.text.value,forward:p=>p.rawValue.getComponents()[3],backward:(p,S)=>{const W=p.rawValue.getComponents();return W[3]=S.rawValue,new ie(W,p.rawValue.mode)}}),this.textC_=new J_(o,{parser:li,value:this.value,viewProps:this.viewProps}),this.view=new B_(o,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:c.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Tl=P("colsw");class rg{constructor(o,c){this.onValueChange_=this.onValueChange_.bind(this),c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.element=o.createElement("div"),this.element.classList.add(Tl()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("div");p.classList.add(Tl("sw")),this.element.appendChild(p),this.swatchElem_=p;const S=o.createElement("button");S.classList.add(Tl("b")),c.viewProps.bindDisabled(S),this.element.appendChild(S),this.buttonElement=S,this.update_()}update_(){const o=this.value.rawValue;this.swatchElem_.style.backgroundColor=Zo(o)}onValueChange_(){this.update_()}}class sg{constructor(o,c){this.value=c.value,this.viewProps=c.viewProps,this.view=new rg(o,{value:this.value,viewProps:this.viewProps})}}class Cl{constructor(o,c){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.foldable_=_t.create(c.expanded),this.swatchC_=new sg(o,{value:this.value,viewProps:this.viewProps});const p=this.swatchC_.view.buttonElement;p.addEventListener("blur",this.onButtonBlur_),p.addEventListener("click",this.onButtonClick_),this.textC_=new An(o,{parser:c.parser,props:C.fromObject({formatter:c.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new R_(o,{foldable:this.foldable_,pickerLayout:c.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=c.pickerLayout==="popup"?new Be(o,{viewProps:this.viewProps}):null;const S=new ig(o,{supportsAlpha:c.supportsAlpha,value:this.value,viewProps:this.viewProps});S.view.allFocusableElements.forEach(W=>{W.addEventListener("blur",this.onPopupChildBlur_),W.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=S,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(S.view.element),Xs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:W=>W.rawValue,backward:(W,Z)=>Z.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),dt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(o){if(!this.popC_)return;const c=this.view.element,p=o.relatedTarget;(!p||!c.contains(p))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const c=this.popC_.view.element,p=Ee(o);p&&c.contains(p)||p&&p===this.swatchC_.view.buttonElement&&!se(c.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function og(u){return ie.isColorObject(u)?ie.fromObject(u):ie.black()}function ag(u){return Hr(u.getComponents("rgb")).reduce((o,c)=>o<<8|Math.floor(c)&255,0)}function lg(u){return u.getComponents("rgb").reduce((o,c,p)=>{const S=Math.floor(p===3?c*255:c)&255;return o<<8|S},0)>>>0}function cg(u){return new ie([u>>16&255,u>>8&255,u&255],"rgb")}function ug(u){return new ie([u>>24&255,u>>16&255,u>>8&255,Ce(u&255,0,255,0,1)],"rgb")}function hg(u){return typeof u!="number"?ie.black():cg(u)}function dg(u){return typeof u!="number"?ie.black():ug(u)}function fg(u){const o=Vh(u);return(c,p)=>{js(c,o(p))}}function pg(u){const o=u?lg:ag;return(c,p)=>{js(c,o(p))}}function mg(u,o){const c=o.toRgbaObject();u.writeProperty("r",c.r),u.writeProperty("g",c.g),u.writeProperty("b",c.b),u.writeProperty("a",c.a)}function _g(u,o){const c=o.toRgbaObject();u.writeProperty("r",c.r),u.writeProperty("g",c.g),u.writeProperty("b",c.b)}function gg(u){return u?mg:_g}function Al(u){return"alpha"in u&&u.alpha===!0}function vg(u){return u?o=>Zo(o,"0x"):o=>wl(o,"0x")}const xg={id:"input-color-number",type:"input",accept:(u,o)=>{if(typeof u!="number"||!("view"in o)||o.view!=="color")return null;const c=bl(o);return c?{initialValue:u,params:c}:null},binding:{reader:u=>Al(u.params)?dg:hg,equals:ie.equals,writer:u=>pg(Al(u.params))},controller:u=>{const o=Al(u.params),c="expanded"in u.params?u.params.expanded:void 0,p="picker"in u.params?u.params.picker:void 0;return new Cl(u.document,{expanded:c!=null?c:!1,formatter:vg(o),parser:$o,pickerLayout:p!=null?p:"popup",supportsAlpha:o,value:u.value,viewProps:u.viewProps})}};function bg(u){return ie.isRgbaColorObject(u)}const yg={id:"input-color-object",type:"input",accept:(u,o)=>{if(!ie.isColorObject(u))return null;const c=bl(o);return c?{initialValue:u,params:c}:null},binding:{reader:u=>og,equals:ie.equals,writer:u=>gg(bg(u.initialValue))},controller:u=>{const o=ie.isRgbaColorObject(u.initialValue),c="expanded"in u.params?u.params.expanded:void 0,p="picker"in u.params?u.params.picker:void 0,S=o?Zo:wl;return new Cl(u.document,{expanded:c!=null?c:!1,formatter:S,parser:$o,pickerLayout:p!=null?p:"popup",supportsAlpha:o,value:u.value,viewProps:u.viewProps})}},wg={id:"input-color-string",type:"input",accept:(u,o)=>{if(typeof u!="string"||"view"in o&&o.view==="text"||!Ko(u))return null;const p=bl(o);return p?{initialValue:u,params:p}:null},binding:{reader:u=>H_,equals:ie.equals,writer:u=>{const o=Ko(u.initialValue);if(!o)throw g.shouldNeverHappen();return fg(o)}},controller:u=>{const o=Ko(u.initialValue);if(!o)throw g.shouldNeverHappen();const c=Vh(o),p="expanded"in u.params?u.params.expanded:void 0,S="picker"in u.params?u.params.picker:void 0;return new Cl(u.document,{expanded:p!=null?p:!1,formatter:c,parser:$o,pickerLayout:S!=null?S:"popup",supportsAlpha:z_(o),value:u.value,viewProps:u.viewProps})}};class Li{constructor(o){this.components=o.components,this.asm_=o.assembly}constrain(o){const c=this.asm_.toComponents(o).map((p,S)=>{var W,Z;return(Z=(W=this.components[S])===null||W===void 0?void 0:W.constrain(p))!==null&&Z!==void 0?Z:p});return this.asm_.fromComponents(c)}}const Hh=P("pndtxt");class Sg{constructor(o,c){this.textViews=c.textViews,this.element=o.createElement("div"),this.element.classList.add(Hh()),this.textViews.forEach(p=>{const S=o.createElement("div");S.classList.add(Hh("a")),S.appendChild(p.element),this.element.appendChild(S)})}}function Mg(u,o,c){return new Ys(u,{arrayPosition:c===0?"fst":c===o.axes.length-1?"lst":"mid",baseStep:o.axes[c].baseStep,parser:o.parser,props:o.axes[c].textProps,value:F(0,{constraint:o.axes[c].constraint}),viewProps:o.viewProps})}class Pl{constructor(o,c){this.value=c.value,this.viewProps=c.viewProps,this.acs_=c.axes.map((p,S)=>Mg(o,c,S)),this.acs_.forEach((p,S)=>{Xs({primary:this.value,secondary:p.value,forward:W=>c.assembly.toComponents(W.rawValue)[S],backward:(W,Z)=>{const gt=c.assembly.toComponents(W.rawValue);return gt[S]=Z.rawValue,c.assembly.fromComponents(gt)}})}),this.view=new Sg(o,{textViews:this.acs_.map(p=>p.view)})}}function Eg(u){return"step"in u&&!f(u.step)?new an(u.step):null}function Tg(u){return"max"in u&&!f(u.max)||"min"in u&&!f(u.min)?new be({max:u.max,min:u.min}):null}function Cg(u){const o=[],c=Eg(u);c&&o.push(c);const p=Tg(u);p&&o.push(p);const S=vl(u.options);return S&&o.push(S),new Ft(o)}function Ag(u){const o=u?ae(u,be):null;return o?[o.minValue,o.maxValue]:[void 0,void 0]}function Pg(u){const[o,c]=Ag(u);return[o!=null?o:0,c!=null?c:100]}const Rg={id:"input-number",type:"input",accept:(u,o)=>{if(typeof u!="number")return null;const c=st,p=ht(o,{format:c.optional.function,max:c.optional.number,min:c.optional.number,options:c.optional.custom(Xo),step:c.optional.number});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Ah,constraint:u=>Cg(u.params),writer:u=>js},controller:u=>{var o,c;const p=u.value,S=u.constraint;if(S&&ae(S,te))return new pe(u.document,{props:C.fromObject({options:(o=xl(S))!==null&&o!==void 0?o:[]}),value:p,viewProps:u.viewProps});const W=(c="format"in u.params?u.params.format:void 0)!==null&&c!==void 0?c:cn(qo(S,p.rawValue));if(S&&ae(S,be)){const[Z,gt]=Pg(S);return new gl(u.document,{baseStep:Vr(S),parser:li,sliderProps:C.fromObject({maxValue:gt,minValue:Z}),textProps:C.fromObject({draggingScale:zr(S,p.rawValue),formatter:W}),value:p,viewProps:u.viewProps})}return new Ys(u.document,{baseStep:Vr(S),parser:li,props:C.fromObject({draggingScale:zr(S,p.rawValue),formatter:W}),value:p,viewProps:u.viewProps})}};class Ii{constructor(o=0,c=0){this.x=o,this.y=c}getComponents(){return[this.x,this.y]}static isObject(o){if(f(o))return!1;const c=o.x,p=o.y;return!(typeof c!="number"||typeof p!="number")}static equals(o,c){return o.x===c.x&&o.y===c.y}toObject(){return{x:this.x,y:this.y}}}const Gh={toComponents:u=>u.getComponents(),fromComponents:u=>new Ii(...u)},Wr=P("p2d");class Dg{constructor(o,c){this.element=o.createElement("div"),this.element.classList.add(Wr()),c.viewProps.bindClassModifiers(this.element),N(c.expanded,V(this.element,Wr(void 0,"expanded")));const p=o.createElement("div");p.classList.add(Wr("h")),this.element.appendChild(p);const S=o.createElement("button");S.classList.add(Wr("b")),S.appendChild(At(o,"p2dpad")),c.viewProps.bindDisabled(S),p.appendChild(S),this.buttonElement=S;const W=o.createElement("div");if(W.classList.add(Wr("t")),p.appendChild(W),this.textElement=W,c.pickerLayout==="inline"){const Z=o.createElement("div");Z.classList.add(Wr("p")),this.element.appendChild(Z),this.pickerElement=Z}else this.pickerElement=null}}const Ui=P("p2dp");class Lg{constructor(o,c){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=c.invertsY,this.maxValue_=c.maxValue,this.element=o.createElement("div"),this.element.classList.add(Ui()),c.layout==="popup"&&this.element.classList.add(Ui(void 0,"p"));const p=o.createElement("div");p.classList.add(Ui("p")),c.viewProps.bindTabIndex(p),this.element.appendChild(p),this.padElement=p;const S=o.createElementNS(Lt,"svg");S.classList.add(Ui("g")),this.padElement.appendChild(S),this.svgElem_=S;const W=o.createElementNS(Lt,"line");W.classList.add(Ui("ax")),W.setAttributeNS(null,"x1","0"),W.setAttributeNS(null,"y1","50%"),W.setAttributeNS(null,"x2","100%"),W.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(W);const Z=o.createElementNS(Lt,"line");Z.classList.add(Ui("ax")),Z.setAttributeNS(null,"x1","50%"),Z.setAttributeNS(null,"y1","0"),Z.setAttributeNS(null,"x2","50%"),Z.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(Z);const gt=o.createElementNS(Lt,"line");gt.classList.add(Ui("l")),gt.setAttributeNS(null,"x1","50%"),gt.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(gt),this.lineElem_=gt;const Ht=o.createElement("div");Ht.classList.add(Ui("m")),this.padElement.appendChild(Ht),this.markerElem_=Ht,c.value.emitter.on("change",this.onValueChange_),this.value=c.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[o,c]=this.value.rawValue.getComponents(),p=this.maxValue_,S=Ce(o,-p,+p,0,100),W=Ce(c,-p,+p,0,100),Z=this.invertsY_?100-W:W;this.lineElem_.setAttributeNS(null,"x2",`${S}%`),this.lineElem_.setAttributeNS(null,"y2",`${Z}%`),this.markerElem_.style.left=`${S}%`,this.markerElem_.style.top=`${Z}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Wh(u,o,c){return[un(o[0],ci(u)),un(o[1],qs(u))*(c?1:-1)]}class Ig{constructor(o,c){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.baseSteps_=c.baseSteps,this.maxValue_=c.maxValue,this.invertsY_=c.invertsY,this.view=new Lg(o,{invertsY:this.invertsY_,layout:c.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new rr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(o,c){if(!o.point)return;const p=this.maxValue_,S=Ce(o.point.x,0,o.bounds.width,-p,+p),W=Ce(this.invertsY_?o.bounds.height-o.point.y:o.point.y,0,o.bounds.height,-p,+p);this.value.setRawValue(new Ii(S,W),c)}onPointerDown_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerMove_(o){this.handlePointerEvent_(o.data,{forceEmit:!1,last:!1})}onPointerUp_(o){this.handlePointerEvent_(o.data,{forceEmit:!0,last:!0})}onPadKeyDown_(o){Dh(o.key)&&o.preventDefault();const[c,p]=Wh(o,this.baseSteps_,this.invertsY_);c===0&&p===0||this.value.setRawValue(new Ii(this.value.rawValue.x+c,this.value.rawValue.y+p),{forceEmit:!1,last:!1})}onPadKeyUp_(o){const[c,p]=Wh(o,this.baseSteps_,this.invertsY_);c===0&&p===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ug{constructor(o,c){var p,S;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.foldable_=_t.create(c.expanded),this.popC_=c.pickerLayout==="popup"?new Be(o,{viewProps:this.viewProps}):null;const W=new Ig(o,{baseSteps:[c.axes[0].baseStep,c.axes[1].baseStep],invertsY:c.invertsY,layout:c.pickerLayout,maxValue:c.maxValue,value:this.value,viewProps:this.viewProps});W.view.allFocusableElements.forEach(Z=>{Z.addEventListener("blur",this.onPopupChildBlur_),Z.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=W,this.textC_=new Pl(o,{assembly:Gh,axes:c.axes,parser:c.parser,value:this.value,viewProps:this.viewProps}),this.view=new Dg(o,{expanded:this.foldable_.value("expanded"),pickerLayout:c.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(p=this.view.buttonElement)===null||p===void 0||p.addEventListener("blur",this.onPadButtonBlur_),(S=this.view.buttonElement)===null||S===void 0||S.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Xs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:Z=>Z.rawValue,backward:(Z,gt)=>gt.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),dt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(o){if(!this.popC_)return;const c=this.view.element,p=o.relatedTarget;(!p||!c.contains(p))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(o){if(!this.popC_)return;const c=this.popC_.view.element,p=Ee(o);p&&c.contains(p)||p&&p===this.view.buttonElement&&!se(c.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(o){this.popC_?o.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&o.key==="Escape"&&this.view.buttonElement.focus()}}function Ng(u){return Ii.isObject(u)?new Ii(u.x,u.y):new Ii}function Fg(u,o){u.writeProperty("x",o.x),u.writeProperty("y",o.y)}function Xh(u){if(!u)return;const o=[];return f(u.step)||o.push(new an(u.step)),(!f(u.max)||!f(u.min))&&o.push(new be({max:u.max,min:u.min})),new Ft(o)}function Og(u){return new Li({assembly:Gh,components:[Xh("x"in u?u.x:void 0),Xh("y"in u?u.y:void 0)]})}function qh(u,o){const c=u&&ae(u,be);if(c)return Math.max(Math.abs(c.minValue||0),Math.abs(c.maxValue||0));const p=Vr(u);return Math.max(Math.abs(p)*10,Math.abs(o)*10)}function kg(u,o){const c=o instanceof Li?o.components[0]:void 0,p=o instanceof Li?o.components[1]:void 0,S=qh(c,u.x),W=qh(p,u.y);return Math.max(S,W)}function Yh(u,o){return{baseStep:Vr(o),constraint:o,textProps:C.fromObject({draggingScale:zr(o,u),formatter:cn(qo(o,u))})}}function Bg(u){if(!("y"in u))return!1;const o=u.y;return o&&"inverted"in o?!!o.inverted:!1}const Vg={id:"input-point2d",type:"input",accept:(u,o)=>{if(!Ii.isObject(u))return null;const c=st,p=ht(o,{expanded:c.optional.boolean,picker:c.optional.custom(Ih),x:c.optional.custom(Ri),y:c.optional.object({inverted:c.optional.boolean,max:c.optional.number,min:c.optional.number,step:c.optional.number})});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Ng,constraint:u=>Og(u.params),equals:Ii.equals,writer:u=>Fg},controller:u=>{const o=u.document,c=u.value,p=u.constraint;if(!(p instanceof Li))throw g.shouldNeverHappen();const S="expanded"in u.params?u.params.expanded:void 0,W="picker"in u.params?u.params.picker:void 0;return new Ug(o,{axes:[Yh(c.rawValue.x,p.components[0]),Yh(c.rawValue.y,p.components[1])],expanded:S!=null?S:!1,invertsY:Bg(u.params),maxValue:kg(c.rawValue,p),parser:li,pickerLayout:W!=null?W:"popup",value:c,viewProps:u.viewProps})}};class Xr{constructor(o=0,c=0,p=0){this.x=o,this.y=c,this.z=p}getComponents(){return[this.x,this.y,this.z]}static isObject(o){if(f(o))return!1;const c=o.x,p=o.y,S=o.z;return!(typeof c!="number"||typeof p!="number"||typeof S!="number")}static equals(o,c){return o.x===c.x&&o.y===c.y&&o.z===c.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const jh={toComponents:u=>u.getComponents(),fromComponents:u=>new Xr(...u)};function zg(u){return Xr.isObject(u)?new Xr(u.x,u.y,u.z):new Xr}function Hg(u,o){u.writeProperty("x",o.x),u.writeProperty("y",o.y),u.writeProperty("z",o.z)}function Rl(u){if(!u)return;const o=[];return f(u.step)||o.push(new an(u.step)),(!f(u.max)||!f(u.min))&&o.push(new be({max:u.max,min:u.min})),new Ft(o)}function Gg(u){return new Li({assembly:jh,components:[Rl("x"in u?u.x:void 0),Rl("y"in u?u.y:void 0),Rl("z"in u?u.z:void 0)]})}function Dl(u,o){return{baseStep:Vr(o),constraint:o,textProps:C.fromObject({draggingScale:zr(o,u),formatter:cn(qo(o,u))})}}const Wg={id:"input-point3d",type:"input",accept:(u,o)=>{if(!Xr.isObject(u))return null;const c=st,p=ht(o,{x:c.optional.custom(Ri),y:c.optional.custom(Ri),z:c.optional.custom(Ri)});return p?{initialValue:u,params:p}:null},binding:{reader:u=>zg,constraint:u=>Gg(u.params),equals:Xr.equals,writer:u=>Hg},controller:u=>{const o=u.value,c=u.constraint;if(!(c instanceof Li))throw g.shouldNeverHappen();return new Pl(u.document,{assembly:jh,axes:[Dl(o.rawValue.x,c.components[0]),Dl(o.rawValue.y,c.components[1]),Dl(o.rawValue.z,c.components[2])],parser:li,value:o,viewProps:u.viewProps})}};class qr{constructor(o=0,c=0,p=0,S=0){this.x=o,this.y=c,this.z=p,this.w=S}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(o){if(f(o))return!1;const c=o.x,p=o.y,S=o.z,W=o.w;return!(typeof c!="number"||typeof p!="number"||typeof S!="number"||typeof W!="number")}static equals(o,c){return o.x===c.x&&o.y===c.y&&o.z===c.z&&o.w===c.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Kh={toComponents:u=>u.getComponents(),fromComponents:u=>new qr(...u)};function Xg(u){return qr.isObject(u)?new qr(u.x,u.y,u.z,u.w):new qr}function qg(u,o){u.writeProperty("x",o.x),u.writeProperty("y",o.y),u.writeProperty("z",o.z),u.writeProperty("w",o.w)}function Qo(u){if(!u)return;const o=[];return f(u.step)||o.push(new an(u.step)),(!f(u.max)||!f(u.min))&&o.push(new be({max:u.max,min:u.min})),new Ft(o)}function Yg(u){return new Li({assembly:Kh,components:[Qo("x"in u?u.x:void 0),Qo("y"in u?u.y:void 0),Qo("z"in u?u.z:void 0),Qo("w"in u?u.w:void 0)]})}function jg(u,o){return{baseStep:Vr(o),constraint:o,textProps:C.fromObject({draggingScale:zr(o,u),formatter:cn(qo(o,u))})}}const Kg={id:"input-point4d",type:"input",accept:(u,o)=>{if(!qr.isObject(u))return null;const c=st,p=ht(o,{x:c.optional.custom(Ri),y:c.optional.custom(Ri),z:c.optional.custom(Ri),w:c.optional.custom(Ri)});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Xg,constraint:u=>Yg(u.params),equals:qr.equals,writer:u=>qg},controller:u=>{const o=u.value,c=u.constraint;if(!(c instanceof Li))throw g.shouldNeverHappen();return new Pl(u.document,{assembly:Kh,axes:o.rawValue.getComponents().map((p,S)=>jg(p,c.components[S])),parser:li,value:o,viewProps:u.viewProps})}};function $g(u){const o=[],c=vl(u.options);return c&&o.push(c),new Ft(o)}const Zg={id:"input-string",type:"input",accept:(u,o)=>{if(typeof u!="string")return null;const p=ht(o,{options:st.optional.custom(Xo)});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Ph,constraint:u=>$g(u.params),writer:u=>js},controller:u=>{var o;const c=u.document,p=u.value,S=u.constraint;return S&&ae(S,te)?new pe(c,{props:C.fromObject({options:(o=xl(S))!==null&&o!==void 0?o:[]}),value:p,viewProps:u.viewProps}):new An(c,{parser:W=>W,props:C.fromObject({formatter:dl}),value:p,viewProps:u.viewProps})}},$s={monitor:{defaultInterval:200,defaultLineCount:3}},$h=P("mll");class Jg{constructor(o,c){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=c.formatter,this.element=o.createElement("div"),this.element.classList.add($h()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("textarea");p.classList.add($h("i")),p.style.height=`calc(var(--bld-us) * ${c.lineCount})`,p.readOnly=!0,c.viewProps.bindDisabled(p),this.element.appendChild(p),this.textareaElem_=p,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update_()}update_(){const o=this.textareaElem_,c=o.scrollTop===o.scrollHeight-o.clientHeight,p=[];this.value.rawValue.forEach(S=>{S!==void 0&&p.push(this.formatter_(S))}),o.textContent=p.join(`
`),c&&(o.scrollTop=o.scrollHeight)}onValueUpdate_(){this.update_()}}class Ll{constructor(o,c){this.value=c.value,this.viewProps=c.viewProps,this.view=new Jg(o,{formatter:c.formatter,lineCount:c.lineCount,value:this.value,viewProps:this.viewProps})}}const Zh=P("sgl");class Qg{constructor(o,c){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=c.formatter,this.element=o.createElement("div"),this.element.classList.add(Zh()),c.viewProps.bindClassModifiers(this.element);const p=o.createElement("input");p.classList.add(Zh("i")),p.readOnly=!0,p.type="text",c.viewProps.bindDisabled(p),this.element.appendChild(p),this.inputElement=p,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update_()}update_(){const o=this.value.rawValue,c=o[o.length-1];this.inputElement.value=c!==void 0?this.formatter_(c):""}onValueUpdate_(){this.update_()}}class Il{constructor(o,c){this.value=c.value,this.viewProps=c.viewProps,this.view=new Qg(o,{formatter:c.formatter,value:this.value,viewProps:this.viewProps})}}const tv={id:"monitor-bool",type:"monitor",accept:(u,o)=>{if(typeof u!="boolean")return null;const p=ht(o,{lineCount:st.optional.number});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Sh},controller:u=>{var o;return u.value.rawValue.length===1?new Il(u.document,{formatter:Mh,value:u.value,viewProps:u.viewProps}):new Ll(u.document,{formatter:Mh,lineCount:(o=u.params.lineCount)!==null&&o!==void 0?o:$s.monitor.defaultLineCount,value:u.value,viewProps:u.viewProps})}};class ev{constructor(){this.emitter=new b,this.index_=-1}get index(){return this.index_}set index(o){this.index_!==o&&(this.index_=o,this.emitter.emit("change",{index:o,sender:this}))}}const Ni=P("grl");class nv{constructor(o,c){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=o.createElement("div"),this.element.classList.add(Ni()),c.viewProps.bindClassModifiers(this.element),this.formatter_=c.formatter,this.minValue_=c.minValue,this.maxValue_=c.maxValue,this.cursor_=c.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const p=o.createElementNS(Lt,"svg");p.classList.add(Ni("g")),p.style.height=`calc(var(--bld-us) * ${c.lineCount})`,this.element.appendChild(p),this.svgElem_=p;const S=o.createElementNS(Lt,"polyline");this.svgElem_.appendChild(S),this.lineElem_=S;const W=o.createElement("div");W.classList.add(Ni("t"),P("tt")()),this.element.appendChild(W),this.tooltipElem_=W,c.value.emitter.on("change",this.onValueUpdate_),this.value=c.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const o=this.svgElem_.getBoundingClientRect(),c=this.value.rawValue.length-1,p=this.minValue_,S=this.maxValue_,W=[];this.value.rawValue.forEach((le,de)=>{if(le===void 0)return;const ar=Ce(de,0,c,0,o.width),Zs=Ce(le,p,S,o.height,0);W.push([ar,Zs].join(","))}),this.lineElem_.setAttributeNS(null,"points",W.join(" "));const Z=this.tooltipElem_,gt=this.value.rawValue[this.cursor_.index];if(gt===void 0){Z.classList.remove(Ni("t","a"));return}const Ht=Ce(this.cursor_.index,0,c,0,o.width),Yt=Ce(gt,p,S,o.height,0);Z.style.left=`${Ht}px`,Z.style.top=`${Yt}px`,Z.textContent=`${this.formatter_(gt)}`,Z.classList.contains(Ni("t","a"))||(Z.classList.add(Ni("t","a"),Ni("t","in")),vt(Z),Z.classList.remove(Ni("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class iv{constructor(o,c){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.value=c.value,this.viewProps=c.viewProps,this.cursor_=new ev,this.view=new nv(o,{cursor:this.cursor_,formatter:c.formatter,lineCount:c.lineCount,maxValue:c.maxValue,minValue:c.minValue,value:this.value,viewProps:this.viewProps}),!se(o))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const p=new rr(this.view.element);p.emitter.on("down",this.onGraphPointerDown_),p.emitter.on("move",this.onGraphPointerMove_),p.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.index=-1}onGraphMouseMove_(o){const c=this.view.element.getBoundingClientRect();this.cursor_.index=Math.floor(Ce(o.offsetX,0,c.width,0,this.value.rawValue.length))}onGraphPointerDown_(o){this.onGraphPointerMove_(o)}onGraphPointerMove_(o){if(!o.data.point){this.cursor_.index=-1;return}this.cursor_.index=Math.floor(Ce(o.data.point.x,0,o.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.index=-1}}function Ul(u){return"format"in u&&!f(u.format)?u.format:cn(2)}function rv(u){var o;return u.value.rawValue.length===1?new Il(u.document,{formatter:Ul(u.params),value:u.value,viewProps:u.viewProps}):new Ll(u.document,{formatter:Ul(u.params),lineCount:(o=u.params.lineCount)!==null&&o!==void 0?o:$s.monitor.defaultLineCount,value:u.value,viewProps:u.viewProps})}function sv(u){var o,c,p;return new iv(u.document,{formatter:Ul(u.params),lineCount:(o=u.params.lineCount)!==null&&o!==void 0?o:$s.monitor.defaultLineCount,maxValue:(c="max"in u.params?u.params.max:null)!==null&&c!==void 0?c:100,minValue:(p="min"in u.params?u.params.min:null)!==null&&p!==void 0?p:0,value:u.value,viewProps:u.viewProps})}function Jh(u){return"view"in u&&u.view==="graph"}const ov={id:"monitor-number",type:"monitor",accept:(u,o)=>{if(typeof u!="number")return null;const c=st,p=ht(o,{format:c.optional.function,lineCount:c.optional.number,max:c.optional.number,min:c.optional.number,view:c.optional.string});return p?{initialValue:u,params:p}:null},binding:{defaultBufferSize:u=>Jh(u)?64:1,reader:u=>Ah},controller:u=>Jh(u.params)?sv(u):rv(u)},av={id:"monitor-string",type:"monitor",accept:(u,o)=>{if(typeof u!="string")return null;const c=st,p=ht(o,{lineCount:c.optional.number,multiline:c.optional.boolean});return p?{initialValue:u,params:p}:null},binding:{reader:u=>Ph},controller:u=>{var o;const c=u.value;return c.rawValue.length>1||"multiline"in u.params&&u.params.multiline?new Ll(u.document,{formatter:dl,lineCount:(o=u.params.lineCount)!==null&&o!==void 0?o:$s.monitor.defaultLineCount,value:c,viewProps:u.viewProps}):new Il(u.document,{formatter:dl,value:c,viewProps:u.viewProps})}};class lv{constructor(o){this.onValueChange_=this.onValueChange_.bind(this),this.reader=o.reader,this.writer=o.writer,this.emitter=new b,this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.target=o.target,this.read()}read(){const o=this.target.read();o!==void 0&&(this.value.rawValue=this.reader(o))}write_(o){this.writer(this.target,o)}onValueChange_(o){this.write_(o.rawValue),this.emitter.emit("change",{options:o.options,rawValue:o.rawValue,sender:this})}}function cv(u,o){const c=u.accept(o.target.read(),o.params);if(f(c))return null;const p=st,S={target:o.target,initialValue:c.initialValue,params:c.params},W=u.binding.reader(S),Z=u.binding.constraint?u.binding.constraint(S):void 0,gt=F(W(c.initialValue),{constraint:Z,equals:u.binding.equals}),Ht=new lv({reader:W,target:o.target,value:gt,writer:u.binding.writer(S)}),Yt=p.optional.boolean(o.params.disabled).value,le=p.optional.boolean(o.params.hidden).value,de=u.controller({constraint:Z,document:o.document,initialValue:c.initialValue,params:c.params,value:Ht.value,viewProps:J.create({disabled:Yt,hidden:le})}),ar=p.optional.string(o.params.label).value;return new mt(o.document,{binding:Ht,blade:Dt(),props:C.fromObject({label:ar||o.target.key}),valueController:de})}class uv{constructor(o){this.onTick_=this.onTick_.bind(this),this.reader_=o.reader,this.target=o.target,this.emitter=new b,this.value=o.value,this.ticker=o.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const o=this.target.read();if(o===void 0)return;const c=this.value.rawValue,p=this.reader_(o);this.value.rawValue=x_(c,p),this.emitter.emit("update",{rawValue:p,sender:this})}onTick_(o){this.read()}}function hv(u,o){return o===0?new xe:new fe(u,o!=null?o:$s.monitor.defaultInterval)}function dv(u,o){var c,p,S;const W=st,Z=u.accept(o.target.read(),o.params);if(f(Z))return null;const gt={target:o.target,initialValue:Z.initialValue,params:Z.params},Ht=u.binding.reader(gt),Yt=(p=(c=W.optional.number(o.params.bufferSize).value)!==null&&c!==void 0?c:u.binding.defaultBufferSize&&u.binding.defaultBufferSize(Z.params))!==null&&p!==void 0?p:1,le=W.optional.number(o.params.interval).value,de=new uv({reader:Ht,target:o.target,ticker:hv(o.document,le),value:g_(Yt)}),ar=W.optional.boolean(o.params.disabled).value,Zs=W.optional.boolean(o.params.hidden).value,Js=u.controller({document:o.document,params:Z.params,value:de.value,viewProps:J.create({disabled:ar,hidden:Zs})}),Yr=(S=W.optional.string(o.params.label).value)!==null&&S!==void 0?S:o.target.key;return new ut(o.document,{binding:de,blade:Dt(),props:C.fromObject({label:Yr}),valueController:Js})}class fv{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(o){o.type==="blade"?this.pluginsMap_.blades.unshift(o):o.type==="input"?this.pluginsMap_.inputs.unshift(o):o.type==="monitor"&&this.pluginsMap_.monitors.unshift(o)}createInput(o,c,p){const S=c.read();if(f(S))throw new g({context:{key:c.key},type:"nomatchingcontroller"});const W=this.pluginsMap_.inputs.reduce((Z,gt)=>Z||cv(gt,{document:o,target:c,params:p}),null);if(W)return W;throw new g({context:{key:c.key},type:"nomatchingcontroller"})}createMonitor(o,c,p){const S=this.pluginsMap_.monitors.reduce((W,Z)=>W||dv(Z,{document:o,params:p,target:c}),null);if(S)return S;throw new g({context:{key:c.key},type:"nomatchingcontroller"})}createBlade(o,c){const p=this.pluginsMap_.blades.reduce((S,W)=>S||Te(W,{document:o,params:c}),null);if(!p)throw new g({type:"nomatchingview",context:{params:c}});return p}createBladeApi(o){if(o instanceof mt)return new ft(o);if(o instanceof ut)return new Tt(o);if(o instanceof Ai)return new ue(o,this);const c=this.pluginsMap_.blades.reduce((p,S)=>p||S.api({controller:o,pool:this}),null);if(!c)throw g.shouldNeverHappen();return c}}function pv(){const u=new fv;return[Vg,Wg,Kg,Zg,Rg,wg,yg,xg,P_,tv,av,ov,ct,ll,R,he].forEach(o=>{u.register(o)}),u}class Qh extends r{constructor(o){super(o),this.emitter_=new b,this.controller_.valueController.value.emitter.on("change",c=>{this.emitter_.emit("change",{event:new a(this,c.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get options(){return this.controller_.valueController.props.get("options")}set options(o){this.controller_.valueController.props.set("options",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}}class td extends r{constructor(o){super(o),this.emitter_=new b,this.controller_.valueController.value.emitter.on("change",c=>{this.emitter_.emit("change",{event:new a(this,c.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(o){this.controller_.valueController.sliderController.props.set("maxValue",o)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(o){this.controller_.valueController.sliderController.props.set("minValue",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}}class ed extends r{constructor(o){super(o),this.emitter_=new b,this.controller_.valueController.value.emitter.on("change",c=>{this.emitter_.emit("change",{event:new a(this,c.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(o){this.controller_.props.set("label",o)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(o){this.controller_.valueController.props.set("formatter",o)}get value(){return this.controller_.valueController.value.rawValue}set value(o){this.controller_.valueController.value.rawValue=o}on(o,c){const p=c.bind(this);return this.emitter_.on(o,S=>{p(S.event)}),this}}const mv=function(){return{id:"list",type:"blade",accept(u){const o=st,c=ht(u,{options:o.required.custom(Xo),value:o.required.raw,view:o.required.constant("list"),label:o.optional.string});return c?{params:c}:null},controller(u){const o=new pe(u.document,{props:C.fromObject({options:Uh(u.params.options)}),value:F(u.params.value),viewProps:u.viewProps});return new Pi(u.document,{blade:u.blade,props:C.fromObject({label:u.params.label}),valueController:o})},api(u){return!(u.controller instanceof Pi)||!(u.controller.valueController instanceof pe)?null:new Qh(u.controller)}}}();function _v(u){return u.reduce((o,c)=>Object.assign(o,{[c.presetKey]:c.read()}),{})}function gv(u,o){u.forEach(c=>{const p=o[c.presetKey];p!==void 0&&c.write(p)})}class vv extends oe{constructor(o,c){super(o,c)}get element(){return this.controller_.view.element}importPreset(o){const c=this.controller_.rackController.rack.find(mt).map(p=>p.binding.target);gv(c,o),this.refresh()}exportPreset(){const o=this.controller_.rackController.rack.find(mt).map(c=>c.binding.target);return _v(o)}refresh(){this.controller_.rackController.rack.find(mt).forEach(o=>{o.binding.read()}),this.controller_.rackController.rack.find(ut).forEach(o=>{o.binding.read()})}}class xv extends Br{constructor(o,c){super(o,{expanded:c.expanded,blade:c.blade,props:c.props,root:!0,viewProps:c.viewProps})}}const bv={id:"slider",type:"blade",accept(u){const o=st,c=ht(u,{max:o.required.number,min:o.required.number,view:o.required.constant("slider"),format:o.optional.function,label:o.optional.string,value:o.optional.number});return c?{params:c}:null},controller(u){var o,c;const p=(o=u.params.value)!==null&&o!==void 0?o:0,S=new gl(u.document,{baseStep:1,parser:li,sliderProps:C.fromObject({maxValue:u.params.max,minValue:u.params.min}),textProps:C.fromObject({draggingScale:zr(void 0,p),formatter:(c=u.params.format)!==null&&c!==void 0?c:m_}),value:F(p),viewProps:u.viewProps});return new Pi(u.document,{blade:u.blade,props:C.fromObject({label:u.params.label}),valueController:S})},api(u){return!(u.controller instanceof Pi)||!(u.controller.valueController instanceof gl)?null:new td(u.controller)}},yv=function(){return{id:"text",type:"blade",accept(u){const o=st,c=ht(u,{parse:o.required.function,value:o.required.raw,view:o.required.constant("text"),format:o.optional.function,label:o.optional.string});return c?{params:c}:null},controller(u){var o;const c=new An(u.document,{parser:u.params.parse,props:C.fromObject({formatter:(o=u.params.format)!==null&&o!==void 0?o:p=>String(p)}),value:F(u.params.value),viewProps:u.viewProps});return new Pi(u.document,{blade:u.blade,props:C.fromObject({label:u.params.label}),valueController:c})},api(u){return!(u.controller instanceof Pi)||!(u.controller.valueController instanceof An)?null:new ed(u.controller)}}}();function wv(u){const o=u.createElement("div");return o.classList.add(P("dfw")()),u.body&&u.body.appendChild(o),o}function nd(u,o,c){if(u.querySelector(`style[data-tp-style=${o}]`))return;const p=u.createElement("style");p.dataset.tpStyle=o,p.textContent=c,u.head.appendChild(p)}class Sv extends vv{constructor(o){var c;const p=o||{},S=(c=p.document)!==null&&c!==void 0?c:Se(),W=pv(),Z=new xv(S,{expanded:p.expanded,blade:Dt(),props:C.fromObject({title:p.title}),viewProps:J.create()});super(Z,W),this.pool_=W,this.containerElem_=p.container||wv(S),this.containerElem_.appendChild(this.element),this.doc_=S,this.usesDefaultWrapper_=!p.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw g.alreadyDisposed();return this.doc_}dispose(){const o=this.containerElem_;if(!o)throw g.alreadyDisposed();if(this.usesDefaultWrapper_){const c=o.parentElement;c&&c.removeChild(o)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(o){("plugin"in o?[o.plugin]:"plugins"in o?o.plugins:[]).forEach(p=>{this.pool_.register(p),this.embedPluginStyle_(p)})}embedPluginStyle_(o){o.css&&nd(this.document,`plugin-${o.id}`,o.css)}setUpDefaultPlugins_(){nd(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(o=>{this.embedPluginStyle_(o)}),this.registerPlugin({plugins:[bv,mv,he,yv]})}}const Mv=new n("3.0.8");e.BladeApi=r,e.ButtonApi=y,e.FolderApi=oe,e.InputBindingApi=ft,e.ListApi=Qh,e.MonitorBindingApi=Tt,e.Pane=Sv,e.SeparatorApi=zo,e.SliderApi=td,e.TabApi=Vt,e.TabPageApi=Et,e.TextApi=ed,e.TpChangeEvent=a,e.VERSION=Mv,Object.defineProperty(e,"__esModule",{value:!0})})})(Oc,Oc.exports);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var kc=function(i,t){return kc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])},kc(i,t)};function Ti(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");kc(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function V0(i,t,e,n){function r(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function l(f){try{h(n.next(f))}catch(m){a(m)}}function d(f){try{h(n.throw(f))}catch(m){a(m)}}function h(f){f.done?s(f.value):r(f.value).then(l,d)}h((n=n.apply(i,t||[])).next())})}function Op(i,t){var e={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(h){return function(f){return d([h,f])}}function d(h){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,r&&(s=h[0]&2?r.return:h[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,h[1])).done)return s;switch(r=0,s&&(h=[h[0]&2,s.value]),h[0]){case 0:case 1:s=h;break;case 4:return e.label++,{value:h[1],done:!1};case 5:e.label++,r=h[1],h=[0];continue;case 7:h=e.ops.pop(),e.trys.pop();continue;default:if(s=e.trys,!(s=s.length>0&&s[s.length-1])&&(h[0]===6||h[0]===2)){e=0;continue}if(h[0]===3&&(!s||h[1]>s[0]&&h[1]<s[3])){e.label=h[1];break}if(h[0]===6&&e.label<s[1]){e.label=s[1],s=h;break}if(s&&e.label<s[2]){e.label=s[2],e.ops.push(h);break}s[2]&&e.ops.pop(),e.trys.pop();continue}h=t.call(i,e)}catch(f){h=[6,f],r=0}finally{n=s=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}function Ps(i){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&i[t],n=0;if(e)return e.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Tn(i,t){var e=typeof Symbol=="function"&&i[Symbol.iterator];if(!e)return i;var n=e.call(i),r,s=[],a;try{for(;(t===void 0||t-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(l){a={error:l}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(a)throw a.error}}return s}function Hn(i,t,e){if(e||arguments.length===2)for(var n=0,r=t.length,s;n<r;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return i.concat(s||Array.prototype.slice.call(t))}function xs(i){return this instanceof xs?(this.v=i,this):new xs(i)}function z0(i,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(i,t||[]),r,s=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(_){n[_]&&(r[_]=function(g){return new Promise(function(w,y){s.push([_,g,w,y])>1||l(_,g)})})}function l(_,g){try{d(n[_](g))}catch(w){m(s[0][3],w)}}function d(_){_.value instanceof xs?Promise.resolve(_.value.v).then(h,f):m(s[0][2],_)}function h(_){l("next",_)}function f(_){l("throw",_)}function m(_,g){_(g),s.shift(),s.length&&l(s[0][0],s[0][1])}}function H0(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=i[Symbol.asyncIterator],e;return t?t.call(i):(i=typeof Ps=="function"?Ps(i):i[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(s){e[s]=i[s]&&function(a){return new Promise(function(l,d){a=i[s](a),r(l,d,a.done,a.value)})}}function r(s,a,l,d){Promise.resolve(d).then(function(h){s({value:h,done:l})},a)}}function ge(i){return typeof i=="function"}function Ku(i){var t=function(n){Error.call(n),n.stack=new Error().stack},e=i(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Wl=Ku(function(i){return function(e){i(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Ya(i,t){if(i){var e=i.indexOf(t);0<=e&&i.splice(e,1)}}var Ur=function(){function i(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var t,e,n,r,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=Ps(a),d=l.next();!d.done;d=l.next()){var h=d.value;h.remove(this)}}catch(y){t={error:y}}finally{try{d&&!d.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}else a.remove(this);var f=this.initialTeardown;if(ge(f))try{f()}catch(y){s=y instanceof Wl?y.errors:[y]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var _=Ps(m),g=_.next();!g.done;g=_.next()){var w=g.value;try{yd(w)}catch(y){s=s!=null?s:[],y instanceof Wl?s=Hn(Hn([],Tn(s)),Tn(y.errors)):s.push(y)}}}catch(y){n={error:y}}finally{try{g&&!g.done&&(r=_.return)&&r.call(_)}finally{if(n)throw n.error}}}if(s)throw new Wl(s)}},i.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)yd(t);else{if(t instanceof i){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},i.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},i.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},i.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&Ya(e,t)},i.prototype.remove=function(t){var e=this._finalizers;e&&Ya(e,t),t instanceof i&&t._removeParent(this)},i.EMPTY=function(){var t=new i;return t.closed=!0,t}(),i}(),kp=Ur.EMPTY;function Bp(i){return i instanceof Ur||i&&"closed"in i&&ge(i.remove)&&ge(i.add)&&ge(i.unsubscribe)}function yd(i){ge(i)?i():i.unsubscribe()}var rl={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ja={setTimeout:function(i,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var r=ja.delegate;return r!=null&&r.setTimeout?r.setTimeout.apply(r,Hn([i,t],Tn(e))):setTimeout.apply(void 0,Hn([i,t],Tn(e)))},clearTimeout:function(i){var t=ja.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(i)},delegate:void 0};function Vp(i){ja.setTimeout(function(){var t=rl.onUnhandledError;if(t)t(i);else throw i})}function Bc(){}var G0=function(){return $u("C",void 0,void 0)}();function W0(i){return $u("E",void 0,i)}function X0(i){return $u("N",i,void 0)}function $u(i,t,e){return{kind:i,value:t,error:e}}function Aa(i){i()}var Zu=function(i){Ti(t,i);function t(e){var n=i.call(this)||this;return n.isStopped=!1,e?(n.destination=e,Bp(e)&&e.add(n)):n.destination=K0,n}return t.create=function(e,n,r){return new Ka(e,n,r)},t.prototype.next=function(e){this.isStopped?ql(X0(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?ql(W0(e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?ql(G0,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Ur),q0=Function.prototype.bind;function Xl(i,t){return q0.call(i,t)}var Y0=function(){function i(t){this.partialObserver=t}return i.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(n){ea(n)}},i.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(n){ea(n)}else ea(t)},i.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){ea(e)}},i}(),Ka=function(i){Ti(t,i);function t(e,n,r){var s=i.call(this)||this,a;if(ge(e)||!e)a={next:e!=null?e:void 0,error:n!=null?n:void 0,complete:r!=null?r:void 0};else{var l;s&&rl.useDeprecatedNextContext?(l=Object.create(e),l.unsubscribe=function(){return s.unsubscribe()},a={next:e.next&&Xl(e.next,l),error:e.error&&Xl(e.error,l),complete:e.complete&&Xl(e.complete,l)}):a=e}return s.destination=new Y0(a),s}return t}(Zu);function ea(i){Vp(i)}function j0(i){throw i}function ql(i,t){var e=rl.onStoppedNotification;e&&ja.setTimeout(function(){return e(i,t)})}var K0={closed:!0,next:Bc,error:j0,complete:Bc},Ju=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function er(i){return i}function $0(i){return i.length===0?er:i.length===1?i[0]:function(e){return i.reduce(function(n,r){return r(n)},e)}}var tn=function(){function i(t){t&&(this._subscribe=t)}return i.prototype.lift=function(t){var e=new i;return e.source=this,e.operator=t,e},i.prototype.subscribe=function(t,e,n){var r=this,s=J0(t)?t:new Ka(t,e,n);return Aa(function(){var a=r,l=a.operator,d=a.source;s.add(l?l.call(s,d):d?r._subscribe(s):r._trySubscribe(s))}),s},i.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},i.prototype.forEach=function(t,e){var n=this;return e=wd(e),new e(function(r,s){var a=new Ka({next:function(l){try{t(l)}catch(d){s(d),a.unsubscribe()}},error:s,complete:r});n.subscribe(a)})},i.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},i.prototype[Ju]=function(){return this},i.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return $0(t)(this)},i.prototype.toPromise=function(t){var e=this;return t=wd(t),new t(function(n,r){var s;e.subscribe(function(a){return s=a},function(a){return r(a)},function(){return n(s)})})},i.create=function(t){return new i(t)},i}();function wd(i){var t;return(t=i!=null?i:rl.Promise)!==null&&t!==void 0?t:Promise}function Z0(i){return i&&ge(i.next)&&ge(i.error)&&ge(i.complete)}function J0(i){return i&&i instanceof Zu||Z0(i)&&Bp(i)}function Q0(i){return ge(i==null?void 0:i.lift)}function ke(i){return function(t){if(Q0(t))return t.lift(function(e){try{return i(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Le(i,t,e,n,r){return new tx(i,t,e,n,r)}var tx=function(i){Ti(t,i);function t(e,n,r,s,a,l){var d=i.call(this,e)||this;return d.onFinalize=a,d.shouldUnsubscribe=l,d._next=n?function(h){try{n(h)}catch(f){e.error(f)}}:i.prototype._next,d._error=s?function(h){try{s(h)}catch(f){e.error(f)}finally{this.unsubscribe()}}:i.prototype._error,d._complete=r?function(){try{r()}catch(h){e.error(h)}finally{this.unsubscribe()}}:i.prototype._complete,d}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;i.prototype.unsubscribe.call(this),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t}(Zu),zp={now:function(){return(zp.delegate||performance).now()},delegate:void 0},Pa={schedule:function(i){var t=requestAnimationFrame,e=cancelAnimationFrame,n=Pa.delegate;n&&(t=n.requestAnimationFrame,e=n.cancelAnimationFrame);var r=t(function(s){e=void 0,i(s)});return new Ur(function(){return e==null?void 0:e(r)})},requestAnimationFrame:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var e=Pa.delegate;return((e==null?void 0:e.requestAnimationFrame)||requestAnimationFrame).apply(void 0,Hn([],Tn(i)))},cancelAnimationFrame:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var e=Pa.delegate;return((e==null?void 0:e.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,Hn([],Tn(i)))},delegate:void 0};function ex(i){return i?Hp(i):nx}function Hp(i){var t=Pa.schedule;return new tn(function(e){var n=new Ur,r=i||zp,s=r.now(),a=function(l){var d=r.now();e.next({timestamp:i?d:l,elapsed:d-s}),e.closed||n.add(t(a))};return n.add(t(a)),n})}var nx=Hp(),ix=Ku(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Qu=function(i){Ti(t,i);function t(){var e=i.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var n=new Sd(this,this);return n.operator=e,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new ix},t.prototype.next=function(e){var n=this;Aa(function(){var r,s;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var a=Ps(n.currentObservers),l=a.next();!l.done;l=a.next()){var d=l.value;d.next(e)}}catch(h){r={error:h}}finally{try{l&&!l.done&&(s=a.return)&&s.call(a)}finally{if(r)throw r.error}}}})},t.prototype.error=function(e){var n=this;Aa(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=e;for(var r=n.observers;r.length;)r.shift().error(e)}})},t.prototype.complete=function(){var e=this;Aa(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var n=e.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var n=this,r=this,s=r.hasError,a=r.isStopped,l=r.observers;return s||a?kp:(this.currentObservers=null,l.push(e),new Ur(function(){n.currentObservers=null,Ya(l,e)}))},t.prototype._checkFinalizedStatuses=function(e){var n=this,r=n.hasError,s=n.thrownError,a=n.isStopped;r?e.error(s):a&&e.complete()},t.prototype.asObservable=function(){var e=new tn;return e.source=this,e},t.create=function(e,n){return new Sd(e,n)},t}(tn),Sd=function(i){Ti(t,i);function t(e,n){var r=i.call(this)||this;return r.destination=e,r.source=n,r}return t.prototype.next=function(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,e)},t.prototype.error=function(e){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,e)},t.prototype.complete=function(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)},t.prototype._subscribe=function(e){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&r!==void 0?r:kp},t}(Qu),th={now:function(){return(th.delegate||Date).now()},delegate:void 0},rx=function(i){Ti(t,i);function t(e,n,r){e===void 0&&(e=1/0),n===void 0&&(n=1/0),r===void 0&&(r=th);var s=i.call(this)||this;return s._bufferSize=e,s._windowTime=n,s._timestampProvider=r,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=n===1/0,s._bufferSize=Math.max(1,e),s._windowTime=Math.max(1,n),s}return t.prototype.next=function(e){var n=this,r=n.isStopped,s=n._buffer,a=n._infiniteTimeWindow,l=n._timestampProvider,d=n._windowTime;r||(s.push(e),!a&&s.push(l.now()+d)),this._trimBuffer(),i.prototype.next.call(this,e)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var n=this._innerSubscribe(e),r=this,s=r._infiniteTimeWindow,a=r._buffer,l=a.slice(),d=0;d<l.length&&!e.closed;d+=s?1:2)e.next(l[d]);return this._checkFinalizedStatuses(e),n},t.prototype._trimBuffer=function(){var e=this,n=e._bufferSize,r=e._timestampProvider,s=e._buffer,a=e._infiniteTimeWindow,l=(a?1:2)*n;if(n<1/0&&l<s.length&&s.splice(0,s.length-l),!a){for(var d=r.now(),h=0,f=1;f<s.length&&s[f]<=d;f+=2)h=f;h&&s.splice(0,h+1)}},t}(Qu),sx=function(i){Ti(t,i);function t(e,n){return i.call(this)||this}return t.prototype.schedule=function(e,n){return n===void 0&&(n=0),this},t}(Ur),$a={setInterval:function(i,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var r=$a.delegate;return r!=null&&r.setInterval?r.setInterval.apply(r,Hn([i,t],Tn(e))):setInterval.apply(void 0,Hn([i,t],Tn(e)))},clearInterval:function(i){var t=$a.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(i)},delegate:void 0},ox=function(i){Ti(t,i);function t(e,n){var r=i.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return t.prototype.schedule=function(e,n){if(n===void 0&&(n=0),this.closed)return this;this.state=e;var r=this.id,s=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(s,r,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(s,this.id,n),this},t.prototype.requestAsyncId=function(e,n,r){return r===void 0&&(r=0),$a.setInterval(e.flush.bind(e,this),r)},t.prototype.recycleAsyncId=function(e,n,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return n;$a.clearInterval(n)},t.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(e,n);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,n){var r=!1,s;try{this.work(e)}catch(a){r=!0,s=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},t.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,r=e.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Ya(s,this),n!=null&&(this.id=this.recycleAsyncId(r,n,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},t}(sx),Md=function(){function i(t,e){e===void 0&&(e=i.now),this.schedulerActionCtor=t,this.now=e}return i.prototype.schedule=function(t,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,t).schedule(n,e)},i.now=th.now,i}(),ax=function(i){Ti(t,i);function t(e,n){n===void 0&&(n=Md.now);var r=i.call(this,e,n)||this;return r.actions=[],r._active=!1,r._scheduled=void 0,r}return t.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var r;this._active=!0;do if(r=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,r){for(;e=n.shift();)e.unsubscribe();throw r}},t}(Md),eh=new ax(ox),lx=eh,Gp=new tn(function(i){return i.complete()});function Wp(i){return i&&ge(i.schedule)}function Xp(i){return i[i.length-1]}function qp(i){return ge(Xp(i))?i.pop():void 0}function nh(i){return Wp(Xp(i))?i.pop():void 0}var ih=function(i){return i&&typeof i.length=="number"&&typeof i!="function"};function Yp(i){return ge(i==null?void 0:i.then)}function jp(i){return ge(i[Ju])}function Kp(i){return Symbol.asyncIterator&&ge(i==null?void 0:i[Symbol.asyncIterator])}function $p(i){return new TypeError("You provided "+(i!==null&&typeof i=="object"?"an invalid object":"'"+i+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function cx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Zp=cx();function Jp(i){return ge(i==null?void 0:i[Zp])}function Qp(i){return z0(this,arguments,function(){var e,n,r,s;return Op(this,function(a){switch(a.label){case 0:e=i.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,xs(e.read())];case 3:return n=a.sent(),r=n.value,s=n.done,s?[4,xs(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,xs(r)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function tm(i){return ge(i==null?void 0:i.getReader)}function Zn(i){if(i instanceof tn)return i;if(i!=null){if(jp(i))return ux(i);if(ih(i))return hx(i);if(Yp(i))return dx(i);if(Kp(i))return em(i);if(Jp(i))return fx(i);if(tm(i))return px(i)}throw $p(i)}function ux(i){return new tn(function(t){var e=i[Ju]();if(ge(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function hx(i){return new tn(function(t){for(var e=0;e<i.length&&!t.closed;e++)t.next(i[e]);t.complete()})}function dx(i){return new tn(function(t){i.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,Vp)})}function fx(i){return new tn(function(t){var e,n;try{for(var r=Ps(i),s=r.next();!s.done;s=r.next()){var a=s.value;if(t.next(a),t.closed)return}}catch(l){e={error:l}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}t.complete()})}function em(i){return new tn(function(t){mx(i,t).catch(function(e){return t.error(e)})})}function px(i){return em(Qp(i))}function mx(i,t){var e,n,r,s;return V0(this,void 0,void 0,function(){var a,l;return Op(this,function(d){switch(d.label){case 0:d.trys.push([0,5,6,11]),e=H0(i),d.label=1;case 1:return[4,e.next()];case 2:if(n=d.sent(),!!n.done)return[3,4];if(a=n.value,t.next(a),t.closed)return[2];d.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return l=d.sent(),r={error:l},[3,11];case 6:return d.trys.push([6,,9,10]),n&&!n.done&&(s=e.return)?[4,s.call(e)]:[3,8];case 7:d.sent(),d.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function xi(i,t,e,n,r){n===void 0&&(n=0),r===void 0&&(r=!1);var s=t.schedule(function(){e(),r?i.add(this.schedule(null,n)):this.unsubscribe()},n);if(i.add(s),!r)return s}function nm(i,t){return t===void 0&&(t=0),ke(function(e,n){e.subscribe(Le(n,function(r){return xi(n,i,function(){return n.next(r)},t)},function(){return xi(n,i,function(){return n.complete()},t)},function(r){return xi(n,i,function(){return n.error(r)},t)}))})}function im(i,t){return t===void 0&&(t=0),ke(function(e,n){n.add(i.schedule(function(){return e.subscribe(n)},t))})}function _x(i,t){return Zn(i).pipe(im(t),nm(t))}function gx(i,t){return Zn(i).pipe(im(t),nm(t))}function vx(i,t){return new tn(function(e){var n=0;return t.schedule(function(){n===i.length?e.complete():(e.next(i[n++]),e.closed||this.schedule())})})}function xx(i,t){return new tn(function(e){var n;return xi(e,t,function(){n=i[Zp](),xi(e,t,function(){var r,s,a;try{r=n.next(),s=r.value,a=r.done}catch(l){e.error(l);return}a?e.complete():e.next(s)},0,!0)}),function(){return ge(n==null?void 0:n.return)&&n.return()}})}function rm(i,t){if(!i)throw new Error("Iterable cannot be null");return new tn(function(e){xi(e,t,function(){var n=i[Symbol.asyncIterator]();xi(e,t,function(){n.next().then(function(r){r.done?e.complete():e.next(r.value)})},0,!0)})})}function bx(i,t){return rm(Qp(i),t)}function yx(i,t){if(i!=null){if(jp(i))return _x(i,t);if(ih(i))return vx(i,t);if(Yp(i))return gx(i,t);if(Kp(i))return rm(i,t);if(Jp(i))return xx(i,t);if(tm(i))return bx(i,t)}throw $p(i)}function Uo(i,t){return t?yx(i,t):Zn(i)}var sm=Ku(function(i){return function(){i(this),this.name="EmptyError",this.message="no elements in sequence"}});function wx(i){return i instanceof Date&&!isNaN(i)}function om(i,t){return ke(function(e,n){var r=0;e.subscribe(Le(n,function(s){n.next(i.call(t,s,r++))}))})}var Sx=Array.isArray;function Mx(i,t){return Sx(t)?i.apply(void 0,Hn([],Tn(t))):i(t)}function am(i){return om(function(t){return Mx(i,t)})}var Ex=Array.isArray,Tx=Object.getPrototypeOf,Cx=Object.prototype,Ax=Object.keys;function Px(i){if(i.length===1){var t=i[0];if(Ex(t))return{args:t,keys:null};if(Rx(t)){var e=Ax(t);return{args:e.map(function(n){return t[n]}),keys:e}}}return{args:i,keys:null}}function Rx(i){return i&&typeof i=="object"&&Tx(i)===Cx}function Dx(i,t){return i.reduce(function(e,n,r){return e[n]=t[r],e},{})}function Lx(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var e=nh(i),n=qp(i),r=Px(i),s=r.args,a=r.keys;if(s.length===0)return Uo([],e);var l=new tn(Ix(s,e,a?function(d){return Dx(a,d)}:er));return n?l.pipe(am(n)):l}function Ix(i,t,e){return e===void 0&&(e=er),function(n){Ed(t,function(){for(var r=i.length,s=new Array(r),a=r,l=r,d=function(f){Ed(t,function(){var m=Uo(i[f],t),_=!1;m.subscribe(Le(n,function(g){s[f]=g,_||(_=!0,l--),l||n.next(e(s.slice()))},function(){--a||n.complete()}))},n)},h=0;h<r;h++)d(h)},n)}}function Ed(i,t,e){i?xi(e,i,t):t()}function Ux(i,t,e,n,r,s,a,l){var d=[],h=0,f=0,m=!1,_=function(){m&&!d.length&&!h&&t.complete()},g=function(y){return h<n?w(y):d.push(y)},w=function(y){s&&t.next(y),h++;var b=!1;Zn(e(y,f++)).subscribe(Le(t,function(v){r==null||r(v),s?g(v):t.next(v)},function(){b=!0},void 0,function(){if(b)try{h--;for(var v=function(){var P=d.shift();a?xi(t,a,function(){return w(P)}):w(P)};d.length&&h<n;)v();_()}catch(P){t.error(P)}}))};return i.subscribe(Le(t,g,function(){m=!0,_()})),function(){l==null||l()}}function rh(i,t,e){return e===void 0&&(e=1/0),ge(t)?rh(function(n,r){return om(function(s,a){return t(n,s,r,a)})(Zn(i(n,r)))},e):(typeof t=="number"&&(e=t),ke(function(n,r){return Ux(n,r,i,e)}))}function Nx(i){return i===void 0&&(i=1/0),rh(er,i)}function Fx(){return Nx(1)}function Vc(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return Fx()(Uo(i,nh(i)))}var Ox=["addListener","removeListener"],kx=["addEventListener","removeEventListener"],Bx=["on","off"];function Za(i,t,e,n){if(ge(e)&&(n=e,e=void 0),n)return Za(i,t,e).pipe(am(n));var r=Tn(Hx(i)?kx.map(function(l){return function(d){return i[l](t,d,e)}}):Vx(i)?Ox.map(Td(i,t)):zx(i)?Bx.map(Td(i,t)):[],2),s=r[0],a=r[1];if(!s&&ih(i))return rh(function(l){return Za(l,t,e)})(Zn(i));if(!s)throw new TypeError("Invalid event target");return new tn(function(l){var d=function(){for(var h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];return l.next(1<h.length?h:h[0])};return s(d),function(){return a(d)}})}function Td(i,t){return function(e){return function(n){return i[e](t,n)}}}function Vx(i){return ge(i.addListener)&&ge(i.removeListener)}function zx(i){return ge(i.on)&&ge(i.off)}function Hx(i){return ge(i.addEventListener)&&ge(i.removeEventListener)}function sh(i,t,e){i===void 0&&(i=0),e===void 0&&(e=lx);var n=-1;return t!=null&&(Wp(t)?e=t:n=t),new tn(function(r){var s=wx(i)?+i-e.now():i;s<0&&(s=0);var a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=n?this.schedule(void 0,n):r.complete())},s)})}function oh(i,t){return ke(function(e,n){var r=0;e.subscribe(Le(n,function(s){return i.call(t,s,r++)&&n.next(s)}))})}function zc(i){return ke(function(t,e){var n=null,r=!1,s;n=t.subscribe(Le(e,void 0,void 0,function(a){s=Zn(i(a,zc(i)(t))),n?(n.unsubscribe(),n=null,s.subscribe(e)):r=!0})),r&&(n.unsubscribe(),n=null,s.subscribe(e))})}function Gx(i,t,e,n,r){return function(s,a){var l=e,d=t,h=0;s.subscribe(Le(a,function(f){var m=h++;d=l?i(d,f,m):(l=!0,f),n&&a.next(d)},r&&function(){l&&a.next(d),a.complete()}))}}function Wx(i,t){return t===void 0&&(t=eh),ke(function(e,n){var r=null,s=null,a=null,l=function(){if(r){r.unsubscribe(),r=null;var h=s;s=null,n.next(h)}};function d(){var h=a+i,f=t.now();if(f<h){r=this.schedule(void 0,h-f),n.add(r);return}l()}e.subscribe(Le(n,function(h){s=h,a=t.now(),r||(r=t.schedule(d,i),n.add(r))},function(){l(),n.complete()},void 0,function(){s=r=null}))})}function Xx(i){return ke(function(t,e){var n=!1;t.subscribe(Le(e,function(r){n=!0,e.next(r)},function(){n||e.next(i),e.complete()}))})}function lm(i){return i<=0?function(){return Gp}:ke(function(t,e){var n=0;t.subscribe(Le(e,function(r){++n<=i&&(e.next(r),i<=n&&e.complete())}))})}function qx(i){return i===void 0&&(i=Yx),ke(function(t,e){var n=!1;t.subscribe(Le(e,function(r){n=!0,e.next(r)},function(){return n?e.complete():e.error(i())}))})}function Yx(){return new sm}function jx(i){return ke(function(t,e){try{t.subscribe(e)}finally{e.add(i)}})}function Kx(i,t){var e=arguments.length>=2;return function(n){return n.pipe(i?oh(function(r,s){return i(r,s,n)}):er,lm(1),e?Xx(t):qx(function(){return new sm}))}}function $x(i){i===void 0&&(i=1/0);var t;i&&typeof i=="object"?t=i:t={count:i};var e=t.count,n=e===void 0?1/0:e,r=t.delay,s=t.resetOnSuccess,a=s===void 0?!1:s;return n<=0?er:ke(function(l,d){var h=0,f,m=function(){var _=!1;f=l.subscribe(Le(d,function(g){a&&(h=0),d.next(g)},void 0,function(g){if(h++<n){var w=function(){f?(f.unsubscribe(),f=null,m()):_=!0};if(r!=null){var y=typeof r=="number"?sh(r):Zn(r(g,h)),b=Le(d,function(){b.unsubscribe(),w()},function(){d.complete()});y.subscribe(b)}else w()}else d.error(g)})),_&&(f.unsubscribe(),f=null,m())};m()})}function Zx(i,t){return ke(Gx(i,t,arguments.length>=2,!0))}function Jx(i){i===void 0&&(i={});var t=i.connector,e=t===void 0?function(){return new Qu}:t,n=i.resetOnError,r=n===void 0?!0:n,s=i.resetOnComplete,a=s===void 0?!0:s,l=i.resetOnRefCountZero,d=l===void 0?!0:l;return function(h){var f=null,m=null,_=null,g=0,w=!1,y=!1,b=function(){m==null||m.unsubscribe(),m=null},v=function(){b(),f=_=null,w=y=!1},P=function(){var L=f;v(),L==null||L.unsubscribe()};return ke(function(L,A){g++,!y&&!w&&b();var N=_=_!=null?_:e();A.add(function(){g--,g===0&&!y&&!w&&(m=Yl(P,d))}),N.subscribe(A),f||(f=new Ka({next:function(U){return N.next(U)},error:function(U){y=!0,b(),m=Yl(v,r,U),N.error(U)},complete:function(){w=!0,b(),m=Yl(v,a),N.complete()}}),Uo(L).subscribe(f))})(h)}}function Yl(i,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];return t===!0?(i(),null):t===!1?null:t.apply(void 0,Hn([],Tn(e))).pipe(lm(1)).subscribe(function(){return i()})}function Qx(i,t,e){var n,r,s,a,l=!1;return i&&typeof i=="object"?(n=i.bufferSize,a=n===void 0?1/0:n,r=i.windowTime,t=r===void 0?1/0:r,s=i.refCount,l=s===void 0?!1:s,e=i.scheduler):a=i!=null?i:1/0,Jx({connector:function(){return new rx(a,t,e)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:l})}function tb(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var e=nh(i);return ke(function(n,r){(e?Vc(i,n,e):Vc(i,n)).subscribe(r)})}function eb(i,t){return ke(function(e,n){var r=null,s=0,a=!1,l=function(){return a&&!r&&n.complete()};e.subscribe(Le(n,function(d){r==null||r.unsubscribe();var h=0,f=s++;Zn(i(d,f)).subscribe(r=Le(n,function(m){return n.next(t?t(d,m,f,h++):m)},function(){r=null,l()}))},function(){a=!0,l()}))})}function Cd(i,t,e){var n=ge(i)||t||e?{next:i,error:t,complete:e}:i;return n?ke(function(r,s){var a;(a=n.subscribe)===null||a===void 0||a.call(n);var l=!0;r.subscribe(Le(s,function(d){var h;(h=n.next)===null||h===void 0||h.call(n,d),s.next(d)},function(){var d;l=!1,(d=n.complete)===null||d===void 0||d.call(n),s.complete()},function(d){var h;l=!1,(h=n.error)===null||h===void 0||h.call(n,d),s.error(d)},function(){var d,h;l&&((d=n.unsubscribe)===null||d===void 0||d.call(n)),(h=n.finalize)===null||h===void 0||h.call(n)}))}):er}var cm={leading:!0,trailing:!1};function nb(i,t){return t===void 0&&(t=cm),ke(function(e,n){var r=t.leading,s=t.trailing,a=!1,l=null,d=null,h=!1,f=function(){d==null||d.unsubscribe(),d=null,s&&(g(),h&&n.complete())},m=function(){d=null,h&&n.complete()},_=function(w){return d=Zn(i(w)).subscribe(Le(n,f,m))},g=function(){if(a){a=!1;var w=l;l=null,n.next(w),!h&&_(w)}};e.subscribe(Le(n,function(w){a=!0,l=w,!(d&&!d.closed)&&(r?g():_(w))},function(){h=!0,!(s&&a&&d&&!d.closed)&&n.complete()}))})}function ib(i,t,e){t===void 0&&(t=eh),e===void 0&&(e=cm);var n=sh(i,t);return nb(function(){return n},e)}function rb(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];var e=qp(i);return ke(function(n,r){for(var s=i.length,a=new Array(s),l=i.map(function(){return!1}),d=!1,h=function(m){Zn(i[m]).subscribe(Le(r,function(_){a[m]=_,!d&&!l[m]&&(l[m]=!0,(d=l.every(er))&&(l=null))},Bc))},f=0;f<s;f++)h(f);n.subscribe(Le(r,function(m){if(d){var _=Hn([m],Tn(a));r.next(e?e.apply(void 0,Hn([],Tn(_))):_)}}))})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="180",bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sb=0,Ad=1,ob=2,um=1,ab=2,mi=3,Qi=0,_n=1,ei=2,bi=0,ys=1,Hc=2,Pd=3,Rd=4,lb=5,xr=100,cb=101,ub=102,hb=103,db=104,fb=200,pb=201,mb=202,_b=203,Gc=204,Wc=205,gb=206,vb=207,xb=208,bb=209,yb=210,wb=211,Sb=212,Mb=213,Eb=214,Xc=0,qc=1,Yc=2,Rs=3,jc=4,Kc=5,$c=6,Zc=7,lh=0,Tb=1,Cb=2,Ki=0,Ab=1,Pb=2,Rb=3,Db=4,Lb=5,Ib=6,Ub=7,hm=300,Ds=301,Ls=302,Jc=303,Qc=304,sl=306,tu=1e3,Er=1001,eu=1002,Mn=1003,Nb=1004,na=1005,ni=1006,jl=1007,Tr=1008,si=1009,dm=1010,fm=1011,Co=1012,ch=1013,Dr=1014,ii=1015,yi=1016,uh=1017,hh=1018,Ao=1020,pm=35902,mm=35899,_m=1021,gm=1022,jn=1023,Po=1026,Ro=1027,dh=1028,fh=1029,vm=1030,ph=1031,mh=1033,Ra=33776,Da=33777,La=33778,Ia=33779,nu=35840,iu=35841,ru=35842,su=35843,ou=36196,au=37492,lu=37496,cu=37808,uu=37809,hu=37810,du=37811,fu=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,bu=37819,yu=37820,wu=37821,Su=36492,Mu=36494,Eu=36495,Tu=36283,Cu=36284,Au=36285,Pu=36286,Fb=3200,Ob=3201,xm=0,kb=1,br="",Un="srgb",Is="srgb-linear",Ja="linear",me="srgb",Kr=7680,Dd=519,Bb=512,Vb=513,zb=514,bm=515,Hb=516,Gb=517,Wb=518,Xb=519,Ld=35044,qb=35048,Id="300 es",ri=2e3,Qa=2001;class Nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const po=Math.PI/180,Do=180/Math.PI;function Os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function _h(i,t){return(i%t+t)%t}function Yb(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function jb(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function Kb(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function $b(i,t){return t-Math.abs(_h(i,t*2)-t)}function Zb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qb(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ty(i,t){return i+Math.random()*(t-i)}function ey(i){return i*(.5-Math.random())}function ny(i){i!==void 0&&(Ud=i);let t=Ud+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function iy(i){return i*po}function ry(i){return i*Do}function sy(i){return(i&i-1)===0&&i!==0}function oy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ay(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ly(i,t,e,n,r){const s=Math.cos,a=Math.sin,l=s(e/2),d=a(e/2),h=s((t+n)/2),f=a((t+n)/2),m=s((t-n)/2),_=a((t-n)/2),g=s((n-t)/2),w=a((n-t)/2);switch(r){case"XYX":i.set(l*f,d*m,d*_,l*h);break;case"YZY":i.set(d*_,l*f,d*m,l*h);break;case"ZXZ":i.set(d*m,d*_,l*f,l*h);break;case"XZX":i.set(l*f,d*w,d*g,l*h);break;case"YXY":i.set(d*g,l*f,d*w,l*h);break;case"ZYZ":i.set(d*w,d*g,l*f,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cy={DEG2RAD:po,RAD2DEG:Do,generateUUID:Os,clamp:ee,euclideanModulo:_h,mapLinear:Yb,inverseLerp:jb,lerp:mo,damp:Kb,pingpong:$b,smoothstep:Zb,smootherstep:Jb,randInt:Qb,randFloat:ty,randFloatSpread:ey,seededRandom:ny,degToRad:iy,radToDeg:ry,isPowerOfTwo:sy,ceilPowerOfTwo:oy,floorPowerOfTwo:ay,setQuaternionFromProperEuler:ly,normalize:nn,denormalize:us};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,l){let d=n[r+0],h=n[r+1],f=n[r+2],m=n[r+3];const _=s[a+0],g=s[a+1],w=s[a+2],y=s[a+3];if(l===0){t[e+0]=d,t[e+1]=h,t[e+2]=f,t[e+3]=m;return}if(l===1){t[e+0]=_,t[e+1]=g,t[e+2]=w,t[e+3]=y;return}if(m!==y||d!==_||h!==g||f!==w){let b=1-l;const v=d*_+h*g+f*w+m*y,P=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const N=Math.sqrt(L),U=Math.atan2(N,v*P);b=Math.sin(b*U)/N,l=Math.sin(l*U)/N}const A=l*P;if(d=d*b+_*A,h=h*b+g*A,f=f*b+w*A,m=m*b+y*A,b===1-l){const N=1/Math.sqrt(d*d+h*h+f*f+m*m);d*=N,h*=N,f*=N,m*=N}}t[e]=d,t[e+1]=h,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,a){const l=n[r],d=n[r+1],h=n[r+2],f=n[r+3],m=s[a],_=s[a+1],g=s[a+2],w=s[a+3];return t[e]=l*w+f*m+d*g-h*_,t[e+1]=d*w+f*_+h*m-l*g,t[e+2]=h*w+f*g+l*_-d*m,t[e+3]=f*w-l*m-d*_-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,l=Math.cos,d=Math.sin,h=l(n/2),f=l(r/2),m=l(s/2),_=d(n/2),g=d(r/2),w=d(s/2);switch(a){case"XYZ":this._x=_*f*m+h*g*w,this._y=h*g*m-_*f*w,this._z=h*f*w+_*g*m,this._w=h*f*m-_*g*w;break;case"YXZ":this._x=_*f*m+h*g*w,this._y=h*g*m-_*f*w,this._z=h*f*w-_*g*m,this._w=h*f*m+_*g*w;break;case"ZXY":this._x=_*f*m-h*g*w,this._y=h*g*m+_*f*w,this._z=h*f*w+_*g*m,this._w=h*f*m-_*g*w;break;case"ZYX":this._x=_*f*m-h*g*w,this._y=h*g*m+_*f*w,this._z=h*f*w-_*g*m,this._w=h*f*m+_*g*w;break;case"YZX":this._x=_*f*m+h*g*w,this._y=h*g*m+_*f*w,this._z=h*f*w-_*g*m,this._w=h*f*m-_*g*w;break;case"XZY":this._x=_*f*m-h*g*w,this._y=h*g*m-_*f*w,this._z=h*f*w+_*g*m,this._w=h*f*m+_*g*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],l=e[5],d=e[9],h=e[2],f=e[6],m=e[10],_=n+l+m;if(_>0){const g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(f-d)*g,this._y=(s-h)*g,this._z=(a-r)*g}else if(n>l&&n>m){const g=2*Math.sqrt(1+n-l-m);this._w=(f-d)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+h)/g}else if(l>m){const g=2*Math.sqrt(1+l-n-m);this._w=(s-h)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(d+f)/g}else{const g=2*Math.sqrt(1+m-n-l);this._w=(a-r)/g,this._x=(s+h)/g,this._y=(d+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,l=e._x,d=e._y,h=e._z,f=e._w;return this._x=n*f+a*l+r*h-s*d,this._y=r*f+a*d+s*l-n*h,this._z=s*f+a*h+n*d-r*l,this._w=a*f-n*l-r*d-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*t._w+n*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const d=1-l*l;if(d<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const h=Math.sqrt(d),f=Math.atan2(h,l),m=Math.sin((1-e)*f)/h,_=Math.sin(e*f)/h;return this._w=a*m+this._w*_,this._x=n*m+this._x*_,this._y=r*m+this._y*_,this._z=s*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,l=t.z,d=t.w,h=2*(a*r-l*n),f=2*(l*e-s*r),m=2*(s*n-a*e);return this.x=e+d*h+a*m-l*f,this.y=n+d*f+l*h-s*m,this.z=r+d*m+s*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,l=e.y,d=e.z;return this.x=r*d-s*l,this.y=s*a-n*d,this.z=n*l-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new $,Nd=new Lr;class Zt{constructor(t,e,n,r,s,a,l,d,h){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,d,h)}set(t,e,n,r,s,a,l,d,h){const f=this.elements;return f[0]=t,f[1]=r,f[2]=l,f[3]=e,f[4]=s,f[5]=d,f[6]=n,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[3],d=n[6],h=n[1],f=n[4],m=n[7],_=n[2],g=n[5],w=n[8],y=r[0],b=r[3],v=r[6],P=r[1],L=r[4],A=r[7],N=r[2],U=r[5],O=r[8];return s[0]=a*y+l*P+d*N,s[3]=a*b+l*L+d*U,s[6]=a*v+l*A+d*O,s[1]=h*y+f*P+m*N,s[4]=h*b+f*L+m*U,s[7]=h*v+f*A+m*O,s[2]=_*y+g*P+w*N,s[5]=_*b+g*L+w*U,s[8]=_*v+g*A+w*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],d=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-n*s*f+n*l*d+r*s*h-r*a*d}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],d=t[6],h=t[7],f=t[8],m=f*a-l*h,_=l*d-f*s,g=h*s-a*d,w=e*m+n*_+r*g;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/w;return t[0]=m*y,t[1]=(r*h-f*n)*y,t[2]=(l*n-r*a)*y,t[3]=_*y,t[4]=(f*e-r*d)*y,t[5]=(r*s-l*e)*y,t[6]=g*y,t[7]=(n*d-h*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,l){const d=Math.cos(s),h=Math.sin(s);return this.set(n*d,n*h,-n*(d*a+h*l)+a+t,-r*h,r*d,-r*(-h*a+d*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply($l.makeScale(t,e)),this}rotate(t){return this.premultiply($l.makeRotation(-t)),this}translate(t,e){return this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Zt;function ym(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uy(){const i=tl("canvas");return i.style.display="block",i}const Fd={};function Lo(i){i in Fd||(Fd[i]=!0,console.warn(i))}function hy(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Od=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dy(){const i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===me&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?Ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:t,whitePoint:n,transfer:Ja,toXYZ:Od,fromXYZ:kd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Od,fromXYZ:kd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),i}const ce=dy();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $r;class fy{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$r===void 0&&($r=tl("canvas")),$r.width=t.width,$r.height=t.height;const r=$r.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=tl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let py=0;class gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Zl(r[a].image)):s.push(Zl(r[a]))}else s=Zl(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?fy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;const Jl=new $;class on extends Nr{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Er,r=Er,s=ni,a=Tr,l=jn,d=si,h=on.DEFAULT_ANISOTROPY,f=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Os(),this.name="",this.source=new gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=d,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=hm;on.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const d=t.elements,h=d[0],f=d[4],m=d[8],_=d[1],g=d[5],w=d[9],y=d[2],b=d[6],v=d[10];if(Math.abs(f-_)<.01&&Math.abs(m-y)<.01&&Math.abs(w-b)<.01){if(Math.abs(f+_)<.1&&Math.abs(m+y)<.1&&Math.abs(w+b)<.1&&Math.abs(h+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,A=(g+1)/2,N=(v+1)/2,U=(f+_)/4,O=(m+y)/4,V=(w+b)/4;return L>A&&L>N?L<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=U/n,s=O/n):A>N?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=U/r,s=V/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=O/s,r=V/s),this.set(n,r,s,e),this}let P=Math.sqrt((b-w)*(b-w)+(m-y)*(m-y)+(_-f)*(_-f));return Math.abs(P)<.001&&(P=1),this.x=(b-w)/P,this.y=(m-y)/P,this.z=(_-f)/P,this.w=Math.acos((h+g+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _y extends Nr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new on(r);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new gh(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends _y{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wm extends on{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends on{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),ra.subVectors(this.max,to),Zr.subVectors(t.a,to),Jr.subVectors(t.b,to),Qr.subVectors(t.c,to),Fi.subVectors(Jr,Zr),Oi.subVectors(Qr,Jr),ur.subVectors(Zr,Qr);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-ur.z,ur.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,ur.z,0,-ur.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-ur.y,ur.x,0];return!Ql(e,Zr,Jr,Qr,ra)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,Zr,Jr,Qr,ra))?!1:(sa.crossVectors(Fi,Oi),e=[sa.x,sa.y,sa.z],Ql(e,Zr,Jr,Qr,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ui=[new $,new $,new $,new $,new $,new $,new $,new $],Gn=new $,ia=new Fr,Zr=new $,Jr=new $,Qr=new $,Fi=new $,Oi=new $,ur=new $,to=new $,ra=new $,sa=new $,hr=new $;function Ql(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){hr.fromArray(i,s);const l=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),d=t.dot(hr),h=e.dot(hr),f=n.dot(hr);if(Math.max(-Math.max(d,h,f),Math.min(d,h,f))>l)return!1}return!0}const vy=new Fr,eo=new $,tc=new $;class No{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vy.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(eo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(tc)),this.expandByPoint(eo.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const hi=new $,ec=new $,oa=new $,ki=new $,nc=new $,aa=new $,ic=new $;class Sm{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ec.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(ec);const s=t.distanceTo(e)*.5,a=-this.direction.dot(oa),l=ki.dot(this.direction),d=-ki.dot(oa),h=ki.lengthSq(),f=Math.abs(1-a*a);let m,_,g,w;if(f>0)if(m=a*d-l,_=a*l-d,w=s*f,m>=0)if(_>=-w)if(_<=w){const y=1/f;m*=y,_*=y,g=m*(m+a*_+2*l)+_*(a*m+_+2*d)+h}else _=s,m=Math.max(0,-(a*_+l)),g=-m*m+_*(_+2*d)+h;else _=-s,m=Math.max(0,-(a*_+l)),g=-m*m+_*(_+2*d)+h;else _<=-w?(m=Math.max(0,-(-a*s+l)),_=m>0?-s:Math.min(Math.max(-s,-d),s),g=-m*m+_*(_+2*d)+h):_<=w?(m=0,_=Math.min(Math.max(-s,-d),s),g=_*(_+2*d)+h):(m=Math.max(0,-(a*s+l)),_=m>0?s:Math.min(Math.max(-s,-d),s),g=-m*m+_*(_+2*d)+h);else _=a>0?-s:s,m=Math.max(0,-(a*_+l)),g=-m*m+_*(_+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ec).addScaledVector(oa,_),g}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),r=hi.dot(hi)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,d=n+a;return d<0?null:l<0?this.at(d,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,l,d;const h=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(n=(t.min.x-_.x)*h,r=(t.max.x-_.x)*h):(n=(t.max.x-_.x)*h,r=(t.min.x-_.x)*h),f>=0?(s=(t.min.y-_.y)*f,a=(t.max.y-_.y)*f):(s=(t.max.y-_.y)*f,a=(t.min.y-_.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(t.min.z-_.z)*m,d=(t.max.z-_.z)*m):(l=(t.max.z-_.z)*m,d=(t.min.z-_.z)*m),n>d||l>r)||((l>n||n!==n)&&(n=l),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,r,s){nc.subVectors(e,t),aa.subVectors(n,t),ic.crossVectors(nc,aa);let a=this.direction.dot(ic),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ki.subVectors(this.origin,t);const d=l*this.direction.dot(aa.crossVectors(ki,aa));if(d<0)return null;const h=l*this.direction.dot(nc.cross(ki));if(h<0||d+h>a)return null;const f=-l*ki.dot(ic);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,r,s,a,l,d,h,f,m,_,g,w,y,b){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,d,h,f,m,_,g,w,y,b)}set(t,e,n,r,s,a,l,d,h,f,m,_,g,w,y,b){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=l,v[13]=d,v[2]=h,v[6]=f,v[10]=m,v[14]=_,v[3]=g,v[7]=w,v[11]=y,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ts.setFromMatrixColumn(t,0).length(),s=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),l=Math.sin(n),d=Math.cos(r),h=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const _=a*f,g=a*m,w=l*f,y=l*m;e[0]=d*f,e[4]=-d*m,e[8]=h,e[1]=g+w*h,e[5]=_-y*h,e[9]=-l*d,e[2]=y-_*h,e[6]=w+g*h,e[10]=a*d}else if(t.order==="YXZ"){const _=d*f,g=d*m,w=h*f,y=h*m;e[0]=_+y*l,e[4]=w*l-g,e[8]=a*h,e[1]=a*m,e[5]=a*f,e[9]=-l,e[2]=g*l-w,e[6]=y+_*l,e[10]=a*d}else if(t.order==="ZXY"){const _=d*f,g=d*m,w=h*f,y=h*m;e[0]=_-y*l,e[4]=-a*m,e[8]=w+g*l,e[1]=g+w*l,e[5]=a*f,e[9]=y-_*l,e[2]=-a*h,e[6]=l,e[10]=a*d}else if(t.order==="ZYX"){const _=a*f,g=a*m,w=l*f,y=l*m;e[0]=d*f,e[4]=w*h-g,e[8]=_*h+y,e[1]=d*m,e[5]=y*h+_,e[9]=g*h-w,e[2]=-h,e[6]=l*d,e[10]=a*d}else if(t.order==="YZX"){const _=a*d,g=a*h,w=l*d,y=l*h;e[0]=d*f,e[4]=y-_*m,e[8]=w*m+g,e[1]=m,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=g*m+w,e[10]=_-y*m}else if(t.order==="XZY"){const _=a*d,g=a*h,w=l*d,y=l*h;e[0]=d*f,e[4]=-m,e[8]=h*f,e[1]=_*m+y,e[5]=a*f,e[9]=g*m-w,e[2]=w*m-g,e[6]=l*f,e[10]=y*m+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xy,t,by)}lookAt(t,e,n){const r=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Bi.crossVectors(n,vn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Bi.crossVectors(n,vn)),Bi.normalize(),la.crossVectors(vn,Bi),r[0]=Bi.x,r[4]=la.x,r[8]=vn.x,r[1]=Bi.y,r[5]=la.y,r[9]=vn.y,r[2]=Bi.z,r[6]=la.z,r[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[4],d=n[8],h=n[12],f=n[1],m=n[5],_=n[9],g=n[13],w=n[2],y=n[6],b=n[10],v=n[14],P=n[3],L=n[7],A=n[11],N=n[15],U=r[0],O=r[4],V=r[8],E=r[12],I=r[1],H=r[5],j=r[9],D=r[13],T=r[2],F=r[6],C=r[10],z=r[14],G=r[3],et=r[7],rt=r[11],ot=r[15];return s[0]=a*U+l*I+d*T+h*G,s[4]=a*O+l*H+d*F+h*et,s[8]=a*V+l*j+d*C+h*rt,s[12]=a*E+l*D+d*z+h*ot,s[1]=f*U+m*I+_*T+g*G,s[5]=f*O+m*H+_*F+g*et,s[9]=f*V+m*j+_*C+g*rt,s[13]=f*E+m*D+_*z+g*ot,s[2]=w*U+y*I+b*T+v*G,s[6]=w*O+y*H+b*F+v*et,s[10]=w*V+y*j+b*C+v*rt,s[14]=w*E+y*D+b*z+v*ot,s[3]=P*U+L*I+A*T+N*G,s[7]=P*O+L*H+A*F+N*et,s[11]=P*V+L*j+A*C+N*rt,s[15]=P*E+L*D+A*z+N*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],l=t[5],d=t[9],h=t[13],f=t[2],m=t[6],_=t[10],g=t[14],w=t[3],y=t[7],b=t[11],v=t[15];return w*(+s*d*m-r*h*m-s*l*_+n*h*_+r*l*g-n*d*g)+y*(+e*d*g-e*h*_+s*a*_-r*a*g+r*h*f-s*d*f)+b*(+e*h*m-e*l*g-s*a*m+n*a*g+s*l*f-n*h*f)+v*(-r*l*f-e*d*m+e*l*_+r*a*m-n*a*_+n*d*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],d=t[6],h=t[7],f=t[8],m=t[9],_=t[10],g=t[11],w=t[12],y=t[13],b=t[14],v=t[15],P=m*b*h-y*_*h+y*d*g-l*b*g-m*d*v+l*_*v,L=w*_*h-f*b*h-w*d*g+a*b*g+f*d*v-a*_*v,A=f*y*h-w*m*h+w*l*g-a*y*g-f*l*v+a*m*v,N=w*m*d-f*y*d-w*l*_+a*y*_+f*l*b-a*m*b,U=e*P+n*L+r*A+s*N;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return t[0]=P*O,t[1]=(y*_*s-m*b*s-y*r*g+n*b*g+m*r*v-n*_*v)*O,t[2]=(l*b*s-y*d*s+y*r*h-n*b*h-l*r*v+n*d*v)*O,t[3]=(m*d*s-l*_*s-m*r*h+n*_*h+l*r*g-n*d*g)*O,t[4]=L*O,t[5]=(f*b*s-w*_*s+w*r*g-e*b*g-f*r*v+e*_*v)*O,t[6]=(w*d*s-a*b*s-w*r*h+e*b*h+a*r*v-e*d*v)*O,t[7]=(a*_*s-f*d*s+f*r*h-e*_*h-a*r*g+e*d*g)*O,t[8]=A*O,t[9]=(w*m*s-f*y*s-w*n*g+e*y*g+f*n*v-e*m*v)*O,t[10]=(a*y*s-w*l*s+w*n*h-e*y*h-a*n*v+e*l*v)*O,t[11]=(f*l*s-a*m*s-f*n*h+e*m*h+a*n*g-e*l*g)*O,t[12]=N*O,t[13]=(f*y*r-w*m*r+w*n*_-e*y*_-f*n*b+e*m*b)*O,t[14]=(w*l*r-a*y*r-w*n*d+e*y*d+a*n*b-e*l*b)*O,t[15]=(a*m*r-f*l*r+f*n*d-e*m*d-a*n*_+e*l*_)*O,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,l=t.y,d=t.z,h=s*a,f=s*l;return this.set(h*a+n,h*l-r*d,h*d+r*l,0,h*l+r*d,f*l+n,f*d-r*a,0,h*d-r*l,f*d+r*a,s*d*d+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,l=e._z,d=e._w,h=s+s,f=a+a,m=l+l,_=s*h,g=s*f,w=s*m,y=a*f,b=a*m,v=l*m,P=d*h,L=d*f,A=d*m,N=n.x,U=n.y,O=n.z;return r[0]=(1-(y+v))*N,r[1]=(g+A)*N,r[2]=(w-L)*N,r[3]=0,r[4]=(g-A)*U,r[5]=(1-(_+v))*U,r[6]=(b+P)*U,r[7]=0,r[8]=(w+L)*O,r[9]=(b-P)*O,r[10]=(1-(_+y))*O,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const a=ts.set(r[4],r[5],r[6]).length(),l=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Wn.copy(this);const h=1/s,f=1/a,m=1/l;return Wn.elements[0]*=h,Wn.elements[1]*=h,Wn.elements[2]*=h,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=m,Wn.elements[9]*=m,Wn.elements[10]*=m,e.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,a,l=ri,d=!1){const h=this.elements,f=2*s/(e-t),m=2*s/(n-r),_=(e+t)/(e-t),g=(n+r)/(n-r);let w,y;if(d)w=s/(a-s),y=a*s/(a-s);else if(l===ri)w=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(l===Qa)w=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,a,l=ri,d=!1){const h=this.elements,f=2/(e-t),m=2/(n-r),_=-(e+t)/(e-t),g=-(n+r)/(n-r);let w,y;if(d)w=1/(a-s),y=a/(a-s);else if(l===ri)w=-2/(a-s),y=-(a+s)/(a-s);else if(l===Qa)w=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=m,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=w,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new $,Wn=new Ae,xy=new $(0,0,0),by=new $(1,1,1),Bi=new $,la=new $,vn=new $,Bd=new Ae,Vd=new Lr;class oi{constructor(t=0,e=0,n=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],l=r[8],d=r[1],h=r[5],f=r[9],m=r[2],_=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Mm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yy=0;const zd=new $,es=new Lr,di=new Ae,ca=new $,no=new $,wy=new $,Sy=new Lr,Hd=new $(1,0,0),Gd=new $(0,1,0),Wd=new $(0,0,1),Xd={type:"added"},My={type:"removed"},ns={type:"childadded",child:null},rc={type:"childremoved",child:null};class je extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new $,e=new oi,n=new Lr,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Zt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Hd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Wd,t)}translateOnAxis(t,e){return zd.copy(t).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(no,ca,this.up):di.lookAt(ca,no,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),es.setFromRotationMatrix(di),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xd),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(My),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xd),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,wy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>sd(Nl({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>Nl({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let h=0,f=d.length;h<f;h++){const m=d[h];s(t.shapes,m)}else s(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,h=this.material.length;d<h;d++)l.push(s(t.materials,this.material[d]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];r.animations.push(s(t.animations,d))}}if(e){const l=a(t.geometries),d=a(t.materials),h=a(t.textures),f=a(t.images),m=a(t.shapes),_=a(t.skeletons),g=a(t.animations),w=a(t.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),g.length>0&&(n.animations=g),w.length>0&&(n.nodes=w)}return n.object=r,n;function a(l){const d=[];for(const h in l){const f=l[h];delete f.metadata,d.push(f)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}je.DEFAULT_UP=new $(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new $,fi=new $,sc=new $,pi=new $,is=new $,rs=new $,qd=new $,oc=new $,ac=new $,lc=new $,cc=new Re,uc=new Re,hc=new Re;class Yn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Xn.subVectors(t,e),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Xn.subVectors(r,e),fi.subVectors(n,e),sc.subVectors(t,e);const a=Xn.dot(Xn),l=Xn.dot(fi),d=Xn.dot(sc),h=fi.dot(fi),f=fi.dot(sc),m=a*h-l*l;if(m===0)return s.set(0,0,0),null;const _=1/m,g=(h*d-l*f)*_,w=(a*f-l*d)*_;return s.set(1-g-w,w,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,r,s,a,l,d){return this.getBarycoord(t,e,n,r,pi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,pi.x),d.addScaledVector(a,pi.y),d.addScaledVector(l,pi.z),d)}static getInterpolatedAttribute(t,e,n,r,s,a){return cc.setScalar(0),uc.setScalar(0),hc.setScalar(0),cc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,n),hc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(cc,s.x),a.addScaledVector(uc,s.y),a.addScaledVector(hc,s.z),a}static isFrontFacing(t,e,n,r){return Xn.subVectors(n,e),fi.subVectors(t,e),Xn.cross(fi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Xn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,l;is.subVectors(r,n),rs.subVectors(s,n),oc.subVectors(t,n);const d=is.dot(oc),h=rs.dot(oc);if(d<=0&&h<=0)return e.copy(n);ac.subVectors(t,r);const f=is.dot(ac),m=rs.dot(ac);if(f>=0&&m<=f)return e.copy(r);const _=d*m-f*h;if(_<=0&&d>=0&&f<=0)return a=d/(d-f),e.copy(n).addScaledVector(is,a);lc.subVectors(t,s);const g=is.dot(lc),w=rs.dot(lc);if(w>=0&&g<=w)return e.copy(s);const y=g*h-d*w;if(y<=0&&h>=0&&w<=0)return l=h/(h-w),e.copy(n).addScaledVector(rs,l);const b=f*w-g*m;if(b<=0&&m-f>=0&&g-w>=0)return qd.subVectors(s,r),l=(m-f)/(m-f+(g-w)),e.copy(r).addScaledVector(qd,l);const v=1/(b+y+_);return a=y*v,l=_*v,e.copy(n).addScaledVector(is,a).addScaledVector(rs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function dc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=_h(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=dc(a,s,t+1/3),this.g=dc(a,s,t),this.b=dc(a,s,t-1/3)}return ce.colorSpaceToWorking(this,r),this}setStyle(t,e=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const n=Em[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return ce.workingToColorSpace($e.copy(this),t),Math.round(ee($e.r*255,0,255))*65536+Math.round(ee($e.g*255,0,255))*256+Math.round(ee($e.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace($e.copy(this),e);const n=$e.r,r=$e.g,s=$e.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let d,h;const f=(l+a)/2;if(l===a)d=0,h=0;else{const m=a-l;switch(h=f<=.5?m/(a+l):m/(2-a-l),a){case n:d=(r-s)/m+(r<s?6:0);break;case r:d=(s-n)/m+2;break;case s:d=(n-r)/m+4;break}d/=6}return t.h=d,t.s=h,t.l=f,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Un){ce.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,r=$e.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(ua);const n=mo(Vi.h,ua.h,e),r=mo(Vi.s,ua.s,e),s=mo(Vi.l,ua.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new ne;ne.NAMES=Em;let Ey=0;class Fo extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=ys,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const d=s[l];delete d.metadata,a.push(d)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vh extends Fo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new $,ha=new kt;let Ty=0;class Vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ld&&(t.usage=this.usage),t}}class Tm extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cm extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Si extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cy=0;const Dn=new Ae,fc=new je,ss=new $,xn=new Fr,io=new Fr,Ve=new $;class Ci extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ym(t)?Cm:Tm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Si(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const l=e[s];io.setFromBufferAttribute(l),this.morphTargetsRelative?(Ve.addVectors(xn.min,io.min),xn.expandByPoint(Ve),Ve.addVectors(xn.max,io.max),xn.expandByPoint(Ve)):(xn.expandByPoint(io.min),xn.expandByPoint(io.max))}xn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){const l=e[s],d=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)Ve.fromBufferAttribute(l,h),d&&(ss.fromBufferAttribute(t,h),Ve.add(ss)),r=Math.max(r,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],d=[];for(let V=0;V<n.count;V++)l[V]=new $,d[V]=new $;const h=new $,f=new $,m=new $,_=new kt,g=new kt,w=new kt,y=new $,b=new $;function v(V,E,I){h.fromBufferAttribute(n,V),f.fromBufferAttribute(n,E),m.fromBufferAttribute(n,I),_.fromBufferAttribute(s,V),g.fromBufferAttribute(s,E),w.fromBufferAttribute(s,I),f.sub(h),m.sub(h),g.sub(_),w.sub(_);const H=1/(g.x*w.y-w.x*g.y);!isFinite(H)||(y.copy(f).multiplyScalar(w.y).addScaledVector(m,-g.y).multiplyScalar(H),b.copy(m).multiplyScalar(g.x).addScaledVector(f,-w.x).multiplyScalar(H),l[V].add(y),l[E].add(y),l[I].add(y),d[V].add(b),d[E].add(b),d[I].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let V=0,E=P.length;V<E;++V){const I=P[V],H=I.start,j=I.count;for(let D=H,T=H+j;D<T;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const L=new $,A=new $,N=new $,U=new $;function O(V){N.fromBufferAttribute(r,V),U.copy(N);const E=l[V];L.copy(E),L.sub(N.multiplyScalar(N.dot(E))).normalize(),A.crossVectors(U,E);const H=A.dot(d[V])<0?-1:1;a.setXYZW(V,L.x,L.y,L.z,H)}for(let V=0,E=P.length;V<E;++V){const I=P[V],H=I.start,j=I.count;for(let D=H,T=H+j;D<T;D+=3)O(t.getX(D+0)),O(t.getX(D+1)),O(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,g=n.count;_<g;_++)n.setXYZ(_,0,0,0);const r=new $,s=new $,a=new $,l=new $,d=new $,h=new $,f=new $,m=new $;if(t)for(let _=0,g=t.count;_<g;_+=3){const w=t.getX(_+0),y=t.getX(_+1),b=t.getX(_+2);r.fromBufferAttribute(e,w),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,b),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),l.add(f),d.add(f),h.add(f),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(y,d.x,d.y,d.z),n.setXYZ(b,h.x,h.y,h.z)}else for(let _=0,g=e.count;_<g;_+=3)r.fromBufferAttribute(e,_+0),s.fromBufferAttribute(e,_+1),a.fromBufferAttribute(e,_+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),n.setXYZ(_+0,f.x,f.y,f.z),n.setXYZ(_+1,f.x,f.y,f.z),n.setXYZ(_+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(l,d){const h=l.array,f=l.itemSize,m=l.normalized,_=new h.constructor(d.length*f);let g=0,w=0;for(let y=0,b=d.length;y<b;y++){l.isInterleavedBufferAttribute?g=d[y]*l.data.stride+l.offset:g=d[y]*f;for(let v=0;v<f;v++)_[w++]=h[g++]}return new Vn(_,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ci,n=this.index.array,r=this.attributes;for(const l in r){const d=r[l],h=t(d,n);e.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=t(_,n);d.push(g)}e.morphAttributes[l]=d}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(t[h]=d[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const d in n){const h=n[d];t.data.attributes[d]=h.toJSON(t.data)}const r={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],f=[];for(let m=0,_=h.length;m<_;m++){const g=h[m];f.push(g.toJSON(t.data))}f.length>0&&(r[d]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const f=r[h];this.setAttribute(h,f.clone(e))}const s=t.morphAttributes;for(const h in s){const f=[],m=s[h];for(let _=0,g=m.length;_<g;_++)f.push(m[_].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,f=a.length;h<f;h++){const m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new Ae,dr=new Sm,da=new No,jd=new $,fa=new $,pa=new $,ma=new $,pc=new $,_a=new $,Kd=new $,ga=new $;class wn extends je{constructor(t=new Ci,e=new vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){_a.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const f=l[d],m=s[d];f!==0&&(pc.fromBufferAttribute(m,t),a?_a.addScaledVector(pc,f):_a.addScaledVector(pc.sub(e),f))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),dr.copy(t.ray).recast(t.near),!(da.containsPoint(dr.origin)===!1&&(dr.intersectSphere(da,jd)===null||dr.origin.distanceToSquared(jd)>(t.far-t.near)**2))&&(Yd.copy(s).invert(),dr.copy(t.ray).applyMatrix4(Yd),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,dr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,l=s.index,d=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,_=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let w=0,y=_.length;w<y;w++){const b=_[w],v=a[b.materialIndex],P=Math.max(b.start,g.start),L=Math.min(l.count,Math.min(b.start+b.count,g.start+g.count));for(let A=P,N=L;A<N;A+=3){const U=l.getX(A),O=l.getX(A+1),V=l.getX(A+2);r=va(this,v,t,n,h,f,m,U,O,V),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{const w=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let b=w,v=y;b<v;b+=3){const P=l.getX(b),L=l.getX(b+1),A=l.getX(b+2);r=va(this,a,t,n,h,f,m,P,L,A),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(a))for(let w=0,y=_.length;w<y;w++){const b=_[w],v=a[b.materialIndex],P=Math.max(b.start,g.start),L=Math.min(d.count,Math.min(b.start+b.count,g.start+g.count));for(let A=P,N=L;A<N;A+=3){const U=A,O=A+1,V=A+2;r=va(this,v,t,n,h,f,m,U,O,V),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=b.materialIndex,e.push(r))}}else{const w=Math.max(0,g.start),y=Math.min(d.count,g.start+g.count);for(let b=w,v=y;b<v;b+=3){const P=b,L=b+1,A=b+2;r=va(this,a,t,n,h,f,m,P,L,A),r&&(r.faceIndex=Math.floor(b/3),e.push(r))}}}}function Ay(i,t,e,n,r,s,a,l){let d;if(t.side===_n?d=n.intersectTriangle(a,s,r,!0,l):d=n.intersectTriangle(r,s,a,t.side===Qi,l),d===null)return null;ga.copy(l),ga.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ga);return h<e.near||h>e.far?null:{distance:h,point:ga.clone(),object:i}}function va(i,t,e,n,r,s,a,l,d,h){i.getVertexPosition(l,fa),i.getVertexPosition(d,pa),i.getVertexPosition(h,ma);const f=Ay(i,t,e,n,fa,pa,ma,Kd);if(f){const m=new $;Yn.getBarycoord(Kd,fa,pa,ma,m),r&&(f.uv=Yn.getInterpolatedAttribute(r,l,d,h,m,new kt)),s&&(f.uv1=Yn.getInterpolatedAttribute(s,l,d,h,m,new kt)),a&&(f.normal=Yn.getInterpolatedAttribute(a,l,d,h,m,new $),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const _={a:l,b:d,c:h,normal:new $,materialIndex:0};Yn.getNormal(fa,pa,ma,_.normal),f.face=_,f.barycoord=m}return f}class ks extends Ci{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const d=[],h=[],f=[],m=[];let _=0,g=0;w("z","y","x",-1,-1,n,e,t,a,s,0),w("z","y","x",1,-1,n,e,-t,a,s,1),w("x","z","y",1,1,t,n,e,r,a,2),w("x","z","y",1,-1,t,n,-e,r,a,3),w("x","y","z",1,-1,t,e,n,r,s,4),w("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(d),this.setAttribute("position",new Si(h,3)),this.setAttribute("normal",new Si(f,3)),this.setAttribute("uv",new Si(m,2));function w(y,b,v,P,L,A,N,U,O,V,E){const I=A/O,H=N/V,j=A/2,D=N/2,T=U/2,F=O+1,C=V+1;let z=0,G=0;const et=new $;for(let rt=0;rt<C;rt++){const ot=rt*H-D;for(let st=0;st<F;st++){const ht=st*I-j;et[y]=ht*P,et[b]=ot*L,et[v]=T,h.push(et.x,et.y,et.z),et[y]=0,et[b]=0,et[v]=U>0?1:-1,f.push(et.x,et.y,et.z),m.push(st/O),m.push(1-rt/V),z+=1}}for(let rt=0;rt<V;rt++)for(let ot=0;ot<O;ot++){const st=_+ot+F*rt,ht=_+ot+F*(rt+1),Wt=_+(ot+1)+F*(rt+1),Mt=_+(ot+1)+F*rt;d.push(st,ht,Mt),d.push(ht,Wt,Mt),G+=6}l.addGroup(g,G,E),g+=G,_+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const r in n)t[r]=n[r]}return t}function Py(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Am(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const el={clone:Us,merge:rn};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Fo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Py(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pm extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new $,$d=new kt,Zd=new kt;class Fn extends Pm{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,$d,Zd),e.subVectors(Zd,$d)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/d,e-=a.offsetY*n/h,r*=a.width/d,n*=a.height/h}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class Ly extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(os,as,t,e);r.layers=this.layers,this.add(r);const s=new Fn(os,as,t,e);s.layers=this.layers,this.add(s);const a=new Fn(os,as,t,e);a.layers=this.layers,this.add(a);const l=new Fn(os,as,t,e);l.layers=this.layers,this.add(l);const d=new Fn(os,as,t,e);d.layers=this.layers,this.add(d);const h=new Fn(os,as,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,l,d]=e;for(const h of e)this.remove(h);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,d,h,f]=this.children,m=t.getRenderTarget(),_=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,d),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(m,_,g),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class Rm extends on{constructor(t=[],e=Ds,n,r,s,a,l,d,h,f){super(t,e,n,r,s,a,l,d,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iy extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Rm(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ks(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:bi});s.uniforms.tEquirect.value=e;const a=new wn(r,s),l=e.minFilter;return e.minFilter===Tr&&(e.minFilter=ni),new Ly(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class lo extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const l=this._targetRay,d=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const y of t.hand.values()){const b=e.getJointPose(y,n),v=this._getHandJoint(h,y);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const f=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=f.position.distanceTo(m.position),g=.02,w=.005;h.inputState.pinching&&_>g+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=g-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return l!==null&&(l.visible=r!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new lo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ny extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fy extends on{constructor(t=null,e=1,n=1,r,s,a,l,d,h=Mn,f=Mn,m,_){super(null,a,l,d,h,f,r,s,m,_),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jd extends Vn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ls=new Ae,Qd=new Ae,xa=[],tf=new Fr,Oy=new Ae,ro=new wn,so=new No;class ky extends wn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Oy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),tf.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(tf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new No),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),so.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(so)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let l=0;l<n.length;l++)n[l]=r[a+l]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),t.ray.intersectsSphere(so)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),Qd.multiplyMatrices(n,ls),ro.matrixWorld=Qd,ro.raycast(t,xa);for(let a=0,l=xa.length;a<l;a++){const d=xa[a];d.instanceId=s,d.object=this,e.push(d)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fy(new Float32Array(r*this.count),r,this.count,dh,ii));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,d=r*t;s[d]=l,s.set(n,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _c=new $,By=new $,Vy=new Zt;class Hi{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=_c.subVectors(n,e).cross(By.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_c),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vy.getNormalMatrix(t),r=this.coplanarPoint(_c).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new No,zy=new kt(.5,.5),ba=new $;class xh{constructor(t=new Hi,e=new Hi,n=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){const r=this.planes,s=t.elements,a=s[0],l=s[1],d=s[2],h=s[3],f=s[4],m=s[5],_=s[6],g=s[7],w=s[8],y=s[9],b=s[10],v=s[11],P=s[12],L=s[13],A=s[14],N=s[15];if(r[0].setComponents(h-a,g-f,v-w,N-P).normalize(),r[1].setComponents(h+a,g+f,v+w,N+P).normalize(),r[2].setComponents(h+l,g+m,v+y,N+L).normalize(),r[3].setComponents(h-l,g-m,v-y,N-L).normalize(),n)r[4].setComponents(d,_,b,A).normalize(),r[5].setComponents(h-d,g-_,v-b,N-A).normalize();else if(r[4].setComponents(h-d,g-_,v-b,N-A).normalize(),e===ri)r[5].setComponents(h+d,g+_,v+b,N+A).normalize();else if(e===Qa)r[5].setComponents(d,_,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const e=zy.distanceTo(t.center);return fr.radius=.7071067811865476+e,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ba.x=r.normal.x>0?t.max.x:t.min.x,ba.y=r.normal.y>0?t.max.y:t.min.y,ba.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dm extends on{constructor(t,e,n=Dr,r,s,a,l=Mn,d=Mn,h,f=Po,m=1){if(f!==Po&&f!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:m};super(_,r,s,a,l,d,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Lm extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ol extends Ci{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,l=Math.floor(n),d=Math.floor(r),h=l+1,f=d+1,m=t/l,_=e/d,g=[],w=[],y=[],b=[];for(let v=0;v<f;v++){const P=v*_-a;for(let L=0;L<h;L++){const A=L*m-s;w.push(A,-P,0),y.push(0,0,1),b.push(L/l),b.push(1-v/d)}}for(let v=0;v<d;v++)for(let P=0;P<l;P++){const L=P+h*v,A=P+h*(v+1),N=P+1+h*(v+1),U=P+1+h*v;g.push(L,A,U),g.push(A,N,U)}this.setIndex(g),this.setAttribute("position",new Si(w,3)),this.setAttribute("normal",new Si(y,3)),this.setAttribute("uv",new Si(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hy extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gy extends Fo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xm,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wy extends Fo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xy extends Fo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qy extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const gc=new Ae,ef=new $,nf=new $;class Yy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bh extends Pm{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,l=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=f*this.view.offsetY,d=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jy extends Yy{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ky extends qy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new jy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $y extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class rf{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jy extends Nr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function sf(i,t,e,n){const r=Qy(n);switch(e){case _m:return i*t;case dh:return i*t/r.components*r.byteLength;case fh:return i*t/r.components*r.byteLength;case vm:return i*t*2/r.components*r.byteLength;case ph:return i*t*2/r.components*r.byteLength;case gm:return i*t*3/r.components*r.byteLength;case jn:return i*t*4/r.components*r.byteLength;case mh:return i*t*4/r.components*r.byteLength;case Ra:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case iu:case su:return Math.max(i,16)*Math.max(t,8)/4;case nu:case ru:return Math.max(i,8)*Math.max(t,8)/2;case ou:case au:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case du:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _u:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Su:case Mu:case Eu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tu:case Cu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Au:case Pu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qy(i){switch(i){case si:case dm:return{byteLength:1,components:1};case Co:case fm:case yi:return{byteLength:2,components:1};case uh:case hh:return{byteLength:2,components:4};case Dr:case ch:case ii:return{byteLength:4,components:1};case pm:case mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Im(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function tw(i){const t=new WeakMap;function e(l,d){const h=l.array,f=l.usage,m=h.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array!="undefined"&&h instanceof Float16Array)g=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,d,h){const f=d.array,m=d.updateRanges;if(i.bindBuffer(h,l),m.length===0)i.bufferSubData(h,0,f);else{m.sort((g,w)=>g.start-w.start);let _=0;for(let g=1;g<m.length;g++){const w=m[_],y=m[g];y.start<=w.start+w.count+1?w.count=Math.max(w.count,y.start+y.count-w.start):(++_,m[_]=y)}m.length=_+1;for(let g=0,w=m.length;g<w;g++){const y=m[g];i.bufferSubData(h,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=t.get(l);d&&(i.deleteBuffer(d.buffer),t.delete(l))}function a(l,d){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,d));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,d),h.version=l.version}}return{get:r,remove:s,update:a}}var ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nw=`#ifdef USE_ALPHAHASH
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
#endif`,iw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aw=`#ifdef USE_AOMAP
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
#endif`,lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cw=`#ifdef USE_BATCHING
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
#endif`,uw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pw=`#ifdef USE_IRIDESCENCE
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
#endif`,mw=`#ifdef USE_BUMPMAP
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
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mw=`#define PI 3.141592653589793
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
} // validated`,Ew=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tw=`vec3 transformedNormal = objectNormal;
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
#endif`,Cw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
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
#endif`,kw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hw=`#ifdef USE_GRADIENTMAP
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
}`,Gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qw=`uniform bool receiveShadow;
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
#endif`,Yw=`#ifdef USE_ENVMAP
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
#endif`,jw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jw=`PhysicalMaterial material;
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
#endif`,Qw=`struct PhysicalMaterial {
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
}`,tS=`
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uS=`#if defined( USE_POINTS_UV )
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
#endif`,hS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`#ifdef USE_MORPHTARGETS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SS=`#ifdef USE_NORMALMAP
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
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BS=`float getShadowMask() {
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
}`,VS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
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
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,WS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,bM=`#define NORMAL
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
}`,yM=`#define NORMAL
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
}`,wM=`#define PHONG
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
}`,SM=`#define PHONG
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
}`,MM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,CM=`#define TOON
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
}`,AM=`uniform float size;
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
}`,PM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,DM=`uniform vec3 color;
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
}`,LM=`uniform float rotation;
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
}`,IM=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:ew,alphahash_pars_fragment:nw,alphamap_fragment:iw,alphamap_pars_fragment:rw,alphatest_fragment:sw,alphatest_pars_fragment:ow,aomap_fragment:aw,aomap_pars_fragment:lw,batching_pars_vertex:cw,batching_vertex:uw,begin_vertex:hw,beginnormal_vertex:dw,bsdfs:fw,iridescence_fragment:pw,bumpmap_pars_fragment:mw,clipping_planes_fragment:_w,clipping_planes_pars_fragment:gw,clipping_planes_pars_vertex:vw,clipping_planes_vertex:xw,color_fragment:bw,color_pars_fragment:yw,color_pars_vertex:ww,color_vertex:Sw,common:Mw,cube_uv_reflection_fragment:Ew,defaultnormal_vertex:Tw,displacementmap_pars_vertex:Cw,displacementmap_vertex:Aw,emissivemap_fragment:Pw,emissivemap_pars_fragment:Rw,colorspace_fragment:Dw,colorspace_pars_fragment:Lw,envmap_fragment:Iw,envmap_common_pars_fragment:Uw,envmap_pars_fragment:Nw,envmap_pars_vertex:Fw,envmap_physical_pars_fragment:Yw,envmap_vertex:Ow,fog_vertex:kw,fog_pars_vertex:Bw,fog_fragment:Vw,fog_pars_fragment:zw,gradientmap_pars_fragment:Hw,lightmap_pars_fragment:Gw,lights_lambert_fragment:Ww,lights_lambert_pars_fragment:Xw,lights_pars_begin:qw,lights_toon_fragment:jw,lights_toon_pars_fragment:Kw,lights_phong_fragment:$w,lights_phong_pars_fragment:Zw,lights_physical_fragment:Jw,lights_physical_pars_fragment:Qw,lights_fragment_begin:tS,lights_fragment_maps:eS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:cS,map_particle_pars_fragment:uS,metalnessmap_fragment:hS,metalnessmap_pars_fragment:dS,morphinstance_vertex:fS,morphcolor_vertex:pS,morphnormal_vertex:mS,morphtarget_pars_vertex:_S,morphtarget_vertex:gS,normal_fragment_begin:vS,normal_fragment_maps:xS,normal_pars_fragment:bS,normal_pars_vertex:yS,normal_vertex:wS,normalmap_pars_fragment:SS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:TS,iridescence_pars_fragment:CS,opaque_fragment:AS,packing:PS,premultiplied_alpha_fragment:RS,project_vertex:DS,dithering_fragment:LS,dithering_pars_fragment:IS,roughnessmap_fragment:US,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:FS,shadowmap_pars_vertex:OS,shadowmap_vertex:kS,shadowmask_pars_fragment:BS,skinbase_vertex:VS,skinning_pars_vertex:zS,skinning_vertex:HS,skinnormal_vertex:GS,specularmap_fragment:WS,specularmap_pars_fragment:XS,tonemapping_fragment:qS,tonemapping_pars_fragment:YS,transmission_fragment:jS,transmission_pars_fragment:KS,uv_pars_fragment:$S,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:QS,background_vert:tM,background_frag:eM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:oM,depth_frag:aM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:uM,equirect_frag:hM,linedashed_vert:dM,linedashed_frag:fM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:_M,meshlambert_frag:gM,meshmatcap_vert:vM,meshmatcap_frag:xM,meshnormal_vert:bM,meshnormal_frag:yM,meshphong_vert:wM,meshphong_frag:SM,meshphysical_vert:MM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:CM,points_vert:AM,points_frag:PM,shadow_vert:RM,shadow_frag:DM,sprite_vert:LM,sprite_frag:IM},wt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Qn={basic:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:rn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:rn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:rn([wt.points,wt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:rn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:rn([wt.common,wt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:rn([wt.sprite,wt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:rn([wt.common,wt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:rn([wt.lights,wt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Qn.physical={uniforms:rn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ya={r:0,b:0,g:0},pr=new oi,UM=new Ae;function NM(i,t,e,n,r,s,a){const l=new ne(0);let d=s===!0?0:1,h,f,m=null,_=0,g=null;function w(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?e:t).get(A)),A}function y(L){let A=!1;const N=w(L);N===null?v(l,d):N&&N.isColor&&(v(N,1),A=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(L,A){const N=w(A);N&&(N.isCubeTexture||N.mapping===sl)?(f===void 0&&(f=new wn(new ks(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Us(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),pr.copy(A.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(pr)),f.material.toneMapped=ce.getTransfer(N.colorSpace)!==me,(m!==N||_!==N.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,m=N,_=N.version,g=i.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new wn(new ol(2,2),new sn({name:"BackgroundMaterial",uniforms:Us(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=ce.getTransfer(N.colorSpace)!==me,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||_!==N.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,m=N,_=N.version,g=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function v(L,A){L.getRGB(ya,Am(i)),n.buffers.color.setClear(ya.r,ya.g,ya.b,A,a)}function P(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,A=1){l.set(L),d=A,v(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,v(l,d)},render:y,addToRenderList:b,dispose:P}}function FM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let s=r,a=!1;function l(I,H,j,D,T){let F=!1;const C=m(D,j,H);s!==C&&(s=C,h(s.object)),F=g(I,D,j,T),F&&w(I,D,j,T),T!==null&&t.update(T,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,A(I,H,j,D),T!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(T).buffer))}function d(){return i.createVertexArray()}function h(I){return i.bindVertexArray(I)}function f(I){return i.deleteVertexArray(I)}function m(I,H,j){const D=j.wireframe===!0;let T=n[I.id];T===void 0&&(T={},n[I.id]=T);let F=T[H.id];F===void 0&&(F={},T[H.id]=F);let C=F[D];return C===void 0&&(C=_(d()),F[D]=C),C}function _(I){const H=[],j=[],D=[];for(let T=0;T<e;T++)H[T]=0,j[T]=0,D[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:D,object:I,attributes:{},index:null}}function g(I,H,j,D){const T=s.attributes,F=H.attributes;let C=0;const z=j.getAttributes();for(const G in z)if(z[G].location>=0){const rt=T[G];let ot=F[G];if(ot===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor)),rt===void 0||rt.attribute!==ot||ot&&rt.data!==ot.data)return!0;C++}return s.attributesNum!==C||s.index!==D}function w(I,H,j,D){const T={},F=H.attributes;let C=0;const z=j.getAttributes();for(const G in z)if(z[G].location>=0){let rt=F[G];rt===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor));const ot={};ot.attribute=rt,rt&&rt.data&&(ot.data=rt.data),T[G]=ot,C++}s.attributes=T,s.attributesNum=C,s.index=D}function y(){const I=s.newAttributes;for(let H=0,j=I.length;H<j;H++)I[H]=0}function b(I){v(I,0)}function v(I,H){const j=s.newAttributes,D=s.enabledAttributes,T=s.attributeDivisors;j[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),T[I]!==H&&(i.vertexAttribDivisor(I,H),T[I]=H)}function P(){const I=s.newAttributes,H=s.enabledAttributes;for(let j=0,D=H.length;j<D;j++)H[j]!==I[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function L(I,H,j,D,T,F,C){C===!0?i.vertexAttribIPointer(I,H,j,T,F):i.vertexAttribPointer(I,H,j,D,T,F)}function A(I,H,j,D){y();const T=D.attributes,F=j.getAttributes(),C=H.defaultAttributeValues;for(const z in F){const G=F[z];if(G.location>=0){let et=T[z];if(et===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(et=I.instanceColor)),et!==void 0){const rt=et.normalized,ot=et.itemSize,st=t.get(et);if(st===void 0)continue;const ht=st.buffer,Wt=st.type,Mt=st.bytesPerElement,nt=Wt===i.INT||Wt===i.UNSIGNED_INT||et.gpuType===ch;if(et.isInterleavedBufferAttribute){const at=et.data,xt=at.stride,Lt=et.offset;if(at.isInstancedInterleavedBuffer){for(let vt=0;vt<G.locationSize;vt++)v(G.location+vt,at.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let vt=0;vt<G.locationSize;vt++)b(G.location+vt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let vt=0;vt<G.locationSize;vt++)L(G.location+vt,ot/G.locationSize,Wt,rt,xt*Mt,(Lt+ot/G.locationSize*vt)*Mt,nt)}else{if(et.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)v(G.location+at,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let at=0;at<G.locationSize;at++)b(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let at=0;at<G.locationSize;at++)L(G.location+at,ot/G.locationSize,Wt,rt,ot*Mt,ot/G.locationSize*at*Mt,nt)}}else if(C!==void 0){const rt=C[z];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(G.location,rt);break;case 3:i.vertexAttrib3fv(G.location,rt);break;case 4:i.vertexAttrib4fv(G.location,rt);break;default:i.vertexAttrib1fv(G.location,rt)}}}}P()}function N(){V();for(const I in n){const H=n[I];for(const j in H){const D=H[j];for(const T in D)f(D[T].object),delete D[T];delete H[j]}delete n[I]}}function U(I){if(n[I.id]===void 0)return;const H=n[I.id];for(const j in H){const D=H[j];for(const T in D)f(D[T].object),delete D[T];delete H[j]}delete n[I.id]}function O(I){for(const H in n){const j=n[H];if(j[I.id]===void 0)continue;const D=j[I.id];for(const T in D)f(D[T].object),delete D[T];delete j[I.id]}}function V(){E(),a=!0,s!==r&&(s=r,h(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:V,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:b,disableUnusedAttributes:P}}function OM(i,t,e){let n;function r(h){n=h}function s(h,f){i.drawArrays(n,h,f),e.update(f,n,1)}function a(h,f,m){m!==0&&(i.drawArraysInstanced(n,h,f,m),e.update(f,n,m))}function l(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,m);let g=0;for(let w=0;w<m;w++)g+=f[w];e.update(g,n,1)}function d(h,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let w=0;w<h.length;w++)a(h[w],f[w],_[w]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,_,0,m);let w=0;for(let y=0;y<m;y++)w+=f[y]*_[y];e.update(w,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function kM(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==jn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const V=O===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==si&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ii&&!V)}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=d(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const m=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=w>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:_,maxTextures:g,maxVertexTextures:w,maxTextureSize:y,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:N,maxSamples:U}}function BM(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Hi,l=new Zt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const g=m.length!==0||_||n!==0||r;return r=_,n=m.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,_){e=f(m,_,0)},this.setState=function(m,_,g){const w=m.clippingPlanes,y=m.clipIntersection,b=m.clipShadows,v=i.get(m);if(!r||w===null||w.length===0||s&&!b)s?f(null):h();else{const P=s?0:n,L=P*4;let A=v.clippingState||null;d.value=A,A=f(w,_,L,g);for(let N=0;N!==L;++N)A[N]=e[N];v.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==e&&(d.value=e,d.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(m,_,g,w){const y=m!==null?m.length:0;let b=null;if(y!==0){if(b=d.value,w!==!0||b===null){const v=g+y*4,P=_.matrixWorldInverse;l.getNormalMatrix(P),(b===null||b.length<v)&&(b=new Float32Array(v));for(let L=0,A=g;L!==y;++L,A+=4)a.copy(m[L]).applyMatrix4(P,l),a.normal.toArray(b,A),b[A+3]=a.constant}d.value=b,d.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,b}}function VM(i){let t=new WeakMap;function e(a,l){return l===Jc?a.mapping=Ds:l===Qc&&(a.mapping=Ls),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Jc||l===Qc)if(t.has(a)){const d=t.get(a).texture;return e(d,a.mapping)}else{const d=a.image;if(d&&d.height>0){const h=new Iy(d.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",r),e(h.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const d=t.get(l);d!==void 0&&(t.delete(l),d.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ms=4,of=[.125,.215,.35,.446,.526,.582],yr=20,vc=new bh,af=new ne;let xc=null,bc=0,yc=0,wc=!1;const vr=(1+Math.sqrt(5))/2,cs=1/vr,lf=[new $(-vr,cs,0),new $(vr,cs,0),new $(-cs,0,vr),new $(cs,0,vr),new $(0,vr,-cs),new $(0,vr,cs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],zM=new $;class cf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:l=zM}=s;xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,n,r,d,l),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,bc,yc),this._renderer.xr.enabled=wc,t.scissorTest=!1,wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:yi,format:jn,colorSpace:Is,depthBuffer:!1},r=uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(s)),this._blurMaterial=GM(s,t,e)}return r}_compileMaterial(t){const e=new wn(this._lodPlanes[0],t);this._renderer.compile(e,vc)}_sceneToCubeUV(t,e,n,r,s){const d=new Fn(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,g=m.toneMapping;m.getClearColor(af),m.toneMapping=Ki,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null));const y=new vh({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),b=new wn(new ks,y);let v=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,v=!0):(y.color.copy(af),v=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(d.up.set(0,h[L],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x+f[L],s.y,s.z)):A===1?(d.up.set(0,0,h[L]),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y+f[L],s.z)):(d.up.set(0,h[L],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y,s.z+f[L]));const N=this._cubeSize;wa(r,A*N,L>2?N:0,N,N),m.setRenderTarget(r),v&&m.render(b,d),m.render(t,d)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=g,m.autoClear=_,t.background=P}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ds||t.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new wn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const d=this._cubeSize;wa(e,0,0,3*d,2*d),n.setRenderTarget(e),n.render(a,vc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=lf[(r-s-1)%lf.length];this._blur(t,s-1,s,a,l)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,l){const d=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new wn(this._lodPlanes[r],h),_=h.uniforms,g=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*yr-1),y=s/w,b=isFinite(s)?1+Math.floor(f*y):yr;b>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${yr}`);const v=[];let P=0;for(let O=0;O<yr;++O){const V=O/y,E=Math.exp(-V*V/2);v.push(E),O===0?P+=E:O<b&&(P+=2*E)}for(let O=0;O<v.length;O++)v[O]=v[O]/P;_.envMap.value=t.texture,_.samples.value=b,_.weights.value=v,_.latitudinal.value=a==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:L}=this;_.dTheta.value=w,_.mipInt.value=L-n;const A=this._sizeLods[r],N=3*A*(r>L-ms?r-L+ms:0),U=4*(this._cubeSize-A);wa(e,N,U,3*A,2*A),d.setRenderTarget(e),d.render(m,vc)}}function HM(i){const t=[],e=[],n=[];let r=i;const s=i-ms+1+of.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let d=1/l;a>i-ms?d=of[a-i+ms-1]:a===0&&(d=0),n.push(d);const h=1/(l-2),f=-h,m=1+h,_=[f,f,m,f,m,m,f,f,m,m,f,m],g=6,w=6,y=3,b=2,v=1,P=new Float32Array(y*w*g),L=new Float32Array(b*w*g),A=new Float32Array(v*w*g);for(let U=0;U<g;U++){const O=U%3*2/3-1,V=U>2?0:-1,E=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];P.set(E,y*w*U),L.set(_,b*w*U);const I=[U,U,U,U,U,U];A.set(I,v*w*U)}const N=new Ci;N.setAttribute("position",new Vn(P,y)),N.setAttribute("uv",new Vn(L,b)),N.setAttribute("faceIndex",new Vn(A,v)),t.push(N),r>ms&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uf(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function GM(i,t,e){const n=new Float32Array(yr),r=new $(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hf(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function df(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function WM(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const d=l.mapping,h=d===Jc||d===Qc,f=d===Ds||d===Ls;if(h||f){let m=t.get(l);const _=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return e===null&&(e=new cf(i)),m=h?e.fromEquirectangular(l,m):e.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,t.set(l,m),m.texture;if(m!==void 0)return m.texture;{const g=l.image;return h&&g&&g.height>0||f&&g&&r(g)?(e===null&&(e=new cf(i)),m=h?e.fromEquirectangular(l):e.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,t.set(l,m),l.addEventListener("dispose",s),m.texture):null}}}return l}function r(l){let d=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&d++;return d===h}function s(l){const d=l.target;d.removeEventListener("dispose",s);const h=t.get(d);h!==void 0&&(t.delete(d),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function XM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Lo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qM(i,t,e,n){const r={},s=new WeakMap;function a(m){const _=m.target;_.index!==null&&t.remove(_.index);for(const w in _.attributes)t.remove(_.attributes[w]);_.removeEventListener("dispose",a),delete r[_.id];const g=s.get(_);g&&(t.remove(g),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(m,_){return r[_.id]===!0||(_.addEventListener("dispose",a),r[_.id]=!0,e.memory.geometries++),_}function d(m){const _=m.attributes;for(const g in _)t.update(_[g],i.ARRAY_BUFFER)}function h(m){const _=[],g=m.index,w=m.attributes.position;let y=0;if(g!==null){const P=g.array;y=g.version;for(let L=0,A=P.length;L<A;L+=3){const N=P[L+0],U=P[L+1],O=P[L+2];_.push(N,U,U,O,O,N)}}else if(w!==void 0){const P=w.array;y=w.version;for(let L=0,A=P.length/3-1;L<A;L+=3){const N=L+0,U=L+1,O=L+2;_.push(N,U,U,O,O,N)}}else return;const b=new(ym(_)?Cm:Tm)(_,1);b.version=y;const v=s.get(m);v&&t.remove(v),s.set(m,b)}function f(m){const _=s.get(m);if(_){const g=m.index;g!==null&&_.version<g.version&&h(m)}else h(m);return s.get(m)}return{get:l,update:d,getWireframeAttribute:f}}function YM(i,t,e){let n;function r(_){n=_}let s,a;function l(_){s=_.type,a=_.bytesPerElement}function d(_,g){i.drawElements(n,g,s,_*a),e.update(g,n,1)}function h(_,g,w){w!==0&&(i.drawElementsInstanced(n,g,s,_*a,w),e.update(g,n,w))}function f(_,g,w){if(w===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,_,0,w);let b=0;for(let v=0;v<w;v++)b+=g[v];e.update(b,n,1)}function m(_,g,w,y){if(w===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<_.length;v++)h(_[v]/a,g[v],y[v]);else{b.multiDrawElementsInstancedWEBGL(n,g,0,s,_,0,y,0,w);let v=0;for(let P=0;P<w;P++)v+=g[P]*y[P];e.update(v,n,1)}}this.setMode=r,this.setIndex=l,this.render=d,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function jM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function KM(i,t,e){const n=new WeakMap,r=new Re;function s(a,l,d){const h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0;let _=n.get(l);if(_===void 0||_.count!==m){let I=function(){V.dispose(),n.delete(l),l.removeEventListener("dispose",I)};var g=I;_!==void 0&&_.texture.dispose();const w=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,v=l.morphAttributes.position||[],P=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let A=0;w===!0&&(A=1),y===!0&&(A=2),b===!0&&(A=3);let N=l.attributes.position.count*A,U=1;N>t.maxTextureSize&&(U=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*U*4*m),V=new wm(O,N,U,m);V.type=ii,V.needsUpdate=!0;const E=A*4;for(let H=0;H<m;H++){const j=v[H],D=P[H],T=L[H],F=N*U*4*H;for(let C=0;C<j.count;C++){const z=C*E;w===!0&&(r.fromBufferAttribute(j,C),O[F+z+0]=r.x,O[F+z+1]=r.y,O[F+z+2]=r.z,O[F+z+3]=0),y===!0&&(r.fromBufferAttribute(D,C),O[F+z+4]=r.x,O[F+z+5]=r.y,O[F+z+6]=r.z,O[F+z+7]=0),b===!0&&(r.fromBufferAttribute(T,C),O[F+z+8]=r.x,O[F+z+9]=r.y,O[F+z+10]=r.z,O[F+z+11]=T.itemSize===4?r.w:1)}}_={count:m,texture:V,size:new kt(N,U)},n.set(l,_),l.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let w=0;for(let b=0;b<h.length;b++)w+=h[b];const y=l.morphTargetsRelative?1:1-w;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:s}}function $M(i,t,e,n){let r=new WeakMap;function s(d){const h=n.render.frame,f=d.geometry,m=t.get(d,f);if(r.get(m)!==h&&(t.update(m),r.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),r.get(d)!==h&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==h&&(_.update(),r.set(_,h))}return m}function a(){r=new WeakMap}function l(d){const h=d.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}const Um=new on,ff=new Dm(1,1),Nm=new wm,Fm=new gy,Om=new Rm,pf=[],mf=[],_f=new Float32Array(16),gf=new Float32Array(9),vf=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=pf[r];if(s===void 0&&(s=new Float32Array(r),pf[r]=s),t!==0){n.toArray(s,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(s,l)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function al(i,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ZM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function JM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function QM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function tE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function eE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;vf.set(n),i.uniformMatrix2fv(this.addr,!1,vf),Oe(e,n)}}function nE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),Oe(e,n)}}function iE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;_f.set(n),i.uniformMatrix4fv(this.addr,!1,_f),Oe(e,n)}}function rE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function oE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function aE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function lE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function uE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function hE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function dE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ff.compareFunction=bm,s=ff):s=Um,e.setTexture2D(t||s,r)}function fE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Fm,r)}function pE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Om,r)}function mE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Nm,r)}function _E(i){switch(i){case 5126:return ZM;case 35664:return JM;case 35665:return QM;case 35666:return tE;case 35674:return eE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function gE(i,t){i.uniform1fv(this.addr,t)}function vE(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function xE(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function bE(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function yE(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wE(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function SE(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ME(i,t){i.uniform1iv(this.addr,t)}function EE(i,t){i.uniform2iv(this.addr,t)}function TE(i,t){i.uniform3iv(this.addr,t)}function CE(i,t){i.uniform4iv(this.addr,t)}function AE(i,t){i.uniform1uiv(this.addr,t)}function PE(i,t){i.uniform2uiv(this.addr,t)}function RE(i,t){i.uniform3uiv(this.addr,t)}function DE(i,t){i.uniform4uiv(this.addr,t)}function LE(i,t,e){const n=this.cache,r=t.length,s=al(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Um,s[a])}function IE(i,t,e){const n=this.cache,r=t.length,s=al(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Fm,s[a])}function UE(i,t,e){const n=this.cache,r=t.length,s=al(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Om,s[a])}function NE(i,t,e){const n=this.cache,r=t.length,s=al(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Nm,s[a])}function FE(i){switch(i){case 5126:return gE;case 35664:return vE;case 35665:return xE;case 35666:return bE;case 35674:return yE;case 35675:return wE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return EE;case 35668:case 35672:return TE;case 35669:case 35673:return CE;case 5125:return AE;case 36294:return PE;case 36295:return RE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return NE}}class OE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_E(e.type)}}class kE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=FE(e.type)}}class BE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function xf(i,t){i.seq.push(t),i.map[t.id]=t}function VE(i,t,e){const n=i.name,r=n.length;for(Sc.lastIndex=0;;){const s=Sc.exec(n),a=Sc.lastIndex;let l=s[1];const d=s[2]==="]",h=s[3];if(d&&(l=l|0),h===void 0||h==="["&&a+2===r){xf(e,h===void 0?new OE(l,i,t):new kE(l,i,t));break}else{let m=e.map[l];m===void 0&&(m=new BE(l),xf(e,m)),e=m}}}class Ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);VE(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const l=e[s],d=n[l.id];d.needsUpdate!==!1&&l.setValue(t,d.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function bf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zE=37297;let HE=0;function GE(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const yf=new Zt;function WE(i){ce._getMatrix(yf,ce.workingColorSpace,i);const t=`mat3( ${yf.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Ja:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+GE(i.getShaderSource(t),l)}else return s}function XE(i,t){const e=WE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qE(i,t){let e;switch(t){case Ab:e="Linear";break;case Pb:e="Reinhard";break;case Rb:e="Cineon";break;case Db:e="ACESFilmic";break;case Ib:e="AgX";break;case Ub:e="Neutral";break;case Lb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sa=new $;function YE(){ce.getLuminanceCoefficients(Sa);const i=Sa.x.toFixed(4),t=Sa.y.toFixed(4),e=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function KE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $E(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function co(i){return i!==""}function Sf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(ZE,QE)}const JE=new Map;function QE(i,t){let e=Jt[t];if(e===void 0){const n=JE.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ru(e)}const tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(i){return i.replace(tT,eT)}function eT(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nT(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===um?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ab?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function iT(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Ls:t="ENVMAP_TYPE_CUBE";break;case sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rT(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function sT(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Tb:t="ENVMAP_BLENDING_MIX";break;case Cb:t="ENVMAP_BLENDING_ADD";break}return t}function oT(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function aT(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,l=e.fragmentShader;const d=nT(e),h=iT(e),f=rT(e),m=sT(e),_=oT(e),g=jE(e),w=KE(s),y=r.createProgram();let b,v,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(co).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(co).join(`
`),v.length>0&&(v+=`
`)):(b=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),v=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ki?qE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,XE("linearToOutputTexel",e.outputColorSpace),YE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),a=Ru(a),a=Sf(a,e),a=Mf(a,e),l=Ru(l),l=Sf(l,e),l=Mf(l,e),a=Ef(a),l=Ef(l),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=P+b+a,A=P+v+l,N=bf(r,r.VERTEX_SHADER,L),U=bf(r,r.FRAGMENT_SHADER,A);r.attachShader(y,N),r.attachShader(y,U),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function O(H){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(y)||"",D=r.getShaderInfoLog(N)||"",T=r.getShaderInfoLog(U)||"",F=j.trim(),C=D.trim(),z=T.trim();let G=!0,et=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,N,U);else{const rt=wf(r,N,"vertex"),ot=wf(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+F+`
`+rt+`
`+ot)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(C===""||z==="")&&(et=!1);et&&(H.diagnostics={runnable:G,programLog:F,vertexShader:{log:C,prefix:b},fragmentShader:{log:z,prefix:v}})}r.deleteShader(N),r.deleteShader(U),V=new Ua(r,y),E=$E(r,y)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(y,zE)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=HE++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=U,this}let lT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uT(t),e.set(t,n)),n}}class uT{constructor(t){this.id=lT++,this.code=t,this.usedTimes=0}}function hT(i,t,e,n,r,s,a){const l=new Mm,d=new cT,h=new Set,f=[],m=r.logarithmicDepthBuffer,_=r.vertexTextures;let g=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return h.add(E),E===0?"uv":`uv${E}`}function b(E,I,H,j,D){const T=j.fog,F=D.geometry,C=E.isMeshStandardMaterial?j.environment:null,z=(E.isMeshStandardMaterial?e:t).get(E.envMap||C),G=!!z&&z.mapping===sl?z.image.height:null,et=w[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=rt!==void 0?rt.length:0;let st=0;F.morphAttributes.position!==void 0&&(st=1),F.morphAttributes.normal!==void 0&&(st=2),F.morphAttributes.color!==void 0&&(st=3);let ht,Wt,Mt,nt;if(et){const oe=Qn[et];ht=oe.vertexShader,Wt=oe.fragmentShader}else ht=E.vertexShader,Wt=E.fragmentShader,d.update(E),Mt=d.getVertexShaderID(E),nt=d.getFragmentShaderID(E);const at=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Lt=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,Bt=!!E.map,se=!!E.matcap,B=!!z,Se=!!E.aoMap,jt=!!E.lightMap,Xt=!!E.bumpMap,At=!!E.normalMap,ve=!!E.displacementMap,Rt=!!E.emissiveMap,Kt=!!E.metalnessMap,Ie=!!E.roughnessMap,Ee=E.anisotropy>0,k=E.clearcoat>0,M=E.dispersion>0,K=E.iridescence>0,it=E.sheen>0,ct=E.transmission>0,tt=Ee&&!!E.anisotropyMap,Dt=k&&!!E.clearcoatMap,_t=k&&!!E.clearcoatNormalMap,It=k&&!!E.clearcoatRoughnessMap,Ut=K&&!!E.iridescenceMap,dt=K&&!!E.iridescenceThicknessMap,bt=it&&!!E.sheenColorMap,Gt=it&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,yt=!!E.specularColorMap,$t=!!E.specularIntensityMap,X=ct&&!!E.transmissionMap,ft=ct&&!!E.thicknessMap,mt=!!E.gradientMap,Tt=!!E.alphaMap,ut=E.alphaTest>0,lt=!!E.alphaHash,Ct=!!E.extensions;let qt=Ki;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(qt=i.toneMapping);const ue={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:Wt,defines:E.defines,customVertexShaderID:Mt,customFragmentShaderID:nt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,instancingMorph:Lt&&D.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Is,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:se,envMap:B,envMapMode:B&&z.mapping,envMapCubeUVHeight:G,aoMap:Se,lightMap:jt,bumpMap:Xt,normalMap:At,displacementMap:_&&ve,emissiveMap:Rt,normalMapObjectSpace:At&&E.normalMapType===kb,normalMapTangentSpace:At&&E.normalMapType===xm,metalnessMap:Kt,roughnessMap:Ie,anisotropy:Ee,anisotropyMap:tt,clearcoat:k,clearcoatMap:Dt,clearcoatNormalMap:_t,clearcoatRoughnessMap:It,dispersion:M,iridescence:K,iridescenceMap:Ut,iridescenceThicknessMap:dt,sheen:it,sheenColorMap:bt,sheenRoughnessMap:Gt,specularMap:Nt,specularColorMap:yt,specularIntensityMap:$t,transmission:ct,transmissionMap:X,thicknessMap:ft,gradientMap:mt,opaque:E.transparent===!1&&E.blending===ys&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ut,alphaHash:lt,combine:E.combine,mapUv:Bt&&y(E.map.channel),aoMapUv:Se&&y(E.aoMap.channel),lightMapUv:jt&&y(E.lightMap.channel),bumpMapUv:Xt&&y(E.bumpMap.channel),normalMapUv:At&&y(E.normalMap.channel),displacementMapUv:ve&&y(E.displacementMap.channel),emissiveMapUv:Rt&&y(E.emissiveMap.channel),metalnessMapUv:Kt&&y(E.metalnessMap.channel),roughnessMapUv:Ie&&y(E.roughnessMap.channel),anisotropyMapUv:tt&&y(E.anisotropyMap.channel),clearcoatMapUv:Dt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:_t&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&y(E.sheenRoughnessMap.channel),specularMapUv:Nt&&y(E.specularMap.channel),specularColorMapUv:yt&&y(E.specularColorMap.channel),specularIntensityMapUv:$t&&y(E.specularIntensityMap.channel),transmissionMapUv:X&&y(E.transmissionMap.channel),thicknessMapUv:ft&&y(E.thicknessMap.channel),alphaMapUv:Tt&&y(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(At||Ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Bt||Tt),fog:!!T,useFog:E.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xt,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:st,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:Rt&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ei,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ct&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&E.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ue.vertexUv1s=h.has(1),ue.vertexUv2s=h.has(2),ue.vertexUv3s=h.has(3),h.clear(),ue}function v(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)I.push(H),I.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(P(I,E),L(I,E),I.push(i.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function P(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function L(E,I){l.disableAll(),I.supportsVertexTextures&&l.enable(0),I.instancing&&l.enable(1),I.instancingColor&&l.enable(2),I.instancingMorph&&l.enable(3),I.matcap&&l.enable(4),I.envMap&&l.enable(5),I.normalMapObjectSpace&&l.enable(6),I.normalMapTangentSpace&&l.enable(7),I.clearcoat&&l.enable(8),I.iridescence&&l.enable(9),I.alphaTest&&l.enable(10),I.vertexColors&&l.enable(11),I.vertexAlphas&&l.enable(12),I.vertexUv1s&&l.enable(13),I.vertexUv2s&&l.enable(14),I.vertexUv3s&&l.enable(15),I.vertexTangents&&l.enable(16),I.anisotropy&&l.enable(17),I.alphaHash&&l.enable(18),I.batching&&l.enable(19),I.dispersion&&l.enable(20),I.batchingColor&&l.enable(21),I.gradientMap&&l.enable(22),E.push(l.mask),l.disableAll(),I.fog&&l.enable(0),I.useFog&&l.enable(1),I.flatShading&&l.enable(2),I.logarithmicDepthBuffer&&l.enable(3),I.reversedDepthBuffer&&l.enable(4),I.skinning&&l.enable(5),I.morphTargets&&l.enable(6),I.morphNormals&&l.enable(7),I.morphColors&&l.enable(8),I.premultipliedAlpha&&l.enable(9),I.shadowMapEnabled&&l.enable(10),I.doubleSided&&l.enable(11),I.flipSided&&l.enable(12),I.useDepthPacking&&l.enable(13),I.dithering&&l.enable(14),I.transmission&&l.enable(15),I.sheen&&l.enable(16),I.opaque&&l.enable(17),I.pointsUvs&&l.enable(18),I.decodeVideoTexture&&l.enable(19),I.decodeVideoTextureEmissive&&l.enable(20),I.alphaToCoverage&&l.enable(21),E.push(l.mask)}function A(E){const I=w[E.type];let H;if(I){const j=Qn[I];H=el.clone(j.uniforms)}else H=E.uniforms;return H}function N(E,I){let H;for(let j=0,D=f.length;j<D;j++){const T=f[j];if(T.cacheKey===I){H=T,++H.usedTimes;break}}return H===void 0&&(H=new aT(i,I,E,s),f.push(H)),H}function U(E){if(--E.usedTimes===0){const I=f.indexOf(E);f[I]=f[f.length-1],f.pop(),E.destroy()}}function O(E){d.remove(E)}function V(){d.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:A,acquireProgram:N,releaseProgram:U,releaseShaderCache:O,programs:f,dispose:V}}function dT(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,d){i.get(a)[l]=d}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function fT(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Af(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(m,_,g,w,y,b){let v=i[t];return v===void 0?(v={id:m.id,object:m,geometry:_,material:g,groupOrder:w,renderOrder:m.renderOrder,z:y,group:b},i[t]=v):(v.id=m.id,v.object=m,v.geometry=_,v.material=g,v.groupOrder=w,v.renderOrder=m.renderOrder,v.z=y,v.group=b),t++,v}function l(m,_,g,w,y,b){const v=a(m,_,g,w,y,b);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):e.push(v)}function d(m,_,g,w,y,b){const v=a(m,_,g,w,y,b);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function h(m,_){e.length>1&&e.sort(m||fT),n.length>1&&n.sort(_||Cf),r.length>1&&r.sort(_||Cf)}function f(){for(let m=t,_=i.length;m<_;m++){const g=i[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:d,finish:f,sort:h}}function pT(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Af,i.set(n,[a])):r>=s.length?(a=new Af,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mT(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ne};break;case"SpotLight":e={position:new $,direction:new $,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function _T(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gT=0;function vT(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xT(i){const t=new mT,e=_T(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new $);const r=new $,s=new Ae,a=new Ae;function l(h){let f=0,m=0,_=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let g=0,w=0,y=0,b=0,v=0,P=0,L=0,A=0,N=0,U=0,O=0;h.sort(vT);for(let E=0,I=h.length;E<I;E++){const H=h[E],j=H.color,D=H.intensity,T=H.distance,F=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=j.r*D,m+=j.g*D,_+=j.b*D;else if(H.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(H.sh.coefficients[C],D);O++}else if(H.isDirectionalLight){const C=t.get(H);if(C.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,G=e.get(H);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=F,n.directionalShadowMatrix[g]=H.shadow.matrix,P++}n.directional[g]=C,g++}else if(H.isSpotLight){const C=t.get(H);C.position.setFromMatrixPosition(H.matrixWorld),C.color.copy(j).multiplyScalar(D),C.distance=T,C.coneCos=Math.cos(H.angle),C.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),C.decay=H.decay,n.spot[y]=C;const z=H.shadow;if(H.map&&(n.spotLightMap[N]=H.map,N++,z.updateMatrices(H),H.castShadow&&U++),n.spotLightMatrix[y]=z.matrix,H.castShadow){const G=e.get(H);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=F,A++}y++}else if(H.isRectAreaLight){const C=t.get(H);C.color.copy(j).multiplyScalar(D),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),n.rectArea[b]=C,b++}else if(H.isPointLight){const C=t.get(H);if(C.color.copy(H.color).multiplyScalar(H.intensity),C.distance=H.distance,C.decay=H.decay,H.castShadow){const z=H.shadow,G=e.get(H);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,n.pointShadow[w]=G,n.pointShadowMap[w]=F,n.pointShadowMatrix[w]=H.shadow.matrix,L++}n.point[w]=C,w++}else if(H.isHemisphereLight){const C=t.get(H);C.skyColor.copy(H.color).multiplyScalar(D),C.groundColor.copy(H.groundColor).multiplyScalar(D),n.hemi[v]=C,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=_;const V=n.hash;(V.directionalLength!==g||V.pointLength!==w||V.spotLength!==y||V.rectAreaLength!==b||V.hemiLength!==v||V.numDirectionalShadows!==P||V.numPointShadows!==L||V.numSpotShadows!==A||V.numSpotMaps!==N||V.numLightProbes!==O)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=b,n.point.length=w,n.hemi.length=v,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=A+N-U,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=O,V.directionalLength=g,V.pointLength=w,V.spotLength=y,V.rectAreaLength=b,V.hemiLength=v,V.numDirectionalShadows=P,V.numPointShadows=L,V.numSpotShadows=A,V.numSpotMaps=N,V.numLightProbes=O,n.version=gT++)}function d(h,f){let m=0,_=0,g=0,w=0,y=0;const b=f.matrixWorldInverse;for(let v=0,P=h.length;v<P;v++){const L=h[v];if(L.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(b),m++}else if(L.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(b),g++}else if(L.isRectAreaLight){const A=n.rectArea[w];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(b),a.identity(),s.copy(L.matrixWorld),s.premultiply(b),a.extractRotation(s),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),w++}else if(L.isPointLight){const A=n.point[_];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(b),_++}else if(L.isHemisphereLight){const A=n.hemi[y];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(b),y++}}}return{setup:l,setupView:d,state:n}}function Pf(i){const t=new xT(i),e=[],n=[];function r(f){h.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(){t.setup(e)}function d(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:a}}function bT(i){let t=new WeakMap;function e(r,s){const a=t.get(r);let l;return a===void 0?(l=new Pf(i),t.set(r,[l])):s>=a.length?(l=new Pf(i),a.push(l)):l=a[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const yT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
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
}`;function ST(i,t,e){let n=new xh;const r=new kt,s=new kt,a=new Re,l=new Wy({depthPacking:Ob}),d=new Xy,h={},f=e.maxTextureSize,m={[Qi]:_n,[_n]:Qi,[ei]:ei},_=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:yT,fragmentShader:wT}),g=_.clone();g.defines.HORIZONTAL_PASS=1;const w=new Ci;w.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wn(w,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=um;let v=this.type;this.render=function(U,O,V){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||U.length===0)return;const E=i.getRenderTarget(),I=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),j=i.state;j.setBlending(bi),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const D=v!==mi&&this.type===mi,T=v===mi&&this.type!==mi;for(let F=0,C=U.length;F<C;F++){const z=U[F],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const et=G.getFrameExtents();if(r.multiply(et),s.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/et.x),r.x=s.x*et.x,G.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/et.y),r.y=s.y*et.y,G.mapSize.y=s.y)),G.map===null||D===!0||T===!0){const ot=this.type!==mi?{minFilter:Mn,magFilter:Mn}:{};G.map!==null&&G.map.dispose(),G.map=new Kn(r.x,r.y,ot),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const rt=G.getViewportCount();for(let ot=0;ot<rt;ot++){const st=G.getViewport(ot);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),j.viewport(a),G.updateMatrices(z,ot),n=G.getFrustum(),A(O,V,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===mi&&P(G,V),G.needsUpdate=!1}v=this.type,b.needsUpdate=!1,i.setRenderTarget(E,I,H)};function P(U,O){const V=t.update(y);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Kn(r.x,r.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(O,null,V,_,y,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(O,null,V,g,y,null)}function L(U,O,V,E){let I=null;const H=V.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)I=H;else if(I=V.isPointLight===!0?d:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=I.uuid,D=O.uuid;let T=h[j];T===void 0&&(T={},h[j]=T);let F=T[D];F===void 0&&(F=I.clone(),T[D]=F,O.addEventListener("dispose",N)),I=F}if(I.visible=O.visible,I.wireframe=O.wireframe,E===mi?I.side=O.shadowSide!==null?O.shadowSide:O.side:I.side=O.shadowSide!==null?O.shadowSide:m[O.side],I.alphaMap=O.alphaMap,I.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,I.map=O.map,I.clipShadows=O.clipShadows,I.clippingPlanes=O.clippingPlanes,I.clipIntersection=O.clipIntersection,I.displacementMap=O.displacementMap,I.displacementScale=O.displacementScale,I.displacementBias=O.displacementBias,I.wireframeLinewidth=O.wireframeLinewidth,I.linewidth=O.linewidth,V.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const j=i.properties.get(I);j.light=V}return I}function A(U,O,V,E,I){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&I===mi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,U.matrixWorld);const D=t.update(U),T=U.material;if(Array.isArray(T)){const F=D.groups;for(let C=0,z=F.length;C<z;C++){const G=F[C],et=T[G.materialIndex];if(et&&et.visible){const rt=L(U,et,E,I);U.onBeforeShadow(i,U,O,V,D,rt,G),i.renderBufferDirect(V,null,D,rt,U,G),U.onAfterShadow(i,U,O,V,D,rt,G)}}}else if(T.visible){const F=L(U,T,E,I);U.onBeforeShadow(i,U,O,V,D,F,null),i.renderBufferDirect(V,null,D,F,U,null),U.onAfterShadow(i,U,O,V,D,F,null)}}const j=U.children;for(let D=0,T=j.length;D<T;D++)A(j[D],O,V,E,I)}function N(U){U.target.removeEventListener("dispose",N);for(const V in h){const E=h[V],I=U.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}const MT={[Xc]:qc,[Yc]:$c,[jc]:Zc,[Rs]:Kc,[qc]:Xc,[$c]:Yc,[Zc]:jc,[Kc]:Rs};function ET(i,t){function e(){let X=!1;const ft=new Re;let mt=null;const Tt=new Re(0,0,0,0);return{setMask:function(ut){mt!==ut&&!X&&(i.colorMask(ut,ut,ut,ut),mt=ut)},setLocked:function(ut){X=ut},setClear:function(ut,lt,Ct,qt,ue){ue===!0&&(ut*=qt,lt*=qt,Ct*=qt),ft.set(ut,lt,Ct,qt),Tt.equals(ft)===!1&&(i.clearColor(ut,lt,Ct,qt),Tt.copy(ft))},reset:function(){X=!1,mt=null,Tt.set(-1,0,0,0)}}}function n(){let X=!1,ft=!1,mt=null,Tt=null,ut=null;return{setReversed:function(lt){if(ft!==lt){const Ct=t.get("EXT_clip_control");lt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ft=lt;const qt=ut;ut=null,this.setClear(qt)}},getReversed:function(){return ft},setTest:function(lt){lt?at(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(lt){mt!==lt&&!X&&(i.depthMask(lt),mt=lt)},setFunc:function(lt){if(ft&&(lt=MT[lt]),Tt!==lt){switch(lt){case Xc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case Kc:i.depthFunc(i.GEQUAL);break;case $c:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=lt}},setLocked:function(lt){X=lt},setClear:function(lt){ut!==lt&&(ft&&(lt=1-lt),i.clearDepth(lt),ut=lt)},reset:function(){X=!1,mt=null,Tt=null,ut=null,ft=!1}}}function r(){let X=!1,ft=null,mt=null,Tt=null,ut=null,lt=null,Ct=null,qt=null,ue=null;return{setTest:function(oe){X||(oe?at(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(oe){ft!==oe&&!X&&(i.stencilMask(oe),ft=oe)},setFunc:function(oe,gn,Cn){(mt!==oe||Tt!==gn||ut!==Cn)&&(i.stencilFunc(oe,gn,Cn),mt=oe,Tt=gn,ut=Cn)},setOp:function(oe,gn,Cn){(lt!==oe||Ct!==gn||qt!==Cn)&&(i.stencilOp(oe,gn,Cn),lt=oe,Ct=gn,qt=Cn)},setLocked:function(oe){X=oe},setClear:function(oe){ue!==oe&&(i.clearStencil(oe),ue=oe)},reset:function(){X=!1,ft=null,mt=null,Tt=null,ut=null,lt=null,Ct=null,qt=null,ue=null}}}const s=new e,a=new n,l=new r,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,g=[],w=null,y=!1,b=null,v=null,P=null,L=null,A=null,N=null,U=null,O=new ne(0,0,0),V=0,E=!1,I=null,H=null,j=null,D=null,T=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),C=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),C=z>=2);let et=null,rt={};const ot=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),ht=new Re().fromArray(ot),Wt=new Re().fromArray(st);function Mt(X,ft,mt,Tt){const ut=new Uint8Array(4),lt=i.createTexture();i.bindTexture(X,lt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<mt;Ct++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ft+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return lt}const nt={};nt[i.TEXTURE_2D]=Mt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),at(i.DEPTH_TEST),a.setFunc(Rs),Xt(!1),At(Ad),at(i.CULL_FACE),Se(bi);function at(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function xt(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function Lt(X,ft){return m[X]!==ft?(i.bindFramebuffer(X,ft),m[X]=ft,X===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ft),X===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function vt(X,ft){let mt=g,Tt=!1;if(X){mt=_.get(ft),mt===void 0&&(mt=[],_.set(ft,mt));const ut=X.textures;if(mt.length!==ut.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ct=ut.length;lt<Ct;lt++)mt[lt]=i.COLOR_ATTACHMENT0+lt;mt.length=ut.length,Tt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(mt)}function Bt(X){return w!==X?(i.useProgram(X),w=X,!0):!1}const se={[xr]:i.FUNC_ADD,[cb]:i.FUNC_SUBTRACT,[ub]:i.FUNC_REVERSE_SUBTRACT};se[hb]=i.MIN,se[db]=i.MAX;const B={[fb]:i.ZERO,[pb]:i.ONE,[mb]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[yb]:i.SRC_ALPHA_SATURATE,[xb]:i.DST_COLOR,[gb]:i.DST_ALPHA,[_b]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[bb]:i.ONE_MINUS_DST_COLOR,[vb]:i.ONE_MINUS_DST_ALPHA,[wb]:i.CONSTANT_COLOR,[Sb]:i.ONE_MINUS_CONSTANT_COLOR,[Mb]:i.CONSTANT_ALPHA,[Eb]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(X,ft,mt,Tt,ut,lt,Ct,qt,ue,oe){if(X===bi){y===!0&&(xt(i.BLEND),y=!1);return}if(y===!1&&(at(i.BLEND),y=!0),X!==lb){if(X!==b||oe!==E){if((v!==xr||A!==xr)&&(i.blendEquation(i.FUNC_ADD),v=xr,A=xr),oe)switch(X){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,L=null,N=null,U=null,O.set(0,0,0),V=0,b=X,E=oe}return}ut=ut||ft,lt=lt||mt,Ct=Ct||Tt,(ft!==v||ut!==A)&&(i.blendEquationSeparate(se[ft],se[ut]),v=ft,A=ut),(mt!==P||Tt!==L||lt!==N||Ct!==U)&&(i.blendFuncSeparate(B[mt],B[Tt],B[lt],B[Ct]),P=mt,L=Tt,N=lt,U=Ct),(qt.equals(O)===!1||ue!==V)&&(i.blendColor(qt.r,qt.g,qt.b,ue),O.copy(qt),V=ue),b=X,E=!1}function jt(X,ft){X.side===ei?xt(i.CULL_FACE):at(i.CULL_FACE);let mt=X.side===_n;ft&&(mt=!mt),Xt(mt),X.blending===ys&&X.transparent===!1?Se(bi):Se(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);const Tt=X.stencilWrite;l.setTest(Tt),Tt&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(X){I!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),I=X)}function At(X){X!==sb?(at(i.CULL_FACE),X!==H&&(X===Ad?i.cullFace(i.BACK):X===ob?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),H=X}function ve(X){X!==j&&(C&&i.lineWidth(X),j=X)}function Rt(X,ft,mt){X?(at(i.POLYGON_OFFSET_FILL),(D!==ft||T!==mt)&&(i.polygonOffset(ft,mt),D=ft,T=mt)):xt(i.POLYGON_OFFSET_FILL)}function Kt(X){X?at(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ie(X){X===void 0&&(X=i.TEXTURE0+F-1),et!==X&&(i.activeTexture(X),et=X)}function Ee(X,ft,mt){mt===void 0&&(et===null?mt=i.TEXTURE0+F-1:mt=et);let Tt=rt[mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},rt[mt]=Tt),(Tt.type!==X||Tt.texture!==ft)&&(et!==mt&&(i.activeTexture(mt),et=mt),i.bindTexture(X,ft||nt[X]),Tt.type=X,Tt.texture=ft)}function k(){const X=rt[et];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{i.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{i.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{i.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{i.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{i.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{i.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{i.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(X){ht.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ht.copy(X))}function Gt(X){Wt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Wt.copy(X))}function Nt(X,ft){let mt=h.get(ft);mt===void 0&&(mt=new WeakMap,h.set(ft,mt));let Tt=mt.get(X);Tt===void 0&&(Tt=i.getUniformBlockIndex(ft,X.name),mt.set(X,Tt))}function yt(X,ft){const Tt=h.get(ft).get(X);d.get(ft)!==Tt&&(i.uniformBlockBinding(ft,Tt,X.__bindingPointIndex),d.set(ft,Tt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},et=null,rt={},m={},_=new WeakMap,g=[],w=null,y=!1,b=null,v=null,P=null,L=null,A=null,N=null,U=null,O=new ne(0,0,0),V=0,E=!1,I=null,H=null,j=null,D=null,T=null,ht.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:at,disable:xt,bindFramebuffer:Lt,drawBuffers:vt,useProgram:Bt,setBlending:Se,setMaterial:jt,setFlipSided:Xt,setCullFace:At,setLineWidth:ve,setPolygonOffset:Rt,setScissorTest:Kt,activeTexture:Ie,bindTexture:Ee,unbindTexture:k,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:Ut,texImage3D:dt,updateUBOMapping:Nt,uniformBlockBinding:yt,texStorage2D:_t,texStorage3D:It,texSubImage2D:it,texSubImage3D:ct,compressedTexSubImage2D:tt,compressedTexSubImage3D:Dt,scissor:bt,viewport:Gt,reset:$t}}function TT(i,t,e,n,r,s,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,f=new WeakMap;let m;const _=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,M){return g?new OffscreenCanvas(k,M):tl("canvas")}function y(k,M,K){let it=1;const ct=Ee(k);if((ct.width>K||ct.height>K)&&(it=K/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement!="undefined"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&k instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&k instanceof ImageBitmap||typeof VideoFrame!="undefined"&&k instanceof VideoFrame){const tt=Math.floor(it*ct.width),Dt=Math.floor(it*ct.height);m===void 0&&(m=w(tt,Dt));const _t=M?w(tt,Dt):m;return _t.width=tt,_t.height=Dt,_t.getContext("2d").drawImage(k,0,0,tt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+tt+"x"+Dt+")."),_t}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),k;return k}function b(k){return k.generateMipmaps}function v(k){i.generateMipmap(k)}function P(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(k,M,K,it,ct=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let tt=M;if(M===i.RED&&(K===i.FLOAT&&(tt=i.R32F),K===i.HALF_FLOAT&&(tt=i.R16F),K===i.UNSIGNED_BYTE&&(tt=i.R8)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.R8UI),K===i.UNSIGNED_SHORT&&(tt=i.R16UI),K===i.UNSIGNED_INT&&(tt=i.R32UI),K===i.BYTE&&(tt=i.R8I),K===i.SHORT&&(tt=i.R16I),K===i.INT&&(tt=i.R32I)),M===i.RG&&(K===i.FLOAT&&(tt=i.RG32F),K===i.HALF_FLOAT&&(tt=i.RG16F),K===i.UNSIGNED_BYTE&&(tt=i.RG8)),M===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.RG8UI),K===i.UNSIGNED_SHORT&&(tt=i.RG16UI),K===i.UNSIGNED_INT&&(tt=i.RG32UI),K===i.BYTE&&(tt=i.RG8I),K===i.SHORT&&(tt=i.RG16I),K===i.INT&&(tt=i.RG32I)),M===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),K===i.UNSIGNED_INT&&(tt=i.RGB32UI),K===i.BYTE&&(tt=i.RGB8I),K===i.SHORT&&(tt=i.RGB16I),K===i.INT&&(tt=i.RGB32I)),M===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),K===i.UNSIGNED_INT&&(tt=i.RGBA32UI),K===i.BYTE&&(tt=i.RGBA8I),K===i.SHORT&&(tt=i.RGBA16I),K===i.INT&&(tt=i.RGBA32I)),M===i.RGB&&(K===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),M===i.RGBA){const Dt=ct?Ja:ce.getTransfer(it);K===i.FLOAT&&(tt=i.RGBA32F),K===i.HALF_FLOAT&&(tt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(tt=Dt===me?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(k,M){let K;return k?M===null||M===Dr||M===Ao?K=i.DEPTH24_STENCIL8:M===ii?K=i.DEPTH32F_STENCIL8:M===Co&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dr||M===Ao?K=i.DEPTH_COMPONENT24:M===ii?K=i.DEPTH_COMPONENT32F:M===Co&&(K=i.DEPTH_COMPONENT16),K}function N(k,M){return b(k)===!0||k.isFramebufferTexture&&k.minFilter!==Mn&&k.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?M.mipmaps.length:1}function U(k){const M=k.target;M.removeEventListener("dispose",U),V(M),M.isVideoTexture&&f.delete(M)}function O(k){const M=k.target;M.removeEventListener("dispose",O),I(M)}function V(k){const M=n.get(k);if(M.__webglInit===void 0)return;const K=k.source,it=_.get(K);if(it){const ct=it[M.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(k),Object.keys(it).length===0&&_.delete(K)}n.remove(k)}function E(k){const M=n.get(k);i.deleteTexture(M.__webglTexture);const K=k.source,it=_.get(K);delete it[M.__cacheKey],a.memory.textures--}function I(k){const M=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ct=0;ct<M.__webglFramebuffer[it].length;ct++)i.deleteFramebuffer(M.__webglFramebuffer[it][ct]);else i.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)i.deleteFramebuffer(M.__webglFramebuffer[it]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=k.textures;for(let it=0,ct=K.length;it<ct;it++){const tt=n.get(K[it]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(K[it])}n.remove(k)}let H=0;function j(){H=0}function D(){const k=H;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),H+=1,k}function T(k){const M=[];return M.push(k.wrapS),M.push(k.wrapT),M.push(k.wrapR||0),M.push(k.magFilter),M.push(k.minFilter),M.push(k.anisotropy),M.push(k.internalFormat),M.push(k.format),M.push(k.type),M.push(k.generateMipmaps),M.push(k.premultiplyAlpha),M.push(k.flipY),M.push(k.unpackAlignment),M.push(k.colorSpace),M.join()}function F(k,M){const K=n.get(k);if(k.isVideoTexture&&Kt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&K.__version!==k.version){const it=k.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(K,k,M);return}}else k.isExternalTexture&&(K.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function C(k,M){const K=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&K.__version!==k.version){nt(K,k,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function z(k,M){const K=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&K.__version!==k.version){nt(K,k,M);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function G(k,M){const K=n.get(k);if(k.version>0&&K.__version!==k.version){at(K,k,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}const et={[tu]:i.REPEAT,[Er]:i.CLAMP_TO_EDGE,[eu]:i.MIRRORED_REPEAT},rt={[Mn]:i.NEAREST,[Nb]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[jl]:i.LINEAR_MIPMAP_NEAREST,[Tr]:i.LINEAR_MIPMAP_LINEAR},ot={[Bb]:i.NEVER,[Xb]:i.ALWAYS,[Vb]:i.LESS,[bm]:i.LEQUAL,[zb]:i.EQUAL,[Wb]:i.GEQUAL,[Hb]:i.GREATER,[Gb]:i.NOTEQUAL};function st(k,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===jl||M.magFilter===na||M.magFilter===Tr||M.minFilter===ni||M.minFilter===jl||M.minFilter===na||M.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,et[M.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,et[M.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,et[M.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,rt[M.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,rt[M.minFilter]),M.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==na&&M.minFilter!==Tr||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(k,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ht(k,M){let K=!1;k.__webglInit===void 0&&(k.__webglInit=!0,M.addEventListener("dispose",U));const it=M.source;let ct=_.get(it);ct===void 0&&(ct={},_.set(it,ct));const tt=T(M);if(tt!==k.__cacheKey){ct[tt]===void 0&&(ct[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ct[tt].usedTimes++;const Dt=ct[k.__cacheKey];Dt!==void 0&&(ct[k.__cacheKey].usedTimes--,Dt.usedTimes===0&&E(M)),k.__cacheKey=tt,k.__webglTexture=ct[tt].texture}return K}function Wt(k,M,K){return Math.floor(Math.floor(k/K)/M)}function Mt(k,M,K,it){const tt=k.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,K,it,M.data);else{tt.sort((dt,bt)=>dt.start-bt.start);let Dt=0;for(let dt=1;dt<tt.length;dt++){const bt=tt[Dt],Gt=tt[dt],Nt=bt.start+bt.count,yt=Wt(Gt.start,M.width,4),$t=Wt(bt.start,M.width,4);Gt.start<=Nt+1&&yt===$t&&Wt(Gt.start+Gt.count-1,M.width,4)===yt?bt.count=Math.max(bt.count,Gt.start+Gt.count-bt.start):(++Dt,tt[Dt]=Gt)}tt.length=Dt+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Ut=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let dt=0,bt=tt.length;dt<bt;dt++){const Gt=tt[dt],Nt=Math.floor(Gt.start/4),yt=Math.ceil(Gt.count/4),$t=Nt%M.width,X=Math.floor(Nt/M.width),ft=yt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,$t,X,ft,mt,K,it,M.data)}k.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function nt(k,M,K){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const ct=ht(k,M),tt=M.source;e.bindTexture(it,k.__webglTexture,i.TEXTURE0+K);const Dt=n.get(tt);if(tt.version!==Dt.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);const _t=ce.getPrimaries(ce.workingColorSpace),It=M.colorSpace===br?null:ce.getPrimaries(M.colorSpace),Ut=M.colorSpace===br||_t===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let dt=y(M.image,!1,r.maxTextureSize);dt=Ie(M,dt);const bt=s.convert(M.format,M.colorSpace),Gt=s.convert(M.type);let Nt=L(M.internalFormat,bt,Gt,M.colorSpace,M.isVideoTexture);st(it,M);let yt;const $t=M.mipmaps,X=M.isVideoTexture!==!0,ft=Dt.__version===void 0||ct===!0,mt=tt.dataReady,Tt=N(M,dt);if(M.isDepthTexture)Nt=A(M.format===Ro,M.type),ft&&(X?e.texStorage2D(i.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,bt,Gt,null));else if(M.isDataTexture)if($t.length>0){X&&ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,$t[0].width,$t[0].height);for(let ut=0,lt=$t.length;ut<lt;ut++)yt=$t[ut],X?mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,bt,Gt,yt.data):e.texImage2D(i.TEXTURE_2D,ut,Nt,yt.width,yt.height,0,bt,Gt,yt.data);M.generateMipmaps=!1}else X?(ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,dt.width,dt.height),mt&&Mt(M,dt,bt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,bt,Gt,dt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,$t[0].width,$t[0].height,dt.depth);for(let ut=0,lt=$t.length;ut<lt;ut++)if(yt=$t[ut],M.format!==jn)if(bt!==null)if(X){if(mt)if(M.layerUpdates.size>0){const Ct=sf(yt.width,yt.height,M.format,M.type);for(const qt of M.layerUpdates){const ue=yt.data.subarray(qt*Ct/yt.data.BYTES_PER_ELEMENT,(qt+1)*Ct/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,qt,yt.width,yt.height,1,bt,ue)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,dt.depth,bt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Nt,yt.width,yt.height,dt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,dt.depth,bt,Gt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Nt,yt.width,yt.height,dt.depth,0,bt,Gt,yt.data)}else{X&&ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,$t[0].width,$t[0].height);for(let ut=0,lt=$t.length;ut<lt;ut++)yt=$t[ut],M.format!==jn?bt!==null?X?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,yt.width,yt.height,bt,Gt,yt.data):e.texImage2D(i.TEXTURE_2D,ut,Nt,yt.width,yt.height,0,bt,Gt,yt.data)}else if(M.isDataArrayTexture)if(X){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,dt.width,dt.height,dt.depth),mt)if(M.layerUpdates.size>0){const ut=sf(dt.width,dt.height,M.format,M.type);for(const lt of M.layerUpdates){const Ct=dt.data.subarray(lt*ut/dt.data.BYTES_PER_ELEMENT,(lt+1)*ut/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,dt.width,dt.height,1,bt,Gt,Ct)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,bt,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,bt,Gt,dt.data);else if(M.isData3DTexture)X?(ft&&e.texStorage3D(i.TEXTURE_3D,Tt,Nt,dt.width,dt.height,dt.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,bt,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,bt,Gt,dt.data);else if(M.isFramebufferTexture){if(ft)if(X)e.texStorage2D(i.TEXTURE_2D,Tt,Nt,dt.width,dt.height);else{let ut=dt.width,lt=dt.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Nt,ut,lt,0,bt,Gt,null),ut>>=1,lt>>=1}}else if($t.length>0){if(X&&ft){const ut=Ee($t[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Nt,ut.width,ut.height)}for(let ut=0,lt=$t.length;ut<lt;ut++)yt=$t[ut],X?mt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt,Gt,yt):e.texImage2D(i.TEXTURE_2D,ut,Nt,bt,Gt,yt);M.generateMipmaps=!1}else if(X){if(ft){const ut=Ee(dt);e.texStorage2D(i.TEXTURE_2D,Tt,Nt,ut.width,ut.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,bt,Gt,dt);b(M)&&v(it),Dt.__version=tt.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version}function at(k,M,K){if(M.image.length!==6)return;const it=ht(k,M),ct=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+K);const tt=n.get(ct);if(ct.version!==tt.__version||it===!0){e.activeTexture(i.TEXTURE0+K);const Dt=ce.getPrimaries(ce.workingColorSpace),_t=M.colorSpace===br?null:ce.getPrimaries(M.colorSpace),It=M.colorSpace===br||Dt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ut=M.isCompressedTexture||M.image[0].isCompressedTexture,dt=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let lt=0;lt<6;lt++)!Ut&&!dt?bt[lt]=y(M.image[lt],!0,r.maxCubemapSize):bt[lt]=dt?M.image[lt].image:M.image[lt],bt[lt]=Ie(M,bt[lt]);const Gt=bt[0],Nt=s.convert(M.format,M.colorSpace),yt=s.convert(M.type),$t=L(M.internalFormat,Nt,yt,M.colorSpace),X=M.isVideoTexture!==!0,ft=tt.__version===void 0||it===!0,mt=ct.dataReady;let Tt=N(M,Gt);st(i.TEXTURE_CUBE_MAP,M);let ut;if(Ut){X&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,$t,Gt.width,Gt.height);for(let lt=0;lt<6;lt++){ut=bt[lt].mipmaps;for(let Ct=0;Ct<ut.length;Ct++){const qt=ut[Ct];M.format!==jn?Nt!==null?X?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,0,0,qt.width,qt.height,Nt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,$t,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,0,0,qt.width,qt.height,Nt,yt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,$t,qt.width,qt.height,0,Nt,yt,qt.data)}}}else{if(ut=M.mipmaps,X&&ft){ut.length>0&&Tt++;const lt=Ee(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,$t,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(dt){X?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,bt[lt].width,bt[lt].height,Nt,yt,bt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,bt[lt].width,bt[lt].height,0,Nt,yt,bt[lt].data);for(let Ct=0;Ct<ut.length;Ct++){const ue=ut[Ct].image[lt].image;X?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,0,0,ue.width,ue.height,Nt,yt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,$t,ue.width,ue.height,0,Nt,yt,ue.data)}}else{X?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,yt,bt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Nt,yt,bt[lt]);for(let Ct=0;Ct<ut.length;Ct++){const qt=ut[Ct];X?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,0,0,Nt,yt,qt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,$t,Nt,yt,qt.image[lt])}}}b(M)&&v(i.TEXTURE_CUBE_MAP),tt.__version=ct.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version}function xt(k,M,K,it,ct,tt){const Dt=s.convert(K.format,K.colorSpace),_t=s.convert(K.type),It=L(K.internalFormat,Dt,_t,K.colorSpace),Ut=n.get(M),dt=n.get(K);if(dt.__renderTarget=M,!Ut.__hasExternalTextures){const bt=Math.max(1,M.width>>tt),Gt=Math.max(1,M.height>>tt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,tt,It,bt,Gt,M.depth,0,Dt,_t,null):e.texImage2D(ct,tt,It,bt,Gt,0,Dt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,k),Rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ct,dt.__webglTexture,0,ve(M)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ct,dt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(k,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,k),M.depthBuffer){const it=M.depthTexture,ct=it&&it.isDepthTexture?it.type:null,tt=A(M.stencilBuffer,ct),Dt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ve(M);Rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,tt,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,tt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,k)}else{const it=M.textures;for(let ct=0;ct<it.length;ct++){const tt=it[ct],Dt=s.convert(tt.format,tt.colorSpace),_t=s.convert(tt.type),It=L(tt.internalFormat,Dt,_t,tt.colorSpace),Ut=ve(M);K&&Rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,It,M.width,M.height):Rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,It,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,It,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(k,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,k),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(M.depthTexture);it.__renderTarget=M,(!it.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const ct=it.__webglTexture,tt=ve(M);if(M.depthTexture.format===Po)Rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(M.depthTexture.format===Ro)Rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Bt(k){const M=n.get(k),K=k.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==k.depthTexture){const it=k.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const ct=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),M.__depthDisposeCallback=ct}M.__boundDepthTexture=it}if(k.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const it=k.texture.mipmaps;it&&it.length>0?vt(M.__webglFramebuffer[0],k):vt(M.__webglFramebuffer,k)}else if(K){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=i.createRenderbuffer(),Lt(M.__webglDepthbuffer[it],k,!1);else{const ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,tt)}}else{const it=k.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Lt(M.__webglDepthbuffer,k,!1);else{const ct=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(k,M,K){const it=n.get(k);M!==void 0&&xt(it.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Bt(k)}function B(k){const M=k.texture,K=n.get(k),it=n.get(M);k.addEventListener("dispose",O);const ct=k.textures,tt=k.isWebGLCubeRenderTarget===!0,Dt=ct.length>1;if(Dt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,a.memory.textures++),tt){K.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[_t]=[];for(let It=0;It<M.mipmaps.length;It++)K.__webglFramebuffer[_t][It]=i.createFramebuffer()}else K.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)K.__webglFramebuffer[_t]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let _t=0,It=ct.length;_t<It;_t++){const Ut=n.get(ct[_t]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(k.samples>0&&Rt(k)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const It=ct[_t];K.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[_t]);const Ut=s.convert(It.format,It.colorSpace),dt=s.convert(It.type),bt=L(It.internalFormat,Ut,dt,It.colorSpace,k.isXRRenderTarget===!0),Gt=ve(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,bt,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,K.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(K.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),st(i.TEXTURE_CUBE_MAP,M);for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)xt(K.__webglFramebuffer[_t][It],k,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It);else xt(K.__webglFramebuffer[_t],k,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);b(M)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let _t=0,It=ct.length;_t<It;_t++){const Ut=ct[_t],dt=n.get(Ut);let bt=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(bt=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,dt.__webglTexture),st(bt,Ut),xt(K.__webglFramebuffer,k,Ut,i.COLOR_ATTACHMENT0+_t,bt,0),b(Ut)&&v(bt)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(_t=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,it.__webglTexture),st(_t,M),M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)xt(K.__webglFramebuffer[It],k,M,i.COLOR_ATTACHMENT0,_t,It);else xt(K.__webglFramebuffer,k,M,i.COLOR_ATTACHMENT0,_t,0);b(M)&&v(_t),e.unbindTexture()}k.depthBuffer&&Bt(k)}function Se(k){const M=k.textures;for(let K=0,it=M.length;K<it;K++){const ct=M[K];if(b(ct)){const tt=P(k),Dt=n.get(ct).__webglTexture;e.bindTexture(tt,Dt),v(tt),e.unbindTexture()}}}const jt=[],Xt=[];function At(k){if(k.samples>0){if(Rt(k)===!1){const M=k.textures,K=k.width,it=k.height;let ct=i.COLOR_BUFFER_BIT;const tt=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(k),_t=M.length>1;if(_t)for(let Ut=0;Ut<M.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const It=k.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Ut=0;Ut<M.length;Ut++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ut]);const dt=n.get(M[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,K,it,0,0,K,it,ct,i.NEAREST),d===!0&&(jt.length=0,Xt.length=0,jt.push(i.COLOR_ATTACHMENT0+Ut),k.depthBuffer&&k.resolveDepthBuffer===!1&&(jt.push(tt),Xt.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Ut=0;Ut<M.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ut]);const dt=n.get(M[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&d){const M=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ve(k){return Math.min(r.maxSamples,k.samples)}function Rt(k){const M=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Kt(k){const M=a.render.frame;f.get(k)!==M&&(f.set(k,M),k.update())}function Ie(k,M){const K=k.colorSpace,it=k.format,ct=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||K!==Is&&K!==br&&(ce.getTransfer(K)===me?(it!==jn||ct!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function Ee(k){return typeof HTMLImageElement!="undefined"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame!="undefined"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=D,this.resetTextureUnits=j,this.setTexture2D=F,this.setTexture2DArray=C,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=se,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Rt}function CT(i,t){function e(n,r){let s;const a=ce.getTransfer(r);if(n===si)return i.UNSIGNED_BYTE;if(n===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dm)return i.BYTE;if(n===fm)return i.SHORT;if(n===Co)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===Dr)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===_m)return i.ALPHA;if(n===gm)return i.RGB;if(n===jn)return i.RGBA;if(n===Po)return i.DEPTH_COMPONENT;if(n===Ro)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===vm)return i.RG;if(n===ph)return i.RG_INTEGER;if(n===mh)return i.RGBA_INTEGER;if(n===Ra||n===Da||n===La||n===Ia)if(a===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ou||n===au)return a===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===bu||n===yu||n===wu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===du)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wu)return a===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Su||n===Mu||n===Eu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Su)return a===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===Cu||n===Au||n===Pu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Tu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const AT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PT=`
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

}`;class RT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Lm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:AT,fragmentShader:PT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wn(new ol(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends Nr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,l="local-floor",d=1,h=null,f=null,m=null,_=null,g=null,w=null;const y=typeof XRWebGLBinding!="undefined",b=new RT,v={},P=e.getContextAttributes();let L=null,A=null;const N=[],U=[],O=new kt;let V=null;const E=new Fn;E.viewport=new Re;const I=new Fn;I.viewport=new Re;const H=[E,I],j=new $y;let D=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let at=N[nt];return at===void 0&&(at=new mc,N[nt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(nt){let at=N[nt];return at===void 0&&(at=new mc,N[nt]=at),at.getGripSpace()},this.getHand=function(nt){let at=N[nt];return at===void 0&&(at=new mc,N[nt]=at),at.getHandSpace()};function F(nt){const at=U.indexOf(nt.inputSource);if(at===-1)return;const xt=N[at];xt!==void 0&&(xt.update(nt.inputSource,nt.frame,h||a),xt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function C(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",z);for(let nt=0;nt<N.length;nt++){const at=U[nt];at!==null&&(U[nt]=null,N[nt].disconnect(at))}D=null,T=null,b.reset();for(const nt in v)delete v[nt];t.setRenderTarget(L),g=null,_=null,m=null,r=null,A=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(V),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){l=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(L=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",C),r.addEventListener("inputsourceschange",z),P.xrCompatible!==!0&&await e.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(O),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Lt=null,vt=null;P.depth&&(vt=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=P.stencil?Ro:Po,Lt=P.stencil?Ao:Dr);const Bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};m=this.getBinding(),_=m.createProjectionLayer(Bt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new Kn(_.textureWidth,_.textureHeight,{format:jn,type:si,depthTexture:new Dm(_.textureWidth,_.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const xt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new Kn(g.framebufferWidth,g.framebufferHeight,{format:jn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),h=null,a=await r.requestReferenceSpace(l),Mt.setContext(r),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(nt){for(let at=0;at<nt.removed.length;at++){const xt=nt.removed[at],Lt=U.indexOf(xt);Lt>=0&&(U[Lt]=null,N[Lt].disconnect(xt))}for(let at=0;at<nt.added.length;at++){const xt=nt.added[at];let Lt=U.indexOf(xt);if(Lt===-1){for(let Bt=0;Bt<N.length;Bt++)if(Bt>=U.length){U.push(xt),Lt=Bt;break}else if(U[Bt]===null){U[Bt]=xt,Lt=Bt;break}if(Lt===-1)break}const vt=N[Lt];vt&&vt.connect(xt)}}const G=new $,et=new $;function rt(nt,at,xt){G.setFromMatrixPosition(at.matrixWorld),et.setFromMatrixPosition(xt.matrixWorld);const Lt=G.distanceTo(et),vt=at.projectionMatrix.elements,Bt=xt.projectionMatrix.elements,se=vt[14]/(vt[10]-1),B=vt[14]/(vt[10]+1),Se=(vt[9]+1)/vt[5],jt=(vt[9]-1)/vt[5],Xt=(vt[8]-1)/vt[0],At=(Bt[8]+1)/Bt[0],ve=se*Xt,Rt=se*At,Kt=Lt/(-Xt+At),Ie=Kt*-Xt;if(at.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ie),nt.translateZ(Kt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),vt[10]===-1)nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Ee=se+Kt,k=B+Kt,M=ve-Ie,K=Rt+(Lt-Ie),it=Se*B/k*Ee,ct=jt*B/k*Ee;nt.projectionMatrix.makePerspective(M,K,it,ct,Ee,k),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ot(nt,at){at===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(at.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let at=nt.near,xt=nt.far;b.texture!==null&&(b.depthNear>0&&(at=b.depthNear),b.depthFar>0&&(xt=b.depthFar)),j.near=I.near=E.near=at,j.far=I.far=E.far=xt,(D!==j.near||T!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),D=j.near,T=j.far),j.layers.mask=nt.layers.mask|6,E.layers.mask=j.layers.mask&3,I.layers.mask=j.layers.mask&5;const Lt=nt.parent,vt=j.cameras;ot(j,Lt);for(let Bt=0;Bt<vt.length;Bt++)ot(vt[Bt],Lt);vt.length===2?rt(j,E,I):j.projectionMatrix.copy(E.projectionMatrix),st(nt,j,Lt)};function st(nt,at,xt){xt===null?nt.matrix.copy(at.matrixWorld):(nt.matrix.copy(xt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(at.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(at.projectionMatrix),nt.projectionMatrixInverse.copy(at.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Do*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&g===null))return d},this.setFoveation=function(nt){d=nt,_!==null&&(_.fixedFoveation=nt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=nt)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(j)},this.getCameraTexture=function(nt){return v[nt]};let ht=null;function Wt(nt,at){if(f=at.getViewerPose(h||a),w=at,f!==null){const xt=f.views;g!==null&&(t.setRenderTargetFramebuffer(A,g.framebuffer),t.setRenderTarget(A));let Lt=!1;xt.length!==j.cameras.length&&(j.cameras.length=0,Lt=!0);for(let B=0;B<xt.length;B++){const Se=xt[B];let jt=null;if(g!==null)jt=g.getViewport(Se);else{const At=m.getViewSubImage(_,Se);jt=At.viewport,B===0&&(t.setRenderTargetTextures(A,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(A))}let Xt=H[B];Xt===void 0&&(Xt=new Fn,Xt.layers.enable(B),Xt.viewport=new Re,H[B]=Xt),Xt.matrix.fromArray(Se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(jt.x,jt.y,jt.width,jt.height),B===0&&(j.matrix.copy(Xt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Lt===!0&&j.cameras.push(Xt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){m=n.getBinding();const B=m.getDepthInformation(xt[0]);B&&B.isValid&&B.texture&&b.init(B,r.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),m=n.getBinding();for(let B=0;B<xt.length;B++){const Se=xt[B].camera;if(Se){let jt=v[Se];jt||(jt=new Lm,v[Se]=jt);const Xt=m.getCameraImage(Se);jt.sourceTexture=Xt}}}}for(let xt=0;xt<N.length;xt++){const Lt=U[xt],vt=N[xt];Lt!==null&&vt!==void 0&&vt.update(Lt,at,h||a)}ht&&ht(nt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),w=null}const Mt=new Im;Mt.setAnimationLoop(Wt),this.setAnimationLoop=function(nt){ht=nt},this.dispose=function(){}}}const mr=new oi,LT=new Ae;function IT(i,t){function e(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function n(b,v){v.color.getRGB(b.fogColor.value,Am(i)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function r(b,v,P,L,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(b,v):v.isMeshToonMaterial?(s(b,v),m(b,v)):v.isMeshPhongMaterial?(s(b,v),f(b,v)):v.isMeshStandardMaterial?(s(b,v),_(b,v),v.isMeshPhysicalMaterial&&g(b,v,A)):v.isMeshMatcapMaterial?(s(b,v),w(b,v)):v.isMeshDepthMaterial?s(b,v):v.isMeshDistanceMaterial?(s(b,v),y(b,v)):v.isMeshNormalMaterial?s(b,v):v.isLineBasicMaterial?(a(b,v),v.isLineDashedMaterial&&l(b,v)):v.isPointsMaterial?d(b,v,P,L):v.isSpriteMaterial?h(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,e(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,e(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,e(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===_n&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,e(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===_n&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,e(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,e(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const P=t.get(v),L=P.envMap,A=P.envMapRotation;L&&(b.envMap.value=L,mr.copy(A),mr.x*=-1,mr.y*=-1,mr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),b.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(mr)),b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,b.aoMapTransform))}function a(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,e(v.map,b.mapTransform))}function l(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function d(b,v,P,L){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*P,b.scale.value=L*.5,v.map&&(b.map.value=v.map,e(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,e(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function h(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,e(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,e(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function f(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function m(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function _(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function g(b,v,P){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===_n&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,v){v.matcap&&(b.matcap.value=v.matcap)}function y(b,v){const P=t.get(v).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UT(i,t,e,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,L){const A=L.program;n.uniformBlockBinding(P,A)}function h(P,L){let A=r[P.id];A===void 0&&(w(P),A=f(P),r[P.id]=A,P.addEventListener("dispose",b));const N=L.program;n.updateUBOMapping(P,N);const U=t.render.frame;s[P.id]!==U&&(_(P),s[P.id]=U)}function f(P){const L=m();P.__bindingPointIndex=L;const A=i.createBuffer(),N=P.__size,U=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,A),A}function m(){for(let P=0;P<l;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const L=r[P.id],A=P.uniforms,N=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let U=0,O=A.length;U<O;U++){const V=Array.isArray(A[U])?A[U]:[A[U]];for(let E=0,I=V.length;E<I;E++){const H=V[E];if(g(H,U,E,N)===!0){const j=H.__offset,D=Array.isArray(H.value)?H.value:[H.value];let T=0;for(let F=0;F<D.length;F++){const C=D[F],z=y(C);typeof C=="number"||typeof C=="boolean"?(H.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,j+T,H.__data)):C.isMatrix3?(H.__data[0]=C.elements[0],H.__data[1]=C.elements[1],H.__data[2]=C.elements[2],H.__data[3]=0,H.__data[4]=C.elements[3],H.__data[5]=C.elements[4],H.__data[6]=C.elements[5],H.__data[7]=0,H.__data[8]=C.elements[6],H.__data[9]=C.elements[7],H.__data[10]=C.elements[8],H.__data[11]=0):(C.toArray(H.__data,T),T+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(P,L,A,N){const U=P.value,O=L+"_"+A;if(N[O]===void 0)return typeof U=="number"||typeof U=="boolean"?N[O]=U:N[O]=U.clone(),!0;{const V=N[O];if(typeof U=="number"||typeof U=="boolean"){if(V!==U)return N[O]=U,!0}else if(V.equals(U)===!1)return V.copy(U),!0}return!1}function w(P){const L=P.uniforms;let A=0;const N=16;for(let O=0,V=L.length;O<V;O++){const E=Array.isArray(L[O])?L[O]:[L[O]];for(let I=0,H=E.length;I<H;I++){const j=E[I],D=Array.isArray(j.value)?j.value:[j.value];for(let T=0,F=D.length;T<F;T++){const C=D[T],z=y(C),G=A%N,et=G%z.boundary,rt=G+et;A+=et,rt!==0&&N-rt<z.storage&&(A+=N-rt),j.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=z.storage}}}const U=A%N;return U>0&&(A+=N-U),P.__size=A,P.__cache={},this}function y(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function b(P){const L=P.target;L.removeEventListener("dispose",b);const A=a.indexOf(L.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[L.id]),delete r[L.id],delete s[L.id]}function v(){for(const P in r)i.deleteBuffer(r[P]);a=[],r={},s={}}return{bind:d,update:h,dispose:v}}class NT{constructor(t={}){const{canvas:e=uy(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const w=new Uint32Array(4),y=new Int32Array(4);let b=null,v=null;const P=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=Un;let U=0,O=0,V=null,E=-1,I=null;const H=new Re,j=new Re;let D=null;const T=new ne(0);let F=0,C=e.width,z=e.height,G=1,et=null,rt=null;const ot=new Re(0,0,C,z),st=new Re(0,0,C,z);let ht=!1;const Wt=new xh;let Mt=!1,nt=!1;const at=new Ae,xt=new $,Lt=new Re,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function se(){return V===null?G:1}let B=n;function Se(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),B===null){const q="webgl2";if(B=Se(q,R),B===null)throw Se(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let jt,Xt,At,ve,Rt,Kt,Ie,Ee,k,M,K,it,ct,tt,Dt,_t,It,Ut,dt,bt,Gt,Nt,yt,$t;function X(){jt=new XM(B),jt.init(),Nt=new CT(B,jt),Xt=new kM(B,jt,t,Nt),At=new ET(B,jt),Xt.reversedDepthBuffer&&_&&At.buffers.depth.setReversed(!0),ve=new jM(B),Rt=new dT,Kt=new TT(B,jt,At,Rt,Xt,Nt,ve),Ie=new VM(A),Ee=new WM(A),k=new tw(B),yt=new FM(B,k),M=new qM(B,k,ve,yt),K=new $M(B,M,k,ve),dt=new KM(B,Xt,Kt),_t=new BM(Rt),it=new hT(A,Ie,Ee,jt,Xt,yt,_t),ct=new IT(A,Rt),tt=new pT,Dt=new bT(jt),Ut=new NM(A,Ie,Ee,At,K,g,d),It=new ST(A,K,Xt),$t=new UT(B,ve,Xt,At),bt=new OM(B,jt,ve),Gt=new YM(B,jt,ve),ve.programs=it.programs,A.capabilities=Xt,A.extensions=jt,A.properties=Rt,A.renderLists=tt,A.shadowMap=It,A.state=At,A.info=ve}X();const ft=new DT(A,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(C,z,!1))},this.getSize=function(R){return R.set(C,z)},this.setSize=function(R,q,Q=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,z=q,e.width=Math.floor(R*G),e.height=Math.floor(q*G),Q===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(C*G,z*G).floor()},this.setDrawingBufferSize=function(R,q,Q){C=R,z=q,G=Q,e.width=Math.floor(R*Q),e.height=Math.floor(q*Q),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,q,Q,J){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,q,Q,J),At.viewport(H.copy(ot).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(st)},this.setScissor=function(R,q,Q,J){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,q,Q,J),At.scissor(j.copy(st).multiplyScalar(G).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){At.setScissorTest(ht=R)},this.setOpaqueSort=function(R){et=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,Q=!0){let J=0;if(R){let Y=!1;if(V!==null){const pt=V.texture.format;Y=pt===mh||pt===ph||pt===fh}if(Y){const pt=V.texture.type,St=pt===si||pt===Dr||pt===Co||pt===Ao||pt===uh||pt===hh,Pt=Ut.getClearColor(),Et=Ut.getClearAlpha(),Vt=Pt.r,zt=Pt.g,Ot=Pt.b;St?(w[0]=Vt,w[1]=zt,w[2]=Ot,w[3]=Et,B.clearBufferuiv(B.COLOR,0,w)):(y[0]=Vt,y[1]=zt,y[2]=Ot,y[3]=Et,B.clearBufferiv(B.COLOR,0,y))}else J|=B.COLOR_BUFFER_BIT}q&&(J|=B.DEPTH_BUFFER_BIT),Q&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ut.dispose(),tt.dispose(),Dt.dispose(),Rt.dispose(),Ie.dispose(),Ee.dispose(),K.dispose(),yt.dispose(),$t.dispose(),it.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Cn),ft.removeEventListener("sessionend",ko),ai.stop()};function mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=ve.autoReset,q=It.enabled,Q=It.autoUpdate,J=It.needsUpdate,Y=It.type;X(),ve.autoReset=R,It.enabled=q,It.autoUpdate=Q,It.needsUpdate=J,It.type=Y}function ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const q=R.target;q.removeEventListener("dispose",lt),Ct(q)}function Ct(R){qt(R),Rt.remove(R)}function qt(R){const q=Rt.get(R).programs;q!==void 0&&(q.forEach(function(Q){it.releaseProgram(Q)}),R.isShaderMaterial&&it.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,Q,J,Y,pt){q===null&&(q=vt);const St=Y.isMesh&&Y.matrixWorld.determinant()<0,Pt=ll(R,q,Q,J,Y);At.setMaterial(J,St);let Et=Q.index,Vt=1;if(J.wireframe===!0){if(Et=M.getWireframeAttribute(Q),Et===void 0)return;Vt=2}const zt=Q.drawRange,Ot=Q.attributes.position;let Qt=zt.start*Vt,he=(zt.start+zt.count)*Vt;pt!==null&&(Qt=Math.max(Qt,pt.start*Vt),he=Math.min(he,(pt.start+pt.count)*Vt)),Et!==null?(Qt=Math.max(Qt,0),he=Math.min(he,Et.count)):Ot!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Ot.count));const Te=he-Qt;if(Te<0||Te===1/0)return;yt.setup(Y,J,Pt,Q,Et);let xe,fe=bt;if(Et!==null&&(xe=k.get(Et),fe=Gt,fe.setIndex(xe)),Y.isMesh)J.wireframe===!0?(At.setLineWidth(J.wireframeLinewidth*se()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(Y.isLine){let Ft=J.linewidth;Ft===void 0&&(Ft=1),At.setLineWidth(Ft*se()),Y.isLineSegments?fe.setMode(B.LINES):Y.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else Y.isPoints?fe.setMode(B.POINTS):Y.isSprite&&fe.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))fe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ft=Y._multiDrawStarts,ae=Y._multiDrawCounts,te=Y._multiDrawCount,be=Et?k.get(Et).bytesPerElement:1,an=Rt.get(J).currentProgram.getUniforms();for(let We=0;We<te;We++)an.setValue(B,"_gl_DrawID",We),fe.render(Ft[We]/be,ae[We])}else if(Y.isInstancedMesh)fe.renderInstances(Qt,Te,Y.count);else if(Q.isInstancedBufferGeometry){const Ft=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ae=Math.min(Q.instanceCount,Ft);fe.renderInstances(Qt,Te,ae)}else fe.render(Qt,Te)};function ue(R,q,Q){R.transparent===!0&&R.side===ei&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,nr(R,q,Q),R.side=Qi,R.needsUpdate=!0,nr(R,q,Q),R.side=ei):nr(R,q,Q)}this.compile=function(R,q,Q=null){Q===null&&(Q=R),v=Dt.get(Q),v.init(q),L.push(v),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),R!==Q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const J=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const pt=Y.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const Pt=pt[St];ue(Pt,Q,Y),J.add(Pt)}else ue(pt,Q,Y),J.add(pt)}),v=L.pop(),J},this.compileAsync=function(R,q,Q=null){const J=this.compile(R,q,Q);return new Promise(Y=>{function pt(){if(J.forEach(function(St){Rt.get(St).currentProgram.isReady()&&J.delete(St)}),J.size===0){Y(R);return}setTimeout(pt,10)}jt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let oe=null;function gn(R){oe&&oe(R)}function Cn(){ai.stop()}function ko(){ai.start()}const ai=new Im;ai.setAnimationLoop(gn),typeof self!="undefined"&&ai.setContext(self),this.setAnimationLoop=function(R){oe=R,ft.setAnimationLoop(R),R===null?ai.stop():ai.start()},ft.addEventListener("sessionstart",Cn),ft.addEventListener("sessionend",ko),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(q),q=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,q,V),v=Dt.get(R,L.length),v.init(q),L.push(v),at.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Wt.setFromProjectionMatrix(at,ri,q.reversedDepth),nt=this.localClippingEnabled,Mt=_t.init(this.clippingPlanes,nt),b=tt.get(R,P.length),b.init(),P.push(b),ft.enabled===!0&&ft.isPresenting===!0){const pt=A.xr.getDepthSensingMesh();pt!==null&&zs(pt,q,-1/0,A.sortObjects)}zs(R,q,0,A.sortObjects),b.finish(),A.sortObjects===!0&&b.sort(et,rt),Bt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Bt&&Ut.addToRenderList(b,R),this.info.render.frame++,Mt===!0&&_t.beginShadows();const Q=v.state.shadowsArray;It.render(Q,R,q),Mt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=b.opaque,Y=b.transmissive;if(v.setupLights(),q.isArrayCamera){const pt=q.cameras;if(Y.length>0)for(let St=0,Pt=pt.length;St<Pt;St++){const Et=pt[St];Bo(J,Y,R,Et)}Bt&&Ut.render(R);for(let St=0,Pt=pt.length;St<Pt;St++){const Et=pt[St];Or(b,R,Et,Et.viewport)}}else Y.length>0&&Bo(J,Y,R,q),Bt&&Ut.render(R),Or(b,R,q);V!==null&&O===0&&(Kt.updateMultisampleRenderTarget(V),Kt.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(A,R,q),yt.resetDefaultState(),E=-1,I=null,L.pop(),L.length>0?(v=L[L.length-1],Mt===!0&&_t.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?b=P[P.length-1]:b=null};function zs(R,q,Q,J){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Wt.intersectsSprite(R)){J&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);const St=K.update(R),Pt=R.material;Pt.visible&&b.push(R,St,Pt,Q,Lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Wt.intersectsObject(R))){const St=K.update(R),Pt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Lt.copy(St.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(Pt)){const Et=St.groups;for(let Vt=0,zt=Et.length;Vt<zt;Vt++){const Ot=Et[Vt],Qt=Pt[Ot.materialIndex];Qt&&Qt.visible&&b.push(R,St,Qt,Q,Lt.z,Ot)}}else Pt.visible&&b.push(R,St,Pt,Q,Lt.z,null)}}const pt=R.children;for(let St=0,Pt=pt.length;St<Pt;St++)zs(pt[St],q,Q,J)}function Or(R,q,Q,J){const Y=R.opaque,pt=R.transmissive,St=R.transparent;v.setupLightsView(Q),Mt===!0&&_t.setGlobalState(A.clippingPlanes,Q),J&&At.viewport(H.copy(J)),Y.length>0&&kr(Y,q,Q),pt.length>0&&kr(pt,q,Q),St.length>0&&kr(St,q,Q),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Bo(R,q,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new Kn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?yi:si,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const pt=v.state.transmissionRenderTarget[J.id],St=J.viewport||H;pt.setSize(St.z*A.transmissionResolutionScale,St.w*A.transmissionResolutionScale);const Pt=A.getRenderTarget(),Et=A.getActiveCubeFace(),Vt=A.getActiveMipmapLevel();A.setRenderTarget(pt),A.getClearColor(T),F=A.getClearAlpha(),F<1&&A.setClearColor(16777215,.5),A.clear(),Bt&&Ut.render(Q);const zt=A.toneMapping;A.toneMapping=Ki;const Ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),Mt===!0&&_t.setGlobalState(A.clippingPlanes,J),kr(R,Q,J),Kt.updateMultisampleRenderTarget(pt),Kt.updateRenderTargetMipmap(pt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let he=0,Te=q.length;he<Te;he++){const xe=q[he],fe=xe.object,Ft=xe.geometry,ae=xe.material,te=xe.group;if(ae.side===ei&&fe.layers.test(J.layers)){const be=ae.side;ae.side=_n,ae.needsUpdate=!0,Ai(fe,Q,J,Ft,ae,te),ae.side=be,ae.needsUpdate=!0,Qt=!0}}Qt===!0&&(Kt.updateMultisampleRenderTarget(pt),Kt.updateRenderTargetMipmap(pt))}A.setRenderTarget(Pt,Et,Vt),A.setClearColor(T,F),Ot!==void 0&&(J.viewport=Ot),A.toneMapping=zt}function kr(R,q,Q){const J=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,pt=R.length;Y<pt;Y++){const St=R[Y],Pt=St.object,Et=St.geometry,Vt=St.group;let zt=St.material;zt.allowOverride===!0&&J!==null&&(zt=J),Pt.layers.test(Q.layers)&&Ai(Pt,q,Q,Et,zt,Vt)}}function Ai(R,q,Q,J,Y,pt){R.onBeforeRender(A,q,Q,J,Y,pt),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(A,q,Q,J,R,pt),Y.transparent===!0&&Y.side===ei&&Y.forceSinglePass===!1?(Y.side=_n,Y.needsUpdate=!0,A.renderBufferDirect(Q,q,J,Y,R,pt),Y.side=Qi,Y.needsUpdate=!0,A.renderBufferDirect(Q,q,J,Y,R,pt),Y.side=ei):A.renderBufferDirect(Q,q,J,Y,R,pt),R.onAfterRender(A,q,Q,J,Y,pt)}function nr(R,q,Q){q.isScene!==!0&&(q=vt);const J=Rt.get(R),Y=v.state.lights,pt=v.state.shadowsArray,St=Y.state.version,Pt=it.getParameters(R,Y.state,pt,q,Q),Et=it.getProgramCacheKey(Pt);let Vt=J.programs;J.environment=R.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(R.isMeshStandardMaterial?Ee:Ie).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",lt),Vt=new Map,J.programs=Vt);let zt=Vt.get(Et);if(zt!==void 0){if(J.currentProgram===zt&&J.lightsStateVersion===St)return Br(R,Pt),zt}else Pt.uniforms=it.getUniforms(R),R.onBeforeCompile(Pt,A),zt=it.acquireProgram(Pt,Et),Vt.set(Et,zt),J.uniforms=Pt.uniforms;const Ot=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ot.clippingPlanes=_t.uniform),Br(R,Pt),J.needsLights=zo(R),J.lightsStateVersion=St,J.needsLights&&(Ot.ambientLightColor.value=Y.state.ambient,Ot.lightProbe.value=Y.state.probe,Ot.directionalLights.value=Y.state.directional,Ot.directionalLightShadows.value=Y.state.directionalShadow,Ot.spotLights.value=Y.state.spot,Ot.spotLightShadows.value=Y.state.spotShadow,Ot.rectAreaLights.value=Y.state.rectArea,Ot.ltc_1.value=Y.state.rectAreaLTC1,Ot.ltc_2.value=Y.state.rectAreaLTC2,Ot.pointLights.value=Y.state.point,Ot.pointLightShadows.value=Y.state.pointShadow,Ot.hemisphereLights.value=Y.state.hemi,Ot.directionalShadowMap.value=Y.state.directionalShadowMap,Ot.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ot.spotShadowMap.value=Y.state.spotShadowMap,Ot.spotLightMatrix.value=Y.state.spotLightMatrix,Ot.spotLightMap.value=Y.state.spotLightMap,Ot.pointShadowMap.value=Y.state.pointShadowMap,Ot.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=zt,J.uniformsList=null,zt}function Vo(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ua.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Br(R,q){const Q=Rt.get(R);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function ll(R,q,Q,J,Y){q.isScene!==!0&&(q=vt),Kt.resetTextureUnits();const pt=q.fog,St=J.isMeshStandardMaterial?q.environment:null,Pt=V===null?A.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Is,Et=(J.isMeshStandardMaterial?Ee:Ie).get(J.envMap||St),Vt=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,zt=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ot=!!Q.morphAttributes.position,Qt=!!Q.morphAttributes.normal,he=!!Q.morphAttributes.color;let Te=Ki;J.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Te=A.toneMapping);const xe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,fe=xe!==void 0?xe.length:0,Ft=Rt.get(J),ae=v.state.lights;if(Mt===!0&&(nt===!0||R!==I)){const Be=R===I&&J.id===E;_t.setState(J,R,Be)}let te=!1;J.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ae.state.version||Ft.outputColorSpace!==Pt||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==Et||J.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==_t.numPlanes||Ft.numIntersection!==_t.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==zt||Ft.morphTargets!==Ot||Ft.morphNormals!==Qt||Ft.morphColors!==he||Ft.toneMapping!==Te||Ft.morphTargetsCount!==fe)&&(te=!0):(te=!0,Ft.__version=J.version);let be=Ft.currentProgram;te===!0&&(be=nr(J,q,Y));let an=!1,We=!1,ir=!1;const pe=be.getUniforms(),en=Ft.uniforms;if(At.useProgram(be.program)&&(an=!0,We=!0,ir=!0),J.id!==E&&(E=J.id,We=!0),an||I!==R){At.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),pe.setValue(B,"projectionMatrix",R.projectionMatrix),pe.setValue(B,"viewMatrix",R.matrixWorldInverse);const Xe=pe.map.cameraPosition;Xe!==void 0&&Xe.setValue(B,xt.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&pe.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,We=!0,ir=!0)}if(Y.isSkinnedMesh){pe.setOptional(B,Y,"bindMatrix"),pe.setOptional(B,Y,"bindMatrixInverse");const Be=Y.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),pe.setValue(B,"boneTexture",Be.boneTexture,Kt))}Y.isBatchedMesh&&(pe.setOptional(B,Y,"batchingTexture"),pe.setValue(B,"batchingTexture",Y._matricesTexture,Kt),pe.setOptional(B,Y,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",Y._indirectTexture,Kt),pe.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",Y._colorsTexture,Kt));const ln=Q.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&dt.update(Y,Q,be),(We||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,pe.setValue(B,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(en.envMap.value=Et,en.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(en.envMapIntensity.value=q.environmentIntensity),We&&(pe.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ft.needsLights&&Pi(en,ir),pt&&J.fog===!0&&ct.refreshFogUniforms(en,pt),ct.refreshMaterialUniforms(en,J,G,z,v.state.transmissionRenderTarget[R.id]),Ua.upload(B,Vo(Ft),en,Kt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ua.upload(B,Vo(Ft),en,Kt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&pe.setValue(B,"center",Y.center),pe.setValue(B,"modelViewMatrix",Y.modelViewMatrix),pe.setValue(B,"normalMatrix",Y.normalMatrix),pe.setValue(B,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Be=J.uniformsGroups;for(let Xe=0,Hs=Be.length;Xe<Hs;Xe++){const An=Be[Xe];$t.update(An,be),$t.bind(An,be)}}return be}function Pi(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function zo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,q,Q){const J=Rt.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Rt.get(R.texture).__webglTexture=q,Rt.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const Q=Rt.get(R);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0};const Ho=B.createFramebuffer();this.setRenderTarget=function(R,q=0,Q=0){V=R,U=q,O=Q;let J=!0,Y=null,pt=!1,St=!1;if(R){const Et=Rt.get(R);if(Et.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(Et.__webglFramebuffer===void 0)Kt.setupRenderTarget(R);else if(Et.__hasExternalTextures)Kt.rebindTextures(R,Rt.get(R.texture).__webglTexture,Rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ot=R.depthTexture;if(Et.__boundDepthTexture!==Ot){if(Ot!==null&&Rt.has(Ot)&&(R.width!==Ot.image.width||R.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(R)}}const Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const zt=Rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[q])?Y=zt[q][Q]:Y=zt[q],pt=!0):R.samples>0&&Kt.useMultisampledRTT(R)===!1?Y=Rt.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?Y=zt[Q]:Y=zt,H.copy(R.viewport),j.copy(R.scissor),D=R.scissorTest}else H.copy(ot).multiplyScalar(G).floor(),j.copy(st).multiplyScalar(G).floor(),D=ht;if(Q!==0&&(Y=Ho),At.bindFramebuffer(B.FRAMEBUFFER,Y)&&J&&At.drawBuffers(R,Y),At.viewport(H),At.scissor(j),At.setScissorTest(D),pt){const Et=Rt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et.__webglTexture,Q)}else if(St){const Et=q;for(let Vt=0;Vt<R.textures.length;Vt++){const zt=Rt.get(R.textures[Vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Vt,zt.__webglTexture,Q,Et)}}else if(R!==null&&Q!==0){const Et=Rt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Et.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(R,q,Q,J,Y,pt,St,Pt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){At.bindFramebuffer(B.FRAMEBUFFER,Et);try{const Vt=R.textures[Pt],zt=Vt.format,Ot=Vt.type;if(!Xt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-J&&Q>=0&&Q<=R.height-Y&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt),B.readPixels(q,Q,J,Y,Nt.convert(zt),Nt.convert(Ot),pt))}finally{const Vt=V!==null?Rt.get(V).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,q,Q,J,Y,pt,St,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(q>=0&&q<=R.width-J&&Q>=0&&Q<=R.height-Y){At.bindFramebuffer(B.FRAMEBUFFER,Et);const Vt=R.textures[Pt],zt=Vt.format,Ot=Vt.type;if(!Xt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Qt),B.bufferData(B.PIXEL_PACK_BUFFER,pt.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pt),B.readPixels(q,Q,J,Y,Nt.convert(zt),Nt.convert(Ot),0);const he=V!==null?Rt.get(V).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,he);const Te=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hy(B,Te,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Qt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pt),B.deleteBuffer(Qt),B.deleteSync(Te),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,Q=0){const J=Math.pow(2,-Q),Y=Math.floor(R.image.width*J),pt=Math.floor(R.image.height*J),St=q!==null?q.x:0,Pt=q!==null?q.y:0;Kt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,St,Pt,Y,pt),At.unbindTexture()};const cl=B.createFramebuffer(),Go=B.createFramebuffer();this.copyTextureToTexture=function(R,q,Q=null,J=null,Y=0,pt=null){pt===null&&(Y!==0?(Lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=Y,Y=0):pt=0);let St,Pt,Et,Vt,zt,Ot,Qt,he,Te;const xe=R.isCompressedTexture?R.mipmaps[pt]:R.image;if(Q!==null)St=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,Et=Q.isBox3?Q.max.z-Q.min.z:1,Vt=Q.min.x,zt=Q.min.y,Ot=Q.isBox3?Q.min.z:0;else{const ln=Math.pow(2,-Y);St=Math.floor(xe.width*ln),Pt=Math.floor(xe.height*ln),R.isDataArrayTexture?Et=xe.depth:R.isData3DTexture?Et=Math.floor(xe.depth*ln):Et=1,Vt=0,zt=0,Ot=0}J!==null?(Qt=J.x,he=J.y,Te=J.z):(Qt=0,he=0,Te=0);const fe=Nt.convert(q.format),Ft=Nt.convert(q.type);let ae;q.isData3DTexture?(Kt.setTexture3D(q,0),ae=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Kt.setTexture2DArray(q,0),ae=B.TEXTURE_2D_ARRAY):(Kt.setTexture2D(q,0),ae=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const te=B.getParameter(B.UNPACK_ROW_LENGTH),be=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),We=B.getParameter(B.UNPACK_SKIP_ROWS),ir=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Vt),B.pixelStorei(B.UNPACK_SKIP_ROWS,zt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const pe=R.isDataArrayTexture||R.isData3DTexture,en=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Rt.get(R),Be=Rt.get(q),Xe=Rt.get(ln.__renderTarget),Hs=Rt.get(Be.__renderTarget);At.bindFramebuffer(B.READ_FRAMEBUFFER,Xe.__webglFramebuffer),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let An=0;An<Et;An++)pe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(R).__webglTexture,Y,Ot+An),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(q).__webglTexture,pt,Te+An)),B.blitFramebuffer(Vt,zt,St,Pt,Qt,he,St,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Rt.has(R)){const ln=Rt.get(R),Be=Rt.get(q);At.bindFramebuffer(B.READ_FRAMEBUFFER,cl),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,Go);for(let Xe=0;Xe<Et;Xe++)pe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,Y,Ot+Xe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,Y),en?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,pt,Te+Xe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,pt),Y!==0?B.blitFramebuffer(Vt,zt,St,Pt,Qt,he,St,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):en?B.copyTexSubImage3D(ae,pt,Qt,he,Te+Xe,Vt,zt,St,Pt):B.copyTexSubImage2D(ae,pt,Qt,he,Vt,zt,St,Pt);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else en?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(ae,pt,Qt,he,Te,St,Pt,Et,fe,Ft,xe.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(ae,pt,Qt,he,Te,St,Pt,Et,fe,xe.data):B.texSubImage3D(ae,pt,Qt,he,Te,St,Pt,Et,fe,Ft,xe):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pt,Qt,he,St,Pt,fe,Ft,xe.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pt,Qt,he,xe.width,xe.height,fe,xe.data):B.texSubImage2D(B.TEXTURE_2D,pt,Qt,he,St,Pt,fe,Ft,xe);B.pixelStorei(B.UNPACK_ROW_LENGTH,te),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,be),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ir),pt===0&&q.generateMipmaps&&B.generateMipmap(ae),At.unbindTexture()},this.initRenderTarget=function(R){Rt.get(R).__webglFramebuffer===void 0&&Kt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Kt.setTextureCube(R,0):R.isData3DTexture?Kt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Kt.setTexture2DArray(R,0):Kt.setTexture2D(R,0),At.unbindTexture()},this.resetState=function(){U=0,O=0,V=null,At.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const Na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Oo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FT=new bh(-1,1,1,-1,0,1);class OT extends Ci{constructor(){super(),this.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Si([0,2,0,0,2,0],2))}}const kT=new OT;class km{constructor(t){this._mesh=new wn(kT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class BT extends Oo{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof sn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=el.clone(t.uniforms),this.material=new sn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new km(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Rf extends Oo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class VT extends Oo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zT{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new kt);this._width=n.width,this._height=n.height,e=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new BT(Na),this.copyPass.material.blending=bi,this.clock=new Zy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const l=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Rf!==void 0&&(a instanceof Rf?n=!0:a instanceof VT&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HT extends Oo{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const GT={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ns extends Oo{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(s,a,{type:yi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const m=new Kn(s,a,{type:yi});m.texture.name="UnrealBloomPass.h"+f,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const _=new Kn(s,a,{type:yi});_.texture.name="UnrealBloomPass.v"+f,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),s=Math.round(s/2),a=Math.round(a/2)}const l=GT;this.highPassUniforms=el.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const d=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new kt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=el.clone(Na.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,blending:Hc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ne,this._oldClearAlpha=1,this._basic=new vh,this._fsQuad=new km(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new kt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[d].uniforms.direction.value=Ns.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Ns.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new sn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new sn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ns.BlurDirectionX=new kt(1,0);Ns.BlurDirectionY=new kt(0,1);const Df={type:"change"},wh={type:"start"},Bm={type:"end"},Ma=new Sm,Lf=new Hi,WT=Math.cos(70*cy.DEG2RAD),Ne=new $,hn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mc=1e-6;class XT extends Jy{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Lr,this._lastTargetPosition=new $,this._quat=new Lr().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rf,this._sphericalDelta=new rf,this._scale=1,this._panOffset=new $,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new $,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YT.bind(this),this._onPointerDown=qT.bind(this),this._onPointerUp=jT.bind(this),this._onContextMenu=e1.bind(this),this._onMouseWheel=ZT.bind(this),this._onKeyDown=JT.bind(this),this._onTouchStart=QT.bind(this),this._onTouchMove=t1.bind(this),this._onMouseDown=KT.bind(this),this._onMouseMove=$T.bind(this),this._interceptControlDown=n1.bind(this),this._interceptControlUp=i1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=_e.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=Ne.length();a=this._clampDistance(l*this._scale);const d=l-a;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),s=!!d}else if(this.object.isOrthographicCamera){const l=new $(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=d!==this.object.zoom;const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ma.origin.copy(this.object.position),Ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ma.direction))<WT?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ma.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mc||this._lastTargetPosition.distanceToSquared(this.target)>Mc?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ne.copy(r).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,l=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function YT(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bm),this.state=_e.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function KT(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case bs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case bs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(wh)}function $T(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ZT(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bm))}function JT(i){this.enabled!==!1&&this._handleKeyDown(i)}function QT(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(wh)}function t1(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function e1(i){this.enabled!==!1&&i.preventDefault()}function n1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var r1={jet:[{index:0,rgb:[0,0,131]},{index:.125,rgb:[0,60,170]},{index:.375,rgb:[5,255,255]},{index:.625,rgb:[255,255,0]},{index:.875,rgb:[250,0,0]},{index:1,rgb:[128,0,0]}],hsv:[{index:0,rgb:[255,0,0]},{index:.169,rgb:[253,255,2]},{index:.173,rgb:[247,255,2]},{index:.337,rgb:[0,252,4]},{index:.341,rgb:[0,252,10]},{index:.506,rgb:[1,249,255]},{index:.671,rgb:[2,0,253]},{index:.675,rgb:[8,0,253]},{index:.839,rgb:[255,0,251]},{index:.843,rgb:[255,0,245]},{index:1,rgb:[255,0,6]}],hot:[{index:0,rgb:[0,0,0]},{index:.3,rgb:[230,0,0]},{index:.6,rgb:[255,210,0]},{index:1,rgb:[255,255,255]}],spring:[{index:0,rgb:[255,0,255]},{index:1,rgb:[255,255,0]}],summer:[{index:0,rgb:[0,128,102]},{index:1,rgb:[255,255,102]}],autumn:[{index:0,rgb:[255,0,0]},{index:1,rgb:[255,255,0]}],winter:[{index:0,rgb:[0,0,255]},{index:1,rgb:[0,255,128]}],bone:[{index:0,rgb:[0,0,0]},{index:.376,rgb:[84,84,116]},{index:.753,rgb:[169,200,200]},{index:1,rgb:[255,255,255]}],copper:[{index:0,rgb:[0,0,0]},{index:.804,rgb:[255,160,102]},{index:1,rgb:[255,199,127]}],greys:[{index:0,rgb:[0,0,0]},{index:1,rgb:[255,255,255]}],yignbu:[{index:0,rgb:[8,29,88]},{index:.125,rgb:[37,52,148]},{index:.25,rgb:[34,94,168]},{index:.375,rgb:[29,145,192]},{index:.5,rgb:[65,182,196]},{index:.625,rgb:[127,205,187]},{index:.75,rgb:[199,233,180]},{index:.875,rgb:[237,248,217]},{index:1,rgb:[255,255,217]}],greens:[{index:0,rgb:[0,68,27]},{index:.125,rgb:[0,109,44]},{index:.25,rgb:[35,139,69]},{index:.375,rgb:[65,171,93]},{index:.5,rgb:[116,196,118]},{index:.625,rgb:[161,217,155]},{index:.75,rgb:[199,233,192]},{index:.875,rgb:[229,245,224]},{index:1,rgb:[247,252,245]}],yiorrd:[{index:0,rgb:[128,0,38]},{index:.125,rgb:[189,0,38]},{index:.25,rgb:[227,26,28]},{index:.375,rgb:[252,78,42]},{index:.5,rgb:[253,141,60]},{index:.625,rgb:[254,178,76]},{index:.75,rgb:[254,217,118]},{index:.875,rgb:[255,237,160]},{index:1,rgb:[255,255,204]}],bluered:[{index:0,rgb:[0,0,255]},{index:1,rgb:[255,0,0]}],rdbu:[{index:0,rgb:[5,10,172]},{index:.35,rgb:[106,137,247]},{index:.5,rgb:[190,190,190]},{index:.6,rgb:[220,170,132]},{index:.7,rgb:[230,145,90]},{index:1,rgb:[178,10,28]}],picnic:[{index:0,rgb:[0,0,255]},{index:.1,rgb:[51,153,255]},{index:.2,rgb:[102,204,255]},{index:.3,rgb:[153,204,255]},{index:.4,rgb:[204,204,255]},{index:.5,rgb:[255,255,255]},{index:.6,rgb:[255,204,255]},{index:.7,rgb:[255,153,255]},{index:.8,rgb:[255,102,204]},{index:.9,rgb:[255,102,102]},{index:1,rgb:[255,0,0]}],rainbow:[{index:0,rgb:[150,0,90]},{index:.125,rgb:[0,0,200]},{index:.25,rgb:[0,25,255]},{index:.375,rgb:[0,152,255]},{index:.5,rgb:[44,255,150]},{index:.625,rgb:[151,255,0]},{index:.75,rgb:[255,234,0]},{index:.875,rgb:[255,111,0]},{index:1,rgb:[255,0,0]}],portland:[{index:0,rgb:[12,51,131]},{index:.25,rgb:[10,136,186]},{index:.5,rgb:[242,211,56]},{index:.75,rgb:[242,143,56]},{index:1,rgb:[217,30,30]}],blackbody:[{index:0,rgb:[0,0,0]},{index:.2,rgb:[230,0,0]},{index:.4,rgb:[230,210,0]},{index:.7,rgb:[255,255,255]},{index:1,rgb:[160,200,255]}],earth:[{index:0,rgb:[0,0,130]},{index:.1,rgb:[0,180,180]},{index:.2,rgb:[40,210,40]},{index:.4,rgb:[230,230,50]},{index:.6,rgb:[120,70,20]},{index:1,rgb:[255,255,255]}],electric:[{index:0,rgb:[0,0,0]},{index:.15,rgb:[30,0,100]},{index:.4,rgb:[120,0,100]},{index:.6,rgb:[160,90,0]},{index:.8,rgb:[230,200,0]},{index:1,rgb:[255,250,220]}],alpha:[{index:0,rgb:[255,255,255,0]},{index:1,rgb:[255,255,255,1]}],viridis:[{index:0,rgb:[68,1,84]},{index:.13,rgb:[71,44,122]},{index:.25,rgb:[59,81,139]},{index:.38,rgb:[44,113,142]},{index:.5,rgb:[33,144,141]},{index:.63,rgb:[39,173,129]},{index:.75,rgb:[92,200,99]},{index:.88,rgb:[170,220,50]},{index:1,rgb:[253,231,37]}],inferno:[{index:0,rgb:[0,0,4]},{index:.13,rgb:[31,12,72]},{index:.25,rgb:[85,15,109]},{index:.38,rgb:[136,34,106]},{index:.5,rgb:[186,54,85]},{index:.63,rgb:[227,89,51]},{index:.75,rgb:[249,140,10]},{index:.88,rgb:[249,201,50]},{index:1,rgb:[252,255,164]}],magma:[{index:0,rgb:[0,0,4]},{index:.13,rgb:[28,16,68]},{index:.25,rgb:[79,18,123]},{index:.38,rgb:[129,37,129]},{index:.5,rgb:[181,54,122]},{index:.63,rgb:[229,80,100]},{index:.75,rgb:[251,135,97]},{index:.88,rgb:[254,194,135]},{index:1,rgb:[252,253,191]}],plasma:[{index:0,rgb:[13,8,135]},{index:.13,rgb:[75,3,161]},{index:.25,rgb:[125,3,168]},{index:.38,rgb:[168,34,150]},{index:.5,rgb:[203,70,121]},{index:.63,rgb:[229,107,93]},{index:.75,rgb:[248,148,65]},{index:.88,rgb:[253,195,40]},{index:1,rgb:[240,249,33]}],warm:[{index:0,rgb:[125,0,179]},{index:.13,rgb:[172,0,187]},{index:.25,rgb:[219,0,170]},{index:.38,rgb:[255,0,130]},{index:.5,rgb:[255,63,74]},{index:.63,rgb:[255,123,0]},{index:.75,rgb:[234,176,0]},{index:.88,rgb:[190,228,0]},{index:1,rgb:[147,255,0]}],cool:[{index:0,rgb:[125,0,179]},{index:.13,rgb:[116,0,218]},{index:.25,rgb:[98,74,237]},{index:.38,rgb:[68,146,231]},{index:.5,rgb:[0,204,197]},{index:.63,rgb:[0,247,146]},{index:.75,rgb:[0,255,88]},{index:.88,rgb:[40,255,8]},{index:1,rgb:[147,255,0]}],"rainbow-soft":[{index:0,rgb:[125,0,179]},{index:.1,rgb:[199,0,180]},{index:.2,rgb:[255,0,121]},{index:.3,rgb:[255,108,0]},{index:.4,rgb:[222,194,0]},{index:.5,rgb:[150,255,0]},{index:.6,rgb:[0,255,55]},{index:.7,rgb:[0,246,150]},{index:.8,rgb:[50,167,222]},{index:.9,rgb:[103,51,235]},{index:1,rgb:[124,0,186]}],bathymetry:[{index:0,rgb:[40,26,44]},{index:.13,rgb:[59,49,90]},{index:.25,rgb:[64,76,139]},{index:.38,rgb:[63,110,151]},{index:.5,rgb:[72,142,158]},{index:.63,rgb:[85,174,163]},{index:.75,rgb:[120,206,163]},{index:.88,rgb:[187,230,172]},{index:1,rgb:[253,254,204]}],cdom:[{index:0,rgb:[47,15,62]},{index:.13,rgb:[87,23,86]},{index:.25,rgb:[130,28,99]},{index:.38,rgb:[171,41,96]},{index:.5,rgb:[206,67,86]},{index:.63,rgb:[230,106,84]},{index:.75,rgb:[242,149,103]},{index:.88,rgb:[249,193,135]},{index:1,rgb:[254,237,176]}],chlorophyll:[{index:0,rgb:[18,36,20]},{index:.13,rgb:[25,63,41]},{index:.25,rgb:[24,91,59]},{index:.38,rgb:[13,119,72]},{index:.5,rgb:[18,148,80]},{index:.63,rgb:[80,173,89]},{index:.75,rgb:[132,196,122]},{index:.88,rgb:[175,221,162]},{index:1,rgb:[215,249,208]}],density:[{index:0,rgb:[54,14,36]},{index:.13,rgb:[89,23,80]},{index:.25,rgb:[110,45,132]},{index:.38,rgb:[120,77,178]},{index:.5,rgb:[120,113,213]},{index:.63,rgb:[115,151,228]},{index:.75,rgb:[134,185,227]},{index:.88,rgb:[177,214,227]},{index:1,rgb:[230,241,241]}],"freesurface-blue":[{index:0,rgb:[30,4,110]},{index:.13,rgb:[47,14,176]},{index:.25,rgb:[41,45,236]},{index:.38,rgb:[25,99,212]},{index:.5,rgb:[68,131,200]},{index:.63,rgb:[114,156,197]},{index:.75,rgb:[157,181,203]},{index:.88,rgb:[200,208,216]},{index:1,rgb:[241,237,236]}],"freesurface-red":[{index:0,rgb:[60,9,18]},{index:.13,rgb:[100,17,27]},{index:.25,rgb:[142,20,29]},{index:.38,rgb:[177,43,27]},{index:.5,rgb:[192,87,63]},{index:.63,rgb:[205,125,105]},{index:.75,rgb:[216,162,148]},{index:.88,rgb:[227,199,193]},{index:1,rgb:[241,237,236]}],oxygen:[{index:0,rgb:[64,5,5]},{index:.13,rgb:[106,6,15]},{index:.25,rgb:[144,26,7]},{index:.38,rgb:[168,64,3]},{index:.5,rgb:[188,100,4]},{index:.63,rgb:[206,136,11]},{index:.75,rgb:[220,174,25]},{index:.88,rgb:[231,215,44]},{index:1,rgb:[248,254,105]}],par:[{index:0,rgb:[51,20,24]},{index:.13,rgb:[90,32,35]},{index:.25,rgb:[129,44,34]},{index:.38,rgb:[159,68,25]},{index:.5,rgb:[182,99,19]},{index:.63,rgb:[199,134,22]},{index:.75,rgb:[212,171,35]},{index:.88,rgb:[221,210,54]},{index:1,rgb:[225,253,75]}],phase:[{index:0,rgb:[145,105,18]},{index:.13,rgb:[184,71,38]},{index:.25,rgb:[186,58,115]},{index:.38,rgb:[160,71,185]},{index:.5,rgb:[110,97,218]},{index:.63,rgb:[50,123,164]},{index:.75,rgb:[31,131,110]},{index:.88,rgb:[77,129,34]},{index:1,rgb:[145,105,18]}],salinity:[{index:0,rgb:[42,24,108]},{index:.13,rgb:[33,50,162]},{index:.25,rgb:[15,90,145]},{index:.38,rgb:[40,118,137]},{index:.5,rgb:[59,146,135]},{index:.63,rgb:[79,175,126]},{index:.75,rgb:[120,203,104]},{index:.88,rgb:[193,221,100]},{index:1,rgb:[253,239,154]}],temperature:[{index:0,rgb:[4,35,51]},{index:.13,rgb:[23,51,122]},{index:.25,rgb:[85,59,157]},{index:.38,rgb:[129,79,143]},{index:.5,rgb:[175,95,130]},{index:.63,rgb:[222,112,101]},{index:.75,rgb:[249,146,66]},{index:.88,rgb:[249,196,65]},{index:1,rgb:[232,250,91]}],turbidity:[{index:0,rgb:[34,31,27]},{index:.13,rgb:[65,50,41]},{index:.25,rgb:[98,69,52]},{index:.38,rgb:[131,89,57]},{index:.5,rgb:[161,112,59]},{index:.63,rgb:[185,140,66]},{index:.75,rgb:[202,174,88]},{index:.88,rgb:[216,209,126]},{index:1,rgb:[233,246,171]}],"velocity-blue":[{index:0,rgb:[17,32,64]},{index:.13,rgb:[35,52,116]},{index:.25,rgb:[29,81,156]},{index:.38,rgb:[31,113,162]},{index:.5,rgb:[50,144,169]},{index:.63,rgb:[87,173,176]},{index:.75,rgb:[149,196,189]},{index:.88,rgb:[203,221,211]},{index:1,rgb:[254,251,230]}],"velocity-green":[{index:0,rgb:[23,35,19]},{index:.13,rgb:[24,64,38]},{index:.25,rgb:[11,95,45]},{index:.38,rgb:[39,123,35]},{index:.5,rgb:[95,146,12]},{index:.63,rgb:[152,165,18]},{index:.75,rgb:[201,186,69]},{index:.88,rgb:[233,216,137]},{index:1,rgb:[255,253,205]}],cubehelix:[{index:0,rgb:[0,0,0]},{index:.07,rgb:[22,5,59]},{index:.13,rgb:[60,4,105]},{index:.2,rgb:[109,1,135]},{index:.27,rgb:[161,0,147]},{index:.33,rgb:[210,2,142]},{index:.4,rgb:[251,11,123]},{index:.47,rgb:[255,29,97]},{index:.53,rgb:[255,54,69]},{index:.6,rgb:[255,85,46]},{index:.67,rgb:[255,120,34]},{index:.73,rgb:[255,157,37]},{index:.8,rgb:[241,191,57]},{index:.87,rgb:[224,220,93]},{index:.93,rgb:[218,241,142]},{index:1,rgb:[227,253,198]}]};function s1(i,t,e){return i*(1-e)+t*e}var o1=s1,If=r1,Ea=o1,a1=l1;function l1(i){var t,e,n,r,s,a,l,d,_,h,f;if(i||(i={}),d=(i.nshades||72)-1,l=i.format||"hex",a=i.colormap,a||(a="jet"),typeof a=="string"){if(a=a.toLowerCase(),!If[a])throw Error(a+" not a supported colorscale");s=If[a]}else if(Array.isArray(a))s=a.slice();else throw Error("unsupported colormap option",a);if(s.length>d+1)throw new Error(a+" map requires nshades to be at least size "+s.length);Array.isArray(i.alpha)?i.alpha.length!==2?h=[1,1]:h=i.alpha.slice():typeof i.alpha=="number"?h=[i.alpha,i.alpha]:h=[1,1],t=s.map(function(y){return Math.round(y.index*d)}),h[0]=Math.min(Math.max(h[0],0),1),h[1]=Math.min(Math.max(h[1],0),1);var m=s.map(function(y,b){var v=s[b].index,P=s[b].rgb.slice();return P.length===4&&P[3]>=0&&P[3]<=1||(P[3]=h[0]+(h[1]-h[0])*v),P}),_=[];for(f=0;f<t.length-1;++f){r=t[f+1]-t[f],e=m[f],n=m[f+1];for(var g=0;g<r;g++){var w=g/r;_.push([Math.round(Ea(e[0],n[0],w)),Math.round(Ea(e[1],n[1],w)),Math.round(Ea(e[2],n[2],w)),Ea(e[3],n[3],w)])}}return _.push(s[s.length-1].rgb.concat(h[1])),l==="hex"?_=_.map(u1):l==="rgbaString"?_=_.map(h1):l==="float"&&(_=_.map(c1)),_}function c1(i){return[i[0]/255,i[1]/255,i[2]/255,i[3]]}function u1(i){for(var t,e="#",n=0;n<3;++n)t=i[n],t=t.toString(16),e+=("00"+t).substr(t.length);return e}function h1(i){return"rgba("+i.join(",")+")"}const d1=(i,t)=>{let e=[];for(let n=0;n<i;n++)e.push(Array(t).fill(0));return e},Uf=(i,t)=>a1({colormap:i,nshades:t,format:"float",alpha:1}),Nf=(i,t,e)=>i*(1-e)+t*e,f1=(i,t,e)=>p1((e-i)/(t-i)),p1=(i,t=0,e=1)=>Math.min(e,Math.max(t,i));/(iPad|iPhone|iPod)/g.test(navigator.userAgent);const m1=`
    precision mediump float;
    precision mediump int;
  
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
   
    attribute vec3 position;
  
    uniform vec4 uColor;
  
    varying vec4 vColor;
  
    void main(){
      
      gl_Position = projectionMatrix * viewMatrix * // THREE.Camera
        modelMatrix * // THREE.Mesh
        vec4( position, 1.0 ); // from THREE.BufferGeometry
  
      vColor = uColor;
    }
  `,_1=`
    precision mediump float;
  
    varying vec4 vColor;
  
    void main(){
      gl_FragColor = vColor;
    }
  `;var Vm={exports:{}};(function(i,t){(function(e,n){i.exports=n()})(ju,function(){function e(D,T,F){if(F||arguments.length===2)for(var C,z=0,G=T.length;z<G;z++)!C&&z in T||(C||(C=Array.prototype.slice.call(T,0,z)),C[z]=T[z]);return D.concat(C||Array.prototype.slice.call(T))}var n=Object.freeze({__proto__:null,blackman:function(D){for(var T=new Float32Array(D),F=2*Math.PI/(D-1),C=2*F,z=0;z<D/2;z++)T[z]=.42-.5*Math.cos(z*F)+.08*Math.cos(z*C);for(z=Math.ceil(D/2);z>0;z--)T[D-z]=T[z-1];return T},hamming:function(D){for(var T=new Float32Array(D),F=0;F<D;F++)T[F]=.54-.46*Math.cos(2*Math.PI*(F/D-1));return T},hanning:function(D){for(var T=new Float32Array(D),F=0;F<D;F++)T[F]=.5-.5*Math.cos(2*Math.PI*F/(D-1));return T},sine:function(D){for(var T=Math.PI/(D-1),F=new Float32Array(D),C=0;C<D;C++)F[C]=Math.sin(T*C);return F}}),r={};function s(D){for(;D%2==0&&D>1;)D/=2;return D===1}function a(D,T){if(T!=="rect"){if(T!==""&&T||(T="hanning"),r[T]||(r[T]={}),!r[T][D.length])try{r[T][D.length]=n[T](D.length)}catch{throw new Error("Invalid windowing function")}D=function(F,C){for(var z=[],G=0;G<Math.min(F.length,C.length);G++)z[G]=F[G]*C[G];return z}(D,r[T][D.length])}return D}function l(D,T,F){for(var C=new Float32Array(D),z=0;z<C.length;z++)C[z]=z*T/F,C[z]=13*Math.atan(C[z]/1315.8)+3.5*Math.atan(Math.pow(C[z]/7518,2));return C}function d(D){return Float32Array.from(D)}function h(D){return 1125*Math.log(1+D/700)}function f(D,T,F){for(var C,z=new Float32Array(D+2),G=new Float32Array(D+2),et=T/2,rt=h(0),ot=(h(et)-rt)/(D+1),st=new Array(D+2),ht=0;ht<z.length;ht++)z[ht]=ht*ot,G[ht]=(C=z[ht],700*(Math.exp(C/1125)-1)),st[ht]=Math.floor((F+1)*G[ht]/T);for(var Wt=new Array(D),Mt=0;Mt<Wt.length;Mt++){for(Wt[Mt]=new Array(F/2+1).fill(0),ht=st[Mt];ht<st[Mt+1];ht++)Wt[Mt][ht]=(ht-st[Mt])/(st[Mt+1]-st[Mt]);for(ht=st[Mt+1];ht<st[Mt+2];ht++)Wt[Mt][ht]=(st[Mt+2]-ht)/(st[Mt+2]-st[Mt+1])}return Wt}function m(D,T,F,C,z,G,et){C===void 0&&(C=5),z===void 0&&(z=2),G===void 0&&(G=!0),et===void 0&&(et=440);var rt=Math.floor(F/2)+1,ot=new Array(F).fill(0).map(function(vt,Bt){return D*function(se,B){return Math.log2(16*se/B)}(T*Bt/F,et)});ot[0]=ot[1]-1.5*D;var st,ht,Wt,Mt=ot.slice(1).map(function(vt,Bt){return Math.max(vt-ot[Bt])},1).concat([1]),nt=Math.round(D/2),at=new Array(D).fill(0).map(function(vt,Bt){return ot.map(function(se){return(10*D+nt+se-Bt)%D-nt})}),xt=at.map(function(vt,Bt){return vt.map(function(se,B){return Math.exp(-.5*Math.pow(2*at[Bt][B]/Mt[B],2))})});if(ht=(st=xt)[0].map(function(){return 0}),Wt=st.reduce(function(vt,Bt){return Bt.forEach(function(se,B){vt[B]+=Math.pow(se,2)}),vt},ht).map(Math.sqrt),xt=st.map(function(vt,Bt){return vt.map(function(se,B){return se/(Wt[B]||1)})}),z){var Lt=ot.map(function(vt){return Math.exp(-.5*Math.pow((vt/D-C)/z,2))});xt=xt.map(function(vt){return vt.map(function(Bt,se){return Bt*Lt[se]})})}return G&&(xt=e(e([],xt.slice(3),!0),xt.slice(0,3),!0)),xt.map(function(vt){return vt.slice(0,rt)})}function _(D,T){for(var F=0,C=0,z=0;z<T.length;z++)F+=Math.pow(z,D)*Math.abs(T[z]),C+=T[z];return F/C}function g(D){var T=D.ampSpectrum,F=D.barkScale,C=D.numberOfBarkBands,z=C===void 0?24:C;if(typeof T!="object"||typeof F!="object")throw new TypeError;var G=z,et=new Float32Array(G),rt=0,ot=T,st=new Int32Array(G+1);st[0]=0;for(var ht=F[ot.length-1]/G,Wt=1,Mt=0;Mt<ot.length;Mt++)for(;F[Mt]>ht;)st[Wt++]=Mt,ht=Wt*F[ot.length-1]/G;for(st[G]=ot.length-1,Mt=0;Mt<G;Mt++){for(var nt=0,at=st[Mt];at<st[Mt+1];at++)nt+=ot[at];et[Mt]=Math.pow(nt,.23)}for(Mt=0;Mt<et.length;Mt++)rt+=et[Mt];return{specific:et,total:rt}}function w(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;for(var F=new Float32Array(T.length),C=0;C<F.length;C++)F[C]=Math.pow(T[C],2);return F}function y(D){var T=D.ampSpectrum,F=D.melFilterBank,C=D.bufferSize;if(typeof T!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof F!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var z=w({ampSpectrum:T}),G=F.length,et=Array(G),rt=new Float32Array(G),ot=0;ot<rt.length;ot++){et[ot]=new Float32Array(C/2),rt[ot]=0;for(var st=0;st<C/2;st++)et[ot][st]=F[ot][st]*z[st],rt[ot]+=et[ot][st];rt[ot]=Math.log(rt[ot]+1)}return Array.prototype.slice.call(rt)}function b(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var v=null,P=b(function(D,T){var F=D.length;return T=T||2,v&&v[F]||function(C){(v=v||{})[C]=new Array(C*C);for(var z=Math.PI/C,G=0;G<C;G++)for(var et=0;et<C;et++)v[C][et+G*C]=Math.cos(z*(et+.5)*G)}(F),D.map(function(){return 0}).map(function(C,z){return T*D.reduce(function(G,et,rt,ot){return G+et*v[F][rt+z*F]},0)})}),L=Object.freeze({__proto__:null,amplitudeSpectrum:function(D){return D.ampSpectrum},buffer:function(D){return D.signal},chroma:function(D){var T=D.ampSpectrum,F=D.chromaFilterBank;if(typeof T!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof F!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var C=F.map(function(G,et){return T.reduce(function(rt,ot,st){return rt+ot*G[st]},0)}),z=Math.max.apply(Math,C);return z?C.map(function(G){return G/z}):C},complexSpectrum:function(D){return D.complexSpectrum},energy:function(D){var T=D.signal;if(typeof T!="object")throw new TypeError;for(var F=0,C=0;C<T.length;C++)F+=Math.pow(Math.abs(T[C]),2);return F},loudness:g,melBands:y,mfcc:function(D){var T=D.ampSpectrum,F=D.melFilterBank,C=D.numberOfMFCCCoefficients,z=D.bufferSize,G=Math.min(40,Math.max(1,C||13));if(F.length<G)throw new Error("Insufficient filter bank for requested number of coefficients");var et=y({ampSpectrum:T,melFilterBank:F,bufferSize:z});return P(et).slice(0,G)},perceptualSharpness:function(D){for(var T=g({ampSpectrum:D.ampSpectrum,barkScale:D.barkScale}),F=T.specific,C=0,z=0;z<F.length;z++)C+=z<15?(z+1)*F[z+1]:.066*Math.exp(.171*(z+1));return C*=.11/T.total},perceptualSpread:function(D){for(var T=g({ampSpectrum:D.ampSpectrum,barkScale:D.barkScale}),F=0,C=0;C<T.specific.length;C++)T.specific[C]>F&&(F=T.specific[C]);return Math.pow((T.total-F)/T.total,2)},powerSpectrum:w,rms:function(D){var T=D.signal;if(typeof T!="object")throw new TypeError;for(var F=0,C=0;C<T.length;C++)F+=Math.pow(T[C],2);return F/=T.length,F=Math.sqrt(F)},spectralCentroid:function(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;return _(1,T)},spectralCrest:function(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;var F=0,C=-1/0;return T.forEach(function(z){F+=Math.pow(z,2),C=z>C?z:C}),F/=T.length,F=Math.sqrt(F),C/F},spectralFlatness:function(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;for(var F=0,C=0,z=0;z<T.length;z++)F+=Math.log(T[z]),C+=T[z];return Math.exp(F/T.length)*T.length/C},spectralFlux:function(D){var T=D.signal,F=D.previousSignal,C=D.bufferSize;if(typeof T!="object"||typeof F!="object")throw new TypeError;for(var z=0,G=-C/2;G<T.length/2-1;G++)x=Math.abs(T[G])-Math.abs(F[G]),z+=(x+Math.abs(x))/2;return z},spectralKurtosis:function(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;var F=T,C=_(1,F),z=_(2,F),G=_(3,F),et=_(4,F);return(-3*Math.pow(C,4)+6*C*z-4*C*G+et)/Math.pow(Math.sqrt(z-Math.pow(C,2)),4)},spectralRolloff:function(D){var T=D.ampSpectrum,F=D.sampleRate;if(typeof T!="object")throw new TypeError;for(var C=T,z=F/(2*(C.length-1)),G=0,et=0;et<C.length;et++)G+=C[et];for(var rt=.99*G,ot=C.length-1;G>rt&&ot>=0;)G-=C[ot],--ot;return(ot+1)*z},spectralSkewness:function(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;var F=_(1,T),C=_(2,T),z=_(3,T);return(2*Math.pow(F,3)-3*F*C+z)/Math.pow(Math.sqrt(C-Math.pow(F,2)),3)},spectralSlope:function(D){var T=D.ampSpectrum,F=D.sampleRate,C=D.bufferSize;if(typeof T!="object")throw new TypeError;for(var z=0,G=0,et=new Float32Array(T.length),rt=0,ot=0,st=0;st<T.length;st++){z+=T[st];var ht=st*F/C;et[st]=ht,rt+=ht*ht,G+=ht,ot+=ht*T[st]}return(T.length*ot-G*z)/(z*(rt-Math.pow(G,2)))},spectralSpread:function(D){var T=D.ampSpectrum;if(typeof T!="object")throw new TypeError;return Math.sqrt(_(2,T)-Math.pow(_(1,T),2))},zcr:function(D){var T=D.signal;if(typeof T!="object")throw new TypeError;for(var F=0,C=1;C<T.length;C++)(T[C-1]>=0&&T[C]<0||T[C-1]<0&&T[C]>=0)&&F++;return F}});function A(D){if(Array.isArray(D)){for(var T=0,F=Array(D.length);T<D.length;T++)F[T]=D[T];return F}return Array.from(D)}var N={},U={},O={bitReverseArray:function(D){if(N[D]===void 0){for(var T=(D-1).toString(2).length,F="0".repeat(T),C={},z=0;z<D;z++){var G=z.toString(2);G=F.substr(G.length)+G,G=[].concat(A(G)).reverse().join(""),C[z]=parseInt(G,2)}N[D]=C}return N[D]},multiply:function(D,T){return{real:D.real*T.real-D.imag*T.imag,imag:D.real*T.imag+D.imag*T.real}},add:function(D,T){return{real:D.real+T.real,imag:D.imag+T.imag}},subtract:function(D,T){return{real:D.real-T.real,imag:D.imag-T.imag}},euler:function(D,T){var F=-2*Math.PI*D/T;return{real:Math.cos(F),imag:Math.sin(F)}},conj:function(D){return D.imag*=-1,D},constructComplexArray:function(D){var T={};T.real=D.real===void 0?D.slice():D.real.slice();var F=T.real.length;return U[F]===void 0&&(U[F]=Array.apply(null,Array(F)).map(Number.prototype.valueOf,0)),T.imag=U[F].slice(),T}},V=function(D){var T={};D.real===void 0||D.imag===void 0?T=O.constructComplexArray(D):(T.real=D.real.slice(),T.imag=D.imag.slice());var F=T.real.length,C=Math.log2(F);if(Math.round(C)!=C)throw new Error("Input size must be a power of 2.");if(T.real.length!=T.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var z=O.bitReverseArray(F),G={real:[],imag:[]},et=0;et<F;et++)G.real[z[et]]=T.real[et],G.imag[z[et]]=T.imag[et];for(var rt=0;rt<F;rt++)T.real[rt]=G.real[rt],T.imag[rt]=G.imag[rt];for(var ot=1;ot<=C;ot++)for(var st=Math.pow(2,ot),ht=0;ht<st/2;ht++)for(var Wt=O.euler(ht,st),Mt=0;Mt<F/st;Mt++){var nt=st*Mt+ht,at=st*Mt+ht+st/2,xt={real:T.real[nt],imag:T.imag[nt]},Lt={real:T.real[at],imag:T.imag[at]},vt=O.multiply(Wt,Lt),Bt=O.subtract(xt,vt);T.real[at]=Bt.real,T.imag[at]=Bt.imag;var se=O.add(vt,xt);T.real[nt]=se.real,T.imag[nt]=se.imag}return T},E=V,I=function(){function D(T,F){var C=this;if(this._m=F,!T.audioContext)throw this._m.errors.noAC;if(T.bufferSize&&!s(T.bufferSize))throw this._m._errors.notPow2;if(!T.source)throw this._m._errors.noSource;this._m.audioContext=T.audioContext,this._m.bufferSize=T.bufferSize||this._m.bufferSize||256,this._m.hopSize=T.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=T.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=T.callback,this._m.windowingFunction=T.windowingFunction||"hanning",this._m.featureExtractors=L,this._m.EXTRACTION_STARTED=T.startImmediately||!1,this._m.channel=typeof T.channel=="number"?T.channel:0,this._m.inputs=T.inputs||1,this._m.outputs=T.outputs||1,this._m.numberOfMFCCCoefficients=T.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=T.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=T.featureExtractors||[],this._m.barkScale=l(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=f(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(T.source),this._m.spn.onaudioprocess=function(z){var G;C._m.inputData!==null&&(C._m.previousInputData=C._m.inputData),C._m.inputData=z.inputBuffer.getChannelData(C._m.channel),C._m.previousInputData?((G=new Float32Array(C._m.previousInputData.length+C._m.inputData.length-C._m.hopSize)).set(C._m.previousInputData.slice(C._m.hopSize)),G.set(C._m.inputData,C._m.previousInputData.length-C._m.hopSize)):G=C._m.inputData;var et=function(rt,ot,st){if(rt.length<ot)throw new Error("Buffer is too short for frame length");if(st<1)throw new Error("Hop length cannot be less that 1");if(ot<1)throw new Error("Frame length cannot be less that 1");var ht=1+Math.floor((rt.length-ot)/st);return new Array(ht).fill(0).map(function(Wt,Mt){return rt.slice(Mt*st,Mt*st+ot)})}(G,C._m.bufferSize,C._m.hopSize);et.forEach(function(rt){C._m.frame=rt;var ot=C._m.extract(C._m._featuresToExtract,C._m.frame,C._m.previousFrame);typeof C._m.callback=="function"&&C._m.EXTRACTION_STARTED&&C._m.callback(ot),C._m.previousFrame=C._m.frame})}}return D.prototype.start=function(T){this._m._featuresToExtract=T||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},D.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},D.prototype.setSource=function(T){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=T,this._m.source.connect(this._m.spn)},D.prototype.setChannel=function(T){T<=this._m.inputs?this._m.channel=T:console.error("Channel ".concat(T," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(T," when instantiating the MeydaAnalyzer"))},D.prototype.get=function(T){return this._m.inputData?this._m.extract(T||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},D}(),H={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:L,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:a,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(D){return new I(D,Object.assign({},H))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(D,T,F){var C=this;if(!T)throw this._errors.invalidInput;if(typeof T!="object")throw this._errors.invalidInput;if(!D)throw this._errors.featureUndef;if(!s(T.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=l(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=f(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=m(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in T&&T.buffer===void 0?this.signal=d(T):this.signal=T;var z=j(T,this.windowingFunction,this.bufferSize);if(this.signal=z.windowedSignal,this.complexSpectrum=z.complexSpectrum,this.ampSpectrum=z.ampSpectrum,F){var G=j(F,this.windowingFunction,this.bufferSize);this.previousSignal=G.windowedSignal,this.previousComplexSpectrum=G.complexSpectrum,this.previousAmpSpectrum=G.ampSpectrum}var et=function(rt){return C.featureExtractors[rt]({ampSpectrum:C.ampSpectrum,chromaFilterBank:C.chromaFilterBank,complexSpectrum:C.complexSpectrum,signal:C.signal,bufferSize:C.bufferSize,sampleRate:C.sampleRate,barkScale:C.barkScale,melFilterBank:C.melFilterBank,previousSignal:C.previousSignal,previousAmpSpectrum:C.previousAmpSpectrum,previousComplexSpectrum:C.previousComplexSpectrum,numberOfMFCCCoefficients:C.numberOfMFCCCoefficients,numberOfBarkBands:C.numberOfBarkBands})};if(typeof D=="object")return D.reduce(function(rt,ot){var st;return Object.assign({},rt,((st={})[ot]=et(ot),st))},{});if(typeof D=="string")return et(D);throw this._errors.invalidFeatureFmt}},j=function(D,T,F){var C={};D.buffer===void 0?C.signal=d(D):C.signal=D,C.windowedSignal=a(C.signal,T),C.complexSpectrum=E(C.windowedSignal),C.ampSpectrum=new Float32Array(F/2);for(var z=0;z<F/2;z++)C.ampSpectrum[z]=Math.sqrt(Math.pow(C.complexSpectrum.real[z],2)+Math.pow(C.complexSpectrum.imag[z],2));return C};return typeof window!="undefined"&&(window.Meyda=H),H})})(Vm);navigator.getUserMedia=navigator.webkitGetUserMedia||navigator.getUserMedia||navigator.mediaDevices.getUserMedia;const g1={audio:{channelCount:{ideal:2,min:1},echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}};let Fa=null,Ff=null,Fs=null;function v1({constrains:i=g1,bufferSize:t=512}){return navigator.mediaDevices.getUserMedia(i).then(e=>x1({stream:e,bufferSize:t})).catch(e=>b1(e))}function x1({stream:i,bufferSize:t}){Fa=new AudioContext;const e=i.getAudioTracks()[0];return e&&console.log(e.getSettings()),Ff=Fa.createMediaStreamSource(i),Fs=Vm.exports.createMeydaAnalyzer({audioContext:Fa,source:Ff,bufferSize:t}),Fs.start(),i}function b1(i){console.error("AudioFeaturesExtractor",i)}function y1(i){return!Fs||!Fa?null:Fs.get(i)}function w1(){return Fs?Fs._m.signal:null}function Of(i){return Za(document,"keydown").pipe(oh(t=>t.keyCode===i),tb(!1),Zx(t=>!t))}function S1(i){return Za(i,"click").pipe(Wx(250),Kx())}function kf(i){return ex().pipe(rb(i),oh(t=>!t[1]))}const _o=Math.min(1.25,window.devicePixelRatio||1);function M1({renderer:i,composer:t}){const e=i.domElement,n=e.clientWidth*_o|0,r=e.clientHeight*_o|0,s=e.width!==n||e.height!==r;return s&&(i.setSize(n,r,!1),t.setSize(n,r)),s}const Ss=1024,E1=50,Ec=document.querySelector("#cover"),Ta=document.querySelector("#canvas"),zm=new B0;document.querySelector("#stats").appendChild(zm.dom);let Nn,Du,go,wr,vo,Sr,Ln,qn,Oa,hs,Lu;const xo={amount:10,xscale:50},qe={loudness:0,perceptualSharpness:0,perceptualSpread:0,spectralFlatness:0},Vs=new Oc.exports.Pane({title:"controls",expanded:!0});Vs.addInput(xo,"amount",{min:1,max:50});Vs.addInput(xo,"xscale",{min:20,max:100});Vs.addMonitor(qe,"loudness",{view:"graph",min:0,max:1});Vs.addMonitor(qe,"perceptualSpread",{view:"graph",min:0,max:1});Vs.addMonitor(qe,"perceptualSharpness",{view:"graph",min:0,max:1});Vs.addMonitor(qe,"spectralFlatness",{view:"graph",min:0,max:1});function T1(){hs=new je,Lu=new ne;const i=new Ny;wr=new Fn(75,4/3,5,1e4),wr.position.set(0,-5,10),wr.lookAt(0,0,0),go=new NT({canvas:Ta,antialias:!0,powerPreference:"high-performance"}),go.setPixelRatio(_o),Ln=new XT(wr,Ta),Ln.enableDamping=!0,Ln.enablePan=!1,Ln.maxDistance=25,Ln.minDistance=7,Ln.dampingFactor=.05,Ln.minAzimuthAngle=-Math.PI/1,Ln.maxAzimuthAngle=Math.PI/1,Ln.minPolarAngle=1,Ln.maxPolarAngle=Math.PI/2,Ln.update();const t=new Ky(16777215,.75);t.position.set(0,1,1),i.add(t);const e=new HT(i,wr);let n=Ta.clientWidth*_o,r=Ta.clientHeight*_o,s=new kt(n,r);Sr=new Ns(s,0,0,0),Sr.threshold=0,Sr.strength=1.75,Sr.radius=1.5,vo=new zT(go),vo.addPass(e),vo.addPass(Sr),Nn=d1(E1,Ss),qn=new ky(new ks(1),new Gy({color:16777215}),Ss),qn.instanceMatrix.setUsage(qb),qn.position.set(-10,0,0),qn.scale.set(1,1,1);const a="picnic";let l=Uf(a,Nn.length);Du=Uf(a,Ss).map(d=>new ne().fromArray(d)),Du.forEach((d,h)=>qn.setColorAt(h,d)),i.add(qn),Oa=new lo;for(let d=0;d<Nn.length;d++)if(Nn[d]){const h=new Ci;h.setAttribute("position",new Vn(new Float32Array(Nn[d].length*3),3)),h.setDrawRange(0,Nn[d].length);const f=new Hy({uniforms:{uColor:{value:l[Nn.length-d-1]}},vertexShader:m1,fragmentShader:_1,transparent:!0,side:ei}),m=new wn(h,f);m.frustumCulled=!1,Oa.add(m)}i.add(Oa),console.log("init")}function C1(){qa.timeline().to("#cover",{duration:1,autoAlpha:0,ease:"power2.out"}).to("#cover",{duration:1,delay:1,autoAlpha:0,ease:"power2.out"}),console.log("intro")}function A1([{timestamp:i}]){if(M1({renderer:go,composer:vo})){const a=go.domElement;wr.aspect=a.clientWidth/a.clientHeight,wr.updateProjectionMatrix()}const t=y1(["perceptualSharpness","perceptualSpread","spectralFlatness","amplitudeSpectrum","loudness"]);if(!t)return;Nn.pop(),Nn.unshift(t.amplitudeSpectrum);const{perceptualSpread:e,perceptualSharpness:n,spectralFlatness:r}=t;qe.loudness=f1(3,50,t.loudness.total),qe.perceptualSharpness=n,qe.perceptualSpread=e,qe.spectralFlatness=r,Sr.strength=Nf(1,1.25,qe.loudness),Sr.radius=Nf(1,3,n);for(let a=0;a<Nn.length;a++){const l=Oa.children[a].geometry.getAttribute("position");for(let d=0;d<l.count*3;d++){const h=d*3;l.array[h+0]=xo.xscale+xo.xscale*Math.log10(d/Nn[a].length),l.array[h+1]=-15+qe.perceptualSharpness+Nn[a][d]*(xo.amount*qe.loudness),l.array[h+2]=15-a*(5*qe.perceptualSpread)}l.needsUpdate=!0}const s=w1();if(!!s&&qn){for(let a=0;a<Ss;a++)hs.position.set(30*a/Ss,s[a]*30,0),hs.rotation.set((i+qe.loudness)*.001,0,qe.loudness),hs.scale.set(qe.loudness*.5,qe.perceptualSharpness*.5,qe.perceptualSharpness*.5),hs.updateMatrix(),Lu.set(Du[a]),qn.setColorAt(a,Lu),qn.setMatrixAt(a,hs.matrix);qn.instanceMatrix.needsUpdate=!0,qn.instanceColor.needsUpdate=!0}Ln.update(),vo.render(),zm.update()}function P1(){qa.timeline().to("#cover",{duration:2,autoAlpha:1,ease:"expo.inOut"});const i=Lx([S1(Ec),Uo(v1({fftSize:Ss}))]).pipe(Cd(()=>T1()),jx(()=>C1()),$x({count:3,delay:1e3}),zc(e=>(console.error("Error during initialization:",e),qa.to("#cover",{duration:.5,autoAlpha:1,onComplete:()=>{Ec.textContent="Error: Click to retry",Ec.style.backgroundColor="#ff4444"}}),Gp)),Qx(1)),t=kf(Of(32)).pipe(ib(16),Cd(A1),zc(e=>(console.error("Render error:",e),sh(100).pipe(eb(()=>kf(Of(32)))))));return Vc(i,t).subscribe({error:e=>console.error("App error:",e),complete:()=>console.log("App completed")})}document.addEventListener("DOMContentLoaded",()=>P1());
