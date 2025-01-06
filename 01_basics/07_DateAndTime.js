'use strict'

let myDate = new Date()
console.log(myDate);
// console.log(typeof myDate); /* Date is an object */

// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())


// let newCreatedDate = new Date(2025, 1, 6, 22, 58)
// console.log(newCreatedDate.toLocaleTimeString()); /* It will retun Feb month -> Thu Feb 06 2025 */


// let newCreatedDate = new Date("2024-02-12") /* YYYY-MM-DD */
// let newCreatedDate = new Date("06-01-2025") /* MM-DD-YYYY */
// console.log(newCreatedDate.toDateString());


let myTime = new Date().getTime();
console.log(myTime);    // return in millisecond
console.log(myTime/1000) // retuen in second
console.log(Math.floor(myTime/1000)) // return interger Number
