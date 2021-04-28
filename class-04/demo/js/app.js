'use strict';


// let counter = 0;
// while (counter < 5) {
//     console.log(counter);
//     counter++;
// }
// console.log('outside', counter);

// for while do-while

// Arrays
// let ahmadGrade=20;
// ..

// let grades = [50, 50, 40, 60, 70, 90];
// console.log(grades);
// console.log('array length', grades.length);

// for (let i = 0; i < grades.length; i++) {
//     console.log(grades[i] += 5);
// }
// console.log(grades);

// let theNumbers = grades;
// console.log('before', theNumbers);
// theNumbers[2] = 444;
// console.log('after', theNumbers);

// let array1 = [1, 2, 3];
// let array2 = [5, 9, 8];

// let array3 = array1 + ',' + array2;
// console.log(array3);

// // add to the end of the array push
// array2.push(4); //[5,9,8,4]
// // remove from the end of the array pop
// array1.pop(); // [1,2]
// // add to the bigging of the array unshift
// array1.unshift(777); //[777,1,2]
// // remove from the first the array shift
// array2.shift(); //[9,8,4]

// let score = 0;
// let correct = false;
// let movies = ['harry potter', 'Dark', 'the godfather', 'inception', 'catch me if you can', 'now you see me', 'cast away'];

// for (let j = 0; j < 6; j++) {

//     let question = prompt('whats my fav movie', 'ex: inception, catch me if you can, now you see me');

//     for (let i = 0; i < movies.length; i++) {
//         if (question == movies[i]) {
//             alert('correct answer');
//             score++;
//             correct = true;
//             // j = 7;
//             break;
//         }

//     }
//     if (correct) {
//         break;
//     }
// }

// alert(`Great work your score is ${score} have a nice day`);


// ========================= Functions =====================================================================

// function declaration
// function welcomingMsg() {
//     alert('hello all, Wake up please')
// }
// welcomingMsg();

// let userInput = prompt('whats your name??');


// function getName(userName) {
//     let output = `hello ${userName}`;
//     return output;
// }

// console.log(getName(userInput));
// console.log(getName('Ahmad'));
// console.log(getName('Sanaa'));
// console.log(getName('Ansam'));
// console.log(getName('Mahmoud'));
// console.log(getName('Ibrahem'));
// console.log(getName('Hamza'));


// function square(length) {
//     let area = length ** 2;
//     let perimeter = length * 4;
//     return [area, perimeter];

// }

// console.log(square(5));

// let output = square(90);
// console.log(output);
// console.log('area', output[0], 'perimeter', output[1]);

// function declaration correct
// console.log(sumArray(9, 6));

// function sumArray(num1, num2) {
//     let output = num1 + num2;
//     return output;
// }


// // function expression will not work
// console.log(square(5));

// let square = function(length) {
//     let area = length ** 2;
//     let perimeter = length * 4;
//     return [area, perimeter];

// }

// var someFunction = function() {
//     alert('hello');
// }
// someFunction();

// immediately invoked function
// (function() {
//     console.log('good bye');
// })();


// let userInput = prompt('whats your name??');
// (function(userName) {
//     console.log(`goodbye ${userName}`);
// })(userInput);
// =======================================================================
// =======================================================================
// scopes

// Global variables can be used anywhere

// let firstName = 'Ali';

// function fullName() {
//     // local variable, only for the scope that it is inside
//     let welcome = 'hello';
//     alert(welcome + firstName);
//     console.log('inside', welcome);
// }

// fullName();
// console.log('outside', welcome);