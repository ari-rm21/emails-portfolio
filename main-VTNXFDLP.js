var ff=Object.defineProperty,pf=Object.defineProperties;var hf=Object.getOwnPropertyDescriptors;var Ta=Object.getOwnPropertySymbols;var gf=Object.prototype.hasOwnProperty,mf=Object.prototype.propertyIsEnumerable;var Oa=(e,t,n)=>t in e?ff(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||={})gf.call(t,n)&&Oa(e,n,t[n]);if(Ta)for(var n of Ta(t))mf.call(t,n)&&Oa(e,n,t[n]);return e},B=(e,t)=>pf(e,hf(t));var Pa=null;var Ro=1,Na=Symbol("SIGNAL");function L(e){let t=Pa;return Pa=e,t}var Ra={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function vf(e){if(!(Lo(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Ro)){if(!e.producerMustRecompute(e)&&!ko(e)){e.dirty=!1,e.lastCleanEpoch=Ro;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Ro}}function ka(e){return e&&(e.nextProducerIndex=0),L(e)}function Fa(e,t){if(L(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Lo(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)Fo(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function ko(e){ir(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(vf(n),r!==n.version))return!0}return!1}function La(e){if(ir(e),Lo(e))for(let t=0;t<e.producerNode.length;t++)Fo(e.producerNode[t],e.producerIndexOfThis[t]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function Fo(e,t){if(yf(e),ir(e),e.liveConsumerNode.length===1)for(let r=0;r<e.producerNode.length;r++)Fo(e.producerNode[r],e.producerIndexOfThis[r]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];ir(o),o.producerIndexOfThis[r]=t}}function Lo(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function ir(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function yf(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function Cf(){throw new Error}var wf=Cf;function ja(e){wf=e}function x(e){return typeof e=="function"}function It(e){let n=e(r=>{Error.call(r),r.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var sr=It(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function ln(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var z=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:r}=this;if(x(r))try{r()}catch(i){t=i instanceof sr?i.errors:[i]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let i of o)try{Va(i)}catch(s){t=t??[],s instanceof sr?t=[...t,...s.errors]:t.push(s)}}if(t)throw new sr(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Va(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&ln(n,t)}remove(t){let{_finalizers:n}=this;n&&ln(n,t),t instanceof e&&t._removeParent(this)}};z.EMPTY=(()=>{let e=new z;return e.closed=!0,e})();var jo=z.EMPTY;function ar(e){return e instanceof z||e&&"closed"in e&&x(e.remove)&&x(e.add)&&x(e.unsubscribe)}function Va(e){x(e)?e():e.unsubscribe()}var ve={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var At={setTimeout(e,t,...n){let{delegate:r}=At;return r?.setTimeout?r.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=At;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function ur(e){At.setTimeout(()=>{let{onUnhandledError:t}=ve;if(t)t(e);else throw e})}function cn(){}var $a=Vo("C",void 0,void 0);function Ha(e){return Vo("E",void 0,e)}function Ba(e){return Vo("N",e,void 0)}function Vo(e,t,n){return{kind:e,value:t,error:n}}var ot=null;function St(e){if(ve.useDeprecatedSynchronousErrorHandling){let t=!ot;if(t&&(ot={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:r}=ot;if(ot=null,n)throw r}}else e()}function Ua(e){ve.useDeprecatedSynchronousErrorHandling&&ot&&(ot.errorThrown=!0,ot.error=e)}var it=class extends z{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,ar(t)&&t.add(this)):this.destination=bf}static create(t,n,r){return new Tt(t,n,r)}next(t){this.isStopped?Ho(Ba(t),this):this._next(t)}error(t){this.isStopped?Ho(Ha(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Ho($a,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Df=Function.prototype.bind;function $o(e,t){return Df.call(e,t)}var Bo=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(r){lr(r)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(r){lr(r)}else lr(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){lr(n)}}},Tt=class extends it{constructor(t,n,r){super();let o;if(x(t)||!t)o={next:t??void 0,error:n??void 0,complete:r??void 0};else{let i;this&&ve.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&$o(t.next,i),error:t.error&&$o(t.error,i),complete:t.complete&&$o(t.complete,i)}):o=t}this.destination=new Bo(o)}};function lr(e){ve.useDeprecatedSynchronousErrorHandling?Ua(e):ur(e)}function xf(e){throw e}function Ho(e,t){let{onStoppedNotification:n}=ve;n&&At.setTimeout(()=>n(e,t))}var bf={closed:!0,next:cn,error:xf,complete:cn};var Ot=typeof Symbol=="function"&&Symbol.observable||"@@observable";function se(e){return e}function Uo(...e){return zo(e)}function zo(e){return e.length===0?se:e.length===1?e[0]:function(n){return e.reduce((r,o)=>o(r),n)}}var j=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}subscribe(n,r,o){let i=Mf(n)?n:new Tt(n,r,o);return St(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(r){n.error(r)}}forEach(n,r){return r=za(r),new r((o,i)=>{let s=new Tt({next:a=>{try{n(a)}catch(u){i(u),s.unsubscribe()}},error:i,complete:o});this.subscribe(s)})}_subscribe(n){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(n)}[Ot](){return this}pipe(...n){return zo(n)(this)}toPromise(n){return n=za(n),new n((r,o)=>{let i;this.subscribe(s=>i=s,s=>o(s),()=>r(i))})}}return e.create=t=>new e(t),e})();function za(e){var t;return(t=e??ve.Promise)!==null&&t!==void 0?t:Promise}function Ef(e){return e&&x(e.next)&&x(e.error)&&x(e.complete)}function Mf(e){return e&&e instanceof it||Ef(e)&&ar(e)}function qo(e){return x(e?.lift)}function S(e){return t=>{if(qo(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function T(e,t,n,r,o){return new Go(e,t,n,r,o)}var Go=class extends it{constructor(t,n,r,o,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(u){t.error(u)}}:super._next,this._error=o?function(a){try{o(a)}catch(u){t.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function Pt(){return S((e,t)=>{let n=null;e._refCount++;let r=T(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let o=e._connection,i=n;n=null,o&&(!i||o===i)&&o.unsubscribe(),t.unsubscribe()});e.subscribe(r),r.closed||(n=e.connect())})}var Nt=class extends j{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,qo(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new z;let n=this.getSubject();t.add(this.source.subscribe(T(n,void 0,()=>{this._teardown(),n.complete()},r=>{this._teardown(),n.error(r)},()=>this._teardown()))),t.closed&&(this._connection=null,t=z.EMPTY)}return t}refCount(){return Pt()(this)}};var qa=It(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var J=(()=>{class e extends j{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let r=new cr(this,this);return r.operator=n,r}_throwIfClosed(){if(this.closed)throw new qa}next(n){St(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(n)}})}error(n){St(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:r}=this;for(;r.length;)r.shift().error(n)}})}complete(){St(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:r,isStopped:o,observers:i}=this;return r||o?jo:(this.currentObservers=null,i.push(n),new z(()=>{this.currentObservers=null,ln(i,n)}))}_checkFinalizedStatuses(n){let{hasError:r,thrownError:o,isStopped:i}=this;r?n.error(o):i&&n.complete()}asObservable(){let n=new j;return n.source=this,n}}return e.create=(t,n)=>new cr(t,n),e})(),cr=class extends J{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.next)===null||r===void 0||r.call(n,t)}error(t){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.error)===null||r===void 0||r.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,r;return(r=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&r!==void 0?r:jo}};var Y=class extends J{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:r}=this;if(t)throw n;return this._throwIfClosed(),r}next(t){super.next(this._value=t)}};var ae=new j(e=>e.complete());function Ga(e){return e&&x(e.schedule)}function Wa(e){return e[e.length-1]}function Za(e){return x(Wa(e))?e.pop():void 0}function qe(e){return Ga(Wa(e))?e.pop():void 0}function Qa(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(f){try{l(r.next(f))}catch(h){s(h)}}function u(f){try{l(r.throw(f))}catch(h){s(h)}}function l(f){f.done?i(f.value):o(f.value).then(a,u)}l((r=r.apply(e,t||[])).next())})}function Ya(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function st(e){return this instanceof st?(this.v=e,this):new st(e)}function Ka(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(g){return function(w){return Promise.resolve(w).then(g,h)}}function a(g,w){r[g]&&(o[g]=function(I){return new Promise(function(H,$){i.push([g,I,H,$])>1||u(g,I)})},w&&(o[g]=w(o[g])))}function u(g,w){try{l(r[g](w))}catch(I){v(i[0][3],I)}}function l(g){g.value instanceof st?Promise.resolve(g.value.v).then(f,h):v(i[0][2],g)}function f(g){u("next",g)}function h(g){u("throw",g)}function v(g,w){g(w),i.shift(),i.length&&u(i[0][0],i[0][1])}}function Ja(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Ya=="function"?Ya(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,u){s=e[i](s),o(a,u,s.done,s.value)})}}function o(i,s,a,u){Promise.resolve(u).then(function(l){i({value:l,done:a})},s)}}var dr=e=>e&&typeof e.length=="number"&&typeof e!="function";function fr(e){return x(e?.then)}function pr(e){return x(e[Ot])}function hr(e){return Symbol.asyncIterator&&x(e?.[Symbol.asyncIterator])}function gr(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function _f(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var mr=_f();function vr(e){return x(e?.[mr])}function yr(e){return Ka(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:r,done:o}=yield st(n.read());if(o)return yield st(void 0);yield yield st(r)}}finally{n.releaseLock()}})}function Cr(e){return x(e?.getReader)}function W(e){if(e instanceof j)return e;if(e!=null){if(pr(e))return If(e);if(dr(e))return Af(e);if(fr(e))return Sf(e);if(hr(e))return Xa(e);if(vr(e))return Tf(e);if(Cr(e))return Of(e)}throw gr(e)}function If(e){return new j(t=>{let n=e[Ot]();if(x(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Af(e){return new j(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Sf(e){return new j(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,ur)})}function Tf(e){return new j(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Xa(e){return new j(t=>{Pf(e,t).catch(n=>t.error(n))})}function Of(e){return Xa(yr(e))}function Pf(e,t){var n,r,o,i;return Qa(this,void 0,void 0,function*(){try{for(n=Ja(e);r=yield n.next(),!r.done;){let s=r.value;if(t.next(s),t.closed)return}}catch(s){o={error:s}}finally{try{r&&!r.done&&(i=n.return)&&(yield i.call(n))}finally{if(o)throw o.error}}t.complete()})}function ne(e,t,n,r=0,o=!1){let i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function wr(e,t=0){return S((n,r)=>{n.subscribe(T(r,o=>ne(r,e,()=>r.next(o),t),()=>ne(r,e,()=>r.complete(),t),o=>ne(r,e,()=>r.error(o),t)))})}function Dr(e,t=0){return S((n,r)=>{r.add(e.schedule(()=>n.subscribe(r),t))})}function eu(e,t){return W(e).pipe(Dr(t),wr(t))}function tu(e,t){return W(e).pipe(Dr(t),wr(t))}function nu(e,t){return new j(n=>{let r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function ru(e,t){return new j(n=>{let r;return ne(n,t,()=>{r=e[mr](),ne(n,t,()=>{let o,i;try{({value:o,done:i}=r.next())}catch(s){n.error(s);return}i?n.complete():n.next(o)},0,!0)}),()=>x(r?.return)&&r.return()})}function xr(e,t){if(!e)throw new Error("Iterable cannot be null");return new j(n=>{ne(n,t,()=>{let r=e[Symbol.asyncIterator]();ne(n,t,()=>{r.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function ou(e,t){return xr(yr(e),t)}function iu(e,t){if(e!=null){if(pr(e))return eu(e,t);if(dr(e))return nu(e,t);if(fr(e))return tu(e,t);if(hr(e))return xr(e,t);if(vr(e))return ru(e,t);if(Cr(e))return ou(e,t)}throw gr(e)}function q(e,t){return t?iu(e,t):W(e)}function E(...e){let t=qe(e);return q(e,t)}function Rt(e,t){let n=x(e)?e:()=>e,r=o=>o.error(n());return new j(t?o=>t.schedule(r,0,o):r)}function Wo(e){return!!e&&(e instanceof j||x(e.lift)&&x(e.subscribe))}var Le=It(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function O(e,t){return S((n,r)=>{let o=0;n.subscribe(T(r,i=>{r.next(e.call(t,i,o++))}))})}var{isArray:Nf}=Array;function Rf(e,t){return Nf(t)?e(...t):e(t)}function su(e){return O(t=>Rf(e,t))}var{isArray:kf}=Array,{getPrototypeOf:Ff,prototype:Lf,keys:jf}=Object;function au(e){if(e.length===1){let t=e[0];if(kf(t))return{args:t,keys:null};if(Vf(t)){let n=jf(t);return{args:n.map(r=>t[r]),keys:n}}}return{args:e,keys:null}}function Vf(e){return e&&typeof e=="object"&&Ff(e)===Lf}function uu(e,t){return e.reduce((n,r,o)=>(n[r]=t[o],n),{})}function br(...e){let t=qe(e),n=Za(e),{args:r,keys:o}=au(e);if(r.length===0)return q([],t);let i=new j($f(r,t,o?s=>uu(o,s):se));return n?i.pipe(su(n)):i}function $f(e,t,n=se){return r=>{lu(t,()=>{let{length:o}=e,i=new Array(o),s=o,a=o;for(let u=0;u<o;u++)lu(t,()=>{let l=q(e[u],t),f=!1;l.subscribe(T(r,h=>{i[u]=h,f||(f=!0,a--),a||r.next(n(i.slice()))},()=>{--s||r.complete()}))},r)},r)}}function lu(e,t,n){e?ne(n,e,t):t()}function cu(e,t,n,r,o,i,s,a){let u=[],l=0,f=0,h=!1,v=()=>{h&&!u.length&&!l&&t.complete()},g=I=>l<r?w(I):u.push(I),w=I=>{i&&t.next(I),l++;let H=!1;W(n(I,f++)).subscribe(T(t,$=>{o?.($),i?g($):t.next($)},()=>{H=!0},void 0,()=>{if(H)try{for(l--;u.length&&l<r;){let $=u.shift();s?ne(t,s,()=>w($)):w($)}v()}catch($){t.error($)}}))};return e.subscribe(T(t,g,()=>{h=!0,v()})),()=>{a?.()}}function G(e,t,n=1/0){return x(t)?G((r,o)=>O((i,s)=>t(r,i,o,s))(W(e(r,o))),n):(typeof t=="number"&&(n=t),S((r,o)=>cu(r,o,e,n)))}function Zo(e=1/0){return G(se,e)}function du(){return Zo(1)}function kt(...e){return du()(q(e,qe(e)))}function Er(e){return new j(t=>{W(e()).subscribe(t)})}function ye(e,t){return S((n,r)=>{let o=0;n.subscribe(T(r,i=>e.call(t,i,o++)&&r.next(i)))})}function Ge(e){return S((t,n)=>{let r=null,o=!1,i;r=t.subscribe(T(n,void 0,void 0,s=>{i=W(e(s,Ge(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function fu(e,t,n,r,o){return(i,s)=>{let a=n,u=t,l=0;i.subscribe(T(s,f=>{let h=l++;u=a?e(u,f,h):(a=!0,f),r&&s.next(u)},o&&(()=>{a&&s.next(u),s.complete()})))}}function Ft(e,t){return x(t)?G(e,t,1):G(e,1)}function We(e){return S((t,n)=>{let r=!1;t.subscribe(T(n,o=>{r=!0,n.next(o)},()=>{r||n.next(e),n.complete()}))})}function je(e){return e<=0?()=>ae:S((t,n)=>{let r=0;t.subscribe(T(n,o=>{++r<=e&&(n.next(o),e<=r&&n.complete())}))})}function Yo(e){return O(()=>e)}function Mr(e=Hf){return S((t,n)=>{let r=!1;t.subscribe(T(n,o=>{r=!0,n.next(o)},()=>r?n.complete():n.error(e())))})}function Hf(){return new Le}function dn(e){return S((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Ae(e,t){let n=arguments.length>=2;return r=>r.pipe(e?ye((o,i)=>e(o,i,r)):se,je(1),n?We(t):Mr(()=>new Le))}function Lt(e){return e<=0?()=>ae:S((t,n)=>{let r=[];t.subscribe(T(n,o=>{r.push(o),e<r.length&&r.shift()},()=>{for(let o of r)n.next(o);n.complete()},void 0,()=>{r=null}))})}function Qo(e,t){let n=arguments.length>=2;return r=>r.pipe(e?ye((o,i)=>e(o,i,r)):se,Lt(1),n?We(t):Mr(()=>new Le))}function Ko(e,t){return S(fu(e,t,arguments.length>=2,!0))}function Jo(...e){let t=qe(e);return S((n,r)=>{(t?kt(e,n,t):kt(e,n)).subscribe(r)})}function Ce(e,t){return S((n,r)=>{let o=null,i=0,s=!1,a=()=>s&&!o&&r.complete();n.subscribe(T(r,u=>{o?.unsubscribe();let l=0,f=i++;W(e(u,f)).subscribe(o=T(r,h=>r.next(t?t(u,h,f,l++):h),()=>{o=null,a()}))},()=>{s=!0,a()}))})}function Xo(e){return S((t,n)=>{W(e).subscribe(T(n,()=>n.complete(),cn)),!n.closed&&t.subscribe(n)})}function Q(e,t,n){let r=x(e)||t||n?{next:e,error:t,complete:n}:e;return r?S((o,i)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;o.subscribe(T(i,u=>{var l;(l=r.next)===null||l===void 0||l.call(r,u),i.next(u)},()=>{var u;a=!1,(u=r.complete)===null||u===void 0||u.call(r),i.complete()},u=>{var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,u),i.error(u)},()=>{var u,l;a&&((u=r.unsubscribe)===null||u===void 0||u.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):se}var Qu="https://g.co/ng/security#xss",D=class extends Error{constructor(t,n){super(Gi(t,n)),this.code=t}};function Gi(e,t){return`${`NG0${Math.abs(e)}`}${t?": "+t:""}`}function Wi(e){return{toString:e}.toString()}var at=globalThis;function V(e){for(let t in e)if(e[t]===V)return t;throw Error("Could not find renamed property on target object.")}function re(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(re).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let t=e.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n===-1?t:t.substring(0,n)}function pu(e,t){return e==null||e===""?t===null?"":t:t==null||t===""?e:e+" "+t}var Uf=V({__forward_ref__:V});function Ku(e){return e.__forward_ref__=Ku,e.toString=function(){return re(this())},e}function de(e){return Ju(e)?e():e}function Ju(e){return typeof e=="function"&&e.hasOwnProperty(Uf)&&e.__forward_ref__===Ku}function M(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Qr(e){return hu(e,el)||hu(e,tl)}function Xu(e){return Qr(e)!==null}function hu(e,t){return e.hasOwnProperty(t)?e[t]:null}function zf(e){let t=e&&(e[el]||e[tl]);return t||null}function gu(e){return e&&(e.hasOwnProperty(mu)||e.hasOwnProperty(qf))?e[mu]:null}var el=V({\u0275prov:V}),mu=V({\u0275inj:V}),tl=V({ngInjectableDef:V}),qf=V({ngInjectorDef:V}),N=class{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=M({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function nl(e){return e&&!!e.\u0275providers}var Gf=V({\u0275cmp:V}),Wf=V({\u0275dir:V}),Zf=V({\u0275pipe:V}),Yf=V({\u0275mod:V}),Nr=V({\u0275fac:V}),fn=V({__NG_ELEMENT_ID__:V}),vu=V({__NG_ENV_ID__:V});function Kr(e){return typeof e=="string"?e:e==null?"":String(e)}function Qf(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():Kr(e)}function Kf(e,t){let n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new D(-200,e)}function Zi(e,t){throw new D(-201,!1)}var A=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(A||{}),pi;function rl(){return pi}function ce(e){let t=pi;return pi=e,t}function ol(e,t,n){let r=Qr(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(n&A.Optional)return null;if(t!==void 0)return t;Zi(e,"Injector")}var Jf={},pn=Jf,Xf="__NG_DI_FLAG__",Rr="ngTempTokenPath",ep="ngTokenPath",tp=/\n/gm,np="\u0275",yu="__source",Ht;function rp(){return Ht}function Ze(e){let t=Ht;return Ht=e,t}function op(e,t=A.Default){if(Ht===void 0)throw new D(-203,!1);return Ht===null?ol(e,void 0,t):Ht.get(e,t&A.Optional?null:void 0,t)}function R(e,t=A.Default){return(rl()||op)(de(e),t)}function y(e,t=A.Default){return R(e,Jr(t))}function Jr(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function hi(e){let t=[];for(let n=0;n<e.length;n++){let r=de(e[n]);if(Array.isArray(r)){if(r.length===0)throw new D(900,!1);let o,i=A.Default;for(let s=0;s<r.length;s++){let a=r[s],u=ip(a);typeof u=="number"?u===-1?o=a.token:i|=u:o=a}t.push(R(o,i))}else t.push(R(r))}return t}function ip(e){return e[Xf]}function sp(e,t,n,r){let o=e[Rr];throw t[yu]&&o.unshift(t[yu]),e.message=ap(`
`+e.message,o,n,r),e[ep]=o,e[Rr]=null,e}function ap(e,t,n,r=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==np?e.slice(2):e;let o=re(t);if(Array.isArray(t))o=t.map(re).join(" -> ");else if(typeof t=="object"){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let a=t[s];i.push(s+":"+(typeof a=="string"?JSON.stringify(a):re(a)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(tp,`
  `)}`}function Ut(e,t){let n=e.hasOwnProperty(Nr);return n?e[Nr]:null}function Yi(e,t){e.forEach(n=>Array.isArray(n)?Yi(n,t):t(n))}function il(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function kr(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function up(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(o===1)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let i=o-2;e[o]=e[i],o--}e[t]=n,e[t+1]=r}}function lp(e,t,n){let r=_n(e,t);return r>=0?e[r|1]=n:(r=~r,up(e,r,t,n)),r}function ei(e,t){let n=_n(e,t);if(n>=0)return e[n|1]}function _n(e,t){return cp(e,t,1)}function cp(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){let i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}var hn={},ct=[],zt=new N(""),sl=new N("",-1),al=new N(""),Fr=class{get(t,n=pn){if(n===pn){let r=new Error(`NullInjectorError: No provider for ${re(t)}!`);throw r.name="NullInjectorError",r}return n}},ul=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}(ul||{}),Oe=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}(Oe||{}),be=function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e}(be||{});function dp(e,t,n){let r=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}function gi(e,t,n){let r=0;for(;r<n.length;){let o=n[r];if(typeof o=="number"){if(o!==0)break;r++;let i=n[r++],s=n[r++],a=n[r++];e.setAttribute(t,s,a,i)}else{let i=o,s=n[++r];fp(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function ll(e){return e===3||e===4||e===6}function fp(e){return e.charCodeAt(0)===64}function Qi(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){let o=t[r];typeof o=="number"?n=o:n===0||(n===-1||n===2?Cu(e,n,o,null,t[++r]):Cu(e,n,o,null,null))}}return e}function Cu(e,t,n,r,o){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){if(r===null){o!==null&&(e[i+1]=o);return}else if(r===e[i+1]){e[i+2]=o;return}}i++,r!==null&&i++,o!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),r!==null&&e.splice(i++,0,r),o!==null&&e.splice(i++,0,o)}var cl="ng-template";function pp(e,t,n,r){let o=0;if(r){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&dp(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Ki(e))return!1;if(o=t.indexOf(1,o),o>-1){let i;for(;++o<t.length&&typeof(i=t[o])=="string";)if(i.toLowerCase()===n)return!0}return!1}function Ki(e){return e.type===4&&e.value!==cl}function hp(e,t,n){let r=e.type===4&&!n?cl:e.value;return t===r}function gp(e,t,n){let r=4,o=e.attrs,i=o!==null?yp(o):0,s=!1;for(let a=0;a<t.length;a++){let u=t[a];if(typeof u=="number"){if(!s&&!we(r)&&!we(u))return!1;if(s&&we(u))continue;s=!1,r=u|r&1;continue}if(!s)if(r&4){if(r=2|r&1,u!==""&&!hp(e,u,n)||u===""&&t.length===1){if(we(r))return!1;s=!0}}else if(r&8){if(o===null||!pp(e,o,u,n)){if(we(r))return!1;s=!0}}else{let l=t[++a],f=mp(u,o,Ki(e),n);if(f===-1){if(we(r))return!1;s=!0;continue}if(l!==""){let h;if(f>i?h="":h=o[f+1].toLowerCase(),r&2&&l!==h){if(we(r))return!1;s=!0}}}}return we(r)||s}function we(e){return(e&1)===0}function mp(e,t,n,r){if(t===null)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){let s=t[o];if(s===e)return o;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++o];for(;typeof a=="string";)a=t[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=i?1:2}return-1}else return Cp(t,e)}function vp(e,t,n=!1){for(let r=0;r<t.length;r++)if(gp(e,t[r],n))return!0;return!1}function yp(e){for(let t=0;t<e.length;t++){let n=e[t];if(ll(n))return t}return e.length}function Cp(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let r=e[n];if(typeof r=="number")return-1;if(r===t)return n;n++}return-1}function wu(e,t){return e?":not("+t.trim()+")":t}function wp(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(r&2){let a=e[++n];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?o+="."+s:r&4&&(o+=" "+s);else o!==""&&!we(s)&&(t+=wu(i,o),o=""),r=s,i=i||!we(r);n++}return o!==""&&(t+=wu(i,o)),t}function Dp(e){return e.map(wp).join(",")}function xp(e){let t=[],n=[],r=1,o=2;for(;r<e.length;){let i=e[r];if(typeof i=="string")o===2?i!==""&&t.push(i,e[++r]):o===8&&n.push(i);else{if(!we(o))break;o=i}r++}return{attrs:t,classes:n}}function oe(e){return Wi(()=>{let t=gl(e),n=B(C({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===ul.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Oe.Emulated,styles:e.styles||ct,_:null,schemas:e.schemas||null,tView:null,id:""});ml(n);let r=e.dependencies;return n.directiveDefs=xu(r,!1),n.pipeDefs=xu(r,!0),n.id=Mp(n),n})}function bp(e){return dt(e)||dl(e)}function Ep(e){return e!==null}function Du(e,t){if(e==null)return hn;let n={};for(let r in e)if(e.hasOwnProperty(r)){let o=e[r],i,s,a=be.None;Array.isArray(o)?(a=o[0],i=o[1],s=o[2]??i):(i=o,s=o),t?(n[i]=a!==be.None?[r,a]:r,t[i]=s):n[i]=r}return n}function Xr(e){return Wi(()=>{let t=gl(e);return ml(t),t})}function dt(e){return e[Gf]||null}function dl(e){return e[Wf]||null}function fl(e){return e[Zf]||null}function pl(e){let t=dt(e)||dl(e)||fl(e);return t!==null?t.standalone:!1}function hl(e,t){let n=e[Yf]||null;if(!n&&t===!0)throw new Error(`Type ${re(e)} does not have '\u0275mod' property.`);return n}function gl(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputTransforms:null,inputConfig:e.inputs||hn,exportAs:e.exportAs||null,standalone:e.standalone===!0,signals:e.signals===!0,selectors:e.selectors||ct,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Du(e.inputs,t),outputs:Du(e.outputs),debugInfo:null}}function ml(e){e.features?.forEach(t=>t(e))}function xu(e,t){if(!e)return null;let n=t?fl:bp;return()=>(typeof e=="function"?e():e).map(r=>n(r)).filter(Ep)}function Mp(e){let t=0,n=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,e.consts,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery].join("|");for(let o of n)t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function eo(e){return{\u0275providers:e}}function _p(...e){return{\u0275providers:vl(!0,e),\u0275fromNgModule:!0}}function vl(e,...t){let n=[],r=new Set,o,i=s=>{n.push(s)};return Yi(t,s=>{let a=s;mi(a,i,[],r)&&(o||=[],o.push(a))}),o!==void 0&&yl(o,i),n}function yl(e,t){for(let n=0;n<e.length;n++){let{ngModule:r,providers:o}=e[n];Ji(o,i=>{t(i,r)})}}function mi(e,t,n,r){if(e=de(e),!e)return!1;let o=null,i=gu(e),s=!i&&dt(e);if(!i&&!s){let u=e.ngModule;if(i=gu(u),i)o=u;else return!1}else{if(s&&!s.standalone)return!1;o=e}let a=r.has(o);if(s){if(a)return!1;if(r.add(o),s.dependencies){let u=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of u)mi(l,t,n,r)}}else if(i){if(i.imports!=null&&!a){r.add(o);let l;try{Yi(i.imports,f=>{mi(f,t,n,r)&&(l||=[],l.push(f))})}finally{}l!==void 0&&yl(l,t)}if(!a){let l=Ut(o)||(()=>new o);t({provide:o,useFactory:l,deps:ct},o),t({provide:al,useValue:o,multi:!0},o),t({provide:zt,useValue:()=>R(o),multi:!0},o)}let u=i.providers;if(u!=null&&!a){let l=e;Ji(u,f=>{t(f,l)})}}else return!1;return o!==e&&e.providers!==void 0}function Ji(e,t){for(let n of e)nl(n)&&(n=n.\u0275providers),Array.isArray(n)?Ji(n,t):t(n)}var Ip=V({provide:String,useValue:V});function Cl(e){return e!==null&&typeof e=="object"&&Ip in e}function Ap(e){return!!(e&&e.useExisting)}function Sp(e){return!!(e&&e.useFactory)}function vi(e){return typeof e=="function"}var to=new N(""),Ar={},Tp={},ti;function Xi(){return ti===void 0&&(ti=new Fr),ti}var pe=class{},gn=class extends pe{get destroyed(){return this._destroyed}constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Ci(t,s=>this.processProvider(s)),this.records.set(sl,jt(void 0,this)),o.has("environment")&&this.records.set(pe,jt(void 0,this));let i=this.records.get(to);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(al,ct,A.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let t=L(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of n)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),L(t)}}onDestroy(t){return this.assertNotDestroyed(),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){this.assertNotDestroyed();let n=Ze(this),r=ce(void 0),o;try{return t()}finally{Ze(n),ce(r)}}get(t,n=pn,r=A.Default){if(this.assertNotDestroyed(),t.hasOwnProperty(vu))return t[vu](this);r=Jr(r);let o,i=Ze(this),s=ce(void 0);try{if(!(r&A.SkipSelf)){let u=this.records.get(t);if(u===void 0){let l=Fp(t)&&Qr(t);l&&this.injectableDefInScope(l)?u=jt(yi(t),Ar):u=null,this.records.set(t,u)}if(u!=null)return this.hydrate(t,u)}let a=r&A.Self?Xi():this.parent;return n=r&A.Optional&&n===pn?null:n,a.get(t,n)}catch(a){if(a.name==="NullInjectorError"){if((a[Rr]=a[Rr]||[]).unshift(re(t)),i)throw a;return sp(a,t,"R3InjectorError",this.source)}else throw a}finally{ce(s),Ze(i)}}resolveInjectorInitializers(){let t=L(null),n=Ze(this),r=ce(void 0),o;try{let i=this.get(zt,ct,A.Self);for(let s of i)s()}finally{Ze(n),ce(r),L(t)}}toString(){let t=[],n=this.records;for(let r of n.keys())t.push(re(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new D(205,!1)}processProvider(t){t=de(t);let n=vi(t)?t:de(t&&t.provide),r=Pp(t);if(!vi(t)&&t.multi===!0){let o=this.records.get(n);o||(o=jt(void 0,Ar,!0),o.factory=()=>hi(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){let r=L(null);try{return n.value===Ar&&(n.value=Tp,n.value=n.factory()),typeof n.value=="object"&&n.value&&kp(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{L(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=de(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function yi(e){let t=Qr(e),n=t!==null?t.factory:Ut(e);if(n!==null)return n;if(e instanceof N)throw new D(204,!1);if(e instanceof Function)return Op(e);throw new D(204,!1)}function Op(e){if(e.length>0)throw new D(204,!1);let n=zf(e);return n!==null?()=>n.factory(e):()=>new e}function Pp(e){if(Cl(e))return jt(void 0,e.useValue);{let t=Np(e);return jt(t,Ar)}}function Np(e,t,n){let r;if(vi(e)){let o=de(e);return Ut(o)||yi(o)}else if(Cl(e))r=()=>de(e.useValue);else if(Sp(e))r=()=>e.useFactory(...hi(e.deps||[]));else if(Ap(e))r=()=>R(de(e.useExisting));else{let o=de(e&&(e.useClass||e.provide));if(Rp(e))r=()=>new o(...hi(e.deps));else return Ut(o)||yi(o)}return r}function jt(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Rp(e){return!!e.deps}function kp(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Fp(e){return typeof e=="function"||typeof e=="object"&&e instanceof N}function Ci(e,t){for(let n of e)Array.isArray(n)?Ci(n,t):n&&nl(n)?Ci(n.\u0275providers,t):t(n)}function vt(e,t){e instanceof gn&&e.assertNotDestroyed();let n,r=Ze(e),o=ce(void 0);try{return t()}finally{Ze(r),ce(o)}}function Lp(){return rl()!==void 0||rp()!=null}function jp(e){return typeof e=="function"}var Be=0,P=1,b=2,X=3,xe=4,Me=5,Lr=6,mn=7,Ve=8,qt=9,Ee=10,ee=11,vn=12,bu=13,In=14,Pe=15,es=16,Vt=17,no=18,ro=19,wl=20,Ye=21,ni=22,ft=23,pt=25,Dl=1;var ht=7,jr=8,Vr=9,fe=10,ts=function(e){return e[e.None=0]="None",e[e.HasTransplantedViews=2]="HasTransplantedViews",e}(ts||{});function ut(e){return Array.isArray(e)&&typeof e[Dl]=="object"}function Ue(e){return Array.isArray(e)&&e[Dl]===!0}function xl(e){return(e.flags&4)!==0}function ns(e){return e.componentOffset>-1}function bl(e){return(e.flags&1)===1}function An(e){return!!e.template}function Vp(e){return(e[b]&512)!==0}var wi=class{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}};function El(e,t,n,r){t!==null?t.applyValueToInputSignal(t,r):e[n]=r}function Sn(){return Ml}function Ml(e){return e.type.prototype.ngOnChanges&&(e.setInput=Hp),$p}Sn.ngInherit=!0;function $p(){let e=Il(this),t=e?.current;if(t){let n=e.previous;if(n===hn)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Hp(e,t,n,r,o){let i=this.declaredInputs[r],s=Il(e)||Bp(e,{previous:hn,current:null}),a=s.current||(s.current={}),u=s.previous,l=u[i];a[i]=new wi(l&&l.currentValue,n,u===hn),El(e,t,o,n)}var _l="__ngSimpleChanges__";function Il(e){return e[_l]||null}function Bp(e,t){return e[_l]=t}var Eu=null;var Se=function(e,t,n){Eu?.(e,t,n)},Up="svg",zp="math",qp=!1;function Gp(){return qp}function Ne(e){for(;Array.isArray(e);)e=e[Be];return e}function Al(e,t){return Ne(t[e])}function _e(e,t){return Ne(t[e.index])}function Sl(e,t){return e.data[t]}function yt(e,t){let n=t[e];return ut(n)?n:n[Be]}function rs(e){return(e[b]&128)===128}function Wp(e){return Ue(e[X])}function Mu(e,t){return t==null?null:e[t]}function Tl(e){e[Vt]=0}function Zp(e){e[b]&1024||(e[b]|=1024,rs(e)&&yn(e))}function os(e){return!!(e[b]&9216||e[ft]?.dirty)}function Di(e){e[Ee].changeDetectionScheduler?.notify(1),os(e)?yn(e):e[b]&64&&(Gp()?(e[b]|=1024,yn(e)):e[Ee].changeDetectionScheduler?.notify())}function yn(e){e[Ee].changeDetectionScheduler?.notify();let t=Cn(e);for(;t!==null&&!(t[b]&8192||(t[b]|=8192,!rs(t)));)t=Cn(t)}function Ol(e,t){if((e[b]&256)===256)throw new D(911,!1);e[Ye]===null&&(e[Ye]=[]),e[Ye].push(t)}function Yp(e,t){if(e[Ye]===null)return;let n=e[Ye].indexOf(t);n!==-1&&e[Ye].splice(n,1)}function Cn(e){let t=e[X];return Ue(t)?t[X]:t}var k={lFrame:Vl(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Qp(){return k.lFrame.elementDepthCount}function Kp(){k.lFrame.elementDepthCount++}function Jp(){k.lFrame.elementDepthCount--}function Pl(){return k.bindingsEnabled}function Xp(){return k.skipHydrationRootTNode!==null}function eh(e){return k.skipHydrationRootTNode===e}function th(){k.skipHydrationRootTNode=null}function Z(){return k.lFrame.lView}function Ct(){return k.lFrame.tView}function Ie(){let e=Nl();for(;e!==null&&e.type===64;)e=e.parent;return e}function Nl(){return k.lFrame.currentTNode}function nh(){let e=k.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function oo(e,t){let n=k.lFrame;n.currentTNode=e,n.isParent=t}function Rl(){return k.lFrame.isParent}function rh(){k.lFrame.isParent=!1}function oh(e){return k.lFrame.bindingIndex=e}function kl(){return k.lFrame.bindingIndex++}function ih(e){let t=k.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function sh(){return k.lFrame.inI18n}function ah(e,t){let n=k.lFrame;n.bindingIndex=n.bindingRootIndex=e,xi(t)}function uh(){return k.lFrame.currentDirectiveIndex}function xi(e){k.lFrame.currentDirectiveIndex=e}function lh(e){let t=k.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Fl(e){k.lFrame.currentQueryIndex=e}function ch(e){let t=e[P];return t.type===2?t.declTNode:t.type===1?e[Me]:null}function Ll(e,t,n){if(n&A.SkipSelf){let o=t,i=e;for(;o=o.parent,o===null&&!(n&A.Host);)if(o=ch(i),o===null||(i=i[In],o.type&10))break;if(o===null)return!1;t=o,e=i}let r=k.lFrame=jl();return r.currentTNode=t,r.lView=e,!0}function is(e){let t=jl(),n=e[P];k.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function jl(){let e=k.lFrame,t=e===null?null:e.child;return t===null?Vl(e):t}function Vl(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function $l(){let e=k.lFrame;return k.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Hl=$l;function ss(){let e=$l();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Yt(){return k.lFrame.selectedIndex}function gt(e){k.lFrame.selectedIndex=e}function dh(){let e=k.lFrame;return Sl(e.tView,e.selectedIndex)}function fh(){return k.lFrame.currentNamespace}var Bl=!0;function Ul(){return Bl}function zl(e){Bl=e}function ph(e,t,n){let{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){let s=Ml(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}o&&(n.preOrderHooks??=[]).push(0-e,o),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function ql(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:l,ngOnDestroy:f}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),u&&(e.viewHooks??=[]).push(-n,u),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),f!=null&&(e.destroyHooks??=[]).push(n,f)}}function Sr(e,t,n){Gl(e,t,3,n)}function Tr(e,t,n,r){(e[b]&3)===n&&Gl(e,t,n,r)}function ri(e,t){let n=e[b];(n&3)===t&&(n&=16383,n+=1,e[b]=n)}function Gl(e,t,n,r){let o=r!==void 0?e[Vt]&65535:0,i=r??-1,s=t.length-1,a=0;for(let u=o;u<s;u++)if(typeof t[u+1]=="number"){if(a=t[u],r!=null&&a>=r)break}else t[u]<0&&(e[Vt]+=65536),(a<i||i==-1)&&(hh(e,n,t,u),e[Vt]=(e[Vt]&4294901760)+u+2),u++}function _u(e,t){Se(4,e,t);let n=L(null);try{t.call(e)}finally{L(n),Se(5,e,t)}}function hh(e,t,n,r){let o=n[r]<0,i=n[r+1],s=o?-n[r]:n[r],a=e[s];o?e[b]>>14<e[Vt]>>16&&(e[b]&3)===t&&(e[b]+=16384,_u(a,i)):_u(a,i)}var Bt=-1,wn=class{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}};function gh(e){return e instanceof wn}function mh(e){return(e.flags&8)!==0}function vh(e){return(e.flags&16)!==0}function Wl(e){return e!==Bt}function $r(e){return e&32767}function yh(e){return e>>16}function Hr(e,t){let n=yh(e),r=t;for(;n>0;)r=r[In],n--;return r}var bi=!0;function Iu(e){let t=bi;return bi=e,t}var Ch=256,Zl=Ch-1,Yl=5,wh=0,Te={};function Dh(e,t,n){let r;typeof n=="string"?r=n.charCodeAt(0)||0:n.hasOwnProperty(fn)&&(r=n[fn]),r==null&&(r=n[fn]=wh++);let o=r&Zl,i=1<<o;t.data[e+(o>>Yl)]|=i}function Ql(e,t){let n=Kl(e,t);if(n!==-1)return n;let r=t[P];r.firstCreatePass&&(e.injectorIndex=t.length,oi(r.data,e),oi(t,null),oi(r.blueprint,null));let o=as(e,t),i=e.injectorIndex;if(Wl(o)){let s=$r(o),a=Hr(o,t),u=a[P].data;for(let l=0;l<8;l++)t[i+l]=a[s+l]|u[s+l]}return t[i+8]=o,i}function oi(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Kl(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function as(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;o!==null;){if(r=nc(o),r===null)return Bt;if(n++,o=o[In],r.injectorIndex!==-1)return r.injectorIndex|n<<16}return Bt}function xh(e,t,n){Dh(e,t,n)}function bh(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let r=n.length,o=0;for(;o<r;){let i=n[o];if(ll(i))break;if(i===0)o=o+2;else if(typeof i=="number")for(o++;o<r&&typeof n[o]=="string";)o++;else{if(i===t)return n[o+1];o=o+2}}}return null}function Jl(e,t,n){if(n&A.Optional||e!==void 0)return e;Zi(t,"NodeInjector")}function Xl(e,t,n,r){if(n&A.Optional&&r===void 0&&(r=null),!(n&(A.Self|A.Host))){let o=e[qt],i=ce(void 0);try{return o?o.get(t,r,n&A.Optional):ol(t,r,n&A.Optional)}finally{ce(i)}}return Jl(r,t,n)}function ec(e,t,n,r=A.Default,o){if(e!==null){if(t[b]&2048&&!(r&A.Self)){let s=Ah(e,t,n,r,Te);if(s!==Te)return s}let i=tc(e,t,n,r,Te);if(i!==Te)return i}return Xl(t,n,r,o)}function tc(e,t,n,r,o){let i=_h(n);if(typeof i=="function"){if(!Ll(t,e,r))return r&A.Host?Jl(o,n,r):Xl(t,n,r,o);try{let s;if(s=i(r),s==null&&!(r&A.Optional))Zi(n);else return s}finally{Hl()}}else if(typeof i=="number"){let s=null,a=Kl(e,t),u=Bt,l=r&A.Host?t[Pe][Me]:null;for((a===-1||r&A.SkipSelf)&&(u=a===-1?as(e,t):t[a+8],u===Bt||!Su(r,!1)?a=-1:(s=t[P],a=$r(u),t=Hr(u,t)));a!==-1;){let f=t[P];if(Au(i,a,f.data)){let h=Eh(a,t,n,s,r,l);if(h!==Te)return h}u=t[a+8],u!==Bt&&Su(r,t[P].data[a+8]===l)&&Au(i,a,t)?(s=f,a=$r(u),t=Hr(u,t)):a=-1}}return o}function Eh(e,t,n,r,o,i){let s=t[P],a=s.data[e+8],u=r==null?ns(a)&&bi:r!=s&&(a.type&3)!==0,l=o&A.Host&&i===a,f=Mh(a,s,n,u,l);return f!==null?Dn(t,s,f,a):Te}function Mh(e,t,n,r,o){let i=e.providerIndexes,s=t.data,a=i&1048575,u=e.directiveStart,l=e.directiveEnd,f=i>>20,h=r?a:a+f,v=o?a+f:l;for(let g=h;g<v;g++){let w=s[g];if(g<u&&n===w||g>=u&&w.type===n)return g}if(o){let g=s[u];if(g&&An(g)&&g.type===n)return u}return null}function Dn(e,t,n,r){let o=e[n],i=t.data;if(gh(o)){let s=o;s.resolving&&Kf(Qf(i[n]));let a=Iu(s.canSeeViewProviders);s.resolving=!0;let u,l=s.injectImpl?ce(s.injectImpl):null,f=Ll(e,r,A.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&ph(n,i[n],t)}finally{l!==null&&ce(l),Iu(a),s.resolving=!1,Hl()}}return o}function _h(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(fn)?e[fn]:void 0;return typeof t=="number"?t>=0?t&Zl:Ih:t}function Au(e,t,n){let r=1<<e;return!!(n[t+(e>>Yl)]&r)}function Su(e,t){return!(e&A.Self)&&!(e&A.Host&&t)}var lt=class{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return ec(this._tNode,this._lView,t,Jr(r),n)}};function Ih(){return new lt(Ie(),Z())}function us(e){return Wi(()=>{let t=e.prototype.constructor,n=t[Nr]||Ei(t),r=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){let i=o[Nr]||Ei(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Ei(e){return Ju(e)?()=>{let t=Ei(de(e));return t&&t()}:Ut(e)}function Ah(e,t,n,r,o){let i=e,s=t;for(;i!==null&&s!==null&&s[b]&2048&&!(s[b]&512);){let a=tc(i,s,n,r|A.Self,Te);if(a!==Te)return a;let u=i.parent;if(!u){let l=s[wl];if(l){let f=l.get(n,Te,r);if(f!==Te)return f}u=nc(s),s=s[In]}i=u}return o}function nc(e){let t=e[P],n=t.type;return n===2?t.declTNode:n===1?e[Me]:null}function ls(e){return bh(Ie(),e)}function Tu(e,t=null,n=null,r){let o=rc(e,t,n,r);return o.resolveInjectorInitializers(),o}function rc(e,t=null,n=null,r,o=new Set){let i=[n||ct,_p(e)];return r=r||(typeof e=="object"?void 0:re(e)),new gn(i,t||Xi(),r||null,o)}var Tn=(()=>{class e{static{this.THROW_IF_NOT_FOUND=pn}static{this.NULL=new Fr}static create(n,r){if(Array.isArray(n))return Tu({name:""},r,n,"");{let o=n.name??"";return Tu({name:o},n.parent,n.providers,o)}}static{this.\u0275prov=M({token:e,providedIn:"any",factory:()=>R(sl)})}static{this.__NG_ELEMENT_ID__=-1}}return e})();var Sh="ngOriginalError";function ii(e){return e[Sh]}var $e=class{constructor(){this._console=console}handleError(t){let n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&ii(t);for(;n&&ii(n);)n=ii(n);return n||null}},oc=new N("",{providedIn:"root",factory:()=>y($e).handleError.bind(void 0)}),ic=(()=>{class e{static{this.__NG_ELEMENT_ID__=Th}static{this.__NG_ENV_ID__=n=>n}}return e})(),Mi=class extends ic{constructor(t){super(),this._lView=t}onDestroy(t){return Ol(this._lView,t),()=>Yp(this._lView,t)}};function Th(){return new Mi(Z())}function Oh(){return cs(Ie(),Z())}function cs(e,t){return new On(_e(e,t))}var On=(()=>{class e{constructor(n){this.nativeElement=n}static{this.__NG_ELEMENT_ID__=Oh}}return e})();var _i=class extends J{constructor(t=!1){super(),this.destroyRef=void 0,this.__isAsync=t,Lp()&&(this.destroyRef=y(ic,{optional:!0})??void 0)}emit(t){let n=L(null);try{super.next(t)}finally{L(n)}}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&typeof t=="object"){let u=t;o=u.next?.bind(u),i=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(i=si(i),o&&(o=si(o)),s&&(s=si(s)));let a=super.subscribe({next:o,error:i,complete:s});return t instanceof z&&t.add(a),a}};function si(e){return t=>{setTimeout(e,void 0,t)}}var De=_i;function sc(e){return(e.flags&128)===128}var ac=new Map,Ph=0;function Nh(){return Ph++}function Rh(e){ac.set(e[ro],e)}function kh(e){ac.delete(e[ro])}var Ou="__ngContext__";function Gt(e,t){ut(t)?(e[Ou]=t[ro],Rh(t)):e[Ou]=t}function uc(e){return cc(e[vn])}function lc(e){return cc(e[xe])}function cc(e){for(;e!==null&&!Ue(e);)e=e[xe];return e}var Ii;function dc(e){Ii=e}function Fh(){if(Ii!==void 0)return Ii;if(typeof document<"u")return document;throw new D(210,!1)}var ds=new N("",{providedIn:"root",factory:()=>Lh}),Lh="ng",fs=new N(""),Qt=new N("",{providedIn:"platform",factory:()=>"unknown"});var ps=new N("",{providedIn:"root",factory:()=>Fh().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var jh="h",Vh="b";var $h=()=>null;function hs(e,t,n=!1){return $h(e,t,n)}var fc=!1,Hh=new N("",{providedIn:"root",factory:()=>fc});var _r;function Bh(){if(_r===void 0&&(_r=null,at.trustedTypes))try{_r=at.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return _r}function Pu(e){return Bh()?.createScriptURL(e)||e}var Br=class{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Qu})`}};function Pn(e){return e instanceof Br?e.changingThisBreaksApplicationSecurity:e}function gs(e,t){let n=Uh(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${Qu})`)}return n===t}function Uh(e){return e instanceof Br&&e.getTypeName()||null}var zh=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function pc(e){return e=String(e),e.match(zh)?e:"unsafe:"+e}var io=function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e}(io||{});function qh(e){let t=gc();return t?t.sanitize(io.URL,e)||"":gs(e,"URL")?Pn(e):pc(Kr(e))}function Gh(e){let t=gc();if(t)return Pu(t.sanitize(io.RESOURCE_URL,e)||"");if(gs(e,"ResourceURL"))return Pu(Pn(e));throw new D(904,!1)}function Wh(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?Gh:qh}function hc(e,t,n){return Wh(t,n)(e)}function gc(){let e=Z();return e&&e[Ee].sanitizer}function mc(e){return e instanceof Function?e():e}var He=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}(He||{}),Zh;function ms(e,t){return Zh(e,t)}function $t(e,t,n,r,o){if(r!=null){let i,s=!1;Ue(r)?i=r:ut(r)&&(s=!0,r=r[Be]);let a=Ne(r);e===0&&n!==null?o==null?Dc(t,n,a):Ur(t,n,a,o||null,!0):e===1&&n!==null?Ur(t,n,a,o||null,!0):e===2?dg(t,a,s):e===3&&t.destroyNode(a),i!=null&&pg(t,e,i,n,o)}}function Yh(e,t){return e.createText(t)}function Qh(e,t,n){e.setValue(t,n)}function vc(e,t,n){return e.createElement(t,n)}function Kh(e,t){yc(e,t),t[Be]=null,t[Me]=null}function Jh(e,t,n,r,o,i){r[Be]=o,r[Me]=t,so(e,r,n,1,o,i)}function yc(e,t){t[Ee].changeDetectionScheduler?.notify(1),so(e,t,t[ee],2,null,null)}function Xh(e){let t=e[vn];if(!t)return ai(e[P],e);for(;t;){let n=null;if(ut(t))n=t[vn];else{let r=t[fe];r&&(n=r)}if(!n){for(;t&&!t[xe]&&t!==e;)ut(t)&&ai(t[P],t),t=t[X];t===null&&(t=e),ut(t)&&ai(t[P],t),n=t&&t[xe]}t=n}}function eg(e,t,n,r){let o=fe+r,i=n.length;r>0&&(n[o-1][xe]=t),r<i-fe?(t[xe]=n[o],il(n,fe+r,t)):(n.push(t),t[xe]=null),t[X]=n;let s=t[es];s!==null&&n!==s&&tg(s,t);let a=t[no];a!==null&&a.insertView(e),Di(t),t[b]|=128}function tg(e,t){let n=e[Vr],o=t[X][X][Pe];t[Pe]!==o&&(e[b]|=ts.HasTransplantedViews),n===null?e[Vr]=[t]:n.push(t)}function Cc(e,t){let n=e[Vr],r=n.indexOf(t);n.splice(r,1)}function Ai(e,t){if(e.length<=fe)return;let n=fe+t,r=e[n];if(r){let o=r[es];o!==null&&o!==e&&Cc(o,r),t>0&&(e[n-1][xe]=r[xe]);let i=kr(e,fe+t);Kh(r[P],r);let s=i[no];s!==null&&s.detachView(i[P]),r[X]=null,r[xe]=null,r[b]&=-129}return r}function wc(e,t){if(!(t[b]&256)){let n=t[ee];n.destroyNode&&so(e,t,n,3,null,null),Xh(t)}}function ai(e,t){if(t[b]&256)return;let n=L(null);try{t[b]&=-129,t[b]|=256,t[ft]&&La(t[ft]),rg(e,t),ng(e,t),t[P].type===1&&t[ee].destroy();let r=t[es];if(r!==null&&Ue(t[X])){r!==t[X]&&Cc(r,t);let o=t[no];o!==null&&o.detachView(e)}kh(t)}finally{L(n)}}function ng(e,t){let n=e.cleanup,r=t[mn];if(n!==null)for(let i=0;i<n.length-1;i+=2)if(typeof n[i]=="string"){let s=n[i+3];s>=0?r[s]():r[-s].unsubscribe(),i+=2}else{let s=r[n[i+1]];n[i].call(s)}r!==null&&(t[mn]=null);let o=t[Ye];if(o!==null){t[Ye]=null;for(let i=0;i<o.length;i++){let s=o[i];s()}}}function rg(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let r=0;r<n.length;r+=2){let o=t[n[r]];if(!(o instanceof wn)){let i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=o[i[s]],u=i[s+1];Se(4,a,u);try{u.call(a)}finally{Se(5,a,u)}}else{Se(4,o,i);try{i.call(o)}finally{Se(5,o,i)}}}}}function og(e,t,n){return ig(e,t.parent,n)}function ig(e,t,n){let r=t;for(;r!==null&&r.type&40;)t=r,r=t.parent;if(r===null)return n[Be];{let{componentOffset:o}=r;if(o>-1){let{encapsulation:i}=e.data[r.directiveStart+o];if(i===Oe.None||i===Oe.Emulated)return null}return _e(r,n)}}function Ur(e,t,n,r,o){e.insertBefore(t,n,r,o)}function Dc(e,t,n){e.appendChild(t,n)}function Nu(e,t,n,r,o){r!==null?Ur(e,t,n,r,o):Dc(e,t,n)}function sg(e,t,n,r){e.removeChild(t,n,r)}function vs(e,t){return e.parentNode(t)}function ag(e,t){return e.nextSibling(t)}function ug(e,t,n){return cg(e,t,n)}function lg(e,t,n){return e.type&40?_e(e,n):null}var cg=lg,Ru;function xc(e,t,n,r){let o=og(e,r,t),i=t[ee],s=r.parent||t[Me],a=ug(s,r,t);if(o!=null)if(Array.isArray(n))for(let u=0;u<n.length;u++)Nu(i,o,n[u],a,!1);else Nu(i,o,n,a,!1);Ru!==void 0&&Ru(i,r,t,n,o)}function Or(e,t){if(t!==null){let n=t.type;if(n&3)return _e(t,e);if(n&4)return Si(-1,e[t.index]);if(n&8){let r=t.child;if(r!==null)return Or(e,r);{let o=e[t.index];return Ue(o)?Si(-1,o):Ne(o)}}else{if(n&32)return ms(t,e)()||Ne(e[t.index]);{let r=bc(e,t);if(r!==null){if(Array.isArray(r))return r[0];let o=Cn(e[Pe]);return Or(o,r)}else return Or(e,t.next)}}}return null}function bc(e,t){if(t!==null){let r=e[Pe][Me],o=t.projection;return r.projection[o]}return null}function Si(e,t){let n=fe+e+1;if(n<t.length){let r=t[n],o=r[P].firstChild;if(o!==null)return Or(r,o)}return t[ht]}function dg(e,t,n){let r=vs(e,t);r&&sg(e,r,t,n)}function ys(e,t,n,r,o,i,s){for(;n!=null;){let a=r[n.index],u=n.type;if(s&&t===0&&(a&&Gt(Ne(a),r),n.flags|=2),(n.flags&32)!==32)if(u&8)ys(e,t,n.child,r,o,i,!1),$t(t,e,o,a,i);else if(u&32){let l=ms(n,r),f;for(;f=l();)$t(t,e,o,f,i);$t(t,e,o,a,i)}else u&16?fg(e,t,r,n,o,i):$t(t,e,o,a,i);n=s?n.projectionNext:n.next}}function so(e,t,n,r,o,i){ys(n,r,e.firstChild,t,o,i,!1)}function fg(e,t,n,r,o,i){let s=n[Pe],u=s[Me].projection[r.projection];if(Array.isArray(u))for(let l=0;l<u.length;l++){let f=u[l];$t(t,e,o,f,i)}else{let l=u,f=s[X];sc(r)&&(l.flags|=128),ys(e,t,l,f,o,i,!0)}}function pg(e,t,n,r,o){let i=n[ht],s=Ne(n);i!==s&&$t(t,e,r,i,o);for(let a=fe;a<n.length;a++){let u=n[a];so(u[P],u,e,t,r,i)}}function hg(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=r.indexOf("-")===-1?void 0:He.DashCase;o==null?e.removeStyle(n,r,i):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=He.Important),e.setStyle(n,r,o,i))}}function gg(e,t,n){e.setAttribute(t,"style",n)}function Ec(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Mc(e,t,n){let{mergedAttrs:r,classes:o,styles:i}=n;r!==null&&gi(e,t,r),o!==null&&Ec(e,t,o),i!==null&&gg(e,t,i)}var Kt={};function Cs(e=1){_c(Ct(),Z(),Yt()+e,!1)}function _c(e,t,n,r){if(!r)if((t[b]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Sr(t,i,n)}else{let i=e.preOrderHooks;i!==null&&Tr(t,i,0,n)}gt(n)}function Ke(e,t=A.Default){let n=Z();if(n===null)return R(e,t);let r=Ie();return ec(r,n,de(e),t)}function Ic(e,t,n,r,o,i){let s=L(null);try{let a=null;o&be.SignalBased&&(a=t[r][Na]),a!==null&&a.transformFn!==void 0&&(i=a.transformFn(i)),o&be.HasDecoratorInputTransform&&(i=e.inputTransforms[r].call(t,i)),e.setInput!==null?e.setInput(t,a,i,n,r):El(t,a,r,i)}finally{L(s)}}function mg(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let r=0;r<n.length;r++){let o=n[r];if(o<0)gt(~o);else{let i=o,s=n[++r],a=n[++r];ah(s,i);let u=t[i];a(2,u)}}}finally{gt(-1)}}function ws(e,t,n,r,o,i,s,a,u,l,f){let h=t.blueprint.slice();return h[Be]=o,h[b]=r|4|128|8|64,(l!==null||e&&e[b]&2048)&&(h[b]|=2048),Tl(h),h[X]=h[In]=e,h[Ve]=n,h[Ee]=s||e&&e[Ee],h[ee]=a||e&&e[ee],h[qt]=u||e&&e[qt]||null,h[Me]=i,h[ro]=Nh(),h[Lr]=f,h[wl]=l,h[Pe]=t.type==2?e[Pe]:h,h}function Ds(e,t,n,r,o){let i=e.data[t];if(i===null)i=vg(e,t,n,r,o),sh()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=r,i.attrs=o;let s=nh();i.injectorIndex=s===null?-1:s.injectorIndex}return oo(i,!0),i}function vg(e,t,n,r,o){let i=Nl(),s=Rl(),a=s?i:i&&i.parent,u=e.data[t]=Eg(e,a,n,t,r,o);return e.firstChild===null&&(e.firstChild=u),i!==null&&(s?i.child==null&&u.parent!==null&&(i.child=u):i.next===null&&(i.next=u,u.prev=i)),u}function Ac(e,t,n,r){if(n===0)return-1;let o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Sc(e,t,n,r,o){let i=Yt(),s=r&2;try{gt(-1),s&&t.length>pt&&_c(e,t,pt,!1),Se(s?2:0,o),n(r,o)}finally{gt(i),Se(s?3:1,o)}}function Tc(e,t,n){if(xl(t)){let r=L(null);try{let o=t.directiveStart,i=t.directiveEnd;for(let s=o;s<i;s++){let a=e.data[s];if(a.contentQueries){let u=n[s];a.contentQueries(1,u,s)}}}finally{L(r)}}}function yg(e,t,n){Pl()&&(Sg(e,t,n,_e(n,t)),(n.flags&64)===64&&Rc(e,t,n))}function Cg(e,t,n=_e){let r=t.localNames;if(r!==null){let o=t.index+1;for(let i=0;i<r.length;i+=2){let s=r[i+1],a=s===-1?n(t,e):e[s];e[o++]=a}}}function Oc(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=Pc(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Pc(e,t,n,r,o,i,s,a,u,l,f){let h=pt+r,v=h+o,g=wg(h,v),w=typeof l=="function"?l():l;return g[P]={type:e,blueprint:g,template:n,queries:null,viewQuery:a,declTNode:t,data:g.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:v,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:u,consts:w,incompleteFirstPass:!1,ssrId:f}}function wg(e,t){let n=[];for(let r=0;r<t;r++)n.push(r<e?null:Kt);return n}function Dg(e,t,n,r){let i=r.get(Hh,fc)||n===Oe.ShadowDom,s=e.selectRootElement(t,i);return xg(s),s}function xg(e){bg(e)}var bg=()=>null;function Eg(e,t,n,r,o,i){let s=t?t.injectorIndex:-1,a=0;return Xp()&&(a|=128),{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function ku(e,t,n,r,o){for(let i in t){if(!t.hasOwnProperty(i))continue;let s=t[i];if(s===void 0)continue;r??={};let a,u=be.None;Array.isArray(s)?(a=s[0],u=s[1]):a=s;let l=i;if(o!==null){if(!o.hasOwnProperty(i))continue;l=o[i]}e===0?Fu(r,n,l,a,u):Fu(r,n,l,a)}return r}function Fu(e,t,n,r,o){let i;e.hasOwnProperty(n)?(i=e[n]).push(t,r):i=e[n]=[t,r],o!==void 0&&i.push(o)}function Mg(e,t,n){let r=t.directiveStart,o=t.directiveEnd,i=e.data,s=t.attrs,a=[],u=null,l=null;for(let f=r;f<o;f++){let h=i[f],v=n?n.get(h):null,g=v?v.inputs:null,w=v?v.outputs:null;u=ku(0,h.inputs,f,u,g),l=ku(1,h.outputs,f,l,w);let I=u!==null&&s!==null&&!Ki(t)?$g(u,f,s):null;a.push(I)}u!==null&&(u.hasOwnProperty("class")&&(t.flags|=8),u.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=a,t.inputs=u,t.outputs=l}function _g(e,t,n,r){if(Pl()){let o=r===null?null:{"":-1},i=Og(e,n),s,a;i===null?s=a=null:[s,a]=i,s!==null&&Nc(e,t,n,s,o,a),o&&Pg(n,r,o)}n.mergedAttrs=Qi(n.mergedAttrs,n.attrs)}function Nc(e,t,n,r,o,i){for(let l=0;l<r.length;l++)xh(Ql(n,t),e,r[l].type);Rg(n,e.data.length,r.length);for(let l=0;l<r.length;l++){let f=r[l];f.providersResolver&&f.providersResolver(f)}let s=!1,a=!1,u=Ac(e,t,r.length,null);for(let l=0;l<r.length;l++){let f=r[l];n.mergedAttrs=Qi(n.mergedAttrs,f.hostAttrs),kg(e,n,t,u,f),Ng(u,f,o),f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let h=f.type.prototype;!s&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),s=!0),!a&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),a=!0),u++}Mg(e,n,i)}function Ig(e,t,n,r,o){let i=o.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;Ag(s)!=a&&s.push(a),s.push(n,r,i)}}function Ag(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function Sg(e,t,n,r){let o=n.directiveStart,i=n.directiveEnd;ns(n)&&Fg(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||Ql(n,t),Gt(r,t);let s=n.initialInputs;for(let a=o;a<i;a++){let u=e.data[a],l=Dn(t,e,a,n);if(Gt(l,t),s!==null&&Vg(t,a-o,l,u,n,s),An(u)){let f=yt(n.index,t);f[Ve]=Dn(t,e,a,n)}}}function Rc(e,t,n){let r=n.directiveStart,o=n.directiveEnd,i=n.index,s=uh();try{gt(i);for(let a=r;a<o;a++){let u=e.data[a],l=t[a];xi(a),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&Tg(u,l)}}finally{gt(-1),xi(s)}}function Tg(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function Og(e,t){let n=e.directiveRegistry,r=null,o=null;if(n)for(let i=0;i<n.length;i++){let s=n[i];if(vp(t,s.selectors,!1))if(r||(r=[]),An(s))if(s.findHostDirectiveDefs!==null){let a=[];o=o||new Map,s.findHostDirectiveDefs(s,a,o),r.unshift(...a,s);let u=a.length;Ti(e,t,u)}else r.unshift(s),Ti(e,t,0);else o=o||new Map,s.findHostDirectiveDefs?.(s,r,o),r.push(s)}return r===null?null:[r,o]}function Ti(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function Pg(e,t,n){if(t){let r=e.localNames=[];for(let o=0;o<t.length;o+=2){let i=n[t[o+1]];if(i==null)throw new D(-301,!1);r.push(t[o],i)}}}function Ng(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;An(t)&&(n[""]=e)}}function Rg(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function kg(e,t,n,r,o){e.data[r]=o;let i=o.factory||(o.factory=Ut(o.type,!0)),s=new wn(i,An(o),Ke);e.blueprint[r]=s,n[r]=s,Ig(e,t,r,Ac(e,n,o.hostVars,Kt),o)}function Fg(e,t,n){let r=_e(t,e),o=Oc(n),i=e[Ee].rendererFactory,s=16;n.signals?s=4096:n.onPush&&(s=64);let a=xs(e,ws(e,o,null,s,r,t,null,i.createRenderer(r,n),null,null,null));e[t.index]=a}function Lg(e,t,n,r,o,i){let s=_e(e,t);jg(t[ee],s,i,e.value,n,r,o)}function jg(e,t,n,r,o,i,s){if(i==null)e.removeAttribute(t,o,n);else{let a=s==null?Kr(i):s(i,r||"",o);e.setAttribute(t,o,a,n)}}function Vg(e,t,n,r,o,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;){let u=s[a++],l=s[a++],f=s[a++],h=s[a++];Ic(r,n,u,l,f,h)}}function $g(e,t,n){let r=null,o=0;for(;o<n.length;){let i=n[o];if(i===0){o+=4;continue}else if(i===5){o+=2;continue}if(typeof i=="number")break;if(e.hasOwnProperty(i)){r===null&&(r=[]);let s=e[i];for(let a=0;a<s.length;a+=3)if(s[a]===t){r.push(i,s[a+1],s[a+2],n[o+1]);break}}o+=2}return r}function Hg(e,t,n,r){return[e,!0,0,t,null,r,null,n,null,null]}function kc(e,t){let n=e.contentQueries;if(n!==null){let r=L(null);try{for(let o=0;o<n.length;o+=2){let i=n[o],s=n[o+1];if(s!==-1){let a=e.data[s];Fl(i),a.contentQueries(2,t[s],s)}}}finally{L(r)}}}function xs(e,t){return e[vn]?e[bu][xe]=t:e[vn]=t,e[bu]=t,t}function Oi(e,t,n){Fl(0);let r=L(null);try{t(e,n)}finally{L(r)}}function Bg(e){return e[mn]||(e[mn]=[])}function Ug(e){return e.cleanup||(e.cleanup=[])}function Fc(e,t){let n=e[qt],r=n?n.get($e,null):null;r&&r.handleError(t)}function Lc(e,t,n,r,o){for(let i=0;i<n.length;){let s=n[i++],a=n[i++],u=n[i++],l=t[s],f=e.data[s];Ic(f,l,r,a,u,o)}}function zg(e,t,n){let r=Al(t,e);Qh(e[ee],r,n)}function qg(e,t){let n=yt(t,e),r=n[P];Gg(r,n);let o=n[Be];o!==null&&n[Lr]===null&&(n[Lr]=hs(o,n[qt])),jc(r,n,n[Ve])}function Gg(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function jc(e,t,n){is(t);try{let r=e.viewQuery;r!==null&&Oi(1,r,n);let o=e.template;o!==null&&Sc(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[no]?.finishViewCreation(e),e.staticContentQueries&&kc(e,t),e.staticViewQueries&&Oi(2,e.viewQuery,n);let i=e.components;i!==null&&Wg(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[b]&=-5,ss()}}function Wg(e,t){for(let n=0;n<t.length;n++)qg(e,t[n])}function Lu(e,t){return!t||t.firstChild===null||sc(e)}function Zg(e,t,n,r=!0){let o=t[P];if(eg(o,t,e,n),r){let s=Si(n,e),a=t[ee],u=vs(a,e[ht]);u!==null&&Jh(o,e[Me],a,t,u,s)}let i=t[Lr];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function zr(e,t,n,r,o=!1){for(;n!==null;){let i=t[n.index];i!==null&&r.push(Ne(i)),Ue(i)&&Yg(i,r);let s=n.type;if(s&8)zr(e,t,n.child,r);else if(s&32){let a=ms(n,t),u;for(;u=a();)r.push(u)}else if(s&16){let a=bc(t,n);if(Array.isArray(a))r.push(...a);else{let u=Cn(t[Pe]);zr(u[P],u,a,r,!0)}}n=o?n.projectionNext:n.next}return r}function Yg(e,t){for(let n=fe;n<e.length;n++){let r=e[n],o=r[P].firstChild;o!==null&&zr(r[P],r,o,t)}e[ht]!==e[Be]&&t.push(e[ht])}var Vc=[];function Qg(e){return e[ft]??Kg(e)}function Kg(e){let t=Vc.pop()??Object.create(Xg);return t.lView=e,t}function Jg(e){e.lView[ft]!==e&&(e.lView=null,Vc.push(e))}var Xg=B(C({},Ra),{consumerIsAlwaysLive:!0,consumerMarkedDirty:e=>{yn(e.lView)},consumerOnSignalRead(){this.lView[ft]=this}}),$c=100;function Hc(e,t=!0,n=0){let r=e[Ee],o=r.rendererFactory,i=!1;i||o.begin?.();try{em(e,n)}catch(s){throw t&&Fc(e,s),s}finally{i||(o.end?.(),r.inlineEffectRunner?.flush())}}function em(e,t){Pi(e,t);let n=0;for(;os(e);){if(n===$c)throw new D(103,!1);n++,Pi(e,1)}}function tm(e,t,n,r){let o=t[b];if((o&256)===256)return;let i=!1;!i&&t[Ee].inlineEffectRunner?.flush(),is(t);let s=null,a=null;!i&&nm(e)&&(a=Qg(t),s=ka(a));try{Tl(t),oh(e.bindingStartIndex),n!==null&&Sc(e,t,n,2,r);let u=(o&3)===3;if(!i)if(u){let h=e.preOrderCheckHooks;h!==null&&Sr(t,h,null)}else{let h=e.preOrderHooks;h!==null&&Tr(t,h,0,null),ri(t,0)}if(rm(t),Bc(t,0),e.contentQueries!==null&&kc(e,t),!i)if(u){let h=e.contentCheckHooks;h!==null&&Sr(t,h)}else{let h=e.contentHooks;h!==null&&Tr(t,h,1),ri(t,1)}mg(e,t);let l=e.components;l!==null&&zc(t,l,0);let f=e.viewQuery;if(f!==null&&Oi(2,f,r),!i)if(u){let h=e.viewCheckHooks;h!==null&&Sr(t,h)}else{let h=e.viewHooks;h!==null&&Tr(t,h,2),ri(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[ni]){for(let h of t[ni])h();t[ni]=null}i||(t[b]&=-73)}catch(u){throw yn(t),u}finally{a!==null&&(Fa(a,s),Jg(a)),ss()}}function nm(e){return e.type!==2}function Bc(e,t){for(let n=uc(e);n!==null;n=lc(n))for(let r=fe;r<n.length;r++){let o=n[r];Uc(o,t)}}function rm(e){for(let t=uc(e);t!==null;t=lc(t)){if(!(t[b]&ts.HasTransplantedViews))continue;let n=t[Vr];for(let r=0;r<n.length;r++){let o=n[r],i=o[X];Zp(o)}}}function om(e,t,n){let r=yt(t,e);Uc(r,n)}function Uc(e,t){rs(e)&&Pi(e,t)}function Pi(e,t){let r=e[P],o=e[b],i=e[ft],s=!!(t===0&&o&16);if(s||=!!(o&64&&t===0),s||=!!(o&1024),s||=!!(i?.dirty&&ko(i)),i&&(i.dirty=!1),e[b]&=-9217,s)tm(r,e,r.template,e[Ve]);else if(o&8192){Bc(e,1);let a=r.components;a!==null&&zc(e,a,1)}}function zc(e,t,n){for(let r=0;r<t.length;r++)om(e,t[r],n)}function bs(e){for(e[Ee].changeDetectionScheduler?.notify();e;){e[b]|=64;let t=Cn(e);if(Vp(e)&&!t)return e;e=t}return null}var Wt=class{get rootNodes(){let t=this._lView,n=t[P];return zr(n,t,n.firstChild,[])}constructor(t,n,r=!0){this._lView=t,this._cdRefInjectingView=n,this.notifyErrorHandler=r,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Ve]}set context(t){this._lView[Ve]=t}get destroyed(){return(this._lView[b]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[X];if(Ue(t)){let n=t[jr],r=n?n.indexOf(this):-1;r>-1&&(Ai(t,r),kr(n,r))}this._attachedToViewContainer=!1}wc(this._lView[P],this._lView)}onDestroy(t){Ol(this._lView,t)}markForCheck(){bs(this._cdRefInjectingView||this._lView)}detach(){this._lView[b]&=-129}reattach(){Di(this._lView),this._lView[b]|=128}detectChanges(){this._lView[b]|=1024,Hc(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,yc(this._lView[P],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=t,Di(this._lView)}};var xE=new RegExp(`^(\\d+)*(${Vh}|${jh})*(.*)`);var im=()=>null;function ju(e,t){return im(e,t)}var Ni=class{},Ri=class{},qr=class{};function sm(e){let t=Error(`No component factory found for ${re(e)}.`);return t[am]=e,t}var am="ngComponent";var ki=class{resolveComponentFactory(t){throw sm(t)}},ao=(()=>{class e{static{this.NULL=new ki}}return e})(),xn=class{},uo=(()=>{class e{constructor(){this.destroyNode=null}static{this.__NG_ELEMENT_ID__=()=>um()}}return e})();function um(){let e=Z(),t=Ie(),n=yt(t.index,e);return(ut(n)?n:e)[ee]}var lm=(()=>{class e{static{this.\u0275prov=M({token:e,providedIn:"root",factory:()=>null})}}return e})(),ui={};var Vu=new Set;function qc(e){Vu.has(e)||(Vu.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}function $u(...e){}function cm(){let e=typeof at.requestAnimationFrame=="function",t=at[e?"requestAnimationFrame":"setTimeout"],n=at[e?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&t&&n){let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r);let o=n[Zone.__symbol__("OriginalDelegate")];o&&(n=o)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:n}}var U=class e{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new De(!1),this.onMicrotaskEmpty=new De(!1),this.onStable=new De(!1),this.onError=new De(!1),typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=cm().nativeRequestAnimationFrame,pm(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new D(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,dm,$u,$u);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}},dm={};function Es(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function fm(e){e.isCheckStableRunning||e.lastRequestAnimationFrameId!==-1||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(at,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Fi(e),e.isCheckStableRunning=!0,Es(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Fi(e))}function pm(e){let t=()=>{fm(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{if(hm(a))return n.invokeTask(o,i,s,a);try{return Hu(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&i.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),Bu(e)}},onInvoke:(n,r,o,i,s,a,u)=>{try{return Hu(e),n.invoke(o,i,s,a,u)}finally{e.shouldCoalesceRunChangeDetection&&t(),Bu(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&(i.change=="microTask"?(e._hasPendingMicrotasks=i.microTask,Fi(e),Es(e)):i.change=="macroTask"&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}function Fi(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.lastRequestAnimationFrameId!==-1?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Hu(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Bu(e){e._nesting--,Es(e)}function hm(e){return!Array.isArray(e)||e.length!==1?!1:e[0].data?.__ignore_ng_zone__===!0}var Gc=(()=>{class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let n=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of n)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}static{this.\u0275prov=M({token:e,providedIn:"root",factory:()=>new e})}}return e})();function Li(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)o=pu(o,a);else if(i==2){let u=a,l=t[++s];r=pu(r,u+": "+l+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}var Gr=class extends ao{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=dt(t);return new bn(n,this.ngModule)}};function Uu(e){let t=[];for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];r!==void 0&&t.push({propName:Array.isArray(r)?r[0]:r,templateName:n})}return t}function gm(e){let t=e.toLowerCase();return t==="svg"?Up:t==="math"?zp:null}var ji=class{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){r=Jr(r);let o=this.injector.get(t,ui,r);return o!==ui||n===ui?o:this.parentInjector.get(t,n,r)}},bn=class extends qr{get inputs(){let t=this.componentDef,n=t.inputTransforms,r=Uu(t.inputs);if(n!==null)for(let o of r)n.hasOwnProperty(o.propName)&&(o.transform=n[o.propName]);return r}get outputs(){return Uu(this.componentDef.outputs)}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=Dp(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}create(t,n,r,o){let i=L(null);try{o=o||this.ngModule;let s=o instanceof pe?o:o?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let a=s?new ji(t,s):t,u=a.get(xn,null);if(u===null)throw new D(407,!1);let l=a.get(lm,null),f=a.get(Gc,null),h=a.get(Ni,null),v={rendererFactory:u,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:f,changeDetectionScheduler:h},g=u.createRenderer(null,this.componentDef),w=this.componentDef.selectors[0][0]||"div",I=r?Dg(g,r,this.componentDef.encapsulation,a):vc(g,w,gm(w)),H=512;this.componentDef.signals?H|=4096:this.componentDef.onPush||(H|=16);let $=null;I!==null&&($=hs(I,a,!0));let rt=Pc(0,null,null,1,0,null,null,null,null,null,null),te=ws(null,rt,null,H,null,null,v,g,a,null,$);is(te);let Fe,Mt;try{let me=this.componentDef,_t,No=null;me.findHostDirectiveDefs?(_t=[],No=new Map,me.findHostDirectiveDefs(me,_t,No),_t.push(me)):_t=[me];let cf=mm(te,I),df=vm(cf,I,me,_t,te,v,g);Mt=Sl(rt,pt),I&&wm(g,me,I,r),n!==void 0&&Dm(Mt,this.ngContentSelectors,n),Fe=Cm(df,me,_t,No,te,[xm]),jc(rt,te,null)}finally{ss()}return new Vi(this.componentType,Fe,cs(Mt,te),te,Mt)}finally{L(i)}}},Vi=class extends Ri{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.previousInputValues=null,this.instance=n,this.hostView=this.changeDetectorRef=new Wt(o,void 0,!1),this.componentType=t}setInput(t,n){let r=this._tNode.inputs,o;if(r!==null&&(o=r[t])){if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let i=this._rootLView;Lc(i[P],i,o,t,n),this.previousInputValues.set(t,n);let s=yt(this._tNode.index,i);bs(s)}}get injector(){return new lt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function mm(e,t){let n=e[P],r=pt;return e[r]=t,Ds(n,r,2,"#host",null)}function vm(e,t,n,r,o,i,s){let a=o[P];ym(r,e,t,s);let u=null;t!==null&&(u=hs(t,o[qt]));let l=i.rendererFactory.createRenderer(t,n),f=16;n.signals?f=4096:n.onPush&&(f=64);let h=ws(o,Oc(n),null,f,o[e.index],e,i,l,null,null,u);return a.firstCreatePass&&Ti(a,e,r.length-1),xs(o,h),o[e.index]=h}function ym(e,t,n,r){for(let o of e)t.mergedAttrs=Qi(t.mergedAttrs,o.hostAttrs);t.mergedAttrs!==null&&(Li(t,t.mergedAttrs,!0),n!==null&&Mc(r,n,t))}function Cm(e,t,n,r,o,i){let s=Ie(),a=o[P],u=_e(s,o);Nc(a,o,s,n,null,r);for(let f=0;f<n.length;f++){let h=s.directiveStart+f,v=Dn(o,a,h,s);Gt(v,o)}Rc(a,o,s),u&&Gt(u,o);let l=Dn(o,a,s.directiveStart+s.componentOffset,s);if(e[Ve]=o[Ve]=l,i!==null)for(let f of i)f(l,t);return Tc(a,s,o),l}function wm(e,t,n,r){if(r)gi(e,n,["ng-version","17.3.12"]);else{let{attrs:o,classes:i}=xp(t.selectors[0]);o&&gi(e,n,o),i&&i.length>0&&Ec(e,n,i.join(" "))}}function Dm(e,t,n){let r=e.projection=[];for(let o=0;o<t.length;o++){let i=n[o];r.push(i!=null?Array.from(i):null)}}function xm(){let e=Ie();ql(Z()[P],e)}var lo=(()=>{class e{static{this.__NG_ELEMENT_ID__=bm}}return e})();function bm(){let e=Ie();return Mm(e,Z())}var Em=lo,Wc=class extends Em{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return cs(this._hostTNode,this._hostLView)}get injector(){return new lt(this._hostTNode,this._hostLView)}get parentInjector(){let t=as(this._hostTNode,this._hostLView);if(Wl(t)){let n=Hr(t,this._hostLView),r=$r(t),o=n[P].data[r+8];return new lt(o,n)}else return new lt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=zu(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-fe}createEmbeddedView(t,n,r){let o,i;typeof r=="number"?o=r:r!=null&&(o=r.index,i=r.injector);let s=ju(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,o,Lu(this._hostTNode,s)),a}createComponent(t,n,r,o,i){let s=t&&!jp(t),a;if(s)a=n;else{let w=n||{};a=w.index,r=w.injector,o=w.projectableNodes,i=w.environmentInjector||w.ngModuleRef}let u=s?t:new bn(dt(t)),l=r||this.parentInjector;if(!i&&u.ngModule==null){let I=(s?l:this.parentInjector).get(pe,null);I&&(i=I)}let f=dt(u.componentType??{}),h=ju(this._lContainer,f?.id??null),v=h?.firstChild??null,g=u.create(l,o,v,i);return this.insertImpl(g.hostView,a,Lu(this._hostTNode,h)),g}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,r){let o=t._lView;if(Wp(o)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let u=o[X],l=new Wc(u,u[Me],u[X]);l.detach(l.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return Zg(s,o,i,r),t.attachToViewContainerRef(),il(li(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=zu(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),r=Ai(this._lContainer,n);r&&(kr(li(this._lContainer),n),wc(r[P],r))}detach(t){let n=this._adjustIndex(t,-1),r=Ai(this._lContainer,n);return r&&kr(li(this._lContainer),n)!=null?new Wt(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function zu(e){return e[jr]}function li(e){return e[jr]||(e[jr]=[])}function Mm(e,t){let n,r=t[e.index];return Ue(r)?n=r:(n=Hg(r,t,null,e),t[e.index]=n,xs(t,n)),Im(n,t,e,r),new Wc(n,e,t)}function _m(e,t){let n=e[ee],r=n.createComment(""),o=_e(t,e),i=vs(n,o);return Ur(n,i,r,ag(n,o),!1),r}var Im=Am;function Am(e,t,n,r){if(e[ht])return;let o;n.type&8?o=Ne(r):o=_m(t,n),e[ht]=o}function Ms(e){let t=e.inputConfig,n={};for(let r in t)if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)&&o[3]&&(n[r]=o[3])}e.inputTransforms=n}var Qe=class{},En=class{};var $i=class extends Qe{constructor(t,n,r){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Gr(this);let o=hl(t);this._bootstrapComponents=mc(o.bootstrap),this._r3Injector=rc(t,n,[{provide:Qe,useValue:this},{provide:ao,useValue:this.componentFactoryResolver},...r],re(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Hi=class extends En{constructor(t){super(),this.moduleType=t}create(t){return new $i(this.moduleType,t,[])}};var Wr=class extends Qe{constructor(t){super(),this.componentFactoryResolver=new Gr(this),this.instance=null;let n=new gn([...t.providers,{provide:Qe,useValue:this},{provide:ao,useValue:this.componentFactoryResolver}],t.parent||Xi(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function _s(e,t,n=null){return new Wr({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var co=(()=>{class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Y(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Is(e,t,n){let r=e[t];return Object.is(r,n)?!1:(e[t]=n,!0)}function Sm(e){return(e.flags&32)===32}function As(e,t,n,r){let o=Z(),i=kl();if(Is(o,i,t)){let s=Ct(),a=dh();Lg(a,o,e,t,n,r)}return As}function Tm(e,t,n,r){return Is(e,kl(),n)?t+Kr(n)+r:Kt}function Ir(e,t){return e<<17|t<<2}function mt(e){return e>>17&32767}function Om(e){return(e&2)==2}function Pm(e,t){return e&131071|t<<17}function Bi(e){return e|2}function Zt(e){return(e&131068)>>2}function ci(e,t){return e&-131069|t<<2}function Nm(e){return(e&1)===1}function Ui(e){return e|1}function Rm(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=mt(s),u=Zt(s);e[r]=n;let l=!1,f;if(Array.isArray(n)){let h=n;f=h[1],(f===null||_n(h,f)>0)&&(l=!0)}else f=n;if(o)if(u!==0){let v=mt(e[a+1]);e[r+1]=Ir(v,a),v!==0&&(e[v+1]=ci(e[v+1],r)),e[a+1]=Pm(e[a+1],r)}else e[r+1]=Ir(a,0),a!==0&&(e[a+1]=ci(e[a+1],r)),a=r;else e[r+1]=Ir(u,0),a===0?a=r:e[u+1]=ci(e[u+1],r),u=r;l&&(e[r+1]=Bi(e[r+1])),qu(e,f,r,!0),qu(e,f,r,!1),km(t,f,e,r,i),s=Ir(a,u),i?t.classBindings=s:t.styleBindings=s}function km(e,t,n,r,o){let i=o?e.residualClasses:e.residualStyles;i!=null&&typeof t=="string"&&_n(i,t)>=0&&(n[r+1]=Ui(n[r+1]))}function qu(e,t,n,r){let o=e[n+1],i=t===null,s=r?mt(o):Zt(o),a=!1;for(;s!==0&&(a===!1||i);){let u=e[s],l=e[s+1];Fm(u,t)&&(a=!0,e[s+1]=r?Ui(l):Bi(l)),s=r?mt(l):Zt(l)}a&&(e[n+1]=r?Bi(o):Ui(o))}function Fm(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?_n(e,t)>=0:!1}function Gu(e,t,n,r,o){let i=t.inputs,s=o?"class":"style";Lc(e,n,i[s],s,r)}function Ss(e,t){return Lm(e,t,null,!0),Ss}function Lm(e,t,n,r){let o=Z(),i=Ct(),s=ih(2);if(i.firstUpdatePass&&Vm(i,e,s,r),t!==Kt&&Is(o,s,t)){let a=i.data[Yt()];zm(i,a,o,o[ee],e,o[s+1]=qm(t,n),r,s)}}function jm(e,t){return t>=e.expandoStartIndex}function Vm(e,t,n,r){let o=e.data;if(o[n+1]===null){let i=o[Yt()],s=jm(e,n);Gm(i,r)&&t===null&&!s&&(t=!1),t=$m(o,i,t,r),Rm(o,i,t,n,s,r)}}function $m(e,t,n,r){let o=lh(e),i=r?t.residualClasses:t.residualStyles;if(o===null)(r?t.classBindings:t.styleBindings)===0&&(n=di(null,e,t,n,r),n=Mn(n,t.attrs,r),i=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==o)if(n=di(o,e,t,n,r),i===null){let u=Hm(e,t,r);u!==void 0&&Array.isArray(u)&&(u=di(null,e,t,u[1],r),u=Mn(u,t.attrs,r),Bm(e,t,r,u))}else i=Um(e,t,r)}return i!==void 0&&(r?t.residualClasses=i:t.residualStyles=i),n}function Hm(e,t,n){let r=n?t.classBindings:t.styleBindings;if(Zt(r)!==0)return e[mt(r)]}function Bm(e,t,n,r){let o=n?t.classBindings:t.styleBindings;e[mt(o)]=r}function Um(e,t,n){let r,o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++){let s=e[i].hostAttrs;r=Mn(r,s,n)}return Mn(r,t.attrs,n)}function di(e,t,n,r,o){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=t[a],r=Mn(r,i.hostAttrs,o),i!==e);)a++;return e!==null&&(n.directiveStylingLast=a),r}function Mn(e,t,n){let r=n?1:2,o=-1;if(t!==null)for(let i=0;i<t.length;i++){let s=t[i];typeof s=="number"?o=s:o===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),lp(e,s,n?!0:t[++i]))}return e===void 0?null:e}function zm(e,t,n,r,o,i,s,a){if(!(t.type&3))return;let u=e.data,l=u[a+1],f=Nm(l)?Wu(u,t,n,o,Zt(l),s):void 0;if(!Zr(f)){Zr(i)||Om(l)&&(i=Wu(u,null,n,o,a,s));let h=Al(Yt(),n);hg(r,s,h,o,i)}}function Wu(e,t,n,r,o,i){let s=t===null,a;for(;o>0;){let u=e[o],l=Array.isArray(u),f=l?u[1]:u,h=f===null,v=n[o+1];v===Kt&&(v=h?ct:void 0);let g=h?ei(v,r):f===r?v:void 0;if(l&&!Zr(g)&&(g=ei(u,r)),Zr(g)&&(a=g,s))return a;let w=e[o+1];o=s?mt(w):Zt(w)}if(t!==null){let u=i?t.residualClasses:t.residualStyles;u!=null&&(a=ei(u,r))}return a}function Zr(e){return e!==void 0}function qm(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=re(Pn(e)))),e}function Gm(e,t){return(e.flags&(t?8:16))!==0}function Wm(e,t,n,r,o,i){let s=t.consts,a=Mu(s,o),u=Ds(t,e,2,r,a);return _g(t,n,u,Mu(s,i)),u.attrs!==null&&Li(u,u.attrs,!1),u.mergedAttrs!==null&&Li(u,u.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,u),u}function c(e,t,n,r){let o=Z(),i=Ct(),s=pt+e,a=o[ee],u=i.firstCreatePass?Wm(s,i,o,t,n,r):i.data[s],l=Zm(i,o,u,a,t,e);o[s]=l;let f=bl(u);return oo(u,!0),Mc(a,l,u),!Sm(u)&&Ul()&&xc(i,o,l,u),Qp()===0&&Gt(l,o),Kp(),f&&(yg(i,o,u),Tc(i,u,o)),r!==null&&Cg(o,u),c}function d(){let e=Ie();Rl()?rh():(e=e.parent,oo(e,!1));let t=e;eh(t)&&th(),Jp();let n=Ct();return n.firstCreatePass&&(ql(n,e),xl(e)&&n.queries.elementEnd(e)),t.classesWithoutHost!=null&&mh(t)&&Gu(n,t,Z(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&vh(t)&&Gu(n,t,Z(),t.stylesWithoutHost,!1),d}function m(e,t,n,r){return c(e,t,n,r),d(),m}var Zm=(e,t,n,r,o,i)=>(zl(!0),vc(r,o,fh()));var Yr="en-US";var Ym=Yr;function Qm(e){typeof e=="string"&&(Ym=e.toLowerCase().replace(/_/g,"-"))}function Je(e,t,n,r){let o=Z(),i=Ct(),s=Ie();return Jm(i,o,o[ee],s,e,t,r),Je}function Km(e,t,n,r){let o=e.cleanup;if(o!=null)for(let i=0;i<o.length-1;i+=2){let s=o[i];if(s===n&&o[i+1]===r){let a=t[mn],u=o[i+2];return a.length>u?a[u]:null}typeof s=="string"&&(i+=2)}return null}function Jm(e,t,n,r,o,i,s){let a=bl(r),l=e.firstCreatePass&&Ug(e),f=t[Ve],h=Bg(t),v=!0;if(r.type&3||s){let I=_e(r,t),H=s?s(I):I,$=h.length,rt=s?Fe=>s(Ne(Fe[r.index])):r.index,te=null;if(!s&&a&&(te=Km(e,t,o,r.index)),te!==null){let Fe=te.__ngLastListenerFn__||te;Fe.__ngNextListenerFn__=i,te.__ngLastListenerFn__=i,v=!1}else{i=Yu(r,t,f,i,!1);let Fe=n.listen(H,o,i);h.push(i,Fe),l&&l.push(o,rt,$,$+1)}}else i=Yu(r,t,f,i,!1);let g=r.outputs,w;if(v&&g!==null&&(w=g[o])){let I=w.length;if(I)for(let H=0;H<I;H+=2){let $=w[H],rt=w[H+1],Mt=t[$][rt].subscribe(i),me=h.length;h.push(i,Mt),l&&l.push(o,r.index,me,-(me+1))}}}function Zu(e,t,n,r){let o=L(null);try{return Se(6,t,n),n(r)!==!1}catch(i){return Fc(e,i),!1}finally{Se(7,t,n),L(o)}}function Yu(e,t,n,r,o){return function i(s){if(s===Function)return r;let a=e.componentOffset>-1?yt(e.index,t):t;bs(a);let u=Zu(t,n,r,s),l=i.__ngNextListenerFn__;for(;l;)u=Zu(t,n,l,s)&&u,l=l.__ngNextListenerFn__;return o&&u===!1&&s.preventDefault(),u}}function p(e,t=""){let n=Z(),r=Ct(),o=e+pt,i=r.firstCreatePass?Ds(r,o,1,t,null):r.data[o],s=Xm(r,n,i,t,e);n[o]=s,Ul()&&xc(r,n,s,i),oo(i,!1)}var Xm=(e,t,n,r,o)=>(zl(!0),Yh(t[ee],r));function Ts(e,t,n){let r=Z(),o=Tm(r,e,t,n);return o!==Kt&&zg(r,Yt(),o),Ts}var e0=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let r=vl(!1,n.type),o=r.length>0?_s([r],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=M({token:e,providedIn:"environment",factory:()=>new e(R(pe))})}}return e})();function ie(e){qc("NgStandalone"),e.getStandaloneInjector=t=>t.get(e0).getOrCreateStandaloneInjector(e)}var fo=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"})}}return e})();var Zc=new N("");function Nn(e){return!!e&&typeof e.then=="function"}function Yc(e){return!!e&&typeof e.subscribe=="function"}var Qc=new N(""),Kc=(()=>{class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r}),this.appInits=y(Qc,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let i=o();if(Nn(i))n.push(i);else if(Yc(i)){let s=new Promise((a,u)=>{i.subscribe({complete:a,error:u})});n.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),n.length===0&&r(),this.initialized=!0}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Os=new N("");function t0(){ja(()=>{throw new D(600,!1)})}function n0(e){return e.isBoundToModule}function r0(e,t,n){try{let r=n();return Nn(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}var Rn=(()=>{class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=y(oc),this.afterRenderEffectManager=y(Gc),this.externalTestViews=new Set,this.beforeRender=new J,this.afterTick=new J,this.componentTypes=[],this.components=[],this.isStable=y(co).hasPendingTasks.pipe(O(n=>!n)),this._injector=y(pe)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){let o=n instanceof qr;if(!this._injector.get(Kc).done){let v=!o&&pl(n),g=!1;throw new D(405,g)}let s;o?s=n:s=this._injector.get(ao).resolveComponentFactory(n),this.componentTypes.push(s.componentType);let a=n0(s)?void 0:this._injector.get(Qe),u=r||s.selector,l=s.create(Tn.NULL,[],u,a),f=l.location.nativeElement,h=l.injector.get(Zc,null);return h?.registerApplication(f),l.onDestroy(()=>{this.detachView(l.hostView),fi(this.components,l),h?.unregisterApplication(f)}),this._loadComponent(l),l}tick(){this._tick(!0)}_tick(n){if(this._runningTick)throw new D(101,!1);let r=L(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(n)}catch(o){this.internalErrorHandler(o)}finally{this.afterTick.next(),this._runningTick=!1,L(r)}}detectChangesInAttachedViews(n){let r=0,o=this.afterRenderEffectManager;for(;;){if(r===$c)throw new D(103,!1);if(n){let i=r===0;this.beforeRender.next(i);for(let{_lView:s,notifyErrorHandler:a}of this._views)o0(s,i,a)}if(r++,o.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:i})=>zi(i))&&(o.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:i})=>zi(i))))break}}attachView(n){let r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){let r=n;fi(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n);let r=this._injector.get(Os,[]);[...this._bootstrapListeners,...r].forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>fi(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new D(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function fi(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function o0(e,t,n){!t&&!zi(e)||i0(e,n,t)}function zi(e){return os(e)}function i0(e,t,n){let r;n?(r=0,e[b]|=1024):e[b]&64?r=0:r=1,Hc(e,t,r)}var qi=class{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Ps=(()=>{class e{compileModuleSync(n){return new Hi(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let r=this.compileModuleSync(n),o=hl(n),i=mc(o.declarations).reduce((s,a)=>{let u=dt(a);return u&&s.push(new bn(u)),s},[]);return new qi(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var s0=(()=>{class e{constructor(){this.zone=y(U),this.applicationRef=y(Rn)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function a0(e){return[{provide:U,useFactory:e},{provide:zt,multi:!0,useFactory:()=>{let t=y(s0,{optional:!0});return()=>t.initialize()}},{provide:zt,multi:!0,useFactory:()=>{let t=y(d0);return()=>{t.initialize()}}},{provide:oc,useFactory:u0}]}function u0(){let e=y(U),t=y($e);return n=>e.runOutsideAngular(()=>t.handleError(n))}function l0(e){let t=a0(()=>new U(c0(e)));return eo([[],t])}function c0(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var d0=(()=>{class e{constructor(){this.subscription=new z,this.initialized=!1,this.zone=y(U),this.pendingTasks=y(co)}initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{U.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{U.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function f0(){return typeof $localize<"u"&&$localize.locale||Yr}var Ns=new N("",{providedIn:"root",factory:()=>y(Ns,A.Optional|A.SkipSelf)||f0()});var Jc=new N("");var Pr=null;function p0(e=[],t){return Tn.create({name:t,providers:[{provide:to,useValue:"platform"},{provide:Jc,useValue:new Set([()=>Pr=null])},...e]})}function h0(e=[]){if(Pr)return Pr;let t=p0(e);return Pr=t,t0(),g0(t),t}function g0(e){e.get(fs,null)?.forEach(n=>n())}var kn=(()=>{class e{static{this.__NG_ELEMENT_ID__=m0}}return e})();function m0(e){return v0(Ie(),Z(),(e&16)===16)}function v0(e,t,n){if(ns(e)&&!n){let r=yt(e.index,t);return new Wt(r,r)}else if(e.type&47){let r=t[Pe];return new Wt(r,t)}return null}function Xc(e){try{let{rootComponent:t,appProviders:n,platformProviders:r}=e,o=h0(r),i=[l0(),...n||[]],a=new Wr({providers:i,parent:o,debugName:"",runEnvironmentInitializers:!1}).injector,u=a.get(U);return u.run(()=>{a.resolveInjectorInitializers();let l=a.get($e,null),f;u.runOutsideAngular(()=>{f=u.onError.subscribe({next:g=>{l.handleError(g)}})});let h=()=>a.destroy(),v=o.get(Jc);return v.add(h),a.onDestroy(()=>{f.unsubscribe(),v.delete(h)}),r0(l,u,()=>{let g=a.get(Kc);return g.runInitializers(),g.donePromise.then(()=>{let w=a.get(Ns,Yr);Qm(w||Yr);let I=a.get(Rn);return t!==void 0&&I.bootstrap(t),I})})})}catch(t){return Promise.reject(t)}}function Fn(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}var id=null;function Jt(){return id}function sd(e){id??=e}var po=class{};var he=new N(""),ad=(()=>{class e{historyGo(n){throw new Error("")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>y(y0),providedIn:"platform"})}}return e})();var y0=(()=>{class e extends ad{constructor(){super(),this._doc=y(he),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Jt().getBaseHref(this._doc)}onPopState(n){let r=Jt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=Jt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,o){this._history.pushState(n,r,o)}replaceState(n,r,o){this._history.replaceState(n,r,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>new e,providedIn:"platform"})}}return e})();function ud(e,t){if(e.length==0)return t;if(t.length==0)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,n==2?e+t.substring(1):n==1?e+t:e+"/"+t}function ed(e){let t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-(e[n-1]==="/"?1:0);return e.slice(0,r)+e.slice(n)}function wt(e){return e&&e[0]!=="?"?"?"+e:e}var Xt=(()=>{class e{historyGo(n){throw new Error("")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>y(ld),providedIn:"root"})}}return e})(),C0=new N(""),ld=(()=>{class e extends Xt{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??y(he).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ud(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+wt(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${r}${o}`:r}pushState(n,r,o,i){let s=this.prepareExternalUrl(o+wt(i));this._platformLocation.pushState(n,r,s)}replaceState(n,r,o,i){let s=this.prepareExternalUrl(o+wt(i));this._platformLocation.replaceState(n,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static{this.\u0275fac=function(r){return new(r||e)(R(ad),R(C0,8))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ln=(()=>{class e{constructor(n){this._subject=new De,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=x0(ed(td(r))),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+wt(r))}normalize(n){return e.stripTrailingSlash(D0(this._basePath,td(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",o=null){this._locationStrategy.pushState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+wt(r)),o)}replaceState(n,r="",o=null){this._locationStrategy.replaceState(o,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+wt(r)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(o=>o(n,r))}subscribe(n,r,o){return this._subject.subscribe({next:n,error:r,complete:o})}static{this.normalizeQueryParams=wt}static{this.joinWithSlash=ud}static{this.stripTrailingSlash=ed}static{this.\u0275fac=function(r){return new(r||e)(R(Xt))}}static{this.\u0275prov=M({token:e,factory:()=>w0(),providedIn:"root"})}}return e})();function w0(){return new Ln(R(Xt))}function D0(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function td(e){return e.replace(/\/index.html$/,"")}function x0(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}function cd(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let r=n.indexOf("="),[o,i]=r==-1?[n,""]:[n.slice(0,r),n.slice(r+1)];if(o.trim()===t)return decodeURIComponent(i)}return null}var dd="browser",b0="server";function Rs(e){return e===b0}var ho=class{};var Ls=class extends po{constructor(){super(...arguments),this.supportsDOMEvents=!0}},js=class e extends Ls{static makeCurrent(){sd(new e)}onAndCancel(t,n,r){return t.addEventListener(n,r),()=>{t.removeEventListener(n,r)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=_0();return n==null?null:I0(n)}resetBaseElement(){jn=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return cd(document.cookie,t)}},jn=null;function _0(){return jn=jn||document.querySelector("base"),jn?jn.getAttribute("href"):null}function I0(e){return new URL(e,document.baseURI).pathname}var A0=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac})}}return e})(),Vs=new N(""),gd=(()=>{class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(i=>i.supports(n)),!r)throw new D(5101,!1);return this._eventNameToPlugin.set(n,r),r}static{this.\u0275fac=function(r){return new(r||e)(R(Vs),R(U))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac})}}return e})(),go=class{constructor(t){this._doc=t}},ks="ng-app-id",md=(()=>{class e{constructor(n,r,o,i={}){this.doc=n,this.appId=r,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Rs(i),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(o=>o.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${ks}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(n,r){let o=this.styleRef;if(o.has(n)){let i=o.get(n);return i.usage+=r,i.usage}return o.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let o=this.styleNodesInDOM,i=o?.get(r);if(i?.parentNode===n)return o.delete(r),i.removeAttribute(ks),i;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=r,this.platformIsServer&&s.setAttribute(ks,this.appId),n.appendChild(s),s}}addStyleToHost(n,r){let o=this.getStyleElement(n,r),i=this.styleRef,s=i.get(r)?.elements;s?s.push(o):i.set(r,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}static{this.\u0275fac=function(r){return new(r||e)(R(he),R(ds),R(ps,8),R(Qt))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac})}}return e})(),Fs={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Hs=/%COMP%/g,vd="%COMP%",S0=`_nghost-${vd}`,T0=`_ngcontent-${vd}`,O0=!0,P0=new N("",{providedIn:"root",factory:()=>O0});function N0(e){return T0.replace(Hs,e)}function R0(e){return S0.replace(Hs,e)}function yd(e,t){return t.map(n=>n.replace(Hs,e))}var fd=(()=>{class e{constructor(n,r,o,i,s,a,u,l=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.platformId=a,this.ngZone=u,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Rs(a),this.defaultRenderer=new Vn(n,s,u,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Oe.ShadowDom&&(r=B(C({},r),{encapsulation:Oe.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof mo?o.applyToHost(n):o instanceof $n&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,i=o.get(r.id);if(!i){let s=this.doc,a=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Oe.Emulated:i=new mo(u,l,r,this.appId,f,s,a,h);break;case Oe.ShadowDom:return new $s(u,l,n,r,s,a,this.nonce,h);default:i=new $n(u,l,r,f,s,a,h);break}o.set(r.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(r){return new(r||e)(R(gd),R(md),R(ds),R(P0),R(he),R(Qt),R(U),R(ps))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac})}}return e})(),Vn=class{constructor(t,n,r,o){this.eventManager=t,this.doc=n,this.ngZone=r,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,n){return n?this.doc.createElementNS(Fs[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(pd(t)?t.content:t).appendChild(n)}insertBefore(t,n,r){t&&(pd(t)?t.content:t).insertBefore(n,r)}removeChild(t,n){t&&t.removeChild(n)}selectRootElement(t,n){let r=typeof t=="string"?this.doc.querySelector(t):t;if(!r)throw new D(-5104,!1);return n||(r.textContent=""),r}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,r,o){if(o){n=o+":"+n;let i=Fs[o];i?t.setAttributeNS(i,n,r):t.setAttribute(n,r)}else t.setAttribute(n,r)}removeAttribute(t,n,r){if(r){let o=Fs[r];o?t.removeAttributeNS(o,n):t.removeAttribute(`${r}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,r,o){o&(He.DashCase|He.Important)?t.style.setProperty(n,r,o&He.Important?"important":""):t.style[n]=r}removeStyle(t,n,r){r&He.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,r){t!=null&&(t[n]=r)}setValue(t,n){t.nodeValue=n}listen(t,n,r){if(typeof t=="string"&&(t=Jt().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${n}`);return this.eventManager.addEventListener(t,n,this.decoratePreventDefault(r))}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(n)):t(n))===!1&&n.preventDefault()}}};function pd(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var $s=class extends Vn{constructor(t,n,r,o,i,s,a,u){super(t,i,s,u),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=yd(o.id,o.styles);for(let f of l){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,r){return super.insertBefore(this.nodeOrShadowRoot(t),n,r)}removeChild(t,n){return super.removeChild(this.nodeOrShadowRoot(t),n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},$n=class extends Vn{constructor(t,n,r,o,i,s,a,u){super(t,i,s,a),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o,this.styles=u?yd(u,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},mo=class extends $n{constructor(t,n,r,o,i,s,a,u){let l=o+"-"+r.id;super(t,n,r,i,s,a,u,l),this.contentAttr=N0(l),this.hostAttr=R0(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let r=super.createElement(t,n);return super.setAttribute(r,this.contentAttr,""),r}},k0=(()=>{class e extends go{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}static{this.\u0275fac=function(r){return new(r||e)(R(he))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac})}}return e})(),hd=["alt","control","meta","shift"],F0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},L0={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},j0=(()=>{class e extends go{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o){let i=e.parseEventName(r),s=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Jt().onAndCancel(n,i.domEventName,s))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),hd.forEach(l=>{let f=r.indexOf(l);f>-1&&(r.splice(f,1),s+=l+".")}),s+=i,r.length!=0||i.length===0)return null;let u={};return u.domEventName=o,u.fullKey=s,u}static matchEventFullKeyCode(n,r){let o=F0[n.key]||n.key,i="";return r.indexOf("code.")>-1&&(o=n.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),hd.forEach(s=>{if(s!==o){let a=L0[s];a(n)&&(i+=s+".")}}),i+=o,i===r)}static eventCallback(n,r,o){return i=>{e.matchEventFullKeyCode(i,n)&&o.runGuarded(()=>r(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static{this.\u0275fac=function(r){return new(r||e)(R(he))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac})}}return e})();function Cd(e,t){return Xc(C({rootComponent:e},V0(t)))}function V0(e){return{appProviders:[...z0,...e?.providers??[]],platformProviders:U0}}function $0(){js.makeCurrent()}function H0(){return new $e}function B0(){return dc(document),document}var U0=[{provide:Qt,useValue:dd},{provide:fs,useValue:$0,multi:!0},{provide:he,useFactory:B0,deps:[]}];var z0=[{provide:to,useValue:"root"},{provide:$e,useFactory:H0,deps:[]},{provide:Vs,useClass:k0,multi:!0,deps:[he,U,Qt]},{provide:Vs,useClass:j0,multi:!0,deps:[he]},fd,md,gd,{provide:xn,useExisting:fd},{provide:ho,useClass:A0,deps:[]},[]];var wd=(()=>{class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static{this.\u0275fac=function(r){return new(r||e)(R(he))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var _="primary",tr=Symbol("RouteTitle"),Gs=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function on(e){return new Gs(e)}function G0(e,t,n){let r=n.path.split("/");if(r.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||r.length<e.length))return null;let o={};for(let i=0;i<r.length;i++){let s=r[i],a=e[i];if(s.startsWith(":"))o[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function W0(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Re(e[n],t[n]))return!1;return!0}function Re(e,t){let n=e?Ws(e):void 0,r=t?Ws(t):void 0;if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!_d(e[o],t[o]))return!1;return!0}function Ws(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function _d(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),r=[...t].sort();return n.every((o,i)=>r[i]===o)}else return e===t}function Id(e){return e.length>0?e[e.length-1]:null}function nt(e){return Wo(e)?e:Nn(e)?q(Promise.resolve(e)):E(e)}var Z0={exact:Sd,subset:Td},Ad={exact:Y0,subset:Q0,ignored:()=>!0};function Dd(e,t,n){return Z0[n.paths](e.root,t.root,n.matrixParams)&&Ad[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function Y0(e,t){return Re(e,t)}function Sd(e,t,n){if(!xt(e.segments,t.segments)||!Co(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let r in t.children)if(!e.children[r]||!Sd(e.children[r],t.children[r],n))return!1;return!0}function Q0(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>_d(e[n],t[n]))}function Td(e,t,n){return Od(e,t,t.segments,n)}function Od(e,t,n,r){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!xt(o,n)||t.hasChildren()||!Co(o,n,r))}else if(e.segments.length===n.length){if(!xt(e.segments,n)||!Co(e.segments,n,r))return!1;for(let o in t.children)if(!e.children[o]||!Td(e.children[o],t.children[o],r))return!1;return!0}else{let o=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!xt(e.segments,o)||!Co(e.segments,o,r)||!e.children[_]?!1:Od(e.children[_],t,i,r)}}function Co(e,t,n){return t.every((r,o)=>Ad[n](e[o].parameters,r.parameters))}var Xe=class{constructor(t=new F([],{}),n={},r=null){this.root=t,this.queryParams=n,this.fragment=r}get queryParamMap(){return this._queryParamMap??=on(this.queryParams),this._queryParamMap}toString(){return X0.serialize(this)}},F=class{constructor(t,n){this.segments=t,this.children=n,this.parent=null,Object.values(n).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return wo(this)}},Dt=class{constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=on(this.parameters),this._parameterMap}toString(){return Nd(this)}};function K0(e,t){return xt(e,t)&&e.every((n,r)=>Re(n.parameters,t[r].parameters))}function xt(e,t){return e.length!==t.length?!1:e.every((n,r)=>n.path===t[r].path)}function J0(e,t){let n=[];return Object.entries(e.children).forEach(([r,o])=>{r===_&&(n=n.concat(t(o,r)))}),Object.entries(e.children).forEach(([r,o])=>{r!==_&&(n=n.concat(t(o,r)))}),n}var Ca=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>new xo,providedIn:"root"})}}return e})(),xo=class{parse(t){let n=new Ys(t);return new Xe(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${Hn(t.root,!0)}`,r=nv(t.queryParams),o=typeof t.fragment=="string"?`#${ev(t.fragment)}`:"";return`${n}${r}${o}`}},X0=new xo;function wo(e){return e.segments.map(t=>Nd(t)).join("/")}function Hn(e,t){if(!e.hasChildren())return wo(e);if(t){let n=e.children[_]?Hn(e.children[_],!1):"",r=[];return Object.entries(e.children).forEach(([o,i])=>{o!==_&&r.push(`${o}:${Hn(i,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}else{let n=J0(e,(r,o)=>o===_?[Hn(e.children[_],!1)]:[`${o}:${Hn(r,!1)}`]);return Object.keys(e.children).length===1&&e.children[_]!=null?`${wo(e)}/${n[0]}`:`${wo(e)}/(${n.join("//")})`}}function Pd(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vo(e){return Pd(e).replace(/%3B/gi,";")}function ev(e){return encodeURI(e)}function Zs(e){return Pd(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Do(e){return decodeURIComponent(e)}function xd(e){return Do(e.replace(/\+/g,"%20"))}function Nd(e){return`${Zs(e.path)}${tv(e.parameters)}`}function tv(e){return Object.entries(e).map(([t,n])=>`;${Zs(t)}=${Zs(n)}`).join("")}function nv(e){let t=Object.entries(e).map(([n,r])=>Array.isArray(r)?r.map(o=>`${vo(n)}=${vo(o)}`).join("&"):`${vo(n)}=${vo(r)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var rv=/^[^\/()?;#]+/;function Bs(e){let t=e.match(rv);return t?t[0]:""}var ov=/^[^\/()?;=#]+/;function iv(e){let t=e.match(ov);return t?t[0]:""}var sv=/^[^=?&#]+/;function av(e){let t=e.match(sv);return t?t[0]:""}var uv=/^[^&#]+/;function lv(e){let t=e.match(uv);return t?t[0]:""}var Ys=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new F([],{}):new F([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(r[_]=new F(t,n)),r}parseSegment(){let t=Bs(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(t),new Dt(Do(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=iv(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let o=Bs(this.remaining);o&&(r=o,this.capture(r))}t[Do(n)]=Do(r)}parseQueryParam(t){let n=av(this.remaining);if(!n)return;this.capture(n);let r="";if(this.consumeOptional("=")){let s=lv(this.remaining);s&&(r=s,this.capture(r))}let o=xd(n),i=xd(r);if(t.hasOwnProperty(o)){let s=t[o];Array.isArray(s)||(s=[s],t[o]=s),s.push(i)}else t[o]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Bs(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let i;r.indexOf(":")>-1?(i=r.slice(0,r.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=_);let s=this.parseChildren();n[i]=Object.keys(s).length===1?s[_]:new F([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new D(4011,!1)}};function Rd(e){return e.segments.length>0?new F([],{[_]:e}):e}function kd(e){let t={};for(let[r,o]of Object.entries(e.children)){let i=kd(o);if(r===_&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))t[s]=a;else(i.segments.length>0||i.hasChildren())&&(t[r]=i)}let n=new F(e.segments,t);return cv(n)}function cv(e){if(e.numberOfChildren===1&&e.children[_]){let t=e.children[_];return new F(e.segments.concat(t.segments),t.children)}return e}function sn(e){return e instanceof Xe}function dv(e,t,n=null,r=null){let o=Fd(e);return Ld(o,t,n,r)}function Fd(e){let t;function n(i){let s={};for(let u of i.children){let l=n(u);s[u.outlet]=l}let a=new F(i.url,s);return i===e&&(t=a),a}let r=n(e.root),o=Rd(r);return t??o}function Ld(e,t,n,r){let o=e;for(;o.parent;)o=o.parent;if(t.length===0)return Us(o,o,o,n,r);let i=fv(t);if(i.toRoot())return Us(o,o,new F([],{}),n,r);let s=pv(i,o,e),a=s.processChildren?zn(s.segmentGroup,s.index,i.commands):Vd(s.segmentGroup,s.index,i.commands);return Us(o,s.segmentGroup,a,n,r)}function bo(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Wn(e){return typeof e=="object"&&e!=null&&e.outlets}function Us(e,t,n,r,o){let i={};r&&Object.entries(r).forEach(([u,l])=>{i[u]=Array.isArray(l)?l.map(f=>`${f}`):`${l}`});let s;e===t?s=n:s=jd(e,t,n);let a=Rd(kd(s));return new Xe(a,i,o)}function jd(e,t,n){let r={};return Object.entries(e.children).forEach(([o,i])=>{i===t?r[o]=n:r[o]=jd(i,t,n)}),new F(e.segments,r)}var Eo=class{constructor(t,n,r){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=r,t&&r.length>0&&bo(r[0]))throw new D(4003,!1);let o=r.find(Wn);if(o&&o!==Id(r))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function fv(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Eo(!0,0,e);let t=0,n=!1,r=e.reduce((o,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([u,l])=>{a[u]=typeof l=="string"?l.split("/"):l}),[...o,{outlets:a}]}if(i.segmentPath)return[...o,i.segmentPath]}return typeof i!="string"?[...o,i]:s===0?(i.split("/").forEach((a,u)=>{u==0&&a==="."||(u==0&&a===""?n=!0:a===".."?t++:a!=""&&o.push(a))}),o):[...o,i]},[]);return new Eo(n,t,r)}var nn=class{constructor(t,n,r){this.segmentGroup=t,this.processChildren=n,this.index=r}};function pv(e,t,n){if(e.isAbsolute)return new nn(t,!0,0);if(!n)return new nn(t,!1,NaN);if(n.parent===null)return new nn(n,!0,0);let r=bo(e.commands[0])?0:1,o=n.segments.length-1+r;return hv(n,o,e.numberOfDoubleDots)}function hv(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new D(4005,!1);o=r.segments.length}return new nn(r,!1,o-i)}function gv(e){return Wn(e[0])?e[0].outlets:{[_]:e}}function Vd(e,t,n){if(e??=new F([],{}),e.segments.length===0&&e.hasChildren())return zn(e,t,n);let r=mv(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){let i=new F(e.segments.slice(0,r.pathIndex),{});return i.children[_]=new F(e.segments.slice(r.pathIndex),e.children),zn(i,0,o)}else return r.match&&o.length===0?new F(e.segments,{}):r.match&&!e.hasChildren()?Qs(e,t,n):r.match?zn(e,0,o):Qs(e,t,n)}function zn(e,t,n){if(n.length===0)return new F(e.segments,{});{let r=gv(n),o={};if(Object.keys(r).some(i=>i!==_)&&e.children[_]&&e.numberOfChildren===1&&e.children[_].segments.length===0){let i=zn(e.children[_],t,n);return new F(e.segments,i.children)}return Object.entries(r).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(o[i]=Vd(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{r[i]===void 0&&(o[i]=s)}),new F(e.segments,o)}}function mv(e,t,n){let r=0,o=t,i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;let s=e.segments[o],a=n[r];if(Wn(a))break;let u=`${a}`,l=r<n.length-1?n[r+1]:null;if(o>0&&u===void 0)break;if(u&&l&&typeof l=="object"&&l.outlets===void 0){if(!Ed(u,l,s))return i;r+=2}else{if(!Ed(u,{},s))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}function Qs(e,t,n){let r=e.segments.slice(0,t),o=0;for(;o<n.length;){let i=n[o];if(Wn(i)){let u=vv(i.outlets);return new F(r,u)}if(o===0&&bo(n[0])){let u=e.segments[t];r.push(new Dt(u.path,bd(n[0]))),o++;continue}let s=Wn(i)?i.outlets[_]:`${i}`,a=o<n.length-1?n[o+1]:null;s&&a&&bo(a)?(r.push(new Dt(s,bd(a))),o+=2):(r.push(new Dt(s,{})),o++)}return new F(r,{})}function vv(e){let t={};return Object.entries(e).forEach(([n,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(t[n]=Qs(new F([],{}),0,r))}),t}function bd(e){let t={};return Object.entries(e).forEach(([n,r])=>t[n]=`${r}`),t}function Ed(e,t,n){return e==n.path&&Re(t,n.parameters)}var qn="imperative",K=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(K||{}),ge=class{constructor(t,n){this.id=t,this.url=n}},Zn=class extends ge{constructor(t,n,r="imperative",o=null){super(t,n),this.type=K.NavigationStart,this.navigationTrigger=r,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},et=class extends ge{constructor(t,n,r){super(t,n),this.urlAfterRedirects=r,this.type=K.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},le=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(le||{}),Ks=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(Ks||{}),tt=class extends ge{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=K.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},bt=class extends ge{constructor(t,n,r,o){super(t,n),this.reason=r,this.code=o,this.type=K.NavigationSkipped}},Yn=class extends ge{constructor(t,n,r,o){super(t,n),this.error=r,this.target=o,this.type=K.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Mo=class extends ge{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=K.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Js=class extends ge{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=K.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xs=class extends ge{constructor(t,n,r,o,i){super(t,n),this.urlAfterRedirects=r,this.state=o,this.shouldActivate=i,this.type=K.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ea=class extends ge{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=K.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ta=class extends ge{constructor(t,n,r,o){super(t,n),this.urlAfterRedirects=r,this.state=o,this.type=K.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},na=class{constructor(t){this.route=t,this.type=K.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ra=class{constructor(t){this.route=t,this.type=K.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},oa=class{constructor(t){this.snapshot=t,this.type=K.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ia=class{constructor(t){this.snapshot=t,this.type=K.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sa=class{constructor(t){this.snapshot=t,this.type=K.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},aa=class{constructor(t){this.snapshot=t,this.type=K.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Qn=class{},Kn=class{constructor(t){this.url=t}};var ua=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Oo,this.attachRef=null}},Oo=(()=>{class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){let o=this.getOrCreateContext(n);o.outlet=r,this.contexts.set(n,o)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new ua,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),_o=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=la(t,this._root);return n?n.children.map(r=>r.value):[]}firstChild(t){let n=la(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=ca(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return ca(t,this._root).map(n=>n.value)}};function la(e,t){if(e===t.value)return t;for(let n of t.children){let r=la(e,n);if(r)return r}return null}function ca(e,t){if(e===t.value)return[t];for(let n of t.children){let r=ca(e,n);if(r.length)return r.unshift(t),r}return[]}var ue=class{constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function tn(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var Io=class extends _o{constructor(t,n){super(t),this.snapshot=n,Da(this,t)}toString(){return this.snapshot.toString()}};function $d(e){let t=yv(e),n=new Y([new Dt("",{})]),r=new Y({}),o=new Y({}),i=new Y({}),s=new Y(""),a=new Et(n,r,i,s,o,_,e,t.root);return a.snapshot=t.root,new Io(new ue(a,[]),t)}function yv(e){let t={},n={},r={},o="",i=new Jn([],t,r,o,n,_,e,null,{});return new Ao("",new ue(i,[]))}var Et=class{constructor(t,n,r,o,i,s,a,u){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=r,this.fragmentSubject=o,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(O(l=>l[tr]))??E(void 0),this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(O(t=>on(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(O(t=>on(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wa(e,t,n="emptyOnly"){let r,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?r={params:C(C({},t.params),e.params),data:C(C({},t.data),e.data),resolve:C(C(C(C({},e.data),t.data),o?.data),e._resolvedData)}:r={params:C({},e.params),data:C({},e.data),resolve:C(C({},e.data),e._resolvedData??{})},o&&Bd(o)&&(r.resolve[tr]=o.title),r}var Jn=class{get title(){return this.data?.[tr]}constructor(t,n,r,o,i,s,a,u,l){this.url=t,this.params=n,this.queryParams=r,this.fragment=o,this.data=i,this.outlet=s,this.component=a,this.routeConfig=u,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=on(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=on(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(r=>r.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},Ao=class extends _o{constructor(t,n){super(n),this.url=t,Da(this,n)}toString(){return Hd(this._root)}};function Da(e,t){t.value._routerState=e,t.children.forEach(n=>Da(e,n))}function Hd(e){let t=e.children.length>0?` { ${e.children.map(Hd).join(", ")} } `:"";return`${e.value}${t}`}function zs(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Re(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Re(t.params,n.params)||e.paramsSubject.next(n.params),W0(t.url,n.url)||e.urlSubject.next(n.url),Re(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function da(e,t){let n=Re(e.params,t.params)&&K0(e.url,t.url),r=!e.parent!=!t.parent;return n&&!r&&(!e.parent||da(e.parent,t.parent))}function Bd(e){return typeof e.title=="string"||e.title===null}var nr=(()=>{class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=_,this.activateEvents=new De,this.deactivateEvents=new De,this.attachEvents=new De,this.detachEvents=new De,this.parentContexts=y(Oo),this.location=y(lo),this.changeDetector=y(kn),this.environmentInjector=y(pe),this.inputBinder=y(xa,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:o}=n.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=n;let o=this.location,s=n.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,u=new fa(n,a,o.injector);this.activated=o.createComponent(s,{index:o.length,injector:u,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275dir=Xr({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Sn]})}}return e})(),fa=class e{__ngOutletInjector(t){return new e(this.route,this.childContexts,t)}constructor(t,n,r){this.route=t,this.childContexts=n,this.parent=r}get(t,n){return t===Et?this.route:t===Oo?this.childContexts:this.parent.get(t,n)}},xa=new N("");function Cv(e,t,n){let r=Xn(e,t._root,n?n._root:void 0);return new Io(r,t)}function Xn(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let r=n.value;r._futureSnapshot=t.value;let o=wv(e,t,n);return new ue(r,o)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>Xn(e,a)),s}}let r=Dv(t.value),o=t.children.map(i=>Xn(e,i));return new ue(r,o)}}function wv(e,t,n){return t.children.map(r=>{for(let o of n.children)if(e.shouldReuseRoute(r.value,o.value.snapshot))return Xn(e,r,o);return Xn(e,r)})}function Dv(e){return new Et(new Y(e.url),new Y(e.params),new Y(e.queryParams),new Y(e.fragment),new Y(e.data),e.outlet,e.component,e)}var Ud="ngNavigationCancelingError";function zd(e,t){let{redirectTo:n,navigationBehaviorOptions:r}=sn(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=qd(!1,le.Redirect);return o.url=n,o.navigationBehaviorOptions=r,o}function qd(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[Ud]=!0,n.cancellationCode=t,n}function xv(e){return Gd(e)&&sn(e.url)}function Gd(e){return!!e&&e[Ud]}var bv=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["ng-component"]],standalone:!0,features:[ie],decls:1,vars:0,template:function(r,o){r&1&&m(0,"router-outlet")},dependencies:[nr],encapsulation:2})}}return e})();function Ev(e,t){return e.providers&&!e._injector&&(e._injector=_s(e.providers,t,`Route: ${e.path}`)),e._injector??t}function ba(e){let t=e.children&&e.children.map(ba),n=t?B(C({},e),{children:t}):C({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==_&&(n.component=bv),n}function ke(e){return e.outlet||_}function Mv(e,t){let n=e.filter(r=>ke(r)===t);return n.push(...e.filter(r=>ke(r)!==t)),n}function rr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var _v=(e,t,n,r)=>O(o=>(new pa(t,o.targetRouterState,o.currentRouterState,n,r).activate(e),o)),pa=class{constructor(t,n,r,o,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=r,this.forwardEvent=o,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,r,t),zs(this.futureState.root),this.activateChildRoutes(n,r,t)}deactivateChildRoutes(t,n,r){let o=tn(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,o[s],r),delete o[s]}),Object.values(o).forEach(i=>{this.deactivateRouteAndItsChildren(i,r)})}deactivateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(o===i)if(o.component){let s=r.getContext(o.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,r);else i&&this.deactivateRouteAndItsChildren(n,r)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=tn(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let r=n.getContext(t.value.outlet),o=r&&t.value.component?r.children:n,i=tn(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,o);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(t,n,r){let o=tn(n);t.children.forEach(i=>{this.activateRoutes(i,o[i.value.outlet],r),this.forwardEvent(new aa(i.value.snapshot))}),t.children.length&&this.forwardEvent(new ia(t.value.snapshot))}activateRoutes(t,n,r){let o=t.value,i=n?n.value:null;if(zs(o),o===i)if(o.component){let s=r.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,r);else if(o.component){let s=r.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let a=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),zs(a.route.value),this.activateChildRoutes(t,null,s.children)}else{let a=rr(o.snapshot);s.attachRef=null,s.route=o,s.injector=a,s.outlet&&s.outlet.activateWith(o,s.injector),this.activateChildRoutes(t,null,s.children)}}else this.activateChildRoutes(t,null,r)}},So=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},rn=class{constructor(t,n){this.component=t,this.route=n}};function Iv(e,t,n){let r=e._root,o=t?t._root:null;return Bn(r,o,n,[r.value])}function Av(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function un(e,t){let n=Symbol(),r=t.get(e,n);return r===n?typeof e=="function"&&!Xu(e)?e:t.get(e):r}function Bn(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=tn(t);return e.children.forEach(s=>{Sv(s,i[s.value.outlet],n,r.concat([s.value]),o),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Gn(a,n.getContext(s),o)),o}function Sv(e,t,n,r,o={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let u=Tv(s,i,i.routeConfig.runGuardsAndResolvers);u?o.canActivateChecks.push(new So(r)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?Bn(e,t,a?a.children:null,r,o):Bn(e,t,n,r,o),u&&a&&a.outlet&&a.outlet.isActivated&&o.canDeactivateChecks.push(new rn(a.outlet.component,s))}else s&&Gn(t,a,o),o.canActivateChecks.push(new So(r)),i.component?Bn(e,null,a?a.children:null,r,o):Bn(e,null,n,r,o);return o}function Tv(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!xt(e.url,t.url);case"pathParamsOrQueryParamsChange":return!xt(e.url,t.url)||!Re(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!da(e,t)||!Re(e.queryParams,t.queryParams);case"paramsChange":default:return!da(e,t)}}function Gn(e,t,n){let r=tn(e),o=e.value;Object.entries(r).forEach(([i,s])=>{o.component?t?Gn(s,t.children.getContext(i),n):Gn(s,null,n):Gn(s,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new rn(t.outlet.component,o)):n.canDeactivateChecks.push(new rn(null,o)):n.canDeactivateChecks.push(new rn(null,o))}function or(e){return typeof e=="function"}function Ov(e){return typeof e=="boolean"}function Pv(e){return e&&or(e.canLoad)}function Nv(e){return e&&or(e.canActivate)}function Rv(e){return e&&or(e.canActivateChild)}function kv(e){return e&&or(e.canDeactivate)}function Fv(e){return e&&or(e.canMatch)}function Wd(e){return e instanceof Le||e?.name==="EmptyError"}var yo=Symbol("INITIAL_VALUE");function an(){return Ce(e=>br(e.map(t=>t.pipe(je(1),Jo(yo)))).pipe(O(t=>{for(let n of t)if(n!==!0){if(n===yo)return yo;if(n===!1||n instanceof Xe)return n}return!0}),ye(t=>t!==yo),je(1)))}function Lv(e,t){return G(n=>{let{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?E(B(C({},n),{guardsResult:!0})):jv(s,r,o,e).pipe(G(a=>a&&Ov(a)?Vv(r,i,e,t):E(a)),O(a=>B(C({},n),{guardsResult:a})))})}function jv(e,t,n,r){return q(e).pipe(G(o=>zv(o.component,o.route,n,t,r)),Ae(o=>o!==!0,!0))}function Vv(e,t,n,r){return q(t).pipe(Ft(o=>kt(Hv(o.route.parent,r),$v(o.route,r),Uv(e,o.path,n),Bv(e,o.route,n))),Ae(o=>o!==!0,!0))}function $v(e,t){return e!==null&&t&&t(new sa(e)),E(!0)}function Hv(e,t){return e!==null&&t&&t(new oa(e)),E(!0)}function Bv(e,t,n){let r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||r.length===0)return E(!0);let o=r.map(i=>Er(()=>{let s=rr(t)??n,a=un(i,s),u=Nv(a)?a.canActivate(t,e):vt(s,()=>a(t,e));return nt(u).pipe(Ae())}));return E(o).pipe(an())}function Uv(e,t,n){let r=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>Av(s)).filter(s=>s!==null).map(s=>Er(()=>{let a=s.guards.map(u=>{let l=rr(s.node)??n,f=un(u,l),h=Rv(f)?f.canActivateChild(r,e):vt(l,()=>f(r,e));return nt(h).pipe(Ae())});return E(a).pipe(an())}));return E(i).pipe(an())}function zv(e,t,n,r,o){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return E(!0);let s=i.map(a=>{let u=rr(t)??o,l=un(a,u),f=kv(l)?l.canDeactivate(e,t,n,r):vt(u,()=>l(e,t,n,r));return nt(f).pipe(Ae())});return E(s).pipe(an())}function qv(e,t,n,r){let o=t.canLoad;if(o===void 0||o.length===0)return E(!0);let i=o.map(s=>{let a=un(s,e),u=Pv(a)?a.canLoad(t,n):vt(e,()=>a(t,n));return nt(u)});return E(i).pipe(an(),Zd(r))}function Zd(e){return Uo(Q(t=>{if(sn(t))throw zd(e,t)}),O(t=>t===!0))}function Gv(e,t,n,r){let o=t.canMatch;if(!o||o.length===0)return E(!0);let i=o.map(s=>{let a=un(s,e),u=Fv(a)?a.canMatch(t,n):vt(e,()=>a(t,n));return nt(u)});return E(i).pipe(an(),Zd(r))}var er=class{constructor(t){this.segmentGroup=t||null}},To=class extends Error{constructor(t){super(),this.urlTree=t}};function en(e){return Rt(new er(e))}function Wv(e){return Rt(new D(4e3,!1))}function Zv(e){return Rt(qd(!1,le.GuardRejected))}var ha=class{constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let r=[],o=n.root;for(;;){if(r=r.concat(o.segments),o.numberOfChildren===0)return E(r);if(o.numberOfChildren>1||!o.children[_])return Wv(t.redirectTo);o=o.children[_]}}applyRedirectCommands(t,n,r){let o=this.applyRedirectCreateUrlTree(n,this.urlSerializer.parse(n),t,r);if(n.startsWith("/"))throw new To(o);return o}applyRedirectCreateUrlTree(t,n,r,o){let i=this.createSegmentGroup(t,n.root,r,o);return new Xe(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let r={};return Object.entries(t).forEach(([o,i])=>{if(typeof i=="string"&&i.startsWith(":")){let a=i.substring(1);r[o]=n[a]}else r[o]=i}),r}createSegmentGroup(t,n,r,o){let i=this.createSegments(t,n.segments,r,o),s={};return Object.entries(n.children).forEach(([a,u])=>{s[a]=this.createSegmentGroup(t,u,r,o)}),new F(i,s)}createSegments(t,n,r,o){return n.map(i=>i.path.startsWith(":")?this.findPosParam(t,i,o):this.findOrReturn(i,r))}findPosParam(t,n,r){let o=r[n.path.substring(1)];if(!o)throw new D(4001,!1);return o}findOrReturn(t,n){let r=0;for(let o of n){if(o.path===t.path)return n.splice(r),o;r++}return t}},ga={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Yv(e,t,n,r,o){let i=Ea(e,t,n);return i.matched?(r=Ev(t,r),Gv(r,t,n,o).pipe(O(s=>s===!0?i:C({},ga)))):E(i)}function Ea(e,t,n){if(t.path==="**")return Qv(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?C({},ga):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||G0)(n,e,t);if(!o)return C({},ga);let i={};Object.entries(o.posParams??{}).forEach(([a,u])=>{i[a]=u.path});let s=o.consumed.length>0?C(C({},i),o.consumed[o.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:s,positionalParamSegments:o.posParams??{}}}function Qv(e){return{matched:!0,parameters:e.length>0?Id(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function Md(e,t,n,r){return n.length>0&&Xv(e,n,r)?{segmentGroup:new F(t,Jv(r,new F(n,e.children))),slicedSegments:[]}:n.length===0&&ey(e,n,r)?{segmentGroup:new F(e.segments,Kv(e,n,r,e.children)),slicedSegments:n}:{segmentGroup:new F(e.segments,e.children),slicedSegments:n}}function Kv(e,t,n,r){let o={};for(let i of n)if(Po(e,t,i)&&!r[ke(i)]){let s=new F([],{});o[ke(i)]=s}return C(C({},r),o)}function Jv(e,t){let n={};n[_]=t;for(let r of e)if(r.path===""&&ke(r)!==_){let o=new F([],{});n[ke(r)]=o}return n}function Xv(e,t,n){return n.some(r=>Po(e,t,r)&&ke(r)!==_)}function ey(e,t,n){return n.some(r=>Po(e,t,r))}function Po(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function ty(e,t,n,r){return ke(e)!==r&&(r===_||!Po(t,n,e))?!1:Ea(t,e,n).matched}function ny(e,t,n){return t.length===0&&!e.children[n]}var ma=class{};function ry(e,t,n,r,o,i,s="emptyOnly"){return new va(e,t,n,r,o,s,i).recognize()}var oy=31,va=class{constructor(t,n,r,o,i,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=r,this.config=o,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new ha(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new D(4002,`'${t.segmentGroup}'`)}recognize(){let t=Md(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(O(n=>{let r=new Jn([],Object.freeze({}),Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,{},_,this.rootComponentType,null,{}),o=new ue(r,n),i=new Ao("",o),s=dv(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),this.inheritParamsAndData(i._root,null),{state:i,tree:s}}))}match(t){return this.processSegmentGroup(this.injector,this.config,t,_).pipe(Ge(r=>{if(r instanceof To)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof er?this.noMatchError(r):r}))}inheritParamsAndData(t,n){let r=t.value,o=wa(r,n,this.paramsInheritanceStrategy);r.params=Object.freeze(o.params),r.data=Object.freeze(o.data),t.children.forEach(i=>this.inheritParamsAndData(i,r))}processSegmentGroup(t,n,r,o){return r.segments.length===0&&r.hasChildren()?this.processChildren(t,n,r):this.processSegment(t,n,r,r.segments,o,!0).pipe(O(i=>i instanceof ue?[i]:[]))}processChildren(t,n,r){let o=[];for(let i of Object.keys(r.children))i==="primary"?o.unshift(i):o.push(i);return q(o).pipe(Ft(i=>{let s=r.children[i],a=Mv(n,i);return this.processSegmentGroup(t,a,s,i)}),Ko((i,s)=>(i.push(...s),i)),We(null),Qo(),G(i=>{if(i===null)return en(r);let s=Yd(i);return iy(s),E(s)}))}processSegment(t,n,r,o,i,s){return q(n).pipe(Ft(a=>this.processSegmentAgainstRoute(a._injector??t,n,a,r,o,i,s).pipe(Ge(u=>{if(u instanceof er)return E(null);throw u}))),Ae(a=>!!a),Ge(a=>{if(Wd(a))return ny(r,o,i)?E(new ma):en(r);throw a}))}processSegmentAgainstRoute(t,n,r,o,i,s,a){return ty(r,o,i,s)?r.redirectTo===void 0?this.matchSegmentAgainstRoute(t,o,r,i,s):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,o,n,r,i,s):en(o):en(o)}expandSegmentAgainstRouteUsingRedirect(t,n,r,o,i,s){let{matched:a,consumedSegments:u,positionalParamSegments:l,remainingSegments:f}=Ea(n,o,i);if(!a)return en(n);o.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>oy&&(this.allowRedirects=!1));let h=this.applyRedirects.applyRedirectCommands(u,o.redirectTo,l);return this.applyRedirects.lineralizeSegments(o,h).pipe(G(v=>this.processSegment(t,r,n,v.concat(f),s,!1)))}matchSegmentAgainstRoute(t,n,r,o,i){let s=Yv(n,r,o,t,this.urlSerializer);return r.path==="**"&&(n.children={}),s.pipe(Ce(a=>a.matched?(t=r._injector??t,this.getChildConfig(t,r,o).pipe(Ce(({routes:u})=>{let l=r._loadedInjector??t,{consumedSegments:f,remainingSegments:h,parameters:v}=a,g=new Jn(f,v,Object.freeze(C({},this.urlTree.queryParams)),this.urlTree.fragment,ay(r),ke(r),r.component??r._loadedComponent??null,r,uy(r)),{segmentGroup:w,slicedSegments:I}=Md(n,f,h,u);if(I.length===0&&w.hasChildren())return this.processChildren(l,u,w).pipe(O($=>$===null?null:new ue(g,$)));if(u.length===0&&I.length===0)return E(new ue(g,[]));let H=ke(r)===i;return this.processSegment(l,u,w,I,H?_:i,!0).pipe(O($=>new ue(g,$ instanceof ue?[$]:[])))}))):en(n)))}getChildConfig(t,n,r){return n.children?E({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?E({routes:n._loadedRoutes,injector:n._loadedInjector}):qv(t,n,r,this.urlSerializer).pipe(G(o=>o?this.configLoader.loadChildren(t,n).pipe(Q(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):Zv(n))):E({routes:[],injector:t})}};function iy(e){e.sort((t,n)=>t.value.outlet===_?-1:n.value.outlet===_?1:t.value.outlet.localeCompare(n.value.outlet))}function sy(e){let t=e.value.routeConfig;return t&&t.path===""}function Yd(e){let t=[],n=new Set;for(let r of e){if(!sy(r)){t.push(r);continue}let o=t.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),n.add(o)):t.push(r)}for(let r of n){let o=Yd(r.children);t.push(new ue(r.value,o))}return t.filter(r=>!n.has(r))}function ay(e){return e.data||{}}function uy(e){return e.resolve||{}}function ly(e,t,n,r,o,i){return G(s=>ry(e,t,n,r,s.extractedUrl,o,i).pipe(O(({state:a,tree:u})=>B(C({},s),{targetSnapshot:a,urlAfterRedirects:u}))))}function cy(e,t){return G(n=>{let{targetSnapshot:r,guards:{canActivateChecks:o}}=n;if(!o.length)return E(n);let i=new Set(o.map(u=>u.route)),s=new Set;for(let u of i)if(!s.has(u))for(let l of Qd(u))s.add(l);let a=0;return q(s).pipe(Ft(u=>i.has(u)?dy(u,r,e,t):(u.data=wa(u,u.parent,e).resolve,E(void 0))),Q(()=>a++),Lt(1),G(u=>a===s.size?E(n):ae))})}function Qd(e){let t=e.children.map(n=>Qd(n)).flat();return[e,...t]}function dy(e,t,n,r){let o=e.routeConfig,i=e._resolve;return o?.title!==void 0&&!Bd(o)&&(i[tr]=o.title),fy(i,e,t,r).pipe(O(s=>(e._resolvedData=s,e.data=wa(e,e.parent,n).resolve,null)))}function fy(e,t,n,r){let o=Ws(e);if(o.length===0)return E({});let i={};return q(o).pipe(G(s=>py(e[s],t,n,r).pipe(Ae(),Q(a=>{i[s]=a}))),Lt(1),Yo(i),Ge(s=>Wd(s)?ae:Rt(s)))}function py(e,t,n,r){let o=rr(t)??r,i=un(e,o),s=i.resolve?i.resolve(t,n):vt(o,()=>i(t,n));return nt(s)}function qs(e){return Ce(t=>{let n=e(t);return n?q(n).pipe(O(()=>t)):E(t)})}var Kd=(()=>{class e{buildTitle(n){let r,o=n.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(i=>i.outlet===_);return r}getResolvedTitleForRoute(n){return n.data[tr]}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>y(hy),providedIn:"root"})}}return e})(),hy=(()=>{class e extends Kd{constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}static{this.\u0275fac=function(r){return new(r||e)(R(wd))}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Ma=new N("",{providedIn:"root",factory:()=>({})}),_a=new N(""),gy=(()=>{class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=y(Ps)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return E(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=nt(n.loadComponent()).pipe(O(Jd),Q(i=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=i}),dn(()=>{this.componentLoaders.delete(n)})),o=new Nt(r,()=>new J).pipe(Pt());return this.componentLoaders.set(n,o),o}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return E({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=my(r,this.compiler,n,this.onLoadEndListener).pipe(dn(()=>{this.childrenLoaders.delete(r)})),s=new Nt(i,()=>new J).pipe(Pt());return this.childrenLoaders.set(r,s),s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function my(e,t,n,r){return nt(e.loadChildren()).pipe(O(Jd),G(o=>o instanceof En||Array.isArray(o)?E(o):q(t.compileModuleAsync(o))),O(o=>{r&&r(e);let i,s,a=!1;return Array.isArray(o)?(s=o,a=!0):(i=o.create(n).injector,s=i.get(_a,[],{optional:!0,self:!0}).flat()),{routes:s.map(ba),injector:i}}))}function vy(e){return e&&typeof e=="object"&&"default"in e}function Jd(e){return vy(e)?e.default:e}var Ia=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>y(yy),providedIn:"root"})}}return e})(),yy=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Cy=new N("");var wy=(()=>{class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new J,this.transitionAbortSubject=new J,this.configLoader=y(gy),this.environmentInjector=y(pe),this.urlSerializer=y(Ca),this.rootContexts=y(Oo),this.location=y(Ln),this.inputBindingEnabled=y(xa,{optional:!0})!==null,this.titleStrategy=y(Kd),this.options=y(Ma,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=y(Ia),this.createViewTransition=y(Cy,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>E(void 0),this.rootComponentType=null;let n=o=>this.events.next(new na(o)),r=o=>this.events.next(new ra(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(B(C(C({},this.transitions.value),n),{id:r}))}setupNavigations(n,r,o){return this.transitions=new Y({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:qn,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(ye(i=>i.id!==0),O(i=>B(C({},i),{extractedUrl:this.urlHandlingStrategy.extract(i.rawUrl)})),Ce(i=>{let s=!1,a=!1;return E(i).pipe(Ce(u=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",le.SupersededByNewNavigation),ae;this.currentTransition=i,this.currentNavigation={id:u.id,initialUrl:u.rawUrl,extractedUrl:u.extractedUrl,trigger:u.source,extras:u.extras,previousNavigation:this.lastSuccessfulNavigation?B(C({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=u.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!l&&f!=="reload"){let h="";return this.events.next(new bt(u.id,this.urlSerializer.serialize(u.rawUrl),h,Ks.IgnoredSameUrlNavigation)),u.resolve(null),ae}if(this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl))return E(u).pipe(Ce(h=>{let v=this.transitions?.getValue();return this.events.next(new Zn(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),v!==this.transitions?.getValue()?ae:Promise.resolve(h)}),ly(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Q(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=B(C({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let v=new Mo(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(v)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(u.currentRawUrl)){let{id:h,extractedUrl:v,source:g,restoredState:w,extras:I}=u,H=new Zn(h,this.urlSerializer.serialize(v),g,w);this.events.next(H);let $=$d(this.rootComponentType).snapshot;return this.currentTransition=i=B(C({},u),{targetSnapshot:$,urlAfterRedirects:v,extras:B(C({},I),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=v,E(i)}else{let h="";return this.events.next(new bt(u.id,this.urlSerializer.serialize(u.extractedUrl),h,Ks.IgnoredByUrlHandlingStrategy)),u.resolve(null),ae}}),Q(u=>{let l=new Js(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(l)}),O(u=>(this.currentTransition=i=B(C({},u),{guards:Iv(u.targetSnapshot,u.currentSnapshot,this.rootContexts)}),i)),Lv(this.environmentInjector,u=>this.events.next(u)),Q(u=>{if(i.guardsResult=u.guardsResult,sn(u.guardsResult))throw zd(this.urlSerializer,u.guardsResult);let l=new Xs(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot,!!u.guardsResult);this.events.next(l)}),ye(u=>u.guardsResult?!0:(this.cancelNavigationTransition(u,"",le.GuardRejected),!1)),qs(u=>{if(u.guards.canActivateChecks.length)return E(u).pipe(Q(l=>{let f=new ea(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)}),Ce(l=>{let f=!1;return E(l).pipe(cy(this.paramsInheritanceStrategy,this.environmentInjector),Q({next:()=>f=!0,complete:()=>{f||this.cancelNavigationTransition(l,"",le.NoDataFromResolver)}}))}),Q(l=>{let f=new ta(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)}))}),qs(u=>{let l=f=>{let h=[];f.routeConfig?.loadComponent&&!f.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(f.routeConfig).pipe(Q(v=>{f.component=v}),O(()=>{})));for(let v of f.children)h.push(...l(v));return h};return br(l(u.targetSnapshot.root)).pipe(We(null),je(1))}),qs(()=>this.afterPreactivation()),Ce(()=>{let{currentSnapshot:u,targetSnapshot:l}=i,f=this.createViewTransition?.(this.environmentInjector,u.root,l.root);return f?q(f).pipe(O(()=>i)):E(i)}),O(u=>{let l=Cv(n.routeReuseStrategy,u.targetSnapshot,u.currentRouterState);return this.currentTransition=i=B(C({},u),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,i}),Q(()=>{this.events.next(new Qn)}),_v(this.rootContexts,n.routeReuseStrategy,u=>this.events.next(u),this.inputBindingEnabled),je(1),Q({next:u=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new et(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects))),this.titleStrategy?.updateTitle(u.targetRouterState.snapshot),u.resolve(!0)},complete:()=>{s=!0}}),Xo(this.transitionAbortSubject.pipe(Q(u=>{throw u}))),dn(()=>{!s&&!a&&this.cancelNavigationTransition(i,"",le.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ge(u=>{if(a=!0,Gd(u))this.events.next(new tt(i.id,this.urlSerializer.serialize(i.extractedUrl),u.message,u.cancellationCode)),xv(u)?this.events.next(new Kn(u.url)):i.resolve(!1);else{this.events.next(new Yn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,i.targetSnapshot??void 0));try{i.resolve(n.errorHandler(u))}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return ae}))}))}cancelNavigationTransition(n,r,o){let i=new tt(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Dy(e){return e!==qn}var xy=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>y(by),providedIn:"root"})}}return e})(),ya=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},by=(()=>{class e extends ya{static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=us(e)))(o||e)}})()}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Xd=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:()=>y(Ey),providedIn:"root"})}}return e})(),Ey=(()=>{class e extends Xd{constructor(){super(...arguments),this.location=y(Ln),this.urlSerializer=y(Ca),this.options=y(Ma,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=y(Ia),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Xe,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=$d(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&n(r.url,r.state)})}handleRouterEvent(n,r){if(n instanceof Zn)this.stateMemento=this.createStateMemento();else if(n instanceof bt)this.rawUrlTree=r.initialUrl;else if(n instanceof Mo){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(o,r)}}else n instanceof Qn?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):n instanceof tt&&(n.code===le.GuardRejected||n.code===le.NoDataFromResolver)?this.restoreHistory(r):n instanceof Yn?this.restoreHistory(r,!0):n instanceof et&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let o=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){let i=this.browserPageId,s=C(C({},r.extras.state),this.generateNgRouterState(r.id,i));this.location.replaceState(o,"",s)}else{let i=C(C({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(o,"",i)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,i=this.currentPageId-o;i!==0?this.location.historyGo(i):this.currentUrlTree===n.finalUrl&&i===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=us(e)))(o||e)}})()}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Un=function(e){return e[e.COMPLETE=0]="COMPLETE",e[e.FAILED=1]="FAILED",e[e.REDIRECTING=2]="REDIRECTING",e}(Un||{});function My(e,t){e.events.pipe(ye(n=>n instanceof et||n instanceof tt||n instanceof Yn||n instanceof bt),O(n=>n instanceof et||n instanceof bt?Un.COMPLETE:(n instanceof tt?n.code===le.Redirect||n.code===le.SupersededByNewNavigation:!1)?Un.REDIRECTING:Un.FAILED),ye(n=>n!==Un.REDIRECTING),je(1)).subscribe(()=>{t()})}function _y(e){throw e}var Iy={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ay={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Aa=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=y(fo),this.stateManager=y(Xd),this.options=y(Ma,{optional:!0})||{},this.pendingTasks=y(co),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=y(wy),this.urlSerializer=y(Ca),this.location=y(Ln),this.urlHandlingStrategy=y(Ia),this._events=new J,this.errorHandler=this.options.errorHandler||_y,this.navigated=!1,this.routeReuseStrategy=y(xy),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=y(_a,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!y(xa,{optional:!0}),this.eventsSubscription=new z,this.isNgZoneEnabled=y(U)instanceof U&&U.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(o!==null&&i!==null){if(this.stateManager.handleRouterEvent(r,i),r instanceof tt&&r.code!==le.Redirect&&r.code!==le.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof et)this.navigated=!0;else if(r instanceof Kn){let s=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),a={info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||Dy(o.source)};this.scheduleNavigation(s,qn,null,a,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}Ty(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qn,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",r)},0)})}navigateToSyncWithBrowser(n,r,o){let i={replaceUrl:!0},s=o?.navigationId?o:null;if(o){let u=C({},o);delete u.navigationId,delete u.\u0275routerPageId,Object.keys(u).length!==0&&(i.state=u)}let a=this.parseUrl(n);this.scheduleNavigation(a,r,s,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(ba),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:o,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:u}=r,l=u?this.currentUrlTree.fragment:s,f=null;switch(a){case"merge":f=C(C({},this.currentUrlTree.queryParams),i);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=i||null}f!==null&&(f=this.removeEmptyProps(f));let h;try{let v=o?o.snapshot:this.routerState.snapshot.root;h=Fd(v)}catch{(typeof n[0]!="string"||!n[0].startsWith("/"))&&(n=[]),h=this.currentUrlTree.root}return Ld(h,n,f,l??null)}navigateByUrl(n,r={skipLocationChange:!1}){let o=sn(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(i,qn,null,r)}navigate(n,r={skipLocationChange:!1}){return Sy(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let o;if(r===!0?o=C({},Iy):r===!1?o=C({},Ay):o=r,sn(n))return Dd(this.currentUrlTree,n,o);let i=this.parseUrl(n);return Dd(this.currentUrlTree,i,o)}removeEmptyProps(n){return Object.entries(n).reduce((r,[o,i])=>(i!=null&&(r[o]=i),r),{})}scheduleNavigation(n,r,o,i,s){if(this.disposed)return Promise.resolve(!1);let a,u,l;s?(a=s.resolve,u=s.reject,l=s.promise):l=new Promise((h,v)=>{a=h,u=v});let f=this.pendingTasks.add();return My(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:a,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(h=>Promise.reject(h))}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Sy(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new D(4008,!1)}function Ty(e){return!(e instanceof Qn)&&!(e instanceof Kn)}var ef=(()=>{class e{constructor(n,r,o,i,s,a){this.router=n,this.route=r,this.tabIndexAttribute=o,this.renderer=i,this.el=s,this.locationStrategy=a,this.href=null,this.commands=null,this.onChanges=new J,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let u=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area",this.isAnchorElement?this.subscription=n.events.subscribe(l=>{l instanceof et&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(n){n!=null?(this.commands=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(n,r,o,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(n!==0||r||o||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,u),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.href=n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n)):null;let r=this.href===null?null:hc(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",r)}applyAttributeValue(n,r){let o=this.renderer,i=this.el.nativeElement;r!==null?o.setAttribute(i,n,r):o.removeAttribute(i,n)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static{this.\u0275fac=function(r){return new(r||e)(Ke(Aa),Ke(Et),ls("tabindex"),Ke(uo),Ke(On),Ke(Xt))}}static{this.\u0275dir=Xr({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,o){r&1&&Je("click",function(s){return o.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),r&2&&As("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[be.HasDecoratorInputTransform,"preserveFragment","preserveFragment",Fn],skipLocationChange:[be.HasDecoratorInputTransform,"skipLocationChange","skipLocationChange",Fn],replaceUrl:[be.HasDecoratorInputTransform,"replaceUrl","replaceUrl",Fn],routerLink:"routerLink"},standalone:!0,features:[Ms,Sn]})}}return e})();var Oy=new N("");function tf(e,...t){return eo([{provide:_a,multi:!0,useValue:e},[],{provide:Et,useFactory:Py,deps:[Aa]},{provide:Os,multi:!0,useFactory:Ny},t.map(n=>n.\u0275providers)])}function Py(e){return e.routerState.root}function Ny(){let e=y(Tn);return t=>{let n=e.get(Rn);if(t!==n.components[0])return;let r=e.get(Aa),o=e.get(Ry);e.get(ky)===1&&r.initialNavigation(),e.get(Fy,null,A.Optional)?.setUpPreloading(),e.get(Oy,null,A.Optional)?.init(),r.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var Ry=new N("",{factory:()=>new J}),ky=new N("",{providedIn:"root",factory:()=>1});var Fy=new N("");var Sa=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["app-home"]],standalone:!0,features:[ie],decls:11,vars:0,consts:[[1,"container"],[1,"container__content"],[1,"container__title"],[1,"container__text"],[1,"button_wrapper"],["href","https://arm-website.netlify.app/",1,"button_wrapper__link"],[1,"container__img"],["src","assets/images/email_img.jpg","alt","image code"]],template:function(r,o){r&1&&(c(0,"section",0)(1,"div",1)(2,"h1",2),p(3,"Welcome to my Emails porftolio"),d(),c(4,"p",3),p(5," Hello everyone, here you can take a look of some of my email development\xA0work \u{1F680} "),d(),c(6,"div",4)(7,"a",5),p(8,"Go back"),d()()(),c(9,"div",6),m(10,"img",7),d()())},styles:[".container[_ngcontent-%COMP%]{width:60%;margin:180px auto 80px;color:#3e4144;display:flex;justify-content:center}@media (max-width: 768px){.container[_ngcontent-%COMP%]{margin:100px auto;flex-direction:column}}.container__content[_ngcontent-%COMP%]{width:100%}.container__title[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:20px;letter-spacing:1.5px;margin-top:50px}@media (max-width: 768px){.container__title[_ngcontent-%COMP%]{font-size:1.7rem;margin-top:0}}.container__text[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px;padding-right:15px}@media (max-width: 768px){.container__text[_ngcontent-%COMP%]{text-align:justify}}img[_ngcontent-%COMP%]{width:100%}.button_wrapper[_ngcontent-%COMP%]{background-color:#3e4144;width:150px;text-align:center;padding:15px;margin:50px 0;font-size:16px;color:#adb5bd;background-color:#333;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease,transform .2s ease;box-shadow:0 4px 8px #0000001a}@media (max-width: 768px){.button_wrapper[_ngcontent-%COMP%]{margin:30px auto}}.button_wrapper__link[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.button_wrapper[_ngcontent-%COMP%]:hover{background-color:#555;transform:translateY(-2px)}.button_wrapper[_ngcontent-%COMP%]:focus{outline:none}"]})}}return e})();var nf=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["app-email-1"]],standalone:!0,features:[ie],decls:259,vars:0,consts:[[0,"xmlns","v","urn:schemas-microsoft-com:vml",0,"xmlns","o","urn:schemas-microsoft-com:office:office",0,"xmlns","w","urn:schemas-microsoft-com:office:word"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1, maximum-scale=1"],["name","format-detection","content","email=no"],["name","format-detection","content","telephone=no"],["name","format-detection","content","address=no"],["yahoo","fix",1,"bg",2,"margin","0","padding","0","font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","1.231","-webkit-text-size-adjust","none"],["bgcolor","#ffffff","align","center"],["bgcolor","#ffffff","align","center","cellpadding","0","cellspacing","0","border","0","width","100%",2,"margin","0 auto"],[2,"font-family","Arial, Helvetica, sans-serif","font-size","0px","line-height","0px","color","#ffffff","mso-hide","all"],["align","center","width","700","id","iosWrapper",1,"all"],["width","700","border","0","cellspacing","0","cellpadding","0",1,"all"],["align","left","valign","top",1,"pt13","pb8",2,"padding-top","6px","padding-bottom","5px"],["width","100%","border","0","cellspacing","0","cellpadding","0"],["width","21",2,"font-size","0px","line-height","0px"],["align","left","valign","top",2,"font-family","Arial, Helvetica, sans-serif","font-size","14px","line-height","21px","color","#999999","text-align","right","font-weight","normal"],["href","#tbt","target","_blank",2,"color","#999999","text-decoration","none"],[2,"color","#999999","text-decoration","none"],["width","52",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#999999",1,"lh20","pb12","pt12",2,"font-family","Arial, Helvetica, sans-serif","font-size","14px","line-height","16px","color","#ffffff","text-align","center","font-weight","normal","padding-top","14px","padding-bottom","10px","letter-spacing","0.21px"],["align","left","valign","top","bgcolor","#003865"],["width","252",1,"w50",2,"font-size","0px","line-height","0px"],["align","left","valign","top"],["align","center","valign","top",1,"pt23",2,"padding-top","25px"],["href","#tbt","target","_blank",1,"unitedLogo",2,"width","250px","display","block","margin","0px auto"],["src","assets/images/email_1/bank_logo.png","width","250","height","73","alt","United Commnunity Bank \xAE",1,"unitedLogo",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top",1,"pt8","pb17",2,"padding-top","6px","padding-bottom","21px"],["align","left","valign","top",1,"fs18","pl0",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","19px","color","#ffffff","text-align","left","font-weight","bold","padding-left","28px"],["href","#tbt","target","_blank",2,"color","#ffffff","text-decoration","underline","font-weight","bold"],[2,"color","#ffffff","text-decoration","underline","font-weight","bold"],["align","left","valign","top",1,"fs18","pr0",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","19px","color","#ffffff","text-align","right","font-weight","bold","padding-right","28px"],["width","49",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"no-mobile",2,"padding-top","41px"],["align","left","valign","bottom"],["href","#tbt","target","_blank",2,"display","block","width","600px"],["src","assets/images/email_1/banner.png","width","600","height","245","alt","Achieve your financial goals with a fixed-rate loan",1,"g-img",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],[1,"mobile-only","pt26",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["href","#tbt","target","_blank",2,"display","block","width","290px"],["src","iassets/images/email_1/banner_s.png","width","290","height","222","alt","Achieve your financial goals with a fixed-rate loan",2,"border","0","display","block","font-size","10px","line-height","12px","text-align","center"],["align","left","valign","top",1,"fs20","pt25",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","20px","color","#63666A","text-align","center","font-weight","normal","padding-top","44px"],[1,"no-mobile"],[2,"white-space","nowrap"],["width","20",1,"w15",2,"font-size","0px","line-height","0px"],["align","center","valign","top",1,"pb49","pt26",2,"padding-top","34px","padding-bottom","45px"],["href","#tbt","target","_blank",1,"w140",2,"width","122px","display","block","margin","0px auto"],["src","assets/images/email_1/started.png","width","122","height","36","alt","Get Started",1,"getStarted",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top","bgcolor","#EDEDED"],["width","90",1,"w24",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs26","pb38",2,"font-family","Arial, Helvetica, sans-serif","font-size","21px","line-height","25px","color","#003865","text-align","center","font-weight","bold","padding-top","42px","padding-bottom","36px"],["width","15",1,"no-mobile",2,"font-size","0px","line-height","0px"],["align","left","valign","top",2,"padding-bottom","31px"],["width","55","align","left","valign","top",1,"doubleCol","textCenter",2,"font-family","Arial, Helvetica, sans-serif","font-size","50px","color","#0076A8","font-weight","bold","line-height","50px","-webkit-text-size-adjust","none"],["align","left","valign","center",1,"doubleCol","textCenter","fs20","pt12",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","color","#63666A","font-weight","normal","line-height","20px","-webkit-text-size-adjust","none"],["align","left","valign","top",2,"padding-bottom","34px"],["align","center","valign","top",1,"pt49",2,"padding-top","29px"],["href","#tbt","target","_blank",1,"w140",2,"width","110px","display","block","margin","0px auto"],["src","assets/images/email_1/learn_more.png","width","110","height","35","alt","Learn More",1,"getStarted",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","center","valign","top",1,"pt29",2,"padding-top","16px","padding-bottom","46px"],["href","#tbt","target","_blank",1,"w212",2,"width","162px","display","block","margin","0px auto"],["src","assets/images/email_1/meet.png","width","162","height","35","alt","Try it now",1,"meet",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top",2,"padding-top","46px","padding-bottom","41px"],["width","50",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgColor","#003865"],["width","25",1,"no-mobile",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs26","pt29",2,"font-family","Arial, Helvetica, sans-serif","font-size","21px","line-height","25px","color","#FFFFFF","text-align","center","font-weight","bold","padding-top","23px"],["align","left","valign","center",1,"fs20","pt9",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","color","#FFFFFF","font-weight","normal","line-height","21px","-webkit-text-size-adjust","none","text-align","center","padding-top","17px"],["align","center","valign","top",1,"pb37","pt25",2,"padding-top","34px","padding-bottom","25px"],["href","#tbt","target","_blank",1,"w130",2,"width","162px","display","block","margin","0px auto"],["src","assets/images/email_1/try_it.png","width","112","height","35","alt","Meet with Our Experts",1,"try",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["width","51",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#999999",1,"pb48",2,"padding-bottom","23px"],["width","50",1,"w10",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs14","pt38","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-top","23px"],["align","left","valign","top",1,"fs14","pb20","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-bottom","14px"],["align","left","valign","top",1,"fs14","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal"],["href","#tbt","target","_blank",2,"color","#ffffff","text-decoration","underline"],[2,"color","#ffffff","text-decoration","underline"],["align","left","valign","top",1,"fs14","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-bottom","30px"],["align","left","valign","top","width","444",1,"doubleCol","mxAuto"],["src","assets/images/email_1/member_logo.png","width","136","height","35","alt","Member FDIC. NMLS# 421841",1,"mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top",1,"pt35","doubleCol","w179","mxAuto",2,"padding-top","4px"],["align","left","valign","top","width","38",1,"w49"],["href","#tbt",2,"width","25px","display","block"],["src","assets/images/email_1/facebook.png","width","25","height","25","alt","Facebook Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top","width","42",1,"w50"],["src","assets/images/email_1/instagram.png","width","25","height","25","alt","Instagram Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top","width","42",1,"w49"],["href","#tbt",2,"width","30px","display","block"],["src","assets/images/email_1/linkedin.png","width","30","height","25","alt","Linkedin Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["href","#tbt",2,"width","31px","display","block"],["src","assets/images/email_1/twitter.png","width","31","height","25","alt","Twitter Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["border","0","cellpadding","0","cellspacing","0"],[1,"no-mobile",2,"min-width","500px"],[1,"gmail",2,"white-space","nowrap","font","15px courier","line-height","0"]],template:function(r,o){r&1&&(c(0,"html",0)(1,"head"),m(2,"meta",1)(3,"meta",2)(4,"meta",3)(5,"meta",4)(6,"meta",5),d(),c(7,"body",6)(8,"div",7)(9,"table",8)(10,"tr")(11,"td",9),p(12,"Get the funds you need without your interest rate changing.\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0"),d()(),c(13,"tr")(14,"td",10)(15,"table",11)(16,"tr")(17,"td",12)(18,"table",13)(19,"tr")(20,"td",14),p(21,"\xA0"),d(),c(22,"td",15)(23,"a",16)(24,"span",17),p(25,"View Online"),d()()(),c(26,"td",18),p(27,"\xA0"),d()()()()(),c(28,"tr")(29,"td",19),p(30,"Get the funds you need without your interest rate\xA0changing"),d()(),c(31,"tr")(32,"td",20)(33,"table",13)(34,"tr")(35,"td",21),p(36,"\xA0"),d(),c(37,"td",22)(38,"table",13)(39,"tr")(40,"td",23)(41,"a",24),m(42,"img",25),d()()(),c(43,"tr")(44,"td",26)(45,"table",13)(46,"tr")(47,"td",27)(48,"a",28)(49,"span",29),p(50,"Personal"),d()()(),c(51,"td",30)(52,"a",28)(53,"span",29),p(54,"Business"),d()()()()()()()()(),c(55,"td",21),p(56,"\xA0"),d()()()()(),c(57,"tr")(58,"td",22)(59,"table",13)(60,"tr")(61,"td",31),p(62,"\xA0"),d(),c(63,"td",22)(64,"table",13)(65,"tr")(66,"td",22)(67,"table",13)(68,"tr")(69,"td",32)(70,"table",13)(71,"tr")(72,"td",33)(73,"a",34),m(74,"img",35),d()()()()()(),c(75,"tr")(76,"td",36)(77,"a",37),m(78,"img",38),d()()()()()(),c(79,"tr")(80,"td",39),p(81,"Even with rates rising, you can achieve your dreams of higher\xA0"),c(82,"span",40),m(83,"br"),d(),p(84,"education, home renovation, and more. With a fixed-rate Home Equity "),m(85,"br",40),p(86," Loan, you get many of the same benefits of a traditional HELOC, plus "),m(87,"br",40),p(88," the extra the security of a fixed rate\xA0throughout the life "),c(89,"span",41),p(90,"of the loan."),d()()()()(),c(91,"td",42),p(92,"\xA0"),d()()()()(),c(93,"tr")(94,"td",43)(95,"a",44),m(96,"img",45),d()()(),c(97,"tr")(98,"td",46)(99,"table",13)(100,"tr")(101,"td",47),p(102,"\xA0"),d(),c(103,"td",22)(104,"table",13)(105,"tr")(106,"td",48),p(107,"Leveraging the equity in your home is a great\xA0way\xA0to borrow money at a secure, low rate. "),c(108,"span",41),p(109,"With a Home Equity"),d(),p(110," Loan, you\u2019ll benefit\xA0from:"),d()(),c(111,"tr")(112,"td",22)(113,"table",13)(114,"tr")(115,"td",49),p(116,"\xA0"),d(),c(117,"td",22)(118,"table",13)(119,"tr")(120,"td",50)(121,"table",13)(122,"tr")(123,"th",51),p(124,"1"),d(),c(125,"th",52),p(126,"Receiving the full amount upfront and paying it back over time"),d()()()()(),c(127,"tr")(128,"td",50)(129,"table",13)(130,"tr")(131,"th",51),p(132,"2"),d(),c(133,"th",52),p(134,"Payments that won\u2019t increase, with a fixed rate for the full loan\xA0term"),d()()()()(),c(135,"tr")(136,"td",53)(137,"table",13)(138,"tr")(139,"th",51),p(140,"3"),d(),c(141,"th",52),p(142,"No or low closing costs, no application fee, and no annual\xA0fee"),d()()()()(),c(143,"tr")(144,"td",22)(145,"table",13)(146,"tr")(147,"th",51),p(148,"4"),d(),c(149,"th",52),p(150,"First and second-lien options\xA0available"),d()()()()()()()()()()(),c(151,"tr")(152,"td",54)(153,"a",55),m(154,"img",56),d()()(),c(155,"tr")(156,"td",57)(157,"a",58),m(158,"img",59),d()()()()(),c(159,"td",47),p(160,"\xA0"),d()()()()(),c(161,"tr")(162,"td",60)(163,"table",13)(164,"tr")(165,"td",61),p(166,"\xA0"),d(),c(167,"td",62)(168,"table",13)(169,"tr")(170,"td",63),p(171,"\xA0"),d(),c(172,"td",22)(173,"table",13)(174,"tr")(175,"td",64),p(176,"Loan Calculator"),d()(),c(177,"tr")(178,"td",65),p(179,"Explore what your monthly "),c(180,"span",41),p(181,"payment and loan terms"),d(),c(182,"span",41),p(183,"may look like"),d(),m(184,"br",40),p(185," with our helpful\xA0Loan Calculator."),d()(),c(186,"tr")(187,"td",66)(188,"a",67),m(189,"img",68),d()()()()(),c(190,"td",63),p(191,"\xA0"),d()()()(),c(192,"td",69),p(193,"\xA0"),d()()()()(),c(194,"tr")(195,"td",70)(196,"table",13)(197,"tr")(198,"td",71),p(199,"\xA0"),d(),c(200,"td",22)(201,"table",13)(202,"tr")(203,"td",72),p(204,"\xA9 2022 United Community Bank"),d()(),c(205,"tr")(206,"td",73),p(207,"2 West Washi\u200Cngton Street, Suite 7\u200C00, Green\u200Cville, South Car\u200Colina 29\u200C601"),d()(),c(208,"tr")(209,"td",73),p(210,"You are receiving this email because you "),c(211,"span",41),p(212,"are a United"),d(),p(213," Community Bank Customer."),d()(),c(214,"tr")(215,"td",74),p(216,"Help us reach you with the "),c(217,"span",41),p(218,"right information"),d(),p(219,". Adjust your email preferences "),c(220,"a",75)(221,"span",76),p(222,"here"),d()(),p(223,"."),d()(),c(224,"tr")(225,"td",77),p(226,"Want to stop receiving emails from United Community Bank? "),c(227,"a",75)(228,"span",76),p(229,"Unsubscribe here"),d()(),p(230,"."),d()(),c(231,"tr")(232,"td",22)(233,"table",13)(234,"tr")(235,"th",78),m(236,"img",79),d(),c(237,"th",80)(238,"table",13)(239,"tr")(240,"td",81)(241,"a",82),m(242,"img",83),d()(),c(243,"td",84)(244,"a",82),m(245,"img",85),d()(),c(246,"td",86)(247,"a",87),m(248,"img",88),d()(),c(249,"td",22)(250,"a",89),m(251,"img",90),d()()()()()()()()()()(),c(252,"td",71),p(253,"\xA0"),d()()()()()()()()()(),c(254,"table",91)(255,"tr")(256,"td",92)(257,"div",93),p(258,"\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"),d()()()()()())},styles:["p[_ngcontent-%COMP%]{margin:300px}",`.gmail[_ngcontent-%COMP%] {
    display: none !important;
    width: 0 !important;
}
a[_ngcontent-%COMP%]:link {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:visited {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:hover {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:active {
    color: #267ed4;
}
.nolinkcolor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
    color: #3D4543 !important;
    text-decoration: none !important;
}
table[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
    border-collapse: collapse !important;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
}
button[_ngcontent-%COMP%] {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    cursor: default !important;
    font-size: 0px !important;
    line-height: 0px !important;
}
td[_ngcontent-%COMP%] {
    font-size: 0px;
    line-height: 0px;
    mso-text-raise: 20% !important;
}
div[_ngcontent-%COMP%] {
    font-size: 0px;
    line-height: 0px;
}
th[_ngcontent-%COMP%] {
    font-weight: normal !important;
}
img.g-img[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {
    display: none;
}

@media only screen and (max-width: 700px) {
body[_ngcontent-%COMP%] {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
.dBlock[_ngcontent-%COMP%] {
    display: block !important;
}
.no-mobile[_ngcontent-%COMP%] {
    text-indent: -99999em !important;
    display: none !important;
    width: 0 !important;
}
.mobile-only[_ngcontent-%COMP%] {
    text-indent: 0 !important;
    display: block !important;
    height: auto !important;
    visibility: visible !important;
    overflow: visible !important;
    max-height: none !important;
}
.all[_ngcontent-%COMP%] {
    width: 320px !important;
}
.doubleCol[_ngcontent-%COMP%] {
    display: block !important;
    width: 100% !important;
    margin: 0 auto !important;
}
.w212[_ngcontent-%COMP%] {
    width: 212px !important;
}
.w204[_ngcontent-%COMP%] {
    width: 204px !important;
}
.w194[_ngcontent-%COMP%] {
    width: 194px !important;
}
.w179[_ngcontent-%COMP%] {
    width: 179px !important;
}
.w151[_ngcontent-%COMP%] {
    width: 151px !important;
}
.w140[_ngcontent-%COMP%] {
    width: 140px !important;
}
.w130[_ngcontent-%COMP%] {
    width: 130px !important;
}
.w90[_ngcontent-%COMP%] {
    width: 90px !important;
}
.w50[_ngcontent-%COMP%] {
    width: 50px !important;
}
.w49[_ngcontent-%COMP%] {
    width: 49px !important;
}
.w30[_ngcontent-%COMP%] {
    width: 30px !important;
}
.w25[_ngcontent-%COMP%] {
    width: 25px !important;
}
.w22[_ngcontent-%COMP%] {
    width: 22px !important;
}
.w24[_ngcontent-%COMP%] {
    width: 24px !important;
}
.w15[_ngcontent-%COMP%] {
    width: 15px !important;
}
.w12[_ngcontent-%COMP%] {
    width: 12px !important;
}
.w10[_ngcontent-%COMP%] {
    width: 10px !important;
}
.w5[_ngcontent-%COMP%] {
    width: 5px !important;
}
.memberLogo[_ngcontent-%COMP%] {
    width: 78px !important;
    height: 20px !important;
}
.learnMore[_ngcontent-%COMP%] {
    width: 166px !important;
    height: 40px !important;
}
.unitedLogo[_ngcontent-%COMP%] {
    width: 194px !important;
    height: 56px !important;
}
.fs26[_ngcontent-%COMP%] {
    font-size: 26px !important;
    line-height: 32px !important;
}
.fs23[_ngcontent-%COMP%] {
    font-size: 23px !important;
    line-height: 25px !important;
}
.fs22[_ngcontent-%COMP%] {
    font-size: 22px !important;
    line-height: 24px !important;
}
.fs20[_ngcontent-%COMP%] {
    font-size: 20px !important;
    line-height: 28px !important;
}
.fs20a[_ngcontent-%COMP%] {
    font-size: 20px !important;
    line-height: 23px !important;
}
.fs18[_ngcontent-%COMP%] {
    font-size: 18px !important;
    line-height: 24px !important;
}
.fs18a[_ngcontent-%COMP%] {
    font-size: 18px !important;
    line-height: 20px !important;
}
.fs16[_ngcontent-%COMP%] {
    font-size: 16px !important;
    line-height: 20px !important;
}
.fs15[_ngcontent-%COMP%] {
    font-size: 15px !important;
}
.fs14[_ngcontent-%COMP%] {
    font-size: 14px !important;
    line-height: 20px !important;
}
.fs13[_ngcontent-%COMP%] {
    font-size: 13px !important;
    line-height: 18px !important;
}
.fs12[_ngcontent-%COMP%] {
    font-size: 12px !important;
    line-height: 17px !important;
}
.fs11[_ngcontent-%COMP%] {
    font-size: 11px !important;
    line-height: 15px !important;
}
.fs9[_ngcontent-%COMP%] {
    font-size: 9px !important;
    line-height: 13px !important;
}
.fs7[_ngcontent-%COMP%] {
    font-size: 7px !important;
    line-height: 10px !important;
}
.fs6[_ngcontent-%COMP%] {
    font-size: 6px !important;
    line-height: 10px !important;
}
.pt53[_ngcontent-%COMP%] {
    padding-top: 53px !important;
}
.pt49[_ngcontent-%COMP%] {
    padding-top: 49px !important;
}
.pt38[_ngcontent-%COMP%] {
    padding-top: 38px !important;
}
.pt35[_ngcontent-%COMP%] {
    padding-top: 35px !important;
}
.pt29[_ngcontent-%COMP%] {
    padding-top: 29px !important;
}
.pt28[_ngcontent-%COMP%] {
    padding-top: 28px !important;
}
.pt27[_ngcontent-%COMP%] {
    padding-top: 27px !important;
}
.pt26[_ngcontent-%COMP%] {
    padding-top: 26px !important;
}
.pt25[_ngcontent-%COMP%] {
    padding-top: 25px !important;
}
.pt23[_ngcontent-%COMP%] {
    padding-top: 23px !important;
}
.pt22[_ngcontent-%COMP%] {
    padding-top: 22px !important;
}
.pt20[_ngcontent-%COMP%] {
    padding-top: 20px !important;
}
.pt19[_ngcontent-%COMP%] {
    padding-top: 19px !important;
}
.pt16[_ngcontent-%COMP%] {
    padding-top: 16px !important;
}
.pt15[_ngcontent-%COMP%] {
    padding-top: 15px !important;
}
.pt13[_ngcontent-%COMP%] {
    padding-top: 13px !important;
}
.pt12[_ngcontent-%COMP%] {
    padding-top: 12px !important;
}
.pt11[_ngcontent-%COMP%] {
    padding-top: 11px !important;
}
.pt10[_ngcontent-%COMP%] {
    padding-top: 10px !important;
}
.pt9[_ngcontent-%COMP%] {
    padding-top: 9px !important;
}
.pt8[_ngcontent-%COMP%] {
    padding-top: 8px !important;
}
.pt7[_ngcontent-%COMP%] {
    padding-top: 7px !important;
}
.pt6[_ngcontent-%COMP%] {
    padding-top: 6px !important;
}
.pt3[_ngcontent-%COMP%] {
    padding-top: 3px !important;
}
.pt2[_ngcontent-%COMP%] {
    padding-top: 2px !important;
}
.pb51[_ngcontent-%COMP%] {
    padding-bottom: 51px !important;
}
.pb49[_ngcontent-%COMP%] {
    padding-bottom: 49px !important;
}
.pb48[_ngcontent-%COMP%] {
    padding-bottom: 48px !important;
}
.pb41[_ngcontent-%COMP%] {
    padding-bottom: 41px !important;
}
.pb38[_ngcontent-%COMP%] {
    padding-bottom: 38px !important;
}
.pb37[_ngcontent-%COMP%] {
    padding-bottom: 37px !important;
}
.pb32[_ngcontent-%COMP%] {
    padding-bottom: 32px !important;
}
.pb29[_ngcontent-%COMP%] {
    padding-bottom: 29px !important;
}
.pb28[_ngcontent-%COMP%] {
    padding-bottom: 28px !important;
}
.pb27[_ngcontent-%COMP%] {
    padding-bottom: 27px !important;
}
.pb25[_ngcontent-%COMP%] {
    padding-bottom: 25px !important;
}
.pb22[_ngcontent-%COMP%] {
    padding-bottom: 22px !important;
}
.pb21[_ngcontent-%COMP%] {
    padding-bottom: 21px !important;
}
.pb20[_ngcontent-%COMP%] {
    padding-bottom: 20px !important;
}
.pb17[_ngcontent-%COMP%] {
    padding-bottom: 17px !important;
}
.pb16[_ngcontent-%COMP%] {
    padding-bottom: 16px !important;
}
.pb15[_ngcontent-%COMP%] {
    padding-bottom: 15px !important;
}
.pb14[_ngcontent-%COMP%] {
    padding-bottom: 14px !important;
}
.pb13[_ngcontent-%COMP%] {
    padding-bottom: 13px !important;
}
.pb12[_ngcontent-%COMP%] {
    padding-bottom: 12px !important;
}
.pb11[_ngcontent-%COMP%] {
    padding-bottom: 11px !important;
}
.pb10[_ngcontent-%COMP%] {
    padding-bottom: 10px !important;
}
.pb8[_ngcontent-%COMP%] {
    padding-bottom: 8px !important;
}
.pb7[_ngcontent-%COMP%] {
    padding-bottom: 7px !important;
}
.pb3[_ngcontent-%COMP%] {
    padding-bottom: 3px !important;
}
.pl14[_ngcontent-%COMP%] {
    padding-left: 14px !important;
}
.pl6[_ngcontent-%COMP%] {
    padding-left: 6px !important;
}
.pl0[_ngcontent-%COMP%] {
    padding-left: 0px !important;
}
.pr9[_ngcontent-%COMP%] {
    padding-right: 9px !important;
}
.pr6[_ngcontent-%COMP%] {
    padding-right: 6px !important;
}
.pr0[_ngcontent-%COMP%] {
    padding-right: 0px !important;
}
.text-center[_ngcontent-%COMP%] {
    text-align: center !important;
}
.mxAuto[_ngcontent-%COMP%] {
    margin: 0px auto !important;
}
.lh23[_ngcontent-%COMP%] {
    line-height: 23px !important;
}
.lh20[_ngcontent-%COMP%] {
    line-height: 20px !important;
}
.meet[_ngcontent-%COMP%] {
    width: 212px !important;
    height: 39px !important;
}
.getStarted[_ngcontent-%COMP%] {
    width: 140px !important;
    height: 39px !important;
}
.try[_ngcontent-%COMP%] {
    width: 130px !important;
    height: 39px !important;
}
.textCenter[_ngcontent-%COMP%] {
    text-align: center !important;
}
}`]})}}return e})();var rf=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["app-email-2"]],standalone:!0,features:[ie],decls:305,vars:0,consts:[[0,"xmlns","v","urn:schemas-microsoft-com:vml",0,"xmlns","o","urn:schemas-microsoft-com:office:office",0,"xmlns","w","urn:schemas-microsoft-com:office:word"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1, maximum-scale=1"],["name","format-detection","content","email=no"],["name","format-detection","content","telephone=no"],["name","format-detection","content","address=no"],["yahoo","fix",1,"bg",2,"margin","0","padding","0","font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","1.231","-webkit-text-size-adjust","none"],["bgcolor","#ffffff","align","center"],["bgcolor","#ffffff","align","center","cellpadding","0","cellspacing","0","border","0","width","100%",2,"margin","0 auto"],[2,"font-family","Arial, Helvetica, sans-serif","font-size","0px","line-height","0px","color","#ffffff","mso-hide","all"],["align","center","width","700","id","iosWrapper",1,"all"],["width","700","border","0","cellspacing","0","cellpadding","0",1,"all"],["align","left","valign","top",1,"pt13","pb8",2,"padding-top","6px","padding-bottom","5px"],["width","100%","border","0","cellspacing","0","cellpadding","0"],["width","21","height","21",2,"font-size","0px","line-height","0px"],["align","left","valign","top",2,"font-family","Arial, Helvetica, sans-serif","font-size","14px","line-height","21px","color","#999999","text-align","right","font-weight","normal"],["href","#tbt","target","_blank",2,"color","#999999","text-decoration","none"],[2,"color","#999999","text-decoration","none"],["width","52",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#999999",1,"lh24","pr15","pl15","pb6",2,"font-family","Arial, Helvetica, sans-serif","font-size","18px","line-height","21px","color","#ffffff","text-align","center","font-weight","normal","padding-top","10px","padding-bottom","10px","letter-spacing","0.21px"],[2,"white-space","nowrap"],["align","left","valign","top","bgcolor","#003865"],["width","252",1,"w50",2,"font-size","0px","line-height","0px"],["align","left","valign","top"],["align","center","valign","top",1,"pt23",2,"padding-top","25px"],["href","#tbt","target","_blank",1,"unitedLogo",2,"width","250px","display","block","margin","0px auto"],["src","../../assets/images/email_2/bank_logo.png","width","250","height","73","alt","United Commnunity Bank \xAE",1,"unitedLogo",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top",1,"pt8","pb17",2,"padding-top","6px","padding-bottom","21px"],["align","left","valign","top",1,"fs18","pl0",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","19px","color","#ffffff","text-align","left","font-weight","bold","padding-left","28px"],["href","#tbt","target","_blank",2,"color","#ffffff","text-decoration","underline","font-weight","bold"],[2,"color","#ffffff","text-decoration","underline","font-weight","bold"],["align","left","valign","top",1,"fs18","pr0",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","19px","color","#ffffff","text-align","right","font-weight","bold","padding-right","28px"],["width","49",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"no-mobile",2,"padding-top","43px"],["align","left","valign","bottom"],["href","#tbt","target","_blank"],["src","../../assets/images/email_2/banner.png","width","600","height","245","alt","Life Insurance Is Important. Let\u2019s get it done. Start Here",1,"g-img",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],[1,"mobile-only","pt29",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["src","../../assets/images/email_2/banner_s.png","width","290","height","222","alt","Life Insurance Is Important. Let\u2019s get it done. Start Here",2,"border","0","display","block","font-size","10px","line-height","12px","text-align","center"],["width","113",1,"w30",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs20","pt25","pb38",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","20px","color","#63666A","text-align","center","font-weight","normal","padding-top","44px"],["align","left","valign","top",1,"fs26","pt9","pb25",2,"font-family","Arial, Helvetica, sans-serif","font-size","21px","line-height","25px","color","#003865","text-align","center","font-weight","bold","padding-top","42px","padding-bottom","32px"],["width","50",1,"w16",2,"font-size","0px","line-height","0px"],["align","left","valign","top","width","183","bgcolor","#003865",1,"doubleCol"],["align","center","valign","top",1,"pt40","fs40",2,"font-family","Arial, Helvetica, sans-serif","font-size","50px","color","#FFFFFF","font-weight","bold","line-height","58px","-webkit-text-size-adjust","none","padding-top","35px","text-align","center"],["href","#tbt","target","_blank",2,"text-decoration","none","font-weight","bold","color","#FFFFFF"],[2,"text-decoration","none","font-weight","bold","color","#FFFFFF"],["align","left","valign","top",1,"fs22","pt13",2,"font-family","Arial, Helvetica, sans-serif","font-size","18px","color","#ffffff","font-weight","bold","line-height","21px","-webkit-text-size-adjust","none","text-align","center","padding-top","9px","padding-bottom","41px"],["width","25",1,"doubleCol","pt15",2,"font-size","0px","line-height","0px"],["align","left","valign","top","width","183","bgcolor","#005482",1,"doubleCol"],["align","center","valign","top",1,"pt32","fs40",2,"font-family","Arial, Helvetica, sans-serif","font-size","50px","color","#FFFFFF","font-weight","bold","line-height","58px","-webkit-text-size-adjust","none","padding-top","35px","text-align","center"],["href","https://mylifeapp.com/UCBI","target","_blank",2,"text-decoration","none","font-weight","bold","color","#FFFFFF"],["align","left","valign","top",1,"fs22","pb30",2,"font-family","Arial, Helvetica, sans-serif","font-size","18px","color","#ffffff","font-weight","bold","line-height","21px","-webkit-text-size-adjust","none","text-align","center","padding-top","9px"],["width","25",1,"doubleCol","pt19",2,"font-size","0px","line-height","0px"],["align","left","valign","top","width","183","bgcolor","#0076A8",1,"doubleCol"],["align","center","valign","top",1,"pt41","fs40",2,"font-family","Arial, Helvetica, sans-serif","font-size","50px","color","#FFFFFF","font-weight","bold","line-height","58px","-webkit-text-size-adjust","none","padding-top","35px","text-align","center"],["align","left","valign","top",1,"fs22","pt13","pb36",2,"font-family","Arial, Helvetica, sans-serif","font-size","18px","color","#ffffff","font-weight","bold","line-height","21px","-webkit-text-size-adjust","none","text-align","center","padding-top","9px"],["width","51",1,"w14",2,"font-size","0px","line-height","0px"],["align","center","valign","top",1,"no-mobile",2,"padding-top","44px","padding-bottom","46px"],["href","#tbt","target","_blank",2,"width","126px","display","block","margin","0px auto"],["src","../../assets/images/email_2/btn-1.png","width","126","height","35","alt","Get Free Quote",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],[1,"mobile-only","pt28","pb52",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["href","#tbt","target","_blank",2,"width","164px","display","block","margin","0px auto"],["src","../../assets/images/email_2/btn-1_s.png","width","164","height","39","alt","Get Free Quote",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top","bgcolor","#EDEDED",2,"padding-bottom","22px"],["width","95",1,"w30",2,"font-size","0px","line-height","0px"],["align","center",1,"fs26","pt43","pb36",2,"font-family","Arial, Helvetica, sans-serif","font-size","21px","line-height","25px","color","#003865","text-align","center","font-weight","bold","padding-top","25px","padding-bottom","17px"],["align","left","valign","top","width","207",1,"doubleCol"],["align","left","valign","top",1,"fs20",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","color","#63666A","font-weight","bold","line-height","20px","-webkit-text-size-adjust","none","text-align","center"],["align","left","valign","top",1,"fs20","pt14",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","color","#63666A","font-weight","normal","line-height","21px","-webkit-text-size-adjust","none","text-align","center","padding-top","12px"],[1,"no-mobile"],["align","center","valign","top",1,"no-mobile",2,"padding-top","32px"],["href","#tbt","target","_blank",2,"width","104px","display","block","margin","0px auto"],["src","../../assets/images/email_2/btn.png","width","104","height","35","alt","Read More",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],[1,"mobile-only","pt22","pb39",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["href","#tbt","target","_blank",2,"width","136px","display","block","margin","0px auto"],["src","../../assets/images/email_2/btn_s.png","width","136","height","39","alt","Read More",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top","width","97",1,"doubleCol"],["width","48",1,"w30",2,"font-size","0px","line-height","0px"],["height","15","width","100%",1,"no-mobile",2,"border-collapse","collapse","mso-table-lspace","0pt","mso-table-rspace","0pt","mso-line-height-rule","exactly","line-height","1px"],["height","153","bgcolor","#63666A","width","1",1,"line",2,"border-collapse","collapse","mso-table-lspace","0pt","mso-table-rspace","0pt","mso-line-height-rule","exactly","line-height","1px"],["align","left","valign","top",1,"fs20","pt37",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","color","#63666A","font-weight","bold","line-height","20px","-webkit-text-size-adjust","none","text-align","center"],["align","left","valign","top",1,"fs20",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","color","#63666A","font-weight","normal","line-height","21px","-webkit-text-size-adjust","none","text-align","center","padding-top","12px"],[1,"mobile-only","pt24","pb21",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["width","96",1,"w30",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#999999",1,"pb48",2,"padding-bottom","23px"],["width","50",1,"w25",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs14","pt39","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-top","26px"],["align","left","valign","top",1,"fs14","pb20","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-bottom","14px"],["align","left","valign","top",1,"fs14","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal"],["align","left","valign","top",1,"fs14","text-center","pt21",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-top","14px"],["href","#tbt","target","_blank",2,"color","#ffffff","text-decoration","underline"],[2,"color","#ffffff","text-decoration","underline"],["align","left","valign","top",1,"fs14","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-bottom","30px"],["align","left","valign","top","width","444",1,"doubleCol","mxAuto"],["src","../../assets/images/email_2/member_logo.png","width","136","height","35","alt","Member FDIC. NMLS# 421841",1,"mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top",1,"pt35","doubleCol","w179","mxAuto",2,"padding-top","4px"],["align","left","valign","top","width","38",1,"w49"],["href","#tbt",2,"width","25px","display","block"],["src","../../assets/images/email_2/facebook.png","width","25","height","25","alt","Facebook Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top","width","42",1,"w50"],["src","../../assets/images/email_2/instagram.png","width","25","height","25","alt","Instagram Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top","width","42",1,"w49"],["href","#tbt",2,"width","30px","display","block"],["src","../../assets/images/email_2/linkedin.png","width","30","height","25","alt","Linkedin Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["href","#tbt",2,"width","31px","display","block"],["src","../../assets/images/email_2/twitter.png","width","31","height","25","alt","Twitter Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["border","0","cellpadding","0","cellspacing","0"],[1,"no-mobile",2,"min-width","500px"],[1,"gmail",2,"white-space","nowrap","font","15px courier","line-height","0"]],template:function(r,o){r&1&&(c(0,"html",0)(1,"head"),m(2,"meta",1)(3,"meta",2)(4,"meta",3)(5,"meta",4)(6,"meta",5),d(),c(7,"body",6)(8,"div",7)(9,"table",8)(10,"tr")(11,"td",9),p(12,"Life insurance is important.\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0"),d()(),c(13,"tr")(14,"td",10)(15,"table",11)(16,"tr")(17,"td",12)(18,"table",13)(19,"tr")(20,"td",14),p(21,"\xA0"),d(),c(22,"td",15)(23,"a",16)(24,"span",17),p(25,"View Online"),d()()(),c(26,"td",18),p(27,"\xA0"),d()()()()(),c(28,"tr")(29,"td",19),p(30,"Life Insurance "),c(31,"span",20),p(32,"made quick and easy"),d()()(),c(33,"tr")(34,"td",21)(35,"table",13)(36,"tr")(37,"td",22),p(38,"\xA0"),d(),c(39,"td",23)(40,"table",13)(41,"tr")(42,"td",24)(43,"a",25),m(44,"img",26),d()()(),c(45,"tr")(46,"td",27)(47,"table",13)(48,"tr")(49,"td",28)(50,"a",29)(51,"span",30),p(52,"Personal"),d()()(),c(53,"td",31)(54,"a",29)(55,"span",30),p(56,"Business"),d()()()()()()()()(),c(57,"td",22),p(58,"\xA0"),d()()()()(),c(59,"tr")(60,"td",23)(61,"table",13)(62,"tr")(63,"td",32),p(64,"\xA0"),d(),c(65,"td",23)(66,"table",13)(67,"tr")(68,"td",23)(69,"table",13)(70,"tr")(71,"td",33)(72,"table",13)(73,"tr")(74,"td",34)(75,"a",35),m(76,"img",36),d()()()()()(),c(77,"tr")(78,"td",37)(79,"a",35),m(80,"img",38),d()()()()()()()(),c(81,"td",32),p(82,"\xA0"),d()()()()(),c(83,"tr")(84,"td",23)(85,"table",13)(86,"tr")(87,"td",39),p(88,"\xA0"),d(),c(89,"td",23)(90,"table",13)(91,"tr")(92,"td",40),p(93,"United Community Bank is here to help you do what you need to do to protect and provide for your loved ones quickly and easily."),d()(),c(94,"tr")(95,"td",41),p(96,"Life insurance in 3 simple steps"),d()()()(),c(97,"td",39),p(98,"\xA0"),d()()()()(),c(99,"tr")(100,"td",23)(101,"table",13)(102,"tr")(103,"td",42),p(104,"\xA0"),d(),c(105,"td",23)(106,"table",13)(107,"tr")(108,"td",23)(109,"table",13)(110,"tr")(111,"th",43)(112,"table",13)(113,"tr")(114,"td",44)(115,"a",45)(116,"span",46),p(117,"1"),d()()()(),c(118,"tr")(119,"td",47)(120,"a",45)(121,"span",46),p(122,"Tell us about your insurance needs."),d()()()()()(),c(123,"th",48),p(124,"\xA0"),d(),c(125,"th",49)(126,"table",13)(127,"tr")(128,"td",50)(129,"a",51)(130,"span",46),p(131,"2"),d()()()(),c(132,"tr")(133,"td",52)(134,"a",51)(135,"span",46),p(136,"Compare custom insurance\xA0quotes."),d()()()()()(),c(137,"th",53),p(138,"\xA0"),d(),c(139,"th",54)(140,"table",13)(141,"tr")(142,"td",55)(143,"a",51)(144,"span",46),p(145,"3"),d()()()(),c(146,"tr")(147,"td",56)(148,"a",51)(149,"span",46),p(150,"Talk to an insurance professional."),d()()()()()()()()()()()(),c(151,"td",57),p(152,"\xA0"),d()()()()(),c(153,"tr")(154,"td",23)(155,"table",13)(156,"tr")(157,"td",58)(158,"a",59),m(159,"img",60),d()()(),c(160,"tr")(161,"td",61)(162,"a",62),m(163,"img",63),d()()()()()(),c(164,"tr")(165,"td",64)(166,"table",13)(167,"tr")(168,"td",65),p(169,"\xA0"),d(),c(170,"td",23)(171,"table",13)(172,"tr")(173,"td",66),p(174,"Understand Your\xA0Options"),d()(),c(175,"tr")(176,"td",23)(177,"table",13)(178,"tr")(179,"th",67)(180,"table",13)(181,"tr")(182,"td",68),p(183,"What\u2019s the value?"),d()(),c(184,"tr")(185,"td",69),p(186,"Explore some scenarios\xA0"),c(187,"span",70),m(188,"br"),d(),p(189,"that could help you develop a deeper understanding of the value of life insurance."),d()(),c(190,"tr")(191,"td",23)(192,"table",13)(193,"tr")(194,"td",71)(195,"a",72),m(196,"img",73),d()()(),c(197,"tr")(198,"td",74)(199,"a",75),m(200,"img",76),d()()()()()()()(),c(201,"th",77)(202,"table",13)(203,"tr")(204,"td",78),p(205,"\xA0"),d(),c(206,"td",23)(207,"table",13)(208,"tr"),m(209,"td",79),d(),c(210,"tr"),m(211,"td",80),d()()(),c(212,"td",78),p(213,"\xA0"),d()()()(),c(214,"th",67)(215,"table",13)(216,"tr")(217,"td",81),p(218,"Term versus whole life"),d()(),c(219,"tr")(220,"td",82),p(221,"Learn about the tradeoffs between short-term premium\xA0expenses and lifelong coverage."),d()(),c(222,"tr")(223,"td",23)(224,"table",13)(225,"tr")(226,"td",71)(227,"a",72),m(228,"img",73),d()()(),c(229,"tr")(230,"td",83)(231,"a",75),m(232,"img",76),d()()()()()()()()()()()()()(),c(233,"td",84),p(234,"\xA0"),d()()()()(),c(235,"tr")(236,"td",85)(237,"table",13)(238,"tr")(239,"td",86),p(240,"\xA0"),d(),c(241,"td",23)(242,"table",13)(243,"tr")(244,"td",87),p(245,"\xA9 2023 United Community Bank"),d()(),c(246,"tr")(247,"td",88),p(248,"2 West Washi\u200Cngton Street, Suite 7\u200C00, Green\u200Cville, South Car\u200Colina 29\u200C601"),d()(),c(249,"tr")(250,"td",88),p(251,"You are receiving this email because you "),c(252,"span",20),p(253,"are a United"),d(),p(254," Community Bank Customer."),d()(),c(255,"tr")(256,"td",89),p(257,"This is an advertisement"),d()(),c(258,"tr")(259,"td",90),p(260,"Help us reach you with the "),c(261,"span",20),p(262,"right information"),d(),p(263,". "),c(264,"span",20),p(265,"Adjust your email preferences "),c(266,"a",91)(267,"span",92),p(268,"here"),d()(),p(269,"."),d()()(),c(270,"tr")(271,"td",93),p(272,"Want to stop receiving emails from United Community Bank? "),c(273,"a",91)(274,"span",92),p(275,"Unsubscribe here"),d()(),p(276,"."),d()(),c(277,"tr")(278,"td",23)(279,"table",13)(280,"tr")(281,"th",94),m(282,"img",95),d(),c(283,"th",96)(284,"table",13)(285,"tr")(286,"td",97)(287,"a",98),m(288,"img",99),d()(),c(289,"td",100)(290,"a",98),m(291,"img",101),d()(),c(292,"td",102)(293,"a",103),m(294,"img",104),d()(),c(295,"td",23)(296,"a",105),m(297,"img",106),d()()()()()()()()()()(),c(298,"td",86),p(299,"\xA0"),d()()()()()()()()()(),c(300,"table",107)(301,"tr")(302,"td",108)(303,"div",109),p(304,"\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"),d()()()()()())},styles:["p[_ngcontent-%COMP%]{margin:300px}",`.gmail[_ngcontent-%COMP%] {
    display: none !important;
    width: 0 !important;
}
a[_ngcontent-%COMP%]:link {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:visited {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:hover {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:active {
    color: #267ed4;
}
.nolinkcolor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
    color: #3D4543 !important;
    text-decoration: none !important;
}
table[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
    border-collapse: collapse !important;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
}
button[_ngcontent-%COMP%] {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    cursor: default !important;
    font-size: 0px !important;
    line-height: 0px !important;
}
td[_ngcontent-%COMP%] {
    font-size: 0px;
    line-height: 0px;
    mso-text-raise: 20% !important;
}
div[_ngcontent-%COMP%] {
    font-size: 0px;
    line-height: 0px;
}
th[_ngcontent-%COMP%] {
    font-weight: normal !important;
}
img.g-img[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {
    display: none;
}

@media only screen and (max-width: 700px) {
body[_ngcontent-%COMP%] {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
.dBlock[_ngcontent-%COMP%] {
    display: block !important;
}
.no-mobile[_ngcontent-%COMP%] {
    text-indent: -99999em !important;
    display: none !important;
    width: 0 !important;
}
.mobile-only[_ngcontent-%COMP%] {
    text-indent: 0 !important;
    display: block !important;
    height: auto !important;
    visibility: visible !important;
    overflow: visible !important;
    max-height: none !important;
}
.all[_ngcontent-%COMP%] {
    width: 320px !important;
}
.doubleCol[_ngcontent-%COMP%] {
    display: block !important;
    width: 100% !important;
    margin: 0 auto !important;
}
.w212[_ngcontent-%COMP%] {
    width: 212px !important;
}
.w206[_ngcontent-%COMP%] {
    width: 206px !important;
}
.w204[_ngcontent-%COMP%] {
    width: 204px !important;
}
.w194[_ngcontent-%COMP%] {
    width: 194px !important;
}
.w179[_ngcontent-%COMP%] {
    width: 179px !important;
}
.w151[_ngcontent-%COMP%] {
    width: 151px !important;
}
.w140[_ngcontent-%COMP%] {
    width: 140px !important;
}
.w130[_ngcontent-%COMP%] {
    width: 130px !important;
}
.w124[_ngcontent-%COMP%] {
    width: 124px !important;
}
.w90[_ngcontent-%COMP%] {
    width: 90px !important;
}
.w50[_ngcontent-%COMP%] {
    width: 50px !important;
}
.w49[_ngcontent-%COMP%] {
    width: 49px !important;
}
.w30[_ngcontent-%COMP%] {
    width: 30px !important;
}
.w25[_ngcontent-%COMP%] {
    width: 25px !important;
}
.w22[_ngcontent-%COMP%] {
    width: 22px !important;
}
.w24[_ngcontent-%COMP%] {
    width: 24px !important;
}
.w16[_ngcontent-%COMP%] {
    width: 16px !important;
}
.w15[_ngcontent-%COMP%] {
    width: 15px !important;
}
.w14[_ngcontent-%COMP%] {
    width: 14px !important;
}
.w12[_ngcontent-%COMP%] {
    width: 12px !important;
}
.w10[_ngcontent-%COMP%] {
    width: 10px !important;
}
.w5[_ngcontent-%COMP%] {
    width: 5px !important;
}
.memberLogo[_ngcontent-%COMP%] {
    width: 78px !important;
    height: 20px !important;
}
.learnMore[_ngcontent-%COMP%] {
    width: 166px !important;
    height: 40px !important;
}
.unitedLogo[_ngcontent-%COMP%] {
    width: 194px !important;
    height: 56px !important;
}
.fs45[_ngcontent-%COMP%] {
    font-size: 45px !important;
    line-height: 45px !important;
}
.fs37[_ngcontent-%COMP%] {
    font-size: 37px !important;
    line-height: 37px !important;
}
.fs26[_ngcontent-%COMP%] {
    font-size: 26px !important;
    line-height: 32px !important;
}
.fs23[_ngcontent-%COMP%] {
    font-size: 23px !important;
    line-height: 25px !important;
}
.fs22[_ngcontent-%COMP%] {
    font-size: 22px !important;
    line-height: 24px !important;
}
.fs20[_ngcontent-%COMP%] {
    font-size: 20px !important;
    line-height: 28px !important;
}
.fs20a[_ngcontent-%COMP%] {
    font-size: 20px !important;
    line-height: 23px !important;
}
.fs18[_ngcontent-%COMP%] {
    font-size: 18px !important;
    line-height: 24px !important;
}
.fs18a[_ngcontent-%COMP%] {
    font-size: 18px !important;
    line-height: 20px !important;
}
.fs17[_ngcontent-%COMP%] {
    font-size: 17px !important;
    line-height: 23px !important;
}
.fs16[_ngcontent-%COMP%] {
    font-size: 16px !important;
    line-height: 20px !important;
}
.fs15[_ngcontent-%COMP%] {
    font-size: 15px !important;
}
.fs14[_ngcontent-%COMP%] {
    font-size: 14px !important;
    line-height: 20px !important;
}
.fs13[_ngcontent-%COMP%] {
    font-size: 13px !important;
    line-height: 18px !important;
}
.fs12[_ngcontent-%COMP%] {
    font-size: 12px !important;
    line-height: 17px !important;
}
.fs11[_ngcontent-%COMP%] {
    font-size: 11px !important;
    line-height: 15px !important;
}
.fs9[_ngcontent-%COMP%] {
    font-size: 9px !important;
    line-height: 13px !important;
}
.fs7[_ngcontent-%COMP%] {
    font-size: 7px !important;
    line-height: 10px !important;
}
.fs6[_ngcontent-%COMP%] {
    font-size: 6px !important;
    line-height: 10px !important;
}
.pt53[_ngcontent-%COMP%] {
    padding-top: 53px !important;
}
.pt49[_ngcontent-%COMP%] {
    padding-top: 49px !important;
}
.pt48[_ngcontent-%COMP%] {
    padding-top: 48px !important;
}
.pt47[_ngcontent-%COMP%] {
    padding-top: 47px !important;
}
.pt43[_ngcontent-%COMP%] {
    padding-top: 43px !important;
}
.pt41[_ngcontent-%COMP%] {
    padding-top: 41px !important;
}
.pt40[_ngcontent-%COMP%] {
    padding-top: 40px !important;
}
.pt39[_ngcontent-%COMP%] {
    padding-top: 39px !important;
}
.pt37[_ngcontent-%COMP%] {
    padding-top: 37px !important;
}
.pt38[_ngcontent-%COMP%] {
    padding-top: 38px !important;
}
.pt35[_ngcontent-%COMP%] {
    padding-top: 35px !important;
}
.pt32[_ngcontent-%COMP%] {
    padding-top: 32px !important;
}
.pt30[_ngcontent-%COMP%] {
    padding-top: 30px !important;
}
.pt29[_ngcontent-%COMP%] {
    padding-top: 29px !important;
}
.pt28[_ngcontent-%COMP%] {
    padding-top: 28px !important;
}
.pt27[_ngcontent-%COMP%] {
    padding-top: 27px !important;
}
.pt26[_ngcontent-%COMP%] {
    padding-top: 26px !important;
}
.pt25[_ngcontent-%COMP%] {
    padding-top: 25px !important;
}
.pt24[_ngcontent-%COMP%] {
    padding-top: 24px !important;
}
.pt23[_ngcontent-%COMP%] {
    padding-top: 23px !important;
}
.pt22[_ngcontent-%COMP%] {
    padding-top: 22px !important;
}
.pt21[_ngcontent-%COMP%] {
    padding-top: 21px !important;
}
.pt20[_ngcontent-%COMP%] {
    padding-top: 20px !important;
}
.pt19[_ngcontent-%COMP%] {
    padding-top: 19px !important;
}
.pt16[_ngcontent-%COMP%] {
    padding-top: 16px !important;
}
.pt15[_ngcontent-%COMP%] {
    padding-top: 15px !important;
}
.pt14[_ngcontent-%COMP%] {
    padding-top: 14px !important;
}
.pt13[_ngcontent-%COMP%] {
    padding-top: 13px !important;
}
.pt12[_ngcontent-%COMP%] {
    padding-top: 12px !important;
}
.pt11[_ngcontent-%COMP%] {
    padding-top: 11px !important;
}
.pt10[_ngcontent-%COMP%] {
    padding-top: 10px !important;
}
.pt9[_ngcontent-%COMP%] {
    padding-top: 9px !important;
}
.pt8[_ngcontent-%COMP%] {
    padding-top: 8px !important;
}
.pt7[_ngcontent-%COMP%] {
    padding-top: 7px !important;
}
.pt6[_ngcontent-%COMP%] {
    padding-top: 6px !important;
}
.pt3[_ngcontent-%COMP%] {
    padding-top: 3px !important;
}
.pt2[_ngcontent-%COMP%] {
    padding-top: 2px !important;
}
.pb57[_ngcontent-%COMP%] {
    padding-bottom: 57px !important;
}
.pb52[_ngcontent-%COMP%] {
    padding-bottom: 52px !important;
}
.pb51[_ngcontent-%COMP%] {
    padding-bottom: 51px !important;
}
.pb49[_ngcontent-%COMP%] {
    padding-bottom: 49px !important;
}
.pb48[_ngcontent-%COMP%] {
    padding-bottom: 48px !important;
}
.pb43[_ngcontent-%COMP%] {
    padding-bottom: 43px !important;
}
.pb41[_ngcontent-%COMP%] {
    padding-bottom: 41px !important;
}
.pb39[_ngcontent-%COMP%] {
    padding-bottom: 39px !important;
}
.pb38[_ngcontent-%COMP%] {
    padding-bottom: 38px !important;
}
.pb37[_ngcontent-%COMP%] {
    padding-bottom: 37px !important;
}
.pb36[_ngcontent-%COMP%] {
    padding-bottom: 36px !important;
}
.pb35[_ngcontent-%COMP%] {
    padding-bottom: 35px !important;
}
.pb32[_ngcontent-%COMP%] {
    padding-bottom: 32px !important;
}
.pb30[_ngcontent-%COMP%] {
    padding-bottom: 30px !important;
}
.pb29[_ngcontent-%COMP%] {
    padding-bottom: 29px !important;
}
.pb28[_ngcontent-%COMP%] {
    padding-bottom: 28px !important;
}
.pb27[_ngcontent-%COMP%] {
    padding-bottom: 27px !important;
}
.pb25[_ngcontent-%COMP%] {
    padding-bottom: 25px !important;
}
.pb22[_ngcontent-%COMP%] {
    padding-bottom: 22px !important;
}
.pb21[_ngcontent-%COMP%] {
    padding-bottom: 21px !important;
}
.pb20[_ngcontent-%COMP%] {
    padding-bottom: 20px !important;
}
.pb19[_ngcontent-%COMP%] {
    padding-bottom: 19px !important;
}
.pb17[_ngcontent-%COMP%] {
    padding-bottom: 17px !important;
}
.pb16[_ngcontent-%COMP%] {
    padding-bottom: 16px !important;
}
.pb15[_ngcontent-%COMP%] {
    padding-bottom: 15px !important;
}
.pb14[_ngcontent-%COMP%] {
    padding-bottom: 14px !important;
}
.pb13[_ngcontent-%COMP%] {
    padding-bottom: 13px !important;
}
.pb12[_ngcontent-%COMP%] {
    padding-bottom: 12px !important;
}
.pb11[_ngcontent-%COMP%] {
    padding-bottom: 11px !important;
}
.pb10[_ngcontent-%COMP%] {
    padding-bottom: 10px !important;
}
.pb9[_ngcontent-%COMP%] {
    padding-bottom: 9px !important;
}
.pb8[_ngcontent-%COMP%] {
    padding-bottom: 8px !important;
}
.pb7[_ngcontent-%COMP%] {
    padding-bottom: 7px !important;
}
.pb6[_ngcontent-%COMP%] {
    padding-bottom: 6px !important;
}
.pb3[_ngcontent-%COMP%] {
    padding-bottom: 3px !important;
}
.pl35[_ngcontent-%COMP%] {
    padding-left: 35px !important;
}
.pl14[_ngcontent-%COMP%] {
    padding-left: 14px !important;
}
.pl9[_ngcontent-%COMP%] {
    padding-left: 9px !important;
}
.pl6[_ngcontent-%COMP%] {
    padding-left: 6px !important;
}
.pl0[_ngcontent-%COMP%] {
    padding-left: 0px !important;
}
.pr35[_ngcontent-%COMP%] {
    padding-right: 35px !important;
}
.pr15[_ngcontent-%COMP%] {
    padding-right: 15px !important;
}
.pr14[_ngcontent-%COMP%] {
    padding-right: 14px !important;
}
.pr9[_ngcontent-%COMP%] {
    padding-right: 9px !important;
}
.pr6[_ngcontent-%COMP%] {
    padding-right: 6px !important;
}
.pr0[_ngcontent-%COMP%] {
    padding-right: 0px !important;
}
.pl15[_ngcontent-%COMP%] {
    padding-left: 15px !important;
}
.text-center[_ngcontent-%COMP%] {
    text-align: center !important;
}
.mxAuto[_ngcontent-%COMP%] {
    margin: 0px auto !important;
}
.lh24[_ngcontent-%COMP%] {
    line-height: 24px !important;
}
.lh23[_ngcontent-%COMP%] {
    line-height: 23px !important;
}
.lh20[_ngcontent-%COMP%] {
    line-height: 20px !important;
}
.open[_ngcontent-%COMP%] {
    width: 206px !important;
    height: auto !important;
}
.textCenter[_ngcontent-%COMP%] {
    text-align: center !important;
}
.store[_ngcontent-%COMP%] {
    width: 202px !important;
    height: auto !important;
}
.btn[_ngcontent-%COMP%] {
    width: 242px !important;
    height: auto !important;
}
.line[_ngcontent-%COMP%] {
    width: 100% !important;
    height: 1px !important;
}
.fs40[_ngcontent-%COMP%] {
    font-size: 40px !important;
    line-height: 40px !important;
}
}`]})}}return e})();var of=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["app-email-3"]],standalone:!0,features:[ie],decls:245,vars:0,consts:[[0,"xmlns","v","urn:schemas-microsoft-com:vml",0,"xmlns","o","urn:schemas-microsoft-com:office:office",0,"xmlns","w","urn:schemas-microsoft-com:office:word"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1, maximum-scale=1"],["name","format-detection","content","email=no"],["name","format-detection","content","telephone=no"],["name","format-detection","content","address=no"],["yahoo","fix",1,"bg",2,"margin","0","padding","0","font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","1.231","-webkit-text-size-adjust","none"],["bgcolor","#ffffff","align","center"],["bgcolor","#ffffff","align","center","cellpadding","0","cellspacing","0","border","0","width","100%",2,"margin","0 auto"],[2,"font-family","Arial, Helvetica, sans-serif","font-size","0px","line-height","0px","color","#ffffff","mso-hide","all"],["align","center","width","700","id","iosWrapper",1,"all"],["width","700","border","0","cellspacing","0","cellpadding","0",1,"all"],["align","left","valign","top",1,"pt13","pb8",2,"padding-top","6px","padding-bottom","5px"],["width","100%","border","0","cellspacing","0","cellpadding","0"],["width","21",2,"font-size","0px","line-height","0px"],["align","left","valign","top",2,"font-family","Arial, Helvetica, sans-serif","font-size","14px","line-height","21px","color","#999999","text-align","right","font-weight","normal"],["href","#TBT","target","_blank",2,"color","#999999","text-decoration","none"],[2,"color","#999999","text-decoration","none"],["width","52",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#999999",1,"lh24","pb8","pt8","pl14","pr14",2,"font-family","Arial, Helvetica, sans-serif","font-size","18px","line-height","21px","color","#ffffff","text-align","center","font-weight","normal","padding-top","12px","padding-bottom","7px","letter-spacing","0.21px"],["align","left","valign","top","bgcolor","#003865"],["width","252",1,"w50",2,"font-size","0px","line-height","0px"],["align","left","valign","top"],["align","center","valign","top",1,"pt23",2,"padding-top","25px"],["href","#TBT","target","_blank",1,"unitedLogo",2,"width","250px","display","block","margin","0px auto"],["src","assets/images/email_3/bank_logo.png","width","250","height","73","alt","United Commnunity Bank \xAE",1,"unitedLogo",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top",1,"pt8","pb17",2,"padding-top","6px","padding-bottom","21px"],["align","left","valign","top",1,"fs18","pl0",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","19px","color","#ffffff","text-align","left","font-weight","bold","padding-left","28px"],["href","#TBT","target","_blank",2,"color","#ffffff","text-decoration","underline","font-weight","bold"],[2,"color","#ffffff","text-decoration","underline","font-weight","bold"],["align","left","valign","top",1,"fs18","pr0",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","19px","color","#ffffff","text-align","right","font-weight","bold","padding-right","28px"],["width","49",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"no-mobile",2,"padding-top","45px"],["align","left","valign","bottom"],["href","#TBT","target","_blank"],["src","assets/images/email_3/banner.png","width","600","height","245","alt","Does your checking account still fit?",1,"g-img",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0 auto"],[1,"mobile-only","pt21",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["src","assets/images/email_3/banner_s.png","width","290","height","222","alt","Does your checking account still fit?",2,"border","0","display","block","font-size","10px","line-height","12px","text-align","center","margin","0 auto"],["width","20",1,"w15",2,"font-size","0px","line-height","0px"],["width","84",1,"w15",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs20","pt25",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","20px","color","#63666A","text-align","center","font-weight","normal","padding-top","44px"],[1,"no-mobile"],["align","center","valign","top",1,"no-mobile",2,"padding-top","33px"],["href","#TBT","target","_blank",2,"width","112px","display","block","margin","0px auto"],["src","assets/images/email_3/btn1.png","width","112","height","35","alt","Check It Out",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],[1,"mobile-only","pt24",2,"font-size","0px","line-height","0px","display","none","mso-hide","all"],["href","#TBT","target","_blank",2,"width","146px","display","block","margin","0px auto"],["src","assets/images/email_3/btn1_s.png","width","146","height","39","alt","Check It Out",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center","margin","0px auto"],["align","left","valign","top",1,"fs20","pt45",2,"font-family","Arial, Helvetica, sans-serif","font-size","16px","line-height","20px","color","#63666A","text-align","center","font-weight","normal","padding-top","42px"],["href","#TBT","target","_blank",2,"text-decoration","underline","font-weight","normal","color","#0076A8"],[2,"text-decoration","underline","font-weight","normal","color","#0076A8"],[2,"white-space","nowrap"],["align","left","valign","top",1,"pt16",2,"padding-top","11px","padding-bottom","45px"],["align","left","valign","top",1,"fs26",2,"font-family","Arial, Helvetica, sans-serif","font-size","21px","line-height","25px","color","#003865","text-align","center","font-weight","bold","padding-bottom","34px","padding-top","34px"],["width","204",1,"no-mobile",2,"font-size","0px","line-height","0px"],["align","left","valign","top","width","135",1,"doubleCol"],["src","assets/images/email_3/ios.png","width","135","height","40","alt","Download on the App Store",1,"store","mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","left"],["width","30",1,"doubleCol","pb28",2,"font-size","0px","line-height","0px"],["src","assets/images/email_3/google.png","width","135","height","40","alt","GET IT ON Google Play",1,"store","mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","left"],["width","201",1,"no-mobile",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#EDEDED",1,"pt49","pb48",2,"padding-top","44px","padding-bottom","43px"],["align","left","valign","top",1,"fs26","pb32",2,"font-family","Arial, Helvetica, sans-serif","font-size","21px","line-height","25px","color","#003865","text-align","center","font-weight","bold","padding-bottom","24px"],["width","139",1,"no-mobile",2,"font-size","0px","line-height","0px"],["align","left","valign","top","width","182",1,"doubleCol"],["src","assets/images/email_3/btn.png","width","182","height","35","alt","Find your nearest location.",1,"btn","mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","left"],["width","58",1,"doubleCol","pb28",2,"font-size","0px","line-height","0px"],["align","left","valign","top","width","180",1,"doubleCol"],["src","assets/images/email_3/btn-2.png","width","180","height","35","alt","Schedule an appointment.",1,"btn","mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","left"],["width","141",1,"no-mobile",2,"font-size","0px","line-height","0px"],["align","left","valign","top","bgcolor","#999999",1,"pb48",2,"padding-bottom","23px"],["width","50",1,"w25",2,"font-size","0px","line-height","0px"],["align","left","valign","top",1,"fs14","pt32","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-top","25px"],["align","left","valign","top",1,"fs14","pb20","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-bottom","14px"],["align","left","valign","top",1,"fs14","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal"],["align","left","valign","top",1,"fs14","text-center","pt21",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-top","14px"],["href","#TBT","target","_blank",2,"color","#ffffff","text-decoration","underline"],[2,"color","#ffffff","text-decoration","underline"],["align","left","valign","top",1,"fs14","text-center",2,"font-family","Arial, Helvetica, sans-serif","font-size","12px","line-height","16px","color","#ffffff","text-align","left","font-weight","normal","padding-bottom","30px"],["align","left","valign","top","width","444",1,"doubleCol","mxAuto"],["src","assets/images/email_3/member_logo.png","width","136","height","35","alt","Member FDIC. NMLS# 421841",1,"mxAuto",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top",1,"pt35","doubleCol","w179","mxAuto",2,"padding-top","4px"],["align","left","valign","top","width","38",1,"w49"],["href","#TBT",2,"width","25px","display","block"],["src","assets/images/email_3/facebook.png","width","25","height","25","alt","Facebook Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top","width","42",1,"w50"],["src","assets/images/email_3/instagram.png","width","25","height","25","alt","Instagram Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["align","left","valign","top","width","42",1,"w49"],["href","#TBT",2,"width","30px","display","block"],["src","assets/images/email_3/linkedin.png","width","30","height","25","alt","Linkedin Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["href","#TBT",2,"width","31px","display","block"],["src","assets/images/email_3/twitter.png","width","31","height","25","alt","Twitter Icon",2,"border","0","display","block","font-size","12px","line-height","13px","text-align","center"],["border","0","cellpadding","0","cellspacing","0"],[1,"no-mobile",2,"min-width","500px"],[1,"gmail",2,"white-space","nowrap","font","15px courier","line-height","0"]],template:function(r,o){r&1&&(c(0,"html",0)(1,"head"),m(2,"meta",1)(3,"meta",2)(4,"meta",3)(5,"meta",4)(6,"meta",5),d(),c(7,"body",6)(8,"div",7)(9,"table",8)(10,"tr")(11,"td",9),p(12,"Why you should revisit your checking account\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0\u200C\xA0"),d()(),c(13,"tr")(14,"td",10)(15,"table",11)(16,"tr")(17,"td",12)(18,"table",13)(19,"tr")(20,"td",14),p(21,"\xA0"),d(),c(22,"td",15)(23,"a",16)(24,"span",17),p(25,"View Online"),d()()(),c(26,"td",18),p(27,"\xA0"),d()()()()(),c(28,"tr")(29,"td",19),p(30,"Why you should revisit your checking account"),d()(),c(31,"tr")(32,"td",20)(33,"table",13)(34,"tr")(35,"td",21),p(36,"\xA0"),d(),c(37,"td",22)(38,"table",13)(39,"tr")(40,"td",23)(41,"a",24),m(42,"img",25),d()()(),c(43,"tr")(44,"td",26)(45,"table",13)(46,"tr")(47,"td",27)(48,"a",28)(49,"span",29),p(50,"Personal"),d()()(),c(51,"td",30)(52,"a",28)(53,"span",29),p(54,"Business"),d()()()()()()()()(),c(55,"td",21),p(56,"\xA0"),d()()()()(),c(57,"tr")(58,"td",22)(59,"table",13)(60,"tr")(61,"td",31),p(62,"\xA0"),d(),c(63,"td",22)(64,"table",13)(65,"tr")(66,"td",22)(67,"table",13)(68,"tr")(69,"td",32)(70,"table",13)(71,"tr")(72,"td",33)(73,"a",34),m(74,"img",35),d()()()()()(),c(75,"tr")(76,"td",36)(77,"a",34),m(78,"img",37),d()()()()()()()(),c(79,"td",38),p(80,"\xA0"),d()()()()(),c(81,"tr")(82,"td",22)(83,"table",13)(84,"tr")(85,"td",39),p(86,"\xA0"),d(),c(87,"td",22)(88,"table",13)(89,"tr")(90,"td",40),p(91,"Over time, your financial needs\xA0change. Maybe you\u2019ve outgrown that\xA0checking account\xA0you opened years ago.\xA0Maybe you\u2019re\xA0"),c(92,"span",41),m(93,"br"),d(),p(94,"missing out\xA0on the latest digital and online conveniences. You "),c(95,"span",41),m(96,"br"),d(),p(97,"owe\xA0yourself a quick review of\xA0what\u2019s available now."),d()(),c(98,"tr")(99,"td",22)(100,"table",13)(101,"tr")(102,"td",42)(103,"a",43),m(104,"img",44),d()()(),c(105,"tr")(106,"td",45)(107,"a",46),m(108,"img",47),d()()()()()(),c(109,"tr")(110,"td",48),p(111,"Don\u2019t settle for the status quo.\xA0"),c(112,"span",41),m(113,"br"),d(),c(114,"a",49)(115,"span",50),p(116,"Opening a convenient new checking account online"),d()(),c(117,"span",51),p(118,"only takes minutes."),d()()()()(),c(119,"td",39),p(120,"\xA0"),d()()()()(),c(121,"tr")(122,"td",52)(123,"table",13)(124,"tr")(125,"td",53),p(126,"Bank anywhere, "),c(127,"span",51),p(128,"anytime with the"),d(),c(129,"span",51),p(130,"United Mobile App."),d()()(),c(131,"tr")(132,"td",22)(133,"table",13)(134,"tr")(135,"td",54),p(136,"\xA0"),d(),c(137,"td",22)(138,"table",13)(139,"tr")(140,"th",55)(141,"a",34),m(142,"img",56),d()(),c(143,"th",57),p(144,"\xA0"),d(),c(145,"th",55)(146,"a",34),m(147,"img",58),d()()()()(),c(148,"td",59),p(149,"\xA0"),d()()()()()()()(),c(150,"tr")(151,"td",60)(152,"table",13)(153,"tr")(154,"td",61),p(155,"Visit us in person"),d()(),c(156,"tr")(157,"td",22)(158,"table",13)(159,"tr")(160,"td",62),p(161,"\xA0"),d(),c(162,"td",22)(163,"table",13)(164,"tr")(165,"th",63)(166,"a",34),m(167,"img",64),d()(),c(168,"th",65),p(169,"\xA0"),d(),c(170,"th",66)(171,"a",34),m(172,"img",67),d()()()()(),c(173,"td",68),p(174,"\xA0"),d()()()()()()()(),c(175,"tr")(176,"td",69)(177,"table",13)(178,"tr")(179,"td",70),p(180,"\xA0"),d(),c(181,"td",22)(182,"table",13)(183,"tr")(184,"td",71),p(185,"\xA9 2023 United Community Bank"),d()(),c(186,"tr")(187,"td",72),p(188,"2 West Washi\u200Cngton Street, Suite 7\u200C00, Green\u200Cville, South Car\u200Colina 29\u200C601"),d()(),c(189,"tr")(190,"td",72),p(191,"You are receiving this email because you "),c(192,"span",51),p(193,"are a United"),d(),p(194," Community Bank Customer."),d()(),c(195,"tr")(196,"td",73),p(197,"This is an advertisement"),d()(),c(198,"tr")(199,"td",74),p(200,"Help us reach you with the "),c(201,"span",51),p(202,"right information"),d(),p(203,". "),c(204,"span",51),p(205,"Adjust your email preferences "),c(206,"a",75)(207,"span",76),p(208,"here"),d()(),p(209,"."),d()()(),c(210,"tr")(211,"td",77),p(212,"Want to stop receiving emails from United Community Bank? "),c(213,"a",75)(214,"span",76),p(215,"Unsubscribe here"),d()(),p(216,"."),d()(),c(217,"tr")(218,"td",22)(219,"table",13)(220,"tr")(221,"th",78),m(222,"img",79),d(),c(223,"th",80)(224,"table",13)(225,"tr")(226,"td",81)(227,"a",82),m(228,"img",83),d()(),c(229,"td",84)(230,"a",82),m(231,"img",85),d()(),c(232,"td",86)(233,"a",87),m(234,"img",88),d()(),c(235,"td",22)(236,"a",89),m(237,"img",90),d()()()()()()()()()()(),c(238,"td",70),p(239,"\xA0"),d()()()()()()()()()(),c(240,"table",91)(241,"tr")(242,"td",92)(243,"div",93),p(244,"\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0"),d()()()()()())},styles:["p[_ngcontent-%COMP%]{margin:300px}",`.gmail[_ngcontent-%COMP%] {
    display: none !important;
    width: 0 !important;
}
a[_ngcontent-%COMP%]:link {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:visited {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:hover {
    color: #267ed4;
}
a[_ngcontent-%COMP%]:active {
    color: #267ed4;
}
.nolinkcolor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
    color: #3D4543 !important;
    text-decoration: none !important;
}
table[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {
    border-collapse: collapse !important;
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
}
button[_ngcontent-%COMP%] {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    cursor: default !important;
    font-size: 0px !important;
    line-height: 0px !important;
}
td[_ngcontent-%COMP%] {
    font-size: 0px;
    line-height: 0px;
    mso-text-raise: 20% !important;
}
div[_ngcontent-%COMP%] {
    font-size: 0px;
    line-height: 0px;
}
th[_ngcontent-%COMP%] {
    font-weight: normal !important;
}
img.g-img[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {
    display: none;
}

@media only screen and (max-width: 700px) {
body[_ngcontent-%COMP%] {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}
.dBlock[_ngcontent-%COMP%] {
    display: block !important;
}
.no-mobile[_ngcontent-%COMP%] {
    text-indent: -99999em !important;
    display: none !important;
    width: 0 !important;
}
.mobile-only[_ngcontent-%COMP%] {
    text-indent: 0 !important;
    display: block !important;
    height: auto !important;
    visibility: visible !important;
    overflow: visible !important;
    max-height: none !important;
}
.all[_ngcontent-%COMP%] {
    width: 320px !important;
}
.doubleCol[_ngcontent-%COMP%] {
    display: block !important;
    width: 100% !important;
    margin: 0 auto !important;
}
.w212[_ngcontent-%COMP%] {
    width: 212px !important;
}
.w204[_ngcontent-%COMP%] {
    width: 204px !important;
}
.w194[_ngcontent-%COMP%] {
    width: 194px !important;
}
.w179[_ngcontent-%COMP%] {
    width: 179px !important;
}
.w151[_ngcontent-%COMP%] {
    width: 151px !important;
}
.w140[_ngcontent-%COMP%] {
    width: 140px !important;
}
.w130[_ngcontent-%COMP%] {
    width: 130px !important;
}
.w124[_ngcontent-%COMP%] {
    width: 124px !important;
}
.w90[_ngcontent-%COMP%] {
    width: 90px !important;
}
.w50[_ngcontent-%COMP%] {
    width: 50px !important;
}
.w49[_ngcontent-%COMP%] {
    width: 49px !important;
}
.w30[_ngcontent-%COMP%] {
    width: 30px !important;
}
.w25[_ngcontent-%COMP%] {
    width: 25px !important;
}
.w22[_ngcontent-%COMP%] {
    width: 22px !important;
}
.w24[_ngcontent-%COMP%] {
    width: 24px !important;
}
.w15[_ngcontent-%COMP%] {
    width: 15px !important;
}
.w12[_ngcontent-%COMP%] {
    width: 12px !important;
}
.w10[_ngcontent-%COMP%] {
    width: 10px !important;
}
.w5[_ngcontent-%COMP%] {
    width: 5px !important;
}
.memberLogo[_ngcontent-%COMP%] {
    width: 78px !important;
    height: 20px !important;
}
.learnMore[_ngcontent-%COMP%] {
    width: 166px !important;
    height: 40px !important;
}
.unitedLogo[_ngcontent-%COMP%] {
    width: 194px !important;
    height: 56px !important;
}
.fs45[_ngcontent-%COMP%] {
    font-size: 45px !important;
    line-height: 45px !important;
}
.fs37[_ngcontent-%COMP%] {
    font-size: 37px !important;
    line-height: 37px !important;
}
.fs26[_ngcontent-%COMP%] {
    font-size: 26px !important;
    line-height: 32px !important;
}
.fs23[_ngcontent-%COMP%] {
    font-size: 23px !important;
    line-height: 25px !important;
}
.fs22[_ngcontent-%COMP%] {
    font-size: 22px !important;
    line-height: 24px !important;
}
.fs20[_ngcontent-%COMP%] {
    font-size: 20px !important;
    line-height: 28px !important;
}
.fs20a[_ngcontent-%COMP%] {
    font-size: 20px !important;
    line-height: 23px !important;
}
.fs18[_ngcontent-%COMP%] {
    font-size: 18px !important;
    line-height: 24px !important;
}
.fs18a[_ngcontent-%COMP%] {
    font-size: 18px !important;
    line-height: 20px !important;
}
.fs16[_ngcontent-%COMP%] {
    font-size: 16px !important;
    line-height: 20px !important;
}
.fs15[_ngcontent-%COMP%] {
    font-size: 15px !important;
}
.fs14[_ngcontent-%COMP%] {
    font-size: 14px !important;
    line-height: 20px !important;
}
.fs13[_ngcontent-%COMP%] {
    font-size: 13px !important;
    line-height: 18px !important;
}
.fs12[_ngcontent-%COMP%] {
    font-size: 12px !important;
    line-height: 17px !important;
}
.fs11[_ngcontent-%COMP%] {
    font-size: 11px !important;
    line-height: 15px !important;
}
.fs9[_ngcontent-%COMP%] {
    font-size: 9px !important;
    line-height: 13px !important;
}
.fs7[_ngcontent-%COMP%] {
    font-size: 7px !important;
    line-height: 10px !important;
}
.fs6[_ngcontent-%COMP%] {
    font-size: 6px !important;
    line-height: 10px !important;
}
.pt53[_ngcontent-%COMP%] {
    padding-top: 53px !important;
}
.pt50[_ngcontent-%COMP%] {
    padding-top: 50px !important;
}
.pt49[_ngcontent-%COMP%] {
    padding-top: 49px !important;
}
.pt47[_ngcontent-%COMP%] {
    padding-top: 47px !important;
}
.pt45[_ngcontent-%COMP%] {
    padding-top: 45px !important;
}
.pt38[_ngcontent-%COMP%] {
    padding-top: 38px !important;
}
.pt35[_ngcontent-%COMP%] {
    padding-top: 35px !important;
}
.pt33[_ngcontent-%COMP%] {
    padding-top: 33px !important;
}
.pt32[_ngcontent-%COMP%] {
    padding-top: 32px !important;
}
.pt29[_ngcontent-%COMP%] {
    padding-top: 29px !important;
}
.pt28[_ngcontent-%COMP%] {
    padding-top: 28px !important;
}
.pt27[_ngcontent-%COMP%] {
    padding-top: 27px !important;
}
.pt26[_ngcontent-%COMP%] {
    padding-top: 26px !important;
}
.pt25[_ngcontent-%COMP%] {
    padding-top: 25px !important;
}
.pt23[_ngcontent-%COMP%] {
    padding-top: 23px !important;
}
.pt24[_ngcontent-%COMP%] {
    padding-top: 24px !important;
}
.pt22[_ngcontent-%COMP%] {
    padding-top: 22px !important;
}
.pt21[_ngcontent-%COMP%] {
    padding-top: 21px !important;
}
.pt20[_ngcontent-%COMP%] {
    padding-top: 20px !important;
}
.pt19[_ngcontent-%COMP%] {
    padding-top: 19px !important;
}
.pt17[_ngcontent-%COMP%] {
    padding-top: 17px !important;
}
.pt16[_ngcontent-%COMP%] {
    padding-top: 16px !important;
}
.pt15[_ngcontent-%COMP%] {
    padding-top: 15px !important;
}
.pt14[_ngcontent-%COMP%] {
    padding-top: 14px !important;
}
.pt13[_ngcontent-%COMP%] {
    padding-top: 13px !important;
}
.pt12[_ngcontent-%COMP%] {
    padding-top: 12px !important;
}
.pt11[_ngcontent-%COMP%] {
    padding-top: 11px !important;
}
.pt10[_ngcontent-%COMP%] {
    padding-top: 10px !important;
}
.pt9[_ngcontent-%COMP%] {
    padding-top: 9px !important;
}
.pt8[_ngcontent-%COMP%] {
    padding-top: 8px !important;
}
.pt7[_ngcontent-%COMP%] {
    padding-top: 7px !important;
}
.pt6[_ngcontent-%COMP%] {
    padding-top: 6px !important;
}
.pt5[_ngcontent-%COMP%] {
    padding-top: 5px !important;
}
.pt3[_ngcontent-%COMP%] {
    padding-top: 3px !important;
}
.pt2[_ngcontent-%COMP%] {
    padding-top: 2px !important;
}
.pb52[_ngcontent-%COMP%] {
    padding-bottom: 52px !important;
}
.pb51[_ngcontent-%COMP%] {
    padding-bottom: 51px !important;
}
.pb49[_ngcontent-%COMP%] {
    padding-bottom: 49px !important;
}
.pb48[_ngcontent-%COMP%] {
    padding-bottom: 48px !important;
}
.pb41[_ngcontent-%COMP%] {
    padding-bottom: 41px !important;
}
.pb38[_ngcontent-%COMP%] {
    padding-bottom: 38px !important;
}
.pb37[_ngcontent-%COMP%] {
    padding-bottom: 37px !important;
}
.pb36[_ngcontent-%COMP%] {
    padding-bottom: 36px !important;
}
.pb33[_ngcontent-%COMP%] {
    padding-bottom: 33px !important;
}
.pb32[_ngcontent-%COMP%] {
    padding-bottom: 32px !important;
}
.pb29[_ngcontent-%COMP%] {
    padding-bottom: 29px !important;
}
.pb28[_ngcontent-%COMP%] {
    padding-bottom: 28px !important;
}
.pb27[_ngcontent-%COMP%] {
    padding-bottom: 27px !important;
}
.pb25[_ngcontent-%COMP%] {
    padding-bottom: 25px !important;
}
.pb22[_ngcontent-%COMP%] {
    padding-bottom: 22px !important;
}
.pb21[_ngcontent-%COMP%] {
    padding-bottom: 21px !important;
}
.pb20[_ngcontent-%COMP%] {
    padding-bottom: 20px !important;
}
.pb18[_ngcontent-%COMP%] {
    padding-bottom: 18px !important;
}
.pb17[_ngcontent-%COMP%] {
    padding-bottom: 17px !important;
}
.pb16[_ngcontent-%COMP%] {
    padding-bottom: 16px !important;
}
.pb15[_ngcontent-%COMP%] {
    padding-bottom: 15px !important;
}
.pb14[_ngcontent-%COMP%] {
    padding-bottom: 14px !important;
}
.pb13[_ngcontent-%COMP%] {
    padding-bottom: 13px !important;
}
.pb12[_ngcontent-%COMP%] {
    padding-bottom: 12px !important;
}
.pb11[_ngcontent-%COMP%] {
    padding-bottom: 11px !important;
}
.pb10[_ngcontent-%COMP%] {
    padding-bottom: 10px !important;
}
.pb9[_ngcontent-%COMP%] {
    padding-bottom: 9px !important;
}
.pb8[_ngcontent-%COMP%] {
    padding-bottom: 8px !important;
}
.pb7[_ngcontent-%COMP%] {
    padding-bottom: 7px !important;
}
.pb3[_ngcontent-%COMP%] {
    padding-bottom: 3px !important;
}
.pl14[_ngcontent-%COMP%] {
    padding-left: 14px !important;
}
.pl9[_ngcontent-%COMP%] {
    padding-left: 9px !important;
}
.pl6[_ngcontent-%COMP%] {
    padding-left: 6px !important;
}
.pl0[_ngcontent-%COMP%] {
    padding-left: 0px !important;
}
.pr9[_ngcontent-%COMP%] {
    padding-right: 9px !important;
}
.pr14[_ngcontent-%COMP%] {
    padding-right: 14px !important;
}
.pr6[_ngcontent-%COMP%] {
    padding-right: 6px !important;
}
.pr0[_ngcontent-%COMP%] {
    padding-right: 0px !important;
}
.text-center[_ngcontent-%COMP%] {
    text-align: center !important;
}
.mxAuto[_ngcontent-%COMP%] {
    margin: 0px auto !important;
}
.lh24[_ngcontent-%COMP%] {
    line-height: 24px !important;
}
.lh23[_ngcontent-%COMP%] {
    line-height: 23px !important;
}
.lh20[_ngcontent-%COMP%] {
    line-height: 20px !important;
}
.talk[_ngcontent-%COMP%] {
    width: 124px !important;
    height: 39px !important;
}
.textCenter[_ngcontent-%COMP%] {
    text-align: center !important;
}
.store[_ngcontent-%COMP%] {
    width: 202px !important;
    height: auto !important;
}
.btn[_ngcontent-%COMP%] {
    width: 242px !important;
    height: auto !important;
}
}`]})}}return e})();var sf=[{path:"home",component:Sa},{path:"email-1",component:nf},{path:"email-2",component:rf},{path:"email-3",component:of},{path:"**",component:Sa}];var af={providers:[tf(sf)]};var uf=(()=>{class e{constructor(){this.title="EMAILS PORTFOLIO",this.menuOpen=!1}toggleMenu(n){this.menuOpen=!this.menuOpen,this.setActiveLink(n);let r=document.querySelectorAll(".navegation__nav-links");r.forEach(o=>{o.style.height="100%"}),console.log(r)}setActiveLink(n){document.querySelectorAll(".navegation__nav-links a").forEach(o=>o.classList.remove("active-link")),n.target.classList.add("active-link")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["app-navegation"]],standalone:!0,features:[ie],decls:16,vars:3,consts:[[1,"navegation"],["routerLink","/home",1,"navegation__nav-icon",3,"click"],[1,"bi","bi-list","showOnMobile"],[1,"navegation__nav-links"],["routerLink","/email-1",3,"click"],["routerLink","/email-2",3,"click"],["routerLink","/email-3",3,"click"]],template:function(r,o){r&1&&(c(0,"header")(1,"nav",0)(2,"div",1),Je("click",function(s){return o.toggleMenu(s)}),p(3),m(4,"i",2),d(),c(5,"ul",3)(6,"li")(7,"a",4),Je("click",function(s){return o.toggleMenu(s)}),p(8,"Email_1"),d()(),c(9,"li")(10,"a",5),Je("click",function(s){return o.toggleMenu(s)}),p(11,"Email_2"),d()(),c(12,"li")(13,"a",6),Je("click",function(s){return o.toggleMenu(s)}),p(14,"Email_3"),d()()()()(),m(15,"router-outlet")),r&2&&(Cs(3),Ts(" ",o.title," "),Cs(2),Ss("show",o.menuOpen))},dependencies:[nr,ef],styles:['.showOnMobile[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){.showOnMobile[_ngcontent-%COMP%]{display:inline}}.navegation[_ngcontent-%COMP%]{z-index:2;top:0;width:100%;display:flex;justify-content:space-between;align-items:center;padding:60px 90px;background-color:#282c30}@media (max-width: 768px){.navegation[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}}.navegation__nav-links[_ngcontent-%COMP%]{list-style:none;display:flex;margin:0;padding:0}@media (max-width: 768px){.navegation__nav-links[_ngcontent-%COMP%]{display:none;flex-direction:column;width:100%;text-align:center}}.navegation__nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px}@media (max-width: 768px){.navegation__nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:14px 0}}.navegation__nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#adb5bd;text-decoration:none;padding:5px 0;transition:color .3s ease;position:relative;font-size:20px}.navegation__nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background-color:#fff;transform:scaleX(0);transform-origin:right;transition:transform .3s ease}.navegation__nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff7f00}.navegation__nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{transform:scaleX(1);transform-origin:left}.navegation__nav-links[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%]:after{transform:scaleX(0)!important}.navegation__nav-icon[_ngcontent-%COMP%]{font-family:Roboto-italic;font-size:20px;color:#adb5bd;transition:color .3s ease;cursor:pointer}@media (max-width: 768px){.navegation__nav-icon[_ngcontent-%COMP%]{font-size:18px}.navegation__nav-icon[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:2px;background-color:#fff;transform:scaleX(0);transform-origin:right;transition:transform .3s ease}.navegation__nav-icon[_ngcontent-%COMP%]:hover{color:#c06500;cursor:pointer}.navegation__nav-icon[_ngcontent-%COMP%]:hover:after{transform:scaleX(1);transform-origin:left}}.nav-icon[_ngcontent-%COMP%]:hover{color:#c06500;cursor:pointer}.show[_ngcontent-%COMP%]{display:flex!important}.hero[_ngcontent-%COMP%]{display:flex}']})}}return e})();var lf=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=oe({type:e,selectors:[["app-root"]],standalone:!0,features:[ie],decls:2,vars:0,template:function(r,o){r&1&&m(0,"app-navegation")(1,"router-outlet")},dependencies:[nr,uf]})}}return e})();Cd(lf,af).catch(e=>console.error(e));
