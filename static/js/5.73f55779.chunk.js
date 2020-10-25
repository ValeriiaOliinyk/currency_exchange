/*! For license information please see 5.73f55779.chunk.js.LICENSE.txt */
(this.webpackJsonpcurrency_exchange=this.webpackJsonpcurrency_exchange||[]).push([[5],Array(85).concat([function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(4);var n=r(0),a=r.n(n),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var r=Object(n.useContext)(o);return e||r[t]||t}},function(e,t,r){"use strict";var n=r(93),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return"undefined"===typeof e}function s(e){return null!==e&&"object"===typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===a.call(e)}function l(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,a=arguments.length;n<a;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,a){e[a]=r&&"function"===typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];function n(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,r);null!=t&&(a=t)}})),a}return(0,o.default)(n)};var n,a=r(121),o=(n=a)&&n.__esModule?n:{default:n};e.exports=t.default},,function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(87);function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";(function(t){var n=r(87),a=r(109),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s={adapter:function(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=r(97)),e}(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){s.headers[e]=n.merge(o)})),e.exports=s}).call(this,r(50))},function(e,t,r){"use strict";var n=r(87),a=r(110),o=r(112),i=r(94),s=r(113),c=r(116),u=r(117),l=r(98);e.exports=function(e){return new Promise((function(t,r){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"],(n.isBlob(f)||n.isFile(f))&&f.type&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=unescape(encodeURIComponent(e.auth.password))||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};a(t,r,o),p=null}},p.onabort=function(){p&&(r(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var b=(e.withCredentials||u(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in p&&n.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),f||(f=null),p.send(f)}))}},function(e,t,r){"use strict";var n=r(111);e.exports=function(e,t,r,a,o){var i=new Error(e);return n(i,t,r,a,o)}},function(e,t,r){"use strict";var n=r(87);e.exports=function(e,t){t=t||{};var r={},a=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(a){n.isUndefined(t[a])?n.isUndefined(e[a])||(r[a]=c(void 0,e[a])):r[a]=c(e[a],t[a])}n.forEach(a,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(o,u),n.forEach(i,(function(a){n.isUndefined(t[a])?n.isUndefined(e[a])||(r[a]=c(void 0,e[a])):r[a]=c(void 0,t[a])})),n.forEach(s,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=a.concat(o).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(f,u),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";var n=function(){};e.exports=n},,function(e,t,r){e.exports=r(104)},function(e,t,r){"use strict";var n=r(87),a=r(93),o=r(105),i=r(99);function s(e){var t=new o(e),r=a(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var c=s(r(96));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=r(100),c.CancelToken=r(118),c.isCancel=r(95),c.all=function(e){return Promise.all(e)},c.spread=r(119),e.exports=c,e.exports.default=c},function(e,t,r){"use strict";var n=r(87),a=r(94),o=r(106),i=r(107),s=r(99);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}})),e.exports=c},function(e,t,r){"use strict";var n=r(87);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},function(e,t,r){"use strict";var n=r(87),a=r(108),o=r(95),i=r(96);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(87);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){"use strict";var n=r(87);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(98);e.exports=function(e,t,r){var a=r.config.validateStatus;r.status&&a&&!a(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,a){return e.config=t,r&&(e.code=r),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(87);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(a)&&s.push("path="+a),n.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(114),a=r(115);e.exports=function(e,t){return e&&!n(t)?a(e,t):t}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(87),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},function(e,t,r){"use strict";var n=r(87);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function a(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=a(window.location.href),function(t){var r=n.isString(t)?a(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(100);function a(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,r,n,a,o,i){var s=a||"<<anonymous>>",c=i||n;if(null==r[n])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[r,n,s,o,c].concat(l))}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r},e.exports=t.default},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(36);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(e,t,r){"use strict";var n=r(4),a=r(10),o=r(85),i=r.n(o),s=r(0),c=r.n(s),u=r(86),l=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.fluid,s=e.as,l=void 0===s?"div":s,f=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(u.a)(r,"container"),m="string"===typeof o?"-"+o:"-fluid";return c.a.createElement(l,Object(n.a)({ref:t},d,{className:i()(f,o?""+p+m:p)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},function(e,t,r){"use strict";var n=r(4),a=r(10),o=r(85),i=r.n(o),s=r(0),c=r.n(s),u=(r(91),r(5)),l=r.n(u),f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},d=c.a.forwardRef((function(e,t){var r=e.as,o=void 0===r?"div":r,s=e.className,u=e.type,l=void 0===u?"valid":u,f=e.tooltip,d=void 0!==f&&f,p=Object(a.a)(e,["as","className","type","tooltip"]);return c.a.createElement(o,Object(n.a)({},p,{ref:t,className:i()(s,l+"-"+(d?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=f;var p=d,m=c.a.createContext({controlId:void 0}),h=r(86),v=c.a.forwardRef((function(e,t){var r=e.id,o=e.bsPrefix,u=e.bsCustomPrefix,l=e.className,f=e.type,d=void 0===f?"checkbox":f,p=e.isValid,v=void 0!==p&&p,b=e.isInvalid,y=void 0!==b&&b,x=e.isStatic,g=e.as,O=void 0===g?"input":g,j=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),w=Object(s.useContext)(m),N=w.controlId,E=w.custom?[u,"custom-control-input"]:[o,"form-check-input"],C=E[0],P=E[1];return o=Object(h.a)(C,P),c.a.createElement(O,Object(n.a)({},j,{ref:t,type:d,id:r||N,className:i()(l,o,v&&"is-valid",y&&"is-invalid",x&&"position-static")}))}));v.displayName="FormCheckInput";var b=v,y=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,l=e.htmlFor,f=Object(a.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(s.useContext)(m),p=d.controlId,v=d.custom?[o,"custom-control-label"]:[r,"form-check-label"],b=v[0],y=v[1];return r=Object(h.a)(b,y),c.a.createElement("label",Object(n.a)({},f,{ref:t,htmlFor:l||p,className:i()(u,r)}))}));y.displayName="FormCheckLabel";var x=y,g=c.a.forwardRef((function(e,t){var r=e.id,o=e.bsPrefix,u=e.bsCustomPrefix,l=e.inline,f=void 0!==l&&l,d=e.disabled,v=void 0!==d&&d,y=e.isValid,g=void 0!==y&&y,O=e.isInvalid,j=void 0!==O&&O,w=e.feedbackTooltip,N=void 0!==w&&w,E=e.feedback,C=e.className,P=e.style,R=e.title,S=void 0===R?"":R,F=e.type,k=void 0===F?"checkbox":F,A=e.label,I=e.children,T=e.custom,L=e.as,U=void 0===L?"input":L,B=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),q="switch"===k||T,D=q?[u,"custom-control"]:[o,"form-check"],V=D[0],_=D[1];o=Object(h.a)(V,_);var z=Object(s.useContext)(m).controlId,M=Object(s.useMemo)((function(){return{controlId:r||z,custom:q}}),[z,q,r]),H=q||null!=A&&!1!==A&&!I,J=c.a.createElement(b,Object(n.a)({},B,{type:"switch"===k?"checkbox":k,ref:t,isValid:g,isInvalid:j,isStatic:!H,disabled:v,as:U}));return c.a.createElement(m.Provider,{value:M},c.a.createElement("div",{style:P,className:i()(C,o,q&&"custom-"+k,f&&o+"-inline")},I||c.a.createElement(c.a.Fragment,null,J,H&&c.a.createElement(x,{title:S},A),(g||j)&&c.a.createElement(p,{type:g?"valid":"invalid",tooltip:N},E))))}));g.displayName="FormCheck",g.Input=b,g.Label=x;var O=g,j=c.a.forwardRef((function(e,t){var r=e.id,o=e.bsPrefix,u=e.bsCustomPrefix,l=e.className,f=e.isValid,d=e.isInvalid,p=e.lang,v=e.as,b=void 0===v?"input":v,y=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(s.useContext)(m),g=x.controlId,O=x.custom?[u,"custom-file-input"]:[o,"form-control-file"],j=O[0],w=O[1];return o=Object(h.a)(j,w),c.a.createElement(b,Object(n.a)({},y,{ref:t,id:r||g,type:"file",lang:p,className:i()(l,o,f&&"is-valid",d&&"is-invalid")}))}));j.displayName="FormFileInput";var w=j,N=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,l=e.htmlFor,f=Object(a.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(s.useContext)(m),p=d.controlId,v=d.custom?[o,"custom-file-label"]:[r,"form-file-label"],b=v[0],y=v[1];return r=Object(h.a)(b,y),c.a.createElement("label",Object(n.a)({},f,{ref:t,htmlFor:l||p,className:i()(u,r),"data-browse":f["data-browse"]}))}));N.displayName="FormFileLabel";var E=N,C=c.a.forwardRef((function(e,t){var r=e.id,o=e.bsPrefix,u=e.bsCustomPrefix,l=e.disabled,f=void 0!==l&&l,d=e.isValid,v=void 0!==d&&d,b=e.isInvalid,y=void 0!==b&&b,x=e.feedbackTooltip,g=void 0!==x&&x,O=e.feedback,j=e.className,N=e.style,C=e.label,P=e.children,R=e.custom,S=e.lang,F=e["data-browse"],k=e.as,A=void 0===k?"div":k,I=e.inputAs,T=void 0===I?"input":I,L=Object(a.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),U=R?[u,"custom"]:[o,"form-file"],B=U[0],q=U[1];o=Object(h.a)(B,q);var D=Object(s.useContext)(m).controlId,V=Object(s.useMemo)((function(){return{controlId:r||D,custom:R}}),[D,R,r]),_=null!=C&&!1!==C&&!P,z=c.a.createElement(w,Object(n.a)({},L,{ref:t,isValid:v,isInvalid:y,disabled:f,as:T,lang:S}));return c.a.createElement(m.Provider,{value:V},c.a.createElement(A,{style:N,className:i()(j,o,R&&"custom-file")},P||c.a.createElement(c.a.Fragment,null,R?c.a.createElement(c.a.Fragment,null,z,_&&c.a.createElement(E,{"data-browse":F},C)):c.a.createElement(c.a.Fragment,null,_&&c.a.createElement(E,null,C),z),(v||y)&&c.a.createElement(p,{type:v?"valid":"invalid",tooltip:g},O))))}));C.displayName="FormFile",C.Input=w,C.Label=E;var P=C,R=(r(101),c.a.forwardRef((function(e,t){var r,o,u=e.bsPrefix,l=e.bsCustomPrefix,f=e.type,d=e.size,p=e.htmlSize,v=e.id,b=e.className,y=e.isValid,x=void 0!==y&&y,g=e.isInvalid,O=void 0!==g&&g,j=e.plaintext,w=e.readOnly,N=e.custom,E=e.as,C=void 0===E?"input":E,P=Object(a.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=Object(s.useContext)(m).controlId,S=N?[l,"custom"]:[u,"form-control"],F=S[0],k=S[1];if(u=Object(h.a)(F,k),j)(o={})[u+"-plaintext"]=!0,r=o;else if("file"===f){var A;(A={})[u+"-file"]=!0,r=A}else if("range"===f){var I;(I={})[u+"-range"]=!0,r=I}else if("select"===C&&N){var T;(T={})[u+"-select"]=!0,T[u+"-select-"+d]=d,r=T}else{var L;(L={})[u]=!0,L[u+"-"+d]=d,r=L}return c.a.createElement(C,Object(n.a)({},P,{type:f,size:p,ref:t,readOnly:w,id:v||R,className:i()(b,r,x&&"is-valid",O&&"is-invalid")}))})));R.displayName="FormControl";var S=Object.assign(R,{Feedback:p}),F=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.children,l=e.controlId,f=e.as,d=void 0===f?"div":f,p=Object(a.a)(e,["bsPrefix","className","children","controlId","as"]);r=Object(h.a)(r,"form-group");var v=Object(s.useMemo)((function(){return{controlId:l}}),[l]);return c.a.createElement(m.Provider,{value:v},c.a.createElement(d,Object(n.a)({},p,{ref:t,className:i()(o,r)}),u))}));F.displayName="FormGroup";var k=F,A=["xl","lg","md","sm","xs"],I=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.as,u=void 0===s?"div":s,l=Object(a.a)(e,["bsPrefix","className","as"]),f=Object(h.a)(r,"col"),d=[],p=[];return A.forEach((function(e){var t,r,n,a=l[e];if(delete l[e],"object"===typeof a&&null!=a){var o=a.span;t=void 0===o||o,r=a.offset,n=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+f+i:""+f+i+"-"+t),null!=n&&p.push("order"+i+"-"+n),null!=r&&p.push("offset"+i+"-"+r)})),d.length||d.push(f),c.a.createElement(u,Object(n.a)({},l,{ref:t,className:i.a.apply(void 0,[o].concat(d,p))}))}));I.displayName="Col";var T=I,L=c.a.forwardRef((function(e,t){var r=e.as,o=void 0===r?"label":r,u=e.bsPrefix,l=e.column,f=e.srOnly,d=e.className,p=e.htmlFor,v=Object(a.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),b=Object(s.useContext)(m).controlId;u=Object(h.a)(u,"form-label");var y="col-form-label";"string"===typeof l&&(y=y+" "+y+"-"+l);var x=i()(d,u,f&&"sr-only",l&&y);return p=p||b,l?c.a.createElement(T,Object(n.a)({as:"label",className:x,htmlFor:p},v)):c.a.createElement(o,Object(n.a)({ref:t,className:x,htmlFor:p},v))}));L.displayName="FormLabel",L.defaultProps={column:!1,srOnly:!1};var U=L,B=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.as,u=void 0===s?"small":s,l=e.muted,f=Object(a.a)(e,["bsPrefix","className","as","muted"]);return r=Object(h.a)(r,"form-text"),c.a.createElement(u,Object(n.a)({},f,{ref:t,className:i()(o,r,l&&"text-muted")}))}));B.displayName="FormText";var q=B,D=c.a.forwardRef((function(e,t){return c.a.createElement(O,Object(n.a)({},e,{ref:t,type:"switch"}))}));D.displayName="Switch",D.Input=O.Input,D.Label=O.Label;var V=D,_=/-(.)/g;var z=function(e){return e[0].toUpperCase()+(t=e,t.replace(_,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var M=function(e,t){var r=void 0===t?{}:t,o=r.displayName,s=void 0===o?z(e):o,u=r.Component,l=r.defaultProps,f=c.a.forwardRef((function(t,r){var o=t.className,s=t.bsPrefix,l=t.as,f=void 0===l?u||"div":l,d=Object(a.a)(t,["className","bsPrefix","as"]),p=Object(h.a)(s,e);return c.a.createElement(f,Object(n.a)({ref:r,className:i()(o,p)},d))}));return f.defaultProps=l,f.displayName=s,f}("form-row"),H=c.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.inline,s=e.className,u=e.validated,l=e.as,f=void 0===l?"form":l,d=Object(a.a)(e,["bsPrefix","inline","className","validated","as"]);return r=Object(h.a)(r,"form"),c.a.createElement(f,Object(n.a)({},d,{ref:t,className:i()(s,u&&"was-validated",o&&r+"-inline")}))}));H.displayName="Form",H.defaultProps={inline:!1},H.Row=M,H.Group=k,H.Control=S,H.Check=O,H.File=P,H.Switch=V,H.Label=U,H.Text=q;t.a=H}])]);
//# sourceMappingURL=5.73f55779.chunk.js.map