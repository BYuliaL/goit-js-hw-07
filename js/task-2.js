"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsLink = document.querySelector("#ingredients");

// 1 спосіб
const getListContent = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
ingredientsLink.append(...getListContent);
console.log(ingredientsLink);

// ======================================

// 2 спосіб
// function getListContent() {
//   let result = [];

//   for (let i = 0; i < ingredients.length; i += 1) {
//     let item = document.createElement("li");
//     item.append(ingredients[i]);
//     result.push(item);
//   }

//   return result;
// }

// ingredientsLink.append(...getListContent());
// console.log(ingredientsLink);

// ====================================

// 3 спосіб
// html = "<ul>";
// ingredients.forEach(function (item, i, arr) {
//   html += "<li>" + item + "</li>";
// });
// html += "</ul>";

// document.write(html);

// ===============================
