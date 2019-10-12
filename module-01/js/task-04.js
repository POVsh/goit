'use strict';
let credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Введите количество единиц товара, которые Вы желаете приобрести');
const numberQuantity = Number(quantity);
const totalPrice = pricePerDroid * numberQuantity;
// console.log(totalPrice);
if (quantity === null) {
    console.log('Отменено пользователем');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету');
} else {
    credits = credits - totalPrice;
    console.log(`Вы купили ${numberQuantity} дроидов, на счету осталось ${credits} кредитов`);
}