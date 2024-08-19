'use strict';

let /**@type {HTMLHeadingElement}*/ heading = document.querySelector('[id=section-1-heading]');
let /**@type {HTMLParagraphElement}*/ text = document.querySelector('[id=section-1-text]');


let listener = function(){
    heading.classList.add('text-gray-300');
}
let listener2 = function(){
    heading.classList.remove('text-gray-300');
}

text.addEventListener('mouseenter', listener);
text.addEventListener('mouseleave', listener2);