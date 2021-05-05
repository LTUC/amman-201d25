'use strict';

let button = document.getElementById('btn');

let parent = document.getElementById('container');

button.addEventListener('dblclick', createPara);

function createPara() {
    let p = document.createElement('p');
    parent.appendChild(p);
    p.textContent = 'hello from js ';
}

console.log(parent);


let paraElement = document.getElementById('para1');

paraElement.addEventListener('mouseover', makePara);
paraElement.addEventListener('mouseleave', makepara1);

function makePara() {
    paraElement.textContent = 'hello hello new para the text changed';
}

function makepara1() {
    paraElement.textContent = 'hello you have moved your mouse outside the para element';
}

// event
paraElement.addEventListener('mouseover', changeBackgroundColor);

function changeBackgroundColor() {
    paraElement.className = 'newparagraph';
}