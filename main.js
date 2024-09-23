var cf=Object.defineProperty;var lf=(n,e,t)=>e in n?cf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var q=(n,e,t)=>lf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Sc={};/**
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
 */const eu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},uf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,y=(s&3)<<4|c>>4;let S=(c&15)<<2|d>>6,D=d&63;u||(D=64,a||(S=64)),r.push(t[f],t[y],t[S],t[D])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(eu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||y==null)throw new hf;const S=s<<2|c>>4;if(r.push(S),d!==64){const D=c<<4&240|d>>2;if(r.push(D),y!==64){const x=d<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const df=function(n){const e=eu(n);return tu.encodeByteArray(e,!0)},is=function(n){return df(n).replace(/\./g,"")},nu=function(n){try{return tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pf=()=>ff().__FIREBASE_DEFAULTS__,mf=()=>{if(typeof process>"u"||typeof Sc>"u")return;const n=Sc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nu(n[1]);return e&&JSON.parse(e)},Is=()=>{try{return pf()||mf()||gf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ru=n=>{var e,t;return(t=(e=Is())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_f=n=>{const e=ru(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},iu=()=>{var n;return(n=Is())===null||n===void 0?void 0:n.config},su=n=>{var e;return(e=Is())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function vf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(t)),is(JSON.stringify(a)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Ef(){var n;const e=(n=Is())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ou(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function If(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tf(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Af(){return!Ef()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function au(){try{return typeof indexedDB=="object"}catch{return!1}}function cu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function bf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Cf="FirebaseError";class ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cf,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,In.prototype.create)}}class In{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Sf(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ct(i,c,r)}}function Sf(n,e){return n.replace(Rf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rf=/\{\$([^}]+)}/g;function Pf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Rc(s)&&Rc(a)){if(!zr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rc(n){return n!==null&&typeof n=="object"}/**
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
 */function oi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Or(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Df(n,e){const t=new kf(n,e);return t.subscribe.bind(t)}class kf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Nf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=io),i.error===void 0&&(i.error=io),i.complete===void 0&&(i.complete=io);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function io(){}/**
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
 */const Mf=1e3,Of=2,Vf=4*60*60*1e3,Lf=.5;function Pc(n,e=Mf,t=Of){const r=e*Math.pow(t,n),i=Math.round(Lf*r*(Math.random()-.5)*2);return Math.min(Vf,r+i)}/**
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
 */function Be(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class xf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new yf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uf(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ff(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ff(n){return n===ln?void 0:n}function Uf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const jf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},qf=ne.INFO,$f={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Hf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$f[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ts{constructor(e){this.name=e,this._logLevel=qf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Wf=(n,e)=>e.some(t=>n instanceof t);let Dc,kc;function zf(){return Dc||(Dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kf(){return kc||(kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lu=new WeakMap,Ao=new WeakMap,uu=new WeakMap,so=new WeakMap,Yo=new WeakMap;function Gf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(qt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&lu.set(t,n)}).catch(()=>{}),Yo.set(e,n),e}function Yf(n){if(Ao.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ao.set(n,e)}let bo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||uu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qf(n){bo=n(bo)}function Jf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oo(this),e,...t);return uu.set(r,e.sort?e.sort():[e]),qt(r)}:Kf().includes(n)?function(...e){return n.apply(oo(this),e),qt(lu.get(this))}:function(...e){return qt(n.apply(oo(this),e))}}function Xf(n){return typeof n=="function"?Jf(n):(n instanceof IDBTransaction&&Yf(n),Wf(n,zf())?new Proxy(n,bo):n)}function qt(n){if(n instanceof IDBRequest)return Gf(n);if(so.has(n))return so.get(n);const e=Xf(n);return e!==n&&(so.set(n,e),Yo.set(e,n)),e}const oo=n=>Yo.get(n);function hu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=qt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(qt(a.result),u.oldVersion,u.newVersion,qt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Zf=["get","getKey","getAll","getAllKeys","count"],ep=["put","add","delete","clear"],ao=new Map;function Nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ao.get(e))return ao.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ep.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zf.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return ao.set(e,s),s}Qf(n=>({...n,get:(e,t,r)=>Nc(e,t)||n.get(e,t,r),has:(e,t)=>!!Nc(e,t)||n.has(e,t)}));/**
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
 */class tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(np(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Co="@firebase/app",Mc="0.10.10";/**
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
 */const Ct=new Ts("@firebase/app"),rp="@firebase/app-compat",ip="@firebase/analytics-compat",sp="@firebase/analytics",op="@firebase/app-check-compat",ap="@firebase/app-check",cp="@firebase/auth",lp="@firebase/auth-compat",up="@firebase/database",hp="@firebase/database-compat",dp="@firebase/functions",fp="@firebase/functions-compat",pp="@firebase/installations",mp="@firebase/installations-compat",gp="@firebase/messaging",_p="@firebase/messaging-compat",yp="@firebase/performance",vp="@firebase/performance-compat",wp="@firebase/remote-config",Ep="@firebase/remote-config-compat",Ip="@firebase/storage",Tp="@firebase/storage-compat",Ap="@firebase/firestore",bp="@firebase/vertexai-preview",Cp="@firebase/firestore-compat",Sp="firebase",Rp="10.13.1";/**
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
 */const So="[DEFAULT]",Pp={[Co]:"fire-core",[rp]:"fire-core-compat",[sp]:"fire-analytics",[ip]:"fire-analytics-compat",[ap]:"fire-app-check",[op]:"fire-app-check-compat",[cp]:"fire-auth",[lp]:"fire-auth-compat",[up]:"fire-rtdb",[hp]:"fire-rtdb-compat",[dp]:"fire-fn",[fp]:"fire-fn-compat",[pp]:"fire-iid",[mp]:"fire-iid-compat",[gp]:"fire-fcm",[_p]:"fire-fcm-compat",[yp]:"fire-perf",[vp]:"fire-perf-compat",[wp]:"fire-rc",[Ep]:"fire-rc-compat",[Ip]:"fire-gcs",[Tp]:"fire-gcs-compat",[Ap]:"fire-fst",[Cp]:"fire-fst-compat",[bp]:"fire-vertex","fire-js":"fire-js",[Sp]:"fire-js-all"};/**
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
 */const ss=new Map,Dp=new Map,Ro=new Map;function Oc(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mt(n){const e=n.name;if(Ro.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,n);for(const t of ss.values())Oc(t,n);for(const t of Dp.values())Oc(t,n);return!0}function Tn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n.settings!==void 0}/**
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
 */const kp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new In("app","Firebase",kp);/**
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
 */class Np{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=Rp;function du(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:So,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(t||(t=iu()),!t)throw $t.create("no-options");const s=ss.get(i);if(s){if(zr(t,s.options)&&zr(r,s.config))return s;throw $t.create("duplicate-app",{appName:i})}const a=new Bf(i);for(const u of Ro.values())a.addComponent(u);const c=new Np(t,r,a);return ss.set(i,c),c}function Qo(n=So){const e=ss.get(n);if(!e&&n===So&&iu())return du();if(!e)throw $t.create("no-app",{appName:n});return e}function Xe(n,e,t){var r;let i=(r=Pp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(c.join(" "));return}mt(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Mp="firebase-heartbeat-database",Op=1,Kr="firebase-heartbeat-store";let co=null;function fu(){return co||(co=hu(Mp,Op,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kr)}catch(t){console.warn(t)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),co}async function Vp(n){try{const t=(await fu()).transaction(Kr),r=await t.objectStore(Kr).get(pu(n));return await t.done,r}catch(e){if(e instanceof ct)Ct.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function Vc(n,e){try{const r=(await fu()).transaction(Kr,"readwrite");await r.objectStore(Kr).put(e,pu(n)),await r.done}catch(t){if(t instanceof ct)Ct.warn(t.message);else{const r=$t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(r.message)}}}function pu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Lp=1024,xp=30*24*60*60*1e3;class Fp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=xp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lc(),{heartbeatsToSend:r,unsentEntries:i}=Up(this._heartbeatsCache.heartbeats),s=is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ct.warn(t),""}}}function Lc(){return new Date().toISOString().substring(0,10)}function Up(n,e=Lp){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),xc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),xc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Bp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return au()?cu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xc(n){return is(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function jp(n){mt(new st("platform-logger",e=>new tp(e),"PRIVATE")),mt(new st("heartbeat",e=>new Fp(e),"PRIVATE")),Xe(Co,Mc,n),Xe(Co,Mc,"esm2017"),Xe("fire-js","")}jp("");var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mn,mu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function w(){}w.prototype=_.prototype,T.D=_.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(E,A,C){for(var v=Array(arguments.length-2),et=2;et<arguments.length;et++)v[et-2]=arguments[et];return _.prototype[A].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,w){w||(w=0);var E=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)E[A]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(A=0;16>A;++A)E[A]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=T.g[0],w=T.g[1],A=T.g[2];var C=T.g[3],v=_+(C^w&(A^C))+E[0]+3614090360&4294967295;_=w+(v<<7&4294967295|v>>>25),v=C+(A^_&(w^A))+E[1]+3905402710&4294967295,C=_+(v<<12&4294967295|v>>>20),v=A+(w^C&(_^w))+E[2]+606105819&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(_^A&(C^_))+E[3]+3250441966&4294967295,w=A+(v<<22&4294967295|v>>>10),v=_+(C^w&(A^C))+E[4]+4118548399&4294967295,_=w+(v<<7&4294967295|v>>>25),v=C+(A^_&(w^A))+E[5]+1200080426&4294967295,C=_+(v<<12&4294967295|v>>>20),v=A+(w^C&(_^w))+E[6]+2821735955&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(_^A&(C^_))+E[7]+4249261313&4294967295,w=A+(v<<22&4294967295|v>>>10),v=_+(C^w&(A^C))+E[8]+1770035416&4294967295,_=w+(v<<7&4294967295|v>>>25),v=C+(A^_&(w^A))+E[9]+2336552879&4294967295,C=_+(v<<12&4294967295|v>>>20),v=A+(w^C&(_^w))+E[10]+4294925233&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(_^A&(C^_))+E[11]+2304563134&4294967295,w=A+(v<<22&4294967295|v>>>10),v=_+(C^w&(A^C))+E[12]+1804603682&4294967295,_=w+(v<<7&4294967295|v>>>25),v=C+(A^_&(w^A))+E[13]+4254626195&4294967295,C=_+(v<<12&4294967295|v>>>20),v=A+(w^C&(_^w))+E[14]+2792965006&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(_^A&(C^_))+E[15]+1236535329&4294967295,w=A+(v<<22&4294967295|v>>>10),v=_+(A^C&(w^A))+E[1]+4129170786&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(_^w))+E[6]+3225465664&4294967295,C=_+(v<<9&4294967295|v>>>23),v=A+(_^w&(C^_))+E[11]+643717713&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(A^C))+E[0]+3921069994&4294967295,w=A+(v<<20&4294967295|v>>>12),v=_+(A^C&(w^A))+E[5]+3593408605&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(_^w))+E[10]+38016083&4294967295,C=_+(v<<9&4294967295|v>>>23),v=A+(_^w&(C^_))+E[15]+3634488961&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(A^C))+E[4]+3889429448&4294967295,w=A+(v<<20&4294967295|v>>>12),v=_+(A^C&(w^A))+E[9]+568446438&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(_^w))+E[14]+3275163606&4294967295,C=_+(v<<9&4294967295|v>>>23),v=A+(_^w&(C^_))+E[3]+4107603335&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(A^C))+E[8]+1163531501&4294967295,w=A+(v<<20&4294967295|v>>>12),v=_+(A^C&(w^A))+E[13]+2850285829&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(_^w))+E[2]+4243563512&4294967295,C=_+(v<<9&4294967295|v>>>23),v=A+(_^w&(C^_))+E[7]+1735328473&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(A^C))+E[12]+2368359562&4294967295,w=A+(v<<20&4294967295|v>>>12),v=_+(w^A^C)+E[5]+4294588738&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^A)+E[8]+2272392833&4294967295,C=_+(v<<11&4294967295|v>>>21),v=A+(C^_^w)+E[11]+1839030562&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^_)+E[14]+4259657740&4294967295,w=A+(v<<23&4294967295|v>>>9),v=_+(w^A^C)+E[1]+2763975236&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^A)+E[4]+1272893353&4294967295,C=_+(v<<11&4294967295|v>>>21),v=A+(C^_^w)+E[7]+4139469664&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^_)+E[10]+3200236656&4294967295,w=A+(v<<23&4294967295|v>>>9),v=_+(w^A^C)+E[13]+681279174&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^A)+E[0]+3936430074&4294967295,C=_+(v<<11&4294967295|v>>>21),v=A+(C^_^w)+E[3]+3572445317&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^_)+E[6]+76029189&4294967295,w=A+(v<<23&4294967295|v>>>9),v=_+(w^A^C)+E[9]+3654602809&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^A)+E[12]+3873151461&4294967295,C=_+(v<<11&4294967295|v>>>21),v=A+(C^_^w)+E[15]+530742520&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^_)+E[2]+3299628645&4294967295,w=A+(v<<23&4294967295|v>>>9),v=_+(A^(w|~C))+E[0]+4096336452&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~A))+E[7]+1126891415&4294967295,C=_+(v<<10&4294967295|v>>>22),v=A+(_^(C|~w))+E[14]+2878612391&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~_))+E[5]+4237533241&4294967295,w=A+(v<<21&4294967295|v>>>11),v=_+(A^(w|~C))+E[12]+1700485571&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~A))+E[3]+2399980690&4294967295,C=_+(v<<10&4294967295|v>>>22),v=A+(_^(C|~w))+E[10]+4293915773&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~_))+E[1]+2240044497&4294967295,w=A+(v<<21&4294967295|v>>>11),v=_+(A^(w|~C))+E[8]+1873313359&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~A))+E[15]+4264355552&4294967295,C=_+(v<<10&4294967295|v>>>22),v=A+(_^(C|~w))+E[6]+2734768916&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~_))+E[13]+1309151649&4294967295,w=A+(v<<21&4294967295|v>>>11),v=_+(A^(w|~C))+E[4]+4149444226&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~A))+E[11]+3174756917&4294967295,C=_+(v<<10&4294967295|v>>>22),v=A+(_^(C|~w))+E[2]+718787259&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var w=_-this.blockSize,E=this.B,A=this.h,C=0;C<_;){if(A==0)for(;C<=w;)i(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<_;)if(E[A++]=T.charCodeAt(C++),A==this.blockSize){i(this,E),A=0;break}}else for(;C<_;)if(E[A++]=T[C++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var w=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=w&255,w/=256;for(this.u(T),T=Array(16),_=w=0;4>_;++_)for(var E=0;32>E;E+=8)T[w++]=this.g[_]>>>E&255;return T};function s(T,_){var w=c;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=_(T)}function a(T,_){this.h=_;for(var w=[],E=!0,A=T.length-1;0<=A;A--){var C=T[A]|0;E&&C==_||(w[A]=C,E=!1)}this.g=w}var c={};function u(T){return-128<=T&&128>T?s(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return L(d(-T));for(var _=[],w=1,E=0;T>=w;E++)_[E]=T/w|0,w*=4294967296;return new a(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return L(f(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(_,8)),E=y,A=0;A<T.length;A+=8){var C=Math.min(8,T.length-A),v=parseInt(T.substring(A,A+C),_);8>C?(C=d(Math.pow(_,C)),E=E.j(C).add(d(v))):(E=E.j(w),E=E.add(d(v)))}return E}var y=u(0),S=u(1),D=u(16777216);n=a.prototype,n.m=function(){if(O(this))return-L(this).m();for(var T=0,_=1,w=0;w<this.g.length;w++){var E=this.i(w);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(O(this))return"-"+L(this).toString(T);for(var _=d(Math.pow(T,6)),w=this,E="";;){var A=le(w,_).g;w=te(w,A.j(_));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=A,x(w))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=te(this,T),O(T)?-1:x(T)?0:1};function L(T){for(var _=T.g.length,w=[],E=0;E<_;E++)w[E]=~T.g[E];return new a(w,~T.h).add(S)}n.abs=function(){return O(this)?L(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],E=0,A=0;A<=_;A++){var C=E+(this.i(A)&65535)+(T.i(A)&65535),v=(C>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);E=v>>>16,C&=65535,v&=65535,w[A]=v<<16|C}return new a(w,w[w.length-1]&-2147483648?-1:0)};function te(T,_){return T.add(L(_))}n.j=function(T){if(x(this)||x(T))return y;if(O(this))return O(T)?L(this).j(L(T)):L(L(this).j(T));if(O(T))return L(this.j(L(T)));if(0>this.l(D)&&0>T.l(D))return d(this.m()*T.m());for(var _=this.g.length+T.g.length,w=[],E=0;E<2*_;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<T.g.length;A++){var C=this.i(E)>>>16,v=this.i(E)&65535,et=T.i(A)>>>16,Dt=T.i(A)&65535;w[2*E+2*A]+=v*Dt,X(w,2*E+2*A),w[2*E+2*A+1]+=C*Dt,X(w,2*E+2*A+1),w[2*E+2*A+1]+=v*et,X(w,2*E+2*A+1),w[2*E+2*A+2]+=C*et,X(w,2*E+2*A+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new a(w,0)};function X(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function Z(T,_){this.g=T,this.h=_}function le(T,_){if(x(_))throw Error("division by zero");if(x(T))return new Z(y,y);if(O(T))return _=le(L(T),_),new Z(L(_.g),L(_.h));if(O(_))return _=le(T,L(_)),new Z(L(_.g),_.h);if(30<T.g.length){if(O(T)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var w=S,E=_;0>=E.l(T);)w=Ne(w),E=Ne(E);var A=ae(w,1),C=ae(E,1);for(E=ae(E,2),w=ae(w,2);!x(E);){var v=C.add(E);0>=v.l(T)&&(A=A.add(w),C=v),E=ae(E,1),w=ae(w,1)}return _=te(T,A.j(_)),new Z(A,_)}for(A=y;0<=T.l(_);){for(w=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=d(w),v=C.j(_);O(v)||0<v.l(T);)w-=E,C=d(w),v=C.j(_);x(C)&&(C=S),A=A.add(C),T=te(T,v)}return new Z(A,T)}n.A=function(T){return le(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)&T.i(E);return new a(w,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)|T.i(E);return new a(w,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)^T.i(E);return new a(w,this.h^T.h)};function Ne(T){for(var _=T.g.length+1,w=[],E=0;E<_;E++)w[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(w,T.h)}function ae(T,_){var w=_>>5;_%=32;for(var E=T.g.length-w,A=[],C=0;C<E;C++)A[C]=0<_?T.i(C+w)>>>_|T.i(C+w+1)<<32-_:T.i(C+w);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,mn=a}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});var ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gu,_u,Lr,yu,Yi,Po,vu,wu,Eu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ji=="object"&&ji];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var R=h++;return{value:l(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function y(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function S(o,l,h){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,S.apply(null,arguments)}function D(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function x(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,R){for(var V=Array(arguments.length-2),he=2;he<arguments.length;he++)V[he-2]=arguments[he];return l.prototype[b].apply(p,V)}}function O(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function L(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,R=p.length||0;o.length=b+R;for(let V=0;V<R;V++)o[b+V]=p[V]}else o.push(p)}}class te{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function X(o){return/^[\s\xa0]*$/.test(o)}function Z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function le(o){return le[" "](o),o}le[" "]=function(){};var Ne=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ae(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function _(o){const l={};for(const h in o)l[h]=o[h];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let R=0;R<w.length;R++)h=w[R],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function C(o){c.setTimeout(()=>{throw o},0)}function v(){var o=Rn;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class et{constructor(){this.h=this.g=null}add(l,h){const p=Dt.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Dt=new te(()=>new zs,o=>o.reset());class zs{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,kt=!1,Rn=new et,gi=()=>{const o=c.Promise.resolve(void 0);Jt=()=>{o.then(hr)}};var hr=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){C(h)}var l=Dt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}kt=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Ks=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function tt(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Ne){e:{try{le(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:dr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&tt.aa.h.call(this)}}x(tt,Ie);var dr={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),yt=0;function Pn(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++yt,this.da=this.fa=!1}function Dn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xt(o){this.src=o,this.g={},this.h=0}Xt.prototype.add=function(o,l,h,p,b){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var V=fr(o,l,p,b);return-1<V?(l=o[V],h||(l.fa=!1)):(l=new Pn(l,this.src,R,!!p,b),l.fa=h,o.push(l)),l};function Nt(o,l){var h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=b)&&Array.prototype.splice.call(p,b,1),R&&(Dn(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function fr(o,l,h,p){for(var b=0;b<o.length;++b){var R=o[b];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==p)return b}return-1}var pr="closure_lm_"+(1e6*Math.random()|0),kn={};function _i(o,l,h,p,b){if(Array.isArray(l)){for(var R=0;R<l.length;R++)_i(o,l[R],h,p,b);return null}return h=tn(h),o&&o[_t]?o.K(l,h,d(p)?!!p.capture:!!p,b):yi(o,l,h,!1,p,b)}function yi(o,l,h,p,b,R){if(!l)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,he=en(o);if(he||(o[pr]=he=new Xt(o)),h=he.add(l,h,p,V,R),h.proxy)return h;if(p=vi(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Ks||(b=V),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(wi(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function vi(){function o(h){return l.call(o.src,o.listener,h)}const l=Ei;return o}function Zt(o,l,h,p,b){if(Array.isArray(l))for(var R=0;R<l.length;R++)Zt(o,l[R],h,p,b);else p=d(p)?!!p.capture:!!p,h=tn(h),o&&o[_t]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],h=fr(R,h,p,b),-1<h&&(Dn(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=en(o))&&(l=o.g[l.toString()],o=-1,l&&(o=fr(l,h,p,b)),(h=-1<o?l[o]:null)&&mr(h))}function mr(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[_t])Nt(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(wi(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=en(l))?(Nt(h,o),h.h==0&&(h.src=null,l[pr]=null)):Dn(o)}}}function wi(o){return o in kn?kn[o]:kn[o]="on"+o}function Ei(o,l){if(o.da)o=!0;else{l=new tt(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&mr(o),o=h.call(p,l)}return o}function en(o){return o=o[pr],o instanceof Xt?o:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function tn(o){return typeof o=="function"?o:(o[Nn]||(o[Nn]=function(l){return o.handleEvent(l)}),o[Nn])}function Te(){lt.call(this),this.i=new Xt(this),this.M=this,this.F=null}x(Te,lt),Te.prototype[_t]=!0,Te.prototype.removeEventListener=function(o,l,h,p){Zt(this,o,l,h,p)};function Ae(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var b=l;l=new Ie(p,o),E(l,b)}if(b=!0,h)for(var R=h.length-1;0<=R;R--){var V=l.g=h[R];b=Mn(V,p,!0,l)&&b}if(V=l.g=o,b=Mn(V,p,!0,l)&&b,b=Mn(V,p,!1,l)&&b,h)for(R=0;R<h.length;R++)V=l.g=h[R],b=Mn(V,p,!1,l)&&b}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)Dn(h[p]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Te.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function Mn(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,R=0;R<l.length;++R){var V=l[R];if(V&&!V.da&&V.capture==h){var he=V.listener,Se=V.ha||V.src;V.fa&&Nt(o.i,V),b=he.call(Se,p)!==!1&&b}}return b&&!p.defaultPrevented}function gr(o,l,h){if(typeof o=="function")h&&(o=S(o,h));else if(o&&typeof o.handleEvent=="function")o=S(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Ii(o){o.g=gr(()=>{o.g=null,o.i&&(o.i=!1,Ii(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Gs extends lt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(o){lt.call(this),this.h=o,this.g={}}x(Mt,lt);var Ti=[];function Ai(o){ae(o.g,function(l,h){this.g.hasOwnProperty(h)&&mr(l)},o),o.g={}}Mt.prototype.N=function(){Mt.aa.N.call(this),Ai(this)},Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=c.JSON.stringify,_r=c.JSON.parse,yr=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function vr(){}vr.prototype.h=null;function nn(o){return o.h||(o.h=o.i())}function On(){}var je={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){Ie.call(this,"d")}x(wr,Ie);function Er(){Ie.call(this,"c")}x(Er,Ie);var m={},g=null;function I(){return g=g||new Te}m.La="serverreachability";function P(o){Ie.call(this,m.La,o)}x(P,Ie);function M(o){const l=I();Ae(l,new P(l))}m.STAT_EVENT="statevent";function F(o,l){Ie.call(this,m.STAT_EVENT,o),this.stat=l}x(F,Ie);function H(o){const l=I();Ae(l,new F(l,o))}m.Ma="timingevent";function j(o,l){Ie.call(this,m.Ma,o),this.size=l}x(j,Ie);function Y(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function U(){this.g=!0}U.prototype.xa=function(){this.g=!1};function z(o,l,h,p,b,R){o.info(function(){if(o.g)if(R)for(var V="",he=R.split("&"),Se=0;Se<he.length;Se++){var ie=he[Se].split("=");if(1<ie.length){var Me=ie[0];ie=ie[1];var Oe=Me.split("_");V=2<=Oe.length&&Oe[1]=="type"?V+(Me+"="+ie+"&"):V+(Me+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+V})}function ce(o,l,h,p,b,R,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+R+" "+V})}function Ce(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+rn(o,h)+(p?" "+p:"")})}function qe(o,l){o.info(function(){return"TIMEOUT: "+l})}U.prototype.info=function(){};function rn(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return ue(h)}catch{return l}}var nt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sn;function Vn(){}x(Vn,vr),Vn.prototype.g=function(){return new XMLHttpRequest},Vn.prototype.i=function(){return{}},sn=new Vn;function ut(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new Mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ci}function Ci(){this.i=null,this.g="",this.h=!1}var Si={},Ir={};function Tr(o,l,h){o.L=1,o.v=Mi(vt(l)),o.m=h,o.P=!0,Ri(o,null)}function Ri(o,l){o.F=Date.now(),Di(o),o.A=vt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),sc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Ci,o.g=Tc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Gs(S(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ti[0]=b.toString()),b=Ti);for(var R=0;R<b.length;R++){var V=_i(h,b[R],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),M(),z(o.i,o.u,o.A,o.l,o.R,o.m)}ut.prototype.ca=function(o){o=o.target;const l=this.M;l&&wt(o)==3?l.j():this.Y(o)},ut.prototype.Y=function(o){try{if(o==this.g)e:{const Oe=wt(this.g);var l=this.g.Ba();const Fn=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||dc(this.g)))){this.J||Oe!=4||l==7||(l==8||0>=Fn?M(3):M(2)),Ys(this);var h=this.g.Z();this.X=h;t:if(Pi(this)){var p=dc(this.g);o="";var b=p.length,R=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Ar(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(R&&l==b-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,ce(this.i,this.u,this.A,this.l,this.R,Oe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Se=this.g;if((he=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(he)){var ie=he;break t}}ie=null}if(h=ie)Ce(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qs(this,h);else{this.o=!1,this.s=3,H(12),on(this),Ar(this);break e}}if(this.P){h=!0;let rt;for(;!this.J&&this.C<V.length;)if(rt=qd(this,V),rt==Ir){Oe==4&&(this.s=4,H(14),h=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Si){this.s=4,H(15),Ce(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Ce(this.i,this.l,rt,null),Qs(this,rt);if(Pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||V.length!=0||this.h.h||(this.s=1,H(16),h=!1),this.o=this.o&&h,!h)Ce(this.i,this.l,V,"[Invalid Chunked Response]"),on(this),Ar(this);else if(0<V.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),no(Me),Me.M=!0,H(11))}}else Ce(this.i,this.l,V,null),Qs(this,V);Oe==4&&on(this),this.o&&!this.J&&(Oe==4?vc(this.j,this):(this.o=!1,Di(this)))}else of(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,H(12)):(this.s=0,H(13)),on(this),Ar(this)}}}catch{}finally{}};function Pi(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function qd(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Ir:(h=Number(l.substring(h,p)),isNaN(h)?Si:(p+=1,p+h>l.length?Ir:(l=l.slice(p,p+h),o.C=p+h,l)))}ut.prototype.cancel=function(){this.J=!0,on(this)};function Di(o){o.S=Date.now()+o.I,Ka(o,o.I)}function Ka(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Y(S(o.ba,o),l)}function Ys(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ut.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(qe(this.i,this.A),this.L!=2&&(M(),H(17)),on(this),this.s=2,Ar(this)):Ka(this,this.S-o)};function Ar(o){o.j.G==0||o.J||vc(o.j,o)}function on(o){Ys(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ai(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Qs(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Js(h.h,o))){if(!o.K&&Js(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Fi(h),Li(h);else break e;to(h),H(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Y(S(h.Za,h),6e3));if(1>=Qa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else cn(h,11)}else if((o.K||h.g==o)&&Fi(h),!X(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let ie=b[l];if(h.T=ie[0],ie=ie[1],h.G==2)if(ie[0]=="c"){h.K=ie[1],h.ia=ie[2];const Me=ie[3];Me!=null&&(h.la=Me,h.j.info("VER="+h.la));const Oe=ie[4];Oe!=null&&(h.Aa=Oe,h.j.info("SVER="+h.Aa));const Fn=ie[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(p=1.5*Fn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const rt=o.g;if(rt){const Bi=rt.g?rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var R=p.h;R.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Xs(R,R.h),R.h=null))}if(p.D){const ro=rt.g?rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.ya=ro,fe(p.I,p.D,ro))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=o;if(p.qa=Ic(p,p.J?p.ia:null,p.W),V.K){Ja(p.h,V);var he=V,Se=p.L;Se&&(he.I=Se),he.B&&(Ys(he),Di(he)),p.g=V}else _c(p);0<h.i.length&&xi(h)}else ie[0]!="stop"&&ie[0]!="close"||cn(h,7);else h.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?cn(h,7):eo(h):ie[0]!="noop"&&h.l&&h.l.ta(ie),h.v=0)}}M(4)}catch{}}var $d=class{constructor(o,l){this.g=o,this.map=l}};function Ga(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ya(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qa(o){return o.h?1:o.g?o.g.size:0}function Js(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Xs(o,l){o.g?o.g.add(l):o.h=l}function Ja(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ga.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return O(o.i)}function Hd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function Wd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Za(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Wd(o),p=Hd(o),b=p.length,R=0;R<b;R++)l.call(void 0,p[R],h&&h[R],o)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zd(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var R=o[h].substring(0,p);b=o[h].substring(p+1)}else R=o[h];l(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function an(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof an){this.h=o.h,ki(this,o.j),this.o=o.o,this.g=o.g,Ni(this,o.s),this.l=o.l;var l=o.i,h=new Sr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),tc(this,h),this.m=o.m}else o&&(l=String(o).match(ec))?(this.h=!1,ki(this,l[1]||"",!0),this.o=br(l[2]||""),this.g=br(l[3]||"",!0),Ni(this,l[4]),this.l=br(l[5]||"",!0),tc(this,l[6]||"",!0),this.m=br(l[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}an.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Cr(l,nc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Cr(l,nc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Cr(h,h.charAt(0)=="/"?Yd:Gd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Cr(h,Jd)),o.join("")};function vt(o){return new an(o)}function ki(o,l,h){o.j=h?br(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ni(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function tc(o,l,h){l instanceof Sr?(o.i=l,Xd(o.i,o.h)):(h||(l=Cr(l,Qd)),o.i=new Sr(l,o.h))}function fe(o,l,h){o.i.set(l,h)}function Mi(o){return fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function br(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Kd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nc=/[#\/\?@]/g,Gd=/[#\?:]/g,Yd=/[#\?]/g,Qd=/[#\?@]/g,Jd=/#/g;function Sr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ot(o){o.g||(o.g=new Map,o.h=0,o.i&&zd(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Sr.prototype,n.add=function(o,l){Ot(this),this.i=null,o=Ln(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function rc(o,l){Ot(o),l=Ln(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ic(o,l){return Ot(o),l=Ln(o,l),o.g.has(l)}n.forEach=function(o,l){Ot(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)},n.na=function(){Ot(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const b=o[p];for(let R=0;R<b.length;R++)h.push(l[p])}return h},n.V=function(o){Ot(this);let l=[];if(typeof o=="string")ic(this,o)&&(l=l.concat(this.g.get(Ln(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return Ot(this),this.i=null,o=Ln(this,o),ic(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function sc(o,l,h){rc(o,l),0<h.length&&(o.i=null,o.g.set(Ln(o,l),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const R=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var b=R;V[p]!==""&&(b+="="+encodeURIComponent(String(V[p]))),o.push(b)}}return this.i=o.join("&")};function Ln(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Xd(o,l){l&&!o.j&&(Ot(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(rc(this,p),sc(this,b,h))},o)),o.j=l}function Zd(o,l){const h=new U;if(c.Image){const p=new Image;p.onload=D(Vt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=D(Vt,h,"TestLoadImage: error",!1,l,p),p.onabort=D(Vt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=D(Vt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function ef(o,l){const h=new U,p=new AbortController,b=setTimeout(()=>{p.abort(),Vt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(b),R.ok?Vt(h,"TestPingServer: ok",!0,l):Vt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Vt(h,"TestPingServer: error",!1,l)})}function Vt(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function tf(){this.g=new yr}function nf(o,l,h){const p=h||"";try{Za(o,function(b,R){let V=b;d(b)&&(V=ue(b)),l.push(p+R+"="+encodeURIComponent(V))})}catch(b){throw l.push(p+"type="+encodeURIComponent("_badmap")),b}}function Rr(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Rr,vr),Rr.prototype.g=function(){return new Oi(this.l,this.j)},Rr.prototype.i=function(o){return function(){return o}}({});function Oi(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Oi,Te),n=Oi.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Dr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function oc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Pr(this):Dr(this),this.readyState==3&&oc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Pr(this))},n.Qa=function(o){this.g&&(this.response=o,Pr(this))},n.ga=function(){this.g&&Pr(this)};function Pr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Dr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Dr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ac(o){let l="";return ae(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Zs(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ac(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):fe(o,l,h))}function ge(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ge,Te);var rf=/^https?$/i,sf=["POST","PUT"];n=ge.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sn.g(),this.v=this.o?nn(this.o):nn(sn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){cc(this,R);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())h.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(sf,l,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of h)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){cc(this,R)}};function cc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,lc(o),Vi(o)}function lc(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),Vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uc(this):this.bb())},n.bb=function(){uc(this)};function uc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||wt(o)!=4||o.Z()!=2)){if(o.u&&wt(o)==4)gr(o.Ea,0,o);else if(Ae(o,"readystatechange"),wt(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=V===0){var b=String(o.D).match(ec)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!rf.test(b?b.toLowerCase():"")}h=p}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var R=2<wt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",lc(o)}}finally{Vi(o)}}}}function Vi(o,l){if(o.g){hc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ae(o,"ready");try{h.onreadystatechange=p}catch{}}}function hc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),_r(l)}};function dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function of(o){const l={};o=(o.g&&2<=wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(X(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[b]||[];l[b]=R,R.push(h)}T(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function fc(o){this.Aa=0,this.i=[],this.j=new U,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kr("baseRetryDelayMs",5e3,o),this.cb=kr("retryDelaySeedMs",1e4,o),this.Wa=kr("forwardChannelMaxRetries",2,o),this.wa=kr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ga(o&&o.concurrentRequestLimit),this.Da=new tf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fc.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){H(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ic(this,null,this.W),xi(this)};function eo(o){if(pc(o),o.G==3){var l=o.U++,h=vt(o.I);if(fe(h,"SID",o.K),fe(h,"RID",l),fe(h,"TYPE","terminate"),Nr(o,h),l=new ut(o,o.j,l),l.L=2,l.v=Mi(vt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Tc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Di(l)}Ec(o)}function Li(o){o.g&&(no(o),o.g.cancel(),o.g=null)}function pc(o){Li(o),o.u&&(c.clearTimeout(o.u),o.u=null),Fi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function xi(o){if(!Ya(o.h)&&!o.s){o.s=!0;var l=o.Ga;Jt||gi(),kt||(Jt(),kt=!0),Rn.add(l,o),o.B=0}}function af(o,l){return Qa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Y(S(o.Ga,o,l),wc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new ut(this,this.j,o);let R=this.o;if(this.S&&(R?(R=_(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=gc(this,b,l),h=vt(this.I),fe(h,"RID",o),fe(h,"CVER",22),this.D&&fe(h,"X-HTTP-Session-Id",this.D),Nr(this,h),R&&(this.O?l="headers="+encodeURIComponent(String(ac(R)))+"&"+l:this.m&&Zs(h,this.m,R)),Xs(this.h,b),this.Ua&&fe(h,"TYPE","init"),this.P?(fe(h,"$req",l),fe(h,"SID","null"),b.T=!0,Tr(b,h,null)):Tr(b,h,l),this.G=2}}else this.G==3&&(o?mc(this,o):this.i.length==0||Ya(this.h)||mc(this))};function mc(o,l){var h;l?h=l.l:h=o.U++;const p=vt(o.I);fe(p,"SID",o.K),fe(p,"RID",h),fe(p,"AID",o.T),Nr(o,p),o.m&&o.o&&Zs(p,o.m,o.o),h=new ut(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=gc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xs(o.h,h),Tr(h,p,l)}function Nr(o,l){o.H&&ae(o.H,function(h,p){fe(l,p,h)}),o.l&&Za({},function(h,p){fe(l,p,h)})}function gc(o,l,h){h=Math.min(o.i.length,h);var p=o.l?S(o.l.Na,o.l,o):null;e:{var b=o.i;let R=-1;for(;;){const V=["count="+h];R==-1?0<h?(R=b[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let he=!0;for(let Se=0;Se<h;Se++){let ie=b[Se].g;const Me=b[Se].map;if(ie-=R,0>ie)R=Math.max(0,b[Se].g-100),he=!1;else try{nf(Me,V,"req"+ie+"_")}catch{p&&p(Me)}}if(he){p=V.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function _c(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Jt||gi(),kt||(Jt(),kt=!0),Rn.add(l,o),o.v=0}}function to(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Y(S(o.Fa,o),wc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Y(S(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,H(10),Li(this),yc(this))};function no(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function yc(o){o.g=new ut(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=vt(o.qa);fe(l,"RID","rpc"),fe(l,"SID",o.K),fe(l,"AID",o.T),fe(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&fe(l,"TO",o.ja),fe(l,"TYPE","xmlhttp"),Nr(o,l),o.m&&o.o&&Zs(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Mi(vt(l)),h.m=null,h.P=!0,Ri(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Li(this),to(this),H(19))};function Fi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function vc(o,l){var h=null;if(o.g==l){Fi(o),no(o),o.g=null;var p=2}else if(Js(o.h,l))h=l.D,Ja(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;p=I(),Ae(p,new j(p,h)),xi(o)}else _c(o);else if(b=l.s,b==3||b==0&&0<l.X||!(p==1&&af(o,l)||p==2&&to(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),b){case 1:cn(o,5);break;case 4:cn(o,10);break;case 3:cn(o,6);break;default:cn(o,2)}}}function wc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function cn(o,l){if(o.j.info("Error code "+l),l==2){var h=S(o.fb,o),p=o.Xa;const b=!p;p=new an(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ki(p,"https"),Mi(p),b?Zd(p.toString(),h):ef(p.toString(),h)}else H(2);o.G=0,o.l&&o.l.sa(l),Ec(o),pc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),H(2)):(this.j.info("Failed to ping google.com"),H(1))};function Ec(o){if(o.G=0,o.ka=[],o.l){const l=Xa(o.h);(l.length!=0||o.i.length!=0)&&(L(o.ka,l),L(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Ic(o,l,h){var p=h instanceof an?vt(h):new an(h);if(p.g!="")l&&(p.g=l+"."+p.g),Ni(p,p.s);else{var b=c.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var R=new an(null);p&&ki(R,p),l&&(R.g=l),b&&Ni(R,b),h&&(R.l=h),p=R}return h=o.D,l=o.ya,h&&l&&fe(p,h,l),fe(p,"VER",o.la),Nr(o,p),p}function Tc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ge(new Rr({eb:h})):new ge(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ac(){}n=Ac.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ui(){}Ui.prototype.g=function(o,l){return new ze(o,l)};function ze(o,l){Te.call(this),this.g=new fc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!X(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!X(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new xn(this)}x(ze,Te),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){eo(this.g)},ze.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ue(o),o=h);l.i.push(new $d(l.Ya++,o)),l.G==3&&xi(l)},ze.prototype.N=function(){this.g.l=null,delete this.j,eo(this.g),delete this.g,ze.aa.N.call(this)};function bc(o){wr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}x(bc,wr);function Cc(){Er.call(this),this.status=1}x(Cc,Er);function xn(o){this.g=o}x(xn,Ac),xn.prototype.ua=function(){Ae(this.g,"a")},xn.prototype.ta=function(o){Ae(this.g,new bc(o))},xn.prototype.sa=function(o){Ae(this.g,new Cc)},xn.prototype.ra=function(){Ae(this.g,"b")},Ui.prototype.createWebChannel=Ui.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Eu=function(){return new Ui},wu=function(){return I()},vu=m,Po={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nt.NO_ERROR=0,nt.TIMEOUT=8,nt.HTTP_ERROR=6,Yi=nt,bi.COMPLETE="complete",yu=bi,On.EventType=je,je.OPEN="a",je.CLOSE="b",je.ERROR="c",je.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Lr=On,_u=Rr,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,gu=ge}).apply(typeof ji<"u"?ji:typeof self<"u"?self:typeof window<"u"?window:{});const Uc="@firebase/firestore";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let ir="10.13.1";/**
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
 */const gn=new Ts("@firebase/firestore");function Mr(){return gn.logLevel}function $(n,...e){if(gn.logLevel<=ne.DEBUG){const t=e.map(Jo);gn.debug(`Firestore (${ir}): ${n}`,...t)}}function St(n,...e){if(gn.logLevel<=ne.ERROR){const t=e.map(Jo);gn.error(`Firestore (${ir}): ${n}`,...t)}}function Yn(n,...e){if(gn.logLevel<=ne.WARN){const t=e.map(Jo);gn.warn(`Firestore (${ir}): ${n}`,...t)}}function Jo(n){if(typeof n=="string")return n;try{/**
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
 */function G(n="Unexpected state"){const e=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: `+n;throw St(e),new Error(e)}function de(n,e){n||G()}function J(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Iu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class $p{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hp{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ht,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ht)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new Iu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Le(e)}}class Wp{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zp{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Wp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string"),this.R=t.token,new Kp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Yp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Tu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Yp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Qn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ee(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ee(0,0))}static max(){return new Q(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Gr{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(),r===void 0?r=e.length-t:r>e.length-t&&G(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Gr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends Gr{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const Qp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Gr{construct(e,t,r){return new Pe(e,t,r)}static isValidIdentifier(e){return Qp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new B(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(pe.fromString(e))}static fromName(e){return new W(pe.fromString(e).popFirst(5))}static empty(){return new W(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new pe(e.slice()))}}function Jp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ee(t+1,0):new Ee(t,r));return new Kt(i,W.empty(),e)}function Xp(n){return new Kt(n.readTime,n.key,-1)}class Kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kt(Q.min(),W.empty(),-1)}static max(){return new Kt(Q.max(),W.empty(),-1)}}function Zp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
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
 */const em="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ai(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==em)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function nm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ci(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xo.oe=-1;function As(n){return n==null}function os(n){return n===0&&1/n==-1/0}function rm(n){return typeof n=="number"&&Number.isInteger(n)&&!os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Au(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=s??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Re(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jc(this.data.getIterator())}getIteratorFrom(e){return new jc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class jc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class it{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new it([])}unionWith(e){let t=new De(Pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bu("Invalid base64 string: "+s):s}}(e);return new ke(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(de(!!n),typeof n=="string"){let e=0;const t=im.exec(n);if(de(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _n(n){return typeof n=="string"?ke.fromBase64String(n):ke.fromUint8Array(n)}/**
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
 */function Zo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ea(n){const e=n.mapValue.fields.__previous_value__;return Zo(e)?ea(e):e}function Yr(n){const e=Gt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class sm{constructor(e,t,r,i,s,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class Qr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:am(n)?9007199254740991:om(n)?10:11:G()}function gt(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yr(n).isEqual(Yr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Gt(i.timestampValue),c=Gt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return _n(i.bytesValue).isEqual(_n(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=_e(i.doubleValue),c=_e(s.doubleValue);return a===c?os(a)===os(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Qn(n.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Bc(a)!==Bc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!gt(a[u],c[u])))return!1;return!0}(n,e);default:return G()}}function Jr(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function Jn(n,e){if(n===e)return 0;const t=yn(n),r=yn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=_e(s.integerValue||s.doubleValue),u=_e(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return qc(n.timestampValue,e.timestampValue);case 4:return qc(Yr(n),Yr(e));case 5:return se(n.stringValue,e.stringValue);case 6:return function(s,a){const c=_n(s),u=_n(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=se(c[d],u[d]);if(f!==0)return f}return se(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=se(_e(s.latitude),_e(a.latitude));return c!==0?c:se(_e(s.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return $c(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,d,f;const y=s.fields||{},S=a.fields||{},D=(c=y.value)===null||c===void 0?void 0:c.arrayValue,x=(u=S.value)===null||u===void 0?void 0:u.arrayValue,O=se(((d=D==null?void 0:D.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:$c(D,x)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===$i.mapValue&&a===$i.mapValue)return 0;if(s===$i.mapValue)return 1;if(a===$i.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const S=se(u[y],f[y]);if(S!==0)return S;const D=Jn(c[u[y]],d[f[y]]);if(D!==0)return D}return se(u.length,f.length)}(n.mapValue,e.mapValue);default:throw G()}}function qc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=Gt(n),r=Gt(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function $c(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Jn(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function Xn(n){return Do(n)}function Do(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Do(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Do(t.fields[a])}`;return i+"}"}(n.mapValue):G()}function Hc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ko(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function Wc(n){return!!n&&"nullValue"in n}function zc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qi(n){return!!n&&"mapValue"in n}function om(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ur(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return sr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ur(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ur(n.arrayValue.values[t]);return e}return Object.assign({},n)}function am(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(t)}setAll(e){let t=Pe.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Ur(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Qi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){sr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Je(Ur(this.value))}}function Cu(n){const e=[];return sr(n.fields,(t,r)=>{const i=new Pe([t]);if(Qi(r)){const s=Cu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new it(e)}/**
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
 */class Fe{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Fe(e,0,Q.min(),Q.min(),Q.min(),Je.empty(),0)}static newFoundDocument(e,t,r,i){return new Fe(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new Fe(e,2,t,Q.min(),Q.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,Q.min(),Q.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class as{constructor(e,t){this.position=e,this.inclusive=t}}function Kc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=Jn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Xr{constructor(e,t="asc"){this.field=e,this.dir=t}}function cm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Su{}class we extends Su{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new um(e,t,r):t==="array-contains"?new fm(e,r):t==="in"?new pm(e,r):t==="not-in"?new mm(e,r):t==="array-contains-any"?new gm(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hm(e,r):new dm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jn(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.matchesComparison(Jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Su{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ot(e,t)}matches(e){return Ru(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ru(n){return n.op==="and"}function Pu(n){return lm(n)&&Ru(n)}function lm(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function No(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Pu(n))return n.filters.map(e=>No(e)).join(",");{const e=n.filters.map(t=>No(t)).join(",");return`${n.op}(${e})`}}function Du(n,e){return n instanceof we?function(r,i){return i instanceof we&&r.op===i.op&&r.field.isEqual(i.field)&&gt(r.value,i.value)}(n,e):n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Du(a,i.filters[c]),!0):!1}(n,e):void G()}function ku(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(ku).join(" ,")+"}"}(n):"Filter"}class um extends we{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class hm extends we{constructor(e,t){super(e,"in",t),this.keys=Nu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dm extends we{constructor(e,t){super(e,"not-in",t),this.keys=Nu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class fm extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&Jr(t.arrayValue,this.value)}}class pm extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Jr(this.value.arrayValue,t)}}class mm extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Jr(this.value.arrayValue,t)}}class gm extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Jr(this.value.arrayValue,r))}}/**
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
 */class _m{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function Yc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new _m(n,e,t,r,i,s,a)}function na(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>No(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),As(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.ue=t}return e.ue}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Du(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gc(n.startAt,e.startAt)&&Gc(n.endAt,e.endAt)}function Mo(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class or{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ym(n,e,t,r,i,s,a,c){return new or(n,e,t,r,i,s,a,c)}function Mu(n){return new or(n)}function Qc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ou(n){return n.collectionGroup!==null}function Br(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new De(Pe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Xr(s,r))}),t.has(Pe.keyField().canonicalString())||e.ce.push(new Xr(Pe.keyField(),r))}return e.ce}function ht(n){const e=J(n);return e.le||(e.le=vm(e,Br(n))),e.le}function vm(n,e){if(n.limitType==="F")return Yc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xr(i.field,s)});const t=n.endAt?new as(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new as(n.startAt.position,n.startAt.inclusive):null;return Yc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Oo(n,e){const t=n.filters.concat([e]);return new or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Vo(n,e,t){return new or(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bs(n,e){return ra(ht(n),ht(e))&&n.limitType===e.limitType}function Vu(n){return`${na(ht(n))}|lt:${n.limitType}`}function Un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ku(i)).join(", ")}]`),As(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Xn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Xn(i)).join(",")),`Target(${r})`}(ht(n))}; limitType=${n.limitType})`}function Cs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Br(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const d=Kc(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,Br(r),i)||r.endAt&&!function(a,c,u){const d=Kc(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,Br(r),i))}(n,e)}function wm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lu(n){return(e,t)=>{let r=!1;for(const i of Br(n)){const s=Em(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Em(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?Jn(u,d):G()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Au(this.inner)}size(){return this.innerSize}}/**
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
 */const Im=new me(W.comparator);function Rt(){return Im}const xu=new me(W.comparator);function xr(...n){let e=xu;for(const t of n)e=e.insert(t.key,t);return e}function Fu(n){let e=xu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function fn(){return jr()}function Uu(){return jr()}function jr(){return new ar(n=>n.toString(),(n,e)=>n.isEqual(e))}const Tm=new me(W.comparator),Am=new De(W.comparator);function ee(...n){let e=Am;for(const t of n)e=e.add(t);return e}const bm=new De(se);function Cm(){return bm}/**
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
 */function ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(e)?"-0":e}}function Bu(n){return{integerValue:""+n}}function Sm(n,e){return rm(e)?Bu(e):ia(n,e)}/**
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
 */class Ss{constructor(){this._=void 0}}function Rm(n,e,t){return n instanceof Zr?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zo(s)&&(s=ea(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ei?qu(n,e):n instanceof ti?$u(n,e):function(i,s){const a=ju(i,s),c=Jc(a)+Jc(i.Pe);return ko(a)&&ko(i.Pe)?Bu(c):ia(i.serializer,c)}(n,e)}function Pm(n,e,t){return n instanceof ei?qu(n,e):n instanceof ti?$u(n,e):t}function ju(n,e){return n instanceof cs?function(r){return ko(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zr extends Ss{}class ei extends Ss{constructor(e){super(),this.elements=e}}function qu(n,e){const t=Hu(e);for(const r of n.elements)t.some(i=>gt(i,r))||t.push(r);return{arrayValue:{values:t}}}class ti extends Ss{constructor(e){super(),this.elements=e}}function $u(n,e){let t=Hu(e);for(const r of n.elements)t=t.filter(i=>!gt(i,r));return{arrayValue:{values:t}}}class cs extends Ss{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Jc(n){return _e(n.integerValue||n.doubleValue)}function Hu(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Dm{constructor(e,t){this.field=e,this.transform=t}}function km(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ei&&i instanceof ei||r instanceof ti&&i instanceof ti?Qn(r.elements,i.elements,gt):r instanceof cs&&i instanceof cs?gt(r.Pe,i.Pe):r instanceof Zr&&i instanceof Zr}(n.transform,e.transform)}class Nm{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rs{}function Wu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ku(n.key,bt.none()):new li(n.key,n.data,bt.none());{const t=n.data,r=Je.empty();let i=new De(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new An(n.key,r,new it(i.toArray()),bt.none())}}function Mm(n,e,t){n instanceof li?function(i,s,a){const c=i.value.clone(),u=Zc(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof An?function(i,s,a){if(!Ji(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Zc(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(zu(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function qr(n,e,t,r){return n instanceof li?function(s,a,c,u){if(!Ji(s.precondition,a))return c;const d=s.value.clone(),f=el(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof An?function(s,a,c,u){if(!Ji(s.precondition,a))return c;const d=el(s.fieldTransforms,u,a),f=a.data;return f.setAll(zu(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,c){return Ji(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Om(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ju(r.transform,i||null);s!=null&&(t===null&&(t=Je.empty()),t.set(r.field,s))}return t||null}function Xc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qn(r,i,(s,a)=>km(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class li extends Rs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class An extends Rs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zc(n,e,t){const r=new Map;de(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,Pm(a,c,t[i]))}return r}function el(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Rm(s,a,e))}return r}class Ku extends Rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vm extends Rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Lm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Mm(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Uu();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=Wu(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&Qn(this.mutations,e.mutations,(t,r)=>Xc(t,r))&&Qn(this.baseMutations,e.baseMutations,(t,r)=>Xc(t,r))}}class sa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){de(e.mutations.length===r.length);let i=function(){return Tm}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new sa(e,t,r,i)}}/**
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
 */class xm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ve,re;function Um(n){switch(n){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Gu(n){if(n===void 0)return St("GRPC error has no .code"),k.UNKNOWN;switch(n){case ve.OK:return k.OK;case ve.CANCELLED:return k.CANCELLED;case ve.UNKNOWN:return k.UNKNOWN;case ve.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ve.INTERNAL:return k.INTERNAL;case ve.UNAVAILABLE:return k.UNAVAILABLE;case ve.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ve.NOT_FOUND:return k.NOT_FOUND;case ve.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ve.ABORTED:return k.ABORTED;case ve.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ve.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(re=ve||(ve={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Bm(){return new TextEncoder}/**
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
 */const jm=new mn([4294967295,4294967295],0);function tl(n){const e=Bm().encode(n),t=new mu;return t.update(e),new Uint8Array(t.digest())}function nl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mn([t,r],0),new mn([i,s],0)]}class oa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fr(`Invalid padding: ${t}`);if(r<0)throw new Fr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=mn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(mn.fromNumber(r)));return i.compare(jm)===1&&(i=new mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=tl(e),[r,i]=nl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new oa(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=tl(e),[r,i]=nl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ps{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ps(Q.min(),i,new me(se),Rt(),ee())}}class ui{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ui(r,t,ee(),ee(),ee())}}/**
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
 */class Xi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Yu{constructor(e,t){this.targetId=e,this.me=t}}class Qu{constructor(e,t,r=ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class rl{constructor(){this.fe=0,this.ge=sl(),this.pe=ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ui(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=sl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qm{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rt(),this.qe=il(),this.Qe=new me(se)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Mo(s))if(r===0){const a=new W(s.path);this.Ue(t,a,Fe.newNoDocument(a,Q.min()))}else de(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=_n(r).toUint8Array()}catch(u){if(u instanceof bu)return Yn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new oa(a,i,s)}catch(u){return Yn(u instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&Mo(c.target)){const u=new W(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Fe.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Ps(e,t,this.Qe,this.ke,r);return this.ke=Rt(),this.qe=il(),this.Qe=new me(se),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new rl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new De(se),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function il(){return new me(W.comparator)}function sl(){return new me(W.comparator)}const $m={asc:"ASCENDING",desc:"DESCENDING"},Hm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wm={and:"AND",or:"OR"};class zm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lo(n,e){return n.useProto3Json||As(e)?e:{value:e}}function ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ju(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Km(n,e){return ls(n,e.toTimestamp())}function dt(n){return de(!!n),Q.fromTimestamp(function(t){const r=Gt(t);return new Ee(r.seconds,r.nanos)}(n))}function aa(n,e){return xo(n,e).canonicalString()}function xo(n,e){const t=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xu(n){const e=pe.fromString(n);return de(rh(e)),e}function Fo(n,e){return aa(n.databaseId,e.path)}function lo(n,e){const t=Xu(e);if(t.get(1)!==n.databaseId.projectId)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(eh(t))}function Zu(n,e){return aa(n.databaseId,e)}function Gm(n){const e=Xu(n);return e.length===4?pe.emptyPath():eh(e)}function Uo(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eh(n){return de(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ol(n,e,t){return{name:Fo(n,e),fields:t.value.mapValue.fields}}function Ym(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(de(f===void 0||typeof f=="string"),ke.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ke.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?k.UNKNOWN:Gu(d.code);return new B(f,d.message||"")}(a);t=new Qu(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lo(n,r.document.name),s=dt(r.document.updateTime),a=r.document.createTime?dt(r.document.createTime):Q.min(),c=new Je({mapValue:{fields:r.document.fields}}),u=Fe.newFoundDocument(i,s,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Xi(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lo(n,r.document),s=r.readTime?dt(r.readTime):Q.min(),a=Fe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Xi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lo(n,r.document),s=r.removedTargetIds||[];t=new Xi([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Fm(i,s),c=r.targetId;t=new Yu(c,a)}}return t}function Qm(n,e){let t;if(e instanceof li)t={update:ol(n,e.key,e.value)};else if(e instanceof Ku)t={delete:Fo(n,e.key)};else if(e instanceof An)t={update:ol(n,e.key,e.data),updateMask:sg(e.fieldMask)};else{if(!(e instanceof Vm))return G();t={verify:Fo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ei)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ti)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof cs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw G()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Km(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(n,e.precondition)),t}function Jm(n,e){return n&&n.length>0?(de(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?dt(i.updateTime):dt(s);return a.isEqual(Q.min())&&(a=dt(s)),new Nm(a,i.transformResults||[])}(t,e))):[]}function Xm(n,e){return{documents:[Zu(n,e.path)]}}function Zm(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zu(n,i);const s=function(d){if(d.length!==0)return nh(ot.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(S){return{field:Bn(S.field),direction:ng(S.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Lo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function eg(n){let e=Gm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){de(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const S=th(y);return S instanceof ot&&Pu(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(S=>function(x){return new Xr(jn(x.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(S))}(t.orderBy));let c=null;t.limit&&(c=function(y){let S;return S=typeof y=="object"?y.value:y,As(S)?null:S}(t.limit));let u=null;t.startAt&&(u=function(y){const S=!!y.before,D=y.values||[];return new as(D,S)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const S=!y.before,D=y.values||[];return new as(D,S)}(t.endAt)),ym(e,i,a,s,c,"F",u,d)}function tg(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function th(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=jn(t.unaryFilter.field);return we.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=jn(t.unaryFilter.field);return we.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jn(t.unaryFilter.field);return we.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(t){return we.create(jn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>th(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(t.compositeFilter.op))}(n):G()}function ng(n){return $m[n]}function rg(n){return Hm[n]}function ig(n){return Wm[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function jn(n){return Pe.fromServerFormat(n.fieldPath)}function nh(n){return n instanceof we?function(t){if(t.op==="=="){if(zc(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(Wc(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zc(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(Wc(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:rg(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(i=>nh(i));return r.length===1?r[0]:{compositeFilter:{op:ig(t.op),filters:r}}}(n):G()}function sg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jt{constructor(e,t,r,i,s=Q.min(),a=Q.min(),c=ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class og{constructor(e){this.ct=e}}function ag(n){const e=eg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vo(e,e.limit,"L"):e}/**
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
 */class cg{constructor(){this.un=new lg}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Kt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class lg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new De(pe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(pe.comparator)).toArray()}}/**
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
 */class Zn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zn(0)}static kn(){return new Zn(-1)}}/**
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
 */class ug{constructor(){this.changes=new ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class dg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&qr(r.mutation,i,it.empty(),Ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const i=fn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=xr();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=Rt();const a=jr(),c=function(){return jr()}();return t.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof An)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),qr(f.mutation,d,f.mutation.getFieldMask(),Ee.now())):a.set(d.key,it.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var y;return c.set(d,new hg(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=jr();let i=new me((a,c)=>a-c),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||it.empty();f=c.applyToLocalView(d,f),r.set(u,f);const y=(i.get(c.batchId)||ee()).add(u);i=i.insert(c.batchId,y)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,y=Uu();f.forEach(S=>{if(!s.has(S)){const D=Wu(t.get(S),r.get(S));D!==null&&y.set(S,D),s=s.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ou(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(fn());let c=-1,u=s;return a.next(d=>N.forEach(d,(f,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(S=>{u=u.insert(f,S)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ee())).next(f=>({batchId:c,changes:Fu(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=xr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=xr();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,u=>{const d=function(y,S){return new or(S,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,S)=>{a=a.insert(y,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Fe.newInvalidDocument(f)))});let c=xr();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&qr(f.mutation,d,it.empty(),Ee.now()),Cs(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class fg{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:dt(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:ag(i.bundledQuery),readTime:dt(i.readTime)}}(t)),N.resolve()}}/**
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
 */class pg{constructor(){this.overlays=new me(W.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=fn(),s=t.length+1,a=new W(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new me((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=fn(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=fn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return N.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xm(t,r));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class mg{constructor(){this.sessionToken=ke.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class ca{constructor(){this.Tr=new De(be.Er),this.dr=new De(be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new be(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new be(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new W(new pe([])),r=new be(t,e),i=new be(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new W(new pe([])),r=new be(t,e),i=new be(t,e+1);let s=ee();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new be(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return W.comparator(e.key,t.key)||se(e.wr,t.wr)}static Ar(e,t){return se(e.wr,t.wr)||W.comparator(e.key,t.key)}}/**
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
 */class gg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new De(be.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Lm(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new be(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const c=this.Dr(a.wr);s.push(c)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(se);return t.forEach(i=>{const s=new be(i,0),a=new be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],c=>{r=r.add(c.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const a=new be(new W(s),0);let c=new De(se);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.wr)),!0)},a),N.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){de(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(t.mutations,i=>{const s=new be(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new be(t,0),i=this.br.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class _g{constructor(e){this.Mr=e,this.docs=function(){return new me(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=Rt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Rt();const a=t.path,c=new W(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zp(Xp(f),r)<=0||(i.has(f.key)||Cs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){G()}Or(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new yg(this)}getSize(e){return N.resolve(this.size)}}class yg extends ug{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class vg{constructor(e){this.persistence=e,this.Nr=new ar(t=>na(t),ra),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ca,this.targetCount=0,this.kr=Zn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class wg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Xo(0),this.Kr=!1,this.Kr=!0,this.$r=new mg,this.referenceDelegate=e(this),this.Ur=new vg(this),this.indexManager=new cg,this.remoteDocumentCache=function(i){return new _g(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new og(t),this.Gr=new fg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new gg(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const i=new Eg(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Eg extends tm{constructor(e){super(),this.currentSequenceNumber=e}}class la{constructor(e){this.persistence=e,this.Jr=new ca,this.Yr=null}static Zr(e){return new la(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const i=W.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ua{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ua(e,t.fromCache,r,i)}}/**
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
 */class Ig{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Tg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Af()?8:nm(Ue())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Ig;return this.Xi(e,t,a).next(c=>{if(s.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Mr()<=ne.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Mr()<=ne.DEBUG&&$("QueryEngine","Query:",Un(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Mr()<=ne.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ht(t))):N.resolve())}Yi(e,t){if(Qc(t))return N.resolve(null);let r=ht(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Vo(t,null,"F"),r=ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ee(...s);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,c);return this.ns(t,d,a,u.readTime)?this.Yi(e,Vo(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,i){return Qc(t)||i.isEqual(Q.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?N.resolve(null):(Mr()<=ne.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Un(t)),this.rs(e,a,t,Jp(i,-1)).next(c=>c))})}ts(e,t){let r=new De(Lu(e));return t.forEach((i,s)=>{Cs(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Mr()<=ne.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Un(t)),this.Ji.getDocumentsMatchingQuery(e,t,Kt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Ag{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new me(se),this._s=new ar(s=>na(s),ra),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function bg(n,e,t,r){return new Ag(n,e,t,r)}async function ih(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let u=ee();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Cg(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const y=d.batch,S=y.keys();let D=N.resolve();return S.forEach(x=>{D=D.next(()=>f.getEntry(u,x)).next(O=>{const L=d.docVersions.get(x);de(L!==null),O.version.compareTo(L)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),f.addEntry(O)))})}),D.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ee();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function sh(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Sg(n,e){const t=J(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((f,y)=>{const S=i.get(y);if(!S)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,y)));let D=S.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?D=D.withResumeToken(ke.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(f.resumeToken,r)),i=i.insert(y,D),function(O,L,te){return O.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(S,D,f)&&c.push(t.Ur.updateTargetData(s,D))});let u=Rt(),d=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(Rg(s,a,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(Q.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(y=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return N.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.os=i,s))}function Rg(n,e,t){let r=ee(),i=ee();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Rt();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Pg(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Dg(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new jt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Bo(n,e,t){const r=J(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ci(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function al(n,e,t){const r=J(n);let i=Q.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const y=J(u),S=y._s.get(f);return S!==void 0?N.resolve(y.os.get(S)):y.Ur.getTargetData(d,f)}(r,a,ht(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:Q.min(),t?s:ee())).next(c=>(kg(r,wm(e),c),{documents:c,Ts:s})))}function kg(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class cl{constructor(){this.activeTargetIds=Cm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ng{constructor(){this.so=new cl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mg{_o(e){}shutdown(){}}/**
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
 */class ll{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hi=null;function uo(){return Hi===null?Hi=function(){return 268435456+Math.round(2147483648*Math.random())}():Hi++,"0x"+Hi.toString(16)}/**
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
 */const Og={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Vg{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ve="WebChannelConnection";class Lg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const c=uo(),u=this.xo(t,r.toUriEncodedString());$("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(t,u,d,i).then(f=>($("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Yn("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,c){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ir}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=Og[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=uo();return new Promise((a,c)=>{const u=new gu;u.setWithCredentials(!0),u.listenOnce(yu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yi.NO_ERROR:const f=u.getResponseJson();$(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Yi.TIMEOUT:$(Ve,`RPC '${e}' ${s} timed out`),c(new B(k.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const y=u.getStatus();if($(Ve,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let S=u.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const x=function(L){const te=L.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(te)>=0?te:k.UNKNOWN}(D.status);c(new B(x,D.message))}else c(new B(k.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(Ve,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);$(Ve,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=uo(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Eu(),c=wu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new _u({})),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=a.createWebChannel(f,u);let S=!1,D=!1;const x=new Vg({Io:L=>{D?$(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(S||($(Ve,`Opening RPC '${e}' stream ${i} transport.`),y.open(),S=!0),$(Ve,`RPC '${e}' stream ${i} sending:`,L),y.send(L))},To:()=>y.close()}),O=(L,te,X)=>{L.listen(te,Z=>{try{X(Z)}catch(le){setTimeout(()=>{throw le},0)}})};return O(y,Lr.EventType.OPEN,()=>{D||($(Ve,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),O(y,Lr.EventType.CLOSE,()=>{D||(D=!0,$(Ve,`RPC '${e}' stream ${i} transport closed`),x.So())}),O(y,Lr.EventType.ERROR,L=>{D||(D=!0,Yn(Ve,`RPC '${e}' stream ${i} transport errored:`,L),x.So(new B(k.UNAVAILABLE,"The operation could not be completed")))}),O(y,Lr.EventType.MESSAGE,L=>{var te;if(!D){const X=L.data[0];de(!!X);const Z=X,le=Z.error||((te=Z[0])===null||te===void 0?void 0:te.error);if(le){$(Ve,`RPC '${e}' stream ${i} received error:`,le);const Ne=le.status;let ae=function(w){const E=ve[w];if(E!==void 0)return Gu(E)}(Ne),T=le.message;ae===void 0&&(ae=k.INTERNAL,T="Unknown error status: "+Ne+" with message "+le.message),D=!0,x.So(new B(ae,T)),y.close()}else $(Ve,`RPC '${e}' stream ${i} received:`,X),x.bo(X)}}),O(c,vu.STAT_EVENT,L=>{L.stat===Po.PROXY?$(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Po.NOPROXY&&$(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function ho(){return typeof document<"u"?document:null}/**
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
 */function Ds(n){return new zm(n,!0)}/**
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
 */class oh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ah{constructor(e,t,r,i,s,a,c,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new oh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new B(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xg extends ah{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Ym(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?dt(a.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Uo(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=Mo(u)?{documents:Xm(s,u)}:{query:Zm(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ju(s,a.resumeToken);const d=Lo(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){c.readTime=ls(s,a.snapshotVersion.toTimestamp());const d=Lo(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=tg(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Uo(this.serializer),t.removeTarget=e,this.a_(t)}}class Fg extends ah{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Jm(e.writeResults,e.commitTime),r=dt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Uo(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Qm(this.serializer,r))};this.a_(t)}}/**
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
 */class Ug extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,xo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(k.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,xo(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Bg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(St(t),this.D_=!1):$("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class jg{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{bn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=J(u);d.L_.add(4),await hi(d),d.q_.set("Unknown"),d.L_.delete(4),await ks(d)}(this))})}),this.q_=new Bg(r,i)}}async function ks(n){if(bn(n))for(const e of n.B_)await e(!0)}async function hi(n){for(const e of n.B_)await e(!1)}function ch(n,e){const t=J(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),pa(t)?fa(t):cr(t).r_()&&da(t,e))}function ha(n,e){const t=J(n),r=cr(t);t.N_.delete(e),r.r_()&&lh(t,e),t.N_.size===0&&(r.r_()?r.o_():bn(t)&&t.q_.set("Unknown"))}function da(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cr(n).A_(e)}function lh(n,e){n.Q_.xe(e),cr(n).R_(e)}function fa(n){n.Q_=new qm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),cr(n).start(),n.q_.v_()}function pa(n){return bn(n)&&!cr(n).n_()&&n.N_.size>0}function bn(n){return J(n).L_.size===0}function uh(n){n.Q_=void 0}async function qg(n){n.q_.set("Online")}async function $g(n){n.N_.forEach((e,t)=>{da(n,e)})}async function Hg(n,e){uh(n),pa(n)?(n.q_.M_(e),fa(n)):n.q_.set("Unknown")}async function Wg(n,e,t){if(n.q_.set("Online"),e instanceof Qu&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await us(n,r)}else if(e instanceof Xi?n.Q_.Ke(e):e instanceof Yu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await sh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.Q_.rt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(ke.EMPTY_BYTE_STRING,f.snapshotVersion)),lh(s,u);const y=new jt(f.target,u,d,f.sequenceNumber);da(s,y)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await us(n,r)}}async function us(n,e,t){if(!ci(e))throw e;n.L_.add(1),await hi(n),n.q_.set("Offline"),t||(t=()=>sh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await ks(n)})}function hh(n,e){return e().catch(t=>us(n,t,e))}async function Ns(n){const e=J(n),t=Yt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zg(e);)try{const i=await Pg(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,Kg(e,i)}catch(i){await us(e,i)}dh(e)&&fh(e)}function zg(n){return bn(n)&&n.O_.length<10}function Kg(n,e){n.O_.push(e);const t=Yt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function dh(n){return bn(n)&&!Yt(n).n_()&&n.O_.length>0}function fh(n){Yt(n).start()}async function Gg(n){Yt(n).p_()}async function Yg(n){const e=Yt(n);for(const t of n.O_)e.m_(t.mutations)}async function Qg(n,e,t){const r=n.O_.shift(),i=sa.from(r,e,t);await hh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ns(n)}async function Jg(n,e){e&&Yt(n).V_&&await async function(r,i){if(function(a){return Um(a)&&a!==k.ABORTED}(i.code)){const s=r.O_.shift();Yt(r).s_(),await hh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ns(r)}}(n,e),dh(n)&&fh(n)}async function ul(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=bn(t);t.L_.add(3),await hi(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ks(t)}async function Xg(n,e){const t=J(n);e?(t.L_.delete(2),await ks(t)):e||(t.L_.add(2),await hi(t),t.q_.set("Unknown"))}function cr(n){return n.K_||(n.K_=function(t,r,i){const s=J(t);return s.w_(),new xg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:qg.bind(null,n),Ro:$g.bind(null,n),mo:Hg.bind(null,n),d_:Wg.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),pa(n)?fa(n):n.q_.set("Unknown")):(await n.K_.stop(),uh(n))})),n.K_}function Yt(n){return n.U_||(n.U_=function(t,r,i){const s=J(t);return s.w_(),new Fg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Gg.bind(null,n),mo:Jg.bind(null,n),f_:Yg.bind(null,n),g_:Qg.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ns(n)):(await n.U_.stop(),n.O_.length>0&&($("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ma{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new ma(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,e){if(St("AsyncQueue",`${e}: ${n}`),ci(n))return new B(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class $n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=xr(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new $n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class hl{constructor(){this.W_=new me(W.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class er{constructor(e,t,r,i,s,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new er(e,t,$n.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Zg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class e_{constructor(){this.queries=dl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=dl(),s.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new B(k.ABORTED,"Firestore shutting down"))}}function dl(){return new ar(n=>Vu(n),bs)}async function t_(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Zg,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=ga(a,`Initialization of query '${Un(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&_a(t)}async function n_(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function r_(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.j_)c.X_(i)&&(r=!0);a.z_=i}}r&&_a(t)}function i_(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function _a(n){n.Y_.forEach(e=>{e.next()})}var jo,fl;(fl=jo||(jo={})).ea="default",fl.Cache="cache";class s_{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==jo.Cache}}/**
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
 */class ph{constructor(e){this.key=e}}class mh{constructor(e){this.key=e}}class o_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Lu(e),this.Ra=new $n(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new hl,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const S=i.get(f),D=Cs(this.query,y)?y:null,x=!!S&&this.mutatedKeys.has(S.key),O=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let L=!1;S&&D?S.data.isEqual(D.data)?x!==O&&(r.track({type:3,doc:D}),L=!0):this.ga(S,D)||(r.track({type:2,doc:D}),L=!0,(u&&this.Aa(D,u)>0||d&&this.Aa(D,d)<0)&&(c=!0)):!S&&D?(r.track({type:0,doc:D}),L=!0):S&&!D&&(r.track({type:1,doc:S}),L=!0,(u||d)&&(c=!0)),L&&(D?(a=a.add(D),s=O?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,y)=>function(D,x){const O=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return O(D)-O(x)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const c=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new er(this.query,e.Ra,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new mh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ph(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return er.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class a_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class c_{constructor(e){this.key=e,this.va=!1}}class l_{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ar(c=>Vu(c),bs),this.Ma=new Map,this.xa=new Set,this.Oa=new me(W.comparator),this.Na=new Map,this.La=new ca,this.Ba={},this.ka=new Map,this.qa=Zn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function u_(n,e,t=!0){const r=Eh(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await gh(r,e,t,!0),i}async function h_(n,e){const t=Eh(n);await gh(t,e,!0,!1)}async function gh(n,e,t,r){const i=await Dg(n.localStore,ht(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return r&&(c=await d_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ch(n.remoteStore,i),c}async function d_(n,e,t,r,i){n.Ka=(y,S,D)=>async function(O,L,te,X){let Z=L.view.ma(te);Z.ns&&(Z=await al(O.localStore,L.query,!1).then(({documents:T})=>L.view.ma(T,Z)));const le=X&&X.targetChanges.get(L.targetId),Ne=X&&X.targetMismatches.get(L.targetId)!=null,ae=L.view.applyChanges(Z,O.isPrimaryClient,le,Ne);return ml(O,L.targetId,ae.wa),ae.snapshot}(n,y,S,D);const s=await al(n.localStore,e,!0),a=new o_(e,s.Ts),c=a.ma(s.documents),u=ui.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,u);ml(n,t,d.wa);const f=new a_(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function f_(n,e,t){const r=J(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!bs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ha(r.remoteStore,i.targetId),qo(r,i.targetId)}).catch(ai)):(qo(r,i.targetId),await Bo(r.localStore,i.targetId,!0))}async function p_(n,e){const t=J(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ha(t.remoteStore,r.targetId))}async function m_(n,e,t){const r=I_(n);try{const i=await function(a,c){const u=J(a),d=Ee.now(),f=c.reduce((D,x)=>D.add(x.key),ee());let y,S;return u.persistence.runTransaction("Locally write mutations","readwrite",D=>{let x=Rt(),O=ee();return u.cs.getEntries(D,f).next(L=>{x=L,x.forEach((te,X)=>{X.isValidDocument()||(O=O.add(te))})}).next(()=>u.localDocuments.getOverlayedDocuments(D,x)).next(L=>{y=L;const te=[];for(const X of c){const Z=Om(X,y.get(X.key).overlayedDocument);Z!=null&&te.push(new An(X.key,Z,Cu(Z.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(D,d,te,c)}).next(L=>{S=L;const te=L.applyToLocalDocumentSet(y,O);return u.documentOverlayCache.saveOverlays(D,L.batchId,te)})}).then(()=>({batchId:S.batchId,changes:Fu(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new me(se)),d=d.insert(c,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await di(r,i.changes),await Ns(r.remoteStore)}catch(i){const s=ga(i,"Failed to persist write");t.reject(s)}}async function _h(n,e){const t=J(n);try{const r=await Sg(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?de(a.va):i.removedDocuments.size>0&&(de(a.va),a.va=!1))}),await di(t,r,e)}catch(r){await ai(r)}}function pl(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const c=a.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=J(a);u.onlineState=c;let d=!1;u.queries.forEach((f,y)=>{for(const S of y.j_)S.Z_(c)&&(d=!0)}),d&&_a(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function g_(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new me(W.comparator);a=a.insert(s,Fe.newNoDocument(s,Q.min()));const c=ee().add(s),u=new Ps(Q.min(),new Map,new me(se),a,c);await _h(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),ya(r)}else await Bo(r.localStore,e,!1).then(()=>qo(r,e,t)).catch(ai)}async function __(n,e){const t=J(n),r=e.batch.batchId;try{const i=await Cg(t.localStore,e);vh(t,r,null),yh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await di(t,i)}catch(i){await ai(i)}}async function y_(n,e,t){const r=J(n);try{const i=await function(a,c){const u=J(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(y=>(de(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);vh(r,e,t),yh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await di(r,i)}catch(i){await ai(i)}}function yh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function vh(n,e,t){const r=J(n);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function qo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||wh(n,r)})}function wh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(ha(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ya(n))}function ml(n,e,t){for(const r of t)r instanceof ph?(n.La.addReference(r.key,e),v_(n,r)):r instanceof mh?($("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||wh(n,r.key)):G()}function v_(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||($("SyncEngine","New document in limbo: "+t),n.xa.add(r),ya(n))}function ya(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new W(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new c_(t)),n.Oa=n.Oa.insert(t,r),ch(n.remoteStore,new jt(ht(Mu(t.path)),r,"TargetPurposeLimboResolution",Xo.oe))}}async function di(n,e,t){const r=J(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=ua.Wi(u.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>N.forEach(d,S=>N.forEach(S.$i,D=>f.persistence.referenceDelegate.addReference(y,S.targetId,D)).next(()=>N.forEach(S.Ui,D=>f.persistence.referenceDelegate.removeReference(y,S.targetId,D)))))}catch(y){if(!ci(y))throw y;$("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const S=y.targetId;if(!y.fromCache){const D=f.os.get(S),x=D.snapshotVersion,O=D.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(S,O)}}}(r.localStore,s))}async function w_(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await ih(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new B(k.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await di(t,r.hs)}}function E_(n,e){const t=J(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const c=t.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function Eh(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_h.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g_.bind(null,e),e.Ca.d_=r_.bind(null,e.eventManager),e.Ca.$a=i_.bind(null,e.eventManager),e}function I_(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=__.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y_.bind(null,e),e}class gl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ds(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return bg(this.persistence,new Tg,e.initialUser,this.serializer)}createPersistence(e){return new wg(la.Zr,this.serializer)}createSharedClientState(e){return new Ng}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class T_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=w_.bind(null,this.syncEngine),await Xg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e_}()}createDatastore(e){const t=Ds(e.databaseInfo.databaseId),r=function(s){return new Lg(s)}(e.databaseInfo);return function(s,a,c,u){return new Ug(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new jg(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>pl(this.syncEngine,t,0),function(){return ll.D()?new ll:new Mg}())}createSyncEngine(e,t){return function(i,s,a,c,u,d,f){const y=new l_(i,s,a,c,u,d);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await hi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
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
 */class A_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class b_{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=Tu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ga(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fo(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ih(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _l(n,e){n.asyncQueue.verifyOperationInProgress();const t=await S_(n);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ul(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ul(e.remoteStore,i)),n._onlineComponents=e}function C_(n){return n.name==="FirebaseError"?n.code===k.FAILED_PRECONDITION||n.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function S_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!C_(t))throw t;Yn("Error using user provided cache. Falling back to memory cache: "+t),await fo(n,new gl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await fo(n,new gl);return n._offlineComponents}async function Ih(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await _l(n,n._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await _l(n,new T_))),n._onlineComponents}function R_(n){return Ih(n).then(e=>e.syncEngine)}async function P_(n){const e=await Ih(n),t=e.eventManager;return t.onListen=u_.bind(null,e.syncEngine),t.onUnlisten=f_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=h_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=p_.bind(null,e.syncEngine),t}function D_(n,e,t={}){const r=new Ht;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){const f=new A_({next:S=>{a.enqueueAndForget(()=>n_(s,y)),S.fromCache&&u.source==="server"?d.reject(new B(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(S)},error:S=>d.reject(S)}),y=new s_(c,f,{includeMetadataChanges:!0,_a:!0});return t_(s,y)}(await P_(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Th(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const yl=new Map;/**
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
 */function Ah(n,e,t){if(!t)throw new B(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function k_(n,e,t,r){if(e===!0&&r===!0)throw new B(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vl(n){if(!W.isDocumentKey(n))throw new B(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wl(n){if(W.isDocumentKey(n))throw new B(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G()}function hs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ms(n);throw new B(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class El{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}k_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Th((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Os{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qp;switch(r.type){case"firstParty":return new zp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=yl.get(t);r&&($("ComponentProvider","Removing Datastore"),yl.delete(t),r.terminate())}(this),Promise.resolve()}}function N_(n,e,t,r={}){var i;const s=(n=hs(n,Os))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Le.MOCK_USER;else{c=vf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new B(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Le(d)}n._authCredentials=new $p(new Iu(c,u))}}/**
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
 */class Cn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cn(this.firestore,e,this._query)}}class Ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class Wt extends Cn{constructor(e,t,r){super(e,t,Mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new W(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function Vs(n,e,...t){if(n=Be(n),Ah("collection","path",e),n instanceof Os){const r=pe.fromString(e,...t);return wl(r),new Wt(n,null,r)}{if(!(n instanceof Ze||n instanceof Wt))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return wl(r),new Wt(n.firestore,null,r)}}function M_(n,e,...t){if(n=Be(n),arguments.length===1&&(e=Tu.newId()),Ah("doc","path",e),n instanceof Os){const r=pe.fromString(e,...t);return vl(r),new Ze(n,null,new W(r))}{if(!(n instanceof Ze||n instanceof Wt))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return vl(r),new Ze(n.firestore,n instanceof Wt?n.converter:null,new W(r))}}/**
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
 */class O_{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new oh(this,"async_queue_retry"),this.Eu=()=>{const t=ho();t&&$("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=ho();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new Ht;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ci(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw St("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=t,t}enqueueAfterDelay(e,t,r){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const i=ma.createAndSchedule(this,e,t,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&G()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class va extends Os{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new O_}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ch(this),this._firestoreClient.terminate()}}function V_(n,e){const t=typeof n=="object"?n:Qo(),r=typeof n=="string"?n:"(default)",i=Tn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_f("firestore");s&&N_(i,...s)}return i}function bh(n){return n._firestoreClient||Ch(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ch(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,d,f){return new sm(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Th(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new b_(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tr(ke.fromBase64String(e))}catch(t){throw new B(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tr(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ea{constructor(e){this._methodName=e}}/**
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
 */class Ia{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */class Ta{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const L_=/^__.*__$/;class x_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new An(e,this.data,this.fieldMask,t,this.fieldTransforms):new li(e,this.data,t,this.fieldTransforms)}}function Sh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Aa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return ds(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Sh(this.wu)&&L_.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class F_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ds(e)}Nu(e,t,r,i=!1){return new Aa({wu:e,methodName:t,Ou:r,path:Pe.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rh(n){const e=n._freezeSettings(),t=Ds(n._databaseId);return new F_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function U_(n,e,t,r,i,s={}){const a=n.Nu(s.merge||s.mergeFields?2:0,e,t,i);kh("Data must be an object, but it was:",a,r);const c=Ph(r,a);let u,d;if(s.merge)u=new it(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const S=j_(e,y,t);if(!a.contains(S))throw new B(k.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);$_(f,S)||f.push(S)}u=new it(f),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new x_(new Je(c),u,d)}class ba extends Ea{_toFieldTransform(e){return new Dm(e.path,new Zr)}isEqual(e){return e instanceof ba}}function B_(n,e,t,r=!1){return Ca(t,n.Nu(r?4:3,e))}function Ca(n,e){if(Dh(n=Be(n)))return kh("Unsupported field value:",e,n),Ph(n,e);if(n instanceof Ea)return function(r,i){if(!Sh(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=Ca(c,i.Fu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:ls(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ls(i.serializer,s)}}if(r instanceof Ia)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tr)return{bytesValue:Ju(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:aa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ta)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Mu("VectorValues must only contain numeric values.");return ia(c.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Ms(r)}`)}(n,e)}function Ph(n,e){const t={};return Au(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(n,(r,i)=>{const s=Ca(i,e.bu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Dh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof Ia||n instanceof tr||n instanceof Ze||n instanceof Ea||n instanceof Ta)}function kh(n,e,t){if(!Dh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ms(t);throw r==="an object"?e.Mu(n+" a custom object"):e.Mu(n+" "+r)}}function j_(n,e,t){if((e=Be(e))instanceof wa)return e._internalPath;if(typeof e=="string")return Nh(n,e);throw ds("Field path arguments must be of type string or ",n,!1,void 0,t)}const q_=new RegExp("[~\\*/\\[\\]]");function Nh(n,e,t){if(e.search(q_)>=0)throw ds(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new wa(...e.split("."))._internalPath}catch{throw ds(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ds(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new B(k.INVALID_ARGUMENT,c+n+u)}function $_(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ls("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class H_ extends Mh{data(){return super.data()}}function Ls(n,e){return typeof e=="string"?Nh(n,e):e instanceof wa?e._internalPath:e._delegate._internalPath}/**
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
 */function W_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sa{}class Oh extends Sa{}function Ra(n,e,...t){let r=[];e instanceof Sa&&r.push(e),r=r.concat(t),function(s){const a=s.filter(u=>u instanceof Pa).length,c=s.filter(u=>u instanceof xs).length;if(a>1||a>0&&c>0)throw new B(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class xs extends Oh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xs(e,t,r)}_apply(e){const t=this._parse(e);return Lh(e._query,t),new Cn(e.firestore,e.converter,Oo(e._query,t))}_parse(e){const t=Rh(e.firestore);return function(s,a,c,u,d,f,y){let S;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Tl(y,f);const D=[];for(const x of y)D.push(Il(u,s,x));S={arrayValue:{values:D}}}else S=Il(u,s,y)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Tl(y,f),S=B_(c,a,y,f==="in"||f==="not-in");return we.create(d,f,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function z_(n,e,t){const r=e,i=Ls("where",n);return xs._create(i,r,t)}class Pa extends Sa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const u of c)Lh(a,u),a=Oo(a,u)}(e._query,t),new Cn(e.firestore,e.converter,Oo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Da extends Oh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Da(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new B(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xr(s,a)}(e._query,this._field,this._direction);return new Cn(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new or(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Vh(n,e="asc"){const t=e,r=Ls("orderBy",n);return Da._create(r,t)}function Il(n,e,t){if(typeof(t=Be(t))=="string"){if(t==="")throw new B(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ou(e)&&t.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(pe.fromString(t));if(!W.isDocumentKey(r))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hc(n,new W(r))}if(t instanceof Ze)return Hc(n,t._key);throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(t)}.`)}function Tl(n,e){if(!Array.isArray(n)||n.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lh(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class K_{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return sr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>_e(a.doubleValue));return new Ta(s)}convertGeoPoint(e){return new Ia(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Yr(e));default:return null}}convertTimestamp(e){const t=Gt(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);de(rh(r));const i=new Qr(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||St(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function G_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Wi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Y_ extends Mh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ls("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zi extends Y_{data(e={}){return super.data(e)}}class Q_{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Wi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new Zi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Wi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Zi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Wi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:J_(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function J_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class X_ extends K_{constructor(e){super(),this.firestore=e}convertBytes(e){return new tr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,t)}}function Fs(n){n=hs(n,Cn);const e=hs(n.firestore,va),t=bh(e),r=new X_(e);return W_(n._query),D_(t,n._query).then(i=>new Q_(e,r,n,i))}function Z_(n,e){const t=hs(n.firestore,va),r=M_(n),i=G_(n.converter,e);return ey(t,[U_(Rh(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function ey(n,e){return function(r,i){const s=new Ht;return r.asyncQueue.enqueueAndForget(async()=>m_(await R_(r),i,s)),s.promise}(bh(n),e)}function ty(){return new ba("serverTimestamp")}(function(e,t=!0){(function(i){ir=i})(rr),mt(new st("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new va(new Hp(r.getProvider("auth-internal")),new Gp(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Xe(Uc,"4.7.1",e),Xe(Uc,"4.7.1","esm2017")})();var ny="firebase",ry="10.13.1";/**
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
 */Xe(ny,ry,"app");const xh="@firebase/installations",ka="0.6.8";/**
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
 */const Fh=1e4,Uh=`w:${ka}`,Bh="FIS_v2",iy="https://firebaseinstallations.googleapis.com/v1",sy=60*60*1e3,oy="installations",ay="Installations";/**
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
 */const cy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vn=new In(oy,ay,cy);function jh(n){return n instanceof ct&&n.code.includes("request-failed")}/**
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
 */function qh({projectId:n}){return`${iy}/projects/${n}/installations`}function $h(n){return{token:n.token,requestStatus:2,expiresIn:uy(n.expiresIn),creationTime:Date.now()}}async function Hh(n,e){const r=(await e.json()).error;return vn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ly(n,{refreshToken:e}){const t=Wh(n);return t.append("Authorization",hy(e)),t}async function zh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function uy(n){return Number(n.replace("s","000"))}function hy(n){return`${Bh} ${n}`}/**
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
 */async function dy({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=qh(n),i=Wh(n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:Bh,appId:n.appId,sdkVersion:Uh},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await zh(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:$h(d.authToken)}}else throw await Hh("Create Installation",u)}/**
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
 */function Kh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function fy(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const py=/^[cdef][\w-]{21}$/,$o="";function my(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=gy(n);return py.test(t)?t:$o}catch{return $o}}function gy(n){return fy(n).substr(0,22)}/**
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
 */function Us(n){return`${n.appName}!${n.appId}`}/**
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
 */const Gh=new Map;function Yh(n,e){const t=Us(n);Qh(t,e),_y(t,e)}function Qh(n,e){const t=Gh.get(n);if(t)for(const r of t)r(e)}function _y(n,e){const t=yy();t&&t.postMessage({key:n,fid:e}),vy()}let pn=null;function yy(){return!pn&&"BroadcastChannel"in self&&(pn=new BroadcastChannel("[Firebase] FID Change"),pn.onmessage=n=>{Qh(n.data.key,n.data.fid)}),pn}function vy(){Gh.size===0&&pn&&(pn.close(),pn=null)}/**
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
 */const wy="firebase-installations-database",Ey=1,wn="firebase-installations-store";let po=null;function Na(){return po||(po=hu(wy,Ey,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(wn)}}})),po}async function fs(n,e){const t=Us(n),i=(await Na()).transaction(wn,"readwrite"),s=i.objectStore(wn),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Yh(n,e.fid),e}async function Jh(n){const e=Us(n),r=(await Na()).transaction(wn,"readwrite");await r.objectStore(wn).delete(e),await r.done}async function Bs(n,e){const t=Us(n),i=(await Na()).transaction(wn,"readwrite"),s=i.objectStore(wn),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&Yh(n,c.fid),c}/**
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
 */async function Ma(n){let e;const t=await Bs(n.appConfig,r=>{const i=Iy(r),s=Ty(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===$o?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Iy(n){const e=n||{fid:my(),registrationStatus:0};return Xh(e)}function Ty(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Ay(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:by(n)}:{installationEntry:e}}async function Ay(n,e){try{const t=await dy(n,e);return fs(n.appConfig,t)}catch(t){throw jh(t)&&t.customData.serverCode===409?await Jh(n.appConfig):await fs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function by(n){let e=await Al(n.appConfig);for(;e.registrationStatus===1;)await Kh(100),e=await Al(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ma(n);return r||t}return e}function Al(n){return Bs(n,e=>{if(!e)throw vn.create("installation-not-found");return Xh(e)})}function Xh(n){return Cy(n)?{fid:n.fid,registrationStatus:0}:n}function Cy(n){return n.registrationStatus===1&&n.registrationTime+Fh<Date.now()}/**
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
 */async function Sy({appConfig:n,heartbeatServiceProvider:e},t){const r=Ry(n,t),i=ly(n,t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Uh,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await zh(()=>fetch(r,c));if(u.ok){const d=await u.json();return $h(d)}else throw await Hh("Generate Auth Token",u)}function Ry(n,{fid:e}){return`${qh(n)}/${e}/authTokens:generate`}/**
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
 */async function Oa(n,e=!1){let t;const r=await Bs(n.appConfig,s=>{if(!Zh(s))throw vn.create("not-registered");const a=s.authToken;if(!e&&ky(a))return s;if(a.requestStatus===1)return t=Py(n,e),s;{if(!navigator.onLine)throw vn.create("app-offline");const c=My(s);return t=Dy(n,c),c}});return t?await t:r.authToken}async function Py(n,e){let t=await bl(n.appConfig);for(;t.authToken.requestStatus===1;)await Kh(100),t=await bl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Oa(n,e):r}function bl(n){return Bs(n,e=>{if(!Zh(e))throw vn.create("not-registered");const t=e.authToken;return Oy(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Dy(n,e){try{const t=await Sy(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await fs(n.appConfig,r),t}catch(t){if(jh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Jh(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fs(n.appConfig,r)}throw t}}function Zh(n){return n!==void 0&&n.registrationStatus===2}function ky(n){return n.requestStatus===2&&!Ny(n)}function Ny(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+sy}function My(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Oy(n){return n.requestStatus===1&&n.requestTime+Fh<Date.now()}/**
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
 */async function Vy(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ma(e);return r?r.catch(console.error):Oa(e).catch(console.error),t.fid}/**
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
 */async function Ly(n,e=!1){const t=n;return await xy(t),(await Oa(t,e)).token}async function xy(n){const{registrationPromise:e}=await Ma(n);e&&await e}/**
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
 */function Fy(n){if(!n||!n.options)throw mo("App Configuration");if(!n.name)throw mo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw mo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function mo(n){return vn.create("missing-app-config-values",{valueName:n})}/**
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
 */const ed="installations",Uy="installations-internal",By=n=>{const e=n.getProvider("app").getImmediate(),t=Fy(e),r=Tn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jy=n=>{const e=n.getProvider("app").getImmediate(),t=Tn(e,ed).getImmediate();return{getId:()=>Vy(t),getToken:i=>Ly(t,i)}};function qy(){mt(new st(ed,By,"PUBLIC")),mt(new st(Uy,jy,"PRIVATE"))}qy();Xe(xh,ka);Xe(xh,ka,"esm2017");/**
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
 */const ps="analytics",$y="firebase_id",Hy="origin",Wy=60*1e3,zy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Va="https://www.googletagmanager.com/gtag/js";/**
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
 */const We=new Ts("@firebase/analytics");/**
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
 */const Ky={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new In("analytics","Analytics",Ky);/**
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
 */function Gy(n){if(!n.startsWith(Va)){const e=Ye.create("invalid-gtag-resource",{gtagURL:n});return We.warn(e.message),""}return n}function td(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Yy(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Qy(n,e){const t=Yy("firebase-js-sdk-policy",{createScriptURL:Gy}),r=document.createElement("script"),i=`${Va}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Jy(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Xy(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const u=(await td(t)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(c){We.error(c)}n("config",i,s)}async function Zy(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await td(t);for(const u of a){const d=c.find(y=>y.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){We.error(s)}}function ev(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,u]=a;await Zy(n,e,t,c,u)}else if(s==="config"){const[c,u]=a;await Xy(n,e,t,r,c,u)}else if(s==="consent"){const[c,u]=a;n("consent",c,u)}else if(s==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){We.error(c)}}return i}function tv(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ev(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function nv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Va)&&t.src.includes(n))return t;return null}/**
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
 */const rv=30,iv=1e3;class sv{constructor(e={},t=iv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nd=new sv;function ov(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function av(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:ov(r)},s=zy.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function cv(n,e=nd,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Ye.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ye.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new hv;return setTimeout(async()=>{c.abort()},Wy),rd({appId:r,apiKey:i,measurementId:s},a,c,e)}async function rd(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=nd){var s;const{appId:a,measurementId:c}=n;try{await lv(r,e)}catch(u){if(c)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await av(n);return i.deleteThrottleMetadata(a),u}catch(u){const d=u;if(!uv(d)){if(i.deleteThrottleMetadata(a),c)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pc(t,i.intervalMillis,rv):Pc(t,i.intervalMillis),y={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return i.setThrottleMetadata(a,y),We.debug(`Calling attemptFetch again in ${f} millis`),rd(n,y,r,i)}}function lv(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uv(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class hv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dv(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
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
 */async function fv(){if(au())try{await cu()}catch(n){return We.warn(Ye.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return We.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pv(n,e,t,r,i,s,a){var c;const u=cv(n);u.then(D=>{t[D.measurementId]=D.appId,n.options.measurementId&&D.measurementId!==n.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>We.error(D)),e.push(u);const d=fv().then(D=>{if(D)return r.getId()}),[f,y]=await Promise.all([u,d]);nv(s)||Qy(s,f.measurementId),i("js",new Date);const S=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return S[Hy]="firebase",S.update=!0,y!=null&&(S[$y]=y),i("config",f.measurementId,S),f.measurementId}/**
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
 */class mv{constructor(e){this.app=e}_delete(){return delete $r[this.app.options.appId],Promise.resolve()}}let $r={},Cl=[];const Sl={};let go="dataLayer",gv="gtag",Rl,id,Pl=!1;function _v(){const n=[];if(ou()&&n.push("This is a browser extension environment."),bf()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Ye.create("invalid-analytics-context",{errorInfo:e});We.warn(t.message)}}function yv(n,e,t){_v();const r=n.options.appId;if(!r)throw Ye.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if($r[r]!=null)throw Ye.create("already-exists",{id:r});if(!Pl){Jy(go);const{wrappedGtag:s,gtagCore:a}=tv($r,Cl,Sl,go,gv);id=s,Rl=a,Pl=!0}return $r[r]=pv(n,Cl,Sl,e,Rl,go,t),new mv(n)}function vv(n=Qo()){n=Be(n);const e=Tn(n,ps);return e.isInitialized()?e.getImmediate():wv(n)}function wv(n,e={}){const t=Tn(n,ps);if(t.isInitialized()){const i=t.getImmediate();if(zr(e,t.getOptions()))return i;throw Ye.create("already-initialized")}return t.initialize({options:e})}function Ev(n,e,t,r){n=Be(n),dv(id,$r[n.app.options.appId],e,t,r).catch(i=>We.error(i))}const Dl="@firebase/analytics",kl="0.10.7";function Iv(){mt(new st(ps,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return yv(r,i,t)},"PUBLIC")),mt(new st("analytics-internal",n,"PRIVATE")),Xe(Dl,kl),Xe(Dl,kl,"esm2017");function n(e){try{const t=e.getProvider(ps).getImmediate();return{logEvent:(r,i,s)=>Ev(t,r,i,s)}}catch(t){throw Ye.create("interop-component-reg-failed",{reason:t})}}}Iv();function La(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function sd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tv=sd,od=new In("auth","Firebase",sd());/**
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
 */const ms=new Ts("@firebase/auth");function Av(n,...e){ms.logLevel<=ne.WARN&&ms.warn(`Auth (${rr}): ${n}`,...e)}function es(n,...e){ms.logLevel<=ne.ERROR&&ms.error(`Auth (${rr}): ${n}`,...e)}/**
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
 */function at(n,...e){throw xa(n,...e)}function ft(n,...e){return xa(n,...e)}function ad(n,e,t){const r=Object.assign(Object.assign({},Tv()),{[e]:t});return new In("auth","Firebase",r).create(e,{appName:n.name})}function zt(n){return ad(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return od.create(n,...e)}function K(n,e,...t){if(!n)throw xa(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw es(e),new Error(e)}function Pt(n,e){n||It(e)}/**
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
 */function Ho(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bv(){return Nl()==="http:"||Nl()==="https:"}function Nl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Cv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bv()||ou()||"connection"in navigator)?navigator.onLine:!0}function Sv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=wf()||If()}get(){return Cv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fa(n,e){Pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Pv=new fi(3e4,6e4);function Sn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qt(n,e,t,r,i={}){return ld(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=oi(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),cd.fetch()(ud(n,n.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function ld(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rv),e);try{const i=new kv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw zi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw zi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw zi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ad(n,f,d);at(n,f)}}catch(i){if(i instanceof ct)throw i;at(n,"network-request-failed",{message:String(i)})}}async function js(n,e,t,r,i={}){const s=await Qt(n,e,t,r,i);return"mfaPendingCredential"in s&&at(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ud(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Fa(n.config,i):`${n.config.apiScheme}://${i}`}function Dv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),Pv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ft(n,e,r);return i.customData._tokenResponse=t,i}function Ml(n){return n!==void 0&&n.enterprise!==void 0}class Nv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mv(n,e){return Qt(n,"GET","/v2/recaptchaConfig",Sn(n,e))}/**
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
 */async function Ov(n,e){return Qt(n,"POST","/v1/accounts:delete",e)}async function hd(n,e){return Qt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vv(n,e=!1){const t=Be(n),r=await t.getIdToken(e),i=Ua(r);K(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hr(_o(i.auth_time)),issuedAtTime:Hr(_o(i.iat)),expirationTime:Hr(_o(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _o(n){return Number(n)*1e3}function Ua(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return es("JWT malformed, contained fewer than 3 sections"),null;try{const i=nu(t);return i?JSON.parse(i):(es("Failed to decode base64 JWT payload"),null)}catch(i){return es("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ol(n){const e=Ua(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ct&&Lv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Lv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class xv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gs(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ni(n,hd(t,{idToken:r}));K(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dd(s.providerUserInfo):[],c=Uv(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Wo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function Fv(n){const e=Be(n);await gs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dd(n){return n.map(e=>{var{providerId:t}=e,r=La(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Bv(n,e){const t=await ld(n,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=ud(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jv(n,e){return Qt(n,"POST","/v2/accounts:revokeToken",Sn(n,e))}/**
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
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ol(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=Ol(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Hn;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Lt(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vv(this,e)}reload(){return Fv(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await ni(this,Ov(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,d,f;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(i=t.email)!==null&&i!==void 0?i:void 0,D=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,L=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,te=(d=t.createdAt)!==null&&d!==void 0?d:void 0,X=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Z,emailVerified:le,isAnonymous:Ne,providerData:ae,stsTokenManager:T}=t;K(Z&&T,e,"internal-error");const _=Hn.fromJSON(this.name,T);K(typeof Z=="string",e,"internal-error"),Lt(y,e.name),Lt(S,e.name),K(typeof le=="boolean",e,"internal-error"),K(typeof Ne=="boolean",e,"internal-error"),Lt(D,e.name),Lt(x,e.name),Lt(O,e.name),Lt(L,e.name),Lt(te,e.name),Lt(X,e.name);const w=new Tt({uid:Z,auth:e,email:S,emailVerified:le,displayName:y,isAnonymous:Ne,photoURL:x,phoneNumber:D,tenantId:O,stsTokenManager:_,createdAt:te,lastLoginAt:X});return ae&&Array.isArray(ae)&&(w.providerData=ae.map(E=>Object.assign({},E))),L&&(w._redirectEventId=L),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Hn;i.updateFromServerResponse(t);const s=new Tt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gs(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Hn;c.updateFromIdToken(r);const u=new Tt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Vl=new Map;function At(n){Pt(n instanceof Function,"Expected a class definition");let e=Vl.get(n);return e?(Pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vl.set(n,e),e)}/**
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
 */class fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fd.type="NONE";const Ll=fd;/**
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
 */function ts(n,e,t){return`firebase:${n}:${e}:${t}`}class Wn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ts(this.userKey,i.apiKey,s),this.fullPersistenceKey=ts("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wn(At(Ll),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||At(Ll);const a=ts(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const y=Tt._fromJSON(e,f);d!==s&&(c=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Wn(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Wn(s,e,r))}}/**
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
 */function xl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vd(e))return"Blackberry";if(wd(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||gd(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pd(n=Ue()){return/firefox\//i.test(n)}function md(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gd(n=Ue()){return/crios\//i.test(n)}function _d(n=Ue()){return/iemobile/i.test(n)}function yd(n=Ue()){return/android/i.test(n)}function vd(n=Ue()){return/blackberry/i.test(n)}function wd(n=Ue()){return/webos/i.test(n)}function Ba(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qv(n=Ue()){var e;return Ba(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $v(){return Tf()&&document.documentMode===10}function Ed(n=Ue()){return Ba(n)||yd(n)||wd(n)||vd(n)||/windows phone/i.test(n)||_d(n)}/**
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
 */function Id(n,e=[]){let t;switch(n){case"Browser":t=xl(Ue());break;case"Worker":t=`${xl(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rr}/${r}`}/**
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
 */class Hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Wv(n,e={}){return Qt(n,"GET","/v2/passwordPolicy",Sn(n,e))}/**
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
 */const zv=6;class Kv{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:zv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Gv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fl(this),this.idTokenSubscription=new Fl(this),this.beforeStateQueue=new Hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hd(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(zt(this));const t=e?Be(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wv(this),t=new Kv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new In("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Av(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function lr(n){return Be(n)}class Fl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Df(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yv(n){qs=n}function Td(n){return qs.loadJS(n)}function Qv(){return qs.recaptchaEnterpriseScript}function Jv(){return qs.gapiScript}function Xv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Zv="recaptcha-enterprise",ew="NO_RECAPTCHA";class tw{constructor(e){this.type=Zv,this.auth=lr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{Mv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Nv(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){const u=window.grecaptcha;Ml(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ew)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&Ml(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Qv();u.length!==0&&(u+=c),Td(u).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Ul(n,e,t,r=!1){const i=new tw(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Bl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ul(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ul(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function nw(n,e){const t=Tn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(zr(s,e??{}))return i;at(i,"already-initialized")}return t.initialize({options:e})}function rw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iw(n,e,t){const r=lr(n);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ad(e),{host:a,port:c}=sw(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ow()}function Ad(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sw(n){const e=Ad(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:jl(a)}}}function jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ow(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ja{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function aw(n,e){return Qt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cw(n,e){return js(n,"POST","/v1/accounts:signInWithPassword",Sn(n,e))}/**
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
 */async function lw(n,e){return js(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}async function uw(n,e){return js(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}/**
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
 */class ri extends ja{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ri(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ri(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bl(e,t,"signInWithPassword",cw);case"emailLink":return lw(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bl(e,r,"signUpPassword",aw);case"emailLink":return uw(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(n,e){return js(n,"POST","/v1/accounts:signInWithIdp",Sn(n,e))}/**
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
 */const hw="http://localhost";class En extends ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=La(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new En(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:hw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oi(t)}return e}}/**
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
 */function dw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fw(n){const e=Or(Vr(n)).link,t=e?Or(Vr(e)).deep_link_id:null,r=Or(Vr(n)).deep_link_id;return(r?Or(Vr(r)).link:null)||r||t||e||n}class qa{constructor(e){var t,r,i,s,a,c;const u=Or(Vr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=dw((i=u.mode)!==null&&i!==void 0?i:null);K(d&&f&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=fw(e);try{return new qa(t)}catch{return null}}}/**
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
 */class ur{constructor(){this.providerId=ur.PROVIDER_ID}static credential(e,t){return ri._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=qa.parseLink(t);return K(r,"argument-error"),ri._fromEmailAndCode(e,r.code,r.tenantId)}}ur.PROVIDER_ID="password";ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pi extends bd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends pi{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Ut extends pi{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Bt extends pi{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bt.credential(t,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),a=ql(r);return new nr({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ql(r);return new nr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class _s extends ct{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new _s(e,t,r,i)}}function Cd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_s._fromErrorAndOperation(n,s,e,r):s})}async function pw(n,e,t=!1){const r=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return nr._forOperation(n,"link",r)}/**
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
 */async function mw(n,e,t=!1){const{auth:r}=n;if(Et(r.app))return Promise.reject(zt(r));const i="reauthenticate";try{const s=await ni(n,Cd(r,i,e,n),t);K(s.idToken,r,"internal-error");const a=Ua(s.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(n.uid===c,r,"user-mismatch"),nr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&at(r,"user-mismatch"),s}}/**
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
 */async function Sd(n,e,t=!1){if(Et(n.app))return Promise.reject(zt(n));const r="signIn",i=await Cd(n,r,e),s=await nr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function gw(n,e){return Sd(lr(n),e)}/**
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
 */async function _w(n){const e=lr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function yw(n,e,t){return Et(n.app)?Promise.reject(zt(n)):gw(Be(n),ur.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_w(n),r})}function vw(n,e,t,r){return Be(n).onIdTokenChanged(e,t,r)}function ww(n,e,t){return Be(n).beforeAuthStateChanged(e,t)}function Ew(n,e,t,r){return Be(n).onAuthStateChanged(e,t,r)}const ys="__sak";/**
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
 */class Rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ys,"1"),this.storage.removeItem(ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Iw=1e3,Tw=10;class Pd extends Rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);$v()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Tw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pd.type="LOCAL";const Aw=Pd;/**
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
 */class Dd extends Rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dd.type="SESSION";const kd=Dd;/**
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
 */function bw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new $s(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),u=await bw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function $a(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Cw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const d=$a("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const S=y;if(S.data.eventId===d)switch(S.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(S.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function pt(){return window}function Sw(n){pt().location.href=n}/**
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
 */function Nd(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Rw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Dw(){return Nd()?self:null}/**
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
 */const Md="firebaseLocalStorageDb",kw=1,vs="firebaseLocalStorage",Od="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hs(n,e){return n.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function Nw(){const n=indexedDB.deleteDatabase(Md);return new mi(n).toPromise()}function zo(){const n=indexedDB.open(Md,kw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vs,{keyPath:Od})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vs)?e(r):(r.close(),await Nw(),e(await zo()))})})}async function $l(n,e,t){const r=Hs(n,!0).put({[Od]:e,value:t});return new mi(r).toPromise()}async function Mw(n,e){const t=Hs(n,!1).get(e),r=await new mi(t).toPromise();return r===void 0?null:r.value}function Hl(n,e){const t=Hs(n,!0).delete(e);return new mi(t).toPromise()}const Ow=800,Vw=3;class Vd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Vw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(Dw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rw(),!this.activeServiceWorker)return;this.sender=new Cw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zo();return await $l(e,ys,"1"),await Hl(e,ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$l(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Mw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hs(i,!1).getAll();return new mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vd.type="LOCAL";const Lw=Vd;new fi(3e4,6e4);/**
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
 */function xw(n,e){return e?At(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ha extends ja{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fw(n){return Sd(n.auth,new Ha(n),n.bypassAuthState)}function Uw(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),mw(t,new Ha(n),n.bypassAuthState)}async function Bw(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),pw(t,new Ha(n),n.bypassAuthState)}/**
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
 */class Ld{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fw;case"linkViaPopup":case"linkViaRedirect":return Bw;case"reauthViaPopup":case"reauthViaRedirect":return Uw;default:at(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jw=new fi(2e3,1e4);class qn extends Ld{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=$a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jw.get())};e()}}qn.currentPopupAction=null;/**
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
 */const qw="pendingRedirect",ns=new Map;class $w extends Ld{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ns.get(this.auth._key());if(!e){try{const r=await Hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ns.set(this.auth._key(),e)}return this.bypassAuthState||ns.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hw(n,e){const t=Kw(e),r=zw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Ww(n,e){ns.set(n._key(),e)}function zw(n){return At(n._redirectPersistence)}function Kw(n){return ts(qw,n.config.apiKey,n.name)}async function Gw(n,e,t=!1){if(Et(n.app))return Promise.reject(zt(n));const r=lr(n),i=xw(r,e),a=await new $w(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Yw=10*60*1e3;class Qw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ft(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wl(e))}saveEventToCache(e){this.cachedEventUids.add(Wl(e)),this.lastProcessedEventTime=Date.now()}}function Wl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(n);default:return!1}}/**
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
 */async function Xw(n,e={}){return Qt(n,"GET","/v1/projects",e)}/**
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
 */const Zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eE=/^https?/;async function tE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xw(n);for(const t of e)try{if(nE(t))return}catch{}at(n,"unauthorized-domain")}function nE(n){const e=Ho(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!eE.test(t))return!1;if(Zw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rE=new fi(3e4,6e4);function zl(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iE(n){return new Promise((e,t)=>{var r,i,s;function a(){zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zl(),t(ft(n,"network-request-failed"))},timeout:rE.get()})}if(!((i=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pt().gapi)===null||s===void 0)&&s.load)a();else{const c=Xv("iframefcb");return pt()[c]=()=>{gapi.load?a():t(ft(n,"network-request-failed"))},Td(`${Jv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw rs=null,e})}let rs=null;function sE(n){return rs=rs||iE(n),rs}/**
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
 */const oE=new fi(5e3,15e3),aE="__/auth/iframe",cE="emulator/auth/iframe",lE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hE(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fa(e,cE):`https://${n.config.authDomain}/${aE}`,r={apiKey:e.apiKey,appName:n.name,v:rr},i=uE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${oi(r).slice(1)}`}async function dE(n){const e=await sE(n),t=pt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:hE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ft(n,"network-request-failed"),c=pt().setTimeout(()=>{s(a)},oE.get());function u(){pt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const fE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pE=500,mE=600,gE="_blank",_E="http://localhost";class Kl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(n,e,t,r=pE,i=mE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},fE),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ue().toLowerCase();t&&(c=gd(d)?gE:t),pd(d)&&(e=e||_E,u.scrollbars="yes");const f=Object.entries(u).reduce((S,[D,x])=>`${S}${D}=${x},`,"");if(qv(d)&&c!=="_self")return vE(e||"",c),new Kl(null);const y=window.open(e||"",c,f);K(y,n,"popup-blocked");try{y.focus()}catch{}return new Kl(y)}function vE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const wE="__/auth/handler",EE="emulator/auth/handler",IE=encodeURIComponent("fac");async function Gl(n,e,t,r,i,s){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rr,eventId:i};if(e instanceof bd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Pf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof pi){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${IE}=${encodeURIComponent(u)}`:"";return`${TE(n)}?${oi(c).slice(1)}${d}`}function TE({config:n}){return n.emulator?Fa(n,EE):`https://${n.authDomain}/${wE}`}/**
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
 */const yo="webStorageSupport";class AE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kd,this._completeRedirectFn=Gw,this._overrideRedirectResult=Ww}async _openPopup(e,t,r,i){var s;Pt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Gl(e,t,r,Ho(),i);return yE(e,a,$a())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Gl(e,t,r,Ho(),i);return Sw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await dE(e),r=new Qw(e);return t.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yo,{type:yo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yo];a!==void 0&&t(!!a),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ed()||md()||Ba()}}const bE=AE;var Yl="@firebase/auth",Ql="1.7.8";/**
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
 */class CE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RE(n){mt(new st("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(n)},d=new Gv(r,i,s,u);return rw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mt(new st("auth-internal",e=>{const t=lr(e.getProvider("auth").getImmediate());return(r=>new CE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Yl,Ql,SE(n)),Xe(Yl,Ql,"esm2017")}/**
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
 */const PE=5*60,DE=su("authIdTokenMaxAge")||PE;let Jl=null;const kE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>DE)return;const i=t==null?void 0:t.token;Jl!==i&&(Jl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NE(n=Qo()){const e=Tn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nw(n,{popupRedirectResolver:bE,persistence:[Lw,Aw,kd]}),r=su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=kE(s.toString());ww(t,a,()=>a(t.currentUser)),vw(t,c=>a(c))}}const i=ru("auth");return i&&iw(t,`http://${i}`),t}function ME(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Yv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ft("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ME().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RE("Browser");const OE={apiKey:"AIzaSyA0nmsRqOpSPYvSGHiUkscGTCpfXCFElAQ",authDomain:"bakunavi-0317.firebaseapp.com",projectId:"bakunavi-0317",storageBucket:"bakunavi-0317.appspot.com",messagingSenderId:"502891540501",appId:"1:502891540501:web:692fe3da0db1ebf86f5e1c",measurementId:"G-W3L78BFQY8"},Wa=du(OE);vv(Wa);const Ws=V_(Wa),za=NE(Wa),hn=class hn{constructor(){q(this,"_eventsCache",[])}static getInstance(){return hn.instance||(hn.instance=new hn),hn.instance}updateInfoCard(e=this._eventsCache){ws.getInstance().inputData(e)}set eventsCache(e){this._eventsCache=e,this.updateInfoCard()}get eventsCache(){return this._eventsCache}filterEvents(e){const t=this._eventsCache.filter(e);this.updateInfoCard(t)}};q(hn,"instance");let ii=hn;async function VE(){const n=Vs(Ws,"events"),e=await Fs(n);ii.getInstance().eventsCache=e.docs.map(t=>({id:t.id,...t.data()}))}async function LE(n){try{const e=Vs(Ws,"events"),t=Ra(e,z_("ticket_url","==",n.ticket_url));if(!(await Fs(t)).empty)throw new Error("このチケットURLは既に存在します。別のURLを使用してください。");typeof n.comedians=="string"&&(n.comedians=n.comedians.split(/[/／,、]/).map(f=>f.trim()));const i={area:n.area,venue:n.venue},{area:s,venue:a,...c}=n,u={...c,location:i,created_at:ty(),updated_at:null},d=await Z_(e,u);return console.log("イベントが追加されました。ID: ",d.id),d.id}catch(e){throw console.error("イベントの追加中にエラーが発生しました: ",e),new Error(`${e}`)}}async function xE(){const n=Vs(Ws,"eventers"),e=Ra(n,Vh("display_order","asc"));return(await Fs(e)).docs.map(r=>({id:r.id,...r.data()}))}async function FE(){const n=Vs(Ws,"areas"),e=Ra(n,Vh("display_order","asc"));return(await Fs(e)).docs.map(r=>({id:r.id,...r.data()}))}class Fd{constructor(e){q(this,"accordionNode");q(this,"defaultHeight","");q(this,"w",window.innerWidth);this.accordionNode=e.accordionNode,this.init()}init(){this.setupAccordion(),this.addEventListeners()}setupAccordion(){var i;const e=this.accordionNode.scrollHeight,t=this.accordionNode.offsetHeight;if(e-t>0&&!((i=this.accordionNode.parentElement)!=null&&i.querySelector(".js-accordionBtn"))){const s=document.createElement("p");s.className="js-accordionBtn btn-type01 type_vt",s.innerHTML='<a href="#"><i class="fas fa-angle-down"></i></a>';const a=this.accordionNode.parentElement;if(!a)return;a.appendChild(s)}else{const s=this.accordionNode.parentElement;s&&(s.style.paddingBottom="1.7rem")}this.defaultHeight=parseInt(window.getComputedStyle(this.accordionNode).height||"0",10).toString()}addEventListeners(){const e=this.accordionNode.parentElement;if(!e)return;const t=e.querySelector(".js-accordionBtn a");t&&(t.addEventListener("click",r=>{var a,c,u;r.preventDefault();const i=r.currentTarget,s=(a=i.closest(".js-accordionBtn"))==null?void 0:a.previousElementSibling;if(i.classList.contains("active"))s.style.height=this.defaultHeight+"px",i.innerHTML='<i class="fas fa-angle-down"></i>',(c=i.closest(".js-accordionBtn"))==null||c.classList.remove("vt02");else{const d=parseInt(window.getComputedStyle(s).height||"0",10),f=s.scrollHeight,y=s.offsetHeight,S=f-y,D=d+S;s.style.height=D+"px",i.innerHTML='<i class="fas fa-angle-up"></i>',(u=i.closest(".js-accordionBtn"))==null||u.classList.add("vt02")}i.classList.toggle("active")}),window.addEventListener("resize",()=>{(this.w>640&&window.innerWidth<=640||this.w<=640&&window.innerWidth>640)&&this.resizeReset(),this.w=window.innerWidth}))}resizeReset(){const e=this.accordionNode;e.style.height=this.defaultHeight+"px",this.accordionNode.querySelectorAll(".js-accordionBtn").forEach(t=>{t.classList.remove("vt02");const r=t.querySelector("a");r&&(r.innerHTML='<i class="fas fa-angle-down"></i>',r.classList.remove("active"))})}}class UE{constructor(e){q(this,"insert");q(this,"templateItem");q(this,"templateList");q(this,"templateCount",null);this.insert=document.querySelector(e),this.insert?(this.templateItem=this.insert.querySelector(".js-template-item"),this.templateList=this.insert.querySelector(".js-template-list"),this.templateCount=this.insert.querySelector(".js-template-count")):(this.templateItem=null,this.templateList=null)}insertData(e){!this.templateItem||!this.templateList||!this.templateCount||(this.templateList.innerHTML="",this.updateEventCountDisplay(e.length),e.length!==0&&(e.forEach((t,r)=>{const i=this.templateItem.content.cloneNode(!0);this.populateEventTemplate(i,t,r),this.templateList.appendChild(i)}),this.callAccordion()))}updateEventCountDisplay(e){this.templateCount.querySelectorAll("[data-count]").forEach(i=>{i.dataset.count==="count"?i.textContent=e.toString():i.dataset.count==="start"&&i.classList.toggle("u-hidden",e===0||e===1)});const r=this.insert.querySelector(".js-template-hidden");r&&(e===0?r.classList.remove("u-hidden"):r.classList.add("u-hidden"))}populateEventTemplate(e,t,r){const i=new Date(t.opening_time.seconds*1e3),s=new Date(t.start_time.seconds*1e3),a=this.formatDate(i),c=this.formatTime(i),u=this.formatTime(s);this.setTextContent(e,".js-template-item-eventDate",a),this.setTextContent(e,".js-template-item-eventName",t.event_name),this.setTextContent(e,".js-template-item-eventer",t.eventer),this.setTextContent(e,".js-template-item-currentFee",t.current_day_fee),this.setTextContent(e,".js-template-item-fee",t.pre_ordered_fee),this.setAttribute(e,".js-template-item-ticketUrl","href",t.ticket_url),this.setTextContent(e,".js-template-item-area",t.location.area),this.setTextContent(e,".js-template-item-venue",t.location.venue),this.setTextContent(e,".js-template-item-open",c),this.setTextContentForAll(e,".js-template-item-start",u),this.populateComedians(e,t.comedians,r)}formatDate(e){const t=["日","月","火","水","木","金","土"];return`${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日(${t[e.getDay()]})`}formatTime(e){return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}setTextContent(e,t,r){const i=e.querySelector(t);i&&(i.textContent=r)}setTextContentForAll(e,t,r){e.querySelectorAll(t).forEach(s=>{s.textContent=r})}setAttribute(e,t,r,i){const s=e.querySelector(t);s&&s.setAttribute(r,i)}populateComedians(e,t,r){const i=e.querySelector(".js-template-item-comedianItem"),s=e.querySelector(".js-template-comedianList");let a=1;t.forEach(c=>{const u=i.content.cloneNode(!0);this.setComedianData(u,c,r,a),s.appendChild(u),a++})}setComedianData(e,t,r,i){const s=e.querySelector(".js-template-item-comedian"),a=e.querySelector("[data-comedian]"),c=e.querySelector("[data-record]");if(s&&a&&c){const u=`comedian-${r+1}-${i}`;a.id=u,s.htmlFor=u,a.value=t,c.dataset.record=i.toString(),s.textContent=t}}callAccordion(){const e=document.querySelectorAll(".js-accordion");for(let t=0;t<e.length;t++)new Fd({accordionNode:e[t]})}}const dn=class dn{constructor(){q(this,"dataInsert");this.dataInsert=new UE(".js-dataInsert"),this.init()}init(){VE(),this.inputData()}static getInstance(){return dn.instance||(dn.instance=new dn),dn.instance}async inputData(e=ii.getInstance().eventsCache){try{this.dataInsert.insertData(e)}catch(t){console.error("Error fetching events:",t)}}};q(dn,"instance");let ws=dn;class BE{constructor(e){q(this,"radioNode");q(this,"radios");q(this,"lastChecked",null);this.radioNode=e.radioNode,this.radios=this.radioNode.querySelectorAll(".js-radioCheck-radio"),this.init()}init(){this.cancelChecked()}cancelChecked(){this.radios.forEach(e=>{e.addEventListener("click",()=>{this.lastChecked===e?(e.checked=!1,this.lastChecked=null):this.lastChecked=e})})}}class jE{constructor(e){q(this,"rangeNode");q(this,"rangeValue");q(this,"rangeSlider");this.rangeNode=e.rangeNode,this.rangeValue=this.rangeNode.querySelector(".js-modalBase-rangeValue"),this.rangeSlider=this.rangeNode.querySelector(".js-modalBase-rangeSlider"),this.init()}init(){this.initSlider(),this.changeText()}initSlider(){this.rangeSlider&&(this.rangeSlider.value=this.rangeSlider.max)}changeText(){if(this.rangeSlider&&this.rangeValue){const e=()=>{const t=this.rangeValue.nextElementSibling,r=this.rangeValue.previousElementSibling;if(this.rangeSlider.value===this.rangeSlider.max&&(this.rangeValue.textContent="上限なし",t&&!t.classList.contains("u-hidden")&&t.classList.add("u-hidden")),this.rangeSlider.value===this.rangeSlider.min&&(this.rangeValue.textContent="無料",t&&!t.classList.contains("u-hidden")&&t.classList.add("u-hidden"),r&&!r.classList.contains("u-hidden")&&r.classList.add("u-hidden")),this.rangeSlider.value!==this.rangeSlider.max&&this.rangeSlider.value!==this.rangeSlider.min){const s=parseInt(this.rangeSlider.value,10).toLocaleString("ja-JP");this.rangeValue.textContent=`${s}`,t&&t.classList.contains("u-hidden")&&t.classList.remove("u-hidden"),r&&r.classList.contains("u-hidden")&&r.classList.remove("u-hidden")}};e(),this.rangeSlider.addEventListener("input",e)}}}var vo=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],Kn={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(n){return typeof console<"u"&&console.warn(n)},getWeek:function(n){var e=new Date(n.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},si={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var e=n%100;if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},He=function(n,e){return e===void 0&&(e=2),("000"+n).slice(e*-1)},Qe=function(n){return n===!0?1:0};function Xl(n,e){var t;return function(){var r=this,i=arguments;clearTimeout(t),t=setTimeout(function(){return n.apply(r,i)},e)}}var wo=function(n){return n instanceof Array?n:[n]};function $e(n,e,t){if(t===!0)return n.classList.add(e);n.classList.remove(e)}function oe(n,e,t){var r=window.document.createElement(n);return e=e||"",t=t||"",r.className=e,t!==void 0&&(r.textContent=t),r}function Ki(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Ud(n,e){if(e(n))return n;if(n.parentNode)return Ud(n.parentNode,e)}function Gi(n,e){var t=oe("div","numInputWrapper"),r=oe("input","numInput "+n),i=oe("span","arrowUp"),s=oe("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),e!==void 0)for(var a in e)r.setAttribute(a,e[a]);return t.appendChild(r),t.appendChild(i),t.appendChild(s),t}function Ke(n){try{if(typeof n.composedPath=="function"){var e=n.composedPath();return e[0]}return n.target}catch{return n.target}}var Eo=function(){},Es=function(n,e,t){return t.months[e?"shorthand":"longhand"][n]},qE={D:Eo,F:function(n,e,t){n.setMonth(t.months.longhand.indexOf(e))},G:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},H:function(n,e){n.setHours(parseFloat(e))},J:function(n,e){n.setDate(parseFloat(e))},K:function(n,e,t){n.setHours(n.getHours()%12+12*Qe(new RegExp(t.amPM[1],"i").test(e)))},M:function(n,e,t){n.setMonth(t.months.shorthand.indexOf(e))},S:function(n,e){n.setSeconds(parseFloat(e))},U:function(n,e){return new Date(parseFloat(e)*1e3)},W:function(n,e,t){var r=parseInt(e),i=new Date(n.getFullYear(),0,2+(r-1)*7,0,0,0,0);return i.setDate(i.getDate()-i.getDay()+t.firstDayOfWeek),i},Y:function(n,e){n.setFullYear(parseFloat(e))},Z:function(n,e){return new Date(e)},d:function(n,e){n.setDate(parseFloat(e))},h:function(n,e){n.setHours((n.getHours()>=12?12:0)+parseFloat(e))},i:function(n,e){n.setMinutes(parseFloat(e))},j:function(n,e){n.setDate(parseFloat(e))},l:Eo,m:function(n,e){n.setMonth(parseFloat(e)-1)},n:function(n,e){n.setMonth(parseFloat(e)-1)},s:function(n,e){n.setSeconds(parseFloat(e))},u:function(n,e){return new Date(parseFloat(e))},w:Eo,y:function(n,e){n.setFullYear(2e3+parseFloat(e))}},un={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Wr={Z:function(n){return n.toISOString()},D:function(n,e,t){return e.weekdays.shorthand[Wr.w(n,e,t)]},F:function(n,e,t){return Es(Wr.n(n,e,t)-1,!1,e)},G:function(n,e,t){return He(Wr.h(n,e,t))},H:function(n){return He(n.getHours())},J:function(n,e){return e.ordinal!==void 0?n.getDate()+e.ordinal(n.getDate()):n.getDate()},K:function(n,e){return e.amPM[Qe(n.getHours()>11)]},M:function(n,e){return Es(n.getMonth(),!0,e)},S:function(n){return He(n.getSeconds())},U:function(n){return n.getTime()/1e3},W:function(n,e,t){return t.getWeek(n)},Y:function(n){return He(n.getFullYear(),4)},d:function(n){return He(n.getDate())},h:function(n){return n.getHours()%12?n.getHours()%12:12},i:function(n){return He(n.getMinutes())},j:function(n){return n.getDate()},l:function(n,e){return e.weekdays.longhand[n.getDay()]},m:function(n){return He(n.getMonth()+1)},n:function(n){return n.getMonth()+1},s:function(n){return n.getSeconds()},u:function(n){return n.getTime()},w:function(n){return n.getDay()},y:function(n){return String(n.getFullYear()).substring(2)}},Bd=function(n){var e=n.config,t=e===void 0?Kn:e,r=n.l10n,i=r===void 0?si:r,s=n.isMobile,a=s===void 0?!1:s;return function(c,u,d){var f=d||i;return t.formatDate!==void 0&&!a?t.formatDate(c,u,f):u.split("").map(function(y,S,D){return Wr[y]&&D[S-1]!=="\\"?Wr[y](c,f,t):y!=="\\"?y:""}).join("")}},Ko=function(n){var e=n.config,t=e===void 0?Kn:e,r=n.l10n,i=r===void 0?si:r;return function(s,a,c,u){if(!(s!==0&&!s)){var d=u||i,f,y=s;if(s instanceof Date)f=new Date(s.getTime());else if(typeof s!="string"&&s.toFixed!==void 0)f=new Date(s);else if(typeof s=="string"){var S=a||(t||Kn).dateFormat,D=String(s).trim();if(D==="today")f=new Date,c=!0;else if(t&&t.parseDate)f=t.parseDate(s,S);else if(/Z$/.test(D)||/GMT$/.test(D))f=new Date(s);else{for(var x=void 0,O=[],L=0,te=0,X="";L<S.length;L++){var Z=S[L],le=Z==="\\",Ne=S[L-1]==="\\"||le;if(un[Z]&&!Ne){X+=un[Z];var ae=new RegExp(X).exec(s);ae&&(x=!0)&&O[Z!=="Y"?"push":"unshift"]({fn:qE[Z],val:ae[++te]})}else le||(X+=".")}f=!t||!t.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),O.forEach(function(T){var _=T.fn,w=T.val;return f=_(f,w,d)||f}),f=x?f:void 0}}if(!(f instanceof Date&&!isNaN(f.getTime()))){t.errorHandler(new Error("Invalid date provided: "+y));return}return c===!0&&f.setHours(0,0,0,0),f}}};function Ge(n,e,t){return t===void 0&&(t=!0),t!==!1?new Date(n.getTime()).setHours(0,0,0,0)-new Date(e.getTime()).setHours(0,0,0,0):n.getTime()-e.getTime()}var $E=function(n,e,t){return n>Math.min(e,t)&&n<Math.max(e,t)},Io=function(n,e,t){return n*3600+e*60+t},HE=function(n){var e=Math.floor(n/3600),t=(n-e*3600)/60;return[e,t,n-e*3600-t*60]},WE={DAY:864e5};function To(n){var e=n.defaultHour,t=n.defaultMinute,r=n.defaultSeconds;if(n.minDate!==void 0){var i=n.minDate.getHours(),s=n.minDate.getMinutes(),a=n.minDate.getSeconds();e<i&&(e=i),e===i&&t<s&&(t=s),e===i&&t===s&&r<a&&(r=n.minDate.getSeconds())}if(n.maxDate!==void 0){var c=n.maxDate.getHours(),u=n.maxDate.getMinutes();e=Math.min(e,c),e===c&&(t=Math.min(u,t)),e===c&&t===u&&(r=n.maxDate.getSeconds())}return{hours:e,minutes:t,seconds:r}}typeof Object.assign!="function"&&(Object.assign=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(!n)throw TypeError("Cannot convert undefined or null to object");for(var r=function(c){c&&Object.keys(c).forEach(function(u){return n[u]=c[u]})},i=0,s=e;i<s.length;i++){var a=s[i];r(a)}return n});var xe=function(){return xe=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},xe.apply(this,arguments)},Zl=function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var s=arguments[e],a=0,c=s.length;a<c;a++,i++)r[i]=s[a];return r},zE=300;function KE(n,e){var t={config:xe(xe({},Kn),ye.defaultConfig),l10n:si};t.parseDate=Ko({config:t.config,l10n:t.l10n}),t._handlers=[],t.pluginElements=[],t.loadedPlugins=[],t._bind=O,t._setHoursFromDate=S,t._positionCalendar=Zt,t.changeMonth=hr,t.changeYear=_t,t.clear=lt,t.close=Ie,t.onMouseOver=Nt,t._createElement=oe,t.createDay=ae,t.destroy=Ks,t.isEnabled=yt,t.jumpToDate=X,t.updateValue=je,t.open=pr,t.redraw=Ei,t.set=Te,t.setDate=Mn,t.toggle=Ai;function r(){t.utils={getDaysInMonth:function(m,g){return m===void 0&&(m=t.currentMonth),g===void 0&&(g=t.currentYear),m===1&&(g%4===0&&g%100!==0||g%400===0)?29:t.l10n.daysInMonth[m]}}}function i(){t.element=t.input=n,t.isOpen=!1,_i(),vi(),Gs(),Ii(),r(),t.isMobile||Ne(),te(),(t.selectedDates.length||t.config.noCalendar)&&(t.config.enableTime&&S(t.config.noCalendar?t.latestSelectedDateObj:void 0),je(!1)),c();var m=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!t.isMobile&&m&&Zt(),ue("onReady")}function s(){var m;return((m=t.calendarContainer)===null||m===void 0?void 0:m.getRootNode()).activeElement||document.activeElement}function a(m){return m.bind(t)}function c(){var m=t.config;m.weekNumbers===!1&&m.showMonths===1||m.noCalendar!==!0&&window.requestAnimationFrame(function(){if(t.calendarContainer!==void 0&&(t.calendarContainer.style.visibility="hidden",t.calendarContainer.style.display="block"),t.daysContainer!==void 0){var g=(t.days.offsetWidth+1)*m.showMonths;t.daysContainer.style.width=g+"px",t.calendarContainer.style.width=g+(t.weekWrapper!==void 0?t.weekWrapper.offsetWidth:0)+"px",t.calendarContainer.style.removeProperty("visibility"),t.calendarContainer.style.removeProperty("display")}})}function u(m){if(t.selectedDates.length===0){var g=t.config.minDate===void 0||Ge(new Date,t.config.minDate)>=0?new Date:new Date(t.config.minDate.getTime()),I=To(t.config);g.setHours(I.hours,I.minutes,I.seconds,g.getMilliseconds()),t.selectedDates=[g],t.latestSelectedDateObj=g}m!==void 0&&m.type!=="blur"&&Er(m);var P=t._input.value;y(),je(),t._input.value!==P&&t._debouncedChange()}function d(m,g){return m%12+12*Qe(g===t.l10n.amPM[1])}function f(m){switch(m%24){case 0:case 12:return 12;default:return m%12}}function y(){if(!(t.hourElement===void 0||t.minuteElement===void 0)){var m=(parseInt(t.hourElement.value.slice(-2),10)||0)%24,g=(parseInt(t.minuteElement.value,10)||0)%60,I=t.secondElement!==void 0?(parseInt(t.secondElement.value,10)||0)%60:0;t.amPM!==void 0&&(m=d(m,t.amPM.textContent));var P=t.config.minTime!==void 0||t.config.minDate&&t.minDateHasTime&&t.latestSelectedDateObj&&Ge(t.latestSelectedDateObj,t.config.minDate,!0)===0,M=t.config.maxTime!==void 0||t.config.maxDate&&t.maxDateHasTime&&t.latestSelectedDateObj&&Ge(t.latestSelectedDateObj,t.config.maxDate,!0)===0;if(t.config.maxTime!==void 0&&t.config.minTime!==void 0&&t.config.minTime>t.config.maxTime){var F=Io(t.config.minTime.getHours(),t.config.minTime.getMinutes(),t.config.minTime.getSeconds()),H=Io(t.config.maxTime.getHours(),t.config.maxTime.getMinutes(),t.config.maxTime.getSeconds()),j=Io(m,g,I);if(j>H&&j<F){var Y=HE(F);m=Y[0],g=Y[1],I=Y[2]}}else{if(M){var U=t.config.maxTime!==void 0?t.config.maxTime:t.config.maxDate;m=Math.min(m,U.getHours()),m===U.getHours()&&(g=Math.min(g,U.getMinutes())),g===U.getMinutes()&&(I=Math.min(I,U.getSeconds()))}if(P){var z=t.config.minTime!==void 0?t.config.minTime:t.config.minDate;m=Math.max(m,z.getHours()),m===z.getHours()&&g<z.getMinutes()&&(g=z.getMinutes()),g===z.getMinutes()&&(I=Math.max(I,z.getSeconds()))}}D(m,g,I)}}function S(m){var g=m||t.latestSelectedDateObj;g&&g instanceof Date&&D(g.getHours(),g.getMinutes(),g.getSeconds())}function D(m,g,I){t.latestSelectedDateObj!==void 0&&t.latestSelectedDateObj.setHours(m%24,g,I||0,0),!(!t.hourElement||!t.minuteElement||t.isMobile)&&(t.hourElement.value=He(t.config.time_24hr?m:(12+m)%12+12*Qe(m%12===0)),t.minuteElement.value=He(g),t.amPM!==void 0&&(t.amPM.textContent=t.l10n.amPM[Qe(m>=12)]),t.secondElement!==void 0&&(t.secondElement.value=He(I)))}function x(m){var g=Ke(m),I=parseInt(g.value)+(m.delta||0);(I/1e3>1||m.key==="Enter"&&!/[^\d]/.test(I.toString()))&&_t(I)}function O(m,g,I,P){if(g instanceof Array)return g.forEach(function(M){return O(m,M,I,P)});if(m instanceof Array)return m.forEach(function(M){return O(M,g,I,P)});m.addEventListener(g,I,P),t._handlers.push({remove:function(){return m.removeEventListener(g,I,P)}})}function L(){ue("onChange")}function te(){if(t.config.wrap&&["open","close","toggle","clear"].forEach(function(I){Array.prototype.forEach.call(t.element.querySelectorAll("[data-"+I+"]"),function(P){return O(P,"click",t[I])})}),t.isMobile){Ti();return}var m=Xl(fr,50);if(t._debouncedChange=Xl(L,zE),t.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&O(t.daysContainer,"mouseover",function(I){t.config.mode==="range"&&Nt(Ke(I))}),O(t._input,"keydown",Xt),t.calendarContainer!==void 0&&O(t.calendarContainer,"keydown",Xt),!t.config.inline&&!t.config.static&&O(window,"resize",m),window.ontouchstart!==void 0?O(window.document,"touchstart",dr):O(window.document,"mousedown",dr),O(window.document,"focus",dr,{capture:!0}),t.config.clickOpens===!0&&(O(t._input,"focus",t.open),O(t._input,"click",t.open)),t.daysContainer!==void 0&&(O(t.monthNav,"click",wr),O(t.monthNav,["keyup","increment"],x),O(t.daysContainer,"click",Nn)),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0){var g=function(I){return Ke(I).select()};O(t.timeContainer,["increment"],u),O(t.timeContainer,"blur",u,{capture:!0}),O(t.timeContainer,"click",Z),O([t.hourElement,t.minuteElement],["focus","click"],g),t.secondElement!==void 0&&O(t.secondElement,"focus",function(){return t.secondElement&&t.secondElement.select()}),t.amPM!==void 0&&O(t.amPM,"click",function(I){u(I)})}t.config.allowInput&&O(t._input,"blur",Dn)}function X(m,g){var I=m!==void 0?t.parseDate(m):t.latestSelectedDateObj||(t.config.minDate&&t.config.minDate>t.now?t.config.minDate:t.config.maxDate&&t.config.maxDate<t.now?t.config.maxDate:t.now),P=t.currentYear,M=t.currentMonth;try{I!==void 0&&(t.currentYear=I.getFullYear(),t.currentMonth=I.getMonth())}catch(F){F.message="Invalid date supplied: "+I,t.config.errorHandler(F)}g&&t.currentYear!==P&&(ue("onYearChange"),v()),g&&(t.currentYear!==P||t.currentMonth!==M)&&ue("onMonthChange"),t.redraw()}function Z(m){var g=Ke(m);~g.className.indexOf("arrow")&&le(m,g.classList.contains("arrowUp")?1:-1)}function le(m,g,I){var P=m&&Ke(m),M=I||P&&P.parentNode&&P.parentNode.firstChild,F=_r("increment");F.delta=g,M&&M.dispatchEvent(F)}function Ne(){var m=window.document.createDocumentFragment();if(t.calendarContainer=oe("div","flatpickr-calendar"),t.calendarContainer.tabIndex=-1,!t.config.noCalendar){if(m.appendChild(zs()),t.innerContainer=oe("div","flatpickr-innerContainer"),t.config.weekNumbers){var g=gi(),I=g.weekWrapper,P=g.weekNumbers;t.innerContainer.appendChild(I),t.weekNumbers=P,t.weekWrapper=I}t.rContainer=oe("div","flatpickr-rContainer"),t.rContainer.appendChild(kt()),t.daysContainer||(t.daysContainer=oe("div","flatpickr-days"),t.daysContainer.tabIndex=-1),C(),t.rContainer.appendChild(t.daysContainer),t.innerContainer.appendChild(t.rContainer),m.appendChild(t.innerContainer)}t.config.enableTime&&m.appendChild(Jt()),$e(t.calendarContainer,"rangeMode",t.config.mode==="range"),$e(t.calendarContainer,"animate",t.config.animate===!0),$e(t.calendarContainer,"multiMonth",t.config.showMonths>1),t.calendarContainer.appendChild(m);var M=t.config.appendTo!==void 0&&t.config.appendTo.nodeType!==void 0;if((t.config.inline||t.config.static)&&(t.calendarContainer.classList.add(t.config.inline?"inline":"static"),t.config.inline&&(!M&&t.element.parentNode?t.element.parentNode.insertBefore(t.calendarContainer,t._input.nextSibling):t.config.appendTo!==void 0&&t.config.appendTo.appendChild(t.calendarContainer)),t.config.static)){var F=oe("div","flatpickr-wrapper");t.element.parentNode&&t.element.parentNode.insertBefore(F,t.element),F.appendChild(t.element),t.altInput&&F.appendChild(t.altInput),F.appendChild(t.calendarContainer)}!t.config.static&&!t.config.inline&&(t.config.appendTo!==void 0?t.config.appendTo:window.document.body).appendChild(t.calendarContainer)}function ae(m,g,I,P){var M=yt(g,!0),F=oe("span",m,g.getDate().toString());return F.dateObj=g,F.$i=P,F.setAttribute("aria-label",t.formatDate(g,t.config.ariaDateFormat)),m.indexOf("hidden")===-1&&Ge(g,t.now)===0&&(t.todayDateElem=F,F.classList.add("today"),F.setAttribute("aria-current","date")),M?(F.tabIndex=-1,yr(g)&&(F.classList.add("selected"),t.selectedDateElem=F,t.config.mode==="range"&&($e(F,"startRange",t.selectedDates[0]&&Ge(g,t.selectedDates[0],!0)===0),$e(F,"endRange",t.selectedDates[1]&&Ge(g,t.selectedDates[1],!0)===0),m==="nextMonthDay"&&F.classList.add("inRange")))):F.classList.add("flatpickr-disabled"),t.config.mode==="range"&&vr(g)&&!yr(g)&&F.classList.add("inRange"),t.weekNumbers&&t.config.showMonths===1&&m!=="prevMonthDay"&&P%7===6&&t.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+t.config.getWeek(g)+"</span>"),ue("onDayCreate",F),F}function T(m){m.focus(),t.config.mode==="range"&&Nt(m)}function _(m){for(var g=m>0?0:t.config.showMonths-1,I=m>0?t.config.showMonths:-1,P=g;P!=I;P+=m)for(var M=t.daysContainer.children[P],F=m>0?0:M.children.length-1,H=m>0?M.children.length:-1,j=F;j!=H;j+=m){var Y=M.children[j];if(Y.className.indexOf("hidden")===-1&&yt(Y.dateObj))return Y}}function w(m,g){for(var I=m.className.indexOf("Month")===-1?m.dateObj.getMonth():t.currentMonth,P=g>0?t.config.showMonths:-1,M=g>0?1:-1,F=I-t.currentMonth;F!=P;F+=M)for(var H=t.daysContainer.children[F],j=I-t.currentMonth===F?m.$i+g:g<0?H.children.length-1:0,Y=H.children.length,U=j;U>=0&&U<Y&&U!=(g>0?Y:-1);U+=M){var z=H.children[U];if(z.className.indexOf("hidden")===-1&&yt(z.dateObj)&&Math.abs(m.$i-U)>=Math.abs(g))return T(z)}t.changeMonth(M),E(_(M),0)}function E(m,g){var I=s(),P=Pn(I||document.body),M=m!==void 0?m:P?I:t.selectedDateElem!==void 0&&Pn(t.selectedDateElem)?t.selectedDateElem:t.todayDateElem!==void 0&&Pn(t.todayDateElem)?t.todayDateElem:_(g>0?1:-1);M===void 0?t._input.focus():P?w(M,g):T(M)}function A(m,g){for(var I=(new Date(m,g,1).getDay()-t.l10n.firstDayOfWeek+7)%7,P=t.utils.getDaysInMonth((g-1+12)%12,m),M=t.utils.getDaysInMonth(g,m),F=window.document.createDocumentFragment(),H=t.config.showMonths>1,j=H?"prevMonthDay hidden":"prevMonthDay",Y=H?"nextMonthDay hidden":"nextMonthDay",U=P+1-I,z=0;U<=P;U++,z++)F.appendChild(ae("flatpickr-day "+j,new Date(m,g-1,U),U,z));for(U=1;U<=M;U++,z++)F.appendChild(ae("flatpickr-day",new Date(m,g,U),U,z));for(var ce=M+1;ce<=42-I&&(t.config.showMonths===1||z%7!==0);ce++,z++)F.appendChild(ae("flatpickr-day "+Y,new Date(m,g+1,ce%M),ce,z));var Ce=oe("div","dayContainer");return Ce.appendChild(F),Ce}function C(){if(t.daysContainer!==void 0){Ki(t.daysContainer),t.weekNumbers&&Ki(t.weekNumbers);for(var m=document.createDocumentFragment(),g=0;g<t.config.showMonths;g++){var I=new Date(t.currentYear,t.currentMonth,1);I.setMonth(t.currentMonth+g),m.appendChild(A(I.getFullYear(),I.getMonth()))}t.daysContainer.appendChild(m),t.days=t.daysContainer.firstChild,t.config.mode==="range"&&t.selectedDates.length===1&&Nt()}}function v(){if(!(t.config.showMonths>1||t.config.monthSelectorType!=="dropdown")){var m=function(P){return t.config.minDate!==void 0&&t.currentYear===t.config.minDate.getFullYear()&&P<t.config.minDate.getMonth()?!1:!(t.config.maxDate!==void 0&&t.currentYear===t.config.maxDate.getFullYear()&&P>t.config.maxDate.getMonth())};t.monthsDropdownContainer.tabIndex=-1,t.monthsDropdownContainer.innerHTML="";for(var g=0;g<12;g++)if(m(g)){var I=oe("option","flatpickr-monthDropdown-month");I.value=new Date(t.currentYear,g).getMonth().toString(),I.textContent=Es(g,t.config.shorthandCurrentMonth,t.l10n),I.tabIndex=-1,t.currentMonth===g&&(I.selected=!0),t.monthsDropdownContainer.appendChild(I)}}}function et(){var m=oe("div","flatpickr-month"),g=window.document.createDocumentFragment(),I;t.config.showMonths>1||t.config.monthSelectorType==="static"?I=oe("span","cur-month"):(t.monthsDropdownContainer=oe("select","flatpickr-monthDropdown-months"),t.monthsDropdownContainer.setAttribute("aria-label",t.l10n.monthAriaLabel),O(t.monthsDropdownContainer,"change",function(H){var j=Ke(H),Y=parseInt(j.value,10);t.changeMonth(Y-t.currentMonth),ue("onMonthChange")}),v(),I=t.monthsDropdownContainer);var P=Gi("cur-year",{tabindex:"-1"}),M=P.getElementsByTagName("input")[0];M.setAttribute("aria-label",t.l10n.yearAriaLabel),t.config.minDate&&M.setAttribute("min",t.config.minDate.getFullYear().toString()),t.config.maxDate&&(M.setAttribute("max",t.config.maxDate.getFullYear().toString()),M.disabled=!!t.config.minDate&&t.config.minDate.getFullYear()===t.config.maxDate.getFullYear());var F=oe("div","flatpickr-current-month");return F.appendChild(I),F.appendChild(P),g.appendChild(F),m.appendChild(g),{container:m,yearElement:M,monthElement:I}}function Dt(){Ki(t.monthNav),t.monthNav.appendChild(t.prevMonthNav),t.config.showMonths&&(t.yearElements=[],t.monthElements=[]);for(var m=t.config.showMonths;m--;){var g=et();t.yearElements.push(g.yearElement),t.monthElements.push(g.monthElement),t.monthNav.appendChild(g.container)}t.monthNav.appendChild(t.nextMonthNav)}function zs(){return t.monthNav=oe("div","flatpickr-months"),t.yearElements=[],t.monthElements=[],t.prevMonthNav=oe("span","flatpickr-prev-month"),t.prevMonthNav.innerHTML=t.config.prevArrow,t.nextMonthNav=oe("span","flatpickr-next-month"),t.nextMonthNav.innerHTML=t.config.nextArrow,Dt(),Object.defineProperty(t,"_hidePrevMonthArrow",{get:function(){return t.__hidePrevMonthArrow},set:function(m){t.__hidePrevMonthArrow!==m&&($e(t.prevMonthNav,"flatpickr-disabled",m),t.__hidePrevMonthArrow=m)}}),Object.defineProperty(t,"_hideNextMonthArrow",{get:function(){return t.__hideNextMonthArrow},set:function(m){t.__hideNextMonthArrow!==m&&($e(t.nextMonthNav,"flatpickr-disabled",m),t.__hideNextMonthArrow=m)}}),t.currentYearElement=t.yearElements[0],nn(),t.monthNav}function Jt(){t.calendarContainer.classList.add("hasTime"),t.config.noCalendar&&t.calendarContainer.classList.add("noCalendar");var m=To(t.config);t.timeContainer=oe("div","flatpickr-time"),t.timeContainer.tabIndex=-1;var g=oe("span","flatpickr-time-separator",":"),I=Gi("flatpickr-hour",{"aria-label":t.l10n.hourAriaLabel});t.hourElement=I.getElementsByTagName("input")[0];var P=Gi("flatpickr-minute",{"aria-label":t.l10n.minuteAriaLabel});if(t.minuteElement=P.getElementsByTagName("input")[0],t.hourElement.tabIndex=t.minuteElement.tabIndex=-1,t.hourElement.value=He(t.latestSelectedDateObj?t.latestSelectedDateObj.getHours():t.config.time_24hr?m.hours:f(m.hours)),t.minuteElement.value=He(t.latestSelectedDateObj?t.latestSelectedDateObj.getMinutes():m.minutes),t.hourElement.setAttribute("step",t.config.hourIncrement.toString()),t.minuteElement.setAttribute("step",t.config.minuteIncrement.toString()),t.hourElement.setAttribute("min",t.config.time_24hr?"0":"1"),t.hourElement.setAttribute("max",t.config.time_24hr?"23":"12"),t.hourElement.setAttribute("maxlength","2"),t.minuteElement.setAttribute("min","0"),t.minuteElement.setAttribute("max","59"),t.minuteElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(I),t.timeContainer.appendChild(g),t.timeContainer.appendChild(P),t.config.time_24hr&&t.timeContainer.classList.add("time24hr"),t.config.enableSeconds){t.timeContainer.classList.add("hasSeconds");var M=Gi("flatpickr-second");t.secondElement=M.getElementsByTagName("input")[0],t.secondElement.value=He(t.latestSelectedDateObj?t.latestSelectedDateObj.getSeconds():m.seconds),t.secondElement.setAttribute("step",t.minuteElement.getAttribute("step")),t.secondElement.setAttribute("min","0"),t.secondElement.setAttribute("max","59"),t.secondElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(oe("span","flatpickr-time-separator",":")),t.timeContainer.appendChild(M)}return t.config.time_24hr||(t.amPM=oe("span","flatpickr-am-pm",t.l10n.amPM[Qe((t.latestSelectedDateObj?t.hourElement.value:t.config.defaultHour)>11)]),t.amPM.title=t.l10n.toggleTitle,t.amPM.tabIndex=-1,t.timeContainer.appendChild(t.amPM)),t.timeContainer}function kt(){t.weekdayContainer?Ki(t.weekdayContainer):t.weekdayContainer=oe("div","flatpickr-weekdays");for(var m=t.config.showMonths;m--;){var g=oe("div","flatpickr-weekdaycontainer");t.weekdayContainer.appendChild(g)}return Rn(),t.weekdayContainer}function Rn(){if(t.weekdayContainer){var m=t.l10n.firstDayOfWeek,g=Zl(t.l10n.weekdays.shorthand);m>0&&m<g.length&&(g=Zl(g.splice(m,g.length),g.splice(0,m)));for(var I=t.config.showMonths;I--;)t.weekdayContainer.children[I].innerHTML=`
      <span class='flatpickr-weekday'>
        `+g.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function gi(){t.calendarContainer.classList.add("hasWeeks");var m=oe("div","flatpickr-weekwrapper");m.appendChild(oe("span","flatpickr-weekday",t.l10n.weekAbbreviation));var g=oe("div","flatpickr-weeks");return m.appendChild(g),{weekWrapper:m,weekNumbers:g}}function hr(m,g){g===void 0&&(g=!0);var I=g?m:m-t.currentMonth;I<0&&t._hidePrevMonthArrow===!0||I>0&&t._hideNextMonthArrow===!0||(t.currentMonth+=I,(t.currentMonth<0||t.currentMonth>11)&&(t.currentYear+=t.currentMonth>11?1:-1,t.currentMonth=(t.currentMonth+12)%12,ue("onYearChange"),v()),C(),ue("onMonthChange"),nn())}function lt(m,g){if(m===void 0&&(m=!0),g===void 0&&(g=!0),t.input.value="",t.altInput!==void 0&&(t.altInput.value=""),t.mobileInput!==void 0&&(t.mobileInput.value=""),t.selectedDates=[],t.latestSelectedDateObj=void 0,g===!0&&(t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth()),t.config.enableTime===!0){var I=To(t.config),P=I.hours,M=I.minutes,F=I.seconds;D(P,M,F)}t.redraw(),m&&ue("onChange")}function Ie(){t.isOpen=!1,t.isMobile||(t.calendarContainer!==void 0&&t.calendarContainer.classList.remove("open"),t._input!==void 0&&t._input.classList.remove("active")),ue("onClose")}function Ks(){t.config!==void 0&&ue("onDestroy");for(var m=t._handlers.length;m--;)t._handlers[m].remove();if(t._handlers=[],t.mobileInput)t.mobileInput.parentNode&&t.mobileInput.parentNode.removeChild(t.mobileInput),t.mobileInput=void 0;else if(t.calendarContainer&&t.calendarContainer.parentNode)if(t.config.static&&t.calendarContainer.parentNode){var g=t.calendarContainer.parentNode;if(g.lastChild&&g.removeChild(g.lastChild),g.parentNode){for(;g.firstChild;)g.parentNode.insertBefore(g.firstChild,g);g.parentNode.removeChild(g)}}else t.calendarContainer.parentNode.removeChild(t.calendarContainer);t.altInput&&(t.input.type="text",t.altInput.parentNode&&t.altInput.parentNode.removeChild(t.altInput),delete t.altInput),t.input&&(t.input.type=t.input._type,t.input.classList.remove("flatpickr-input"),t.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(I){try{delete t[I]}catch{}})}function tt(m){return t.calendarContainer.contains(m)}function dr(m){if(t.isOpen&&!t.config.inline){var g=Ke(m),I=tt(g),P=g===t.input||g===t.altInput||t.element.contains(g)||m.path&&m.path.indexOf&&(~m.path.indexOf(t.input)||~m.path.indexOf(t.altInput)),M=!P&&!I&&!tt(m.relatedTarget),F=!t.config.ignoredFocusElements.some(function(H){return H.contains(g)});M&&F&&(t.config.allowInput&&t.setDate(t._input.value,!1,t.config.altInput?t.config.altFormat:t.config.dateFormat),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0&&t.input.value!==""&&t.input.value!==void 0&&u(),t.close(),t.config&&t.config.mode==="range"&&t.selectedDates.length===1&&t.clear(!1))}}function _t(m){if(!(!m||t.config.minDate&&m<t.config.minDate.getFullYear()||t.config.maxDate&&m>t.config.maxDate.getFullYear())){var g=m,I=t.currentYear!==g;t.currentYear=g||t.currentYear,t.config.maxDate&&t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth=Math.min(t.config.maxDate.getMonth(),t.currentMonth):t.config.minDate&&t.currentYear===t.config.minDate.getFullYear()&&(t.currentMonth=Math.max(t.config.minDate.getMonth(),t.currentMonth)),I&&(t.redraw(),ue("onYearChange"),v())}}function yt(m,g){var I;g===void 0&&(g=!0);var P=t.parseDate(m,void 0,g);if(t.config.minDate&&P&&Ge(P,t.config.minDate,g!==void 0?g:!t.minDateHasTime)<0||t.config.maxDate&&P&&Ge(P,t.config.maxDate,g!==void 0?g:!t.maxDateHasTime)>0)return!1;if(!t.config.enable&&t.config.disable.length===0)return!0;if(P===void 0)return!1;for(var M=!!t.config.enable,F=(I=t.config.enable)!==null&&I!==void 0?I:t.config.disable,H=0,j=void 0;H<F.length;H++){if(j=F[H],typeof j=="function"&&j(P))return M;if(j instanceof Date&&P!==void 0&&j.getTime()===P.getTime())return M;if(typeof j=="string"){var Y=t.parseDate(j,void 0,!0);return Y&&Y.getTime()===P.getTime()?M:!M}else if(typeof j=="object"&&P!==void 0&&j.from&&j.to&&P.getTime()>=j.from.getTime()&&P.getTime()<=j.to.getTime())return M}return!M}function Pn(m){return t.daysContainer!==void 0?m.className.indexOf("hidden")===-1&&m.className.indexOf("flatpickr-disabled")===-1&&t.daysContainer.contains(m):!1}function Dn(m){var g=m.target===t._input,I=t._input.value.trimEnd()!==On();g&&I&&!(m.relatedTarget&&tt(m.relatedTarget))&&t.setDate(t._input.value,!0,m.target===t.altInput?t.config.altFormat:t.config.dateFormat)}function Xt(m){var g=Ke(m),I=t.config.wrap?n.contains(g):g===t._input,P=t.config.allowInput,M=t.isOpen&&(!P||!I),F=t.config.inline&&I&&!P;if(m.keyCode===13&&I){if(P)return t.setDate(t._input.value,!0,g===t.altInput?t.config.altFormat:t.config.dateFormat),t.close(),g.blur();t.open()}else if(tt(g)||M||F){var H=!!t.timeContainer&&t.timeContainer.contains(g);switch(m.keyCode){case 13:H?(m.preventDefault(),u(),en()):Nn(m);break;case 27:m.preventDefault(),en();break;case 8:case 46:I&&!t.config.allowInput&&(m.preventDefault(),t.clear());break;case 37:case 39:if(!H&&!I){m.preventDefault();var j=s();if(t.daysContainer!==void 0&&(P===!1||j&&Pn(j))){var Y=m.keyCode===39?1:-1;m.ctrlKey?(m.stopPropagation(),hr(Y),E(_(1),0)):E(void 0,Y)}}else t.hourElement&&t.hourElement.focus();break;case 38:case 40:m.preventDefault();var U=m.keyCode===40?1:-1;t.daysContainer&&g.$i!==void 0||g===t.input||g===t.altInput?m.ctrlKey?(m.stopPropagation(),_t(t.currentYear-U),E(_(1),0)):H||E(void 0,U*7):g===t.currentYearElement?_t(t.currentYear-U):t.config.enableTime&&(!H&&t.hourElement&&t.hourElement.focus(),u(m),t._debouncedChange());break;case 9:if(H){var z=[t.hourElement,t.minuteElement,t.secondElement,t.amPM].concat(t.pluginElements).filter(function(qe){return qe}),ce=z.indexOf(g);if(ce!==-1){var Ce=z[ce+(m.shiftKey?-1:1)];m.preventDefault(),(Ce||t._input).focus()}}else!t.config.noCalendar&&t.daysContainer&&t.daysContainer.contains(g)&&m.shiftKey&&(m.preventDefault(),t._input.focus());break}}if(t.amPM!==void 0&&g===t.amPM)switch(m.key){case t.l10n.amPM[0].charAt(0):case t.l10n.amPM[0].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[0],y(),je();break;case t.l10n.amPM[1].charAt(0):case t.l10n.amPM[1].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[1],y(),je();break}(I||tt(g))&&ue("onKeyDown",m)}function Nt(m,g){if(g===void 0&&(g="flatpickr-day"),!(t.selectedDates.length!==1||m&&(!m.classList.contains(g)||m.classList.contains("flatpickr-disabled")))){for(var I=m?m.dateObj.getTime():t.days.firstElementChild.dateObj.getTime(),P=t.parseDate(t.selectedDates[0],void 0,!0).getTime(),M=Math.min(I,t.selectedDates[0].getTime()),F=Math.max(I,t.selectedDates[0].getTime()),H=!1,j=0,Y=0,U=M;U<F;U+=WE.DAY)yt(new Date(U),!0)||(H=H||U>M&&U<F,U<P&&(!j||U>j)?j=U:U>P&&(!Y||U<Y)&&(Y=U));var z=Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+"+t.config.showMonths+") > ."+g));z.forEach(function(ce){var Ce=ce.dateObj,qe=Ce.getTime(),rn=j>0&&qe<j||Y>0&&qe>Y;if(rn){ce.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(nt){ce.classList.remove(nt)});return}else if(H&&!rn)return;["startRange","inRange","endRange","notAllowed"].forEach(function(nt){ce.classList.remove(nt)}),m!==void 0&&(m.classList.add(I<=t.selectedDates[0].getTime()?"startRange":"endRange"),P<I&&qe===P?ce.classList.add("startRange"):P>I&&qe===P&&ce.classList.add("endRange"),qe>=j&&(Y===0||qe<=Y)&&$E(qe,P,I)&&ce.classList.add("inRange"))})}}function fr(){t.isOpen&&!t.config.static&&!t.config.inline&&Zt()}function pr(m,g){if(g===void 0&&(g=t._positionElement),t.isMobile===!0){if(m){m.preventDefault();var I=Ke(m);I&&I.blur()}t.mobileInput!==void 0&&(t.mobileInput.focus(),t.mobileInput.click()),ue("onOpen");return}else if(t._input.disabled||t.config.inline)return;var P=t.isOpen;t.isOpen=!0,P||(t.calendarContainer.classList.add("open"),t._input.classList.add("active"),ue("onOpen"),Zt(g)),t.config.enableTime===!0&&t.config.noCalendar===!0&&t.config.allowInput===!1&&(m===void 0||!t.timeContainer.contains(m.relatedTarget))&&setTimeout(function(){return t.hourElement.select()},50)}function kn(m){return function(g){var I=t.config["_"+m+"Date"]=t.parseDate(g,t.config.dateFormat),P=t.config["_"+(m==="min"?"max":"min")+"Date"];I!==void 0&&(t[m==="min"?"minDateHasTime":"maxDateHasTime"]=I.getHours()>0||I.getMinutes()>0||I.getSeconds()>0),t.selectedDates&&(t.selectedDates=t.selectedDates.filter(function(M){return yt(M)}),!t.selectedDates.length&&m==="min"&&S(I),je()),t.daysContainer&&(Ei(),I!==void 0?t.currentYearElement[m]=I.getFullYear().toString():t.currentYearElement.removeAttribute(m),t.currentYearElement.disabled=!!P&&I!==void 0&&P.getFullYear()===I.getFullYear())}}function _i(){var m=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],g=xe(xe({},JSON.parse(JSON.stringify(n.dataset||{}))),e),I={};t.config.parseDate=g.parseDate,t.config.formatDate=g.formatDate,Object.defineProperty(t.config,"enable",{get:function(){return t.config._enable},set:function(z){t.config._enable=gr(z)}}),Object.defineProperty(t.config,"disable",{get:function(){return t.config._disable},set:function(z){t.config._disable=gr(z)}});var P=g.mode==="time";if(!g.dateFormat&&(g.enableTime||P)){var M=ye.defaultConfig.dateFormat||Kn.dateFormat;I.dateFormat=g.noCalendar||P?"H:i"+(g.enableSeconds?":S":""):M+" H:i"+(g.enableSeconds?":S":"")}if(g.altInput&&(g.enableTime||P)&&!g.altFormat){var F=ye.defaultConfig.altFormat||Kn.altFormat;I.altFormat=g.noCalendar||P?"h:i"+(g.enableSeconds?":S K":" K"):F+(" h:i"+(g.enableSeconds?":S":"")+" K")}Object.defineProperty(t.config,"minDate",{get:function(){return t.config._minDate},set:kn("min")}),Object.defineProperty(t.config,"maxDate",{get:function(){return t.config._maxDate},set:kn("max")});var H=function(z){return function(ce){t.config[z==="min"?"_minTime":"_maxTime"]=t.parseDate(ce,"H:i:S")}};Object.defineProperty(t.config,"minTime",{get:function(){return t.config._minTime},set:H("min")}),Object.defineProperty(t.config,"maxTime",{get:function(){return t.config._maxTime},set:H("max")}),g.mode==="time"&&(t.config.noCalendar=!0,t.config.enableTime=!0),Object.assign(t.config,I,g);for(var j=0;j<m.length;j++)t.config[m[j]]=t.config[m[j]]===!0||t.config[m[j]]==="true";vo.filter(function(z){return t.config[z]!==void 0}).forEach(function(z){t.config[z]=wo(t.config[z]||[]).map(a)}),t.isMobile=!t.config.disableMobile&&!t.config.inline&&t.config.mode==="single"&&!t.config.disable.length&&!t.config.enable&&!t.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var j=0;j<t.config.plugins.length;j++){var Y=t.config.plugins[j](t)||{};for(var U in Y)vo.indexOf(U)>-1?t.config[U]=wo(Y[U]).map(a).concat(t.config[U]):typeof g[U]>"u"&&(t.config[U]=Y[U])}g.altInputClass||(t.config.altInputClass=yi().className+" "+t.config.altInputClass),ue("onParseConfig")}function yi(){return t.config.wrap?n.querySelector("[data-input]"):n}function vi(){typeof t.config.locale!="object"&&typeof ye.l10ns[t.config.locale]>"u"&&t.config.errorHandler(new Error("flatpickr: invalid locale "+t.config.locale)),t.l10n=xe(xe({},ye.l10ns.default),typeof t.config.locale=="object"?t.config.locale:t.config.locale!=="default"?ye.l10ns[t.config.locale]:void 0),un.D="("+t.l10n.weekdays.shorthand.join("|")+")",un.l="("+t.l10n.weekdays.longhand.join("|")+")",un.M="("+t.l10n.months.shorthand.join("|")+")",un.F="("+t.l10n.months.longhand.join("|")+")",un.K="("+t.l10n.amPM[0]+"|"+t.l10n.amPM[1]+"|"+t.l10n.amPM[0].toLowerCase()+"|"+t.l10n.amPM[1].toLowerCase()+")";var m=xe(xe({},e),JSON.parse(JSON.stringify(n.dataset||{})));m.time_24hr===void 0&&ye.defaultConfig.time_24hr===void 0&&(t.config.time_24hr=t.l10n.time_24hr),t.formatDate=Bd(t),t.parseDate=Ko({config:t.config,l10n:t.l10n})}function Zt(m){if(typeof t.config.position=="function")return void t.config.position(t,m);if(t.calendarContainer!==void 0){ue("onPreCalendarPosition");var g=m||t._positionElement,I=Array.prototype.reduce.call(t.calendarContainer.children,function(Ri,Pi){return Ri+Pi.offsetHeight},0),P=t.calendarContainer.offsetWidth,M=t.config.position.split(" "),F=M[0],H=M.length>1?M[1]:null,j=g.getBoundingClientRect(),Y=window.innerHeight-j.bottom,U=F==="above"||F!=="below"&&Y<I&&j.top>I,z=window.pageYOffset+j.top+(U?-I-2:g.offsetHeight+2);if($e(t.calendarContainer,"arrowTop",!U),$e(t.calendarContainer,"arrowBottom",U),!t.config.inline){var ce=window.pageXOffset+j.left,Ce=!1,qe=!1;H==="center"?(ce-=(P-j.width)/2,Ce=!0):H==="right"&&(ce-=P-j.width,qe=!0),$e(t.calendarContainer,"arrowLeft",!Ce&&!qe),$e(t.calendarContainer,"arrowCenter",Ce),$e(t.calendarContainer,"arrowRight",qe);var rn=window.document.body.offsetWidth-(window.pageXOffset+j.right),nt=ce+P>window.document.body.offsetWidth,bi=rn+P>window.document.body.offsetWidth;if($e(t.calendarContainer,"rightMost",nt),!t.config.static)if(t.calendarContainer.style.top=z+"px",!nt)t.calendarContainer.style.left=ce+"px",t.calendarContainer.style.right="auto";else if(!bi)t.calendarContainer.style.left="auto",t.calendarContainer.style.right=rn+"px";else{var sn=mr();if(sn===void 0)return;var Vn=window.document.body.offsetWidth,ut=Math.max(0,Vn/2-P/2),Ci=".flatpickr-calendar.centerMost:before",Si=".flatpickr-calendar.centerMost:after",Ir=sn.cssRules.length,Tr="{left:"+j.left+"px;right:auto;}";$e(t.calendarContainer,"rightMost",!1),$e(t.calendarContainer,"centerMost",!0),sn.insertRule(Ci+","+Si+Tr,Ir),t.calendarContainer.style.left=ut+"px",t.calendarContainer.style.right="auto"}}}}function mr(){for(var m=null,g=0;g<document.styleSheets.length;g++){var I=document.styleSheets[g];if(I.cssRules){try{I.cssRules}catch{continue}m=I;break}}return m??wi()}function wi(){var m=document.createElement("style");return document.head.appendChild(m),m.sheet}function Ei(){t.config.noCalendar||t.isMobile||(v(),nn(),C())}function en(){t._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(t.close,0):t.close()}function Nn(m){m.preventDefault(),m.stopPropagation();var g=function(z){return z.classList&&z.classList.contains("flatpickr-day")&&!z.classList.contains("flatpickr-disabled")&&!z.classList.contains("notAllowed")},I=Ud(Ke(m),g);if(I!==void 0){var P=I,M=t.latestSelectedDateObj=new Date(P.dateObj.getTime()),F=(M.getMonth()<t.currentMonth||M.getMonth()>t.currentMonth+t.config.showMonths-1)&&t.config.mode!=="range";if(t.selectedDateElem=P,t.config.mode==="single")t.selectedDates=[M];else if(t.config.mode==="multiple"){var H=yr(M);H?t.selectedDates.splice(parseInt(H),1):t.selectedDates.push(M)}else t.config.mode==="range"&&(t.selectedDates.length===2&&t.clear(!1,!1),t.latestSelectedDateObj=M,t.selectedDates.push(M),Ge(M,t.selectedDates[0],!0)!==0&&t.selectedDates.sort(function(z,ce){return z.getTime()-ce.getTime()}));if(y(),F){var j=t.currentYear!==M.getFullYear();t.currentYear=M.getFullYear(),t.currentMonth=M.getMonth(),j&&(ue("onYearChange"),v()),ue("onMonthChange")}if(nn(),C(),je(),!F&&t.config.mode!=="range"&&t.config.showMonths===1?T(P):t.selectedDateElem!==void 0&&t.hourElement===void 0&&t.selectedDateElem&&t.selectedDateElem.focus(),t.hourElement!==void 0&&t.hourElement!==void 0&&t.hourElement.focus(),t.config.closeOnSelect){var Y=t.config.mode==="single"&&!t.config.enableTime,U=t.config.mode==="range"&&t.selectedDates.length===2&&!t.config.enableTime;(Y||U)&&en()}L()}}var tn={locale:[vi,Rn],showMonths:[Dt,c,kt],minDate:[X],maxDate:[X],positionElement:[Mt],clickOpens:[function(){t.config.clickOpens===!0?(O(t._input,"focus",t.open),O(t._input,"click",t.open)):(t._input.removeEventListener("focus",t.open),t._input.removeEventListener("click",t.open))}]};function Te(m,g){if(m!==null&&typeof m=="object"){Object.assign(t.config,m);for(var I in m)tn[I]!==void 0&&tn[I].forEach(function(P){return P()})}else t.config[m]=g,tn[m]!==void 0?tn[m].forEach(function(P){return P()}):vo.indexOf(m)>-1&&(t.config[m]=wo(g));t.redraw(),je(!0)}function Ae(m,g){var I=[];if(m instanceof Array)I=m.map(function(P){return t.parseDate(P,g)});else if(m instanceof Date||typeof m=="number")I=[t.parseDate(m,g)];else if(typeof m=="string")switch(t.config.mode){case"single":case"time":I=[t.parseDate(m,g)];break;case"multiple":I=m.split(t.config.conjunction).map(function(P){return t.parseDate(P,g)});break;case"range":I=m.split(t.l10n.rangeSeparator).map(function(P){return t.parseDate(P,g)});break}else t.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(m)));t.selectedDates=t.config.allowInvalidPreload?I:I.filter(function(P){return P instanceof Date&&yt(P,!1)}),t.config.mode==="range"&&t.selectedDates.sort(function(P,M){return P.getTime()-M.getTime()})}function Mn(m,g,I){if(g===void 0&&(g=!1),I===void 0&&(I=t.config.dateFormat),m!==0&&!m||m instanceof Array&&m.length===0)return t.clear(g);Ae(m,I),t.latestSelectedDateObj=t.selectedDates[t.selectedDates.length-1],t.redraw(),X(void 0,g),S(),t.selectedDates.length===0&&t.clear(!1),je(g),g&&ue("onChange")}function gr(m){return m.slice().map(function(g){return typeof g=="string"||typeof g=="number"||g instanceof Date?t.parseDate(g,void 0,!0):g&&typeof g=="object"&&g.from&&g.to?{from:t.parseDate(g.from,void 0),to:t.parseDate(g.to,void 0)}:g}).filter(function(g){return g})}function Ii(){t.selectedDates=[],t.now=t.parseDate(t.config.now)||new Date;var m=t.config.defaultDate||((t.input.nodeName==="INPUT"||t.input.nodeName==="TEXTAREA")&&t.input.placeholder&&t.input.value===t.input.placeholder?null:t.input.value);m&&Ae(m,t.config.dateFormat),t._initialDate=t.selectedDates.length>0?t.selectedDates[0]:t.config.minDate&&t.config.minDate.getTime()>t.now.getTime()?t.config.minDate:t.config.maxDate&&t.config.maxDate.getTime()<t.now.getTime()?t.config.maxDate:t.now,t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth(),t.selectedDates.length>0&&(t.latestSelectedDateObj=t.selectedDates[0]),t.config.minTime!==void 0&&(t.config.minTime=t.parseDate(t.config.minTime,"H:i")),t.config.maxTime!==void 0&&(t.config.maxTime=t.parseDate(t.config.maxTime,"H:i")),t.minDateHasTime=!!t.config.minDate&&(t.config.minDate.getHours()>0||t.config.minDate.getMinutes()>0||t.config.minDate.getSeconds()>0),t.maxDateHasTime=!!t.config.maxDate&&(t.config.maxDate.getHours()>0||t.config.maxDate.getMinutes()>0||t.config.maxDate.getSeconds()>0)}function Gs(){if(t.input=yi(),!t.input){t.config.errorHandler(new Error("Invalid input element specified"));return}t.input._type=t.input.type,t.input.type="text",t.input.classList.add("flatpickr-input"),t._input=t.input,t.config.altInput&&(t.altInput=oe(t.input.nodeName,t.config.altInputClass),t._input=t.altInput,t.altInput.placeholder=t.input.placeholder,t.altInput.disabled=t.input.disabled,t.altInput.required=t.input.required,t.altInput.tabIndex=t.input.tabIndex,t.altInput.type="text",t.input.setAttribute("type","hidden"),!t.config.static&&t.input.parentNode&&t.input.parentNode.insertBefore(t.altInput,t.input.nextSibling)),t.config.allowInput||t._input.setAttribute("readonly","readonly"),Mt()}function Mt(){t._positionElement=t.config.positionElement||t._input}function Ti(){var m=t.config.enableTime?t.config.noCalendar?"time":"datetime-local":"date";t.mobileInput=oe("input",t.input.className+" flatpickr-mobile"),t.mobileInput.tabIndex=1,t.mobileInput.type=m,t.mobileInput.disabled=t.input.disabled,t.mobileInput.required=t.input.required,t.mobileInput.placeholder=t.input.placeholder,t.mobileFormatStr=m==="datetime-local"?"Y-m-d\\TH:i:S":m==="date"?"Y-m-d":"H:i:S",t.selectedDates.length>0&&(t.mobileInput.defaultValue=t.mobileInput.value=t.formatDate(t.selectedDates[0],t.mobileFormatStr)),t.config.minDate&&(t.mobileInput.min=t.formatDate(t.config.minDate,"Y-m-d")),t.config.maxDate&&(t.mobileInput.max=t.formatDate(t.config.maxDate,"Y-m-d")),t.input.getAttribute("step")&&(t.mobileInput.step=String(t.input.getAttribute("step"))),t.input.type="hidden",t.altInput!==void 0&&(t.altInput.type="hidden");try{t.input.parentNode&&t.input.parentNode.insertBefore(t.mobileInput,t.input.nextSibling)}catch{}O(t.mobileInput,"change",function(g){t.setDate(Ke(g).value,!1,t.mobileFormatStr),ue("onChange"),ue("onClose")})}function Ai(m){if(t.isOpen===!0)return t.close();t.open(m)}function ue(m,g){if(t.config!==void 0){var I=t.config[m];if(I!==void 0&&I.length>0)for(var P=0;I[P]&&P<I.length;P++)I[P](t.selectedDates,t.input.value,t,g);m==="onChange"&&(t.input.dispatchEvent(_r("change")),t.input.dispatchEvent(_r("input")))}}function _r(m){var g=document.createEvent("Event");return g.initEvent(m,!0,!0),g}function yr(m){for(var g=0;g<t.selectedDates.length;g++){var I=t.selectedDates[g];if(I instanceof Date&&Ge(I,m)===0)return""+g}return!1}function vr(m){return t.config.mode!=="range"||t.selectedDates.length<2?!1:Ge(m,t.selectedDates[0])>=0&&Ge(m,t.selectedDates[1])<=0}function nn(){t.config.noCalendar||t.isMobile||!t.monthNav||(t.yearElements.forEach(function(m,g){var I=new Date(t.currentYear,t.currentMonth,1);I.setMonth(t.currentMonth+g),t.config.showMonths>1||t.config.monthSelectorType==="static"?t.monthElements[g].textContent=Es(I.getMonth(),t.config.shorthandCurrentMonth,t.l10n)+" ":t.monthsDropdownContainer.value=I.getMonth().toString(),m.value=I.getFullYear().toString()}),t._hidePrevMonthArrow=t.config.minDate!==void 0&&(t.currentYear===t.config.minDate.getFullYear()?t.currentMonth<=t.config.minDate.getMonth():t.currentYear<t.config.minDate.getFullYear()),t._hideNextMonthArrow=t.config.maxDate!==void 0&&(t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth+1>t.config.maxDate.getMonth():t.currentYear>t.config.maxDate.getFullYear()))}function On(m){var g=m||(t.config.altInput?t.config.altFormat:t.config.dateFormat);return t.selectedDates.map(function(I){return t.formatDate(I,g)}).filter(function(I,P,M){return t.config.mode!=="range"||t.config.enableTime||M.indexOf(I)===P}).join(t.config.mode!=="range"?t.config.conjunction:t.l10n.rangeSeparator)}function je(m){m===void 0&&(m=!0),t.mobileInput!==void 0&&t.mobileFormatStr&&(t.mobileInput.value=t.latestSelectedDateObj!==void 0?t.formatDate(t.latestSelectedDateObj,t.mobileFormatStr):""),t.input.value=On(t.config.dateFormat),t.altInput!==void 0&&(t.altInput.value=On(t.config.altFormat)),m!==!1&&ue("onValueUpdate")}function wr(m){var g=Ke(m),I=t.prevMonthNav.contains(g),P=t.nextMonthNav.contains(g);I||P?hr(I?-1:1):t.yearElements.indexOf(g)>=0?g.select():g.classList.contains("arrowUp")?t.changeYear(t.currentYear+1):g.classList.contains("arrowDown")&&t.changeYear(t.currentYear-1)}function Er(m){m.preventDefault();var g=m.type==="keydown",I=Ke(m),P=I;t.amPM!==void 0&&I===t.amPM&&(t.amPM.textContent=t.l10n.amPM[Qe(t.amPM.textContent===t.l10n.amPM[0])]);var M=parseFloat(P.getAttribute("min")),F=parseFloat(P.getAttribute("max")),H=parseFloat(P.getAttribute("step")),j=parseInt(P.value,10),Y=m.delta||(g?m.which===38?1:-1:0),U=j+H*Y;if(typeof P.value<"u"&&P.value.length===2){var z=P===t.hourElement,ce=P===t.minuteElement;U<M?(U=F+U+Qe(!z)+(Qe(z)&&Qe(!t.amPM)),ce&&le(void 0,-1,t.hourElement)):U>F&&(U=P===t.hourElement?U-F-Qe(!t.amPM):M,ce&&le(void 0,1,t.hourElement)),t.amPM&&z&&(H===1?U+j===23:Math.abs(U-j)>H)&&(t.amPM.textContent=t.l10n.amPM[Qe(t.amPM.textContent===t.l10n.amPM[0])]),P.value=He(U)}}return i(),t}function Gn(n,e){for(var t=Array.prototype.slice.call(n).filter(function(a){return a instanceof HTMLElement}),r=[],i=0;i<t.length;i++){var s=t[i];try{if(s.getAttribute("data-fp-omit")!==null)continue;s._flatpickr!==void 0&&(s._flatpickr.destroy(),s._flatpickr=void 0),s._flatpickr=KE(s,e||{}),r.push(s._flatpickr)}catch(a){console.error(a)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(n){return Gn(this,n)},HTMLElement.prototype.flatpickr=function(n){return Gn([this],n)});var ye=function(n,e){return typeof n=="string"?Gn(window.document.querySelectorAll(n),e):n instanceof Node?Gn([n],e):Gn(n,e)};ye.defaultConfig={};ye.l10ns={en:xe({},si),default:xe({},si)};ye.localize=function(n){ye.l10ns.default=xe(xe({},ye.l10ns.default),n)};ye.setDefaults=function(n){ye.defaultConfig=xe(xe({},ye.defaultConfig),n)};ye.parseDate=Ko({});ye.formatDate=Bd({});ye.compareDates=Ge;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(n){return Gn(this,n)});Date.prototype.fp_incr=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof n=="string"?parseInt(n,10):n))};typeof window<"u"&&(window.flatpickr=ye);var GE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Go={exports:{}};(function(n,e){(function(t,r){r(e)})(GE,function(t){var r=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},i={weekdays:{shorthand:["日","月","火","水","木","金","土"],longhand:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},months:{shorthand:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],longhand:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},time_24hr:!0,rangeSeparator:" から ",monthAriaLabel:"月",amPM:["午前","午後"],yearAriaLabel:"年",hourAriaLabel:"時間",minuteAriaLabel:"分"};r.l10ns.ja=i;var s=r.l10ns;t.Japanese=i,t.default=s,Object.defineProperty(t,"__esModule",{value:!0})})})(Go,Go.exports);var YE=Go.exports;class jd{constructor(e){q(this,"dateNode");q(this,"openBtn");this.dateNode=e.dateNode,this.openBtn=this.dateNode.querySelector(".js-dateCalender-open"),this.init()}init(){this.showOpen()}showOpen(){this.openBtn&&(ye.localize(YE.Japanese),this.openBtn.placeholder="日付を選択してください　>",ye(this.openBtn,{locale:"ja",minDate:"2024-09-01",maxDate:"2024-10-31",dateFormat:"Y.m.d",disableMobile:!0,altInput:!0,altFormat:"Y.m.d",onValueUpdate:(e,t,r)=>{const i=r.formatDate(e[0],"Y.m.d");this.openBtn&&(this.openBtn.dataset.date=i)},onReady:function(e,t,r){const i=document.createElement("div");i.innerHTML="クリア",i.style.paddingTop="4px",i.style.margin="4px auto 8px",i.style.border="2px solid #ccc",i.style.borderRadius="10px",i.style.width="100px",i.classList.add("clear-button"),i.addEventListener("click",function(){r.clear()}),r.calendarContainer.appendChild(i)}}))}}class QE{constructor(e){q(this,"tagNode");q(this,"templateTag");q(this,"tagList");q(this,"cancelButton",null);q(this,"searchPanel");q(this,"selectedArea",null);q(this,"selectedDate",null);q(this,"inputtedDate",null);q(this,"inputtedComedian",null);q(this,"inputButton",null);q(this,"dialog");q(this,"selectedRadio",null);q(this,"rangeSlider",null);q(this,"rangeValue",null);q(this,"nextText",null);this.tagNode=e.tagNode,this.templateTag=this.tagNode.querySelector(".js-tagInsert-template"),this.tagList=this.tagNode.querySelector(".js-tagInsert-list"),this.cancelButton=this.tagNode.querySelectorAll(".js-tagInsert-cancel"),this.searchPanel=this.tagNode.querySelector(".js-tagInsert-search"),this.searchPanel&&(this.selectedArea=this.searchPanel.querySelectorAll("input[data-area][type='radio']"),this.selectedDate=this.searchPanel.querySelectorAll("input[data-date][type='radio']"),this.inputtedDate=this.searchPanel.querySelector("input[data-date][type='number']"),this.inputtedComedian=this.searchPanel.querySelector("input[data-comedian][type='text']")),this.dialog=this.tagNode.querySelector(".js-tagInsert-dialog"),this.dialog&&(this.selectedRadio=this.dialog.querySelectorAll(".js-tagInsert-modalRadio:checked"),this.inputButton=this.dialog.querySelector(".js-tagInsert-modalInput"),this.rangeSlider=this.dialog.querySelector(".js-tagInsert-rangeSlider"),this.rangeValue=this.dialog.querySelector(".js-tagInsert-rangeValue"),this.rangeValue&&(this.nextText=this.rangeValue.nextElementSibling)),this.init()}init(){this.modalOutputVal(),this.selectArea(),this.inputDate(),this.inputComedian()}selectArea(){this.selectedArea&&this.selectedArea.forEach(e=>{e.addEventListener("click",t=>{const r=t.target;if(r)if(r.checked)this.searchOutputVal(r);else{const i=r.dataset,s=Object.keys(i).map(c=>`[data-${c}="${i[c]}"]`).join("");if(!this.tagList)return;const a=this.tagList.querySelector(s);if(!a)return;a.remove()}})})}inputDate(){this.inputtedDate&&this.inputtedDate.addEventListener("input",e=>{const t=e.target;!t||t.value==""||this.searchOutputVal(t)}),this.selectedDate&&this.selectedDate.forEach(e=>{e.addEventListener("click",t=>{const r=t.target;if(r)if(r.checked)this.searchOutputVal(r);else{const i=r.dataset,s=Object.keys(i).map(c=>`[data-${c}="${i[c]}"]`).join("");if(!this.tagList)return;const a=this.tagList.querySelector(s);if(!a)return;a.remove()}})})}inputComedian(){if(this.inputtedComedian){const e=this.inputtedComedian.closest(".c-input");if(!e)return;const t=e.querySelector("button");if(!t)return;t.addEventListener("click",()=>{const r=e.querySelector("input");!r||r.value==""||this.searchOutputVal(r)})}}getModalRadioVal(){if(!this.selectedRadio)return;const e=[];return this.selectedRadio.forEach(t=>{e.push({value:t.value,dataset:t.dataset})}),e}getModalSliderVal(){if(!(!this.rangeValue||!this.rangeValue.textContent)){if(this.rangeValue.textContent==="無料")return 0;{if(!this.rangeValue.textContent)return;const t=this.rangeValue.textContent.replace(/,/g,""),r=parseInt(t,10);return this.rangeValue?r:0}}}searchOutputVal(e){var a;if(!this.searchPanel)return;const t=(a=this.templateTag)==null?void 0:a.content.cloneNode(!0),r=t.querySelector(".js-tagInsert-inputValue"),i=r==null?void 0:r.parentElement;if(!this.templateTag||!this.tagList)return;r&&(r.textContent=`${e.value}`);const s=e.dataset;for(const c in s)if(i&&s.hasOwnProperty(c)){const u=this.tagList.querySelector(`[data-${c}]`);this.searchPanel.querySelectorAll(`[data-${c}]`).forEach(f=>{if(f!==e)switch(f.type){case"radio":f.checked&&(f.checked=!1);break;case"text":f.value&&(f.value="");break;case"number":f.value&&(f.value="");break}}),u&&u.remove(),i.dataset[c]=s[c]}this.tagList.appendChild(t),this.cancelVal()}modalOutputVal(){!this.inputButton||!this.dialog||this.inputButton.addEventListener("click",()=>{if(!this.dialog)return;this.selectedRadio=this.dialog.querySelectorAll(".js-modalBase-radio:checked"),this.rangeSlider=this.dialog.querySelector(".js-modalBase-rangeSlider");const e=this.getModalRadioVal(),t=this.getModalSliderVal();if(!(!this.templateTag||!this.tagList||!e)){if(e.forEach(r=>{const i=this.templateTag.content.cloneNode(!0),s=i.querySelector(".js-tagInsert-inputValue");if(this.tagList){if(s){s&&(s.textContent=`${r.value}`);const a=r.dataset,c=s.parentElement;if(c){for(const u in a)if(c&&a.hasOwnProperty(u)){const d=this.tagList.querySelector(`[data-${u}]`);d&&d.remove(),c.dataset[u]=a[u]}}}this.tagList.appendChild(i)}}),t||t===0){const r=this.templateTag.content.cloneNode(!0),i=r.querySelector(".js-tagInsert-inputValue");if(i&&this.rangeSlider){if(t==0)i.textContent="無料";else{const s=t.toLocaleString("ja-JP");i.textContent=`～${s}円`}if(!this.tagList)return;if(this.rangeValue&&this.rangeValue.textContent!==null&&this.rangeValue.textContent!==void 0){const s=this.rangeValue.textContent;if(s!==null){const u=s.replace(/,/g,"");this.rangeSlider.dataset.fee=u}const a=this.rangeSlider.dataset,c=i.parentElement;if(c)for(const u in a){if(c&&a.hasOwnProperty(u)){const d=this.tagList.querySelector(`[data-${u}]`);d&&d.remove()}c.dataset[u]=a[u]}}this.tagList.appendChild(r)}}else{const r=this.tagList.querySelector("[data-fee]");r==null||r.remove()}this.cancelVal()}})}cancelVal(){this.cancelButton=this.tagNode.querySelectorAll(".js-tagInsert-cancel"),this.cancelButton&&this.cancelButton.forEach(e=>{e.addEventListener("click",t=>{const i=t.target.parentElement;if(i){const s=i.dataset;if(s&&this.tagList&&this.searchPanel){const a=Object.keys(s)[0],c=s[a],u=Array.from(this.searchPanel.querySelectorAll(`[data-${a}]`)),d=Array.from(u).find(f=>f instanceof HTMLElement&&f.dataset[a]===c);if(d){const f=d;if(f instanceof HTMLInputElement)switch(f.type){case"radio":f.checked&&(f.checked=!1);break;case"text":f.value&&(f.value="");break;case"number":f.value}}this.callDateShowOpen()}if(s&&this.tagList&&this.dialog){const a=Object.keys(s)[0],c=s[a],u=Array.from(this.dialog.querySelectorAll(`[data-${a}]`));if(a){const d=u.find(f=>f instanceof HTMLElement&&f.dataset[a]===c);if(d&&d instanceof HTMLInputElement&&d.checked&&(d.checked=!1),d&&d instanceof HTMLInputElement&&this.rangeSlider&&this.rangeValue){const f=this.rangeValue.nextElementSibling;this.rangeSlider.value="10000",this.rangeValue.textContent="上限なし",f&&!f.classList.contains("u-hidden")&&f.classList.add("u-hidden")}}else{if(!this.rangeSlider||!this.rangeValue)return;this.nextText&&!this.nextText.classList.contains("u-hidden")&&this.nextText.classList.add("u-hidden")}}i&&i instanceof Element&&i.remove()}})})}callDateShowOpen(){document.querySelectorAll(".js-dateCalender").forEach(t=>{new jd({dateNode:t}).showOpen()})}}class JE{constructor(e){q(this,"modalNode");q(this,"modalOpenBtn");q(this,"dialog");q(this,"modalCloseBtn",null);q(this,"modalOverlay");q(this,"body");q(this,"ua");q(this,"isiOS");q(this,"clearButton",null);q(this,"radioButtons",null);q(this,"rangeSlider",null);q(this,"rangeValue",null);q(this,"nextText",null);this.modalNode=e.modalNode,this.modalOpenBtn=this.modalNode.querySelector(".js-modalBase-open"),this.dialog=this.modalNode.querySelector(".js-modalBase-dialog"),this.modalOverlay=this.modalNode.querySelector(".u-overlay"),this.body=document.querySelector("body"),this.ua=window.navigator.userAgent.toLowerCase(),this.isiOS=this.ua.indexOf("iphone")>-1||this.ua.indexOf("ipad")>-1||this.ua.indexOf("macintosh")>-1&&"ontouchend"in document,this.dialog&&(this.modalCloseBtn=this.dialog.querySelectorAll(".js-modalBase-close"),this.clearButton=this.dialog.querySelector(".js-modalBase-clear"),this.radioButtons=this.dialog.querySelectorAll(".js-modalBase-radio"),this.rangeSlider=this.dialog.querySelector(".js-modalBase-rangeSlider"),this.rangeValue=this.dialog.querySelector(".js-modalBase-rangeValue"),this.rangeValue&&(this.nextText=this.rangeValue.nextElementSibling)),this.init()}init(){this.showModal(),this.closeModal(),this.modalExceptClose(),this.clearRadioVal(),this.clearSliderVal()}showModal(){this.modalOpenBtn!=null&&this.modalOpenBtn.addEventListener("click",()=>{if(this.body&&this.dialog&&this.modalOverlay){this.body.style.pointerEvents="none",this.dialog.style.pointerEvents="auto";const e=this.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],r=e[e.length-1];this.dialog.addEventListener("keydown",i=>{(i.key==="Tab"||i.keyCode===9)&&(i.shiftKey?document.activeElement===t&&(r.focus(),i.preventDefault()):document.activeElement===r&&(t.focus(),i.preventDefault()))}),t.focus(),this.dialog.classList.add("-show"),this.modalOverlay.classList.add("-show"),this.body&&this.body.classList.add("-hidden"),this.bodyFixedOn()}})}closeModal(){this.modalCloseBtn&&this.modalCloseBtn.forEach(e=>{e.addEventListener("click",()=>{this.body&&(this.body.style.pointerEvents="auto",this.dialog&&this.modalOverlay&&(this.dialog.classList.remove("-show"),this.modalOverlay.classList.remove("-show"),this.body&&this.body.classList.remove("-hidden")),this.bodyFixedOff())})})}bodyFixedOn(){let e=0;this.isiOS?(e=window.pageYOffset,this.body&&(this.body.style.position="fixed",this.body.style.top=`-${e}px`)):this.body&&this.body.classList.add("-hidden")}bodyFixedOff(){this.isiOS?(this.body&&(this.body.style.removeProperty("position"),this.body.style.removeProperty("top")),window.scrollTo(0,0)):this.body&&this.body.classList.remove("-hidden")}clearRadioVal(){this.clearButton&&this.clearButton.addEventListener("click",()=>{this.radioButtons&&this.radioButtons.forEach(e=>{e.checked=!1})})}clearSliderVal(){this.clearButton&&this.clearButton.addEventListener("click",()=>{!this.rangeSlider||!this.rangeValue||(this.rangeSlider.value="10000",this.rangeValue.textContent="上限なし",this.nextText&&!this.nextText.classList.contains("u-hidden")&&this.nextText.classList.add("u-hidden"))})}modalExceptClose(){this.modalOverlay==null||this.dialog==null||(this.dialog.addEventListener("click",e=>{e.stopPropagation()}),this.modalOverlay.addEventListener("click",()=>{this.body&&(this.body.style.pointerEvents="auto",this.dialog&&this.modalOverlay&&(this.dialog.classList.remove("-show"),this.modalOverlay.classList.remove("-show"),this.body&&this.body.classList.remove("-hidden")),this.bodyFixedOff())}))}}class XE{constructor(){q(this,"selectedArea",null);q(this,"selectedDate",null);q(this,"selectedComedian",null);q(this,"selectedTime",null);q(this,"selectedEventer",null);q(this,"selectedFee",null);this.init()}init(){this.observeFilterTagChanges()}observeFilterTagChanges(){const e=document.querySelector(".js-tagInsert-list");if(!e)return;new MutationObserver(r=>{r.forEach(()=>{this.checkAllTags(),this.filterEvents()})}).observe(e,{childList:!0,subtree:!0})}checkAllTags(){const e=document.querySelectorAll(".js-tagInsert-dataType");let t=!1,r=!1,i=!1,s=!1,a=!1,c=!1;e.forEach(u=>{const d=u,f=d.querySelector(".js-tagInsert-inputValue");f&&f.textContent&&(d.dataset.area&&(this.selectedArea=f.textContent,t=!0),d.dataset.date&&(this.setSearchDate(f.textContent),r=!0),d.dataset.comedian&&(this.selectedComedian=f.textContent,i=!0),d.dataset.time&&(this.setSearchTime(f.textContent),s=!0),d.dataset.eventer&&(this.selectedEventer=f.textContent,a=!0),d.dataset.fee&&(this.setSearchFee(f.textContent),c=!0))}),t||(this.selectedArea=null),r||(this.selectedDate=null),i||(this.selectedComedian=null),s||(this.selectedTime=null),a||(this.selectedEventer=null),c||(this.selectedFee=null)}setSearchDate(e){const t=new Date;let r=t;switch(e){case"今日":break;case"明日":const i=new Date(t);i.setDate(t.getDate()+1),r=i;break;case"次の土曜":const s=new Date(t),a=(6-t.getDay()+7)%7||7;s.setDate(t.getDate()+a),r=s;break;case"次の日曜":const c=new Date(t),u=(7-t.getDay())%7||7;c.setDate(t.getDate()+u),r=c;break;default:const d=e.split(/[-.]/),f=parseInt(d[0],10),y=parseInt(d[1],10)-1,S=parseInt(d[2],10);r=new Date(f,y,S,0,0,0);break}this.selectedDate=r}setSearchTime(e){switch(this.selectedTime=new Map,e){case"4:00 ～":this.selectedTime.set("start",4*60),this.selectedTime.set("end",12*60);break;case"12:00 ～":this.selectedTime.set("start",12*60),this.selectedTime.set("end",17*60);break;case"17:00 ～":this.selectedTime.set("start",17*60),this.selectedTime.set("end",4*60);break;default:this.selectedTime=null;break}}setSearchFee(e){const t=e.replace(/[～,円]/g,"");this.selectedFee=parseInt(t,10)}filterEvents(){ii.getInstance().filterEvents(t=>{let r=!0,i=!0,s=!0,a=!0,c=!0,u=!0;if(this.selectedArea&&(r=t.location.area.includes(this.selectedArea)),this.selectedDate){const d=t.opening_time.toDate();i=d.getFullYear()===this.selectedDate.getFullYear()&&d.getMonth()===this.selectedDate.getMonth()&&d.getDate()===this.selectedDate.getDate()}if(this.selectedComedian&&(s=t.comedians.some(d=>d.includes(this.selectedComedian))),this.selectedTime){const d=t.start_time.toDate(),f=d.getHours()*60+d.getMinutes(),y=this.selectedTime.get("start"),S=this.selectedTime.get("end");if(y!=null&&S!=null)switch(y){case 4*60:case 12*60:a=f>=y&&f<S;break;case 17*60:a=f>=y||f<S;break}}if(this.selectedEventer){const d=["吉本興業","松竹芸能","マセキ芸能社","ホリプロコム","ケイダッシュステージ","浅井企画","K-PRO","U＆Cプロダクション","ラスタ池袋"];this.selectedEventer==="その他"?c=!d.includes(t.eventer):c=t.eventer.includes(this.selectedEventer)}if(this.selectedFee){const d=t.pre_ordered_fee.replace(/,/g,"");u=parseInt(d,10)<=this.selectedFee}return r&&i&&s&&a&&c&&u})}}class ZE{constructor(e){q(this,"scrollNode");q(this,"floatBtn");this.scrollNode=e.scrollNode,this.floatBtn=this.scrollNode.querySelector(".js-scrollPosition-float"),this.init()}init(){this.floatToTop(),this.clickToDown(),this.fixedElement()}floatToTop(){this.floatBtn&&this.floatBtn.addEventListener("click",()=>{})}clickToDown(){}fixedElement(){}}class eI{constructor(e){q(this,"loadingNode");q(this,"loadingButton");this.loadingNode=e.loadingNode,this.loadingButton=document.querySelectorAll(".js-buttonLoading-start"),this.init()}init(){this.loading()}loading(){this.loadingButton.forEach(e=>{e.addEventListener("click",async()=>{await this.showLoading();try{const t=await this.fetchData();console.log(t)}catch(t){console.log(t)}finally{this.hideLoading()}})})}showLoading(){return new Promise(e=>{setTimeout(()=>{this.loadingNode.classList.remove("u-hidden"),e("ローディング")},4)})}hideLoading(){this.loadingNode.classList.add("u-hidden")}async fetchData(){return new Promise(e=>{setTimeout(()=>{e("データ取得完了")},400)})}}class tI{constructor(){q(this,"isLocalhost");this.isLocalhost=window.location.hostname==="localhost",this.handleUrlChange(window.location.pathname)}handleUrlChange(e){this.isLocalhost||window.location.hostname==="bakunavi.com"?this.navigate(e):this.goTo404()}navigate(e){switch(e){case"/":break;case"/privacypolicy":case"/privacypolicy.html":this.goToPrivacyPolicy();break;case"/login":case"/login.html":this.goToLogin();break;case"/eventForm":case"/eventForm.html":this.goToEventForm();break;case"/404":case"/404.html":default:this.goTo404()}}goToPrivacyPolicy(){console.log("プライバシーポリシーページに移動します"),window.location.href="/privacypolicy.html"}goToLogin(){console.log("ログインページに移動します"),window.location.href="/login.html"}goToEventForm(){window.location.href="/eventForm.html"}goTo404(){console.log("404ページに移動します"),window.location.href="/404.html"}}function nI(n,e){yw(za,n,e).then(t=>{console.log("User signed in:",t.user),alert("ログイン成功"),window.location.href="/eventForm"}).catch(t=>{console.error("Error signing in:",t),alert("ログインに失敗しました: "+t.message)})}function rI(){return new Promise(n=>{Ew(za,e=>{n(!!e)})})}function iI(){za.signOut().then(()=>{window.location.href="/login"}).catch(n=>{console.log("logOut error:",n),alert("ログアウトに失敗しました: "+n.message)})}class sI{constructor(){q(this,"emailInput");q(this,"passwordInput");q(this,"loginButton");q(this,"errorMessageDiv");this.emailInput=document.getElementById("email"),this.passwordInput=document.getElementById("password"),this.loginButton=document.getElementById("loginButton"),this.errorMessageDiv=document.getElementById("error-message"),this.addEventListeners()}addEventListeners(){this.loginButton&&this.loginButton.addEventListener("click",()=>this.signInUser())}displayError(e){this.errorMessageDiv&&(this.errorMessageDiv.textContent=e)}clearError(){this.errorMessageDiv&&(this.errorMessageDiv.textContent="")}signInUser(){var r,i;this.clearError();const e=(r=this.emailInput)==null?void 0:r.value,t=(i=this.passwordInput)==null?void 0:i.value;if(!e||!t){this.displayError("メールアドレスとパスワードを入力して下さい");return}nI(e,t)}}window.logOut=iI;class oI{constructor(){this.isLogin(),this.initializeEventers(),this.initializeAreas(),this.initializeForm()}async isLogin(){await rI()||(window.location.href="/login.html")}async initializeEventers(){const e=document.getElementById("eventer");e&&(await xE()).forEach(r=>{const i=document.createElement("option");i.value=r.name,i.textContent=r.name,e.appendChild(i)})}async initializeAreas(){const e=document.getElementById("area");e&&(await FE()).forEach(r=>{const i=document.createElement("option");i.value=r.prefectures,i.textContent=r.prefectures,e.appendChild(i)})}initializeForm(){const e=document.getElementById("event-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("comedians").value,i=document.getElementById("eventer").value,s=document.getElementById("event-name").value,a=document.getElementById("area").value,c=document.getElementById("venue").value,u=document.getElementById("opening-time").value,d=document.getElementById("start-time").value;var f=document.getElementById("pre-ordered-fee").value,y=document.getElementById("current-day-fee").value;const S=document.getElementById("ticket-url").value;if(!r||!i||!s||!c||!u||!d||!f||!y||!S){alert("すべての必須項目を入力してください。");return}if(isNaN(parseFloat(f))||isNaN(parseFloat(y))){alert("前売料金と当日料金には有効な数値を入力してください。");return}f=f.replace(/,/g,""),y=y.replace(/,/g,""),f=parseFloat(f).toLocaleString(),y=parseFloat(y).toLocaleString();const D={comedians:r,eventer:i,event_name:s,area:a,venue:c,opening_time:new Date(u),start_time:new Date(d),pre_ordered_fee:f,current_day_fee:y,ticket_url:S};try{await LE(D),alert("イベントが正常に登録されました！")}catch(x){alert("イベントの登録中にエラーが発生しました。"+x)}})}}document.addEventListener("DOMContentLoaded",()=>{const n=document;new aI(n),document.querySelector(".js-dataInsert")&&ws.getInstance()});class aI{constructor(e){const t=window.location.pathname;if(!(t==="/404.html"||t==="/privacypolicy.html")){if(t==="/login.html"){new sI;return}if(t==="/eventForm.html"){new oI;return}if(new tI,t==="/"){const r=e.querySelectorAll(".js-modalBase");for(let y=0;y<r.length;y++)new JE({modalNode:r[y]});const i=document.querySelectorAll(".js-accordion");for(let y=0;y<i.length;y++)new Fd({accordionNode:i[y]});const s=e.querySelectorAll(".js-radioCheck");for(let y=0;y<s.length;y++)new BE({radioNode:s[y]});const a=e.querySelectorAll(".js-rangeSetting");for(let y=0;y<a.length;y++)new jE({rangeNode:a[y]});const c=document.querySelectorAll(".js-tagInsert");for(let y=0;y<c.length;y++)new QE({tagNode:c[y]});const u=document.querySelectorAll(".js-scrollPosition");for(let y=0;y<u.length;y++)new ZE({scrollNode:u[y]});const d=document.querySelectorAll(".js-dateCalender");for(let y=0;y<d.length;y++)new jd({dateNode:d[y]});new XE;const f=document.querySelectorAll(".js-buttonLoading");for(let y=0;y<f.length;y++)new eI({loadingNode:f[y]})}}}}
