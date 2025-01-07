'Use strict'
// Array

// 1st way to declare
const myArr = [1, 2, 4, 5, "Mohit"] /* Declare Number String */
// console.log(typeof myArr) /* return object */
// console.log(myArr[4] + " " + typeof myArr[4]) /* Return Mohit String */
// console.log(typeof myArr[3]) /* Return Number */


// 2nd way to declare
const myArr2 = new Array(0, 1, 2, 3, 4, 5)

/* push and pop */
// myArr2.push(6) /* Push the given value in the array */
// myArr2.push(8) /* Push the given value in the array */
// myArr2.pop() /* Delete last value from the array */
// console.log(myArr2)

// shift and unshift

myArr2.shift() /* Delete the first element from the Array */
myArr2.unshift(0) /* Add 0 to the first posistion in the Array */
// console.log(myArr2)

// join

// const joinmyArr2 = myArr2.join() /* Convert Array into String */
// console.log(joinmyArr2);


// slice and splice

const myArr3 = new Array("Mohit", "Mehta", "X", "y")

let sliceArr = myArr3.slice(2,3)
console.log(sliceArr); /* Do not change the value of an Array */
console.log(myArr3);

let spliceArr = myArr3.splice(2,3)
console.log(spliceArr); // It will change the 
console.log(myArr3);