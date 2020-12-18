"use strict";
const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", getInputValue);

function getInputValue(event) {
  event.target.value === ""
    ? (outputValue.textContent = "незнакомец")
    : (outputValue.textContent = event.target.value);
}
