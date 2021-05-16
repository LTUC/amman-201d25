'use strict';
console.log('helllo');
// DOM
// EVENtListener 
// Math.random

// get the id of the button
let btn = document.getElementById(`randomizer`);

// add the event listener 
btn.addEventListener('click', randomize);

// build the function
function randomize(event) {
    // Math.random()
    let audioEle = document.getElementById('levees');
    console.log(audioEle);
    audioEle.volume = Math.random();
    // 0.0 ==> 1.0
    // console.log(event);
    console.log(audioEle.volume);
}