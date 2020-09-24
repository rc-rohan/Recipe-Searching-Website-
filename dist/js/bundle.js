!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t,n){"use strict";var r=n(3),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){e.exports=n(14)},function(e,t){var n,r;Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var s=n.split("/");this.numerator=s[0],this.denominator=s[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(n(this.denominator)){var e=r(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}n(this.numerator)&&(e=r(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},e.exports.Fraction=Fraction},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),i=n(19),s={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(a=n(8)),a),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c}).call(this,n(7))},function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,p=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&d())}function d(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0),i=n(20),s=n(22),o=n(4),a=n(23),c=n(26),u=n(27),l=n(9);e.exports=function(e){return new Promise((function(t,n){var p=e.data,f=e.headers;r.isFormData(p)&&delete f["Content-Type"],(r.isBlob(p)||r.isFile(p))&&p.type&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=unescape(encodeURIComponent(e.auth.password))||"";f.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};i(t,n,s),d=null}},d.onabort=function(){d&&(n(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;v&&(f[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(f,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),p||(p=null),d.send(p)}))}},function(e,t,n){"use strict";var r=n(21);e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(o,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=i.concat(s).concat(o).concat(a),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(p,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Recipe}));var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);class Recipe{constructor(e){this.id=e}async getRecipe(){try{const e=await axios__WEBPACK_IMPORTED_MODULE_0___default()("https://forkify-api.herokuapp.com/api/get?rId="+this.id);this.title=e.data.recipe.title,this.author=e.data.recipe.publisher,this.img=e.data.recipe.image_url,this.url=e.data.recipe.source_url,this.ingredients=e.data.recipe.ingredients}catch(e){console.log(e),alert("Something Went wrong")}}calcTime(){const e=this.ingredients.length,t=Math.ceil(e/3);this.time=15*t}calcServing(){this.servings=4}parseIngredients(){const unitsLong=["tablespoons","tablespoon","ounces","ounce","teaspoons","teaspoon","cups","pounds"],unitsShort=["tbsp","tbsp","oz","oz","tsp","tsp","cup","pounds"],units=[...unitsShort,"kg","g"],newIngredients=this.ingredients.map(el=>{let ingredient=el.toLowerCase();unitsLong.forEach((e,t)=>{ingredient=ingredient.replace(e,units[t])}),ingredient=ingredient.replace(/ *\([^)]*\) */g," ");const arrIng=ingredient.split(" "),unitIndex=arrIng.findIndex(e=>unitsShort.includes(e));let objIng;if(unitIndex>-1){const arrCount=arrIng.slice(0,unitIndex);let count;count=1===arrCount.length?eval(arrIng[0].replace("-","+")):eval(arrIng.slice(0,unitIndex).join("+")),objIng={count:count,unit:arrIng[unitIndex],ingredient:arrIng.slice(unitIndex+1).join(" ")}}else parseInt(arrIng[0],10)?objIng={count:parseInt(arrIng[0],10),unit:"",ingredient:arrIng.slice(1).join(" ")}:-1===unitIndex&&(objIng={count:1,unit:"",ingredient:ingredient});return objIng});this.ingredients=newIngredients}updateServings(e){const t="dec"===e?this.servings-1:this.servings+1;this.ingredients.forEach(e=>{e.count*=t/this.servings}),this.servings=t}}},function(e,t,n){(function(t){var n=t&&t.pid?t.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+n+r().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+n+r().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+r().toString(36)+(t||"")}}).call(this,n(7))},function(e,t,n){"use strict";var r=n(0),i=n(3),s=n(15),o=n(10);function a(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(n(6));c.Axios=s,c.create=function(e){return a(o(c.defaults,e))},c.Cancel=n(11),c.CancelToken=n(28),c.isCancel=n(5),c.all=function(e){return Promise.all(e)},c.spread=n(29),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),i=n(4),s=n(16),o=n(17),a=n(10);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(18),s=n(5),o=n(6);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(24),i=n(25);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(11);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r);class s{constructor(e){this.query=e}async getResults(){try{const e=await i()("https://forkify-api.herokuapp.com/api/search?&q="+this.query);this.result=e.data.recipes}catch(e){alert(e)}}}var o=n(12),a=n(13),c=n.n(a);class u{constructor(){this.items=[]}addItem(e,t,n){const r={id:c()(),count:e,unit:t,ingredient:n};return this.items.push(r),r}deleteItem(e){const t=this.items.findIndex(t=>t.id===e);this.items.splice(t,1)}updateCount(e,t){this.items.find(t=>t.id===e).count=t}}class l{constructor(){this.likes=[]}addLike(e,t,n,r){const i={id:e,title:t,author:n,img:r};return this.likes.push(i),this.persistData(),i}deleteLike(e){const t=this.likes.findIndex(t=>t.id===e);this.likes.splice(t,1),this.persistData()}isLiked(e){return-1!==this.likes.findIndex(t=>t.id===e)}getNumLikes(){return this.likes.length}persistData(){localStorage.setItem("likes",JSON.stringify(this.likes))}readStorage(){const e=JSON.parse(localStorage.getItem("likes"));e&&(this.likes=e)}}const p={searchForm:document.querySelector(".search"),searchInput:document.querySelector(".search__field"),searchResult:document.querySelector(".results"),searchResultList:document.querySelector(".results__list"),searchResultPages:document.querySelector(".results__pages"),recipe:document.querySelector(".recipe"),shopping:document.querySelector(".shopping__list"),likesMenu:document.querySelector(".likes__field"),likesList:document.querySelector(".likes__list")},f="loader",d=e=>{const t=`\n        <div class= "${f}">\n            <svg>\n                <use href="img/icons.svg#icon-cw"></use>\n            </svg>\n        </div>\n    `;e.insertAdjacentHTML("afterbegin",t)},h=()=>{const e=document.querySelector("."+f);e&&e.parentElement.removeChild(e)},m=()=>{p.searchResultList.innerHTML="",p.searchResultPages.innerHTML=""},g=(e,t=17)=>{const n=[];return e.length>t?(e.split(" ").reduce((e,r)=>(e+r.length<=t&&n.push(r),e+r.length),0),n.join(" ")+"..."):e},v=e=>{const t=`\n                <li>\n                    <a class="results__link" href="#${e.recipe_id}">\n                        <figure class="results__fig">\n                            <img src="${e.image_url}" alt="${e.title}">\n                        </figure>\n                        <div class="results__data">\n                            <h4 class="results__name">${g(e.title)}</h4>\n                            <p class="results__author">${e.publisher}</p>\n                        </div>\n                    </a>\n                </li>\n    `;p.searchResultList.insertAdjacentHTML("beforeend",t)},_=(e,t)=>`\n        <button class="btn-inline results__btn--${t}" data-goto="${"prev"===t?e-1:e+1}">\n            <span>Page ${"prev"===t?e-1:e+1}</span>\n            <svg class="search__icon">\n                <use href="img/icons.svg#icon-triangle-${"prev"===t?"left":"right"}"></use>\n            </svg>\n        </button>\n    `,y=(e,t=1,n=10)=>{const r=(t-1)*n,i=t*n;e.slice(r,i).forEach(v),((e,t,n)=>{const r=Math.ceil(t/n);let i;1===e&&r>1?i=_(e,"next"):e<r?i=`\n            ${_(e,"prev")}\n            ${_(e,"next")}\n    `:e===r&&r>1&&(i=_(e,"prev")),p.searchResultPages.insertAdjacentHTML("afterbegin",i)})(t,e.length,n)};var b=n(2);const w=e=>{if(e){const t=Math.round(100*e)/100,[n,r]=t.toString().split(".").map(e=>parseInt(e,10));if(!r)return t;if(0===n){const e=new b.Fraction(t);return`${e.numerator}/${e.denominator}`}{const e=new b.Fraction(t-n);return`${n} ${e.numerator}/${e.denominator}`}}return"?"},x=(e,t)=>{const n=`\n         <figure class="recipe__fig">\n                <img src="${e.img}" alt="${e.title}" class="recipe__img">\n                <h1 class="recipe__title">\n                    <span>${e.title}</span>\n                </h1>\n        </figure>\n\n        <div class="recipe__details">\n            <div class="recipe__info">\n                <svg class="recipe__info-icon">\n                    <use href="img/icons.svg#icon-stopwatch"></use>\n                </svg>\n                <span class="recipe__info-data recipe__info-data--minutes">${e.time}</span>\n                <span class="recipe__info-text"> minutes</span>\n            </div>\n            <div class="recipe__info">\n                <svg class="recipe__info-icon">\n                    <use href="img/icons.svg#icon-man"></use>\n                </svg>\n                <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>\n                <span class="recipe__info-text"> servings</span>\n\n                <div class="recipe__info-buttons">\n                    <button class="btn-tiny btn-decrease">\n                        <svg>\n                            <use href="img/icons.svg#icon-circle-with-minus"></use>\n                        </svg>\n                    </button>\n                    <button class="btn-tiny btn-increase">\n                        <svg>\n                            <use href="img/icons.svg#icon-circle-with-plus"></use>\n                        </svg>\n                    </button>\n                </div>\n\n            </div>\n            <button class="recipe__love">\n                <svg class="header__likes">\n                    <use href="img/icons.svg#icon-heart${t?"":"-outlined"}"></use>\n                </svg>\n            </button>\n        </div>\n\n\n\n        <div class="recipe__ingredients">\n            <ul class="recipe__ingredient-list">\n                ${e.ingredients.map(e=>{return`\n\n        <li class="recipe__item">\n            <svg class="recipe__icon">\n                        <use href="img/icons.svg#icon-check"></use>\n            </svg>\n            <div class="recipe__count">${w((t=e).count)}</div>\n            <div class="recipe__ingredient">\n                <span class="recipe__unit">${t.unit}</span>\n                ${t.ingredient}\n            </div>\n        </li>\n\n`;var t}).join(" ")}\n            </ul>\n\n            <button class="btn-small recipe__btn recipe__btn--add">\n                <svg class="search__icon">\n                    <use href="img/icons.svg#icon-shopping-cart"></use>\n                </svg>\n                <span>Add to shopping list</span>\n            </button>\n        </div>\n\n        <div class="recipe__directions">\n            <h2 class="heading-2">How to cook it</h2>\n            <p class="recipe__directions-text">\n                This recipe was carefully designed and tested by\n                <span class="recipe__by">${e.publisher}</span>. Please check out directions at their website.\n            </p>\n            <a class="btn-small recipe__btn" href="${e.url}" target="_blank">\n                <span>Directions</span>\n                <svg class="search__icon">\n                    <use href="img/icons.svg#icon-triangle-right"></use>\n                </svg>\n\n            </a>\n        </div>\n    `;p.recipe.insertAdjacentHTML("afterbegin",n)},k=e=>{document.querySelector(".recipe__info-data--people").textContent=e.servings;Array.from(document.querySelectorAll(".recipe__count")).forEach((t,n)=>{t.textContent=w(e.ingredients[n].count)})},S=e=>{const t=e?"icon-heart":"icon-heart-outlined";document.querySelector(".recipe__love use").setAttribute("href","img/icons.svg#"+t)},E=e=>{p.likesMenu.style.visibility=e>0?"visible":"hidden"},L=e=>{const t=`\n            <li>\n                <a class="likes__link" href="#${e.id}">\n                    <figure class="likes__fig">\n                        <img src="${e.img}" alt="${e.tite}">\n                    </figure>\n                    <div class="likes__data">\n                        <h4 class="likes__name">${g(e.title)}</h4>\n                        <p class="likes__author">${e.author}</p>\n                    </div>\n                </a>\n            </li>\n    `;p.likesList.insertAdjacentHTML("beforeend",t)},T={},j=async()=>{const e=p.searchInput.value;if(e){T.search=new s(e),p.searchInput.value="",m(),d(p.searchResult);try{await T.search.getResults(),h(),y(T.search.result)}catch(e){alert("Error occured while getting Recipe"),h()}}};p.searchForm.addEventListener("submit",e=>{e.preventDefault(),j()}),p.searchResultPages.addEventListener("click",e=>{const t=e.target.closest(".btn-inline");if(t){const e=parseInt(t.dataset.goto,10);m(),y(T.search.result,e)}});const I=async()=>{const e=window.location.hash.replace("#","");if(e){p.recipe.innerHTML="",d(p.recipe),T.search&&(e=>{Array.from(document.querySelectorAll(".results__link")).forEach(e=>e.classList.remove("results__link--active")),document.querySelector(`.results__link[href="#${e}"]`).classList.add("results__link--active")})(e),T.recipe=new o.a(e);try{await T.recipe.getRecipe(),T.recipe.parseIngredients(),T.recipe.calcTime(),T.recipe.calcServing(),h(),x(T.recipe,T.likes.isLiked(e))}catch(e){alert("Error Processing Recipe"),console.log(e)}}};["hashchange","load"].forEach(e=>window.addEventListener(e,I));const R=()=>{T.list||(T.list=new u),T.recipe.ingredients.forEach(e=>{(e=>{const t=`\n        <li class="shopping__item" data-itemid = ${e.id}>\n            <div class="shopping__count">\n                <input type="number" value="${e.count}" step="${e.count}" class="shopping__count-value">\n                <p>${e.unit}</p>\n            </div>\n            <p class="shopping__description">${e.ingredient}</p>\n            <button class="shopping__delete btn-tiny">\n                <svg>\n                    <use href="img/icons.svg#icon-circle-with-cross"></use>\n                </svg>\n            </button>\n        </li>\n\n    `;p.shopping.insertAdjacentHTML("beforeend",t)})(T.list.addItem(e.count,e.unit,e.ingredient))})};p.shopping.addEventListener("click",e=>{const t=e.target.closest(".shopping__item").dataset.itemid;if(e.target.matches(".shopping__delete, .shopping__delete *"))T.list.deleteItem(t),(e=>{const t=document.querySelector(`[data-itemid="${e}"]`);t.parentElement.removeChild(t)})(t);else if(e.target.matches(".shopping__count-value")){const n=parseFloat(e.target.value);T.list.updateCount(t,n)}});const C=()=>{T.likes||(T.likes=new l);const e=T.recipe.id;if(T.likes.isLiked(e))T.likes.deleteLike(e),S(!1),(e=>{const t=document.querySelector(`.likes__link[href="#${e}"]`).parentElement;t&&t.parentElement.removeChild(t)})(e);else{const t=T.likes.addLike(e,T.recipe.title,T.recipe.author,T.recipe.img);S(!0),L(t)}E(T.likes.getNumLikes())};window.addEventListener("load",()=>{T.likes=new l,T.likes.readStorage(),E(T.likes.getNumLikes()),T.likes.likes.forEach(e=>L(e))}),p.recipe.addEventListener("click",e=>{e.target.matches(".btn-decrease, .btn-decrease *")?T.recipe.servings>1&&(T.recipe.updateServings("dec"),k(T.recipe)):e.target.matches(".btn-increase, .btn-increase *")?(T.recipe.updateServings("inc"),k(T.recipe)):e.target.matches(".recipe__btn--add, .recipe__btn--add *")?R():e.target.matches(".recipe__love, .recipe__love *")&&C()})}]);