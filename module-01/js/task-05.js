'use strict';
let country = prompt('Введите страну доставки');
let countryName;
let message;
let price = 0;
if (country === null) {
    alert('Вы не ввели название страны');
} else {
    countryName = country[0].toUpperCase() + country.slice(1).toLowerCase();
    console.log(countryName);

    switch (countryName) {
        case 'Китай':
            price = 100;
            break;
        case 'Чили':
            price = 250;
            break;
        case 'Австралия':
            price = 170;
            break;
        case 'Индия':
            price = 80;
            break;
        case 'Ямайка':
            price = 120;
            break;
        default:
            console.log('В Вашей стране доставка не доступна');
    }
}
if (price > 0) {
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
}
alert(message);