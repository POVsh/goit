'use strict';
let credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt('Введите количество единиц товара, которые Вы желаете приобрести');
const totalPrice = pricePerDroid * quantity;
// console.log(totalPrice);
if (quantity === null) {
    console.log('Отменено пользователем');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету');
} else {
    credits = credits - totalPrice;
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов`);
}