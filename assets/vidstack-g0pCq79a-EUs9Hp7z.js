const __vite__fileDeps=["assets/vidstack-google-cast-qylN26DK.js","assets/app-D8hBrIEN.js","assets/vidstack-D6ttsqNA-Cnja5s8w.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{bN as g,bu as p,bF as u,bO as C,p as f,_ as h,bx as m}from"./app-D8hBrIEN.js";function w(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function v(){var a;return!!((a=window.cast)!=null&&a.framework)}function E(){var a,e;return!!((e=(a=window.chrome)==null?void 0:a.cast)!=null&&e.isAvailable)}function l(){return s().getCastState()===cast.framework.CastState.CONNECTED}function s(){return window.cast.framework.CastContext.getInstance()}function d(){return s().getCurrentSession()}function y(){var a;return(a=d())==null?void 0:a.getSessionObj().media[0]}function P(a){var t;return((t=y())==null?void 0:t.media.contentId)===(a==null?void 0:a.src)}function _(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function S(a){return`Google Cast Error Code: ${a}`}function k(a,e){return g(s(),a,e)}class b{constructor(){this.name="google-cast"}get cast(){return s()}mediaType(){return"video"}canPlay(e){return p&&!u&&C(e)}async prompt(e){var i;let t,o,r;try{t=await this.Ej(e),this.f||(this.f=new cast.framework.RemotePlayer,new cast.framework.RemotePlayerController(this.f)),o=e.player.createEvent("google-cast-prompt-open",{trigger:t}),e.player.dispatchEvent(o),this.Ce(e,"connecting",o),await this.Fj(f(e.$props.googleCast)),e.$state.remotePlaybackInfo.set({deviceName:(i=d())==null?void 0:i.getCastDevice().friendlyName}),l()&&this.Ce(e,"connected",o)}catch(n){const c=n instanceof Error?n:this.De((n+"").toUpperCase(),"Prompt failed.");throw r=e.player.createEvent("google-cast-prompt-error",{detail:c,trigger:o??t,cancelable:!0}),e.player.dispatch(r),this.Ce(e,l()?"connected":"disconnected",r),c}finally{e.player.dispatch("google-cast-prompt-close",{trigger:r??o??t})}}async load(e){if(!this.f)throw Error("[vidstack] google cast player was not initialized");return new(await h(async()=>{const{GoogleCastProvider:t}=await import("./vidstack-google-cast-qylN26DK.js");return{GoogleCastProvider:t}},__vite__mapDeps([0,1,2]))).GoogleCastProvider(this.f,e)}async Ej(e){if(v())return;const t=e.player.createEvent("google-cast-load-start");e.player.dispatch(t),await m(w()),await customElements.whenDefined("google-cast-launcher");const o=e.player.createEvent("google-cast-loaded",{trigger:t});if(e.player.dispatch(o),!E())throw this.De("CAST_NOT_AVAILABLE","Google Cast not available on this platform.");return o}async Fj(e){this.Gj(e);const t=await this.cast.requestSession();if(t)throw this.De(t.toUpperCase(),S(t))}Gj(e){var t;(t=this.cast)==null||t.setOptions({..._(),...e})}Ce(e,t,o){const r={type:"google-cast",state:t};e.delegate.c("remote-playback-change",r,o)}De(e,t){const o=Error(t);return o.code=e,o}}const A=Object.freeze(Object.defineProperty({__proto__:null,GoogleCastLoader:b},Symbol.toStringTag,{value:"Module"}));export{d as a,y as b,S as c,s as g,P as h,k as l,A as v};
