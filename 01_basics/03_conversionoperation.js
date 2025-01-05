"use strict"
/*let Score = 33 // Currently, we know this is a number but when it comes to 
               // dynamic we don't know what is the data type so we need to conver from any data type to Number

console.log(Score);
console.log(typeof Score);
console.log(typeof (Score)); // Another way to declare
*/

let Score = undefined
let ScoreNumber = Number(Score);
// console.log(ScoreNumber);
// console.log(typeof ScoreNumber);


// 33 => 33
// "33abc" => NaN (Not a Number) type is Number
// true => 1
// false => 0


let IsLoggedIn = null // See comments
let IsLoggedInBoolean = Boolean(IsLoggedIn);
console.log(typeof (IsLoggedInBoolean));
console.log(IsLoggedInBoolean)

// If 0 then False
// If 1 then True
// If any string then True
// If empty or null then False


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
