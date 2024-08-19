'use strict';

let /**@type {NodeListOf<HTMLElement>}*/ menuItems = document.querySelectorAll('[title="menuItem"]');
let /**@type {HTMLElement}*/ header2 = document.querySelector('[id="header2"]');
let /**@type {HTMLElement}*/ header3 = document.querySelector('[id="header3"]');

let listener = function() {
    if (header3.classList.contains('hidden')) {
        header3.classList.remove('hidden');
        header2.classList.add('hidden');
    } else {
        header3.classList.add('hidden');
        header2.classList.remove('hidden');
    }
}

for (let element of menuItems) {
    console.log(element);
    element.addEventListener('click', listener);
}





