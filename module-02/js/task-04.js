'use strict';
let string;
let maxLength = 40;

function formatString(string) {
    if (string.length > maxLength) {
        string = string.slice(0, 40) + '...';
    }
    return string;
}
string = 'Curabitur ligula sapien, tincidunt non.';
console.log(formatString(string));
string = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
console.log(formatString(string));
string = 'Curabitur ligula sapien.';
console.log(formatString(string));
string = 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';
console.log(formatString(string));