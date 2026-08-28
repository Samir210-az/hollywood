function vy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lp={exports:{}},yl={},Mp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),wy=Symbol.for("react.portal"),Ey=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),ky=Symbol.for("react.forward_ref"),xy=Symbol.for("react.suspense"),Ny=Symbol.for("react.memo"),Py=Symbol.for("react.lazy"),rh=Symbol.iterator;function Ry(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var Fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jp=Object.assign,Up={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=Up,this.updater=n||Fp}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zp(){}zp.prototype=Qr.prototype;function uc(t,e,n){this.props=t,this.context=e,this.refs=Up,this.updater=n||Fp}var cc=uc.prototype=new zp;cc.constructor=uc;jp(cc,Qr.prototype);cc.isPureReactComponent=!0;var ih=Array.isArray,Bp=Object.prototype.hasOwnProperty,dc={current:null},Wp={key:!0,ref:!0,__self:!0,__source:!0};function Vp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bp.call(e,r)&&!Wp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Es,type:t,key:s,ref:o,props:i,_owner:dc.current}}function by(t,e){return{$$typeof:Es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Es}function Ay(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sh=/\/+/g;function ia(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ay(""+t.key):e.toString(36)}function lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Es:case wy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ia(o,0):r,ih(i)?(n="",t!=null&&(n=t.replace(sh,"$&/")+"/"),lo(i,e,n,"",function(u){return u})):i!=null&&(hc(i)&&(i=by(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ih(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ia(s,l);o+=lo(s,e,n,a,i)}else if(a=Ry(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ia(s,l++),o+=lo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zs(t,e,n){if(t==null)return t;var r=[],i=0;return lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var be={current:null},ao={transition:null},Dy={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:ao,ReactCurrentOwner:dc};function $p(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:zs,forEach:function(t,e,n){zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zs(t,function(){e++}),e},toArray:function(t){return zs(t,function(e){return e})||[]},only:function(t){if(!hc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Qr;U.Fragment=Ey;U.Profiler=Sy;U.PureComponent=uc;U.StrictMode=Cy;U.Suspense=xy;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;U.act=$p;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Bp.call(e,a)&&!Wp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Es,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Ty,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iy,_context:t},t.Consumer=t};U.createElement=Vp;U.createFactory=function(t){var e=Vp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:ky,render:t}};U.isValidElement=hc;U.lazy=function(t){return{$$typeof:Py,_payload:{_status:-1,_result:t},_init:Oy}};U.memo=function(t,e){return{$$typeof:Ny,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=ao.transition;ao.transition={};try{t()}finally{ao.transition=e}};U.unstable_act=$p;U.useCallback=function(t,e){return be.current.useCallback(t,e)};U.useContext=function(t){return be.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return be.current.useDeferredValue(t)};U.useEffect=function(t,e){return be.current.useEffect(t,e)};U.useId=function(){return be.current.useId()};U.useImperativeHandle=function(t,e,n){return be.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return be.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return be.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return be.current.useMemo(t,e)};U.useReducer=function(t,e,n){return be.current.useReducer(t,e,n)};U.useRef=function(t){return be.current.useRef(t)};U.useState=function(t){return be.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return be.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return be.current.useTransition()};U.version="18.3.1";Mp.exports=U;var C=Mp.exports;const Hp=yy(C),Ly=vy({__proto__:null,default:Hp},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=C,Fy=Symbol.for("react.element"),jy=Symbol.for("react.fragment"),Uy=Object.prototype.hasOwnProperty,zy=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function Gp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Uy.call(e,r)&&!By.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fy,type:t,key:s,ref:o,props:i,_owner:zy.current}}yl.Fragment=jy;yl.jsx=Gp;yl.jsxs=Gp;Lp.exports=yl;var g=Lp.exports,Ha={},Kp={exports:{}},He={},qp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,O){var D=x.length;x.push(O);e:for(;0<D;){var ie=D-1>>>1,he=x[ie];if(0<i(he,O))x[ie]=O,x[D]=he,D=ie;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var O=x[0],D=x.pop();if(D!==O){x[0]=D;e:for(var ie=0,he=x.length,js=he>>>1;ie<js;){var An=2*(ie+1)-1,ra=x[An],On=An+1,Us=x[On];if(0>i(ra,D))On<he&&0>i(Us,ra)?(x[ie]=Us,x[On]=D,ie=On):(x[ie]=ra,x[An]=D,ie=An);else if(On<he&&0>i(Us,D))x[ie]=Us,x[On]=D,ie=On;else break e}}return O}function i(x,O){var D=x.sortIndex-O.sortIndex;return D!==0?D:x.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,c=null,d=3,_=!1,m=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(x){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=x)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function w(x){if(y=!1,v(x),!m)if(n(a)!==null)m=!0,ta(T);else{var O=n(u);O!==null&&na(w,O.startTime-x)}}function T(x,O){m=!1,y&&(y=!1,p(R),R=-1),_=!0;var D=d;try{for(v(O),c=n(a);c!==null&&(!(c.expirationTime>O)||x&&!nt());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,d=c.priorityLevel;var he=ie(c.expirationTime<=O);O=t.unstable_now(),typeof he=="function"?c.callback=he:c===n(a)&&r(a),v(O)}else r(a);c=n(a)}if(c!==null)var js=!0;else{var An=n(u);An!==null&&na(w,An.startTime-O),js=!1}return js}finally{c=null,d=D,_=!1}}var N=!1,P=null,R=-1,q=5,F=-1;function nt(){return!(t.unstable_now()-F<q)}function ai(){if(P!==null){var x=t.unstable_now();F=x;var O=!0;try{O=P(!0,x)}finally{O?ui():(N=!1,P=null)}}else N=!1}var ui;if(typeof f=="function")ui=function(){f(ai)};else if(typeof MessageChannel<"u"){var nh=new MessageChannel,_y=nh.port2;nh.port1.onmessage=ai,ui=function(){_y.postMessage(null)}}else ui=function(){E(ai,0)};function ta(x){P=x,N||(N=!0,ui())}function na(x,O){R=E(function(){x(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){m||_||(m=!0,ta(T))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var D=d;d=O;try{return x()}finally{d=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,O){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var D=d;d=x;try{return O()}finally{d=D}},t.unstable_scheduleCallback=function(x,O,D){var ie=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ie+D:ie):D=ie,x){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=D+he,x={id:h++,callback:O,priorityLevel:x,startTime:D,expirationTime:he,sortIndex:-1},D>ie?(x.sortIndex=D,e(u,x),n(a)===null&&x===n(u)&&(y?(p(R),R=-1):y=!0,na(w,D-ie))):(x.sortIndex=he,e(a,x),m||_||(m=!0,ta(T))),x},t.unstable_shouldYield=nt,t.unstable_wrapCallback=function(x){var O=d;return function(){var D=d;d=O;try{return x.apply(this,arguments)}finally{d=D}}}})(Qp);qp.exports=Qp;var Wy=qp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=C,$e=Wy;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp=new Set,Vi={};function nr(t,e){Lr(t,e),Lr(t+"Capture",e)}function Lr(t,e){for(Vi[t]=e,t=0;t<e.length;t++)Yp.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ga=Object.prototype.hasOwnProperty,$y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},lh={};function Hy(t){return Ga.call(lh,t)?!0:Ga.call(oh,t)?!1:$y.test(t)?lh[t]=!0:(oh[t]=!0,!1)}function Gy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ky(t,e,n,r){if(e===null||typeof e>"u"||Gy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function pc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fc,pc);we[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fc,pc);we[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fc,pc);we[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function mc(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ky(e,n,i,r)&&(n=null),r||i===null?Hy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),ar=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Zp=Symbol.for("react.offscreen"),ah=Symbol.iterator;function ci(t){return t===null||typeof t!="object"?null:(t=ah&&t[ah]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,sa;function Ci(t){if(sa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sa=e&&e[1]||""}return`
`+sa+t}var oa=!1;function la(t,e){if(!t||oa)return"";oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{oa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function qy(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=la(t.type,!1),t;case 11:return t=la(t.type.render,!1),t;case 1:return t=la(t.type,!0),t;default:return""}}function Ya(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ur:return"Fragment";case ar:return"Portal";case Ka:return"Profiler";case gc:return"StrictMode";case qa:return"Suspense";case Qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xp:return(t.displayName||"Context")+".Consumer";case Jp:return(t._context.displayName||"Context")+".Provider";case _c:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vc:return e=t.displayName||null,e!==null?e:Ya(t.type)||"Memo";case Gt:e=t._payload,t=t._init;try{return Ya(t(e))}catch{}}return null}function Qy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(e);case 8:return e===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function em(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yy(t){var e=em(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=Yy(t))}function tm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=em(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function To(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ja(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nm(t,e){e=e.checked,e!=null&&mc(t,"checked",e,!1)}function Xa(t,e){nm(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Za(t,e.type,n):e.hasOwnProperty("defaultValue")&&Za(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ch(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Za(t,e,n){(e!=="number"||To(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Si=Array.isArray;function Cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Si(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function rm(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,sm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){Jy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ki[e]=ki[t]})});function om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ki.hasOwnProperty(t)&&ki[t]?(""+e).trim():e+"px"}function lm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=om(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xy=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(t,e){if(e){if(Xy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var su=null,Sr=null,Ir=null;function fh(t){if(t=Is(t)){if(typeof su!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Il(e),su(t.stateNode,t.type,e))}}function am(t){Sr?Ir?Ir.push(t):Ir=[t]:Sr=t}function um(){if(Sr){var t=Sr,e=Ir;if(Ir=Sr=null,fh(t),e)for(t=0;t<e.length;t++)fh(e[t])}}function cm(t,e){return t(e)}function dm(){}var aa=!1;function hm(t,e,n){if(aa)return t(e,n);aa=!0;try{return cm(t,e,n)}finally{aa=!1,(Sr!==null||Ir!==null)&&(dm(),um())}}function Hi(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var ou=!1;if(Dt)try{var di={};Object.defineProperty(di,"passive",{get:function(){ou=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{ou=!1}function Zy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var xi=!1,ko=null,xo=!1,lu=null,e0={onError:function(t){xi=!0,ko=t}};function t0(t,e,n,r,i,s,o,l,a){xi=!1,ko=null,Zy.apply(e0,arguments)}function n0(t,e,n,r,i,s,o,l,a){if(t0.apply(this,arguments),xi){if(xi){var u=ko;xi=!1,ko=null}else throw Error(S(198));xo||(xo=!0,lu=u)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ph(t){if(rr(t)!==t)throw Error(S(188))}function r0(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ph(i),t;if(s===r)return ph(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function pm(t){return t=r0(t),t!==null?mm(t):null}function mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mm(t);if(e!==null)return e;t=t.sibling}return null}var gm=$e.unstable_scheduleCallback,mh=$e.unstable_cancelCallback,i0=$e.unstable_shouldYield,s0=$e.unstable_requestPaint,se=$e.unstable_now,o0=$e.unstable_getCurrentPriorityLevel,wc=$e.unstable_ImmediatePriority,_m=$e.unstable_UserBlockingPriority,No=$e.unstable_NormalPriority,l0=$e.unstable_LowPriority,vm=$e.unstable_IdlePriority,wl=null,yt=null;function a0(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:d0,u0=Math.log,c0=Math.LN2;function d0(t){return t>>>=0,t===0?32:31-(u0(t)/c0|0)|0}var $s=64,Hs=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Po(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ii(l):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ht(e),i=1<<n,r|=t[n],e&=~i;return r}function h0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ht(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=h0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ym(){var t=$s;return $s<<=1,!($s&4194240)&&($s=64),t}function ua(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=n}function p0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ec(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function wm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Em,Cc,Cm,Sm,Im,uu=!1,Gs=[],sn=null,on=null,ln=null,Gi=new Map,Ki=new Map,qt=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Gi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(e.pointerId)}}function hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Is(e),e!==null&&Cc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function g0(t,e,n,r,i){switch(e){case"focusin":return sn=hi(sn,t,e,n,r,i),!0;case"dragenter":return on=hi(on,t,e,n,r,i),!0;case"mouseover":return ln=hi(ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,hi(Gi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ki.set(s,hi(Ki.get(s)||null,t,e,n,r,i)),!0}return!1}function Tm(t){var e=jn(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=fm(n),e!==null){t.blockedOn=e,Im(t.priority,function(){Cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return e=Is(n),e!==null&&Cc(e),t.blockedOn=n,!1;e.shift()}return!0}function _h(t,e,n){uo(t)&&n.delete(e)}function _0(){uu=!1,sn!==null&&uo(sn)&&(sn=null),on!==null&&uo(on)&&(on=null),ln!==null&&uo(ln)&&(ln=null),Gi.forEach(_h),Ki.forEach(_h)}function fi(t,e){t.blockedOn===e&&(t.blockedOn=null,uu||(uu=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,_0)))}function qi(t){function e(i){return fi(i,t)}if(0<Gs.length){fi(Gs[0],t);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&fi(sn,t),on!==null&&fi(on,t),ln!==null&&fi(ln,t),Gi.forEach(e),Ki.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&qt.shift()}var Tr=Wt.ReactCurrentBatchConfig,Ro=!0;function v0(t,e,n,r){var i=W,s=Tr.transition;Tr.transition=null;try{W=1,Sc(t,e,n,r)}finally{W=i,Tr.transition=s}}function y0(t,e,n,r){var i=W,s=Tr.transition;Tr.transition=null;try{W=4,Sc(t,e,n,r)}finally{W=i,Tr.transition=s}}function Sc(t,e,n,r){if(Ro){var i=cu(t,e,n,r);if(i===null)ya(t,e,r,bo,n),gh(t,r);else if(g0(i,t,e,n,r))r.stopPropagation();else if(gh(t,r),e&4&&-1<m0.indexOf(t)){for(;i!==null;){var s=Is(i);if(s!==null&&Em(s),s=cu(t,e,n,r),s===null&&ya(t,e,r,bo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ya(t,e,r,null,n)}}var bo=null;function cu(t,e,n,r){if(bo=null,t=yc(r),t=jn(t),t!==null)if(e=rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bo=t,null}function km(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case wc:return 1;case _m:return 4;case No:case l0:return 16;case vm:return 536870912;default:return 16}default:return 16}}var en=null,Ic=null,co=null;function xm(){if(co)return co;var t,e=Ic,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return co=i.slice(t,1<r?1-r:void 0)}function ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function vh(){return!1}function Ge(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ks:vh,this.isPropagationStopped=vh,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Ge(Yr),Ss=ee({},Yr,{view:0,detail:0}),w0=Ge(Ss),ca,da,pi,El=ee({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(ca=t.screenX-pi.screenX,da=t.screenY-pi.screenY):da=ca=0,pi=t),ca)},movementY:function(t){return"movementY"in t?t.movementY:da}}),yh=Ge(El),E0=ee({},El,{dataTransfer:0}),C0=Ge(E0),S0=ee({},Ss,{relatedTarget:0}),ha=Ge(S0),I0=ee({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=Ge(I0),k0=ee({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x0=Ge(k0),N0=ee({},Yr,{data:0}),wh=Ge(N0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b0[t])?!!e[t]:!1}function kc(){return A0}var O0=ee({},Ss,{key:function(t){if(t.key){var e=P0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=Ge(O0),L0=ee({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Ge(L0),M0=ee({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),F0=Ge(M0),j0=ee({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Ge(j0),z0=ee({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Ge(z0),W0=[9,13,27,32],xc=Dt&&"CompositionEvent"in window,Ni=null;Dt&&"documentMode"in document&&(Ni=document.documentMode);var V0=Dt&&"TextEvent"in window&&!Ni,Nm=Dt&&(!xc||Ni&&8<Ni&&11>=Ni),Ch=" ",Sh=!1;function Pm(t,e){switch(t){case"keyup":return W0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function $0(t,e){switch(t){case"compositionend":return Rm(e);case"keypress":return e.which!==32?null:(Sh=!0,Ch);case"textInput":return t=e.data,t===Ch&&Sh?null:t;default:return null}}function H0(t,e){if(cr)return t==="compositionend"||!xc&&Pm(t,e)?(t=xm(),co=Ic=en=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nm&&e.locale!=="ko"?null:e.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!G0[t.type]:e==="textarea"}function bm(t,e,n,r){am(r),e=Ao(e,"onChange"),0<e.length&&(n=new Tc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Qi=null;function K0(t){Wm(t,0)}function Cl(t){var e=fr(t);if(tm(e))return t}function q0(t,e){if(t==="change")return e}var Am=!1;if(Dt){var fa;if(Dt){var pa="oninput"in document;if(!pa){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),pa=typeof Th.oninput=="function"}fa=pa}else fa=!1;Am=fa&&(!document.documentMode||9<document.documentMode)}function kh(){Pi&&(Pi.detachEvent("onpropertychange",Om),Qi=Pi=null)}function Om(t){if(t.propertyName==="value"&&Cl(Qi)){var e=[];bm(e,Qi,t,yc(t)),hm(K0,e)}}function Q0(t,e,n){t==="focusin"?(kh(),Pi=e,Qi=n,Pi.attachEvent("onpropertychange",Om)):t==="focusout"&&kh()}function Y0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Qi)}function J0(t,e){if(t==="click")return Cl(e)}function X0(t,e){if(t==="input"||t==="change")return Cl(e)}function Z0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:Z0;function Yi(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ga.call(e,i)||!mt(t[i],e[i]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,e){var n=xh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function Dm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var t=window,e=To();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=To(t.document)}return e}function Nc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ew(t){var e=Lm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dm(n.ownerDocument.documentElement,n)){if(r!==null&&Nc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nh(n,s);var o=Nh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tw=Dt&&"documentMode"in document&&11>=document.documentMode,dr=null,du=null,Ri=null,hu=!1;function Ph(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||dr==null||dr!==To(r)||(r=dr,"selectionStart"in r&&Nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Yi(Ri,r)||(Ri=r,r=Ao(du,"onSelect"),0<r.length&&(e=new Tc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=dr)))}function qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},ma={},Mm={};Dt&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Sl(t){if(ma[t])return ma[t];if(!hr[t])return t;var e=hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mm)return ma[t]=e[n];return t}var Fm=Sl("animationend"),jm=Sl("animationiteration"),Um=Sl("animationstart"),zm=Sl("transitionend"),Bm=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){Bm.set(t,e),nr(e,[t])}for(var ga=0;ga<Rh.length;ga++){var _a=Rh[ga],nw=_a.toLowerCase(),rw=_a[0].toUpperCase()+_a.slice(1);kn(nw,"on"+rw)}kn(Fm,"onAnimationEnd");kn(jm,"onAnimationIteration");kn(Um,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(zm,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function bh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,n0(r,e,void 0,t),t.currentTarget=null}function Wm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;bh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;bh(i,l,u),s=a}}}if(xo)throw t=lu,xo=!1,lu=null,t}function Q(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var r=t+"__bubble";n.has(r)||(Vm(e,t,2,!1),n.add(r))}function va(t,e,n){var r=0;e&&(r|=4),Vm(n,t,r,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function Ji(t){if(!t[Qs]){t[Qs]=!0,Yp.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||va(n,!1,t),va(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,va("selectionchange",!1,e))}}function Vm(t,e,n,r){switch(km(e)){case 1:var i=v0;break;case 4:i=y0;break;default:i=Sc}n=i.bind(null,e,n,t),i=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ya(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}hm(function(){var u=s,h=yc(n),c=[];e:{var d=Bm.get(t);if(d!==void 0){var _=Tc,m=t;switch(t){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":_=D0;break;case"focusin":m="focus",_=ha;break;case"focusout":m="blur",_=ha;break;case"beforeblur":case"afterblur":_=ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=F0;break;case Fm:case jm:case Um:_=T0;break;case zm:_=U0;break;case"scroll":_=w0;break;case"wheel":_=B0;break;case"copy":case"cut":case"paste":_=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Eh}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,p!==null&&(w=Hi(f,p),w!=null&&y.push(Xi(f,w,v)))),E)break;f=f.return}0<y.length&&(d=new _(d,m,null,n,h),c.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",d&&n!==iu&&(m=n.relatedTarget||n.fromElement)&&(jn(m)||m[Lt]))break e;if((_||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,_?(m=n.relatedTarget||n.toElement,_=u,m=m?jn(m):null,m!==null&&(E=rr(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(_=null,m=u),_!==m)){if(y=yh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Eh,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=_==null?d:fr(_),v=m==null?d:fr(m),d=new y(w,f+"leave",_,n,h),d.target=E,d.relatedTarget=v,w=null,jn(h)===u&&(y=new y(p,f+"enter",m,n,h),y.target=v,y.relatedTarget=E,w=y),E=w,_&&m)t:{for(y=_,p=m,f=0,v=y;v;v=or(v))f++;for(v=0,w=p;w;w=or(w))v++;for(;0<f-v;)y=or(y),f--;for(;0<v-f;)p=or(p),v--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=or(y),p=or(p)}y=null}else y=null;_!==null&&Ah(c,d,_,y,!1),m!==null&&E!==null&&Ah(c,E,m,y,!0)}}e:{if(d=u?fr(u):window,_=d.nodeName&&d.nodeName.toLowerCase(),_==="select"||_==="input"&&d.type==="file")var T=q0;else if(Ih(d))if(Am)T=X0;else{T=Y0;var N=Q0}else(_=d.nodeName)&&_.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=J0);if(T&&(T=T(t,u))){bm(c,T,n,h);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&Za(d,"number",d.value)}switch(N=u?fr(u):window,t){case"focusin":(Ih(N)||N.contentEditable==="true")&&(dr=N,du=u,Ri=null);break;case"focusout":Ri=du=dr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Ph(c,n,h);break;case"selectionchange":if(tw)break;case"keydown":case"keyup":Ph(c,n,h)}var P;if(xc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else cr?Pm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Nm&&n.locale!=="ko"&&(cr||R!=="onCompositionStart"?R==="onCompositionEnd"&&cr&&(P=xm()):(en=h,Ic="value"in en?en.value:en.textContent,cr=!0)),N=Ao(u,R),0<N.length&&(R=new wh(R,t,null,n,h),c.push({event:R,listeners:N}),P?R.data=P:(P=Rm(n),P!==null&&(R.data=P)))),(P=V0?$0(t,n):H0(t,n))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(h=new wh("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=P))}Wm(c,e)})}function Xi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ao(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hi(t,n),s!=null&&r.unshift(Xi(t,s,i)),s=Hi(t,e),s!=null&&r.push(Xi(t,s,i))),t=t.return}return r}function or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ah(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hi(n,s),a!=null&&o.unshift(Xi(n,a,l))):i||(a=Hi(n,s),a!=null&&o.push(Xi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sw=/\r\n?/g,ow=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(sw,`
`).replace(ow,"")}function Ys(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(S(425))}function Oo(){}var fu=null,pu=null;function mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,lw=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,aw=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(t){return Dh.resolve(null).then(t).catch(uw)}:gu;function uw(t){setTimeout(function(){throw t})}function wa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Jr,Zi="__reactProps$"+Jr,Lt="__reactContainer$"+Jr,_u="__reactEvents$"+Jr,cw="__reactListeners$"+Jr,dw="__reactHandles$"+Jr;function jn(t){var e=t[vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lt]||n[vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lh(t);t!==null;){if(n=t[vt])return n;t=Lh(t)}return e}t=n,n=t.parentNode}return null}function Is(t){return t=t[vt]||t[Lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Il(t){return t[Zi]||null}var vu=[],pr=-1;function xn(t){return{current:t}}function Y(t){0>pr||(t.current=vu[pr],vu[pr]=null,pr--)}function K(t,e){pr++,vu[pr]=t.current,t.current=e}var En={},Te=xn(En),Me=xn(!1),$n=En;function Mr(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function Do(){Y(Me),Y(Te)}function Mh(t,e,n){if(Te.current!==En)throw Error(S(168));K(Te,e),K(Me,n)}function $m(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Qy(t)||"Unknown",i));return ee({},n,r)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,$n=Te.current,K(Te,t),K(Me,Me.current),!0}function Fh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=$m(t,e,$n),r.__reactInternalMemoizedMergedChildContext=t,Y(Me),Y(Te),K(Te,t)):Y(Me),K(Me,n)}var kt=null,Tl=!1,Ea=!1;function Hm(t){kt===null?kt=[t]:kt.push(t)}function hw(t){Tl=!0,Hm(t)}function Nn(){if(!Ea&&kt!==null){Ea=!0;var t=0,e=W;try{var n=kt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,Tl=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),gm(wc,Nn),i}finally{W=e,Ea=!1}}return null}var mr=[],gr=0,Mo=null,Fo=0,qe=[],Qe=0,Hn=null,xt=1,Nt="";function Dn(t,e){mr[gr++]=Fo,mr[gr++]=Mo,Mo=t,Fo=e}function Gm(t,e,n){qe[Qe++]=xt,qe[Qe++]=Nt,qe[Qe++]=Hn,Hn=t;var r=xt;t=Nt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-ht(e)+i|n<<i|r,Nt=s+t}else xt=1<<s|n<<i|r,Nt=t}function Pc(t){t.return!==null&&(Dn(t,1),Gm(t,1,0))}function Rc(t){for(;t===Mo;)Mo=mr[--gr],mr[gr]=null,Fo=mr[--gr],mr[gr]=null;for(;t===Hn;)Hn=qe[--Qe],qe[Qe]=null,Nt=qe[--Qe],qe[Qe]=null,xt=qe[--Qe],qe[Qe]=null}var Ve=null,We=null,J=!1,lt=null;function Km(t,e){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,We=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:xt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,We=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(J){var e=We;if(e){var n=e;if(!jh(t,e)){if(yu(t))throw Error(S(418));e=an(n.nextSibling);var r=Ve;e&&jh(t,e)?Km(r,n):(t.flags=t.flags&-4097|2,J=!1,Ve=t)}}else{if(yu(t))throw Error(S(418));t.flags=t.flags&-4097|2,J=!1,Ve=t}}}function Uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function Js(t){if(t!==Ve)return!1;if(!J)return Uh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mu(t.type,t.memoizedProps)),e&&(e=We)){if(yu(t))throw qm(),Error(S(418));for(;e;)Km(t,e),e=an(e.nextSibling)}if(Uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Ve?an(t.stateNode.nextSibling):null;return!0}function qm(){for(var t=We;t;)t=an(t.nextSibling)}function Fr(){We=Ve=null,J=!1}function bc(t){lt===null?lt=[t]:lt.push(t)}var fw=Wt.ReactCurrentBatchConfig;function mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Xs(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zh(t){var e=t._init;return e(t._payload)}function Qm(t){function e(p,f){if(t){var v=p.deletions;v===null?(p.deletions=[f],p.flags|=16):v.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=hn(p,f),p.index=0,p.sibling=null,p}function s(p,f,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<f?(p.flags|=2,f):v):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,v,w){return f===null||f.tag!==6?(f=Na(v,p.mode,w),f.return=p,f):(f=i(f,v),f.return=p,f)}function a(p,f,v,w){var T=v.type;return T===ur?h(p,f,v.props.children,w,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gt&&zh(T)===f.type)?(w=i(f,v.props),w.ref=mi(p,f,v),w.return=p,w):(w=yo(v.type,v.key,v.props,null,p.mode,w),w.ref=mi(p,f,v),w.return=p,w)}function u(p,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Pa(v,p.mode,w),f.return=p,f):(f=i(f,v.children||[]),f.return=p,f)}function h(p,f,v,w,T){return f===null||f.tag!==7?(f=Vn(v,p.mode,w,T),f.return=p,f):(f=i(f,v),f.return=p,f)}function c(p,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Na(""+f,p.mode,v),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bs:return v=yo(f.type,f.key,f.props,null,p.mode,v),v.ref=mi(p,null,f),v.return=p,v;case ar:return f=Pa(f,p.mode,v),f.return=p,f;case Gt:var w=f._init;return c(p,w(f._payload),v)}if(Si(f)||ci(f))return f=Vn(f,p.mode,v,null),f.return=p,f;Xs(p,f)}return null}function d(p,f,v,w){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:l(p,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bs:return v.key===T?a(p,f,v,w):null;case ar:return v.key===T?u(p,f,v,w):null;case Gt:return T=v._init,d(p,f,T(v._payload),w)}if(Si(v)||ci(v))return T!==null?null:h(p,f,v,w,null);Xs(p,v)}return null}function _(p,f,v,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(v)||null,l(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bs:return p=p.get(w.key===null?v:w.key)||null,a(f,p,w,T);case ar:return p=p.get(w.key===null?v:w.key)||null,u(f,p,w,T);case Gt:var N=w._init;return _(p,f,v,N(w._payload),T)}if(Si(w)||ci(w))return p=p.get(v)||null,h(f,p,w,T,null);Xs(f,w)}return null}function m(p,f,v,w){for(var T=null,N=null,P=f,R=f=0,q=null;P!==null&&R<v.length;R++){P.index>R?(q=P,P=null):q=P.sibling;var F=d(p,P,v[R],w);if(F===null){P===null&&(P=q);break}t&&P&&F.alternate===null&&e(p,P),f=s(F,f,R),N===null?T=F:N.sibling=F,N=F,P=q}if(R===v.length)return n(p,P),J&&Dn(p,R),T;if(P===null){for(;R<v.length;R++)P=c(p,v[R],w),P!==null&&(f=s(P,f,R),N===null?T=P:N.sibling=P,N=P);return J&&Dn(p,R),T}for(P=r(p,P);R<v.length;R++)q=_(P,p,R,v[R],w),q!==null&&(t&&q.alternate!==null&&P.delete(q.key===null?R:q.key),f=s(q,f,R),N===null?T=q:N.sibling=q,N=q);return t&&P.forEach(function(nt){return e(p,nt)}),J&&Dn(p,R),T}function y(p,f,v,w){var T=ci(v);if(typeof T!="function")throw Error(S(150));if(v=T.call(v),v==null)throw Error(S(151));for(var N=T=null,P=f,R=f=0,q=null,F=v.next();P!==null&&!F.done;R++,F=v.next()){P.index>R?(q=P,P=null):q=P.sibling;var nt=d(p,P,F.value,w);if(nt===null){P===null&&(P=q);break}t&&P&&nt.alternate===null&&e(p,P),f=s(nt,f,R),N===null?T=nt:N.sibling=nt,N=nt,P=q}if(F.done)return n(p,P),J&&Dn(p,R),T;if(P===null){for(;!F.done;R++,F=v.next())F=c(p,F.value,w),F!==null&&(f=s(F,f,R),N===null?T=F:N.sibling=F,N=F);return J&&Dn(p,R),T}for(P=r(p,P);!F.done;R++,F=v.next())F=_(P,p,R,F.value,w),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?R:F.key),f=s(F,f,R),N===null?T=F:N.sibling=F,N=F);return t&&P.forEach(function(ai){return e(p,ai)}),J&&Dn(p,R),T}function E(p,f,v,w){if(typeof v=="object"&&v!==null&&v.type===ur&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bs:e:{for(var T=v.key,N=f;N!==null;){if(N.key===T){if(T=v.type,T===ur){if(N.tag===7){n(p,N.sibling),f=i(N,v.props.children),f.return=p,p=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gt&&zh(T)===N.type){n(p,N.sibling),f=i(N,v.props),f.ref=mi(p,N,v),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}v.type===ur?(f=Vn(v.props.children,p.mode,w,v.key),f.return=p,p=f):(w=yo(v.type,v.key,v.props,null,p.mode,w),w.ref=mi(p,f,v),w.return=p,p=w)}return o(p);case ar:e:{for(N=v.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(p,f.sibling),f=i(f,v.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Pa(v,p.mode,w),f.return=p,p=f}return o(p);case Gt:return N=v._init,E(p,f,N(v._payload),w)}if(Si(v))return m(p,f,v,w);if(ci(v))return y(p,f,v,w);Xs(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,v),f.return=p,p=f):(n(p,f),f=Na(v,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var jr=Qm(!0),Ym=Qm(!1),jo=xn(null),Uo=null,_r=null,Ac=null;function Oc(){Ac=_r=Uo=null}function Dc(t){var e=jo.current;Y(jo),t._currentValue=e}function Eu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function kr(t,e){Uo=t,Ac=_r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:e,next:null},_r===null){if(Uo===null)throw Error(S(308));_r=t,Uo.dependencies={lanes:0,firstContext:t}}else _r=_r.next=t;return e}var Un=null;function Lc(t){Un===null?Un=[t]:Un.push(t)}function Jm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Mc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,Lc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}function Bh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zo(t,e,n,r){var i=t.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,h=u=a=null,l=s;do{var d=l.lane,_=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=t,y=l;switch(d=e,_=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){c=m.call(_,c,d);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(_,c,d):m,d==null)break e;c=ee({},c,d);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else _={eventTime:_,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=_,a=c):h=h.next=_,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kn|=o,t.lanes=o,t.memoizedState=c}}function Wh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ts={},wt=xn(Ts),es=xn(Ts),ts=xn(Ts);function zn(t){if(t===Ts)throw Error(S(174));return t}function Fc(t,e){switch(K(ts,e),K(es,t),K(wt,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tu(e,t)}Y(wt),K(wt,e)}function Ur(){Y(wt),Y(es),Y(ts)}function Zm(t){zn(ts.current);var e=zn(wt.current),n=tu(e,t.type);e!==n&&(K(es,t),K(wt,n))}function jc(t){es.current===t&&(Y(wt),Y(es))}var X=xn(0);function Bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ca=[];function Uc(){for(var t=0;t<Ca.length;t++)Ca[t]._workInProgressVersionPrimary=null;Ca.length=0}var po=Wt.ReactCurrentDispatcher,Sa=Wt.ReactCurrentBatchConfig,Gn=0,Z=null,ae=null,pe=null,Wo=!1,bi=!1,ns=0,pw=0;function Ce(){throw Error(S(321))}function zc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mt(t[n],e[n]))return!1;return!0}function Bc(t,e,n,r,i,s){if(Gn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,po.current=t===null||t.memoizedState===null?vw:yw,t=n(r,i),bi){s=0;do{if(bi=!1,ns=0,25<=s)throw Error(S(301));s+=1,pe=ae=null,e.updateQueue=null,po.current=ww,t=n(r,i)}while(bi)}if(po.current=Vo,e=ae!==null&&ae.next!==null,Gn=0,pe=ae=Z=null,Wo=!1,e)throw Error(S(300));return t}function Wc(){var t=ns!==0;return ns=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Z.memoizedState=pe=t:pe=pe.next=t,pe}function et(){if(ae===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=pe===null?Z.memoizedState:pe.next;if(e!==null)pe=e,ae=t;else{if(t===null)throw Error(S(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},pe===null?Z.memoizedState=pe=t:pe=pe.next=t}return pe}function rs(t,e){return typeof e=="function"?e(t):e}function Ia(t){var e=et(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((Gn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=h,Kn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,mt(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ta(t){var e=et(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mt(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function eg(){}function tg(t,e){var n=Z,r=et(),i=e(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Vc(ig.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,is(9,rg.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(S(349));Gn&30||ng(n,e,i)}return i}function ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rg(t,e,n,r){e.value=n,e.getSnapshot=r,sg(e)&&og(t)}function ig(t,e,n){return n(function(){sg(e)&&og(t)})}function sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mt(t,n)}catch{return!0}}function og(t){var e=Mt(t,1);e!==null&&ft(e,t,1,-1)}function Vh(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=_w.bind(null,Z,t),[e.memoizedState,t]}function is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lg(){return et().memoizedState}function mo(t,e,n,r){var i=_t();Z.flags|=t,i.memoizedState=is(1|e,n,void 0,r===void 0?null:r)}function kl(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&zc(r,o.deps)){i.memoizedState=is(e,n,s,r);return}}Z.flags|=t,i.memoizedState=is(1|e,n,s,r)}function $h(t,e){return mo(8390656,8,t,e)}function Vc(t,e){return kl(2048,8,t,e)}function ag(t,e){return kl(4,2,t,e)}function ug(t,e){return kl(4,4,t,e)}function cg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dg(t,e,n){return n=n!=null?n.concat([t]):null,kl(4,4,cg.bind(null,e,t),n)}function $c(){}function hg(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fg(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pg(t,e,n){return Gn&21?(mt(n,e)||(n=ym(),Z.lanes|=n,Kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function mw(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Sa.transition;Sa.transition={};try{t(!1),e()}finally{W=n,Sa.transition=r}}function mg(){return et().memoizedState}function gw(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gg(t))_g(e,n);else if(n=Jm(t,e,n,r),n!==null){var i=Ne();ft(n,t,r,i),vg(n,e,r)}}function _w(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gg(t))_g(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,mt(l,o)){var a=e.interleaved;a===null?(i.next=i,Lc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Jm(t,e,i,r),n!==null&&(i=Ne(),ft(n,t,r,i),vg(n,e,r))}}function gg(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function _g(t,e){bi=Wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ec(t,n)}}var Vo={readContext:Ze,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},vw={readContext:Ze,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mo(4194308,4,cg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return mo(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gw.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:$c,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=mw.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=_t();if(J){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),ge===null)throw Error(S(349));Gn&30||ng(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$h(ig.bind(null,r,s,t),[t]),r.flags|=2048,is(9,rg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=ge.identifierPrefix;if(J){var n=Nt,r=xt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yw={readContext:Ze,useCallback:hg,useContext:Ze,useEffect:Vc,useImperativeHandle:dg,useInsertionEffect:ag,useLayoutEffect:ug,useMemo:fg,useReducer:Ia,useRef:lg,useState:function(){return Ia(rs)},useDebugValue:$c,useDeferredValue:function(t){var e=et();return pg(e,ae.memoizedState,t)},useTransition:function(){var t=Ia(rs)[0],e=et().memoizedState;return[t,e]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1},ww={readContext:Ze,useCallback:hg,useContext:Ze,useEffect:Vc,useImperativeHandle:dg,useInsertionEffect:ag,useLayoutEffect:ug,useMemo:fg,useReducer:Ta,useRef:lg,useState:function(){return Ta(rs)},useDebugValue:$c,useDeferredValue:function(t){var e=et();return ae===null?e.memoizedState=t:pg(e,ae.memoizedState,t)},useTransition:function(){var t=Ta(rs)[0],e=et().memoizedState;return[t,e]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1};function st(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xl={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=dn(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ft(e,t,i,r),fo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=dn(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ft(e,t,i,r),fo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),r=dn(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(ft(e,t,r,n),fo(e,t,r))}};function Hh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function yg(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Fe(e)?$n:Te.current,r=e.contextTypes,s=(r=r!=null)?Mr(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Mc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Fe(e)?$n:Te.current,i.context=Mr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xl.enqueueReplaceState(i,i.state,null),zo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zr(t,e){try{var n="",r=e;do n+=qy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ka(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Iu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ew=typeof WeakMap=="function"?WeakMap:Map;function wg(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ho||(Ho=!0,Du=r),Iu(t,e)},n}function Eg(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Iu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Iu(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ew;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Lw.bind(null,t,e,n),e.then(t,t))}function qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t)}var Cw=Wt.ReactCurrentOwner,De=!1;function ke(t,e,n,r){e.child=t===null?Ym(e,null,n,r):jr(e,t.child,n,r)}function Yh(t,e,n,r,i){n=n.render;var s=e.ref;return kr(e,i),r=Bc(t,e,n,r,s,i),n=Wc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&n&&Pc(e),e.flags|=1,ke(t,e,r,i),e.child)}function Jh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cg(t,e,s,r,i)):(t=yo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,r)&&t.ref===e.ref)return Ft(t,e,i)}return e.flags|=1,t=hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Ft(t,e,i)}return Tu(t,e,n,r,i)}function Sg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(yr,Ue),Ue|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(yr,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(yr,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(yr,Ue),Ue|=r;return ke(t,e,i,n),e.child}function Ig(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tu(t,e,n,r,i){var s=Fe(n)?$n:Te.current;return s=Mr(e,s),kr(e,i),n=Bc(t,e,n,r,s,i),r=Wc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ft(t,e,i)):(J&&r&&Pc(e),e.flags|=1,ke(t,e,n,i),e.child)}function Xh(t,e,n,r,i){if(Fe(n)){var s=!0;Lo(e)}else s=!1;if(kr(e,i),e.stateNode===null)go(t,e),yg(e,n,r),Su(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Fe(n)?$n:Te.current,u=Mr(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Gh(e,o,r,u),Kt=!1;var d=e.memoizedState;o.state=d,zo(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Me.current||Kt?(typeof h=="function"&&(Cu(e,n,h,r),a=e.memoizedState),(l=Kt||Hh(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Fe(n)?$n:Te.current,a=Mr(e,a));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&Gh(e,o,r,a),Kt=!1,d=e.memoizedState,o.state=d,zo(e,r,o,i);var m=e.memoizedState;l!==c||d!==m||Me.current||Kt?(typeof _=="function"&&(Cu(e,n,_,r),m=e.memoizedState),(u=Kt||Hh(e,n,u,r,d,m,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ku(t,e,n,r,s,i)}function ku(t,e,n,r,i,s){Ig(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fh(e,n,!1),Ft(t,e,s);r=e.stateNode,Cw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&Fh(e,n,!0),e.child}function Tg(t){var e=t.stateNode;e.pendingContext?Mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(t,e.context,!1),Fc(t,e.containerInfo)}function Zh(t,e,n,r,i){return Fr(),bc(i),e.flags|=256,ke(t,e,n,r),e.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function kg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(X,i&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,r,0,null),t=Vn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nu(n),e.memoizedState=xu,t):Hc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Sw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hn(l,s):(s=Vn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xu,r}return s=t.child,t=s.sibling,r=hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hc(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zs(t,e,n,r){return r!==null&&bc(r),jr(e,t.child,null,n),t=Hc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ka(Error(S(422))),Zs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=Vn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jr(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=xu,s);if(!(e.mode&1))return Zs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=ka(s,r,void 0),Zs(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ft(r,t,i,-1))}return Jc(),r=ka(Error(S(421))),Zs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Mw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=an(i.nextSibling),Ve=e,J=!0,lt=null,t!==null&&(qe[Qe++]=xt,qe[Qe++]=Nt,qe[Qe++]=Hn,xt=t.id,Nt=t.overflow,Hn=e),e=Hc(e,r.children),e.flags|=4096,e)}function ef(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eu(t.return,e,n)}function xa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ef(t,n,e);else if(t.tag===19)ef(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),xa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}xa(e,!0,n,null,s);break;case"together":xa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ft(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Iw(t,e,n){switch(e.tag){case 3:Tg(e),Fr();break;case 5:Zm(e);break;case 1:Fe(e.type)&&Lo(e);break;case 4:Fc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?kg(t,e,n):(K(X,X.current&1),t=Ft(t,e,n),t!==null?t.sibling:null);K(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,Sg(t,e,n)}return Ft(t,e,n)}var Ng,Pu,Pg,Rg;Ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Pg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zn(wt.current);var s=null;switch(n){case"input":i=Ja(t,i),r=Ja(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=eu(t,i),r=eu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oo)}nu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rg=function(t,e,n,r){n!==r&&(e.flags|=4)};function gi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tw(t,e,n){var r=e.pendingProps;switch(Rc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return Fe(e.type)&&Do(),Se(e),null;case 3:return r=e.stateNode,Ur(),Y(Me),Y(Te),Uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,lt!==null&&(Fu(lt),lt=null))),Pu(t,e),Se(e),null;case 5:jc(e);var i=zn(ts.current);if(n=e.type,t!==null&&e.stateNode!=null)Pg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Se(e),null}if(t=zn(wt.current),Js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vt]=e,r[Zi]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Ti.length;i++)Q(Ti[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":uh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":dh(r,s),Q("invalid",r)}nu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",""+l]):Vi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ws(r),ch(r,s,!0);break;case"textarea":Ws(r),hh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vt]=e,t[Zi]=r,Ng(t,e,!1,!1),e.stateNode=t;e:{switch(o=ru(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ti.length;i++)Q(Ti[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":uh(t,r),i=Ja(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",t);break;case"textarea":dh(t,r),i=eu(t,r),Q("invalid",t);break;default:i=r}nu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?lm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&sm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&$i(t,a):typeof a=="number"&&$i(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&mc(t,s,a,o))}switch(n){case"input":Ws(t),ch(t,r,!1);break;case"textarea":Ws(t),hh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)Rg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=zn(ts.current),zn(wt.current),Js(e)){if(r=e.stateNode,n=e.memoizedProps,r[vt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:Ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return Se(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&We!==null&&e.mode&1&&!(e.flags&128))qm(),Fr(),e.flags|=98560,s=!1;else if(s=Js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[vt]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else lt!==null&&(Fu(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?de===0&&(de=3):Jc())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return Ur(),Pu(t,e),t===null&&Ji(e.stateNode.containerInfo),Se(e),null;case 10:return Dc(e.type._context),Se(e),null;case 17:return Fe(e.type)&&Do(),Se(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gi(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bo(t),o!==null){for(e.flags|=128,gi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Br&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Se(e),null}else 2*se()-s.renderingStartTime>Br&&n!==1073741824&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=X.current,K(X,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return Yc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function kw(t,e){switch(Rc(e),e.tag){case 1:return Fe(e.type)&&Do(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),Y(Me),Y(Te),Uc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return Ur(),null;case 10:return Dc(e.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var eo=!1,Ie=!1,xw=typeof WeakSet=="function"?WeakSet:Set,k=null;function vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Ru(t,e,n){try{n()}catch(r){te(t,e,r)}}var tf=!1;function Nw(t,e){if(fu=Ro,t=Lm(),Nc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,c=t,d=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)d=c,c=_;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++h===r&&(a=o),(_=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:t,selectionRange:n},Ro=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,E=m.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){te(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return m=tf,tf=!1,m}function Ai(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ru(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bg(t){var e=t.alternate;e!==null&&(t.alternate=null,bg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vt],delete e[Zi],delete e[_u],delete e[cw],delete e[dw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ag(t){return t.tag===5||t.tag===3||t.tag===4}function nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oo));else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var _e=null,ot=!1;function $t(t,e,n){for(n=n.child;n!==null;)Og(t,e,n),n=n.sibling}function Og(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Ie||vr(n,e);case 6:var r=_e,i=ot;_e=null,$t(t,e,n),_e=r,ot=i,_e!==null&&(ot?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ot?(t=_e,n=n.stateNode,t.nodeType===8?wa(t.parentNode,n):t.nodeType===1&&wa(t,n),qi(t)):wa(_e,n.stateNode));break;case 4:r=_e,i=ot,_e=n.stateNode.containerInfo,ot=!0,$t(t,e,n),_e=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ru(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!Ie&&(vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,$t(t,e,n),Ie=r):$t(t,e,n);break;default:$t(t,e,n)}}function rf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xw),e.forEach(function(r){var i=Fw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,ot=!1;break e;case 3:_e=l.stateNode.containerInfo,ot=!0;break e;case 4:_e=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(_e===null)throw Error(S(160));Og(s,o,i),_e=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dg(e,t),e=e.sibling}function Dg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),gt(t),r&4){try{Ai(3,t,t.return),Nl(3,t)}catch(y){te(t,t.return,y)}try{Ai(5,t,t.return)}catch(y){te(t,t.return,y)}}break;case 1:rt(e,t),gt(t),r&512&&n!==null&&vr(n,n.return);break;case 5:if(rt(e,t),gt(t),r&512&&n!==null&&vr(n,n.return),t.flags&32){var i=t.stateNode;try{$i(i,"")}catch(y){te(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&nm(i,s),ru(l,o);var u=ru(l,s);for(o=0;o<a.length;o+=2){var h=a[o],c=a[o+1];h==="style"?lm(i,c):h==="dangerouslySetInnerHTML"?sm(i,c):h==="children"?$i(i,c):mc(i,h,c,u)}switch(l){case"input":Xa(i,s);break;case"textarea":rm(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Cr(i,!!s.multiple,_,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(y){te(t,t.return,y)}}break;case 6:if(rt(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){te(t,t.return,y)}}break;case 3:if(rt(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(y){te(t,t.return,y)}break;case 4:rt(e,t),gt(t);break;case 13:rt(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qc=se())),r&4&&rf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||h,rt(e,t),Ie=u):rt(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(k=t,h=t.child;h!==null;){for(c=k=h;k!==null;){switch(d=k,_=d.child,d.tag){case 0:case 11:case 14:case 15:Ai(4,d,d.return);break;case 1:vr(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:vr(d,d.return);break;case 22:if(d.memoizedState!==null){of(c);continue}}_!==null?(_.return=d,k=_):of(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=om("display",o))}catch(y){te(t,t.return,y)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){te(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:rt(e,t),gt(t),r&4&&rf(t);break;case 21:break;default:rt(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ag(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var s=nf(t);Ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=nf(t);Au(t,l,o);break;default:throw Error(S(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pw(t,e,n){k=t,Lg(t)}function Lg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||eo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=eo;var u=Ie;if(eo=o,(Ie=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?lf(i):a!==null?(a.return=o,k=a):lf(i);for(;s!==null;)k=s,Lg(s),s=s.sibling;k=i,eo=l,Ie=u}sf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):sf(t)}}function sf(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&qi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ie||e.flags&512&&bu(e)}catch(d){te(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function of(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function lf(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{bu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{bu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var Rw=Math.ceil,$o=Wt.ReactCurrentDispatcher,Gc=Wt.ReactCurrentOwner,Xe=Wt.ReactCurrentBatchConfig,z=0,ge=null,le=null,ye=0,Ue=0,yr=xn(0),de=0,ss=null,Kn=0,Pl=0,Kc=0,Oi=null,Oe=null,qc=0,Br=1/0,Tt=null,Ho=!1,Du=null,cn=null,to=!1,tn=null,Go=0,Di=0,Lu=null,_o=-1,vo=0;function Ne(){return z&6?se():_o!==-1?_o:_o=se()}function dn(t){return t.mode&1?z&2&&ye!==0?ye&-ye:fw.transition!==null?(vo===0&&(vo=ym()),vo):(t=W,t!==0||(t=window.event,t=t===void 0?16:km(t.type)),t):1}function ft(t,e,n,r){if(50<Di)throw Di=0,Lu=null,Error(S(185));Cs(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(Pl|=n),de===4&&Qt(t,ye)),je(t,r),n===1&&z===0&&!(e.mode&1)&&(Br=se()+500,Tl&&Nn()))}function je(t,e){var n=t.callbackNode;f0(t,e);var r=Po(t,t===ge?ye:0);if(r===0)n!==null&&mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mh(n),e===1)t.tag===0?hw(af.bind(null,t)):Hm(af.bind(null,t)),aw(function(){!(z&6)&&Nn()}),n=null;else{switch(wm(r)){case 1:n=wc;break;case 4:n=_m;break;case 16:n=No;break;case 536870912:n=vm;break;default:n=No}n=Vg(n,Mg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mg(t,e){if(_o=-1,vo=0,z&6)throw Error(S(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=Po(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ko(t,r);else{e=r;var i=z;z|=2;var s=jg();(ge!==t||ye!==e)&&(Tt=null,Br=se()+500,Wn(t,e));do try{Ow();break}catch(l){Fg(t,l)}while(!0);Oc(),$o.current=s,z=i,le!==null?e=0:(ge=null,ye=0,e=de)}if(e!==0){if(e===2&&(i=au(t),i!==0&&(r=i,e=Mu(t,i))),e===1)throw n=ss,Wn(t,0),Qt(t,r),je(t,se()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!bw(i)&&(e=Ko(t,r),e===2&&(s=au(t),s!==0&&(r=s,e=Mu(t,s))),e===1))throw n=ss,Wn(t,0),Qt(t,r),je(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Ln(t,Oe,Tt);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=qc+500-se(),10<e)){if(Po(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ne(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gu(Ln.bind(null,t,Oe,Tt),e);break}Ln(t,Oe,Tt);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rw(r/1960))-r,10<r){t.timeoutHandle=gu(Ln.bind(null,t,Oe,Tt),r);break}Ln(t,Oe,Tt);break;case 5:Ln(t,Oe,Tt);break;default:throw Error(S(329))}}}return je(t,se()),t.callbackNode===n?Mg.bind(null,t):null}function Mu(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(Wn(t,e).flags|=256),t=Ko(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&Fu(e)),t}function Fu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function bw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~Kc,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ht(e),r=1<<n;t[n]=-1,e&=~r}}function af(t){if(z&6)throw Error(S(327));xr();var e=Po(t,0);if(!(e&1))return je(t,se()),null;var n=Ko(t,e);if(t.tag!==0&&n===2){var r=au(t);r!==0&&(e=r,n=Mu(t,r))}if(n===1)throw n=ss,Wn(t,0),Qt(t,e),je(t,se()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ln(t,Oe,Tt),je(t,se()),null}function Qc(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Br=se()+500,Tl&&Nn())}}function qn(t){tn!==null&&tn.tag===0&&!(z&6)&&xr();var e=z;z|=1;var n=Xe.transition,r=W;try{if(Xe.transition=null,W=1,t)return t()}finally{W=r,Xe.transition=n,z=e,!(z&6)&&Nn()}}function Yc(){Ue=yr.current,Y(yr)}function Wn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lw(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:Ur(),Y(Me),Y(Te),Uc();break;case 5:jc(r);break;case 4:Ur();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Dc(r.type._context);break;case 22:case 23:Yc()}n=n.return}if(ge=t,le=t=hn(t.current,null),ye=Ue=e,de=0,ss=null,Kc=Pl=Kn=0,Oe=Oi=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function Fg(t,e){do{var n=le;try{if(Oc(),po.current=Vo,Wo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wo=!1}if(Gn=0,pe=ae=Z=null,bi=!1,ns=0,Gc.current=null,n===null||n.return===null){de=1,ss=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,c=h.tag;if(!(h.mode&1)&&(c===0||c===11||c===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=qh(o);if(_!==null){_.flags&=-257,Qh(_,o,l,s,e),_.mode&1&&Kh(s,u,e),e=_,a=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(a),e.updateQueue=y}else m.add(a);break e}else{if(!(e&1)){Kh(s,u,e),Jc();break e}a=Error(S(426))}}else if(J&&l.mode&1){var E=qh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qh(E,o,l,s,e),bc(zr(a,l));break e}}s=a=zr(a,l),de!==4&&(de=2),Oi===null?Oi=[s]:Oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=wg(s,a,e);Bh(s,p);break e;case 1:l=a;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cn===null||!cn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Eg(s,l,e);Bh(s,w);break e}}s=s.return}while(s!==null)}zg(n)}catch(T){e=T,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function jg(){var t=$o.current;return $o.current=Vo,t===null?Vo:t}function Jc(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Kn&268435455)&&!(Pl&268435455)||Qt(ge,ye)}function Ko(t,e){var n=z;z|=2;var r=jg();(ge!==t||ye!==e)&&(Tt=null,Wn(t,e));do try{Aw();break}catch(i){Fg(t,i)}while(!0);if(Oc(),z=n,$o.current=r,le!==null)throw Error(S(261));return ge=null,ye=0,de}function Aw(){for(;le!==null;)Ug(le)}function Ow(){for(;le!==null&&!i0();)Ug(le)}function Ug(t){var e=Wg(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?zg(t):le=e,Gc.current=null}function zg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kw(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,le=null;return}}else if(n=Tw(n,e,Ue),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);de===0&&(de=5)}function Ln(t,e,n){var r=W,i=Xe.transition;try{Xe.transition=null,W=1,Dw(t,e,n,r)}finally{Xe.transition=i,W=r}return null}function Dw(t,e,n,r){do xr();while(tn!==null);if(z&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(p0(t,s),t===ge&&(le=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,Vg(No,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=W;W=1;var l=z;z|=4,Gc.current=null,Nw(t,n),Dg(n,t),ew(pu),Ro=!!fu,pu=fu=null,t.current=n,Pw(n),s0(),z=l,W=o,Xe.transition=s}else t.current=n;if(to&&(to=!1,tn=t,Go=i),s=t.pendingLanes,s===0&&(cn=null),a0(n.stateNode),je(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ho)throw Ho=!1,t=Du,Du=null,t;return Go&1&&t.tag!==0&&xr(),s=t.pendingLanes,s&1?t===Lu?Di++:(Di=0,Lu=t):Di=0,Nn(),null}function xr(){if(tn!==null){var t=wm(Go),e=Xe.transition,n=W;try{if(Xe.transition=null,W=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,Go=0,z&6)throw Error(S(331));var i=z;for(z|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Ai(8,h,s)}var c=h.child;if(c!==null)c.return=h,k=c;else for(;k!==null;){h=k;var d=h.sibling,_=h.return;if(bg(h),h===u){k=null;break}if(d!==null){d.return=_,k=d;break}k=_}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ai(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,k=v;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(T){te(l,l.return,T)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(z=i,Nn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(wl,t)}catch{}r=!0}return r}finally{W=n,Xe.transition=e}}return!1}function uf(t,e,n){e=zr(n,e),e=wg(t,e,1),t=un(t,e,1),e=Ne(),t!==null&&(Cs(t,1,e),je(t,e))}function te(t,e,n){if(t.tag===3)uf(t,t,n);else for(;e!==null;){if(e.tag===3){uf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=zr(n,t),t=Eg(e,t,1),e=un(e,t,1),t=Ne(),e!==null&&(Cs(e,1,t),je(e,t));break}}e=e.return}}function Lw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>se()-qc?Wn(t,0):Kc|=n),je(t,e)}function Bg(t,e){e===0&&(t.mode&1?(e=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):e=1);var n=Ne();t=Mt(t,e),t!==null&&(Cs(t,e,n),je(t,n))}function Mw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bg(t,n)}function Fw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Bg(t,n)}var Wg;Wg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,Iw(t,e,n);De=!!(t.flags&131072)}else De=!1,J&&e.flags&1048576&&Gm(e,Fo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;go(t,e),t=e.pendingProps;var i=Mr(e,Te.current);kr(e,n),i=Bc(null,e,r,t,i,n);var s=Wc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,Lo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mc(e),i.updater=xl,e.stateNode=i,i._reactInternals=e,Su(e,r,t,n),e=ku(null,e,r,!0,s,n)):(e.tag=0,J&&s&&Pc(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Uw(r),t=st(r,t),i){case 0:e=Tu(null,e,r,t,n);break e;case 1:e=Xh(null,e,r,t,n);break e;case 11:e=Yh(null,e,r,t,n);break e;case 14:e=Jh(null,e,r,st(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Tu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Xh(t,e,r,i,n);case 3:e:{if(Tg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Xm(t,e),zo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(S(423)),e),e=Zh(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(S(424)),e),e=Zh(t,e,r,n,i);break e}else for(We=an(e.stateNode.containerInfo.firstChild),Ve=e,J=!0,lt=null,n=Ym(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=Ft(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Zm(e),t===null&&wu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mu(r,i)?o=null:s!==null&&mu(r,s)&&(e.flags|=32),Ig(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&wu(e),null;case 13:return kg(t,e,n);case 4:return Fc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Yh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(jo,r._currentValue),r._currentValue=o,s!==null)if(mt(s.value,o)){if(s.children===i.children&&!Me.current){e=Ft(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=At(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Eu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,kr(e,n),i=Ze(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Jh(t,e,r,i,n);case 15:return Cg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),go(t,e),e.tag=1,Fe(r)?(t=!0,Lo(e)):t=!1,kr(e,n),yg(e,r,i),Su(e,r,i,n),ku(null,e,r,!0,t,n);case 19:return xg(t,e,n);case 22:return Sg(t,e,n)}throw Error(S(156,e.tag))};function Vg(t,e){return gm(t,e)}function jw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(t,e,n,r){return new jw(t,e,n,r)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uw(t){if(typeof t=="function")return Xc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_c)return 11;if(t===vc)return 14}return 2}function hn(t,e){var n=t.alternate;return n===null?(n=Ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ur:return Vn(n.children,i,s,e);case gc:o=8,i|=8;break;case Ka:return t=Ye(12,n,e,i|2),t.elementType=Ka,t.lanes=s,t;case qa:return t=Ye(13,n,e,i),t.elementType=qa,t.lanes=s,t;case Qa:return t=Ye(19,n,e,i),t.elementType=Qa,t.lanes=s,t;case Zp:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jp:o=10;break e;case Xp:o=9;break e;case _c:o=11;break e;case vc:o=14;break e;case Gt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Ye(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vn(t,e,n,r){return t=Ye(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=Ye(22,t,r,e),t.elementType=Zp,t.lanes=n,t.stateNode={isHidden:!1},t}function Na(t,e,n){return t=Ye(6,t,null,e),t.lanes=n,t}function Pa(t,e,n){return e=Ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zc(t,e,n,r,i,s,o,l,a){return t=new zw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ye(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(s),t}function Bw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $g(t){if(!t)return En;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Fe(n))return $m(t,n,e)}return e}function Hg(t,e,n,r,i,s,o,l,a){return t=Zc(n,r,!0,t,i,s,o,l,a),t.context=$g(null),n=t.current,r=Ne(),i=dn(n),s=At(r,i),s.callback=e??null,un(n,s,i),t.current.lanes=i,Cs(t,i,r),je(t,r),t}function bl(t,e,n,r){var i=e.current,s=Ne(),o=dn(i);return n=$g(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(ft(t,i,o,s),fo(t,i,o)),o}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ed(t,e){cf(t,e),(t=t.alternate)&&cf(t,e)}function Ww(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function td(t){this._internalRoot=t}Al.prototype.render=td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));bl(t,e,null,null)};Al.prototype.unmount=td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){bl(null,t,null,null)}),e[Lt]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&Tm(t)}};function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function df(){}function Vw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=qo(o);s.call(u)}}var o=Hg(e,r,t,0,null,!1,!1,"",df);return t._reactRootContainer=o,t[Lt]=o.current,Ji(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=qo(a);l.call(u)}}var a=Zc(t,0,!1,null,null,!1,!1,"",df);return t._reactRootContainer=a,t[Lt]=a.current,Ji(t.nodeType===8?t.parentNode:t),qn(function(){bl(e,a,n,r)}),a}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=qo(o);l.call(a)}}bl(e,o,t,i)}else o=Vw(n,e,t,i,r);return qo(o)}Em=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(Ec(e,n|1),je(e,se()),!(z&6)&&(Br=se()+500,Nn()))}break;case 13:qn(function(){var r=Mt(t,1);if(r!==null){var i=Ne();ft(r,t,1,i)}}),ed(t,1)}};Cc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Ne();ft(e,t,134217728,n)}ed(t,134217728)}};Cm=function(t){if(t.tag===13){var e=dn(t),n=Mt(t,e);if(n!==null){var r=Ne();ft(n,t,e,r)}ed(t,e)}};Sm=function(){return W};Im=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};su=function(t,e,n){switch(e){case"input":if(Xa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(S(90));tm(r),Xa(r,i)}}}break;case"textarea":rm(t,n);break;case"select":e=n.value,e!=null&&Cr(t,!!n.multiple,e,!1)}};cm=Qc;dm=qn;var $w={usingClientEntryPoint:!1,Events:[Is,fr,Il,am,um,Qc]},_i={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hw={bundleType:_i.bundleType,version:_i.version,rendererPackageName:_i.rendererPackageName,rendererConfig:_i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pm(t),t===null?null:t.stateNode},findFiberByHostInstance:_i.findFiberByHostInstance||Ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{wl=no.inject(Hw),yt=no}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$w;He.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(S(200));return Bw(t,e,null,n)};He.createRoot=function(t,e){if(!nd(t))throw Error(S(299));var n=!1,r="",i=Gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zc(t,1,!1,null,null,n,!1,r,i),t[Lt]=e.current,Ji(t.nodeType===8?t.parentNode:t),new td(e)};He.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=pm(e),t=t===null?null:t.stateNode,t};He.flushSync=function(t){return qn(t)};He.hydrate=function(t,e,n){if(!Ol(e))throw Error(S(200));return Dl(null,t,e,!0,n)};He.hydrateRoot=function(t,e,n){if(!nd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Gg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hg(e,null,t,1,n??null,i,!1,s,o),t[Lt]=e.current,Ji(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Al(e)};He.render=function(t,e,n){if(!Ol(e))throw Error(S(200));return Dl(null,t,e,!1,n)};He.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(S(40));return t._reactRootContainer?(qn(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[Lt]=null})}),!0):!1};He.unstable_batchedUpdates=Qc;He.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ol(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Dl(t,e,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(t){console.error(t)}}Kg(),Kp.exports=He;var Gw=Kp.exports,hf=Gw;Ha.createRoot=hf.createRoot,Ha.hydrateRoot=hf.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},os.apply(null,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const ff="popstate";function Kw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ju("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qo(i)}return Qw(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qw(){return Math.random().toString(36).substr(2,8)}function pf(t,e){return{usr:t.state,key:t.key,idx:e}}function ju(t,e,n,r){return n===void 0&&(n=null),os({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||qw()})}function Qo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Qw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=nn.Pop,a=null,u=h();u==null&&(u=0,o.replaceState(os({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function c(){l=nn.Pop;let E=h(),p=E==null?null:E-u;u=E,a&&a({action:l,location:y.location,delta:p})}function d(E,p){l=nn.Push;let f=ju(y.location,E,p);u=h()+1;let v=pf(f,u),w=y.createHref(f);try{o.pushState(v,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function _(E,p){l=nn.Replace;let f=ju(y.location,E,p);u=h();let v=pf(f,u),w=y.createHref(f);o.replaceState(v,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function m(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Qo(E);return f=f.replace(/ $/,"%20"),oe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ff,c),a=E,()=>{i.removeEventListener(ff,c),a=null}},createHref(E){return e(i,E)},createURL:m,encodeLocation(E){let p=m(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:_,go(E){return o.go(E)}};return y}var mf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mf||(mf={}));function Yw(t,e,n){return n===void 0&&(n="/"),Jw(t,e,n)}function Jw(t,e,n,r){let i=typeof e=="string"?Xr(e):e,s=rd(i.pathname||"/",n);if(s==null)return null;let o=Qg(t);Xw(o);let l=null,a=cE(s);for(let u=0;l==null&&u<o.length;++u)l=lE(o[u],a);return l}function Qg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=fn([r,a.relativePath]),h=n.concat(a);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qg(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:sE(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Yg(s.path))i(s,o,a)}),e}function Yg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Yg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Xw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zw=/^:[\w-]+$/,eE=3,tE=2,nE=1,rE=10,iE=-2,gf=t=>t==="*";function sE(t,e){let n=t.split("/"),r=n.length;return n.some(gf)&&(r+=iE),e&&(r+=tE),n.filter(i=>!gf(i)).reduce((i,s)=>i+(Zw.test(s)?eE:s===""?nE:rE),r)}function oE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lE(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",c=aE({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},h),d=a.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:fn([s,c.pathname]),pathnameBase:fE(fn([s,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(s=fn([s,c.pathnameBase]))}return o}function aE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,h,c)=>{let{paramName:d,isOptional:_}=h;if(d==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=l[c];return _&&!m?u[d]=void 0:u[d]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function dE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t,s;return n?(n=Jg(n),n.startsWith("/")?s=_f(n.substring(1),"/"):s=_f(n,e)):s=e,{pathname:s,search:pE(r),hash:mE(i)}}function _f(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ra(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function id(t,e){let n=hE(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=os({},t),oe(!i.pathname||!i.pathname.includes("?"),Ra("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Ra("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Ra("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}l=c>=0?e[c]:"/"}let a=dE(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const Jg=t=>t.replace(/\/\/+/g,"/"),fn=t=>Jg(t.join("/")),fE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Xg=["post","put","patch","delete"];new Set(Xg);const _E=["get",...Xg];new Set(_E);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ls.apply(null,arguments)}const od=C.createContext(null),vE=C.createContext(null),Pn=C.createContext(null),Ll=C.createContext(null),St=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Zg=C.createContext(null);function yE(t,e){let{relative:n}=e===void 0?{}:e;Zr()||oe(!1);let{basename:r,navigator:i}=C.useContext(Pn),{hash:s,pathname:o,search:l}=t_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:fn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Zr(){return C.useContext(Ll)!=null}function ks(){return Zr()||oe(!1),C.useContext(Ll).location}function e_(t){C.useContext(Pn).static||C.useLayoutEffect(t)}function Ml(){let{isDataRoute:t}=C.useContext(St);return t?LE():wE()}function wE(){Zr()||oe(!1);let t=C.useContext(od),{basename:e,future:n,navigator:r}=C.useContext(Pn),{matches:i}=C.useContext(St),{pathname:s}=ks(),o=JSON.stringify(id(i,n.v7_relativeSplatPath)),l=C.useRef(!1);return e_(()=>{l.current=!0}),C.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=sd(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:fn([e,c.pathname])),(h.replace?r.replace:r.push)(c,h.state,h)},[e,r,o,s,t])}const EE=C.createContext(null);function CE(t){let e=C.useContext(St).outlet;return e&&C.createElement(EE.Provider,{value:t},e)}function SE(){let{matches:t}=C.useContext(St),e=t[t.length-1];return e?e.params:{}}function t_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Pn),{matches:i}=C.useContext(St),{pathname:s}=ks(),o=JSON.stringify(id(i,r.v7_relativeSplatPath));return C.useMemo(()=>sd(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IE(t,e){return TE(t,e)}function TE(t,e,n,r){Zr()||oe(!1);let{navigator:i}=C.useContext(Pn),{matches:s}=C.useContext(St),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ks(),h;if(e){var c;let E=typeof e=="string"?Xr(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||oe(!1),h=E}else h=u;let d=h.pathname||"/",_=d;if(a!=="/"){let E=a.replace(/^\//,"").split("/");_="/"+d.replace(/^\//,"").split("/").slice(E.length).join("/")}let m=Yw(t,{pathname:_}),y=RE(m&&m.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:fn([a,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:fn([a,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?C.createElement(Ll.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:nn.Pop}},y):y}function kE(){let t=DE(),e=gE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const xE=C.createElement(kE,null);class NE extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(St.Provider,{value:this.props.routeContext},C.createElement(Zg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PE(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(od);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(St.Provider,{value:e},r)}function RE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let h=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);h>=0||oe(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let c=o[h];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=h),c.route.id){let{loaderData:d,errors:_}=n,m=c.route.loader&&d[c.route.id]===void 0&&(!_||_[c.route.id]===void 0);if(c.route.lazy||m){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,c,d)=>{let _,m=!1,y=null,E=null;n&&(_=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||xE,a&&(u<0&&d===0?(ME("route-fallback"),m=!0,E=null):u===d&&(m=!0,E=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,d+1)),f=()=>{let v;return _?v=y:m?v=E:c.route.Component?v=C.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=h,C.createElement(PE,{match:c,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?C.createElement(NE,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var n_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(n_||{}),r_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(r_||{});function bE(t){let e=C.useContext(od);return e||oe(!1),e}function AE(t){let e=C.useContext(vE);return e||oe(!1),e}function OE(t){let e=C.useContext(St);return e||oe(!1),e}function i_(t){let e=OE(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function DE(){var t;let e=C.useContext(Zg),n=AE(),r=i_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function LE(){let{router:t}=bE(n_.UseNavigateStable),e=i_(r_.UseNavigateStable),n=C.useRef(!1);return e_(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ls({fromRouteId:e},s)))},[t,e])}const vf={};function ME(t,e,n){vf[t]||(vf[t]=!0)}function FE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qn(t){let{to:e,replace:n,state:r,relative:i}=t;Zr()||oe(!1);let{future:s,static:o}=C.useContext(Pn),{matches:l}=C.useContext(St),{pathname:a}=ks(),u=Ml(),h=sd(e,id(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(h);return C.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function jE(t){return CE(t.context)}function it(t){oe(!1)}function UE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1,future:l}=t;Zr()&&oe(!1);let a=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:a,navigator:s,static:o,future:ls({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:h="/",search:c="",hash:d="",state:_=null,key:m="default"}=r,y=C.useMemo(()=>{let E=rd(h,a);return E==null?null:{location:{pathname:E,search:c,hash:d,state:_,key:m},navigationType:i}},[a,h,c,d,_,m,i]);return y==null?null:C.createElement(Pn.Provider,{value:u},C.createElement(Ll.Provider,{children:n,value:y}))}function zE(t){let{children:e,location:n}=t;return IE(Uu(e),n)}new Promise(()=>{});function Uu(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Uu(r.props.children,s));return}r.type!==it&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Uu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(null,arguments)}function BE(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function WE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VE(t,e){return t.button===0&&(!e||e==="_self")&&!WE(t)}const $E=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],HE="6";try{window.__reactRouterVersion=HE}catch{}const GE="startTransition",yf=Ly[GE];function KE(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=Kw({window:i,v5Compat:!0}));let o=s.current,[l,a]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=C.useCallback(c=>{u&&yf?yf(()=>a(c)):a(c)},[a,u]);return C.useLayoutEffect(()=>o.listen(h),[o,h]),C.useEffect(()=>FE(r),[r]),C.createElement(UE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const qE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Li=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h,viewTransition:c}=e,d=BE(e,$E),{basename:_}=C.useContext(Pn),m,y=!1;if(typeof u=="string"&&QE.test(u)&&(m=u,qE))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),T=rd(w.pathname,_);w.origin===v.origin&&T!=null?u=T+w.search+w.hash:y=!0}catch{}let E=yE(u,{relative:i}),p=YE(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i,viewTransition:c});function f(v){r&&r(v),v.defaultPrevented||p(v)}return C.createElement("a",zu({},d,{href:m||E,onClick:y||s?r:f,ref:n,target:a}))});var wf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wf||(wf={}));var Ef;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ef||(Ef={}));function YE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,a=Ml(),u=ks(),h=t_(t,{relative:o});return C.useCallback(c=>{if(VE(c,n)){c.preventDefault();let d=r!==void 0?r:Qo(u)===Qo(h);a(t,{replace:d,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,a,h,r,i,n,t,s,o,l])}const JE=()=>{};var Cf={};/**
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
 */const s_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+s_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const o_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,h=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(d=64)),r.push(n[h],n[c],n[d],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new ZE;const d=s<<2|l>>4;if(r.push(d),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const m=u<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l_=function(t){const e=o_(t);return ld.encodeByteArray(e,!0)},Yo=function(t){return l_(t).replace(/\./g,"")},Jo=function(t){try{return ld.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eC(t){return a_(void 0,t)}function a_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tC(n)||(t[n]=a_(t[n],e[n]));return t}function tC(t){return t!=="__proto__"}/**
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
 */function nC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rC=()=>nC().__FIREBASE_DEFAULTS__,iC=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jo(t[1]);return e&&JSON.parse(e)},ad=()=>{try{return JE()||rC()||iC()||sC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},u_=t=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oC=t=>{const e=u_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c_=()=>{var t;return(t=ad())===null||t===void 0?void 0:t.config},d_=t=>{var e;return(e=ad())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ti(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function h_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function lC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}const Mi={};function aC(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mi))Mi[e]?t.emulator.push(e):t.prod.push(e);return t}function uC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Sf=!1;function f_(t,e){if(typeof window>"u"||typeof document>"u"||!ti(window.location.host)||Mi[t]===e||Mi[t]||Sf)return;Mi[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=aC().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function a(d,_){d.setAttribute("width","24"),d.setAttribute("id",_),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Sf=!0,o()},d}function h(d,_){d.setAttribute("id",_),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function c(){const d=uC(r),_=n("text"),m=document.getElementById(_)||document.createElement("span"),y=n("learnmore"),E=document.getElementById(y)||document.createElement("a"),p=n("preprendIcon"),f=document.getElementById(p)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const v=d.element;l(v),h(E,y);const w=u();a(f,p),v.append(f,m,E,w),document.body.appendChild(v)}s?(m.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(f.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function cC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function p_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hC(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fC(){return s_.NODE_ADMIN===!0}function pC(){try{return typeof indexedDB=="object"}catch{return!1}}function mC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const gC="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_C(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function _C(t,e){return t.replace(vC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;/**
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
 */function as(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
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
 */const m_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=as(Jo(s[0])||""),n=as(Jo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yC=function(t){const e=m_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wC=function(t){const e=m_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function It(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Yn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(If(s)&&If(o)){if(!Yn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
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
 */function ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class EC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),h=1518500249):(u=s^o^l,h=1859775393):c<60?(u=s&o|l&(s|o),h=2400959708):(u=s^o^l,h=3395469782);const d=(i<<5|i>>>27)+u+a+h+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function CC(t,e){const n=new SC(t,e);return n.subscribe.bind(n)}class SC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ba),i.error===void 0&&(i.error=ba),i.complete===void 0&&(i.complete=ba);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ba(){}function Fl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const TC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class kC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NC(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xC(t){return t===Mn?void 0:t}function NC(t){return t.instantiationMode==="EAGER"}/**
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
 */class PC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const RC={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},bC=V.INFO,AC={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},OC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=bC,this._logHandler=OC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const DC=(t,e)=>e.some(n=>t instanceof n);let Tf,kf;function LC(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,Wu=new WeakMap,__=new WeakMap,Aa=new WeakMap,dd=new WeakMap;function FC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&g_.set(n,t)}).catch(()=>{}),dd.set(e,t),e}function jC(t){if(Wu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wu.set(t,e)}let Vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||__.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){Vu=t(Vu)}function zC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oa(this),e,...n);return __.set(r,e.sort?e.sort():[e]),pn(r)}:MC().includes(t)?function(...e){return t.apply(Oa(this),e),pn(g_.get(this))}:function(...e){return pn(t.apply(Oa(this),e))}}function BC(t){return typeof t=="function"?zC(t):(t instanceof IDBTransaction&&jC(t),DC(t,LC())?new Proxy(t,Vu):t)}function pn(t){if(t instanceof IDBRequest)return FC(t);if(Aa.has(t))return Aa.get(t);const e=BC(t);return e!==t&&(Aa.set(t,e),dd.set(e,t)),e}const Oa=t=>dd.get(t);function WC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const VC=["get","getKey","getAll","getAllKeys","count"],$C=["put","add","delete","clear"],Da=new Map;function xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Da.set(e,s),s}UC(t=>({...t,get:(e,n,r)=>xf(e,n)||t.get(e,n,r),has:(e,n)=>!!xf(e,n)||t.has(e,n)}));/**
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
 */class HC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $u="@firebase/app",Nf="0.13.2";/**
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
 */const jt=new cd("@firebase/app"),KC="@firebase/app-compat",qC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",JC="@firebase/app-check",XC="@firebase/auth",ZC="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",rS="@firebase/functions",iS="@firebase/functions-compat",sS="@firebase/installations",oS="@firebase/installations-compat",lS="@firebase/messaging",aS="@firebase/messaging-compat",uS="@firebase/performance",cS="@firebase/performance-compat",dS="@firebase/remote-config",hS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",mS="@firebase/firestore",gS="@firebase/ai",_S="@firebase/firestore-compat",vS="firebase",yS="11.10.0";/**
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
 */const Hu="[DEFAULT]",wS={[$u]:"fire-core",[KC]:"fire-core-compat",[QC]:"fire-analytics",[qC]:"fire-analytics-compat",[JC]:"fire-app-check",[YC]:"fire-app-check-compat",[XC]:"fire-auth",[ZC]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[iS]:"fire-fn-compat",[sS]:"fire-iid",[oS]:"fire-iid-compat",[lS]:"fire-fcm",[aS]:"fire-fcm-compat",[uS]:"fire-perf",[cS]:"fire-perf-compat",[dS]:"fire-rc",[hS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[mS]:"fire-fst",[_S]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[vS]:"fire-js-all"};/**
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
 */const Zo=new Map,ES=new Map,Gu=new Map;function Pf(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Gu.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;Gu.set(e,t);for(const n of Zo.values())Pf(n,t);for(const n of ES.values())Pf(n,t);return!0}function hd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
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
 */const CS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Ns("app","Firebase",CS);/**
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
 */class SS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
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
 */const ri=yS;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hu,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=c_()),!n)throw mn.create("no-options");const s=Zo.get(i);if(s){if(Yn(n,s.options)&&Yn(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new PC(i);for(const a of Gu.values())o.addComponent(a);const l=new SS(n,r,o);return Zo.set(i,l),l}function y_(t=Hu){const e=Zo.get(t);if(!e&&t===Hu&&c_())return v_();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=wS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(l.join(" "));return}Vr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const IS="firebase-heartbeat-database",TS=1,us="firebase-heartbeat-store";let La=null;function w_(){return La||(La=WC(IS,TS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),La}async function kS(t){try{const n=(await w_()).transaction(us),r=await n.objectStore(us).get(E_(t));return await n.done,r}catch(e){if(e instanceof Rn)jt.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function Rf(t,e){try{const r=(await w_()).transaction(us,"readwrite");await r.objectStore(us).put(e,E_(t)),await r.done}catch(n){if(n instanceof Rn)jt.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function E_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xS=1024,NS=30;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>NS){const o=AS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bf(),{heartbeatsToSend:r,unsentEntries:i}=RS(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return jt.warn(n),""}}}function bf(){return new Date().toISOString().substring(0,10)}function RS(t,e=xS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Af(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Af(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pC()?mC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Af(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}function AS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function OS(t){Vr(new Jn("platform-logger",e=>new HC(e),"PRIVATE")),Vr(new Jn("heartbeat",e=>new PS(e),"PRIVATE")),gn($u,Nf,t),gn($u,Nf,"esm2017"),gn("fire-js","")}OS("");var Of={};const Df="@firebase/database",Lf="1.0.20";/**
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
 */let C_="";function DS(t){C_=t}/**
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
 */class LS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class MS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const S_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LS(e)}}catch{}return new MS},Bn=S_("localStorage"),FS=S_("sessionStorage");/**
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
 */const Nr=new cd("@firebase/database"),jS=function(){let t=1;return function(){return t++}}(),I_=function(t){const e=TC(t),n=new EC;n.update(e);const r=n.digest();return ld.encodeByteArray(r)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ps.apply(null,r):typeof r=="object"?e+=ce(r):e+=r,e+=" "}return e};let Fi=null,Mf=!0;const US=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Nr.logLevel=V.VERBOSE,Fi=Nr.log.bind(Nr)},ve=function(...t){if(Mf===!0&&(Mf=!1,Fi===null&&FS.get("logging_enabled")===!0&&US()),Fi){const e=Ps.apply(null,t);Fi(e)}},Rs=function(t){return function(...e){ve(t,...e)}},Ku=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);Nr.error(e)},Ut=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw Nr.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+Ps(...t);Nr.warn(e)},zS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$r="[MIN_NAME]",Xn="[MAX_NAME]",ir=function(t,e){if(t===e)return 0;if(t===$r||e===Xn)return-1;if(e===$r||t===Xn)return 1;{const n=Ff(t),r=Ff(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WS=function(t,e){return t===e?0:t<e?-1:1},vi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},pd=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ce(e[r]),n+=":",n+=pd(t[e[r]]);return n+="}",n},T_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ee(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const k_=function(t){I(!fd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},VS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$S=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GS=new RegExp("^-?(0*)\\d{1,10}$"),KS=-2147483648,qS=2147483647,Ff=function(t){if(GS.test(t)){const e=Number(t);if(e>=KS&&e<=qS)return e}return null},ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},QS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class YS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,at(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class JS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wo.OWNER="owner";/**
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
 */const md="5",x_="v",N_="s",P_="r",R_="f",b_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,A_="ls",O_="p",qu="ac",D_="websocket",L_="long_polling";/**
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
 */class M_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function F_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===D_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===L_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XS(t)&&(n.ns=t.namespace);const i=[];return Ee(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class ZS{constructor(){this.counters_={}}incrementCounter(e,n=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eC(this.counters_)}}/**
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
 */const Ma={},Fa={};function gd(t){const e=t.toString();return Ma[e]||(Ma[e]=new ZS),Ma[e]}function e1(t,e){const n=t.toString();return Fa[n]||(Fa[n]=e()),Fa[n]}/**
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
 */class t1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const jf="start",n1="close",r1="pLPCommand",i1="pRTLPCB",j_="id",U_="pw",z_="ser",s1="cb",o1="seg",l1="ts",a1="d",u1="dframe",B_=1870,W_=30,c1=B_-W_,d1=25e3,h1=3e4;class wr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=gd(n),this.urlFn=a=>(this.appCheckToken&&(a[qu]=this.appCheckToken),F_(n,L_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new t1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(h1)),BS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _d((...s)=>{const[o,l,a,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jf)this.id=l,this.password=a;else if(o===n1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[jf]="t",r[z_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[s1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[x_]=md,this.transportSessionId&&(r[N_]=this.transportSessionId),this.lastSessionId&&(r[A_]=this.lastSessionId),this.applicationId&&(r[O_]=this.applicationId),this.appCheckToken&&(r[qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&b_.test(location.hostname)&&(r[P_]=R_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wr.forceAllow_=!0}static forceDisallow(){wr.forceDisallow_=!0}static isAvailable(){return wr.forceAllow_?!0:!wr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VS()&&!$S()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l_(n),i=T_(r,c1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[u1]="t",r[j_]=e,r[U_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _d{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jS(),window[r1+this.uniqueCallbackIdentifier]=e,window[i1+this.uniqueCallbackIdentifier]=n,this.myIFrame=_d.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[j_]=this.myID,e[U_]=this.myPW,e[z_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+W_+r.length<=B_;){const o=this.pendingSegs.shift();r=r+"&"+o1+i+"="+o.seg+"&"+l1+i+"="+o.ts+"&"+a1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(d1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const f1=16384,p1=45e3;let el=null;typeof MozWebSocket<"u"?el=MozWebSocket:typeof WebSocket<"u"&&(el=WebSocket);class ut{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=gd(n),this.connURL=ut.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[x_]=md,typeof location<"u"&&location.hostname&&b_.test(location.hostname)&&(o[P_]=R_),n&&(o[N_]=n),r&&(o[A_]=r),i&&(o[qu]=i),s&&(o[O_]=s),F_(e,D_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;fC(),this.mySock=new el(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&el!==null&&!ut.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=as(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=T_(n,f1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(p1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ut.responsesRequiredToBeHealthy=2;ut.healthyTimeout=3e4;/**
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
 */class cs{static get ALL_TRANSPORTS(){return[wr,ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ut&&ut.isAvailable();let r=n&&!ut.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ut];else{const i=this.transports_=[];for(const s of cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
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
 */const m1=6e4,g1=5e3,_1=10*1024,v1=100*1024,ja="t",Uf="d",y1="s",zf="r",w1="e",Bf="o",Wf="a",Vf="n",$f="p",E1="h";class C1{constructor(e,n,r,i,s,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>v1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ja in e){const n=e[ja];n===Wf?this.upgradeIfSecondaryHealthy_():n===zf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$f,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vi("t",e),r=vi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vi(ja,e);if(Uf in e){const r=e[Uf];if(n===E1){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===y1?this.onConnectionShutdown_(r):n===zf?this.onReset_(r):n===w1?Ku("Server Error: "+r):n===Bf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),md!==r&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(m1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(g1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$f,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class V_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class tl extends $_{static getInstance(){return new tl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hf=32,Gf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new $("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function vd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function S1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ds(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function H_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return xe(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function I1(t,e){const n=ds(t,0),r=ds(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ir(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function yd(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Je(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class T1{constructor(e,n){this.errorPrefix_=n,this.parts_=ds(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jl(this.parts_[r]);G_(this)}}function k1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jl(e),G_(t)}function x1(t){const e=t.parts_.pop();t.byteLength_-=jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function G_(t){if(t.byteLength_>Gf)throw new Error(t.errorPrefix_+"has a key path longer than "+Gf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hf+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class wd extends $_{static getInstance(){return new wd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yi=1e3,N1=60*5*1e3,Kf=30*1e3,P1=1.3,R1=3e4,b1="server_kill",qf=3;class Ot extends V_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=N1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ce(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new xs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ot.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&It(e,"w")){const r=Wr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ku("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>R1&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*P1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new C1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Pe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(b1)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Pe(c),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bu(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qf&&(this.reconnectDelay_=Kf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+C_.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:p_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tl.getInstance().currentlyOnline();return Bu(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
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
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
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
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M($r,e),i=new M($r,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
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
 */let ro;class K_ extends Ul{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(e){ro=e}compare(e,n){return ir(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Xn,ro)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,ro)}toString(){return".key"}}const Pr=new K_;/**
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
 */class io{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class A1{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new io(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new io(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new io(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new io(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new A1;/**
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
 */function O1(t,e){return ir(t.name,e.name)}function Ed(t,e){return ir(t,e)}/**
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
 */let Qu;function D1(t){Qu=t}const q_=function(t){return typeof t=="number"?"number:"+k_(t):"string:"+t},Q_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else I(t===Qu||t.isEmpty(),"priority of unexpected type.");I(t===Qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Qf;class fe{static set __childrenNodeConstructor(e){Qf=e}static get __childrenNodeConstructor(){return Qf}constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Q_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:L(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+q_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=k_(this.value_):e+=this.value_,this.lazyHash_=I_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Y_,J_;function L1(t){Y_=t}function M1(t){J_=t}class F1 extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ir(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Xn,new fe("[PRIORITY-POST]",J_))}makePost(e,n){const r=Y_(e);return new M(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new F1;/**
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
 */const j1=Math.log(2);class U1{constructor(e){const n=s=>parseInt(Math.log(s)/j1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nl=function(t,e,n,r){t.sort(e);const i=function(a,u){const h=u-a;let c,d;if(h===0)return null;if(h===1)return c=t[a],d=n?n(c):c,new me(d,c.node,me.BLACK,null,null);{const _=parseInt(h/2,10)+a,m=i(a,_),y=i(_+1,u);return c=t[_],d=n?n(c):c,new me(d,c.node,me.BLACK,m,y)}},s=function(a){let u=null,h=null,c=t.length;const d=function(m,y){const E=c-m,p=c;c-=m;const f=i(E+1,p),v=t[E],w=n?n(v):v;_(new me(w,v.node,y,null,f))},_=function(m){u?(u.left=m,u=m):(h=m,u=m)};for(let m=0;m<a.count;++m){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(m+1));y?d(E,me.BLACK):(d(E,me.BLACK),d(E,me.RED))}return h},o=new U1(t.length),l=s(o);return new Le(r||e,l)};/**
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
 */let Ua;const lr={};class Pt{static get Default(){return I(lr&&re,"ChildrenNode.ts has not been loaded"),Ua=Ua||new Pt({".priority":lr},{".priority":re}),Ua}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Pr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=nl(r,e.getCompare()):l=lr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Pt(h,u)}addToIndexes(e,n){const r=Xo(this.indexes_,(i,s)=>{const o=Wr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===lr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),nl(l,o.getCompare())}else return lr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Xo(this.indexes_,i=>{if(i===lr)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
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
 */let wi;class b{static get EMPTY_NODE(){return wi||(wi=new b(new Le(Ed),null,Pt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Q_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wi:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wi:this.priorityNode_;return new b(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{I(L(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+q_(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":I_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===Pr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pr?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class z1 extends b{constructor(){super(new Le(Ed),b.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const bs=new z1;Object.defineProperties(M,{MIN:{value:new M($r,b.EMPTY_NODE)},MAX:{value:new M(Xn,bs)}});K_.__EMPTY_NODE=b.EMPTY_NODE;fe.__childrenNodeConstructor=b;D1(bs);M1(bs);/**
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
 */const B1=!0;function ue(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ue(e))}if(!(t instanceof Array)&&B1){const n=[];let r=!1;if(Ee(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return b.EMPTY_NODE;const s=nl(n,O1,o=>o.name,Ed);if(r){const o=nl(n,re.getCompare());return new b(s,ue(e),new Pt({".priority":o},{".priority":re}))}else return new b(s,ue(e),Pt.Default)}else{let n=b.EMPTY_NODE;return Ee(t,(r,i)=>{if(It(t,r)&&r.substring(0,1)!=="."){const s=ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ue(e))}}L1(ue);/**
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
 */class W1 extends Ul{constructor(e){super(),this.indexPath_=e,I(!j(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ir(e.name,n.name):s}makePost(e,n){const r=ue(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,bs);return new M(Xn,e)}toString(){return ds(this.indexPath_,0).join("/")}}/**
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
 */class V1 extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ir(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=ue(e);return new M(n,r)}toString(){return".value"}}const $1=new V1;/**
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
 */function X_(t){return{type:"value",snapshotNode:t}}function Hr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function H1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Cd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hr(n,r)):o.trackChildChange(fs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(hs(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fs(i,s,o))}else r.trackChildChange(Hr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ps{constructor(e){this.indexedFilter_=new Cd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=b.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class G1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=b.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,_)=>c(_,d)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(fs(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(hs(n,c));const y=l.updateImmediateChild(n,b.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Hr(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:h&&o(u,a)>=0?(s!=null&&(s.trackChildChange(hs(u.name,u.node)),s.trackChildChange(Hr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,b.EMPTY_NODE)):e}}/**
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
 */class Sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$r}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new Sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function K1(t){return t.loadsAllData()?new Cd(t.getIndex()):t.hasLimit()?new G1(t):new ps(t)}function Yf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===$1?n="$value":t.index_===Pr?n="$key":(I(t.index_ instanceof W1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
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
 */class rl extends V_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Rs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=rl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Yf(e._queryParams);this.restRequest_(s+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Wr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=rl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Yf(e._queryParams),r=e._path.toString(),i=new xs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=as(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class q1{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function il(){return{value:null,children:new Map}}function Z_(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,il());const i=t.children.get(r);e=G(e),Z_(i,e,n)}}function Yu(t,e,n){t.value!==null?n(e,t.value):Q1(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Yu(i,s,n)})}function Q1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Y1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ee(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Xf=10*1e3,J1=30*1e3,X1=5*60*1e3;class Z1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y1(e);const r=Xf+(J1-Xf)*Math.random();ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ee(e,(i,s)=>{s>0&&It(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*X1))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function Id(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Td(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class sl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=Id()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new sl(B(),n,this.revert)}}else return I(L(this.path)===e,"operationForChild called for unrelated child."),new sl(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new ms(this.source,B()):new ms(this.source,G(this.path))}}/**
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
 */class Zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return j(this.path)?new Zn(this.source,B(),this.snap.getImmediateChild(e)):new Zn(this.source,G(this.path),this.snap)}}/**
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
 */class Gr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Zn(this.source,B(),n.value):new Gr(this.source,B(),n)}else return I(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gr(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Sn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class eI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(H1(o.childName,o.snapshotNode))}),Ei(t,i,"child_removed",e,r,n),Ei(t,i,"child_added",e,r,n),Ei(t,i,"child_moved",s,r,n),Ei(t,i,"child_changed",e,r,n),Ei(t,i,"value",e,r,n),i}function Ei(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>rI(t,l,a)),o.forEach(l=>{const a=nI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function nI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rI(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function zl(t,e){return{eventCache:t,serverCache:e}}function Ui(t,e,n,r){return zl(new Sn(e,n,r),t.serverCache)}function ev(t,e,n,r){return zl(t.eventCache,new Sn(e,n,r))}function ol(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let za;const iI=()=>(za||(za=new Le(WS)),za);class H{static fromObject(e){let n=new H(null);return Ee(e,(r,i)=>{n=n.set(new $(r),i)}),n}constructor(e,n=iI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(j(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ne(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new H(null)}}set(e,n){if(j(e))return new H(n,this.children);{const r=L(e),s=(this.children.get(r)||new H(null)).set(G(e),n),o=this.children.insert(r,s);return new H(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new H(null):new H(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(j(e))return n;{const r=L(e),s=(this.children.get(r)||new H(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new H(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ne(n,i),r):new H(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new H(null))}}function zi(t,e,n){if(j(e))return new pt(new H(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xe(i,e);return s=s.updateChild(o,n),new pt(t.writeTree_.set(i,s))}else{const i=new H(n),s=t.writeTree_.setTree(e,i);return new pt(s)}}}function Ju(t,e,n){let r=t;return Ee(n,(i,s)=>{r=zi(r,ne(e,i),s)}),r}function Zf(t,e){if(j(e))return pt.empty();{const n=t.writeTree_.setTree(e,new H(null));return new pt(n)}}function Xu(t,e){return sr(t,e)!=null}function sr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function ep(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function _n(t,e){if(j(e))return t;{const n=sr(t,e);return n!=null?new pt(new H(n)):new pt(t.writeTree_.subtree(e))}}function Zu(t){return t.writeTree_.isEmpty()}function Kr(t,e){return tv(B(),t.writeTree_,e)}function tv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=tv(ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ne(t,".priority"),r)),n}}/**
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
 */function Bl(t,e){return sv(e,t)}function sI(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zi(t.visibleWrites,e,n)),t.lastWriteId=r}function oI(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Ju(t.visibleWrites,e,n),t.lastWriteId=r}function lI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&uI(l,r.path)?i=!1:Je(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return cI(t),!0;if(r.snap)t.visibleWrites=Zf(t.visibleWrites,r.path);else{const l=r.children;Ee(l,a=>{t.visibleWrites=Zf(t.visibleWrites,ne(r.path,a))})}return!0}else return!1}function uI(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(ne(t.path,n),e))return!0;return!1}function cI(t){t.visibleWrites=nv(t.allWrites,dI,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dI(t){return t.visible}function nv(t,e,n){let r=pt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Je(n,o)?(l=xe(n,o),r=zi(r,l,s.snap)):Je(o,n)&&(l=xe(o,n),r=zi(r,B(),s.snap.getChild(l)));else if(s.children){if(Je(n,o))l=xe(n,o),r=Ju(r,l,s.children);else if(Je(o,n))if(l=xe(o,n),j(l))r=Ju(r,B(),s.children);else{const a=Wr(s.children,L(l));if(a){const u=a.getChild(G(l));r=zi(r,B(),u)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function rv(t,e,n,r,i){if(!r&&!i){const s=sr(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(Zu(o))return n;if(n==null&&!Xu(o,B()))return null;{const l=n||b.EMPTY_NODE;return Kr(o,l)}}}else{const s=_n(t.visibleWrites,e);if(!i&&Zu(s))return n;if(!i&&n==null&&!Xu(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Je(u.path,e)||Je(e,u.path))},l=nv(t.allWrites,o,e),a=n||b.EMPTY_NODE;return Kr(l,a)}}}function hI(t,e,n){let r=b.EMPTY_NODE;const i=sr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=Kr(_n(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),ep(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return ep(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fI(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ne(e,n);if(Xu(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return Zu(o)?i.getChild(n):Kr(o,i.getChild(n))}}function pI(t,e,n,r){const i=ne(e,n),s=sr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Kr(o,r.getNode().getImmediateChild(n))}else return null}function mI(t,e){return sr(t.visibleWrites,e)}function gI(t,e,n,r,i,s,o){let l;const a=_n(t.visibleWrites,e),u=sr(a,B());if(u!=null)l=u;else if(n!=null)l=Kr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=d.getNext();for(;_&&h.length<i;)c(_,r)!==0&&h.push(_),_=d.getNext();return h}else return[]}function _I(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function ll(t,e,n,r){return rv(t.writeTree,t.treePath,e,n,r)}function xd(t,e){return hI(t.writeTree,t.treePath,e)}function tp(t,e,n,r){return fI(t.writeTree,t.treePath,e,n,r)}function al(t,e){return mI(t.writeTree,ne(t.treePath,e))}function vI(t,e,n,r,i,s){return gI(t.writeTree,t.treePath,e,n,r,i,s)}function Nd(t,e,n){return pI(t.writeTree,t.treePath,e,n)}function iv(t,e){return sv(ne(t.treePath,e),t.writeTree)}function sv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class yI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,hs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fs(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ov=new wI;class Pd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Sn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=vI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function EI(t){return{filter:t}}function CI(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SI(t,e,n,r,i){const s=new yI;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=ec(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=ul(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=TI(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=tc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=NI(t,e,u.path,r,i,s):o=kI(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=xI(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const a=s.getChanges();return II(e,o,a),{viewCache:o,changes:a}}function II(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ol(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(X_(ol(e)))}}function lv(t,e,n,r,i,s){const o=e.eventCache;if(al(r,n)!=null)return e;{let l,a;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),h=u instanceof b?u:b.EMPTY_NODE,c=xd(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=ll(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){I(Cn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=tp(r,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=tp(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=Nd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,i,s):l=o.getNode()}}return Ui(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function ul(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),_,null)}else{const _=L(n);if(!a.isCompleteForPath(n)&&Cn(n)>1)return e;const m=G(n),E=a.getNode().getImmediateChild(_).updateChild(m,r);_===".priority"?u=h.updatePriority(a.getNode(),E):u=h.updateChild(a.getNode(),_,E,m,ov,null)}const c=ev(e,u,a.isFullyInitialized()||j(n),h.filtersNodes()),d=new Pd(i,c,s);return lv(t,c,n,i,d,l)}function ec(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const h=new Pd(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ui(e,u,!0,t.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ui(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=G(n),_=l.getNode().getImmediateChild(c);let m;if(j(d))m=r;else{const y=h.getCompleteChild(c);y!=null?vd(d)===".priority"&&y.getChild(H_(d)).isEmpty()?m=y:m=y.updateChild(d,r):m=b.EMPTY_NODE}if(_.equals(m))a=e;else{const y=t.filter.updateChild(l.getNode(),c,m,d,h,o);a=Ui(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function np(t,e){return t.eventCache.isCompleteForChild(e)}function TI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const h=ne(n,a);np(e,L(h))&&(l=ec(t,l,h,u,i,s,o))}),r.foreach((a,u)=>{const h=ne(n,a);np(e,L(h))||(l=ec(t,l,h,u,i,s,o))}),l}function rp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function tc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;j(n)?u=r:u=new H(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),m=rp(t,_,d);a=ul(t,a,new $(c),m,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const _=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!_){const m=e.serverCache.getNode().getImmediateChild(c),y=rp(t,m,d);a=ul(t,a,new $(c),y,i,s,o,l)}}),a}function kI(t,e,n,r,i,s,o){if(al(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ul(t,e,n,a.getNode().getChild(n),i,s,l,o);if(j(n)){let u=new H(null);return a.getNode().forEachChild(Pr,(h,c)=>{u=u.set(new $(h),c)}),tc(t,e,n,u,i,s,l,o)}else return e}else{let u=new H(null);return r.foreach((h,c)=>{const d=ne(n,h);a.isCompleteForPath(d)&&(u=u.set(h,a.getNode().getChild(d)))}),tc(t,e,n,u,i,s,l,o)}}function xI(t,e,n,r,i){const s=e.serverCache,o=ev(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return lv(t,o,n,r,ov,i)}function NI(t,e,n,r,i,s){let o;if(al(r,n)!=null)return e;{const l=new Pd(r,e,i),a=e.eventCache.getNode();let u;if(j(n)||L(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ll(r,er(e));else{const c=e.serverCache.getNode();I(c instanceof b,"serverChildren would be complete if leaf node"),h=xd(r,c)}h=h,u=t.filter.updateFullNode(a,h,s)}else{const h=L(n);let c=Nd(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,G(n),l,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,b.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ll(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||al(r,B())!=null,Ui(e,u,o,t.filter.filtersNodes())}}/**
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
 */class PI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Cd(r.getIndex()),s=K1(r);this.processor_=EI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(b.EMPTY_NODE,l.getNode(),null),h=new Sn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Sn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=zl(c,h),this.eventGenerator_=new eI(this.query_)}get query(){return this.query_}}function RI(t){return t.viewCache_.serverCache.getNode()}function bI(t){return ol(t.viewCache_)}function AI(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function ip(t){return t.eventRegistrations_.length===0}function OI(t,e){t.eventRegistrations_.push(e)}function sp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function op(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(I(er(t.viewCache_),"We should always have a full cache before handling merges"),I(ol(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=SI(t.processor_,i,e,n,r);return CI(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,av(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(Hr(s,o))}),n.isFullyInitialized()&&r.push(X_(n.getNode())),av(t,r,n.getNode(),e)}function av(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tI(t.eventGenerator_,e,n,i)}/**
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
 */let cl;class uv{constructor(){this.views=new Map}}function LI(t){I(!cl,"__referenceConstructor has already been defined"),cl=t}function MI(){return I(cl,"Reference.ts has not been loaded"),cl}function FI(t){return t.views.size===0}function Rd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),op(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(op(o,e,n,r));return s}}function cv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=ll(n,i?r:null),a=!1;l?a=!0:r instanceof b?(l=xd(n,r),a=!1):(l=b.EMPTY_NODE,a=!1);const u=zl(new Sn(l,a,!1),new Sn(r,i,!1));return new PI(e,u)}return o}function jI(t,e,n,r,i,s){const o=cv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OI(o,n),DI(o,n)}function UI(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=In(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(sp(u,n,r)),ip(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(sp(a,n,r)),ip(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!In(t)&&s.push(new(MI())(e._repo,e._path)),{removed:s,events:o}}function dv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const r of t.views.values())n=n||AI(r,e);return n}function hv(t,e){if(e._queryParams.loadsAllData())return Wl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function fv(t,e){return hv(t,e)!=null}function In(t){return Wl(t)!=null}function Wl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let dl;function zI(t){I(!dl,"__referenceConstructor has already been defined"),dl=t}function BI(){return I(dl,"Reference.ts has not been loaded"),dl}let WI=1;class lp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=_I(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pv(t,e,n,r,i){return sI(t.pendingWriteTree_,e,n,r,i),i?si(t,new Zn(Id(),e,n)):[]}function VI(t,e,n,r){oI(t.pendingWriteTree_,e,n,r);const i=H.fromObject(n);return si(t,new Gr(Id(),e,i))}function rn(t,e,n=!1){const r=lI(t.pendingWriteTree_,e);if(aI(t.pendingWriteTree_,e)){let s=new H(null);return r.snap!=null?s=s.set(B(),!0):Ee(r.children,o=>{s=s.set(new $(o),!0)}),si(t,new sl(r.path,s,n))}else return[]}function As(t,e,n){return si(t,new Zn(Td(),e,n))}function $I(t,e,n){const r=H.fromObject(n);return si(t,new Gr(Td(),e,r))}function HI(t,e){return si(t,new ms(Td(),e))}function GI(t,e,n){const r=Ad(t,n);if(r){const i=Od(r),s=i.path,o=i.queryId,l=xe(s,e),a=new ms(kd(o),l);return Dd(t,s,a)}else return[]}function hl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||fv(o,e))){const a=UI(o,e,n,r);FI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,_)=>In(_));if(h&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const _=QI(d);for(let m=0;m<_.length;++m){const y=_[m],E=y.query,p=vv(t,y);t.listenProvider_.startListening(Bi(E),gs(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(Bi(e),null):u.forEach(d=>{const _=t.queryToTagMap.get(Vl(d));t.listenProvider_.stopListening(Bi(d),_)}))}YI(t,u)}return l}function mv(t,e,n,r){const i=Ad(t,r);if(i!=null){const s=Od(i),o=s.path,l=s.queryId,a=xe(o,e),u=new Zn(kd(l),a,n);return Dd(t,o,u)}else return[]}function KI(t,e,n,r){const i=Ad(t,r);if(i){const s=Od(i),o=s.path,l=s.queryId,a=xe(o,e),u=H.fromObject(n),h=new Gr(kd(l),a,u);return Dd(t,o,h)}else return[]}function nc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=xe(d,i);s=s||vn(_,m),o=o||In(_)});let l=t.syncPointTree_.get(i);l?(o=o||In(l),s=s||vn(l,B())):(l=new uv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=b.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const y=vn(m,B());y&&(s=s.updateImmediateChild(_,y))}));const u=fv(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=Vl(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=JI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const h=Bl(t.pendingWriteTree_,i);let c=jI(l,e,n,h,s,a);if(!u&&!o&&!r){const d=hv(l,e);c=c.concat(XI(t,e,d))}return c}function bd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),u=vn(l,a);if(u)return u});return rv(i,e,s,n,!0)}function qI(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const c=xe(u,n);r=r||vn(h,c)});let i=t.syncPointTree_.get(n);i?r=r||vn(i,B()):(i=new uv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Sn(r,!0,!1):null,l=Bl(t.pendingWriteTree_,e._path),a=cv(i,e,l,s?o.getNode():b.EMPTY_NODE,s);return bI(a)}function si(t,e){return gv(e,t.syncPointTree_,null,Bl(t.pendingWriteTree_,B()))}function gv(t,e,n,r){if(j(t.path))return _v(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=vn(i,B()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=iv(r,o);s=s.concat(gv(l,a,u,h))}return i&&(s=s.concat(Rd(i,t,r,n))),s}}function _v(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=vn(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=iv(r,o),h=t.operationForChild(o);h&&(s=s.concat(_v(h,l,a,u)))}),i&&(s=s.concat(Rd(i,t,r,n))),s}function vv(t,e){const n=e.query,r=gs(t,n);return{hashFn:()=>(RI(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GI(t,n._path,r):HI(t,n._path);{const s=HS(i,n);return hl(t,n,null,s)}}}}function gs(t,e){const n=Vl(e);return t.queryToTagMap.get(n)}function Vl(t){return t._path.toString()+"$"+t._queryIdentifier}function Ad(t,e){return t.tagToQueryMap.get(e)}function Od(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function Dd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Bl(t.pendingWriteTree_,e);return Rd(r,n,i,null)}function QI(t){return t.fold((e,n,r)=>{if(n&&In(n))return[Wl(n)];{let i=[];return n&&(i=dv(n)),Ee(r,(s,o)=>{i=i.concat(o)}),i}})}function Bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(BI())(t._repo,t._path):t}function YI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function JI(){return WI++}function XI(t,e,n){const r=e._path,i=gs(t,e),s=vv(t,n),o=t.listenProvider_.startListening(Bi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!In(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!j(u)&&h&&In(h))return[Wl(h).query];{let d=[];return h&&(d=d.concat(dv(h).map(_=>_.query))),Ee(c,(_,m)=>{d=d.concat(m)}),d}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(Bi(h),gs(t,h))}}return o}/**
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
 */class Ld{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ld(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new Md(this.syncTree_,n)}node(){return bd(this.syncTree_,this.path_)}}const ZI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ap=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tT(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},tT=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yv=function(t,e,n,r){return Fd(e,new Md(n,t),r)},wv=function(t,e,n){return Fd(t,new Ld(e),n)};function Fd(t,e,n){const r=t.getPriority().val(),i=ap(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ap(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(re,(l,a)=>{const u=Fd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class jd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ud(t,e){let n=e instanceof $?e:new $(e),r=t,i=L(n);for(;i!==null;){const s=Wr(r.node.children,i)||{children:{},childCount:0};r=new jd(i,r,s),n=G(n),i=L(n)}return r}function oi(t){return t.node.value}function Ev(t,e){t.node.value=e,rc(t)}function Cv(t){return t.node.childCount>0}function nT(t){return oi(t)===void 0&&!Cv(t)}function $l(t,e){Ee(t.node.children,(n,r)=>{e(new jd(n,t,r))})}function Sv(t,e,n,r){n&&e(t),$l(t,i=>{Sv(i,e,!0)})}function rT(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Os(t){return new $(t.parent===null?t.name:Os(t.parent)+"/"+t.name)}function rc(t){t.parent!==null&&iT(t.parent,t.name,t)}function iT(t,e,n){const r=nT(n),i=It(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,rc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rc(t))}/**
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
 */const sT=/[\[\].#$\/\u0000-\u001F\u007F]/,oT=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,zd=function(t){return typeof t=="string"&&t.length!==0&&!sT.test(t)},Iv=function(t){return typeof t=="string"&&t.length!==0&&!oT.test(t)},lT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Iv(t)},aT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!fd(t)||t&&typeof t=="object"&&It(t,".sv")},Tv=function(t,e,n,r){r&&e===void 0||Hl(Fl(t,"value"),e,n)},Hl=function(t,e,n){const r=n instanceof $?new T1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(r)+" with contents = "+e.toString());if(fd(e))throw new Error(t+"contains "+e.toString()+" "+Fn(r));if(typeof e=="string"&&e.length>Ba/3&&jl(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+Fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ee(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);k1(r,o),Hl(t,l,r),x1(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fn(r)+" in addition to actual children.")}},uT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ds(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!zd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(I1);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Je(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},cT=function(t,e,n,r){const i=Fl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ee(e,(o,l)=>{const a=new $(o);if(Hl(i,l,ne(n,a)),vd(a)===".priority"&&!aT(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),uT(i,s)},kv=function(t,e,n,r){if(!Iv(n))throw new Error(Fl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kv(t,e,n)},Bd=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},hT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lT(n))throw new Error(Fl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xv(t,e,n){Gl(t,n),Nv(t,r=>yd(r,e))}function tt(t,e,n){Gl(t,n),Nv(t,r=>Je(r,e)||Je(e,r))}function Nv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(pT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Fi&&ve("event: "+n.toString()),ii(r)}}}/**
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
 */const mT="repo_interrupt",gT=25;class _T{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=il(),this.transactionQueueTree_=new jd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vT(t,e,n){if(t.stats_=gd(t.repoInfo_),t.forceRestClient_||QS())t.server_=new rl(t.repoInfo_,(r,i,s,o)=>{up(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>cp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(r,i,s,o)=>{up(t,r,i,s,o)},r=>{cp(t,r)},r=>{yT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=e1(t.repoInfo_,()=>new Z1(t.stats_,t.server_)),t.infoData_=new q1,t.infoSyncTree_=new lp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=As(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Wd(t,"connected",!1),t.serverSyncTree_=new lp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);tt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Pv(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kl(t){return ZI({timestamp:Pv(t)})}function up(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Xo(n,u=>ue(u));o=KI(t.serverSyncTree_,s,a,i)}else{const a=ue(n);o=mv(t.serverSyncTree_,s,a,i)}else if(r){const a=Xo(n,u=>ue(u));o=$I(t.serverSyncTree_,s,a)}else{const a=ue(n);o=As(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=qr(t,s)),tt(t.eventQueue_,l,o)}function cp(t,e){Wd(t,"connected",e),e===!1&&ST(t)}function yT(t,e){Ee(e,(n,r)=>{Wd(t,n,r)})}function Wd(t,e,n){const r=new $("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(r,i);const s=As(t.infoSyncTree_,r,i);tt(t.eventQueue_,r,s)}function Vd(t){return t.nextWriteId_++}function wT(t,e,n){const r=qI(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ue(i).withIndex(e._queryParams.getIndex());nc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=As(t.serverSyncTree_,e._path,s);else{const l=gs(t.serverSyncTree_,e);o=mv(t.serverSyncTree_,e._path,s,l)}return tt(t.eventQueue_,e._path,o),hl(t.serverSyncTree_,e,n,null,!0),s},i=>(Ds(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function ET(t,e,n,r,i){Ds(t,"set",{path:e.toString(),value:n,priority:r});const s=Kl(t),o=ue(n,r),l=bd(t.serverSyncTree_,e),a=wv(o,l,s),u=Vd(t),h=pv(t.serverSyncTree_,e,a,u,!0);Gl(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Pe("set at "+e+" failed: "+d);const y=rn(t.serverSyncTree_,u,!m);tt(t.eventQueue_,e,y),ic(t,i,d,_)});const c=Hd(t,e);qr(t,c),tt(t.eventQueue_,c,[])}function CT(t,e,n,r){Ds(t,"update",{path:e.toString(),value:n});let i=!0;const s=Kl(t),o={};if(Ee(n,(l,a)=>{i=!1,o[l]=yv(ne(e,l),ue(a),t.serverSyncTree_,s)}),i)ve("update() called with empty data.  Don't do anything."),ic(t,r,"ok",void 0);else{const l=Vd(t),a=VI(t.serverSyncTree_,e,o,l);Gl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const c=u==="ok";c||Pe("update at "+e+" failed: "+u);const d=rn(t.serverSyncTree_,l,!c),_=d.length>0?qr(t,e):e;tt(t.eventQueue_,_,d),ic(t,r,u,h)}),Ee(n,u=>{const h=Hd(t,ne(e,u));qr(t,h)}),tt(t.eventQueue_,e,[])}}function ST(t){Ds(t,"onDisconnectEvents");const e=Kl(t),n=il();Yu(t.onDisconnect_,B(),(i,s)=>{const o=yv(i,s,t.serverSyncTree_,e);Z_(n,i,o)});let r=[];Yu(n,B(),(i,s)=>{r=r.concat(As(t.serverSyncTree_,i,s));const o=Hd(t,i);qr(t,o)}),t.onDisconnect_=il(),tt(t.eventQueue_,B(),r)}function IT(t,e,n){let r;L(e._path)===".info"?r=nc(t.infoSyncTree_,e,n):r=nc(t.serverSyncTree_,e,n),xv(t.eventQueue_,e._path,r)}function TT(t,e,n){let r;L(e._path)===".info"?r=hl(t.infoSyncTree_,e,n):r=hl(t.serverSyncTree_,e,n),xv(t.eventQueue_,e._path,r)}function kT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mT)}function Ds(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function ic(t,e,n,r){e&&ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Rv(t,e,n){return bd(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function $d(t,e=t.transactionQueueTree_){if(e||ql(t,e),oi(e)){const n=Av(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xT(t,Os(e),n)}else Cv(e)&&$l(e,n=>{$d(t,n)})}function xT(t,e,n){const r=n.map(u=>u.currentWriteId),i=Rv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=xe(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ds(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(rn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ql(t,Ud(t.transactionQueueTree_,e)),$d(t,t.transactionQueueTree_),tt(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)ii(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Pe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}qr(t,e)}},o)}function qr(t,e){const n=bv(t,e),r=Os(n),i=Av(t,n);return NT(t,i,r),r}function NT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xe(n,a.path);let h=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=gT)h=!0,c="maxretry",i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Rv(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){Hl("transaction failed: Data returned ",_,a.path);let m=ue(_);typeof _=="object"&&_!=null&&It(_,".priority")||(m=m.updatePriority(d.getPriority()));const E=a.currentWriteId,p=Kl(t),f=wv(m,d,p);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=f,a.currentWriteId=Vd(t),o.splice(o.indexOf(E),1),i=i.concat(pv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(rn(t.serverSyncTree_,E,!0))}else h=!0,c="nodata",i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0))}tt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}ql(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ii(r[l]);$d(t,t.transactionQueueTree_)}function bv(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&oi(r)===void 0;)r=Ud(r,n),e=G(e),n=L(e);return r}function Av(t,e){const n=[];return Ov(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Ov(t,e,n){const r=oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);$l(e,i=>{Ov(t,i,n)})}function ql(t,e){const n=oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ev(e,n.length>0?n:void 0)}$l(e,r=>{ql(t,r)})}function Hd(t,e){const n=Os(bv(t,e)),r=Ud(t.transactionQueueTree_,e);return rT(r,i=>{Wa(t,i)}),Wa(t,r),Sv(r,i=>{Wa(t,i)}),n}function Wa(t,e){const n=oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ev(e,void 0):n.length=s+1,tt(t.eventQueue_,Os(e),i);for(let o=0;o<r.length;o++)ii(r[o])}}/**
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
 */function PT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function RT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const dp=function(t,e){const n=bT(t),r=n.namespace;n.domain==="firebase.com"&&Ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new M_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},bT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=PT(t.substring(h,c)));const d=RT(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const hp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",AT=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=hp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=hp.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class OT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class DT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Dv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Gd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:vd(this._path)}get ref(){return new Vt(this._repo,this._path)}get _queryIdentifier(){const e=Jf(this._queryParams),n=pd(e);return n==="{}"?"default":n}get _queryObject(){return Jf(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof Gd))return!1;const n=this._repo===e._repo,r=yd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+S1(this._path)}}class Vt extends Gd{constructor(e,n){super(e,n,new Sd,!1)}get parent(){const e=H_(this._path);return e===null?null:new Vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=vs(this.ref,e);return new _s(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new _s(i,vs(this.ref,r),re)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ze(t,e){return t=Ke(t),t._checkNotDeleted("ref"),e!==void 0?vs(t._root,e):t._root}function vs(t,e){return t=Ke(t),L(t._path)===null?dT("child","path",e):kv("child","path",e),new Vt(t._repo,ne(t._path,e))}function Kd(t,e){t=Ke(t),Bd("push",t._path),Tv("push",e,t._path,!0);const n=Pv(t._repo),r=AT(n),i=vs(t,r),s=vs(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function LT(t){return Bd("remove",t._path),Ql(t,null)}function Ql(t,e){t=Ke(t),Bd("set",t._path),Tv("set",e,t._path,!1);const n=new xs;return ET(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Lv(t,e){cT("update",e,t._path);const n=new xs;return CT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function MT(t){t=Ke(t);const e=new Dv(()=>{}),n=new Yl(e);return wT(t._repo,t,n).then(r=>new _s(r,new Vt(t._repo,t._path),t._queryParams.getIndex()))}class Yl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new OT("value",this,new _s(e.snapshotNode,new Vt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DT(this,e,n):null}matches(e){return e instanceof Yl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function FT(t,e,n,r,i){const s=new Dv(n,void 0),o=new Yl(s);return IT(t._repo,t,o),()=>TT(t._repo,t,o)}function Rr(t,e,n,r){return FT(t,"value",e)}LI(Vt);zI(Vt);/**
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
 */const jT="FIREBASE_DATABASE_EMULATOR_HOST",sc={};let UT=!1;function zT(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ti(s);t.repoInfo_=new M_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function BT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dp(s,i),l=o.repoInfo,a;typeof process<"u"&&Of&&(a=Of[jT]),a?(s=`http://${a}?ns=${l.namespace}`,o=dp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new JS(t.name,t.options,e);hT("Invalid Firebase Database URL",o),j(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const h=VT(l,t,u,new YS(t,n));return new $T(h,t)}function WT(t,e){const n=sc[e];(!n||n[t.key]!==t)&&Ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kT(t),delete n[t.key]}function VT(t,e,n,r){let i=sc[e.name];i||(i={},sc[e.name]=i);let s=i[t.toURLString()];return s&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new _T(t,UT,n,r),i[t.toURLString()]=s,s}class $T{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function HT(t=y_(),e){const n=hd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=oC("database");r&&GT(n,...r)}return n}function GT(t,e,n,r={}){t=Ke(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Yn(r,s.repoInfo_.emulatorOptions))return;Ut("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new wo(wo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:lC(r.mockUserToken,t.app.options.projectId);o=new wo(l)}ti(e)&&(h_(e),f_("Database",!0)),zT(s,i,r,o)}/**
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
 */function KT(t){DS(ri),Vr(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return BT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(Df,Lf,t),gn(Df,Lf,"esm2017")}/**
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
 */const qT={".sv":"timestamp"};function QT(){return qT}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KT();var YT="firebase",JT="11.10.0";/**
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
 */gn(YT,JT,"app");function qd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XT=Mv,Fv=new Ns("auth","Firebase",Mv());/**
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
 */const fl=new cd("@firebase/auth");function ZT(t,...e){fl.logLevel<=V.WARN&&fl.warn(`Auth (${ri}): ${t}`,...e)}function Eo(t,...e){fl.logLevel<=V.ERROR&&fl.error(`Auth (${ri}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Qd(t,...e)}function Et(t,...e){return Qd(t,...e)}function jv(t,e,n){const r=Object.assign(Object.assign({},XT()),{[e]:n});return new Ns("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return jv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fv.create(t,...e)}function A(t,e,...n){if(!t)throw Qd(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function Bt(t,e){t||Rt(e)}/**
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
 */function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ek(){return fp()==="http:"||fp()==="https:"}function fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ek()||dC()||"connection"in navigator)?navigator.onLine:!0}function nk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=ud()||p_()}get(){return tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yd(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Uv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ik=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sk=new Ls(3e4,6e4);function Jl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function li(t,e,n,r,i={}){return zv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ni(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return cC()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ti(t.emulatorConfig.host)&&(u.credentials="include"),Uv.fetch()(await Wv(t,t.config.apiHost,n,l),u)})}async function zv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rk),e);try{const i=new ok(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw so(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw so(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw so(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jv(t,h,u);zt(t,h)}}catch(i){if(i instanceof Rn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function Bv(t,e,n,r,i={}){const s=await li(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Wv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Yd(t.config,i):`${t.config.apiScheme}://${i}`;return ik.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class ok{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),sk.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function lk(t,e){return li(t,"POST","/v1/accounts:delete",e)}async function pl(t,e){return li(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ak(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=Jd(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wi(Va(i.auth_time)),issuedAtTime:Wi(Va(i.iat)),expirationTime:Wi(Va(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Va(t){return Number(t)*1e3}function Jd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jo(n);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pp(t){const e=Jd(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ys(t,pl(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vv(s.providerUserInfo):[],l=hk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function dk(t){const e=Ke(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vv(t){return t.map(e=>{var{providerId:n}=e,r=qd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fk(t,e){const n=await zv(t,{},async()=>{const r=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Wv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&ti(t.emulatorConfig.host)&&(a.credentials="include"),Uv.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pk(t,e){return li(t,"POST","/v2/accounts:revokeToken",Jl(t,e))}/**
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
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new br;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Ht(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ys(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ak(this,e)}reload(){return dk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await ys(this,lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:P}=n;A(v&&P,e,"internal-error");const R=br.fromJSON(this.name,P);A(typeof v=="string",e,"internal-error"),Ht(c,e.name),Ht(d,e.name),A(typeof w=="boolean",e,"internal-error"),A(typeof T=="boolean",e,"internal-error"),Ht(_,e.name),Ht(m,e.name),Ht(y,e.name),Ht(E,e.name),Ht(p,e.name),Ht(f,e.name);const q=new dt({uid:v,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:T,photoURL:m,phoneNumber:_,tenantId:y,stsTokenManager:R,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(q.providerData=N.map(F=>Object.assign({},F))),E&&(q._redirectEventId=E),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new br;i.updateFromServerResponse(n);const s=new dt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ml(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new br;l.updateFromIdToken(r);const a=new dt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const mp=new Map;function bt(t){Bt(t instanceof Function,"Expected a class definition");let e=mp.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mp.set(t,e),e)}/**
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
 */class $v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$v.type="NONE";const gp=$v;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pl(this.auth,{idToken:e}).catch(()=>{});return n?dt._fromGetAccountInfoResponse(this.auth,n,e):null}return dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(bt(gp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||bt(gp);const o=Co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let c;if(typeof h=="string"){const d=await pl(e,{idToken:h}).catch(()=>{});if(!d)break;c=await dt._fromGetAccountInfoResponse(e,d,h)}else c=dt._fromJSON(e,h);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ar(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,e,r))}}/**
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
 */function _p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yv(e))return"Blackberry";if(Jv(e))return"Webos";if(Gv(e))return"Safari";if((e.includes("chrome/")||Kv(e))&&!e.includes("edge/"))return"Chrome";if(Qv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hv(t=Re()){return/firefox\//i.test(t)}function Gv(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kv(t=Re()){return/crios\//i.test(t)}function qv(t=Re()){return/iemobile/i.test(t)}function Qv(t=Re()){return/android/i.test(t)}function Yv(t=Re()){return/blackberry/i.test(t)}function Jv(t=Re()){return/webos/i.test(t)}function Xd(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mk(t=Re()){var e;return Xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gk(){return hC()&&document.documentMode===10}function Xv(t=Re()){return Xd(t)||Qv(t)||Jv(t)||Yv(t)||/windows phone/i.test(t)||qv(t)}/**
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
 */function Zv(t,e=[]){let n;switch(t){case"Browser":n=_p(Re());break;case"Worker":n=`${_p(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
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
 */class _k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vk(t,e={}){return li(t,"GET","/v2/passwordPolicy",Jl(t,e))}/**
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
 */const yk=6;class wk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ek{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new _k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pl(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(yn(this));const n=e?Ke(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vk(this),n=new wk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xl(t){return Ke(t)}class vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=CC(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ck(t){Zd=t}function Sk(t){return Zd.loadJS(t)}function Ik(){return Zd.gapiScript}function Tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kk(t,e){const n=hd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yn(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function xk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nk(t,e,n){const r=Xl(t);A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ey(e),{host:o,port:l}=Pk(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},h=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){A(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),A(Yn(u,r.config.emulator)&&Yn(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ti(o)?(h_(`${s}//${o}${a}`),f_("Auth",!0)):Rk()}function ey(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Pk(t){const e=ey(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ty{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
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
 */async function Or(t,e){return Bv(t,"POST","/v1/accounts:signInWithIdp",Jl(t,e))}/**
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
 */const bk="http://localhost";class tr extends ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
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
 */class ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ms extends ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends Ms{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class Jt extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
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
 */class Xt extends Ms{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Zt extends Ms{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */async function Ak(t,e){return Bv(t,"POST","/v1/accounts:signUp",Jl(t,e))}/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dt._fromIdTokenResponse(e,r,i),o=wp(r);return new Tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wp(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Ok(t){var e;if(at(t.app))return Promise.reject(yn(t));const n=Xl(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ak(n,{returnSecureToken:!0}),i=await Tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class gl extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gl(e,n,r,i)}}function ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,s,e,r):s})}async function Dk(t,e,n=!1){const r=await ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}/**
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
 */async function Lk(t,e,n=!1){const{auth:r}=t;if(at(r.app))return Promise.reject(yn(r));const i="reauthenticate";try{const s=await ys(t,ry(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Jd(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function Mk(t,e,n=!1){if(at(t.app))return Promise.reject(yn(t));const r="signIn",i=await ry(t,r,e),s=await Tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Fk(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function jk(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}const _l="__sak";/**
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
 */class iy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Uk=1e3,zk=10;class sy extends iy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sy.type="LOCAL";const Bk=sy;/**
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
 */class oy extends iy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oy.type="SESSION";const ly=oy;/**
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
 */function Wk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Wk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
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
 */function eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=eh("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ct(){return window}function $k(t){Ct().location.href=t}/**
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
 */function ay(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function Hk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kk(){return ay()?self:null}/**
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
 */const uy="firebaseLocalStorageDb",qk=1,vl="firebaseLocalStorage",cy="fbase_key";class Fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([vl],e?"readwrite":"readonly").objectStore(vl)}function Qk(){const t=indexedDB.deleteDatabase(uy);return new Fs(t).toPromise()}function ac(){const t=indexedDB.open(uy,qk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vl,{keyPath:cy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vl)?e(r):(r.close(),await Qk(),e(await ac()))})})}async function Ep(t,e,n){const r=ea(t,!0).put({[cy]:e,value:n});return new Fs(r).toPromise()}async function Yk(t,e){const n=ea(t,!1).get(e),r=await new Fs(n).toPromise();return r===void 0?null:r.value}function Cp(t,e){const n=ea(t,!0).delete(e);return new Fs(n).toPromise()}const Jk=800,Xk=3;class dy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(Kk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hk(),!this.activeServiceWorker)return;this.sender=new Vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await Ep(e,_l,"1"),await Cp(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ea(i,!1).getAll();return new Fs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dy.type="LOCAL";const Zk=dy;new Ls(3e4,6e4);/**
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
 */function ex(t,e){return e?bt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class th extends ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tx(t){return Mk(t.auth,new th(t),t.bypassAuthState)}function nx(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Lk(n,new th(t),t.bypassAuthState)}async function rx(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Dk(n,new th(t),t.bypassAuthState)}/**
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
 */class hy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tx;case"linkViaPopup":case"linkViaRedirect":return rx;case"reauthViaPopup":case"reauthViaRedirect":return nx;default:zt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ix=new Ls(2e3,1e4);class Er extends hy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ix.get())};e()}}Er.currentPopupAction=null;/**
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
 */const sx="pendingRedirect",So=new Map;class ox extends hy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await lx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lx(t,e){const n=cx(e),r=ux(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ax(t,e){So.set(t._key(),e)}function ux(t){return bt(t._redirectPersistence)}function cx(t){return Co(sx,t.config.apiKey,t.name)}async function dx(t,e,n=!1){if(at(t.app))return Promise.reject(yn(t));const r=Xl(t),i=ex(r,e),o=await new ox(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hx=10*60*1e3;class fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!px(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sp(e))}saveEventToCache(e){this.cachedEventUids.add(Sp(e)),this.lastProcessedEventTime=Date.now()}}function Sp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function px(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fy(t);default:return!1}}/**
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
 */async function mx(t,e={}){return li(t,"GET","/v1/projects",e)}/**
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
 */const gx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_x=/^https?/;async function vx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mx(t);for(const n of e)try{if(yx(n))return}catch{}zt(t,"unauthorized-domain")}function yx(t){const e=oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_x.test(n))return!1;if(gx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wx=new Ls(3e4,6e4);function Ip(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ex(t){return new Promise((e,n)=>{var r,i,s;function o(){Ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ip(),n(Et(t,"network-request-failed"))},timeout:wx.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)o();else{const l=Tk("iframefcb");return Ct()[l]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},Sk(`${Ik()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Io=null,e})}let Io=null;function Cx(t){return Io=Io||Ex(t),Io}/**
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
 */const Sx=new Ls(5e3,15e3),Ix="__/auth/iframe",Tx="emulator/auth/iframe",kx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nx(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,Tx):`https://${t.config.authDomain}/${Ix}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=xx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ni(r).slice(1)}`}async function Px(t){const e=await Cx(t),n=Ct().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Nx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=Ct().setTimeout(()=>{s(o)},Sx.get());function a(){Ct().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Rx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bx=500,Ax=600,Ox="_blank",Dx="http://localhost";class Tp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lx(t,e,n,r=bx,i=Ax){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Rx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=Kv(u)?Ox:n),Hv(u)&&(e=e||Dx,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(mk(u)&&l!=="_self")return Mx(e||"",l),new Tp(null);const c=window.open(e||"",l,h);A(c,t,"popup-blocked");try{c.focus()}catch{}return new Tp(c)}function Mx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fx="__/auth/handler",jx="emulator/auth/handler",Ux=encodeURIComponent("fac");async function kp(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries({}))o[h]=c}if(e instanceof Ms){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${Ux}=${encodeURIComponent(a)}`:"";return`${zx(t)}?${ni(l).slice(1)}${u}`}function zx({config:t}){return t.emulator?Yd(t,jx):`https://${t.authDomain}/${Fx}`}/**
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
 */const $a="webStorageSupport";class Bx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ly,this._completeRedirectFn=dx,this._overrideRedirectResult=ax}async _openPopup(e,n,r,i){var s;Bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await kp(e,n,r,oc(),i);return Lx(e,o,eh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await kp(e,n,r,oc(),i);return $k(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Px(e),r=new fx(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($a,{type:$a},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$a];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xv()||Gv()||Xd()}}const Wx=Bx;var xp="@firebase/auth",Np="1.10.8";/**
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
 */class Vx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $x(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hx(t){Vr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zv(t)},u=new Ek(r,i,s,a);return xk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Jn("auth-internal",e=>{const n=Xl(e.getProvider("auth").getImmediate());return(r=>new Vx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(xp,Np,$x(t)),gn(xp,Np,"esm2017")}/**
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
 */const Gx=5*60,Kx=d_("authIdTokenMaxAge")||Gx;let Pp=null;const qx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kx)return;const i=n==null?void 0:n.token;Pp!==i&&(Pp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qx(t=y_()){const e=hd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kk(t,{popupRedirectResolver:Wx,persistence:[Zk,Bk,ly]}),r=d_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qx(s.toString());jk(n,o,()=>o(n.currentUser)),Fk(n,l=>o(l))}}const i=u_("auth");return i&&Nk(n,`http://${i}`),n}function Yx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ck({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Yx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hx("Browser");const Jx={apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},py=v_(Jx),Be=HT(py),Xx=Qx(py),Zx=Ok(Xx);function Dr(t){return t?Array.isArray(t)?t.map((e,n)=>e?{id:String(n),...e}:null).filter(Boolean):Object.entries(t).map(([e,n])=>({id:e,...n})):[]}const my=C.createContext(null),oo="hollywood_session";function eN({children:t}){const[e,n]=C.useState(null),[r,i]=C.useState(!0);C.useEffect(()=>{Zx.finally(()=>{const a=localStorage.getItem(oo);if(a)try{n(JSON.parse(a))}catch{localStorage.removeItem(oo)}i(!1)})},[]);async function s(a,u){const h=await MT(ze(Be,"employees")),c=Dr(h.val()),d=a.replace(/\s+/g,""),_=c.find(m=>m.phone===d&&m.pin===u);if(!_)throw new Error("Telefon nömrəsi və ya PIN kod yanlışdır");return n(_),localStorage.setItem(oo,JSON.stringify(_)),_}function o(){n(null),localStorage.removeItem(oo)}const l=(e==null?void 0:e.role)==="admin";return g.jsx(my.Provider,{value:{employee:e,loading:r,isAdmin:l,login:s,logout:o},children:t})}function bn(){return C.useContext(my)}function Rp({adminOnly:t=!1}){const{employee:e,isAdmin:n}=bn();return e?t&&!n?g.jsx(Qn,{to:"/",replace:!0}):g.jsx(jE,{}):g.jsx(Qn,{to:"/login",replace:!0})}function tN(){const{employee:t,login:e}=bn(),n=Ml(),[r,i]=C.useState(""),[s,o]=C.useState(""),[l,a]=C.useState(""),[u,h]=C.useState(!1);if(t)return g.jsx(Qn,{to:"/",replace:!0});async function c(d){d.preventDefault(),a(""),h(!0);try{await e(r,s),n("/")}catch(_){a(_.message)}finally{h(!1)}}return g.jsx("div",{className:"flex min-h-screen items-center justify-center bg-obsidian-950 px-4",children:g.jsxs("div",{className:"w-full max-w-sm",children:[g.jsxs("div",{className:"mb-8 flex flex-col items-center",children:[g.jsx("img",{src:"/hollywood/logo.png",alt:"Hollywood Restaurant",className:"h-24 w-24 rounded-full shadow-gold"}),g.jsx("h1",{className:"mt-4 font-display text-2xl font-semibold text-gold-400",children:"Hollywood Restaurant"}),g.jsx("p",{className:"mt-1 text-sm text-obsidian-400",children:"İdarəetmə panelinə giriş"})]}),g.jsxs("form",{onSubmit:c,className:"space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-900 p-6",children:[g.jsxs("div",{children:[g.jsx("label",{htmlFor:"phone",className:"mb-1.5 block text-sm text-obsidian-300",children:"Telefon nömrəsi"}),g.jsx("input",{id:"phone",type:"tel",inputMode:"tel",autoComplete:"tel",value:r,onChange:d=>i(d.target.value),placeholder:"0501234567",required:!0,className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-800 px-3.5 py-2.5 text-obsidian-50 outline-none transition focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{htmlFor:"pin",className:"mb-1.5 block text-sm text-obsidian-300",children:"PIN kod"}),g.jsx("input",{id:"pin",type:"password",inputMode:"numeric",autoComplete:"current-password",value:s,onChange:d=>o(d.target.value),placeholder:"••••",required:!0,className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-800 px-3.5 py-2.5 text-obsidian-50 outline-none transition focus:border-gold-500"})]}),l&&g.jsx("p",{className:"text-sm text-red-400",children:l}),g.jsx("button",{type:"submit",disabled:u,className:"w-full rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 py-2.5 font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500 disabled:opacity-60",children:u?"Yoxlanılır...":"Daxil ol"})]})]})})}function ws({title:t,backTo:e}){const{employee:n,isAdmin:r,logout:i}=bn(),s=Ml();function o(){i(),s("/login")}return g.jsx("header",{className:"sticky top-0 z-10 border-b border-obsidian-700 bg-obsidian-950/95 backdrop-blur",children:g.jsxs("div",{className:"mx-auto flex max-w-5xl items-center justify-between px-4 py-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[e&&g.jsx("button",{onClick:()=>s(e),className:"rounded-full p-2 text-gold-400 transition hover:bg-obsidian-800","aria-label":"Geri",children:g.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:g.jsx("path",{d:"M15 18l-6-6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})}),g.jsxs(Li,{to:"/",className:"flex items-center gap-2",children:[g.jsx("img",{src:"/hollywood/logo.png",alt:"Hollywood Restaurant",className:"h-9 w-9 rounded-full"}),g.jsx("span",{className:"font-display text-lg font-semibold text-gold-400",children:t??"Hollywood Restaurant"})]})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("div",{className:"hidden text-right sm:block",children:[g.jsx("p",{className:"text-sm font-medium text-obsidian-100",children:n==null?void 0:n.name}),g.jsx("p",{className:"text-xs text-obsidian-400",children:r?"Administrator":"İşçi"})]}),g.jsx("button",{onClick:o,className:"rounded-lg border border-obsidian-600 px-3 py-1.5 text-sm text-obsidian-300 transition hover:border-gold-500 hover:text-gold-400",children:"Çıxış"})]})]})})}function nN(){const{employee:t,isAdmin:e}=bn();if(!e){if(t.assignedType&&t.assignedId){const n=t.assignedType==="otaq"?"/otaqlar":"/masalar";return g.jsx(Qn,{to:`${n}/${t.assignedId}`,replace:!0})}return g.jsxs("div",{className:"min-h-screen bg-obsidian-950",children:[g.jsx(ws,{}),g.jsx("div",{className:"mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center",children:g.jsx("p",{className:"text-obsidian-300",children:"Sizə hələ otaq və ya masa təyin edilməyib. Administrator ilə əlaqə saxlayın."})})]})}return g.jsxs("div",{className:"min-h-screen bg-obsidian-950",children:[g.jsx(ws,{}),g.jsxs("main",{className:"mx-auto max-w-5xl px-4 py-10",children:[g.jsxs("h1",{className:"font-display text-2xl font-semibold text-obsidian-50",children:["Xoş gəldiniz, ",t.name]}),g.jsx("p",{className:"mt-1 text-obsidian-400",children:"Zalı idarə etmək üçün bölmə seçin"}),g.jsxs("div",{className:"mt-8 grid gap-5 sm:grid-cols-2",children:[g.jsxs(Li,{to:"/otaqlar",className:"group rounded-2xl border border-obsidian-700 bg-obsidian-800 p-8 transition hover:border-gold-500 hover:shadow-gold",children:[g.jsx("div",{className:"mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400",children:g.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:g.jsx("path",{d:"M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",strokeLinecap:"round",strokeLinejoin:"round"})})}),g.jsx("h2",{className:"font-display text-xl font-semibold text-obsidian-50",children:"Otaqlar"}),g.jsx("p",{className:"mt-1 text-sm text-obsidian-400",children:"Bütün otaqların vəziyyəti və rezervasiyaları"})]}),g.jsxs(Li,{to:"/masalar",className:"group rounded-2xl border border-obsidian-700 bg-obsidian-800 p-8 transition hover:border-gold-500 hover:shadow-gold",children:[g.jsx("div",{className:"mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400",children:g.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:g.jsx("path",{d:"M4 10h16M4 10a2 2 0 00-2 2v1h20v-1a2 2 0 00-2-2M4 10V6a2 2 0 012-2h12a2 2 0 012 2v4M6 13v6M18 13v6",strokeLinecap:"round",strokeLinejoin:"round"})})}),g.jsx("h2",{className:"font-display text-xl font-semibold text-obsidian-50",children:"Masalar"}),g.jsx("p",{className:"mt-1 text-sm text-obsidian-400",children:"Zaldakı bütün masaların vəziyyəti və rezervasiyaları"})]})]}),g.jsx(Li,{to:"/isciler",className:"mt-5 inline-flex items-center gap-2 text-sm text-obsidian-400 transition hover:text-gold-400",children:"İşçiləri idarə et →"})]})]})}const bp={boş:{label:"Boş",ring:"border-emerald-700/60 hover:border-emerald-500",dot:"bg-emerald-400",badge:"bg-emerald-500/10 text-emerald-400"},dolu:{label:"Dolu",ring:"border-red-700/60 hover:border-red-500",dot:"bg-red-400",badge:"bg-red-500/10 text-red-400"},rezerv:{label:"Rezerv edilib",ring:"border-amber-700/60 hover:border-amber-500",dot:"bg-amber-400",badge:"bg-amber-500/10 text-amber-400"}};function rN({unit:t,type:e}){const n=bp[t.status]??bp.boş,r=e==="otaq"?"/otaqlar":"/masalar";return g.jsxs(Li,{to:`${r}/${t.id}`,className:`group relative flex flex-col justify-between rounded-2xl border bg-obsidian-800 p-5 transition ${n.ring}`,children:[g.jsxs("div",{className:"flex items-start justify-between",children:[g.jsx("h3",{className:"font-display text-xl font-semibold text-obsidian-50",children:t.name}),g.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${n.badge}`,children:[g.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${n.dot}`}),n.label]})]}),g.jsxs("div",{className:"mt-6 flex items-center justify-between text-sm text-obsidian-400",children:[g.jsxs("span",{children:["Tutum: ",t.capacity," nəfər"]}),t.assignedEmployeeName&&g.jsx("span",{className:"text-obsidian-500",children:t.assignedEmployeeName})]})]})}function gy({type:t,node:e,title:n,emptyText:r}){const{isAdmin:i}=bn(),[s,o]=C.useState(null),[l,a]=C.useState(!1),[u,h]=C.useState(""),[c,d]=C.useState("");C.useEffect(()=>{const m=Rr(ze(Be,e),y=>{const E=Dr(y.val()).sort((p,f)=>p.name.localeCompare(f.name,"az"));o(E)});return()=>m()},[e]);async function _(m){if(m.preventDefault(),!u.trim())return;const y=Kd(ze(Be,e));await Ql(y,{name:u.trim(),capacity:Number(c)||1,status:"boş"}),h(""),d(""),a(!1)}return g.jsxs("div",{className:"min-h-screen bg-obsidian-950",children:[g.jsx(ws,{title:n,backTo:"/"}),g.jsxs("main",{className:"mx-auto max-w-5xl px-4 py-10",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"font-display text-2xl font-semibold text-obsidian-50",children:n}),g.jsx("p",{className:"mt-1 text-obsidian-400",children:i?"Vəziyyətə klikləyərək rezervasiya edin":"Sizə təyin olunmuş bölmələr"})]}),i&&g.jsx("button",{onClick:()=>a(m=>!m),className:"rounded-lg border border-gold-600 px-4 py-2 text-sm font-medium text-gold-400 transition hover:bg-gold-500/10",children:l?"Bağla":"+ Yeni əlavə et"})]}),l&&g.jsxs("form",{onSubmit:_,className:"mt-6 flex flex-wrap items-end gap-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5",children:[g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Ad"}),g.jsx("input",{value:u,onChange:m=>h(m.target.value),placeholder:t==="otaq"?"Otaq 1":"Masa 1",className:"rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Tutum (nəfər)"}),g.jsx("input",{type:"number",min:"1",value:c,onChange:m=>d(m.target.value),className:"w-32 rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsx("button",{type:"submit",className:"rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500",children:"Əlavə et"})]}),s===null&&g.jsx("p",{className:"mt-8 text-obsidian-500",children:"Yüklənir..."}),s!==null&&s.length===0&&g.jsx("p",{className:"mt-8 text-obsidian-500",children:r}),g.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:s==null?void 0:s.map(m=>g.jsx(rN,{unit:m,type:t},m.id))})]})]})}function iN(){return g.jsx(gy,{type:"otaq",node:"rooms",title:"Otaqlar",emptyText:"Hələ heç bir otaq əlavə edilməyib."})}function sN(){return g.jsx(gy,{type:"masa",node:"tables",title:"Masalar",emptyText:"Hələ heç bir masa əlavə edilməyib."})}const Ap={customerName:"",phone:"",date:"",time:"",guests:2,note:""};function oN({targetType:t,targetId:e,onCreated:n}){const{employee:r}=bn(),[i,s]=C.useState(Ap),[o,l]=C.useState(!1),[a,u]=C.useState("");function h(d){return _=>s(m=>({...m,[d]:_.target.value}))}async function c(d){if(d.preventDefault(),u(""),!i.customerName.trim()||!i.phone.trim()||!i.date||!i.time){u("Ad, telefon, tarix və saat mütləq doldurulmalıdır");return}l(!0);try{const _=ze(Be,"reservations"),m=Kd(_);await Ql(m,{targetType:t,targetId:e,customerName:i.customerName.trim(),phone:i.phone.trim(),date:i.date,time:i.time,guests:Number(i.guests)||1,note:i.note.trim(),status:"aktiv",createdByName:(r==null?void 0:r.name)??"Naməlum",createdAt:QT()}),s(Ap),n==null||n()}catch{u("Rezervasiya yadda saxlanmadı, yenidən cəhd edin")}finally{l(!1)}}return g.jsxs("form",{onSubmit:c,className:"space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5",children:[g.jsx("h3",{className:"font-display text-lg font-semibold text-obsidian-50",children:"Yeni rezervasiya"}),g.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Müştərinin adı"}),g.jsx("input",{value:i.customerName,onChange:h("customerName"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Telefon"}),g.jsx("input",{type:"tel",value:i.phone,onChange:h("phone"),placeholder:"0501234567",className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Tarix"}),g.jsx("input",{type:"date",value:i.date,onChange:h("date"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Saat"}),g.jsx("input",{type:"time",value:i.time,onChange:h("time"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Nəfər sayı"}),g.jsx("input",{type:"number",min:"1",value:i.guests,onChange:h("guests"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Qeyd (istəyə bağlı)"}),g.jsx("input",{value:i.note,onChange:h("note"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]})]}),a&&g.jsx("p",{className:"text-sm text-red-400",children:a}),g.jsx("button",{type:"submit",disabled:o,className:"rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500 disabled:opacity-60",children:o?"Yadda saxlanılır...":"Rezervasiyanı əlavə et"})]})}function lN({reservations:t}){async function e(n){await Lv(ze(Be,`reservations/${n}`),{status:"ləğv edilib"})}return t.length===0?g.jsx("p",{className:"text-obsidian-500",children:"Hələ rezervasiya yoxdur."}):g.jsx("div",{className:"space-y-3",children:t.map(n=>g.jsxs("div",{className:`flex items-center justify-between rounded-xl border p-4 ${n.status==="ləğv edilib"?"border-obsidian-700 bg-obsidian-800/50 opacity-50":"border-obsidian-700 bg-obsidian-800"}`,children:[g.jsxs("div",{children:[g.jsx("p",{className:"font-medium text-obsidian-50",children:n.customerName}),g.jsxs("p",{className:"text-sm text-obsidian-400",children:[n.date," · ",n.time," · ",n.guests," nəfər · ",n.phone]}),n.note&&g.jsx("p",{className:"mt-1 text-sm text-obsidian-500",children:n.note}),g.jsxs("p",{className:"mt-1 text-xs text-obsidian-600",children:["Qeydə alan: ",n.createdByName]})]}),n.status!=="ləğv edilib"&&g.jsx("button",{onClick:()=>e(n.id),className:"rounded-lg border border-obsidian-600 px-3 py-1.5 text-xs text-obsidian-300 transition hover:border-red-500 hover:text-red-400",children:"Ləğv et"})]},n.id))})}const aN=[{value:"boş",label:"Boş",activeClass:"bg-emerald-500 text-obsidian-950"},{value:"dolu",label:"Dolu",activeClass:"bg-red-500 text-obsidian-950"},{value:"rezerv",label:"Rezerv edilib",activeClass:"bg-amber-500 text-obsidian-950"}];function Op({type:t}){const{id:e}=SE(),{employee:n,isAdmin:r}=bn(),i=t==="otaq"?"rooms":"tables",s=t==="otaq"?"/otaqlar":"/masalar",[o,l]=C.useState(void 0),[a,u]=C.useState([]);C.useEffect(()=>{const d=Rr(ze(Be,`${i}/${e}`),m=>{l(m.val()?{id:e,...m.val()}:null)}),_=Rr(ze(Be,"reservations"),m=>{const y=Dr(m.val()).filter(E=>E.targetType===t&&E.targetId===e).sort((E,p)=>`${p.date}${p.time}`.localeCompare(`${E.date}${E.time}`));u(y)});return()=>{d(),_()}},[i,e,t]);const h=r||n.assignedType===t&&n.assignedId===e;if(!r&&!h)return g.jsx(Qn,{to:"/",replace:!0});if(o===null)return g.jsx(Qn,{to:s,replace:!0});async function c(d){await Lv(ze(Be,`${i}/${e}`),{status:d})}return g.jsxs("div",{className:"min-h-screen bg-obsidian-950",children:[g.jsx(ws,{title:(o==null?void 0:o.name)??"...",backTo:s}),o&&g.jsxs("main",{className:"mx-auto max-w-3xl px-4 py-10",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"font-display text-2xl font-semibold text-obsidian-50",children:o.name}),g.jsxs("p",{className:"mt-1 text-obsidian-400",children:["Tutum: ",o.capacity," nəfər"]})]}),g.jsx("div",{className:"flex gap-2",children:aN.map(d=>g.jsx("button",{onClick:()=>c(d.value),disabled:!h,className:`rounded-lg px-3.5 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${o.status===d.value?d.activeClass:"border border-obsidian-600 text-obsidian-300 hover:border-gold-500"}`,children:d.label},d.value))})]}),h&&g.jsx("div",{className:"mt-8",children:g.jsx(oN,{targetType:t,targetId:e})}),g.jsxs("div",{className:"mt-8",children:[g.jsx("h2",{className:"mb-3 font-display text-lg font-semibold text-obsidian-50",children:"Rezervasiyalar"}),g.jsx(lN,{reservations:a})]})]})]})}const Dp={name:"",phone:"",pin:"",role:"işçi",assignedType:"",assignedId:""};function uN(){const[t,e]=C.useState(null),[n,r]=C.useState([]),[i,s]=C.useState([]),[o,l]=C.useState(Dp),[a,u]=C.useState("");C.useEffect(()=>{const m=Rr(ze(Be,"employees"),p=>{e(Dr(p.val()))}),y=Rr(ze(Be,"rooms"),p=>r(Dr(p.val()))),E=Rr(ze(Be,"tables"),p=>s(Dr(p.val())));return()=>{m(),y(),E()}},[]);function h(m){return y=>l(E=>({...E,[m]:y.target.value}))}async function c(m){if(m.preventDefault(),u(""),!o.name.trim()||!o.phone.trim()||!o.pin.trim()){u("Ad, telefon və PIN mütləq doldurulmalıdır");return}const y=o.phone.trim().replace(/\s+/g,"");if(t==null?void 0:t.some(f=>f.phone===y)){u("Bu telefon nömrəsi ilə artıq işçi qeydə alınıb");return}const p=Kd(ze(Be,"employees"));await Ql(p,{name:o.name.trim(),phone:y,pin:o.pin.trim(),role:o.role,assignedType:o.assignedType||null,assignedId:o.assignedId||null}),l(Dp)}async function d(m){await LT(ze(Be,`employees/${m}`))}const _=o.assignedType==="otaq"?n:o.assignedType==="masa"?i:[];return g.jsxs("div",{className:"min-h-screen bg-obsidian-950",children:[g.jsx(ws,{title:"İşçilər",backTo:"/"}),g.jsxs("main",{className:"mx-auto max-w-3xl px-4 py-10",children:[g.jsx("h1",{className:"font-display text-2xl font-semibold text-obsidian-50",children:"İşçilər"}),g.jsx("p",{className:"mt-1 text-obsidian-400",children:"Yeni işçi əlavə edin və otaq/masa təyin edin"}),g.jsxs("form",{onSubmit:c,className:"mt-6 space-y-4 rounded-2xl border border-obsidian-700 bg-obsidian-800 p-5",children:[g.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Ad Soyad"}),g.jsx("input",{value:o.name,onChange:h("name"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Telefon"}),g.jsx("input",{type:"tel",value:o.phone,onChange:h("phone"),placeholder:"0501234567",className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"PIN kod"}),g.jsx("input",{value:o.pin,onChange:h("pin"),placeholder:"4 rəqəm",className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Rol"}),g.jsxs("select",{value:o.role,onChange:h("role"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500",children:[g.jsx("option",{value:"işçi",children:"İşçi"}),g.jsx("option",{value:"admin",children:"Administrator"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:"Təyinat növü"}),g.jsxs("select",{value:o.assignedType,onChange:m=>l(y=>({...y,assignedType:m.target.value,assignedId:""})),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500",children:[g.jsx("option",{value:"",children:"Təyin olunmayıb"}),g.jsx("option",{value:"otaq",children:"Otaq"}),g.jsx("option",{value:"masa",children:"Masa"})]})]}),o.assignedType&&g.jsxs("div",{children:[g.jsx("label",{className:"mb-1.5 block text-sm text-obsidian-300",children:o.assignedType==="otaq"?"Otaq seç":"Masa seç"}),g.jsxs("select",{value:o.assignedId,onChange:h("assignedId"),className:"w-full rounded-lg border border-obsidian-600 bg-obsidian-900 px-3.5 py-2.5 text-obsidian-50 outline-none focus:border-gold-500",children:[g.jsx("option",{value:"",children:"Seçin"}),_.map(m=>g.jsx("option",{value:m.id,children:m.name},m.id))]})]})]}),a&&g.jsx("p",{className:"text-sm text-red-400",children:a}),g.jsx("button",{type:"submit",className:"rounded-lg bg-gradient-to-b from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-medium text-obsidian-950 transition hover:from-gold-300 hover:to-gold-500",children:"İşçini əlavə et"})]}),g.jsx("div",{className:"mt-8 space-y-3",children:t==null?void 0:t.map(m=>{var y;return g.jsxs("div",{className:"flex items-center justify-between rounded-xl border border-obsidian-700 bg-obsidian-800 p-4",children:[g.jsxs("div",{children:[g.jsxs("p",{className:"font-medium text-obsidian-50",children:[m.name,m.role==="admin"&&g.jsx("span",{className:"ml-2 rounded-full bg-gold-500/10 px-2 py-0.5 text-xs text-gold-400",children:"Admin"})]}),g.jsx("p",{className:"text-sm text-obsidian-400",children:m.phone}),m.assignedType&&g.jsxs("p",{className:"text-xs text-obsidian-500",children:["Təyinat: ",m.assignedType==="otaq"?"Otaq":"Masa"," —"," ",((y=(m.assignedType==="otaq"?n:i).find(E=>E.id===m.assignedId))==null?void 0:y.name)??"—"]})]}),g.jsx("button",{onClick:()=>d(m.id),className:"rounded-lg border border-obsidian-600 px-3 py-1.5 text-xs text-obsidian-300 transition hover:border-red-500 hover:text-red-400",children:"Sil"})]},m.id)})})]})]})}function cN(){const{loading:t}=bn();return t?null:g.jsxs(zE,{children:[g.jsx(it,{path:"/login",element:g.jsx(tN,{})}),g.jsxs(it,{element:g.jsx(Rp,{}),children:[g.jsx(it,{path:"/",element:g.jsx(nN,{})}),g.jsx(it,{path:"/otaqlar",element:g.jsx(iN,{})}),g.jsx(it,{path:"/otaqlar/:id",element:g.jsx(Op,{type:"otaq"})}),g.jsx(it,{path:"/masalar",element:g.jsx(sN,{})}),g.jsx(it,{path:"/masalar/:id",element:g.jsx(Op,{type:"masa"})})]}),g.jsx(it,{element:g.jsx(Rp,{adminOnly:!0}),children:g.jsx(it,{path:"/isciler",element:g.jsx(uN,{})})}),g.jsx(it,{path:"*",element:g.jsx(Qn,{to:"/",replace:!0})})]})}Ha.createRoot(document.getElementById("root")).render(g.jsx(Hp.StrictMode,{children:g.jsx(KE,{basename:"/hollywood",children:g.jsx(eN,{children:g.jsx(cN,{})})})}));
