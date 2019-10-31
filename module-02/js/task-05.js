'use strict';
let str;

function checkForSpam(str) {
    const strTOLowerCase = str.toLowerCase();
    // console.log(strTOLowerCase);
    return (strTOLowerCase.includes('spam') || strTOLowerCase.includes('sale'));
}
str = 'Latest technology news';
console.log(`${str}`, checkForSpam(str));
str = 'JavaScript weekly newsletter';
console.log(`${str}`, checkForSpam(str));
str = 'Get best sale offers now!';
console.log(`${str}`, checkForSpam(str));
str = '[SPAM] How to earn fast money?';
console.log(`${str}`, checkForSpam(str));