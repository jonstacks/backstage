/*! For license information please see ea098a8c.35ff0cde.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[146676],{944794:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"plugin-sonarqube-backend.sonarqubeconfig.instances",title:"SonarqubeConfig.instances",description:"API reference for SonarqubeConfig.instances"},u=void 0,a={unversionedId:"reference/plugin-sonarqube-backend.sonarqubeconfig.instances",id:"reference/plugin-sonarqube-backend.sonarqubeconfig.instances",title:"SonarqubeConfig.instances",description:"API reference for SonarqubeConfig.instances",source:"@site/../docs/reference/plugin-sonarqube-backend.sonarqubeconfig.instances.md",sourceDirName:"reference",slug:"/reference/plugin-sonarqube-backend.sonarqubeconfig.instances",permalink:"/docs/reference/plugin-sonarqube-backend.sonarqubeconfig.instances",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-sonarqube-backend.sonarqubeconfig.instances.md",tags:[],version:"current",frontMatter:{id:"plugin-sonarqube-backend.sonarqubeconfig.instances",title:"SonarqubeConfig.instances",description:"API reference for SonarqubeConfig.instances"}},i={},s=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-sonarqube-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-sonarqube-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeconfig",children:(0,t.jsx)(r.code,{children:"SonarqubeConfig"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeconfig.instances",children:(0,t.jsx)(r.code,{children:"instances"})})]}),"\n",(0,t.jsx)(r.p,{children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"readonly instances: SonarqubeInstanceConfig[];\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var s in c=Object(arguments[i]))n.call(c,s)&&(a[s]=c[s]);if(r){u=r(c);for(var f=0;f<u.length;f++)t.call(c,u[f])&&(a[u[f]]=c[u[f]])}}return a}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,f=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:u.current}}r.jsx=s,r.jsxs=s},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,a=60110,i=60112;r.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),u=l("react.provider"),a=l("react.context"),i=l("react.forward_ref"),r.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,r,n){this.props=e,this.context=r,this.refs=b,this.updater=n||y}function g(){}function v(e,r,n){this.props=e,this.context=r,this.refs=b,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var m=v.prototype=new g;m.constructor=v,t(m,h.prototype),m.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,n){var t,c={},u=null,a=null;if(null!=r)for(t in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,t)&&!k.hasOwnProperty(t)&&(c[t]=r[t]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===c[t]&&(c[t]=i[t]);return{$$typeof:o,type:e,key:u,ref:a,props:c,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var q=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,n,t,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return u=u(i=e),e=""===t?"."+w(i,0):t,Array.isArray(u)?(n="",null!=e&&(n=e.replace(q,"$&/")+"/"),C(u,r,n,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(q,"$&/")+"/")+e)),r.push(u)),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=t+w(a=e[s],s);i+=C(a,r,n,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)i+=C(a=a.value,r,n,f=t+w(a,s++),u);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function x(e,r,n){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:x,forEach:function(e,r,n){x(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var c=t({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=_.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)j.call(r,f)&&!k.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==s?s[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=n;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];c.children=s}return{$$typeof:o,type:e.type,key:u,ref:a,props:c,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||u:c(e),t.createElement(o.Provider,{value:a},r)}}}]);