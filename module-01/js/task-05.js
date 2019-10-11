'use strict';
let country = prompt('Введите страну доставки');
if (country === null) {
    alert('Вы не ввели название страны');
} else {
    country = country.toUpperCase();
    // console.log(country);
    let price;
    switch (country) {
        case 'КИТАЙ':
            price = 100;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case 'Чили':
            price = 250;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case 'Австралия':
            price = 170;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case 'Индия':
            price = 80;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        case 'Ямайка':
            price = 120;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
            break;
        default:
            console.log('В Вашей стране доставка не доступна');
    }
}