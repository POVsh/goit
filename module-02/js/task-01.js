'use strict';

let itemNamber;

function logItems() {
    for (let i = 0; i < array.length; i += 1) {
        itemNamber = i + 1;
        let massage = (`${itemNamber} - ${array[i]}`);
        console.log(massage);
    }

}
let array = ['Mangi', 'Poly', 'Ajax', 'lux', 'Jay', 'Kong'];
logItems(array);
array = [5, 10, 15, 20, 25, 35, 40, 45, 50];
logItems(array);