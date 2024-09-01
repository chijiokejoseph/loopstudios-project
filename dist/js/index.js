'use strict';


const /**@type {HTMLBodyElement}*/ body = document.querySelector('body');
const /**@type {NodeListOf<HTMLElement>}*/ menuItems = document.querySelectorAll('[aria-description="menu-item"]');
const /**@type {HTMLElement}*/ header2 = document.querySelector('[id=header2]');
const /**@type {HTMLElement}*/ header3 = document.querySelector('[id=header3]');


let slideDown = [
    {transform: 'translateX(-100vh)', offset: 0, easing: 'ease-in'},
    {transform: 'translateX(-50vh)', offset: 0.5},
    {transform: 'translateX(0)', offset: 1, easing: 'ease-out'},
]

let timing = {
    duration: 200,
    iterations: 1,
};

let listener = function () {
    // If header3 is not being displayed
    let /**@type {Animation}*/animation = header3.animate(slideDown, timing);
    if (header3.classList.contains('hidden')) {
        animation.play();
        header3.classList.toggle('hidden');
        header2.classList.toggle('hidden');
    } else {
        animation.reverse();
        header3.classList.toggle('hidden');
        header2.classList.toggle('hidden');
    }
}

for (let element of menuItems) {
    element.addEventListener('click', listener);
}





