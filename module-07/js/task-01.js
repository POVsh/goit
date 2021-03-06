// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

"use strict";
const categoriesList = document.getElementById("categories");
console.log(`В списке ${categoriesList.childElementCount} категории.`);

[...categoriesList.children].map(item => {
  console.log(
    `В категории: ${item.children[0].textContent},количество элементов: ${item.children[1].childElementCount}`
  );
});
