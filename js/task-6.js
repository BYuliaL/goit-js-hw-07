"use strict";
const validValue = document.querySelector("#validation-input");
validValue.addEventListener("blur", getValidValue);

function getValidValue(event) {
  if (event.target.value.length === +validValue.dataset.length) {
    validValue.classList.remove("invalid");
    validValue.classList.add("valid");
  } else {
    validValue.classList.remove("valid");
    validValue.classList.add("invalid");
  }
}
