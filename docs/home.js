(()=>{"use strict";const t={name:"google",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed"><path d="M230.77-190.77h161.54v-240h175.38v240h161.54v-373.85L480-753.46 230.77-564.87v374.1ZM200-160v-420l280-211.54L760-580v420H536.92v-240H423.08v240H200Zm280-312.23Z"/></svg>',click:function(){location.replace("https://google.com")}},e={name:"homepage",icon:'<svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#e8eaed"><path d="M230.77-190.77h161.54v-240h175.38v240h161.54v-373.85L480-753.46 230.77-564.87v374.1ZM200-160v-420l280-211.54L760-580v420H536.92v-240H423.08v240H200Zm280-312.23Z"/></svg>',click:function(){location.replace("https://abhijeetk829.github.io/ott_homepage/")}},i=new class{constructor(){this.div=document.createElement("div"),this.styleDiv(),document.body.appendChild(this.div)}styleDiv(){this.div.style.position="fixed",this.div.style.height="auto",this.div.style.transition="all 100ms ease-in-out",this.div.style.zIndex="100",this.div.style.bottom="10px",this.div.style.right="10px",this.div.style.left="10px",this.div.classList.add("d-flex","justify-content-center")}registerComponent({name:t,icon:e,click:i}){const s=document.createElement("div");s.style.background="rgba(0,0,0,0.35)",s.style.borderRadius="5px",s.style.margin="0 10px",s.style.cursor="pointer",s.componentName=t,s.innerHTML=e,this.div.appendChild(s),s.addEventListener("click",i)}};i.registerComponent(e),i.registerComponent(t)})();