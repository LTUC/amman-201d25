'use strict';

if (localStorage.cats) {

    let catsFromLS = JSON.parse(localStorage.cats);
    // catsFromLS is now an array of generic objects
    // console.log('before', catsFromLS); //I did not get the render, i did not do the re-instantiation yet

    for (let i = 0; i < catsFromLS.length; i++) {
        new Cat(catsFromLS[i].name); //re-instantiation
        // console.log('after', catsFromLS);

        // console.log(new Cat(catsFromLS[i].name)); // my object from the local storage will have its methods, protos 

        allCats[i].render();
    }
}

catform.addEventListener('submit', handleCatSubmit);