var Wh=Object.defineProperty;var Gh=(n,e,t)=>e in n?Wh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var $=(n,e,t)=>Gh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ba={};/**
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
 */const ll=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,g=o>>2,C=(o&3)<<4|l>>4;let S=(l&15)<<2|d>>6,P=d&63;h||(P=64,a||(S=64)),r.push(t[g],t[C],t[S],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ll(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const C=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||C==null)throw new Qh;const S=o<<2|l>>4;if(r.push(S),d!==64){const P=l<<4&240|d>>2;if(r.push(P),C!==64){const U=d<<6&192|C;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jh=function(n){const e=ll(n);return ul.encodeByteArray(e,!0)},Ui=function(n){return Jh(n).replace(/\./g,"")},hl=function(n){try{return ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zh=()=>Xh().__FIREBASE_DEFAULTS__,ed=()=>{if(typeof process>"u"||typeof Ba>"u")return;const n=Ba.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},td=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hl(n[1]);return e&&JSON.parse(e)},ts=()=>{try{return Zh()||ed()||td()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dl=n=>{var e,t;return(t=(e=ts())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nd=n=>{const e=dl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fl=()=>{var n;return(n=ts())===null||n===void 0?void 0:n.config},pl=n=>{var e;return(e=ts())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function id(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ui(JSON.stringify(t)),Ui(JSON.stringify(a)),""].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function od(){var n;const e=(n=ts())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cd(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ld(){return!od()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function yl(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function ud(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const hd="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=hd,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?dd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new rt(i,l,r)}}function dd(n,e){return n.replace(fd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fd=/\{\$([^}]+)}/g;function pd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(qa(o)&&qa(a)){if(!Vr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function qa(n){return n!==null&&typeof n=="object"}/**
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
 */function Hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gd(n,e){const t=new md(n,e);return t.subscribe.bind(t)}class md{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");yd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Rs),i.error===void 0&&(i.error=Rs),i.complete===void 0&&(i.complete=Rs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rs(){}/**
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
 */const _d=1e3,vd=2,wd=4*60*60*1e3,Ed=.5;function $a(n,e=_d,t=vd){const r=e*Math.pow(t,n),i=Math.round(Ed*r*(Math.random()-.5)*2);return Math.min(wd,r+i)}/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class Id{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ad(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Td(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Td(n){return n===en?void 0:n}function Ad(n){return n.instantiationMode==="EAGER"}/**
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
 */class bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Id(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Cd={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Sd=Z.INFO,Rd={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Dd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Rd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ns{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Pd=(n,e)=>e.some(t=>n instanceof t);let Ha,za;function kd(){return Ha||(Ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _l=new WeakMap,Gs=new WeakMap,vl=new WeakMap,Ds=new WeakMap,Eo=new WeakMap;function Nd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ut(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&_l.set(t,n)}).catch(()=>{}),Eo.set(e,n),e}function Od(n){if(Gs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Gs.set(n,e)}let Ys={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Vd(n){Ys=n(Ys)}function Ld(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ps(this),e,...t);return vl.set(r,e.sort?e.sort():[e]),Ut(r)}:Md().includes(n)?function(...e){return n.apply(Ps(this),e),Ut(_l.get(this))}:function(...e){return Ut(n.apply(Ps(this),e))}}function xd(n){return typeof n=="function"?Ld(n):(n instanceof IDBTransaction&&Od(n),Pd(n,kd())?new Proxy(n,Ys):n)}function Ut(n){if(n instanceof IDBRequest)return Nd(n);if(Ds.has(n))return Ds.get(n);const e=xd(n);return e!==n&&(Ds.set(n,e),Eo.set(e,n)),e}const Ps=n=>Eo.get(n);function wl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=Ut(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ut(a.result),h.oldVersion,h.newVersion,Ut(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Fd=["get","getKey","getAll","getAllKeys","count"],Ud=["put","add","delete","clear"],ks=new Map;function Ka(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ud.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fd.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return ks.set(e,o),o}Vd(n=>({...n,get:(e,t,r)=>Ka(e,t)||n.get(e,t,r),has:(e,t)=>!!Ka(e,t)||n.has(e,t)}));/**
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
 */class jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qs="@firebase/app",Wa="0.10.10";/**
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
 */const Et=new ns("@firebase/app"),qd="@firebase/app-compat",$d="@firebase/analytics-compat",Hd="@firebase/analytics",zd="@firebase/app-check-compat",Kd="@firebase/app-check",Wd="@firebase/auth",Gd="@firebase/auth-compat",Yd="@firebase/database",Qd="@firebase/database-compat",Jd="@firebase/functions",Xd="@firebase/functions-compat",Zd="@firebase/installations",ef="@firebase/installations-compat",tf="@firebase/messaging",nf="@firebase/messaging-compat",rf="@firebase/performance",sf="@firebase/performance-compat",of="@firebase/remote-config",af="@firebase/remote-config-compat",cf="@firebase/storage",lf="@firebase/storage-compat",uf="@firebase/firestore",hf="@firebase/vertexai-preview",df="@firebase/firestore-compat",ff="firebase",pf="10.13.1";/**
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
 */const Js="[DEFAULT]",gf={[Qs]:"fire-core",[qd]:"fire-core-compat",[Hd]:"fire-analytics",[$d]:"fire-analytics-compat",[Kd]:"fire-app-check",[zd]:"fire-app-check-compat",[Wd]:"fire-auth",[Gd]:"fire-auth-compat",[Yd]:"fire-rtdb",[Qd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Xd]:"fire-fn-compat",[Zd]:"fire-iid",[ef]:"fire-iid-compat",[tf]:"fire-fcm",[nf]:"fire-fcm-compat",[rf]:"fire-perf",[sf]:"fire-perf-compat",[of]:"fire-rc",[af]:"fire-rc-compat",[cf]:"fire-gcs",[lf]:"fire-gcs-compat",[uf]:"fire-fst",[df]:"fire-fst-compat",[hf]:"fire-vertex","fire-js":"fire-js",[ff]:"fire-js-all"};/**
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
 */const ji=new Map,mf=new Map,Xs=new Map;function Ga(n,e){try{n.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ht(n){const e=n.name;if(Xs.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Xs.set(e,n);for(const t of ji.values())Ga(t,n);for(const t of mf.values())Ga(t,n);return!0}function _n(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Lt(n){return n.settings!==void 0}/**
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
 */const yf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new yn("app","Firebase",yf);/**
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
 */class _f{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=pf;function El(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(t||(t=fl()),!t)throw jt.create("no-options");const o=ji.get(i);if(o){if(Vr(t,o.options)&&Vr(r,o.config))return o;throw jt.create("duplicate-app",{appName:i})}const a=new bd(i);for(const h of Xs.values())a.addComponent(h);const l=new _f(t,r,a);return ji.set(i,l),l}function Io(n=Js){const e=ji.get(n);if(!e&&n===Js&&fl())return El();if(!e)throw jt.create("no-app",{appName:n});return e}function Xe(n,e,t){var r;let i=(r=gf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}ht(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vf="firebase-heartbeat-database",wf=1,Lr="firebase-heartbeat-store";let Ms=null;function Il(){return Ms||(Ms=wl(vf,wf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Ms}async function Ef(n){try{const t=(await Il()).transaction(Lr),r=await t.objectStore(Lr).get(Tl(n));return await t.done,r}catch(e){if(e instanceof rt)Et.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(t.message)}}}async function Ya(n,e){try{const r=(await Il()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,Tl(n)),await r.done}catch(t){if(t instanceof rt)Et.warn(t.message);else{const r=jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Et.warn(r.message)}}}function Tl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const If=1024,Tf=30*24*60*60*1e3;class Af{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qa();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Tf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qa(),{heartbeatsToSend:r,unsentEntries:i}=bf(this._heartbeatsCache.heartbeats),o=Ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Et.warn(t),""}}}function Qa(){return new Date().toISOString().substring(0,10)}function bf(n,e=If){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ja(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ja(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Cf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?yl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ef(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ya(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ja(n){return Ui(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Sf(n){ht(new nt("platform-logger",e=>new jd(e),"PRIVATE")),ht(new nt("heartbeat",e=>new Af(e),"PRIVATE")),Xe(Qs,Wa,n),Xe(Qs,Wa,"esm2017"),Xe("fire-js","")}Sf("");var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var an,Al;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(w,T,A){for(var _=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)_[Fe-2]=arguments[Fe];return y.prototype[T].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)w[T]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(T=0;16>T;++T)w[T]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],T=E.g[2];var A=E.g[3],_=y+(A^v&(T^A))+w[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=A+(T^y&(v^T))+w[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(v^A&(y^v))+w[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=v+(y^T&(A^y))+w[3]+3250441966&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(A^v&(T^A))+w[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(T^y&(v^T))+w[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(v^A&(y^v))+w[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=v+(y^T&(A^y))+w[7]+4249261313&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(A^v&(T^A))+w[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(T^y&(v^T))+w[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(v^A&(y^v))+w[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=v+(y^T&(A^y))+w[11]+2304563134&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(A^v&(T^A))+w[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(T^y&(v^T))+w[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(v^A&(y^v))+w[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=v+(y^T&(A^y))+w[15]+1236535329&4294967295,v=T+(_<<22&4294967295|_>>>10),_=y+(T^A&(v^T))+w[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^T&(y^v))+w[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(A^y))+w[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(T^A))+w[0]+3921069994&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(v^T))+w[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^T&(y^v))+w[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(A^y))+w[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(T^A))+w[4]+3889429448&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(v^T))+w[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^T&(y^v))+w[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(A^y))+w[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(T^A))+w[8]+1163531501&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(v^T))+w[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^T&(y^v))+w[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^v&(A^y))+w[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(T^A))+w[12]+2368359562&4294967295,v=T+(_<<20&4294967295|_>>>12),_=y+(v^T^A)+w[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^T)+w[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^v)+w[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=v+(T^A^y)+w[14]+4259657740&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(v^T^A)+w[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^T)+w[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^v)+w[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=v+(T^A^y)+w[10]+3200236656&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(v^T^A)+w[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^T)+w[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^v)+w[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=v+(T^A^y)+w[6]+76029189&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(v^T^A)+w[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^T)+w[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^v)+w[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=v+(T^A^y)+w[2]+3299628645&4294967295,v=T+(_<<23&4294967295|_>>>9),_=y+(T^(v|~A))+w[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~T))+w[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~v))+w[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=v+(A^(T|~y))+w[5]+4237533241&4294967295,v=T+(_<<21&4294967295|_>>>11),_=y+(T^(v|~A))+w[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~T))+w[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~v))+w[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=v+(A^(T|~y))+w[1]+2240044497&4294967295,v=T+(_<<21&4294967295|_>>>11),_=y+(T^(v|~A))+w[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~T))+w[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~v))+w[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=v+(A^(T|~y))+w[13]+1309151649&4294967295,v=T+(_<<21&4294967295|_>>>11),_=y+(T^(v|~A))+w[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~T))+w[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~v))+w[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=v+(A^(T|~y))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,w=this.B,T=this.h,A=0;A<y;){if(T==0)for(;A<=v;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(w[T++]=E.charCodeAt(A++),T==this.blockSize){i(this,w),T=0;break}}else for(;A<y;)if(w[T++]=E[A++],T==this.blockSize){i(this,w),T=0;break}}this.h=T,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)E[v++]=this.g[y]>>>w&255;return E};function o(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function a(E,y){this.h=y;for(var v=[],w=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;w&&A==y||(v[T]=A,w=!1)}this.g=v}var l={};function h(E){return-128<=E&&128>E?o(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return C;if(0>E)return x(d(-E));for(var y=[],v=1,w=0;E>=v;w++)y[w]=E/v|0,v*=4294967296;return new a(y,0)}function g(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return x(g(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),w=C,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),_=parseInt(E.substring(T,T+A),y);8>A?(A=d(Math.pow(y,A)),w=w.j(A).add(d(_))):(w=w.j(v),w=w.add(d(_)))}return w}var C=h(0),S=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-x(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);E+=(0<=w?w:4294967296+w)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(U(this))return"0";if(O(this))return"-"+x(this).toString(E);for(var y=d(Math.pow(E,6)),v=this,w="";;){var T=ae(v,y).g;v=oe(v,T.j(y));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=T,U(v))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function U(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=oe(this,E),O(E)?-1:U(E)?0:1};function x(E){for(var y=E.g.length,v=[],w=0;w<y;w++)v[w]=~E.g[w];return new a(v,~E.h).add(S)}n.abs=function(){return O(this)?x(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0,T=0;T<=y;T++){var A=w+(this.i(T)&65535)+(E.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=_>>>16,A&=65535,_&=65535,v[T]=_<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function oe(E,y){return E.add(x(y))}n.j=function(E){if(U(this)||U(E))return C;if(O(this))return O(E)?x(this).j(x(E)):x(x(this).j(E));if(O(E))return x(this.j(x(E)));if(0>this.l(P)&&0>E.l(P))return d(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var A=this.i(w)>>>16,_=this.i(w)&65535,Fe=E.i(T)>>>16,Ke=E.i(T)&65535;v[2*w+2*T]+=_*Ke,J(v,2*w+2*T),v[2*w+2*T+1]+=A*Ke,J(v,2*w+2*T+1),v[2*w+2*T+1]+=_*Fe,J(v,2*w+2*T+1),v[2*w+2*T+2]+=A*Fe,J(v,2*w+2*T+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new a(v,0)};function J(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function X(E,y){this.g=E,this.h=y}function ae(E,y){if(U(y))throw Error("division by zero");if(U(E))return new X(C,C);if(O(E))return y=ae(x(E),y),new X(x(y.g),x(y.h));if(O(y))return y=ae(E,x(y)),new X(x(y.g),y.h);if(30<E.g.length){if(O(E)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var v=S,w=y;0>=w.l(E);)v=Ee(v),w=Ee(w);var T=ce(v,1),A=ce(w,1);for(w=ce(w,2),v=ce(v,2);!U(w);){var _=A.add(w);0>=_.l(E)&&(T=T.add(v),A=_),w=ce(w,1),v=ce(v,1)}return y=oe(E,T.j(y)),new X(T,y)}for(T=C;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=d(v),_=A.j(y);O(_)||0<_.l(E);)v-=w,A=d(v),_=A.j(y);U(A)&&(A=S),T=T.add(A),E=oe(E,_)}return new X(T,E)}n.A=function(E){return ae(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&E.i(w);return new a(v,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|E.i(w);return new a(v,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^E.i(w);return new a(v,this.h^E.h)};function Ee(E){for(var y=E.g.length+1,v=[],w=0;w<y;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(v,E.h)}function ce(E,y){var v=y>>5;y%=32;for(var w=E.g.length-v,T=[],A=0;A<w;A++)T[A]=0<y?E.i(A+v)>>>y|E.i(A+v+1)<<32-y:E.i(A+v);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Al=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,an=a}).apply(typeof Xa<"u"?Xa:typeof self<"u"?self:typeof window<"u"?window:{});var Ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bl,Cl,br,Sl,ki,Zs,Rl,Dl,Pl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ti=="object"&&Ti];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var b=s[f];if(!(b in u))break e;u=u[b]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,f=!1,b={next:function(){if(!f&&u<s.length){var R=u++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function g(s,c,u){return s.call.apply(s.bind,arguments)}function C(s,c,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),s.apply(c,b)}}return function(){return s.apply(c,arguments)}}function S(s,c,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:C,S.apply(null,arguments)}function P(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function U(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,b,R){for(var N=Array(arguments.length-2),he=2;he<arguments.length;he++)N[he-2]=arguments[he];return c.prototype[b].apply(f,N)}}function O(s){const c=s.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function x(s,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const b=s.length||0,R=f.length||0;s.length=b+R;for(let N=0;N<R;N++)s[b+N]=f[N]}else s.push(f)}}class oe{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function J(s){return/^[\s\xa0]*$/.test(s)}function X(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function ae(s){return ae[" "](s),s}ae[" "]=function(){};var Ee=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ce(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function E(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function y(s){const c={};for(const u in s)c[u]=s[u];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,c){let u,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(u in f)s[u]=f[u];for(let R=0;R<v.length;R++)u=v[R],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function T(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function A(s){l.setTimeout(()=>{throw s},0)}function _(){var s=wn;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Fe{constructor(){this.h=this.g=null}add(c,u){const f=Ke.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Ke=new oe(()=>new vn,s=>s.reset());class vn{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let it,Ct=!1,wn=new Fe,Xr=()=>{const s=l.Promise.resolve(void 0);it=()=>{s.then(nr)}};var nr=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(u){A(u)}var c=Ke;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Ct=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var ys=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s}();function Ze(s,c){if(Ie.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Ee){e:{try{ae(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:rr[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ze.aa.h.call(this)}}U(Ze,Ie);var rr={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),gt=0;function En(s,c,u,f,b){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=b,this.key=++gt,this.da=this.fa=!1}function In(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Ht(s){this.src=s,this.g={},this.h=0}Ht.prototype.add=function(s,c,u,f,b){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var N=ir(s,c,f,b);return-1<N?(c=s[N],u||(c.fa=!1)):(c=new En(c,this.src,R,!!f,b),c.fa=u,s.push(c)),c};function St(s,c){var u=c.type;if(u in s.g){var f=s.g[u],b=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=b)&&Array.prototype.splice.call(f,b,1),R&&(In(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function ir(s,c,u,f){for(var b=0;b<s.length;++b){var R=s[b];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return b}return-1}var sr="closure_lm_"+(1e6*Math.random()|0),Tn={};function Zr(s,c,u,f,b){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Zr(s,c[R],u,f,b);return null}return u=Wt(u),s&&s[pt]?s.K(c,u,d(f)?!!f.capture:!!f,b):ei(s,c,u,!1,f,b)}function ei(s,c,u,f,b,R){if(!c)throw Error("Invalid event type");var N=d(b)?!!b.capture:!!b,he=Kt(s);if(he||(s[sr]=he=new Ht(s)),u=he.add(c,u,f,N,R),u.proxy)return u;if(f=ti(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)ys||(b=N),b===void 0&&(b=!1),s.addEventListener(c.toString(),f,b);else if(s.attachEvent)s.attachEvent(ni(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ti(){function s(u){return c.call(s.src,s.listener,u)}const c=ri;return s}function zt(s,c,u,f,b){if(Array.isArray(c))for(var R=0;R<c.length;R++)zt(s,c[R],u,f,b);else f=d(f)?!!f.capture:!!f,u=Wt(u),s&&s[pt]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],u=ir(R,u,f,b),-1<u&&(In(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=Kt(s))&&(c=s.g[c.toString()],s=-1,c&&(s=ir(c,u,f,b)),(u=-1<s?c[s]:null)&&or(u))}function or(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[pt])St(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(ni(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Kt(c))?(St(u,s),u.h==0&&(u.src=null,c[sr]=null)):In(s)}}}function ni(s){return s in Tn?Tn[s]:Tn[s]="on"+s}function ri(s,c){if(s.da)s=!0;else{c=new Ze(c,this);var u=s.listener,f=s.ha||s.src;s.fa&&or(s),s=u.call(f,c)}return s}function Kt(s){return s=s[sr],s instanceof Ht?s:null}var An="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wt(s){return typeof s=="function"?s:(s[An]||(s[An]=function(c){return s.handleEvent(c)}),s[An])}function Te(){st.call(this),this.i=new Ht(this),this.M=this,this.F=null}U(Te,st),Te.prototype[pt]=!0,Te.prototype.removeEventListener=function(s,c,u,f){zt(this,s,c,u,f)};function Ae(s,c){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new Ie(c,s);else if(c instanceof Ie)c.target=c.target||s;else{var b=c;c=new Ie(f,s),w(c,b)}if(b=!0,u)for(var R=u.length-1;0<=R;R--){var N=c.g=u[R];b=bn(N,f,!0,c)&&b}if(N=c.g=s,b=bn(N,f,!0,c)&&b,b=bn(N,f,!1,c)&&b,u)for(R=0;R<u.length;R++)N=c.g=u[R],b=bn(N,f,!1,c)&&b}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],f=0;f<u.length;f++)In(u[f]);delete s.g[c],s.h--}}this.F=null},Te.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},Te.prototype.L=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function bn(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,R=0;R<c.length;++R){var N=c[R];if(N&&!N.da&&N.capture==u){var he=N.listener,Se=N.ha||N.src;N.fa&&St(s.i,N),b=he.call(Se,f)!==!1&&b}}return b&&!f.defaultPrevented}function ar(s,c,u){if(typeof s=="function")u&&(s=S(s,u));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function ii(s){s.g=ar(()=>{s.g=null,s.i&&(s.i=!1,ii(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class _s extends st{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ii(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rt(s){st.call(this),this.h=s,this.g={}}U(Rt,st);var si=[];function oi(s){ce(s.g,function(c,u){this.g.hasOwnProperty(u)&&or(c)},s),s.g={}}Rt.prototype.N=function(){Rt.aa.N.call(this),oi(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=l.JSON.stringify,cr=l.JSON.parse,lr=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ur(){}ur.prototype.h=null;function Gt(s){return s.h||(s.h=s.i())}function Cn(){}var Ue={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hr(){Ie.call(this,"d")}U(hr,Ie);function dr(){Ie.call(this,"c")}U(dr,Ie);var p={},m=null;function I(){return m=m||new Te}p.La="serverreachability";function D(s){Ie.call(this,p.La,s)}U(D,Ie);function M(s){const c=I();Ae(c,new D(c))}p.STAT_EVENT="statevent";function L(s,c){Ie.call(this,p.STAT_EVENT,s),this.stat=c}U(L,Ie);function q(s){const c=I();Ae(c,new L(c,s))}p.Ma="timingevent";function j(s,c){Ie.call(this,p.Ma,s),this.size=c}U(j,Ie);function G(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function F(){this.g=!0}F.prototype.xa=function(){this.g=!1};function z(s,c,u,f,b,R){s.info(function(){if(s.g)if(R)for(var N="",he=R.split("&"),Se=0;Se<he.length;Se++){var re=he[Se].split("=");if(1<re.length){var ke=re[0];re=re[1];var Me=ke.split("_");N=2<=Me.length&&Me[1]=="type"?N+(ke+"="+re+"&"):N+(ke+"=redacted&")}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+u+`
`+N})}function le(s,c,u,f,b,R,N){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+u+`
`+R+" "+N})}function Ce(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yt(s,u)+(f?" "+f:"")})}function je(s,c){s.info(function(){return"TIMEOUT: "+c})}F.prototype.info=function(){};function Yt(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var N=1;N<b.length;N++)b[N]=""}}}}return ue(u)}catch{return c}}var et={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qt;function Sn(){}U(Sn,ur),Sn.prototype.g=function(){return new XMLHttpRequest},Sn.prototype.i=function(){return{}},Qt=new Sn;function ot(s,c,u,f){this.j=s,this.i=c,this.l=u,this.R=f||1,this.U=new Rt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ci}function ci(){this.i=null,this.g="",this.h=!1}var li={},fr={};function pr(s,c,u){s.L=1,s.v=gi(mt(c)),s.m=u,s.P=!0,ui(s,null)}function ui(s,c){s.F=Date.now(),di(s),s.A=mt(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),va(u.i,"t",f),s.C=0,u=s.j.J,s.h=new ci,s.g=xa(s.j,u?c:null,!s.m),0<s.O&&(s.M=new _s(S(s.Y,s,s.g),s.O)),c=s.U,u=s.g,f=s.ca;var b="readystatechange";Array.isArray(b)||(b&&(si[0]=b.toString()),b=si);for(var R=0;R<b.length;R++){var N=Zr(u,b[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=s.H?y(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),M(),z(s.i,s.u,s.A,s.l,s.R,s.m)}ot.prototype.ca=function(s){s=s.target;const c=this.M;c&&yt(s)==3?c.j():this.Y(s)},ot.prototype.Y=function(s){try{if(s==this.g)e:{const Me=yt(this.g);var c=this.g.Ba();const Pn=this.g.Z();if(!(3>Me)&&(Me!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||Me!=4||c==7||(c==8||0>=Pn?M(3):M(2)),vs(this);var u=this.g.Z();this.X=u;t:if(hi(this)){var f=Ca(this.g);s="";var b=f.length,R=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),gr(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==b-1)});f.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=u==200,le(this.i,this.u,this.A,this.l,this.R,Me,u),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Se=this.g;if((he=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(he)){var re=he;break t}}re=null}if(u=re)Ce(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ws(this,u);else{this.o=!1,this.s=3,q(12),Jt(this),gr(this);break e}}if(this.P){u=!0;let tt;for(;!this.J&&this.C<N.length;)if(tt=Rh(this,N),tt==fr){Me==4&&(this.s=4,q(14),u=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==li){this.s=4,q(15),Ce(this.i,this.l,N,"[Invalid Chunk]"),u=!1;break}else Ce(this.i,this.l,tt,null),ws(this,tt);if(hi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Me!=4||N.length!=0||this.h.h||(this.s=1,q(16),u=!1),this.o=this.o&&u,!u)Ce(this.i,this.l,N,"[Invalid Chunked Response]"),Jt(this),gr(this);else if(0<N.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Cs(ke),ke.M=!0,q(11))}}else Ce(this.i,this.l,N,null),ws(this,N);Me==4&&Jt(this),this.o&&!this.J&&(Me==4?Na(this.j,this):(this.o=!1,di(this)))}else zh(this.g),u==400&&0<N.indexOf("Unknown SID")?(this.s=3,q(12)):(this.s=0,q(13)),Jt(this),gr(this)}}}catch{}finally{}};function hi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Rh(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?fr:(u=Number(c.substring(u,f)),isNaN(u)?li:(f+=1,f+u>c.length?fr:(c=c.slice(f,f+u),s.C=f+u,c)))}ot.prototype.cancel=function(){this.J=!0,Jt(this)};function di(s){s.S=Date.now()+s.I,aa(s,s.I)}function aa(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=G(S(s.ba,s),c)}function vs(s){s.B&&(l.clearTimeout(s.B),s.B=null)}ot.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(je(this.i,this.A),this.L!=2&&(M(),q(17)),Jt(this),this.s=2,gr(this)):aa(this,this.S-s)};function gr(s){s.j.G==0||s.J||Na(s.j,s)}function Jt(s){vs(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,oi(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function ws(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||Es(u.h,s))){if(!s.K&&Es(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)wi(u),_i(u);else break e;bs(u),q(18)}}else u.za=b[1],0<u.za-u.T&&37500>b[2]&&u.F&&u.v==0&&!u.C&&(u.C=G(S(u.Za,u),6e3));if(1>=ua(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Zt(u,11)}else if((s.K||u.g==s)&&wi(u),!J(c))for(b=u.Da.g.parse(c),c=0;c<b.length;c++){let re=b[c];if(u.T=re[0],re=re[1],u.G==2)if(re[0]=="c"){u.K=re[1],u.ia=re[2];const ke=re[3];ke!=null&&(u.la=ke,u.j.info("VER="+u.la));const Me=re[4];Me!=null&&(u.Aa=Me,u.j.info("SVER="+u.Aa));const Pn=re[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(f=1.5*Pn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const tt=s.g;if(tt){const Ii=tt.g?tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var R=f.h;R.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Is(R,R.h),R.h=null))}if(f.D){const Ss=tt.g?tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(f.ya=Ss,de(f.I,f.D,Ss))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var N=s;if(f.qa=La(f,f.J?f.ia:null,f.W),N.K){ha(f.h,N);var he=N,Se=f.L;Se&&(he.I=Se),he.B&&(vs(he),di(he)),f.g=N}else ka(f);0<u.i.length&&vi(u)}else re[0]!="stop"&&re[0]!="close"||Zt(u,7);else u.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?Zt(u,7):As(u):re[0]!="noop"&&u.l&&u.l.ta(re),u.v=0)}}M(4)}catch{}}var Dh=class{constructor(s,c){this.g=s,this.map=c}};function ca(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function la(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ua(s){return s.h?1:s.g?s.g.size:0}function Es(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Is(s,c){s.g?s.g.add(c):s.h=c}function ha(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}ca.prototype.cancel=function(){if(this.i=da(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function da(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return O(s.i)}function Ph(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,f=0;f<u;f++)c.push(s[f]);return c}c=[],u=0;for(f in s)c[u++]=s[f];return c}function kh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const f in s)c[u++]=f;return c}}}function fa(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=kh(s),f=Ph(s),b=f.length,R=0;R<b;R++)c.call(void 0,f[R],u&&u[R],s)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mh(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),b=null;if(0<=f){var R=s[u].substring(0,f);b=s[u].substring(f+1)}else R=s[u];c(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Xt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Xt){this.h=s.h,fi(this,s.j),this.o=s.o,this.g=s.g,pi(this,s.s),this.l=s.l;var c=s.i,u=new _r;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),ga(this,u),this.m=s.m}else s&&(c=String(s).match(pa))?(this.h=!1,fi(this,c[1]||"",!0),this.o=mr(c[2]||""),this.g=mr(c[3]||"",!0),pi(this,c[4]),this.l=mr(c[5]||"",!0),ga(this,c[6]||"",!0),this.m=mr(c[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}Xt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(yr(c,ma,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(yr(c,ma,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(yr(u,u.charAt(0)=="/"?Vh:Oh,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",yr(u,xh)),s.join("")};function mt(s){return new Xt(s)}function fi(s,c,u){s.j=u?mr(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function pi(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function ga(s,c,u){c instanceof _r?(s.i=c,Fh(s.i,s.h)):(u||(c=yr(c,Lh)),s.i=new _r(c,s.h))}function de(s,c,u){s.i.set(c,u)}function gi(s){return de(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function mr(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function yr(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,Nh),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Nh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ma=/[#\/\?@]/g,Oh=/[#\?:]/g,Vh=/[#\?]/g,Lh=/[#\?@]/g,xh=/#/g;function _r(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Dt(s){s.g||(s.g=new Map,s.h=0,s.i&&Mh(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=_r.prototype,n.add=function(s,c){Dt(this),this.i=null,s=Rn(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function ya(s,c){Dt(s),c=Rn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function _a(s,c){return Dt(s),c=Rn(s,c),s.g.has(c)}n.forEach=function(s,c){Dt(this),this.g.forEach(function(u,f){u.forEach(function(b){s.call(c,b,f,this)},this)},this)},n.na=function(){Dt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const b=s[f];for(let R=0;R<b.length;R++)u.push(c[f])}return u},n.V=function(s){Dt(this);let c=[];if(typeof s=="string")_a(this,s)&&(c=c.concat(this.g.get(Rn(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return Dt(this),this.i=null,s=Rn(this,s),_a(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function va(s,c,u){ya(s,c),0<u.length&&(s.i=null,s.g.set(Rn(s,c),O(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const R=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var b=R;N[f]!==""&&(b+="="+encodeURIComponent(String(N[f]))),s.push(b)}}return this.i=s.join("&")};function Rn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Fh(s,c){c&&!s.j&&(Dt(s),s.i=null,s.g.forEach(function(u,f){var b=f.toLowerCase();f!=b&&(ya(this,f),va(this,b,u))},s)),s.j=c}function Uh(s,c){const u=new F;if(l.Image){const f=new Image;f.onload=P(Pt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=P(Pt,u,"TestLoadImage: error",!1,c,f),f.onabort=P(Pt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(Pt,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function jh(s,c){const u=new F,f=new AbortController,b=setTimeout(()=>{f.abort(),Pt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(b),R.ok?Pt(u,"TestPingServer: ok",!0,c):Pt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Pt(u,"TestPingServer: error",!1,c)})}function Pt(s,c,u,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(u)}catch{}}function Bh(){this.g=new lr}function qh(s,c,u){const f=u||"";try{fa(s,function(b,R){let N=b;d(b)&&(N=ue(b)),c.push(f+R+"="+encodeURIComponent(N))})}catch(b){throw c.push(f+"type="+encodeURIComponent("_badmap")),b}}function vr(s){this.l=s.Ub||null,this.j=s.eb||!1}U(vr,ur),vr.prototype.g=function(){return new mi(this.l,this.j)},vr.prototype.i=function(s){return function(){return s}}({});function mi(s,c){Te.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(mi,Te),n=mi.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Er(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function wa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?wr(this):Er(this),this.readyState==3&&wa(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,wr(this))},n.Qa=function(s){this.g&&(this.response=s,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Er(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function Er(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ea(s){let c="";return ce(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Ts(s,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ea(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):de(s,c,u))}function fe(s){Te.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(fe,Te);var $h=/^https?$/i,Hh=["POST","PUT"];n=fe.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qt.g(),this.v=this.o?Gt(this.o):Gt(Qt),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Ia(this,R);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)u.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),b=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Hh,c,void 0))||f||b||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of u)this.g.setRequestHeader(R,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ba(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ia(this,R)}};function Ia(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Ta(s),yi(s)}function Ta(s){s.A||(s.A=!0,Ae(s,"complete"),Ae(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ae(this,"complete"),Ae(this,"abort"),yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Aa(this):this.bb())},n.bb=function(){Aa(this)};function Aa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||yt(s)!=4||s.Z()!=2)){if(s.u&&yt(s)==4)ar(s.Ea,0,s);else if(Ae(s,"readystatechange"),yt(s)==4){s.h=!1;try{const N=s.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=N===0){var b=String(s.D).match(pa)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),f=!$h.test(b?b.toLowerCase():"")}u=f}if(u)Ae(s,"complete"),Ae(s,"success");else{s.m=6;try{var R=2<yt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Ta(s)}}finally{yi(s)}}}}function yi(s,c){if(s.g){ba(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ae(s,"ready");try{u.onreadystatechange=f}catch{}}}function ba(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function yt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),cr(c)}};function Ca(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zh(s){const c={};s=(s.g&&2<=yt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(J(s[f]))continue;var u=T(s[f]);const b=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[b]||[];c[b]=R,R.push(u)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ir(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function Sa(s){this.Aa=0,this.i=[],this.j=new F,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ir("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ir("baseRetryDelayMs",5e3,s),this.cb=Ir("retryDelaySeedMs",1e4,s),this.Wa=Ir("forwardChannelMaxRetries",2,s),this.wa=Ir("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ca(s&&s.concurrentRequestLimit),this.Da=new Bh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sa.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,f){q(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=La(this,null,this.W),vi(this)};function As(s){if(Ra(s),s.G==3){var c=s.U++,u=mt(s.I);if(de(u,"SID",s.K),de(u,"RID",c),de(u,"TYPE","terminate"),Tr(s,u),c=new ot(s,s.j,c),c.L=2,c.v=gi(mt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=xa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),di(c)}Va(s)}function _i(s){s.g&&(Cs(s),s.g.cancel(),s.g=null)}function Ra(s){_i(s),s.u&&(l.clearTimeout(s.u),s.u=null),wi(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function vi(s){if(!la(s.h)&&!s.s){s.s=!0;var c=s.Ga;it||Xr(),Ct||(it(),Ct=!0),wn.add(c,s),s.B=0}}function Kh(s,c){return ua(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=G(S(s.Ga,s,c),Oa(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const b=new ot(this,this.j,s);let R=this.o;if(this.S&&(R?(R=y(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Pa(this,b,c),u=mt(this.I),de(u,"RID",s),de(u,"CVER",22),this.D&&de(u,"X-HTTP-Session-Id",this.D),Tr(this,u),R&&(this.O?c="headers="+encodeURIComponent(String(Ea(R)))+"&"+c:this.m&&Ts(u,this.m,R)),Is(this.h,b),this.Ua&&de(u,"TYPE","init"),this.P?(de(u,"$req",c),de(u,"SID","null"),b.T=!0,pr(b,u,null)):pr(b,u,c),this.G=2}}else this.G==3&&(s?Da(this,s):this.i.length==0||la(this.h)||Da(this))};function Da(s,c){var u;c?u=c.l:u=s.U++;const f=mt(s.I);de(f,"SID",s.K),de(f,"RID",u),de(f,"AID",s.T),Tr(s,f),s.m&&s.o&&Ts(f,s.m,s.o),u=new ot(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Pa(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Is(s.h,u),pr(u,f,c)}function Tr(s,c){s.H&&ce(s.H,function(u,f){de(c,f,u)}),s.l&&fa({},function(u,f){de(c,f,u)})}function Pa(s,c,u){u=Math.min(s.i.length,u);var f=s.l?S(s.l.Na,s.l,s):null;e:{var b=s.i;let R=-1;for(;;){const N=["count="+u];R==-1?0<u?(R=b[0].g,N.push("ofs="+R)):R=0:N.push("ofs="+R);let he=!0;for(let Se=0;Se<u;Se++){let re=b[Se].g;const ke=b[Se].map;if(re-=R,0>re)R=Math.max(0,b[Se].g-100),he=!1;else try{qh(ke,N,"req"+re+"_")}catch{f&&f(ke)}}if(he){f=N.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,f}function ka(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;it||Xr(),Ct||(it(),Ct=!0),wn.add(c,s),s.v=0}}function bs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=G(S(s.Fa,s),Oa(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ma(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=G(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,q(10),_i(this),Ma(this))};function Cs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ma(s){s.g=new ot(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=mt(s.qa);de(c,"RID","rpc"),de(c,"SID",s.K),de(c,"AID",s.T),de(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&de(c,"TO",s.ja),de(c,"TYPE","xmlhttp"),Tr(s,c),s.m&&s.o&&Ts(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=gi(mt(c)),u.m=null,u.P=!0,ui(u,s)}n.Za=function(){this.C!=null&&(this.C=null,_i(this),bs(this),q(19))};function wi(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Na(s,c){var u=null;if(s.g==c){wi(s),Cs(s),s.g=null;var f=2}else if(Es(s.h,c))u=c.D,ha(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var b=s.B;f=I(),Ae(f,new j(f,u)),vi(s)}else ka(s);else if(b=c.s,b==3||b==0&&0<c.X||!(f==1&&Kh(s,c)||f==2&&bs(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),b){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function Oa(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function Zt(s,c){if(s.j.info("Error code "+c),c==2){var u=S(s.fb,s),f=s.Xa;const b=!f;f=new Xt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fi(f,"https"),gi(f),b?Uh(f.toString(),u):jh(f.toString(),u)}else q(2);s.G=0,s.l&&s.l.sa(c),Va(s),Ra(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function Va(s){if(s.G=0,s.ka=[],s.l){const c=da(s.h);(c.length!=0||s.i.length!=0)&&(x(s.ka,c),x(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function La(s,c,u){var f=u instanceof Xt?mt(u):new Xt(u);if(f.g!="")c&&(f.g=c+"."+f.g),pi(f,f.s);else{var b=l.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var R=new Xt(null);f&&fi(R,f),c&&(R.g=c),b&&pi(R,b),u&&(R.l=u),f=R}return u=s.D,c=s.ya,u&&c&&de(f,u,c),de(f,"VER",s.la),Tr(s,f),f}function xa(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new fe(new vr({eb:u})):new fe(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}n=Fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ei(){}Ei.prototype.g=function(s,c){return new We(s,c)};function We(s,c){Te.call(this),this.g=new Sa(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!J(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!J(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Dn(this)}U(We,Te),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){As(this.g)},We.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ue(s),s=u);c.i.push(new Dh(c.Ya++,s)),c.G==3&&vi(c)},We.prototype.N=function(){this.g.l=null,delete this.j,As(this.g),delete this.g,We.aa.N.call(this)};function Ua(s){hr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}U(Ua,hr);function ja(){dr.call(this),this.status=1}U(ja,dr);function Dn(s){this.g=s}U(Dn,Fa),Dn.prototype.ua=function(){Ae(this.g,"a")},Dn.prototype.ta=function(s){Ae(this.g,new Ua(s))},Dn.prototype.sa=function(s){Ae(this.g,new ja)},Dn.prototype.ra=function(){Ae(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,Pl=function(){return new Ei},Dl=function(){return I()},Rl=p,Zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},et.NO_ERROR=0,et.TIMEOUT=8,et.HTTP_ERROR=6,ki=et,ai.COMPLETE="complete",Sl=ai,Cn.EventType=Ue,Ue.OPEN="a",Ue.CLOSE="b",Ue.ERROR="c",Ue.MESSAGE="d",Te.prototype.listen=Te.prototype.K,br=Cn,Cl=vr,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,bl=fe}).apply(typeof Ti<"u"?Ti:typeof self<"u"?self:typeof window<"u"?window:{});const Za="@firebase/firestore";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let Jn="10.13.1";/**
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
 */const hn=new ns("@firebase/firestore");function Ar(){return hn.logLevel}function B(n,...e){if(hn.logLevel<=Z.DEBUG){const t=e.map(To);hn.debug(`Firestore (${Jn}): ${n}`,...t)}}function It(n,...e){if(hn.logLevel<=Z.ERROR){const t=e.map(To);hn.error(`Firestore (${Jn}): ${n}`,...t)}}function $n(n,...e){if(hn.logLevel<=Z.WARN){const t=e.map(To);hn.warn(`Firestore (${Jn}): ${n}`,...t)}}function To(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+n;throw It(e),new Error(e)}function ve(n,e){n||Q()}function te(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class kl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class Df{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Pf{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new cn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new cn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new kl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Oe(e)}}class kf{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mf{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new kf(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Of{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string"),this.R=t.token,new Nf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Vf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Hn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class He{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new He(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new He(0,0))}static max(){return new Y(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends xr{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const xf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends xr{construct(e,t,r){return new qe(e,t,r)}static isValidIdentifier(e){return xf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(t)}static emptyPath(){return new qe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(pe.fromString(e))}static fromName(e){return new K(pe.fromString(e).popFirst(5))}static empty(){return new K(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new pe(e.slice()))}}function Ff(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new He(t+1,0):new He(t,r));return new Bt(i,K.empty(),e)}function Uf(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bt(Y.min(),K.empty(),-1)}static max(){return new Bt(Y.max(),K.empty(),-1)}}function jf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const Bf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ao(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Bf)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(i=>i?k.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new k((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(g=>{a[d]=g,++l,l===o&&r(a)},g=>i(g))}})}static doWhile(e,t){return new k((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function $f(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bo.oe=-1;function rs(n){return n==null}function eo(n){return n===0&&1/n==-1/0}/**
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
 */function ec(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ye{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ai(this.root,e,this.comparator,!0)}}class Ai{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=o??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Re(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,i,o){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tc(this.data.getIterator())}getIteratorFrom(e){return new tc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class tc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new xt([])}unionWith(e){let t=new De(qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ml("Invalid base64 string: "+o):o}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const zf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(ve(!!n),typeof n=="string"){let e=0;const t=zf.exec(n);if(ve(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function dn(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */function Co(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function So(n){const e=n.mapValue.fields.__previous_value__;return Co(e)?So(e):e}function Fr(n){const e=qt(n.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class Kf{constructor(e,t,r,i,o,a,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class Ur{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Co(n)?4:Gf(n)?9007199254740991:Wf(n)?10:11:Q()}function dt(n,e){if(n===e)return!0;const t=fn(n);if(t!==fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fr(n).isEqual(Fr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=qt(i.timestampValue),l=qt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return dn(i.bytesValue).isEqual(dn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ge(i.geoPointValue.latitude)===ge(o.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ge(i.integerValue)===ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ge(i.doubleValue),l=ge(o.doubleValue);return a===l?eo(a)===eo(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Hn(n.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(ec(a)!==ec(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!dt(a[h],l[h])))return!1;return!0}(n,e);default:return Q()}}function jr(n,e){return(n.values||[]).find(t=>dt(t,e))!==void 0}function zn(n,e){if(n===e)return 0;const t=fn(n),r=fn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ge(o.integerValue||o.doubleValue),h=ge(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return nc(n.timestampValue,e.timestampValue);case 4:return nc(Fr(n),Fr(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(o,a){const l=dn(o),h=dn(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const g=se(l[d],h[d]);if(g!==0)return g}return se(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=se(ge(o.latitude),ge(a.latitude));return l!==0?l:se(ge(o.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,h,d,g;const C=o.fields||{},S=a.fields||{},P=(l=C.value)===null||l===void 0?void 0:l.arrayValue,U=(h=S.value)===null||h===void 0?void 0:h.arrayValue,O=se(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((g=U==null?void 0:U.values)===null||g===void 0?void 0:g.length)||0);return O!==0?O:rc(P,U)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===bi.mapValue&&a===bi.mapValue)return 0;if(o===bi.mapValue)return 1;if(a===bi.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let C=0;C<h.length&&C<g.length;++C){const S=se(h[C],g[C]);if(S!==0)return S;const P=zn(l[h[C]],d[g[C]]);if(P!==0)return P}return se(h.length,g.length)}(n.mapValue,e.mapValue);default:throw Q()}}function nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=qt(n),r=qt(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function rc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=zn(t[i],r[i]);if(o)return o}return se(t.length,r.length)}function Kn(n){return to(n)}function to(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return dn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=to(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${to(t.fields[a])}`;return i+"}"}(n.mapValue):Q()}function no(n){return!!n&&"integerValue"in n}function Ro(n){return!!n&&"arrayValue"in n}function ic(n){return!!n&&"nullValue"in n}function sc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ns(n){return!!n&&"mapValue"in n}function Wf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return is(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Gf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rr(t)}setAll(e){let t=qe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Rr(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){is(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new at(Rr(this.value))}}/**
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
 */class Le{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,Y.min(),Y.min(),Y.min(),at.empty(),0)}static newFoundDocument(e,t,r,i){return new Le(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new Le(e,2,t,Y.min(),Y.min(),at.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,Y.min(),Y.min(),at.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bi{constructor(e,t){this.position=e,this.inclusive=t}}function oc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),t.key):r=zn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ac(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Nl{}class we extends Nl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Jf(e,t,r):t==="array-contains"?new ep(e,r):t==="in"?new tp(e,r):t==="not-in"?new np(e,r):t==="array-contains-any"?new rp(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Xf(e,r):new Zf(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(zn(t,this.value)):t!==null&&fn(this.value)===fn(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends Nl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ft(e,t)}matches(e){return Ol(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ol(n){return n.op==="and"}function Vl(n){return Qf(n)&&Ol(n)}function Qf(n){for(const e of n.filters)if(e instanceof ft)return!1;return!0}function ro(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Kn(n.value);if(Vl(n))return n.filters.map(e=>ro(e)).join(",");{const e=n.filters.map(t=>ro(t)).join(",");return`${n.op}(${e})`}}function Ll(n,e){return n instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(n,e):n instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Ll(a,i.filters[l]),!0):!1}(n,e):void Q()}function xl(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${Kn(t.value)}`}(n):n instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(xl).join(" ,")+"}"}(n):"Filter"}class Jf extends we{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xf extends we{constructor(e,t){super(e,"in",t),this.keys=Fl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Zf extends we{constructor(e,t){super(e,"not-in",t),this.keys=Fl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>K.fromName(r.referenceValue))}class ep extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ro(t)&&jr(t.arrayValue,this.value)}}class tp extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jr(this.value.arrayValue,t)}}class np extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jr(this.value.arrayValue,t)}}class rp extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>jr(this.value.arrayValue,r))}}/**
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
 */class ip{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function cc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new ip(n,e,t,r,i,o,a)}function Do(n){const e=te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ro(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),rs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Kn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Kn(r)).join(",")),e.ue=t}return e.ue}function Po(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ll(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ac(n.startAt,e.startAt)&&ac(n.endAt,e.endAt)}function io(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ss{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function sp(n,e,t,r,i,o,a,l){return new ss(n,e,t,r,i,o,a,l)}function Ul(n){return new ss(n)}function lc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function op(n){return n.collectionGroup!==null}function Dr(n){const e=te(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new De(qe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new qi(o,r))}),t.has(qe.keyField().canonicalString())||e.ce.push(new qi(qe.keyField(),r))}return e.ce}function ct(n){const e=te(n);return e.le||(e.le=ap(e,Dr(n))),e.le}function ap(n,e){if(n.limitType==="F")return cc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new qi(i.field,o)});const t=n.endAt?new Bi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bi(n.startAt.position,n.startAt.inclusive):null;return cc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function so(n,e,t){return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function os(n,e){return Po(ct(n),ct(e))&&n.limitType===e.limitType}function jl(n){return`${Do(ct(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>xl(i)).join(", ")}]`),rs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Kn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Kn(i)).join(",")),`Target(${r})`}(ct(n))}; limitType=${n.limitType})`}function as(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):K.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Dr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=oc(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,Dr(r),i)||r.endAt&&!function(a,l,h){const d=oc(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,Dr(r),i))}(n,e)}function cp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bl(n){return(e,t)=>{let r=!1;for(const i of Dr(n)){const o=lp(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function lp(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?zn(h,d):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Hf(this.inner)}size(){return this.innerSize}}/**
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
 */const up=new ye(K.comparator);function $t(){return up}const ql=new ye(K.comparator);function Cr(...n){let e=ql;for(const t of n)e=e.insert(t.key,t);return e}function hp(n){let e=ql;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function sn(){return Pr()}function $l(){return Pr()}function Pr(){return new Xn(n=>n.toString(),(n,e)=>n.isEqual(e))}const dp=new De(K.comparator);function ne(...n){let e=dp;for(const t of n)e=e.add(t);return e}const fp=new De(se);function pp(){return fp}/**
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
 */function gp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eo(e)?"-0":e}}function mp(n){return{integerValue:""+n}}/**
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
 */class cs{constructor(){this._=void 0}}function yp(n,e,t){return n instanceof oo?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Co(o)&&(o=So(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof $i?Hl(n,e):n instanceof Hi?zl(n,e):function(i,o){const a=vp(i,o),l=uc(a)+uc(i.Pe);return no(a)&&no(i.Pe)?mp(l):gp(i.serializer,l)}(n,e)}function _p(n,e,t){return n instanceof $i?Hl(n,e):n instanceof Hi?zl(n,e):t}function vp(n,e){return n instanceof ao?function(r){return no(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class oo extends cs{}class $i extends cs{constructor(e){super(),this.elements=e}}function Hl(n,e){const t=Kl(e);for(const r of n.elements)t.some(i=>dt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Hi extends cs{constructor(e){super(),this.elements=e}}function zl(n,e){let t=Kl(e);for(const r of n.elements)t=t.filter(i=>!dt(i,r));return{arrayValue:{values:t}}}class ao extends cs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function uc(n){return ge(n.integerValue||n.doubleValue)}function Kl(n){return Ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wp(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof $i&&i instanceof $i||r instanceof Hi&&i instanceof Hi?Hn(r.elements,i.elements,dt):r instanceof ao&&i instanceof ao?dt(r.Pe,i.Pe):r instanceof oo&&i instanceof oo}(n.transform,e.transform)}class ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ko{}function Wl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ip(n.key,ln.none()):new Mo(n.key,n.data,ln.none());{const t=n.data,r=at.empty();let i=new De(qe.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ls(n.key,r,new xt(i.toArray()),ln.none())}}function Ep(n,e,t){n instanceof Mo?function(i,o,a){const l=i.value.clone(),h=dc(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof ls?function(i,o,a){if(!Mi(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=dc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Gl(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function kr(n,e,t,r){return n instanceof Mo?function(o,a,l,h){if(!Mi(o.precondition,a))return l;const d=o.value.clone(),g=fc(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof ls?function(o,a,l,h){if(!Mi(o.precondition,a))return l;const d=fc(o.fieldTransforms,h,a),g=a.data;return g.setAll(Gl(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(C=>C.field))}(n,e,t,r):function(o,a,l){return Mi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hn(r,i,(o,a)=>wp(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mo extends ko{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ls extends ko{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Gl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dc(n,e,t){const r=new Map;ve(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,_p(a,l,t[i]))}return r}function fc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,yp(o,a,e))}return r}class Ip extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Tp{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Ep(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$l();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=Wl(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&Hn(this.mutations,e.mutations,(t,r)=>hc(t,r))&&Hn(this.baseMutations,e.baseMutations,(t,r)=>hc(t,r))}}/**
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
 */class Ap{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class bp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var _e,ee;function Yl(n){if(n===void 0)return It("GRPC error has no .code"),V.UNKNOWN;switch(n){case _e.OK:return V.OK;case _e.CANCELLED:return V.CANCELLED;case _e.UNKNOWN:return V.UNKNOWN;case _e.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case _e.INTERNAL:return V.INTERNAL;case _e.UNAVAILABLE:return V.UNAVAILABLE;case _e.UNAUTHENTICATED:return V.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case _e.NOT_FOUND:return V.NOT_FOUND;case _e.ALREADY_EXISTS:return V.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return V.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case _e.ABORTED:return V.ABORTED;case _e.OUT_OF_RANGE:return V.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return V.UNIMPLEMENTED;case _e.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(ee=_e||(_e={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cp(){return new TextEncoder}/**
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
 */const Sp=new an([4294967295,4294967295],0);function pc(n){const e=Cp().encode(n),t=new Al;return t.update(e),new Uint8Array(t.digest())}function gc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new an([t,r],0),new an([i,o],0)]}class No{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Sr(`Invalid padding: ${t}`);if(r<0)throw new Sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Sr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=an.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(an.fromNumber(r)));return i.compare(Sp)===1&&(i=new an([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=pc(e),[r,i]=gc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new No(o,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=pc(e),[r,i]=gc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class us{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Kr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new us(Y.min(),i,new ye(se),$t(),ne())}}class Kr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Kr(r,t,ne(),ne(),ne())}}/**
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
 */class Ni{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Ql{constructor(e,t){this.targetId=e,this.me=t}}class Jl{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class mc{constructor(){this.fe=0,this.ge=_c(),this.pe=Pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Kr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=_c()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Rp{constructor(e){this.Le=e,this.Be=new Map,this.ke=$t(),this.qe=yc(),this.Qe=new ye(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(io(o))if(r===0){const a=new K(o.path);this.Ue(t,a,Le.newNoDocument(a,Y.min()))}else ve(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),h=l?this.Xe(l,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=dn(r).toUint8Array()}catch(h){if(h instanceof Ml)return $n("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new No(a,i,o)}catch(h){return $n(h instanceof Sr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&io(l.target)){const h=new K(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Le.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=ne();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new us(e,t,this.Qe,this.ke,r);return this.ke=$t(),this.qe=yc(),this.Qe=new ye(se),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new mc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new De(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function yc(){return new ye(K.comparator)}function _c(){return new ye(K.comparator)}const Dp={asc:"ASCENDING",desc:"DESCENDING"},Pp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kp={and:"AND",or:"OR"};class Mp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function co(n,e){return n.useProto3Json||rs(e)?e:{value:e}}function Np(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Op(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vn(n){return ve(!!n),Y.fromTimestamp(function(t){const r=qt(t);return new He(r.seconds,r.nanos)}(n))}function Vp(n,e){return lo(n,e).canonicalString()}function lo(n,e){const t=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xl(n){const e=pe.fromString(n);return ve(ru(e)),e}function Os(n,e){const t=Xl(e);if(t.get(1)!==n.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(eu(t))}function Zl(n,e){return Vp(n.databaseId,e)}function Lp(n){const e=Xl(n);return e.length===4?pe.emptyPath():eu(e)}function vc(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eu(n){return ve(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xp(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,g){return d.useProto3Json?(ve(g===void 0||typeof g=="string"),Pe.fromBase64String(g||"")):(ve(g===void 0||g instanceof Buffer||g instanceof Uint8Array),Pe.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const g=d.code===void 0?V.UNKNOWN:Yl(d.code);return new H(g,d.message||"")}(a);t=new Jl(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Os(n,r.document.name),o=Vn(r.document.updateTime),a=r.document.createTime?Vn(r.document.createTime):Y.min(),l=new at({mapValue:{fields:r.document.fields}}),h=Le.newFoundDocument(i,o,a,l),d=r.targetIds||[],g=r.removedTargetIds||[];t=new Ni(d,g,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Os(n,r.document),o=r.readTime?Vn(r.readTime):Y.min(),a=Le.newNoDocument(i,o),l=r.removedTargetIds||[];t=new Ni([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Os(n,r.document),o=r.removedTargetIds||[];t=new Ni([],o,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new bp(i,o),l=r.targetId;t=new Ql(l,a)}}return t}function Fp(n,e){return{documents:[Zl(n,e.path)]}}function Up(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zl(n,i);const o=function(d){if(d.length!==0)return nu(ft.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(g=>function(S){return{field:Mn(S.field),direction:qp(S.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=co(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function jp(n){let e=Lp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ve(r===1);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let o=[];t.where&&(o=function(C){const S=tu(C);return S instanceof ft&&Vl(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(C){return C.map(S=>function(U){return new qi(Nn(U.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(S))}(t.orderBy));let l=null;t.limit&&(l=function(C){let S;return S=typeof C=="object"?C.value:C,rs(S)?null:S}(t.limit));let h=null;t.startAt&&(h=function(C){const S=!!C.before,P=C.values||[];return new Bi(P,S)}(t.startAt));let d=null;return t.endAt&&(d=function(C){const S=!C.before,P=C.values||[];return new Bi(P,S)}(t.endAt)),sp(e,i,a,o,l,"F",h,d)}function Bp(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nn(t.unaryFilter.field);return we.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Nn(t.unaryFilter.field);return we.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return we.create(Nn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(r=>tu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function qp(n){return Dp[n]}function $p(n){return Pp[n]}function Hp(n){return kp[n]}function Mn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return qe.fromServerFormat(n.fieldPath)}function nu(n){return n instanceof we?function(t){if(t.op==="=="){if(sc(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NAN"}};if(ic(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sc(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NAN"}};if(ic(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(t.field),op:$p(t.op),value:t.value}}}(n):n instanceof ft?function(t){const r=t.getFilters().map(i=>nu(i));return r.length===1?r[0]:{compositeFilter:{op:Hp(t.op),filters:r}}}(n):Q()}function ru(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ft{constructor(e,t,r,i,o=Y.min(),a=Y.min(),l=Pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zp{constructor(e){this.ct=e}}function Kp(n){const e=jp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?so(e,e.limit,"L"):e}/**
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
 */class Wp{constructor(){this.un=new Gp}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Bt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Gp{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new De(pe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(pe.comparator)).toArray()}}/**
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
 */class Wn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wn(0)}static kn(){return new Wn(-1)}}/**
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
 */class Yp{constructor(){this.changes=new Xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Qp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Jp{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&kr(r.mutation,i,xt.empty(),He.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const i=sn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Cr();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=$t();const a=Pr(),l=function(){return Pr()}();return t.forEach((h,d)=>{const g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof ls)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),kr(g.mutation,d,g.mutation.getFieldMask(),He.now())):a.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>{var C;return l.set(d,new Qp(g,(C=a.get(d))!==null&&C!==void 0?C:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Pr();let i=new ye((a,l)=>a-l),o=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let g=r.get(h)||xt.empty();g=l.applyToLocalView(d,g),r.set(h,g);const C=(i.get(l.batchId)||ne()).add(h);i=i.insert(l.batchId,C)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,g=h.value,C=$l();g.forEach(S=>{if(!o.has(S)){const P=Wl(t.get(S),r.get(S));P!==null&&C.set(S,P),o=o.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,C))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):op(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):k.resolve(sn());let l=-1,h=o;return a.next(d=>k.forEach(d,(g,C)=>(l<C.largestBatchId&&(l=C.largestBatchId),o.get(g)?k.resolve():this.remoteDocumentCache.getEntry(e,g).next(S=>{h=h.insert(g,S)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,ne())).next(g=>({batchId:l,changes:hp(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(r=>{let i=Cr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Cr();return this.indexManager.getCollectionParents(e,o).next(l=>k.forEach(l,h=>{const d=function(C,S){return new ss(S,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(g=>{g.forEach((C,S)=>{a=a.insert(C,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Le.newInvalidDocument(g)))});let l=Cr();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&kr(g.mutation,d,xt.empty(),He.now()),as(t,d)&&(l=l.insert(h,d))}),l})}}/**
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
 */class Xp{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Vn(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Kp(i.bundledQuery),readTime:Vn(i.readTime)}}(t)),k.resolve()}}/**
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
 */class Zp{constructor(){this.overlays=new ye(K.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=sn();return k.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const i=sn(),o=t.length+1,a=new K(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ye((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=sn(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const l=sn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>l.set(d,g)),!(l.size()>=i)););return k.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ap(t,r));let o=this.Ir.get(t);o===void 0&&(o=ne(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Oo{constructor(){this.Tr=new De(be.Er),this.dr=new De(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new K(new pe([])),r=new be(t,e),i=new be(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new K(new pe([])),r=new be(t,e),i=new be(t,e+1);let o=ne();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return K.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||K.comparator(e.key,t.key)}}/**
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
 */class tg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new De(be.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Tp(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new be(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(se);return t.forEach(i=>{const o=new be(i,0),a=new be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;K.isDocumentKey(o)||(o=o.child(""));const a=new be(new K(o),0);let l=new De(se);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.wr)),!0)},a),k.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ve(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,i=>{const o=new be(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new be(t,0),i=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ng{constructor(e){this.Mr=e,this.docs=function(){return new ye(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Le.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=$t();const a=t.path,l=new K(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||jf(Uf(g),r)<=0||(i.has(g.key)||as(t,g))&&(o=o.insert(g.key,g.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(e,t,r,i){Q()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rg(this)}getSize(e){return k.resolve(this.size)}}class rg extends Yp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class ig{constructor(e){this.persistence=e,this.Nr=new Xn(t=>Do(t),Po),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Oo,this.targetCount=0,this.kr=Wn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class sg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new bo(0),this.Kr=!1,this.Kr=!0,this.$r=new eg,this.referenceDelegate=e(this),this.Ur=new ig(this),this.indexManager=new Wp,this.remoteDocumentCache=function(i){return new ng(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new zp(t),this.Gr=new Xp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new tg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new og(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class og extends qf{constructor(e){super(),this.currentSequenceNumber=e}}class Vo{constructor(e){this.persistence=e,this.Jr=new Oo,this.Yr=null}static Zr(e){return new Vo(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Lo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ne(),i=ne();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Lo(e,t.fromCache,r,i)}}/**
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
 */class ag{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ld()?8:$f(xe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new ag;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Ar()<=Z.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(Ar()<=Z.DEBUG&&B("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ar()<=Z.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):k.resolve())}Yi(e,t){if(lc(t))return k.resolve(null);let r=ct(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=so(t,null,"F"),r=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=ne(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,l);return this.ns(t,d,a,h.readTime)?this.Yi(e,so(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return lc(t)||i.isEqual(Y.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?k.resolve(null):(Ar()<=Z.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kn(t)),this.rs(e,a,t,Ff(i,-1)).next(l=>l))})}ts(e,t){let r=new De(Bl(e));return t.forEach((i,o)=>{as(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Ar()<=Z.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",kn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Bt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class lg{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ye(se),this._s=new Xn(o=>Do(o),Po),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ug(n,e,t,r){return new lg(n,e,t,r)}async function iu(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=ne();for(const d of i){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function su(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function hg(n,e){const t=te(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((g,C)=>{const S=i.get(C);if(!S)return;l.push(t.Ur.removeMatchingKeys(o,g.removedDocuments,C).next(()=>t.Ur.addMatchingKeys(o,g.addedDocuments,C)));let P=S.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(C)!==null?P=P.withResumeToken(Pe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),i=i.insert(C,P),function(O,x,oe){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0}(S,P,g)&&l.push(t.Ur.updateTargetData(o,P))});let h=$t(),d=ne();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,g))}),l.push(dg(o,a,e.documentUpdates).next(g=>{h=g.Ps,d=g.Is})),!r.isEqual(Y.min())){const g=t.Ur.getLastRemoteSnapshotVersion(o).next(C=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(g)}return k.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function dg(n,e,t){let r=ne(),i=ne();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=$t();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(Y.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function fg(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,k.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function uo(n,e,t){const r=te(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!zr(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function wc(n,e,t){const r=te(n);let i=Y.min(),o=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,g){const C=te(h),S=C._s.get(g);return S!==void 0?k.resolve(C.os.get(S)):C.Ur.getTargetData(d,g)}(r,a,ct(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:Y.min(),t?o:ne())).next(l=>(pg(r,cp(e),l),{documents:l,Ts:o})))}function pg(n,e,t){let r=n.us.get(e)||Y.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Ec{constructor(){this.activeTargetIds=pp()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gg{constructor(){this.so=new Ec,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ec,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mg{_o(e){}shutdown(){}}/**
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
 */class Ic{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ci=null;function Vs(){return Ci===null?Ci=function(){return 268435456+Math.round(2147483648*Math.random())}():Ci++,"0x"+Ci.toString(16)}/**
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
 */const yg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _g{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ne="WebChannelConnection";class vg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const l=Vs(),h=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${l}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(g=>(B("RestConnection",`Received RPC '${t}' ${l}: `,g),g),g=>{throw $n("RestConnection",`RPC '${t}' ${l} failed with error: `,g,"url: ",h,"request:",i),g})}Lo(t,r,i,o,a,l){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=yg[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=Vs();return new Promise((a,l)=>{const h=new bl;h.setWithCredentials(!0),h.listenOnce(Sl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ki.NO_ERROR:const g=h.getResponseJson();B(Ne,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),a(g);break;case ki.TIMEOUT:B(Ne,`RPC '${e}' ${o} timed out`),l(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const C=h.getStatus();if(B(Ne,`RPC '${e}' ${o} failed with status:`,C,"response text:",h.getResponseText()),C>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const U=function(x){const oe=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(oe)>=0?oe:V.UNKNOWN}(P.status);l(new H(U,P.message))}else l(new H(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new H(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(Ne,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);B(Ne,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Vs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pl(),l=Dl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new Cl({})),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const g=o.join("");B(Ne,`Creating RPC '${e}' stream ${i}: ${g}`,h);const C=a.createWebChannel(g,h);let S=!1,P=!1;const U=new _g({Io:x=>{P?B(Ne,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(S||(B(Ne,`Opening RPC '${e}' stream ${i} transport.`),C.open(),S=!0),B(Ne,`RPC '${e}' stream ${i} sending:`,x),C.send(x))},To:()=>C.close()}),O=(x,oe,J)=>{x.listen(oe,X=>{try{J(X)}catch(ae){setTimeout(()=>{throw ae},0)}})};return O(C,br.EventType.OPEN,()=>{P||(B(Ne,`RPC '${e}' stream ${i} transport opened.`),U.yo())}),O(C,br.EventType.CLOSE,()=>{P||(P=!0,B(Ne,`RPC '${e}' stream ${i} transport closed`),U.So())}),O(C,br.EventType.ERROR,x=>{P||(P=!0,$n(Ne,`RPC '${e}' stream ${i} transport errored:`,x),U.So(new H(V.UNAVAILABLE,"The operation could not be completed")))}),O(C,br.EventType.MESSAGE,x=>{var oe;if(!P){const J=x.data[0];ve(!!J);const X=J,ae=X.error||((oe=X[0])===null||oe===void 0?void 0:oe.error);if(ae){B(Ne,`RPC '${e}' stream ${i} received error:`,ae);const Ee=ae.status;let ce=function(v){const w=_e[v];if(w!==void 0)return Yl(w)}(Ee),E=ae.message;ce===void 0&&(ce=V.INTERNAL,E="Unknown error status: "+Ee+" with message "+ae.message),P=!0,U.So(new H(ce,E)),C.close()}else B(Ne,`RPC '${e}' stream ${i} received:`,J),U.bo(J)}}),O(l,Rl.STAT_EVENT,x=>{x.stat===Zs.PROXY?B(Ne,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Zs.NOPROXY&&B(Ne,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{U.wo()},0),U}}function Ls(){return typeof document<"u"?document:null}/**
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
 */function ou(n){return new Mp(n,!0)}/**
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
 */class au{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class wg{constructor(e,t,r,i,o,a,l,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new au(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(It(t.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Eg extends wg{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=xp(this.serializer,e),r=function(o){if(!("targetChange"in o))return Y.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Vn(a.readTime):Y.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=vc(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=io(h)?{documents:Fp(o,h)}:{query:Up(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Op(o,a.resumeToken);const d=co(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=Np(o,a.snapshotVersion.toTimestamp());const d=co(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Bp(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=vc(this.serializer),t.removeTarget=e,this.a_(t)}}/**
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
 */class Ig extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,lo(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,lo(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Tg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(It(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Ag{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Gr(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=te(h);d.L_.add(4),await Wr(d),d.q_.set("Unknown"),d.L_.delete(4),await hs(d)}(this))})}),this.q_=new Tg(r,i)}}async function hs(n){if(Gr(n))for(const e of n.B_)await e(!0)}async function Wr(n){for(const e of n.B_)await e(!1)}function cu(n,e){const t=te(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jo(t)?Uo(t):Zn(t).r_()&&Fo(t,e))}function xo(n,e){const t=te(n),r=Zn(t);t.N_.delete(e),r.r_()&&lu(t,e),t.N_.size===0&&(r.r_()?r.o_():Gr(t)&&t.q_.set("Unknown"))}function Fo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zn(n).A_(e)}function lu(n,e){n.Q_.xe(e),Zn(n).R_(e)}function Uo(n){n.Q_=new Rp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Zn(n).start(),n.q_.v_()}function jo(n){return Gr(n)&&!Zn(n).n_()&&n.N_.size>0}function Gr(n){return te(n).L_.size===0}function uu(n){n.Q_=void 0}async function bg(n){n.q_.set("Online")}async function Cg(n){n.N_.forEach((e,t)=>{Fo(n,e)})}async function Sg(n,e){uu(n),jo(n)?(n.q_.M_(e),Uo(n)):n.q_.set("Unknown")}async function Rg(n,e,t){if(n.q_.set("Online"),e instanceof Jl&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tc(n,r)}else if(e instanceof Ni?n.Q_.Ke(e):e instanceof Ql?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Y.min()))try{const r=await su(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(d);g&&o.N_.set(d,g.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(Pe.EMPTY_BYTE_STRING,g.snapshotVersion)),lu(o,h);const C=new Ft(g.target,h,d,g.sequenceNumber);Fo(o,C)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Tc(n,r)}}async function Tc(n,e,t){if(!zr(e))throw e;n.L_.add(1),await Wr(n),n.q_.set("Offline"),t||(t=()=>su(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await hs(n)})}async function Ac(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Gr(t);t.L_.add(3),await Wr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await hs(t)}async function Dg(n,e){const t=te(n);e?(t.L_.delete(2),await hs(t)):e||(t.L_.add(2),await Wr(t),t.q_.set("Unknown"))}function Zn(n){return n.K_||(n.K_=function(t,r,i){const o=te(t);return o.w_(),new Eg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:bg.bind(null,n),Ro:Cg.bind(null,n),mo:Sg.bind(null,n),d_:Rg.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),jo(n)?Uo(n):n.q_.set("Unknown")):(await n.K_.stop(),uu(n))})),n.K_}/**
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
 */class Bo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Bo(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hu(n,e){if(It("AsyncQueue",`${e}: ${n}`),zr(n))return new H(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ln{constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=Cr(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new Ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ln)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ln;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bc{constructor(){this.W_=new ye(K.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Gn{constructor(e,t,r,i,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Gn(e,t,Ln.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&os(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Pg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kg{constructor(){this.queries=Cc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=te(t),o=i.queries;i.queries=Cc(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Cc(){return new Xn(n=>jl(n),os)}async function Mg(n,e){const t=te(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new Pg,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=hu(a,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&qo(t)}async function Ng(n,e){const t=te(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Og(n,e){const t=te(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&qo(t)}function Vg(n,e,t){const r=te(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function qo(n){n.Y_.forEach(e=>{e.next()})}var ho,Sc;(Sc=ho||(ho={})).ea="default",Sc.Cache="cache";class Lg{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ho.Cache}}/**
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
 */class du{constructor(e){this.key=e}}class fu{constructor(e){this.key=e}}class xg{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=Bl(e),this.Ra=new Ln(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new bc,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((g,C)=>{const S=i.get(g),P=as(this.query,C)?C:null,U=!!S&&this.mutatedKeys.has(S.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let x=!1;S&&P?S.data.isEqual(P.data)?U!==O&&(r.track({type:3,doc:P}),x=!0):this.ga(S,P)||(r.track({type:2,doc:P}),x=!0,(h&&this.Aa(P,h)>0||d&&this.Aa(P,d)<0)&&(l=!0)):!S&&P?(r.track({type:0,doc:P}),x=!0):S&&!P&&(r.track({type:1,doc:S}),x=!0,(h||d)&&(l=!0)),x&&(P?(a=a.add(P),o=O?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((g,C)=>function(P,U){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return O(P)-O(U)}(g.type,C.type)||this.Aa(g.doc,C.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Gn(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new fu(r))}),this.da.forEach(r=>{e.has(r)||t.push(new du(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Gn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Fg{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ug{constructor(e){this.key=e,this.va=!1}}class jg{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Xn(l=>jl(l),os),this.Ma=new Map,this.xa=new Set,this.Oa=new ye(K.comparator),this.Na=new Map,this.La=new Oo,this.Ba={},this.ka=new Map,this.qa=Wn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Bg(n,e,t=!0){const r=_u(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await pu(r,e,t,!0),i}async function qg(n,e){const t=_u(n);await pu(t,e,!0,!1)}async function pu(n,e,t,r){const i=await fg(n.localStore,ct(e)),o=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await $g(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&cu(n.remoteStore,i),l}async function $g(n,e,t,r,i){n.Ka=(C,S,P)=>async function(O,x,oe,J){let X=x.view.ma(oe);X.ns&&(X=await wc(O.localStore,x.query,!1).then(({documents:E})=>x.view.ma(E,X)));const ae=J&&J.targetChanges.get(x.targetId),Ee=J&&J.targetMismatches.get(x.targetId)!=null,ce=x.view.applyChanges(X,O.isPrimaryClient,ae,Ee);return Dc(O,x.targetId,ce.wa),ce.snapshot}(n,C,S,P);const o=await wc(n.localStore,e,!0),a=new xg(e,o.Ts),l=a.ma(o.documents),h=Kr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);Dc(n,t,d.wa);const g=new Fg(e,t,a);return n.Fa.set(e,g),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Hg(n,e,t){const r=te(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!os(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await uo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&xo(r.remoteStore,i.targetId),fo(r,i.targetId)}).catch(Ao)):(fo(r,i.targetId),await uo(r.localStore,i.targetId,!0))}async function zg(n,e){const t=te(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xo(t.remoteStore,r.targetId))}async function gu(n,e){const t=te(n);try{const r=await hg(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ve(a.va):i.removedDocuments.size>0&&(ve(a.va),a.va=!1))}),await yu(t,r,e)}catch(r){await Ao(r)}}function Rc(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=te(a);h.onlineState=l;let d=!1;h.queries.forEach((g,C)=>{for(const S of C.j_)S.Z_(l)&&(d=!0)}),d&&qo(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Kg(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new ye(K.comparator);a=a.insert(o,Le.newNoDocument(o,Y.min()));const l=ne().add(o),h=new us(Y.min(),new Map,new ye(se),a,l);await gu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),$o(r)}else await uo(r.localStore,e,!1).then(()=>fo(r,e,t)).catch(Ao)}function fo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||mu(n,r)})}function mu(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(xo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),$o(n))}function Dc(n,e,t){for(const r of t)r instanceof du?(n.La.addReference(r.key,e),Wg(n,r)):r instanceof fu?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||mu(n,r.key)):Q()}function Wg(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),$o(n))}function $o(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new K(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new Ug(t)),n.Oa=n.Oa.insert(t,r),cu(n.remoteStore,new Ft(ct(Ul(t.path)),r,"TargetPurposeLimboResolution",bo.oe))}}async function yu(n,e,t){const r=te(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,e,t).then(d=>{var g;if((d||t)&&r.isPrimaryClient){const C=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,C?"current":"not-current")}if(d){i.push(d);const C=Lo.Wi(h.targetId,d);o.push(C)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const g=te(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>k.forEach(d,S=>k.forEach(S.$i,P=>g.persistence.referenceDelegate.addReference(C,S.targetId,P)).next(()=>k.forEach(S.Ui,P=>g.persistence.referenceDelegate.removeReference(C,S.targetId,P)))))}catch(C){if(!zr(C))throw C;B("LocalStore","Failed to update sequence numbers: "+C)}for(const C of d){const S=C.targetId;if(!C.fromCache){const P=g.os.get(S),U=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(U);g.os=g.os.insert(S,O)}}}(r.localStore,o))}async function Gg(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await iu(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new H(V.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yu(t,r.hs)}}function Yg(n,e){const t=te(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function _u(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kg.bind(null,e),e.Ca.d_=Og.bind(null,e.eventManager),e.Ca.$a=Vg.bind(null,e.eventManager),e}class Pc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ou(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ug(this.persistence,new cg,e.initialUser,this.serializer)}createPersistence(e){return new sg(Vo.Zr,this.serializer)}createSharedClientState(e){return new gg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gg.bind(null,this.syncEngine),await Dg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kg}()}createDatastore(e){const t=ou(e.databaseInfo.databaseId),r=function(o){return new vg(o)}(e.databaseInfo);return function(o,a,l,h){return new Ig(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new Ag(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Rc(this.syncEngine,t,0),function(){return Ic.D()?new Ic:new mg}())}createSyncEngine(e,t){return function(i,o,a,l,h,d,g){const C=new jg(i,o,a,l,h,d);return g&&(C.Qa=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=te(i);B("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Wr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
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
 *//**
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
 */class Jg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Xg{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=hu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xs(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iu(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await em(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ac(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ac(e.remoteStore,i)),n._onlineComponents=e}function Zg(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function em(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await xs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Zg(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await xs(n,new Pc)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await xs(n,new Pc);return n._offlineComponents}async function tm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await kc(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await kc(n,new Qg))),n._onlineComponents}async function nm(n){const e=await tm(n),t=e.eventManager;return t.onListen=Bg.bind(null,e.syncEngine),t.onUnlisten=Hg.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qg.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zg.bind(null,e.syncEngine),t}function rm(n,e,t={}){const r=new cn;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const g=new Jg({next:S=>{a.enqueueAndForget(()=>Ng(o,C)),S.fromCache&&h.source==="server"?d.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(S)},error:S=>d.reject(S)}),C=new Lg(l,g,{includeMetadataChanges:!0,_a:!0});return Mg(o,C)}(await nm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function vu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Mc=new Map;function im(n,e,t,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nc(n){if(K.isDocumentKey(n))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function po(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sm(n);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Oc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}im("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ho{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rf;switch(r.type){case"firstParty":return new Mf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Mc.get(t);r&&(B("ComponentProvider","Removing Datastore"),Mc.delete(t),r.terminate())}(this),Promise.resolve()}}function om(n,e,t,r={}){var i;const o=(n=po(n,Ho))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=Oe.MOCK_USER;else{l=id(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Oe(d)}n._authCredentials=new Df(new kl(l,h))}}/**
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
 */class ds{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class er{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new er(this.firestore,e,this._key)}}class xn extends ds{constructor(e,t,r){super(e,t,Ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new er(this.firestore,null,new K(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function am(n,e,...t){if(n=bt(n),n instanceof Ho){const r=pe.fromString(e,...t);return Nc(r),new xn(n,null,r)}{if(!(n instanceof er||n instanceof xn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Nc(r),new xn(n.firestore,null,r)}}/**
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
 */class cm{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new au(this,"async_queue_retry"),this.Eu=()=>{const t=Ls();t&&B("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=Ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=Ls();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new cn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!zr(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw It("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=t,t}enqueueAfterDelay(e,t,r){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const i=Bo.createAndSchedule(this,e,t,r,o=>this.Vu(o));return this.lu.push(i),i}du(){this.hu&&Q()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class wu extends Ho{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new cm}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eu(this),this._firestoreClient.terminate()}}function lm(n,e){const t=typeof n=="object"?n:Io(),r=typeof n=="string"?n:"(default)",i=_n(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=nd("firestore");o&&om(i,...o)}return i}function um(n){return n._firestoreClient||Eu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Eu(n){var e,t,r;const i=n._freezeSettings(),o=function(l,h,d,g){return new Kf(l,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,vu(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Xg(n._authCredentials,n._appCheckCredentials,n._queue,o),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zi(Pe.fromBase64String(e))}catch(t){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zi(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Iu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}const fm=new RegExp("[~\\*/\\[\\]]");function pm(n,e,t){if(e.search(fm)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Iu(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Vc(n,e,t,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new H(V.INVALID_ARGUMENT,o+n+a)}/**
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
 */class Tu{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new er(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Au("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gm extends Tu{data(){return super.data()}}function Au(n,e){return typeof e=="string"?pm(n,e):e instanceof Iu?e._internalPath:e._delegate._internalPath}/**
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
 */function mm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ym{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return is(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ge(a.doubleValue));return new dm(o)}convertGeoPoint(e){return new hm(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=So(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const t=qt(e);return new He(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);ve(ru(r));const i=new Ur(r.get(1),r.get(3)),o=new K(r.popFirst(5));return i.isEqual(t)||It(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class Si{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _m extends Tu{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Au("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Oi extends _m{data(e={}){return super.data(e)}}class vm{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Si(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Oi(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new Oi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Si(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Oi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Si(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,g=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:wm(l.type),doc:h,oldIndex:d,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Em extends ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new er(this.firestore,null,t)}}function Im(n){n=po(n,ds);const e=po(n.firestore,wu),t=um(e),r=new Em(e);return mm(n._query),rm(t,n._query).then(i=>new vm(e,r,n,i))}(function(e,t=!0){(function(i){Jn=i})(Qn),ht(new nt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new wu(new Pf(r.getProvider("auth-internal")),new Of(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(d.options.projectId,g)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Xe(Za,"4.7.1",e),Xe(Za,"4.7.1","esm2017")})();var Tm="firebase",Am="10.13.1";/**
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
 */Xe(Tm,Am,"app");const bu="@firebase/installations",zo="0.6.8";/**
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
 */const Cu=1e4,Su=`w:${zo}`,Ru="FIS_v2",bm="https://firebaseinstallations.googleapis.com/v1",Cm=60*60*1e3,Sm="installations",Rm="Installations";/**
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
 */const Dm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pn=new yn(Sm,Rm,Dm);function Du(n){return n instanceof rt&&n.code.includes("request-failed")}/**
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
 */function Pu({projectId:n}){return`${bm}/projects/${n}/installations`}function ku(n){return{token:n.token,requestStatus:2,expiresIn:km(n.expiresIn),creationTime:Date.now()}}async function Mu(n,e){const r=(await e.json()).error;return pn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Pm(n,{refreshToken:e}){const t=Nu(n);return t.append("Authorization",Mm(e)),t}async function Ou(n){const e=await n();return e.status>=500&&e.status<600?n():e}function km(n){return Number(n.replace("s","000"))}function Mm(n){return`${Ru} ${n}`}/**
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
 */async function Nm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Pu(n),i=Nu(n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:Ru,appId:n.appId,sdkVersion:Su},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Ou(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:ku(d.authToken)}}else throw await Mu("Create Installation",h)}/**
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
 */function Vu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Om(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vm=/^[cdef][\w-]{21}$/,go="";function Lm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=xm(n);return Vm.test(t)?t:go}catch{return go}}function xm(n){return Om(n).substr(0,22)}/**
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
 */function fs(n){return`${n.appName}!${n.appId}`}/**
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
 */const Lu=new Map;function xu(n,e){const t=fs(n);Fu(t,e),Fm(t,e)}function Fu(n,e){const t=Lu.get(n);if(t)for(const r of t)r(e)}function Fm(n,e){const t=Um();t&&t.postMessage({key:n,fid:e}),jm()}let on=null;function Um(){return!on&&"BroadcastChannel"in self&&(on=new BroadcastChannel("[Firebase] FID Change"),on.onmessage=n=>{Fu(n.data.key,n.data.fid)}),on}function jm(){Lu.size===0&&on&&(on.close(),on=null)}/**
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
 */const Bm="firebase-installations-database",qm=1,gn="firebase-installations-store";let Fs=null;function Ko(){return Fs||(Fs=wl(Bm,qm,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(gn)}}})),Fs}async function Ki(n,e){const t=fs(n),i=(await Ko()).transaction(gn,"readwrite"),o=i.objectStore(gn),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&xu(n,e.fid),e}async function Uu(n){const e=fs(n),r=(await Ko()).transaction(gn,"readwrite");await r.objectStore(gn).delete(e),await r.done}async function ps(n,e){const t=fs(n),i=(await Ko()).transaction(gn,"readwrite"),o=i.objectStore(gn),a=await o.get(t),l=e(a);return l===void 0?await o.delete(t):await o.put(l,t),await i.done,l&&(!a||a.fid!==l.fid)&&xu(n,l.fid),l}/**
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
 */async function Wo(n){let e;const t=await ps(n.appConfig,r=>{const i=$m(r),o=Hm(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===go?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function $m(n){const e=n||{fid:Lm(),registrationStatus:0};return ju(e)}function Hm(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zm(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Km(n)}:{installationEntry:e}}async function zm(n,e){try{const t=await Nm(n,e);return Ki(n.appConfig,t)}catch(t){throw Du(t)&&t.customData.serverCode===409?await Uu(n.appConfig):await Ki(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Km(n){let e=await Lc(n.appConfig);for(;e.registrationStatus===1;)await Vu(100),e=await Lc(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Wo(n);return r||t}return e}function Lc(n){return ps(n,e=>{if(!e)throw pn.create("installation-not-found");return ju(e)})}function ju(n){return Wm(n)?{fid:n.fid,registrationStatus:0}:n}function Wm(n){return n.registrationStatus===1&&n.registrationTime+Cu<Date.now()}/**
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
 */async function Gm({appConfig:n,heartbeatServiceProvider:e},t){const r=Ym(n,t),i=Pm(n,t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Su,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await Ou(()=>fetch(r,l));if(h.ok){const d=await h.json();return ku(d)}else throw await Mu("Generate Auth Token",h)}function Ym(n,{fid:e}){return`${Pu(n)}/${e}/authTokens:generate`}/**
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
 */async function Go(n,e=!1){let t;const r=await ps(n.appConfig,o=>{if(!Bu(o))throw pn.create("not-registered");const a=o.authToken;if(!e&&Xm(a))return o;if(a.requestStatus===1)return t=Qm(n,e),o;{if(!navigator.onLine)throw pn.create("app-offline");const l=ey(o);return t=Jm(n,l),l}});return t?await t:r.authToken}async function Qm(n,e){let t=await xc(n.appConfig);for(;t.authToken.requestStatus===1;)await Vu(100),t=await xc(n.appConfig);const r=t.authToken;return r.requestStatus===0?Go(n,e):r}function xc(n){return ps(n,e=>{if(!Bu(e))throw pn.create("not-registered");const t=e.authToken;return ty(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Jm(n,e){try{const t=await Gm(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ki(n.appConfig,r),t}catch(t){if(Du(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Uu(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ki(n.appConfig,r)}throw t}}function Bu(n){return n!==void 0&&n.registrationStatus===2}function Xm(n){return n.requestStatus===2&&!Zm(n)}function Zm(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Cm}function ey(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ty(n){return n.requestStatus===1&&n.requestTime+Cu<Date.now()}/**
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
 */async function ny(n){const e=n,{installationEntry:t,registrationPromise:r}=await Wo(e);return r?r.catch(console.error):Go(e).catch(console.error),t.fid}/**
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
 */async function ry(n,e=!1){const t=n;return await iy(t),(await Go(t,e)).token}async function iy(n){const{registrationPromise:e}=await Wo(n);e&&await e}/**
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
 */function sy(n){if(!n||!n.options)throw Us("App Configuration");if(!n.name)throw Us("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Us(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Us(n){return pn.create("missing-app-config-values",{valueName:n})}/**
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
 */const qu="installations",oy="installations-internal",ay=n=>{const e=n.getProvider("app").getImmediate(),t=sy(e),r=_n(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cy=n=>{const e=n.getProvider("app").getImmediate(),t=_n(e,qu).getImmediate();return{getId:()=>ny(t),getToken:i=>ry(t,i)}};function ly(){ht(new nt(qu,ay,"PUBLIC")),ht(new nt(oy,cy,"PRIVATE"))}ly();Xe(bu,zo);Xe(bu,zo,"esm2017");/**
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
 */const Wi="analytics",uy="firebase_id",hy="origin",dy=60*1e3,fy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yo="https://www.googletagmanager.com/gtag/js";/**
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
 */const ze=new ns("@firebase/analytics");/**
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
 */const py={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new yn("analytics","Analytics",py);/**
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
 */function gy(n){if(!n.startsWith(Yo)){const e=Qe.create("invalid-gtag-resource",{gtagURL:n});return ze.warn(e.message),""}return n}function $u(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function my(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function yy(n,e){const t=my("firebase-js-sdk-policy",{createScriptURL:gy}),r=document.createElement("script"),i=`${Yo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function _y(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function vy(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const h=(await $u(t)).find(d=>d.measurementId===i);h&&await e[h.appId]}}catch(l){ze.error(l)}n("config",i,o)}async function wy(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await $u(t);for(const h of a){const d=l.find(C=>C.measurementId===h),g=d&&e[d.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){ze.error(o)}}function Ey(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await wy(n,e,t,l,h)}else if(o==="config"){const[l,h]=a;await vy(n,e,t,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){ze.error(l)}}return i}function Iy(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Ey(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function Ty(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Yo)&&t.src.includes(n))return t;return null}/**
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
 */const Ay=30,by=1e3;class Cy{constructor(e={},t=by){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hu=new Cy;function Sy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ry(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:Sy(r)},o=fy.replace("{app-id}",t),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(l=h.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Dy(n,e=Hu,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Qe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Qe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new My;return setTimeout(async()=>{l.abort()},dy),zu({appId:r,apiKey:i,measurementId:o},a,l,e)}async function zu(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Hu){var o;const{appId:a,measurementId:l}=n;try{await Py(r,e)}catch(h){if(l)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await Ry(n);return i.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!ky(d)){if(i.deleteThrottleMetadata(a),l)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw h}const g=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?$a(t,i.intervalMillis,Ay):$a(t,i.intervalMillis),C={throttleEndTimeMillis:Date.now()+g,backoffCount:t+1};return i.setThrottleMetadata(a,C),ze.debug(`Calling attemptFetch again in ${g} millis`),zu(n,C,r,i)}}function Py(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ky(n){if(!(n instanceof rt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class My{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ny(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a=Object.assign(Object.assign({},r),{send_to:o});n("event",t,a)}}/**
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
 */async function Oy(){if(ml())try{await yl()}catch(n){return ze.warn(Qe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ze.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vy(n,e,t,r,i,o,a){var l;const h=Dy(n);h.then(P=>{t[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>ze.error(P)),e.push(h);const d=Oy().then(P=>{if(P)return r.getId()}),[g,C]=await Promise.all([h,d]);Ty(o)||yy(o,g.measurementId),i("js",new Date);const S=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return S[hy]="firebase",S.update=!0,C!=null&&(S[uy]=C),i("config",g.measurementId,S),g.measurementId}/**
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
 */class Ly{constructor(e){this.app=e}_delete(){return delete Mr[this.app.options.appId],Promise.resolve()}}let Mr={},Fc=[];const Uc={};let js="dataLayer",xy="gtag",jc,Ku,Bc=!1;function Fy(){const n=[];if(gl()&&n.push("This is a browser extension environment."),ud()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Qe.create("invalid-analytics-context",{errorInfo:e});ze.warn(t.message)}}function Uy(n,e,t){Fy();const r=n.options.appId;if(!r)throw Qe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(Mr[r]!=null)throw Qe.create("already-exists",{id:r});if(!Bc){_y(js);const{wrappedGtag:o,gtagCore:a}=Iy(Mr,Fc,Uc,js,xy);Ku=o,jc=a,Bc=!0}return Mr[r]=Vy(n,Fc,Uc,e,jc,js,t),new Ly(n)}function jy(n=Io()){n=bt(n);const e=_n(n,Wi);return e.isInitialized()?e.getImmediate():By(n)}function By(n,e={}){const t=_n(n,Wi);if(t.isInitialized()){const i=t.getImmediate();if(Vr(e,t.getOptions()))return i;throw Qe.create("already-initialized")}return t.initialize({options:e})}function qy(n,e,t,r){n=bt(n),Ny(Ku,Mr[n.app.options.appId],e,t,r).catch(i=>ze.error(i))}const qc="@firebase/analytics",$c="0.10.7";function $y(){ht(new nt(Wi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Uy(r,i,t)},"PUBLIC")),ht(new nt("analytics-internal",n,"PRIVATE")),Xe(qc,$c),Xe(qc,$c,"esm2017");function n(e){try{const t=e.getProvider(Wi).getImmediate();return{logEvent:(r,i,o)=>qy(t,r,i,o)}}catch(t){throw Qe.create("interop-component-reg-failed",{reason:t})}}}$y();function Qo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Wu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hy=Wu,Gu=new yn("auth","Firebase",Wu());/**
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
 */const Gi=new ns("@firebase/auth");function zy(n,...e){Gi.logLevel<=Z.WARN&&Gi.warn(`Auth (${Qn}): ${n}`,...e)}function Vi(n,...e){Gi.logLevel<=Z.ERROR&&Gi.error(`Auth (${Qn}): ${n}`,...e)}/**
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
 */function Tt(n,...e){throw Jo(n,...e)}function lt(n,...e){return Jo(n,...e)}function Yu(n,e,t){const r=Object.assign(Object.assign({},Hy()),{[e]:t});return new yn("auth","Firebase",r).create(e,{appName:n.name})}function un(n){return Yu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gu.create(n,...e)}function W(n,e,...t){if(!n)throw Jo(e,...t)}function _t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vi(e),new Error(e)}function At(n,e){n||_t(e)}/**
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
 */function mo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ky(){return Hc()==="http:"||Hc()==="https:"}function Hc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Wy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ky()||gl()||"connection"in navigator)?navigator.onLine:!0}function Gy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yr{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=sd()||ad()}get(){return Wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xo(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qy=new Yr(3e4,6e4);function Zo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tr(n,e,t,r,i={}){return Ju(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Hr(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),Qu.fetch()(Xu(n,n.config.apiHost,t,l),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function Ju(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yy),e);try{const i=new Xy(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ri(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ri(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ri(n,"user-disabled",a);const g=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Yu(n,g,d);Tt(n,g)}}catch(i){if(i instanceof rt)throw i;Tt(n,"network-request-failed",{message:String(i)})}}async function Jy(n,e,t,r,i={}){const o=await tr(n,e,t,r,i);return"mfaPendingCredential"in o&&Tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Xu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Xo(n.config,i):`${n.config.apiScheme}://${i}`}class Xy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),Qy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=lt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Zy(n,e){return tr(n,"POST","/v1/accounts:delete",e)}async function Zu(n,e){return tr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e_(n,e=!1){const t=bt(n),r=await t.getIdToken(e),i=ea(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Nr(Bs(i.auth_time)),issuedAtTime:Nr(Bs(i.iat)),expirationTime:Nr(Bs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Bs(n){return Number(n)*1e3}function ea(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=hl(t);return i?JSON.parse(i):(Vi("Failed to decode base64 JWT payload"),null)}catch(i){return Vi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zc(n){const e=ea(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Br(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&t_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function t_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class n_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Br(n,Zu(t,{idToken:r}));W(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?eh(o.providerUserInfo):[],l=i_(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),g=h?d:!1,C={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new yo(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(n,C)}async function r_(n){const e=bt(n);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eh(n){return n.map(e=>{var{providerId:t}=e,r=Qo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function s_(n,e){const t=await Ju(n,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Xu(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function o_(n,e){return tr(n,"POST","/v2/accounts:revokeToken",Zo(n,e))}/**
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
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await s_(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Fn;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(W(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
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
 */function kt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Br(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e_(this,e)}reload(){return r_(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Br(this,Zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,h,d,g;const C=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(i=t.email)!==null&&i!==void 0?i:void 0,P=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,U=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(l=t.tenantId)!==null&&l!==void 0?l:void 0,x=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,oe=(d=t.createdAt)!==null&&d!==void 0?d:void 0,J=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:X,emailVerified:ae,isAnonymous:Ee,providerData:ce,stsTokenManager:E}=t;W(X&&E,e,"internal-error");const y=Fn.fromJSON(this.name,E);W(typeof X=="string",e,"internal-error"),kt(C,e.name),kt(S,e.name),W(typeof ae=="boolean",e,"internal-error"),W(typeof Ee=="boolean",e,"internal-error"),kt(P,e.name),kt(U,e.name),kt(O,e.name),kt(x,e.name),kt(oe,e.name),kt(J,e.name);const v=new vt({uid:X,auth:e,email:S,emailVerified:ae,displayName:C,isAnonymous:Ee,photoURL:U,phoneNumber:P,tenantId:O,stsTokenManager:y,createdAt:oe,lastLoginAt:J});return ce&&Array.isArray(ce)&&(v.providerData=ce.map(w=>Object.assign({},w))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new Fn;i.updateFromServerResponse(t);const o=new vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yi(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];W(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?eh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Fn;l.updateFromIdToken(r);const h=new vt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const Kc=new Map;function wt(n){At(n instanceof Function,"Expected a class definition");let e=Kc.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kc.set(n,e),e)}/**
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
 */class th{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}th.type="NONE";const Wc=th;/**
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
 */function Li(n,e,t){return`firebase:${n}:${e}:${t}`}class Un{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,o),this.fullPersistenceKey=Li("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Un(wt(Wc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||wt(Wc);const a=Li(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const g=await d._get(a);if(g){const C=vt._fromJSON(e,g);d!==o&&(l=C),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Un(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Un(o,e,r))}}/**
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
 */function Gc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ah(e))return"Blackberry";if(ch(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||ih(e))&&!e.includes("edge/"))return"Chrome";if(oh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nh(n=xe()){return/firefox\//i.test(n)}function rh(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ih(n=xe()){return/crios\//i.test(n)}function sh(n=xe()){return/iemobile/i.test(n)}function oh(n=xe()){return/android/i.test(n)}function ah(n=xe()){return/blackberry/i.test(n)}function ch(n=xe()){return/webos/i.test(n)}function ta(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function a_(n=xe()){var e;return ta(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c_(){return cd()&&document.documentMode===10}function lh(n=xe()){return ta(n)||oh(n)||ch(n)||ah(n)||/windows phone/i.test(n)||sh(n)}/**
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
 */function uh(n,e=[]){let t;switch(n){case"Browser":t=Gc(xe());break;case"Worker":t=`${Gc(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qn}/${r}`}/**
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
 */class l_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function u_(n,e={}){return tr(n,"GET","/v2/passwordPolicy",Zo(n,e))}/**
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
 */const h_=6;class d_{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:h_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class f_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yc(this),this.idTokenSubscription=new Yc(this),this.beforeStateQueue=new l_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zu(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Lt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(un(this));const t=e?bt(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u_(this),t=new d_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await o_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function na(n){return bt(n)}class Yc{constructor(e){this.auth=e,this.observer=null,this.addObserver=gd(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p_(n){ra=n}function g_(n){return ra.loadJS(n)}function m_(){return ra.gapiScript}function y_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function __(n,e){const t=_n(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Vr(o,e??{}))return i;Tt(i,"already-initialized")}return t.initialize({options:e})}function v_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function w_(n,e,t){const r=na(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=hh(e),{host:a,port:l}=E_(e),h=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),I_()}function hh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function E_(n){const e=hh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Qc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Qc(a)}}}function Qc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function I_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class dh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,t){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}/**
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
 */async function jn(n,e){return Jy(n,"POST","/v1/accounts:signInWithIdp",Zo(n,e))}/**
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
 */const T_="http://localhost";class mn extends dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Qo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new mn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:T_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hr(t)}return e}}/**
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
 */class fh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qr extends fh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mt extends Qr{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends Qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Nt.credential(t,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Ot extends Qr{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Vt extends Qr{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vt.credential(t,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */class Yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await vt._fromIdTokenResponse(e,r,i),a=Jc(r);return new Yn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Jc(r);return new Yn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Jc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qi extends rt{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Qi(e,t,r,i)}}function ph(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(n,o,e,r):o})}async function A_(n,e,t=!1){const r=await Br(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yn._forOperation(n,"link",r)}/**
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
 */async function b_(n,e,t=!1){const{auth:r}=n;if(Lt(r.app))return Promise.reject(un(r));const i="reauthenticate";try{const o=await Br(n,ph(r,i,e,n),t);W(o.idToken,r,"internal-error");const a=ea(o.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),Yn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),o}}/**
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
 */async function C_(n,e,t=!1){if(Lt(n.app))return Promise.reject(un(n));const r="signIn",i=await ph(n,r,e),o=await Yn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function S_(n,e,t,r){return bt(n).onIdTokenChanged(e,t,r)}function R_(n,e,t){return bt(n).beforeAuthStateChanged(e,t)}const Ji="__sak";/**
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
 */class gh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const D_=1e3,P_=10;class mh extends gh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);c_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,P_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mh.type="LOCAL";const k_=mh;/**
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
 */class yh extends gh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yh.type="SESSION";const _h=yh;/**
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
 */function M_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await M_(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gs.receivers=[];/**
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
 */function ia(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class N_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=ia("",20);i.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(C){const S=C;if(S.data.eventId===d)switch(S.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(S.data.response);break;default:clearTimeout(g),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ut(){return window}function O_(n){ut().location.href=n}/**
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
 */function vh(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function x_(){return vh()?self:null}/**
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
 */const wh="firebaseLocalStorageDb",F_=1,Xi="firebaseLocalStorage",Eh="fbase_key";class Jr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ms(n,e){return n.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function U_(){const n=indexedDB.deleteDatabase(wh);return new Jr(n).toPromise()}function _o(){const n=indexedDB.open(wh,F_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xi,{keyPath:Eh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xi)?e(r):(r.close(),await U_(),e(await _o()))})})}async function Xc(n,e,t){const r=ms(n,!0).put({[Eh]:e,value:t});return new Jr(r).toPromise()}async function j_(n,e){const t=ms(n,!1).get(e),r=await new Jr(t).toPromise();return r===void 0?null:r.value}function Zc(n,e){const t=ms(n,!0).delete(e);return new Jr(t).toPromise()}const B_=800,q_=3;class Ih{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _o(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gs._getInstance(x_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new N_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _o();return await Xc(e,Ji,"1"),await Zc(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>j_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ms(i,!1).getAll();return new Jr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ih.type="LOCAL";const $_=Ih;new Yr(3e4,6e4);/**
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
 */function H_(n,e){return e?wt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sa extends dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function z_(n){return C_(n.auth,new sa(n),n.bypassAuthState)}function K_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),b_(t,new sa(n),n.bypassAuthState)}async function W_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),A_(t,new sa(n),n.bypassAuthState)}/**
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
 */class Th{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return z_;case"linkViaPopup":case"linkViaRedirect":return W_;case"reauthViaPopup":case"reauthViaRedirect":return K_;default:Tt(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const G_=new Yr(2e3,1e4);class On extends Th{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,G_.get())};e()}}On.currentPopupAction=null;/**
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
 */const Y_="pendingRedirect",xi=new Map;class Q_ extends Th{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const r=await J_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J_(n,e){const t=ev(e),r=Z_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function X_(n,e){xi.set(n._key(),e)}function Z_(n){return wt(n._redirectPersistence)}function ev(n){return Li(Y_,n.config.apiKey,n.name)}async function tv(n,e,t=!1){if(Lt(n.app))return Promise.reject(un(n));const r=na(n),i=H_(r,e),a=await new Q_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const nv=10*60*1e3;class rv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ah(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(lt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nv&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(e))}saveEventToCache(e){this.cachedEventUids.add(el(e)),this.lastProcessedEventTime=Date.now()}}function el(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ah({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ah(n);default:return!1}}/**
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
 */async function sv(n,e={}){return tr(n,"GET","/v1/projects",e)}/**
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
 */const ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,av=/^https?/;async function cv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sv(n);for(const t of e)try{if(lv(t))return}catch{}Tt(n,"unauthorized-domain")}function lv(n){const e=mo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!av.test(t))return!1;if(ov.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uv=new Yr(3e4,6e4);function tl(){const n=ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hv(n){return new Promise((e,t)=>{var r,i,o;function a(){tl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tl(),t(lt(n,"network-request-failed"))},timeout:uv.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ut().gapi)===null||o===void 0)&&o.load)a();else{const l=y_("iframefcb");return ut()[l]=()=>{gapi.load?a():t(lt(n,"network-request-failed"))},g_(`${m_()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function dv(n){return Fi=Fi||hv(n),Fi}/**
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
 */const fv=new Yr(5e3,15e3),pv="__/auth/iframe",gv="emulator/auth/iframe",mv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _v(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xo(e,gv):`https://${n.config.authDomain}/${pv}`,r={apiKey:e.apiKey,appName:n.name,v:Qn},i=yv.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Hr(r).slice(1)}`}async function vv(n){const e=await dv(n),t=ut().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:_v(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mv,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=lt(n,"network-request-failed"),l=ut().setTimeout(()=>{o(a)},fv.get());function h(){ut().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const wv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ev=500,Iv=600,Tv="_blank",Av="http://localhost";class nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bv(n,e,t,r=Ev,i=Iv){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},wv),{width:r.toString(),height:i.toString(),top:o,left:a}),d=xe().toLowerCase();t&&(l=ih(d)?Tv:t),nh(d)&&(e=e||Av,h.scrollbars="yes");const g=Object.entries(h).reduce((S,[P,U])=>`${S}${P}=${U},`,"");if(a_(d)&&l!=="_self")return Cv(e||"",l),new nl(null);const C=window.open(e||"",l,g);W(C,n,"popup-blocked");try{C.focus()}catch{}return new nl(C)}function Cv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Sv="__/auth/handler",Rv="emulator/auth/handler",Dv=encodeURIComponent("fac");async function rl(n,e,t,r,i,o){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qn,eventId:i};if(e instanceof fh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",pd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,C]of Object.entries({}))a[g]=C}if(e instanceof Qr){const g=e.getScopes().filter(C=>C!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const h=await n._getAppCheckToken(),d=h?`#${Dv}=${encodeURIComponent(h)}`:"";return`${Pv(n)}?${Hr(l).slice(1)}${d}`}function Pv({config:n}){return n.emulator?Xo(n,Rv):`https://${n.authDomain}/${Sv}`}/**
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
 */const qs="webStorageSupport";class kv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_h,this._completeRedirectFn=tv,this._overrideRedirectResult=X_}async _openPopup(e,t,r,i){var o;At((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await rl(e,t,r,mo(),i);return bv(e,a,ia())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await rl(e,t,r,mo(),i);return O_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(At(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await vv(e),r=new rv(e);return t.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qs,{type:qs},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[qs];a!==void 0&&t(!!a),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lh()||rh()||ta()}}const Mv=kv;var il="@firebase/auth",sl="1.7.8";/**
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
 */class Nv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ov(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vv(n){ht(new nt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uh(n)},d=new f_(r,i,o,h);return v_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ht(new nt("auth-internal",e=>{const t=na(e.getProvider("auth").getImmediate());return(r=>new Nv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(il,sl,Ov(n)),Xe(il,sl,"esm2017")}/**
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
 */const Lv=5*60,xv=pl("authIdTokenMaxAge")||Lv;let ol=null;const Fv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>xv)return;const i=t==null?void 0:t.token;ol!==i&&(ol=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Uv(n=Io()){const e=_n(n,"auth");if(e.isInitialized())return e.getImmediate();const t=__(n,{popupRedirectResolver:Mv,persistence:[$_,k_,_h]}),r=pl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Fv(o.toString());R_(t,a,()=>a(t.currentUser)),S_(t,l=>a(l))}}const i=dl("auth");return i&&w_(t,`http://${i}`),t}function jv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}p_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=lt("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",jv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vv("Browser");const Bv={apiKey:"AIzaSyA0nmsRqOpSPYvSGHiUkscGTCpfXCFElAQ",authDomain:"bakunavi-0317.firebaseapp.com",projectId:"bakunavi-0317",storageBucket:"bakunavi-0317.appspot.com",messagingSenderId:"502891540501",appId:"1:502891540501:web:692fe3da0db1ebf86f5e1c",measurementId:"G-W3L78BFQY8"},oa=El(Bv);jy(oa);const qv=lm(oa);Uv(oa);const nn=class nn{constructor(){$(this,"_eventsCache",[])}static getInstance(){return nn.instance||(nn.instance=new nn),nn.instance}updateInfoCard(e=this._eventsCache){Zi.getInstance().inputData(e)}set eventsCache(e){this._eventsCache=e,this.updateInfoCard()}get eventsCache(){return this._eventsCache}filterEvents(e){const t=this._eventsCache.filter(e);this.updateInfoCard(t)}};$(nn,"instance");let qr=nn;async function $v(){const n=am(qv,"events"),e=await Im(n);qr.getInstance().eventsCache=e.docs.map(t=>({id:t.id,...t.data()}))}class Hv{constructor(e){$(this,"insert");$(this,"templateItem");$(this,"templateList");$(this,"templateCount",null);this.insert=document.querySelector(e),this.insert?(this.templateItem=this.insert.querySelector(".js-template-item"),this.templateList=this.insert.querySelector(".js-template-list"),this.templateCount=this.insert.querySelector(".js-template-count")):(this.templateItem=null,this.templateList=null)}insertData(e){this.templateItem&&this.templateList&&(this.templateList.innerHTML="",e.forEach((t,r)=>{this.templateCount&&(this.templateCount.textContent=e.length.toString());const i=this.templateItem.content.cloneNode(!0),o=t.opening_time.seconds,a=new Date(o*1e3),l=t.start_time.seconds,h=new Date(l*1e3),d=["日","月","火","水","木","金","土"],g=`${a.getFullYear()}年${a.getMonth()+1}月${a.getDate()}日(${d[a.getDay()]})`,C=`${a.getHours().toString().padStart(2,"0")}:${a.getMinutes().toString().padStart(2,"0")}`,S=`${h.getHours().toString().padStart(2,"0")}:${h.getMinutes().toString().padStart(2,"0")}`,P=i.querySelector(".js-template-item-eventDate");P.textContent=g;const U=i.querySelector(".js-template-item-eventName");U.textContent=t.event_name;const O=i.querySelector(".js-template-item-eventer");O.textContent=t.eventer;const x=i.querySelector(".js-template-item-currentFee");x.textContent=t.current_day_fee;const oe=i.querySelector(".js-template-item-fee");oe.textContent=t.pre_ordered_fee;const J=i.querySelector(".js-template-item-ticketUrl");J&&(J.href=t.ticket_url);const X=i.querySelector(".js-template-item-area");X.textContent=t.location.area;const ae=i.querySelector(".js-template-item-venue");ae.textContent=t.location.venue;const Ee=i.querySelector(".js-template-item-open");Ee.textContent=C,i.querySelectorAll(".js-template-item-start").forEach(w=>{w.textContent=S});const E=i.querySelector(".js-template-item-comedianItem"),y=i.querySelector(".js-template-comedianList");let v=1;t.comedians.forEach(w=>{const T=E.content.cloneNode(!0),A=T.querySelector(".js-template-item-comedian"),_=T.querySelector("[data-record]");if(_){const Fe=_.parentElement;if(Fe){const Ke=Fe.querySelector("[data-comedian]"),vn=Fe.querySelector("[data-record]");if(Ke&&vn){const it=`comedian-${r+1}-${v}`;vn.dataset.record=v.toString(),Ke.id=it,Ke.dataset.comedian=`comedian-${r+1}-${v}`,A.htmlFor=it,Ke.value=w,v++}}}A.textContent=w,y.appendChild(T)}),this.templateList.appendChild(i)}))}}const rn=class rn{constructor(){$(this,"dataInsert");this.dataInsert=new Hv(".js-dataInsert"),this.init()}init(){$v(),this.inputData()}static getInstance(){return rn.instance||(rn.instance=new rn),rn.instance}async inputData(e=qr.getInstance().eventsCache){try{this.dataInsert.insertData(e)}catch(t){console.error("Error fetching events:",t)}}};$(rn,"instance");let Zi=rn;class zv{constructor(e){$(this,"radioNode");$(this,"radios");$(this,"lastChecked",null);this.radioNode=e.radioNode,this.radios=this.radioNode.querySelectorAll(".js-radioCheck-radio"),this.init()}init(){this.cancelChecked()}cancelChecked(){this.radios.forEach(e=>{e.addEventListener("click",()=>{this.lastChecked===e?(e.checked=!1,this.lastChecked=null):this.lastChecked=e})})}}class Kv{constructor(e){$(this,"rangeNode");$(this,"rangeValue");$(this,"rangeSlider");this.rangeNode=e.rangeNode,this.rangeValue=this.rangeNode.querySelector(".js-modalBase-rangeValue"),this.rangeSlider=this.rangeNode.querySelector(".js-modalBase-rangeSlider"),this.init()}init(){this.initSlider(),this.changeText()}initSlider(){this.rangeSlider&&(this.rangeSlider.value=this.rangeSlider.max)}changeText(){if(this.rangeSlider&&this.rangeValue){const e=()=>{const t=this.rangeValue.nextElementSibling,r=this.rangeValue.previousElementSibling;if(this.rangeSlider.value===this.rangeSlider.max&&(this.rangeValue.textContent="上限なし",t&&!t.classList.contains("u-hidden")&&t.classList.add("u-hidden")),this.rangeSlider.value===this.rangeSlider.min&&(this.rangeValue.textContent="無料",t&&!t.classList.contains("u-hidden")&&t.classList.add("u-hidden"),r&&!r.classList.contains("u-hidden")&&r.classList.add("u-hidden")),this.rangeSlider.value!==this.rangeSlider.max&&this.rangeSlider.value!==this.rangeSlider.min){const o=parseInt(this.rangeSlider.value,10).toLocaleString("ja-JP");this.rangeValue.textContent=`${o}`,t&&t.classList.contains("u-hidden")&&t.classList.remove("u-hidden"),r&&r.classList.contains("u-hidden")&&r.classList.remove("u-hidden")}};e(),this.rangeSlider.addEventListener("input",e)}}}var $s=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],Bn={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(n){return typeof console<"u"&&console.warn(n)},getWeek:function(n){var e=new Date(n.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},$r={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var e=n%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},$e=function(n,e){return e===void 0&&(e=2),("000"+n).slice(e*-1)},Je=function(n){return n===!0?1:0};function al(n,e){var t;return function(){var r=this,i=arguments;clearTimeout(t),t=setTimeout(function(){return n.apply(r,i)},e)}}var Hs=function(n){return n instanceof Array?n:[n]};function Be(n,e,t){if(t===!0)return n.classList.add(e);n.classList.remove(e)}function ie(n,e,t){var r=window.document.createElement(n);return e=e||"",t=t||"",r.className=e,t!==void 0&&(r.textContent=t),r}function Di(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function bh(n,e){if(e(n))return n;if(n.parentNode)return bh(n.parentNode,e)}function Pi(n,e){var t=ie("div","numInputWrapper"),r=ie("input","numInput "+n),i=ie("span","arrowUp"),o=ie("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),e!==void 0)for(var a in e)r.setAttribute(a,e[a]);return t.appendChild(r),t.appendChild(i),t.appendChild(o),t}function Ge(n){try{if(typeof n.composedPath=="function"){var e=n.composedPath();return e[0]}return n.target}catch{return n.target}}var zs=function(){},es=function(n,e,t){return t.months[e?"shorthand":"longhand"][n]},Wv={D:zs,F:function(n,e,t){n.setMonth(t.months.longhand.indexOf(e))},G:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},H:function(n,e){n.setHours(parseFloat(e))},J:function(n,e){n.setDate(parseFloat(e))},K:function(n,e,t){n.setHours(n.getHours()%12+12*Je(new RegExp(t.amPM[1],"i").test(e)))},M:function(n,e,t){n.setMonth(t.months.shorthand.indexOf(e))},S:function(n,e){n.setSeconds(parseFloat(e))},U:function(n,e){return new Date(parseFloat(e)*1e3)},W:function(n,e,t){var r=parseInt(e),i=new Date(n.getFullYear(),0,2+(r-1)*7,0,0,0,0);return i.setDate(i.getDate()-i.getDay()+t.firstDayOfWeek),i},Y:function(n,e){n.setFullYear(parseFloat(e))},Z:function(n,e){return new Date(e)},d:function(n,e){n.setDate(parseFloat(e))},h:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},i:function(n,e){n.setMinutes(parseFloat(e))},j:function(n,e){n.setDate(parseFloat(e))},l:zs,m:function(n,e){n.setMonth(parseFloat(e)-1)},n:function(n,e){n.setMonth(parseFloat(e)-1)},s:function(n,e){n.setSeconds(parseFloat(e))},u:function(n,e){return new Date(parseFloat(e))},w:zs,y:function(n,e){n.setFullYear(2e3+parseFloat(e))}},tn={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Or={Z:function(n){return n.toISOString()},D:function(n,e,t){return e.weekdays.shorthand[Or.w(n,e,t)]},F:function(n,e,t){return es(Or.n(n,e,t)-1,!1,e)},G:function(n,e,t){return $e(Or.h(n,e,t))},H:function(n){return $e(n.getHours())},J:function(n,e){return e.ordinal!==void 0?n.getDate()+e.ordinal(n.getDate()):n.getDate()},K:function(n,e){return e.amPM[Je(n.getHours()>11)]},M:function(n,e){return es(n.getMonth(),!0,e)},S:function(n){return $e(n.getSeconds())},U:function(n){return n.getTime()/1e3},W:function(n,e,t){return t.getWeek(n)},Y:function(n){return $e(n.getFullYear(),4)},d:function(n){return $e(n.getDate())},h:function(n){return n.getHours()%12?n.getHours()%12:12},i:function(n){return $e(n.getMinutes())},j:function(n){return n.getDate()},l:function(n,e){return e.weekdays.longhand[n.getDay()]},m:function(n){return $e(n.getMonth()+1)},n:function(n){return n.getMonth()+1},s:function(n){return n.getSeconds()},u:function(n){return n.getTime()},w:function(n){return n.getDay()},y:function(n){return String(n.getFullYear()).substring(2)}},Ch=function(n){var e=n.config,t=e===void 0?Bn:e,r=n.l10n,i=r===void 0?$r:r,o=n.isMobile,a=o===void 0?!1:o;return function(l,h,d){var g=d||i;return t.formatDate!==void 0&&!a?t.formatDate(l,h,g):h.split("").map(function(C,S,P){return Or[C]&&P[S-1]!=="\\"?Or[C](l,g,t):C!=="\\"?C:""}).join("")}},vo=function(n){var e=n.config,t=e===void 0?Bn:e,r=n.l10n,i=r===void 0?$r:r;return function(o,a,l,h){if(!(o!==0&&!o)){var d=h||i,g,C=o;if(o instanceof Date)g=new Date(o.getTime());else if(typeof o!="string"&&o.toFixed!==void 0)g=new Date(o);else if(typeof o=="string"){var S=a||(t||Bn).dateFormat,P=String(o).trim();if(P==="today")g=new Date,l=!0;else if(t&&t.parseDate)g=t.parseDate(o,S);else if(/Z$/.test(P)||/GMT$/.test(P))g=new Date(o);else{for(var U=void 0,O=[],x=0,oe=0,J="";x<S.length;x++){var X=S[x],ae=X==="\\",Ee=S[x-1]==="\\"||ae;if(tn[X]&&!Ee){J+=tn[X];var ce=new RegExp(J).exec(o);ce&&(U=!0)&&O[X!=="Y"?"push":"unshift"]({fn:Wv[X],val:ce[++oe]})}else ae||(J+=".")}g=!t||!t.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),O.forEach(function(E){var y=E.fn,v=E.val;return g=y(g,v,d)||g}),g=U?g:void 0}}if(!(g instanceof Date&&!isNaN(g.getTime()))){t.errorHandler(new Error("Invalid date provided: "+C));return}return l===!0&&g.setHours(0,0,0,0),g}}};function Ye(n,e,t){return t===void 0&&(t=!0),t!==!1?new Date(n.getTime()).setHours(0,0,0,0)-new Date(e.getTime()).setHours(0,0,0,0):n.getTime()-e.getTime()}var Gv=function(n,e,t){return n>Math.min(e,t)&&n<Math.max(e,t)},Ks=function(n,e,t){return n*3600+e*60+t},Yv=function(n){var e=Math.floor(n/3600),t=(n-e*3600)/60;return[e,t,n-e*3600-t*60]},Qv={DAY:864e5};function Ws(n){var e=n.defaultHour,t=n.defaultMinute,r=n.defaultSeconds;if(n.minDate!==void 0){var i=n.minDate.getHours(),o=n.minDate.getMinutes(),a=n.minDate.getSeconds();e<i&&(e=i),e===i&&t<o&&(t=o),e===i&&t===o&&r<a&&(r=n.minDate.getSeconds())}if(n.maxDate!==void 0){var l=n.maxDate.getHours(),h=n.maxDate.getMinutes();e=Math.min(e,l),e===l&&(t=Math.min(h,t)),e===l&&t===h&&(r=n.maxDate.getSeconds())}return{hours:e,minutes:t,seconds:r}}typeof Object.assign!="function"&&(Object.assign=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(!n)throw TypeError("Cannot convert undefined or null to object");for(var r=function(l){l&&Object.keys(l).forEach(function(h){return n[h]=l[h]})},i=0,o=e;i<o.length;i++){var a=o[i];r(a)}return n});var Ve=function(){return Ve=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},Ve.apply(this,arguments)},cl=function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var o=arguments[e],a=0,l=o.length;a<l;a++,i++)r[i]=o[a];return r},Jv=300;function Xv(n,e){var t={config:Ve(Ve({},Bn),me.defaultConfig),l10n:$r};t.parseDate=vo({config:t.config,l10n:t.l10n}),t._handlers=[],t.pluginElements=[],t.loadedPlugins=[],t._bind=O,t._setHoursFromDate=S,t._positionCalendar=zt,t.changeMonth=nr,t.changeYear=pt,t.clear=st,t.close=Ie,t.onMouseOver=St,t._createElement=ie,t.createDay=ce,t.destroy=ys,t.isEnabled=gt,t.jumpToDate=J,t.updateValue=Ue,t.open=sr,t.redraw=ri,t.set=Te,t.setDate=bn,t.toggle=oi;function r(){t.utils={getDaysInMonth:function(p,m){return p===void 0&&(p=t.currentMonth),m===void 0&&(m=t.currentYear),p===1&&(m%4===0&&m%100!==0||m%400===0)?29:t.l10n.daysInMonth[p]}}}function i(){t.element=t.input=n,t.isOpen=!1,Zr(),ti(),_s(),ii(),r(),t.isMobile||Ee(),oe(),(t.selectedDates.length||t.config.noCalendar)&&(t.config.enableTime&&S(t.config.noCalendar?t.latestSelectedDateObj:void 0),Ue(!1)),l();var p=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!t.isMobile&&p&&zt(),ue("onReady")}function o(){var p;return((p=t.calendarContainer)===null||p===void 0?void 0:p.getRootNode()).activeElement||document.activeElement}function a(p){return p.bind(t)}function l(){var p=t.config;p.weekNumbers===!1&&p.showMonths===1||p.noCalendar!==!0&&window.requestAnimationFrame(function(){if(t.calendarContainer!==void 0&&(t.calendarContainer.style.visibility="hidden",t.calendarContainer.style.display="block"),t.daysContainer!==void 0){var m=(t.days.offsetWidth+1)*p.showMonths;t.daysContainer.style.width=m+"px",t.calendarContainer.style.width=m+(t.weekWrapper!==void 0?t.weekWrapper.offsetWidth:0)+"px",t.calendarContainer.style.removeProperty("visibility"),t.calendarContainer.style.removeProperty("display")}})}function h(p){if(t.selectedDates.length===0){var m=t.config.minDate===void 0||Ye(new Date,t.config.minDate)>=0?new Date:new Date(t.config.minDate.getTime()),I=Ws(t.config);m.setHours(I.hours,I.minutes,I.seconds,m.getMilliseconds()),t.selectedDates=[m],t.latestSelectedDateObj=m}p!==void 0&&p.type!=="blur"&&dr(p);var D=t._input.value;C(),Ue(),t._input.value!==D&&t._debouncedChange()}function d(p,m){return p%12+12*Je(m===t.l10n.amPM[1])}function g(p){switch(p%24){case 0:case 12:return 12;default:return p%12}}function C(){if(!(t.hourElement===void 0||t.minuteElement===void 0)){var p=(parseInt(t.hourElement.value.slice(-2),10)||0)%24,m=(parseInt(t.minuteElement.value,10)||0)%60,I=t.secondElement!==void 0?(parseInt(t.secondElement.value,10)||0)%60:0;t.amPM!==void 0&&(p=d(p,t.amPM.textContent));var D=t.config.minTime!==void 0||t.config.minDate&&t.minDateHasTime&&t.latestSelectedDateObj&&Ye(t.latestSelectedDateObj,t.config.minDate,!0)===0,M=t.config.maxTime!==void 0||t.config.maxDate&&t.maxDateHasTime&&t.latestSelectedDateObj&&Ye(t.latestSelectedDateObj,t.config.maxDate,!0)===0;if(t.config.maxTime!==void 0&&t.config.minTime!==void 0&&t.config.minTime>t.config.maxTime){var L=Ks(t.config.minTime.getHours(),t.config.minTime.getMinutes(),t.config.minTime.getSeconds()),q=Ks(t.config.maxTime.getHours(),t.config.maxTime.getMinutes(),t.config.maxTime.getSeconds()),j=Ks(p,m,I);if(j>q&&j<L){var G=Yv(L);p=G[0],m=G[1],I=G[2]}}else{if(M){var F=t.config.maxTime!==void 0?t.config.maxTime:t.config.maxDate;p=Math.min(p,F.getHours()),p===F.getHours()&&(m=Math.min(m,F.getMinutes())),m===F.getMinutes()&&(I=Math.min(I,F.getSeconds()))}if(D){var z=t.config.minTime!==void 0?t.config.minTime:t.config.minDate;p=Math.max(p,z.getHours()),p===z.getHours()&&m<z.getMinutes()&&(m=z.getMinutes()),m===z.getMinutes()&&(I=Math.max(I,z.getSeconds()))}}P(p,m,I)}}function S(p){var m=p||t.latestSelectedDateObj;m&&m instanceof Date&&P(m.getHours(),m.getMinutes(),m.getSeconds())}function P(p,m,I){t.latestSelectedDateObj!==void 0&&t.latestSelectedDateObj.setHours(p%24,m,I||0,0),!(!t.hourElement||!t.minuteElement||t.isMobile)&&(t.hourElement.value=$e(t.config.time_24hr?p:(12+p)%12+12*Je(p%12===0)),t.minuteElement.value=$e(m),t.amPM!==void 0&&(t.amPM.textContent=t.l10n.amPM[Je(p>=12)]),t.secondElement!==void 0&&(t.secondElement.value=$e(I)))}function U(p){var m=Ge(p),I=parseInt(m.value)+(p.delta||0);(I/1e3>1||p.key==="Enter"&&!/[^\d]/.test(I.toString()))&&pt(I)}function O(p,m,I,D){if(m instanceof Array)return m.forEach(function(M){return O(p,M,I,D)});if(p instanceof Array)return p.forEach(function(M){return O(M,m,I,D)});p.addEventListener(m,I,D),t._handlers.push({remove:function(){return p.removeEventListener(m,I,D)}})}function x(){ue("onChange")}function oe(){if(t.config.wrap&&["open","close","toggle","clear"].forEach(function(I){Array.prototype.forEach.call(t.element.querySelectorAll("[data-"+I+"]"),function(D){return O(D,"click",t[I])})}),t.isMobile){si();return}var p=al(ir,50);if(t._debouncedChange=al(x,Jv),t.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&O(t.daysContainer,"mouseover",function(I){t.config.mode==="range"&&St(Ge(I))}),O(t._input,"keydown",Ht),t.calendarContainer!==void 0&&O(t.calendarContainer,"keydown",Ht),!t.config.inline&&!t.config.static&&O(window,"resize",p),window.ontouchstart!==void 0?O(window.document,"touchstart",rr):O(window.document,"mousedown",rr),O(window.document,"focus",rr,{capture:!0}),t.config.clickOpens===!0&&(O(t._input,"focus",t.open),O(t._input,"click",t.open)),t.daysContainer!==void 0&&(O(t.monthNav,"click",hr),O(t.monthNav,["keyup","increment"],U),O(t.daysContainer,"click",An)),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0){var m=function(I){return Ge(I).select()};O(t.timeContainer,["increment"],h),O(t.timeContainer,"blur",h,{capture:!0}),O(t.timeContainer,"click",X),O([t.hourElement,t.minuteElement],["focus","click"],m),t.secondElement!==void 0&&O(t.secondElement,"focus",function(){return t.secondElement&&t.secondElement.select()}),t.amPM!==void 0&&O(t.amPM,"click",function(I){h(I)})}t.config.allowInput&&O(t._input,"blur",In)}function J(p,m){var I=p!==void 0?t.parseDate(p):t.latestSelectedDateObj||(t.config.minDate&&t.config.minDate>t.now?t.config.minDate:t.config.maxDate&&t.config.maxDate<t.now?t.config.maxDate:t.now),D=t.currentYear,M=t.currentMonth;try{I!==void 0&&(t.currentYear=I.getFullYear(),t.currentMonth=I.getMonth())}catch(L){L.message="Invalid date supplied: "+I,t.config.errorHandler(L)}m&&t.currentYear!==D&&(ue("onYearChange"),_()),m&&(t.currentYear!==D||t.currentMonth!==M)&&ue("onMonthChange"),t.redraw()}function X(p){var m=Ge(p);~m.className.indexOf("arrow")&&ae(p,m.classList.contains("arrowUp")?1:-1)}function ae(p,m,I){var D=p&&Ge(p),M=I||D&&D.parentNode&&D.parentNode.firstChild,L=cr("increment");L.delta=m,M&&M.dispatchEvent(L)}function Ee(){var p=window.document.createDocumentFragment();if(t.calendarContainer=ie("div","flatpickr-calendar"),t.calendarContainer.tabIndex=-1,!t.config.noCalendar){if(p.appendChild(vn()),t.innerContainer=ie("div","flatpickr-innerContainer"),t.config.weekNumbers){var m=Xr(),I=m.weekWrapper,D=m.weekNumbers;t.innerContainer.appendChild(I),t.weekNumbers=D,t.weekWrapper=I}t.rContainer=ie("div","flatpickr-rContainer"),t.rContainer.appendChild(Ct()),t.daysContainer||(t.daysContainer=ie("div","flatpickr-days"),t.daysContainer.tabIndex=-1),A(),t.rContainer.appendChild(t.daysContainer),t.innerContainer.appendChild(t.rContainer),p.appendChild(t.innerContainer)}t.config.enableTime&&p.appendChild(it()),Be(t.calendarContainer,"rangeMode",t.config.mode==="range"),Be(t.calendarContainer,"animate",t.config.animate===!0),Be(t.calendarContainer,"multiMonth",t.config.showMonths>1),t.calendarContainer.appendChild(p);var M=t.config.appendTo!==void 0&&t.config.appendTo.nodeType!==void 0;if((t.config.inline||t.config.static)&&(t.calendarContainer.classList.add(t.config.inline?"inline":"static"),t.config.inline&&(!M&&t.element.parentNode?t.element.parentNode.insertBefore(t.calendarContainer,t._input.nextSibling):t.config.appendTo!==void 0&&t.config.appendTo.appendChild(t.calendarContainer)),t.config.static)){var L=ie("div","flatpickr-wrapper");t.element.parentNode&&t.element.parentNode.insertBefore(L,t.element),L.appendChild(t.element),t.altInput&&L.appendChild(t.altInput),L.appendChild(t.calendarContainer)}!t.config.static&&!t.config.inline&&(t.config.appendTo!==void 0?t.config.appendTo:window.document.body).appendChild(t.calendarContainer)}function ce(p,m,I,D){var M=gt(m,!0),L=ie("span",p,m.getDate().toString());return L.dateObj=m,L.$i=D,L.setAttribute("aria-label",t.formatDate(m,t.config.ariaDateFormat)),p.indexOf("hidden")===-1&&Ye(m,t.now)===0&&(t.todayDateElem=L,L.classList.add("today"),L.setAttribute("aria-current","date")),M?(L.tabIndex=-1,lr(m)&&(L.classList.add("selected"),t.selectedDateElem=L,t.config.mode==="range"&&(Be(L,"startRange",t.selectedDates[0]&&Ye(m,t.selectedDates[0],!0)===0),Be(L,"endRange",t.selectedDates[1]&&Ye(m,t.selectedDates[1],!0)===0),p==="nextMonthDay"&&L.classList.add("inRange")))):L.classList.add("flatpickr-disabled"),t.config.mode==="range"&&ur(m)&&!lr(m)&&L.classList.add("inRange"),t.weekNumbers&&t.config.showMonths===1&&p!=="prevMonthDay"&&D%7===6&&t.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+t.config.getWeek(m)+"</span>"),ue("onDayCreate",L),L}function E(p){p.focus(),t.config.mode==="range"&&St(p)}function y(p){for(var m=p>0?0:t.config.showMonths-1,I=p>0?t.config.showMonths:-1,D=m;D!=I;D+=p)for(var M=t.daysContainer.children[D],L=p>0?0:M.children.length-1,q=p>0?M.children.length:-1,j=L;j!=q;j+=p){var G=M.children[j];if(G.className.indexOf("hidden")===-1&&gt(G.dateObj))return G}}function v(p,m){for(var I=p.className.indexOf("Month")===-1?p.dateObj.getMonth():t.currentMonth,D=m>0?t.config.showMonths:-1,M=m>0?1:-1,L=I-t.currentMonth;L!=D;L+=M)for(var q=t.daysContainer.children[L],j=I-t.currentMonth===L?p.$i+m:m<0?q.children.length-1:0,G=q.children.length,F=j;F>=0&&F<G&&F!=(m>0?G:-1);F+=M){var z=q.children[F];if(z.className.indexOf("hidden")===-1&&gt(z.dateObj)&&Math.abs(p.$i-F)>=Math.abs(m))return E(z)}t.changeMonth(M),w(y(M),0)}function w(p,m){var I=o(),D=En(I||document.body),M=p!==void 0?p:D?I:t.selectedDateElem!==void 0&&En(t.selectedDateElem)?t.selectedDateElem:t.todayDateElem!==void 0&&En(t.todayDateElem)?t.todayDateElem:y(m>0?1:-1);M===void 0?t._input.focus():D?v(M,m):E(M)}function T(p,m){for(var I=(new Date(p,m,1).getDay()-t.l10n.firstDayOfWeek+7)%7,D=t.utils.getDaysInMonth((m-1+12)%12,p),M=t.utils.getDaysInMonth(m,p),L=window.document.createDocumentFragment(),q=t.config.showMonths>1,j=q?"prevMonthDay hidden":"prevMonthDay",G=q?"nextMonthDay hidden":"nextMonthDay",F=D+1-I,z=0;F<=D;F++,z++)L.appendChild(ce("flatpickr-day "+j,new Date(p,m-1,F),F,z));for(F=1;F<=M;F++,z++)L.appendChild(ce("flatpickr-day",new Date(p,m,F),F,z));for(var le=M+1;le<=42-I&&(t.config.showMonths===1||z%7!==0);le++,z++)L.appendChild(ce("flatpickr-day "+G,new Date(p,m+1,le%M),le,z));var Ce=ie("div","dayContainer");return Ce.appendChild(L),Ce}function A(){if(t.daysContainer!==void 0){Di(t.daysContainer),t.weekNumbers&&Di(t.weekNumbers);for(var p=document.createDocumentFragment(),m=0;m<t.config.showMonths;m++){var I=new Date(t.currentYear,t.currentMonth,1);I.setMonth(t.currentMonth+m),p.appendChild(T(I.getFullYear(),I.getMonth()))}t.daysContainer.appendChild(p),t.days=t.daysContainer.firstChild,t.config.mode==="range"&&t.selectedDates.length===1&&St()}}function _(){if(!(t.config.showMonths>1||t.config.monthSelectorType!=="dropdown")){var p=function(D){return t.config.minDate!==void 0&&t.currentYear===t.config.minDate.getFullYear()&&D<t.config.minDate.getMonth()?!1:!(t.config.maxDate!==void 0&&t.currentYear===t.config.maxDate.getFullYear()&&D>t.config.maxDate.getMonth())};t.monthsDropdownContainer.tabIndex=-1,t.monthsDropdownContainer.innerHTML="";for(var m=0;m<12;m++)if(p(m)){var I=ie("option","flatpickr-monthDropdown-month");I.value=new Date(t.currentYear,m).getMonth().toString(),I.textContent=es(m,t.config.shorthandCurrentMonth,t.l10n),I.tabIndex=-1,t.currentMonth===m&&(I.selected=!0),t.monthsDropdownContainer.appendChild(I)}}}function Fe(){var p=ie("div","flatpickr-month"),m=window.document.createDocumentFragment(),I;t.config.showMonths>1||t.config.monthSelectorType==="static"?I=ie("span","cur-month"):(t.monthsDropdownContainer=ie("select","flatpickr-monthDropdown-months"),t.monthsDropdownContainer.setAttribute("aria-label",t.l10n.monthAriaLabel),O(t.monthsDropdownContainer,"change",function(q){var j=Ge(q),G=parseInt(j.value,10);t.changeMonth(G-t.currentMonth),ue("onMonthChange")}),_(),I=t.monthsDropdownContainer);var D=Pi("cur-year",{tabindex:"-1"}),M=D.getElementsByTagName("input")[0];M.setAttribute("aria-label",t.l10n.yearAriaLabel),t.config.minDate&&M.setAttribute("min",t.config.minDate.getFullYear().toString()),t.config.maxDate&&(M.setAttribute("max",t.config.maxDate.getFullYear().toString()),M.disabled=!!t.config.minDate&&t.config.minDate.getFullYear()===t.config.maxDate.getFullYear());var L=ie("div","flatpickr-current-month");return L.appendChild(I),L.appendChild(D),m.appendChild(L),p.appendChild(m),{container:p,yearElement:M,monthElement:I}}function Ke(){Di(t.monthNav),t.monthNav.appendChild(t.prevMonthNav),t.config.showMonths&&(t.yearElements=[],t.monthElements=[]);for(var p=t.config.showMonths;p--;){var m=Fe();t.yearElements.push(m.yearElement),t.monthElements.push(m.monthElement),t.monthNav.appendChild(m.container)}t.monthNav.appendChild(t.nextMonthNav)}function vn(){return t.monthNav=ie("div","flatpickr-months"),t.yearElements=[],t.monthElements=[],t.prevMonthNav=ie("span","flatpickr-prev-month"),t.prevMonthNav.innerHTML=t.config.prevArrow,t.nextMonthNav=ie("span","flatpickr-next-month"),t.nextMonthNav.innerHTML=t.config.nextArrow,Ke(),Object.defineProperty(t,"_hidePrevMonthArrow",{get:function(){return t.__hidePrevMonthArrow},set:function(p){t.__hidePrevMonthArrow!==p&&(Be(t.prevMonthNav,"flatpickr-disabled",p),t.__hidePrevMonthArrow=p)}}),Object.defineProperty(t,"_hideNextMonthArrow",{get:function(){return t.__hideNextMonthArrow},set:function(p){t.__hideNextMonthArrow!==p&&(Be(t.nextMonthNav,"flatpickr-disabled",p),t.__hideNextMonthArrow=p)}}),t.currentYearElement=t.yearElements[0],Gt(),t.monthNav}function it(){t.calendarContainer.classList.add("hasTime"),t.config.noCalendar&&t.calendarContainer.classList.add("noCalendar");var p=Ws(t.config);t.timeContainer=ie("div","flatpickr-time"),t.timeContainer.tabIndex=-1;var m=ie("span","flatpickr-time-separator",":"),I=Pi("flatpickr-hour",{"aria-label":t.l10n.hourAriaLabel});t.hourElement=I.getElementsByTagName("input")[0];var D=Pi("flatpickr-minute",{"aria-label":t.l10n.minuteAriaLabel});if(t.minuteElement=D.getElementsByTagName("input")[0],t.hourElement.tabIndex=t.minuteElement.tabIndex=-1,t.hourElement.value=$e(t.latestSelectedDateObj?t.latestSelectedDateObj.getHours():t.config.time_24hr?p.hours:g(p.hours)),t.minuteElement.value=$e(t.latestSelectedDateObj?t.latestSelectedDateObj.getMinutes():p.minutes),t.hourElement.setAttribute("step",t.config.hourIncrement.toString()),t.minuteElement.setAttribute("step",t.config.minuteIncrement.toString()),t.hourElement.setAttribute("min",t.config.time_24hr?"0":"1"),t.hourElement.setAttribute("max",t.config.time_24hr?"23":"12"),t.hourElement.setAttribute("maxlength","2"),t.minuteElement.setAttribute("min","0"),t.minuteElement.setAttribute("max","59"),t.minuteElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(I),t.timeContainer.appendChild(m),t.timeContainer.appendChild(D),t.config.time_24hr&&t.timeContainer.classList.add("time24hr"),t.config.enableSeconds){t.timeContainer.classList.add("hasSeconds");var M=Pi("flatpickr-second");t.secondElement=M.getElementsByTagName("input")[0],t.secondElement.value=$e(t.latestSelectedDateObj?t.latestSelectedDateObj.getSeconds():p.seconds),t.secondElement.setAttribute("step",t.minuteElement.getAttribute("step")),t.secondElement.setAttribute("min","0"),t.secondElement.setAttribute("max","59"),t.secondElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(ie("span","flatpickr-time-separator",":")),t.timeContainer.appendChild(M)}return t.config.time_24hr||(t.amPM=ie("span","flatpickr-am-pm",t.l10n.amPM[Je((t.latestSelectedDateObj?t.hourElement.value:t.config.defaultHour)>11)]),t.amPM.title=t.l10n.toggleTitle,t.amPM.tabIndex=-1,t.timeContainer.appendChild(t.amPM)),t.timeContainer}function Ct(){t.weekdayContainer?Di(t.weekdayContainer):t.weekdayContainer=ie("div","flatpickr-weekdays");for(var p=t.config.showMonths;p--;){var m=ie("div","flatpickr-weekdaycontainer");t.weekdayContainer.appendChild(m)}return wn(),t.weekdayContainer}function wn(){if(t.weekdayContainer){var p=t.l10n.firstDayOfWeek,m=cl(t.l10n.weekdays.shorthand);p>0&&p<m.length&&(m=cl(m.splice(p,m.length),m.splice(0,p)));for(var I=t.config.showMonths;I--;)t.weekdayContainer.children[I].innerHTML=`
      <span class='flatpickr-weekday'>
        `+m.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function Xr(){t.calendarContainer.classList.add("hasWeeks");var p=ie("div","flatpickr-weekwrapper");p.appendChild(ie("span","flatpickr-weekday",t.l10n.weekAbbreviation));var m=ie("div","flatpickr-weeks");return p.appendChild(m),{weekWrapper:p,weekNumbers:m}}function nr(p,m){m===void 0&&(m=!0);var I=m?p:p-t.currentMonth;I<0&&t._hidePrevMonthArrow===!0||I>0&&t._hideNextMonthArrow===!0||(t.currentMonth+=I,(t.currentMonth<0||t.currentMonth>11)&&(t.currentYear+=t.currentMonth>11?1:-1,t.currentMonth=(t.currentMonth+12)%12,ue("onYearChange"),_()),A(),ue("onMonthChange"),Gt())}function st(p,m){if(p===void 0&&(p=!0),m===void 0&&(m=!0),t.input.value="",t.altInput!==void 0&&(t.altInput.value=""),t.mobileInput!==void 0&&(t.mobileInput.value=""),t.selectedDates=[],t.latestSelectedDateObj=void 0,m===!0&&(t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth()),t.config.enableTime===!0){var I=Ws(t.config),D=I.hours,M=I.minutes,L=I.seconds;P(D,M,L)}t.redraw(),p&&ue("onChange")}function Ie(){t.isOpen=!1,t.isMobile||(t.calendarContainer!==void 0&&t.calendarContainer.classList.remove("open"),t._input!==void 0&&t._input.classList.remove("active")),ue("onClose")}function ys(){t.config!==void 0&&ue("onDestroy");for(var p=t._handlers.length;p--;)t._handlers[p].remove();if(t._handlers=[],t.mobileInput)t.mobileInput.parentNode&&t.mobileInput.parentNode.removeChild(t.mobileInput),t.mobileInput=void 0;else if(t.calendarContainer&&t.calendarContainer.parentNode)if(t.config.static&&t.calendarContainer.parentNode){var m=t.calendarContainer.parentNode;if(m.lastChild&&m.removeChild(m.lastChild),m.parentNode){for(;m.firstChild;)m.parentNode.insertBefore(m.firstChild,m);m.parentNode.removeChild(m)}}else t.calendarContainer.parentNode.removeChild(t.calendarContainer);t.altInput&&(t.input.type="text",t.altInput.parentNode&&t.altInput.parentNode.removeChild(t.altInput),delete t.altInput),t.input&&(t.input.type=t.input._type,t.input.classList.remove("flatpickr-input"),t.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(I){try{delete t[I]}catch{}})}function Ze(p){return t.calendarContainer.contains(p)}function rr(p){if(t.isOpen&&!t.config.inline){var m=Ge(p),I=Ze(m),D=m===t.input||m===t.altInput||t.element.contains(m)||p.path&&p.path.indexOf&&(~p.path.indexOf(t.input)||~p.path.indexOf(t.altInput)),M=!D&&!I&&!Ze(p.relatedTarget),L=!t.config.ignoredFocusElements.some(function(q){return q.contains(m)});M&&L&&(t.config.allowInput&&t.setDate(t._input.value,!1,t.config.altInput?t.config.altFormat:t.config.dateFormat),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0&&t.input.value!==""&&t.input.value!==void 0&&h(),t.close(),t.config&&t.config.mode==="range"&&t.selectedDates.length===1&&t.clear(!1))}}function pt(p){if(!(!p||t.config.minDate&&p<t.config.minDate.getFullYear()||t.config.maxDate&&p>t.config.maxDate.getFullYear())){var m=p,I=t.currentYear!==m;t.currentYear=m||t.currentYear,t.config.maxDate&&t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth=Math.min(t.config.maxDate.getMonth(),t.currentMonth):t.config.minDate&&t.currentYear===t.config.minDate.getFullYear()&&(t.currentMonth=Math.max(t.config.minDate.getMonth(),t.currentMonth)),I&&(t.redraw(),ue("onYearChange"),_())}}function gt(p,m){var I;m===void 0&&(m=!0);var D=t.parseDate(p,void 0,m);if(t.config.minDate&&D&&Ye(D,t.config.minDate,m!==void 0?m:!t.minDateHasTime)<0||t.config.maxDate&&D&&Ye(D,t.config.maxDate,m!==void 0?m:!t.maxDateHasTime)>0)return!1;if(!t.config.enable&&t.config.disable.length===0)return!0;if(D===void 0)return!1;for(var M=!!t.config.enable,L=(I=t.config.enable)!==null&&I!==void 0?I:t.config.disable,q=0,j=void 0;q<L.length;q++){if(j=L[q],typeof j=="function"&&j(D))return M;if(j instanceof Date&&D!==void 0&&j.getTime()===D.getTime())return M;if(typeof j=="string"){var G=t.parseDate(j,void 0,!0);return G&&G.getTime()===D.getTime()?M:!M}else if(typeof j=="object"&&D!==void 0&&j.from&&j.to&&D.getTime()>=j.from.getTime()&&D.getTime()<=j.to.getTime())return M}return!M}function En(p){return t.daysContainer!==void 0?p.className.indexOf("hidden")===-1&&p.className.indexOf("flatpickr-disabled")===-1&&t.daysContainer.contains(p):!1}function In(p){var m=p.target===t._input,I=t._input.value.trimEnd()!==Cn();m&&I&&!(p.relatedTarget&&Ze(p.relatedTarget))&&t.setDate(t._input.value,!0,p.target===t.altInput?t.config.altFormat:t.config.dateFormat)}function Ht(p){var m=Ge(p),I=t.config.wrap?n.contains(m):m===t._input,D=t.config.allowInput,M=t.isOpen&&(!D||!I),L=t.config.inline&&I&&!D;if(p.keyCode===13&&I){if(D)return t.setDate(t._input.value,!0,m===t.altInput?t.config.altFormat:t.config.dateFormat),t.close(),m.blur();t.open()}else if(Ze(m)||M||L){var q=!!t.timeContainer&&t.timeContainer.contains(m);switch(p.keyCode){case 13:q?(p.preventDefault(),h(),Kt()):An(p);break;case 27:p.preventDefault(),Kt();break;case 8:case 46:I&&!t.config.allowInput&&(p.preventDefault(),t.clear());break;case 37:case 39:if(!q&&!I){p.preventDefault();var j=o();if(t.daysContainer!==void 0&&(D===!1||j&&En(j))){var G=p.keyCode===39?1:-1;p.ctrlKey?(p.stopPropagation(),nr(G),w(y(1),0)):w(void 0,G)}}else t.hourElement&&t.hourElement.focus();break;case 38:case 40:p.preventDefault();var F=p.keyCode===40?1:-1;t.daysContainer&&m.$i!==void 0||m===t.input||m===t.altInput?p.ctrlKey?(p.stopPropagation(),pt(t.currentYear-F),w(y(1),0)):q||w(void 0,F*7):m===t.currentYearElement?pt(t.currentYear-F):t.config.enableTime&&(!q&&t.hourElement&&t.hourElement.focus(),h(p),t._debouncedChange());break;case 9:if(q){var z=[t.hourElement,t.minuteElement,t.secondElement,t.amPM].concat(t.pluginElements).filter(function(je){return je}),le=z.indexOf(m);if(le!==-1){var Ce=z[le+(p.shiftKey?-1:1)];p.preventDefault(),(Ce||t._input).focus()}}else!t.config.noCalendar&&t.daysContainer&&t.daysContainer.contains(m)&&p.shiftKey&&(p.preventDefault(),t._input.focus());break}}if(t.amPM!==void 0&&m===t.amPM)switch(p.key){case t.l10n.amPM[0].charAt(0):case t.l10n.amPM[0].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[0],C(),Ue();break;case t.l10n.amPM[1].charAt(0):case t.l10n.amPM[1].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[1],C(),Ue();break}(I||Ze(m))&&ue("onKeyDown",p)}function St(p,m){if(m===void 0&&(m="flatpickr-day"),!(t.selectedDates.length!==1||p&&(!p.classList.contains(m)||p.classList.contains("flatpickr-disabled")))){for(var I=p?p.dateObj.getTime():t.days.firstElementChild.dateObj.getTime(),D=t.parseDate(t.selectedDates[0],void 0,!0).getTime(),M=Math.min(I,t.selectedDates[0].getTime()),L=Math.max(I,t.selectedDates[0].getTime()),q=!1,j=0,G=0,F=M;F<L;F+=Qv.DAY)gt(new Date(F),!0)||(q=q||F>M&&F<L,F<D&&(!j||F>j)?j=F:F>D&&(!G||F<G)&&(G=F));var z=Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+"+t.config.showMonths+") > ."+m));z.forEach(function(le){var Ce=le.dateObj,je=Ce.getTime(),Yt=j>0&&je<j||G>0&&je>G;if(Yt){le.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(et){le.classList.remove(et)});return}else if(q&&!Yt)return;["startRange","inRange","endRange","notAllowed"].forEach(function(et){le.classList.remove(et)}),p!==void 0&&(p.classList.add(I<=t.selectedDates[0].getTime()?"startRange":"endRange"),D<I&&je===D?le.classList.add("startRange"):D>I&&je===D&&le.classList.add("endRange"),je>=j&&(G===0||je<=G)&&Gv(je,D,I)&&le.classList.add("inRange"))})}}function ir(){t.isOpen&&!t.config.static&&!t.config.inline&&zt()}function sr(p,m){if(m===void 0&&(m=t._positionElement),t.isMobile===!0){if(p){p.preventDefault();var I=Ge(p);I&&I.blur()}t.mobileInput!==void 0&&(t.mobileInput.focus(),t.mobileInput.click()),ue("onOpen");return}else if(t._input.disabled||t.config.inline)return;var D=t.isOpen;t.isOpen=!0,D||(t.calendarContainer.classList.add("open"),t._input.classList.add("active"),ue("onOpen"),zt(m)),t.config.enableTime===!0&&t.config.noCalendar===!0&&t.config.allowInput===!1&&(p===void 0||!t.timeContainer.contains(p.relatedTarget))&&setTimeout(function(){return t.hourElement.select()},50)}function Tn(p){return function(m){var I=t.config["_"+p+"Date"]=t.parseDate(m,t.config.dateFormat),D=t.config["_"+(p==="min"?"max":"min")+"Date"];I!==void 0&&(t[p==="min"?"minDateHasTime":"maxDateHasTime"]=I.getHours()>0||I.getMinutes()>0||I.getSeconds()>0),t.selectedDates&&(t.selectedDates=t.selectedDates.filter(function(M){return gt(M)}),!t.selectedDates.length&&p==="min"&&S(I),Ue()),t.daysContainer&&(ri(),I!==void 0?t.currentYearElement[p]=I.getFullYear().toString():t.currentYearElement.removeAttribute(p),t.currentYearElement.disabled=!!D&&I!==void 0&&D.getFullYear()===I.getFullYear())}}function Zr(){var p=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],m=Ve(Ve({},JSON.parse(JSON.stringify(n.dataset||{}))),e),I={};t.config.parseDate=m.parseDate,t.config.formatDate=m.formatDate,Object.defineProperty(t.config,"enable",{get:function(){return t.config._enable},set:function(z){t.config._enable=ar(z)}}),Object.defineProperty(t.config,"disable",{get:function(){return t.config._disable},set:function(z){t.config._disable=ar(z)}});var D=m.mode==="time";if(!m.dateFormat&&(m.enableTime||D)){var M=me.defaultConfig.dateFormat||Bn.dateFormat;I.dateFormat=m.noCalendar||D?"H:i"+(m.enableSeconds?":S":""):M+" H:i"+(m.enableSeconds?":S":"")}if(m.altInput&&(m.enableTime||D)&&!m.altFormat){var L=me.defaultConfig.altFormat||Bn.altFormat;I.altFormat=m.noCalendar||D?"h:i"+(m.enableSeconds?":S K":" K"):L+(" h:i"+(m.enableSeconds?":S":"")+" K")}Object.defineProperty(t.config,"minDate",{get:function(){return t.config._minDate},set:Tn("min")}),Object.defineProperty(t.config,"maxDate",{get:function(){return t.config._maxDate},set:Tn("max")});var q=function(z){return function(le){t.config[z==="min"?"_minTime":"_maxTime"]=t.parseDate(le,"H:i:S")}};Object.defineProperty(t.config,"minTime",{get:function(){return t.config._minTime},set:q("min")}),Object.defineProperty(t.config,"maxTime",{get:function(){return t.config._maxTime},set:q("max")}),m.mode==="time"&&(t.config.noCalendar=!0,t.config.enableTime=!0),Object.assign(t.config,I,m);for(var j=0;j<p.length;j++)t.config[p[j]]=t.config[p[j]]===!0||t.config[p[j]]==="true";$s.filter(function(z){return t.config[z]!==void 0}).forEach(function(z){t.config[z]=Hs(t.config[z]||[]).map(a)}),t.isMobile=!t.config.disableMobile&&!t.config.inline&&t.config.mode==="single"&&!t.config.disable.length&&!t.config.enable&&!t.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var j=0;j<t.config.plugins.length;j++){var G=t.config.plugins[j](t)||{};for(var F in G)$s.indexOf(F)>-1?t.config[F]=Hs(G[F]).map(a).concat(t.config[F]):typeof m[F]>"u"&&(t.config[F]=G[F])}m.altInputClass||(t.config.altInputClass=ei().className+" "+t.config.altInputClass),ue("onParseConfig")}function ei(){return t.config.wrap?n.querySelector("[data-input]"):n}function ti(){typeof t.config.locale!="object"&&typeof me.l10ns[t.config.locale]>"u"&&t.config.errorHandler(new Error("flatpickr: invalid locale "+t.config.locale)),t.l10n=Ve(Ve({},me.l10ns.default),typeof t.config.locale=="object"?t.config.locale:t.config.locale!=="default"?me.l10ns[t.config.locale]:void 0),tn.D="("+t.l10n.weekdays.shorthand.join("|")+")",tn.l="("+t.l10n.weekdays.longhand.join("|")+")",tn.M="("+t.l10n.months.shorthand.join("|")+")",tn.F="("+t.l10n.months.longhand.join("|")+")",tn.K="("+t.l10n.amPM[0]+"|"+t.l10n.amPM[1]+"|"+t.l10n.amPM[0].toLowerCase()+"|"+t.l10n.amPM[1].toLowerCase()+")";var p=Ve(Ve({},e),JSON.parse(JSON.stringify(n.dataset||{})));p.time_24hr===void 0&&me.defaultConfig.time_24hr===void 0&&(t.config.time_24hr=t.l10n.time_24hr),t.formatDate=Ch(t),t.parseDate=vo({config:t.config,l10n:t.l10n})}function zt(p){if(typeof t.config.position=="function")return void t.config.position(t,p);if(t.calendarContainer!==void 0){ue("onPreCalendarPosition");var m=p||t._positionElement,I=Array.prototype.reduce.call(t.calendarContainer.children,function(ui,hi){return ui+hi.offsetHeight},0),D=t.calendarContainer.offsetWidth,M=t.config.position.split(" "),L=M[0],q=M.length>1?M[1]:null,j=m.getBoundingClientRect(),G=window.innerHeight-j.bottom,F=L==="above"||L!=="below"&&G<I&&j.top>I,z=window.pageYOffset+j.top+(F?-I-2:m.offsetHeight+2);if(Be(t.calendarContainer,"arrowTop",!F),Be(t.calendarContainer,"arrowBottom",F),!t.config.inline){var le=window.pageXOffset+j.left,Ce=!1,je=!1;q==="center"?(le-=(D-j.width)/2,Ce=!0):q==="right"&&(le-=D-j.width,je=!0),Be(t.calendarContainer,"arrowLeft",!Ce&&!je),Be(t.calendarContainer,"arrowCenter",Ce),Be(t.calendarContainer,"arrowRight",je);var Yt=window.document.body.offsetWidth-(window.pageXOffset+j.right),et=le+D>window.document.body.offsetWidth,ai=Yt+D>window.document.body.offsetWidth;if(Be(t.calendarContainer,"rightMost",et),!t.config.static)if(t.calendarContainer.style.top=z+"px",!et)t.calendarContainer.style.left=le+"px",t.calendarContainer.style.right="auto";else if(!ai)t.calendarContainer.style.left="auto",t.calendarContainer.style.right=Yt+"px";else{var Qt=or();if(Qt===void 0)return;var Sn=window.document.body.offsetWidth,ot=Math.max(0,Sn/2-D/2),ci=".flatpickr-calendar.centerMost:before",li=".flatpickr-calendar.centerMost:after",fr=Qt.cssRules.length,pr="{left:"+j.left+"px;right:auto;}";Be(t.calendarContainer,"rightMost",!1),Be(t.calendarContainer,"centerMost",!0),Qt.insertRule(ci+","+li+pr,fr),t.calendarContainer.style.left=ot+"px",t.calendarContainer.style.right="auto"}}}}function or(){for(var p=null,m=0;m<document.styleSheets.length;m++){var I=document.styleSheets[m];if(I.cssRules){try{I.cssRules}catch{continue}p=I;break}}return p??ni()}function ni(){var p=document.createElement("style");return document.head.appendChild(p),p.sheet}function ri(){t.config.noCalendar||t.isMobile||(_(),Gt(),A())}function Kt(){t._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(t.close,0):t.close()}function An(p){p.preventDefault(),p.stopPropagation();var m=function(z){return z.classList&&z.classList.contains("flatpickr-day")&&!z.classList.contains("flatpickr-disabled")&&!z.classList.contains("notAllowed")},I=bh(Ge(p),m);if(I!==void 0){var D=I,M=t.latestSelectedDateObj=new Date(D.dateObj.getTime()),L=(M.getMonth()<t.currentMonth||M.getMonth()>t.currentMonth+t.config.showMonths-1)&&t.config.mode!=="range";if(t.selectedDateElem=D,t.config.mode==="single")t.selectedDates=[M];else if(t.config.mode==="multiple"){var q=lr(M);q?t.selectedDates.splice(parseInt(q),1):t.selectedDates.push(M)}else t.config.mode==="range"&&(t.selectedDates.length===2&&t.clear(!1,!1),t.latestSelectedDateObj=M,t.selectedDates.push(M),Ye(M,t.selectedDates[0],!0)!==0&&t.selectedDates.sort(function(z,le){return z.getTime()-le.getTime()}));if(C(),L){var j=t.currentYear!==M.getFullYear();t.currentYear=M.getFullYear(),t.currentMonth=M.getMonth(),j&&(ue("onYearChange"),_()),ue("onMonthChange")}if(Gt(),A(),Ue(),!L&&t.config.mode!=="range"&&t.config.showMonths===1?E(D):t.selectedDateElem!==void 0&&t.hourElement===void 0&&t.selectedDateElem&&t.selectedDateElem.focus(),t.hourElement!==void 0&&t.hourElement!==void 0&&t.hourElement.focus(),t.config.closeOnSelect){var G=t.config.mode==="single"&&!t.config.enableTime,F=t.config.mode==="range"&&t.selectedDates.length===2&&!t.config.enableTime;(G||F)&&Kt()}x()}}var Wt={locale:[ti,wn],showMonths:[Ke,l,Ct],minDate:[J],maxDate:[J],positionElement:[Rt],clickOpens:[function(){t.config.clickOpens===!0?(O(t._input,"focus",t.open),O(t._input,"click",t.open)):(t._input.removeEventListener("focus",t.open),t._input.removeEventListener("click",t.open))}]};function Te(p,m){if(p!==null&&typeof p=="object"){Object.assign(t.config,p);for(var I in p)Wt[I]!==void 0&&Wt[I].forEach(function(D){return D()})}else t.config[p]=m,Wt[p]!==void 0?Wt[p].forEach(function(D){return D()}):$s.indexOf(p)>-1&&(t.config[p]=Hs(m));t.redraw(),Ue(!0)}function Ae(p,m){var I=[];if(p instanceof Array)I=p.map(function(D){return t.parseDate(D,m)});else if(p instanceof Date||typeof p=="number")I=[t.parseDate(p,m)];else if(typeof p=="string")switch(t.config.mode){case"single":case"time":I=[t.parseDate(p,m)];break;case"multiple":I=p.split(t.config.conjunction).map(function(D){return t.parseDate(D,m)});break;case"range":I=p.split(t.l10n.rangeSeparator).map(function(D){return t.parseDate(D,m)});break}else t.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(p)));t.selectedDates=t.config.allowInvalidPreload?I:I.filter(function(D){return D instanceof Date&&gt(D,!1)}),t.config.mode==="range"&&t.selectedDates.sort(function(D,M){return D.getTime()-M.getTime()})}function bn(p,m,I){if(m===void 0&&(m=!1),I===void 0&&(I=t.config.dateFormat),p!==0&&!p||p instanceof Array&&p.length===0)return t.clear(m);Ae(p,I),t.latestSelectedDateObj=t.selectedDates[t.selectedDates.length-1],t.redraw(),J(void 0,m),S(),t.selectedDates.length===0&&t.clear(!1),Ue(m),m&&ue("onChange")}function ar(p){return p.slice().map(function(m){return typeof m=="string"||typeof m=="number"||m instanceof Date?t.parseDate(m,void 0,!0):m&&typeof m=="object"&&m.from&&m.to?{from:t.parseDate(m.from,void 0),to:t.parseDate(m.to,void 0)}:m}).filter(function(m){return m})}function ii(){t.selectedDates=[],t.now=t.parseDate(t.config.now)||new Date;var p=t.config.defaultDate||((t.input.nodeName==="INPUT"||t.input.nodeName==="TEXTAREA")&&t.input.placeholder&&t.input.value===t.input.placeholder?null:t.input.value);p&&Ae(p,t.config.dateFormat),t._initialDate=t.selectedDates.length>0?t.selectedDates[0]:t.config.minDate&&t.config.minDate.getTime()>t.now.getTime()?t.config.minDate:t.config.maxDate&&t.config.maxDate.getTime()<t.now.getTime()?t.config.maxDate:t.now,t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth(),t.selectedDates.length>0&&(t.latestSelectedDateObj=t.selectedDates[0]),t.config.minTime!==void 0&&(t.config.minTime=t.parseDate(t.config.minTime,"H:i")),t.config.maxTime!==void 0&&(t.config.maxTime=t.parseDate(t.config.maxTime,"H:i")),t.minDateHasTime=!!t.config.minDate&&(t.config.minDate.getHours()>0||t.config.minDate.getMinutes()>0||t.config.minDate.getSeconds()>0),t.maxDateHasTime=!!t.config.maxDate&&(t.config.maxDate.getHours()>0||t.config.maxDate.getMinutes()>0||t.config.maxDate.getSeconds()>0)}function _s(){if(t.input=ei(),!t.input){t.config.errorHandler(new Error("Invalid input element specified"));return}t.input._type=t.input.type,t.input.type="text",t.input.classList.add("flatpickr-input"),t._input=t.input,t.config.altInput&&(t.altInput=ie(t.input.nodeName,t.config.altInputClass),t._input=t.altInput,t.altInput.placeholder=t.input.placeholder,t.altInput.disabled=t.input.disabled,t.altInput.required=t.input.required,t.altInput.tabIndex=t.input.tabIndex,t.altInput.type="text",t.input.setAttribute("type","hidden"),!t.config.static&&t.input.parentNode&&t.input.parentNode.insertBefore(t.altInput,t.input.nextSibling)),t.config.allowInput||t._input.setAttribute("readonly","readonly"),Rt()}function Rt(){t._positionElement=t.config.positionElement||t._input}function si(){var p=t.config.enableTime?t.config.noCalendar?"time":"datetime-local":"date";t.mobileInput=ie("input",t.input.className+" flatpickr-mobile"),t.mobileInput.tabIndex=1,t.mobileInput.type=p,t.mobileInput.disabled=t.input.disabled,t.mobileInput.required=t.input.required,t.mobileInput.placeholder=t.input.placeholder,t.mobileFormatStr=p==="datetime-local"?"Y-m-d\\TH:i:S":p==="date"?"Y-m-d":"H:i:S",t.selectedDates.length>0&&(t.mobileInput.defaultValue=t.mobileInput.value=t.formatDate(t.selectedDates[0],t.mobileFormatStr)),t.config.minDate&&(t.mobileInput.min=t.formatDate(t.config.minDate,"Y-m-d")),t.config.maxDate&&(t.mobileInput.max=t.formatDate(t.config.maxDate,"Y-m-d")),t.input.getAttribute("step")&&(t.mobileInput.step=String(t.input.getAttribute("step"))),t.input.type="hidden",t.altInput!==void 0&&(t.altInput.type="hidden");try{t.input.parentNode&&t.input.parentNode.insertBefore(t.mobileInput,t.input.nextSibling)}catch{}O(t.mobileInput,"change",function(m){t.setDate(Ge(m).value,!1,t.mobileFormatStr),ue("onChange"),ue("onClose")})}function oi(p){if(t.isOpen===!0)return t.close();t.open(p)}function ue(p,m){if(t.config!==void 0){var I=t.config[p];if(I!==void 0&&I.length>0)for(var D=0;I[D]&&D<I.length;D++)I[D](t.selectedDates,t.input.value,t,m);p==="onChange"&&(t.input.dispatchEvent(cr("change")),t.input.dispatchEvent(cr("input")))}}function cr(p){var m=document.createEvent("Event");return m.initEvent(p,!0,!0),m}function lr(p){for(var m=0;m<t.selectedDates.length;m++){var I=t.selectedDates[m];if(I instanceof Date&&Ye(I,p)===0)return""+m}return!1}function ur(p){return t.config.mode!=="range"||t.selectedDates.length<2?!1:Ye(p,t.selectedDates[0])>=0&&Ye(p,t.selectedDates[1])<=0}function Gt(){t.config.noCalendar||t.isMobile||!t.monthNav||(t.yearElements.forEach(function(p,m){var I=new Date(t.currentYear,t.currentMonth,1);I.setMonth(t.currentMonth+m),t.config.showMonths>1||t.config.monthSelectorType==="static"?t.monthElements[m].textContent=es(I.getMonth(),t.config.shorthandCurrentMonth,t.l10n)+" ":t.monthsDropdownContainer.value=I.getMonth().toString(),p.value=I.getFullYear().toString()}),t._hidePrevMonthArrow=t.config.minDate!==void 0&&(t.currentYear===t.config.minDate.getFullYear()?t.currentMonth<=t.config.minDate.getMonth():t.currentYear<t.config.minDate.getFullYear()),t._hideNextMonthArrow=t.config.maxDate!==void 0&&(t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth+1>t.config.maxDate.getMonth():t.currentYear>t.config.maxDate.getFullYear()))}function Cn(p){var m=p||(t.config.altInput?t.config.altFormat:t.config.dateFormat);return t.selectedDates.map(function(I){return t.formatDate(I,m)}).filter(function(I,D,M){return t.config.mode!=="range"||t.config.enableTime||M.indexOf(I)===D}).join(t.config.mode!=="range"?t.config.conjunction:t.l10n.rangeSeparator)}function Ue(p){p===void 0&&(p=!0),t.mobileInput!==void 0&&t.mobileFormatStr&&(t.mobileInput.value=t.latestSelectedDateObj!==void 0?t.formatDate(t.latestSelectedDateObj,t.mobileFormatStr):""),t.input.value=Cn(t.config.dateFormat),t.altInput!==void 0&&(t.altInput.value=Cn(t.config.altFormat)),p!==!1&&ue("onValueUpdate")}function hr(p){var m=Ge(p),I=t.prevMonthNav.contains(m),D=t.nextMonthNav.contains(m);I||D?nr(I?-1:1):t.yearElements.indexOf(m)>=0?m.select():m.classList.contains("arrowUp")?t.changeYear(t.currentYear+1):m.classList.contains("arrowDown")&&t.changeYear(t.currentYear-1)}function dr(p){p.preventDefault();var m=p.type==="keydown",I=Ge(p),D=I;t.amPM!==void 0&&I===t.amPM&&(t.amPM.textContent=t.l10n.amPM[Je(t.amPM.textContent===t.l10n.amPM[0])]);var M=parseFloat(D.getAttribute("min")),L=parseFloat(D.getAttribute("max")),q=parseFloat(D.getAttribute("step")),j=parseInt(D.value,10),G=p.delta||(m?p.which===38?1:-1:0),F=j+q*G;if(typeof D.value<"u"&&D.value.length===2){var z=D===t.hourElement,le=D===t.minuteElement;F<M?(F=L+F+Je(!z)+(Je(z)&&Je(!t.amPM)),le&&ae(void 0,-1,t.hourElement)):F>L&&(F=D===t.hourElement?F-L-Je(!t.amPM):M,le&&ae(void 0,1,t.hourElement)),t.amPM&&z&&(q===1?F+j===23:Math.abs(F-j)>q)&&(t.amPM.textContent=t.l10n.amPM[Je(t.amPM.textContent===t.l10n.amPM[0])]),D.value=$e(F)}}return i(),t}function qn(n,e){for(var t=Array.prototype.slice.call(n).filter(function(a){return a instanceof HTMLElement}),r=[],i=0;i<t.length;i++){var o=t[i];try{if(o.getAttribute("data-fp-omit")!==null)continue;o._flatpickr!==void 0&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=Xv(o,e||{}),r.push(o._flatpickr)}catch(a){console.error(a)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(n){return qn(this,n)},HTMLElement.prototype.flatpickr=function(n){return qn([this],n)});var me=function(n,e){return typeof n=="string"?qn(window.document.querySelectorAll(n),e):n instanceof Node?qn([n],e):qn(n,e)};me.defaultConfig={};me.l10ns={en:Ve({},$r),default:Ve({},$r)};me.localize=function(n){me.l10ns.default=Ve(Ve({},me.l10ns.default),n)};me.setDefaults=function(n){me.defaultConfig=Ve(Ve({},me.defaultConfig),n)};me.parseDate=vo({});me.formatDate=Ch({});me.compareDates=Ye;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(n){return qn(this,n)});Date.prototype.fp_incr=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof n=="string"?parseInt(n,10):n))};typeof window<"u"&&(window.flatpickr=me);var Zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wo={exports:{}};(function(n,e){(function(t,r){r(e)})(Zv,function(t){var r=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},i={weekdays:{shorthand:["日","月","火","水","木","金","土"],longhand:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},months:{shorthand:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],longhand:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},time_24hr:!0,rangeSeparator:" から ",monthAriaLabel:"月",amPM:["午前","午後"],yearAriaLabel:"年",hourAriaLabel:"時間",minuteAriaLabel:"分"};r.l10ns.ja=i;var o=r.l10ns;t.Japanese=i,t.default=o,Object.defineProperty(t,"__esModule",{value:!0})})})(wo,wo.exports);var ew=wo.exports;class Sh{constructor(e){$(this,"dateNode");$(this,"openBtn");this.dateNode=e.dateNode,this.openBtn=this.dateNode.querySelector(".js-dateCalender-open"),this.init()}init(){this.showOpen()}showOpen(){this.openBtn&&(me.localize(ew.Japanese),this.openBtn.placeholder="日付を選択してください　>",me(this.openBtn,{locale:"ja",minDate:"2024-09-01",maxDate:"2024-10-31",dateFormat:"Y.m.d",disableMobile:!0,altInput:!0,altFormat:"Y.m.d",onValueUpdate:(e,t,r)=>{const i=r.formatDate(e[0],"Y.m.d");this.openBtn&&(this.openBtn.dataset.date=i)},onReady:function(e,t,r){const i=document.createElement("div");i.innerHTML="クリア",i.style.paddingTop="4px",i.style.margin="4px auto 8px",i.style.border="2px solid #ccc",i.style.borderRadius="10px",i.style.width="100px",i.classList.add("clear-button"),i.addEventListener("click",function(){r.clear()}),r.calendarContainer.appendChild(i)}}))}}class tw{constructor(e){$(this,"tagNode");$(this,"templateTag");$(this,"tagList");$(this,"cancelButton",null);$(this,"searchPanel");$(this,"selectedArea",null);$(this,"selectedDate",null);$(this,"inputtedDate",null);$(this,"inputtedComedian",null);$(this,"inputButton",null);$(this,"dialog");$(this,"selectedRadio",null);$(this,"rangeSlider",null);$(this,"rangeValue",null);$(this,"nextText",null);this.tagNode=e.tagNode,this.templateTag=this.tagNode.querySelector(".js-tagInsert-template"),this.tagList=this.tagNode.querySelector(".js-tagInsert-list"),this.cancelButton=this.tagNode.querySelectorAll(".js-tagInsert-cancel"),this.searchPanel=this.tagNode.querySelector(".js-tagInsert-search"),this.searchPanel&&(this.selectedArea=this.searchPanel.querySelectorAll("input[data-area][type='radio']"),this.selectedDate=this.searchPanel.querySelectorAll("input[data-date][type='radio']"),this.inputtedDate=this.searchPanel.querySelector("input[data-date][type='number']"),this.inputtedComedian=this.searchPanel.querySelector("input[data-comedian][type='text']")),this.dialog=this.tagNode.querySelector(".js-tagInsert-dialog"),this.dialog&&(this.selectedRadio=this.dialog.querySelectorAll(".js-tagInsert-modalRadio:checked"),this.inputButton=this.dialog.querySelector(".js-tagInsert-modalInput"),this.rangeSlider=this.dialog.querySelector(".js-tagInsert-rangeSlider"),this.rangeValue=this.dialog.querySelector(".js-tagInsert-rangeValue"),this.rangeValue&&(this.nextText=this.rangeValue.nextElementSibling)),this.init()}init(){this.modalOutputVal(),this.selectArea(),this.inputDate(),this.inputComedian()}selectArea(){this.selectedArea&&this.selectedArea.forEach(e=>{e.addEventListener("click",t=>{const r=t.target;if(r)if(r.checked)this.searchOutputVal(r);else{const i=r.dataset,o=Object.keys(i).map(l=>`[data-${l}="${i[l]}"]`).join("");if(!this.tagList)return;const a=this.tagList.querySelector(o);if(!a)return;a.remove()}})})}inputDate(){this.inputtedDate&&this.inputtedDate.addEventListener("input",e=>{const t=e.target;!t||t.value==""||this.searchOutputVal(t)}),this.selectedDate&&this.selectedDate.forEach(e=>{e.addEventListener("click",t=>{const r=t.target;if(r)if(r.checked)this.searchOutputVal(r);else{const i=r.dataset,o=Object.keys(i).map(l=>`[data-${l}="${i[l]}"]`).join("");if(!this.tagList)return;const a=this.tagList.querySelector(o);if(!a)return;a.remove()}})})}inputComedian(){if(this.inputtedComedian){const e=this.inputtedComedian.closest(".c-input");if(!e)return;const t=e.querySelector("button");if(!t)return;t.addEventListener("click",()=>{const r=e.querySelector("input");!r||r.value==""||this.searchOutputVal(r)})}}getModalRadioVal(){if(!this.selectedRadio)return;const e=[];return this.selectedRadio.forEach(t=>{e.push({value:t.value,dataset:t.dataset})}),e}getModalSliderVal(){if(!(!this.rangeValue||!this.rangeValue.textContent)){if(this.rangeValue.textContent==="無料")return 0;{if(!this.rangeValue.textContent)return;const t=this.rangeValue.textContent.replace(/,/g,""),r=parseInt(t,10);return this.rangeValue?r:0}}}searchOutputVal(e){var a;if(!this.searchPanel)return;const t=(a=this.templateTag)==null?void 0:a.content.cloneNode(!0),r=t.querySelector(".js-tagInsert-inputValue"),i=r==null?void 0:r.parentElement;if(!this.templateTag||!this.tagList)return;r&&(r.textContent=`${e.value}`);const o=e.dataset;for(const l in o)if(i&&o.hasOwnProperty(l)){const h=this.tagList.querySelector(`[data-${l}]`);this.searchPanel.querySelectorAll(`[data-${l}]`).forEach(g=>{if(g!==e)switch(g.type){case"radio":g.checked&&(g.checked=!1);break;case"text":g.value&&(g.value="");break;case"number":g.value&&(g.value="");break}}),h&&h.remove(),i.dataset[l]=o[l]}this.tagList.appendChild(t),this.cancelVal()}modalOutputVal(){!this.inputButton||!this.dialog||this.inputButton.addEventListener("click",()=>{if(!this.dialog)return;this.selectedRadio=this.dialog.querySelectorAll(".js-modalBase-radio:checked"),this.rangeSlider=this.dialog.querySelector(".js-modalBase-rangeSlider");const e=this.getModalRadioVal(),t=this.getModalSliderVal();if(!(!this.templateTag||!this.tagList||!e)){if(e.forEach(r=>{const i=this.templateTag.content.cloneNode(!0),o=i.querySelector(".js-tagInsert-inputValue");if(this.tagList){if(o){o&&(o.textContent=`${r.value}`);const a=r.dataset,l=o.parentElement;if(l){for(const h in a)if(l&&a.hasOwnProperty(h)){const d=this.tagList.querySelector(`[data-${h}]`);d&&d.remove(),l.dataset[h]=a[h]}}}this.tagList.appendChild(i)}}),t||t===0){const r=this.templateTag.content.cloneNode(!0),i=r.querySelector(".js-tagInsert-inputValue");if(i&&this.rangeSlider){if(t==0)i.textContent="無料";else{const o=t.toLocaleString("ja-JP");i.textContent=`～${o}円`}if(!this.tagList)return;if(this.rangeValue&&this.rangeValue.textContent!==null&&this.rangeValue.textContent!==void 0){const o=this.rangeValue.textContent;if(o!==null){const h=o.replace(/,/g,"");this.rangeSlider.dataset.fee=h}const a=this.rangeSlider.dataset,l=i.parentElement;if(l)for(const h in a){if(l&&a.hasOwnProperty(h)){const d=this.tagList.querySelector(`[data-${h}]`);d&&d.remove()}l.dataset[h]=a[h]}}this.tagList.appendChild(r)}}else{const r=this.tagList.querySelector("[data-fee]");r==null||r.remove()}this.cancelVal()}})}cancelVal(){this.cancelButton=this.tagNode.querySelectorAll(".js-tagInsert-cancel"),this.cancelButton&&this.cancelButton.forEach(e=>{e.addEventListener("click",t=>{const i=t.target.parentElement;if(i){const o=i.dataset;if(o&&this.tagList&&this.searchPanel){const a=Object.keys(o)[0],l=o[a],h=Array.from(this.searchPanel.querySelectorAll(`[data-${a}]`)),d=Array.from(h).find(g=>g instanceof HTMLElement&&g.dataset[a]===l);if(d){const g=d;if(g instanceof HTMLInputElement)switch(g.type){case"radio":g.checked&&(g.checked=!1);break;case"text":g.value&&(g.value="");break;case"number":g.value}}this.callDateShowOpen()}if(o&&this.tagList&&this.dialog){const a=Object.keys(o)[0],l=o[a],h=Array.from(this.dialog.querySelectorAll(`[data-${a}]`));if(a){const d=h.find(g=>g instanceof HTMLElement&&g.dataset[a]===l);if(d&&d instanceof HTMLInputElement&&d.checked&&(d.checked=!1),d&&d instanceof HTMLInputElement&&this.rangeSlider&&this.rangeValue){const g=this.rangeValue.nextElementSibling;this.rangeSlider.value="10000",this.rangeValue.textContent="上限なし",g&&!g.classList.contains("u-hidden")&&g.classList.add("u-hidden")}}else{if(!this.rangeSlider||!this.rangeValue)return;this.nextText&&!this.nextText.classList.contains("u-hidden")&&this.nextText.classList.add("u-hidden")}}i&&i instanceof Element&&i.remove()}})})}callDateShowOpen(){document.querySelectorAll(".js-dateCalender").forEach(t=>{new Sh({dateNode:t}).showOpen()})}}class nw{constructor(e){$(this,"modalNode");$(this,"modalOpenBtn");$(this,"dialog");$(this,"modalCloseBtn",null);$(this,"modalOverlay");$(this,"body");$(this,"ua");$(this,"isiOS");$(this,"clearButton",null);$(this,"radioButtons",null);$(this,"rangeSlider",null);$(this,"rangeValue",null);$(this,"nextText",null);this.modalNode=e.modalNode,this.modalOpenBtn=this.modalNode.querySelector(".js-modalBase-open"),this.dialog=this.modalNode.querySelector(".js-modalBase-dialog"),this.modalOverlay=this.modalNode.querySelector(".u-overlay"),this.body=document.querySelector("body"),this.ua=window.navigator.userAgent.toLowerCase(),this.isiOS=this.ua.indexOf("iphone")>-1||this.ua.indexOf("ipad")>-1||this.ua.indexOf("macintosh")>-1&&"ontouchend"in document,this.dialog&&(this.modalCloseBtn=this.dialog.querySelectorAll(".js-modalBase-close"),this.clearButton=this.dialog.querySelector(".js-modalBase-clear"),this.radioButtons=this.dialog.querySelectorAll(".js-modalBase-radio"),this.rangeSlider=this.dialog.querySelector(".js-modalBase-rangeSlider"),this.rangeValue=this.dialog.querySelector(".js-modalBase-rangeValue"),this.rangeValue&&(this.nextText=this.rangeValue.nextElementSibling)),this.init()}init(){this.showModal(),this.closeModal(),this.modalExceptClose(),this.clearRadioVal(),this.clearSliderVal()}showModal(){this.modalOpenBtn!=null&&this.modalOpenBtn.addEventListener("click",()=>{if(this.body&&this.dialog&&this.modalOverlay){this.body.style.pointerEvents="none",this.dialog.style.pointerEvents="auto";const e=this.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],r=e[e.length-1];this.dialog.addEventListener("keydown",i=>{(i.key==="Tab"||i.keyCode===9)&&(i.shiftKey?document.activeElement===t&&(r.focus(),i.preventDefault()):document.activeElement===r&&(t.focus(),i.preventDefault()))}),t.focus(),this.dialog.classList.add("-show"),this.modalOverlay.classList.add("-show"),this.body&&this.body.classList.add("-hidden"),this.bodyFixedOn()}})}closeModal(){this.modalCloseBtn&&this.modalCloseBtn.forEach(e=>{e.addEventListener("click",()=>{this.body&&(this.body.style.pointerEvents="auto",this.dialog&&this.modalOverlay&&(this.dialog.classList.remove("-show"),this.modalOverlay.classList.remove("-show"),this.body&&this.body.classList.remove("-hidden")),this.bodyFixedOff())})})}bodyFixedOn(){let e=0;this.isiOS?(e=window.pageYOffset,this.body&&(this.body.style.position="fixed",this.body.style.top=`-${e}px`)):this.body&&this.body.classList.add("-hidden")}bodyFixedOff(){this.isiOS?(this.body&&(this.body.style.removeProperty("position"),this.body.style.removeProperty("top")),window.scrollTo(0,0)):this.body&&this.body.classList.remove("-hidden")}clearRadioVal(){this.clearButton&&this.clearButton.addEventListener("click",()=>{this.radioButtons&&this.radioButtons.forEach(e=>{e.checked=!1})})}clearSliderVal(){this.clearButton&&this.clearButton.addEventListener("click",()=>{!this.rangeSlider||!this.rangeValue||(this.rangeSlider.value="10000",this.rangeValue.textContent="上限なし",this.nextText&&!this.nextText.classList.contains("u-hidden")&&this.nextText.classList.add("u-hidden"))})}modalExceptClose(){this.modalOverlay==null||this.dialog==null||(this.dialog.addEventListener("click",e=>{e.stopPropagation()}),this.modalOverlay.addEventListener("click",()=>{this.body&&(this.body.style.pointerEvents="auto",this.dialog&&this.modalOverlay&&(this.dialog.classList.remove("-show"),this.modalOverlay.classList.remove("-show"),this.body&&this.body.classList.remove("-hidden")),this.bodyFixedOff())}))}}class rw{constructor(){$(this,"selectedArea",null);$(this,"selectedDate",null);$(this,"selectedComedian",null);$(this,"selectedTime",null);$(this,"selectedEventer",null);$(this,"selectedFee",null);this.init()}init(){this.observeFilterTagChanges()}observeFilterTagChanges(){const e=document.querySelector(".js-tagInsert-list");if(!e)return;new MutationObserver(r=>{r.forEach(()=>{this.checkAllTags(),this.filterEvents()})}).observe(e,{childList:!0,subtree:!0})}checkAllTags(){const e=document.querySelectorAll(".js-tagInsert-dataType");let t=!1,r=!1,i=!1,o=!1,a=!1,l=!1;e.forEach(h=>{const d=h,g=d.querySelector(".js-tagInsert-inputValue");g&&g.textContent&&(d.dataset.area&&(this.selectedArea=g.textContent,t=!0),d.dataset.date&&(this.setSearchDate(g.textContent),r=!0),d.dataset.comedian&&(this.selectedComedian=g.textContent,i=!0),d.dataset.time&&(this.setSearchTime(g.textContent),o=!0),d.dataset.eventer&&(this.selectedEventer=g.textContent,a=!0),d.dataset.fee&&(this.setSearchFee(g.textContent),l=!0))}),t||(this.selectedArea=null),r||(this.selectedDate=null),i||(this.selectedComedian=null),o||(this.selectedTime=null),a||(this.selectedEventer=null),l||(this.selectedFee=null)}setSearchDate(e){const t=new Date;let r=t;switch(e){case"今日":break;case"明日":const i=new Date(t);i.setDate(t.getDate()+1),r=i;break;case"次の土曜":const o=new Date(t),a=(6-t.getDay()+7)%7||7;o.setDate(t.getDate()+a),r=o;break;case"次の日曜":const l=new Date(t),h=(7-t.getDay())%7||7;l.setDate(t.getDate()+h),r=l;break;default:const d=e.split("-"),g=parseInt(d[0],10),C=parseInt(d[1],10)-1,S=parseInt(d[2],10);r=new Date(g,C,S,0,0,0);break}this.selectedDate=r}setSearchTime(e){switch(this.selectedTime=new Map,e){case"4:00 ～":this.selectedTime.set("start",4*60),this.selectedTime.set("end",12*60);break;case"12:00 ～":this.selectedTime.set("start",12*60),this.selectedTime.set("end",17*60);break;case"17:00 ～":this.selectedTime.set("start",17*60),this.selectedTime.set("end",4*60);break;default:this.selectedTime=null;break}}setSearchFee(e){const t=e.replace(/[～,円]/g,"");this.selectedFee=parseInt(t,10)}filterEvents(){qr.getInstance().filterEvents(t=>{let r=!0,i=!0,o=!0,a=!0,l=!0,h=!0;if(this.selectedArea&&(r=t.location.area.includes(this.selectedArea)),this.selectedDate){const d=t.opening_time.toDate();i=d.getFullYear()===this.selectedDate.getFullYear()&&d.getMonth()===this.selectedDate.getMonth()&&d.getDate()===this.selectedDate.getDate()}if(this.selectedComedian&&(o=t.comedians.some(d=>d.includes(this.selectedComedian))),this.selectedTime){const d=t.start_time.toDate(),g=d.getHours()*60+d.getMinutes(),C=this.selectedTime.get("start"),S=this.selectedTime.get("end");if(C!=null&&S!=null)switch(C){case 4*60:case 12*60:a=g>=C&&g<S;break;case 17*60:a=g>=C||g<S;break}}if(this.selectedEventer){const d=["吉本興業","松竹芸能","マセキ芸能社","ホリプロコム","ケイダッシュステージ","浅井企画","K-PRO","U＆Cプロダクション","ラスタ池袋"];this.selectedEventer==="その他"?l=!d.includes(t.eventer):l=t.eventer.includes(this.selectedEventer)}return this.selectedFee&&(h=parseInt(t.pre_ordered_fee,10)<=this.selectedFee),r&&i&&o&&a&&l&&h})}}class iw{constructor(e){$(this,"scrollNode");$(this,"floatBtn");this.scrollNode=e.scrollNode,this.floatBtn=this.scrollNode.querySelector(".js-scrollPosition-float"),this.init()}init(){this.floatToTop(),this.clickToDown(),this.fixedElement()}floatToTop(){this.floatBtn&&this.floatBtn.addEventListener("click",()=>{})}clickToDown(){}fixedElement(){}}class sw{constructor(e){$(this,"accordionNode");$(this,"actionBtn");this.accordionNode=e.accordionNode,this.actionBtn=this.accordionNode.querySelector(".js-accordion-open"),this.init()}init(){this.showOpen(),this.closeHidden()}showOpen(){this.actionBtn&&this.actionBtn.addEventListener("click",()=>{})}closeHidden(){this.actionBtn&&this.actionBtn.addEventListener("click",()=>{})}}document.addEventListener("DOMContentLoaded",()=>{const n=document;new ow(n),document.querySelector(".js-dataInsert")&&Zi.getInstance()});class ow{constructor(e){const t=e.querySelectorAll(".js-modalBase");for(let d=0;d<t.length;d++)new nw({modalNode:t[d]});const r=e.querySelectorAll(".js-radioCheck");for(let d=0;d<r.length;d++)new zv({radioNode:r[d]});const i=e.querySelectorAll(".js-rangeSetting");for(let d=0;d<i.length;d++)new Kv({rangeNode:i[d]});const o=document.querySelectorAll(".js-tagInsert");for(let d=0;d<o.length;d++)new tw({tagNode:o[d]});const a=document.querySelectorAll(".js-scrollPosition");for(let d=0;d<a.length;d++)new iw({scrollNode:a[d]});const l=document.querySelectorAll(".js-accordion");for(let d=0;d<l.length;d++)new sw({accordionNode:l[d]});const h=document.querySelectorAll(".js-dateCalender");for(let d=0;d<h.length;d++)new Sh({dateNode:h[d]});new rw}}
