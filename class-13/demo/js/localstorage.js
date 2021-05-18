'use strict';

console.log(localStorage);

localStorage.setItem('name', 'Riziq'); // key and value
localStorage.setItem('age', 31);

localStorage.setItem('name', 'Ansam');

localStorage.setItem('name', 'Ibrahim');

console.log(localStorage.getItem('age')); // key

console.log(localStorage.getItem('name'));

// localStorage.removeItem('age'); //key
// localStorage.removeItem('name'); //key

// localStorage.clear();