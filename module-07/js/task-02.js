"use strict";

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов
// используй document.createElement().
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsList = document.getElementById("ingredients");
const items = ingredients.map(ingredient => {
  const el = document.createElement("li");
  el.textContent = ingredient;
  return el;
});
ingredientsList.append(...items);
