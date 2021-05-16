'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 10 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update click images count of how many times it has been clicked on
        - update both images count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  const Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targeted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/

// getting elements Globally
let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');


// global variables
let leftImageIndex;
let rightImageIndex;

// global counters
let maxAttempts = 10;
let userAttemptsCounter = 0;


// global array for the objects
let allGoats = [];

// constructor function
function GoatImage(name, source) {
    this.name = name;
    this.source = source;
    // votes
    this.votes = 0;
    allGoats.push(this);
}
new GoatImage('cruisin-goat', 'images/cruisin-goat.jpg'); //0
new GoatImage('float-your-goat', 'images/float-your-goat.jpg'); //1
new GoatImage('goat-away', 'images/goat-away.jpg'); //2
new GoatImage('goat-out-of-hand', 'images/goat-out-of-hand.jpg'); //3
new GoatImage('kissing-goat', 'images/kissing-goat.jpg'); //4
new GoatImage('sweater-goat', 'images/sweater-goat.jpg'); //5
new GoatImage('sassy-goat', 'images/sassy-goat.jpg'); //6


// random function to generate index
function generateRandomIndex() {
    return Math.floor(Math.random() * allGoats.length);
}

// console.log(Math.floor(Math.random() * allGoats.length)); //0-4

// render goat images
function renderTwoImages() {
    leftImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();

    // while
    // while (leftImageIndex === rightImageIndex) {
    //     rightImageIndex = generateRandomIndex();
    // }

    // do-while
    do {
        rightImageIndex = generateRandomIndex();
    } while (leftImageIndex === rightImageIndex);

    // console.log(leftImageIndex);
    // console.log(rightImageIndex);

    // console.log(allGoats[leftImageIndex]);
    // console.log(allGoats[rightImageIndex]);


    // give it src attribute
    leftImageElement.src = allGoats[leftImageIndex].source;
    rightImageElement.src = allGoats[rightImageIndex].source;
}

renderTwoImages();

// event listener

leftImageElement.addEventListener('click', handleUserClick);
rightImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    // console.log(event.target.id);
    // userAttemptsCounter=userAttemptsCounter+1;
    userAttemptsCounter++;
    console.log(userAttemptsCounter);
    if (userAttemptsCounter <= maxAttempts) {
        console.log(userAttemptsCounter);

        if (event.target.id === 'left-image') {
            allGoats[leftImageIndex].votes = allGoats[leftImageIndex].votes + 1;
        } else {
            allGoats[rightImageIndex].votes = allGoats[rightImageIndex].votes + 1;

        }
        // the used ones
        // console.log(allGoats);

        renderTwoImages();
    } else {
        leftImageElement.removeEventListener('click', handleUserClick);
        rightImageElement.removeEventListener('click', handleUserClick);

        // getting the element
        let list = document.getElementById('result');
        let liElement;
        for (let i = 0; i < allGoats.length; i++) {
            liElement = document.createElement('li');
            list.appendChild(liElement);
            liElement.textContent = `${allGoats[i].name} has ${allGoats[i].votes}  votes`;

        }
    }
}
console.log(allGoats);