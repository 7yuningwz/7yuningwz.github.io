import{s as i}from"./app-D8hBrIEN.js";import{H as r,a as s}from"./vidstack-DqOrqs52-D2kXQKDp.js";import"./vidstack-D6ttsqNA-Cnja5s8w.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};