'use strict';

let /**@type {HTMLHeadingElement}*/ heading = document.querySelector('[id=section1-heading]');
let /**@type {HTMLParagraphElement}*/ text = document.querySelector('[id=section1-text]');


let listener = function () {
    heading.classList.remove('text-gray-700');
    heading.classList.add('text-gray-100');
}
let listener2 = function () {
    heading.classList.remove('text-gray-100');
    heading.classList.add('text-gray-700');
}

text.addEventListener('mouseenter', listener);
text.addEventListener('mouseleave', listener2);