"use strict";
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validInput = document.querySelector("#validation-input");
// console.dir(validInput);

validInput.addEventListener("blur", e => {
  const length = Number(validInput.dataset.length);

  if (e.currentTarget.value.length === length) {
    e.currentTarget.classList.remove("invalid");
    e.currentTarget.classList.add("valid");
  } else {
    e.currentTarget.classList.remove("valid");
    e.currentTarget.classList.add("invalid");
  }
});