'use strict';

const user = {
    name: 'mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
user.mood = 'happpy';
user.hobby = 'javascript';
user.premium = 'false';
let userInfo = Object.keys(user);
for (let key of userInfo) {
    console.log(`${key} : ${user[key]}`);
}