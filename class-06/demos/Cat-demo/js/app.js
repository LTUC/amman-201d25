// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image ...................
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';

let frankie = {
    name: 'frankie',
    age: 0,
    likes: ['napping', 'eating cheese', 'cuddling'],
    isGoodWithKids: true,
    isGoodWithCats: false,
    isGoodWithDogs: false,
    breed: 'Sherazi',
    getAge: function() {
        this.age = randomAge(3, 12) + ' Months';
        console.log(this.age);
    }

}

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomAge(1, 6));
// I am calling the function from the object [method]
frankie.getAge();
console.log(frankie);

// Math.random ==> random num btw 0 and 1
// Math.floor=> 12.9 ==> 12
// Math.ceil ==> 10.1 ==> 11
// math.round==> 10.4 ==> 10 , 10.5 ==> 11



// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element

let theParent = document.getElementById('kittenProfiles');
console.log(theParent);


// create a new element, or elements, that represent frankie
// article
// inside that article, h2 for the name, paragraph with their age, ul and some list with their interests, image
let header2 = document.createElement('h2');
theParent.appendChild(header2);
header2.textContent = frankie.name;

let paragraph = document.createElement('p');
theParent.appendChild(paragraph);
paragraph.textContent = `frankie is a lovely cat and is ${frankie.age} old`;


let unOrderedList = document.createElement('ul');
theParent.appendChild(unOrderedList);
for (let i = 0; i < frankie.likes.length; i++) {
    let listItems = document.createElement('li');
    unOrderedList.appendChild(listItems);
    listItems.textContent = frankie.likes[i];

}

// images/frankie.jpeg

let theImg = document.createElement('img');
theParent.appendChild(theImg);
theImg.setAttribute('src', 'images/' + frankie.name + '.jpeg');
// images/frankie.jpeg
theImg.setAttribute('alt', 'cute image for ' + frankie.name + ' who is ' + frankie.age);


// ================================================================================
// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild