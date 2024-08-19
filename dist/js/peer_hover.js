'use strict';

let /**@type {HTMLHeadingElement}*/ heading = document.querySelector('[id=section-1-heading]');
let /**@type {HTMLParagraphElement}*/ text = document.querySelector('[id=section-1-text]');


let listener = function(){
    heading.classList.add('text-gray-300');
    console.log(heading.classList);
    console.log('I have been added');
}
let listener2 = function(){
    heading.classList.remove('text-gray-300');
    console.log(heading.classList);
    console.log('I have been removed');
}

text.addEventListener('mouseenter', listener);
text.addEventListener('mouseleave', listener2);