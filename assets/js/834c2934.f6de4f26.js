/*! For license information please see 834c2934.f6de4f26.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[260127],{211423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>i});var r=n(824246),o=n(511151);const u={id:"plugin-techdocs.contentstatetypes",title:"ContentStateTypes",description:"API reference for ContentStateTypes"},c=void 0,s={id:"reference/plugin-techdocs.contentstatetypes",title:"ContentStateTypes",description:"API reference for ContentStateTypes",source:"@site/../docs/reference/plugin-techdocs.contentstatetypes.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs.contentstatetypes",permalink:"/docs/reference/plugin-techdocs.contentstatetypes",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs.contentstatetypes.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs.contentstatetypes",title:"ContentStateTypes",description:"API reference for ContentStateTypes"}},a={},i=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",reader:"reader",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-techdocs.contentstatetypes",children:(0,r.jsx)(t.code,{children:"ContentStateTypes"})})]}),"\n",(0,r.jsxs)(t.p,{children:["A state representation that is used to configure the UI of ",(0,r.jsx)(t.reader,{})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type ContentStateTypes = \n/** There is nothing to display but a loading indicator */\n'CHECKING'\n/** There is no content yet -> present a full screen loading page */\n | 'INITIAL_BUILD'\n/** There is content, but the backend is about to update it */\n | 'CONTENT_STALE_REFRESHING'\n/** There is content, but after a reload, the content will be different */\n | 'CONTENT_STALE_READY'\n/** There is content, the backend tried to update it, but failed */\n | 'CONTENT_STALE_ERROR'\n/** There is nothing to see but a \"not found\" page. Is also shown on page load errors */\n | 'CONTENT_NOT_FOUND'\n/** There is only the latest and greatest content */\n | 'CONTENT_FRESH';\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,u={},i=null,f=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:s.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}function m(){}function g(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=g.prototype=new m;v.constructor=g,h(v,b.prototype),v.isPureReactComponent=!0;var S=Array.isArray,E=Object.prototype.hasOwnProperty,C={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,u={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,o)&&!T.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var i=Array(a),f=0;f<a;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:n,type:e,key:c,ref:s,props:u,_owner:C.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return c=c(a=e),e=""===u?"."+R(a,0):u,S(c)?(o="",null!=e&&(o=e.replace(x,"$&/")+"/"),O(c,t,o,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(x,"$&/")+"/")+e)),t.push(c)),1;if(a=0,u=""===u?".":u+":",S(e))for(var i=0;i<e.length;i++){var f=u+R(s=e[i],i);a+=O(s,t,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(s=e.next()).done;)a+=O(s=s.value,t,o,f=u+R(s,i++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function w(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},N={transition:null},P={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:N,ReactCurrentOwner:C};t.Children={map:w,forEach:function(e,t,n){w(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return w(e,(function(){t++})),t},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=g,t.StrictMode=u,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=C.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in t)E.call(t,i)&&!T.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==a?a[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){a=Array(i);for(var f=0;f<i;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:n,type:e.type,key:u,ref:c,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>u});var r=n(667294);const o=r.createContext({});function u(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:u(e),r.createElement(o.Provider,{value:s},t)}}}]);