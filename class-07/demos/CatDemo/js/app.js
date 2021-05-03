// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';
//  name: 'frankie',
// age: 0,
// likes: ['napping', 'eating cheese', 'cuddling'],
// isGoodWithKids: true,
// isGoodWithCats: false,
// isGoodWithDogs: false,
// breed: 'Sherazi',



// constructor function
function Kitten(name, likes, isGoodWithKids, isGoodWithCats, isGoodWithDogs, breed) {
    this.name = name;
    this.likes = likes;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithCats = isGoodWithCats;
    this.isGoodWithDogs = isGoodWithDogs;
    this.breed = breed;
}



// Random Generator
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// prototype age
Kitten.prototype.getAge = function() {
    this.age = random(3, 12) + ' months';
}

// prototype sound
Kitten.prototype.sound = function() {
    console.log('Meow');
}

// global parent
let theParent = document.getElementById('kittenProfiles');

// prototype render
Kitten.prototype.render = function() {
    this.getAge();
    let article = document.createElement('article');
    theParent.appendChild(article);

    // h2
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    // p
    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = `${this.name} is a lovely cat and is ${this.age} old and its is ${this.breed} family.`


    let ul = document.createElement('ul');
    // append
    article.appendChild(ul);

    // for loop for the list item
    for (let i = 0; i < this.likes.length; i++) {
        // console.log(this.likes[i]);
        // create li
        let li = document.createElement('li');
        // append
        ul.appendChild(li);
        li.textContent = this.likes[i];
    }

    // adding img
    let img = document.createElement('img');
    article.appendChild(img);

    img.setAttribute('src', `images/${this.name}.jpeg`);

    img.setAttribute('alt', 'cute picture of ' + this.name + ' you should really adopt it ');

}

// table render method
Kitten.prototype.tableRender = function() {

    let table = document.createElement('table');
    theParent.appendChild(table);
    console.log(theParent);

    let headRow = document.createElement('tr');
    table.appendChild(headRow);
    // the header
    let th1 = document.createElement('th');
    headRow.appendChild(th1);
    th1.textContent = 'Good with Kids';

    let th2 = document.createElement('th');
    headRow.appendChild(th2);
    th2.textContent = 'Good with Cats';

    let th3 = document.createElement('th');
    headRow.appendChild(th3);
    th3.textContent = 'Good with Dogs';

    // rows for the values
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    // td

    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.isGoodWithKids;

    let td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.isGoodWithCats;

    let td3 = document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent = this.isGoodWithDogs;

}
let frankie = new Kitten('frankie', ['napping', 'eating cheese', 'cuddling'], true, false, false, 'Sherazi');
console.log(frankie);
frankie.sound();
frankie.render();
frankie.tableRender();


let jumper = new Kitten('jumper', ['playing', 'drinking milk', 'cuddling'], false, true, false, 'persian');
console.log(jumper);
jumper.sound();
jumper.render();
jumper.tableRender();

let serena = new Kitten('serena', ['Jumping', 'drinking milk', 'cuddling'], true, false, true, 'siamese');
serena.render();
serena.tableRender();