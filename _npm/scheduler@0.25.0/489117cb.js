/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/scheduler@0.25.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e={exports:{}},t={};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,l=e[r];if(!(0<a(l,t)))break e;e[r]=t,e[n]=l,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,l=e.length,o=l>>>1;r<o;){var i=2*(r+1)-1,u=e[i],s=i+1,c=e[s];if(0>a(u,n))s<l&&0>a(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[i]=n,r=i);else{if(!(s<l&&0>a(c,n)))break e;e[r]=c,e[s]=n,r=s}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var u=[],s=[],c=1,f=null,b=3,p=!1,_=!1,x=!1,y="function"==typeof setTimeout?setTimeout:null,d="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function m(e){for(var a=n(s);null!==a;){if(null===a.callback)r(s);else{if(!(a.startTime<=e))break;r(s),a.sortIndex=a.expirationTime,t(u,a)}a=n(s)}}function k(e){if(x=!1,m(e),!_)if(null!==n(u))_=!0,E();else{var t=n(s);null!==t&&M(k,t.startTime-e)}}var w,h=!1,g=-1,P=5,C=-1;function I(){return!(e.unstable_now()-C<P)}function T(){if(h){var t=e.unstable_now();C=t;var a=!0;try{e:{_=!1,x&&(x=!1,d(g),g=-1),p=!0;var l=b;try{t:{for(m(t),f=n(u);null!==f&&!(f.expirationTime>t&&I());){var o=f.callback;if("function"==typeof o){f.callback=null,b=f.priorityLevel;var i=o(f.expirationTime<=t);if(t=e.unstable_now(),"function"==typeof i){f.callback=i,m(t),a=!0;break t}f===n(u)&&r(u),m(t)}else r(u);f=n(u)}if(null!==f)a=!0;else{var c=n(s);null!==c&&M(k,c.startTime-t),a=!1}}break e}finally{f=null,b=l,p=!1}a=void 0}}finally{a?w():h=!1}}}if("function"==typeof v)w=function(){v(T)};else if("undefined"!=typeof MessageChannel){var L=new MessageChannel,F=L.port2;L.port1.onmessage=T,w=function(){F.postMessage(null)}}else w=function(){y(T,0)};function E(){h||(h=!0,w())}function M(t,n){g=y((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){_||p||(_=!0,E())},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(e){switch(b){case 1:case 2:case 3:var t=3;break;default:t=b}var n=b;b=t;try{return e()}finally{b=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=b;b=e;try{return t()}finally{b=n}},e.unstable_scheduleCallback=function(r,a,l){var o=e.unstable_now();switch("object"==typeof l&&null!==l?l="number"==typeof(l=l.delay)&&0<l?o+l:o:l=o,r){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return r={id:c++,callback:a,priorityLevel:r,startTime:l,expirationTime:i=l+i,sortIndex:-1},l>o?(r.sortIndex=l,t(s,r),null===n(u)&&r===n(s)&&(x?(d(g),g=-1):x=!0,M(k,l-o))):(r.sortIndex=i,t(u,r),_||p||(_=!0,E())),r},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(e){var t=b;return function(){var n=b;b=t;try{return e.apply(this,arguments)}finally{b=n}}}}(t),e.exports=t;var n=e.exports,r=e.exports.unstable_IdlePriority,a=e.exports.unstable_ImmediatePriority,l=e.exports.unstable_LowPriority,o=e.exports.unstable_NormalPriority,i=e.exports.unstable_Profiling,u=e.exports.unstable_UserBlockingPriority,s=e.exports.unstable_cancelCallback,c=e.exports.unstable_continueExecution,f=e.exports.unstable_forceFrameRate,b=e.exports.unstable_getCurrentPriorityLevel,p=e.exports.unstable_getFirstCallbackNode,_=e.exports.unstable_next,x=e.exports.unstable_now,y=e.exports.unstable_pauseExecution,d=e.exports.unstable_requestPaint,v=e.exports.unstable_runWithPriority,m=e.exports.unstable_scheduleCallback,k=e.exports.unstable_shouldYield,w=e.exports.unstable_wrapCallback;export{n as default,r as unstable_IdlePriority,a as unstable_ImmediatePriority,l as unstable_LowPriority,o as unstable_NormalPriority,i as unstable_Profiling,u as unstable_UserBlockingPriority,s as unstable_cancelCallback,c as unstable_continueExecution,f as unstable_forceFrameRate,b as unstable_getCurrentPriorityLevel,p as unstable_getFirstCallbackNode,_ as unstable_next,x as unstable_now,y as unstable_pauseExecution,d as unstable_requestPaint,v as unstable_runWithPriority,m as unstable_scheduleCallback,k as unstable_shouldYield,w as unstable_wrapCallback};
