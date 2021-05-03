'use strict';

// let bashar = {
//     name: 'Bashar',
//     age: 28,
//     weight: 55,

//     // method
//     walk: function() {
//         console.log('Hello I am walking');
//     }
// }
// console.log(bashar);
// bashar.walk();

// camelCase ==> naming variables
// Pascal naming ==> naming the constructor

function Student(name, age, weight) {
    // this.key=> value of that key
    this.name = name;
    this.age = age;
    this.weight = weight;
    // I will build a prototype of it 
    // this.swim = function() {
    //     console.log('Hello I am ' + this.name + ' and I am swimming');
    // }

}

Student.prototype.walk = function() {
    console.log('Hello I am ' + this.name + ' and I am walking');

}
Student.prototype.talk = function() {
        console.log('Hello I am ' + this.name + ' and I am talking');
    }
    // console.log(this); // window object 
    // console.log(this.age); //undefined

// creating new instance
let bashar = new Student('bashar', 1009, 444);
console.log(bashar);
bashar.walk();

let ibrahem = new Student('Ibrahim', 155, 2589);
console.log(ibrahem);
ibrahem.walk();

let sara = new Student('sara', 100, 42);
console.log(sara);
sara.walk();


let qusai = new Student('Quasi', 3251, 25);
console.log(qusai);
qusai.walk();


let theStudentsArray = [bashar, ibrahem, sara, qusai];

console.log(theStudentsArray);


console.log(Student.prototype);

// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// Table 

// get the element id
let theParent = document.getElementById('container');
console.log(theParent);

// create table
let theTable = document.createElement('table');
// append
theParent.appendChild(theTable);

// creating the heading row tr
let trElement = document.createElement('tr');
theTable.appendChild(trElement);

// creating the table data td or th
let nameElement = document.createElement('th');
trElement.appendChild(nameElement);

nameElement.textContent = 'Name';

// creating the table data td or th
let ageElement = document.createElement('th');
trElement.appendChild(ageElement);

ageElement.textContent = 'Age';

// the weight element
let weightElement = document.createElement('th');
trElement.appendChild(weightElement);
weightElement.textContent = 'Weight';


for (let i = 0; i < theStudentsArray.length; i++) {
    //    I am looping through the students array
    // create row
    let studentRow = document.createElement('tr');

    theTable.appendChild(studentRow);

    // table data td for the names
    let nameData = document.createElement('td');
    studentRow.appendChild(nameData);

    nameData.textContent = theStudentsArray[i].name;

    // table data for the age
    let ageData = document.createElement('td');
    studentRow.appendChild(ageData);
    ageData.textContent = theStudentsArray[i].age;

    // table data for weight
    let weightData = document.createElement('td');
    studentRow.appendChild(weightData);
    weightData.textContent = theStudentsArray[i].weight;
}