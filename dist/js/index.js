'use strict';
import {newHTML} from './htmlContent.js';

let /**@type {HTMLElement}*/ menuItem = document.querySelector('[title="menuItem"]');
let /**@type {HTMLElement}*/ header = document.querySelector('[id="header2"]');
/**
 *
 * @param {MouseEvent} e
 */
let listener = (e) => setHeader(e);
menuItem.addEventListener('click', listener);



let /**@type {number}*/ counter = 0

/**
 *
 * @param {MouseEvent} e
 */
function setHeader(e) {
    header.insertAdjacentHTML('beforebegin', newHTML[counter]);
    header.remove()
    counter = increment(counter);
    menuItem = document.querySelector('[title="menuItem"]');
    header = document.querySelector('[id="header2"]');
    menuItem.addEventListener('click', listener);
    e.view
}

/**
 *
 * @param {number} count
 * @return {number}
 */
function increment(count) {
    count++;
    count %= 2;
    return count;
}


