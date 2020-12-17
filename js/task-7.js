"use strict";
const inputRef = document.querySelector("#font-size-control");
const textRegulator = document.querySelector("#text");
inputRef.addEventListener("input", getTextRegular);

function getTextRegular() {
  textRegulator.style.fontSize = `${inputRef.value}px`;
}
