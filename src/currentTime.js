import moment from 'moment';

export function currentTime(id) {
    const element = document.getElementById(id);
    function animate() {
        if (element) {
            element.innerText = moment().format('LTS');
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}