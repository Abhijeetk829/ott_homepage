import { homePage } from "./home.js";

class Widget {
    constructor() {
        this.div = document.createElement('div');
        this.styleDiv();
        document.body.appendChild(this.div);
        this.listenToPointerEvents();
    }
    styleDiv() {
        this.div.style.position = "fixed";
        this.div.style.height = "auto";
        this.div.style.transition = "all 100ms ease-in-out";
        this.div.style.zIndex = "100";
        this.div.style.bottom = "-100px";
        this.div.style.right = "10px";
        this.div.style.left = "10px";
        this.div.style.display = "flex";
        this.div.style.justifyContent = "center";
    }
    registerComponent({name, icon, click}) {
        const comp = document.createElement('div');
        comp.style.background = "rgba(0,0,0,0.35)";
        comp.style.borderRadius = "5px";
        comp.style.margin = "0 10px";
        comp.style.cursor = "pointer";
        comp.componentName = name;
        comp.innerHTML = icon;
        this.div.appendChild(comp);
        comp.addEventListener('click', click);
    }
    listenToPointerEvents() {
        const tt = this;
        if (window.vuplex) {
            addMessageListener();
        } else {
            window.addEventListener('vuplexready', addMessageListener);
        }
        
        function addMessageListener() {
            window.vuplex.addEventListener('message', function(event) {
                let json = event.data;
                if (typeof json == 'string') {
                    const data = JSON.parse(json);
                    if (data.type == "pointer") {
                        if (data.data == "out") {
                            tt.div.style.bottom = "-100px";
                        }   else if (data.data == "in") {
                            tt.div.style.bottom = "10px";
                        }
                    }
                }
            });
        }
    }
}

const widget = new Widget();
widget.registerComponent(homePage);