import users from "./users.js";

// ==============Task-01=====================================================================================

// Получить массив имен всех пользователей (поле name).

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));

// ======================Task-02========================================================================================

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// ======================Task-03=======================================================================================

// Получить массив имен пользователей по полу (поле gender).

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, "male"));

// =========================Task-04===============================================================================================

// Получить массив только неактивных пользователей (поле isActive).

// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

// ==========================Task-05===============================================================================================

// Получить пользоваля (не массив) по email (поле email, он уникальный).

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// ==============================Task-06=============================================================================================

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// =================================Task-07============================================================================================

// Получить общую сумму баланса (поле balance) всех пользователей.

// console.log(calculateTotalBalance(users)); // 20916

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));

// ====================================Task-08===========================================================================================

// Массив имен всех пользователей у которых есть друг с указанным именем.

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// =====================================Task-09============================================================================================

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((userA, UserB) => userA.friends.length - UserB.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// ========================================Task-10========================================================================================

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

const getSortedUniqueSkills = users => {
  return users
    .map(user => user.skills)
    .join(",")
    .split(",")
    .filter(
      (skill, index, allSkillsArr) => allSkillsArr.indexOf(skill) === index
    )
    .sort();
};

console.log(getSortedUniqueSkills(users));

// const allSkillsArrs = users.map( user => user.skills);
// console.log(allSkillsArrs.join(','))
// console.log(allSkillsArrs.join(',').split(',')
// console.log(allSkillsArrs.join(',').split(',').filter((string, index, arr) => arr.indexOf(skills)));
