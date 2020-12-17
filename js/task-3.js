"use strict";
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulImages = document.querySelector("#gallery");

// 1 спосіб
// const getListImages = images.map(({ ...images }) => {
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   img.alt = images.alt;
//   img.src = images.url;
//   li.append(img);
//   return li;
// });
// ulImages.append(...getListImages);

// 2 спосіб
const getListImages = images.forEach(({ ...images }) => {
  ulImages.insertAdjacentHTML(
    "afterbegin",
    `<li><img alt=${images.alt} src=${images.url}></li > `
  );
});

console.log(ulImages);
