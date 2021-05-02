'use strict';

// objects
/*
Human is an object
properties:
name: Sultan
age:29

methods:
eat: function
sleep: function


phone ==< is an object
model =>
RAM =>
color =>

methods=> calling, taking pictures

*/

let human = ['Sultan', 29, 'student', ['mansaf', 'majaddrah', 'pasta'], 80];


// object literal
let Sultan = {
    name: 'Sultan',
    age: 266,
    weight: 90,
    height: 180,
    job: 'student',
    likes: ['mansaf', 'majaddrah', 'pasta', 'msa5an', 'mansaf', 'majaddrah', 'pasta', 'msa5an'],
    talk: function() {
        console.log(`hello all my name is ${this.name} and I am ${this.age} years old`)
    },
    jobDesc: {
        title: 'senior developer',
        experience: 1000,
    },
    addWeight: function() {
        console.log(this.height, this.weight);
    }
}

console.log(Sultan);
// console.log(Sultan.name);
// // accessing the properties in an object:
// // dot notation
// console.log(Sultan.age);
// // bracket notation
// console.log(Sultan['likes']);
// // calling the function
// Sultan.talk();
// Sultan.addWeight();

// // console.log(this);

// console.log(Sultan.jobDesc.title);

// for (let i = 0; i < Sultan.likes.length; i++) {
//     console.log(Sultan.likes[i]);
// }

// console.log('before', Sultan);
// // adding new property:
// Sultan.disLikes = ['read assignment', 'math', 'waking up early'];

// console.log('after', Sultan);

// const car = {
//         name: 'tesla'
//     }
//     // I cannot do this
//     // car = 23;

// // I can add 
// car.drive = function() {
//     console.log('move to Amman');
// }
// console.log(car);
// console.log(car.drive());

// // deleting property
// delete car.drive;
// console.log(car);

// DOM:
// console.log(document);
// document.write('<h3>' + 'hello h3 from js' + '</h3>')

// only get one time
let parent = document.getElementById('parent');

// create a child
let child = document.createElement('p');
// console.log(child);
// append the child
parent.appendChild(child);
console.log(parent);
child.textContent = 'Hello baba I miss you div[parent]';

// parent for the list item
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);


for (let i = 0; i < Sultan.likes.length; i++) {
    // create element
    let listItems = document.createElement('li');
    // appending
    unorderedList.appendChild(listItems);
    listItems.textContent = Sultan.likes[i];
    // console.log(Sultan.likes[i]);

}

document.write(Sultan.likes);