const elBody = document.querySelector("body");
const elToggle = document.querySelector("#on");

elToggle.addEventListener('click', () => {
    if (elToggle.checked) {
        elBody.style.backgroundColor = '#292C35';
        elBody.style.transition = '0.5s';
    } 
    else {
        elBody.style.backgroundColor = '#F1F1F1';
        elBody.style.transition = '0.5s';
    }
})

