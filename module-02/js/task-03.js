'use strict';

let string;

function findLongestWord(string) {
    let stringArr = string.split(' ');
    let longestWord = stringArr[0];
    for (let word of stringArr) {

        if (word.length > longestWord.length) {
            longestWord = word;
        }

    }
    return longestWord;
}
string = 'The quick brown fox jumped over the lazy dog';
console.log('longestWord:', findLongestWord(string));
string = 'Google do a roll';
console.log('longestWord:', findLongestWord(string));
string = 'May the force be with you';
console.log('longestWord:', findLongestWord(string));