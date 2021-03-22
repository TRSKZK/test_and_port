"use strict";
const burgerMen = document.querySelector(`.nav-burger`);
const logo = document.querySelector(`.logo`);
const navList = document.querySelector(`.nav-list`);

const header = document.querySelector(`header`);

document.addEventListener(`click`, function (e) {
    if (e.target.classList.contains(`nav-burger`)) {
        burgerMen.classList.toggle(`active`)
        navList.classList.toggle(`active`)
        logo.classList.toggle(`active`)
    }
    
    console.log(e.target);
});

// burgerMen.addEventListener(`click`, function () {
//   burgerMen.classList.toggle(`active`);
//   navList.classList.toggle(`active`);
//     logo.classList.toggle(`active`);
    
//     console.log(this);
// });


