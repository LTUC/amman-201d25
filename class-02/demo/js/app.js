'use strict';

// comment for one line

/*
for multiple lines of code

DataTypes:
1. String
    - data inside '', ""
2. Number
    - integer 5
    - float 2.3
3. Boolean
    - True
    - False
*/

// let userName = prompt('Hello, Could you please enter your name');
// console.log(userName);
// console.log(typeof userName);

// still string
// let age = prompt('Hello, Could you please enter your age');
// console.log(age);
// console.log('before change it', typeof age);
// console.log(11 + age); //concatenation
// // I want to change the prompt data from string to number Number
// // age = Number(age);
// // console.log(age);
// // console.log('after change it', typeof age);
// // console.log(age + 10); //correct output

// // I want to change the prompt data from string to number parseInt

// age = parseInt(age);
// console.log(age);
// console.log('after change it', typeof age);
// console.log(age + 10); //correct output


/*
conditional statements:

if(condition is true){
    do this
}else{
    do this if condition is False
}

==  value only
=== value and datatype
*/

// let age = Number(prompt('Hello, Could you please enter your age'));

// if (age === 21) {
//     alert('you are 21');
// } else if (age > 18) {
//     alert('welcome');
// } else {
//     alert('you cant b/c you are toooo young');
// }

/*
switch(variable){
    case 'value1':
        do code ...
        break;
    case 'value2':
        do something else
        break;

    default :
        do if nothing match the cases
        break;
}

*/

// let mood = confirm('are you ok');
// console.log(mood);

// // switch
// switch (mood) {
//     case true:
//         document.write('Great, have a nice day');
//         break;
//     case false:
//         document.write('wake up we have a lecture, please');
//         break;
// }

// let fruit = prompt('what do you want');

// switch (fruit.toUpperCase()) {
//     case 'MELON':
//         console.log('melon is 0.32 JD');
//         break;
//     case 'APPLE':
//     case 'ORANGE':
//         console.log('apple and orange are 2 JD each');
//         break;
//     default:
//         console.log('sorry go to another store');
// }



/*Logical Operators:

1. AND

true && true ==>   true
true && false ==>  false
false && false ==> false
false && true ==>  false

2. OR

true || true ==>   true
true || false ==>  true
false || false ==> false
false || true ==>  true


Git:
VCS ==> version control system
local machine

GitHub:
cloud
store code and collaborate with developers
*/