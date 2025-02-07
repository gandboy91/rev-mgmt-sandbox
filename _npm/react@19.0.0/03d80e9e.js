/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/react@19.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e={exports:{}},t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var o=r,u=n;function s(e){if(o===setTimeout)return setTimeout(e,0);if((o===r||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(u=clearTimeout);var i,a=[],c=!1,f=-1;function l(){c&&i&&(c=!1,i.length?a=i.concat(a):f=-1,a.length&&p())}function p(){if(!c){var e=s(l);c=!0;for(var t=a.length;t;){for(i=a,a=[];++f<t;)i&&i[f].run();f=-1,t=a.length}i=null,c=!1,function(e){if(u===clearTimeout)return clearTimeout(e);if((u===n||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(e);try{return u(e)}catch(t){try{return u.call(null,e)}catch(t){return u.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}d.prototype.run=function(){this.fun.apply(null,this.array)};function y(){}var h=y,m=y,v=y,b=y,_=y,x=y,w=y;var E=t.performance||{},S=E.now||E.mozNow||E.msNow||E.oNow||E.webkitNow||function(){return(new Date).getTime()};var g=new Date;var T={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new d(e,t)),1!==a.length||c||s(p)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:h,addListener:m,once:v,off:b,removeListener:_,removeAllListeners:x,emit:w,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*S.call(E),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-g)/1e3}},R={},C=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),L=Symbol.iterator;var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,M={};function q(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||U}function z(){}function F(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||U}q.prototype.isReactComponent={},q.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},q.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},z.prototype=q.prototype;var G=F.prototype=new z;G.constructor=F,V(G,q.prototype),G.isPureReactComponent=!0;var W=Array.isArray,Y={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function J(e,t,r,n,o,u){return r=u.ref,{$$typeof:C,type:e,key:t,ref:void 0!==r?r:null,props:u}}function K(e){return"object"==typeof e&&null!==e&&e.$$typeof===C}var Q=/\/+/g;function X(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function Z(){}function ee(e,t,r,n,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s,i,a=!1;if(null===e)a=!0;else switch(u){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case C:case k:a=!0;break;case D:return ee((a=e._init)(e._payload),t,r,n,o)}}if(a)return o=o(e),a=""===n?"."+X(e,0):n,W(o)?(r="",null!=a&&(r=a.replace(Q,"$&/")+"/"),ee(o,t,r,"",(function(e){return e}))):null!=o&&(K(o)&&(s=o,i=r+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(Q,"$&/")+"/")+a,o=J(s.type,i,void 0,0,0,s.props)),t.push(o)),1;a=0;var c,f=""===n?".":n+":";if(W(e))for(var l=0;l<e.length;l++)a+=ee(n=e[l],t,r,u=f+X(n,l),o);else if("function"==typeof(l=null===(c=e)||"object"!=typeof c?null:"function"==typeof(c=L&&c[L]||c["@@iterator"])?c:null))for(e=l.call(e),l=0;!(n=e.next()).done;)a+=ee(n=n.value,t,r,u=f+X(n,l++),o);else if("object"===u){if("function"==typeof e.then)return ee(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(Z,Z):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,r,n,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function te(e,t,r){if(null==e)return e;var n=[],o=0;return ee(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function re(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ne="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof T&&"function"==typeof T.emit)return void T.emit("uncaughtException",e);console.error(e)};function oe(){}R.Children={map:te,forEach:function(e,t,r){te(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return te(e,(function(){t++})),t},toArray:function(e){return te(e,(function(e){return e}))||[]},only:function(e){if(!K(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},R.Component=q,R.Fragment=H,R.Profiler=A,R.PureComponent=F,R.StrictMode=j,R.Suspense=I,R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,R.act=function(){throw Error("act(...) is not supported in production builds of React.")},R.cache=function(e){return function(){return e.apply(null,arguments)}},R.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=V({},e.props),o=e.key;if(null!=t)for(u in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!B.call(t,u)||"key"===u||"__self"===u||"__source"===u||"ref"===u&&void 0===t.ref||(n[u]=t[u]);var u=arguments.length-2;if(1===u)n.children=r;else if(1<u){for(var s=Array(u),i=0;i<u;i++)s[i]=arguments[i+2];n.children=s}return J(e.type,o,void 0,0,0,n)},R.createContext=function(e){return(e={$$typeof:N,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:$,_context:e},e},R.createElement=function(e,t,r){var n,o={},u=null;if(null!=t)for(n in void 0!==t.key&&(u=""+t.key),t)B.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var i=Array(s),a=0;a<s;a++)i[a]=arguments[a+2];o.children=i}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return J(e,u,void 0,0,0,o)},R.createRef=function(){return{current:null}},R.forwardRef=function(e){return{$$typeof:O,render:e}},R.isValidElement=K,R.lazy=function(e){return{$$typeof:D,_payload:{_status:-1,_result:e},_init:re}},R.memo=function(e,t){return{$$typeof:P,type:e,compare:void 0===t?null:t}},R.startTransition=function(e){var t=Y.T,r={};Y.T=r;try{var n=e(),o=Y.S;null!==o&&o(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(oe,ne)}catch(e){ne(e)}finally{Y.T=t}},R.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},R.use=function(e){return Y.H.use(e)},R.useActionState=function(e,t,r){return Y.H.useActionState(e,t,r)},R.useCallback=function(e,t){return Y.H.useCallback(e,t)},R.useContext=function(e){return Y.H.useContext(e)},R.useDebugValue=function(){},R.useDeferredValue=function(e,t){return Y.H.useDeferredValue(e,t)},R.useEffect=function(e,t){return Y.H.useEffect(e,t)},R.useId=function(){return Y.H.useId()},R.useImperativeHandle=function(e,t,r){return Y.H.useImperativeHandle(e,t,r)},R.useInsertionEffect=function(e,t){return Y.H.useInsertionEffect(e,t)},R.useLayoutEffect=function(e,t){return Y.H.useLayoutEffect(e,t)},R.useMemo=function(e,t){return Y.H.useMemo(e,t)},R.useOptimistic=function(e,t){return Y.H.useOptimistic(e,t)},R.useReducer=function(e,t,r){return Y.H.useReducer(e,t,r)},R.useRef=function(e){return Y.H.useRef(e)},R.useState=function(e){return Y.H.useState(e)},R.useSyncExternalStore=function(e,t,r){return Y.H.useSyncExternalStore(e,t,r)},R.useTransition=function(){return Y.H.useTransition()},R.version="19.0.0",e.exports=R;var ue=e.exports,se=e.exports.Children,ie=e.exports.Component,ae=e.exports.Fragment,ce=e.exports.Profiler,fe=e.exports.PureComponent,le=e.exports.StrictMode,pe=e.exports.Suspense,de=e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye=e.exports.act,he=e.exports.cache,me=e.exports.cloneElement,ve=e.exports.createContext,be=e.exports.createElement,_e=e.exports.createRef,xe=e.exports.forwardRef,we=e.exports.isValidElement,Ee=e.exports.lazy,Se=e.exports.memo,ge=e.exports.startTransition,Te=e.exports.unstable_useCacheRefresh,Re=e.exports.use,Ce=e.exports.useActionState,ke=e.exports.useCallback,He=e.exports.useContext,je=e.exports.useDebugValue,Ae=e.exports.useDeferredValue,$e=e.exports.useEffect,Ne=e.exports.useId,Oe=e.exports.useImperativeHandle,Ie=e.exports.useInsertionEffect,Pe=e.exports.useLayoutEffect,De=e.exports.useMemo,Le=e.exports.useOptimistic,Ue=e.exports.useReducer,Ve=e.exports.useRef,Me=e.exports.useState,qe=e.exports.useSyncExternalStore,ze=e.exports.useTransition,Fe=e.exports.version;export{se as Children,ie as Component,ae as Fragment,ce as Profiler,fe as PureComponent,le as StrictMode,pe as Suspense,de as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye as act,he as cache,me as cloneElement,ve as createContext,be as createElement,_e as createRef,ue as default,xe as forwardRef,we as isValidElement,Ee as lazy,Se as memo,ge as startTransition,Te as unstable_useCacheRefresh,Re as use,Ce as useActionState,ke as useCallback,He as useContext,je as useDebugValue,Ae as useDeferredValue,$e as useEffect,Ne as useId,Oe as useImperativeHandle,Ie as useInsertionEffect,Pe as useLayoutEffect,De as useMemo,Le as useOptimistic,Ue as useReducer,Ve as useRef,Me as useState,qe as useSyncExternalStore,ze as useTransition,Fe as version};
