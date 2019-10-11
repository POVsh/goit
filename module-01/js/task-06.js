'use strict';
let newNumber
let total = 0;
do {
    newNumber = prompt('Введите любое число');
    if (Number.isNaN(Number(newNumber))) {
        alert('Было введено не число, попробуйте еще раз')
    } else {
        total = Number(newNumber) + total;
    }
} while (newNumber !== null);
alert(`Общая сумма чисел равна ${total}`);