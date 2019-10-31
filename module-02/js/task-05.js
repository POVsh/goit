'use strict';
let str;

function checkForSpam(str) {
    const strTOLowerCase = str.toLowerCase();
    // console.log(strTOLowerCase);
    return console.log(`${str}`, (strTOLowerCase.includes('spam') || strTOLowerCase.includes('sale')));
}
str = 'Latest technology news';
checkForSpam(str);
str = 'JavaScript weekly newsletter';
checkForSpam(str);
str = 'Get best sale offers now!';
checkForSpam(str);
str = '[SPAM] How to earn fast money?';
checkForSpam(str);