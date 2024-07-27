const div = document.createElement('div');
div.style.position = "absolute";
div.style.width = "100px";
div.style.height = "100px";
div.style.transition = "all 100ms ease-in-out";
div.style.background = "rgba(0,0,0,0.2)";
div.style.zIndex = "100";
div.style.top = "20px";
div.style.right = "20px";
div.style.borderRadius = "10px";
const a = document.createElement('a');
a.href = "https://abhijeetk829.github.io/ott_homepage/";
const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#e8eaed"><path d="M230.77-190.77h161.54v-240h175.38v240h161.54v-373.85L480-753.46 230.77-564.87v374.1ZM200-160v-420l280-211.54L760-580v420H536.92v-240H423.08v240H200Zm280-312.23Z"/></svg>`;
a.innerHTML = homeIcon;
div.appendChild(a)
div.addEventListener('mouseenter', function() {
    console.log('mouse enter', div)
    div.style.background = "rgba(0,0,0,0.7)";
})
div.addEventListener('mouseleave', function() {
    console.log('mouse leave', div)
    div.style.background = "rgba(0,0,0,0.2)";
})
document.body.appendChild(div);