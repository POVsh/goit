"use strict";
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка
// будет меняться размер текста.


  /* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const inputControl = document.querySelector("#font-size-control");
console.dir(inputControl);
inputControl.setAttribute("min", "10");
inputControl.setAttribute("max", "100");
inputControl.setAttribute("value", "0");

const text = document.querySelector("#text");
console.dir(text);
inputControl.addEventListener("input", even => {
  const currentFontSize = even.currentTarget.value;
  text.style.fontSize = currentFontSize + "px";
});
