'use strict';

let allCats = [];
let catform = document.getElementById('catform');
let catlist = document.getElementById('catlist');

function Cat(name) {
    this.name = name;

    // this.render = function() {
    //         let listItem = document.createElement('li');
    //         catlist.appendChild(listItem);
    //         listItem.textContent = this.name;
    //     },
    allCats.push(this);
}

Cat.prototype.render = function() {
    let listItem = document.createElement('li');
    catlist.appendChild(listItem);
    listItem.textContent = this.name;
}

function handleCatSubmit(e) {
    e.preventDefault();
    let newCat = new Cat(e.target.kitteh.value);
    catform.reset();
    newCat.render();
    localStorage.cats = JSON.stringify(allCats);
    console.log('this is what is in local storage', localStorage.cats);
}

console.log('array', allCats);