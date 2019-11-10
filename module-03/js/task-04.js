'use strict';

let countTotalSalary = function (obj) {
    let totalSalary = 0;

    let employees = Object.keys(obj);

    for (let employee of employees) {

        totalSalary = totalSalary + obj[employee]
    }
    return totalSalary
}
console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400