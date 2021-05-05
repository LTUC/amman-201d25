'use strict';
// JavaScript Objects - what are objects?

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

var cats = [];

function Cat(name, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed) {
    this.name = name;
    this.age = 0;
    this.likes = likes;
    this.img = img;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithOtherCats = isGoodWithOtherCats;
    this.breed = breed;
    cats.push(this);
}

Cat.prototype.getAge = function() {
    this.age = getRandomNumber(1, 5);
    console.log(this.name + ' is ' + this.age + ' months years old');
};

Cat.prototype.render = function() {
    var parentElement = document.getElementById('kittenProfiles');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = ` Age : ${this.age}`;
    article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.likes.length; i++) {
        var li = document.createElement('li');
        li.textContent = this.likes[i];
        ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + this.name + '.jpeg');
    img.setAttribute('alt', 'this is an image of ' + this.name);
    article.appendChild(img);

};

var frankie = new Cat('frankie', ['chasing string', 'eating'], 'images/frankie.jpeg', true, false, true, 'british');

// frankie.getAge();
// frankie.render();

var jumper = new Cat('jumper', ['playing', 'eating'], 'images/jumper.jpeg', true, false, true, 'italian');

// jumper.getAge();
// jumper.render();


// console.log(frankie);
// console.log(jumper);


function getRandomNumber(min, max) {
    var random = Math.random(); // 0 - 1
    random = (random * (max - min + 1)) + min; // less than or equal max
    random = Math.floor(random); // remove fractions
    return random;
}

// ===================================   Form   ======================================

let kittenForm = document.getElementById('kittenForm');
kittenForm.addEventListener('submit', submitter);


function submitter(event) {
    event.preventDefault();
    // console.log('hello event is working', event);

    let name = event.target.nameField.value;
    console.log(name);
    let likes = event.target.likesField.value;
    console.log(likes);
    // the input in the constructor should be an array
    let likesArray = likes.split(',');

    let isGoodWithDogs = event.target.isGoodWithDogs.checked;
    console.log(isGoodWithDogs);

    let isGoodWithCats = event.target.isGoodWithCats.checked;
    console.log(isGoodWithCats);

    let isGoodWithKids = event.target.isGoodWithKids.checked;
    console.log(isGoodWithKids);

    let img = 'images/' + name + '.jpeg';

    let addedKitten = new Cat(name, likesArray, img, isGoodWithKids, isGoodWithDogs, isGoodWithCats);

    addedKitten.getAge();
    addedKitten.render();

    let container = document.getElementById('kittenProfiles');
    container.textContent = '';
    for (let index = 0; index < cats.length; index++) {

        cats[index].getAge();
        cats[index].render();
    }
}

for (let index = 0; index < cats.length; index++) {

    cats[index].getAge();
    cats[index].render();
}