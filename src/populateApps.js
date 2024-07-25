import { getCategories } from "./ottList.js";

export function populate(id) {
    const element = document.getElementById(id);

    getCategories().forEach(e => {
        let div1 = document.createElement('div');
        div1.classList.add('mt-5')
        let div2 = document.createElement('div');
        div2.classList.add('fw-semibold', 'mb-3');
        div2.textContent = e.name;
        div1.appendChild(div2);
        let container = document.createElement('div');
        container.classList.add('d-flex', 'overflow-x-auto', 'py-3', 'section');
        div1.appendChild(container);
        e.list.forEach(ex => {
            let platform = document.createElement('a');
            platform.classList.add('mx-3', 'blur', 'hover')
            platform.href = ex.url;
            let color = hexToRgb(ex.color);
            platform.onmouseenter = function() {
                platform.style.boxShadow = `0 0 10px 5px rgba(${color.join(",")},0.5)`;
            }
            platform.onmouseleave = function() {
                platform.style.boxShadow = 'unset'
            }
            let img = document.createElement('img');
            img.classList.add('card-img-top', 'opacity');
            img.src = `images/${ex.logo}`;
            img.alt = ex.name;
            img.style.width = "20vw"
            platform.appendChild(img);
            container.appendChild(platform);
        });
        element.appendChild(div1);
    });

    function hexToRgb(hex, result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
        return result ? result.map(i => parseInt(i, 16)).slice(1) : null
        //returns [23, 14, 45] -> reformat if needed
    }
}