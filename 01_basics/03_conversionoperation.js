"use strict"
/*let Score = 33 // Currently, we know this is a number but when it comes to 
               // dynamic we don't know what is the data type so we need to conver from any data type to Number

console.log(Score);
console.log(typeof Score);
console.log(typeof (Score)); // Another way to declare
*/

let Score = undefined
let ScoreNumber = Number(Score);
console.log(ScoreNumber);
console.log(typeof ScoreNumber);