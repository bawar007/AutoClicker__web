var S_=Object.defineProperty;var T_=(t,e,r)=>e in t?S_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var cu=(t,e,r)=>T_(t,typeof e!="symbol"?e+"":e,r);function w_(t,e){for(var r=0;r<e.length;r++){const a=e[r];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function x_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wm={exports:{}},fu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function E_(){if(D1)return fu;D1=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(a,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:t,type:a,key:c,ref:o!==void 0?o:null,props:l}}return fu.Fragment=e,fu.jsx=r,fu.jsxs=r,fu}var M1;function A_(){return M1||(M1=1,wm.exports=E_()),wm.exports}var J=A_(),xm={exports:{}},Ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function __(){if(P1)return Ct;P1=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function A(H){return H===null||typeof H!="object"?null:(H=b&&H[b]||H["@@iterator"],typeof H=="function"?H:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,w={};function C(H,it,dt){this.props=H,this.context=it,this.refs=w,this.updater=dt||_}C.prototype.isReactComponent={},C.prototype.setState=function(H,it){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,it,"setState")},C.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function M(){}M.prototype=C.prototype;function j(H,it,dt){this.props=H,this.context=it,this.refs=w,this.updater=dt||_}var U=j.prototype=new M;U.constructor=j,x(U,C.prototype),U.isPureReactComponent=!0;var F=Array.isArray,z={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function P(H,it,dt,ct,ft,At){return dt=At.ref,{$$typeof:t,type:H,key:it,ref:dt!==void 0?dt:null,props:At}}function k(H,it){return P(H.type,it,void 0,void 0,void 0,H.props)}function R(H){return typeof H=="object"&&H!==null&&H.$$typeof===t}function S(H){var it={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(dt){return it[dt]})}var N=/\/+/g;function V(H,it){return typeof H=="object"&&H!==null&&H.key!=null?S(""+H.key):it.toString(36)}function L(){}function vt(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(L,L):(H.status="pending",H.then(function(it){H.status==="pending"&&(H.status="fulfilled",H.value=it)},function(it){H.status==="pending"&&(H.status="rejected",H.reason=it)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function Rt(H,it,dt,ct,ft){var At=typeof H;(At==="undefined"||At==="boolean")&&(H=null);var xt=!1;if(H===null)xt=!0;else switch(At){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(H.$$typeof){case t:case e:xt=!0;break;case y:return xt=H._init,Rt(xt(H._payload),it,dt,ct,ft)}}if(xt)return ft=ft(H),xt=ct===""?"."+V(H,0):ct,F(ft)?(dt="",xt!=null&&(dt=xt.replace(N,"$&/")+"/"),Rt(ft,it,dt,"",function(ie){return ie})):ft!=null&&(R(ft)&&(ft=k(ft,dt+(ft.key==null||H&&H.key===ft.key?"":(""+ft.key).replace(N,"$&/")+"/")+xt)),it.push(ft)),1;xt=0;var pe=ct===""?".":ct+":";if(F(H))for(var Lt=0;Lt<H.length;Lt++)ct=H[Lt],At=pe+V(ct,Lt),xt+=Rt(ct,it,dt,At,ft);else if(Lt=A(H),typeof Lt=="function")for(H=Lt.call(H),Lt=0;!(ct=H.next()).done;)ct=ct.value,At=pe+V(ct,Lt++),xt+=Rt(ct,it,dt,At,ft);else if(At==="object"){if(typeof H.then=="function")return Rt(vt(H),it,dt,ct,ft);throw it=String(H),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return xt}function ot(H,it,dt){if(H==null)return H;var ct=[],ft=0;return Rt(H,ct,"","",function(At){return it.call(dt,At,ft++)}),ct}function lt(H){if(H._status===-1){var it=H._result;it=it(),it.then(function(dt){(H._status===0||H._status===-1)&&(H._status=1,H._result=dt)},function(dt){(H._status===0||H._status===-1)&&(H._status=2,H._result=dt)}),H._status===-1&&(H._status=0,H._result=it)}if(H._status===1)return H._result.default;throw H._result}var ut=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function yt(){}return Ct.Children={map:ot,forEach:function(H,it,dt){ot(H,function(){it.apply(this,arguments)},dt)},count:function(H){var it=0;return ot(H,function(){it++}),it},toArray:function(H){return ot(H,function(it){return it})||[]},only:function(H){if(!R(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Ct.Component=C,Ct.Fragment=r,Ct.Profiler=o,Ct.PureComponent=j,Ct.StrictMode=a,Ct.Suspense=p,Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Ct.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ct.cache=function(H){return function(){return H.apply(null,arguments)}},Ct.cloneElement=function(H,it,dt){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var ct=x({},H.props),ft=H.key,At=void 0;if(it!=null)for(xt in it.ref!==void 0&&(At=void 0),it.key!==void 0&&(ft=""+it.key),it)!W.call(it,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&it.ref===void 0||(ct[xt]=it[xt]);var xt=arguments.length-2;if(xt===1)ct.children=dt;else if(1<xt){for(var pe=Array(xt),Lt=0;Lt<xt;Lt++)pe[Lt]=arguments[Lt+2];ct.children=pe}return P(H.type,ft,void 0,void 0,At,ct)},Ct.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:l,_context:H},H},Ct.createElement=function(H,it,dt){var ct,ft={},At=null;if(it!=null)for(ct in it.key!==void 0&&(At=""+it.key),it)W.call(it,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(ft[ct]=it[ct]);var xt=arguments.length-2;if(xt===1)ft.children=dt;else if(1<xt){for(var pe=Array(xt),Lt=0;Lt<xt;Lt++)pe[Lt]=arguments[Lt+2];ft.children=pe}if(H&&H.defaultProps)for(ct in xt=H.defaultProps,xt)ft[ct]===void 0&&(ft[ct]=xt[ct]);return P(H,At,void 0,void 0,null,ft)},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(H){return{$$typeof:d,render:H}},Ct.isValidElement=R,Ct.lazy=function(H){return{$$typeof:y,_payload:{_status:-1,_result:H},_init:lt}},Ct.memo=function(H,it){return{$$typeof:m,type:H,compare:it===void 0?null:it}},Ct.startTransition=function(H){var it=z.T,dt={};z.T=dt;try{var ct=H(),ft=z.S;ft!==null&&ft(dt,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(yt,ut)}catch(At){ut(At)}finally{z.T=it}},Ct.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Ct.use=function(H){return z.H.use(H)},Ct.useActionState=function(H,it,dt){return z.H.useActionState(H,it,dt)},Ct.useCallback=function(H,it){return z.H.useCallback(H,it)},Ct.useContext=function(H){return z.H.useContext(H)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(H,it){return z.H.useDeferredValue(H,it)},Ct.useEffect=function(H,it){return z.H.useEffect(H,it)},Ct.useId=function(){return z.H.useId()},Ct.useImperativeHandle=function(H,it,dt){return z.H.useImperativeHandle(H,it,dt)},Ct.useInsertionEffect=function(H,it){return z.H.useInsertionEffect(H,it)},Ct.useLayoutEffect=function(H,it){return z.H.useLayoutEffect(H,it)},Ct.useMemo=function(H,it){return z.H.useMemo(H,it)},Ct.useOptimistic=function(H,it){return z.H.useOptimistic(H,it)},Ct.useReducer=function(H,it,dt){return z.H.useReducer(H,it,dt)},Ct.useRef=function(H){return z.H.useRef(H)},Ct.useState=function(H){return z.H.useState(H)},Ct.useSyncExternalStore=function(H,it,dt){return z.H.useSyncExternalStore(H,it,dt)},Ct.useTransition=function(){return z.H.useTransition()},Ct.version="19.0.0",Ct}var N1;function s0(){return N1||(N1=1,xm.exports=__()),xm.exports}var B=s0();const Ot=x_(B),lg=w_({__proto__:null,default:Ot},[B]);var Em={exports:{}},hu={},Am={exports:{}},_m={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function C_(){return L1||(L1=1,function(t){function e(ot,lt){var ut=ot.length;ot.push(lt);t:for(;0<ut;){var yt=ut-1>>>1,H=ot[yt];if(0<o(H,lt))ot[yt]=lt,ot[ut]=H,ut=yt;else break t}}function r(ot){return ot.length===0?null:ot[0]}function a(ot){if(ot.length===0)return null;var lt=ot[0],ut=ot.pop();if(ut!==lt){ot[0]=ut;t:for(var yt=0,H=ot.length,it=H>>>1;yt<it;){var dt=2*(yt+1)-1,ct=ot[dt],ft=dt+1,At=ot[ft];if(0>o(ct,ut))ft<H&&0>o(At,ct)?(ot[yt]=At,ot[ft]=ut,yt=ft):(ot[yt]=ct,ot[dt]=ut,yt=dt);else if(ft<H&&0>o(At,ut))ot[yt]=At,ot[ft]=ut,yt=ft;else break t}}return lt}function o(ot,lt){var ut=ot.sortIndex-lt.sortIndex;return ut!==0?ut:ot.id-lt.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],m=[],y=1,b=null,A=3,_=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function U(ot){for(var lt=r(m);lt!==null;){if(lt.callback===null)a(m);else if(lt.startTime<=ot)a(m),lt.sortIndex=lt.expirationTime,e(p,lt);else break;lt=r(m)}}function F(ot){if(w=!1,U(ot),!x)if(r(p)!==null)x=!0,vt();else{var lt=r(m);lt!==null&&Rt(F,lt.startTime-ot)}}var z=!1,W=-1,P=5,k=-1;function R(){return!(t.unstable_now()-k<P)}function S(){if(z){var ot=t.unstable_now();k=ot;var lt=!0;try{t:{x=!1,w&&(w=!1,M(W),W=-1),_=!0;var ut=A;try{e:{for(U(ot),b=r(p);b!==null&&!(b.expirationTime>ot&&R());){var yt=b.callback;if(typeof yt=="function"){b.callback=null,A=b.priorityLevel;var H=yt(b.expirationTime<=ot);if(ot=t.unstable_now(),typeof H=="function"){b.callback=H,U(ot),lt=!0;break e}b===r(p)&&a(p),U(ot)}else a(p);b=r(p)}if(b!==null)lt=!0;else{var it=r(m);it!==null&&Rt(F,it.startTime-ot),lt=!1}}break t}finally{b=null,A=ut,_=!1}lt=void 0}}finally{lt?N():z=!1}}}var N;if(typeof j=="function")N=function(){j(S)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,L=V.port2;V.port1.onmessage=S,N=function(){L.postMessage(null)}}else N=function(){C(S,0)};function vt(){z||(z=!0,N())}function Rt(ot,lt){W=C(function(){ot(t.unstable_now())},lt)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ot){ot.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,vt())},t.unstable_forceFrameRate=function(ot){0>ot||125<ot?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ot?Math.floor(1e3/ot):5},t.unstable_getCurrentPriorityLevel=function(){return A},t.unstable_getFirstCallbackNode=function(){return r(p)},t.unstable_next=function(ot){switch(A){case 1:case 2:case 3:var lt=3;break;default:lt=A}var ut=A;A=lt;try{return ot()}finally{A=ut}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ot,lt){switch(ot){case 1:case 2:case 3:case 4:case 5:break;default:ot=3}var ut=A;A=ot;try{return lt()}finally{A=ut}},t.unstable_scheduleCallback=function(ot,lt,ut){var yt=t.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?yt+ut:yt):ut=yt,ot){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ut+H,ot={id:y++,callback:lt,priorityLevel:ot,startTime:ut,expirationTime:H,sortIndex:-1},ut>yt?(ot.sortIndex=ut,e(m,ot),r(p)===null&&ot===r(m)&&(w?(M(W),W=-1):w=!0,Rt(F,ut-yt))):(ot.sortIndex=H,e(p,ot),x||_||(x=!0,vt())),ot},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(ot){var lt=A;return function(){var ut=A;A=lt;try{return ot.apply(this,arguments)}finally{A=ut}}}}(_m)),_m}var z1;function O_(){return z1||(z1=1,Am.exports=C_()),Am.exports}var Cm={exports:{}},Je={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function R_(){if(I1)return Je;I1=1;var t=s0();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(e(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:m,implementation:y}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Je.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,y)},Je.flushSync=function(p){var m=c.T,y=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=m,a.p=y,a.d.f()}},Je.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Je.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Je.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,b=d(y,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,_=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:_}):y==="script"&&a.d.X(p,{crossOrigin:b,integrity:A,fetchPriority:_,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Je.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Je.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=d(y,m.crossOrigin);a.d.L(p,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Je.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Je.requestFormReset=function(p){a.d.r(p)},Je.unstable_batchedUpdates=function(p,m){return p(m)},Je.useFormState=function(p,m,y){return c.H.useFormState(p,m,y)},Je.useFormStatus=function(){return c.H.useHostTransitionStatus()},Je.version="19.0.0",Je}var U1;function k_(){if(U1)return Cm.exports;U1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Cm.exports=R_(),Cm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1;function D_(){if(B1)return hu;B1=1;var t=O_(),e=s0(),r=k_();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),_=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),F=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var P=Symbol.for("react.client.reference");function k(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===P?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case p:return"Fragment";case d:return"Portal";case y:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case C:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _:return(n.displayName||"Context")+".Provider";case A:return(n._context.displayName||"Context")+".Consumer";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return i=n.displayName||null,i!==null?i:k(n.type)||"Memo";case j:i=n._payload,n=n._init;try{return k(n(i))}catch{}}return null}var R=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S=Object.assign,N,V;function L(n){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||"",V=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+n+V}var vt=!1;function Rt(n,i){if(!n||vt)return"";vt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var at=function(){throw Error()};if(Object.defineProperty(at.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(at,[])}catch(et){var K=et}Reflect.construct(n,[],at)}else{try{at.call()}catch(et){K=et}n.call(at.prototype)}}else{try{throw Error()}catch(et){K=et}(at=n())&&typeof at.catch=="function"&&at.catch(function(){})}}catch(et){if(et&&K&&typeof et.stack=="string")return[et.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],O=g[1];if(E&&O){var I=E.split(`
`),$=O.split(`
`);for(h=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;h<$.length&&!$[h].includes("DetermineComponentFrameRoot");)h++;if(u===I.length||h===$.length)for(u=I.length-1,h=$.length-1;1<=u&&0<=h&&I[u]!==$[h];)h--;for(;1<=u&&0<=h;u--,h--)if(I[u]!==$[h]){if(u!==1||h!==1)do if(u--,h--,0>h||I[u]!==$[h]){var nt=`
`+I[u].replace(" at new "," at ");return n.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",n.displayName)),nt}while(1<=u&&0<=h);break}}}finally{vt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?L(s):""}function ot(n){switch(n.tag){case 26:case 27:case 5:return L(n.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 15:return n=Rt(n.type,!1),n;case 11:return n=Rt(n.type.render,!1),n;case 1:return n=Rt(n.type,!0),n;default:return""}}function lt(n){try{var i="";do i+=ot(n),n=n.return;while(n);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ut(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function yt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function H(n){if(ut(n)!==n)throw Error(a(188))}function it(n){var i=n.alternate;if(!i){if(i=ut(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,u=i;;){var h=s.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===s)return H(h),n;if(g===u)return H(h),i;g=g.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=g;else{for(var E=!1,O=h.child;O;){if(O===s){E=!0,s=h,u=g;break}if(O===u){E=!0,u=h,s=g;break}O=O.sibling}if(!E){for(O=g.child;O;){if(O===s){E=!0,s=g,u=h;break}if(O===u){E=!0,u=g,s=h;break}O=O.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function dt(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=dt(n),i!==null)return i;n=n.sibling}return null}var ct=Array.isArray,ft=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At={pending:!1,data:null,method:null,action:null},xt=[],pe=-1;function Lt(n){return{current:n}}function ie(n){0>pe||(n.current=xt[pe],xt[pe]=null,pe--)}function Ht(n,i){pe++,xt[pe]=n.current,n.current=i}var Fe=Lt(null),ir=Lt(null),dn=Lt(null),zn=Lt(null);function Sr(n,i){switch(Ht(dn,i),Ht(ir,n),Ht(Fe,null),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?o1(i):0;break;default:if(n=n===8?i.parentNode:i,i=n.tagName,n=n.namespaceURI)n=o1(n),i=s1(n,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ie(Fe),Ht(Fe,i)}function ar(){ie(Fe),ie(ir),ie(dn)}function Tr(n){n.memoizedState!==null&&Ht(zn,n);var i=Fe.current,s=s1(i,n.type);i!==s&&(Ht(ir,n),Ht(Fe,s))}function In(n){ir.current===n&&(ie(Fe),ie(ir)),zn.current===n&&(ie(zn),au._currentValue=At)}var $i=Object.prototype.hasOwnProperty,wr=t.unstable_scheduleCallback,Fi=t.unstable_cancelCallback,Et=t.unstable_shouldYield,ol=t.unstable_requestPaint,pn=t.unstable_now,xc=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Zr=t.unstable_NormalPriority,Ec=t.unstable_LowPriority,sl=t.unstable_IdlePriority,Ed=t.log,$a=t.unstable_setDisableYieldValue,Gi=null,Ze=null;function ll(n){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Gi,n,void 0,(n.current.flags&128)===128)}catch{}}function xr(n){if(typeof Ed=="function"&&$a(n),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(Gi,n)}catch{}}var on=Math.clz32?Math.clz32:Ad,ul=Math.log,Ac=Math.LN2;function Ad(n){return n>>>=0,n===0?32:31-(ul(n)/Ac|0)|0}var Er=128,Yi=4194304;function or(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function sr(n,i){var s=n.pendingLanes;if(s===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,E=n.warmLanes;n=n.finishedLanes!==0;var O=s&134217727;return O!==0?(s=O&~h,s!==0?u=or(s):(g&=O,g!==0?u=or(g):n||(E=O&~E,E!==0&&(u=or(E))))):(O=s&~h,O!==0?u=or(O):g!==0?u=or(g):n||(E=s&~E,E!==0&&(u=or(E)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,E=i&-i,h>=E||h===32&&(E&4194176)!==0)?i:u}function Xi(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function cl(n,i){switch(n){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var n=Er;return Er<<=1,(Er&4194176)===0&&(Er=128),n}function Ki(){var n=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),n}function Vo(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function xe(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function _c(n,i,s,u,h,g){var E=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var O=n.entanglements,I=n.expirationTimes,$=n.hiddenUpdates;for(s=E&~s;0<s;){var nt=31-on(s),at=1<<nt;O[nt]=0,I[nt]=-1;var K=$[nt];if(K!==null)for($[nt]=null,nt=0;nt<K.length;nt++){var et=K[nt];et!==null&&(et.lane&=-536870913)}s&=~at}u!==0&&Wi(n,u,0),g!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~i))}function Wi(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-on(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|s&4194218}function Zi(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var u=31-on(s),h=1<<u;h&i|n[u]&i&&(n[u]|=i),s&=~h}}function Cc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Oc(){var n=ft.p;return n!==0?n:(n=window.event,n===void 0?32:A1(n.type))}function Qi(n,i){var s=ft.p;try{return ft.p=n,i()}finally{ft.p=s}}var Ar=Math.random().toString(36).slice(2),Ie="__reactFiber$"+Ar,Ue="__reactProps$"+Ar,Ji="__reactContainer$"+Ar,Fa="__reactEvents$"+Ar,Ho="__reactListeners$"+Ar,_r="__reactHandles$"+Ar,hl="__reactResources$"+Ar,ta="__reactMarker$"+Ar;function Ga(n){delete n[Ie],delete n[Ue],delete n[Fa],delete n[Ho],delete n[_r]}function lr(n){var i=n[Ie];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Ji]||s[Ie]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=c1(n);n!==null;){if(s=n[Ie])return s;n=c1(n)}return i}n=s,s=n.parentNode}return null}function Qr(n){if(n=n[Ie]||n[Ji]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function ea(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function na(n){var i=n[hl];return i||(i=n[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function le(n){n[ta]=!0}var dl=new Set,qo={};function xn(n,i){mn(n,i),mn(n+"Capture",i)}function mn(n,i){for(qo[n]=i,n=0;n<i.length;n++)dl.add(i[n])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pl={},ml={};function Rc(n){return $i.call(ml,n)?!0:$i.call(pl,n)?!1:_d.test(n)?ml[n]=!0:(pl[n]=!0,!1)}function ra(n,i,s){if(Rc(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function ia(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Un(n,i,s,u){if(u===null)n.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+u)}}function sn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function kc(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Cd(n){var i=kc(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,g=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ya(n){n._valueTracker||(n._valueTracker=Cd(n))}function gl(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return n&&(u=kc(n)?n.checked?"true":"false":n.value),n=u,n!==s?(i.setValue(n),!0):!1}function $o(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Jr=/[\n"\\]/g;function me(n){return n.replace(Jr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function aa(n,i,s,u,h,g,E,O){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+sn(i)):n.value!==""+sn(i)&&(n.value=""+sn(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Fo(n,E,sn(i)):s!=null?Fo(n,E,sn(s)):u!=null&&n.removeAttribute("value"),h==null&&g!=null&&(n.defaultChecked=!!g),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?n.name=""+sn(O):n.removeAttribute("name")}function Xa(n,i,s,u,h,g,E,O){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),i!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;s=s!=null?""+sn(s):"",i=i!=null?""+sn(i):s,O||i===n.value||(n.value=i),n.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=O?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Fo(n,i,s){i==="number"&&$o(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Bt(n,i,s,u){if(n=n.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=i.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&u&&(n[s].defaultSelected=!0)}else{for(s=""+sn(s),i=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Ka(n,i,s){if(i!=null&&(i=""+sn(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+sn(s):""}function oa(n,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(ct(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=sn(i),n.defaultValue=s,u=n.textContent,u===s&&u!==""&&u!==null&&(n.value=u)}function Bn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Od=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yl(n,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":u?n.setProperty(i,s):typeof s!="number"||s===0||Od.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function Dc(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&yl(n,h,u)}else for(var g in i)i.hasOwnProperty(g)&&yl(n,g,i[g])}function vl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cr(n){return kd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var jn=null;function Go(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ti=null,ei=null;function ni(n){var i=Qr(n);if(i&&(n=i.stateNode)){var s=n[Ue]||null;t:switch(n=i.stateNode,i.type){case"input":if(aa(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==n&&u.form===n.form){var h=u[Ue]||null;if(!h)throw Error(a(90));aa(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===n.form&&gl(u)}break t;case"textarea":Ka(n,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Bt(n,!!s.multiple,i,!1)}}}var bl=!1;function Mc(n,i,s){if(bl)return n(i,s);bl=!0;try{var u=n(i);return u}finally{if(bl=!1,(ti!==null||ei!==null)&&(Ef(),ti&&(i=ti,n=ei,ei=ti=null,ni(i),n)))for(i=0;i<n.length;i++)ni(n[i])}}function Wa(n,i){var s=n.stateNode;if(s===null)return null;var u=s[Ue]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Vn=!1;if(En)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Vn=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Vn=!1}var Or=null,sa=null,ri=null;function Sl(){if(ri)return ri;var n,i=sa,s=i.length,u,h="value"in Or?Or.value:Or.textContent,g=h.length;for(n=0;n<s&&i[n]===h[n];n++);var E=s-n;for(u=1;u<=E&&i[s-u]===h[g-u];u++);return ri=h.slice(n,1<u?1-u:void 0)}function Rr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function kr(){return!0}function Tl(){return!1}function Be(n){function i(s,u,h,g,E){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(s=n[O],this[O]=s?s(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?kr:Tl,this.isPropagationStopped=Tl,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),i}var Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Be(Xt),Qa=S({},Xt,{view:0,detail:0}),Pc=Be(Qa),Xo,Ko,Dr,Ja=S({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Dr&&(Dr&&n.type==="mousemove"?(Xo=n.screenX-Dr.screenX,Ko=n.screenY-Dr.screenY):Ko=Xo=0,Dr=n),Xo)},movementY:function(n){return"movementY"in n?n.movementY:Ko}}),Hn=Be(Ja),Nc=S({},Ja,{dataTransfer:0}),Dd=Be(Nc),to=S({},Qa,{relatedTarget:0}),Wo=Be(to),wl=S({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0}),Zo=Be(wl),Lc=S({},Xt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qo=Be(Lc),Md=S({},Xt,{data:0}),xl=Be(Md),eo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function El(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ic[n])?!!i[n]:!1}function no(){return El}var Uc=S({},Qa,{key:function(n){if(n.key){var i=eo[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Rr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(n){return n.type==="keypress"?Rr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jo=Be(Uc),Bc=S({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=Be(Bc),ii=S({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),jc=Be(ii),Vc=S({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hc=Be(Vc),qc=S({},Ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gn=Be(qc),$c=S({},Xt,{newState:0,oldState:0}),Fc=Be($c),la=[9,13,27,32],f=En&&"CompositionEvent"in window,v=null;En&&"documentMode"in document&&(v=document.documentMode);var T=En&&"TextEvent"in window&&!v,D=En&&(!f||v&&8<v&&11>=v),Y=" ",Z=!1;function st(n,i){switch(n){case"keyup":return la.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ft(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ae=!1;function zt(n,i){switch(n){case"compositionend":return Ft(i);case"keypress":return i.which!==32?null:(Z=!0,Y);case"textInput":return n=i.data,n===Y&&Z?null:n;default:return null}}function je(n,i){if(ae)return n==="compositionend"||!f&&st(n,i)?(n=Sl(),ri=sa=Or=null,ae=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return D&&i.locale!=="ko"?null:i.data;default:return null}}var Ve={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ai(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ve[n.type]:i==="textarea"}function yn(n,i,s,u){ti?ei?ei.push(u):ei=[u]:ti=u,i=Rf(i,"onChange"),0<i.length&&(s=new Yo("onChange","change",null,s,u),n.push({event:s,listeners:i}))}var Mr=null,oi=null;function K5(n){e1(n,0)}function Gc(n){var i=ea(n);if(gl(i))return n}function ky(n,i){if(n==="change")return i}var Dy=!1;if(En){var Pd;if(En){var Nd="oninput"in document;if(!Nd){var My=document.createElement("div");My.setAttribute("oninput","return;"),Nd=typeof My.oninput=="function"}Pd=Nd}else Pd=!1;Dy=Pd&&(!document.documentMode||9<document.documentMode)}function Py(){Mr&&(Mr.detachEvent("onpropertychange",Ny),oi=Mr=null)}function Ny(n){if(n.propertyName==="value"&&Gc(oi)){var i=[];yn(i,oi,n,Go(n)),Mc(K5,i)}}function W5(n,i,s){n==="focusin"?(Py(),Mr=i,oi=s,Mr.attachEvent("onpropertychange",Ny)):n==="focusout"&&Py()}function Z5(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gc(oi)}function Q5(n,i){if(n==="click")return Gc(i)}function J5(n,i){if(n==="input"||n==="change")return Gc(i)}function tA(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var An=typeof Object.is=="function"?Object.is:tA;function _l(n,i){if(An(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!$i.call(i,h)||!An(n[h],i[h]))return!1}return!0}function Ly(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zy(n,i){var s=Ly(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=i&&u>=i)return{node:s,offset:i-n};n=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Ly(s)}}function Iy(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Iy(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=$o(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=$o(n.document)}return i}function Ld(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function eA(n,i){var s=Uy(i);i=n.focusedElem;var u=n.selectionRange;if(s!==i&&i&&i.ownerDocument&&Iy(i.ownerDocument.documentElement,i)){if(u!==null&&Ld(i)){if(n=u.start,s=u.end,s===void 0&&(s=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(s,i.value.length);else if(s=(n=i.ownerDocument||document)&&n.defaultView||window,s.getSelection){s=s.getSelection();var h=i.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!s.extend&&g>u&&(h=u,u=g,g=h),h=zy(i,g);var E=zy(i,u);h&&E&&(s.rangeCount!==1||s.anchorNode!==h.node||s.anchorOffset!==h.offset||s.focusNode!==E.node||s.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),s.removeAllRanges(),g>u?(s.addRange(n),s.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),s.addRange(n)))}}for(n=[],s=i;s=s.parentNode;)s.nodeType===1&&n.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)s=n[i],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var nA=En&&"documentMode"in document&&11>=document.documentMode,ts=null,zd=null,Cl=null,Id=!1;function By(n,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Id||ts==null||ts!==$o(u)||(u=ts,"selectionStart"in u&&Ld(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Cl&&_l(Cl,u)||(Cl=u,u=Rf(zd,"onSelect"),0<u.length&&(i=new Yo("onSelect","select",null,i,s),n.push({event:i,listeners:u}),i.target=ts)))}function ro(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var es={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionrun:ro("Transition","TransitionRun"),transitionstart:ro("Transition","TransitionStart"),transitioncancel:ro("Transition","TransitionCancel"),transitionend:ro("Transition","TransitionEnd")},Ud={},jy={};En&&(jy=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function io(n){if(Ud[n])return Ud[n];if(!es[n])return n;var i=es[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in jy)return Ud[n]=i[s];return n}var Vy=io("animationend"),Hy=io("animationiteration"),qy=io("animationstart"),rA=io("transitionrun"),iA=io("transitionstart"),aA=io("transitioncancel"),$y=io("transitionend"),Fy=new Map,Gy="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ur(n,i){Fy.set(n,i),xn(i,[n])}var qn=[],ns=0,Bd=0;function Yc(){for(var n=ns,i=Bd=ns=0;i<n;){var s=qn[i];qn[i++]=null;var u=qn[i];qn[i++]=null;var h=qn[i];qn[i++]=null;var g=qn[i];if(qn[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}g!==0&&Yy(s,h,g)}}function Xc(n,i,s,u){qn[ns++]=n,qn[ns++]=i,qn[ns++]=s,qn[ns++]=u,Bd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function jd(n,i,s,u){return Xc(n,i,s,u),Kc(n)}function ua(n,i){return Xc(n,null,null,i),Kc(n)}function Yy(n,i,s){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s);for(var h=!1,g=n.return;g!==null;)g.childLanes|=s,u=g.alternate,u!==null&&(u.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(h=!0)),n=g,g=g.return;h&&i!==null&&n.tag===3&&(g=n.stateNode,h=31-on(s),g=g.hiddenUpdates,n=g[h],n===null?g[h]=[i]:n.push(i),i.lane=s|536870912)}function Kc(n){if(50<Ql)throw Ql=0,Gp=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var rs={},Xy=new WeakMap;function $n(n,i){if(typeof n=="object"&&n!==null){var s=Xy.get(n);return s!==void 0?s:(i={value:n,source:i,stack:lt(i)},Xy.set(n,i),i)}return{value:n,source:i,stack:lt(i)}}var is=[],as=0,Wc=null,Zc=0,Fn=[],Gn=0,ao=null,si=1,li="";function oo(n,i){is[as++]=Zc,is[as++]=Wc,Wc=n,Zc=i}function Ky(n,i,s){Fn[Gn++]=si,Fn[Gn++]=li,Fn[Gn++]=ao,ao=n;var u=si;n=li;var h=32-on(u)-1;u&=~(1<<h),s+=1;var g=32-on(i)+h;if(30<g){var E=h-h%5;g=(u&(1<<E)-1).toString(32),u>>=E,h-=E,si=1<<32-on(i)+h|s<<h|u,li=g+n}else si=1<<g|s<<h|u,li=n}function Vd(n){n.return!==null&&(oo(n,1),Ky(n,1,0))}function Hd(n){for(;n===Wc;)Wc=is[--as],is[as]=null,Zc=is[--as],is[as]=null;for(;n===ao;)ao=Fn[--Gn],Fn[Gn]=null,li=Fn[--Gn],Fn[Gn]=null,si=Fn[--Gn],Fn[Gn]=null}var ln=null,Ge=null,jt=!1,cr=null,Pr=!1,qd=Error(a(519));function so(n){var i=Error(a(418,""));throw kl($n(i,n)),qd}function Wy(n){var i=n.stateNode,s=n.type,u=n.memoizedProps;switch(i[Ie]=n,i[Ue]=u,s){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(s=0;s<tu.length;s++)Nt(tu[s],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),Xa(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ya(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),oa(i,u.value,u.defaultValue,u.children),Ya(i)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||a1(i.textContent,s)?(u.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),u.onScroll!=null&&Nt("scroll",i),u.onScrollEnd!=null&&Nt("scrollend",i),u.onClick!=null&&(i.onclick=kf),i=!0):i=!1,i||so(n)}function Zy(n){for(ln=n.return;ln;)switch(ln.tag){case 3:case 27:Pr=!0;return;case 5:case 13:Pr=!1;return;default:ln=ln.return}}function Ol(n){if(n!==ln)return!1;if(!jt)return Zy(n),jt=!0,!1;var i=!1,s;if((s=n.tag!==3&&n.tag!==27)&&((s=n.tag===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||um(n.type,n.memoizedProps)),s=!s),s&&(i=!0),i&&Ge&&so(n),Zy(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){Ge=hr(n.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;n=n.nextSibling}Ge=null}}else Ge=ln?hr(n.stateNode.nextSibling):null;return!0}function Rl(){Ge=ln=null,jt=!1}function kl(n){cr===null?cr=[n]:cr.push(n)}var Dl=Error(a(460)),Qy=Error(a(474)),$d={then:function(){}};function Jy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Qc(){}function tv(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(Qc,Qc),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,n===Dl?Error(a(483)):n;default:if(typeof i.status=="string")i.then(Qc,Qc);else{if(n=ee,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,n===Dl?Error(a(483)):n}throw Ml=i,Dl}}var Ml=null;function ev(){if(Ml===null)throw Error(a(459));var n=Ml;return Ml=null,n}var os=null,Pl=0;function Jc(n){var i=Pl;return Pl+=1,os===null&&(os=[]),tv(os,n,i)}function Nl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function tf(n,i){throw i.$$typeof===l?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function nv(n){var i=n._init;return i(n._payload)}function rv(n){function i(G,q){if(n){var X=G.deletions;X===null?(G.deletions=[q],G.flags|=16):X.push(q)}}function s(G,q){if(!n)return null;for(;q!==null;)i(G,q),q=q.sibling;return null}function u(G){for(var q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function h(G,q){return G=Ta(G,q),G.index=0,G.sibling=null,G}function g(G,q,X){return G.index=X,n?(X=G.alternate,X!==null?(X=X.index,X<q?(G.flags|=33554434,q):X):(G.flags|=33554434,q)):(G.flags|=1048576,q)}function E(G){return n&&G.alternate===null&&(G.flags|=33554434),G}function O(G,q,X,rt){return q===null||q.tag!==6?(q=Up(X,G.mode,rt),q.return=G,q):(q=h(q,X),q.return=G,q)}function I(G,q,X,rt){var ht=X.type;return ht===p?nt(G,q,X.props.children,rt,X.key):q!==null&&(q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===j&&nv(ht)===q.type)?(q=h(q,X.props),Nl(q,X),q.return=G,q):(q=bf(X.type,X.key,X.props,null,G.mode,rt),Nl(q,X),q.return=G,q)}function $(G,q,X,rt){return q===null||q.tag!==4||q.stateNode.containerInfo!==X.containerInfo||q.stateNode.implementation!==X.implementation?(q=Bp(X,G.mode,rt),q.return=G,q):(q=h(q,X.children||[]),q.return=G,q)}function nt(G,q,X,rt,ht){return q===null||q.tag!==7?(q=vo(X,G.mode,rt,ht),q.return=G,q):(q=h(q,X),q.return=G,q)}function at(G,q,X){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Up(""+q,G.mode,X),q.return=G,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case c:return X=bf(q.type,q.key,q.props,null,G.mode,X),Nl(X,q),X.return=G,X;case d:return q=Bp(q,G.mode,X),q.return=G,q;case j:var rt=q._init;return q=rt(q._payload),at(G,q,X)}if(ct(q)||W(q))return q=vo(q,G.mode,X,null),q.return=G,q;if(typeof q.then=="function")return at(G,Jc(q),X);if(q.$$typeof===_)return at(G,gf(G,q),X);tf(G,q)}return null}function K(G,q,X,rt){var ht=q!==null?q.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return ht!==null?null:O(G,q,""+X,rt);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case c:return X.key===ht?I(G,q,X,rt):null;case d:return X.key===ht?$(G,q,X,rt):null;case j:return ht=X._init,X=ht(X._payload),K(G,q,X,rt)}if(ct(X)||W(X))return ht!==null?null:nt(G,q,X,rt,null);if(typeof X.then=="function")return K(G,q,Jc(X),rt);if(X.$$typeof===_)return K(G,q,gf(G,X),rt);tf(G,X)}return null}function et(G,q,X,rt,ht){if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return G=G.get(X)||null,O(q,G,""+rt,ht);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case c:return G=G.get(rt.key===null?X:rt.key)||null,I(q,G,rt,ht);case d:return G=G.get(rt.key===null?X:rt.key)||null,$(q,G,rt,ht);case j:var Dt=rt._init;return rt=Dt(rt._payload),et(G,q,X,rt,ht)}if(ct(rt)||W(rt))return G=G.get(X)||null,nt(q,G,rt,ht,null);if(typeof rt.then=="function")return et(G,q,X,Jc(rt),ht);if(rt.$$typeof===_)return et(G,q,X,gf(q,rt),ht);tf(q,rt)}return null}function mt(G,q,X,rt){for(var ht=null,Dt=null,gt=q,bt=q=0,$e=null;gt!==null&&bt<X.length;bt++){gt.index>bt?($e=gt,gt=null):$e=gt.sibling;var Vt=K(G,gt,X[bt],rt);if(Vt===null){gt===null&&(gt=$e);break}n&&gt&&Vt.alternate===null&&i(G,gt),q=g(Vt,q,bt),Dt===null?ht=Vt:Dt.sibling=Vt,Dt=Vt,gt=$e}if(bt===X.length)return s(G,gt),jt&&oo(G,bt),ht;if(gt===null){for(;bt<X.length;bt++)gt=at(G,X[bt],rt),gt!==null&&(q=g(gt,q,bt),Dt===null?ht=gt:Dt.sibling=gt,Dt=gt);return jt&&oo(G,bt),ht}for(gt=u(gt);bt<X.length;bt++)$e=et(gt,G,bt,X[bt],rt),$e!==null&&(n&&$e.alternate!==null&&gt.delete($e.key===null?bt:$e.key),q=g($e,q,bt),Dt===null?ht=$e:Dt.sibling=$e,Dt=$e);return n&&gt.forEach(function(Oa){return i(G,Oa)}),jt&&oo(G,bt),ht}function wt(G,q,X,rt){if(X==null)throw Error(a(151));for(var ht=null,Dt=null,gt=q,bt=q=0,$e=null,Vt=X.next();gt!==null&&!Vt.done;bt++,Vt=X.next()){gt.index>bt?($e=gt,gt=null):$e=gt.sibling;var Oa=K(G,gt,Vt.value,rt);if(Oa===null){gt===null&&(gt=$e);break}n&&gt&&Oa.alternate===null&&i(G,gt),q=g(Oa,q,bt),Dt===null?ht=Oa:Dt.sibling=Oa,Dt=Oa,gt=$e}if(Vt.done)return s(G,gt),jt&&oo(G,bt),ht;if(gt===null){for(;!Vt.done;bt++,Vt=X.next())Vt=at(G,Vt.value,rt),Vt!==null&&(q=g(Vt,q,bt),Dt===null?ht=Vt:Dt.sibling=Vt,Dt=Vt);return jt&&oo(G,bt),ht}for(gt=u(gt);!Vt.done;bt++,Vt=X.next())Vt=et(gt,G,bt,Vt.value,rt),Vt!==null&&(n&&Vt.alternate!==null&&gt.delete(Vt.key===null?bt:Vt.key),q=g(Vt,q,bt),Dt===null?ht=Vt:Dt.sibling=Vt,Dt=Vt);return n&&gt.forEach(function(b_){return i(G,b_)}),jt&&oo(G,bt),ht}function ve(G,q,X,rt){if(typeof X=="object"&&X!==null&&X.type===p&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case c:t:{for(var ht=X.key;q!==null;){if(q.key===ht){if(ht=X.type,ht===p){if(q.tag===7){s(G,q.sibling),rt=h(q,X.props.children),rt.return=G,G=rt;break t}}else if(q.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===j&&nv(ht)===q.type){s(G,q.sibling),rt=h(q,X.props),Nl(rt,X),rt.return=G,G=rt;break t}s(G,q);break}else i(G,q);q=q.sibling}X.type===p?(rt=vo(X.props.children,G.mode,rt,X.key),rt.return=G,G=rt):(rt=bf(X.type,X.key,X.props,null,G.mode,rt),Nl(rt,X),rt.return=G,G=rt)}return E(G);case d:t:{for(ht=X.key;q!==null;){if(q.key===ht)if(q.tag===4&&q.stateNode.containerInfo===X.containerInfo&&q.stateNode.implementation===X.implementation){s(G,q.sibling),rt=h(q,X.children||[]),rt.return=G,G=rt;break t}else{s(G,q);break}else i(G,q);q=q.sibling}rt=Bp(X,G.mode,rt),rt.return=G,G=rt}return E(G);case j:return ht=X._init,X=ht(X._payload),ve(G,q,X,rt)}if(ct(X))return mt(G,q,X,rt);if(W(X)){if(ht=W(X),typeof ht!="function")throw Error(a(150));return X=ht.call(X),wt(G,q,X,rt)}if(typeof X.then=="function")return ve(G,q,Jc(X),rt);if(X.$$typeof===_)return ve(G,q,gf(G,X),rt);tf(G,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,q!==null&&q.tag===6?(s(G,q.sibling),rt=h(q,X),rt.return=G,G=rt):(s(G,q),rt=Up(X,G.mode,rt),rt.return=G,G=rt),E(G)):s(G,q)}return function(G,q,X,rt){try{Pl=0;var ht=ve(G,q,X,rt);return os=null,ht}catch(gt){if(gt===Dl)throw gt;var Dt=Wn(29,gt,null,G.mode);return Dt.lanes=rt,Dt.return=G,Dt}finally{}}}var lo=rv(!0),iv=rv(!1),ss=Lt(null),ef=Lt(0);function av(n,i){n=bi,Ht(ef,n),Ht(ss,i),bi=n|i.baseLanes}function Fd(){Ht(ef,bi),Ht(ss,ss.current)}function Gd(){bi=ef.current,ie(ss),ie(ef)}var Yn=Lt(null),Nr=null;function ca(n){var i=n.alternate;Ht(Me,Me.current&1),Ht(Yn,n),Nr===null&&(i===null||ss.current!==null||i.memoizedState!==null)&&(Nr=n)}function ov(n){if(n.tag===22){if(Ht(Me,Me.current),Ht(Yn,n),Nr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Nr=n)}}else fa()}function fa(){Ht(Me,Me.current),Ht(Yn,Yn.current)}function ui(n){ie(Yn),Nr===n&&(Nr=null),ie(Me)}var Me=Lt(0);function nf(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oA=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},sA=t.unstable_scheduleCallback,lA=t.unstable_NormalPriority,Pe={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yd(){return{controller:new oA,data:new Map,refCount:0}}function Ll(n){n.refCount--,n.refCount===0&&sA(lA,function(){n.controller.abort()})}var zl=null,Xd=0,ls=0,us=null;function uA(n,i){if(zl===null){var s=zl=[];Xd=0,ls=tm(),us={status:"pending",value:void 0,then:function(u){s.push(u)}}}return Xd++,i.then(sv,sv),i}function sv(){if(--Xd===0&&zl!==null){us!==null&&(us.status="fulfilled");var n=zl;zl=null,ls=0,us=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function cA(n,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var lv=R.S;R.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&uA(n,i),lv!==null&&lv(n,i)};var uo=Lt(null);function Kd(){var n=uo.current;return n!==null?n:ee.pooledCache}function rf(n,i){i===null?Ht(uo,uo.current):Ht(uo,i.pool)}function uv(){var n=Kd();return n===null?null:{parent:Pe._currentValue,pool:n}}var ha=0,kt=null,Kt=null,Ce=null,af=!1,cs=!1,co=!1,of=0,Il=0,fs=null,fA=0;function Ee(){throw Error(a(321))}function Wd(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!An(n[s],i[s]))return!1;return!0}function Zd(n,i,s,u,h,g){return ha=g,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,R.H=n===null||n.memoizedState===null?fo:da,co=!1,g=s(u,h),co=!1,cs&&(g=fv(i,s,u,h)),cv(n),g}function cv(n){R.H=Lr;var i=Kt!==null&&Kt.next!==null;if(ha=0,Ce=Kt=kt=null,af=!1,Il=0,fs=null,i)throw Error(a(300));n===null||He||(n=n.dependencies,n!==null&&mf(n)&&(He=!0))}function fv(n,i,s,u){kt=n;var h=0;do{if(cs&&(fs=null),Il=0,cs=!1,25<=h)throw Error(a(301));if(h+=1,Ce=Kt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}R.H=ho,g=i(s,u)}while(cs);return g}function hA(){var n=R.H,i=n.useState()[0];return i=typeof i.then=="function"?Ul(i):i,n=n.useState()[0],(Kt!==null?Kt.memoizedState:null)!==n&&(kt.flags|=1024),i}function Qd(){var n=of!==0;return of=0,n}function Jd(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function tp(n){if(af){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}af=!1}ha=0,Ce=Kt=kt=null,cs=!1,Il=of=0,fs=null}function vn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?kt.memoizedState=Ce=n:Ce=Ce.next=n,Ce}function Oe(){if(Kt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=Ce===null?kt.memoizedState:Ce.next;if(i!==null)Ce=i,Kt=n;else{if(n===null)throw kt.alternate===null?Error(a(467)):Error(a(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},Ce===null?kt.memoizedState=Ce=n:Ce=Ce.next=n}return Ce}var sf;sf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ul(n){var i=Il;return Il+=1,fs===null&&(fs=[]),n=tv(fs,n,i),i=kt,(Ce===null?i.memoizedState:Ce.next)===null&&(i=i.alternate,R.H=i===null||i.memoizedState===null?fo:da),n}function lf(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ul(n);if(n.$$typeof===_)return Qe(n)}throw Error(a(438,String(n)))}function ep(n){var i=null,s=kt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=kt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=sf(),kt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),u=0;u<n;u++)s[u]=F;return i.index++,s}function ci(n,i){return typeof i=="function"?i(n):i}function uf(n){var i=Oe();return np(i,Kt,n)}function np(n,i,s){var u=n.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=n.baseQueue,g=u.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}i.baseQueue=h=g,u.pending=null}if(g=n.baseState,h===null)n.memoizedState=g;else{i=h.next;var O=E=null,I=null,$=i,nt=!1;do{var at=$.lane&-536870913;if(at!==$.lane?(It&at)===at:(ha&at)===at){var K=$.revertLane;if(K===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),at===ls&&(nt=!0);else if((ha&K)===K){$=$.next,K===ls&&(nt=!0);continue}else at={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(O=I=at,E=g):I=I.next=at,kt.lanes|=K,wa|=K;at=$.action,co&&s(g,at),g=$.hasEagerState?$.eagerState:s(g,at)}else K={lane:at,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(O=I=K,E=g):I=I.next=K,kt.lanes|=at,wa|=at;$=$.next}while($!==null&&$!==i);if(I===null?E=g:I.next=O,!An(g,n.memoizedState)&&(He=!0,nt&&(s=us,s!==null)))throw s;n.memoizedState=g,n.baseState=E,n.baseQueue=I,u.lastRenderedState=g}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function rp(n){var i=Oe(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var u=s.dispatch,h=s.pending,g=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);An(g,i.memoizedState)||(He=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,u]}function hv(n,i,s){var u=kt,h=Oe(),g=jt;if(g){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!An((Kt||h).memoizedState,s);if(E&&(h.memoizedState=s,He=!0),h=h.queue,op(mv.bind(null,u,h,n),[n]),h.getSnapshot!==i||E||Ce!==null&&Ce.memoizedState.tag&1){if(u.flags|=2048,hs(9,pv.bind(null,u,h,s,i),{destroy:void 0},null),ee===null)throw Error(a(349));g||(ha&60)!==0||dv(u,i,s)}return s}function dv(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=kt.updateQueue,i===null?(i=sf(),kt.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function pv(n,i,s,u){i.value=s,i.getSnapshot=u,gv(i)&&yv(n)}function mv(n,i,s){return s(function(){gv(i)&&yv(n)})}function gv(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!An(n,s)}catch{return!0}}function yv(n){var i=ua(n,2);i!==null&&un(i,n,2)}function ip(n){var i=vn();if(typeof n=="function"){var s=n;if(n=s(),co){xr(!0);try{s()}finally{xr(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:n},i}function vv(n,i,s,u){return n.baseState=s,np(n,Kt,typeof u=="function"?u:ci)}function dA(n,i,s,u,h){if(hf(n))throw Error(a(485));if(n=i.action,n!==null){var g={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};R.T!==null?s(!0):g.isTransition=!1,u(g),s=i.pending,s===null?(g.next=i.pending=g,bv(i,g)):(g.next=s.next,i.pending=s.next=g)}}function bv(n,i){var s=i.action,u=i.payload,h=n.state;if(i.isTransition){var g=R.T,E={};R.T=E;try{var O=s(h,u),I=R.S;I!==null&&I(E,O),Sv(n,i,O)}catch($){ap(n,i,$)}finally{R.T=g}}else try{g=s(h,u),Sv(n,i,g)}catch($){ap(n,i,$)}}function Sv(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Tv(n,i,u)},function(u){return ap(n,i,u)}):Tv(n,i,s)}function Tv(n,i,s){i.status="fulfilled",i.value=s,wv(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,bv(n,s)))}function ap(n,i,s){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,wv(i),i=i.next;while(i!==u)}n.action=null}function wv(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function xv(n,i){return i}function Ev(n,i){if(jt){var s=ee.formState;if(s!==null){t:{var u=kt;if(jt){if(Ge){e:{for(var h=Ge,g=Pr;h.nodeType!==8;){if(!g){h=null;break e}if(h=hr(h.nextSibling),h===null){h=null;break e}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){Ge=hr(h.nextSibling),u=h.data==="F!";break t}}so(u)}u=!1}u&&(i=s[0])}}return s=vn(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:i},s.queue=u,s=Hv.bind(null,kt,u),u.dispatch=s,u=ip(!1),g=fp.bind(null,kt,!1,u.queue),u=vn(),h={state:i,dispatch:null,action:n,pending:null},u.queue=h,s=dA.bind(null,kt,h,g,s),h.dispatch=s,u.memoizedState=n,[i,s,!1]}function Av(n){var i=Oe();return _v(i,Kt,n)}function _v(n,i,s){i=np(n,i,xv)[0],n=uf(ci)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Ul(i):i;var u=Oe(),h=u.queue,g=h.dispatch;return s!==u.memoizedState&&(kt.flags|=2048,hs(9,pA.bind(null,h,s),{destroy:void 0},null)),[i,g,n]}function pA(n,i){n.action=i}function Cv(n){var i=Oe(),s=Kt;if(s!==null)return _v(i,s,n);Oe(),i=i.memoizedState,s=Oe();var u=s.queue.dispatch;return s.memoizedState=n,[i,u,!1]}function hs(n,i,s,u){return n={tag:n,create:i,inst:s,deps:u,next:null},i=kt.updateQueue,i===null&&(i=sf(),kt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,i.lastEffect=n),n}function Ov(){return Oe().memoizedState}function cf(n,i,s,u){var h=vn();kt.flags|=n,h.memoizedState=hs(1|i,s,{destroy:void 0},u===void 0?null:u)}function ff(n,i,s,u){var h=Oe();u=u===void 0?null:u;var g=h.memoizedState.inst;Kt!==null&&u!==null&&Wd(u,Kt.memoizedState.deps)?h.memoizedState=hs(i,s,g,u):(kt.flags|=n,h.memoizedState=hs(1|i,s,g,u))}function Rv(n,i){cf(8390656,8,n,i)}function op(n,i){ff(2048,8,n,i)}function kv(n,i){return ff(4,2,n,i)}function Dv(n,i){return ff(4,4,n,i)}function Mv(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Pv(n,i,s){s=s!=null?s.concat([n]):null,ff(4,4,Mv.bind(null,i,n),s)}function sp(){}function Nv(n,i){var s=Oe();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&Wd(i,u[1])?u[0]:(s.memoizedState=[n,i],n)}function Lv(n,i){var s=Oe();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&Wd(i,u[1]))return u[0];if(u=n(),co){xr(!0);try{n()}finally{xr(!1)}}return s.memoizedState=[u,i],u}function lp(n,i,s){return s===void 0||(ha&1073741824)!==0?n.memoizedState=i:(n.memoizedState=s,n=Ib(),kt.lanes|=n,wa|=n,s)}function zv(n,i,s,u){return An(s,i)?s:ss.current!==null?(n=lp(n,s,u),An(n,i)||(He=!0),n):(ha&42)===0?(He=!0,n.memoizedState=s):(n=Ib(),kt.lanes|=n,wa|=n,i)}function Iv(n,i,s,u,h){var g=ft.p;ft.p=g!==0&&8>g?g:8;var E=R.T,O={};R.T=O,fp(n,!1,i,s);try{var I=h(),$=R.S;if($!==null&&$(O,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var nt=cA(I,u);Bl(n,i,nt,Rn(n))}else Bl(n,i,u,Rn(n))}catch(at){Bl(n,i,{then:function(){},status:"rejected",reason:at},Rn())}finally{ft.p=g,R.T=E}}function mA(){}function up(n,i,s,u){if(n.tag!==5)throw Error(a(476));var h=Uv(n).queue;Iv(n,h,i,At,s===null?mA:function(){return Bv(n),s(u)})}function Uv(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:At,baseState:At,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:At},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Bv(n){var i=Uv(n).next.queue;Bl(n,i,{},Rn())}function cp(){return Qe(au)}function jv(){return Oe().memoizedState}function Vv(){return Oe().memoizedState}function gA(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=Rn();n=ga(s);var u=ya(i,n,s);u!==null&&(un(u,i,s),Hl(u,i,s)),i={cache:Yd()},n.payload=i;return}i=i.return}}function yA(n,i,s){var u=Rn();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},hf(n)?qv(i,s):(s=jd(n,i,s,u),s!==null&&(un(s,n,u),$v(s,i,u)))}function Hv(n,i,s){var u=Rn();Bl(n,i,s,u)}function Bl(n,i,s,u){var h={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(hf(n))qv(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,O=g(E,s);if(h.hasEagerState=!0,h.eagerState=O,An(O,E))return Xc(n,i,h,0),ee===null&&Yc(),!1}catch{}finally{}if(s=jd(n,i,h,u),s!==null)return un(s,n,u),$v(s,i,u),!0}return!1}function fp(n,i,s,u){if(u={lane:2,revertLane:tm(),action:u,hasEagerState:!1,eagerState:null,next:null},hf(n)){if(i)throw Error(a(479))}else i=jd(n,s,u,2),i!==null&&un(i,n,2)}function hf(n){var i=n.alternate;return n===kt||i!==null&&i===kt}function qv(n,i){cs=af=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function $v(n,i,s){if((s&4194176)!==0){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Zi(n,s)}}var Lr={readContext:Qe,use:lf,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee};Lr.useCacheRefresh=Ee,Lr.useMemoCache=Ee,Lr.useHostTransitionStatus=Ee,Lr.useFormState=Ee,Lr.useActionState=Ee,Lr.useOptimistic=Ee;var fo={readContext:Qe,use:lf,useCallback:function(n,i){return vn().memoizedState=[n,i===void 0?null:i],n},useContext:Qe,useEffect:Rv,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,cf(4194308,4,Mv.bind(null,i,n),s)},useLayoutEffect:function(n,i){return cf(4194308,4,n,i)},useInsertionEffect:function(n,i){cf(4,2,n,i)},useMemo:function(n,i){var s=vn();i=i===void 0?null:i;var u=n();if(co){xr(!0);try{n()}finally{xr(!1)}}return s.memoizedState=[u,i],u},useReducer:function(n,i,s){var u=vn();if(s!==void 0){var h=s(i);if(co){xr(!0);try{s(i)}finally{xr(!1)}}}else h=i;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=yA.bind(null,kt,n),[u.memoizedState,n]},useRef:function(n){var i=vn();return n={current:n},i.memoizedState=n},useState:function(n){n=ip(n);var i=n.queue,s=Hv.bind(null,kt,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:sp,useDeferredValue:function(n,i){var s=vn();return lp(s,n,i)},useTransition:function(){var n=ip(!1);return n=Iv.bind(null,kt,n.queue,!0,!1),vn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var u=kt,h=vn();if(jt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ee===null)throw Error(a(349));(It&60)!==0||dv(u,i,s)}h.memoizedState=s;var g={value:s,getSnapshot:i};return h.queue=g,Rv(mv.bind(null,u,g,n),[n]),u.flags|=2048,hs(9,pv.bind(null,u,g,s,i),{destroy:void 0},null),s},useId:function(){var n=vn(),i=ee.identifierPrefix;if(jt){var s=li,u=si;s=(u&~(1<<32-on(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=of++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=fA++,i=":"+i+"r"+s.toString(32)+":";return n.memoizedState=i},useCacheRefresh:function(){return vn().memoizedState=gA.bind(null,kt)}};fo.useMemoCache=ep,fo.useHostTransitionStatus=cp,fo.useFormState=Ev,fo.useActionState=Ev,fo.useOptimistic=function(n){var i=vn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=fp.bind(null,kt,!0,s),s.dispatch=i,[n,i]};var da={readContext:Qe,use:lf,useCallback:Nv,useContext:Qe,useEffect:op,useImperativeHandle:Pv,useInsertionEffect:kv,useLayoutEffect:Dv,useMemo:Lv,useReducer:uf,useRef:Ov,useState:function(){return uf(ci)},useDebugValue:sp,useDeferredValue:function(n,i){var s=Oe();return zv(s,Kt.memoizedState,n,i)},useTransition:function(){var n=uf(ci)[0],i=Oe().memoizedState;return[typeof n=="boolean"?n:Ul(n),i]},useSyncExternalStore:hv,useId:jv};da.useCacheRefresh=Vv,da.useMemoCache=ep,da.useHostTransitionStatus=cp,da.useFormState=Av,da.useActionState=Av,da.useOptimistic=function(n,i){var s=Oe();return vv(s,Kt,n,i)};var ho={readContext:Qe,use:lf,useCallback:Nv,useContext:Qe,useEffect:op,useImperativeHandle:Pv,useInsertionEffect:kv,useLayoutEffect:Dv,useMemo:Lv,useReducer:rp,useRef:Ov,useState:function(){return rp(ci)},useDebugValue:sp,useDeferredValue:function(n,i){var s=Oe();return Kt===null?lp(s,n,i):zv(s,Kt.memoizedState,n,i)},useTransition:function(){var n=rp(ci)[0],i=Oe().memoizedState;return[typeof n=="boolean"?n:Ul(n),i]},useSyncExternalStore:hv,useId:jv};ho.useCacheRefresh=Vv,ho.useMemoCache=ep,ho.useHostTransitionStatus=cp,ho.useFormState=Cv,ho.useActionState=Cv,ho.useOptimistic=function(n,i){var s=Oe();return Kt!==null?vv(s,Kt,n,i):(s.baseState=n,[n,s.queue.dispatch])};function hp(n,i,s,u){i=n.memoizedState,s=s(u,i),s=s==null?i:S({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var dp={isMounted:function(n){return(n=n._reactInternals)?ut(n)===n:!1},enqueueSetState:function(n,i,s){n=n._reactInternals;var u=Rn(),h=ga(u);h.payload=i,s!=null&&(h.callback=s),i=ya(n,h,u),i!==null&&(un(i,n,u),Hl(i,n,u))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var u=Rn(),h=ga(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ya(n,h,u),i!==null&&(un(i,n,u),Hl(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Rn(),u=ga(s);u.tag=2,i!=null&&(u.callback=i),i=ya(n,u,s),i!==null&&(un(i,n,s),Hl(i,n,s))}};function Fv(n,i,s,u,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):i.prototype&&i.prototype.isPureReactComponent?!_l(s,u)||!_l(h,g):!0}function Gv(n,i,s,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==n&&dp.enqueueReplaceState(i,i.state,null)}function po(n,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(n=n.defaultProps){s===i&&(s=S({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var df=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Yv(n){df(n)}function Xv(n){console.error(n)}function Kv(n){df(n)}function pf(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Wv(n,i,s){try{var u=n.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function pp(n,i,s){return s=ga(s),s.tag=3,s.payload={element:null},s.callback=function(){pf(n,i)},s}function Zv(n){return n=ga(n),n.tag=3,n}function Qv(n,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var g=u.value;n.payload=function(){return h(g)},n.callback=function(){Wv(i,s,u)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Wv(i,s,u),typeof h!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function vA(n,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&Vl(i,s,h,!0),s=Yn.current,s!==null){switch(s.tag){case 13:return Nr===null?Kp():s.alternate===null&&ye===0&&(ye=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===$d?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),Zp(n,u,h)),!1;case 22:return s.flags|=65536,u===$d?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),Zp(n,u,h)),!1}throw Error(a(435,s.tag))}return Zp(n,u,h),Kp(),!1}if(jt)return i=Yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==qd&&(n=Error(a(422),{cause:u}),kl($n(n,s)))):(u!==qd&&(i=Error(a(423),{cause:u}),kl($n(i,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=$n(u,s),h=pp(n.stateNode,u,h),Rp(n,h),ye!==4&&(ye=2)),!1;var g=Error(a(520),{cause:u});if(g=$n(g,s),Wl===null?Wl=[g]:Wl.push(g),ye!==4&&(ye=2),i===null)return!0;u=$n(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=pp(s.stateNode,u,n),Rp(s,n),!1;case 1:if(i=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xa===null||!xa.has(g))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Zv(h),Qv(h,n,s,u),Rp(s,h),!1}s=s.return}while(s!==null);return!1}var Jv=Error(a(461)),He=!1;function Ye(n,i,s,u){i.child=n===null?iv(i,null,s,u):lo(i,n.child,s,u)}function tb(n,i,s,u,h){s=s.render;var g=i.ref;if("ref"in u){var E={};for(var O in u)O!=="ref"&&(E[O]=u[O])}else E=u;return go(i),u=Zd(n,i,s,E,g,h),O=Qd(),n!==null&&!He?(Jd(n,i,h),fi(n,i,h)):(jt&&O&&Vd(i),i.flags|=1,Ye(n,i,u,h),i.child)}function eb(n,i,s,u,h){if(n===null){var g=s.type;return typeof g=="function"&&!Ip(g)&&g.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=g,nb(n,i,g,u,h)):(n=bf(s.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!xp(n,h)){var E=g.memoizedProps;if(s=s.compare,s=s!==null?s:_l,s(E,u)&&n.ref===i.ref)return fi(n,i,h)}return i.flags|=1,n=Ta(g,u),n.ref=i.ref,n.return=i,i.child=n}function nb(n,i,s,u,h){if(n!==null){var g=n.memoizedProps;if(_l(g,u)&&n.ref===i.ref)if(He=!1,i.pendingProps=u=g,xp(n,h))(n.flags&131072)!==0&&(He=!0);else return i.lanes=n.lanes,fi(n,i,h)}return mp(n,i,s,u,h)}function rb(n,i,s){var u=i.pendingProps,h=u.children,g=(i.stateNode._pendingVisibility&2)!==0,E=n!==null?n.memoizedState:null;if(jl(n,i),u.mode==="hidden"||g){if((i.flags&128)!==0){if(u=E!==null?E.baseLanes|s:s,n!==null){for(h=i.child=n.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;i.childLanes=g&~u}else i.childLanes=0,i.child=null;return ib(n,i,u,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&rf(i,E!==null?E.cachePool:null),E!==null?av(i,E):Fd(),ov(i);else return i.lanes=i.childLanes=536870912,ib(n,i,E!==null?E.baseLanes|s:s,s)}else E!==null?(rf(i,E.cachePool),av(i,E),fa(),i.memoizedState=null):(n!==null&&rf(i,null),Fd(),fa());return Ye(n,i,h,s),i.child}function ib(n,i,s,u){var h=Kd();return h=h===null?null:{parent:Pe._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},n!==null&&rf(i,null),Fd(),ov(i),n!==null&&Vl(n,i,u,!0),null}function jl(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=2097664)}}function mp(n,i,s,u,h){return go(i),s=Zd(n,i,s,u,void 0,h),u=Qd(),n!==null&&!He?(Jd(n,i,h),fi(n,i,h)):(jt&&u&&Vd(i),i.flags|=1,Ye(n,i,s,h),i.child)}function ab(n,i,s,u,h,g){return go(i),i.updateQueue=null,s=fv(i,u,s,h),cv(n),u=Qd(),n!==null&&!He?(Jd(n,i,g),fi(n,i,g)):(jt&&u&&Vd(i),i.flags|=1,Ye(n,i,s,g),i.child)}function ob(n,i,s,u,h){if(go(i),i.stateNode===null){var g=rs,E=s.contextType;typeof E=="object"&&E!==null&&(g=Qe(E)),g=new s(u,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=dp,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=u,g.state=i.memoizedState,g.refs={},Cp(i),E=s.contextType,g.context=typeof E=="object"&&E!==null?Qe(E):rs,g.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(hp(i,s,E,u),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&dp.enqueueReplaceState(g,g.state,null),$l(i,u,g,h),ql(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){g=i.stateNode;var O=i.memoizedProps,I=po(s,O);g.props=I;var $=g.context,nt=s.contextType;E=rs,typeof nt=="object"&&nt!==null&&(E=Qe(nt));var at=s.getDerivedStateFromProps;nt=typeof at=="function"||typeof g.getSnapshotBeforeUpdate=="function",O=i.pendingProps!==O,nt||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(O||$!==E)&&Gv(i,g,u,E),ma=!1;var K=i.memoizedState;g.state=K,$l(i,u,g,h),ql(),$=i.memoizedState,O||K!==$||ma?(typeof at=="function"&&(hp(i,s,at,u),$=i.memoizedState),(I=ma||Fv(i,s,I,u,K,$,E))?(nt||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=$),g.props=u,g.state=$,g.context=E,u=I):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,Op(n,i),E=i.memoizedProps,nt=po(s,E),g.props=nt,at=i.pendingProps,K=g.context,$=s.contextType,I=rs,typeof $=="object"&&$!==null&&(I=Qe($)),O=s.getDerivedStateFromProps,($=typeof O=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==at||K!==I)&&Gv(i,g,u,I),ma=!1,K=i.memoizedState,g.state=K,$l(i,u,g,h),ql();var et=i.memoizedState;E!==at||K!==et||ma||n!==null&&n.dependencies!==null&&mf(n.dependencies)?(typeof O=="function"&&(hp(i,s,O,u),et=i.memoizedState),(nt=ma||Fv(i,s,nt,u,K,et,I)||n!==null&&n.dependencies!==null&&mf(n.dependencies))?($||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,et,I),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,et,I)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=et),g.props=u,g.state=et,g.context=I,u=nt):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),u=!1)}return g=u,jl(n,i),u=(i.flags&128)!==0,g||u?(g=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,n!==null&&u?(i.child=lo(i,n.child,null,h),i.child=lo(i,null,s,h)):Ye(n,i,s,h),i.memoizedState=g.state,n=i.child):n=fi(n,i,h),n}function sb(n,i,s,u){return Rl(),i.flags|=256,Ye(n,i,s,u),i.child}var gp={dehydrated:null,treeContext:null,retryLane:0};function yp(n){return{baseLanes:n,cachePool:uv()}}function vp(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=Zn),n}function lb(n,i,s){var u=i.pendingProps,h=!1,g=(i.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(Me.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(jt){if(h?ca(i):fa(),jt){var O=Ge,I;if(I=O){t:{for(I=O,O=Pr;I.nodeType!==8;){if(!O){O=null;break t}if(I=hr(I.nextSibling),I===null){O=null;break t}}O=I}O!==null?(i.memoizedState={dehydrated:O,treeContext:ao!==null?{id:si,overflow:li}:null,retryLane:536870912},I=Wn(18,null,null,0),I.stateNode=O,I.return=i,i.child=I,ln=i,Ge=null,I=!0):I=!1}I||so(i)}if(O=i.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return O.data==="$!"?i.lanes=16:i.lanes=536870912,null;ui(i)}return O=u.children,u=u.fallback,h?(fa(),h=i.mode,O=Sp({mode:"hidden",children:O},h),u=vo(u,h,s,null),O.return=i,u.return=i,O.sibling=u,i.child=O,h=i.child,h.memoizedState=yp(s),h.childLanes=vp(n,E,s),i.memoizedState=gp,u):(ca(i),bp(i,O))}if(I=n.memoizedState,I!==null&&(O=I.dehydrated,O!==null)){if(g)i.flags&256?(ca(i),i.flags&=-257,i=Tp(n,i,s)):i.memoizedState!==null?(fa(),i.child=n.child,i.flags|=128,i=null):(fa(),h=u.fallback,O=i.mode,u=Sp({mode:"visible",children:u.children},O),h=vo(h,O,s,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,lo(i,n.child,null,s),u=i.child,u.memoizedState=yp(s),u.childLanes=vp(n,E,s),i.memoizedState=gp,i=h);else if(ca(i),O.data==="$!"){if(E=O.nextSibling&&O.nextSibling.dataset,E)var $=E.dgst;E=$,u=Error(a(419)),u.stack="",u.digest=E,kl({value:u,source:null,stack:null}),i=Tp(n,i,s)}else if(He||Vl(n,i,s,!1),E=(s&n.childLanes)!==0,He||E){if(E=ee,E!==null){if(u=s&-s,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(E.suspendedLanes|s))!==0?0:u,u!==0&&u!==I.retryLane)throw I.retryLane=u,ua(n,u),un(E,n,u),Jv}O.data==="$?"||Kp(),i=Tp(n,i,s)}else O.data==="$?"?(i.flags|=128,i.child=n.child,i=PA.bind(null,n),O._reactRetry=i,i=null):(n=I.treeContext,Ge=hr(O.nextSibling),ln=i,jt=!0,cr=null,Pr=!1,n!==null&&(Fn[Gn++]=si,Fn[Gn++]=li,Fn[Gn++]=ao,si=n.id,li=n.overflow,ao=i),i=bp(i,u.children),i.flags|=4096);return i}return h?(fa(),h=u.fallback,O=i.mode,I=n.child,$=I.sibling,u=Ta(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&31457280,$!==null?h=Ta($,h):(h=vo(h,O,s,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,O=n.child.memoizedState,O===null?O=yp(s):(I=O.cachePool,I!==null?($=Pe._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=uv(),O={baseLanes:O.baseLanes|s,cachePool:I}),h.memoizedState=O,h.childLanes=vp(n,E,s),i.memoizedState=gp,u):(ca(i),s=n.child,n=s.sibling,s=Ta(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=s,i.memoizedState=null,s)}function bp(n,i){return i=Sp({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Sp(n,i){return Nb(n,i,0,null)}function Tp(n,i,s){return lo(i,n.child,null,s),n=bp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ub(n,i,s){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ap(n.return,i,s)}function wp(n,i,s,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=s,g.tailMode=h)}function cb(n,i,s){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(Ye(n,i,u.children,s),u=Me.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ub(n,s,i);else if(n.tag===19)ub(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Ht(Me,u),h){case"forwards":for(s=i.child,h=null;s!==null;)n=s.alternate,n!==null&&nf(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),wp(i,!1,h,s,g);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&nf(n)===null){i.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}wp(i,!0,s,null,g);break;case"together":wp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fi(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),wa|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(Vl(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=Ta(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=Ta(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function xp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&mf(n)))}function bA(n,i,s){switch(i.tag){case 3:Sr(i,i.stateNode.containerInfo),pa(i,Pe,n.memoizedState.cache),Rl();break;case 27:case 5:Tr(i);break;case 4:Sr(i,i.stateNode.containerInfo);break;case 10:pa(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(ca(i),i.flags|=128,null):(s&i.child.childLanes)!==0?lb(n,i,s):(ca(i),n=fi(n,i,s),n!==null?n.sibling:null);ca(i);break;case 19:var h=(n.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(Vl(n,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return cb(n,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ht(Me,Me.current),u)break;return null;case 22:case 23:return i.lanes=0,rb(n,i,s);case 24:pa(i,Pe,n.memoizedState.cache)}return fi(n,i,s)}function fb(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)He=!0;else{if(!xp(n,s)&&(i.flags&128)===0)return He=!1,bA(n,i,s);He=(n.flags&131072)!==0}else He=!1,jt&&(i.flags&1048576)!==0&&Ky(i,Zc,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")Ip(u)?(n=po(u,n),i.tag=1,i=ob(null,i,u,n,s)):(i.tag=0,i=mp(null,i,u,n,s));else{if(u!=null){if(h=u.$$typeof,h===x){i.tag=11,i=tb(null,i,u,n,s);break t}else if(h===M){i.tag=14,i=eb(null,i,u,n,s);break t}}throw i=k(u)||u,Error(a(306,i,""))}}return i;case 0:return mp(n,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=po(u,i.pendingProps),ob(n,i,u,h,s);case 3:t:{if(Sr(i,i.stateNode.containerInfo),n===null)throw Error(a(387));var g=i.pendingProps;h=i.memoizedState,u=h.element,Op(n,i),$l(i,g,null,s);var E=i.memoizedState;if(g=E.cache,pa(i,Pe,g),g!==h.cache&&_p(i,[Pe],s,!0),ql(),g=E.element,h.isDehydrated)if(h={element:g,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=sb(n,i,g,s);break t}else if(g!==u){u=$n(Error(a(424)),i),kl(u),i=sb(n,i,g,s);break t}else for(Ge=hr(i.stateNode.containerInfo.firstChild),ln=i,jt=!0,cr=null,Pr=!0,s=iv(i,null,g,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Rl(),g===u){i=fi(n,i,s);break t}Ye(n,i,g,s)}i=i.child}return i;case 26:return jl(n,i),n===null?(s=p1(i.type,null,i.pendingProps,null))?i.memoizedState=s:jt||(s=i.type,n=i.pendingProps,u=Df(dn.current).createElement(s),u[Ie]=i,u[Ue]=n,Xe(u,s,n),le(u),i.stateNode=u):i.memoizedState=p1(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Tr(i),n===null&&jt&&(u=i.stateNode=f1(i.type,i.pendingProps,dn.current),ln=i,Pr=!0,Ge=hr(u.firstChild)),u=i.pendingProps.children,n!==null||jt?Ye(n,i,u,s):i.child=lo(i,null,u,s),jl(n,i),i.child;case 5:return n===null&&jt&&((h=u=Ge)&&(u=KA(u,i.type,i.pendingProps,Pr),u!==null?(i.stateNode=u,ln=i,Ge=hr(u.firstChild),Pr=!1,h=!0):h=!1),h||so(i)),Tr(i),h=i.type,g=i.pendingProps,E=n!==null?n.memoizedProps:null,u=g.children,um(h,g)?u=null:E!==null&&um(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Zd(n,i,hA,null,null,s),au._currentValue=h),jl(n,i),Ye(n,i,u,s),i.child;case 6:return n===null&&jt&&((n=s=Ge)&&(s=WA(s,i.pendingProps,Pr),s!==null?(i.stateNode=s,ln=i,Ge=null,n=!0):n=!1),n||so(i)),null;case 13:return lb(n,i,s);case 4:return Sr(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=lo(i,null,u,s):Ye(n,i,u,s),i.child;case 11:return tb(n,i,i.type,i.pendingProps,s);case 7:return Ye(n,i,i.pendingProps,s),i.child;case 8:return Ye(n,i,i.pendingProps.children,s),i.child;case 12:return Ye(n,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,pa(i,i.type,u.value),Ye(n,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,go(i),h=Qe(h),u=u(h),i.flags|=1,Ye(n,i,u,s),i.child;case 14:return eb(n,i,i.type,i.pendingProps,s);case 15:return nb(n,i,i.type,i.pendingProps,s);case 19:return cb(n,i,s);case 22:return rb(n,i,s);case 24:return go(i),u=Qe(Pe),n===null?(h=Kd(),h===null&&(h=ee,g=Yd(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=s),h=g),i.memoizedState={parent:u,cache:h},Cp(i),pa(i,Pe,h)):((n.lanes&s)!==0&&(Op(n,i),$l(i,null,null,s),ql()),h=n.memoizedState,g=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),pa(i,Pe,u)):(u=g.cache,pa(i,Pe,u),u!==h.cache&&_p(i,[Pe],s,!0))),Ye(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}var Ep=Lt(null),mo=null,hi=null;function pa(n,i,s){Ht(Ep,i._currentValue),i._currentValue=s}function di(n){n._currentValue=Ep.current,ie(Ep)}function Ap(n,i,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===s)break;n=n.return}}function _p(n,i,s,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var g=h.dependencies;if(g!==null){var E=h.child;g=g.firstContext;t:for(;g!==null;){var O=g;g=h;for(var I=0;I<i.length;I++)if(O.context===i[I]){g.lanes|=s,O=g.alternate,O!==null&&(O.lanes|=s),Ap(g.return,s,n),u||(E=null);break t}g=O.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,g=E.alternate,g!==null&&(g.lanes|=s),Ap(E,s,n),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===n){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Vl(n,i,s,u){n=null;for(var h=i,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var O=h.type;An(h.pendingProps.value,E.value)||(n!==null?n.push(O):n=[O])}}else if(h===zn.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(au):n=[au])}h=h.return}n!==null&&_p(i,n,s,u),i.flags|=262144}function mf(n){for(n=n.firstContext;n!==null;){if(!An(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function go(n){mo=n,hi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Qe(n){return hb(mo,n)}function gf(n,i){return mo===null&&go(n),hb(n,i)}function hb(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},hi===null){if(n===null)throw Error(a(308));hi=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else hi=hi.next=i;return s}var ma=!1;function Cp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Op(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ga(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ya(n,i,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(ce&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Kc(n),Yy(n,null,s),i}return Xc(n,u,i,s),Kc(n)}function Hl(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194176)!==0)){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Zi(n,s)}}function Rp(n,i){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?h=g=E:g=g.next=E,s=s.next}while(s!==null);g===null?h=g=i:g=g.next=i}else h=g=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var kp=!1;function ql(){if(kp){var n=us;if(n!==null)throw n}}function $l(n,i,s,u){kp=!1;var h=n.updateQueue;ma=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var I=O,$=I.next;I.next=null,E===null?g=$:E.next=$,E=I;var nt=n.alternate;nt!==null&&(nt=nt.updateQueue,O=nt.lastBaseUpdate,O!==E&&(O===null?nt.firstBaseUpdate=$:O.next=$,nt.lastBaseUpdate=I))}if(g!==null){var at=h.baseState;E=0,nt=$=I=null,O=g;do{var K=O.lane&-536870913,et=K!==O.lane;if(et?(It&K)===K:(u&K)===K){K!==0&&K===ls&&(kp=!0),nt!==null&&(nt=nt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var mt=n,wt=O;K=i;var ve=s;switch(wt.tag){case 1:if(mt=wt.payload,typeof mt=="function"){at=mt.call(ve,at,K);break t}at=mt;break t;case 3:mt.flags=mt.flags&-65537|128;case 0:if(mt=wt.payload,K=typeof mt=="function"?mt.call(ve,at,K):mt,K==null)break t;at=S({},at,K);break t;case 2:ma=!0}}K=O.callback,K!==null&&(n.flags|=64,et&&(n.flags|=8192),et=h.callbacks,et===null?h.callbacks=[K]:et.push(K))}else et={lane:K,tag:O.tag,payload:O.payload,callback:O.callback,next:null},nt===null?($=nt=et,I=at):nt=nt.next=et,E|=K;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;et=O,O=et.next,et.next=null,h.lastBaseUpdate=et,h.shared.pending=null}}while(!0);nt===null&&(I=at),h.baseState=I,h.firstBaseUpdate=$,h.lastBaseUpdate=nt,g===null&&(h.shared.lanes=0),wa|=E,n.lanes=E,n.memoizedState=at}}function db(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function pb(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)db(s[n],i)}function Fl(n,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&n)===n){u=void 0;var g=s.create,E=s.inst;u=g(),E.destroy=u}s=s.next}while(s!==h)}}catch(O){Qt(i,i.return,O)}}function va(n,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var g=h.next;u=g;do{if((u.tag&n)===n){var E=u.inst,O=E.destroy;if(O!==void 0){E.destroy=void 0,h=i;var I=s;try{O()}catch($){Qt(h,I,$)}}}u=u.next}while(u!==g)}}catch($){Qt(i,i.return,$)}}function mb(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{pb(i,s)}catch(u){Qt(n,n.return,u)}}}function gb(n,i,s){s.props=po(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(u){Qt(n,i,u)}}function yo(n,i){try{var s=n.ref;if(s!==null){var u=n.stateNode;switch(n.tag){case 26:case 27:case 5:var h=u;break;default:h=u}typeof s=="function"?n.refCleanup=s(h):s.current=h}}catch(g){Qt(n,i,g)}}function _n(n,i){var s=n.ref,u=n.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){Qt(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Qt(n,i,h)}else s.current=null}function yb(n){var i=n.type,s=n.memoizedProps,u=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){Qt(n,n.return,h)}}function vb(n,i,s){try{var u=n.stateNode;$A(u,n.type,s,i),u[Ue]=i}catch(h){Qt(n,n.return,h)}}function bb(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Dp(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||bb(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mp(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(n,i):s.insertBefore(n,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(n,s)):(i=s,i.appendChild(n)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=kf));else if(u!==4&&u!==27&&(n=n.child,n!==null))for(Mp(n,i,s),n=n.sibling;n!==null;)Mp(n,i,s),n=n.sibling}function yf(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(u!==4&&u!==27&&(n=n.child,n!==null))for(yf(n,i,s),n=n.sibling;n!==null;)yf(n,i,s),n=n.sibling}var pi=!1,ge=!1,Pp=!1,Sb=typeof WeakSet=="function"?WeakSet:Set,qe=null,Tb=!1;function SA(n,i){if(n=n.containerInfo,sm=If,n=Uy(n),Ld(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var E=0,O=-1,I=-1,$=0,nt=0,at=n,K=null;e:for(;;){for(var et;at!==s||h!==0&&at.nodeType!==3||(O=E+h),at!==g||u!==0&&at.nodeType!==3||(I=E+u),at.nodeType===3&&(E+=at.nodeValue.length),(et=at.firstChild)!==null;)K=at,at=et;for(;;){if(at===n)break e;if(K===s&&++$===h&&(O=E),K===g&&++nt===u&&(I=E),(et=at.nextSibling)!==null)break;at=K,K=at.parentNode}at=et}s=O===-1||I===-1?null:{start:O,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(lm={focusedElem:n,selectionRange:s},If=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){switch(i=qe,g=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=i,h=g.memoizedProps,g=g.memoizedState,u=s.stateNode;try{var mt=po(s.type,h,s.elementType===s.type);n=u.getSnapshotBeforeUpdate(mt,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(wt){Qt(s,s.return,wt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)hm(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return mt=Tb,Tb=!1,mt}function wb(n,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:gi(n,s),u&4&&Fl(5,s);break;case 1:if(gi(n,s),u&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(O){Qt(s,s.return,O)}else{var h=po(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(O){Qt(s,s.return,O)}}u&64&&mb(s),u&512&&yo(s,s.return);break;case 3:if(gi(n,s),u&64&&(u=s.updateQueue,u!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{pb(u,n)}catch(O){Qt(s,s.return,O)}}break;case 26:gi(n,s),u&512&&yo(s,s.return);break;case 27:case 5:gi(n,s),i===null&&u&4&&yb(s),u&512&&yo(s,s.return);break;case 12:gi(n,s);break;case 13:gi(n,s),u&4&&Ab(n,s);break;case 22:if(h=s.memoizedState!==null||pi,!h){i=i!==null&&i.memoizedState!==null||ge;var g=pi,E=ge;pi=h,(ge=i)&&!E?ba(n,s,(s.subtreeFlags&8772)!==0):gi(n,s),pi=g,ge=E}u&512&&(s.memoizedProps.mode==="manual"?yo(s,s.return):_n(s,s.return));break;default:gi(n,s)}}function xb(n){var i=n.alternate;i!==null&&(n.alternate=null,xb(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ga(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Re=null,Cn=!1;function mi(n,i,s){for(s=s.child;s!==null;)Eb(n,i,s),s=s.sibling}function Eb(n,i,s){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Gi,s)}catch{}switch(s.tag){case 26:ge||_n(s,i),mi(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ge||_n(s,i);var u=Re,h=Cn;for(Re=s.stateNode,mi(n,i,s),s=s.stateNode,i=s.attributes;i.length;)s.removeAttributeNode(i[0]);Ga(s),Re=u,Cn=h;break;case 5:ge||_n(s,i);case 6:h=Re;var g=Cn;if(Re=null,mi(n,i,s),Re=h,Cn=g,Re!==null)if(Cn)try{n=Re,u=s.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)}catch(E){Qt(s,i,E)}else try{Re.removeChild(s.stateNode)}catch(E){Qt(s,i,E)}break;case 18:Re!==null&&(Cn?(i=Re,s=s.stateNode,i.nodeType===8?fm(i.parentNode,s):i.nodeType===1&&fm(i,s),uu(i)):fm(Re,s.stateNode));break;case 4:u=Re,h=Cn,Re=s.stateNode.containerInfo,Cn=!0,mi(n,i,s),Re=u,Cn=h;break;case 0:case 11:case 14:case 15:ge||va(2,s,i),ge||va(4,s,i),mi(n,i,s);break;case 1:ge||(_n(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&gb(s,i,u)),mi(n,i,s);break;case 21:mi(n,i,s);break;case 22:ge||_n(s,i),ge=(u=ge)||s.memoizedState!==null,mi(n,i,s),ge=u;break;default:mi(n,i,s)}}function Ab(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{uu(n)}catch(s){Qt(i,i.return,s)}}function TA(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Sb),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Sb),i;default:throw Error(a(435,n.tag))}}function Np(n,i){var s=TA(n);i.forEach(function(u){var h=NA.bind(null,n,u);s.has(u)||(s.add(u),u.then(h,h))})}function Xn(n,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],g=n,E=i,O=E;t:for(;O!==null;){switch(O.tag){case 27:case 5:Re=O.stateNode,Cn=!1;break t;case 3:Re=O.stateNode.containerInfo,Cn=!0;break t;case 4:Re=O.stateNode.containerInfo,Cn=!0;break t}O=O.return}if(Re===null)throw Error(a(160));Eb(g,E,h),Re=null,Cn=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)_b(i,n),i=i.sibling}var fr=null;function _b(n,i){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Xn(i,n),Kn(n),u&4&&(va(3,n,n.return),Fl(3,n),va(5,n,n.return));break;case 1:Xn(i,n),Kn(n),u&512&&(ge||s===null||_n(s,s.return)),u&64&&pi&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=fr;if(Xn(i,n),Kn(n),u&512&&(ge||s===null||_n(s,s.return)),u&4){var g=s!==null?s.memoizedState:null;if(u=n.memoizedState,s===null)if(u===null)if(n.stateNode===null){t:{u=n.type,s=n.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":g=h.getElementsByTagName("title")[0],(!g||g[ta]||g[Ie]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(u),h.head.insertBefore(g,h.querySelector("head > title"))),Xe(g,u,s),g[Ie]=n,le(g),u=g;break t;case"link":var E=y1("link","href",h).get(u+(s.href||""));if(E){for(var O=0;O<E.length;O++)if(g=E[O],g.getAttribute("href")===(s.href==null?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(O,1);break e}}g=h.createElement(u),Xe(g,u,s),h.head.appendChild(g);break;case"meta":if(E=y1("meta","content",h).get(u+(s.content||""))){for(O=0;O<E.length;O++)if(g=E[O],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(O,1);break e}}g=h.createElement(u),Xe(g,u,s),h.head.appendChild(g);break;default:throw Error(a(468,u))}g[Ie]=n,le(g),u=g}n.stateNode=u}else v1(h,n.type,n.stateNode);else n.stateNode=g1(h,u,n.memoizedProps);else g!==u?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,u===null?v1(h,n.type,n.stateNode):g1(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&vb(n,n.memoizedProps,s.memoizedProps)}break;case 27:if(u&4&&n.alternate===null){h=n.stateNode,g=n.memoizedProps;try{for(var I=h.firstChild;I;){var $=I.nextSibling,nt=I.nodeName;I[ta]||nt==="HEAD"||nt==="BODY"||nt==="SCRIPT"||nt==="STYLE"||nt==="LINK"&&I.rel.toLowerCase()==="stylesheet"||h.removeChild(I),I=$}for(var at=n.type,K=h.attributes;K.length;)h.removeAttributeNode(K[0]);Xe(h,at,g),h[Ie]=n,h[Ue]=g}catch(mt){Qt(n,n.return,mt)}}case 5:if(Xn(i,n),Kn(n),u&512&&(ge||s===null||_n(s,s.return)),n.flags&32){h=n.stateNode;try{Bn(h,"")}catch(mt){Qt(n,n.return,mt)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,vb(n,h,s!==null?s.memoizedProps:h)),u&1024&&(Pp=!0);break;case 6:if(Xn(i,n),Kn(n),u&4){if(n.stateNode===null)throw Error(a(162));u=n.memoizedProps,s=n.stateNode;try{s.nodeValue=u}catch(mt){Qt(n,n.return,mt)}}break;case 3:if(Nf=null,h=fr,fr=Mf(i.containerInfo),Xn(i,n),fr=h,Kn(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{uu(i.containerInfo)}catch(mt){Qt(n,n.return,mt)}Pp&&(Pp=!1,Cb(n));break;case 4:u=fr,fr=Mf(n.stateNode.containerInfo),Xn(i,n),Kn(n),fr=u;break;case 12:Xn(i,n),Kn(n);break;case 13:Xn(i,n),Kn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(qp=pn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Np(n,u)));break;case 22:if(u&512&&(ge||s===null||_n(s,s.return)),I=n.memoizedState!==null,$=s!==null&&s.memoizedState!==null,nt=pi,at=ge,pi=nt||I,ge=at||$,Xn(i,n),ge=at,pi=nt,Kn(n),i=n.stateNode,i._current=n,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,u&8192&&(i._visibility=I?i._visibility&-2:i._visibility|1,I&&(i=pi||ge,s===null||$||i||ds(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))t:for(s=null,i=n;;){if(i.tag===5||i.tag===26||i.tag===27){if(s===null){$=s=i;try{if(h=$.stateNode,I)g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=$.stateNode,O=$.memoizedProps.style;var et=O!=null&&O.hasOwnProperty("display")?O.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(mt){Qt($,$.return,mt)}}}else if(i.tag===6){if(s===null){$=i;try{$.stateNode.nodeValue=I?"":$.memoizedProps}catch(mt){Qt($,$.return,mt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=n.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Np(n,s))));break;case 19:Xn(i,n),Kn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Np(n,u)));break;case 21:break;default:Xn(i,n),Kn(n)}}function Kn(n){var i=n.flags;if(i&2){try{if(n.tag!==27){t:{for(var s=n.return;s!==null;){if(bb(s)){var u=s;break t}s=s.return}throw Error(a(160))}switch(u.tag){case 27:var h=u.stateNode,g=Dp(n);yf(n,g,h);break;case 5:var E=u.stateNode;u.flags&32&&(Bn(E,""),u.flags&=-33);var O=Dp(n);yf(n,O,E);break;case 3:case 4:var I=u.stateNode.containerInfo,$=Dp(n);Mp(n,$,I);break;default:throw Error(a(161))}}}catch(nt){Qt(n,n.return,nt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Cb(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Cb(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function gi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)wb(n,i.alternate,i),i=i.sibling}function ds(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:va(4,i,i.return),ds(i);break;case 1:_n(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&gb(i,i.return,s),ds(i);break;case 26:case 27:case 5:_n(i,i.return),ds(i);break;case 22:_n(i,i.return),i.memoizedState===null&&ds(i);break;default:ds(i)}n=n.sibling}}function ba(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=n,g=i,E=g.flags;switch(g.tag){case 0:case 11:case 15:ba(h,g,s),Fl(4,g);break;case 1:if(ba(h,g,s),u=g,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch($){Qt(u,u.return,$)}if(u=g,h=u.updateQueue,h!==null){var O=u.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)db(I[h],O)}catch($){Qt(u,u.return,$)}}s&&E&64&&mb(g),yo(g,g.return);break;case 26:case 27:case 5:ba(h,g,s),s&&u===null&&E&4&&yb(g),yo(g,g.return);break;case 12:ba(h,g,s);break;case 13:ba(h,g,s),s&&E&4&&Ab(h,g);break;case 22:g.memoizedState===null&&ba(h,g,s),yo(g,g.return);break;default:ba(h,g,s)}i=i.sibling}}function Lp(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Ll(s))}function zp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n))}function Sa(n,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ob(n,i,s,u),i=i.sibling}function Ob(n,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Sa(n,i,s,u),h&2048&&Fl(9,i);break;case 3:Sa(n,i,s,u),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ll(n)));break;case 12:if(h&2048){Sa(n,i,s,u),n=i.stateNode;try{var g=i.memoizedProps,E=g.id,O=g.onPostCommit;typeof O=="function"&&O(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){Qt(i,i.return,I)}}else Sa(n,i,s,u);break;case 23:break;case 22:g=i.stateNode,i.memoizedState!==null?g._visibility&4?Sa(n,i,s,u):Gl(n,i):g._visibility&4?Sa(n,i,s,u):(g._visibility|=4,ps(n,i,s,u,(i.subtreeFlags&10256)!==0)),h&2048&&Lp(i.alternate,i);break;case 24:Sa(n,i,s,u),h&2048&&zp(i.alternate,i);break;default:Sa(n,i,s,u)}}function ps(n,i,s,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=n,E=i,O=s,I=u,$=E.flags;switch(E.tag){case 0:case 11:case 15:ps(g,E,O,I,h),Fl(8,E);break;case 23:break;case 22:var nt=E.stateNode;E.memoizedState!==null?nt._visibility&4?ps(g,E,O,I,h):Gl(g,E):(nt._visibility|=4,ps(g,E,O,I,h)),h&&$&2048&&Lp(E.alternate,E);break;case 24:ps(g,E,O,I,h),h&&$&2048&&zp(E.alternate,E);break;default:ps(g,E,O,I,h)}i=i.sibling}}function Gl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,u=i,h=u.flags;switch(u.tag){case 22:Gl(s,u),h&2048&&Lp(u.alternate,u);break;case 24:Gl(s,u),h&2048&&zp(u.alternate,u);break;default:Gl(s,u)}i=i.sibling}}var Yl=8192;function ms(n){if(n.subtreeFlags&Yl)for(n=n.child;n!==null;)Rb(n),n=n.sibling}function Rb(n){switch(n.tag){case 26:ms(n),n.flags&Yl&&n.memoizedState!==null&&u_(fr,n.memoizedState,n.memoizedProps);break;case 5:ms(n);break;case 3:case 4:var i=fr;fr=Mf(n.stateNode.containerInfo),ms(n),fr=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Yl,Yl=16777216,ms(n),Yl=i):ms(n));break;default:ms(n)}}function kb(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Xl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];qe=u,Mb(u,n)}kb(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Db(n),n=n.sibling}function Db(n){switch(n.tag){case 0:case 11:case 15:Xl(n),n.flags&2048&&va(9,n,n.return);break;case 3:Xl(n);break;case 12:Xl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&4&&(n.return===null||n.return.tag!==13)?(i._visibility&=-5,vf(n)):Xl(n);break;default:Xl(n)}}function vf(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];qe=u,Mb(u,n)}kb(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:va(8,i,i.return),vf(i);break;case 22:s=i.stateNode,s._visibility&4&&(s._visibility&=-5,vf(i));break;default:vf(i)}n=n.sibling}}function Mb(n,i){for(;qe!==null;){var s=qe;switch(s.tag){case 0:case 11:case 15:va(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ll(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,qe=u;else t:for(s=n;qe!==null;){u=qe;var h=u.sibling,g=u.return;if(xb(u),u===s){qe=null;break t}if(h!==null){h.return=g,qe=h;break t}qe=g}}}function wA(n,i,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(n,i,s,u){return new wA(n,i,s,u)}function Ip(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ta(n,i){var s=n.alternate;return s===null?(s=Wn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&31457280,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Pb(n,i){n.flags&=31457282;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function bf(n,i,s,u,h,g){var E=0;if(u=n,typeof n=="function")Ip(n)&&(E=1);else if(typeof n=="string")E=s_(n,s,Fe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case p:return vo(s.children,h,g,i);case m:E=8,h|=24;break;case y:return n=Wn(12,s,i,h|2),n.elementType=y,n.lanes=g,n;case w:return n=Wn(13,s,i,h),n.elementType=w,n.lanes=g,n;case C:return n=Wn(19,s,i,h),n.elementType=C,n.lanes=g,n;case U:return Nb(s,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:case _:E=10;break t;case A:E=9;break t;case x:E=11;break t;case M:E=14;break t;case j:E=16,u=null;break t}E=29,s=Error(a(130,n===null?"null":typeof n,"")),u=null}return i=Wn(E,s,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function vo(n,i,s,u){return n=Wn(7,n,u,i),n.lanes=s,n}function Nb(n,i,s,u){n=Wn(22,n,u,i),n.elementType=U,n.lanes=s;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=h._current;if(g===null)throw Error(a(456));if((h._pendingVisibility&2)===0){var E=ua(g,2);E!==null&&(h._pendingVisibility|=2,un(E,g,2))}},attach:function(){var g=h._current;if(g===null)throw Error(a(456));if((h._pendingVisibility&2)!==0){var E=ua(g,2);E!==null&&(h._pendingVisibility&=-3,un(E,g,2))}}};return n.stateNode=h,n}function Up(n,i,s){return n=Wn(6,n,null,i),n.lanes=s,n}function Bp(n,i,s){return i=Wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yi(n){n.flags|=4}function Lb(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!b1(i)){if(i=Yn.current,i!==null&&((It&4194176)===It?Nr!==null:(It&62914560)!==It&&(It&536870912)===0||i!==Nr))throw Ml=$d,Qy;n.flags|=8192}}function Sf(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ki():536870912,n.lanes|=i,ys|=i)}function Kl(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function ue(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(i)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&31457280,u|=h.flags&31457280,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=s,i}function xA(n,i,s){var u=i.pendingProps;switch(Hd(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(i),null;case 1:return ue(i),null;case 3:return s=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),di(Pe),ar(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Ol(i)?yi(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cr!==null&&(Yp(cr),cr=null))),ue(i),null;case 26:return s=i.memoizedState,n===null?(yi(i),s!==null?(ue(i),Lb(i,s)):(ue(i),i.flags&=-16777217)):s?s!==n.memoizedState?(yi(i),ue(i),Lb(i,s)):(ue(i),i.flags&=-16777217):(n.memoizedProps!==u&&yi(i),ue(i),i.flags&=-16777217),null;case 27:In(i),s=dn.current;var h=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==u&&yi(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return ue(i),null}n=Fe.current,Ol(i)?Wy(i):(n=f1(h,u,s),i.stateNode=n,yi(i))}return ue(i),null;case 5:if(In(i),s=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&yi(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return ue(i),null}if(n=Fe.current,Ol(i))Wy(i);else{switch(h=Df(dn.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(s,{is:u.is}):h.createElement(s)}}n[Ie]=i,n[Ue]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=n;t:switch(Xe(n,s,u),s){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&yi(i)}}return ue(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==u&&yi(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(n=dn.current,Ol(i)){if(n=i.stateNode,s=i.memoizedProps,u=null,h=ln,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[Ie]=i,n=!!(n.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||a1(n.nodeValue,s)),n||so(i)}else n=Df(n).createTextNode(u),n[Ie]=i,i.stateNode=n}return ue(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Ol(i),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Ie]=i}else Rl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ue(i),h=!1}else cr!==null&&(Yp(cr),cr=null),h=!0;if(!h)return i.flags&256?(ui(i),i):(ui(i),null)}if(ui(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=u!==null,n=n!==null&&n.memoizedState!==null,s){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==h&&(u.flags|=2048)}return s!==n&&s&&(i.child.flags|=8192),Sf(i,i.updateQueue),ue(i),null;case 4:return ar(),n===null&&im(i.stateNode.containerInfo),ue(i),null;case 10:return di(i.type),ue(i),null;case 19:if(ie(Me),h=i.memoizedState,h===null)return ue(i),null;if(u=(i.flags&128)!==0,g=h.rendering,g===null)if(u)Kl(h,!1);else{if(ye!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(g=nf(n),g!==null){for(i.flags|=128,Kl(h,!1),n=g.updateQueue,i.updateQueue=n,Sf(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)Pb(s,n),s=s.sibling;return Ht(Me,Me.current&1|2),i.child}n=n.sibling}h.tail!==null&&pn()>Tf&&(i.flags|=128,u=!0,Kl(h,!1),i.lanes=4194304)}else{if(!u)if(n=nf(g),n!==null){if(i.flags|=128,u=!0,n=n.updateQueue,i.updateQueue=n,Sf(i,n),Kl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!jt)return ue(i),null}else 2*pn()-h.renderingStartTime>Tf&&s!==536870912&&(i.flags|=128,u=!0,Kl(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(n=h.last,n!==null?n.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=pn(),i.sibling=null,n=Me.current,Ht(Me,u?n&1|2:n&1),i):(ue(i),null);case 22:case 23:return ui(i),Gd(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(ue(i),i.subtreeFlags&6&&(i.flags|=8192)):ue(i),s=i.updateQueue,s!==null&&Sf(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),n!==null&&ie(uo),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),di(Pe),ue(i),null;case 25:return null}throw Error(a(156,i.tag))}function EA(n,i){switch(Hd(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return di(Pe),ar(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return In(i),null;case 13:if(ui(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Rl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ie(Me),null;case 4:return ar(),null;case 10:return di(i.type),null;case 22:case 23:return ui(i),Gd(),n!==null&&ie(uo),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return di(Pe),null;case 25:return null;default:return null}}function zb(n,i){switch(Hd(i),i.tag){case 3:di(Pe),ar();break;case 26:case 27:case 5:In(i);break;case 4:ar();break;case 13:ui(i);break;case 19:ie(Me);break;case 10:di(i.type);break;case 22:case 23:ui(i),Gd(),n!==null&&ie(uo);break;case 24:di(Pe)}}var AA={getCacheForType:function(n){var i=Qe(Pe),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s}},_A=typeof WeakMap=="function"?WeakMap:Map,ce=0,ee=null,Mt=null,It=0,ne=0,On=null,vi=!1,gs=!1,jp=!1,bi=0,ye=0,wa=0,bo=0,Vp=0,Zn=0,ys=0,Wl=null,zr=null,Hp=!1,qp=0,Tf=1/0,wf=null,xa=null,xf=!1,So=null,Zl=0,$p=0,Fp=null,Ql=0,Gp=null;function Rn(){if((ce&2)!==0&&It!==0)return It&-It;if(R.T!==null){var n=ls;return n!==0?n:tm()}return Oc()}function Ib(){Zn===0&&(Zn=(It&536870912)===0||jt?fl():536870912);var n=Yn.current;return n!==null&&(n.flags|=32),Zn}function un(n,i,s){(n===ee&&ne===2||n.cancelPendingCommit!==null)&&(vs(n,0),Si(n,It,Zn,!1)),xe(n,s),((ce&2)===0||n!==ee)&&(n===ee&&((ce&2)===0&&(bo|=s),ye===4&&Si(n,It,Zn,!1)),Ir(n))}function Ub(n,i,s){if((ce&6)!==0)throw Error(a(327));var u=!s&&(i&60)===0&&(i&n.expiredLanes)===0||Xi(n,i),h=u?RA(n,i):Wp(n,i,!0),g=u;do{if(h===0){gs&&!u&&Si(n,i,0,!1);break}else if(h===6)Si(n,i,0,!vi);else{if(s=n.current.alternate,g&&!CA(s)){h=Wp(n,i,!1),g=!1;continue}if(h===2){if(g=i,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var O=n;h=Wl;var I=O.current.memoizedState.isDehydrated;if(I&&(vs(O,E).flags|=256),E=Wp(O,E,!1),E!==2){if(jp&&!I){O.errorRecoveryDisabledLanes|=g,bo|=g,h=4;break t}g=zr,zr=h,g!==null&&Yp(g)}h=E}if(g=!1,h!==2)continue}}if(h===1){vs(n,0),Si(n,i,0,!0);break}t:{switch(u=n,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194176)===i){Si(u,i,Zn,!vi);break t}break;case 2:zr=null;break;case 3:case 5:break;default:throw Error(a(329))}if(u.finishedWork=s,u.finishedLanes=i,(i&62914560)===i&&(g=qp+300-pn(),10<g)){if(Si(u,i,Zn,!vi),sr(u,0)!==0)break t;u.timeoutHandle=l1(Bb.bind(null,u,s,zr,wf,Hp,i,Zn,bo,ys,vi,2,-0,0),g);break t}Bb(u,s,zr,wf,Hp,i,Zn,bo,ys,vi,0,-0,0)}}break}while(!0);Ir(n)}function Yp(n){zr===null?zr=n:zr.push.apply(zr,n)}function Bb(n,i,s,u,h,g,E,O,I,$,nt,at,K){var et=i.subtreeFlags;if((et&8192||(et&16785408)===16785408)&&(iu={stylesheets:null,count:0,unsuspend:l_},Rb(i),i=c_(),i!==null)){n.cancelPendingCommit=i(Gb.bind(null,n,s,u,h,E,O,I,1,at,K)),Si(n,g,E,!$);return}Gb(n,s,u,h,E,O,I,nt,at,K)}function CA(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],g=h.getSnapshot;h=h.value;try{if(!An(g(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Si(n,i,s,u){i&=~Vp,i&=~bo,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var h=i;0<h;){var g=31-on(h),E=1<<g;u[g]=-1,h&=~E}s!==0&&Wi(n,s,i)}function Ef(){return(ce&6)===0?(Jl(0),!1):!0}function Xp(){if(Mt!==null){if(ne===0)var n=Mt.return;else n=Mt,hi=mo=null,tp(n),os=null,Pl=0,n=Mt;for(;n!==null;)zb(n.alternate,n),n=n.return;Mt=null}}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,GA(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Xp(),ee=n,Mt=s=Ta(n.current,null),It=i,ne=0,On=null,vi=!1,gs=Xi(n,i),jp=!1,ys=Zn=Vp=bo=wa=ye=0,zr=Wl=null,Hp=!1,(i&8)!==0&&(i|=i&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=i;0<u;){var h=31-on(u),g=1<<h;i|=n[h],u&=~g}return bi=i,Yc(),s}function jb(n,i){kt=null,R.H=Lr,i===Dl?(i=ev(),ne=3):i===Qy?(i=ev(),ne=4):ne=i===Jv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,On=i,Mt===null&&(ye=1,pf(n,$n(i,n.current)))}function Vb(){var n=R.H;return R.H=Lr,n===null?Lr:n}function Hb(){var n=R.A;return R.A=AA,n}function Kp(){ye=4,vi||(It&4194176)!==It&&Yn.current!==null||(gs=!0),(wa&134217727)===0&&(bo&134217727)===0||ee===null||Si(ee,It,Zn,!1)}function Wp(n,i,s){var u=ce;ce|=2;var h=Vb(),g=Hb();(ee!==n||It!==i)&&(wf=null,vs(n,i)),i=!1;var E=ye;t:do try{if(ne!==0&&Mt!==null){var O=Mt,I=On;switch(ne){case 8:Xp(),E=6;break t;case 3:case 2:case 6:Yn.current===null&&(i=!0);var $=ne;if(ne=0,On=null,bs(n,O,I,$),s&&gs){E=0;break t}break;default:$=ne,ne=0,On=null,bs(n,O,I,$)}}OA(),E=ye;break}catch(nt){jb(n,nt)}while(!0);return i&&n.shellSuspendCounter++,hi=mo=null,ce=u,R.H=h,R.A=g,Mt===null&&(ee=null,It=0,Yc()),E}function OA(){for(;Mt!==null;)qb(Mt)}function RA(n,i){var s=ce;ce|=2;var u=Vb(),h=Hb();ee!==n||It!==i?(wf=null,Tf=pn()+500,vs(n,i)):gs=Xi(n,i);t:do try{if(ne!==0&&Mt!==null){i=Mt;var g=On;e:switch(ne){case 1:ne=0,On=null,bs(n,i,g,1);break;case 2:if(Jy(g)){ne=0,On=null,$b(i);break}i=function(){ne===2&&ee===n&&(ne=7),Ir(n)},g.then(i,i);break t;case 3:ne=7;break t;case 4:ne=5;break t;case 7:Jy(g)?(ne=0,On=null,$b(i)):(ne=0,On=null,bs(n,i,g,7));break;case 5:var E=null;switch(Mt.tag){case 26:E=Mt.memoizedState;case 5:case 27:var O=Mt;if(!E||b1(E)){ne=0,On=null;var I=O.sibling;if(I!==null)Mt=I;else{var $=O.return;$!==null?(Mt=$,Af($)):Mt=null}break e}}ne=0,On=null,bs(n,i,g,5);break;case 6:ne=0,On=null,bs(n,i,g,6);break;case 8:Xp(),ye=6;break t;default:throw Error(a(462))}}kA();break}catch(nt){jb(n,nt)}while(!0);return hi=mo=null,R.H=u,R.A=h,ce=s,Mt!==null?0:(ee=null,It=0,Yc(),ye)}function kA(){for(;Mt!==null&&!Et();)qb(Mt)}function qb(n){var i=fb(n.alternate,n,bi);n.memoizedProps=n.pendingProps,i===null?Af(n):Mt=i}function $b(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=ab(s,i,i.pendingProps,i.type,void 0,It);break;case 11:i=ab(s,i,i.pendingProps,i.type.render,i.ref,It);break;case 5:tp(i);default:zb(s,i),i=Mt=Pb(i,bi),i=fb(s,i,bi)}n.memoizedProps=n.pendingProps,i===null?Af(n):Mt=i}function bs(n,i,s,u){hi=mo=null,tp(i),os=null,Pl=0;var h=i.return;try{if(vA(n,h,i,s,It)){ye=1,pf(n,$n(s,n.current)),Mt=null;return}}catch(g){if(h!==null)throw Mt=h,g;ye=1,pf(n,$n(s,n.current)),Mt=null;return}i.flags&32768?(jt||u===1?n=!0:gs||(It&536870912)!==0?n=!1:(vi=n=!0,(u===2||u===3||u===6)&&(u=Yn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Fb(i,n)):Af(i)}function Af(n){var i=n;do{if((i.flags&32768)!==0){Fb(i,vi);return}n=i.return;var s=xA(i.alternate,i,bi);if(s!==null){Mt=s;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=n}while(i!==null);ye===0&&(ye=5)}function Fb(n,i){do{var s=EA(n.alternate,n);if(s!==null){s.flags&=32767,Mt=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){Mt=n;return}Mt=n=s}while(n!==null);ye=6,Mt=null}function Gb(n,i,s,u,h,g,E,O,I,$){var nt=R.T,at=ft.p;try{ft.p=2,R.T=null,DA(n,i,s,u,at,h,g,E,O,I,$)}finally{R.T=nt,ft.p=at}}function DA(n,i,s,u,h,g,E,O){do Ss();while(So!==null);if((ce&6)!==0)throw Error(a(327));var I=n.finishedWork;if(u=n.finishedLanes,I===null)return null;if(n.finishedWork=null,n.finishedLanes=0,I===n.current)throw Error(a(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var $=I.lanes|I.childLanes;if($|=Bd,_c(n,u,$,g,E,O),n===ee&&(Mt=ee=null,It=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||xf||(xf=!0,$p=$,Fp=s,LA(Zr,function(){return Ss(),null})),s=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||s?(s=R.T,R.T=null,g=ft.p,ft.p=2,E=ce,ce|=4,SA(n,I),_b(I,n),eA(lm,n.containerInfo),If=!!sm,lm=sm=null,n.current=I,wb(n,I.alternate,I),ol(),ce=E,ft.p=g,R.T=s):n.current=I,xf?(xf=!1,So=n,Zl=u):Yb(n,$),$=n.pendingLanes,$===0&&(xa=null),ll(I.stateNode),Ir(n),i!==null)for(h=n.onRecoverableError,I=0;I<i.length;I++)$=i[I],h($.value,{componentStack:$.stack});return(Zl&3)!==0&&Ss(),$=n.pendingLanes,(u&4194218)!==0&&($&42)!==0?n===Gp?Ql++:(Ql=0,Gp=n):Ql=0,Jl(0),null}function Yb(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ll(i)))}function Ss(){if(So!==null){var n=So,i=$p;$p=0;var s=Cc(Zl),u=R.T,h=ft.p;try{if(ft.p=32>s?32:s,R.T=null,So===null)var g=!1;else{s=Fp,Fp=null;var E=So,O=Zl;if(So=null,Zl=0,(ce&6)!==0)throw Error(a(331));var I=ce;if(ce|=4,Db(E.current),Ob(E,E.current,O,s),ce=I,Jl(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Gi,E)}catch{}g=!0}return g}finally{ft.p=h,R.T=u,Yb(n,i)}}return!1}function Xb(n,i,s){i=$n(s,i),i=pp(n.stateNode,i,2),n=ya(n,i,2),n!==null&&(xe(n,2),Ir(n))}function Qt(n,i,s){if(n.tag===3)Xb(n,n,s);else for(;i!==null;){if(i.tag===3){Xb(i,n,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(xa===null||!xa.has(u))){n=$n(s,n),s=Zv(2),u=ya(i,s,2),u!==null&&(Qv(s,u,i,n),xe(u,2),Ir(u));break}}i=i.return}}function Zp(n,i,s){var u=n.pingCache;if(u===null){u=n.pingCache=new _A;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(jp=!0,h.add(s),n=MA.bind(null,n,i,s),i.then(n,n))}function MA(n,i,s){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,ee===n&&(It&s)===s&&(ye===4||ye===3&&(It&62914560)===It&&300>pn()-qp?(ce&2)===0&&vs(n,0):Vp|=s,ys===It&&(ys=0)),Ir(n)}function Kb(n,i){i===0&&(i=Ki()),n=ua(n,i),n!==null&&(xe(n,i),Ir(n))}function PA(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Kb(n,s)}function NA(n,i){var s=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),Kb(n,s)}function LA(n,i){return wr(n,i)}var _f=null,Ts=null,Qp=!1,Cf=!1,Jp=!1,To=0;function Ir(n){n!==Ts&&n.next===null&&(Ts===null?_f=Ts=n:Ts=Ts.next=n),Cf=!0,Qp||(Qp=!0,IA(zA))}function Jl(n,i){if(!Jp&&Cf){Jp=!0;do for(var s=!1,u=_f;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var g=0;else{var E=u.suspendedLanes,O=u.pingedLanes;g=(1<<31-on(42|n)+1)-1,g&=h&~(E&~O),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(s=!0,Qb(u,g))}else g=It,g=sr(u,u===ee?g:0),(g&3)===0||Xi(u,g)||(s=!0,Qb(u,g));u=u.next}while(s);Jp=!1}}function zA(){Cf=Qp=!1;var n=0;To!==0&&(FA()&&(n=To),To=0);for(var i=pn(),s=null,u=_f;u!==null;){var h=u.next,g=Wb(u,i);g===0?(u.next=null,s===null?_f=h:s.next=h,h===null&&(Ts=s)):(s=u,(n!==0||(g&3)!==0)&&(Cf=!0)),u=h}Jl(n)}function Wb(n,i){for(var s=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-on(g),O=1<<E,I=h[E];I===-1?((O&s)===0||(O&u)!==0)&&(h[E]=cl(O,i)):I<=i&&(n.expiredLanes|=O),g&=~O}if(i=ee,s=It,s=sr(n,n===i?s:0),u=n.callbackNode,s===0||n===i&&ne===2||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Fi(u),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Xi(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(u!==null&&Fi(u),Cc(s)){case 2:case 8:s=ze;break;case 32:s=Zr;break;case 268435456:s=sl;break;default:s=Zr}return u=Zb.bind(null,n),s=wr(s,u),n.callbackPriority=i,n.callbackNode=s,i}return u!==null&&u!==null&&Fi(u),n.callbackPriority=2,n.callbackNode=null,2}function Zb(n,i){var s=n.callbackNode;if(Ss()&&n.callbackNode!==s)return null;var u=It;return u=sr(n,n===ee?u:0),u===0?null:(Ub(n,u,i),Wb(n,pn()),n.callbackNode!=null&&n.callbackNode===s?Zb.bind(null,n):null)}function Qb(n,i){if(Ss())return null;Ub(n,i,!0)}function IA(n){YA(function(){(ce&6)!==0?wr(De,n):n()})}function tm(){return To===0&&(To=fl()),To}function Jb(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Cr(""+n)}function t1(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function UA(n,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var g=Jb((h[Ue]||null).action),E=u.submitter;E&&(i=(i=E[Ue]||null)?Jb(i.formAction):E.getAttribute("formAction"),i!==null&&(g=i,E=null));var O=new Yo("action","action",null,u,h);n.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(To!==0){var I=E?t1(h,E):new FormData(h);up(s,{pending:!0,data:I,method:h.method,action:g},null,I)}}else typeof g=="function"&&(O.preventDefault(),I=E?t1(h,E):new FormData(h),up(s,{pending:!0,data:I,method:h.method,action:g},g,I))},currentTarget:h}]})}}for(var em=0;em<Gy.length;em++){var nm=Gy[em],BA=nm.toLowerCase(),jA=nm[0].toUpperCase()+nm.slice(1);ur(BA,"on"+jA)}ur(Vy,"onAnimationEnd"),ur(Hy,"onAnimationIteration"),ur(qy,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(rA,"onTransitionRun"),ur(iA,"onTransitionStart"),ur(aA,"onTransitionCancel"),ur($y,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tu));function e1(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],h=u.event;u=u.listeners;t:{var g=void 0;if(i)for(var E=u.length-1;0<=E;E--){var O=u[E],I=O.instance,$=O.currentTarget;if(O=O.listener,I!==g&&h.isPropagationStopped())break t;g=O,h.currentTarget=$;try{g(h)}catch(nt){df(nt)}h.currentTarget=null,g=I}else for(E=0;E<u.length;E++){if(O=u[E],I=O.instance,$=O.currentTarget,O=O.listener,I!==g&&h.isPropagationStopped())break t;g=O,h.currentTarget=$;try{g(h)}catch(nt){df(nt)}h.currentTarget=null,g=I}}}}function Nt(n,i){var s=i[Fa];s===void 0&&(s=i[Fa]=new Set);var u=n+"__bubble";s.has(u)||(n1(i,n,2,!1),s.add(u))}function rm(n,i,s){var u=0;i&&(u|=4),n1(s,n,u,i)}var Of="_reactListening"+Math.random().toString(36).slice(2);function im(n){if(!n[Of]){n[Of]=!0,dl.forEach(function(s){s!=="selectionchange"&&(VA.has(s)||rm(s,!1,n),rm(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Of]||(i[Of]=!0,rm("selectionchange",!1,i))}}function n1(n,i,s,u){switch(A1(i)){case 2:var h=d_;break;case 8:h=p_;break;default:h=ym}s=h.bind(null,i,s,n),h=void 0,!Vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,s,{capture:!0,passive:h}):n.addEventListener(i,s,!0):h!==void 0?n.addEventListener(i,s,{passive:h}):n.addEventListener(i,s,!1)}function am(n,i,s,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var O=u.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&(I=E.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;E=E.return}for(;O!==null;){if(E=lr(O),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=g=E;continue t}O=O.parentNode}}u=u.return}Mc(function(){var $=g,nt=Go(s),at=[];t:{var K=Fy.get(n);if(K!==void 0){var et=Yo,mt=n;switch(n){case"keypress":if(Rr(s)===0)break t;case"keydown":case"keyup":et=Jo;break;case"focusin":mt="focus",et=Wo;break;case"focusout":mt="blur",et=Wo;break;case"beforeblur":case"afterblur":et=Wo;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=jc;break;case Vy:case Hy:case qy:et=Zo;break;case $y:et=Hc;break;case"scroll":case"scrollend":et=Pc;break;case"wheel":et=gn;break;case"copy":case"cut":case"paste":et=Qo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Al;break;case"toggle":case"beforetoggle":et=Fc}var wt=(i&4)!==0,ve=!wt&&(n==="scroll"||n==="scrollend"),G=wt?K!==null?K+"Capture":null:K;wt=[];for(var q=$,X;q!==null;){var rt=q;if(X=rt.stateNode,rt=rt.tag,rt!==5&&rt!==26&&rt!==27||X===null||G===null||(rt=Wa(q,G),rt!=null&&wt.push(eu(q,rt,X))),ve)break;q=q.return}0<wt.length&&(K=new et(K,mt,null,s,nt),at.push({event:K,listeners:wt}))}}if((i&7)===0){t:{if(K=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",K&&s!==jn&&(mt=s.relatedTarget||s.fromElement)&&(lr(mt)||mt[Ji]))break t;if((et||K)&&(K=nt.window===nt?nt:(K=nt.ownerDocument)?K.defaultView||K.parentWindow:window,et?(mt=s.relatedTarget||s.toElement,et=$,mt=mt?lr(mt):null,mt!==null&&(ve=ut(mt),wt=mt.tag,mt!==ve||wt!==5&&wt!==27&&wt!==6)&&(mt=null)):(et=null,mt=$),et!==mt)){if(wt=Hn,rt="onMouseLeave",G="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(wt=Al,rt="onPointerLeave",G="onPointerEnter",q="pointer"),ve=et==null?K:ea(et),X=mt==null?K:ea(mt),K=new wt(rt,q+"leave",et,s,nt),K.target=ve,K.relatedTarget=X,rt=null,lr(nt)===$&&(wt=new wt(G,q+"enter",mt,s,nt),wt.target=X,wt.relatedTarget=ve,rt=wt),ve=rt,et&&mt)e:{for(wt=et,G=mt,q=0,X=wt;X;X=ws(X))q++;for(X=0,rt=G;rt;rt=ws(rt))X++;for(;0<q-X;)wt=ws(wt),q--;for(;0<X-q;)G=ws(G),X--;for(;q--;){if(wt===G||G!==null&&wt===G.alternate)break e;wt=ws(wt),G=ws(G)}wt=null}else wt=null;et!==null&&r1(at,K,et,wt,!1),mt!==null&&ve!==null&&r1(at,ve,mt,wt,!0)}}t:{if(K=$?ea($):window,et=K.nodeName&&K.nodeName.toLowerCase(),et==="select"||et==="input"&&K.type==="file")var ht=ky;else if(ai(K))if(Dy)ht=J5;else{ht=Z5;var Dt=W5}else et=K.nodeName,!et||et.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?$&&vl($.elementType)&&(ht=ky):ht=Q5;if(ht&&(ht=ht(n,$))){yn(at,ht,s,nt);break t}Dt&&Dt(n,K,$),n==="focusout"&&$&&K.type==="number"&&$.memoizedProps.value!=null&&Fo(K,"number",K.value)}switch(Dt=$?ea($):window,n){case"focusin":(ai(Dt)||Dt.contentEditable==="true")&&(ts=Dt,zd=$,Cl=null);break;case"focusout":Cl=zd=ts=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,By(at,s,nt);break;case"selectionchange":if(nA)break;case"keydown":case"keyup":By(at,s,nt)}var gt;if(f)t:{switch(n){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else ae?st(n,s)&&(bt="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(bt="onCompositionStart");bt&&(D&&s.locale!=="ko"&&(ae||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&ae&&(gt=Sl()):(Or=nt,sa="value"in Or?Or.value:Or.textContent,ae=!0)),Dt=Rf($,bt),0<Dt.length&&(bt=new xl(bt,n,null,s,nt),at.push({event:bt,listeners:Dt}),gt?bt.data=gt:(gt=Ft(s),gt!==null&&(bt.data=gt)))),(gt=T?zt(n,s):je(n,s))&&(bt=Rf($,"onBeforeInput"),0<bt.length&&(Dt=new xl("onBeforeInput","beforeinput",null,s,nt),at.push({event:Dt,listeners:bt}),Dt.data=gt)),UA(at,n,$,s,nt)}e1(at,i)})}function eu(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Rf(n,i){for(var s=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=Wa(n,s),h!=null&&u.unshift(eu(n,h,g)),h=Wa(n,i),h!=null&&u.push(eu(n,h,g))),n=n.return}return u}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function r1(n,i,s,u,h){for(var g=i._reactName,E=[];s!==null&&s!==u;){var O=s,I=O.alternate,$=O.stateNode;if(O=O.tag,I!==null&&I===u)break;O!==5&&O!==26&&O!==27||$===null||(I=$,h?($=Wa(s,g),$!=null&&E.unshift(eu(s,$,I))):h||($=Wa(s,g),$!=null&&E.push(eu(s,$,I)))),s=s.return}E.length!==0&&n.push({event:i,listeners:E})}var HA=/\r\n?/g,qA=/\u0000|\uFFFD/g;function i1(n){return(typeof n=="string"?n:""+n).replace(HA,`
`).replace(qA,"")}function a1(n,i){return i=i1(i),i1(n)===i}function kf(){}function Wt(n,i,s,u,h,g){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Bn(n,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Bn(n,""+u);break;case"className":ia(n,"class",u);break;case"tabIndex":ia(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ia(n,s,u);break;case"style":Dc(n,u,g);break;case"data":if(i!=="object"){ia(n,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Cr(""+u),n.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(i!=="input"&&Wt(n,i,"name",h.name,h,null),Wt(n,i,"formEncType",h.formEncType,h,null),Wt(n,i,"formMethod",h.formMethod,h,null),Wt(n,i,"formTarget",h.formTarget,h,null)):(Wt(n,i,"encType",h.encType,h,null),Wt(n,i,"method",h.method,h,null),Wt(n,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Cr(""+u),n.setAttribute(s,u);break;case"onClick":u!=null&&(n.onclick=kf);break;case"onScroll":u!=null&&Nt("scroll",n);break;case"onScrollEnd":u!=null&&Nt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}s=Cr(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""+u):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":u===!0?n.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,u):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(s,u):n.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(s):n.setAttribute(s,u);break;case"popover":Nt("beforetoggle",n),Nt("toggle",n),ra(n,"popover",u);break;case"xlinkActuate":Un(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Un(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Un(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Un(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Un(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Un(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Un(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Un(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Un(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ra(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Rd.get(s)||s,ra(n,s,u))}}function om(n,i,s,u,h,g){switch(s){case"style":Dc(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof u=="string"?Bn(n,u):(typeof u=="number"||typeof u=="bigint")&&Bn(n,""+u);break;case"onScroll":u!=null&&Nt("scroll",n);break;case"onScrollEnd":u!=null&&Nt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=kf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qo.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),g=n[Ue]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(i,g,h),typeof u=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,u,h);break t}s in n?n[s]=u:u===!0?n.setAttribute(s,""):ra(n,s,u)}}}function Xe(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",n),Nt("load",n);var u=!1,h=!1,g;for(g in s)if(s.hasOwnProperty(g)){var E=s[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(n,i,g,E,s,null)}}h&&Wt(n,i,"srcSet",s.srcSet,s,null),u&&Wt(n,i,"src",s.src,s,null);return;case"input":Nt("invalid",n);var O=g=E=h=null,I=null,$=null;for(u in s)if(s.hasOwnProperty(u)){var nt=s[u];if(nt!=null)switch(u){case"name":h=nt;break;case"type":E=nt;break;case"checked":I=nt;break;case"defaultChecked":$=nt;break;case"value":g=nt;break;case"defaultValue":O=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,i));break;default:Wt(n,i,u,nt,s,null)}}Xa(n,g,O,I,$,E,h,!1),Ya(n);return;case"select":Nt("invalid",n),u=E=g=null;for(h in s)if(s.hasOwnProperty(h)&&(O=s[h],O!=null))switch(h){case"value":g=O;break;case"defaultValue":E=O;break;case"multiple":u=O;default:Wt(n,i,h,O,s,null)}i=g,s=E,n.multiple=!!u,i!=null?Bt(n,!!u,i,!1):s!=null&&Bt(n,!!u,s,!0);return;case"textarea":Nt("invalid",n),g=h=u=null;for(E in s)if(s.hasOwnProperty(E)&&(O=s[E],O!=null))switch(E){case"value":u=O;break;case"defaultValue":h=O;break;case"children":g=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(91));break;default:Wt(n,i,E,O,s,null)}oa(n,u,h,g),Ya(n);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(u=s[I],u!=null))switch(I){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Wt(n,i,I,u,s,null)}return;case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":Nt("load",n);break;case"video":case"audio":for(u=0;u<tu.length;u++)Nt(tu[u],n);break;case"image":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"embed":case"source":case"link":Nt("error",n),Nt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(u=s[$],u!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(n,i,$,u,s,null)}return;default:if(vl(i)){for(nt in s)s.hasOwnProperty(nt)&&(u=s[nt],u!==void 0&&om(n,i,nt,u,s,void 0));return}}for(O in s)s.hasOwnProperty(O)&&(u=s[O],u!=null&&Wt(n,i,O,u,s,null))}function $A(n,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,E=null,O=null,I=null,$=null,nt=null;for(et in s){var at=s[et];if(s.hasOwnProperty(et)&&at!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":I=at;default:u.hasOwnProperty(et)||Wt(n,i,et,null,u,at)}}for(var K in u){var et=u[K];if(at=s[K],u.hasOwnProperty(K)&&(et!=null||at!=null))switch(K){case"type":g=et;break;case"name":h=et;break;case"checked":$=et;break;case"defaultChecked":nt=et;break;case"value":E=et;break;case"defaultValue":O=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(a(137,i));break;default:et!==at&&Wt(n,i,K,et,u,at)}}aa(n,E,O,I,$,nt,g,h);return;case"select":et=E=O=K=null;for(g in s)if(I=s[g],s.hasOwnProperty(g)&&I!=null)switch(g){case"value":break;case"multiple":et=I;default:u.hasOwnProperty(g)||Wt(n,i,g,null,u,I)}for(h in u)if(g=u[h],I=s[h],u.hasOwnProperty(h)&&(g!=null||I!=null))switch(h){case"value":K=g;break;case"defaultValue":O=g;break;case"multiple":E=g;default:g!==I&&Wt(n,i,h,g,u,I)}i=O,s=E,u=et,K!=null?Bt(n,!!s,K,!1):!!u!=!!s&&(i!=null?Bt(n,!!s,i,!0):Bt(n,!!s,s?[]:"",!1));return;case"textarea":et=K=null;for(O in s)if(h=s[O],s.hasOwnProperty(O)&&h!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Wt(n,i,O,null,u,h)}for(E in u)if(h=u[E],g=s[E],u.hasOwnProperty(E)&&(h!=null||g!=null))switch(E){case"value":K=h;break;case"defaultValue":et=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==g&&Wt(n,i,E,h,u,g)}Ka(n,K,et);return;case"option":for(var mt in s)if(K=s[mt],s.hasOwnProperty(mt)&&K!=null&&!u.hasOwnProperty(mt))switch(mt){case"selected":n.selected=!1;break;default:Wt(n,i,mt,null,u,K)}for(I in u)if(K=u[I],et=s[I],u.hasOwnProperty(I)&&K!==et&&(K!=null||et!=null))switch(I){case"selected":n.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Wt(n,i,I,K,u,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in s)K=s[wt],s.hasOwnProperty(wt)&&K!=null&&!u.hasOwnProperty(wt)&&Wt(n,i,wt,null,u,K);for($ in u)if(K=u[$],et=s[$],u.hasOwnProperty($)&&K!==et&&(K!=null||et!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,i));break;default:Wt(n,i,$,K,u,et)}return;default:if(vl(i)){for(var ve in s)K=s[ve],s.hasOwnProperty(ve)&&K!==void 0&&!u.hasOwnProperty(ve)&&om(n,i,ve,void 0,u,K);for(nt in u)K=u[nt],et=s[nt],!u.hasOwnProperty(nt)||K===et||K===void 0&&et===void 0||om(n,i,nt,K,u,et);return}}for(var G in s)K=s[G],s.hasOwnProperty(G)&&K!=null&&!u.hasOwnProperty(G)&&Wt(n,i,G,null,u,K);for(at in u)K=u[at],et=s[at],!u.hasOwnProperty(at)||K===et||K==null&&et==null||Wt(n,i,at,K,u,et)}var sm=null,lm=null;function Df(n){return n.nodeType===9?n:n.ownerDocument}function o1(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s1(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function um(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cm=null;function FA(){var n=window.event;return n&&n.type==="popstate"?n===cm?!1:(cm=n,!0):(cm=null,!1)}var l1=typeof setTimeout=="function"?setTimeout:void 0,GA=typeof clearTimeout=="function"?clearTimeout:void 0,u1=typeof Promise=="function"?Promise:void 0,YA=typeof queueMicrotask=="function"?queueMicrotask:typeof u1<"u"?function(n){return u1.resolve(null).then(n).catch(XA)}:l1;function XA(n){setTimeout(function(){throw n})}function fm(n,i){var s=i,u=0;do{var h=s.nextSibling;if(n.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"){if(u===0){n.removeChild(h),uu(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=h}while(s);uu(i)}function hm(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":hm(s),Ga(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function KA(n,i,s,u){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[ta])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==h.rel||n.getAttribute("href")!==(h.href==null?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=hr(n.nextSibling),n===null)break}return null}function WA(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=hr(n.nextSibling),n===null))return null;return n}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}function c1(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}function f1(n,i,s){switch(i=Df(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}var Qn=new Map,h1=new Set;function Mf(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var Ti=ft.d;ft.d={f:ZA,r:QA,D:JA,C:t_,L:e_,m:n_,X:i_,S:r_,M:a_};function ZA(){var n=Ti.f(),i=Ef();return n||i}function QA(n){var i=Qr(n);i!==null&&i.tag===5&&i.type==="form"?Bv(i):Ti.r(n)}var xs=typeof document>"u"?null:document;function d1(n,i,s){var u=xs;if(u&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),h1.has(h)||(h1.add(h),n={rel:n,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Xe(i,"link",n),le(i),u.head.appendChild(i)))}}function JA(n){Ti.D(n),d1("dns-prefetch",n,null)}function t_(n,i){Ti.C(n,i),d1("preconnect",n,i)}function e_(n,i,s){Ti.L(n,i,s);var u=xs;if(u&&n&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+me(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+me(s.imageSizes)+'"]')):h+='[href="'+me(n)+'"]';var g=h;switch(i){case"style":g=Es(n);break;case"script":g=As(n)}Qn.has(g)||(n=S({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Qn.set(g,n),u.querySelector(h)!==null||i==="style"&&u.querySelector(nu(g))||i==="script"&&u.querySelector(ru(g))||(i=u.createElement("link"),Xe(i,"link",n),le(i),u.head.appendChild(i)))}}function n_(n,i){Ti.m(n,i);var s=xs;if(s&&n){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(u)+'"][href="'+me(n)+'"]',g=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=As(n)}if(!Qn.has(g)&&(n=S({rel:"modulepreload",href:n},i),Qn.set(g,n),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ru(g)))return}u=s.createElement("link"),Xe(u,"link",n),le(u),s.head.appendChild(u)}}}function r_(n,i,s){Ti.S(n,i,s);var u=xs;if(u&&n){var h=na(u).hoistableStyles,g=Es(n);i=i||"default";var E=h.get(g);if(!E){var O={loading:0,preload:null};if(E=u.querySelector(nu(g)))O.loading=5;else{n=S({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Qn.get(g))&&dm(n,s);var I=E=u.createElement("link");le(I),Xe(I,"link",n),I._p=new Promise(function($,nt){I.onload=$,I.onerror=nt}),I.addEventListener("load",function(){O.loading|=1}),I.addEventListener("error",function(){O.loading|=2}),O.loading|=4,Pf(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:O},h.set(g,E)}}}function i_(n,i){Ti.X(n,i);var s=xs;if(s&&n){var u=na(s).hoistableScripts,h=As(n),g=u.get(h);g||(g=s.querySelector(ru(h)),g||(n=S({src:n,async:!0},i),(i=Qn.get(h))&&pm(n,i),g=s.createElement("script"),le(g),Xe(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(h,g))}}function a_(n,i){Ti.M(n,i);var s=xs;if(s&&n){var u=na(s).hoistableScripts,h=As(n),g=u.get(h);g||(g=s.querySelector(ru(h)),g||(n=S({src:n,async:!0,type:"module"},i),(i=Qn.get(h))&&pm(n,i),g=s.createElement("script"),le(g),Xe(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(h,g))}}function p1(n,i,s,u){var h=(h=dn.current)?Mf(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Es(s.href),s=na(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Es(s.href);var g=na(h).hoistableStyles,E=g.get(n);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=h.querySelector(nu(n)))&&!g._p&&(E.instance=g,E.state.loading=5),Qn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Qn.set(n,s),g||o_(h,n,s,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=As(s),s=na(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Es(n){return'href="'+me(n)+'"'}function nu(n){return'link[rel="stylesheet"]['+n+"]"}function m1(n){return S({},n,{"data-precedence":n.precedence,precedence:null})}function o_(n,i,s,u){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=n.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Xe(i,"link",s),le(i),n.head.appendChild(i))}function As(n){return'[src="'+me(n)+'"]'}function ru(n){return"script[async]"+n}function g1(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=n.querySelector('style[data-href~="'+me(s.href)+'"]');if(u)return i.instance=u,le(u),u;var h=S({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),le(u),Xe(u,"style",h),Pf(u,s.precedence,n),i.instance=u;case"stylesheet":h=Es(s.href);var g=n.querySelector(nu(h));if(g)return i.state.loading|=4,i.instance=g,le(g),g;u=m1(s),(h=Qn.get(h))&&dm(u,h),g=(n.ownerDocument||n).createElement("link"),le(g);var E=g;return E._p=new Promise(function(O,I){E.onload=O,E.onerror=I}),Xe(g,"link",u),i.state.loading|=4,Pf(g,s.precedence,n),i.instance=g;case"script":return g=As(s.src),(h=n.querySelector(ru(g)))?(i.instance=h,le(h),h):(u=s,(h=Qn.get(g))&&(u=S({},s),pm(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),le(h),Xe(h,"link",u),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Pf(u,s.precedence,n));return i.instance}function Pf(n,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,g=h,E=0;E<u.length;E++){var O=u[E];if(O.dataset.precedence===i)g=O;else if(g!==h)break}g?g.parentNode.insertBefore(n,g.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function dm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function pm(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Nf=null;function y1(n,i,s){if(Nf===null){var u=new Map,h=Nf=new Map;h.set(s,u)}else h=Nf,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(n))return u;for(u.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var g=s[h];if(!(g[ta]||g[Ie]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(i)||"";E=n+E;var O=u.get(E);O?O.push(g):u.set(E,[g])}}return u}function v1(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function s_(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function b1(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var iu=null;function l_(){}function u_(n,i,s){if(iu===null)throw Error(a(475));var u=iu;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Es(s.href),g=n.querySelector(nu(h));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Lf.bind(u),n.then(u,u)),i.state.loading|=4,i.instance=g,le(g);return}g=n.ownerDocument||n,s=m1(s),(h=Qn.get(h))&&dm(s,h),g=g.createElement("link"),le(g);var E=g;E._p=new Promise(function(O,I){E.onload=O,E.onerror=I}),Xe(g,"link",s),i.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Lf.bind(u),n.addEventListener("load",i),n.addEventListener("error",i))}}function c_(){if(iu===null)throw Error(a(475));var n=iu;return n.stylesheets&&n.count===0&&mm(n,n.stylesheets),0<n.count?function(i){var s=setTimeout(function(){if(n.stylesheets&&mm(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(s)}}:null}function Lf(){if(this.count--,this.count===0){if(this.stylesheets)mm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var zf=null;function mm(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,zf=new Map,i.forEach(f_,n),zf=null,Lf.call(n))}function f_(n,i){if(!(i.state.loading&4)){var s=zf.get(n);if(s)var u=s.get(null);else{s=new Map,zf.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var E=h[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),u=E)}u&&s.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),g=s.get(E)||u,g===u&&s.set(null,h),s.set(E,h),this.count++,u=Lf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),g?g.parentNode.insertBefore(h,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var au={$$typeof:_,Provider:null,Consumer:null,_currentValue:At,_currentValue2:At,_threadCount:0};function h_(n,i,s,u,h,g,E,O){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.hiddenUpdates=Vo(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function S1(n,i,s,u,h,g,E,O,I,$,nt,at){return n=new h_(n,i,s,E,O,I,$,at),i=1,g===!0&&(i|=24),g=Wn(3,null,null,i),n.current=g,g.stateNode=n,i=Yd(),i.refCount++,n.pooledCache=i,i.refCount++,g.memoizedState={element:u,isDehydrated:s,cache:i},Cp(g),n}function T1(n){return n?(n=rs,n):rs}function w1(n,i,s,u,h,g){h=T1(h),u.context===null?u.context=h:u.pendingContext=h,u=ga(i),u.payload={element:s},g=g===void 0?null:g,g!==null&&(u.callback=g),s=ya(n,u,i),s!==null&&(un(s,n,i),Hl(s,n,i))}function x1(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function gm(n,i){x1(n,i),(n=n.alternate)&&x1(n,i)}function E1(n){if(n.tag===13){var i=ua(n,67108864);i!==null&&un(i,n,67108864),gm(n,67108864)}}var If=!0;function d_(n,i,s,u){var h=R.T;R.T=null;var g=ft.p;try{ft.p=2,ym(n,i,s,u)}finally{ft.p=g,R.T=h}}function p_(n,i,s,u){var h=R.T;R.T=null;var g=ft.p;try{ft.p=8,ym(n,i,s,u)}finally{ft.p=g,R.T=h}}function ym(n,i,s,u){if(If){var h=vm(u);if(h===null)am(n,i,u,Uf,s),_1(n,u);else if(g_(h,n,i,s,u))u.stopPropagation();else if(_1(n,u),i&4&&-1<m_.indexOf(n)){for(;h!==null;){var g=Qr(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=or(g.pendingLanes);if(E!==0){var O=g;for(O.pendingLanes|=2,O.entangledLanes|=2;E;){var I=1<<31-on(E);O.entanglements[1]|=I,E&=~I}Ir(g),(ce&6)===0&&(Tf=pn()+500,Jl(0))}}break;case 13:O=ua(g,2),O!==null&&un(O,g,2),Ef(),gm(g,2)}if(g=vm(u),g===null&&am(n,i,u,Uf,s),g===h)break;h=g}h!==null&&u.stopPropagation()}else am(n,i,u,null,s)}}function vm(n){return n=Go(n),bm(n)}var Uf=null;function bm(n){if(Uf=null,n=lr(n),n!==null){var i=ut(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=yt(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Uf=n,null}function A1(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xc()){case De:return 2;case ze:return 8;case Zr:case Ec:return 32;case sl:return 268435456;default:return 32}default:return 32}}var Sm=!1,Ea=null,Aa=null,_a=null,ou=new Map,su=new Map,Ca=[],m_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _1(n,i){switch(n){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":ou.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(i.pointerId)}}function lu(n,i,s,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Qr(i),i!==null&&E1(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function g_(n,i,s,u,h){switch(i){case"focusin":return Ea=lu(Ea,n,i,s,u,h),!0;case"dragenter":return Aa=lu(Aa,n,i,s,u,h),!0;case"mouseover":return _a=lu(_a,n,i,s,u,h),!0;case"pointerover":var g=h.pointerId;return ou.set(g,lu(ou.get(g)||null,n,i,s,u,h)),!0;case"gotpointercapture":return g=h.pointerId,su.set(g,lu(su.get(g)||null,n,i,s,u,h)),!0}return!1}function C1(n){var i=lr(n.target);if(i!==null){var s=ut(i);if(s!==null){if(i=s.tag,i===13){if(i=yt(s),i!==null){n.blockedOn=i,Qi(n.priority,function(){if(s.tag===13){var u=Rn(),h=ua(s,u);h!==null&&un(h,s,u),gm(s,u)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bf(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=vm(n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);jn=u,s.target.dispatchEvent(u),jn=null}else return i=Qr(s),i!==null&&E1(i),n.blockedOn=s,!1;i.shift()}return!0}function O1(n,i,s){Bf(n)&&s.delete(i)}function y_(){Sm=!1,Ea!==null&&Bf(Ea)&&(Ea=null),Aa!==null&&Bf(Aa)&&(Aa=null),_a!==null&&Bf(_a)&&(_a=null),ou.forEach(O1),su.forEach(O1)}function jf(n,i){n.blockedOn===i&&(n.blockedOn=null,Sm||(Sm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,y_)))}var Vf=null;function R1(n){Vf!==n&&(Vf=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Vf===n&&(Vf=null);for(var i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],h=n[i+2];if(typeof u!="function"){if(bm(u||s)===null)continue;break}var g=Qr(s);g!==null&&(n.splice(i,3),i-=3,up(g,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function uu(n){function i(I){return jf(I,n)}Ea!==null&&jf(Ea,n),Aa!==null&&jf(Aa,n),_a!==null&&jf(_a,n),ou.forEach(i),su.forEach(i);for(var s=0;s<Ca.length;s++){var u=Ca[s];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Ca.length&&(s=Ca[0],s.blockedOn===null);)C1(s),s.blockedOn===null&&Ca.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],g=s[u+1],E=h[Ue]||null;if(typeof g=="function")E||R1(s);else if(E){var O=null;if(g&&g.hasAttribute("formAction")){if(h=g,E=g[Ue]||null)O=E.formAction;else if(bm(h)!==null)continue}else O=E.action;typeof O=="function"?s[u+1]=O:(s.splice(u,3),u-=3),R1(s)}}}function Tm(n){this._internalRoot=n}Hf.prototype.render=Tm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=Rn();w1(s,u,n,i,null,null)},Hf.prototype.unmount=Tm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;n.tag===0&&Ss(),w1(n.current,2,null,n,null,null),Ef(),i[Ji]=null}};function Hf(n){this._internalRoot=n}Hf.prototype.unstable_scheduleHydration=function(n){if(n){var i=Oc();n={blockedOn:null,target:n,priority:i};for(var s=0;s<Ca.length&&i!==0&&i<Ca[s].priority;s++);Ca.splice(s,0,n),s===0&&C1(n)}};var k1=e.version;if(k1!=="19.0.0")throw Error(a(527,k1,"19.0.0"));ft.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=it(i),n=n!==null?dt(n):null,n=n===null?null:n.stateNode,n};var v_={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:lr,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qf.isDisabled&&qf.supportsFiber)try{Gi=qf.inject(v_),Ze=qf}catch{}}return hu.createRoot=function(n,i){if(!o(n))throw Error(a(299));var s=!1,u="",h=Yv,g=Xv,E=Kv,O=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(O=i.unstable_transitionCallbacks)),i=S1(n,1,!1,null,null,s,u,h,g,E,O,null),n[Ji]=i.current,im(n.nodeType===8?n.parentNode:n),new Tm(i)},hu.hydrateRoot=function(n,i,s){if(!o(n))throw Error(a(299));var u=!1,h="",g=Yv,E=Xv,O=Kv,I=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(O=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=S1(n,1,!0,i,s??null,u,h,g,E,O,I,$),i.context=T1(null),s=i.current,u=Rn(),h=ga(u),h.callback=null,ya(s,h,u),i.current.lanes=u,xe(i,u),Ir(i),n[Ji]=i.current,im(n),new Hf(i)},hu.version="19.0.0",hu}var j1;function M_(){if(j1)return Em.exports;j1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Em.exports=D_(),Em.exports}var P_=M_(),du={},V1;function N_(){if(V1)return du;V1=1,Object.defineProperty(du,"__esModule",{value:!0}),du.parse=c,du.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function c(A,_){const x=new l,w=A.length;if(w<2)return x;const C=(_==null?void 0:_.decode)||y;let M=0;do{const j=A.indexOf("=",M);if(j===-1)break;const U=A.indexOf(";",M),F=U===-1?w:U;if(j>F){M=A.lastIndexOf(";",j-1)+1;continue}const z=d(A,M,j),W=p(A,j,z),P=A.slice(z,W);if(x[P]===void 0){let k=d(A,j+1,F),R=p(A,F,k);const S=C(A.slice(k,R));x[P]=S}M=F+1}while(M<w);return x}function d(A,_,x){do{const w=A.charCodeAt(_);if(w!==32&&w!==9)return _}while(++_<x);return x}function p(A,_,x){for(;_>x;){const w=A.charCodeAt(--_);if(w!==32&&w!==9)return _+1}return x}function m(A,_,x){const w=(x==null?void 0:x.encode)||encodeURIComponent;if(!t.test(A))throw new TypeError(`argument name is invalid: ${A}`);const C=w(_);if(!e.test(C))throw new TypeError(`argument val is invalid: ${_}`);let M=A+"="+C;if(!x)return M;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);M+="; Max-Age="+x.maxAge}if(x.domain){if(!r.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);M+="; Domain="+x.domain}if(x.path){if(!a.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);M+="; Path="+x.path}if(x.expires){if(!b(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);M+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(M+="; HttpOnly"),x.secure&&(M+="; Secure"),x.partitioned&&(M+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return M}function y(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function b(A){return o.call(A)==="[object Date]"}return du}N_();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var H1="popstate";function L_(t={}){function e(a,o){let{pathname:l,search:c,hash:d}=a.location;return ug("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:Nu(o)}return I_(e,r,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z_(){return Math.random().toString(36).substring(2,10)}function q1(t,e){return{usr:t.state,key:t.key,idx:e}}function ug(t,e,r=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Zs(e):e,state:r,key:e&&e.key||a||z_()}}function Nu({pathname:t="/",search:e="",hash:r=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zs(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substring(r),t=t.substring(0,r));let a=t.indexOf("?");a>=0&&(e.search=t.substring(a),t=t.substring(0,a)),t&&(e.pathname=t)}return e}function I_(t,e,r,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,c=o.history,d="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function b(){d="POP";let C=y(),M=C==null?null:C-m;m=C,p&&p({action:d,location:w.location,delta:M})}function A(C,M){d="PUSH";let j=ug(w.location,C,M);m=y()+1;let U=q1(j,m),F=w.createHref(j);try{c.pushState(U,"",F)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(F)}l&&p&&p({action:d,location:w.location,delta:1})}function _(C,M){d="REPLACE";let j=ug(w.location,C,M);m=y();let U=q1(j,m),F=w.createHref(j);c.replaceState(U,"",F),l&&p&&p({action:d,location:w.location,delta:0})}function x(C){let M=o.location.origin!=="null"?o.location.origin:o.location.href,j=typeof C=="string"?C:Nu(C);return j=j.replace(/ $/,"%20"),he(M,`No window.location.(origin|href) available to create URL for href: ${j}`),new URL(j,M)}let w={get action(){return d},get location(){return t(o,c)},listen(C){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(H1,b),p=C,()=>{o.removeEventListener(H1,b),p=null}},createHref(C){return e(o,C)},createURL:x,encodeLocation(C){let M=x(C);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:A,replace:_,go(C){return c.go(C)}};return w}function nw(t,e,r="/"){return U_(t,e,r,!1)}function U_(t,e,r,a){let o=typeof e=="string"?Zs(e):e,l=Ni(o.pathname||"/",r);if(l==null)return null;let c=rw(t);B_(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=W_(l);d=X_(c[p],m,a)}return d}function rw(t,e=[],r=[],a=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(he(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let m=Di([a,p.relativePath]),y=r.concat(p);l.children&&l.children.length>0&&(he(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),rw(l.children,e,y,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:G_(m,l.index),routesMeta:y})};return t.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of iw(l.path))o(l,c,p)}),e}function iw(t){let e=t.split("/");if(e.length===0)return[];let[r,...a]=e,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let c=iw(a.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function B_(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Y_(e.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var j_=/^:[\w-]+$/,V_=3,H_=2,q_=1,$_=10,F_=-2,$1=t=>t==="*";function G_(t,e){let r=t.split("/"),a=r.length;return r.some($1)&&(a+=F_),e&&(a+=H_),r.filter(o=>!$1(o)).reduce((o,l)=>o+(j_.test(l)?V_:l===""?q_:$_),a)}function Y_(t,e){return t.length===e.length&&t.slice(0,-1).every((a,o)=>a===e[o])?t[t.length-1]-e[e.length-1]:0}function X_(t,e,r=!1){let{routesMeta:a}=t,o={},l="/",c=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,y=l==="/"?e:e.slice(l.length)||"/",b=xh({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),A=p.route;if(!b&&m&&r&&!a[a.length-1].route.index&&(b=xh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!b)return null;Object.assign(o,b.params),c.push({params:o,pathname:Di([l,b.pathname]),pathnameBase:tC(Di([l,b.pathnameBase])),route:A}),b.pathnameBase!=="/"&&(l=Di([l,b.pathnameBase]))}return c}function xh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,a]=K_(t.path,t.caseSensitive,t.end),o=e.match(r);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:a.reduce((m,{paramName:y,isOptional:b},A)=>{if(y==="*"){let x=d[A]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const _=d[A];return b&&!_?m[y]=void 0:m[y]=(_||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:t}}function K_(t,e=!1,r=!0){Yr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function W_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ni(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,a=t.charAt(r);return a&&a!=="/"?null:t.slice(r)||"/"}function Z_(t,e="/"){let{pathname:r,search:a="",hash:o=""}=typeof t=="string"?Zs(t):t;return{pathname:r?r.startsWith("/")?r:Q_(r,e):e,search:eC(a),hash:nC(o)}}function Q_(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Om(t,e,r,a){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function J_(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function aw(t){let e=J_(t);return e.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase)}function ow(t,e,r,a=!1){let o;typeof t=="string"?o=Zs(t):(o={...t},he(!o.pathname||!o.pathname.includes("?"),Om("?","pathname","search",o)),he(!o.pathname||!o.pathname.includes("#"),Om("#","pathname","hash",o)),he(!o.search||!o.search.includes("#"),Om("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=r;else{let b=e.length-1;if(!a&&c.startsWith("..")){let A=c.split("/");for(;A[0]==="..";)A.shift(),b-=1;o.pathname=A.join("/")}d=b>=0?e[b]:"/"}let p=Z_(o,d),m=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var Di=t=>t.join("/").replace(/\/\/+/g,"/"),tC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var sw=["POST","PUT","PATCH","DELETE"];new Set(sw);var iC=["GET",...sw];new Set(iC);var Qs=B.createContext(null);Qs.displayName="DataRouter";var Xh=B.createContext(null);Xh.displayName="DataRouterState";var lw=B.createContext({isTransitioning:!1});lw.displayName="ViewTransition";var aC=B.createContext(new Map);aC.displayName="Fetchers";var oC=B.createContext(null);oC.displayName="Await";var Kr=B.createContext(null);Kr.displayName="Navigation";var Qu=B.createContext(null);Qu.displayName="Location";var Wr=B.createContext({outlet:null,matches:[],isDataRoute:!1});Wr.displayName="Route";var l0=B.createContext(null);l0.displayName="RouteError";function sC(t,{relative:e}={}){he(Ju(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=B.useContext(Kr),{hash:o,pathname:l,search:c}=tc(t,{relative:e}),d=l;return r!=="/"&&(d=l==="/"?r:Di([r,l])),a.createHref({pathname:d,search:c,hash:o})}function Ju(){return B.useContext(Qu)!=null}function Bo(){return he(Ju(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(Qu).location}var uw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cw(t){B.useContext(Kr).static||B.useLayoutEffect(t)}function Kh(){let{isDataRoute:t}=B.useContext(Wr);return t?wC():lC()}function lC(){he(Ju(),"useNavigate() may be used only in the context of a <Router> component.");let t=B.useContext(Qs),{basename:e,navigator:r}=B.useContext(Kr),{matches:a}=B.useContext(Wr),{pathname:o}=Bo(),l=JSON.stringify(aw(a)),c=B.useRef(!1);return cw(()=>{c.current=!0}),B.useCallback((p,m={})=>{if(Yr(c.current,uw),!c.current)return;if(typeof p=="number"){r.go(p);return}let y=ow(p,JSON.parse(l),o,m.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Di([e,y.pathname])),(m.replace?r.replace:r.push)(y,m.state,m)},[e,r,l,o,t])}var uC=B.createContext(null);function cC(t){let e=B.useContext(Wr).outlet;return e&&B.createElement(uC.Provider,{value:t},e)}function tc(t,{relative:e}={}){let{matches:r}=B.useContext(Wr),{pathname:a}=Bo(),o=JSON.stringify(aw(r));return B.useMemo(()=>ow(t,JSON.parse(o),a,e==="path"),[t,o,a,e])}function fC(t,e){return fw(t,e)}function fw(t,e,r,a){var j;he(Ju(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=B.useContext(Kr),{matches:c}=B.useContext(Wr),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",b=d&&d.route;{let U=b&&b.path||"";hw(m,!b||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let A=Bo(),_;if(e){let U=typeof e=="string"?Zs(e):e;he(y==="/"||((j=U.pathname)==null?void 0:j.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${U.pathname}" was given in the \`location\` prop.`),_=U}else _=A;let x=_.pathname||"/",w=x;if(y!=="/"){let U=y.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(U.length).join("/")}let C=!l&&r&&r.matches&&r.matches.length>0?r.matches:nw(t,{pathname:w});Yr(b||C!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Yr(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=gC(C&&C.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:Di([y,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?y:Di([y,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),c,r,a);return e&&M?B.createElement(Qu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},M):M}function hC(){let t=TC(),e=rC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),r?B.createElement("pre",{style:o},r):null,c)}var dC=B.createElement(hC,null),pC=class extends B.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?B.createElement(Wr.Provider,{value:this.props.routeContext},B.createElement(l0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mC({routeContext:t,match:e,children:r}){let a=B.useContext(Qs);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Wr.Provider,{value:t},r)}function gC(t,e=[],r=null,a=null){if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,l=r==null?void 0:r.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);he(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(r)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:b}=r,A=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||A){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,m,y)=>{let b,A=!1,_=null,x=null;r&&(b=l&&m.route.id?l[m.route.id]:void 0,_=m.route.errorElement||dC,c&&(d<0&&y===0?(hw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,x=null):d===y&&(A=!0,x=m.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,y+1)),C=()=>{let M;return b?M=_:A?M=x:m.route.Component?M=B.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=p,B.createElement(mC,{match:m,routeContext:{outlet:p,matches:w,isDataRoute:r!=null},children:M})};return r&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?B.createElement(pC,{location:r.location,revalidation:r.revalidation,component:_,error:b,children:C(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):C()},null)}function u0(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yC(t){let e=B.useContext(Qs);return he(e,u0(t)),e}function vC(t){let e=B.useContext(Xh);return he(e,u0(t)),e}function bC(t){let e=B.useContext(Wr);return he(e,u0(t)),e}function c0(t){let e=bC(t),r=e.matches[e.matches.length-1];return he(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function SC(){return c0("useRouteId")}function TC(){var a;let t=B.useContext(l0),e=vC("useRouteError"),r=c0("useRouteError");return t!==void 0?t:(a=e.errors)==null?void 0:a[r]}function wC(){let{router:t}=yC("useNavigate"),e=c0("useNavigate"),r=B.useRef(!1);return cw(()=>{r.current=!0}),B.useCallback(async(o,l={})=>{Yr(r.current,uw),r.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var F1={};function hw(t,e,r){!e&&!F1[t]&&(F1[t]=!0,Yr(!1,r))}B.memo(xC);function xC({routes:t,future:e,state:r}){return fw(t,void 0,r,e)}function EC(t){return cC(t.context)}function Su(t){he(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AC({basename:t="/",children:e=null,location:r,navigationType:a="POP",navigator:o,static:l=!1}){he(!Ju(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=B.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof r=="string"&&(r=Zs(r));let{pathname:p="/",search:m="",hash:y="",state:b=null,key:A="default"}=r,_=B.useMemo(()=>{let x=Ni(p,c);return x==null?null:{location:{pathname:x,search:m,hash:y,state:b,key:A},navigationType:a}},[c,p,m,y,b,A,a]);return Yr(_!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:B.createElement(Kr.Provider,{value:d},B.createElement(Qu.Provider,{children:e,value:_}))}function _C({children:t,location:e}){return fC(cg(t),e)}function cg(t,e=[]){let r=[];return B.Children.forEach(t,(a,o)=>{if(!B.isValidElement(a))return;let l=[...e,o];if(a.type===B.Fragment){r.push.apply(r,cg(a.props.children,l));return}he(a.type===Su,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),he(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=cg(a.props.children,l)),r.push(c)}),r}var oh="get",sh="application/x-www-form-urlencoded";function Wh(t){return t!=null&&typeof t.tagName=="string"}function CC(t){return Wh(t)&&t.tagName.toLowerCase()==="button"}function OC(t){return Wh(t)&&t.tagName.toLowerCase()==="form"}function RC(t){return Wh(t)&&t.tagName.toLowerCase()==="input"}function kC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function DC(t,e){return t.button===0&&(!e||e==="_self")&&!kC(t)}var $f=null;function MC(){if($f===null)try{new FormData(document.createElement("form"),0),$f=!1}catch{$f=!0}return $f}var PC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rm(t){return t!=null&&!PC.has(t)?(Yr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sh}"`),null):t}function NC(t,e){let r,a,o,l,c;if(OC(t)){let d=t.getAttribute("action");a=d?Ni(d,e):null,r=t.getAttribute("method")||oh,o=Rm(t.getAttribute("enctype"))||sh,l=new FormData(t)}else if(CC(t)||RC(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(a=p?Ni(p,e):null,r=t.getAttribute("formmethod")||d.getAttribute("method")||oh,o=Rm(t.getAttribute("formenctype"))||Rm(d.getAttribute("enctype"))||sh,l=new FormData(d,t),!MC()){let{name:m,type:y,value:b}=t;if(y==="image"){let A=m?`${m}.`:"";l.append(`${A}x`,"0"),l.append(`${A}y`,"0")}else m&&l.append(m,b)}}else{if(Wh(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=oh,a=null,o=sh,c=t}return l&&o==="text/plain"&&(c=l,l=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:l,body:c}}function f0(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function LC(t,e){if(t.id in e)return e[t.id];try{let r=await import(t.module);return e[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function IC(t,e,r){let a=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await LC(l,r);return c.links?c.links():[]}return[]}));return VC(a.flat(1).filter(zC).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function G1(t,e,r,a,o,l){let c=(p,m)=>r[m]?p.route.id!==r[m].route.id:!0,d=(p,m)=>{var y;return r[m].pathname!==p.pathname||((y=r[m].route.path)==null?void 0:y.endsWith("*"))&&r[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>c(p,m)||d(p,m)):l==="data"?e.filter((p,m)=>{var b;let y=a.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let A=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=r[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function UC(t,e,{includeHydrateFallback:r}={}){return BC(t.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function BC(t){return[...new Set(t)]}function jC(t){let e={},r=Object.keys(t).sort();for(let a of r)e[a]=t[a];return e}function VC(t,e){let r=new Set;return new Set(e),t.reduce((a,o)=>{let l=JSON.stringify(jC(o));return r.has(l)||(r.add(l),a.push({key:l,link:o})),a},[])}function HC(t,e){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":e&&Ni(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function dw(){let t=B.useContext(Qs);return f0(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function qC(){let t=B.useContext(Xh);return f0(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var h0=B.createContext(void 0);h0.displayName="FrameworkContext";function pw(){let t=B.useContext(h0);return f0(t,"You must render this element inside a <HydratedRouter> element"),t}function $C(t,e){let r=B.useContext(h0),[a,o]=B.useState(!1),[l,c]=B.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:b}=e,A=B.useRef(null);B.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let w=M=>{M.forEach(j=>{c(j.isIntersecting)})},C=new IntersectionObserver(w,{threshold:.5});return A.current&&C.observe(A.current),()=>{C.disconnect()}}},[t]),B.useEffect(()=>{if(a){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[a]);let _=()=>{o(!0)},x=()=>{o(!1),c(!1)};return r?t!=="intent"?[l,A,{}]:[l,A,{onFocus:pu(d,_),onBlur:pu(p,x),onMouseEnter:pu(m,_),onMouseLeave:pu(y,x),onTouchStart:pu(b,_)}]:[!1,A,{}]}function pu(t,e){return r=>{t&&t(r),r.defaultPrevented||e(r)}}function FC({page:t,...e}){let{router:r}=dw(),a=B.useMemo(()=>nw(r.routes,t,r.basename),[r.routes,t,r.basename]);return a?B.createElement(YC,{page:t,matches:a,...e}):null}function GC(t){let{manifest:e,routeModules:r}=pw(),[a,o]=B.useState([]);return B.useEffect(()=>{let l=!1;return IC(t,e,r).then(c=>{l||o(c)}),()=>{l=!0}},[t,e,r]),a}function YC({page:t,matches:e,...r}){let a=Bo(),{manifest:o,routeModules:l}=pw(),{basename:c}=dw(),{loaderData:d,matches:p}=qC(),m=B.useMemo(()=>G1(t,e,p,o,a,"data"),[t,e,p,o,a]),y=B.useMemo(()=>G1(t,e,p,o,a,"assets"),[t,e,p,o,a]),b=B.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let x=new Set,w=!1;if(e.forEach(M=>{var U;let j=o.routes[M.route.id];!j||!j.hasLoader||(!m.some(F=>F.route.id===M.route.id)&&M.route.id in d&&((U=l[M.route.id])!=null&&U.shouldRevalidate)||j.hasClientLoader?w=!0:x.add(M.route.id))}),x.size===0)return[];let C=HC(t,c);return w&&x.size>0&&C.searchParams.set("_routes",e.filter(M=>x.has(M.route.id)).map(M=>M.route.id).join(",")),[C.pathname+C.search]},[c,d,a,o,m,e,t,l]),A=B.useMemo(()=>UC(y,o),[y,o]),_=GC(y);return B.createElement(B.Fragment,null,b.map(x=>B.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),A.map(x=>B.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),_.map(({key:x,link:w})=>B.createElement("link",{key:x,...w})))}function XC(...t){return e=>{t.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var mw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mw&&(window.__reactRouterVersion="7.4.0")}catch{}function KC({basename:t,children:e,window:r}){let a=B.useRef();a.current==null&&(a.current=L_({window:r,v5Compat:!0}));let o=a.current,[l,c]=B.useState({action:o.action,location:o.location}),d=B.useCallback(p=>{B.startTransition(()=>c(p))},[c]);return B.useLayoutEffect(()=>o.listen(d),[o,d]),B.createElement(AC,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var gw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yw=B.forwardRef(function({onClick:e,discover:r="render",prefetch:a="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:m,preventScrollReset:y,viewTransition:b,...A},_){let{basename:x}=B.useContext(Kr),w=typeof m=="string"&&gw.test(m),C,M=!1;if(typeof m=="string"&&w&&(C=m,mw))try{let R=new URL(window.location.href),S=m.startsWith("//")?new URL(R.protocol+m):new URL(m),N=Ni(S.pathname,x);S.origin===R.origin&&N!=null?m=N+S.search+S.hash:M=!0}catch{Yr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=sC(m,{relative:o}),[U,F,z]=$C(a,A),W=QC(m,{replace:c,state:d,target:p,preventScrollReset:y,relative:o,viewTransition:b});function P(R){e&&e(R),R.defaultPrevented||W(R)}let k=B.createElement("a",{...A,...z,href:C||j,onClick:M||l?e:P,ref:XC(_,F),target:p,"data-discover":!w&&r==="render"?"true":void 0});return U&&!w?B.createElement(B.Fragment,null,k,B.createElement(FC,{page:j})):k});yw.displayName="Link";var fg=B.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...m},y){let b=tc(c,{relative:m.relative}),A=Bo(),_=B.useContext(Xh),{navigator:x,basename:w}=B.useContext(Kr),C=_!=null&&rO(b)&&d===!0,M=x.encodeLocation?x.encodeLocation(b).pathname:b.pathname,j=A.pathname,U=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(j=j.toLowerCase(),U=U?U.toLowerCase():null,M=M.toLowerCase()),U&&w&&(U=Ni(U,w)||U);const F=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let z=j===M||!o&&j.startsWith(M)&&j.charAt(F)==="/",W=U!=null&&(U===M||!o&&U.startsWith(M)&&U.charAt(M.length)==="/"),P={isActive:z,isPending:W,isTransitioning:C},k=z?e:void 0,R;typeof a=="function"?R=a(P):R=[a,z?"active":null,W?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let S=typeof l=="function"?l(P):l;return B.createElement(yw,{...m,"aria-current":k,className:R,ref:y,style:S,to:c,viewTransition:d},typeof p=="function"?p(P):p)});fg.displayName="NavLink";var WC=B.forwardRef(({discover:t="render",fetcherKey:e,navigate:r,reloadDocument:a,replace:o,state:l,method:c=oh,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:b,...A},_)=>{let x=eO(),w=nO(d,{relative:m}),C=c.toLowerCase()==="get"?"get":"post",M=typeof d=="string"&&gw.test(d),j=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let F=U.nativeEvent.submitter,z=(F==null?void 0:F.getAttribute("formmethod"))||c;x(F||U.currentTarget,{fetcherKey:e,method:z,navigate:r,replace:o,state:l,relative:m,preventScrollReset:y,viewTransition:b})};return B.createElement("form",{ref:_,method:C,action:w,onSubmit:a?p:j,...A,"data-discover":!M&&t==="render"?"true":void 0})});WC.displayName="Form";function ZC(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vw(t){let e=B.useContext(Qs);return he(e,ZC(t)),e}function QC(t,{target:e,replace:r,state:a,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=Kh(),p=Bo(),m=tc(t,{relative:l});return B.useCallback(y=>{if(DC(y,e)){y.preventDefault();let b=r!==void 0?r:Nu(p)===Nu(m);d(t,{replace:b,state:a,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,m,r,a,e,t,o,l,c])}var JC=0,tO=()=>`__${String(++JC)}__`;function eO(){let{router:t}=vw("useSubmit"),{basename:e}=B.useContext(Kr),r=SC();return B.useCallback(async(a,o={})=>{let{action:l,method:c,encType:d,formData:p,body:m}=NC(a,e);if(o.navigate===!1){let y=o.fetcherKey||tO();await t.fetch(y,r,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,r])}function nO(t,{relative:e}={}){let{basename:r}=B.useContext(Kr),a=B.useContext(Wr);he(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...tc(t||".",{relative:e})},c=Bo();if(t==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let y=d.toString();l.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(l.pathname=l.pathname==="/"?r:Di([r,l.pathname])),Nu(l)}function rO(t,e={}){let r=B.useContext(lw);he(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=vw("useViewTransitionState"),o=tc(t,{relative:e.relative});if(!r.isTransitioning)return!1;let l=Ni(r.currentLocation.pathname,a)||r.currentLocation.pathname,c=Ni(r.nextLocation.pathname,a)||r.nextLocation.pathname;return xh(o.pathname,c)!=null||xh(o.pathname,l)!=null}new TextEncoder;const Lu={black:"#000",white:"#fff"},_s={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},Cs={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},Os={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Rs={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},ks={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},mu={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},iO={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function No(t,...e){const r=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(a=>r.searchParams.append("args[]",a)),`Minified MUI error #${t}; visit ${r} for the full message.`}const bw="$$material";function Eh(){return Eh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)({}).hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Eh.apply(null,arguments)}function aO(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function oO(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var sO=function(){function t(r){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(a){a.forEach(this._insertTag)},e.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oO(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=aO(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},e.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},t}(),tn="-ms-",Ah="-moz-",qt="-webkit-",Sw="comm",d0="rule",p0="decl",lO="@import",Tw="@keyframes",uO="@layer",cO=Math.abs,Zh=String.fromCharCode,fO=Object.assign;function hO(t,e){return We(t,0)^45?(((e<<2^We(t,0))<<2^We(t,1))<<2^We(t,2))<<2^We(t,3):0}function ww(t){return t.trim()}function dO(t,e){return(t=e.exec(t))?t[0]:t}function $t(t,e,r){return t.replace(e,r)}function hg(t,e){return t.indexOf(e)}function We(t,e){return t.charCodeAt(e)|0}function zu(t,e,r){return t.slice(e,r)}function jr(t){return t.length}function m0(t){return t.length}function Ff(t,e){return e.push(t),t}function pO(t,e){return t.map(e).join("")}var Qh=1,qs=1,xw=0,wn=0,ke=0,Js="";function Jh(t,e,r,a,o,l,c){return{value:t,root:e,parent:r,type:a,props:o,children:l,line:Qh,column:qs,length:c,return:""}}function gu(t,e){return fO(Jh("",null,null,"",null,null,0),t,{length:-t.length},e)}function mO(){return ke}function gO(){return ke=wn>0?We(Js,--wn):0,qs--,ke===10&&(qs=1,Qh--),ke}function Mn(){return ke=wn<xw?We(Js,wn++):0,qs++,ke===10&&(qs=1,Qh++),ke}function qr(){return We(Js,wn)}function lh(){return wn}function ec(t,e){return zu(Js,t,e)}function Iu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ew(t){return Qh=qs=1,xw=jr(Js=t),wn=0,[]}function Aw(t){return Js="",t}function uh(t){return ww(ec(wn-1,dg(t===91?t+2:t===40?t+1:t)))}function yO(t){for(;(ke=qr())&&ke<33;)Mn();return Iu(t)>2||Iu(ke)>3?"":" "}function vO(t,e){for(;--e&&Mn()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return ec(t,lh()+(e<6&&qr()==32&&Mn()==32))}function dg(t){for(;Mn();)switch(ke){case t:return wn;case 34:case 39:t!==34&&t!==39&&dg(ke);break;case 40:t===41&&dg(t);break;case 92:Mn();break}return wn}function bO(t,e){for(;Mn()&&t+ke!==57;)if(t+ke===84&&qr()===47)break;return"/*"+ec(e,wn-1)+"*"+Zh(t===47?t:Mn())}function SO(t){for(;!Iu(qr());)Mn();return ec(t,wn)}function TO(t){return Aw(ch("",null,null,null,[""],t=Ew(t),0,[0],t))}function ch(t,e,r,a,o,l,c,d,p){for(var m=0,y=0,b=c,A=0,_=0,x=0,w=1,C=1,M=1,j=0,U="",F=o,z=l,W=a,P=U;C;)switch(x=j,j=Mn()){case 40:if(x!=108&&We(P,b-1)==58){hg(P+=$t(uh(j),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:P+=uh(j);break;case 9:case 10:case 13:case 32:P+=yO(x);break;case 92:P+=vO(lh()-1,7);continue;case 47:switch(qr()){case 42:case 47:Ff(wO(bO(Mn(),lh()),e,r),p);break;default:P+="/"}break;case 123*w:d[m++]=jr(P)*M;case 125*w:case 59:case 0:switch(j){case 0:case 125:C=0;case 59+y:M==-1&&(P=$t(P,/\f/g,"")),_>0&&jr(P)-b&&Ff(_>32?X1(P+";",a,r,b-1):X1($t(P," ","")+";",a,r,b-2),p);break;case 59:P+=";";default:if(Ff(W=Y1(P,e,r,m,y,o,d,U,F=[],z=[],b),l),j===123)if(y===0)ch(P,e,W,W,F,l,b,d,z);else switch(A===99&&We(P,3)===110?100:A){case 100:case 108:case 109:case 115:ch(t,W,W,a&&Ff(Y1(t,W,W,0,0,o,d,U,o,F=[],b),z),o,z,b,d,a?F:z);break;default:ch(P,W,W,W,[""],z,0,d,z)}}m=y=_=0,w=M=1,U=P="",b=c;break;case 58:b=1+jr(P),_=x;default:if(w<1){if(j==123)--w;else if(j==125&&w++==0&&gO()==125)continue}switch(P+=Zh(j),j*w){case 38:M=y>0?1:(P+="\f",-1);break;case 44:d[m++]=(jr(P)-1)*M,M=1;break;case 64:qr()===45&&(P+=uh(Mn())),A=qr(),y=b=jr(U=P+=SO(lh())),j++;break;case 45:x===45&&jr(P)==2&&(w=0)}}return l}function Y1(t,e,r,a,o,l,c,d,p,m,y){for(var b=o-1,A=o===0?l:[""],_=m0(A),x=0,w=0,C=0;x<a;++x)for(var M=0,j=zu(t,b+1,b=cO(w=c[x])),U=t;M<_;++M)(U=ww(w>0?A[M]+" "+j:$t(j,/&\f/g,A[M])))&&(p[C++]=U);return Jh(t,e,r,o===0?d0:d,p,m,y)}function wO(t,e,r){return Jh(t,e,r,Sw,Zh(mO()),zu(t,2,-2),0)}function X1(t,e,r,a){return Jh(t,e,r,p0,zu(t,0,a),zu(t,a+1,-1),a)}function Us(t,e){for(var r="",a=m0(t),o=0;o<a;o++)r+=e(t[o],o,t,e)||"";return r}function xO(t,e,r,a){switch(t.type){case uO:if(t.children.length)break;case lO:case p0:return t.return=t.return||t.value;case Sw:return"";case Tw:return t.return=t.value+"{"+Us(t.children,a)+"}";case d0:t.value=t.props.join(",")}return jr(r=Us(t.children,a))?t.return=t.value+"{"+r+"}":""}function EO(t){var e=m0(t);return function(r,a,o,l){for(var c="",d=0;d<e;d++)c+=t[d](r,a,o,l)||"";return c}}function AO(t){return function(e){e.root||(e=e.return)&&t(e)}}function _w(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var _O=function(e,r,a){for(var o=0,l=0;o=l,l=qr(),o===38&&l===12&&(r[a]=1),!Iu(l);)Mn();return ec(e,wn)},CO=function(e,r){var a=-1,o=44;do switch(Iu(o)){case 0:o===38&&qr()===12&&(r[a]=1),e[a]+=_O(wn-1,r,a);break;case 2:e[a]+=uh(o);break;case 4:if(o===44){e[++a]=qr()===58?"&\f":"",r[a]=e[a].length;break}default:e[a]+=Zh(o)}while(o=Mn());return e},OO=function(e,r){return Aw(CO(Ew(e),r))},K1=new WeakMap,RO=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,a=e.parent,o=e.column===a.column&&e.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!K1.get(a))&&!o){K1.set(e,!0);for(var l=[],c=OO(r,l),d=a.props,p=0,m=0;p<c.length;p++)for(var y=0;y<d.length;y++,m++)e.props[m]=l[p]?c[p].replace(/&\f/g,d[y]):d[y]+" "+c[p]}}},kO=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function Cw(t,e){switch(hO(t,e)){case 5103:return qt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return qt+t+Ah+t+tn+t+t;case 6828:case 4268:return qt+t+tn+t+t;case 6165:return qt+t+tn+"flex-"+t+t;case 5187:return qt+t+$t(t,/(\w+).+(:[^]+)/,qt+"box-$1$2"+tn+"flex-$1$2")+t;case 5443:return qt+t+tn+"flex-item-"+$t(t,/flex-|-self/,"")+t;case 4675:return qt+t+tn+"flex-line-pack"+$t(t,/align-content|flex-|-self/,"")+t;case 5548:return qt+t+tn+$t(t,"shrink","negative")+t;case 5292:return qt+t+tn+$t(t,"basis","preferred-size")+t;case 6060:return qt+"box-"+$t(t,"-grow","")+qt+t+tn+$t(t,"grow","positive")+t;case 4554:return qt+$t(t,/([^-])(transform)/g,"$1"+qt+"$2")+t;case 6187:return $t($t($t(t,/(zoom-|grab)/,qt+"$1"),/(image-set)/,qt+"$1"),t,"")+t;case 5495:case 3959:return $t(t,/(image-set\([^]*)/,qt+"$1$`$1");case 4968:return $t($t(t,/(.+:)(flex-)?(.*)/,qt+"box-pack:$3"+tn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qt+t+t;case 4095:case 3583:case 4068:case 2532:return $t(t,/(.+)-inline(.+)/,qt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jr(t)-1-e>6)switch(We(t,e+1)){case 109:if(We(t,e+4)!==45)break;case 102:return $t(t,/(.+:)(.+)-([^]+)/,"$1"+qt+"$2-$3$1"+Ah+(We(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~hg(t,"stretch")?Cw($t(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(We(t,e+1)!==115)break;case 6444:switch(We(t,jr(t)-3-(~hg(t,"!important")&&10))){case 107:return $t(t,":",":"+qt)+t;case 101:return $t(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+qt+(We(t,14)===45?"inline-":"")+"box$3$1"+qt+"$2$3$1"+tn+"$2box$3")+t}break;case 5936:switch(We(t,e+11)){case 114:return qt+t+tn+$t(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return qt+t+tn+$t(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return qt+t+tn+$t(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return qt+t+tn+t+t}return t}var DO=function(e,r,a,o){if(e.length>-1&&!e.return)switch(e.type){case p0:e.return=Cw(e.value,e.length);break;case Tw:return Us([gu(e,{value:$t(e.value,"@","@"+qt)})],o);case d0:if(e.length)return pO(e.props,function(l){switch(dO(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Us([gu(e,{props:[$t(l,/:(read-\w+)/,":"+Ah+"$1")]})],o);case"::placeholder":return Us([gu(e,{props:[$t(l,/:(plac\w+)/,":"+qt+"input-$1")]}),gu(e,{props:[$t(l,/:(plac\w+)/,":"+Ah+"$1")]}),gu(e,{props:[$t(l,/:(plac\w+)/,tn+"input-$1")]})],o)}return""})}},MO=[DO],PO=function(e){var r=e.key;if(r==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(w){var C=w.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var o=e.stylisPlugins||MO,l={},c,d=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(w){for(var C=w.getAttribute("data-emotion").split(" "),M=1;M<C.length;M++)l[C[M]]=!0;d.push(w)});var p,m=[RO,kO];{var y,b=[xO,AO(function(w){y.insert(w)})],A=EO(m.concat(o,b)),_=function(C){return Us(TO(C),A)};p=function(C,M,j,U){y=j,_(C?C+"{"+M.styles+"}":M.styles),U&&(x.inserted[M.name]=!0)}}var x={key:r,sheet:new sO({key:r,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:p};return x.sheet.hydrate(d),x},km={exports:{}},Gt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function NO(){if(W1)return Gt;W1=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,p=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,b=t?Symbol.for("react.suspense"):60113,A=t?Symbol.for("react.suspense_list"):60120,_=t?Symbol.for("react.memo"):60115,x=t?Symbol.for("react.lazy"):60116,w=t?Symbol.for("react.block"):60121,C=t?Symbol.for("react.fundamental"):60117,M=t?Symbol.for("react.responder"):60118,j=t?Symbol.for("react.scope"):60119;function U(z){if(typeof z=="object"&&z!==null){var W=z.$$typeof;switch(W){case e:switch(z=z.type,z){case p:case m:case a:case l:case o:case b:return z;default:switch(z=z&&z.$$typeof,z){case d:case y:case x:case _:case c:return z;default:return W}}case r:return W}}}function F(z){return U(z)===m}return Gt.AsyncMode=p,Gt.ConcurrentMode=m,Gt.ContextConsumer=d,Gt.ContextProvider=c,Gt.Element=e,Gt.ForwardRef=y,Gt.Fragment=a,Gt.Lazy=x,Gt.Memo=_,Gt.Portal=r,Gt.Profiler=l,Gt.StrictMode=o,Gt.Suspense=b,Gt.isAsyncMode=function(z){return F(z)||U(z)===p},Gt.isConcurrentMode=F,Gt.isContextConsumer=function(z){return U(z)===d},Gt.isContextProvider=function(z){return U(z)===c},Gt.isElement=function(z){return typeof z=="object"&&z!==null&&z.$$typeof===e},Gt.isForwardRef=function(z){return U(z)===y},Gt.isFragment=function(z){return U(z)===a},Gt.isLazy=function(z){return U(z)===x},Gt.isMemo=function(z){return U(z)===_},Gt.isPortal=function(z){return U(z)===r},Gt.isProfiler=function(z){return U(z)===l},Gt.isStrictMode=function(z){return U(z)===o},Gt.isSuspense=function(z){return U(z)===b},Gt.isValidElementType=function(z){return typeof z=="string"||typeof z=="function"||z===a||z===m||z===l||z===o||z===b||z===A||typeof z=="object"&&z!==null&&(z.$$typeof===x||z.$$typeof===_||z.$$typeof===c||z.$$typeof===d||z.$$typeof===y||z.$$typeof===C||z.$$typeof===M||z.$$typeof===j||z.$$typeof===w)},Gt.typeOf=U,Gt}var Z1;function LO(){return Z1||(Z1=1,km.exports=NO()),km.exports}var Dm,Q1;function zO(){if(Q1)return Dm;Q1=1;var t=LO(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=a,l[t.Memo]=o;function c(x){return t.isMemo(x)?o:l[x.$$typeof]||e}var d=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,A=Object.prototype;function _(x,w,C){if(typeof w!="string"){if(A){var M=b(w);M&&M!==A&&_(x,M,C)}var j=p(w);m&&(j=j.concat(m(w)));for(var U=c(x),F=c(w),z=0;z<j.length;++z){var W=j[z];if(!r[W]&&!(C&&C[W])&&!(F&&F[W])&&!(U&&U[W])){var P=y(w,W);try{d(x,W,P)}catch{}}}}return x}return Dm=_,Dm}zO();var IO=!0;function Ow(t,e,r){var a="";return r.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):o&&(a+=o+" ")}),a}var g0=function(e,r,a){var o=e.key+"-"+r.name;(a===!1||IO===!1)&&e.registered[o]===void 0&&(e.registered[o]=r.styles)},Rw=function(e,r,a){g0(e,r,a);var o=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var l=r;do e.insert(r===l?"."+o:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function UO(t){for(var e=0,r,a=0,o=t.length;o>=4;++a,o-=4)r=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(a+2)&255)<<16;case 2:e^=(t.charCodeAt(a+1)&255)<<8;case 1:e^=t.charCodeAt(a)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var BO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jO=/[A-Z]|^ms/g,VO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kw=function(e){return e.charCodeAt(1)===45},J1=function(e){return e!=null&&typeof e!="boolean"},Mm=_w(function(t){return kw(t)?t:t.replace(jO,"-$&").toLowerCase()}),tS=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(VO,function(a,o,l){return Vr={name:o,styles:l,next:Vr},o})}return BO[e]!==1&&!kw(e)&&typeof r=="number"&&r!==0?r+"px":r};function Uu(t,e,r){if(r==null)return"";var a=r;if(a.__emotion_styles!==void 0)return a;switch(typeof r){case"boolean":return"";case"object":{var o=r;if(o.anim===1)return Vr={name:o.name,styles:o.styles,next:Vr},o.name;var l=r;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)Vr={name:c.name,styles:c.styles,next:Vr},c=c.next;var d=l.styles+";";return d}return HO(t,e,r)}case"function":{if(t!==void 0){var p=Vr,m=r(t);return Vr=p,Uu(t,e,m)}break}}var y=r;if(e==null)return y;var b=e[y];return b!==void 0?b:y}function HO(t,e,r){var a="";if(Array.isArray(r))for(var o=0;o<r.length;o++)a+=Uu(t,e,r[o])+";";else for(var l in r){var c=r[l];if(typeof c!="object"){var d=c;e!=null&&e[d]!==void 0?a+=l+"{"+e[d]+"}":J1(d)&&(a+=Mm(l)+":"+tS(l,d)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var p=0;p<c.length;p++)J1(c[p])&&(a+=Mm(l)+":"+tS(l,c[p])+";");else{var m=Uu(t,e,c);switch(l){case"animation":case"animationName":{a+=Mm(l)+":"+m+";";break}default:a+=l+"{"+m+"}"}}}return a}var eS=/label:\s*([^\s;{]+)\s*(;|$)/g,Vr;function td(t,e,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,o="";Vr=void 0;var l=t[0];if(l==null||l.raw===void 0)a=!1,o+=Uu(r,e,l);else{var c=l;o+=c[0]}for(var d=1;d<t.length;d++)if(o+=Uu(r,e,t[d]),a){var p=l;o+=p[d]}eS.lastIndex=0;for(var m="",y;(y=eS.exec(o))!==null;)m+="-"+y[1];var b=UO(o)+m;return{name:b,styles:o,next:Vr}}var qO=function(e){return e()},$O=lg.useInsertionEffect?lg.useInsertionEffect:!1,Dw=$O||qO,Mw=B.createContext(typeof HTMLElement<"u"?PO({key:"css"}):null);Mw.Provider;var Pw=function(e){return B.forwardRef(function(r,a){var o=B.useContext(Mw);return e(r,o,a)})},y0=B.createContext({}),v0={}.hasOwnProperty,pg="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",FO=function(e,r){var a={};for(var o in r)v0.call(r,o)&&(a[o]=r[o]);return a[pg]=e,a},GO=function(e){var r=e.cache,a=e.serialized,o=e.isStringTag;return g0(r,a,o),Dw(function(){return Rw(r,a,o)}),null},YO=Pw(function(t,e,r){var a=t.css;typeof a=="string"&&e.registered[a]!==void 0&&(a=e.registered[a]);var o=t[pg],l=[a],c="";typeof t.className=="string"?c=Ow(e.registered,l,t.className):t.className!=null&&(c=t.className+" ");var d=td(l,void 0,B.useContext(y0));c+=e.key+"-"+d.name;var p={};for(var m in t)v0.call(t,m)&&m!=="css"&&m!==pg&&(p[m]=t[m]);return p.className=c,r&&(p.ref=r),B.createElement(B.Fragment,null,B.createElement(GO,{cache:e,serialized:d,isStringTag:typeof o=="string"}),B.createElement(o,p))}),XO=YO,nS=function(e,r){var a=arguments;if(r==null||!v0.call(r,"css"))return B.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=XO,l[1]=FO(e,r);for(var c=2;c<o;c++)l[c]=a[c];return B.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(nS||(nS={}));function b0(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return td(e)}function nc(){var t=b0.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var KO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,WO=_w(function(t){return KO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ZO=WO,QO=function(e){return e!=="theme"},rS=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?ZO:QO},iS=function(e,r,a){var o;if(r){var l=r.shouldForwardProp;o=e.__emotion_forwardProp&&l?function(c){return e.__emotion_forwardProp(c)&&l(c)}:l}return typeof o!="function"&&a&&(o=e.__emotion_forwardProp),o},JO=function(e){var r=e.cache,a=e.serialized,o=e.isStringTag;return g0(r,a,o),Dw(function(){return Rw(r,a,o)}),null},tR=function t(e,r){var a=e.__emotion_real===e,o=a&&e.__emotion_base||e,l,c;r!==void 0&&(l=r.label,c=r.target);var d=iS(e,r,a),p=d||rS(o),m=!p("as");return function(){var y=arguments,b=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&b.push("label:"+l+";"),y[0]==null||y[0].raw===void 0)b.push.apply(b,y);else{var A=y[0];b.push(A[0]);for(var _=y.length,x=1;x<_;x++)b.push(y[x],A[x])}var w=Pw(function(C,M,j){var U=m&&C.as||o,F="",z=[],W=C;if(C.theme==null){W={};for(var P in C)W[P]=C[P];W.theme=B.useContext(y0)}typeof C.className=="string"?F=Ow(M.registered,z,C.className):C.className!=null&&(F=C.className+" ");var k=td(b.concat(z),M.registered,W);F+=M.key+"-"+k.name,c!==void 0&&(F+=" "+c);var R=m&&d===void 0?rS(U):p,S={};for(var N in C)m&&N==="as"||R(N)&&(S[N]=C[N]);return S.className=F,j&&(S.ref=j),B.createElement(B.Fragment,null,B.createElement(JO,{cache:M,serialized:k,isStringTag:typeof U=="string"}),B.createElement(U,S))});return w.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=o,w.__emotion_styles=b,w.__emotion_forwardProp=d,Object.defineProperty(w,"toString",{value:function(){return"."+c}}),w.withComponent=function(C,M){var j=t(C,Eh({},r,M,{shouldForwardProp:iS(w,M,!0)}));return j.apply(void 0,b)},w}},eR=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],mg=tR.bind(null);eR.forEach(function(t){mg[t]=mg(t)});/**
 * @mui/styled-engine v6.4.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function nR(t,e){return mg(t,e)}function rR(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const aS=[];function oS(t){return aS[0]=t,td(aS)}var Pm={exports:{}},Zt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS;function iR(){if(sS)return Zt;sS=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),_=Symbol.for("react.client.reference");function x(w){if(typeof w=="object"&&w!==null){var C=w.$$typeof;switch(C){case t:switch(w=w.type,w){case r:case o:case a:case p:case m:return w;default:switch(w=w&&w.$$typeof,w){case c:case d:case b:case y:return w;case l:return w;default:return C}}case e:return C}}}return Zt.ContextConsumer=l,Zt.ContextProvider=c,Zt.Element=t,Zt.ForwardRef=d,Zt.Fragment=r,Zt.Lazy=b,Zt.Memo=y,Zt.Portal=e,Zt.Profiler=o,Zt.StrictMode=a,Zt.Suspense=p,Zt.SuspenseList=m,Zt.isContextConsumer=function(w){return x(w)===l},Zt.isContextProvider=function(w){return x(w)===c},Zt.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===t},Zt.isForwardRef=function(w){return x(w)===d},Zt.isFragment=function(w){return x(w)===r},Zt.isLazy=function(w){return x(w)===b},Zt.isMemo=function(w){return x(w)===y},Zt.isPortal=function(w){return x(w)===e},Zt.isProfiler=function(w){return x(w)===o},Zt.isStrictMode=function(w){return x(w)===a},Zt.isSuspense=function(w){return x(w)===p},Zt.isSuspenseList=function(w){return x(w)===m},Zt.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===r||w===o||w===a||w===p||w===m||w===A||typeof w=="object"&&w!==null&&(w.$$typeof===b||w.$$typeof===y||w.$$typeof===c||w.$$typeof===l||w.$$typeof===d||w.$$typeof===_||w.getModuleId!==void 0)},Zt.typeOf=x,Zt}var lS;function aR(){return lS||(lS=1,Pm.exports=iR()),Pm.exports}var Nw=aR();function Hr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Lw(t){if(B.isValidElement(t)||Nw.isValidElementType(t)||!Hr(t))return t;const e={};return Object.keys(t).forEach(r=>{e[r]=Lw(t[r])}),e}function Pn(t,e,r={clone:!0}){const a=r.clone?{...t}:t;return Hr(t)&&Hr(e)&&Object.keys(e).forEach(o=>{B.isValidElement(e[o])||Nw.isValidElementType(e[o])?a[o]=e[o]:Hr(e[o])&&Object.prototype.hasOwnProperty.call(t,o)&&Hr(t[o])?a[o]=Pn(t[o],e[o],r):r.clone?a[o]=Hr(e[o])?Lw(e[o]):e[o]:a[o]=e[o]}),a}const oR=t=>{const e=Object.keys(t).map(r=>({key:r,val:t[r]}))||[];return e.sort((r,a)=>r.val-a.val),e.reduce((r,a)=>({...r,[a.key]:a.val}),{})};function sR(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:a=5,...o}=t,l=oR(e),c=Object.keys(l);function d(A){return`@media (min-width:${typeof e[A]=="number"?e[A]:A}${r})`}function p(A){return`@media (max-width:${(typeof e[A]=="number"?e[A]:A)-a/100}${r})`}function m(A,_){const x=c.indexOf(_);return`@media (min-width:${typeof e[A]=="number"?e[A]:A}${r}) and (max-width:${(x!==-1&&typeof e[c[x]]=="number"?e[c[x]]:_)-a/100}${r})`}function y(A){return c.indexOf(A)+1<c.length?m(A,c[c.indexOf(A)+1]):d(A)}function b(A){const _=c.indexOf(A);return _===0?d(c[1]):_===c.length-1?p(c[_]):m(A,c[c.indexOf(A)+1]).replace("@media","@media not all and")}return{keys:c,values:l,up:d,down:p,between:m,only:y,not:b,unit:r,...o}}function lR(t,e){if(!t.containerQueries)return e;const r=Object.keys(e).filter(a=>a.startsWith("@container")).sort((a,o)=>{var c,d;const l=/min-width:\s*([0-9.]+)/;return+(((c=a.match(l))==null?void 0:c[1])||0)-+(((d=o.match(l))==null?void 0:d[1])||0)});return r.length?r.reduce((a,o)=>{const l=e[o];return delete a[o],a[o]=l,a},{...e}):e}function uR(t,e){return e==="@"||e.startsWith("@")&&(t.some(r=>e.startsWith(`@${r}`))||!!e.match(/^@\d/))}function cR(t,e){const r=e.match(/^@([^/]+)?\/?(.+)?$/);if(!r)return null;const[,a,o]=r,l=Number.isNaN(+a)?a||0:+a;return t.containerQueries(o).up(l)}function fR(t){const e=(l,c)=>l.replace("@media",c?`@container ${c}`:"@container");function r(l,c){l.up=(...d)=>e(t.breakpoints.up(...d),c),l.down=(...d)=>e(t.breakpoints.down(...d),c),l.between=(...d)=>e(t.breakpoints.between(...d),c),l.only=(...d)=>e(t.breakpoints.only(...d),c),l.not=(...d)=>{const p=e(t.breakpoints.not(...d),c);return p.includes("not all and")?p.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):p}}const a={},o=l=>(r(a,l),a);return r(o),{...t,containerQueries:o}}const hR={borderRadius:4};function _u(t,e){return e?Pn(t,e,{clone:!1}):t}const ed={xs:0,sm:600,md:900,lg:1200,xl:1536},uS={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${ed[t]}px)`},dR={containerQueries:t=>({up:e=>{let r=typeof e=="number"?e:ed[e]||e;return typeof r=="number"&&(r=`${r}px`),t?`@container ${t} (min-width:${r})`:`@container (min-width:${r})`}})};function Li(t,e,r){const a=t.theme||{};if(Array.isArray(e)){const l=a.breakpoints||uS;return e.reduce((c,d,p)=>(c[l.up(l.keys[p])]=r(e[p]),c),{})}if(typeof e=="object"){const l=a.breakpoints||uS;return Object.keys(e).reduce((c,d)=>{if(uR(l.keys,d)){const p=cR(a.containerQueries?a:dR,d);p&&(c[p]=r(e[d],d))}else if(Object.keys(l.values||ed).includes(d)){const p=l.up(d);c[p]=r(e[d],d)}else{const p=d;c[p]=e[p]}return c},{})}return r(e)}function pR(t={}){var r;return((r=t.keys)==null?void 0:r.reduce((a,o)=>{const l=t.up(o);return a[l]={},a},{}))||{}}function mR(t,e){return t.reduce((r,a)=>{const o=r[a];return(!o||Object.keys(o).length===0)&&delete r[a],r},e)}function we(t){if(typeof t!="string")throw new Error(No(7));return t.charAt(0).toUpperCase()+t.slice(1)}function nd(t,e,r=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&r){const a=`vars.${e}`.split(".").reduce((o,l)=>o&&o[l]?o[l]:null,t);if(a!=null)return a}return e.split(".").reduce((a,o)=>a&&a[o]!=null?a[o]:null,t)}function _h(t,e,r,a=r){let o;return typeof t=="function"?o=t(r):Array.isArray(t)?o=t[r]||a:o=nd(t,r)||a,e&&(o=e(o,a,t)),o}function _e(t){const{prop:e,cssProperty:r=t.prop,themeKey:a,transform:o}=t,l=c=>{if(c[e]==null)return null;const d=c[e],p=c.theme,m=nd(p,a)||{};return Li(c,d,b=>{let A=_h(m,o,b);return b===A&&typeof b=="string"&&(A=_h(m,o,`${e}${b==="default"?"":we(b)}`,b)),r===!1?A:{[r]:A}})};return l.propTypes={},l.filterProps=[e],l}function gR(t){const e={};return r=>(e[r]===void 0&&(e[r]=t(r)),e[r])}const yR={m:"margin",p:"padding"},vR={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},cS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},bR=gR(t=>{if(t.length>2)if(cS[t])t=cS[t];else return[t];const[e,r]=t.split(""),a=yR[e],o=vR[r]||"";return Array.isArray(o)?o.map(l=>a+l):[a+o]}),S0=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],T0=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...S0,...T0];function rc(t,e,r,a){const o=nd(t,e,!0)??r;return typeof o=="number"||typeof o=="string"?l=>typeof l=="string"?l:typeof o=="string"?`calc(${l} * ${o})`:o*l:Array.isArray(o)?l=>{if(typeof l=="string")return l;const c=Math.abs(l),d=o[c];return l>=0?d:typeof d=="number"?-d:`-${d}`}:typeof o=="function"?o:()=>{}}function w0(t){return rc(t,"spacing",8)}function ic(t,e){return typeof e=="string"||e==null?e:t(e)}function SR(t,e){return r=>t.reduce((a,o)=>(a[o]=ic(e,r),a),{})}function TR(t,e,r,a){if(!e.includes(r))return null;const o=bR(r),l=SR(o,a),c=t[r];return Li(t,c,l)}function zw(t,e){const r=w0(t.theme);return Object.keys(t).map(a=>TR(t,e,a,r)).reduce(_u,{})}function be(t){return zw(t,S0)}be.propTypes={};be.filterProps=S0;function Se(t){return zw(t,T0)}Se.propTypes={};Se.filterProps=T0;function Iw(t=8,e=w0({spacing:t})){if(t.mui)return t;const r=(...a)=>(a.length===0?[1]:a).map(l=>{const c=e(l);return typeof c=="number"?`${c}px`:c}).join(" ");return r.mui=!0,r}function rd(...t){const e=t.reduce((a,o)=>(o.filterProps.forEach(l=>{a[l]=o}),a),{}),r=a=>Object.keys(a).reduce((o,l)=>e[l]?_u(o,e[l](a)):o,{});return r.propTypes={},r.filterProps=t.reduce((a,o)=>a.concat(o.filterProps),[]),r}function nr(t){return typeof t!="number"?t:`${t}px solid`}function rr(t,e){return _e({prop:t,themeKey:"borders",transform:e})}const wR=rr("border",nr),xR=rr("borderTop",nr),ER=rr("borderRight",nr),AR=rr("borderBottom",nr),_R=rr("borderLeft",nr),CR=rr("borderColor"),OR=rr("borderTopColor"),RR=rr("borderRightColor"),kR=rr("borderBottomColor"),DR=rr("borderLeftColor"),MR=rr("outline",nr),PR=rr("outlineColor"),id=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=rc(t.theme,"shape.borderRadius",4),r=a=>({borderRadius:ic(e,a)});return Li(t,t.borderRadius,r)}return null};id.propTypes={};id.filterProps=["borderRadius"];rd(wR,xR,ER,AR,_R,CR,OR,RR,kR,DR,id,MR,PR);const ad=t=>{if(t.gap!==void 0&&t.gap!==null){const e=rc(t.theme,"spacing",8),r=a=>({gap:ic(e,a)});return Li(t,t.gap,r)}return null};ad.propTypes={};ad.filterProps=["gap"];const od=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=rc(t.theme,"spacing",8),r=a=>({columnGap:ic(e,a)});return Li(t,t.columnGap,r)}return null};od.propTypes={};od.filterProps=["columnGap"];const sd=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=rc(t.theme,"spacing",8),r=a=>({rowGap:ic(e,a)});return Li(t,t.rowGap,r)}return null};sd.propTypes={};sd.filterProps=["rowGap"];const NR=_e({prop:"gridColumn"}),LR=_e({prop:"gridRow"}),zR=_e({prop:"gridAutoFlow"}),IR=_e({prop:"gridAutoColumns"}),UR=_e({prop:"gridAutoRows"}),BR=_e({prop:"gridTemplateColumns"}),jR=_e({prop:"gridTemplateRows"}),VR=_e({prop:"gridTemplateAreas"}),HR=_e({prop:"gridArea"});rd(ad,od,sd,NR,LR,zR,IR,UR,BR,jR,VR,HR);function Bs(t,e){return e==="grey"?e:t}const qR=_e({prop:"color",themeKey:"palette",transform:Bs}),$R=_e({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Bs}),FR=_e({prop:"backgroundColor",themeKey:"palette",transform:Bs});rd(qR,$R,FR);function Dn(t){return t<=1&&t!==0?`${t*100}%`:t}const GR=_e({prop:"width",transform:Dn}),x0=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=r=>{var o,l,c,d,p;const a=((c=(l=(o=t.theme)==null?void 0:o.breakpoints)==null?void 0:l.values)==null?void 0:c[r])||ed[r];return a?((p=(d=t.theme)==null?void 0:d.breakpoints)==null?void 0:p.unit)!=="px"?{maxWidth:`${a}${t.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:Dn(r)}};return Li(t,t.maxWidth,e)}return null};x0.filterProps=["maxWidth"];const YR=_e({prop:"minWidth",transform:Dn}),XR=_e({prop:"height",transform:Dn}),KR=_e({prop:"maxHeight",transform:Dn}),WR=_e({prop:"minHeight",transform:Dn});_e({prop:"size",cssProperty:"width",transform:Dn});_e({prop:"size",cssProperty:"height",transform:Dn});const ZR=_e({prop:"boxSizing"});rd(GR,x0,YR,XR,KR,WR,ZR);const ac={border:{themeKey:"borders",transform:nr},borderTop:{themeKey:"borders",transform:nr},borderRight:{themeKey:"borders",transform:nr},borderBottom:{themeKey:"borders",transform:nr},borderLeft:{themeKey:"borders",transform:nr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:nr},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:id},color:{themeKey:"palette",transform:Bs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Bs},backgroundColor:{themeKey:"palette",transform:Bs},p:{style:Se},pt:{style:Se},pr:{style:Se},pb:{style:Se},pl:{style:Se},px:{style:Se},py:{style:Se},padding:{style:Se},paddingTop:{style:Se},paddingRight:{style:Se},paddingBottom:{style:Se},paddingLeft:{style:Se},paddingX:{style:Se},paddingY:{style:Se},paddingInline:{style:Se},paddingInlineStart:{style:Se},paddingInlineEnd:{style:Se},paddingBlock:{style:Se},paddingBlockStart:{style:Se},paddingBlockEnd:{style:Se},m:{style:be},mt:{style:be},mr:{style:be},mb:{style:be},ml:{style:be},mx:{style:be},my:{style:be},margin:{style:be},marginTop:{style:be},marginRight:{style:be},marginBottom:{style:be},marginLeft:{style:be},marginX:{style:be},marginY:{style:be},marginInline:{style:be},marginInlineStart:{style:be},marginInlineEnd:{style:be},marginBlock:{style:be},marginBlockStart:{style:be},marginBlockEnd:{style:be},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ad},rowGap:{style:sd},columnGap:{style:od},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Dn},maxWidth:{style:x0},minWidth:{transform:Dn},height:{transform:Dn},maxHeight:{transform:Dn},minHeight:{transform:Dn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function QR(...t){const e=t.reduce((a,o)=>a.concat(Object.keys(o)),[]),r=new Set(e);return t.every(a=>r.size===Object.keys(a).length)}function JR(t,e){return typeof t=="function"?t(e):t}function t4(){function t(r,a,o,l){const c={[r]:a,theme:o},d=l[r];if(!d)return{[r]:a};const{cssProperty:p=r,themeKey:m,transform:y,style:b}=d;if(a==null)return null;if(m==="typography"&&a==="inherit")return{[r]:a};const A=nd(o,m)||{};return b?b(c):Li(c,a,x=>{let w=_h(A,y,x);return x===w&&typeof x=="string"&&(w=_h(A,y,`${r}${x==="default"?"":we(x)}`,x)),p===!1?w:{[p]:w}})}function e(r){const{sx:a,theme:o={}}=r||{};if(!a)return null;const l=o.unstable_sxConfig??ac;function c(d){let p=d;if(typeof d=="function")p=d(o);else if(typeof d!="object")return d;if(!p)return null;const m=pR(o.breakpoints),y=Object.keys(m);let b=m;return Object.keys(p).forEach(A=>{const _=JR(p[A],o);if(_!=null)if(typeof _=="object")if(l[A])b=_u(b,t(A,_,o,l));else{const x=Li({theme:o},_,w=>({[A]:w}));QR(x,_)?b[A]=e({sx:_,theme:o}):b=_u(b,x)}else b=_u(b,t(A,_,o,l))}),lR(o,mR(y,b))}return Array.isArray(a)?a.map(c):c(a)}return e}const $s=t4();$s.filterProps=["sx"];function e4(t,e){var a;const r=this;if(r.vars){if(!((a=r.colorSchemes)!=null&&a[t])||typeof r.getColorSchemeSelector!="function")return{};let o=r.getColorSchemeSelector(t);return o==="&"?e:((o.includes("data-")||o.includes("."))&&(o=`*:where(${o.replace(/\s*&$/,"")}) &`),{[o]:e})}return r.palette.mode===t?e:{}}function E0(t={},...e){const{breakpoints:r={},palette:a={},spacing:o,shape:l={},...c}=t,d=sR(r),p=Iw(o);let m=Pn({breakpoints:d,direction:"ltr",components:{},palette:{mode:"light",...a},spacing:p,shape:{...hR,...l}},c);return m=fR(m),m.applyStyles=e4,m=e.reduce((y,b)=>Pn(y,b),m),m.unstable_sxConfig={...ac,...c==null?void 0:c.unstable_sxConfig},m.unstable_sx=function(b){return $s({sx:b,theme:this})},m}function n4(t){return Object.keys(t).length===0}function r4(t=null){const e=B.useContext(y0);return!e||n4(e)?t:e}const i4=E0();function a4(t=i4){return r4(t)}const o4=t=>{var a;const e={systemProps:{},otherProps:{}},r=((a=t==null?void 0:t.theme)==null?void 0:a.unstable_sxConfig)??ac;return Object.keys(t).forEach(o=>{r[o]?e.systemProps[o]=t[o]:e.otherProps[o]=t[o]}),e};function s4(t){const{sx:e,...r}=t,{systemProps:a,otherProps:o}=o4(r);let l;return Array.isArray(e)?l=[a,...e]:typeof e=="function"?l=(...c)=>{const d=e(...c);return Hr(d)?{...a,...d}:a}:l={...a,...e},{...o,sx:l}}const fS=t=>t,l4=()=>{let t=fS;return{configure(e){t=e},generate(e){return t(e)},reset(){t=fS}}},u4=l4();function Uw(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(r=Uw(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Ne(){for(var t,e,r=0,a="",o=arguments.length;r<o;r++)(t=arguments[r])&&(e=Uw(t))&&(a&&(a+=" "),a+=e);return a}const c4={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ji(t,e,r="Mui"){const a=c4[e];return a?`${r}-${a}`:`${u4.generate(t)}-${e}`}function Vi(t,e,r="Mui"){const a={};return e.forEach(o=>{a[o]=ji(t,o,r)}),a}function Bw(t){const{variants:e,...r}=t,a={variants:e,style:oS(r),isProcessed:!0};return a.style===r||e&&e.forEach(o=>{typeof o.style!="function"&&(o.style=oS(o.style))}),a}const f4=E0();function Nm(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function h4(t){return t?(e,r)=>r[t]:null}function d4(t,e,r){t.theme=g4(t.theme)?r:t.theme[e]||t.theme}function fh(t,e){const r=typeof e=="function"?e(t):e;if(Array.isArray(r))return r.flatMap(a=>fh(t,a));if(Array.isArray(r==null?void 0:r.variants)){let a;if(r.isProcessed)a=r.style;else{const{variants:o,...l}=r;a=l}return jw(t,r.variants,[a])}return r!=null&&r.isProcessed?r.style:r}function jw(t,e,r=[]){var o;let a;t:for(let l=0;l<e.length;l+=1){const c=e[l];if(typeof c.props=="function"){if(a??(a={...t,...t.ownerState,ownerState:t.ownerState}),!c.props(a))continue}else for(const d in c.props)if(t[d]!==c.props[d]&&((o=t.ownerState)==null?void 0:o[d])!==c.props[d])continue t;typeof c.style=="function"?(a??(a={...t,...t.ownerState,ownerState:t.ownerState}),r.push(c.style(a))):r.push(c.style)}return r}function p4(t={}){const{themeId:e,defaultTheme:r=f4,rootShouldForwardProp:a=Nm,slotShouldForwardProp:o=Nm}=t;function l(d){d4(d,e,r)}return(d,p={})=>{rR(d,z=>z.filter(W=>W!==$s));const{name:m,slot:y,skipVariantsResolver:b,skipSx:A,overridesResolver:_=h4(v4(y)),...x}=p,w=b!==void 0?b:y&&y!=="Root"&&y!=="root"||!1,C=A||!1;let M=Nm;y==="Root"||y==="root"?M=a:y?M=o:y4(d)&&(M=void 0);const j=nR(d,{shouldForwardProp:M,label:m4(),...x}),U=z=>{if(typeof z=="function"&&z.__emotion_real!==z)return function(P){return fh(P,z)};if(Hr(z)){const W=Bw(z);return W.variants?function(k){return fh(k,W)}:W.style}return z},F=(...z)=>{const W=[],P=z.map(U),k=[];if(W.push(l),m&&_&&k.push(function(V){var ot,lt;const vt=(lt=(ot=V.theme.components)==null?void 0:ot[m])==null?void 0:lt.styleOverrides;if(!vt)return null;const Rt={};for(const ut in vt)Rt[ut]=fh(V,vt[ut]);return _(V,Rt)}),m&&!w&&k.push(function(V){var Rt,ot;const L=V.theme,vt=(ot=(Rt=L==null?void 0:L.components)==null?void 0:Rt[m])==null?void 0:ot.variants;return vt?jw(V,vt):null}),C||k.push($s),Array.isArray(P[0])){const N=P.shift(),V=new Array(W.length).fill(""),L=new Array(k.length).fill("");let vt;vt=[...V,...N,...L],vt.raw=[...V,...N.raw,...L],W.unshift(vt)}const R=[...W,...P,...k],S=j(...R);return d.muiName&&(S.muiName=d.muiName),S};return j.withConfig&&(F.withConfig=j.withConfig),F}}function m4(t,e){return void 0}function g4(t){for(const e in t)return!1;return!0}function y4(t){return typeof t=="string"&&t.charCodeAt(0)>96}function v4(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function gg(t,e){const r={...e};for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){const o=a;if(o==="components"||o==="slots")r[o]={...t[o],...r[o]};else if(o==="componentsProps"||o==="slotProps"){const l=t[o],c=e[o];if(!c)r[o]=l||{};else if(!l)r[o]=c;else{r[o]={...c};for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d)){const p=d;r[o][p]=gg(l[p],c[p])}}}else r[o]===void 0&&(r[o]=t[o])}return r}const b4=typeof window<"u"?B.useLayoutEffect:B.useEffect;function S4(t,e=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,r))}function A0(t,e=0,r=1){return S4(t,e,r)}function T4(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let r=t.match(e);return r&&r[0].length===1&&(r=r.map(a=>a+a)),r?`rgb${r.length===4?"a":""}(${r.map((a,o)=>o<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function Ua(t){if(t.type)return t;if(t.charAt(0)==="#")return Ua(T4(t));const e=t.indexOf("("),r=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(r))throw new Error(No(9,t));let a=t.substring(e+1,t.length-1),o;if(r==="color"){if(a=a.split(" "),o=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error(No(10,o))}else a=a.split(",");return a=a.map(l=>parseFloat(l)),{type:r,values:a,colorSpace:o}}const w4=t=>{const e=Ua(t);return e.values.slice(0,3).map((r,a)=>e.type.includes("hsl")&&a!==0?`${r}%`:r).join(" ")},Tu=(t,e)=>{try{return w4(t)}catch{return t}};function ld(t){const{type:e,colorSpace:r}=t;let{values:a}=t;return e.includes("rgb")?a=a.map((o,l)=>l<3?parseInt(o,10):o):e.includes("hsl")&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),e.includes("color")?a=`${r} ${a.join(" ")}`:a=`${a.join(", ")}`,`${e}(${a})`}function Vw(t){t=Ua(t);const{values:e}=t,r=e[0],a=e[1]/100,o=e[2]/100,l=a*Math.min(o,1-o),c=(m,y=(m+r/30)%12)=>o-l*Math.max(Math.min(y-3,9-y,1),-1);let d="rgb";const p=[Math.round(c(0)*255),Math.round(c(8)*255),Math.round(c(4)*255)];return t.type==="hsla"&&(d+="a",p.push(e[3])),ld({type:d,values:p})}function yg(t){t=Ua(t);let e=t.type==="hsl"||t.type==="hsla"?Ua(Vw(t)).values:t.values;return e=e.map(r=>(t.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function x4(t,e){const r=yg(t),a=yg(e);return(Math.max(r,a)+.05)/(Math.min(r,a)+.05)}function Bu(t,e){return t=Ua(t),e=A0(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,ld(t)}function Gf(t,e,r){try{return Bu(t,e)}catch{return t}}function ju(t,e){if(t=Ua(t),e=A0(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let r=0;r<3;r+=1)t.values[r]*=1-e;return ld(t)}function Jt(t,e,r){try{return ju(t,e)}catch{return t}}function Vu(t,e){if(t=Ua(t),e=A0(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let r=0;r<3;r+=1)t.values[r]+=(255-t.values[r])*e;else if(t.type.includes("color"))for(let r=0;r<3;r+=1)t.values[r]+=(1-t.values[r])*e;return ld(t)}function te(t,e,r){try{return Vu(t,e)}catch{return t}}function E4(t,e=.15){return yg(t)>.5?ju(t,e):Vu(t,e)}function Yf(t,e,r){try{return E4(t,e)}catch{return t}}function A4(t,e){typeof t=="function"?t(e):t&&(t.current=e)}let hS=0;function _4(t){const[e,r]=B.useState(t),a=t||e;return B.useEffect(()=>{e==null&&(hS+=1,r(`mui-${hS}`))},[e]),a}const C4={...lg},dS=C4.useId;function O4(t){if(dS!==void 0){const e=dS();return t??e}return _4(t)}function hh(t){const e=B.useRef(t);return b4(()=>{e.current=t}),B.useRef((...r)=>(0,e.current)(...r)).current}function vg(...t){return B.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(r=>{A4(r,e)})},t)}const pS={};function Hw(t,e){const r=B.useRef(pS);return r.current===pS&&(r.current=t(e)),r}const R4=[];function k4(t){B.useEffect(t,R4)}class _0{constructor(){cu(this,"currentId",null);cu(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});cu(this,"disposeEffect",()=>this.clear)}static create(){return new _0}start(e,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},e)}}function D4(){const t=Hw(_0.create).current;return k4(t.disposeEffect),t}function mS(t){try{return t.matches(":focus-visible")}catch{}return!1}function Va(t,e,r=void 0){const a={};for(const o in t){const l=t[o];let c="",d=!0;for(let p=0;p<l.length;p+=1){const m=l[p];m&&(c+=(d===!0?"":" ")+e(m),d=!1,r&&r[m]&&(c+=" "+r[m]))}a[o]=c}return a}function M4(t){return typeof t=="string"}function P4(t,e,r){return t===void 0||M4(t)?e:{...e,ownerState:{...e.ownerState,...r}}}function N4(t,e=[]){if(t===void 0)return{};const r={};return Object.keys(t).filter(a=>a.match(/^on[A-Z]/)&&typeof t[a]=="function"&&!e.includes(a)).forEach(a=>{r[a]=t[a]}),r}function gS(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(r=>!(r.match(/^on[A-Z]/)&&typeof t[r]=="function")).forEach(r=>{e[r]=t[r]}),e}function L4(t){const{getSlotProps:e,additionalProps:r,externalSlotProps:a,externalForwardedProps:o,className:l}=t;if(!e){const _=Ne(r==null?void 0:r.className,l,o==null?void 0:o.className,a==null?void 0:a.className),x={...r==null?void 0:r.style,...o==null?void 0:o.style,...a==null?void 0:a.style},w={...r,...o,...a};return _.length>0&&(w.className=_),Object.keys(x).length>0&&(w.style=x),{props:w,internalRef:void 0}}const c=N4({...o,...a}),d=gS(a),p=gS(o),m=e(c),y=Ne(m==null?void 0:m.className,r==null?void 0:r.className,l,o==null?void 0:o.className,a==null?void 0:a.className),b={...m==null?void 0:m.style,...r==null?void 0:r.style,...o==null?void 0:o.style,...a==null?void 0:a.style},A={...m,...r,...p,...d};return y.length>0&&(A.className=y),Object.keys(b).length>0&&(A.style=b),{props:A,internalRef:m.ref}}function z4(t,e,r){return typeof t=="function"?t(e,r):t}const I4=B.createContext(void 0);function U4(t){const{theme:e,name:r,props:a}=t;if(!e||!e.components||!e.components[r])return a;const o=e.components[r];return o.defaultProps?gg(o.defaultProps,a):!o.styleOverrides&&!o.variants?gg(o,a):a}function B4({props:t,name:e}){const r=B.useContext(I4);return U4({props:t,name:e,theme:{components:r}})}const yS={theme:void 0};function j4(t){let e,r;return function(o){let l=e;return(l===void 0||o.theme!==r)&&(yS.theme=o.theme,l=Bw(t(yS)),e=l,r=o.theme),l}}function V4(t=""){function e(...a){if(!a.length)return"";const o=a[0];return typeof o=="string"&&!o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${o}${e(...a.slice(1))})`:`, ${o}`}return(a,...o)=>`var(--${t?`${t}-`:""}${a}${e(...o)})`}const vS=(t,e,r,a=[])=>{let o=t;e.forEach((l,c)=>{c===e.length-1?Array.isArray(o)?o[Number(l)]=r:o&&typeof o=="object"&&(o[l]=r):o&&typeof o=="object"&&(o[l]||(o[l]=a.includes(l)?[]:{}),o=o[l])})},H4=(t,e,r)=>{function a(o,l=[],c=[]){Object.entries(o).forEach(([d,p])=>{(!r||r&&!r([...l,d]))&&p!=null&&(typeof p=="object"&&Object.keys(p).length>0?a(p,[...l,d],Array.isArray(p)?[...c,d]:c):e([...l,d],p,c))})}a(t)},q4=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(a=>t.includes(a))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Lm(t,e){const{prefix:r,shouldSkipGeneratingVar:a}=e||{},o={},l={},c={};return H4(t,(d,p,m)=>{if((typeof p=="string"||typeof p=="number")&&(!a||!a(d,p))){const y=`--${r?`${r}-`:""}${d.join("-")}`,b=q4(d,p);Object.assign(o,{[y]:b}),vS(l,d,`var(${y})`,m),vS(c,d,`var(${y}, ${b})`,m)}},d=>d[0]==="vars"),{css:o,vars:l,varsWithDefaults:c}}function $4(t,e={}){const{getSelector:r=C,disableCssColorScheme:a,colorSchemeSelector:o}=e,{colorSchemes:l={},components:c,defaultColorScheme:d="light",...p}=t,{vars:m,css:y,varsWithDefaults:b}=Lm(p,e);let A=b;const _={},{[d]:x,...w}=l;if(Object.entries(w||{}).forEach(([U,F])=>{const{vars:z,css:W,varsWithDefaults:P}=Lm(F,e);A=Pn(A,P),_[U]={css:W,vars:z}}),x){const{css:U,vars:F,varsWithDefaults:z}=Lm(x,e);A=Pn(A,z),_[d]={css:U,vars:F}}function C(U,F){var W,P;let z=o;if(o==="class"&&(z=".%s"),o==="data"&&(z="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(z=`[${o}="%s"]`),U){if(z==="media")return t.defaultColorScheme===U?":root":{[`@media (prefers-color-scheme: ${((P=(W=l[U])==null?void 0:W.palette)==null?void 0:P.mode)||U})`]:{":root":F}};if(z)return t.defaultColorScheme===U?`:root, ${z.replace("%s",String(U))}`:z.replace("%s",String(U))}return":root"}return{vars:A,generateThemeVars:()=>{let U={...m};return Object.entries(_).forEach(([,{vars:F}])=>{U=Pn(U,F)}),U},generateStyleSheets:()=>{var k,R;const U=[],F=t.defaultColorScheme||"light";function z(S,N){Object.keys(N).length&&U.push(typeof S=="string"?{[S]:{...N}}:S)}z(r(void 0,{...y}),y);const{[F]:W,...P}=_;if(W){const{css:S}=W,N=(R=(k=l[F])==null?void 0:k.palette)==null?void 0:R.mode,V=!a&&N?{colorScheme:N,...S}:{...S};z(r(F,{...V}),V)}return Object.entries(P).forEach(([S,{css:N}])=>{var vt,Rt;const V=(Rt=(vt=l[S])==null?void 0:vt.palette)==null?void 0:Rt.mode,L=!a&&V?{colorScheme:V,...N}:{...N};z(r(S,{...L}),L)}),U}}}function F4(t){return function(r){return t==="media"?`@media (prefers-color-scheme: ${r})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${r}"] &`:t==="class"?`.${r} &`:t==="data"?`[data-${r}] &`:`${t.replace("%s",r)} &`:"&"}}function qw(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Lu.white,default:Lu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const G4=qw();function $w(){return{text:{primary:Lu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Lu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const bS=$w();function SS(t,e,r,a){const o=a.light||a,l=a.dark||a*1.5;t[e]||(t.hasOwnProperty(r)?t[e]=t[r]:e==="light"?t.light=Vu(t.main,o):e==="dark"&&(t.dark=ju(t.main,l)))}function Y4(t="light"){return t==="dark"?{main:Os[200],light:Os[50],dark:Os[400]}:{main:Os[700],light:Os[400],dark:Os[800]}}function X4(t="light"){return t==="dark"?{main:Cs[200],light:Cs[50],dark:Cs[400]}:{main:Cs[500],light:Cs[300],dark:Cs[700]}}function K4(t="light"){return t==="dark"?{main:_s[500],light:_s[300],dark:_s[700]}:{main:_s[700],light:_s[400],dark:_s[800]}}function W4(t="light"){return t==="dark"?{main:Rs[400],light:Rs[300],dark:Rs[700]}:{main:Rs[700],light:Rs[500],dark:Rs[900]}}function Z4(t="light"){return t==="dark"?{main:ks[400],light:ks[300],dark:ks[700]}:{main:ks[800],light:ks[500],dark:ks[900]}}function Q4(t="light"){return t==="dark"?{main:mu[400],light:mu[300],dark:mu[700]}:{main:"#ed6c02",light:mu[500],dark:mu[900]}}function C0(t){const{mode:e="light",contrastThreshold:r=3,tonalOffset:a=.2,...o}=t,l=t.primary||Y4(e),c=t.secondary||X4(e),d=t.error||K4(e),p=t.info||W4(e),m=t.success||Z4(e),y=t.warning||Q4(e);function b(w){return x4(w,bS.text.primary)>=r?bS.text.primary:G4.text.primary}const A=({color:w,name:C,mainShade:M=500,lightShade:j=300,darkShade:U=700})=>{if(w={...w},!w.main&&w[M]&&(w.main=w[M]),!w.hasOwnProperty("main"))throw new Error(No(11,C?` (${C})`:"",M));if(typeof w.main!="string")throw new Error(No(12,C?` (${C})`:"",JSON.stringify(w.main)));return SS(w,"light",j,a),SS(w,"dark",U,a),w.contrastText||(w.contrastText=b(w.main)),w};let _;return e==="light"?_=qw():e==="dark"&&(_=$w()),Pn({common:{...Lu},mode:e,primary:A({color:l,name:"primary"}),secondary:A({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:A({color:d,name:"error"}),warning:A({color:y,name:"warning"}),info:A({color:p,name:"info"}),success:A({color:m,name:"success"}),grey:iO,contrastThreshold:r,getContrastText:b,augmentColor:A,tonalOffset:a,..._},o)}function J4(t){const e={};return Object.entries(t).forEach(a=>{const[o,l]=a;typeof l=="object"&&(e[o]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),e}function tk(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function ek(t){return Math.round(t*1e5)/1e5}const TS={textTransform:"uppercase"},wS='"Roboto", "Helvetica", "Arial", sans-serif';function nk(t,e){const{fontFamily:r=wS,fontSize:a=14,fontWeightLight:o=300,fontWeightRegular:l=400,fontWeightMedium:c=500,fontWeightBold:d=700,htmlFontSize:p=16,allVariants:m,pxToRem:y,...b}=typeof e=="function"?e(t):e,A=a/14,_=y||(C=>`${C/p*A}rem`),x=(C,M,j,U,F)=>({fontFamily:r,fontWeight:C,fontSize:_(M),lineHeight:j,...r===wS?{letterSpacing:`${ek(U/M)}em`}:{},...F,...m}),w={h1:x(o,96,1.167,-1.5),h2:x(o,60,1.2,-.5),h3:x(l,48,1.167,0),h4:x(l,34,1.235,.25),h5:x(l,24,1.334,0),h6:x(c,20,1.6,.15),subtitle1:x(l,16,1.75,.15),subtitle2:x(c,14,1.57,.1),body1:x(l,16,1.5,.15),body2:x(l,14,1.43,.15),button:x(c,14,1.75,.4,TS),caption:x(l,12,1.66,.4),overline:x(l,12,2.66,1,TS),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Pn({htmlFontSize:p,pxToRem:_,fontFamily:r,fontSize:a,fontWeightLight:o,fontWeightRegular:l,fontWeightMedium:c,fontWeightBold:d,...w},b,{clone:!1})}const rk=.2,ik=.14,ak=.12;function oe(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${rk})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${ik})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${ak})`].join(",")}const ok=["none",oe(0,2,1,-1,0,1,1,0,0,1,3,0),oe(0,3,1,-2,0,2,2,0,0,1,5,0),oe(0,3,3,-2,0,3,4,0,0,1,8,0),oe(0,2,4,-1,0,4,5,0,0,1,10,0),oe(0,3,5,-1,0,5,8,0,0,1,14,0),oe(0,3,5,-1,0,6,10,0,0,1,18,0),oe(0,4,5,-2,0,7,10,1,0,2,16,1),oe(0,5,5,-3,0,8,10,1,0,3,14,2),oe(0,5,6,-3,0,9,12,1,0,3,16,2),oe(0,6,6,-3,0,10,14,1,0,4,18,3),oe(0,6,7,-4,0,11,15,1,0,4,20,3),oe(0,7,8,-4,0,12,17,2,0,5,22,4),oe(0,7,8,-4,0,13,19,2,0,5,24,4),oe(0,7,9,-4,0,14,21,2,0,5,26,4),oe(0,8,9,-5,0,15,22,2,0,6,28,5),oe(0,8,10,-5,0,16,24,2,0,6,30,5),oe(0,8,11,-5,0,17,26,2,0,6,32,5),oe(0,9,11,-5,0,18,28,2,0,7,34,6),oe(0,9,12,-6,0,19,29,2,0,7,36,6),oe(0,10,13,-6,0,20,31,3,0,8,38,7),oe(0,10,13,-6,0,21,33,3,0,8,40,7),oe(0,10,14,-6,0,22,35,3,0,8,42,7),oe(0,11,14,-7,0,23,36,3,0,9,44,8),oe(0,11,15,-7,0,24,38,3,0,9,46,8)],sk={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},lk={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function xS(t){return`${Math.round(t)}ms`}function uk(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function ck(t){const e={...sk,...t.easing},r={...lk,...t.duration};return{getAutoHeightDuration:uk,create:(o=["all"],l={})=>{const{duration:c=r.standard,easing:d=e.easeInOut,delay:p=0,...m}=l;return(Array.isArray(o)?o:[o]).map(y=>`${y} ${typeof c=="string"?c:xS(c)} ${d} ${typeof p=="string"?p:xS(p)}`).join(",")},...t,easing:e,duration:r}}const fk={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function hk(t){return Hr(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function Fw(t={}){const e={...t};function r(a){const o=Object.entries(a);for(let l=0;l<o.length;l++){const[c,d]=o[l];!hk(d)||c.startsWith("unstable_")?delete a[c]:Hr(d)&&(a[c]={...d},r(a[c]))}}return r(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function bg(t={},...e){const{breakpoints:r,mixins:a={},spacing:o,palette:l={},transitions:c={},typography:d={},shape:p,...m}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(No(20));const y=C0(l),b=E0(t);let A=Pn(b,{mixins:tk(b.breakpoints,a),palette:y,shadows:ok.slice(),typography:nk(y,d),transitions:ck(c),zIndex:{...fk}});return A=Pn(A,m),A=e.reduce((_,x)=>Pn(_,x),A),A.unstable_sxConfig={...ac,...m==null?void 0:m.unstable_sxConfig},A.unstable_sx=function(x){return $s({sx:x,theme:this})},A.toRuntimeSource=Fw,A}function Sg(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const dk=[...Array(25)].map((t,e)=>{if(e===0)return"none";const r=Sg(e);return`linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`});function Gw(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function Yw(t){return t==="dark"?dk:[]}function pk(t){const{palette:e={mode:"light"},opacity:r,overlays:a,...o}=t,l=C0(e);return{palette:l,opacity:{...Gw(l.mode),...r},overlays:a||Yw(l.mode),...o}}function mk(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const gk=t=>[...[...Array(25)].map((e,r)=>`--${t?`${t}-`:""}overlays-${r}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],yk=t=>(e,r)=>{const a=t.rootSelector||":root",o=t.colorSchemeSelector;let l=o;if(o==="class"&&(l=".%s"),o==="data"&&(l="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(l=`[${o}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const c={};return gk(t.cssVarPrefix).forEach(d=>{c[d]=r[d],delete r[d]}),l==="media"?{[a]:r,"@media (prefers-color-scheme: dark)":{[a]:c}}:l?{[l.replace("%s",e)]:c,[`${a}, ${l.replace("%s",e)}`]:r}:{[a]:{...r,...c}}}if(l&&l!=="media")return`${a}, ${l.replace("%s",String(e))}`}else if(e){if(l==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[a]:r}};if(l)return l.replace("%s",String(e))}return a};function vk(t,e){e.forEach(r=>{t[r]||(t[r]={})})}function tt(t,e,r){!t[e]&&r&&(t[e]=r)}function wu(t){return typeof t!="string"||!t.startsWith("hsl")?t:Vw(t)}function wi(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Tu(wu(t[e])))}function bk(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const Ur=t=>{try{return t()}catch{}},Sk=(t="mui")=>V4(t);function zm(t,e,r,a){if(!e)return;e=e===!0?{}:e;const o=a==="dark"?"dark":"light";if(!r){t[a]=pk({...e,palette:{mode:o,...e==null?void 0:e.palette}});return}const{palette:l,...c}=bg({...r,palette:{mode:o,...e==null?void 0:e.palette}});return t[a]={...e,palette:l,opacity:{...Gw(o),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||Yw(o)},c}function Tk(t={},...e){const{colorSchemes:r={light:!0},defaultColorScheme:a,disableCssColorScheme:o=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:c=mk,colorSchemeSelector:d=r.light&&r.dark?"media":void 0,rootSelector:p=":root",...m}=t,y=Object.keys(r)[0],b=a||(r.light&&y!=="light"?"light":y),A=Sk(l),{[b]:_,light:x,dark:w,...C}=r,M={...C};let j=_;if((b==="dark"&&!("dark"in r)||b==="light"&&!("light"in r))&&(j=!0),!j)throw new Error(No(21,b));const U=zm(M,j,m,b);x&&!M.light&&zm(M,x,void 0,"light"),w&&!M.dark&&zm(M,w,void 0,"dark");let F={defaultColorScheme:b,...U,cssVarPrefix:l,colorSchemeSelector:d,rootSelector:p,getCssVar:A,colorSchemes:M,font:{...J4(U.typography),...U.font},spacing:bk(m.spacing)};Object.keys(F.colorSchemes).forEach(R=>{const S=F.colorSchemes[R].palette,N=V=>{const L=V.split("-"),vt=L[1],Rt=L[2];return A(V,S[vt][Rt])};if(S.mode==="light"&&(tt(S.common,"background","#fff"),tt(S.common,"onBackground","#000")),S.mode==="dark"&&(tt(S.common,"background","#000"),tt(S.common,"onBackground","#fff")),vk(S,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),S.mode==="light"){tt(S.Alert,"errorColor",Jt(S.error.light,.6)),tt(S.Alert,"infoColor",Jt(S.info.light,.6)),tt(S.Alert,"successColor",Jt(S.success.light,.6)),tt(S.Alert,"warningColor",Jt(S.warning.light,.6)),tt(S.Alert,"errorFilledBg",N("palette-error-main")),tt(S.Alert,"infoFilledBg",N("palette-info-main")),tt(S.Alert,"successFilledBg",N("palette-success-main")),tt(S.Alert,"warningFilledBg",N("palette-warning-main")),tt(S.Alert,"errorFilledColor",Ur(()=>S.getContrastText(S.error.main))),tt(S.Alert,"infoFilledColor",Ur(()=>S.getContrastText(S.info.main))),tt(S.Alert,"successFilledColor",Ur(()=>S.getContrastText(S.success.main))),tt(S.Alert,"warningFilledColor",Ur(()=>S.getContrastText(S.warning.main))),tt(S.Alert,"errorStandardBg",te(S.error.light,.9)),tt(S.Alert,"infoStandardBg",te(S.info.light,.9)),tt(S.Alert,"successStandardBg",te(S.success.light,.9)),tt(S.Alert,"warningStandardBg",te(S.warning.light,.9)),tt(S.Alert,"errorIconColor",N("palette-error-main")),tt(S.Alert,"infoIconColor",N("palette-info-main")),tt(S.Alert,"successIconColor",N("palette-success-main")),tt(S.Alert,"warningIconColor",N("palette-warning-main")),tt(S.AppBar,"defaultBg",N("palette-grey-100")),tt(S.Avatar,"defaultBg",N("palette-grey-400")),tt(S.Button,"inheritContainedBg",N("palette-grey-300")),tt(S.Button,"inheritContainedHoverBg",N("palette-grey-A100")),tt(S.Chip,"defaultBorder",N("palette-grey-400")),tt(S.Chip,"defaultAvatarColor",N("palette-grey-700")),tt(S.Chip,"defaultIconColor",N("palette-grey-700")),tt(S.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),tt(S.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),tt(S.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),tt(S.LinearProgress,"primaryBg",te(S.primary.main,.62)),tt(S.LinearProgress,"secondaryBg",te(S.secondary.main,.62)),tt(S.LinearProgress,"errorBg",te(S.error.main,.62)),tt(S.LinearProgress,"infoBg",te(S.info.main,.62)),tt(S.LinearProgress,"successBg",te(S.success.main,.62)),tt(S.LinearProgress,"warningBg",te(S.warning.main,.62)),tt(S.Skeleton,"bg",`rgba(${N("palette-text-primaryChannel")} / 0.11)`),tt(S.Slider,"primaryTrack",te(S.primary.main,.62)),tt(S.Slider,"secondaryTrack",te(S.secondary.main,.62)),tt(S.Slider,"errorTrack",te(S.error.main,.62)),tt(S.Slider,"infoTrack",te(S.info.main,.62)),tt(S.Slider,"successTrack",te(S.success.main,.62)),tt(S.Slider,"warningTrack",te(S.warning.main,.62));const V=Yf(S.background.default,.8);tt(S.SnackbarContent,"bg",V),tt(S.SnackbarContent,"color",Ur(()=>S.getContrastText(V))),tt(S.SpeedDialAction,"fabHoverBg",Yf(S.background.paper,.15)),tt(S.StepConnector,"border",N("palette-grey-400")),tt(S.StepContent,"border",N("palette-grey-400")),tt(S.Switch,"defaultColor",N("palette-common-white")),tt(S.Switch,"defaultDisabledColor",N("palette-grey-100")),tt(S.Switch,"primaryDisabledColor",te(S.primary.main,.62)),tt(S.Switch,"secondaryDisabledColor",te(S.secondary.main,.62)),tt(S.Switch,"errorDisabledColor",te(S.error.main,.62)),tt(S.Switch,"infoDisabledColor",te(S.info.main,.62)),tt(S.Switch,"successDisabledColor",te(S.success.main,.62)),tt(S.Switch,"warningDisabledColor",te(S.warning.main,.62)),tt(S.TableCell,"border",te(Gf(S.divider,1),.88)),tt(S.Tooltip,"bg",Gf(S.grey[700],.92))}if(S.mode==="dark"){tt(S.Alert,"errorColor",te(S.error.light,.6)),tt(S.Alert,"infoColor",te(S.info.light,.6)),tt(S.Alert,"successColor",te(S.success.light,.6)),tt(S.Alert,"warningColor",te(S.warning.light,.6)),tt(S.Alert,"errorFilledBg",N("palette-error-dark")),tt(S.Alert,"infoFilledBg",N("palette-info-dark")),tt(S.Alert,"successFilledBg",N("palette-success-dark")),tt(S.Alert,"warningFilledBg",N("palette-warning-dark")),tt(S.Alert,"errorFilledColor",Ur(()=>S.getContrastText(S.error.dark))),tt(S.Alert,"infoFilledColor",Ur(()=>S.getContrastText(S.info.dark))),tt(S.Alert,"successFilledColor",Ur(()=>S.getContrastText(S.success.dark))),tt(S.Alert,"warningFilledColor",Ur(()=>S.getContrastText(S.warning.dark))),tt(S.Alert,"errorStandardBg",Jt(S.error.light,.9)),tt(S.Alert,"infoStandardBg",Jt(S.info.light,.9)),tt(S.Alert,"successStandardBg",Jt(S.success.light,.9)),tt(S.Alert,"warningStandardBg",Jt(S.warning.light,.9)),tt(S.Alert,"errorIconColor",N("palette-error-main")),tt(S.Alert,"infoIconColor",N("palette-info-main")),tt(S.Alert,"successIconColor",N("palette-success-main")),tt(S.Alert,"warningIconColor",N("palette-warning-main")),tt(S.AppBar,"defaultBg",N("palette-grey-900")),tt(S.AppBar,"darkBg",N("palette-background-paper")),tt(S.AppBar,"darkColor",N("palette-text-primary")),tt(S.Avatar,"defaultBg",N("palette-grey-600")),tt(S.Button,"inheritContainedBg",N("palette-grey-800")),tt(S.Button,"inheritContainedHoverBg",N("palette-grey-700")),tt(S.Chip,"defaultBorder",N("palette-grey-700")),tt(S.Chip,"defaultAvatarColor",N("palette-grey-300")),tt(S.Chip,"defaultIconColor",N("palette-grey-300")),tt(S.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),tt(S.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),tt(S.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),tt(S.LinearProgress,"primaryBg",Jt(S.primary.main,.5)),tt(S.LinearProgress,"secondaryBg",Jt(S.secondary.main,.5)),tt(S.LinearProgress,"errorBg",Jt(S.error.main,.5)),tt(S.LinearProgress,"infoBg",Jt(S.info.main,.5)),tt(S.LinearProgress,"successBg",Jt(S.success.main,.5)),tt(S.LinearProgress,"warningBg",Jt(S.warning.main,.5)),tt(S.Skeleton,"bg",`rgba(${N("palette-text-primaryChannel")} / 0.13)`),tt(S.Slider,"primaryTrack",Jt(S.primary.main,.5)),tt(S.Slider,"secondaryTrack",Jt(S.secondary.main,.5)),tt(S.Slider,"errorTrack",Jt(S.error.main,.5)),tt(S.Slider,"infoTrack",Jt(S.info.main,.5)),tt(S.Slider,"successTrack",Jt(S.success.main,.5)),tt(S.Slider,"warningTrack",Jt(S.warning.main,.5));const V=Yf(S.background.default,.98);tt(S.SnackbarContent,"bg",V),tt(S.SnackbarContent,"color",Ur(()=>S.getContrastText(V))),tt(S.SpeedDialAction,"fabHoverBg",Yf(S.background.paper,.15)),tt(S.StepConnector,"border",N("palette-grey-600")),tt(S.StepContent,"border",N("palette-grey-600")),tt(S.Switch,"defaultColor",N("palette-grey-300")),tt(S.Switch,"defaultDisabledColor",N("palette-grey-600")),tt(S.Switch,"primaryDisabledColor",Jt(S.primary.main,.55)),tt(S.Switch,"secondaryDisabledColor",Jt(S.secondary.main,.55)),tt(S.Switch,"errorDisabledColor",Jt(S.error.main,.55)),tt(S.Switch,"infoDisabledColor",Jt(S.info.main,.55)),tt(S.Switch,"successDisabledColor",Jt(S.success.main,.55)),tt(S.Switch,"warningDisabledColor",Jt(S.warning.main,.55)),tt(S.TableCell,"border",Jt(Gf(S.divider,1),.68)),tt(S.Tooltip,"bg",Gf(S.grey[700],.92))}wi(S.background,"default"),wi(S.background,"paper"),wi(S.common,"background"),wi(S.common,"onBackground"),wi(S,"divider"),Object.keys(S).forEach(V=>{const L=S[V];V!=="tonalOffset"&&L&&typeof L=="object"&&(L.main&&tt(S[V],"mainChannel",Tu(wu(L.main))),L.light&&tt(S[V],"lightChannel",Tu(wu(L.light))),L.dark&&tt(S[V],"darkChannel",Tu(wu(L.dark))),L.contrastText&&tt(S[V],"contrastTextChannel",Tu(wu(L.contrastText))),V==="text"&&(wi(S[V],"primary"),wi(S[V],"secondary")),V==="action"&&(L.active&&wi(S[V],"active"),L.selected&&wi(S[V],"selected")))})}),F=e.reduce((R,S)=>Pn(R,S),F);const z={prefix:l,disableCssColorScheme:o,shouldSkipGeneratingVar:c,getSelector:yk(F)},{vars:W,generateThemeVars:P,generateStyleSheets:k}=$4(F,z);return F.vars=W,Object.entries(F.colorSchemes[F.defaultColorScheme]).forEach(([R,S])=>{F[R]=S}),F.generateThemeVars=P,F.generateStyleSheets=k,F.generateSpacing=function(){return Iw(m.spacing,w0(this))},F.getColorSchemeSelector=F4(d),F.spacing=F.generateSpacing(),F.shouldSkipGeneratingVar=c,F.unstable_sxConfig={...ac,...m==null?void 0:m.unstable_sxConfig},F.unstable_sx=function(S){return $s({sx:S,theme:this})},F.toRuntimeSource=Fw,F}function ES(t,e,r){t.colorSchemes&&r&&(t.colorSchemes[e]={...r!==!0&&r,palette:C0({...r===!0?{}:r.palette,mode:e})})}function wk(t={},...e){const{palette:r,cssVariables:a=!1,colorSchemes:o=r?void 0:{light:!0},defaultColorScheme:l=r==null?void 0:r.mode,...c}=t,d=l||"light",p=o==null?void 0:o[d],m={...o,...r?{[d]:{...typeof p!="boolean"&&p,palette:r}}:void 0};if(a===!1){if(!("colorSchemes"in t))return bg(t,...e);let y=r;"palette"in t||m[d]&&(m[d]!==!0?y=m[d].palette:d==="dark"&&(y={mode:"dark"}));const b=bg({...t,palette:y},...e);return b.defaultColorScheme=d,b.colorSchemes=m,b.palette.mode==="light"&&(b.colorSchemes.light={...m.light!==!0&&m.light,palette:b.palette},ES(b,"dark",m.dark)),b.palette.mode==="dark"&&(b.colorSchemes.dark={...m.dark!==!0&&m.dark,palette:b.palette},ES(b,"light",m.light)),b}return!r&&!("light"in m)&&d==="light"&&(m.light=!0),Tk({...c,colorSchemes:m,defaultColorScheme:d,...typeof a!="boolean"&&a},...e)}const Xw=wk();function xk(){const t=a4(Xw);return t[bw]||t}function Ek(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const Ak=t=>Ek(t)&&t!=="classes",an=p4({themeId:bw,defaultTheme:Xw,rootShouldForwardProp:Ak});function _k(){return s4}const zi=j4;function Hi(t){return B4(t)}function Ck(t){return ji("MuiSvgIcon",t)}Vi("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ok=t=>{const{color:e,fontSize:r,classes:a}=t,o={root:["root",e!=="inherit"&&`color${we(e)}`,`fontSize${we(r)}`]};return Va(o,Ck,a)},Rk=an("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.color!=="inherit"&&e[`color${we(r.color)}`],e[`fontSize${we(r.fontSize)}`]]}})(zi(({theme:t})=>{var e,r,a,o,l,c,d,p,m,y,b,A,_,x;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(o=(e=t.transitions)==null?void 0:e.create)==null?void 0:o.call(e,"fill",{duration:(a=(r=(t.vars??t).transitions)==null?void 0:r.duration)==null?void 0:a.shorter}),variants:[{props:w=>!w.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((c=(l=t.typography)==null?void 0:l.pxToRem)==null?void 0:c.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((p=(d=t.typography)==null?void 0:d.pxToRem)==null?void 0:p.call(d,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((y=(m=t.typography)==null?void 0:m.pxToRem)==null?void 0:y.call(m,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,w])=>w&&w.main).map(([w])=>{var C,M;return{props:{color:w},style:{color:(M=(C=(t.vars??t).palette)==null?void 0:C[w])==null?void 0:M.main}}}),{props:{color:"action"},style:{color:(A=(b=(t.vars??t).palette)==null?void 0:b.action)==null?void 0:A.active}},{props:{color:"disabled"},style:{color:(x=(_=(t.vars??t).palette)==null?void 0:_.action)==null?void 0:x.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),Tg=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiSvgIcon"}),{children:o,className:l,color:c="inherit",component:d="svg",fontSize:p="medium",htmlColor:m,inheritViewBox:y=!1,titleAccess:b,viewBox:A="0 0 24 24",..._}=a,x=B.isValidElement(o)&&o.type==="svg",w={...a,color:c,component:d,fontSize:p,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:A,hasSvgAsChild:x},C={};y||(C.viewBox=A);const M=Ok(w);return J.jsxs(Rk,{as:d,className:Ne(M.root,l),focusable:"false",color:m,"aria-hidden":b?void 0:!0,role:b?"img":void 0,ref:r,...C,..._,...x&&o.props,ownerState:w,children:[x?o.props.children:o,b?J.jsx("title",{children:b}):null]})});Tg.muiName="SvgIcon";function oc(t,e){function r(a,o){return J.jsx(Tg,{"data-testid":`${e}Icon`,ref:o,...a,children:t})}return r.muiName=Tg.muiName,B.memo(B.forwardRef(r))}function kk(t,e){if(t==null)return{};var r={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;r[a]=t[a]}return r}function wg(t,e){return wg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},wg(t,e)}function Dk(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,wg(t,e)}const AS=Ot.createContext(null);function Mk(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O0(t,e){var r=function(l){return e&&B.isValidElement(l)?e(l):l},a=Object.create(null);return t&&B.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=r(o)}),a}function Pk(t,e){t=t||{},e=e||{};function r(y){return y in e?e[y]:t[y]}var a=Object.create(null),o=[];for(var l in t)l in e?o.length&&(a[l]=o,o=[]):o.push(l);var c,d={};for(var p in e){if(a[p])for(c=0;c<a[p].length;c++){var m=a[p][c];d[a[p][c]]=r(m)}d[p]=r(p)}for(c=0;c<o.length;c++)d[o[c]]=r(o[c]);return d}function Ao(t,e,r){return r[e]!=null?r[e]:t.props[e]}function Nk(t,e){return O0(t.children,function(r){return B.cloneElement(r,{onExited:e.bind(null,r),in:!0,appear:Ao(r,"appear",t),enter:Ao(r,"enter",t),exit:Ao(r,"exit",t)})})}function Lk(t,e,r){var a=O0(t.children),o=Pk(e,a);return Object.keys(o).forEach(function(l){var c=o[l];if(B.isValidElement(c)){var d=l in e,p=l in a,m=e[l],y=B.isValidElement(m)&&!m.props.in;p&&(!d||y)?o[l]=B.cloneElement(c,{onExited:r.bind(null,c),in:!0,exit:Ao(c,"exit",t),enter:Ao(c,"enter",t)}):!p&&d&&!y?o[l]=B.cloneElement(c,{in:!1}):p&&d&&B.isValidElement(m)&&(o[l]=B.cloneElement(c,{onExited:r.bind(null,c),in:m.props.in,exit:Ao(c,"exit",t),enter:Ao(c,"enter",t)}))}}),o}var zk=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Ik={component:"div",childFactory:function(e){return e}},R0=function(t){Dk(e,t);function e(a,o){var l;l=t.call(this,a,o)||this;var c=l.handleExited.bind(Mk(l));return l.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},l}var r=e.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,l){var c=l.children,d=l.handleExited,p=l.firstRender;return{children:p?Nk(o,d):Lk(o,c,d),firstRender:!1}},r.handleExited=function(o,l){var c=O0(this.props.children);o.key in c||(o.props.onExited&&o.props.onExited(l),this.mounted&&this.setState(function(d){var p=Eh({},d.children);return delete p[o.key],{children:p}}))},r.render=function(){var o=this.props,l=o.component,c=o.childFactory,d=kk(o,["component","childFactory"]),p=this.state.contextValue,m=zk(this.state.children).map(c);return delete d.appear,delete d.enter,delete d.exit,l===null?Ot.createElement(AS.Provider,{value:p},m):Ot.createElement(AS.Provider,{value:p},Ot.createElement(l,d,m))},e}(Ot.Component);R0.propTypes={};R0.defaultProps=Ik;function Uk(t){return ji("MuiPaper",t)}Vi("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Bk=t=>{const{square:e,elevation:r,variant:a,classes:o}=t,l={root:["root",a,!e&&"rounded",a==="elevation"&&`elevation${r}`]};return Va(l,Uk,o)},jk=an("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],!r.square&&e.rounded,r.variant==="elevation"&&e[`elevation${r.elevation}`]]}})(zi(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),Vk=B.forwardRef(function(e,r){var _;const a=Hi({props:e,name:"MuiPaper"}),o=xk(),{className:l,component:c="div",elevation:d=1,square:p=!1,variant:m="elevation",...y}=a,b={...a,component:c,elevation:d,square:p,variant:m},A=Bk(b);return J.jsx(jk,{as:c,ownerState:b,className:Ne(A.root,l),ref:r,...y,style:{...m==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[d],...o.vars&&{"--Paper-overlay":(_=o.vars.overlays)==null?void 0:_[d]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Bu("#fff",Sg(d))}, ${Bu("#fff",Sg(d))})`}},...y.style}})});function Ds(t,e){const{className:r,elementType:a,ownerState:o,externalForwardedProps:l,internalForwardedProps:c,shouldForwardComponentProp:d=!1,...p}=e,{component:m,slots:y={[t]:void 0},slotProps:b={[t]:void 0},...A}=l,_=y[t]||a,x=z4(b[t],o),{props:{component:w,...C},internalRef:M}=L4({className:r,...p,externalForwardedProps:t==="root"?A:void 0,externalSlotProps:x}),j=vg(M,x==null?void 0:x.ref,e.ref),U=t==="root"?w||m:w,F=P4(_,{...t==="root"&&!m&&!y[t]&&c,...t!=="root"&&!y[t]&&c,...C,...U&&!d&&{as:U},...U&&d&&{component:U},ref:j},o);return[_,F]}class Ch{constructor(){cu(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Ch}static use(){const e=Hw(Ch.create).current,[r,a]=B.useState(!1);return e.shouldMount=r,e.setShouldMount=a,B.useEffect(e.mountEffect,[r]),e}mount(){return this.mounted||(this.mounted=qk(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var r;return(r=this.ref.current)==null?void 0:r.start(...e)})}stop(...e){this.mount().then(()=>{var r;return(r=this.ref.current)==null?void 0:r.stop(...e)})}pulsate(...e){this.mount().then(()=>{var r;return(r=this.ref.current)==null?void 0:r.pulsate(...e)})}}function Hk(){return Ch.use()}function qk(){let t,e;const r=new Promise((a,o)=>{t=a,e=o});return r.resolve=t,r.reject=e,r}function $k(t){const{className:e,classes:r,pulsate:a=!1,rippleX:o,rippleY:l,rippleSize:c,in:d,onExited:p,timeout:m}=t,[y,b]=B.useState(!1),A=Ne(e,r.ripple,r.rippleVisible,a&&r.ripplePulsate),_={width:c,height:c,top:-(c/2)+l,left:-(c/2)+o},x=Ne(r.child,y&&r.childLeaving,a&&r.childPulsate);return!d&&!y&&b(!0),B.useEffect(()=>{if(!d&&p!=null){const w=setTimeout(p,m);return()=>{clearTimeout(w)}}},[p,d,m]),J.jsx("span",{className:A,style:_,children:J.jsx("span",{className:x})})}const er=Vi("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),xg=550,Fk=80,Gk=nc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Yk=nc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Xk=nc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Kk=an("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Wk=an($k,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${er.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gk};
    animation-duration: ${xg}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${er.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${er.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${er.childLeaving} {
    opacity: 0;
    animation-name: ${Yk};
    animation-duration: ${xg}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${er.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xk};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Zk=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:l={},className:c,...d}=a,[p,m]=B.useState([]),y=B.useRef(0),b=B.useRef(null);B.useEffect(()=>{b.current&&(b.current(),b.current=null)},[p]);const A=B.useRef(!1),_=D4(),x=B.useRef(null),w=B.useRef(null),C=B.useCallback(F=>{const{pulsate:z,rippleX:W,rippleY:P,rippleSize:k,cb:R}=F;m(S=>[...S,J.jsx(Wk,{classes:{ripple:Ne(l.ripple,er.ripple),rippleVisible:Ne(l.rippleVisible,er.rippleVisible),ripplePulsate:Ne(l.ripplePulsate,er.ripplePulsate),child:Ne(l.child,er.child),childLeaving:Ne(l.childLeaving,er.childLeaving),childPulsate:Ne(l.childPulsate,er.childPulsate)},timeout:xg,pulsate:z,rippleX:W,rippleY:P,rippleSize:k},y.current)]),y.current+=1,b.current=R},[l]),M=B.useCallback((F={},z={},W=()=>{})=>{const{pulsate:P=!1,center:k=o||z.pulsate,fakeElement:R=!1}=z;if((F==null?void 0:F.type)==="mousedown"&&A.current){A.current=!1;return}(F==null?void 0:F.type)==="touchstart"&&(A.current=!0);const S=R?null:w.current,N=S?S.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,L,vt;if(k||F===void 0||F.clientX===0&&F.clientY===0||!F.clientX&&!F.touches)V=Math.round(N.width/2),L=Math.round(N.height/2);else{const{clientX:Rt,clientY:ot}=F.touches&&F.touches.length>0?F.touches[0]:F;V=Math.round(Rt-N.left),L=Math.round(ot-N.top)}if(k)vt=Math.sqrt((2*N.width**2+N.height**2)/3),vt%2===0&&(vt+=1);else{const Rt=Math.max(Math.abs((S?S.clientWidth:0)-V),V)*2+2,ot=Math.max(Math.abs((S?S.clientHeight:0)-L),L)*2+2;vt=Math.sqrt(Rt**2+ot**2)}F!=null&&F.touches?x.current===null&&(x.current=()=>{C({pulsate:P,rippleX:V,rippleY:L,rippleSize:vt,cb:W})},_.start(Fk,()=>{x.current&&(x.current(),x.current=null)})):C({pulsate:P,rippleX:V,rippleY:L,rippleSize:vt,cb:W})},[o,C,_]),j=B.useCallback(()=>{M({},{pulsate:!0})},[M]),U=B.useCallback((F,z)=>{if(_.clear(),(F==null?void 0:F.type)==="touchend"&&x.current){x.current(),x.current=null,_.start(0,()=>{U(F,z)});return}x.current=null,m(W=>W.length>0?W.slice(1):W),b.current=z},[_]);return B.useImperativeHandle(r,()=>({pulsate:j,start:M,stop:U}),[j,M,U]),J.jsx(Kk,{className:Ne(er.root,l.root,c),ref:w,...d,children:J.jsx(R0,{component:null,exit:!0,children:p})})});function Qk(t){return ji("MuiButtonBase",t)}const Jk=Vi("MuiButtonBase",["root","disabled","focusVisible"]),tD=t=>{const{disabled:e,focusVisible:r,focusVisibleClassName:a,classes:o}=t,c=Va({root:["root",e&&"disabled",r&&"focusVisible"]},Qk,o);return r&&a&&(c.root+=` ${a}`),c},eD=an("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Jk.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),nD=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:l=!1,children:c,className:d,component:p="button",disabled:m=!1,disableRipple:y=!1,disableTouchRipple:b=!1,focusRipple:A=!1,focusVisibleClassName:_,LinkComponent:x="a",onBlur:w,onClick:C,onContextMenu:M,onDragLeave:j,onFocus:U,onFocusVisible:F,onKeyDown:z,onKeyUp:W,onMouseDown:P,onMouseLeave:k,onMouseUp:R,onTouchEnd:S,onTouchMove:N,onTouchStart:V,tabIndex:L=0,TouchRippleProps:vt,touchRippleRef:Rt,type:ot,...lt}=a,ut=B.useRef(null),yt=Hk(),H=vg(yt.ref,Rt),[it,dt]=B.useState(!1);m&&it&&dt(!1),B.useImperativeHandle(o,()=>({focusVisible:()=>{dt(!0),ut.current.focus()}}),[]);const ct=yt.shouldMount&&!y&&!m;B.useEffect(()=>{it&&A&&!y&&yt.pulsate()},[y,A,it,yt]);const ft=xi(yt,"start",P,b),At=xi(yt,"stop",M,b),xt=xi(yt,"stop",j,b),pe=xi(yt,"stop",R,b),Lt=xi(yt,"stop",Et=>{it&&Et.preventDefault(),k&&k(Et)},b),ie=xi(yt,"start",V,b),Ht=xi(yt,"stop",S,b),Fe=xi(yt,"stop",N,b),ir=xi(yt,"stop",Et=>{mS(Et.target)||dt(!1),w&&w(Et)},!1),dn=hh(Et=>{ut.current||(ut.current=Et.currentTarget),mS(Et.target)&&(dt(!0),F&&F(Et)),U&&U(Et)}),zn=()=>{const Et=ut.current;return p&&p!=="button"&&!(Et.tagName==="A"&&Et.href)},Sr=hh(Et=>{A&&!Et.repeat&&it&&Et.key===" "&&yt.stop(Et,()=>{yt.start(Et)}),Et.target===Et.currentTarget&&zn()&&Et.key===" "&&Et.preventDefault(),z&&z(Et),Et.target===Et.currentTarget&&zn()&&Et.key==="Enter"&&!m&&(Et.preventDefault(),C&&C(Et))}),ar=hh(Et=>{A&&Et.key===" "&&it&&!Et.defaultPrevented&&yt.stop(Et,()=>{yt.pulsate(Et)}),W&&W(Et),C&&Et.target===Et.currentTarget&&zn()&&Et.key===" "&&!Et.defaultPrevented&&C(Et)});let Tr=p;Tr==="button"&&(lt.href||lt.to)&&(Tr=x);const In={};Tr==="button"?(In.type=ot===void 0?"button":ot,In.disabled=m):(!lt.href&&!lt.to&&(In.role="button"),m&&(In["aria-disabled"]=m));const $i=vg(r,ut),wr={...a,centerRipple:l,component:p,disabled:m,disableRipple:y,disableTouchRipple:b,focusRipple:A,tabIndex:L,focusVisible:it},Fi=tD(wr);return J.jsxs(eD,{as:Tr,className:Ne(Fi.root,d),ownerState:wr,onBlur:ir,onClick:C,onContextMenu:At,onFocus:dn,onKeyDown:Sr,onKeyUp:ar,onMouseDown:ft,onMouseLeave:Lt,onMouseUp:pe,onDragLeave:xt,onTouchEnd:Ht,onTouchMove:Fe,onTouchStart:ie,ref:$i,tabIndex:m?-1:L,type:ot,...In,...lt,children:[c,ct?J.jsx(Zk,{ref:H,center:l,...vt}):null]})});function xi(t,e,r,a=!1){return hh(o=>(r&&r(o),a||t[e](o),!0))}function rD(t){return typeof t.main=="string"}function iD(t,e=[]){if(!rD(t))return!1;for(const r of e)if(!t.hasOwnProperty(r)||typeof t[r]!="string")return!1;return!0}function ko(t=[]){return([,e])=>e&&iD(e,t)}function aD(t){return ji("MuiAlert",t)}const _S=Vi("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);function oD(t){return ji("MuiCircularProgress",t)}Vi("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Ra=44,Eg=nc`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,Ag=nc`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,sD=typeof Eg!="string"?b0`
        animation: ${Eg} 1.4s linear infinite;
      `:null,lD=typeof Ag!="string"?b0`
        animation: ${Ag} 1.4s ease-in-out infinite;
      `:null,uD=t=>{const{classes:e,variant:r,color:a,disableShrink:o}=t,l={root:["root",r,`color${we(a)}`],svg:["svg"],circle:["circle",`circle${we(r)}`,o&&"circleDisableShrink"]};return Va(l,oD,e)},cD=an("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`color${we(r.color)}`]]}})(zi(({theme:t})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:sD||{animation:`${Eg} 1.4s linear infinite`}},...Object.entries(t.palette).filter(ko()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}}))]}))),fD=an("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),hD=an("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.circle,e[`circle${we(r.variant)}`],r.disableShrink&&e.circleDisableShrink]}})(zi(({theme:t})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:lD||{animation:`${Ag} 1.4s ease-in-out infinite`}}]}))),dD=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:c=!1,size:d=40,style:p,thickness:m=3.6,value:y=0,variant:b="indeterminate",...A}=a,_={...a,color:l,disableShrink:c,size:d,thickness:m,value:y,variant:b},x=uD(_),w={},C={},M={};if(b==="determinate"){const j=2*Math.PI*((Ra-m)/2);w.strokeDasharray=j.toFixed(3),M["aria-valuenow"]=Math.round(y),w.strokeDashoffset=`${((100-y)/100*j).toFixed(3)}px`,C.transform="rotate(-90deg)"}return J.jsx(cD,{className:Ne(x.root,o),style:{width:d,height:d,...C,...p},ownerState:_,ref:r,role:"progressbar",...M,...A,children:J.jsx(fD,{className:x.svg,ownerState:_,viewBox:`${Ra/2} ${Ra/2} ${Ra} ${Ra}`,children:J.jsx(hD,{className:x.circle,style:w,ownerState:_,cx:Ra,cy:Ra,r:(Ra-m)/2,fill:"none",strokeWidth:m})})})});function pD(t){return ji("MuiIconButton",t)}const CS=Vi("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),mD=t=>{const{classes:e,disabled:r,color:a,edge:o,size:l,loading:c}=t,d={root:["root",c&&"loading",r&&"disabled",a!=="default"&&`color${we(a)}`,o&&`edge${we(o)}`,`size${we(l)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Va(d,pD,e)},gD=an(nD,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.loading&&e.loading,r.color!=="default"&&e[`color${we(r.color)}`],r.edge&&e[`edge${we(r.edge)}`],e[`size${we(r.size)}`]]}})(zi(({theme:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:Bu(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),zi(({theme:t})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(ko()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(t.palette).filter(ko()).map(([e])=>({props:{color:e},style:{"--IconButton-hoverBg":t.vars?`rgba(${(t.vars||t).palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Bu((t.vars||t).palette[e].main,t.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${CS.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled},[`&.${CS.loading}`]:{color:"transparent"}}))),yD=an("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>e.loadingIndicator})(({theme:t})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(t.vars||t).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),vD=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiIconButton"}),{edge:o=!1,children:l,className:c,color:d="default",disabled:p=!1,disableFocusRipple:m=!1,size:y="medium",id:b,loading:A=null,loadingIndicator:_,...x}=a,w=O4(b),C=_??J.jsx(dD,{"aria-labelledby":w,color:"inherit",size:16}),M={...a,edge:o,color:d,disabled:p,disableFocusRipple:m,loading:A,loadingIndicator:C,size:y},j=mD(M);return J.jsxs(gD,{id:A?w:b,className:Ne(j.root,c),centerRipple:!0,focusRipple:!m,disabled:p||A,ref:r,...x,ownerState:M,children:[typeof A=="boolean"&&J.jsx("span",{className:j.loadingWrapper,style:{display:"contents"},children:J.jsx(yD,{className:j.loadingIndicator,ownerState:M,children:A&&C})}),l]})}),bD=oc(J.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),SD=oc(J.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),TD=oc(J.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),wD=oc(J.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),xD=oc(J.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ED=t=>{const{variant:e,color:r,severity:a,classes:o}=t,l={root:["root",`color${we(r||a)}`,`${e}${we(r||a)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return Va(l,aD,o)},AD=an(Vk,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${we(r.color||r.severity)}`]]}})(zi(({theme:t})=>{const e=t.palette.mode==="light"?ju:Vu,r=t.palette.mode==="light"?Vu:ju;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(ko(["light"])).map(([a])=>({props:{colorSeverity:a,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${a}Color`]:e(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${a}StandardBg`]:r(t.palette[a].light,.9),[`& .${_S.icon}`]:t.vars?{color:t.vars.palette.Alert[`${a}IconColor`]}:{color:t.palette[a].main}}})),...Object.entries(t.palette).filter(ko(["light"])).map(([a])=>({props:{colorSeverity:a,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${a}Color`]:e(t.palette[a].light,.6),border:`1px solid ${(t.vars||t).palette[a].light}`,[`& .${_S.icon}`]:t.vars?{color:t.vars.palette.Alert[`${a}IconColor`]}:{color:t.palette[a].main}}})),...Object.entries(t.palette).filter(ko(["dark"])).map(([a])=>({props:{colorSeverity:a,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${a}FilledColor`],backgroundColor:t.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)}}}))]}})),_D=an("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(t,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),CD=an("div",{name:"MuiAlert",slot:"Message",overridesResolver:(t,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),OD=an("div",{name:"MuiAlert",slot:"Action",overridesResolver:(t,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),OS={success:J.jsx(bD,{fontSize:"inherit"}),warning:J.jsx(SD,{fontSize:"inherit"}),error:J.jsx(TD,{fontSize:"inherit"}),info:J.jsx(wD,{fontSize:"inherit"})},RD=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiAlert"}),{action:o,children:l,className:c,closeText:d="Close",color:p,components:m={},componentsProps:y={},icon:b,iconMapping:A=OS,onClose:_,role:x="alert",severity:w="success",slotProps:C={},slots:M={},variant:j="standard",...U}=a,F={...a,color:p,severity:w,variant:j,colorSeverity:p||w},z=ED(F),W={slots:{closeButton:m.CloseButton,closeIcon:m.CloseIcon,...M},slotProps:{...y,...C}},[P,k]=Ds("root",{ref:r,shouldForwardComponentProp:!0,className:Ne(z.root,c),elementType:AD,externalForwardedProps:{...W,...U},ownerState:F,additionalProps:{role:x,elevation:0}}),[R,S]=Ds("icon",{className:z.icon,elementType:_D,externalForwardedProps:W,ownerState:F}),[N,V]=Ds("message",{className:z.message,elementType:CD,externalForwardedProps:W,ownerState:F}),[L,vt]=Ds("action",{className:z.action,elementType:OD,externalForwardedProps:W,ownerState:F}),[Rt,ot]=Ds("closeButton",{elementType:vD,externalForwardedProps:W,ownerState:F}),[lt,ut]=Ds("closeIcon",{elementType:xD,externalForwardedProps:W,ownerState:F});return J.jsxs(P,{...k,children:[b!==!1?J.jsx(R,{...S,children:b||A[w]||OS[w]}):null,J.jsx(N,{...V,children:l}),o!=null?J.jsx(L,{...vt,children:o}):null,o==null&&_?J.jsx(L,{...vt,children:J.jsx(Rt,{size:"small","aria-label":d,title:d,color:"inherit",onClick:_,...ot,children:J.jsx(lt,{fontSize:"small",...ut})})}):null]})});function kD(t){return ji("MuiTypography",t)}Vi("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const DD={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},MD=_k(),PD=t=>{const{align:e,gutterBottom:r,noWrap:a,paragraph:o,variant:l,classes:c}=t,d={root:["root",l,t.align!=="inherit"&&`align${we(e)}`,r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return Va(d,kD,c)},ND=an("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],r.align!=="inherit"&&e[`align${we(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(zi(({theme:t})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([r,a])=>r!=="inherit"&&a&&typeof a=="object").map(([r,a])=>({props:{variant:r},style:a})),...Object.entries(t.palette).filter(ko()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),...Object.entries(((e=t.palette)==null?void 0:e.text)||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${we(r)}`},style:{color:(t.vars||t).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}})),RS={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},LD=B.forwardRef(function(e,r){const{color:a,...o}=Hi({props:e,name:"MuiTypography"}),l=!DD[a],c=MD({...o,...l&&{color:a}}),{align:d="inherit",className:p,component:m,gutterBottom:y=!1,noWrap:b=!1,paragraph:A=!1,variant:_="body1",variantMapping:x=RS,...w}=c,C={...c,align:d,color:a,className:p,component:m,gutterBottom:y,noWrap:b,paragraph:A,variant:_,variantMapping:x},M=m||(A?"p":x[_]||RS[_])||"span",j=PD(C);return J.jsx(ND,{as:M,ref:r,className:Ne(j.root,p),...w,ownerState:C,style:{...d!=="inherit"&&{"--Typography-textAlign":d},...w.style}})});function zD(t){return ji("MuiAlertTitle",t)}Vi("MuiAlertTitle",["root"]);const ID=t=>{const{classes:e}=t;return Va({root:["root"]},zD,e)},UD=an(LD,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(t,e)=>e.root})(zi(({theme:t})=>({fontWeight:t.typography.fontWeightMedium,marginTop:-2}))),BD=B.forwardRef(function(e,r){const a=Hi({props:e,name:"MuiAlertTitle"}),{className:o,...l}=a,c=a,d=ID(c);return J.jsx(UD,{gutterBottom:!0,component:"div",ownerState:c,ref:r,className:Ne(d.root,o),...l})}),Kw=B.createContext({});function jD(t){const e=B.useRef(null);return e.current===null&&(e.current=t()),e.current}const k0=typeof window<"u",VD=k0?B.useLayoutEffect:B.useEffect,D0=B.createContext(null),Ww=B.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function HD(t=!0){const e=B.useContext(D0);if(e===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:o}=e,l=B.useId();B.useEffect(()=>{if(t)return o(l)},[t]);const c=B.useCallback(()=>t&&a&&a(l),[l,a,t]);return!r&&a?[!1,c]:[!0]}function M0(t,e){t.indexOf(e)===-1&&t.push(e)}function P0(t,e){const r=t.indexOf(e);r>-1&&t.splice(r,1)}const Nn=t=>t;let Zw=Nn;const qD={useManualTiming:!1};function N0(t){let e;return()=>(e===void 0&&(e=t()),e)}const Fs=(t,e,r)=>{const a=e-t;return a===0?1:(r-t)/a};class L0{constructor(){this.subscriptions=[]}add(e){return M0(this.subscriptions,e),()=>P0(this.subscriptions,e)}notify(e,r,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,r,a);else for(let l=0;l<o;l++){const c=this.subscriptions[l];c&&c(e,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Mi=t=>t*1e3,Pi=t=>t/1e3;function Qw(t,e){return e?t*(1e3/e):0}const $D=N0(()=>window.ScrollTimeline!==void 0);class FD{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,r){for(let a=0;a<this.animations.length;a++)this.animations[a][e]=r}attachTimeline(e,r){const a=this.animations.map(o=>{if($D()&&o.attachTimeline)return o.attachTimeline(e);if(typeof r=="function")return r(o)});return()=>{a.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let r=0;r<this.animations.length;r++)e=Math.max(e,this.animations[r].duration);return e}runAll(e){this.animations.forEach(r=>r[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class GD extends FD{then(e,r){return Promise.all(this.animations).then(e).catch(r)}}function z0(t,e){return t?t[e]||t.default||t:void 0}const _g=2e4;function Jw(t){let e=0;const r=50;let a=t.next(e);for(;!a.done&&e<_g;)e+=r,a=t.next(e);return e>=_g?1/0:e}function I0(t){return typeof t=="function"}function kS(t,e){t.timeline=e,t.onfinish=null}const U0=t=>Array.isArray(t)&&typeof t[0]=="number",YD={linearEasing:void 0};function XD(t,e){const r=N0(t);return()=>{var a;return(a=YD[e])!==null&&a!==void 0?a:r()}}const Oh=XD(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),tx=(t,e,r=10)=>{let a="";const o=Math.max(Math.round(e/r),2);for(let l=0;l<o;l++)a+=t(Fs(0,o-1,l))+", ";return`linear(${a.substring(0,a.length-2)})`};function ex(t){return!!(typeof t=="function"&&Oh()||!t||typeof t=="string"&&(t in Cg||Oh())||U0(t)||Array.isArray(t)&&t.every(ex))}const xu=([t,e,r,a])=>`cubic-bezier(${t}, ${e}, ${r}, ${a})`,Cg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xu([0,.65,.55,1]),circOut:xu([.55,0,1,.45]),backIn:xu([.31,.01,.66,-.59]),backOut:xu([.33,1.53,.69,.99])};function nx(t,e){if(t)return typeof t=="function"&&Oh()?tx(t,e):U0(t)?xu(t):Array.isArray(t)?t.map(r=>nx(r,e)||Cg.easeOut):Cg[t]}const Xf=["read","resolveKeyframes","update","preRender","render","postRender"],DS={value:null};function KD(t,e){let r=new Set,a=new Set,o=!1,l=!1;const c=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1},p=0;function m(b){c.has(b)&&(y.schedule(b),t()),p++,b(d)}const y={schedule:(b,A=!1,_=!1)=>{const w=_&&o?r:a;return A&&c.add(b),w.has(b)||w.add(b),b},cancel:b=>{a.delete(b),c.delete(b)},process:b=>{if(d=b,o){l=!0;return}o=!0,[r,a]=[a,r],r.forEach(m),e&&DS.value&&DS.value.frameloop[e].push(p),p=0,r.clear(),o=!1,l&&(l=!1,y.process(b))}};return y}const WD=40;function rx(t,e){let r=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>r=!0,c=Xf.reduce((M,j)=>(M[j]=KD(l,e?j:void 0),M),{}),{read:d,resolveKeyframes:p,update:m,preRender:y,render:b,postRender:A}=c,_=()=>{const M=performance.now();r=!1,o.delta=a?1e3/60:Math.max(Math.min(M-o.timestamp,WD),1),o.timestamp=M,o.isProcessing=!0,d.process(o),p.process(o),m.process(o),y.process(o),b.process(o),A.process(o),o.isProcessing=!1,r&&e&&(a=!1,t(_))},x=()=>{r=!0,a=!0,o.isProcessing||t(_)};return{schedule:Xf.reduce((M,j)=>{const U=c[j];return M[j]=(F,z=!1,W=!1)=>(r||x(),U.schedule(F,z,W)),M},{}),cancel:M=>{for(let j=0;j<Xf.length;j++)c[Xf[j]].cancel(M)},state:o,steps:c}}const{schedule:re,cancel:Ba,state:Ke,steps:Im}=rx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Nn,!0),{schedule:B0}=rx(queueMicrotask,!1);let dh;function ZD(){dh=void 0}const $r={now:()=>(dh===void 0&&$r.set(Ke.isProcessing||qD.useManualTiming?Ke.timestamp:performance.now()),dh),set:t=>{dh=t,queueMicrotask(ZD)}},pr={x:!1,y:!1};function ix(){return pr.x||pr.y}function QD(t){return t==="x"||t==="y"?pr[t]?null:(pr[t]=!0,()=>{pr[t]=!1}):pr.x||pr.y?null:(pr.x=pr.y=!0,()=>{pr.x=pr.y=!1})}function JD(t,e,r){var a;if(t instanceof EventTarget)return[t];if(typeof t=="string"){let o=document;const l=(a=void 0)!==null&&a!==void 0?a:o.querySelectorAll(t);return l?Array.from(l):[]}return Array.from(t)}function ax(t,e){const r=JD(t),a=new AbortController,o={passive:!0,...e,signal:a.signal};return[r,o,()=>a.abort()]}function MS(t){return!(t.pointerType==="touch"||ix())}function t6(t,e,r={}){const[a,o,l]=ax(t,r),c=d=>{if(!MS(d))return;const{target:p}=d,m=e(p,d);if(typeof m!="function"||!p)return;const y=b=>{MS(b)&&(m(b),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,o)};return a.forEach(d=>{d.addEventListener("pointerenter",c,o)}),l}function PS(t,e){const r=`${e}PointerCapture`;if(t.target instanceof Element&&r in t.target&&t.pointerId!==void 0)try{t.target[r](t.pointerId)}catch{}}const ox=(t,e)=>e?t===e?!0:ox(t,e.parentElement):!1,j0=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,e6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function n6(t){return e6.has(t.tagName)||t.tabIndex!==-1}const Eu=new WeakSet;function NS(t){return e=>{e.key==="Enter"&&t(e)}}function Um(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const r6=(t,e)=>{const r=t.currentTarget;if(!r)return;const a=NS(()=>{if(Eu.has(r))return;Um(r,"down");const o=NS(()=>{Um(r,"up")}),l=()=>Um(r,"cancel");r.addEventListener("keyup",o,e),r.addEventListener("blur",l,e)});r.addEventListener("keydown",a,e),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),e)};function LS(t){return j0(t)&&!ix()}function i6(t,e,r={}){const[a,o,l]=ax(t,r),c=d=>{const p=d.currentTarget;if(!p||!LS(d)||Eu.has(p))return;Eu.add(p),PS(d,"set");const m=e(p,d),y=(_,x)=>{p.removeEventListener("pointerup",b),p.removeEventListener("pointercancel",A),PS(_,"release"),!(!LS(_)||!Eu.has(p))&&(Eu.delete(p),typeof m=="function"&&m(_,{success:x}))},b=_=>{(_.isTrusted?a6(_,p instanceof Element?p.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?y(_,!1):y(_,!(p instanceof Element)||ox(p,_.target))},A=_=>{y(_,!1)};p.addEventListener("pointerup",b,o),p.addEventListener("pointercancel",A,o),p.addEventListener("lostpointercapture",A,o)};return a.forEach(d=>{d=r.useGlobalTarget?window:d;let p=!1;d instanceof HTMLElement&&(p=!0,!n6(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0)),d.addEventListener("pointerdown",c,o),p&&d.addEventListener("focus",m=>r6(m,o),o)}),l}function a6(t,e){return t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom}const zS=30,o6=t=>!isNaN(parseFloat(t));class s6{constructor(e,r={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,o=!0)=>{const l=$r.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){this.current=e,this.updatedAt=$r.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=o6(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new L0);const a=this.events[e].add(r);return e==="change"?()=>{a(),re.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){!r||!this.passiveEffect?this.updateAndNotify(e,r):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=$r.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>zS)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,zS);return Qw(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Hu(t,e){return new s6(t,e)}const sx=B.createContext({strict:!1}),IS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Gs={};for(const t in IS)Gs[t]={isEnabled:e=>IS[t].some(r=>!!e[r])};function l6(t){for(const e in t)Gs[e]={...Gs[e],...t[e]}}const u6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||u6.has(t)}let lx=t=>!Rh(t);function c6(t){t&&(lx=e=>e.startsWith("on")?!Rh(e):t(e))}try{c6(require("@emotion/is-prop-valid").default)}catch{}function f6(t,e,r){const a={};for(const o in t)o==="values"&&typeof t.values=="object"||(lx(o)||r===!0&&Rh(o)||!e&&!Rh(o)||t.draggable&&o.startsWith("onDrag"))&&(a[o]=t[o]);return a}function h6(t){if(typeof Proxy>"u")return t;const e=new Map,r=(...a)=>t(...a);return new Proxy(r,{get:(a,o)=>o==="create"?t:(e.has(o)||e.set(o,t(o)),e.get(o))})}const ud=B.createContext({});function cd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function qu(t){return typeof t=="string"||Array.isArray(t)}const V0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],H0=["initial",...V0];function fd(t){return cd(t.animate)||H0.some(e=>qu(t[e]))}function ux(t){return!!(fd(t)||t.variants)}function d6(t,e){if(fd(t)){const{initial:r,animate:a}=t;return{initial:r===!1||qu(r)?r:void 0,animate:qu(a)?a:void 0}}return t.inherit!==!1?e:{}}function p6(t){const{initial:e,animate:r}=d6(t,B.useContext(ud));return B.useMemo(()=>({initial:e,animate:r}),[US(e),US(r)])}function US(t){return Array.isArray(t)?t.join(" "):t}const m6=Symbol.for("motionComponentSymbol");function Ps(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function g6(t,e,r){return B.useCallback(a=>{a&&t.onMount&&t.onMount(a),e&&(a?e.mount(a):e.unmount()),r&&(typeof r=="function"?r(a):Ps(r)&&(r.current=a))},[e])}const q0=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),y6="framerAppearId",cx="data-"+q0(y6),fx=B.createContext({});function v6(t,e,r,a,o){var l,c;const{visualElement:d}=B.useContext(ud),p=B.useContext(sx),m=B.useContext(D0),y=B.useContext(Ww).reducedMotion,b=B.useRef(null);a=a||p.renderer,!b.current&&a&&(b.current=a(t,{visualState:e,parent:d,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:y}));const A=b.current,_=B.useContext(fx);A&&!A.projection&&o&&(A.type==="html"||A.type==="svg")&&b6(b.current,r,o,_);const x=B.useRef(!1);B.useInsertionEffect(()=>{A&&x.current&&A.update(r,m)});const w=r[cx],C=B.useRef(!!w&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,w))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,w)));return VD(()=>{A&&(x.current=!0,window.MotionIsMounted=!0,A.updateFeatures(),B0.render(A.render),C.current&&A.animationState&&A.animationState.animateChanges())}),B.useEffect(()=>{A&&(!C.current&&A.animationState&&A.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)===null||M===void 0||M.call(window,w)}),C.current=!1))}),A}function b6(t,e,r,a){const{layoutId:o,layout:l,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:m}=e;t.projection=new r(t.latestValues,e["data-framer-portal-id"]?void 0:hx(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!c||d&&Ps(d),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,layoutScroll:p,layoutRoot:m})}function hx(t){if(t)return t.options.allowProjection!==!1?t.projection:hx(t.parent)}function S6({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:a,Component:o}){var l,c;t&&l6(t);function d(m,y){let b;const A={...B.useContext(Ww),...m,layoutId:T6(m)},{isStatic:_}=A,x=p6(m),w=a(m,_);if(!_&&k0){w6();const C=x6(A);b=C.MeasureLayout,x.visualElement=v6(o,w,A,e,C.ProjectionNode)}return J.jsxs(ud.Provider,{value:x,children:[b&&x.visualElement?J.jsx(b,{visualElement:x.visualElement,...A}):null,r(o,m,g6(w,x.visualElement,y),w,_,x.visualElement)]})}d.displayName=`motion.${typeof o=="string"?o:`create(${(c=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&c!==void 0?c:""})`}`;const p=B.forwardRef(d);return p[m6]=o,p}function T6({layoutId:t}){const e=B.useContext(Kw).id;return e&&t!==void 0?e+"-"+t:t}function w6(t,e){B.useContext(sx).strict}function x6(t){const{drag:e,layout:r}=Gs;if(!e&&!r)return{};const a={...e,...r};return{MeasureLayout:e!=null&&e.isEnabled(t)||r!=null&&r.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const dx=t=>e=>typeof e=="string"&&e.startsWith(t),$0=dx("--"),E6=dx("var(--"),F0=t=>E6(t)?A6.test(t.split("/*")[0].trim()):!1,A6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$u={};function _6(t){for(const e in t)$u[e]=t[e],$0(e)&&($u[e].isCSSVariable=!0)}const tl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],jo=new Set(tl);function px(t,{layout:e,layoutId:r}){return jo.has(t)||t.startsWith("origin")||(e||r!==void 0)&&(!!$u[t]||t==="opacity")}const rn=t=>!!(t&&t.getVelocity),mx=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ii=(t,e,r)=>r>e?e:r<t?t:r,el={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Fu={...el,transform:t=>Ii(0,1,t)},Kf={...el,default:1},sc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ma=sc("deg"),Fr=sc("%"),St=sc("px"),C6=sc("vh"),O6=sc("vw"),BS={...Fr,parse:t=>Fr.parse(t)/100,transform:t=>Fr.transform(t*100)},R6={borderWidth:St,borderTopWidth:St,borderRightWidth:St,borderBottomWidth:St,borderLeftWidth:St,borderRadius:St,radius:St,borderTopLeftRadius:St,borderTopRightRadius:St,borderBottomRightRadius:St,borderBottomLeftRadius:St,width:St,maxWidth:St,height:St,maxHeight:St,top:St,right:St,bottom:St,left:St,padding:St,paddingTop:St,paddingRight:St,paddingBottom:St,paddingLeft:St,margin:St,marginTop:St,marginRight:St,marginBottom:St,marginLeft:St,backgroundPositionX:St,backgroundPositionY:St},k6={rotate:Ma,rotateX:Ma,rotateY:Ma,rotateZ:Ma,scale:Kf,scaleX:Kf,scaleY:Kf,scaleZ:Kf,skew:Ma,skewX:Ma,skewY:Ma,distance:St,translateX:St,translateY:St,translateZ:St,x:St,y:St,z:St,perspective:St,transformPerspective:St,opacity:Fu,originX:BS,originY:BS,originZ:St},jS={...el,transform:Math.round},G0={...R6,...k6,zIndex:jS,size:St,fillOpacity:Fu,strokeOpacity:Fu,numOctaves:jS},D6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},M6=tl.length;function P6(t,e,r){let a="",o=!0;for(let l=0;l<M6;l++){const c=tl[l],d=t[c];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(c.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||r){const m=mx(d,G0[c]);if(!p){o=!1;const y=D6[c]||c;a+=`${y}(${m}) `}r&&(e[c]=m)}}return a=a.trim(),r?a=r(e,o?"":a):o&&(a="none"),a}function Y0(t,e,r){const{style:a,vars:o,transformOrigin:l}=t;let c=!1,d=!1;for(const p in e){const m=e[p];if(jo.has(p)){c=!0;continue}else if($0(p)){o[p]=m;continue}else{const y=mx(m,G0[p]);p.startsWith("origin")?(d=!0,l[p]=y):a[p]=y}}if(e.transform||(c||r?a.transform=P6(e,t.transform,r):a.transform&&(a.transform="none")),d){const{originX:p="50%",originY:m="50%",originZ:y=0}=l;a.transformOrigin=`${p} ${m} ${y}`}}const X0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function gx(t,e,r){for(const a in e)!rn(e[a])&&!px(a,r)&&(t[a]=e[a])}function N6({transformTemplate:t},e){return B.useMemo(()=>{const r=X0();return Y0(r,e,t),Object.assign({},r.vars,r.style)},[e])}function L6(t,e){const r=t.style||{},a={};return gx(a,r,t),Object.assign(a,N6(t,e)),a}function z6(t,e){const r={},a=L6(t,e);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=a,r}const I6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function K0(t){return typeof t!="string"||t.includes("-")?!1:!!(I6.indexOf(t)>-1||/[A-Z]/u.test(t))}const U6={offset:"stroke-dashoffset",array:"stroke-dasharray"},B6={offset:"strokeDashoffset",array:"strokeDasharray"};function j6(t,e,r=1,a=0,o=!0){t.pathLength=1;const l=o?U6:B6;t[l.offset]=St.transform(-a);const c=St.transform(e),d=St.transform(r);t[l.array]=`${c} ${d}`}function VS(t,e,r){return typeof t=="string"?t:St.transform(e+r*t)}function V6(t,e,r){const a=VS(e,t.x,t.width),o=VS(r,t.y,t.height);return`${a} ${o}`}function W0(t,{attrX:e,attrY:r,attrScale:a,originX:o,originY:l,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...m},y,b){if(Y0(t,m,b),y){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:A,style:_,dimensions:x}=t;A.transform&&(x&&(_.transform=A.transform),delete A.transform),x&&(o!==void 0||l!==void 0||_.transform)&&(_.transformOrigin=V6(x,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(A.x=e),r!==void 0&&(A.y=r),a!==void 0&&(A.scale=a),c!==void 0&&j6(A,c,d,p,!1)}const yx=()=>({...X0(),attrs:{}}),Z0=t=>typeof t=="string"&&t.toLowerCase()==="svg";function H6(t,e,r,a){const o=B.useMemo(()=>{const l=yx();return W0(l,e,Z0(a),t.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};gx(l,t.style,t),o.style={...l,...o.style}}return o}function q6(t=!1){return(r,a,o,{latestValues:l},c)=>{const p=(K0(r)?H6:z6)(a,l,c,r),m=f6(a,typeof r=="string",t),y=r!==B.Fragment?{...m,...p,ref:o}:{},{children:b}=a,A=B.useMemo(()=>rn(b)?b.get():b,[b]);return B.createElement(r,{...y,children:A})}}function HS(t){const e=[{},{}];return t==null||t.values.forEach((r,a)=>{e[0][a]=r.get(),e[1][a]=r.getVelocity()}),e}function Q0(t,e,r,a){if(typeof e=="function"){const[o,l]=HS(a);e=e(r!==void 0?r:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=HS(a);e=e(r!==void 0?r:t.custom,o,l)}return e}const Og=t=>Array.isArray(t),$6=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),F6=t=>Og(t)?t[t.length-1]||0:t;function ph(t){const e=rn(t)?t.get():t;return $6(e)?e.toValue():e}function G6({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:r},a,o,l){const c={latestValues:Y6(a,o,l,t),renderState:e()};return r&&(c.onMount=d=>r({props:a,current:d,...c}),c.onUpdate=d=>r(d)),c}const vx=t=>(e,r)=>{const a=B.useContext(ud),o=B.useContext(D0),l=()=>G6(t,e,a,o);return r?l():jD(l)};function Y6(t,e,r,a){const o={},l=a(t,{});for(const A in l)o[A]=ph(l[A]);let{initial:c,animate:d}=t;const p=fd(t),m=ux(t);e&&m&&!p&&t.inherit!==!1&&(c===void 0&&(c=e.initial),d===void 0&&(d=e.animate));let y=r?r.initial===!1:!1;y=y||c===!1;const b=y?d:c;if(b&&typeof b!="boolean"&&!cd(b)){const A=Array.isArray(b)?b:[b];for(let _=0;_<A.length;_++){const x=Q0(t,A[_]);if(x){const{transitionEnd:w,transition:C,...M}=x;for(const j in M){let U=M[j];if(Array.isArray(U)){const F=y?U.length-1:0;U=U[F]}U!==null&&(o[j]=U)}for(const j in w)o[j]=w[j]}}}return o}function J0(t,e,r){var a;const{style:o}=t,l={};for(const c in o)(rn(o[c])||e.style&&rn(e.style[c])||px(c,t)||((a=r==null?void 0:r.getValue(c))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(l[c]=o[c]);return l}const X6={useVisualState:vx({scrapeMotionValuesFromProps:J0,createRenderState:X0})};function bx(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}function Sx(t,{style:e,vars:r},a,o){Object.assign(t.style,e,o&&o.getProjectionStyles(a));for(const l in r)t.style.setProperty(l,r[l])}const Tx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function wx(t,e,r,a){Sx(t,e,void 0,a);for(const o in e.attrs)t.setAttribute(Tx.has(o)?o:q0(o),e.attrs[o])}function xx(t,e,r){const a=J0(t,e,r);for(const o in t)if(rn(t[o])||rn(e[o])){const l=tl.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=t[o]}return a}const qS=["x","y","width","height","cx","cy","r"],K6={useVisualState:vx({scrapeMotionValuesFromProps:xx,createRenderState:yx,onUpdate:({props:t,prevProps:e,current:r,renderState:a,latestValues:o})=>{if(!r)return;let l=!!t.drag;if(!l){for(const d in o)if(jo.has(d)){l=!0;break}}if(!l)return;let c=!e;if(e)for(let d=0;d<qS.length;d++){const p=qS[d];t[p]!==e[p]&&(c=!0)}c&&re.read(()=>{bx(r,a),re.render(()=>{W0(a,o,Z0(r.tagName),t.transformTemplate),wx(r,a)})})}})};function W6(t,e){return function(a,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...K0(a)?K6:X6,preloadedFeatures:t,useRender:q6(o),createVisualElement:e,Component:a};return S6(c)}}function Gu(t,e,r){const a=t.getProps();return Q0(a,e,r!==void 0?r:a.custom,t)}const Ex=new Set(["width","height","top","left","right","bottom",...tl]);function Z6(t,e,r){t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,Hu(r))}function Q6(t,e){const r=Gu(t,e);let{transitionEnd:a={},transition:o={},...l}=r||{};l={...l,...a};for(const c in l){const d=F6(l[c]);Z6(t,c,d)}}function J6(t){return!!(rn(t)&&t.add)}function Rg(t,e){const r=t.getValue("willChange");if(J6(r))return r.add(e)}function Ax(t){return t.props[cx]}const _x=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t,tM=1e-7,eM=12;function nM(t,e,r,a,o){let l,c,d=0;do c=e+(r-e)/2,l=_x(c,a,o)-t,l>0?r=c:e=c;while(Math.abs(l)>tM&&++d<eM);return c}function lc(t,e,r,a){if(t===e&&r===a)return Nn;const o=l=>nM(l,0,1,t,r);return l=>l===0||l===1?l:_x(o(l),e,a)}const Cx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ox=t=>e=>1-t(1-e),Rx=lc(.33,1.53,.69,.99),ty=Ox(Rx),kx=Cx(ty),Dx=t=>(t*=2)<1?.5*ty(t):.5*(2-Math.pow(2,-10*(t-1))),ey=t=>1-Math.sin(Math.acos(t)),Mx=Ox(ey),Px=Cx(ey),Nx=t=>/^0[^.\s]+$/u.test(t);function rM(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Nx(t):!0}const Cu=t=>Math.round(t*1e5)/1e5,ny=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function iM(t){return t==null}const aM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ry=(t,e)=>r=>!!(typeof r=="string"&&aM.test(r)&&r.startsWith(t)||e&&!iM(r)&&Object.prototype.hasOwnProperty.call(r,e)),Lx=(t,e,r)=>a=>{if(typeof a!="string")return a;const[o,l,c,d]=a.match(ny);return{[t]:parseFloat(o),[e]:parseFloat(l),[r]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},oM=t=>Ii(0,255,t),Bm={...el,transform:t=>Math.round(oM(t))},_o={test:ry("rgb","red"),parse:Lx("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:a=1})=>"rgba("+Bm.transform(t)+", "+Bm.transform(e)+", "+Bm.transform(r)+", "+Cu(Fu.transform(a))+")"};function sM(t){let e="",r="",a="",o="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),a=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),a=t.substring(3,4),o=t.substring(4,5),e+=e,r+=r,a+=a,o+=o),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const kg={test:ry("#"),parse:sM,transform:_o.transform},Ns={test:ry("hsl","hue"),parse:Lx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:a=1})=>"hsla("+Math.round(t)+", "+Fr.transform(Cu(e))+", "+Fr.transform(Cu(r))+", "+Cu(Fu.transform(a))+")"},en={test:t=>_o.test(t)||kg.test(t)||Ns.test(t),parse:t=>_o.test(t)?_o.parse(t):Ns.test(t)?Ns.parse(t):kg.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?_o.transform(t):Ns.transform(t)},lM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uM(t){var e,r;return isNaN(t)&&typeof t=="string"&&(((e=t.match(ny))===null||e===void 0?void 0:e.length)||0)+(((r=t.match(lM))===null||r===void 0?void 0:r.length)||0)>0}const zx="number",Ix="color",cM="var",fM="var(",$S="${}",hM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yu(t){const e=t.toString(),r=[],a={color:[],number:[],var:[]},o=[];let l=0;const d=e.replace(hM,p=>(en.test(p)?(a.color.push(l),o.push(Ix),r.push(en.parse(p))):p.startsWith(fM)?(a.var.push(l),o.push(cM),r.push(p)):(a.number.push(l),o.push(zx),r.push(parseFloat(p))),++l,$S)).split($S);return{values:r,split:d,indexes:a,types:o}}function Ux(t){return Yu(t).values}function Bx(t){const{split:e,types:r}=Yu(t),a=e.length;return o=>{let l="";for(let c=0;c<a;c++)if(l+=e[c],o[c]!==void 0){const d=r[c];d===zx?l+=Cu(o[c]):d===Ix?l+=en.transform(o[c]):l+=o[c]}return l}}const dM=t=>typeof t=="number"?0:t;function pM(t){const e=Ux(t);return Bx(t)(e.map(dM))}const ja={test:uM,parse:Ux,createTransformer:Bx,getAnimatableNone:pM},mM=new Set(["brightness","contrast","saturate","opacity"]);function gM(t){const[e,r]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[a]=r.match(ny)||[];if(!a)return t;const o=r.replace(a,"");let l=mM.has(e)?1:0;return a!==r&&(l*=100),e+"("+l+o+")"}const yM=/\b([a-z-]*)\(.*?\)/gu,Dg={...ja,getAnimatableNone:t=>{const e=t.match(yM);return e?e.map(gM).join(" "):t}},vM={...G0,color:en,backgroundColor:en,outlineColor:en,fill:en,stroke:en,borderColor:en,borderTopColor:en,borderRightColor:en,borderBottomColor:en,borderLeftColor:en,filter:Dg,WebkitFilter:Dg},jx=t=>vM[t];function Vx(t,e){let r=jx(t);return r!==Dg&&(r=ja),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const bM=new Set(["auto","none","0"]);function SM(t,e,r){let a=0,o;for(;a<t.length&&!o;){const l=t[a];typeof l=="string"&&!bM.has(l)&&Yu(l).values.length&&(o=t[a]),a++}if(o&&r)for(const l of e)t[l]=Vx(r,o)}const Co=t=>t*180/Math.PI,Mg=t=>{const e=Co(Math.atan2(t[1],t[0]));return Pg(e)},TM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Mg,rotateZ:Mg,skewX:t=>Co(Math.atan(t[1])),skewY:t=>Co(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Pg=t=>(t=t%360,t<0&&(t+=360),t),FS=Mg,GS=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),YS=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),wM={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:GS,scaleY:YS,scale:t=>(GS(t)+YS(t))/2,rotateX:t=>Pg(Co(Math.atan2(t[6],t[5]))),rotateY:t=>Pg(Co(Math.atan2(-t[2],t[0]))),rotateZ:FS,rotate:FS,skewX:t=>Co(Math.atan(t[4])),skewY:t=>Co(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function XS(t){return t.includes("scale")?1:0}function Ng(t,e){if(!t||t==="none")return XS(e);const r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(r)a=wM,o=r;else{const d=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=TM,o=d}if(!o)return XS(e);const l=a[e],c=o[1].split(",").map(EM);return typeof l=="function"?l(c):c[l]}const xM=(t,e)=>{const{transform:r="none"}=getComputedStyle(t);return Ng(r,e)};function EM(t){return parseFloat(t.trim())}const KS=t=>t===el||t===St,AM=new Set(["x","y","z"]),_M=tl.filter(t=>!AM.has(t));function CM(t){const e=[];return _M.forEach(r=>{const a=t.getValue(r);a!==void 0&&(e.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),e}const Ys={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ng(e,"x"),y:(t,{transform:e})=>Ng(e,"y")};Ys.translateX=Ys.x;Ys.translateY=Ys.y;const Do=new Set;let Lg=!1,zg=!1;function Hx(){if(zg){const t=Array.from(Do).filter(a=>a.needsMeasurement),e=new Set(t.map(a=>a.element)),r=new Map;e.forEach(a=>{const o=CM(a);o.length&&(r.set(a,o),a.render())}),t.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const o=r.get(a);o&&o.forEach(([l,c])=>{var d;(d=a.getValue(l))===null||d===void 0||d.set(c)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}zg=!1,Lg=!1,Do.forEach(t=>t.complete()),Do.clear()}function qx(){Do.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(zg=!0)})}function OM(){qx(),Hx()}class iy{constructor(e,r,a,o,l,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=a,this.motionValue=o,this.element=l,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Do.add(this),Lg||(Lg=!0,re.read(qx),re.resolveKeyframes(Hx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:r,element:a,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const c=o==null?void 0:o.get(),d=e[e.length-1];if(c!==void 0)e[0]=c;else if(a&&r){const p=a.readValue(r,d);p!=null&&(e[0]=p)}e[0]===void 0&&(e[0]=d),o&&c===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Do.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Do.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const $x=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),RM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kM(t){const e=RM.exec(t);if(!e)return[,];const[,r,a,o]=e;return[`--${r??a}`,o]}function Fx(t,e,r=1){const[a,o]=kM(t);if(!a)return;const l=window.getComputedStyle(e).getPropertyValue(a);if(l){const c=l.trim();return $x(c)?parseFloat(c):c}return F0(o)?Fx(o,e,r+1):o}const Gx=t=>e=>e.test(t),DM={test:t=>t==="auto",parse:t=>t},Yx=[el,St,Fr,Ma,O6,C6,DM],WS=t=>Yx.find(Gx(t));class Xx extends iy{constructor(e,r,a,o,l){super(e,r,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let m=e[p];if(typeof m=="string"&&(m=m.trim(),F0(m))){const y=Fx(m,r.current);y!==void 0&&(e[p]=y),p===e.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Ex.has(a)||e.length!==2)return;const[o,l]=e,c=WS(o),d=WS(l);if(c!==d)if(KS(c)&&KS(d))for(let p=0;p<e.length;p++){const m=e[p];typeof m=="string"&&(e[p]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:r}=this,a=[];for(let o=0;o<e.length;o++)rM(e[o])&&a.push(o);a.length&&SM(e,a,r)}measureInitialState(){const{element:e,unresolvedKeyframes:r,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ys[a](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&e.getValue(a,o).jump(o,!1)}measureEndState(){var e;const{element:r,name:a,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const l=r.getValue(a);l&&l.jump(this.measuredOrigin,!1);const c=o.length-1,d=o[c];o[c]=Ys[a](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([p,m])=>{r.getValue(p).set(m)}),this.resolveNoneKeyframes()}}const ZS=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ja.test(t)||t==="0")&&!t.startsWith("url("));function MM(t){const e=t[0];if(t.length===1)return!0;for(let r=0;r<t.length;r++)if(t[r]!==e)return!0}function PM(t,e,r,a){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],c=ZS(o,e),d=ZS(l,e);return!c||!d?!1:MM(t)||(r==="spring"||I0(r))&&a}const NM=t=>t!==null;function hd(t,{repeat:e,repeatType:r="loop"},a){const o=t.filter(NM),l=e&&r!=="loop"&&e%2===1?0:o.length-1;return!l||a===void 0?o[l]:a}const LM=40;class Kx{constructor({autoplay:e=!0,delay:r=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:c="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=$r.now(),this.options={autoplay:e,delay:r,type:a,repeat:o,repeatDelay:l,repeatType:c,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>LM?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&OM(),this._resolved}onKeyframesResolved(e,r){this.resolvedAt=$r.now(),this.hasAttemptedResolve=!0;const{name:a,type:o,velocity:l,delay:c,onComplete:d,onUpdate:p,isGenerator:m}=this.options;if(!m&&!PM(e,a,o,l))if(c)this.options.duration=0;else{p&&p(hd(e,this.options,r)),d&&d(),this.resolveFinishedPromise();return}const y=this.initPlayback(e,r);y!==!1&&(this._resolved={keyframes:e,finalKeyframe:r,...y},this.onPostResolved())}onPostResolved(){}then(e,r){return this.currentFinishedPromise.then(e,r)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const fe=(t,e,r)=>t+(e-t)*r;function jm(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function zM({hue:t,saturation:e,lightness:r,alpha:a}){t/=360,e/=100,r/=100;let o=0,l=0,c=0;if(!e)o=l=c=r;else{const d=r<.5?r*(1+e):r+e-r*e,p=2*r-d;o=jm(p,d,t+1/3),l=jm(p,d,t),c=jm(p,d,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:a}}function kh(t,e){return r=>r>0?e:t}const Vm=(t,e,r)=>{const a=t*t,o=r*(e*e-a)+a;return o<0?0:Math.sqrt(o)},IM=[kg,_o,Ns],UM=t=>IM.find(e=>e.test(t));function QS(t){const e=UM(t);if(!e)return!1;let r=e.parse(t);return e===Ns&&(r=zM(r)),r}const JS=(t,e)=>{const r=QS(t),a=QS(e);if(!r||!a)return kh(t,e);const o={...r};return l=>(o.red=Vm(r.red,a.red,l),o.green=Vm(r.green,a.green,l),o.blue=Vm(r.blue,a.blue,l),o.alpha=fe(r.alpha,a.alpha,l),_o.transform(o))},BM=(t,e)=>r=>e(t(r)),uc=(...t)=>t.reduce(BM),Ig=new Set(["none","hidden"]);function jM(t,e){return Ig.has(t)?r=>r<=0?t:e:r=>r>=1?e:t}function VM(t,e){return r=>fe(t,e,r)}function ay(t){return typeof t=="number"?VM:typeof t=="string"?F0(t)?kh:en.test(t)?JS:$M:Array.isArray(t)?Wx:typeof t=="object"?en.test(t)?JS:HM:kh}function Wx(t,e){const r=[...t],a=r.length,o=t.map((l,c)=>ay(l)(l,e[c]));return l=>{for(let c=0;c<a;c++)r[c]=o[c](l);return r}}function HM(t,e){const r={...t,...e},a={};for(const o in r)t[o]!==void 0&&e[o]!==void 0&&(a[o]=ay(t[o])(t[o],e[o]));return o=>{for(const l in a)r[l]=a[l](o);return r}}function qM(t,e){var r;const a=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const c=e.types[l],d=t.indexes[c][o[c]],p=(r=t.values[d])!==null&&r!==void 0?r:0;a[l]=p,o[c]++}return a}const $M=(t,e)=>{const r=ja.createTransformer(e),a=Yu(t),o=Yu(e);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?Ig.has(t)&&!o.values.length||Ig.has(e)&&!a.values.length?jM(t,e):uc(Wx(qM(a,o),o.values),r):kh(t,e)};function Zx(t,e,r){return typeof t=="number"&&typeof e=="number"&&typeof r=="number"?fe(t,e,r):ay(t)(t,e)}const FM=5;function Qx(t,e,r){const a=Math.max(e-FM,0);return Qw(r-t(a),e-a)}const Te={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},t2=.001;function GM({duration:t=Te.duration,bounce:e=Te.bounce,velocity:r=Te.velocity,mass:a=Te.mass}){let o,l,c=1-e;c=Ii(Te.minDamping,Te.maxDamping,c),t=Ii(Te.minDuration,Te.maxDuration,Pi(t)),c<1?(o=m=>{const y=m*c,b=y*t,A=y-r,_=Ug(m,c),x=Math.exp(-b);return t2-A/_*x},l=m=>{const b=m*c*t,A=b*r+r,_=Math.pow(c,2)*Math.pow(m,2)*t,x=Math.exp(-b),w=Ug(Math.pow(m,2),c);return(-o(m)+t2>0?-1:1)*((A-_)*x)/w}):(o=m=>{const y=Math.exp(-m*t),b=(m-r)*t+1;return-.001+y*b},l=m=>{const y=Math.exp(-m*t),b=(r-m)*(t*t);return y*b});const d=5/t,p=XM(o,l,d);if(t=Mi(t),isNaN(p))return{stiffness:Te.stiffness,damping:Te.damping,duration:t};{const m=Math.pow(p,2)*a;return{stiffness:m,damping:c*2*Math.sqrt(a*m),duration:t}}}const YM=12;function XM(t,e,r){let a=r;for(let o=1;o<YM;o++)a=a-t(a)/e(a);return a}function Ug(t,e){return t*Math.sqrt(1-e*e)}const KM=["duration","bounce"],WM=["stiffness","damping","mass"];function e2(t,e){return e.some(r=>t[r]!==void 0)}function ZM(t){let e={velocity:Te.velocity,stiffness:Te.stiffness,damping:Te.damping,mass:Te.mass,isResolvedFromDuration:!1,...t};if(!e2(t,WM)&&e2(t,KM))if(t.visualDuration){const r=t.visualDuration,a=2*Math.PI/(r*1.2),o=a*a,l=2*Ii(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Te.mass,stiffness:o,damping:l}}else{const r=GM(t);e={...e,...r,mass:Te.mass},e.isResolvedFromDuration=!0}return e}function Jx(t=Te.visualDuration,e=Te.bounce){const r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:a,restDelta:o}=r;const l=r.keyframes[0],c=r.keyframes[r.keyframes.length-1],d={done:!1,value:l},{stiffness:p,damping:m,mass:y,duration:b,velocity:A,isResolvedFromDuration:_}=ZM({...r,velocity:-Pi(r.velocity||0)}),x=A||0,w=m/(2*Math.sqrt(p*y)),C=c-l,M=Pi(Math.sqrt(p/y)),j=Math.abs(C)<5;a||(a=j?Te.restSpeed.granular:Te.restSpeed.default),o||(o=j?Te.restDelta.granular:Te.restDelta.default);let U;if(w<1){const z=Ug(M,w);U=W=>{const P=Math.exp(-w*M*W);return c-P*((x+w*M*C)/z*Math.sin(z*W)+C*Math.cos(z*W))}}else if(w===1)U=z=>c-Math.exp(-M*z)*(C+(x+M*C)*z);else{const z=M*Math.sqrt(w*w-1);U=W=>{const P=Math.exp(-w*M*W),k=Math.min(z*W,300);return c-P*((x+w*M*C)*Math.sinh(k)+z*C*Math.cosh(k))/z}}const F={calculatedDuration:_&&b||null,next:z=>{const W=U(z);if(_)d.done=z>=b;else{let P=0;w<1&&(P=z===0?Mi(x):Qx(U,z,W));const k=Math.abs(P)<=a,R=Math.abs(c-W)<=o;d.done=k&&R}return d.value=d.done?c:W,d},toString:()=>{const z=Math.min(Jw(F),_g),W=tx(P=>F.next(z*P).value,z,30);return z+"ms "+W}};return F}function n2({keyframes:t,velocity:e=0,power:r=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:c,min:d,max:p,restDelta:m=.5,restSpeed:y}){const b=t[0],A={done:!1,value:b},_=k=>d!==void 0&&k<d||p!==void 0&&k>p,x=k=>d===void 0?p:p===void 0||Math.abs(d-k)<Math.abs(p-k)?d:p;let w=r*e;const C=b+w,M=c===void 0?C:c(C);M!==C&&(w=M-b);const j=k=>-w*Math.exp(-k/a),U=k=>M+j(k),F=k=>{const R=j(k),S=U(k);A.done=Math.abs(R)<=m,A.value=A.done?M:S};let z,W;const P=k=>{_(A.value)&&(z=k,W=Jx({keyframes:[A.value,x(A.value)],velocity:Qx(U,k,A.value),damping:o,stiffness:l,restDelta:m,restSpeed:y}))};return P(0),{calculatedDuration:null,next:k=>{let R=!1;return!W&&z===void 0&&(R=!0,F(k),P(k)),z!==void 0&&k>=z?W.next(k-z):(!R&&F(k),A)}}}const QM=lc(.42,0,1,1),JM=lc(0,0,.58,1),tE=lc(.42,0,.58,1),tP=t=>Array.isArray(t)&&typeof t[0]!="number",eP={linear:Nn,easeIn:QM,easeInOut:tE,easeOut:JM,circIn:ey,circInOut:Px,circOut:Mx,backIn:ty,backInOut:kx,backOut:Rx,anticipate:Dx},r2=t=>{if(U0(t)){Zw(t.length===4);const[e,r,a,o]=t;return lc(e,r,a,o)}else if(typeof t=="string")return eP[t];return t};function nP(t,e,r){const a=[],o=r||Zx,l=t.length-1;for(let c=0;c<l;c++){let d=o(t[c],t[c+1]);if(e){const p=Array.isArray(e)?e[c]||Nn:e;d=uc(p,d)}a.push(d)}return a}function rP(t,e,{clamp:r=!0,ease:a,mixer:o}={}){const l=t.length;if(Zw(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const d=nP(e,a,o),p=d.length,m=y=>{if(c&&y<t[0])return e[0];let b=0;if(p>1)for(;b<t.length-2&&!(y<t[b+1]);b++);const A=Fs(t[b],t[b+1],y);return d[b](A)};return r?y=>m(Ii(t[0],t[l-1],y)):m}function iP(t,e){const r=t[t.length-1];for(let a=1;a<=e;a++){const o=Fs(0,e,a);t.push(fe(r,1,o))}}function aP(t){const e=[0];return iP(e,t.length-1),e}function oP(t,e){return t.map(r=>r*e)}function sP(t,e){return t.map(()=>e||tE).splice(0,t.length-1)}function Dh({duration:t=300,keyframes:e,times:r,ease:a="easeInOut"}){const o=tP(a)?a.map(r2):r2(a),l={done:!1,value:e[0]},c=oP(r&&r.length===e.length?r:aP(e),t),d=rP(c,e,{ease:Array.isArray(o)?o:sP(e,o)});return{calculatedDuration:t,next:p=>(l.value=d(p),l.done=p>=t,l)}}const lP=t=>{const e=({timestamp:r})=>t(r);return{start:()=>re.update(e,!0),stop:()=>Ba(e),now:()=>Ke.isProcessing?Ke.timestamp:$r.now()}},uP={decay:n2,inertia:n2,tween:Dh,keyframes:Dh,spring:Jx},cP=t=>t/100;class oy extends Kx{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:r,motionValue:a,element:o,keyframes:l}=this.options,c=(o==null?void 0:o.KeyframeResolver)||iy,d=(p,m)=>this.onKeyframesResolved(p,m);this.resolver=new c(l,d,r,a,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:r="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:c=0}=this.options,d=I0(r)?r:uP[r]||Dh;let p,m;d!==Dh&&typeof e[0]!="number"&&(p=uc(cP,Zx(e[0],e[1])),e=[0,100]);const y=d({...this.options,keyframes:e});l==="mirror"&&(m=d({...this.options,keyframes:[...e].reverse(),velocity:-c})),y.calculatedDuration===null&&(y.calculatedDuration=Jw(y));const{calculatedDuration:b}=y,A=b+o,_=A*(a+1)-o;return{generator:y,mirroredGenerator:m,mapPercentToKeyframes:p,calculatedDuration:b,resolvedDuration:A,totalDuration:_}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,r=!1){const{resolved:a}=this;if(!a){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:c,mapPercentToKeyframes:d,keyframes:p,calculatedDuration:m,totalDuration:y,resolvedDuration:b}=a;if(this.startTime===null)return l.next(0);const{delay:A,repeat:_,repeatType:x,repeatDelay:w,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-y/this.speed,this.startTime)),r?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const M=this.currentTime-A*(this.speed>=0?1:-1),j=this.speed>=0?M<0:M>y;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=y);let U=this.currentTime,F=l;if(_){const k=Math.min(this.currentTime,y)/b;let R=Math.floor(k),S=k%1;!S&&k>=1&&(S=1),S===1&&R--,R=Math.min(R,_+1),!!(R%2)&&(x==="reverse"?(S=1-S,w&&(S-=w/b)):x==="mirror"&&(F=c)),U=Ii(0,1,S)*b}const z=j?{done:!1,value:p[0]}:F.next(U);d&&(z.value=d(z.value));let{done:W}=z;!j&&m!==null&&(W=this.speed>=0?this.currentTime>=y:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return P&&o!==void 0&&(z.value=hd(p,this.options,o)),C&&C(z.value),P&&this.finish(),z}get duration(){const{resolved:e}=this;return e?Pi(e.calculatedDuration):0}get time(){return Pi(this.currentTime)}set time(e){e=Mi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const r=this.playbackSpeed!==e;this.playbackSpeed=e,r&&(this.time=Pi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=lP,onPlay:r,startTime:a}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),r&&r();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const fP=new Set(["opacity","clipPath","filter","transform"]);function hP(t,e,r,{delay:a=0,duration:o=300,repeat:l=0,repeatType:c="loop",ease:d="easeInOut",times:p}={}){const m={[e]:r};p&&(m.offset=p);const y=nx(d,o);return Array.isArray(y)&&(m.easing=y),t.animate(m,{delay:a,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"})}const dP=N0(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Mh=10,pP=2e4;function mP(t){return I0(t.type)||t.type==="spring"||!ex(t.ease)}function gP(t,e){const r=new oy({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:t[0]};const o=[];let l=0;for(;!a.done&&l<pP;)a=r.sample(l),o.push(a.value),l+=Mh;return{times:void 0,keyframes:o,duration:l-Mh,ease:"linear"}}const eE={anticipate:Dx,backInOut:kx,circInOut:Px};function yP(t){return t in eE}class i2 extends Kx{constructor(e){super(e);const{name:r,motionValue:a,element:o,keyframes:l}=this.options;this.resolver=new Xx(l,(c,d)=>this.onKeyframesResolved(c,d),r,a,o),this.resolver.scheduleResolve()}initPlayback(e,r){let{duration:a=300,times:o,ease:l,type:c,motionValue:d,name:p,startTime:m}=this.options;if(!d.owner||!d.owner.current)return!1;if(typeof l=="string"&&Oh()&&yP(l)&&(l=eE[l]),mP(this.options)){const{onComplete:b,onUpdate:A,motionValue:_,element:x,...w}=this.options,C=gP(e,w);e=C.keyframes,e.length===1&&(e[1]=e[0]),a=C.duration,o=C.times,l=C.ease,c="keyframes"}const y=hP(d.owner.current,p,e,{...this.options,duration:a,times:o,ease:l});return y.startTime=m??this.calcStartTime(),this.pendingTimeline?(kS(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:b}=this.options;d.set(hd(e,this.options,r)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:a,times:o,type:c,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:r}=e;return Pi(r)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:r}=e;return Pi(r.currentTime||0)}set time(e){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.currentTime=Mi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:r}=e;return r.playbackRate}set speed(e){const{resolved:r}=this;if(!r)return;const{animation:a}=r;a.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:r}=e;return r.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:r}=e;return r.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:r}=this;if(!r)return Nn;const{animation:a}=r;kS(a,e)}return Nn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:r}=e;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:r}=e;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:r,keyframes:a,duration:o,type:l,ease:c,times:d}=e;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:y,onComplete:b,element:A,..._}=this.options,x=new oy({..._,keyframes:a,duration:o,type:l,ease:c,times:d,isGenerator:!0}),w=Mi(this.time);m.setWithVelocity(x.sample(w-Mh).value,x.sample(w).value,Mh)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:r,name:a,repeatDelay:o,repeatType:l,damping:c,type:d}=e;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=r.owner.getProps();return dP()&&a&&fP.has(a)&&!p&&!m&&!o&&l!=="mirror"&&c!==0&&d!=="inertia"}}const vP={type:"spring",stiffness:500,damping:25,restSpeed:10},bP=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),SP={type:"keyframes",duration:.8},TP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wP=(t,{keyframes:e})=>e.length>2?SP:jo.has(t)?t.startsWith("scale")?bP(e[1]):vP:TP;function xP({when:t,delay:e,delayChildren:r,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:c,repeatDelay:d,from:p,elapsed:m,...y}){return!!Object.keys(y).length}const sy=(t,e,r,a={},o,l)=>c=>{const d=z0(a,t)||{},p=d.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Mi(p);let y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...d,delay:-m,onUpdate:A=>{e.set(A),d.onUpdate&&d.onUpdate(A)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:t,motionValue:e,element:l?void 0:o};xP(d)||(y={...y,...wP(t,y)}),y.duration&&(y.duration=Mi(y.duration)),y.repeatDelay&&(y.repeatDelay=Mi(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),y.allowFlatten=!d.type&&!d.ease,b&&!l&&e.get()!==void 0){const A=hd(y.keyframes,d);if(A!==void 0)return re.update(()=>{y.onUpdate(A),y.onComplete()}),new GD([])}return!l&&i2.supports(y)?new i2(y):new oy(y)};function EP({protectedKeys:t,needsAnimating:e},r){const a=t.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,a}function nE(t,e,{delay:r=0,transitionOverride:a,type:o}={}){var l;let{transition:c=t.getDefaultTransition(),transitionEnd:d,...p}=e;a&&(c=a);const m=[],y=o&&t.animationState&&t.animationState.getState()[o];for(const b in p){const A=t.getValue(b,(l=t.latestValues[b])!==null&&l!==void 0?l:null),_=p[b];if(_===void 0||y&&EP(y,b))continue;const x={delay:r,...z0(c||{},b)};let w=!1;if(window.MotionHandoffAnimation){const M=Ax(t);if(M){const j=window.MotionHandoffAnimation(M,b,re);j!==null&&(x.startTime=j,w=!0)}}Rg(t,b),A.start(sy(b,A,_,t.shouldReduceMotion&&Ex.has(b)?{type:!1}:x,t,w));const C=A.animation;C&&m.push(C)}return d&&Promise.all(m).then(()=>{re.update(()=>{d&&Q6(t,d)})}),m}function Bg(t,e,r={}){var a;const o=Gu(t,e,r.type==="exit"?(a=t.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:l=t.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(l=r.transitionOverride);const c=o?()=>Promise.all(nE(t,o,r)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:A}=l;return AP(t,e,y+m,b,A,r)}:()=>Promise.resolve(),{when:p}=l;if(p){const[m,y]=p==="beforeChildren"?[c,d]:[d,c];return m().then(()=>y())}else return Promise.all([c(),d(r.delay)])}function AP(t,e,r=0,a=0,o=1,l){const c=[],d=(t.variantChildren.size-1)*a,p=o===1?(m=0)=>m*a:(m=0)=>d-m*a;return Array.from(t.variantChildren).sort(_P).forEach((m,y)=>{m.notify("AnimationStart",e),c.push(Bg(m,e,{...l,delay:r+p(y)}).then(()=>m.notify("AnimationComplete",e)))}),Promise.all(c)}function _P(t,e){return t.sortNodePosition(e)}function CP(t,e,r={}){t.notify("AnimationStart",e);let a;if(Array.isArray(e)){const o=e.map(l=>Bg(t,l,r));a=Promise.all(o)}else if(typeof e=="string")a=Bg(t,e,r);else{const o=typeof e=="function"?Gu(t,e,r.custom):e;a=Promise.all(nE(t,o,r))}return a.then(()=>{t.notify("AnimationComplete",e)})}function rE(t,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==t.length)return!1;for(let a=0;a<r;a++)if(e[a]!==t[a])return!1;return!0}const OP=H0.length;function iE(t){if(!t)return;if(!t.isControllingVariants){const r=t.parent?iE(t.parent)||{}:{};return t.props.initial!==void 0&&(r.initial=t.props.initial),r}const e={};for(let r=0;r<OP;r++){const a=H0[r],o=t.props[a];(qu(o)||o===!1)&&(e[a]=o)}return e}const RP=[...V0].reverse(),kP=V0.length;function DP(t){return e=>Promise.all(e.map(({animation:r,options:a})=>CP(t,r,a)))}function MP(t){let e=DP(t),r=a2(),a=!0;const o=p=>(m,y)=>{var b;const A=Gu(t,y,p==="exit"?(b=t.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(A){const{transition:_,transitionEnd:x,...w}=A;m={...m,...w,...x}}return m};function l(p){e=p(t)}function c(p){const{props:m}=t,y=iE(t.parent)||{},b=[],A=new Set;let _={},x=1/0;for(let C=0;C<kP;C++){const M=RP[C],j=r[M],U=m[M]!==void 0?m[M]:y[M],F=qu(U),z=M===p?j.isActive:null;z===!1&&(x=C);let W=U===y[M]&&U!==m[M]&&F;if(W&&a&&t.manuallyAnimateOnMount&&(W=!1),j.protectedKeys={..._},!j.isActive&&z===null||!U&&!j.prevProp||cd(U)||typeof U=="boolean")continue;const P=PP(j.prevProp,U);let k=P||M===p&&j.isActive&&!W&&F||C>x&&F,R=!1;const S=Array.isArray(U)?U:[U];let N=S.reduce(o(M),{});z===!1&&(N={});const{prevResolvedValues:V={}}=j,L={...V,...N},vt=lt=>{k=!0,A.has(lt)&&(R=!0,A.delete(lt)),j.needsAnimating[lt]=!0;const ut=t.getValue(lt);ut&&(ut.liveStyle=!1)};for(const lt in L){const ut=N[lt],yt=V[lt];if(_.hasOwnProperty(lt))continue;let H=!1;Og(ut)&&Og(yt)?H=!rE(ut,yt):H=ut!==yt,H?ut!=null?vt(lt):A.add(lt):ut!==void 0&&A.has(lt)?vt(lt):j.protectedKeys[lt]=!0}j.prevProp=U,j.prevResolvedValues=N,j.isActive&&(_={..._,...N}),a&&t.blockInitialAnimation&&(k=!1),k&&(!(W&&P)||R)&&b.push(...S.map(lt=>({animation:lt,options:{type:M}})))}if(A.size){const C={};if(typeof m.initial!="boolean"){const M=Gu(t,Array.isArray(m.initial)?m.initial[0]:m.initial);M&&M.transition&&(C.transition=M.transition)}A.forEach(M=>{const j=t.getBaseTarget(M),U=t.getValue(M);U&&(U.liveStyle=!0),C[M]=j??null}),b.push({animation:C})}let w=!!b.length;return a&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(w=!1),a=!1,w?e(b):Promise.resolve()}function d(p,m){var y;if(r[p].isActive===m)return Promise.resolve();(y=t.variantChildren)===null||y===void 0||y.forEach(A=>{var _;return(_=A.animationState)===null||_===void 0?void 0:_.setActive(p,m)}),r[p].isActive=m;const b=c(p);for(const A in r)r[A].protectedKeys={};return b}return{animateChanges:c,setActive:d,setAnimateFunction:l,getState:()=>r,reset:()=>{r=a2(),a=!0}}}function PP(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!rE(e,t):!1}function wo(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function a2(){return{animate:wo(!0),whileInView:wo(),whileHover:wo(),whileTap:wo(),whileDrag:wo(),whileFocus:wo(),exit:wo()}}class Ha{constructor(e){this.isMounted=!1,this.node=e}update(){}}class NP extends Ha{constructor(e){super(e),e.animationState||(e.animationState=MP(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();cd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let LP=0;class zP extends Ha{constructor(){super(...arguments),this.id=LP++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const o=this.node.animationState.setActive("exit",!e);r&&!e&&o.then(()=>{r(this.id)})}mount(){const{register:e,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const IP={animation:{Feature:NP},exit:{Feature:zP}};function Xu(t,e,r,a={passive:!0}){return t.addEventListener(e,r,a),()=>t.removeEventListener(e,r)}function cc(t){return{point:{x:t.pageX,y:t.pageY}}}const UP=t=>e=>j0(e)&&t(e,cc(e));function Ou(t,e,r,a){return Xu(t,e,UP(r),a)}function aE({top:t,left:e,right:r,bottom:a}){return{x:{min:e,max:r},y:{min:t,max:a}}}function BP({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function jP(t,e){if(!e)return t;const r=e({x:t.left,y:t.top}),a=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const oE=1e-4,VP=1-oE,HP=1+oE,sE=.01,qP=0-sE,$P=0+sE;function fn(t){return t.max-t.min}function FP(t,e,r){return Math.abs(t-e)<=r}function o2(t,e,r,a=.5){t.origin=a,t.originPoint=fe(e.min,e.max,t.origin),t.scale=fn(r)/fn(e),t.translate=fe(r.min,r.max,t.origin)-t.originPoint,(t.scale>=VP&&t.scale<=HP||isNaN(t.scale))&&(t.scale=1),(t.translate>=qP&&t.translate<=$P||isNaN(t.translate))&&(t.translate=0)}function Ru(t,e,r,a){o2(t.x,e.x,r.x,a?a.originX:void 0),o2(t.y,e.y,r.y,a?a.originY:void 0)}function s2(t,e,r){t.min=r.min+e.min,t.max=t.min+fn(e)}function GP(t,e,r){s2(t.x,e.x,r.x),s2(t.y,e.y,r.y)}function l2(t,e,r){t.min=e.min-r.min,t.max=t.min+fn(e)}function ku(t,e,r){l2(t.x,e.x,r.x),l2(t.y,e.y,r.y)}const u2=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ls=()=>({x:u2(),y:u2()}),c2=()=>({min:0,max:0}),Ae=()=>({x:c2(),y:c2()});function tr(t){return[t("x"),t("y")]}function Hm(t){return t===void 0||t===1}function jg({scale:t,scaleX:e,scaleY:r}){return!Hm(t)||!Hm(e)||!Hm(r)}function xo(t){return jg(t)||lE(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function lE(t){return f2(t.x)||f2(t.y)}function f2(t){return t&&t!=="0%"}function Ph(t,e,r){const a=t-r,o=e*a;return r+o}function h2(t,e,r,a,o){return o!==void 0&&(t=Ph(t,o,a)),Ph(t,r,a)+e}function Vg(t,e=0,r=1,a,o){t.min=h2(t.min,e,r,a,o),t.max=h2(t.max,e,r,a,o)}function uE(t,{x:e,y:r}){Vg(t.x,e.translate,e.scale,e.originPoint),Vg(t.y,r.translate,r.scale,r.originPoint)}const d2=.999999999999,p2=1.0000000000001;function YP(t,e,r,a=!1){const o=r.length;if(!o)return;e.x=e.y=1;let l,c;for(let d=0;d<o;d++){l=r[d],c=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Is(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,uE(t,c)),a&&xo(l.latestValues)&&Is(t,l.latestValues))}e.x<p2&&e.x>d2&&(e.x=1),e.y<p2&&e.y>d2&&(e.y=1)}function zs(t,e){t.min=t.min+e,t.max=t.max+e}function m2(t,e,r,a,o=.5){const l=fe(t.min,t.max,o);Vg(t,e,r,l,a)}function Is(t,e){m2(t.x,e.x,e.scaleX,e.scale,e.originX),m2(t.y,e.y,e.scaleY,e.scale,e.originY)}function cE(t,e){return aE(jP(t.getBoundingClientRect(),e))}function XP(t,e,r){const a=cE(t,r),{scroll:o}=e;return o&&(zs(a.x,o.offset.x),zs(a.y,o.offset.y)),a}const fE=({current:t})=>t?t.ownerDocument.defaultView:null,g2=(t,e)=>Math.abs(t-e);function KP(t,e){const r=g2(t.x,e.x),a=g2(t.y,e.y);return Math.sqrt(r**2+a**2)}class hE{constructor(e,r,{transformPagePoint:a,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=$m(this.lastMoveEventInfo,this.history),A=this.startEvent!==null,_=KP(b.offset,{x:0,y:0})>=3;if(!A&&!_)return;const{point:x}=b,{timestamp:w}=Ke;this.history.push({...x,timestamp:w});const{onStart:C,onMove:M}=this.handlers;A||(C&&C(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,b)},this.handlePointerMove=(b,A)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=qm(A,this.transformPagePoint),re.update(this.updatePoint,!0)},this.handlePointerUp=(b,A)=>{this.end();const{onEnd:_,onSessionEnd:x,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=$m(b.type==="pointercancel"?this.lastMoveEventInfo:qm(A,this.transformPagePoint),this.history);this.startEvent&&_&&_(b,C),x&&x(b,C)},!j0(e))return;this.dragSnapToOrigin=l,this.handlers=r,this.transformPagePoint=a,this.contextWindow=o||window;const c=cc(e),d=qm(c,this.transformPagePoint),{point:p}=d,{timestamp:m}=Ke;this.history=[{...p,timestamp:m}];const{onSessionStart:y}=r;y&&y(e,$m(d,this.history)),this.removeListeners=uc(Ou(this.contextWindow,"pointermove",this.handlePointerMove),Ou(this.contextWindow,"pointerup",this.handlePointerUp),Ou(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ba(this.updatePoint)}}function qm(t,e){return e?{point:e(t.point)}:t}function y2(t,e){return{x:t.x-e.x,y:t.y-e.y}}function $m({point:t},e){return{point:t,delta:y2(t,dE(e)),offset:y2(t,WP(e)),velocity:ZP(e,.1)}}function WP(t){return t[0]}function dE(t){return t[t.length-1]}function ZP(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,a=null;const o=dE(t);for(;r>=0&&(a=t[r],!(o.timestamp-a.timestamp>Mi(e)));)r--;if(!a)return{x:0,y:0};const l=Pi(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const c={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function QP(t,{min:e,max:r},a){return e!==void 0&&t<e?t=a?fe(e,t,a.min):Math.max(t,e):r!==void 0&&t>r&&(t=a?fe(r,t,a.max):Math.min(t,r)),t}function v2(t,e,r){return{min:e!==void 0?t.min+e:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function JP(t,{top:e,left:r,bottom:a,right:o}){return{x:v2(t.x,r,o),y:v2(t.y,e,a)}}function b2(t,e){let r=e.min-t.min,a=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,a]=[a,r]),{min:r,max:a}}function t3(t,e){return{x:b2(t.x,e.x),y:b2(t.y,e.y)}}function e3(t,e){let r=.5;const a=fn(t),o=fn(e);return o>a?r=Fs(e.min,e.max-a,t.min):a>o&&(r=Fs(t.min,t.max-o,e.min)),Ii(0,1,r)}function n3(t,e){const r={};return e.min!==void 0&&(r.min=e.min-t.min),e.max!==void 0&&(r.max=e.max-t.min),r}const Hg=.35;function r3(t=Hg){return t===!1?t=0:t===!0&&(t=Hg),{x:S2(t,"left","right"),y:S2(t,"top","bottom")}}function S2(t,e,r){return{min:T2(t,e),max:T2(t,r)}}function T2(t,e){return typeof t=="number"?t:t[e]||0}const i3=new WeakMap;class a3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ae(),this.visualElement=e}start(e,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const o=y=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(cc(y).point)},l=(y,b)=>{const{drag:A,dragPropagation:_,onDragStart:x}=this.getProps();if(A&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=QD(A),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tr(C=>{let M=this.getAxisMotionValue(C).get()||0;if(Fr.test(M)){const{projection:j}=this.visualElement;if(j&&j.layout){const U=j.layout.layoutBox[C];U&&(M=fn(U)*(parseFloat(M)/100))}}this.originPoint[C]=M}),x&&re.postRender(()=>x(y,b)),Rg(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},c=(y,b)=>{const{dragPropagation:A,dragDirectionLock:_,onDirectionLock:x,onDrag:w}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:C}=b;if(_&&this.currentDirection===null){this.currentDirection=o3(C),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",b.point,C),this.updateAxis("y",b.point,C),this.visualElement.render(),w&&w(y,b)},d=(y,b)=>this.stop(y,b),p=()=>tr(y=>{var b;return this.getAnimationState(y)==="paused"&&((b=this.getAxisMotionValue(y).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new hE(e,{onSessionStart:o,onStart:l,onMove:c,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:fE(this.visualElement)})}stop(e,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&re.postRender(()=>l(e,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,a){const{drag:o}=this.getProps();if(!a||!Wf(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(c=QP(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){var e;const{dragConstraints:r,dragElastic:a}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;r&&Ps(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=JP(o.layoutBox,r):this.constraints=!1,this.elastic=r3(a),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&tr(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=n3(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!Ps(e))return!1;const a=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=XP(a,o.root,this.visualElement.getTransformPagePoint());let c=t3(o.layout.layoutBox,l);if(r){const d=r(BP(c));this.hasMutatedConstraints=!!d,d&&(c=aE(d))}return c}startAnimation(e){const{drag:r,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},m=tr(y=>{if(!Wf(y,r,this.currentDirection))return;let b=p&&p[y]||{};c&&(b={min:0,max:0});const A=o?200:1e6,_=o?40:1e7,x={type:"inertia",velocity:a?e[y]:0,bounceStiffness:A,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...l,...b};return this.startAxisValueAnimation(y,x)});return Promise.all(m).then(d)}startAxisValueAnimation(e,r){const a=this.getAxisMotionValue(e);return Rg(this.visualElement,e),a.start(sy(e,a,0,r,this.visualElement,!1))}stopAnimation(){tr(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){tr(e=>{var r;return(r=this.getAxisMotionValue(e).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(e){var r;return(r=this.getAxisMotionValue(e).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(e){const r=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),o=a[r];return o||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){tr(r=>{const{drag:a}=this.getProps();if(!Wf(r,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(r);if(o&&o.layout){const{min:c,max:d}=o.layout.layoutBox[r];l.set(e[r]-fe(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!Ps(r)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};tr(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const p=d.get();o[c]=e3({min:p,max:p},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),tr(c=>{if(!Wf(c,e,null))return;const d=this.getAxisMotionValue(c),{min:p,max:m}=this.constraints[c];d.set(fe(p,m,o[c]))})}addListeners(){if(!this.visualElement.current)return;i3.set(this.visualElement,this);const e=this.visualElement.current,r=Ou(e,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps();m&&y&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Ps(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),re.read(a);const c=Xu(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(tr(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=p[y].translate,b.set(b.get()+p[y].translate))}),this.visualElement.render())});return()=>{c(),r(),l(),d&&d()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:c=Hg,dragMomentum:d=!0}=e;return{...e,drag:r,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:c,dragMomentum:d}}}function Wf(t,e,r){return(e===!0||e===t)&&(r===null||r===t)}function o3(t,e=10){let r=null;return Math.abs(t.y)>e?r="y":Math.abs(t.x)>e&&(r="x"),r}class s3 extends Ha{constructor(e){super(e),this.removeGroupControls=Nn,this.removeListeners=Nn,this.controls=new a3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Nn}unmount(){this.removeGroupControls(),this.removeListeners()}}const w2=t=>(e,r)=>{t&&re.postRender(()=>t(e,r))};class l3 extends Ha{constructor(){super(...arguments),this.removePointerDownListener=Nn}onPointerDown(e){this.session=new hE(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fE(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:w2(e),onStart:w2(r),onMove:a,onEnd:(l,c)=>{delete this.session,o&&re.postRender(()=>o(l,c))}}}mount(){this.removePointerDownListener=Ou(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const mh={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function x2(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const yu={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(St.test(t))t=parseFloat(t);else return t;const r=x2(t,e.target.x),a=x2(t,e.target.y);return`${r}% ${a}%`}},u3={correct:(t,{treeScale:e,projectionDelta:r})=>{const a=t,o=ja.parse(t);if(o.length>5)return a;const l=ja.createTransformer(t),c=typeof o[0]!="number"?1:0,d=r.x.scale*e.x,p=r.y.scale*e.y;o[0+c]/=d,o[1+c]/=p;const m=fe(d,p,.5);return typeof o[2+c]=="number"&&(o[2+c]/=m),typeof o[3+c]=="number"&&(o[3+c]/=m),l(o)}};class c3 extends B.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=e;_6(f3),l&&(r.group&&r.group.add(l),a&&a.register&&o&&a.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),mh.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:a,drag:o,isPresent:l}=this.props,c=a.projection;return c&&(c.isPresent=l,o||e.layoutDependency!==r||r===void 0||e.isPresent!==l?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||re.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),B0.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function pE(t){const[e,r]=HD(),a=B.useContext(Kw);return J.jsx(c3,{...t,layoutGroup:a,switchLayoutGroup:B.useContext(fx),isPresent:e,safeToRemove:r})}const f3={borderRadius:{...yu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yu,borderTopRightRadius:yu,borderBottomLeftRadius:yu,borderBottomRightRadius:yu,boxShadow:u3};function h3(t,e,r){const a=rn(t)?t:Hu(t);return a.start(sy("",a,e,r)),a.animation}function d3(t){return t instanceof SVGElement&&t.tagName!=="svg"}const p3=(t,e)=>t.depth-e.depth;class m3{constructor(){this.children=[],this.isDirty=!1}add(e){M0(this.children,e),this.isDirty=!0}remove(e){P0(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(p3),this.isDirty=!1,this.children.forEach(e)}}function g3(t,e){const r=$r.now(),a=({timestamp:o})=>{const l=o-r;l>=e&&(Ba(a),t(l-e))};return re.read(a,!0),()=>Ba(a)}const mE=["TopLeft","TopRight","BottomLeft","BottomRight"],y3=mE.length,E2=t=>typeof t=="string"?parseFloat(t):t,A2=t=>typeof t=="number"||St.test(t);function v3(t,e,r,a,o,l){o?(t.opacity=fe(0,r.opacity!==void 0?r.opacity:1,b3(a)),t.opacityExit=fe(e.opacity!==void 0?e.opacity:1,0,S3(a))):l&&(t.opacity=fe(e.opacity!==void 0?e.opacity:1,r.opacity!==void 0?r.opacity:1,a));for(let c=0;c<y3;c++){const d=`border${mE[c]}Radius`;let p=_2(e,d),m=_2(r,d);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||A2(p)===A2(m)?(t[d]=Math.max(fe(E2(p),E2(m),a),0),(Fr.test(m)||Fr.test(p))&&(t[d]+="%")):t[d]=m}(e.rotate||r.rotate)&&(t.rotate=fe(e.rotate||0,r.rotate||0,a))}function _2(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const b3=gE(0,.5,Mx),S3=gE(.5,.95,Nn);function gE(t,e,r){return a=>a<t?0:a>e?1:r(Fs(t,e,a))}function C2(t,e){t.min=e.min,t.max=e.max}function Jn(t,e){C2(t.x,e.x),C2(t.y,e.y)}function O2(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function R2(t,e,r,a,o){return t-=e,t=Ph(t,1/r,a),o!==void 0&&(t=Ph(t,1/o,a)),t}function T3(t,e=0,r=1,a=.5,o,l=t,c=t){if(Fr.test(e)&&(e=parseFloat(e),e=fe(c.min,c.max,e/100)-c.min),typeof e!="number")return;let d=fe(l.min,l.max,a);t===l&&(d-=e),t.min=R2(t.min,e,r,d,o),t.max=R2(t.max,e,r,d,o)}function k2(t,e,[r,a,o],l,c){T3(t,e[r],e[a],e[o],e.scale,l,c)}const w3=["x","scaleX","originX"],x3=["y","scaleY","originY"];function D2(t,e,r,a){k2(t.x,e,w3,r?r.x:void 0,a?a.x:void 0),k2(t.y,e,x3,r?r.y:void 0,a?a.y:void 0)}function M2(t){return t.translate===0&&t.scale===1}function yE(t){return M2(t.x)&&M2(t.y)}function P2(t,e){return t.min===e.min&&t.max===e.max}function E3(t,e){return P2(t.x,e.x)&&P2(t.y,e.y)}function N2(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function vE(t,e){return N2(t.x,e.x)&&N2(t.y,e.y)}function L2(t){return fn(t.x)/fn(t.y)}function z2(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class A3{constructor(){this.members=[]}add(e){M0(this.members,e),e.scheduleRender()}remove(e){if(P0(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(o=>e===o);if(r===0)return!1;let a;for(let o=r;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(e,r){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender(),e.resumeFrom=a,r&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:a}=e;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _3(t,e,r){let a="";const o=t.x.translate/e.x,l=t.y.translate/e.y,c=(r==null?void 0:r.z)||0;if((o||l||c)&&(a=`translate3d(${o}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),r){const{transformPerspective:m,rotate:y,rotateX:b,rotateY:A,skewX:_,skewY:x}=r;m&&(a=`perspective(${m}px) ${a}`),y&&(a+=`rotate(${y}deg) `),b&&(a+=`rotateX(${b}deg) `),A&&(a+=`rotateY(${A}deg) `),_&&(a+=`skewX(${_}deg) `),x&&(a+=`skewY(${x}deg) `)}const d=t.x.scale*e.x,p=t.y.scale*e.y;return(d!==1||p!==1)&&(a+=`scale(${d}, ${p})`),a||"none"}const Fm=["","X","Y","Z"],C3={visibility:"hidden"},I2=1e3;let O3=0;function Gm(t,e,r,a){const{latestValues:o}=e;o[t]&&(r[t]=o[t],e.setStaticValue(t,0),a&&(a[t]=0))}function bE(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const r=Ax(e);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",re,!(o||l))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&bE(a)}function SE({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(c={},d=e==null?void 0:e()){this.id=O3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(D3),this.nodes.forEach(z3),this.nodes.forEach(I3),this.nodes.forEach(M3)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new m3)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new L0),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const p=this.eventHandlers.get(c);p&&p.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=d3(c),this.instance=c;const{layoutId:p,layout:m,visualElement:y}=this.options;if(y&&!y.current&&y.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(m||p)&&(this.isLayoutDirty=!0),t){let b;const A=()=>this.root.updateBlockedByResize=!1;t(c,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=g3(A,250),mh.hasAnimatedSinceResize&&(mh.hasAnimatedSinceResize=!1,this.nodes.forEach(B2))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&y&&(p||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:A,hasRelativeLayoutChanged:_,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||y.getDefaultTransition()||H3,{onLayoutAnimationStart:C,onLayoutAnimationComplete:M}=y.getProps(),j=!this.targetLayout||!vE(this.targetLayout,x),U=!A&&_;if(this.options.layoutRoot||this.resumeFrom||U||A&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,U);const F={...z0(w,"layout"),onPlay:C,onComplete:M};(y.shouldReduceMotion||this.options.layoutRoot)&&(F.delay=0,F.type=!1),this.startAnimation(F)}else A||B2(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ba(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(U3),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&bE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(U2);return}this.isUpdating||this.nodes.forEach(N3),this.isUpdating=!1,this.nodes.forEach(L3),this.nodes.forEach(R3),this.nodes.forEach(k3),this.clearAllSnapshots();const d=$r.now();Ke.delta=Ii(0,1e3/60,d-Ke.timestamp),Ke.timestamp=d,Ke.isProcessing=!0,Im.update.process(Ke),Im.preRender.process(Ke),Im.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,B0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(P3),this.sharedNodes.forEach(B3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!yE(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;c&&(d||xo(this.latestValues)||y)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return c&&(p=this.removeTransform(p)),q3(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:d}=this.options;if(!d)return Ae();const p=d.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some($3))){const{scroll:y}=this.root;y&&(zs(p.x,y.offset.x),zs(p.y,y.offset.y))}return p}removeElementScroll(c){var d;const p=Ae();if(Jn(p,c),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return p;for(let m=0;m<this.path.length;m++){const y=this.path[m],{scroll:b,options:A}=y;y!==this.root&&b&&A.layoutScroll&&(b.wasRoot&&Jn(p,c),zs(p.x,b.offset.x),zs(p.y,b.offset.y))}return p}applyTransform(c,d=!1){const p=Ae();Jn(p,c);for(let m=0;m<this.path.length;m++){const y=this.path[m];!d&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Is(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),xo(y.latestValues)&&Is(p,y.latestValues)}return xo(this.latestValues)&&Is(p,this.latestValues),p}removeTransform(c){const d=Ae();Jn(d,c);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!xo(m.latestValues))continue;jg(m.latestValues)&&m.updateSnapshot();const y=Ae(),b=m.measurePageBox();Jn(y,b),D2(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,y)}return xo(this.latestValues)&&D2(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var d;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(c||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:A}=this.options;if(!(!this.layout||!(b||A))){if(this.resolvedRelativeTargetAt=Ke.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),ku(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),Jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ae(),this.targetWithTransforms=Ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),GP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Jn(this.target,this.layout.layoutBox),uE(this.target,this.targetDelta)):Jn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ae(),this.relativeTargetOrigin=Ae(),ku(this.relativeTargetOrigin,this.target,_.target),Jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||jg(this.parent.latestValues)||lE(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(m=!1),m)return;const{layout:y,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||b))return;Jn(this.layoutCorrected,this.layout.layoutBox);const A=this.treeScale.x,_=this.treeScale.y;YP(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Ae());const{target:x}=d;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(O2(this.prevProjectionDelta.x,this.projectionDelta.x),O2(this.prevProjectionDelta.y,this.projectionDelta.y)),Ru(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==A||this.treeScale.y!==_||!z2(this.projectionDelta.x,this.prevProjectionDelta.x)||!z2(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),c){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ls(),this.projectionDelta=Ls(),this.projectionDeltaWithTransform=Ls()}setAnimationOrigin(c,d=!1){const p=this.snapshot,m=p?p.latestValues:{},y={...this.latestValues},b=Ls();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const A=Ae(),_=p?p.source:void 0,x=this.layout?this.layout.source:void 0,w=_!==x,C=this.getStack(),M=!C||C.members.length<=1,j=!!(w&&!M&&this.options.crossfade===!0&&!this.path.some(V3));this.animationProgress=0;let U;this.mixTargetDelta=F=>{const z=F/1e3;j2(b.x,c.x,z),j2(b.y,c.y,z),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ku(A,this.layout.layoutBox,this.relativeParent.layout.layoutBox),j3(this.relativeTarget,this.relativeTargetOrigin,A,z),U&&E3(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=Ae()),Jn(U,this.relativeTarget)),w&&(this.animationValues=y,v3(y,m,this.latestValues,z,j,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ba(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=re.update(()=>{mh.hasAnimatedSinceResize=!0,this.currentAnimation=h3(0,I2,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(I2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:p,layout:m,latestValues:y}=c;if(!(!d||!p||!m)){if(this!==c&&this.layout&&m&&TE(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||Ae();const b=fn(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+b;const A=fn(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+A}Jn(d,p),Is(d,y),Ru(this.projectionDeltaWithTransform,this.layoutCorrected,d,y)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new A3),this.sharedNodes.get(c).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:d}=this.options;return d?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:d}=this.options;return d?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:p}=c;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const m={};p.z&&Gm("z",c,m,this.animationValues);for(let y=0;y<Fm.length;y++)Gm(`rotate${Fm[y]}`,c,m,this.animationValues),Gm(`skew${Fm[y]}`,c,m,this.animationValues);c.render();for(const y in m)c.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);c.scheduleRender()}getProjectionStyles(c){var d,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return C3;const m={visibility:""},y=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=ph(c==null?void 0:c.pointerEvents)||"",m.transform=y?y(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=ph(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!xo(this.latestValues)&&(w.transform=y?y({},""):"none",this.hasProjected=!1),w}const A=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=_3(this.projectionDeltaWithTransform,this.treeScale,A),y&&(m.transform=y(A,m.transform));const{x:_,y:x}=this.projectionDelta;m.transformOrigin=`${_.origin*100}% ${x.origin*100}% 0`,b.animationValues?m.opacity=b===this?(p=(d=A.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:A.opacityExit:m.opacity=b===this?A.opacity!==void 0?A.opacity:"":A.opacityExit!==void 0?A.opacityExit:0;for(const w in $u){if(A[w]===void 0)continue;const{correct:C,applyTo:M,isCSSVariable:j}=$u[w],U=m.transform==="none"?A[w]:C(A[w],b);if(M){const F=M.length;for(let z=0;z<F;z++)m[M[z]]=U}else j?this.options.visualElement.renderState.vars[w]=U:m[w]=U}return this.options.layoutId&&(m.pointerEvents=b===this?ph(c==null?void 0:c.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(U2),this.root.sharedNodes.clear()}}}function R3(t){t.updateLayout()}function k3(t){var e;const r=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=t.layout,{animationType:l}=t.options,c=r.source!==t.layout.source;l==="size"?tr(b=>{const A=c?r.measuredBox[b]:r.layoutBox[b],_=fn(A);A.min=a[b].min,A.max=A.min+_}):TE(l,r.layoutBox,a)&&tr(b=>{const A=c?r.measuredBox[b]:r.layoutBox[b],_=fn(a[b]);A.max=A.min+_,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+_)});const d=Ls();Ru(d,a,r.layoutBox);const p=Ls();c?Ru(p,t.applyTransform(o,!0),r.measuredBox):Ru(p,a,r.layoutBox);const m=!yE(d);let y=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:A,layout:_}=b;if(A&&_){const x=Ae();ku(x,r.layoutBox,A.layoutBox);const w=Ae();ku(w,a,_.layoutBox),vE(x,w)||(y=!0),b.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=x,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:r,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function D3(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function M3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function P3(t){t.clearSnapshot()}function U2(t){t.clearMeasurements()}function N3(t){t.isLayoutDirty=!1}function L3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function B2(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function z3(t){t.resolveTargetDelta()}function I3(t){t.calcProjection()}function U3(t){t.resetSkewAndRotation()}function B3(t){t.removeLeadSnapshot()}function j2(t,e,r){t.translate=fe(e.translate,0,r),t.scale=fe(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function V2(t,e,r,a){t.min=fe(e.min,r.min,a),t.max=fe(e.max,r.max,a)}function j3(t,e,r,a){V2(t.x,e.x,r.x,a),V2(t.y,e.y,r.y,a)}function V3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const H3={duration:.45,ease:[.4,0,.1,1]},H2=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),q2=H2("applewebkit/")&&!H2("chrome/")?Math.round:Nn;function $2(t){t.min=q2(t.min),t.max=q2(t.max)}function q3(t){$2(t.x),$2(t.y)}function TE(t,e,r){return t==="position"||t==="preserve-aspect"&&!FP(L2(e),L2(r),.2)}function $3(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const F3=SE({attachResizeListener:(t,e)=>Xu(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ym={current:void 0},wE=SE({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ym.current){const t=new F3({});t.mount(window),t.setOptions({layoutScroll:!0}),Ym.current=t}return Ym.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),G3={pan:{Feature:l3},drag:{Feature:s3,ProjectionNode:wE,MeasureLayout:pE}};function F2(t,e,r){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",r==="Start");const o="onHover"+r,l=a[o];l&&re.postRender(()=>l(e,cc(e)))}class Y3 extends Ha{mount(){const{current:e}=this.node;e&&(this.unmount=t6(e,(r,a)=>(F2(this.node,a,"Start"),o=>F2(this.node,o,"End"))))}unmount(){}}class X3 extends Ha{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=uc(Xu(this.node.current,"focus",()=>this.onFocus()),Xu(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function G2(t,e,r){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",r==="Start");const o="onTap"+(r==="End"?"":r),l=a[o];l&&re.postRender(()=>l(e,cc(e)))}class K3 extends Ha{mount(){const{current:e}=this.node;e&&(this.unmount=i6(e,(r,a)=>(G2(this.node,a,"Start"),(o,{success:l})=>G2(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const qg=new WeakMap,Xm=new WeakMap,W3=t=>{const e=qg.get(t.target);e&&e(t)},Z3=t=>{t.forEach(W3)};function Q3({root:t,...e}){const r=t||document;Xm.has(r)||Xm.set(r,{});const a=Xm.get(r),o=JSON.stringify(e);return a[o]||(a[o]=new IntersectionObserver(Z3,{root:t,...e})),a[o]}function J3(t,e,r){const a=Q3(e);return qg.set(t,r),a.observe(t),()=>{qg.delete(t),a.unobserve(t)}}const t9={some:0,all:1};class e9 extends Ha{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:a,amount:o="some",once:l}=e,c={root:r?r.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:t9[o]},d=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),A=m?y:b;A&&A(p)};return J3(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some(n9(e,r))&&this.startObserver()}unmount(){}}function n9({viewport:t={}},{viewport:e={}}={}){return r=>t[r]!==e[r]}const r9={inView:{Feature:e9},tap:{Feature:K3},focus:{Feature:X3},hover:{Feature:Y3}},i9={layout:{ProjectionNode:wE,MeasureLayout:pE}},$g={current:null},xE={current:!1};function a9(){if(xE.current=!0,!!k0)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>$g.current=t.matches;t.addListener(e),e()}else $g.current=!1}const o9=[...Yx,en,ja],s9=t=>o9.find(Gx(t)),l9=new WeakMap;function u9(t,e,r){for(const a in e){const o=e[a],l=r[a];if(rn(o))t.addValue(a,o);else if(rn(l))t.addValue(a,Hu(o,{owner:t}));else if(l!==o)if(t.hasValue(a)){const c=t.getValue(a);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=t.getStaticValue(a);t.addValue(a,Hu(c!==void 0?c:o,{owner:t}))}}for(const a in r)e[a]===void 0&&t.removeValue(a);return e}const Y2=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class c9{scrapeMotionValuesFromProps(e,r,a){return{}}constructor({parent:e,props:r,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=iy,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=$r.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,re.render(this.render,!1,!0))};const{latestValues:p,renderState:m,onUpdate:y}=c;this.onUpdate=y,this.latestValues=p,this.baseTarget={...p},this.initialValues=r.initial?{...p}:{},this.renderState=m,this.parent=e,this.props=r,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=fd(r),this.isVariantNode=ux(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:b,...A}=this.scrapeMotionValuesFromProps(r,{},this);for(const _ in A){const x=A[_];p[_]!==void 0&&rn(x)&&x.set(p[_],!1)}}mount(e){this.current=e,l9.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),xE.current||a9(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:$g.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ba(this.notifyUpdate),Ba(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const r=this.features[e];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(e,r){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const a=jo.has(e);a&&this.onBindTransform&&this.onBindTransform();const o=r.on("change",d=>{this.latestValues[e]=d,this.props.onUpdate&&re.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),l=r.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,()=>{o(),l(),c&&c(),r.owner&&r.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Gs){const r=Gs[e];if(!r)continue;const{isEnabled:a,Feature:o}=r;if(!this.features[e]&&o&&a(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ae()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<Y2.length;a++){const o=Y2[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,c=e[l];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=u9(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){const a=this.values.get(e);r!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&r!==void 0&&(a=Hu(r===null?void 0:r,{owner:this}),this.addValue(e,a)),a}readValue(e,r){var a;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(a=this.getBaseTargetFromProps(this.props,e))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&($x(o)||Nx(o))?o=parseFloat(o):!s9(o)&&ja.test(r)&&(o=Vx(e,r)),this.setBaseTarget(e,rn(o)?o.get():o)),rn(o)?o.get():o}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var r;const{initial:a}=this.props;let o;if(typeof a=="string"||typeof a=="object"){const c=Q0(this.props,a,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);c&&(o=c[e])}if(a&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!rn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new L0),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class EE extends c9{constructor(){super(...arguments),this.KeyframeResolver=Xx}sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:a}){delete r[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;rn(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function f9(t){return window.getComputedStyle(t)}class h9 extends EE{constructor(){super(...arguments),this.type="html",this.renderInstance=Sx}readValueFromInstance(e,r){if(jo.has(r))return xM(e,r);{const a=f9(e),o=($0(r)?a.getPropertyValue(r):a[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:r}){return cE(e,r)}build(e,r,a){Y0(e,r,a.transformTemplate)}scrapeMotionValuesFromProps(e,r,a){return J0(e,r,a)}}class d9 extends EE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ae,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&bx(this.current,this.renderState)}}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(jo.has(r)){const a=jx(r);return a&&a.default||0}return r=Tx.has(r)?r:q0(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,a){return xx(e,r,a)}onBindTransform(){this.current&&!this.renderState.dimensions&&re.postRender(this.updateDimensions)}build(e,r,a){W0(e,r,this.isSVGTag,a.transformTemplate)}renderInstance(e,r,a,o){wx(e,r,a,o)}mount(e){this.isSVGTag=Z0(e.tagName),super.mount(e)}}const p9=(t,e)=>K0(t)?new d9(e):new h9(e,{allowProjection:t!==B.Fragment}),m9=W6({...IP,...r9,...G3,...i9},p9),g9=h6(m9),y9=()=>{};var X2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=function(t){const e=[];let r=0;for(let a=0;a<t.length;a++){let o=t.charCodeAt(a);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=o&63|128):(o&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++a)&1023),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=o&63|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=o&63|128)}return e},v9=function(t){const e=[];let r=0,a=0;for(;r<t.length;){const o=t[r++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[r++];e[a++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[r++],c=t[r++],d=t[r++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[a++]=String.fromCharCode(55296+(p>>10)),e[a++]=String.fromCharCode(56320+(p&1023))}else{const l=t[r++],c=t[r++];e[a++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},_E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<t.length;o+=3){const l=t[o],c=o+1<t.length,d=c?t[o+1]:0,p=o+2<t.length,m=p?t[o+2]:0,y=l>>2,b=(l&3)<<4|d>>4;let A=(d&15)<<2|m>>6,_=m&63;p||(_=64,c||(A=64)),a.push(r[y],r[b],r[A],r[_])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(AE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):v9(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<t.length;){const l=r[t.charAt(o++)],d=o<t.length?r[t.charAt(o)]:0;++o;const m=o<t.length?r[t.charAt(o)]:64;++o;const b=o<t.length?r[t.charAt(o)]:64;if(++o,l==null||d==null||m==null||b==null)throw new b9;const A=l<<2|d>>4;if(a.push(A),m!==64){const _=d<<4&240|m>>2;if(a.push(_),b!==64){const x=m<<6&192|b;a.push(x)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class b9 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S9=function(t){const e=AE(t);return _E.encodeByteArray(e,!0)},Nh=function(t){return S9(t).replace(/\./g,"")},CE=function(t){try{return _E.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T9(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w9=()=>T9().__FIREBASE_DEFAULTS__,x9=()=>{if(typeof process>"u"||typeof X2>"u")return;const t=X2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E9=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CE(t[1]);return e&&JSON.parse(e)},ly=()=>{try{return y9()||w9()||x9()||E9()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OE=t=>{var e,r;return(r=(e=ly())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},A9=t=>{const e=OE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),a]:[e.substring(0,r),a]},RE=()=>{var t;return(t=ly())===null||t===void 0?void 0:t.config},kE=t=>{var e;return(e=ly())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C9(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nh(JSON.stringify(r)),Nh(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O9(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function R9(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k9(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function D9(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M9(){const t=hn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function P9(){try{return typeof indexedDB=="object"}catch{return!1}}function N9(){return new Promise((t,e)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(a),t(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L9="FirebaseError";class qi extends Error{constructor(e,r,a){super(r),this.code=e,this.customData=a,this.name=L9,Object.setPrototypeOf(this,qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,r,a){this.service=e,this.serviceName=r,this.errors=a}create(e,...r){const a=r[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?z9(l,a):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new qi(o,d,a)}}function z9(t,e){return t.replace(I9,(r,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const I9=/\{\$([^}]+)}/g;function U9(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e){if(t===e)return!0;const r=Object.keys(t),a=Object.keys(e);for(const o of r){if(!a.includes(o))return!1;const l=t[o],c=e[o];if(K2(l)&&K2(c)){if(!Lo(l,c))return!1}else if(l!==c)return!1}for(const o of a)if(!r.includes(o))return!1;return!0}function K2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){const e=[];for(const[r,a]of Object.entries(t))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function B9(t,e){const r=new j9(t,e);return r.subscribe.bind(r)}class j9{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,a){let o;if(e===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");V9(e,["next","error","complete"])?o=e:o={next:e,error:r,complete:a},o.next===void 0&&(o.next=Km),o.error===void 0&&(o.error=Km),o.complete===void 0&&(o.complete=Km);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V9(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Km(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){return t&&t._delegate?t._delegate:t}class zo{constructor(e,r,a){this.name=e,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const a=new _9;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($9(e))try{this.getOrInitializeService({instanceIdentifier:Eo})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const l=this.getOrInitializeService({instanceIdentifier:o});a.resolve(l)}catch{}}}}clearInstance(e=Eo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Eo){return this.instances.has(e)}getOptions(e=Eo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);a===d&&c.resolve(o)}return o}onInit(e,r){var a;const o=this.normalizeInstanceIdentifier(r),l=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,r){const a=this.onInitCallbacks.get(r);if(a)for(const o of a)try{o(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:q9(e),options:r}),this.instances.set(e,a),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Eo){return this.component?this.component.multipleInstances?e:Eo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q9(t){return t===Eo?void 0:t}function $9(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F9{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new H9(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Yt||(Yt={}));const G9={debug:Yt.DEBUG,verbose:Yt.VERBOSE,info:Yt.INFO,warn:Yt.WARN,error:Yt.ERROR,silent:Yt.SILENT},Y9=Yt.INFO,X9={[Yt.DEBUG]:"log",[Yt.VERBOSE]:"log",[Yt.INFO]:"info",[Yt.WARN]:"warn",[Yt.ERROR]:"error"},K9=(t,e,...r)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),o=X9[e];if(o)console[o](`[${a}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uy{constructor(e){this.name=e,this._logLevel=Y9,this._logHandler=K9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Yt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G9[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Yt.DEBUG,...e),this._logHandler(this,Yt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Yt.VERBOSE,...e),this._logHandler(this,Yt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Yt.INFO,...e),this._logHandler(this,Yt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Yt.WARN,...e),this._logHandler(this,Yt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Yt.ERROR,...e),this._logHandler(this,Yt.ERROR,...e)}}const W9=(t,e)=>e.some(r=>t instanceof r);let W2,Z2;function Z9(){return W2||(W2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q9(){return Z2||(Z2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DE=new WeakMap,Fg=new WeakMap,ME=new WeakMap,Wm=new WeakMap,cy=new WeakMap;function J9(t){const e=new Promise((r,a)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{r(La(t.result)),o()},c=()=>{a(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(r=>{r instanceof IDBCursor&&DE.set(r,t)}).catch(()=>{}),cy.set(e,t),e}function tN(t){if(Fg.has(t))return;const e=new Promise((r,a)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{r(),o()},c=()=>{a(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Fg.set(t,e)}let Gg={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Fg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ME.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return La(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eN(t){Gg=t(Gg)}function nN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const a=t.call(Zm(this),e,...r);return ME.set(a,e.sort?e.sort():[e]),La(a)}:Q9().includes(t)?function(...e){return t.apply(Zm(this),e),La(DE.get(this))}:function(...e){return La(t.apply(Zm(this),e))}}function rN(t){return typeof t=="function"?nN(t):(t instanceof IDBTransaction&&tN(t),W9(t,Z9())?new Proxy(t,Gg):t)}function La(t){if(t instanceof IDBRequest)return J9(t);if(Wm.has(t))return Wm.get(t);const e=rN(t);return e!==t&&(Wm.set(t,e),cy.set(e,t)),e}const Zm=t=>cy.get(t);function iN(t,e,{blocked:r,upgrade:a,blocking:o,terminated:l}={}){const c=indexedDB.open(t,e),d=La(c);return a&&c.addEventListener("upgradeneeded",p=>{a(La(c.result),p.oldVersion,p.newVersion,La(c.transaction),p)}),r&&c.addEventListener("blocked",p=>r(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const aN=["get","getKey","getAll","getAllKeys","count"],oN=["put","add","delete","clear"],Qm=new Map;function Q2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qm.get(e))return Qm.get(e);const r=e.replace(/FromIndex$/,""),a=e!==r,o=oN.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(o||aN.includes(r)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let m=p.store;return a&&(m=m.index(d.shift())),(await Promise.all([m[r](...d),o&&p.done]))[0]};return Qm.set(e,l),l}eN(t=>({...t,get:(e,r,a)=>Q2(e,r)||t.get(e,r,a),has:(e,r)=>!!Q2(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(lN(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function lN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yg="@firebase/app",J2="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new uy("@firebase/app"),uN="@firebase/app-compat",cN="@firebase/analytics-compat",fN="@firebase/analytics",hN="@firebase/app-check-compat",dN="@firebase/app-check",pN="@firebase/auth",mN="@firebase/auth-compat",gN="@firebase/database",yN="@firebase/data-connect",vN="@firebase/database-compat",bN="@firebase/functions",SN="@firebase/functions-compat",TN="@firebase/installations",wN="@firebase/installations-compat",xN="@firebase/messaging",EN="@firebase/messaging-compat",AN="@firebase/performance",_N="@firebase/performance-compat",CN="@firebase/remote-config",ON="@firebase/remote-config-compat",RN="@firebase/storage",kN="@firebase/storage-compat",DN="@firebase/firestore",MN="@firebase/vertexai",PN="@firebase/firestore-compat",NN="firebase",LN="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="[DEFAULT]",zN={[Yg]:"fire-core",[uN]:"fire-core-compat",[fN]:"fire-analytics",[cN]:"fire-analytics-compat",[dN]:"fire-app-check",[hN]:"fire-app-check-compat",[pN]:"fire-auth",[mN]:"fire-auth-compat",[gN]:"fire-rtdb",[yN]:"fire-data-connect",[vN]:"fire-rtdb-compat",[bN]:"fire-fn",[SN]:"fire-fn-compat",[TN]:"fire-iid",[wN]:"fire-iid-compat",[xN]:"fire-fcm",[EN]:"fire-fcm-compat",[AN]:"fire-perf",[_N]:"fire-perf-compat",[CN]:"fire-rc",[ON]:"fire-rc-compat",[RN]:"fire-gcs",[kN]:"fire-gcs-compat",[DN]:"fire-fst",[PN]:"fire-fst-compat",[MN]:"fire-vertex","fire-js":"fire-js",[NN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map,IN=new Map,Kg=new Map;function tT(t,e){try{t.container.addComponent(e)}catch(r){Ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Xs(t){const e=t.name;if(Kg.has(e))return Ui.debug(`There were multiple attempts to register component ${e}.`),!1;Kg.set(e,t);for(const r of Lh.values())tT(r,t);for(const r of IN.values())tT(r,t);return!0}function fy(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function mr(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},za=new fc("app","Firebase",UN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,r,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new zo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw za.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=LN;function PE(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:Xg,automaticDataCollectionEnabled:!1},e),o=a.name;if(typeof o!="string"||!o)throw za.create("bad-app-name",{appName:String(o)});if(r||(r=RE()),!r)throw za.create("no-options");const l=Lh.get(o);if(l){if(Lo(r,l.options)&&Lo(a,l.config))return l;throw za.create("duplicate-app",{appName:o})}const c=new F9(o);for(const p of Kg.values())c.addComponent(p);const d=new BN(r,a,c);return Lh.set(o,d),d}function NE(t=Xg){const e=Lh.get(t);if(!e&&t===Xg&&RE())return PE();if(!e)throw za.create("no-app",{appName:t});return e}function Ia(t,e,r){var a;let o=(a=zN[t])!==null&&a!==void 0?a:t;r&&(o+=`-${r}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ui.warn(d.join(" "));return}Xs(new zo(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="firebase-heartbeat-database",VN=1,Ku="firebase-heartbeat-store";let Jm=null;function LE(){return Jm||(Jm=iN(jN,VN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ku)}catch(r){console.warn(r)}}}}).catch(t=>{throw za.create("idb-open",{originalErrorMessage:t.message})})),Jm}async function HN(t){try{const r=(await LE()).transaction(Ku),a=await r.objectStore(Ku).get(zE(t));return await r.done,a}catch(e){if(e instanceof qi)Ui.warn(e.message);else{const r=za.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ui.warn(r.message)}}}async function eT(t,e){try{const a=(await LE()).transaction(Ku,"readwrite");await a.objectStore(Ku).put(e,zE(t)),await a.done}catch(r){if(r instanceof qi)Ui.warn(r.message);else{const a=za.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Ui.warn(a.message)}}}function zE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=1024,$N=30;class FN{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new YN(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=nT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>$N){const c=XN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Ui.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=nT(),{heartbeatsToSend:a,unsentEntries:o}=GN(this._heartbeatsCache.heartbeats),l=Nh(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(r){return Ui.warn(r),""}}}function nT(){return new Date().toISOString().substring(0,10)}function GN(t,e=qN){const r=[];let a=t.slice();for(const o of t){const l=r.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),rT(r)>e){l.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),rT(r)>e){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class YN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P9()?N9().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await HN(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return eT(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return eT(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function rT(t){return Nh(JSON.stringify({version:2,heartbeats:t})).length}function XN(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let a=1;a<t.length;a++)t[a].date<r&&(r=t[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){Xs(new zo("platform-logger",e=>new sN(e),"PRIVATE")),Xs(new zo("heartbeat",e=>new FN(e),"PRIVATE")),Ia(Yg,J2,t),Ia(Yg,J2,"esm2017"),Ia("fire-js","")}KN("");function hy(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(r[a[o]]=t[a[o]]);return r}function IE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WN=IE,UE=new fc("auth","Firebase",IE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new uy("@firebase/auth");function ZN(t,...e){zh.logLevel<=Yt.WARN&&zh.warn(`Auth (${nl}): ${t}`,...e)}function gh(t,...e){zh.logLevel<=Yt.ERROR&&zh.error(`Auth (${nl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,...e){throw py(t,...e)}function vr(t,...e){return py(t,...e)}function dy(t,e,r){const a=Object.assign(Object.assign({},WN()),{[e]:r});return new fc("auth","Firebase",a).create(e,{appName:t.name})}function Mo(t){return dy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QN(t,e,r){const a=r;if(!(e instanceof a))throw a.name!==e.constructor.name&&Xr(t,"argument-error"),dy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function py(t,...e){if(typeof t!="string"){const r=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(r,...a)}return UE.create(t,...e)}function Tt(t,e,...r){if(!t)throw py(e,...r)}function Ci(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gh(e),new Error(e)}function Bi(t,e){t||Ci(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JN(){return iT()==="http:"||iT()==="https:"}function iT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JN()||k9()||"connection"in navigator)?navigator.onLine:!0}function eL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,r){this.shortDelay=e,this.longDelay=r,Bi(r>e,"Short delay should be less than long delay!"),this.isMobile=O9()||D9()}get(){return tL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){Bi(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{static initialize(e,r,a){this.fetchImpl=e,r&&(this.headersImpl=r),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=new dc(3e4,6e4);function gy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rl(t,e,r,a,o={}){return jE(t,o,async()=>{let l={},c={};a&&(e==="GET"?c=a:l={body:JSON.stringify(a)});const d=hc(Object.assign({key:t.config.apiKey},c)).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const m=Object.assign({method:e,headers:p},l);return R9()||(m.referrerPolicy="no-referrer"),BE.fetch()(VE(t,t.config.apiHost,r,d),m)})}async function jE(t,e,r){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},nL),e);try{const o=new aL(t),l=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zf(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zf(t,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zf(t,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zf(t,"user-disabled",c);const y=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw dy(t,y,m);Xr(t,y)}}catch(o){if(o instanceof qi)throw o;Xr(t,"network-request-failed",{message:String(o)})}}async function iL(t,e,r,a,o={}){const l=await rl(t,e,r,a,o);return"mfaPendingCredential"in l&&Xr(t,"multi-factor-auth-required",{_serverResponse:l}),l}function VE(t,e,r,a){const o=`${e}${r}?${a}`;return t.config.emulator?my(t.config,o):`${t.config.apiScheme}://${o}`}class aL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,a)=>{this.timer=setTimeout(()=>a(vr(this.auth,"network-request-failed")),rL.get())})}}function Zf(t,e,r){const a={appName:t.name};r.email&&(a.email=r.email),r.phoneNumber&&(a.phoneNumber=r.phoneNumber);const o=vr(t,e,a);return o.customData._tokenResponse=r,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oL(t,e){return rl(t,"POST","/v1/accounts:delete",e)}async function HE(t,e){return rl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sL(t,e=!1){const r=qa(t),a=await r.getIdToken(e),o=yy(a);Tt(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:a,authTime:Du(tg(o.auth_time)),issuedAtTime:Du(tg(o.iat)),expirationTime:Du(tg(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function tg(t){return Number(t)*1e3}function yy(t){const[e,r,a]=t.split(".");if(e===void 0||r===void 0||a===void 0)return gh("JWT malformed, contained fewer than 3 sections"),null;try{const o=CE(r);return o?JSON.parse(o):(gh("Failed to decode base64 JWT payload"),null)}catch(o){return gh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function aT(t){const e=yy(t);return Tt(e,"internal-error"),Tt(typeof e.exp<"u","internal-error"),Tt(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(t,e,r=!1){if(r)return e;try{return await e}catch(a){throw a instanceof qi&&lL(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function lL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Du(this.lastLoginAt),this.creationTime=Du(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t){var e;const r=t.auth,a=await t.getIdToken(),o=await Wu(t,HE(r,{idToken:a}));Tt(o==null?void 0:o.users.length,r,"internal-error");const l=o.users[0];t._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?qE(l.providerUserInfo):[],d=fL(t.providerData,c),p=t.isAnonymous,m=!(t.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Zg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(t,b)}async function cL(t){const e=qa(t);await Ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fL(t,e){return[...t.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function qE(t){return t.map(e=>{var{providerId:r}=e,a=hy(e,["providerId"]);return{providerId:r,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hL(t,e){const r=await jE(t,{},async()=>{const a=hc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,c=VE(t,o,"/v1/token",`key=${l}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",BE.fetch()(c,{method:"POST",headers:d,body:a})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function dL(t,e){return rl(t,"POST","/v2/accounts:revokeToken",gy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Tt(e.idToken,"internal-error"),Tt(typeof e.idToken<"u","internal-error"),Tt(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){Tt(e.length!==0,"internal-error");const r=aT(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:a,refreshToken:o,expiresIn:l}=await hL(e,r);this.updateTokensAndExpiration(a,o,Number(l))}updateTokensAndExpiration(e,r,a){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,r){const{refreshToken:a,accessToken:o,expirationTime:l}=r,c=new js;return a&&(Tt(typeof a=="string","internal-error",{appName:e}),c.refreshToken=a),o&&(Tt(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Tt(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return Ci("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t,e){Tt(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Oi{constructor(e){var{uid:r,auth:a,stsTokenManager:o}=e,l=hy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Zg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const r=await Wu(this,this.stsTokenManager.getToken(this.auth,e));return Tt(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return sL(this,e)}reload(){return cL(this)}_assign(e){this!==e&&(Tt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),r&&await Ih(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Mo(this.auth));const e=await this.getIdToken();return await Wu(this,oL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var a,o,l,c,d,p,m,y;const b=(a=r.displayName)!==null&&a!==void 0?a:void 0,A=(o=r.email)!==null&&o!==void 0?o:void 0,_=(l=r.phoneNumber)!==null&&l!==void 0?l:void 0,x=(c=r.photoURL)!==null&&c!==void 0?c:void 0,w=(d=r.tenantId)!==null&&d!==void 0?d:void 0,C=(p=r._redirectEventId)!==null&&p!==void 0?p:void 0,M=(m=r.createdAt)!==null&&m!==void 0?m:void 0,j=(y=r.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:U,emailVerified:F,isAnonymous:z,providerData:W,stsTokenManager:P}=r;Tt(U&&P,e,"internal-error");const k=js.fromJSON(this.name,P);Tt(typeof U=="string",e,"internal-error"),ka(b,e.name),ka(A,e.name),Tt(typeof F=="boolean",e,"internal-error"),Tt(typeof z=="boolean",e,"internal-error"),ka(_,e.name),ka(x,e.name),ka(w,e.name),ka(C,e.name),ka(M,e.name),ka(j,e.name);const R=new Oi({uid:U,auth:e,email:A,emailVerified:F,displayName:b,isAnonymous:z,photoURL:x,phoneNumber:_,tenantId:w,stsTokenManager:k,createdAt:M,lastLoginAt:j});return W&&Array.isArray(W)&&(R.providerData=W.map(S=>Object.assign({},S))),C&&(R._redirectEventId=C),R}static async _fromIdTokenResponse(e,r,a=!1){const o=new js;o.updateFromServerResponse(r);const l=new Oi({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await Ih(l),l}static async _fromGetAccountInfoResponse(e,r,a){const o=r.users[0];Tt(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?qE(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new js;d.updateFromIdToken(a);const p=new Oi({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Zg(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Map;function Ri(t){Bi(t instanceof Function,"Expected a class definition");let e=oT.get(t);return e?(Bi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oT.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}$E.type="NONE";const sT=$E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e,r){return`firebase:${t}:${e}:${r}`}class Vs{constructor(e,r,a){this.persistence=e,this.auth=r,this.userKey=a;const{config:o,name:l}=this.auth;this.fullUserKey=yh(this.userKey,o.apiKey,l),this.fullPersistenceKey=yh("persistence",o.apiKey,l),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,a="authUser"){if(!r.length)return new Vs(Ri(sT),e,a);const o=(await Promise.all(r.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||Ri(sT);const c=yh(a,e.config.apiKey,e.name);let d=null;for(const m of r)try{const y=await m._get(c);if(y){const b=Oi._fromJSON(e,y);m!==l&&(d=b),l=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Vs(l,e,a):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(r.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Vs(l,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WE(e))return"Blackberry";if(ZE(e))return"Webos";if(GE(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(KE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(r);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function FE(t=hn()){return/firefox\//i.test(t)}function GE(t=hn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=hn()){return/crios\//i.test(t)}function XE(t=hn()){return/iemobile/i.test(t)}function KE(t=hn()){return/android/i.test(t)}function WE(t=hn()){return/blackberry/i.test(t)}function ZE(t=hn()){return/webos/i.test(t)}function vy(t=hn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pL(t=hn()){var e;return vy(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mL(){return M9()&&document.documentMode===10}function QE(t=hn()){return vy(t)||KE(t)||ZE(t)||WE(t)||/windows phone/i.test(t)||XE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e=[]){let r;switch(t){case"Browser":r=lT(hn());break;case"Worker":r=`${lT(hn())}-${t}`;break;default:r=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${nl}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const a=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});a.onAbort=r,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const a of this.queue)await a(e),a.onAbort&&r.push(a.onAbort)}catch(a){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(t,e={}){return rl(t,"GET","/v2/passwordPolicy",gy(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=6;class bL{constructor(e){var r,a,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=c.minPasswordLength)!==null&&r!==void 0?r:vL,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,a,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(r=p.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,r){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(r.meetsMinPasswordLength=e.length>=a),o&&(r.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(r,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,r,a,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,r,a,o){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uT(this),this.idTokenSubscription=new uT(this),this.beforeStateQueue=new gL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Ri(r)),this._initializationPromise=this.queue(async()=>{var a,o;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await HE(this,{idToken:e}),a=await Oi._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(a)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(mr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Ih(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Mo(this));const r=e?qa(e):null;return r&&Tt(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&Tt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Mo(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Mo(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yL(this),r=new bL(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,r,a){return this.registerStateListener(this.authStateSubscription,e,r,a)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,a){return this.registerStateListener(this.idTokenSubscription,e,r,a)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(a.tenantId=this.tenantId),await dL(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const a=await this.getOrInitRedirectPersistenceManager(r);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Ri(e)||this._popupRedirectResolver;Tt(r,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Ri(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,a;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,a,o){if(this._deleted)return()=>{};const l=typeof r=="function"?r:r.next.bind(r);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof r=="function"){const p=e.addObserver(r,a,o);return()=>{c=!0,p()}}else{const p=e.addObserver(r);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(r["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(r["X-Firebase-AppCheck"]=o),r}async _getAppCheckToken(){var e;if(mr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&ZN(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function dd(t){return qa(t)}class uT{constructor(e){this.auth=e,this.observer=null,this.addObserver=B9(r=>this.observer=r)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let by={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TL(t){by=t}function wL(t){return by.loadJS(t)}function xL(){return by.gapiScript}function EL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t,e){const r=fy(t,"auth");if(r.isInitialized()){const o=r.getImmediate(),l=r.getOptions();if(Lo(l,e??{}))return o;Xr(o,"already-initialized")}return r.initialize({options:e})}function _L(t,e){const r=(e==null?void 0:e.persistence)||[],a=(Array.isArray(r)?r:[r]).map(Ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function CL(t,e,r){const a=dd(t);Tt(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,l=t5(e),{host:c,port:d}=OL(e),p=d===null?"":`:${d}`,m={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){Tt(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),Tt(Lo(m,a.config.emulator)&&Lo(y,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=m,a.emulatorConfig=y,a.settings.appVerificationDisabledForTesting=!0,RL()}function t5(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OL(t){const e=t5(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const a=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const l=o[1];return{host:l,port:cT(a.substr(l.length+1))}}else{const[l,c]=a.split(":");return{host:l,port:cT(c)}}}function cT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RL(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Ci("not implemented")}_getIdTokenResponse(e){return Ci("not implemented")}_linkToIdToken(e,r){return Ci("not implemented")}_getReauthenticationResolver(e){return Ci("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return iL(t,"POST","/v1/accounts:signInWithIdp",gy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL="http://localhost";class Io extends e5{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Io(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Xr("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o}=r,l=hy(r,["providerId","signInMethod"]);if(!a||!o)return null;const c=new Io(a,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const r=this.buildRequest();return Hs(e,r)}_linkToIdToken(e,r){const a=this.buildRequest();return a.idToken=r,Hs(e,a)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Hs(e,r)}buildRequest(){const e={requestUri:kL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=hc(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends Sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends pc{constructor(){super("facebook.com")}static credential(e){return Io._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends pc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Io._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:a}=e;if(!r&&!a)return null;try{return _i.credential(r,a)}catch{return null}}}_i.GOOGLE_SIGN_IN_METHOD="google.com";_i.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends pc{constructor(){super("github.com")}static credential(e){return Io._fromParams({providerId:Pa.PROVIDER_ID,signInMethod:Pa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pa.credentialFromTaggedObject(e)}static credentialFromError(e){return Pa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pa.credential(e.oauthAccessToken)}catch{return null}}}Pa.GITHUB_SIGN_IN_METHOD="github.com";Pa.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends pc{constructor(){super("twitter.com")}static credential(e,r){return Io._fromParams({providerId:Na.PROVIDER_ID,signInMethod:Na.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Na.credentialFromTaggedObject(e)}static credentialFromError(e){return Na.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:a}=e;if(!r||!a)return null;try{return Na.credential(r,a)}catch{return null}}}Na.TWITTER_SIGN_IN_METHOD="twitter.com";Na.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,a,o=!1){const l=await Oi._fromIdTokenResponse(e,a,o),c=fT(a);return new Ks({user:l,providerId:c,_tokenResponse:a,operationType:r})}static async _forOperation(e,r,a){await e._updateTokensIfNecessary(a,!0);const o=fT(a);return new Ks({user:e,providerId:o,_tokenResponse:a,operationType:r})}}function fT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends qi{constructor(e,r,a,o){var l;super(r.code,r.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Uh.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:r.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,r,a,o){return new Uh(e,r,a,o)}}function n5(t,e,r,a){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Uh._fromErrorAndOperation(t,l,e,a):l})}async function DL(t,e,r=!1){const a=await Wu(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ks._forOperation(t,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ML(t,e,r=!1){const{auth:a}=t;if(mr(a.app))return Promise.reject(Mo(a));const o="reauthenticate";try{const l=await Wu(t,n5(a,o,e,t),r);Tt(l.idToken,a,"internal-error");const c=yy(l.idToken);Tt(c,a,"internal-error");const{sub:d}=c;return Tt(t.uid===d,a,"user-mismatch"),Ks._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Xr(a,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PL(t,e,r=!1){if(mr(t.app))return Promise.reject(Mo(t));const a="signIn",o=await n5(t,a,e),l=await Ks._fromIdTokenResponse(t,a,o);return r||await t._updateCurrentUser(l.user),l}function NL(t,e,r,a){return qa(t).onIdTokenChanged(e,r,a)}function LL(t,e,r){return qa(t).beforeAuthStateChanged(e,r)}function zL(t,e,r,a){return qa(t).onAuthStateChanged(e,r,a)}function IL(t){return qa(t).signOut()}const Bh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Bh,"1"),this.storage.removeItem(Bh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=1e3,BL=10;class i5 extends r5{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=QE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const a=this.storage.getItem(r),o=this.localCache[r];a!==o&&e(r,o,a)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const a=e.key;r?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(a);!r&&this.localCache[a]===c||this.notifyListeners(a,c)},l=this.storage.getItem(a);mL()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,BL):o()}notifyListeners(e,r){this.localCache[e]=r;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:a}),!0)})},UL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}i5.type="LOCAL";const jL=i5;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5 extends r5{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}a5.type="SESSION";const o5=a5;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(o=>o.isListeningto(e));if(r)return r;const a=new pd(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:a,eventType:o,data:l}=r.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;r.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const d=Array.from(c).map(async m=>m(r.origin,l)),p=await VL(d);r.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:p})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t="",e=10){let r="";for(let a=0;a<e;a++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const m=Ty("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},a);c={messageChannel:o,onMessage(b){const A=b;if(A.data.eventId===m)switch(A.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(A.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:r},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){return window}function qL(t){Gr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(){return typeof Gr().WorkerGlobalScope<"u"&&typeof Gr().importScripts=="function"}async function $L(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GL(){return s5()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l5="firebaseLocalStorageDb",YL=1,jh="firebaseLocalStorage",u5="fbase_key";class mc{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function md(t,e){return t.transaction([jh],e?"readwrite":"readonly").objectStore(jh)}function XL(){const t=indexedDB.deleteDatabase(l5);return new mc(t).toPromise()}function Qg(){const t=indexedDB.open(l5,YL);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(jh,{keyPath:u5})}catch(o){r(o)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(jh)?e(a):(a.close(),await XL(),e(await Qg()))})})}async function hT(t,e,r){const a=md(t,!0).put({[u5]:e,value:r});return new mc(a).toPromise()}async function KL(t,e){const r=md(t,!1).get(e),a=await new mc(r).toPromise();return a===void 0?null:a.value}function dT(t,e){const r=md(t,!0).delete(e);return new mc(r).toPromise()}const WL=800,ZL=3;class c5{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qg(),this.db)}async _withRetries(e){let r=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(r++>ZL)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s5()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pd._getInstance(GL()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await $L(),!this.activeServiceWorker)return;this.sender=new HL(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((r=a[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qg();return await hT(e,Bh,"1"),await dT(e,Bh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(a=>hT(a,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(a=>KL(a,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>dT(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=md(o,!1).getAll();return new mc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),r.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),r.push(o));return r}notifyListeners(e,r){this.localCache[e]=r;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c5.type="LOCAL";const QL=c5;new dc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f5(t,e){return e?Ri(e):(Tt(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends e5{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Hs(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function JL(t){return PL(t.auth,new wy(t),t.bypassAuthState)}function tz(t){const{auth:e,user:r}=t;return Tt(r,e,"internal-error"),ML(r,new wy(t),t.bypassAuthState)}async function ez(t){const{auth:e,user:r}=t;return Tt(r,e,"internal-error"),DL(r,new wy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5{constructor(e,r,a,o,l=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:a,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:r,sessionId:a,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JL;case"linkViaPopup":case"linkViaRedirect":return ez;case"reauthViaPopup":case"reauthViaRedirect":return tz;default:Xr(this.auth,"internal-error")}}resolve(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nz=new dc(2e3,1e4);async function pT(t,e,r){if(mr(t.app))return Promise.reject(vr(t,"operation-not-supported-in-this-environment"));const a=dd(t);QN(t,e,Sy);const o=f5(a,r);return new Oo(a,"signInViaPopup",e,o).executeNotNull()}class Oo extends h5{constructor(e,r,a,o,l){super(e,r,o,l),this.provider=a,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Tt(e,this.auth,"internal-error"),e}async onExecution(){Bi(this.filter.length===1,"Popup operations only handle one event");const e=Ty();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,a;if(!((a=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nz.get())};e()}}Oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz="pendingRedirect",vh=new Map;class iz extends h5{constructor(e,r,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a),this.eventId=null}async execute(){let e=vh.get(this.auth._key());if(!e){try{const a=await az(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(r){e=()=>Promise.reject(r)}vh.set(this.auth._key(),e)}return this.bypassAuthState||vh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function az(t,e){const r=lz(e),a=sz(t);if(!await a._isAvailable())return!1;const o=await a._get(r)==="true";return await a._remove(r),o}function oz(t,e){vh.set(t._key(),e)}function sz(t){return Ri(t._redirectPersistence)}function lz(t){return yh(rz,t.config.apiKey,t.name)}async function uz(t,e,r=!1){if(mr(t.app))return Promise.reject(Mo(t));const a=dd(t),o=f5(a,e),c=await new iz(a,o,r).execute();return c&&!r&&(delete c.user._redirectEventId,await a._persistUserIfCurrent(c.user),await a._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cz=10*60*1e3;class fz{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(r=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hz(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var a;if(e.error&&!d5(e)){const o=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";r.onError(vr(this.auth,o))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const a=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cz&&this.cachedEventUids.clear(),this.cachedEventUids.has(mT(e))}saveEventToCache(e){this.cachedEventUids.add(mT(e)),this.lastProcessedEventTime=Date.now()}}function mT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d5({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hz(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d5(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dz(t,e={}){return rl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mz=/^https?/;async function gz(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dz(t);for(const r of e)try{if(yz(r))return}catch{}Xr(t,"unauthorized-domain")}function yz(t){const e=Wg(),{protocol:r,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&a===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&c.hostname===a}if(!mz.test(r))return!1;if(pz.test(t))return a===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vz=new dc(3e4,6e4);function gT(){const t=Gr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function bz(t){return new Promise((e,r)=>{var a,o,l;function c(){gT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gT(),r(vr(t,"network-request-failed"))},timeout:vz.get()})}if(!((o=(a=Gr().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Gr().gapi)===null||l===void 0)&&l.load)c();else{const d=EL("iframefcb");return Gr()[d]=()=>{gapi.load?c():r(vr(t,"network-request-failed"))},wL(`${xL()}?onload=${d}`).catch(p=>r(p))}}).catch(e=>{throw bh=null,e})}let bh=null;function Sz(t){return bh=bh||bz(t),bh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tz=new dc(5e3,15e3),wz="__/auth/iframe",xz="emulator/auth/iframe",Ez={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Az=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _z(t){const e=t.config;Tt(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?my(e,xz):`https://${t.config.authDomain}/${wz}`,a={apiKey:e.apiKey,appName:t.name,v:nl},o=Az.get(t.config.apiHost);o&&(a.eid=o);const l=t._getFrameworks();return l.length&&(a.fw=l.join(",")),`${r}?${hc(a).slice(1)}`}async function Cz(t){const e=await Sz(t),r=Gr().gapi;return Tt(r,t,"internal-error"),e.open({where:document.body,url:_z(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ez,dontclear:!0},a=>new Promise(async(o,l)=>{await a.restyle({setHideOnLeave:!1});const c=vr(t,"network-request-failed"),d=Gr().setTimeout(()=>{l(c)},Tz.get());function p(){Gr().clearTimeout(d),o(a)}a.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oz={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rz=500,kz=600,Dz="_blank",Mz="http://localhost";class yT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pz(t,e,r,a=Rz,o=kz){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const p=Object.assign(Object.assign({},Oz),{width:a.toString(),height:o.toString(),top:l,left:c}),m=hn().toLowerCase();r&&(d=YE(m)?Dz:r),FE(m)&&(e=e||Mz,p.scrollbars="yes");const y=Object.entries(p).reduce((A,[_,x])=>`${A}${_}=${x},`,"");if(pL(m)&&d!=="_self")return Nz(e||"",d),new yT(null);const b=window.open(e||"",d,y);Tt(b,t,"popup-blocked");try{b.focus()}catch{}return new yT(b)}function Nz(t,e){const r=document.createElement("a");r.href=t,r.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lz="__/auth/handler",zz="emulator/auth/handler",Iz=encodeURIComponent("fac");async function vT(t,e,r,a,o,l){Tt(t.config.authDomain,t,"auth-domain-config-required"),Tt(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:a,v:nl,eventId:o};if(e instanceof Sy){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",U9(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries({}))c[y]=b}if(e instanceof pc){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(c.scopes=y.join(","))}t.tenantId&&(c.tid=t.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await t._getAppCheckToken(),m=p?`#${Iz}=${encodeURIComponent(p)}`:"";return`${Uz(t)}?${hc(d).slice(1)}${m}`}function Uz({config:t}){return t.emulator?my(t,zz):`https://${t.authDomain}/${Lz}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="webStorageSupport";class Bz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o5,this._completeRedirectFn=uz,this._overrideRedirectResult=oz}async _openPopup(e,r,a,o){var l;Bi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await vT(e,r,a,Wg(),o);return Pz(e,c,Ty())}async _openRedirect(e,r,a,o){await this._originValidation(e);const l=await vT(e,r,a,Wg(),o);return qL(l),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:o,promise:l}=this.eventManagers[r];return o?Promise.resolve(o):(Bi(l,"If manager is not set, promise should be"),l)}const a=this.initAndGetManager(e);return this.eventManagers[r]={promise:a},a.catch(()=>{delete this.eventManagers[r]}),a}async initAndGetManager(e){const r=await Cz(e),a=new fz(e);return r.register("authEvent",o=>(Tt(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=r,a}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(eg,{type:eg},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[eg];c!==void 0&&r(!!c),Xr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=gz(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return QE()||GE()||vy()}}const jz=Bz;var bT="@firebase/auth",ST="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vz{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hz(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qz(t){Xs(new zo("auth",(e,{options:r})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=a.options;Tt(c&&!c.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:c,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JE(t)},m=new SL(a,o,l,p);return _L(m,r),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,a)=>{e.getProvider("auth-internal").initialize()})),Xs(new zo("auth-internal",e=>{const r=dd(e.getProvider("auth").getImmediate());return(a=>new Vz(a))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ia(bT,ST,Hz(t)),Ia(bT,ST,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $z=5*60,Fz=kE("authIdTokenMaxAge")||$z;let TT=null;const Gz=t=>async e=>{const r=e&&await e.getIdTokenResult(),a=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(a&&a>Fz)return;const o=r==null?void 0:r.token;TT!==o&&(TT=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Yz(t=NE()){const e=fy(t,"auth");if(e.isInitialized())return e.getImmediate();const r=AL(t,{popupRedirectResolver:jz,persistence:[QL,jL,o5]}),a=kE("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(a,location.origin);if(location.origin===l.origin){const c=Gz(l.toString());LL(r,c,()=>c(r.currentUser)),NL(r,d=>c(d))}}const o=OE("auth");return o&&CL(r,`http://${o}`),r}function Xz(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TL({loadJS(t){return new Promise((e,r)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=o=>{const l=vr("internal-error");l.customData=o,r(l)},a.type="text/javascript",a.charset="UTF-8",Xz().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qz("Browser");var Kz="firebase",Wz="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ia(Kz,Wz,"app");var wT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p5;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,k){function R(){}R.prototype=k.prototype,P.D=k.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(S,N,V){for(var L=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)L[vt-2]=arguments[vt];return k.prototype[N].apply(S,L)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,r),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,k,R){R||(R=0);var S=Array(16);if(typeof k=="string")for(var N=0;16>N;++N)S[N]=k.charCodeAt(R++)|k.charCodeAt(R++)<<8|k.charCodeAt(R++)<<16|k.charCodeAt(R++)<<24;else for(N=0;16>N;++N)S[N]=k[R++]|k[R++]<<8|k[R++]<<16|k[R++]<<24;k=P.g[0],R=P.g[1],N=P.g[2];var V=P.g[3],L=k+(V^R&(N^V))+S[0]+3614090360&4294967295;k=R+(L<<7&4294967295|L>>>25),L=V+(N^k&(R^N))+S[1]+3905402710&4294967295,V=k+(L<<12&4294967295|L>>>20),L=N+(R^V&(k^R))+S[2]+606105819&4294967295,N=V+(L<<17&4294967295|L>>>15),L=R+(k^N&(V^k))+S[3]+3250441966&4294967295,R=N+(L<<22&4294967295|L>>>10),L=k+(V^R&(N^V))+S[4]+4118548399&4294967295,k=R+(L<<7&4294967295|L>>>25),L=V+(N^k&(R^N))+S[5]+1200080426&4294967295,V=k+(L<<12&4294967295|L>>>20),L=N+(R^V&(k^R))+S[6]+2821735955&4294967295,N=V+(L<<17&4294967295|L>>>15),L=R+(k^N&(V^k))+S[7]+4249261313&4294967295,R=N+(L<<22&4294967295|L>>>10),L=k+(V^R&(N^V))+S[8]+1770035416&4294967295,k=R+(L<<7&4294967295|L>>>25),L=V+(N^k&(R^N))+S[9]+2336552879&4294967295,V=k+(L<<12&4294967295|L>>>20),L=N+(R^V&(k^R))+S[10]+4294925233&4294967295,N=V+(L<<17&4294967295|L>>>15),L=R+(k^N&(V^k))+S[11]+2304563134&4294967295,R=N+(L<<22&4294967295|L>>>10),L=k+(V^R&(N^V))+S[12]+1804603682&4294967295,k=R+(L<<7&4294967295|L>>>25),L=V+(N^k&(R^N))+S[13]+4254626195&4294967295,V=k+(L<<12&4294967295|L>>>20),L=N+(R^V&(k^R))+S[14]+2792965006&4294967295,N=V+(L<<17&4294967295|L>>>15),L=R+(k^N&(V^k))+S[15]+1236535329&4294967295,R=N+(L<<22&4294967295|L>>>10),L=k+(N^V&(R^N))+S[1]+4129170786&4294967295,k=R+(L<<5&4294967295|L>>>27),L=V+(R^N&(k^R))+S[6]+3225465664&4294967295,V=k+(L<<9&4294967295|L>>>23),L=N+(k^R&(V^k))+S[11]+643717713&4294967295,N=V+(L<<14&4294967295|L>>>18),L=R+(V^k&(N^V))+S[0]+3921069994&4294967295,R=N+(L<<20&4294967295|L>>>12),L=k+(N^V&(R^N))+S[5]+3593408605&4294967295,k=R+(L<<5&4294967295|L>>>27),L=V+(R^N&(k^R))+S[10]+38016083&4294967295,V=k+(L<<9&4294967295|L>>>23),L=N+(k^R&(V^k))+S[15]+3634488961&4294967295,N=V+(L<<14&4294967295|L>>>18),L=R+(V^k&(N^V))+S[4]+3889429448&4294967295,R=N+(L<<20&4294967295|L>>>12),L=k+(N^V&(R^N))+S[9]+568446438&4294967295,k=R+(L<<5&4294967295|L>>>27),L=V+(R^N&(k^R))+S[14]+3275163606&4294967295,V=k+(L<<9&4294967295|L>>>23),L=N+(k^R&(V^k))+S[3]+4107603335&4294967295,N=V+(L<<14&4294967295|L>>>18),L=R+(V^k&(N^V))+S[8]+1163531501&4294967295,R=N+(L<<20&4294967295|L>>>12),L=k+(N^V&(R^N))+S[13]+2850285829&4294967295,k=R+(L<<5&4294967295|L>>>27),L=V+(R^N&(k^R))+S[2]+4243563512&4294967295,V=k+(L<<9&4294967295|L>>>23),L=N+(k^R&(V^k))+S[7]+1735328473&4294967295,N=V+(L<<14&4294967295|L>>>18),L=R+(V^k&(N^V))+S[12]+2368359562&4294967295,R=N+(L<<20&4294967295|L>>>12),L=k+(R^N^V)+S[5]+4294588738&4294967295,k=R+(L<<4&4294967295|L>>>28),L=V+(k^R^N)+S[8]+2272392833&4294967295,V=k+(L<<11&4294967295|L>>>21),L=N+(V^k^R)+S[11]+1839030562&4294967295,N=V+(L<<16&4294967295|L>>>16),L=R+(N^V^k)+S[14]+4259657740&4294967295,R=N+(L<<23&4294967295|L>>>9),L=k+(R^N^V)+S[1]+2763975236&4294967295,k=R+(L<<4&4294967295|L>>>28),L=V+(k^R^N)+S[4]+1272893353&4294967295,V=k+(L<<11&4294967295|L>>>21),L=N+(V^k^R)+S[7]+4139469664&4294967295,N=V+(L<<16&4294967295|L>>>16),L=R+(N^V^k)+S[10]+3200236656&4294967295,R=N+(L<<23&4294967295|L>>>9),L=k+(R^N^V)+S[13]+681279174&4294967295,k=R+(L<<4&4294967295|L>>>28),L=V+(k^R^N)+S[0]+3936430074&4294967295,V=k+(L<<11&4294967295|L>>>21),L=N+(V^k^R)+S[3]+3572445317&4294967295,N=V+(L<<16&4294967295|L>>>16),L=R+(N^V^k)+S[6]+76029189&4294967295,R=N+(L<<23&4294967295|L>>>9),L=k+(R^N^V)+S[9]+3654602809&4294967295,k=R+(L<<4&4294967295|L>>>28),L=V+(k^R^N)+S[12]+3873151461&4294967295,V=k+(L<<11&4294967295|L>>>21),L=N+(V^k^R)+S[15]+530742520&4294967295,N=V+(L<<16&4294967295|L>>>16),L=R+(N^V^k)+S[2]+3299628645&4294967295,R=N+(L<<23&4294967295|L>>>9),L=k+(N^(R|~V))+S[0]+4096336452&4294967295,k=R+(L<<6&4294967295|L>>>26),L=V+(R^(k|~N))+S[7]+1126891415&4294967295,V=k+(L<<10&4294967295|L>>>22),L=N+(k^(V|~R))+S[14]+2878612391&4294967295,N=V+(L<<15&4294967295|L>>>17),L=R+(V^(N|~k))+S[5]+4237533241&4294967295,R=N+(L<<21&4294967295|L>>>11),L=k+(N^(R|~V))+S[12]+1700485571&4294967295,k=R+(L<<6&4294967295|L>>>26),L=V+(R^(k|~N))+S[3]+2399980690&4294967295,V=k+(L<<10&4294967295|L>>>22),L=N+(k^(V|~R))+S[10]+4293915773&4294967295,N=V+(L<<15&4294967295|L>>>17),L=R+(V^(N|~k))+S[1]+2240044497&4294967295,R=N+(L<<21&4294967295|L>>>11),L=k+(N^(R|~V))+S[8]+1873313359&4294967295,k=R+(L<<6&4294967295|L>>>26),L=V+(R^(k|~N))+S[15]+4264355552&4294967295,V=k+(L<<10&4294967295|L>>>22),L=N+(k^(V|~R))+S[6]+2734768916&4294967295,N=V+(L<<15&4294967295|L>>>17),L=R+(V^(N|~k))+S[13]+1309151649&4294967295,R=N+(L<<21&4294967295|L>>>11),L=k+(N^(R|~V))+S[4]+4149444226&4294967295,k=R+(L<<6&4294967295|L>>>26),L=V+(R^(k|~N))+S[11]+3174756917&4294967295,V=k+(L<<10&4294967295|L>>>22),L=N+(k^(V|~R))+S[2]+718787259&4294967295,N=V+(L<<15&4294967295|L>>>17),L=R+(V^(N|~k))+S[9]+3951481745&4294967295,P.g[0]=P.g[0]+k&4294967295,P.g[1]=P.g[1]+(N+(L<<21&4294967295|L>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+V&4294967295}a.prototype.u=function(P,k){k===void 0&&(k=P.length);for(var R=k-this.blockSize,S=this.B,N=this.h,V=0;V<k;){if(N==0)for(;V<=R;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<k;)if(S[N++]=P.charCodeAt(V++),N==this.blockSize){o(this,S),N=0;break}}else for(;V<k;)if(S[N++]=P[V++],N==this.blockSize){o(this,S),N=0;break}}this.h=N,this.o+=k},a.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var k=1;k<P.length-8;++k)P[k]=0;var R=8*this.o;for(k=P.length-8;k<P.length;++k)P[k]=R&255,R/=256;for(this.u(P),P=Array(16),k=R=0;4>k;++k)for(var S=0;32>S;S+=8)P[R++]=this.g[k]>>>S&255;return P};function l(P,k){var R=d;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=k(P)}function c(P,k){this.h=k;for(var R=[],S=!0,N=P.length-1;0<=N;N--){var V=P[N]|0;S&&V==k||(R[N]=V,S=!1)}this.g=R}var d={};function p(P){return-128<=P&&128>P?l(P,function(k){return new c([k|0],0>k?-1:0)}):new c([P|0],0>P?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return b;if(0>P)return C(m(-P));for(var k=[],R=1,S=0;P>=R;S++)k[S]=P/R|0,R*=4294967296;return new c(k,0)}function y(P,k){if(P.length==0)throw Error("number format error: empty string");if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(P.charAt(0)=="-")return C(y(P.substring(1),k));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=m(Math.pow(k,8)),S=b,N=0;N<P.length;N+=8){var V=Math.min(8,P.length-N),L=parseInt(P.substring(N,N+V),k);8>V?(V=m(Math.pow(k,V)),S=S.j(V).add(m(L))):(S=S.j(R),S=S.add(m(L)))}return S}var b=p(0),A=p(1),_=p(16777216);t=c.prototype,t.m=function(){if(w(this))return-C(this).m();for(var P=0,k=1,R=0;R<this.g.length;R++){var S=this.i(R);P+=(0<=S?S:4294967296+S)*k,k*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(x(this))return"0";if(w(this))return"-"+C(this).toString(P);for(var k=m(Math.pow(P,6)),R=this,S="";;){var N=F(R,k).g;R=M(R,N.j(k));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=N,x(R))return V+S;for(;6>V.length;)V="0"+V;S=V+S}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function x(P){if(P.h!=0)return!1;for(var k=0;k<P.g.length;k++)if(P.g[k]!=0)return!1;return!0}function w(P){return P.h==-1}t.l=function(P){return P=M(this,P),w(P)?-1:x(P)?0:1};function C(P){for(var k=P.g.length,R=[],S=0;S<k;S++)R[S]=~P.g[S];return new c(R,~P.h).add(A)}t.abs=function(){return w(this)?C(this):this},t.add=function(P){for(var k=Math.max(this.g.length,P.g.length),R=[],S=0,N=0;N<=k;N++){var V=S+(this.i(N)&65535)+(P.i(N)&65535),L=(V>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);S=L>>>16,V&=65535,L&=65535,R[N]=L<<16|V}return new c(R,R[R.length-1]&-2147483648?-1:0)};function M(P,k){return P.add(C(k))}t.j=function(P){if(x(this)||x(P))return b;if(w(this))return w(P)?C(this).j(C(P)):C(C(this).j(P));if(w(P))return C(this.j(C(P)));if(0>this.l(_)&&0>P.l(_))return m(this.m()*P.m());for(var k=this.g.length+P.g.length,R=[],S=0;S<2*k;S++)R[S]=0;for(S=0;S<this.g.length;S++)for(var N=0;N<P.g.length;N++){var V=this.i(S)>>>16,L=this.i(S)&65535,vt=P.i(N)>>>16,Rt=P.i(N)&65535;R[2*S+2*N]+=L*Rt,j(R,2*S+2*N),R[2*S+2*N+1]+=V*Rt,j(R,2*S+2*N+1),R[2*S+2*N+1]+=L*vt,j(R,2*S+2*N+1),R[2*S+2*N+2]+=V*vt,j(R,2*S+2*N+2)}for(S=0;S<k;S++)R[S]=R[2*S+1]<<16|R[2*S];for(S=k;S<2*k;S++)R[S]=0;return new c(R,0)};function j(P,k){for(;(P[k]&65535)!=P[k];)P[k+1]+=P[k]>>>16,P[k]&=65535,k++}function U(P,k){this.g=P,this.h=k}function F(P,k){if(x(k))throw Error("division by zero");if(x(P))return new U(b,b);if(w(P))return k=F(C(P),k),new U(C(k.g),C(k.h));if(w(k))return k=F(P,C(k)),new U(C(k.g),k.h);if(30<P.g.length){if(w(P)||w(k))throw Error("slowDivide_ only works with positive integers.");for(var R=A,S=k;0>=S.l(P);)R=z(R),S=z(S);var N=W(R,1),V=W(S,1);for(S=W(S,2),R=W(R,2);!x(S);){var L=V.add(S);0>=L.l(P)&&(N=N.add(R),V=L),S=W(S,1),R=W(R,1)}return k=M(P,N.j(k)),new U(N,k)}for(N=b;0<=P.l(k);){for(R=Math.max(1,Math.floor(P.m()/k.m())),S=Math.ceil(Math.log(R)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),V=m(R),L=V.j(k);w(L)||0<L.l(P);)R-=S,V=m(R),L=V.j(k);x(V)&&(V=A),N=N.add(V),P=M(P,L)}return new U(N,P)}t.A=function(P){return F(this,P).h},t.and=function(P){for(var k=Math.max(this.g.length,P.g.length),R=[],S=0;S<k;S++)R[S]=this.i(S)&P.i(S);return new c(R,this.h&P.h)},t.or=function(P){for(var k=Math.max(this.g.length,P.g.length),R=[],S=0;S<k;S++)R[S]=this.i(S)|P.i(S);return new c(R,this.h|P.h)},t.xor=function(P){for(var k=Math.max(this.g.length,P.g.length),R=[],S=0;S<k;S++)R[S]=this.i(S)^P.i(S);return new c(R,this.h^P.h)};function z(P){for(var k=P.g.length+1,R=[],S=0;S<k;S++)R[S]=P.i(S)<<1|P.i(S-1)>>>31;return new c(R,P.h)}function W(P,k){var R=k>>5;k%=32;for(var S=P.g.length-R,N=[],V=0;V<S;V++)N[V]=0<k?P.i(V+R)>>>k|P.i(V+R+1)<<32-k:P.i(V+R);return new c(N,P.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=m,c.fromString=y,p5=c}).apply(typeof wT<"u"?wT:typeof self<"u"?self:typeof window<"u"?window:{});var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,v,T){return f==Array.prototype||f==Object.prototype||(f[v]=T.value),f};function r(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qf=="object"&&Qf];for(var v=0;v<f.length;++v){var T=f[v];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var a=r(this);function o(f,v){if(v)t:{var T=a;f=f.split(".");for(var D=0;D<f.length-1;D++){var Y=f[D];if(!(Y in T))break t;T=T[Y]}f=f[f.length-1],D=T[f],v=v(D),v!=D&&v!=null&&e(T,f,{configurable:!0,writable:!0,value:v})}}function l(f,v){f instanceof String&&(f+="");var T=0,D=!1,Y={next:function(){if(!D&&T<f.length){var Z=T++;return{value:v(Z,f[Z]),done:!1}}return D=!0,{done:!0,value:void 0}}};return Y[Symbol.iterator]=function(){return Y},Y}o("Array.prototype.values",function(f){return f||function(){return l(this,function(v,T){return T})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(f){var v=typeof f;return v=v!="object"?v:f?Array.isArray(f)?"array":v:"null",v=="array"||v=="object"&&typeof f.length=="number"}function m(f){var v=typeof f;return v=="object"&&f!=null||v=="function"}function y(f,v,T){return f.call.apply(f.bind,arguments)}function b(f,v,T){if(!f)throw Error();if(2<arguments.length){var D=Array.prototype.slice.call(arguments,2);return function(){var Y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Y,D),f.apply(v,Y)}}return function(){return f.apply(v,arguments)}}function A(f,v,T){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:b,A.apply(null,arguments)}function _(f,v){var T=Array.prototype.slice.call(arguments,1);return function(){var D=T.slice();return D.push.apply(D,arguments),f.apply(this,D)}}function x(f,v){function T(){}T.prototype=v.prototype,f.aa=v.prototype,f.prototype=new T,f.prototype.constructor=f,f.Qb=function(D,Y,Z){for(var st=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)st[Ft-2]=arguments[Ft];return v.prototype[Y].apply(D,st)}}function w(f){const v=f.length;if(0<v){const T=Array(v);for(let D=0;D<v;D++)T[D]=f[D];return T}return[]}function C(f,v){for(let T=1;T<arguments.length;T++){const D=arguments[T];if(p(D)){const Y=f.length||0,Z=D.length||0;f.length=Y+Z;for(let st=0;st<Z;st++)f[Y+st]=D[st]}else f.push(D)}}class M{constructor(v,T){this.i=v,this.j=T,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function j(f){return/^[\s\xa0]*$/.test(f)}function U(){var f=d.navigator;return f&&(f=f.userAgent)?f:""}function F(f){return F[" "](f),f}F[" "]=function(){};var z=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function W(f,v,T){for(const D in f)v.call(T,f[D],D,f)}function P(f,v){for(const T in f)v.call(void 0,f[T],T,f)}function k(f){const v={};for(const T in f)v[T]=f[T];return v}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(f,v){let T,D;for(let Y=1;Y<arguments.length;Y++){D=arguments[Y];for(T in D)f[T]=D[T];for(let Z=0;Z<R.length;Z++)T=R[Z],Object.prototype.hasOwnProperty.call(D,T)&&(f[T]=D[T])}}function N(f){var v=1;f=f.split(":");const T=[];for(;0<v&&f.length;)T.push(f.shift()),v--;return f.length&&T.push(f.join(":")),T}function V(f){d.setTimeout(()=>{throw f},0)}function L(){var f=yt;let v=null;return f.g&&(v=f.g,f.g=f.g.next,f.g||(f.h=null),v.next=null),v}class vt{constructor(){this.h=this.g=null}add(v,T){const D=Rt.get();D.set(v,T),this.h?this.h.next=D:this.g=D,this.h=D}}var Rt=new M(()=>new ot,f=>f.reset());class ot{constructor(){this.next=this.g=this.h=null}set(v,T){this.h=v,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,ut=!1,yt=new vt,H=()=>{const f=d.Promise.resolve(void 0);lt=()=>{f.then(it)}};var it=()=>{for(var f;f=L();){try{f.h.call(f.g)}catch(T){V(T)}var v=Rt;v.j(f),100>v.h&&(v.h++,f.next=v.g,v.g=f)}ut=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(f,v){this.type=f,this.g=this.target=v,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var ft=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var f=!1,v=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const T=()=>{};d.addEventListener("test",T,v),d.removeEventListener("test",T,v)}catch{}return f}();function At(f,v){if(ct.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var T=this.type=f.type,D=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=v,v=f.relatedTarget){if(z){t:{try{F(v.nodeName);var Y=!0;break t}catch{}Y=!1}Y||(v=null)}}else T=="mouseover"?v=f.fromElement:T=="mouseout"&&(v=f.toElement);this.relatedTarget=v,D?(this.clientX=D.clientX!==void 0?D.clientX:D.pageX,this.clientY=D.clientY!==void 0?D.clientY:D.pageY,this.screenX=D.screenX||0,this.screenY=D.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:xt[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&At.aa.h.call(this)}}x(At,ct);var xt={2:"touch",3:"pen",4:"mouse"};At.prototype.h=function(){At.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var pe="closure_listenable_"+(1e6*Math.random()|0),Lt=0;function ie(f,v,T,D,Y){this.listener=f,this.proxy=null,this.src=v,this.type=T,this.capture=!!D,this.ha=Y,this.key=++Lt,this.da=this.fa=!1}function Ht(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function Fe(f){this.src=f,this.g={},this.h=0}Fe.prototype.add=function(f,v,T,D,Y){var Z=f.toString();f=this.g[Z],f||(f=this.g[Z]=[],this.h++);var st=dn(f,v,D,Y);return-1<st?(v=f[st],T||(v.fa=!1)):(v=new ie(v,this.src,Z,!!D,Y),v.fa=T,f.push(v)),v};function ir(f,v){var T=v.type;if(T in f.g){var D=f.g[T],Y=Array.prototype.indexOf.call(D,v,void 0),Z;(Z=0<=Y)&&Array.prototype.splice.call(D,Y,1),Z&&(Ht(v),f.g[T].length==0&&(delete f.g[T],f.h--))}}function dn(f,v,T,D){for(var Y=0;Y<f.length;++Y){var Z=f[Y];if(!Z.da&&Z.listener==v&&Z.capture==!!T&&Z.ha==D)return Y}return-1}var zn="closure_lm_"+(1e6*Math.random()|0),Sr={};function ar(f,v,T,D,Y){if(Array.isArray(v)){for(var Z=0;Z<v.length;Z++)ar(f,v[Z],T,D,Y);return null}return T=xc(T),f&&f[pe]?f.K(v,T,m(D)?!!D.capture:!1,Y):Tr(f,v,T,!1,D,Y)}function Tr(f,v,T,D,Y,Z){if(!v)throw Error("Invalid event type");var st=m(Y)?!!Y.capture:!!Y,Ft=ol(f);if(Ft||(f[zn]=Ft=new Fe(f)),T=Ft.add(v,T,D,st,Z),T.proxy)return T;if(D=In(),T.proxy=D,D.src=f,D.listener=T,f.addEventListener)ft||(Y=st),Y===void 0&&(Y=!1),f.addEventListener(v.toString(),D,Y);else if(f.attachEvent)f.attachEvent(Fi(v.toString()),D);else if(f.addListener&&f.removeListener)f.addListener(D);else throw Error("addEventListener and attachEvent are unavailable.");return T}function In(){function f(T){return v.call(f.src,f.listener,T)}const v=Et;return f}function $i(f,v,T,D,Y){if(Array.isArray(v))for(var Z=0;Z<v.length;Z++)$i(f,v[Z],T,D,Y);else D=m(D)?!!D.capture:!!D,T=xc(T),f&&f[pe]?(f=f.i,v=String(v).toString(),v in f.g&&(Z=f.g[v],T=dn(Z,T,D,Y),-1<T&&(Ht(Z[T]),Array.prototype.splice.call(Z,T,1),Z.length==0&&(delete f.g[v],f.h--)))):f&&(f=ol(f))&&(v=f.g[v.toString()],f=-1,v&&(f=dn(v,T,D,Y)),(T=-1<f?v[f]:null)&&wr(T))}function wr(f){if(typeof f!="number"&&f&&!f.da){var v=f.src;if(v&&v[pe])ir(v.i,f);else{var T=f.type,D=f.proxy;v.removeEventListener?v.removeEventListener(T,D,f.capture):v.detachEvent?v.detachEvent(Fi(T),D):v.addListener&&v.removeListener&&v.removeListener(D),(T=ol(v))?(ir(T,f),T.h==0&&(T.src=null,v[zn]=null)):Ht(f)}}}function Fi(f){return f in Sr?Sr[f]:Sr[f]="on"+f}function Et(f,v){if(f.da)f=!0;else{v=new At(v,this);var T=f.listener,D=f.ha||f.src;f.fa&&wr(f),f=T.call(D,v)}return f}function ol(f){return f=f[zn],f instanceof Fe?f:null}var pn="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(f){return typeof f=="function"?f:(f[pn]||(f[pn]=function(v){return f.handleEvent(v)}),f[pn])}function De(){dt.call(this),this.i=new Fe(this),this.M=this,this.F=null}x(De,dt),De.prototype[pe]=!0,De.prototype.removeEventListener=function(f,v,T,D){$i(this,f,v,T,D)};function ze(f,v){var T,D=f.F;if(D)for(T=[];D;D=D.F)T.push(D);if(f=f.M,D=v.type||v,typeof v=="string")v=new ct(v,f);else if(v instanceof ct)v.target=v.target||f;else{var Y=v;v=new ct(D,f),S(v,Y)}if(Y=!0,T)for(var Z=T.length-1;0<=Z;Z--){var st=v.g=T[Z];Y=Zr(st,D,!0,v)&&Y}if(st=v.g=f,Y=Zr(st,D,!0,v)&&Y,Y=Zr(st,D,!1,v)&&Y,T)for(Z=0;Z<T.length;Z++)st=v.g=T[Z],Y=Zr(st,D,!1,v)&&Y}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var f=this.i,v;for(v in f.g){for(var T=f.g[v],D=0;D<T.length;D++)Ht(T[D]);delete f.g[v],f.h--}}this.F=null},De.prototype.K=function(f,v,T,D){return this.i.add(String(f),v,!1,T,D)},De.prototype.L=function(f,v,T,D){return this.i.add(String(f),v,!0,T,D)};function Zr(f,v,T,D){if(v=f.i.g[String(v)],!v)return!0;v=v.concat();for(var Y=!0,Z=0;Z<v.length;++Z){var st=v[Z];if(st&&!st.da&&st.capture==T){var Ft=st.listener,ae=st.ha||st.src;st.fa&&ir(f.i,st),Y=Ft.call(ae,D)!==!1&&Y}}return Y&&!D.defaultPrevented}function Ec(f,v,T){if(typeof f=="function")T&&(f=A(f,T));else if(f&&typeof f.handleEvent=="function")f=A(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:d.setTimeout(f,v||0)}function sl(f){f.g=Ec(()=>{f.g=null,f.i&&(f.i=!1,sl(f))},f.l);const v=f.h;f.h=null,f.m.apply(null,v)}class Ed extends dt{constructor(v,T){super(),this.m=v,this.l=T,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:sl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $a(f){dt.call(this),this.h=f,this.g={}}x($a,dt);var Gi=[];function Ze(f){W(f.g,function(v,T){this.g.hasOwnProperty(T)&&wr(v)},f),f.g={}}$a.prototype.N=function(){$a.aa.N.call(this),Ze(this)},$a.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ll=d.JSON.stringify,xr=d.JSON.parse,on=class{stringify(f){return d.JSON.stringify(f,void 0)}parse(f){return d.JSON.parse(f,void 0)}};function ul(){}ul.prototype.h=null;function Ac(f){return f.h||(f.h=f.i())}function Ad(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yi(){ct.call(this,"d")}x(Yi,ct);function or(){ct.call(this,"c")}x(or,ct);var sr={},Xi=null;function cl(){return Xi=Xi||new De}sr.La="serverreachability";function fl(f){ct.call(this,sr.La,f)}x(fl,ct);function Ki(f){const v=cl();ze(v,new fl(v))}sr.STAT_EVENT="statevent";function Vo(f,v){ct.call(this,sr.STAT_EVENT,f),this.stat=v}x(Vo,ct);function xe(f){const v=cl();ze(v,new Vo(v,f))}sr.Ma="timingevent";function _c(f,v){ct.call(this,sr.Ma,f),this.size=v}x(_c,ct);function Wi(f,v){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){f()},v)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function Cc(f,v,T,D,Y,Z){f.info(function(){if(f.g)if(Z)for(var st="",Ft=Z.split("&"),ae=0;ae<Ft.length;ae++){var zt=Ft[ae].split("=");if(1<zt.length){var je=zt[0];zt=zt[1];var Ve=je.split("_");st=2<=Ve.length&&Ve[1]=="type"?st+(je+"="+zt+"&"):st+(je+"=redacted&")}}else st=null;else st=Z;return"XMLHTTP REQ ("+D+") [attempt "+Y+"]: "+v+`
`+T+`
`+st})}function Oc(f,v,T,D,Y,Z,st){f.info(function(){return"XMLHTTP RESP ("+D+") [ attempt "+Y+"]: "+v+`
`+T+`
`+Z+" "+st})}function Qi(f,v,T,D){f.info(function(){return"XMLHTTP TEXT ("+v+"): "+Ie(f,T)+(D?" "+D:"")})}function Ar(f,v){f.info(function(){return"TIMEOUT: "+v})}Zi.prototype.info=function(){};function Ie(f,v){if(!f.g)return v;if(!v)return null;try{var T=JSON.parse(v);if(T){for(f=0;f<T.length;f++)if(Array.isArray(T[f])){var D=T[f];if(!(2>D.length)){var Y=D[1];if(Array.isArray(Y)&&!(1>Y.length)){var Z=Y[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var st=1;st<Y.length;st++)Y[st]=""}}}}return ll(T)}catch{return v}}var Ue={NO_ERROR:0,TIMEOUT:8},Ji={},Fa;function Ho(){}x(Ho,ul),Ho.prototype.g=function(){return new XMLHttpRequest},Ho.prototype.i=function(){return{}},Fa=new Ho;function _r(f,v,T,D){this.j=f,this.i=v,this.l=T,this.R=D||1,this.U=new $a(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var ta={},Ga={};function lr(f,v,T){f.L=1,f.v=Ka(me(v)),f.m=T,f.P=!0,Qr(f,null)}function Qr(f,v){f.F=Date.now(),le(f),f.A=me(f.v);var T=f.A,D=f.R;Array.isArray(D)||(D=[String(D)]),ei(T.i,"t",D),f.C=0,T=f.j.J,f.h=new hl,f.g=Hc(f.j,T?v:null,!f.m),0<f.O&&(f.M=new Ed(A(f.Y,f,f.g),f.O)),v=f.U,T=f.g,D=f.ca;var Y="readystatechange";Array.isArray(Y)||(Y&&(Gi[0]=Y.toString()),Y=Gi);for(var Z=0;Z<Y.length;Z++){var st=ar(T,Y[Z],D||v.handleEvent,!1,v.h||v);if(!st)break;v.g[st.key]=st}v=f.H?k(f.H):{},f.m?(f.u||(f.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,v)):(f.u="GET",f.g.ea(f.A,f.u,null,v)),Ki(),Cc(f.i,f.u,f.A,f.l,f.R,f.m)}_r.prototype.ca=function(f){f=f.target;const v=this.M;v&&Hn(f)==3?v.j():this.Y(f)},_r.prototype.Y=function(f){try{if(f==this.g)t:{const Ve=Hn(this.g);var v=this.g.Ba();const ai=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Ve!=4||v==7||(v==8||0>=ai?Ki(3):Ki(2)),qo(this);var T=this.g.Z();this.X=T;e:if(ea(this)){var D=Nc(this.g);f="";var Y=D.length,Z=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),xn(this);var st="";break e}this.h.i=new d.TextDecoder}for(v=0;v<Y;v++)this.h.h=!0,f+=this.h.i.decode(D[v],{stream:!(Z&&v==Y-1)});D.length=0,this.h.g+=f,this.C=0,st=this.h.g}else st=this.g.oa();if(this.o=T==200,Oc(this.i,this.u,this.A,this.l,this.R,Ve,T),this.o){if(this.T&&!this.K){e:{if(this.g){var Ft,ae=this.g;if((Ft=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ft)){var zt=Ft;break e}}zt=null}if(T=zt)Qi(this.i,this.l,T,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,En(this,T);else{this.o=!1,this.s=3,xe(12),mn(this),xn(this);break t}}if(this.P){T=!0;let yn;for(;!this.J&&this.C<st.length;)if(yn=na(this,st),yn==Ga){Ve==4&&(this.s=4,xe(14),T=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==ta){this.s=4,xe(15),Qi(this.i,this.l,st,"[Invalid Chunk]"),T=!1;break}else Qi(this.i,this.l,yn,null),En(this,yn);if(ea(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||st.length!=0||this.h.h||(this.s=1,xe(16),T=!1),this.o=this.o&&T,!T)Qi(this.i,this.l,st,"[Invalid Chunked Response]"),mn(this),xn(this);else if(0<st.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+st.length),no(je),je.M=!0,xe(11))}}else Qi(this.i,this.l,st,null),En(this,st);Ve==4&&mn(this),this.o&&!this.J&&(Ve==4?Bc(this.j,this):(this.o=!1,le(this)))}else Dd(this.g),T==400&&0<st.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),mn(this),xn(this)}}}catch{}finally{}};function ea(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function na(f,v){var T=f.C,D=v.indexOf(`
`,T);return D==-1?Ga:(T=Number(v.substring(T,D)),isNaN(T)?ta:(D+=1,D+T>v.length?Ga:(v=v.slice(D,D+T),f.C=D+T,v)))}_r.prototype.cancel=function(){this.J=!0,mn(this)};function le(f){f.S=Date.now()+f.I,dl(f,f.I)}function dl(f,v){if(f.B!=null)throw Error("WatchDog timer not null");f.B=Wi(A(f.ba,f),v)}function qo(f){f.B&&(d.clearTimeout(f.B),f.B=null)}_r.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(Ar(this.i,this.A),this.L!=2&&(Ki(),xe(17)),mn(this),this.s=2,xn(this)):dl(this,this.S-f)};function xn(f){f.j.G==0||f.J||Bc(f.j,f)}function mn(f){qo(f);var v=f.M;v&&typeof v.ma=="function"&&v.ma(),f.M=null,Ze(f.U),f.g&&(v=f.g,f.g=null,v.abort(),v.ma())}function En(f,v){try{var T=f.j;if(T.G!=0&&(T.g==f||ra(T.h,f))){if(!f.K&&ra(T.h,f)&&T.G==3){try{var D=T.Da.g.parse(v)}catch{D=null}if(Array.isArray(D)&&D.length==3){var Y=D;if(Y[0]==0){t:if(!T.u){if(T.g)if(T.g.F+3e3<f.F)Jo(T),Zo(T);else break t;El(T),xe(18)}}else T.za=Y[1],0<T.za-T.T&&37500>Y[2]&&T.F&&T.v==0&&!T.C&&(T.C=Wi(A(T.Za,T),6e3));if(1>=Rc(T.h)&&T.ca){try{T.ca()}catch{}T.ca=void 0}}else ii(T,11)}else if((f.K||T.g==f)&&Jo(T),!j(v))for(Y=T.Da.g.parse(v),v=0;v<Y.length;v++){let zt=Y[v];if(T.T=zt[0],zt=zt[1],T.G==2)if(zt[0]=="c"){T.K=zt[1],T.ia=zt[2];const je=zt[3];je!=null&&(T.la=je,T.j.info("VER="+T.la));const Ve=zt[4];Ve!=null&&(T.Aa=Ve,T.j.info("SVER="+T.Aa));const ai=zt[5];ai!=null&&typeof ai=="number"&&0<ai&&(D=1.5*ai,T.L=D,T.j.info("backChannelRequestTimeoutMs_="+D)),D=T;const yn=f.g;if(yn){const Mr=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mr){var Z=D.h;Z.g||Mr.indexOf("spdy")==-1&&Mr.indexOf("quic")==-1&&Mr.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(ia(Z,Z.h),Z.h=null))}if(D.D){const oi=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;oi&&(D.ya=oi,Bt(D.I,D.D,oi))}}T.G=3,T.l&&T.l.ua(),T.ba&&(T.R=Date.now()-f.F,T.j.info("Handshake RTT: "+T.R+"ms")),D=T;var st=f;if(D.qa=Vc(D,D.J?D.ia:null,D.W),st.K){Un(D.h,st);var Ft=st,ae=D.L;ae&&(Ft.I=ae),Ft.B&&(qo(Ft),le(Ft)),D.g=st}else Ic(D);0<T.i.length&&Qo(T)}else zt[0]!="stop"&&zt[0]!="close"||ii(T,7);else T.G==3&&(zt[0]=="stop"||zt[0]=="close"?zt[0]=="stop"?ii(T,7):wl(T):zt[0]!="noop"&&T.l&&T.l.ta(zt),T.v=0)}}Ki(4)}catch{}}var _d=class{constructor(f,v){this.g=f,this.map=v}};function pl(f){this.l=f||10,d.PerformanceNavigationTiming?(f=d.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ml(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function Rc(f){return f.h?1:f.g?f.g.size:0}function ra(f,v){return f.h?f.h==v:f.g?f.g.has(v):!1}function ia(f,v){f.g?f.g.add(v):f.h=v}function Un(f,v){f.h&&f.h==v?f.h=null:f.g&&f.g.has(v)&&f.g.delete(v)}pl.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function sn(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let v=f.i;for(const T of f.g.values())v=v.concat(T.D);return v}return w(f.i)}function kc(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(p(f)){for(var v=[],T=f.length,D=0;D<T;D++)v.push(f[D]);return v}v=[],T=0;for(D in f)v[T++]=f[D];return v}function Cd(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(p(f)||typeof f=="string"){var v=[];f=f.length;for(var T=0;T<f;T++)v.push(T);return v}v=[],T=0;for(const D in f)v[T++]=D;return v}}}function Ya(f,v){if(f.forEach&&typeof f.forEach=="function")f.forEach(v,void 0);else if(p(f)||typeof f=="string")Array.prototype.forEach.call(f,v,void 0);else for(var T=Cd(f),D=kc(f),Y=D.length,Z=0;Z<Y;Z++)v.call(void 0,D[Z],T&&T[Z],f)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $o(f,v){if(f){f=f.split("&");for(var T=0;T<f.length;T++){var D=f[T].indexOf("="),Y=null;if(0<=D){var Z=f[T].substring(0,D);Y=f[T].substring(D+1)}else Z=f[T];v(Z,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Jr(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof Jr){this.h=f.h,aa(this,f.j),this.o=f.o,this.g=f.g,Xa(this,f.s),this.l=f.l;var v=f.i,T=new Cr;T.i=v.i,v.g&&(T.g=new Map(v.g),T.h=v.h),Fo(this,T),this.m=f.m}else f&&(v=String(f).match(gl))?(this.h=!1,aa(this,v[1]||"",!0),this.o=oa(v[2]||""),this.g=oa(v[3]||"",!0),Xa(this,v[4]),this.l=oa(v[5]||"",!0),Fo(this,v[6]||"",!0),this.m=oa(v[7]||"")):(this.h=!1,this.i=new Cr(null,this.h))}Jr.prototype.toString=function(){var f=[],v=this.j;v&&f.push(Bn(v,yl,!0),":");var T=this.g;return(T||v=="file")&&(f.push("//"),(v=this.o)&&f.push(Bn(v,yl,!0),"@"),f.push(encodeURIComponent(String(T)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.s,T!=null&&f.push(":",String(T))),(T=this.l)&&(this.g&&T.charAt(0)!="/"&&f.push("/"),f.push(Bn(T,T.charAt(0)=="/"?vl:Dc,!0))),(T=this.i.toString())&&f.push("?",T),(T=this.m)&&f.push("#",Bn(T,kd)),f.join("")};function me(f){return new Jr(f)}function aa(f,v,T){f.j=T?oa(v,!0):v,f.j&&(f.j=f.j.replace(/:$/,""))}function Xa(f,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);f.s=v}else f.s=null}function Fo(f,v,T){v instanceof Cr?(f.i=v,bl(f.i,f.h)):(T||(v=Bn(v,Rd)),f.i=new Cr(v,f.h))}function Bt(f,v,T){f.i.set(v,T)}function Ka(f){return Bt(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function oa(f,v){return f?v?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Bn(f,v,T){return typeof f=="string"?(f=encodeURI(f).replace(v,Od),T&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function Od(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var yl=/[#\/\?@]/g,Dc=/[#\?:]/g,vl=/[#\?]/g,Rd=/[#\?@]/g,kd=/#/g;function Cr(f,v){this.h=this.g=null,this.i=f||null,this.j=!!v}function jn(f){f.g||(f.g=new Map,f.h=0,f.i&&$o(f.i,function(v,T){f.add(decodeURIComponent(v.replace(/\+/g," ")),T)}))}t=Cr.prototype,t.add=function(f,v){jn(this),this.i=null,f=ni(this,f);var T=this.g.get(f);return T||this.g.set(f,T=[]),T.push(v),this.h+=1,this};function Go(f,v){jn(f),v=ni(f,v),f.g.has(v)&&(f.i=null,f.h-=f.g.get(v).length,f.g.delete(v))}function ti(f,v){return jn(f),v=ni(f,v),f.g.has(v)}t.forEach=function(f,v){jn(this),this.g.forEach(function(T,D){T.forEach(function(Y){f.call(v,Y,D,this)},this)},this)},t.na=function(){jn(this);const f=Array.from(this.g.values()),v=Array.from(this.g.keys()),T=[];for(let D=0;D<v.length;D++){const Y=f[D];for(let Z=0;Z<Y.length;Z++)T.push(v[D])}return T},t.V=function(f){jn(this);let v=[];if(typeof f=="string")ti(this,f)&&(v=v.concat(this.g.get(ni(this,f))));else{f=Array.from(this.g.values());for(let T=0;T<f.length;T++)v=v.concat(f[T])}return v},t.set=function(f,v){return jn(this),this.i=null,f=ni(this,f),ti(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[v]),this.h+=1,this},t.get=function(f,v){return f?(f=this.V(f),0<f.length?String(f[0]):v):v};function ei(f,v,T){Go(f,v),0<T.length&&(f.i=null,f.g.set(ni(f,v),w(T)),f.h+=T.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],v=Array.from(this.g.keys());for(var T=0;T<v.length;T++){var D=v[T];const Z=encodeURIComponent(String(D)),st=this.V(D);for(D=0;D<st.length;D++){var Y=Z;st[D]!==""&&(Y+="="+encodeURIComponent(String(st[D]))),f.push(Y)}}return this.i=f.join("&")};function ni(f,v){return v=String(v),f.j&&(v=v.toLowerCase()),v}function bl(f,v){v&&!f.j&&(jn(f),f.i=null,f.g.forEach(function(T,D){var Y=D.toLowerCase();D!=Y&&(Go(this,D),ei(this,Y,T))},f)),f.j=v}function Mc(f,v){const T=new Zi;if(d.Image){const D=new Image;D.onload=_(Vn,T,"TestLoadImage: loaded",!0,v,D),D.onerror=_(Vn,T,"TestLoadImage: error",!1,v,D),D.onabort=_(Vn,T,"TestLoadImage: abort",!1,v,D),D.ontimeout=_(Vn,T,"TestLoadImage: timeout",!1,v,D),d.setTimeout(function(){D.ontimeout&&D.ontimeout()},1e4),D.src=f}else v(!1)}function Wa(f,v){const T=new Zi,D=new AbortController,Y=setTimeout(()=>{D.abort(),Vn(T,"TestPingServer: timeout",!1,v)},1e4);fetch(f,{signal:D.signal}).then(Z=>{clearTimeout(Y),Z.ok?Vn(T,"TestPingServer: ok",!0,v):Vn(T,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(Y),Vn(T,"TestPingServer: error",!1,v)})}function Vn(f,v,T,D,Y){try{Y&&(Y.onload=null,Y.onerror=null,Y.onabort=null,Y.ontimeout=null),D(T)}catch{}}function Za(){this.g=new on}function Or(f,v,T){const D=T||"";try{Ya(f,function(Y,Z){let st=Y;m(Y)&&(st=ll(Y)),v.push(D+Z+"="+encodeURIComponent(st))})}catch(Y){throw v.push(D+"type="+encodeURIComponent("_badmap")),Y}}function sa(f){this.l=f.Ub||null,this.j=f.eb||!1}x(sa,ul),sa.prototype.g=function(){return new ri(this.l,this.j)},sa.prototype.i=function(f){return function(){return f}}({});function ri(f,v){De.call(this),this.D=f,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ri,De),t=ri.prototype,t.open=function(f,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=v,this.readyState=1,kr(this)},t.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(v.body=f),(this.D||d).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},t.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}t.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var v=f.value?f.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!f.done}))&&(this.response=this.responseText+=v)}f.done?Rr(this):kr(this),this.readyState==3&&Sl(this)}},t.Ra=function(f){this.g&&(this.response=this.responseText=f,Rr(this))},t.Qa=function(f){this.g&&(this.response=f,Rr(this))},t.ga=function(){this.g&&Rr(this)};function Rr(f){f.readyState=4,f.l=null,f.j=null,f.v=null,kr(f)}t.setRequestHeader=function(f,v){this.u.append(f,v)},t.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],v=this.h.entries();for(var T=v.next();!T.done;)T=T.value,f.push(T[0]+": "+T[1]),T=v.next();return f.join(`\r
`)};function kr(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function Tl(f){let v="";return W(f,function(T,D){v+=D,v+=":",v+=T,v+=`\r
`}),v}function Be(f,v,T){t:{for(D in T){var D=!1;break t}D=!0}D||(T=Tl(T),typeof f=="string"?T!=null&&encodeURIComponent(String(T)):Bt(f,v,T))}function Xt(f){De.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Xt,De);var Yo=/^https?$/i,Qa=["POST","PUT"];t=Xt.prototype,t.Ha=function(f){this.J=f},t.ea=function(f,v,T,D){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);v=v?v.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fa.g(),this.v=this.o?Ac(this.o):Ac(Fa),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(v,String(f),!0),this.B=!1}catch(Z){Pc(this,Z);return}if(f=T||"",T=new Map(this.headers),D)if(Object.getPrototypeOf(D)===Object.prototype)for(var Y in D)T.set(Y,D[Y]);else if(typeof D.keys=="function"&&typeof D.get=="function")for(const Z of D.keys())T.set(Z,D.get(Z));else throw Error("Unknown input type for opt_headers: "+String(D));D=Array.from(T.keys()).find(Z=>Z.toLowerCase()=="content-type"),Y=d.FormData&&f instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Qa,v,void 0))||D||Y||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,st]of T)this.g.setRequestHeader(Z,st);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ja(this),this.u=!0,this.g.send(f),this.u=!1}catch(Z){Pc(this,Z)}};function Pc(f,v){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=v,f.m=5,Xo(f),Dr(f)}function Xo(f){f.A||(f.A=!0,ze(f,"complete"),ze(f,"error"))}t.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,ze(this,"complete"),ze(this,"abort"),Dr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dr(this,!0)),Xt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},t.bb=function(){Ko(this)};function Ko(f){if(f.h&&typeof c<"u"&&(!f.v[1]||Hn(f)!=4||f.Z()!=2)){if(f.u&&Hn(f)==4)Ec(f.Ea,0,f);else if(ze(f,"readystatechange"),Hn(f)==4){f.h=!1;try{const st=f.Z();t:switch(st){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break t;default:v=!1}var T;if(!(T=v)){var D;if(D=st===0){var Y=String(f.D).match(gl)[1]||null;!Y&&d.self&&d.self.location&&(Y=d.self.location.protocol.slice(0,-1)),D=!Yo.test(Y?Y.toLowerCase():"")}T=D}if(T)ze(f,"complete"),ze(f,"success");else{f.m=6;try{var Z=2<Hn(f)?f.g.statusText:""}catch{Z=""}f.l=Z+" ["+f.Z()+"]",Xo(f)}}finally{Dr(f)}}}}function Dr(f,v){if(f.g){Ja(f);const T=f.g,D=f.v[0]?()=>{}:null;f.g=null,f.v=null,v||ze(f,"ready");try{T.onreadystatechange=D}catch{}}}function Ja(f){f.I&&(d.clearTimeout(f.I),f.I=null)}t.isActive=function(){return!!this.g};function Hn(f){return f.g?f.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(f){if(this.g){var v=this.g.responseText;return f&&v.indexOf(f)==0&&(v=v.substring(f.length)),xr(v)}};function Nc(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function Dd(f){const v={};f=(f.g&&2<=Hn(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let D=0;D<f.length;D++){if(j(f[D]))continue;var T=N(f[D]);const Y=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const Z=v[Y]||[];v[Y]=Z,Z.push(T)}P(v,function(D){return D.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(f,v,T){return T&&T.internalChannelParams&&T.internalChannelParams[f]||v}function Wo(f){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,f),this.cb=to("retryDelaySeedMs",1e4,f),this.Wa=to("forwardChannelMaxRetries",2,f),this.wa=to("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new pl(f&&f.concurrentRequestLimit),this.Da=new Za,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wo.prototype,t.la=8,t.G=1,t.connect=function(f,v,T,D){xe(0),this.W=f,this.H=v||{},T&&D!==void 0&&(this.H.OSID=T,this.H.OAID=D),this.F=this.X,this.I=Vc(this,null,this.W),Qo(this)};function wl(f){if(Lc(f),f.G==3){var v=f.U++,T=me(f.I);if(Bt(T,"SID",f.K),Bt(T,"RID",v),Bt(T,"TYPE","terminate"),eo(f,T),v=new _r(f,f.j,v),v.L=2,v.v=Ka(me(T)),T=!1,d.navigator&&d.navigator.sendBeacon)try{T=d.navigator.sendBeacon(v.v.toString(),"")}catch{}!T&&d.Image&&(new Image().src=v.v,T=!0),T||(v.g=Hc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),le(v)}jc(f)}function Zo(f){f.g&&(no(f),f.g.cancel(),f.g=null)}function Lc(f){Zo(f),f.u&&(d.clearTimeout(f.u),f.u=null),Jo(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&d.clearTimeout(f.s),f.s=null)}function Qo(f){if(!ml(f.h)&&!f.s){f.s=!0;var v=f.Ga;lt||H(),ut||(lt(),ut=!0),yt.add(v,f),f.B=0}}function Md(f,v){return Rc(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=v.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=Wi(A(f.Ga,f,v),Al(f,f.B)),f.B++,!0)}t.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const Y=new _r(this,this.j,f);let Z=this.o;if(this.S&&(Z?(Z=k(Z),S(Z,this.S)):Z=this.S),this.m!==null||this.O||(Y.H=Z,Z=null),this.P)t:{for(var v=0,T=0;T<this.i.length;T++){e:{var D=this.i[T];if("__data__"in D.map&&(D=D.map.__data__,typeof D=="string")){D=D.length;break e}D=void 0}if(D===void 0)break;if(v+=D,4096<v){v=T;break t}if(v===4096||T===this.i.length-1){v=T+1;break t}}v=1e3}else v=1e3;v=zc(this,Y,v),T=me(this.I),Bt(T,"RID",f),Bt(T,"CVER",22),this.D&&Bt(T,"X-HTTP-Session-Id",this.D),eo(this,T),Z&&(this.O?v="headers="+encodeURIComponent(String(Tl(Z)))+"&"+v:this.m&&Be(T,this.m,Z)),ia(this.h,Y),this.Ua&&Bt(T,"TYPE","init"),this.P?(Bt(T,"$req",v),Bt(T,"SID","null"),Y.T=!0,lr(Y,T,null)):lr(Y,T,v),this.G=2}}else this.G==3&&(f?xl(this,f):this.i.length==0||ml(this.h)||xl(this))};function xl(f,v){var T;v?T=v.l:T=f.U++;const D=me(f.I);Bt(D,"SID",f.K),Bt(D,"RID",T),Bt(D,"AID",f.T),eo(f,D),f.m&&f.o&&Be(D,f.m,f.o),T=new _r(f,f.j,T,f.B+1),f.m===null&&(T.H=f.o),v&&(f.i=v.D.concat(f.i)),v=zc(f,T,1e3),T.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),ia(f.h,T),lr(T,D,v)}function eo(f,v){f.H&&W(f.H,function(T,D){Bt(v,D,T)}),f.l&&Ya({},function(T,D){Bt(v,D,T)})}function zc(f,v,T){T=Math.min(f.i.length,T);var D=f.l?A(f.l.Na,f.l,f):null;t:{var Y=f.i;let Z=-1;for(;;){const st=["count="+T];Z==-1?0<T?(Z=Y[0].g,st.push("ofs="+Z)):Z=0:st.push("ofs="+Z);let Ft=!0;for(let ae=0;ae<T;ae++){let zt=Y[ae].g;const je=Y[ae].map;if(zt-=Z,0>zt)Z=Math.max(0,Y[ae].g-100),Ft=!1;else try{Or(je,st,"req"+zt+"_")}catch{D&&D(je)}}if(Ft){D=st.join("&");break t}}}return f=f.i.splice(0,T),v.D=f,D}function Ic(f){if(!f.g&&!f.u){f.Y=1;var v=f.Fa;lt||H(),ut||(lt(),ut=!0),yt.add(v,f),f.v=0}}function El(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=Wi(A(f.Fa,f),Al(f,f.v)),f.v++,!0)}t.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=Wi(A(this.ab,this),f)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),Zo(this),Uc(this))};function no(f){f.A!=null&&(d.clearTimeout(f.A),f.A=null)}function Uc(f){f.g=new _r(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var v=me(f.qa);Bt(v,"RID","rpc"),Bt(v,"SID",f.K),Bt(v,"AID",f.T),Bt(v,"CI",f.F?"0":"1"),!f.F&&f.ja&&Bt(v,"TO",f.ja),Bt(v,"TYPE","xmlhttp"),eo(f,v),f.m&&f.o&&Be(v,f.m,f.o),f.L&&(f.g.I=f.L);var T=f.g;f=f.ia,T.L=1,T.v=Ka(me(v)),T.m=null,T.P=!0,Qr(T,f)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),El(this),xe(19))};function Jo(f){f.C!=null&&(d.clearTimeout(f.C),f.C=null)}function Bc(f,v){var T=null;if(f.g==v){Jo(f),no(f),f.g=null;var D=2}else if(ra(f.h,v))T=v.D,Un(f.h,v),D=1;else return;if(f.G!=0){if(v.o)if(D==1){T=v.m?v.m.length:0,v=Date.now()-v.F;var Y=f.B;D=cl(),ze(D,new _c(D,T)),Qo(f)}else Ic(f);else if(Y=v.s,Y==3||Y==0&&0<v.X||!(D==1&&Md(f,v)||D==2&&El(f)))switch(T&&0<T.length&&(v=f.h,v.i=v.i.concat(T)),Y){case 1:ii(f,5);break;case 4:ii(f,10);break;case 3:ii(f,6);break;default:ii(f,2)}}}function Al(f,v){let T=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(T*=2),T*v}function ii(f,v){if(f.j.info("Error code "+v),v==2){var T=A(f.fb,f),D=f.Xa;const Y=!D;D=new Jr(D||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||aa(D,"https"),Ka(D),Y?Mc(D.toString(),T):Wa(D.toString(),T)}else xe(2);f.G=0,f.l&&f.l.sa(v),jc(f),Lc(f)}t.fb=function(f){f?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function jc(f){if(f.G=0,f.ka=[],f.l){const v=sn(f.h);(v.length!=0||f.i.length!=0)&&(C(f.ka,v),C(f.ka,f.i),f.h.i.length=0,w(f.i),f.i.length=0),f.l.ra()}}function Vc(f,v,T){var D=T instanceof Jr?me(T):new Jr(T);if(D.g!="")v&&(D.g=v+"."+D.g),Xa(D,D.s);else{var Y=d.location;D=Y.protocol,v=v?v+"."+Y.hostname:Y.hostname,Y=+Y.port;var Z=new Jr(null);D&&aa(Z,D),v&&(Z.g=v),Y&&Xa(Z,Y),T&&(Z.l=T),D=Z}return T=f.D,v=f.ya,T&&v&&Bt(D,T,v),Bt(D,"VER",f.la),eo(f,D),D}function Hc(f,v,T){if(v&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=f.Ca&&!f.pa?new Xt(new sa({eb:T})):new Xt(f.pa),v.Ha(f.J),v}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qc(){}t=qc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gn(f,v){De.call(this),this.g=new Wo(v),this.l=f,this.h=v&&v.messageUrlParams||null,f=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(f?f["X-WebChannel-Content-Type"]=v.messageContentType:f={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(f?f["X-WebChannel-Client-Profile"]=v.va:f={"X-WebChannel-Client-Profile":v.va}),this.g.S=f,(f=v&&v.Sb)&&!j(f)&&(this.g.m=f),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!j(v)&&(this.g.D=v,f=this.h,f!==null&&v in f&&(f=this.h,v in f&&delete f[v])),this.j=new la(this)}x(gn,De),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){wl(this.g)},gn.prototype.o=function(f){var v=this.g;if(typeof f=="string"){var T={};T.__data__=f,f=T}else this.u&&(T={},T.__data__=ll(f),f=T);v.i.push(new _d(v.Ya++,f)),v.G==3&&Qo(v)},gn.prototype.N=function(){this.g.l=null,delete this.j,wl(this.g),delete this.g,gn.aa.N.call(this)};function $c(f){Yi.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var v=f.__sm__;if(v){t:{for(const T in v){f=T;break t}f=void 0}(this.i=f)&&(f=this.i,v=v!==null&&f in v?v[f]:void 0),this.data=v}else this.data=f}x($c,Yi);function Fc(){or.call(this),this.status=1}x(Fc,or);function la(f){this.g=f}x(la,qc),la.prototype.ua=function(){ze(this.g,"a")},la.prototype.ta=function(f){ze(this.g,new $c(f))},la.prototype.sa=function(f){ze(this.g,new Fc)},la.prototype.ra=function(){ze(this.g,"b")},gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,Ue.NO_ERROR=0,Ue.TIMEOUT=8,Ue.HTTP_ERROR=6,Ji.COMPLETE="complete",Ad.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",De.prototype.listen=De.prototype.K,Xt.prototype.listenOnce=Xt.prototype.L,Xt.prototype.getLastError=Xt.prototype.Ka,Xt.prototype.getLastErrorCode=Xt.prototype.Ba,Xt.prototype.getStatus=Xt.prototype.Z,Xt.prototype.getResponseJson=Xt.prototype.Oa,Xt.prototype.getResponseText=Xt.prototype.oa,Xt.prototype.send=Xt.prototype.ea,Xt.prototype.setWithCredentials=Xt.prototype.Ha}).apply(typeof Qf<"u"?Qf:typeof self<"u"?self:typeof window<"u"?window:{});const xT="@firebase/firestore",ET="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new uy("@firebase/firestore");function gr(t,...e){if(Ws.logLevel<=Yt.DEBUG){const r=e.map(xy);Ws.debug(`Firestore (${gc}): ${t}`,...r)}}function m5(t,...e){if(Ws.logLevel<=Yt.ERROR){const r=e.map(xy);Ws.error(`Firestore (${gc}): ${t}`,...r)}}function Zz(t,...e){if(Ws.logLevel<=Yt.WARN){const r=e.map(xy);Ws.warn(`Firestore (${gc}): ${t}`,...r)}}function xy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(r){return JSON.stringify(r)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t="Unexpected state"){const e=`FIRESTORE (${gc}) INTERNAL ASSERTION FAILED: `+t;throw m5(e),new Error(e)}function Mu(t,e){t||Ey()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Sn extends qi{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qz{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(cn.UNAUTHENTICATED))}shutdown(){}}class Jz{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class t7{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){Mu(this.o===void 0);let a=this.i;const o=p=>this.i!==a?(a=this.i,r(p)):Promise.resolve();let l=new Pu;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Pu,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{gr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(gr("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Pu)}},0),c()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(a=>this.i!==e?(gr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Mu(typeof a.accessToken=="string"),new g5(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Mu(e===null||typeof e=="string"),new cn(e)}}class e7{constructor(e,r,a){this.l=e,this.h=r,this.P=a,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class n7{constructor(e,r,a){this.l=e,this.h=r,this.P=a}getToken(){return Promise.resolve(new e7(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class r7{constructor(e,r){this.A=r,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,mr(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,r){Mu(this.o===void 0);const a=l=>{l.error!=null&&gr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,gr("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?r(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>a(l))};const o=l=>{gr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):gr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new AT(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(Mu(typeof r.token=="string"),this.R=r.token,new AT(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function i7(t){return t.name==="IndexedDbTransactionError"}const Jg="(default)";class Vh{constructor(e,r){this.projectId=e,this.database=r||Jg}static empty(){return new Vh("","")}get isDefaultDatabase(){return this.database===Jg}isEqual(e){return e instanceof Vh&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _T,Ut;(Ut=_T||(_T={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new p5([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a7=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o7=1048576;function ng(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e,r,a=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=r,this.Go=a,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const r=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),o=Math.max(0,r-a);o>0&&gr("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,r,a,o,l){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=a,this.op=o,this.removalCallback=l,this.deferred=new Pu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,a,o,l){const c=Date.now()+a,d=new Ay(e,r,c,o,l);return d.start(a),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Sn(bn.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var CT,OT;(OT=CT||(CT={}))._a="default",OT.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l7(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new Map;function u7(t,e,r,a){if(e===!0&&a===!0)throw new Sn(bn.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function c7(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ey()}function f7(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Sn(bn.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=c7(t);throw new Sn(bn.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y5="firestore.googleapis.com",kT=!0;class DT{constructor(e){var r,a;if(e.host===void 0){if(e.ssl!==void 0)throw new Sn(bn.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=y5,this.ssl=kT}else this.host=e.host,this.ssl=(r=e.ssl)!==null&&r!==void 0?r:kT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a7;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<o7)throw new Sn(bn.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u7("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l7((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Sn(bn.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Sn(bn.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Sn(bn.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,o){return a.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class v5{constructor(e,r,a,o){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new DT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Sn(bn.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Sn(bn.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new DT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Qz;switch(a.type){case"firstParty":return new n7(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Sn(bn.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const a=RT.get(r);a&&(gr("ComponentProvider","Removing Datastore"),RT.delete(r),a.terminate())}(this),Promise.resolve()}}function h7(t,e,r,a={}){var o;const l=(t=f7(t,v5))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:t._getEmulatorOptions()}),d=`${e}:${r}`;l.host!==y5&&l.host!==d&&Zz("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:a});if(!Lo(p,c)&&(t._setSettings(p),a.mockUserToken)){let m,y;if(typeof a.mockUserToken=="string")m=a.mockUserToken,y=cn.MOCK_USER;else{m=C9(a.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const b=a.mockUserToken.sub||a.mockUserToken.user_id;if(!b)throw new Sn(bn.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(b)}t._authCredentials=new Jz(new g5(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="AsyncQueue";class PT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new s7(this,"async_queue_retry"),this.Su=()=>{const a=ng();a&&gr(MT,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=e;const r=ng();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const r=ng();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const r=new Pu;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!i7(e))throw e;gr(MT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const r=this.bu.then(()=>(this.pu=!0,e().catch(a=>{this.gu=a,this.pu=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(a);throw m5("INTERNAL UNHANDLED ERROR: ",o),a}).then(a=>(this.pu=!1,a))));return this.bu=r,r}enqueueAfterDelay(e,r,a){this.Du(),this.wu.indexOf(e)>-1&&(r=0);const o=Ay.createAndSchedule(this,e,r,a,l=>this.Fu(l));return this.fu.push(o),o}Du(){this.gu&&Ey()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const r of this.fu)if(r.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((r,a)=>r.targetTimeMs-a.targetTimeMs);for(const r of this.fu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const r=this.fu.indexOf(e);this.fu.splice(r,1)}}class d7 extends v5{constructor(e,r,a,o){super(e,r,a,o),this.type="firestore",this._queue=new PT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new PT(e),this._firestoreClient=void 0,await e}}}function p7(t,e){const r=typeof t=="object"?t:NE(),a=typeof t=="string"?t:Jg,o=fy(r,"firestore").getImmediate({identifier:a});if(!o._initialized){const l=A9("firestore");l&&h7(o,...l)}return o}(function(e,r=!0){(function(o){gc=o})(nl),Xs(new zo("firestore",(a,{instanceIdentifier:o,options:l})=>{const c=a.getProvider("app").getImmediate(),d=new d7(new t7(a.getProvider("auth-internal")),new r7(c,a.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Sn(bn.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vh(m.options.projectId,y)}(c,o),c);return l=Object.assign({useFetchStreams:r},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ia(xT,ET,e),Ia(xT,ET,"esm2017")})();const m7={apiKey:"AIzaSyBBYgUPOXioK2BQLVQJtkoziL2NLRVBlqs",authDomain:"autoclicker-24c73.firebaseapp.com",projectId:"autoclicker-24c73",storageBucket:"autoclicker-24c73.firebasestorage.app",messagingSenderId:"566161943710",appId:"1:566161943710:web:dede09dae16f87ce539f8f",measurementId:"G-ZPN3ZNQHPD"},b5=PE(m7);p7(b5);const Hh=Yz(b5),g7=({setAlertMessage:t})=>{const e=Kh(),r=async()=>{try{await IL(Hh),t({isVisible:!0,title:"",type:"success",message:"Wylogowano !!"}),e("/login",{replace:!0})}catch(a){console.error("Błąd podczas wylogowywania:",a)}};return J.jsxs("nav",{children:[J.jsx(fg,{to:"/",children:"HOME"}),J.jsx(fg,{to:"/panel",children:"Panel zarządania"}),J.jsx("button",{onClick:r,children:"Log out"})]})},y7=({setAlertMessage:t})=>{const[e,r]=B.useState(!1);return B.useEffect(()=>{const a=()=>{r(window.scrollY>0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),J.jsxs("header",{style:e?{backgroundColor:"oklch(0.21 0.034 264.665)"}:{},children:[J.jsx("div",{children:"Logo"}),J.jsx(g7,{setAlertMessage:t})]})},v7=({setAlertMessage:t})=>J.jsxs(J.Fragment,{children:[J.jsx(y7,{setAlertMessage:t}),J.jsx("main",{style:{width:"100%"},children:J.jsx(EC,{})}),J.jsx("footer",{style:{width:"100%",padding:"20px",backgroundColor:"oklch(27.8% 0.033 256.848deg)"},children:"Stopka"})]}),gd=B.createContext({currentUser:null,authenticate:async t=>{},logout:()=>{}}),b7=()=>{const t=Kh(),e=B.useContext(gd),r=async()=>{const o=new _i;try{const l=await pT(Hh,o);await e.authenticate(l.user),t("/panel",{replace:!0})}catch(l){console.error("Błąd podczas logowania:",l)}},a=async()=>{const o=new Ai;try{await pT(Hh,o).then(l=>console.log(l))}catch(l){console.error("Błąd podczas logowania:",l)}};return J.jsx("div",{className:"background",children:J.jsx("div",{className:"login-container",children:J.jsxs("div",{className:"login-card",children:[J.jsx("h2",{className:"login-title",children:"Log in with"}),J.jsxs("div",{className:"social-buttons",children:[J.jsxs("button",{className:"social-btn google",onClick:r,children:[J.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{display:"block"},children:[J.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),J.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),J.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),J.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),J.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]}),"Google"]}),J.jsxs("button",{className:"social-btn facebook",onClick:a,children:[J.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",alt:"Facebook"}),"Facebook"]})]}),J.jsx("p",{className:"separator",children:"or"}),J.jsxs("form",{className:"form",children:[J.jsx("label",{children:"Email"}),J.jsx("input",{type:"email",placeholder:"Enter email address",className:"input-field"}),J.jsx("label",{children:"Password"}),J.jsx("input",{type:"password",placeholder:"Enter your password",className:"input-field"}),J.jsx("button",{type:"submit",className:"login-btn",children:"Log In"})]}),J.jsxs("p",{className:"signup-text",children:["Dont have an account? ",J.jsx("a",{href:"#",children:"Sign up"})]})]})})})};function S5(t,e){return function(){return t.apply(e,arguments)}}const{toString:S7}=Object.prototype,{getPrototypeOf:_y}=Object,yd=(t=>e=>{const r=S7.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),br=t=>(t=t.toLowerCase(),e=>yd(e)===t),vd=t=>e=>typeof e===t,{isArray:il}=Array,Zu=vd("undefined");function T7(t){return t!==null&&!Zu(t)&&t.constructor!==null&&!Zu(t.constructor)&&Ln(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const T5=br("ArrayBuffer");function w7(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&T5(t.buffer),e}const x7=vd("string"),Ln=vd("function"),w5=vd("number"),bd=t=>t!==null&&typeof t=="object",E7=t=>t===!0||t===!1,Sh=t=>{if(yd(t)!=="object")return!1;const e=_y(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},A7=br("Date"),_7=br("File"),C7=br("Blob"),O7=br("FileList"),R7=t=>bd(t)&&Ln(t.pipe),k7=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ln(t.append)&&((e=yd(t))==="formdata"||e==="object"&&Ln(t.toString)&&t.toString()==="[object FormData]"))},D7=br("URLSearchParams"),[M7,P7,N7,L7]=["ReadableStream","Request","Response","Headers"].map(br),z7=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yc(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let a,o;if(typeof t!="object"&&(t=[t]),il(t))for(a=0,o=t.length;a<o;a++)e.call(null,t[a],a,t);else{const l=r?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;let d;for(a=0;a<c;a++)d=l[a],e.call(null,t[d],d,t)}}function x5(t,e){e=e.toLowerCase();const r=Object.keys(t);let a=r.length,o;for(;a-- >0;)if(o=r[a],e===o.toLowerCase())return o;return null}const Ro=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,E5=t=>!Zu(t)&&t!==Ro;function t0(){const{caseless:t}=E5(this)&&this||{},e={},r=(a,o)=>{const l=t&&x5(e,o)||o;Sh(e[l])&&Sh(a)?e[l]=t0(e[l],a):Sh(a)?e[l]=t0({},a):il(a)?e[l]=a.slice():e[l]=a};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&yc(arguments[a],r);return e}const I7=(t,e,r,{allOwnKeys:a}={})=>(yc(e,(o,l)=>{r&&Ln(o)?t[l]=S5(o,r):t[l]=o},{allOwnKeys:a}),t),U7=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),B7=(t,e,r,a)=>{t.prototype=Object.create(e.prototype,a),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},j7=(t,e,r,a)=>{let o,l,c;const d={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),l=o.length;l-- >0;)c=o[l],(!a||a(c,t,e))&&!d[c]&&(e[c]=t[c],d[c]=!0);t=r!==!1&&_y(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},V7=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const a=t.indexOf(e,r);return a!==-1&&a===r},H7=t=>{if(!t)return null;if(il(t))return t;let e=t.length;if(!w5(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},q7=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_y(Uint8Array)),$7=(t,e)=>{const a=(t&&t[Symbol.iterator]).call(t);let o;for(;(o=a.next())&&!o.done;){const l=o.value;e.call(t,l[0],l[1])}},F7=(t,e)=>{let r;const a=[];for(;(r=t.exec(e))!==null;)a.push(r);return a},G7=br("HTMLFormElement"),Y7=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,o){return a.toUpperCase()+o}),NT=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),X7=br("RegExp"),A5=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),a={};yc(r,(o,l)=>{let c;(c=e(o,l,t))!==!1&&(a[l]=c||o)}),Object.defineProperties(t,a)},K7=t=>{A5(t,(e,r)=>{if(Ln(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=t[r];if(Ln(a)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},W7=(t,e)=>{const r={},a=o=>{o.forEach(l=>{r[l]=!0})};return il(t)?a(t):a(String(t).split(e)),r},Z7=()=>{},Q7=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function J7(t){return!!(t&&Ln(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const t8=t=>{const e=new Array(10),r=(a,o)=>{if(bd(a)){if(e.indexOf(a)>=0)return;if(!("toJSON"in a)){e[o]=a;const l=il(a)?[]:{};return yc(a,(c,d)=>{const p=r(c,o+1);!Zu(p)&&(l[d]=p)}),e[o]=void 0,l}}return a};return r(t,0)},e8=br("AsyncFunction"),n8=t=>t&&(bd(t)||Ln(t))&&Ln(t.then)&&Ln(t.catch),_5=((t,e)=>t?setImmediate:e?((r,a)=>(Ro.addEventListener("message",({source:o,data:l})=>{o===Ro&&l===r&&a.length&&a.shift()()},!1),o=>{a.push(o),Ro.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Ln(Ro.postMessage)),r8=typeof queueMicrotask<"u"?queueMicrotask.bind(Ro):typeof process<"u"&&process.nextTick||_5,Q={isArray:il,isArrayBuffer:T5,isBuffer:T7,isFormData:k7,isArrayBufferView:w7,isString:x7,isNumber:w5,isBoolean:E7,isObject:bd,isPlainObject:Sh,isReadableStream:M7,isRequest:P7,isResponse:N7,isHeaders:L7,isUndefined:Zu,isDate:A7,isFile:_7,isBlob:C7,isRegExp:X7,isFunction:Ln,isStream:R7,isURLSearchParams:D7,isTypedArray:q7,isFileList:O7,forEach:yc,merge:t0,extend:I7,trim:z7,stripBOM:U7,inherits:B7,toFlatObject:j7,kindOf:yd,kindOfTest:br,endsWith:V7,toArray:H7,forEachEntry:$7,matchAll:F7,isHTMLForm:G7,hasOwnProperty:NT,hasOwnProp:NT,reduceDescriptors:A5,freezeMethods:K7,toObjectSet:W7,toCamelCase:Y7,noop:Z7,toFiniteNumber:Q7,findKey:x5,global:Ro,isContextDefined:E5,isSpecCompliantForm:J7,toJSONObject:t8,isAsyncFn:e8,isThenable:n8,setImmediate:_5,asap:r8};function _t(t,e,r,a,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),a&&(this.request=a),o&&(this.response=o,this.status=o.status?o.status:null)}Q.inherits(_t,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.status}}});const C5=_t.prototype,O5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{O5[t]={value:t}});Object.defineProperties(_t,O5);Object.defineProperty(C5,"isAxiosError",{value:!0});_t.from=(t,e,r,a,o,l)=>{const c=Object.create(C5);return Q.toFlatObject(t,c,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),_t.call(c,t.message,e,r,a,o),c.cause=t,c.name=t.name,l&&Object.assign(c,l),c};const i8=null;function e0(t){return Q.isPlainObject(t)||Q.isArray(t)}function R5(t){return Q.endsWith(t,"[]")?t.slice(0,-2):t}function LT(t,e,r){return t?t.concat(e).map(function(o,l){return o=R5(o),!r&&l?"["+o+"]":o}).join(r?".":""):e}function a8(t){return Q.isArray(t)&&!t.some(e0)}const o8=Q.toFlatObject(Q,{},null,function(e){return/^is[A-Z]/.test(e)});function Sd(t,e,r){if(!Q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,r=Q.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!Q.isUndefined(C[w])});const a=r.metaTokens,o=r.visitor||y,l=r.dots,c=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&Q.isSpecCompliantForm(e);if(!Q.isFunction(o))throw new TypeError("visitor must be a function");function m(x){if(x===null)return"";if(Q.isDate(x))return x.toISOString();if(!p&&Q.isBlob(x))throw new _t("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(x)||Q.isTypedArray(x)?p&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function y(x,w,C){let M=x;if(x&&!C&&typeof x=="object"){if(Q.endsWith(w,"{}"))w=a?w:w.slice(0,-2),x=JSON.stringify(x);else if(Q.isArray(x)&&a8(x)||(Q.isFileList(x)||Q.endsWith(w,"[]"))&&(M=Q.toArray(x)))return w=R5(w),M.forEach(function(U,F){!(Q.isUndefined(U)||U===null)&&e.append(c===!0?LT([w],F,l):c===null?w:w+"[]",m(U))}),!1}return e0(x)?!0:(e.append(LT(C,w,l),m(x)),!1)}const b=[],A=Object.assign(o8,{defaultVisitor:y,convertValue:m,isVisitable:e0});function _(x,w){if(!Q.isUndefined(x)){if(b.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));b.push(x),Q.forEach(x,function(M,j){(!(Q.isUndefined(M)||M===null)&&o.call(e,M,Q.isString(j)?j.trim():j,w,A))===!0&&_(M,w?w.concat(j):[j])}),b.pop()}}if(!Q.isObject(t))throw new TypeError("data must be an object");return _(t),e}function zT(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(a){return e[a]})}function Cy(t,e){this._pairs=[],t&&Sd(t,this,e)}const k5=Cy.prototype;k5.append=function(e,r){this._pairs.push([e,r])};k5.toString=function(e){const r=e?function(a){return e.call(this,a,zT)}:zT;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function s8(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function D5(t,e,r){if(!e)return t;const a=r&&r.encode||s8;Q.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let l;if(o?l=o(e,r):l=Q.isURLSearchParams(e)?e.toString():new Cy(e,r).toString(a),l){const c=t.indexOf("#");c!==-1&&(t=t.slice(0,c)),t+=(t.indexOf("?")===-1?"?":"&")+l}return t}class IT{constructor(){this.handlers=[]}use(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Q.forEach(this.handlers,function(a){a!==null&&e(a)})}}const M5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},l8=typeof URLSearchParams<"u"?URLSearchParams:Cy,u8=typeof FormData<"u"?FormData:null,c8=typeof Blob<"u"?Blob:null,f8={isBrowser:!0,classes:{URLSearchParams:l8,FormData:u8,Blob:c8},protocols:["http","https","file","blob","url","data"]},Oy=typeof window<"u"&&typeof document<"u",n0=typeof navigator=="object"&&navigator||void 0,h8=Oy&&(!n0||["ReactNative","NativeScript","NS"].indexOf(n0.product)<0),d8=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",p8=Oy&&window.location.href||"http://localhost",m8=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Oy,hasStandardBrowserEnv:h8,hasStandardBrowserWebWorkerEnv:d8,navigator:n0,origin:p8},Symbol.toStringTag,{value:"Module"})),nn={...m8,...f8};function g8(t,e){return Sd(t,new nn.classes.URLSearchParams,Object.assign({visitor:function(r,a,o,l){return nn.isNode&&Q.isBuffer(r)?(this.append(a,r.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},e))}function y8(t){return Q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function v8(t){const e={},r=Object.keys(t);let a;const o=r.length;let l;for(a=0;a<o;a++)l=r[a],e[l]=t[l];return e}function P5(t){function e(r,a,o,l){let c=r[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),p=l>=r.length;return c=!c&&Q.isArray(o)?o.length:c,p?(Q.hasOwnProp(o,c)?o[c]=[o[c],a]:o[c]=a,!d):((!o[c]||!Q.isObject(o[c]))&&(o[c]=[]),e(r,a,o[c],l)&&Q.isArray(o[c])&&(o[c]=v8(o[c])),!d)}if(Q.isFormData(t)&&Q.isFunction(t.entries)){const r={};return Q.forEachEntry(t,(a,o)=>{e(y8(a),o,r,0)}),r}return null}function b8(t,e,r){if(Q.isString(t))try{return(e||JSON.parse)(t),Q.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}const vc={transitional:M5,adapter:["xhr","http","fetch"],transformRequest:[function(e,r){const a=r.getContentType()||"",o=a.indexOf("application/json")>-1,l=Q.isObject(e);if(l&&Q.isHTMLForm(e)&&(e=new FormData(e)),Q.isFormData(e))return o?JSON.stringify(P5(e)):e;if(Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)||Q.isReadableStream(e))return e;if(Q.isArrayBufferView(e))return e.buffer;if(Q.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){if(a.indexOf("application/x-www-form-urlencoded")>-1)return g8(e,this.formSerializer).toString();if((d=Q.isFileList(e))||a.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Sd(d?{"files[]":e}:e,p&&new p,this.formSerializer)}}return l||o?(r.setContentType("application/json",!1),b8(e)):e}],transformResponse:[function(e){const r=this.transitional||vc.transitional,a=r&&r.forcedJSONParsing,o=this.responseType==="json";if(Q.isResponse(e)||Q.isReadableStream(e))return e;if(e&&Q.isString(e)&&(a&&!this.responseType||o)){const c=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(d){if(c)throw d.name==="SyntaxError"?_t.from(d,_t.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nn.classes.FormData,Blob:nn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Q.forEach(["delete","get","head","post","put","patch"],t=>{vc.headers[t]={}});const S8=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),T8=t=>{const e={};let r,a,o;return t&&t.split(`
`).forEach(function(c){o=c.indexOf(":"),r=c.substring(0,o).trim().toLowerCase(),a=c.substring(o+1).trim(),!(!r||e[r]&&S8[r])&&(r==="set-cookie"?e[r]?e[r].push(a):e[r]=[a]:e[r]=e[r]?e[r]+", "+a:a)}),e},UT=Symbol("internals");function vu(t){return t&&String(t).trim().toLowerCase()}function Th(t){return t===!1||t==null?t:Q.isArray(t)?t.map(Th):String(t)}function w8(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(t);)e[a[1]]=a[2];return e}const x8=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function rg(t,e,r,a,o){if(Q.isFunction(a))return a.call(this,e,r);if(o&&(e=r),!!Q.isString(e)){if(Q.isString(a))return e.indexOf(a)!==-1;if(Q.isRegExp(a))return a.test(e)}}function E8(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,a)=>r.toUpperCase()+a)}function A8(t,e){const r=Q.toCamelCase(" "+e);["get","set","has"].forEach(a=>{Object.defineProperty(t,a+r,{value:function(o,l,c){return this[a].call(this,e,o,l,c)},configurable:!0})})}let Tn=class{constructor(e){e&&this.set(e)}set(e,r,a){const o=this;function l(d,p,m){const y=vu(p);if(!y)throw new Error("header name must be a non-empty string");const b=Q.findKey(o,y);(!b||o[b]===void 0||m===!0||m===void 0&&o[b]!==!1)&&(o[b||p]=Th(d))}const c=(d,p)=>Q.forEach(d,(m,y)=>l(m,y,p));if(Q.isPlainObject(e)||e instanceof this.constructor)c(e,r);else if(Q.isString(e)&&(e=e.trim())&&!x8(e))c(T8(e),r);else if(Q.isHeaders(e))for(const[d,p]of e.entries())l(p,d,a);else e!=null&&l(r,e,a);return this}get(e,r){if(e=vu(e),e){const a=Q.findKey(this,e);if(a){const o=this[a];if(!r)return o;if(r===!0)return w8(o);if(Q.isFunction(r))return r.call(this,o,a);if(Q.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=vu(e),e){const a=Q.findKey(this,e);return!!(a&&this[a]!==void 0&&(!r||rg(this,this[a],a,r)))}return!1}delete(e,r){const a=this;let o=!1;function l(c){if(c=vu(c),c){const d=Q.findKey(a,c);d&&(!r||rg(a,a[d],d,r))&&(delete a[d],o=!0)}}return Q.isArray(e)?e.forEach(l):l(e),o}clear(e){const r=Object.keys(this);let a=r.length,o=!1;for(;a--;){const l=r[a];(!e||rg(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const r=this,a={};return Q.forEach(this,(o,l)=>{const c=Q.findKey(a,l);if(c){r[c]=Th(o),delete r[l];return}const d=e?E8(l):String(l).trim();d!==l&&delete r[l],r[d]=Th(o),a[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const r=Object.create(null);return Q.forEach(this,(a,o)=>{a!=null&&a!==!1&&(r[o]=e&&Q.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,r])=>e+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...r){const a=new this(e);return r.forEach(o=>a.set(o)),a}static accessor(e){const a=(this[UT]=this[UT]={accessors:{}}).accessors,o=this.prototype;function l(c){const d=vu(c);a[d]||(A8(o,c),a[d]=!0)}return Q.isArray(e)?e.forEach(l):l(e),this}};Tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Q.reduceDescriptors(Tn.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(a){this[r]=a}}});Q.freezeMethods(Tn);function ig(t,e){const r=this||vc,a=e||r,o=Tn.from(a.headers);let l=a.data;return Q.forEach(t,function(d){l=d.call(r,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function N5(t){return!!(t&&t.__CANCEL__)}function al(t,e,r){_t.call(this,t??"canceled",_t.ERR_CANCELED,e,r),this.name="CanceledError"}Q.inherits(al,_t,{__CANCEL__:!0});function L5(t,e,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?t(r):e(new _t("Request failed with status code "+r.status,[_t.ERR_BAD_REQUEST,_t.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function _8(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function C8(t,e){t=t||10;const r=new Array(t),a=new Array(t);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(p){const m=Date.now(),y=a[l];c||(c=m),r[o]=p,a[o]=m;let b=l,A=0;for(;b!==o;)A+=r[b++],b=b%t;if(o=(o+1)%t,o===l&&(l=(l+1)%t),m-c<e)return;const _=y&&m-y;return _?Math.round(A*1e3/_):void 0}}function O8(t,e){let r=0,a=1e3/e,o,l;const c=(m,y=Date.now())=>{r=y,o=null,l&&(clearTimeout(l),l=null),t.apply(null,m)};return[(...m)=>{const y=Date.now(),b=y-r;b>=a?c(m,y):(o=m,l||(l=setTimeout(()=>{l=null,c(o)},a-b)))},()=>o&&c(o)]}const qh=(t,e,r=3)=>{let a=0;const o=C8(50,250);return O8(l=>{const c=l.loaded,d=l.lengthComputable?l.total:void 0,p=c-a,m=o(p),y=c<=d;a=c;const b={loaded:c,total:d,progress:d?c/d:void 0,bytes:p,rate:m||void 0,estimated:m&&d&&y?(d-c)/m:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};t(b)},r)},BT=(t,e)=>{const r=t!=null;return[a=>e[0]({lengthComputable:r,total:t,loaded:a}),e[1]]},jT=t=>(...e)=>Q.asap(()=>t(...e)),R8=nn.hasStandardBrowserEnv?((t,e)=>r=>(r=new URL(r,nn.origin),t.protocol===r.protocol&&t.host===r.host&&(e||t.port===r.port)))(new URL(nn.origin),nn.navigator&&/(msie|trident)/i.test(nn.navigator.userAgent)):()=>!0,k8=nn.hasStandardBrowserEnv?{write(t,e,r,a,o,l){const c=[t+"="+encodeURIComponent(e)];Q.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),Q.isString(a)&&c.push("path="+a),Q.isString(o)&&c.push("domain="+o),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function D8(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function M8(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function z5(t,e,r){let a=!D8(e);return t&&(a||r==!1)?M8(t,e):e}const VT=t=>t instanceof Tn?{...t}:t;function Uo(t,e){e=e||{};const r={};function a(m,y,b,A){return Q.isPlainObject(m)&&Q.isPlainObject(y)?Q.merge.call({caseless:A},m,y):Q.isPlainObject(y)?Q.merge({},y):Q.isArray(y)?y.slice():y}function o(m,y,b,A){if(Q.isUndefined(y)){if(!Q.isUndefined(m))return a(void 0,m,b,A)}else return a(m,y,b,A)}function l(m,y){if(!Q.isUndefined(y))return a(void 0,y)}function c(m,y){if(Q.isUndefined(y)){if(!Q.isUndefined(m))return a(void 0,m)}else return a(void 0,y)}function d(m,y,b){if(b in e)return a(m,y);if(b in t)return a(void 0,m)}const p={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(m,y,b)=>o(VT(m),VT(y),b,!0)};return Q.forEach(Object.keys(Object.assign({},t,e)),function(y){const b=p[y]||o,A=b(t[y],e[y],y);Q.isUndefined(A)&&b!==d||(r[y]=A)}),r}const I5=t=>{const e=Uo({},t);let{data:r,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:d}=e;e.headers=c=Tn.from(c),e.url=D5(z5(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(Q.isFormData(r)){if(nn.hasStandardBrowserEnv||nn.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((p=c.getContentType())!==!1){const[m,...y]=p?p.split(";").map(b=>b.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...y].join("; "))}}if(nn.hasStandardBrowserEnv&&(a&&Q.isFunction(a)&&(a=a(e)),a||a!==!1&&R8(e.url))){const m=o&&l&&k8.read(l);m&&c.set(o,m)}return e},P8=typeof XMLHttpRequest<"u",N8=P8&&function(t){return new Promise(function(r,a){const o=I5(t);let l=o.data;const c=Tn.from(o.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:m}=o,y,b,A,_,x;function w(){_&&_(),x&&x(),o.cancelToken&&o.cancelToken.unsubscribe(y),o.signal&&o.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(o.method.toUpperCase(),o.url,!0),C.timeout=o.timeout;function M(){if(!C)return;const U=Tn.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),z={data:!d||d==="text"||d==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:U,config:t,request:C};L5(function(P){r(P),w()},function(P){a(P),w()},z),C=null}"onloadend"in C?C.onloadend=M:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(M)},C.onabort=function(){C&&(a(new _t("Request aborted",_t.ECONNABORTED,t,C)),C=null)},C.onerror=function(){a(new _t("Network Error",_t.ERR_NETWORK,t,C)),C=null},C.ontimeout=function(){let F=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const z=o.transitional||M5;o.timeoutErrorMessage&&(F=o.timeoutErrorMessage),a(new _t(F,z.clarifyTimeoutError?_t.ETIMEDOUT:_t.ECONNABORTED,t,C)),C=null},l===void 0&&c.setContentType(null),"setRequestHeader"in C&&Q.forEach(c.toJSON(),function(F,z){C.setRequestHeader(z,F)}),Q.isUndefined(o.withCredentials)||(C.withCredentials=!!o.withCredentials),d&&d!=="json"&&(C.responseType=o.responseType),m&&([A,x]=qh(m,!0),C.addEventListener("progress",A)),p&&C.upload&&([b,_]=qh(p),C.upload.addEventListener("progress",b),C.upload.addEventListener("loadend",_)),(o.cancelToken||o.signal)&&(y=U=>{C&&(a(!U||U.type?new al(null,t,C):U),C.abort(),C=null)},o.cancelToken&&o.cancelToken.subscribe(y),o.signal&&(o.signal.aborted?y():o.signal.addEventListener("abort",y)));const j=_8(o.url);if(j&&nn.protocols.indexOf(j)===-1){a(new _t("Unsupported protocol "+j+":",_t.ERR_BAD_REQUEST,t));return}C.send(l||null)})},L8=(t,e)=>{const{length:r}=t=t?t.filter(Boolean):[];if(e||r){let a=new AbortController,o;const l=function(m){if(!o){o=!0,d();const y=m instanceof Error?m:this.reason;a.abort(y instanceof _t?y:new al(y instanceof Error?y.message:y))}};let c=e&&setTimeout(()=>{c=null,l(new _t(`timeout ${e} of ms exceeded`,_t.ETIMEDOUT))},e);const d=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(m=>{m.unsubscribe?m.unsubscribe(l):m.removeEventListener("abort",l)}),t=null)};t.forEach(m=>m.addEventListener("abort",l));const{signal:p}=a;return p.unsubscribe=()=>Q.asap(d),p}},z8=function*(t,e){let r=t.byteLength;if(r<e){yield t;return}let a=0,o;for(;a<r;)o=a+e,yield t.slice(a,o),a=o},I8=async function*(t,e){for await(const r of U8(t))yield*z8(r,e)},U8=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:r,value:a}=await e.read();if(r)break;yield a}}finally{await e.cancel()}},HT=(t,e,r,a)=>{const o=I8(t,e);let l=0,c,d=p=>{c||(c=!0,a&&a(p))};return new ReadableStream({async pull(p){try{const{done:m,value:y}=await o.next();if(m){d(),p.close();return}let b=y.byteLength;if(r){let A=l+=b;r(A)}p.enqueue(new Uint8Array(y))}catch(m){throw d(m),m}},cancel(p){return d(p),o.return()}},{highWaterMark:2})},Td=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",U5=Td&&typeof ReadableStream=="function",B8=Td&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),B5=(t,...e)=>{try{return!!t(...e)}catch{return!1}},j8=U5&&B5(()=>{let t=!1;const e=new Request(nn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),qT=64*1024,r0=U5&&B5(()=>Q.isReadableStream(new Response("").body)),$h={stream:r0&&(t=>t.body)};Td&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!$h[e]&&($h[e]=Q.isFunction(t[e])?r=>r[e]():(r,a)=>{throw new _t(`Response type '${e}' is not supported`,_t.ERR_NOT_SUPPORT,a)})})})(new Response);const V8=async t=>{if(t==null)return 0;if(Q.isBlob(t))return t.size;if(Q.isSpecCompliantForm(t))return(await new Request(nn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(Q.isArrayBufferView(t)||Q.isArrayBuffer(t))return t.byteLength;if(Q.isURLSearchParams(t)&&(t=t+""),Q.isString(t))return(await B8(t)).byteLength},H8=async(t,e)=>{const r=Q.toFiniteNumber(t.getContentLength());return r??V8(e)},q8=Td&&(async t=>{let{url:e,method:r,data:a,signal:o,cancelToken:l,timeout:c,onDownloadProgress:d,onUploadProgress:p,responseType:m,headers:y,withCredentials:b="same-origin",fetchOptions:A}=I5(t);m=m?(m+"").toLowerCase():"text";let _=L8([o,l&&l.toAbortSignal()],c),x;const w=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let C;try{if(p&&j8&&r!=="get"&&r!=="head"&&(C=await H8(y,a))!==0){let z=new Request(e,{method:"POST",body:a,duplex:"half"}),W;if(Q.isFormData(a)&&(W=z.headers.get("content-type"))&&y.setContentType(W),z.body){const[P,k]=BT(C,qh(jT(p)));a=HT(z.body,qT,P,k)}}Q.isString(b)||(b=b?"include":"omit");const M="credentials"in Request.prototype;x=new Request(e,{...A,signal:_,method:r.toUpperCase(),headers:y.normalize().toJSON(),body:a,duplex:"half",credentials:M?b:void 0});let j=await fetch(x);const U=r0&&(m==="stream"||m==="response");if(r0&&(d||U&&w)){const z={};["status","statusText","headers"].forEach(R=>{z[R]=j[R]});const W=Q.toFiniteNumber(j.headers.get("content-length")),[P,k]=d&&BT(W,qh(jT(d),!0))||[];j=new Response(HT(j.body,qT,P,()=>{k&&k(),w&&w()}),z)}m=m||"text";let F=await $h[Q.findKey($h,m)||"text"](j,t);return!U&&w&&w(),await new Promise((z,W)=>{L5(z,W,{data:F,headers:Tn.from(j.headers),status:j.status,statusText:j.statusText,config:t,request:x})})}catch(M){throw w&&w(),M&&M.name==="TypeError"&&/fetch/i.test(M.message)?Object.assign(new _t("Network Error",_t.ERR_NETWORK,t,x),{cause:M.cause||M}):_t.from(M,M&&M.code,t,x)}}),i0={http:i8,xhr:N8,fetch:q8};Q.forEach(i0,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const $T=t=>`- ${t}`,$8=t=>Q.isFunction(t)||t===null||t===!1,j5={getAdapter:t=>{t=Q.isArray(t)?t:[t];const{length:e}=t;let r,a;const o={};for(let l=0;l<e;l++){r=t[l];let c;if(a=r,!$8(r)&&(a=i0[(c=String(r)).toLowerCase()],a===void 0))throw new _t(`Unknown adapter '${c}'`);if(a)break;o[c||"#"+l]=a}if(!a){const l=Object.entries(o).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let c=e?l.length>1?`since :
`+l.map($T).join(`
`):" "+$T(l[0]):"as no adapter specified";throw new _t("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return a},adapters:i0};function ag(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new al(null,t)}function FT(t){return ag(t),t.headers=Tn.from(t.headers),t.data=ig.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),j5.getAdapter(t.adapter||vc.adapter)(t).then(function(a){return ag(t),a.data=ig.call(t,t.transformResponse,a),a.headers=Tn.from(a.headers),a},function(a){return N5(a)||(ag(t),a&&a.response&&(a.response.data=ig.call(t,t.transformResponse,a.response),a.response.headers=Tn.from(a.response.headers))),Promise.reject(a)})}const V5="1.8.4",wd={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{wd[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});const GT={};wd.transitional=function(e,r,a){function o(l,c){return"[Axios v"+V5+"] Transitional option '"+l+"'"+c+(a?". "+a:"")}return(l,c,d)=>{if(e===!1)throw new _t(o(c," has been removed"+(r?" in "+r:"")),_t.ERR_DEPRECATED);return r&&!GT[c]&&(GT[c]=!0,console.warn(o(c," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(l,c,d):!0}};wd.spelling=function(e){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${e}`),!0)};function F8(t,e,r){if(typeof t!="object")throw new _t("options must be an object",_t.ERR_BAD_OPTION_VALUE);const a=Object.keys(t);let o=a.length;for(;o-- >0;){const l=a[o],c=e[l];if(c){const d=t[l],p=d===void 0||c(d,l,t);if(p!==!0)throw new _t("option "+l+" must be "+p,_t.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new _t("Unknown option "+l,_t.ERR_BAD_OPTION)}}const wh={assertOptions:F8,validators:wd},Br=wh.validators;let Po=class{constructor(e){this.defaults=e,this.interceptors={request:new IT,response:new IT}}async request(e,r){try{return await this._request(e,r)}catch(a){if(a instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{a.stack?l&&!String(a.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+l):a.stack=l}catch{}}throw a}}_request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Uo(this.defaults,r);const{transitional:a,paramsSerializer:o,headers:l}=r;a!==void 0&&wh.assertOptions(a,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1),o!=null&&(Q.isFunction(o)?r.paramsSerializer={serialize:o}:wh.assertOptions(o,{encode:Br.function,serialize:Br.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),wh.assertOptions(r,{baseUrl:Br.spelling("baseURL"),withXsrfToken:Br.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let c=l&&Q.merge(l.common,l[r.method]);l&&Q.forEach(["delete","get","head","post","put","patch","common"],x=>{delete l[x]}),r.headers=Tn.concat(c,l);const d=[];let p=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(p=p&&w.synchronous,d.unshift(w.fulfilled,w.rejected))});const m=[];this.interceptors.response.forEach(function(w){m.push(w.fulfilled,w.rejected)});let y,b=0,A;if(!p){const x=[FT.bind(this),void 0];for(x.unshift.apply(x,d),x.push.apply(x,m),A=x.length,y=Promise.resolve(r);b<A;)y=y.then(x[b++],x[b++]);return y}A=d.length;let _=r;for(b=0;b<A;){const x=d[b++],w=d[b++];try{_=x(_)}catch(C){w.call(this,C);break}}try{y=FT.call(this,_)}catch(x){return Promise.reject(x)}for(b=0,A=m.length;b<A;)y=y.then(m[b++],m[b++]);return y}getUri(e){e=Uo(this.defaults,e);const r=z5(e.baseURL,e.url,e.allowAbsoluteUrls);return D5(r,e.params,e.paramsSerializer)}};Q.forEach(["delete","get","head","options"],function(e){Po.prototype[e]=function(r,a){return this.request(Uo(a||{},{method:e,url:r,data:(a||{}).data}))}});Q.forEach(["post","put","patch"],function(e){function r(a){return function(l,c,d){return this.request(Uo(d||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Po.prototype[e]=r(),Po.prototype[e+"Form"]=r(!0)});let G8=class H5{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(l){r=l});const a=this;this.promise.then(o=>{if(!a._listeners)return;let l=a._listeners.length;for(;l-- >0;)a._listeners[l](o);a._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(d=>{a.subscribe(d),l=d}).then(o);return c.cancel=function(){a.unsubscribe(l)},c},e(function(l,c,d){a.reason||(a.reason=new al(l,c,d),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const e=new AbortController,r=a=>{e.abort(a)};return this.subscribe(r),e.signal.unsubscribe=()=>this.unsubscribe(r),e.signal}static source(){let e;return{token:new H5(function(o){e=o}),cancel:e}}};function Y8(t){return function(r){return t.apply(null,r)}}function X8(t){return Q.isObject(t)&&t.isAxiosError===!0}const a0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(a0).forEach(([t,e])=>{a0[e]=t});function q5(t){const e=new Po(t),r=S5(Po.prototype.request,e);return Q.extend(r,Po.prototype,e,{allOwnKeys:!0}),Q.extend(r,e,null,{allOwnKeys:!0}),r.create=function(o){return q5(Uo(t,o))},r}const de=q5(vc);de.Axios=Po;de.CanceledError=al;de.CancelToken=G8;de.isCancel=N5;de.VERSION=V5;de.toFormData=Sd;de.AxiosError=_t;de.Cancel=de.CanceledError;de.all=function(e){return Promise.all(e)};de.spread=Y8;de.isAxiosError=X8;de.mergeConfig=Uo;de.AxiosHeaders=Tn;de.formToJSON=t=>P5(Q.isHTMLForm(t)?new FormData(t):t);de.getAdapter=j5.getAdapter;de.HttpStatusCode=a0;de.default=de;const{Axios:UI,AxiosError:BI,CanceledError:jI,isCancel:VI,CancelToken:HI,VERSION:qI,all:$I,Cancel:FI,isAxiosError:GI,spread:YI,toFormData:XI,AxiosHeaders:KI,HttpStatusCode:WI,formToJSON:ZI,getAdapter:QI,mergeConfig:JI}=de,K8=async(t,e)=>{var r;try{const a=await de.post("http://localhost:5000/addtoken",{token:t,uid:e});console.log("Token zapisany:",a.data)}catch(a){console.error("Błąd podczas zapisu tokena:",((r=a.response)==null?void 0:r.data)||a.message)}},W8=async t=>{var e;try{return!!await de.post("http://localhost:5000/saveuser",{uid:t.uid,email:t.email,displayName:t.displayName||""})}catch(r){return console.error("Błąd podczas zapisu użytkownika:",((e=r.response)==null?void 0:e.data)||r.message),!1}},Z8=async t=>{var e;try{const r=await de.get(`http://localhost:5000/gettokens/${t}`);return console.log(r),r.data.success?r.data.tokens:!1}catch(r){return console.error("Błąd podczas pobierania danych",((e=r.response)==null?void 0:e.data)||r.message),!1}};function Le(t,e){e===void 0&&(e={});var r=e.insertAt;if(t&&typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",r==="top"&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}Le(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Pt=function(){return Pt=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Pt.apply(this,arguments)};function Fh(t){return Fh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fh(t)}var Q8=/^\s+/,J8=/\s+$/;function pt(t,e){if(e=e||{},(t=t||"")instanceof pt)return t;if(!(this instanceof pt))return new pt(t,e);var r=function(a){var o={r:0,g:0,b:0},l=1,c=null,d=null,p=null,m=!1,y=!1;typeof a=="string"&&(a=function(x){x=x.replace(Q8,"").replace(J8,"").toLowerCase();var w,C=!1;if(o0[x])x=o0[x],C=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(w=dr.rgb.exec(x))?{r:w[1],g:w[2],b:w[3]}:(w=dr.rgba.exec(x))?{r:w[1],g:w[2],b:w[3],a:w[4]}:(w=dr.hsl.exec(x))?{h:w[1],s:w[2],l:w[3]}:(w=dr.hsla.exec(x))?{h:w[1],s:w[2],l:w[3],a:w[4]}:(w=dr.hsv.exec(x))?{h:w[1],s:w[2],v:w[3]}:(w=dr.hsva.exec(x))?{h:w[1],s:w[2],v:w[3],a:w[4]}:(w=dr.hex8.exec(x))?{r:kn(w[1]),g:kn(w[2]),b:kn(w[3]),a:QT(w[4]),format:C?"name":"hex8"}:(w=dr.hex6.exec(x))?{r:kn(w[1]),g:kn(w[2]),b:kn(w[3]),format:C?"name":"hex"}:(w=dr.hex4.exec(x))?{r:kn(w[1]+""+w[1]),g:kn(w[2]+""+w[2]),b:kn(w[3]+""+w[3]),a:QT(w[4]+""+w[4]),format:C?"name":"hex8"}:(w=dr.hex3.exec(x))?{r:kn(w[1]+""+w[1]),g:kn(w[2]+""+w[2]),b:kn(w[3]+""+w[3]),format:C?"name":"hex"}:!1}(a)),Fh(a)=="object"&&(Ei(a.r)&&Ei(a.g)&&Ei(a.b)?(b=a.r,A=a.g,_=a.b,o={r:255*se(b,255),g:255*se(A,255),b:255*se(_,255)},m=!0,y=String(a.r).substr(-1)==="%"?"prgb":"rgb"):Ei(a.h)&&Ei(a.s)&&Ei(a.v)?(c=Au(a.s),d=Au(a.v),o=function(x,w,C){x=6*se(x,360),w=se(w,100),C=se(C,100);var M=Math.floor(x),j=x-M,U=C*(1-w),F=C*(1-j*w),z=C*(1-(1-j)*w),W=M%6,P=[C,F,U,U,z,C][W],k=[z,C,C,F,U,U][W],R=[U,U,z,C,C,F][W];return{r:255*P,g:255*k,b:255*R}}(a.h,c,d),m=!0,y="hsv"):Ei(a.h)&&Ei(a.s)&&Ei(a.l)&&(c=Au(a.s),p=Au(a.l),o=function(x,w,C){var M,j,U;function F(P,k,R){return R<0&&(R+=1),R>1&&(R-=1),R<1/6?P+6*(k-P)*R:R<.5?k:R<2/3?P+(k-P)*(2/3-R)*6:P}if(x=se(x,360),w=se(w,100),C=se(C,100),w===0)M=j=U=C;else{var z=C<.5?C*(1+w):C+w-C*w,W=2*C-z;M=F(W,z,x+1/3),j=F(W,z,x),U=F(W,z,x-1/3)}return{r:255*M,g:255*j,b:255*U}}(a.h,c,p),m=!0,y="hsl"),a.hasOwnProperty("a")&&(l=a.a));var b,A,_;return l=$5(l),{ok:m,format:a.format||y,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:l}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function YT(t,e,r){t=se(t,255),e=se(e,255),r=se(r,255);var a,o,l=Math.max(t,e,r),c=Math.min(t,e,r),d=(l+c)/2;if(l==c)a=o=0;else{var p=l-c;switch(o=d>.5?p/(2-l-c):p/(l+c),l){case t:a=(e-r)/p+(e<r?6:0);break;case e:a=(r-t)/p+2;break;case r:a=(t-e)/p+4}a/=6}return{h:a,s:o,l:d}}function XT(t,e,r){t=se(t,255),e=se(e,255),r=se(r,255);var a,o,l=Math.max(t,e,r),c=Math.min(t,e,r),d=l,p=l-c;if(o=l===0?0:p/l,l==c)a=0;else{switch(l){case t:a=(e-r)/p+(e<r?6:0);break;case e:a=(r-t)/p+2;break;case r:a=(t-e)/p+4}a/=6}return{h:a,s:o,v:d}}function KT(t,e,r,a){var o=[yr(Math.round(t).toString(16)),yr(Math.round(e).toString(16)),yr(Math.round(r).toString(16))];return a&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function WT(t,e,r,a){return[yr(F5(a)),yr(Math.round(t).toString(16)),yr(Math.round(e).toString(16)),yr(Math.round(r).toString(16))].join("")}function tI(t,e){e=e===0?0:e||10;var r=pt(t).toHsl();return r.s-=e/100,r.s=xd(r.s),pt(r)}function eI(t,e){e=e===0?0:e||10;var r=pt(t).toHsl();return r.s+=e/100,r.s=xd(r.s),pt(r)}function nI(t){return pt(t).desaturate(100)}function rI(t,e){e=e===0?0:e||10;var r=pt(t).toHsl();return r.l+=e/100,r.l=xd(r.l),pt(r)}function iI(t,e){e=e===0?0:e||10;var r=pt(t).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),pt(r)}function aI(t,e){e=e===0?0:e||10;var r=pt(t).toHsl();return r.l-=e/100,r.l=xd(r.l),pt(r)}function oI(t,e){var r=pt(t).toHsl(),a=(r.h+e)%360;return r.h=a<0?360+a:a,pt(r)}function sI(t){var e=pt(t).toHsl();return e.h=(e.h+180)%360,pt(e)}function ZT(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var r=pt(t).toHsl(),a=[pt(t)],o=360/e,l=1;l<e;l++)a.push(pt({h:(r.h+l*o)%360,s:r.s,l:r.l}));return a}function lI(t){var e=pt(t).toHsl(),r=e.h;return[pt(t),pt({h:(r+72)%360,s:e.s,l:e.l}),pt({h:(r+216)%360,s:e.s,l:e.l})]}function uI(t,e,r){e=e||6,r=r||30;var a=pt(t).toHsl(),o=360/r,l=[pt(t)];for(a.h=(a.h-(o*e>>1)+720)%360;--e;)a.h=(a.h+o)%360,l.push(pt(a));return l}function cI(t,e){e=e||6;for(var r=pt(t).toHsv(),a=r.h,o=r.s,l=r.v,c=[],d=1/e;e--;)c.push(pt({h:a,s:o,v:l})),l=(l+d)%1;return c}pt.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,a=this.toRgb();return t=a.r/255,e=a.g/255,r=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=$5(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=XT(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=XT(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),a=Math.round(100*t.v);return this._a==1?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=YT(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=YT(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),a=Math.round(100*t.l);return this._a==1?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return KT(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,r,a,o,l){var c=[yr(Math.round(e).toString(16)),yr(Math.round(r).toString(16)),yr(Math.round(a).toString(16)),yr(F5(o))];return l&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*se(this._r,255))+"%",g:Math.round(100*se(this._g,255))+"%",b:Math.round(100*se(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*se(this._r,255))+"%, "+Math.round(100*se(this._g,255))+"%, "+Math.round(100*se(this._b,255))+"%)":"rgba("+Math.round(100*se(this._r,255))+"%, "+Math.round(100*se(this._g,255))+"%, "+Math.round(100*se(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(fI[KT(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+WT(this._r,this._g,this._b,this._a),r=e,a=this._gradientType?"GradientType = 1, ":"";if(t){var o=pt(t);r="#"+WT(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,a=this._a<1&&this._a>=0;return e||!a||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return pt(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(rI,arguments)},brighten:function(){return this._applyModification(iI,arguments)},darken:function(){return this._applyModification(aI,arguments)},desaturate:function(){return this._applyModification(tI,arguments)},saturate:function(){return this._applyModification(eI,arguments)},greyscale:function(){return this._applyModification(nI,arguments)},spin:function(){return this._applyModification(oI,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(uI,arguments)},complement:function(){return this._applyCombination(sI,arguments)},monochromatic:function(){return this._applyCombination(cI,arguments)},splitcomplement:function(){return this._applyCombination(lI,arguments)},triad:function(){return this._applyCombination(ZT,[3])},tetrad:function(){return this._applyCombination(ZT,[4])}},pt.fromRatio=function(t,e){if(Fh(t)=="object"){var r={};for(var a in t)t.hasOwnProperty(a)&&(r[a]=a==="a"?t[a]:Au(t[a]));t=r}return pt(t,e)},pt.equals=function(t,e){return!(!t||!e)&&pt(t).toRgbString()==pt(e).toRgbString()},pt.random=function(){return pt.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},pt.mix=function(t,e,r){r=r===0?0:r||50;var a=pt(t).toRgb(),o=pt(e).toRgb(),l=r/100;return pt({r:(o.r-a.r)*l+a.r,g:(o.g-a.g)*l+a.g,b:(o.b-a.b)*l+a.b,a:(o.a-a.a)*l+a.a})},pt.readability=function(t,e){var r=pt(t),a=pt(e);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)},pt.isReadable=function(t,e,r){var a,o,l=pt.readability(t,e);switch(o=!1,(a=function(c){var d,p;return d=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(c.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:d,size:p}}(r)).level+a.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},pt.mostReadable=function(t,e,r){var a,o,l,c,d=null,p=0;o=(r=r||{}).includeFallbackColors,l=r.level,c=r.size;for(var m=0;m<e.length;m++)(a=pt.readability(t,e[m]))>p&&(p=a,d=pt(e[m]));return pt.isReadable(t,d,{level:l,size:c})||!o?d:(r.includeFallbackColors=!1,pt.mostReadable(t,["#fff","#000"],r))};var o0=pt.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},fI=pt.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(o0);function $5(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function se(t,e){(function(a){return typeof a=="string"&&a.indexOf(".")!=-1&&parseFloat(a)===1})(t)&&(t="100%");var r=function(a){return typeof a=="string"&&a.indexOf("%")!=-1}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function xd(t){return Math.min(1,Math.max(0,t))}function kn(t){return parseInt(t,16)}function yr(t){return t.length==1?"0"+t:""+t}function Au(t){return t<=1&&(t=100*t+"%"),t}function F5(t){return Math.round(255*parseFloat(t)).toString(16)}function QT(t){return kn(t)/255}var Da,Jf,th,dr=(Jf="[\\s|\\(]+("+(Da="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Da+")[,|\\s]+("+Da+")\\s*\\)?",th="[\\s|\\(]+("+Da+")[,|\\s]+("+Da+")[,|\\s]+("+Da+")[,|\\s]+("+Da+")\\s*\\)?",{CSS_UNIT:new RegExp(Da),rgb:new RegExp("rgb"+Jf),rgba:new RegExp("rgba"+th),hsl:new RegExp("hsl"+Jf),hsla:new RegExp("hsla"+th),hsv:new RegExp("hsv"+Jf),hsva:new RegExp("hsva"+th),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Ei(t){return!!dr.CSS_UNIT.exec(t)}var bc=function(t,e){var r=(typeof t=="string"?parseInt(t):t)||0;if(r>=-5&&r<=5){var a=r,o=parseFloat(e),l=o+a*(o/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:e}},Sc=function(t,e){var r=t||{},a="";switch(e){case"small":a="12px";break;case"medium":a="16px";break;case"large":a="20px";break;default:a=void 0}var o={};if(r.fontSize){var l=r.fontSize;o=function(c,d){var p={};for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.indexOf(m)<0&&(p[m]=c[m]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(m=Object.getOwnPropertySymbols(c);y<m.length;y++)d.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(c,m[y])&&(p[m[y]]=c[m[y]])}return p}(r,["fontSize"]),a=l}return{fontSize:a,styles:o}},hI={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Tc=function(t){var e=t.className,r=t.text,a=t.textColor,o=t.staticText,l=t.style;return r?Ot.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:Pt(Pt(Pt({},o&&hI),a&&{color:a,mixBlendMode:"unset"}),l&&l)},typeof r=="string"&&r.length?r:"loading"):null},ki="rgb(50, 205, 50)";function wc(t,e){e===void 0&&(e=0);var r=[];return function a(o,l){return l===void 0&&(l=0),r.push.apply(r,o),r.length<l&&a(r,l),r.slice(0,l)}(t,e)}Le(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);pt(ki).toRgb();Array.from({length:4},function(t,e){return"--atom-phase".concat(e+1,"-rgb")});Le(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--commet-phase".concat(e+1,"-color")});Le(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var eh=Array.from({length:4},function(t,e){return"--OP-annulus-phase".concat(e+1,"-color")}),dI=function(t){var e,r=Sc(t==null?void 0:t.style,t==null?void 0:t.size),a=r.styles,o=r.fontSize,l=t==null?void 0:t.easing,c=bc(t==null?void 0:t.speedPlus,"1.5s").animationPeriod,d=function(m){var y={},b=eh.length;if(m instanceof Array){for(var A=wc(m,b),_=0;_<A.length&&!(_>=4);_++)y[eh[_]]=A[_];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<b;x++)y[eh[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),x=0;x<b;x++)y[eh[x]]=ki}return y}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),p=t!=null&&t.dense?4.3:2.9;return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:Pt(Pt(Pt(Pt(Pt({},o&&{fontSize:o}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Ot.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Ot.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),Ot.createElement(Tc,{className:"OP-annulus-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};function og(t){return t&&t.Math===Math&&t}Le(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Ms=og(typeof window=="object"&&window)||og(typeof self=="object"&&self)||og(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function G5(){var t,e;return!((t=Ms==null?void 0:Ms.crypto)===null||t===void 0)&&t.randomUUID?Ms.crypto.randomUUID():!((e=Ms==null?void 0:Ms.btoa)===null||e===void 0)&&e.name?Ms.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var nh=Array.from({length:4},function(t,e){return"--OP-dotted-phase".concat(e+1,"-color")}),pI=function(t){var e,r=Sc(t==null?void 0:t.style,t==null?void 0:t.size),a=r.styles,o=r.fontSize,l=t==null?void 0:t.easing,c=bc(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,d=function(m){var y={},b=nh.length;if(m instanceof Array){for(var A=wc(m,b),_=0;_<A.length&&!(_>=4);_++)y[nh[_]]=A[_];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<b;x++)y[nh[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),x=0;x<b;x++)y[nh[x]]=ki}return y}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),p=t!=null&&t.dense?16:12;return Ot.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:Pt(Pt(Pt(Pt(Pt({},o&&{fontSize:o}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map(function(m,y){var b=function(x,w,C){if(w===16){var M=360*x/w,j=w-x,U=Number.parseFloat(C)/w*j*-1;return{transform:"rotate(".concat(M,"deg)"),animationDelay:"".concat(U,"s")}}return{transform:"",animationDelay:""}}(y,p,c),A=b.animationDelay,_=b.transform;return Ot.createElement("span",{key:G5(),className:"rli-d-i-b dot-shape-holder",style:_?{transform:_}:void 0},Ot.createElement("span",{className:"dot",style:A?{animationDelay:A}:void 0}))}),Ot.createElement(Tc,{className:"OP-dotted-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};Le(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var rh=Array.from({length:4},function(t,e){return"--OP-spokes-phase".concat(e+1,"-color")}),mI=function(t){var e,r=Sc(t==null?void 0:t.style,t==null?void 0:t.size),a=r.styles,o=r.fontSize,l=t==null?void 0:t.easing,c=bc(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,d=function(m){var y={},b=rh.length;if(m instanceof Array){for(var A=wc(m,b),_=0;_<A.length&&!(_>=4);_++)y[rh[_]]=A[_];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<b;x++)y[rh[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),x=0;x<b;x++)y[rh[x]]=ki}return y}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),p=t!=null&&t.dense?16:12;return Ot.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:Pt(Pt(Pt(Pt(Pt({},o&&{fontSize:o}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},function(m,y){return Ot.createElement("span",{key:G5(),className:"rli-d-i-b spoke",style:gI(y,p,c)})})),Ot.createElement(Tc,{text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};function gI(t,e,r){if(e===16){var a=e-t,o=Number.parseFloat(r)/e;return{transform:"rotate(".concat(360*t/e,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((a-1)*o*-1,"s")}}}Le(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var ih=Array.from({length:4},function(t,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")}),yI=function(t){var e,r=Sc(t==null?void 0:t.style,t==null?void 0:t.size),a=r.styles,o=r.fontSize,l=t==null?void 0:t.easing,c=bc(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,d=function(m){var y={},b=ih.length;if(m instanceof Array){for(var A=wc(m,b),_=0;_<A.length&&!(_>=4);_++)y[ih[_]]=A[_];return y}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<b;x++)y[ih[x]]=m}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),x=0;x<b;x++)y[ih[x]]=ki}return y}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),p=t.dense?"0.45em":"";return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:Pt(Pt(Pt(Pt(Pt({},o&&{fontSize:o}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Ot.createElement("span",{className:"rli-d-i-b annulus-sectors",style:Pt({},p&&{borderWidth:p})}),Ot.createElement(Tc,{className:"OP-annulus-dual-sectors-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))};Le(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var bu=Array.from({length:4},function(t,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]}),ah=function(t){return t===void 0&&(t=1),.25*t},vI=function(t){var e,r=Sc(t==null?void 0:t.style,t==null?void 0:t.size),a=r.styles,o=r.fontSize,l=t==null?void 0:t.easing,c=bc(t==null?void 0:t.speedPlus,"1s").animationPeriod,d=function(m){var y={},b=bu.length;if(m instanceof Array){for(var A=wc(m,b),_=0;_<A.length&&!(_>=4);_++){var x=bu[_];try{if(!(M=pt(A[_])).isValid())throw new Error("Invalid Color: ".concat(M.getOriginalInput()));var w=M.setAlpha(ah(M.getAlpha())).toRgbString(),C=A[_];y[x[0]]=w,y[x[1]]=C}catch{C=ki,w=(M=pt(ki)).setAlpha(ah(M.getAlpha())).toRgbString(),y[x[0]]=w,y[x[1]]=C}}return y}try{var M=pt(m);if(typeof m!="string")throw new Error("Color String expected");if(!M.isValid())throw new Error("Invalid Color: ".concat(M.getOriginalInput()));C=m,w=M.setAlpha(ah(M.getAlpha())).toRgbString();for(var j=0;j<b;j++)y[(x=bu[j])[0]]=w,y[x[1]]=C}catch(U){for(U instanceof Error?console.warn("[".concat(U.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),C=ki,w=(M=pt(ki)).setAlpha(ah(M.getAlpha())).toRgbString(),j=0;j<bu.length;j++)y[(x=bu[j])[0]]=w,y[x[1]]=C}return y}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:""),p=t.dense?"0.45em":"";return Ot.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:Pt(Pt(Pt(Pt(Pt({},o&&{fontSize:o}),c&&{"--rli-animation-duration":c}),l&&{"--rli-animation-function":l}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ot.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Ot.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:Pt({},p&&{borderWidth:p})}),Ot.createElement(Tc,{className:"OP-annulus-sector-text",text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor})))},bI=function(t){var e=Object(t).variant,r=e===void 0?"disc":e;return r==="dotted"?Ot.createElement(pI,Pt({},t)):r==="spokes"?Ot.createElement(mI,Pt({},t)):r==="disc"?Ot.createElement(dI,Pt({},t)):r==="split-disc"?Ot.createElement(yI,Pt({},t)):r==="track-disc"?Ot.createElement(vI,Pt({},t)):null};Le(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--four-square-phase".concat(e+1,"-color")});Le(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--mosaic-phase".concat(e+1,"-color")});Le(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--riple-phase".concat(e+1,"-color")});Le(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-pulsate-phase".concat(e+1,"-color")});Le(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-brick-stack-phase".concat(e+1,"-color")});Le(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-bob-phase".concat(e+1,"-color")});Le(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--TD-bounce-phase".concat(e+1,"-color")});Le(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--shape-phase".concat(e+1,"-color")});Le(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--trophySpin-phase".concat(e+1,"-color")});Le(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--slab-phase".concat(e+1,"-color")});Le(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--life-line-phase".concat(e+1,"-color")});const SI=()=>{const t=B.useContext(gd),[e,r]=B.useState(""),[a,o]=B.useState(""),[l,c]=B.useState(!0),d=async()=>{e&&(await K8(e,t.currentUser.uid),o(m=>[...m,e]))},p=Kh();return B.useEffect(()=>{t.currentUser===!1?p("/login",{replace:!0}):t.currentUser!==null&&c(!1)},[t.currentUser,p]),B.useEffect(()=>{(async()=>{const y=await Z8(t.currentUser.uid);y&&o(y)})()},[t.currentUser]),l?J.jsx(bI,{size:"small",variant:"split-disc"}):J.jsxs("div",{className:"admin--panel",children:[J.jsx("p",{children:"Create Token"}),J.jsxs("p",{children:["Twoje tokeny ",a.length,"/2"]}),["",""].map((m,y)=>J.jsx("div",{children:a[y]?J.jsx("p",{children:a[y]}):J.jsxs("div",{children:[J.jsx("input",{type:"text",onChange:b=>r(b.target.value),value:e}),J.jsx("button",{onClick:d,children:"Dodaj plugin"})]})}))]})};var Y5={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},JT=Ot.createContext&&Ot.createContext(Y5),TI=["attr","size","title"];function wI(t,e){if(t==null)return{};var r=xI(t,e),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)a=l[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function xI(t,e){if(t==null)return{};var r={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;r[a]=t[a]}return r}function Gh(){return Gh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Gh.apply(this,arguments)}function tw(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,a)}return r}function Yh(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?tw(Object(r),!0).forEach(function(a){EI(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tw(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))})}return t}function EI(t,e,r){return e=AI(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function AI(t){var e=_I(t,"string");return typeof e=="symbol"?e:e+""}function _I(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var a=r.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function X5(t){return t&&t.map((e,r)=>Ot.createElement(e.tag,Yh({key:r},e.attr),X5(e.child)))}function Ry(t){return e=>Ot.createElement(CI,Gh({attr:Yh({},t.attr)},e),X5(t.child))}function CI(t){var e=r=>{var{attr:a,size:o,title:l}=t,c=wI(t,TI),d=o||r.size||"1em",p;return r.className&&(p=r.className),t.className&&(p=(p?p+" ":"")+t.className),Ot.createElement("svg",Gh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,c,{className:p,style:Yh(Yh({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&Ot.createElement("title",null,l),t.children)};return JT!==void 0?Ot.createElement(JT.Consumer,null,r=>e(r)):e(Y5)}function OI(t){return Ry({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(t)}function RI(t){return Ry({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(t)}function kI(t){return Ry({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(t)}function DI(){return J.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"90%",marginLeft:"5%",padding:"20px",paddingBottom:"50px",alignItems:"center"},children:[J.jsxs("section",{style:{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",marginBottom:"20px",padding:"10px",width:"100%"},className:"bg-gray-900",children:[J.jsx("h1",{className:"text-5xl font-extrabold text-green-400 leading-tight ",style:{marginBottom:"20px"},children:"Zautomatyzuj Klikanie i Pracuj Lepiej !"}),J.jsx("p",{className:"mt-4 text-3xl text-green-300 ",style:{marginBottom:"10px"},children:"Masz dość siedzenia przed ekranem i spedzania wielu godzin na klikaniu ?"}),J.jsx("p",{className:"mt-4 text-lg text-gray-300 max-w-4xl",children:"O to on AutoClicker to narzędzie, które pozwala Ci zoptymalizować swoją prace, klikając za Ciebie w odpowiednich momentach. Dzięki niemu oszczędzisz bardzo dużo czasu, który możesz przeznaczyć na SIEBIE !!!"})]}),J.jsxs("section",{className:"features--section",children:[J.jsx(sg,{icon:J.jsx(OI,{size:50}),title:"Automatyczne Klikanie",description:"Oszczędzaj czas, pozwól AutoClickerowi klikać za Ciebie!",extraText:"✔ Dzięki tej funkcji możesz cieszyć się automatycznym klikaniem w kluczowych momentach, co daje Ci więcej czasu na skupienie się na innych aspektach swojej pracy oraz bezpiecznijszą pracę."}),J.jsx(sg,{icon:J.jsx(kI,{size:50}),title:"Łatwa Konfiguracja",description:"Szybko dostosuj ustawienia do swoich potrzeb.",extraText:"✔ Prosty interfejs użytkownika pozwala na łatwą konfigurację, dzięki czemu już po chwili możesz w pełni korzystać z AutoClickera bez zbędnych komplikacji."}),J.jsx(sg,{icon:J.jsx(RI,{size:50}),title:"Szybsza i Efektywniejsza Praca",description:"Zyskaj przewagę nad innymi!",extraText:"✔ AutoClicker poprawia Twoją wydajność w pracy, zapewniając szybsze reakcje."})]}),J.jsxs("section",{className:"flex flex-col lg:flex-row gap-8 max-w-5xl w-full py-16 items-center",children:[J.jsx(ew,{duration:"1 Miesiąc",price:"29,99 zł",description:["✔ Pełen dostęp do wersji premium","✔ Większa szybkość klikania","✔ Priorytetowe wsparcie techniczne"]}),J.jsx(ew,{duration:"1 Rok",price:"289,99 zł",description:["✔ Oszczędzasz 69,89zł","✔ Wszystkie funkcje premium przez cały rok","✔ Najlepsza oszczędność","✔ Ekskluzywne aktualizacje i bonusy"],bestValue:!0})]})]})}function sg({icon:t,title:e,description:r,extraText:a}){return J.jsxs("div",{className:"flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg text-center features--section__item",children:[J.jsx("div",{className:"text-green-400 mb-4",children:t}),J.jsx("h3",{className:"text-2xl font-semibold",children:e}),J.jsx("p",{className:"text-gray-400 mt-2 text-lg",children:r}),J.jsx("p",{className:"text-gray-300 mt-2",children:a})]})}function ew({duration:t,price:e,description:r,bestValue:a}){return J.jsxs("div",{className:`p-6 rounded-2xl shadow-lg w-full text-center ${a?"border-2 border-green-400 bg-gray-800":"bg-gray-900"}`,style:{display:"flex",flexDirection:"column",height:"300px",justifyContent:"space-between",padding:"10px",alignItems:"center",paddingBottom:"20px"},children:[J.jsx("h3",{className:"text-4xl font-bold text-green-400",children:t}),J.jsx("p",{className:"text-2xl font-semibold text-white mt-2",children:e}),J.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-between"},children:r.map(o=>J.jsx("p",{className:"text-gray-400 mt-2 text-lg whitespace-pre-line",style:{marginBottom:"10px"},children:o}))}),J.jsx("button",{className:" bg-orange-500 hover:pointer hover:bg-orange-600 px-6 text-xlg py-2 rounded-lg text-white font-semibold shadow-md",style:{width:"70%",padding:"10px"},children:"Kup Teraz"})]})}function MI(){const[t,e]=B.useState({isVisible:!1,title:"",type:"",message:""}),r=B.useContext(gd);return B.useEffect(()=>{const a=zL(Hh,o=>{o!==null?(r.authenticate(o),e({isVisible:!0,title:"",type:"success",message:"Zalogowano !!"})):r.logout()});return()=>a()},[r]),B.useEffect(()=>{if(t.isVisible){const a=setTimeout(()=>{e({isVisible:!1,title:"",type:"",message:""})},4e3);return()=>clearTimeout(a)}},[t,e]),J.jsxs("div",{className:"main",children:[t.isVisible&&J.jsx(g9.div,{style:{position:"absolute",top:"5%",zIndex:101},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:J.jsxs(RD,{variant:"filled",severity:t.type,autoCapitalize:"characters",onClose:()=>{e({isVisible:!1,title:"",type:"",message:""})},children:[t.title.length?J.jsx(BD,{children:t.title}):null,t.message]})}),J.jsxs(_C,{children:[J.jsxs(Su,{path:"/",element:J.jsx(v7,{setAlertMessage:e}),children:[J.jsx(Su,{path:"/",element:J.jsx(DI,{})}),J.jsx(Su,{path:"/panel",element:J.jsx(SI,{})})]}),J.jsx(Su,{path:"/login",element:J.jsx(b7,{})})]})]})}const PI=({children:t})=>{const[e,r]=B.useState(null),l={currentUser:e,authenticate:async c=>{await W8(c)&&r(c)},logout:()=>{r(!1)}};return J.jsx(gd.Provider,{value:l,children:t})};P_.createRoot(document.getElementById("root")).render(J.jsx(B.StrictMode,{children:J.jsx(PI,{children:J.jsx(KC,{children:J.jsx(MI,{})})})}));
