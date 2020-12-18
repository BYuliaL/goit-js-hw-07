"use strict";
const items = document.querySelectorAll("li.item");
console.log(items);
console.log(`В списке ${items.length} категории.`);

items.forEach((entry) => {
  const title = entry.querySelector("h2");
  const list = entry.querySelectorAll("ul li");

  console.log(
    "Категория: ",
    title.textContent,
    "\r\nКоличество элементов:",
    list.length
  );
});

// items
//   .map((item) => {
//     const title = item.querySelector("h2");
//     const list = item.querySelectorAll("ul li");
//     return {
//       title: title.textContent,
//       count: list.length,
//     };
//   })
//   .forEach((entry) => {
//     console.log(
//       "Категория: ",
//       entry.title,
//       "\r\nКоличество Элементов:",
//       entry.count
//     );
//   });
