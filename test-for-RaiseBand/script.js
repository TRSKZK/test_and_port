"use strict";

const form = document.querySelector(`form`);
const header = document.querySelector(`header`);
const colorEl = document.getElementById(`color`);
const sizeEl = document.getElementById(`size`);
const calendar = document.getElementById(`calendar`);
const cityEl = document.getElementById(`city`);
const deliveryEl = document.getElementById(`delivery`);
const options = document.querySelectorAll(`option`);
const dropDown = document.querySelectorAll(`.dropdown-wrapp`);
const [...circlesEl] = document.querySelectorAll(`.circle`);
const progressContainer = document.querySelector(`.progress-container`);
const progressBar = document.querySelector(`.progress`);
const dynamicStep = document.getElementById(`dynamic-step`);
const [...clickebleSlideItms] = document.querySelectorAll(`.left-side-items`);
const rightSideContainer = document.querySelector(`.right-side-container`);


document.addEventListener(`click`, function (e) {
  const burgerMen = document.querySelector(`.nav-burger`);
  const logo = document.querySelector(`.logo`);
  const navList = document.querySelector(`.nav-list`);
  if (e.target.classList.contains(`nav-burger`)) {
    burgerMen.classList.toggle(`active`);
    navList.classList.toggle(`active`);
    logo.classList.toggle(`active`);
  }
});

let btnValue = 0;
form.addEventListener(`click`, (e) => {
  const plusMinusBtn = document.getElementById(`plus-minus`);
  if (e.target.classList.contains(`plus-button`))
    plusMinusBtn.value = `${(btnValue += 50)}`;
  if (e.target.classList.contains(`minus-button`))
    plusMinusBtn.value = `${(btnValue -= 50)}`;
});

const dropOpen = function () {
  dropDown.forEach((el) => {
    el.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`fa-sort-down`)) {
        e.target.classList.toggle(`active`);
        e.target.parentElement.parentElement.classList.toggle(`active`);
        const dropDown = el.childNodes[5];
        dropDown.classList.toggle(`active`);
        const [...dropMenuItems] = dropDown.children;

        dropMenuItems.forEach((item) => {
          item.addEventListener(`click`, () => {
            el.childNodes[1].textContent = item.textContent;
            dropDown.classList.remove(`active`);
            if (e.target.classList.contains(`fa-sort-down`)) {
              e.target.classList.toggle(`active`);
              e.target.parentElement.parentElement.classList.toggle(`active`);
            }
          });
        });
      }
    });
  });
};
dropOpen();

form.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`proceed`)) {
    class Order {
      size = +sizeEl.innerText.slice(0, 3);
      color = colorEl.innerText;
      date = calendar.value;
      addedVal = +plusMinusBtn.value;
      city = cityEl.innerText;
      delivery = deliveryEl.innerText;
    }
    const OrderMade = new Order();
    console.log(OrderMade);
  }
});

progressContainer.addEventListener(`click`, (e) => {
  console.log(e.target);
  if (e.target.classList.contains(`circle`)) {
    e.target.classList.toggle(`active`);
    console.log(e.target.textContent.slice(-1));
    e.target.nextElementSibling.classList.toggle(`lighted`);
    dynamicStep.textContent = `Step ${e.target.textContent.slice(-1)}`;
  }
  const actives = document.querySelectorAll(`.active`);
  progressBar.style.width =
    ((actives.length - 1) / (circlesEl.length - 1)) * 100 + `%`;
});




const [...slides] = document.querySelectorAll(`.slide`);
    
const goToSlide = function (ind) {
  slides.forEach((slide, i) => {
    if (slide.classList.contains(`slide-${ind}`)) slide.style.transform = `translateX(0%)`
    // if(!slide.classList.contains(`slide-${ind}`)) slide.style.transform = `translateX(${100 * i} %)`
    else slide.style.transform = `translateX(${100 * i} %)`
  })
}

clickebleSlideItms.forEach((el, i) => {
  el.addEventListener(`click`, () => {
    let currentSlide = i + 1
    
    goToSlide(currentSlide)

  });
});
