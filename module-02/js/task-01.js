'use strict';

let itemNumber;
let massage;

function logItems() {
    for (let i = 0; i < array.length; i += 1) {
        itemNumber = i + 1;
        massage = (`${itemNumber} - ${array[i]}`);
        console.log(massage);
    }

}

let array = ['Mangi', 'Poly', 'Ajax', 'lux', 'Jay', 'Kong'];
logItems(array);
array = [5, 10, 15, 20, 25, 35, 40, 45, 50];
logItems(array);