'use strict';
let string;
let maxLength = 40;

function formatString(string) {
    if (string.length > maxLength) {
        string = string.slice(0, 40) + '...';
    }
    return console.log(string);
}
string = 'Curabitur ligula sapien, tincidunt non.';
formatString(string);
string = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
formatString(string);
string = 'Curabitur ligula sapien.';
formatString(string);
string = 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';
formatString(string);