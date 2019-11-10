'use strict';


let findBestEmployee = function (obj) {
    let maxValue = 0;
    let bestEmployee;
    let employees = Object.keys(obj);

    for (let employee of employees) {

        if (obj[employee] > maxValue) {
            maxValue = obj[employee]
            bestEmployee = employee;
        }
    }
    return bestEmployee
}

console.log(findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}));

console.log(findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
}));

console.log(findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}));