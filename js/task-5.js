"use strict";
const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("change", getInputValue);

function getInputValue(event) {
  event.target.value === ""
    ? (outputValue.textContent = "незнакомец")
    : (outputValue.textContent = event.target.value);
}
