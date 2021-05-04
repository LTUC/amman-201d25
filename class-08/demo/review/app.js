'use strict';
console.log('Hello My js file');
/*
Constructor function:

3 
what ==> create objects
why ==> template , simpler and easier and re-usable [share the same properties]
how ==> 
*/



// global array
let workers = [];
// constructor function 
function Employee(userName, UserSalary, position, experience) {

    this.name = userName;
    this.salary = UserSalary;
    this.position = position;
    this.experience = experience;

    // this
    console.log(this);

    // this.work();
    // pushing the created objects
    workers.push(this);
}
Employee.prototype.work = function() {
    // 
    console.log(this.name + ' is working and the salary is ' + this.salary);
}

let sondos = new Employee('Sondos', 1500, 'CEO', 15000000);
// console.log(sondos);
sondos.work();

let ali = new Employee('Ali', 3000, 'CEO', 152896874);
// console.log(ali);

let hamza = new Employee('Hamza', 888888, 'senior HR', 158968);
// console.log(hamza);
hamza.work();

let sultan = new Employee('Sultan', 55555, 'very experience senior HR', 900000000);

// let workers = [sondos, ali, hamza, sultan]; // no more this
// dynamically pushing to an array????????


let riziq = new Employee('Riziq', 555, 'developer', 253)
    // console.log(workers); // array
    // console.log(ali.name);

let mahmoud = new Employee('Mahmoud', 5, 'student', 6);

// for loop , array workers
// to make my code dynamic and loop through the array that I already declared and have all my created objects
for (let i = 0; i < workers.length; i++) {
    console.log(workers[i].name);
    console.log(workers[i].salary);

}
// =================================================================================================================
// =================================================================================================================
// =================================================================================================================
// DOM ==> document object model
// Create Table

// 1. get the element id from the html

let parent = document.getElementById('parent');
console.log(parent);

// create table
let table = document.createElement('table');
// append
parent.appendChild(table);


// create header row tr
let headerRow = document.createElement('tr');
// append

table.appendChild(headerRow);
// th
let th = document.createElement('th');
headerRow.appendChild(th);
th.textContent = 'Name';

let th1 = document.createElement('th');
headerRow.appendChild(th1);
th1.textContent = 'Salary';


for (let i = 0; i < workers.length; i++) {
    // tr
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    // td
    // let td = document.createElement('td');
    // dataRow.appendChild(td);
    // td.textContent = workers[i].name;

    // let td1 = document.createElement('td');
    // dataRow.appendChild(td1);
    // td1.textContent = workers[i].salary;

    for (let j = 0; j < 2; j++) {
        let td = document.createElement('td');
        dataRow.appendChild(td);

        if (j == 0) {

            td.textContent = workers[i].name;
        } else {

            td.textContent = workers[i].salary;
        }
    }

}