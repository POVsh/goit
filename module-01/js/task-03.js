'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userPassword = prompt('Введите пароль');
if (userPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (userPassword === null) {
    message = 'Отменено пользователем';
} else {
    message = 'Доступ запрещен, неверный пароль';
};
alert(message)