"use strict";

// 1 варіант
const counter = {
  startValue: 0,
  step: 1,

  inc() {
    this.startValue += this.step;
  },

  dec() {
    this.startValue -= this.step;
  },
};

const counterValue = document.querySelector("#value");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");

decrement.addEventListener("click", getDecrement);
increment.addEventListener("click", getIncrement);

function getDecrement() {
  counter.dec();
  counterValue.textContent = counter.startValue;
  console.log(counter);
}

function getIncrement() {
  counter.inc();
  counterValue.textContent = counter.startValue;
  console.log(counter);
}
//  2 варіант
