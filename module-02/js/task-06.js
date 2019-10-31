'use strict';
let numbers = [];
let total = 0;
let newNumber;
do {
    newNumber = prompt('Введите любое число');
    if (Number.isNaN(Number(newNumber))) {
        alert('Было введено не число, попробуйте еще раз')
    } else {
        numbers.push(newNumber);

    }
} while (newNumber !== null);

for (let i = 0; i < numbers.length; i += 1) {
    total = Number(numbers[i]) + total;
}

alert(`Общая сумма чисел равна ${total}`);