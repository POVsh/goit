'use strict';
let numbers = [];
let total = 0;
let input;
do {
    input = prompt('Введите любое число');
    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз')
    } else {
        numbers.push(Number(input));

    }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
    total = numbers[i] + total;
}

alert(`Общая сумма чисел равна ${total}`);