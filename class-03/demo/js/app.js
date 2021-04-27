'use strict';

/*
if statement

if(condition){
    do this code 
}else if(another condition){
    do this other code
}else{
    do the else code
}


Switch

switch(variable){
    case 'value1':
        console.log(-----);
        break;
    case 'value2':
        do this code
        break
    default:
        do the last code
}


comparison operators:

 == value
 === value and datatype
 >
 <
 != not equal value
 !== not equal value and datatype
 >=
 <=

 "Sultan" === "Sultan"  // true
 'Riziq' == 'Ahamd'     //false


 Logical operator:
AND &&  ==> if BOTH of them are true  it will be true
OR || ==> if BOTH of them are false it will be false

!a ==> !true => false

Truthy:
true
1
5/2
'bag'
'true'
' ' => not empty string 

falsy value:
false
0
'' ==> empty string
'string'/2 ==> NaN


*/

// let userName = prompt('what is your name');
// let anotherName = ''; //falsy value
// if (userName) {
//     alert('Hello ' + userName);
// } else if (!anotherName) {
//     alert('please enter name')
// }


/*
LOOPS

1.
for loop
when I know how many time I want to repeat and loop

for(initial; condition; update){
    Do the code;
}
(increment)
initialization : let i=0;
condition: i<=10;
update: i++ ;

(decrement)
initialization : let i=0;
condition: i>=10;
update: i-- ;


2. 
while
Validation, if I do not know how many times you will loop and run the code

while(condition){
    the code
}
*/

// let userName = prompt('what is your name');

// while (!userName) {
//     userName = prompt('please enter your name');
// }

// for (let i = 0; i <= 5; i++) {

//     // if (i == 2) {
//     //     break;
//     // }
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }


// DO While loop
/*
do{
    do this code 
}while(condition)
*/

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 1)


// Array
let ahmadGrade = 100;
let olaGrade = 90;

// let grades = [90, 100, 85, 90, 66, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90, 30, 12, 80, 90];
// console.log('the all array', grades);
// console.log('the first index', grades[0]);
// console.log('the 3rd index', grades[2]);

// // I will know the length of the array
// console.log('length of the array', grades.length);

// // adding to the array [to the end of it]
// grades.push(77);
// console.log('length of the array after pushing', grades.length);
// console.log(grades);

// // remove from the array [from the end]
// grades.pop();
// grades.pop();
// grades.pop();
// console.log('length of the array after popping', grades.length);
// console.log(grades);


// // how to know the index of value inside array
// let index = grades.indexOf(1);
// console.log(index);


// let info = ['sanaa', 95, 'tall', ['walking', 'watching movie', [1, 2, 3]]];
// console.log(info);
// console.log(info[0]);
// console.log(info[3]);
// console.log(info[3][2][1]);

// +++++++++++++++++++++ DEMO +++++++++++++++++++

alert('welcome to my page');

let score = 0;

let userName = prompt('whats your name');

while (!userName) {
    userName = prompt('please enter a value');
}

if (userName !== 'baraah') {
    alert('too bad your name is not baraah')
}
alert('hello ' + userName + ' glad to have you here');

let answer = prompt('is my fav food pasta', 'answer with yes or no please');

console.log(answer);

if (answer.toLocaleLowerCase() === 'yes') {
    alert('you answered correctly ');
    score++;
} else {
    alert('no that is wrong');
}

console.log(score);

let favFood = ['mansaf', 'maqloba', 'fish', 'zeit w za\'ater'];

for (let i = 0; i < favFood.length; i++) {
    console.log(favFood[i]);
}


let question2 = prompt('do miniones fly');

switch (question2.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('wrong, they cannot fly');
        break;

    case 'no':
    case 'n':
        alert('correct, they cannot fly');
        score++;
        break;
}

console.log(score);

alert('Great work ' + userName + ' your score is ' + score);