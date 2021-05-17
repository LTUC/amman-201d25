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

// goats name global array
let goatsNames = [];

// votes global array
let goatVotes = [];

// shown goats array
let goatShown = [];

// constructor function
function GoatImage(name, source) {
    this.name = name;
    this.source = source;
    // votes
    this.votes = 0;
    // views
    this.shown = 0;
    allGoats.push(this);
    goatsNames.push(this.name);
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
// console.log(Math.floor(Math.random() * 7)); //0-7
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
    // we need to check if the indexes are equal:
    do {
        rightImageIndex = generateRandomIndex();
    } while (leftImageIndex === rightImageIndex);


    // give it src attribute
    leftImageElement.src = allGoats[leftImageIndex].source;
    rightImageElement.src = allGoats[rightImageIndex].source;

    leftImageElement.alt = allGoats[leftImageIndex].name;
    rightImageElement.alt = allGoats[rightImageIndex].name;

    allGoats[leftImageIndex].shown++;
    allGoats[rightImageIndex].shown++;
}

renderTwoImages();

// event listener

leftImageElement.addEventListener('click', handleUserClick);
rightImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    // console.log(event.target.id);

    // give the user 10 tries to click after that show result

    // userAttemptsCounter = userAttemptsCounter + 1;

    userAttemptsCounter++;

    // console.log(userAttemptsCounter);
    if (userAttemptsCounter <= maxAttempts) {
        // console.log(userAttemptsCounter);

        if (event.target.id === 'left-image') {
            // make sure to add to votes for the correct element and render again
            allGoats[leftImageIndex].votes = allGoats[leftImageIndex].votes + 1;
        } else {
            allGoats[rightImageIndex].votes = allGoats[rightImageIndex].votes + 1;

        }

        // console.log(allGoats);

        renderTwoImages();
    } else {
        leftImageElement.removeEventListener('click', handleUserClick);
        rightImageElement.removeEventListener('click', handleUserClick);

        // getting the element
        // let list = document.getElementById('results-list');
        // let liElement;
        // for (let i = 0; i < allGoats.length; i++) {
        //   liElement = document.createElement('li');
        //   list.appendChild(liElement);
        //   liElement.textContent = `${allGoats[i].name} has ${allGoats[i].votes}  votes`;

        // }
        for (let i = 0; i < allGoats.length; i++) {
            goatVotes.push(allGoats[i].votes);
            goatShown.push(allGoats[i].shown);
        }
        viewChart();
    }
}
console.log(allGoats);



function viewChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: goatsNames,
            datasets: [{
                    label: '# of goat Votes',
                    data: goatVotes,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: '# of goat shown',
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    data: goatShown
                }
            ]
        },
        options: {

        }
    });

}


console.log('names', goatsNames);
console.log('votes', goatVotes);
console.log('shown', goatShown);