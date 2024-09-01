'use strict';

let /**@type {HTMLHeadingElement}*/header1 = document.querySelector('[id="header1"]');
let /**@type {HTMLHeadingElement}*/header2 = document.querySelector('[id="header2"]');
let /**@type {HTMLHeadingElement}*/header3 = document.querySelector('[id="header3"]');
let /**@type {HTMLElement}*/navHandle = document.querySelector('[aria-description="nav_handle"]');
navHandle.addEventListener('click', () => {
    for (let /**@type {HTMLHeadingElement}*/header of [header1, header2, header3]) {
        if (!header.classList.contains('hidden')) {
            header.scrollIntoView({behavior: 'smooth'});
        }
    }
})

