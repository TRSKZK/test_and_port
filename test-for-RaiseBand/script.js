"use strict";
const burgerMen = document.querySelector(`.nav-burger`);
const logo = document.querySelector(`.logo`);
const navList = document.querySelector(`.nav-list`);
const form = document.querySelector(`form`);
const plusMinusBtn = document.getElementById(`plus-minus`);
const header = document.querySelector(`header`);
const colorEl = document.getElementById(`color`);
const sizeEl = document.getElementById(`size`);
const calendar = document.getElementById(`calendar`)
const cityEl = document.getElementById(`city`)
const deliveryEl = document.getElementById(`delivery`)
const options = document.querySelectorAll(`option`)
const dropDown = document.querySelectorAll(`.dropdown-wrapp`)
const [...circlesEl] = document.querySelectorAll(`.circle`)


document.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`nav-burger`)) {
    burgerMen.classList.toggle(`active`);
    navList.classList.toggle(`active`);
    logo.classList.toggle(`active`);
  }
});



let btnValue = 0;
form.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`plus-button`))
    plusMinusBtn.value = `${(btnValue += 50)}`;
  if (e.target.classList.contains(`minus-button`))
    plusMinusBtn.value = `${(btnValue -= 50)}`;
});


const dropOpen = function () {
    dropDown.forEach(el => {
        el.addEventListener(`click`, (e) => {
            if (e.target.classList.contains(`fa-sort-down`)) {
                e.target.classList.toggle(`active`)
                e.target.parentElement.parentElement.classList.toggle(`active`);
                const dropDown = el.childNodes[5]
                dropDown.classList.toggle(`active`)
                const [...dropMenuItems] = dropDown.children

                dropMenuItems.forEach(item => {
                    item.addEventListener(`click`, () => {
                        el.childNodes[1].textContent = item.textContent
                        dropDown.classList.remove(`active`)
                        if (e.target.classList.contains(`fa-sort-down`)) {
                            e.target.classList.toggle(`active`)
                            e.target.parentElement.parentElement.classList.toggle(`active`);
                        }
                    })
                })
            }
            
        })
    })
}
dropOpen()


form.addEventListener(`click`, (e) => {

    if (e.target.classList.contains(`proceed`)) {
        class Order {
            size = +sizeEl.innerText.slice(0,3)
            color = colorEl.innerText
            date = calendar.value
            addedVal = +plusMinusBtn.value
            city = cityEl.innerText
            delivery = deliveryEl.innerText
        }
        const OrderMade = new Order;
        console.log(OrderMade);
    }
    
})




