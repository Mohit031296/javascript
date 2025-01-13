"use strict"

// const userEmail = 'mhit@gmail.com'
// const userEmail1 = ''

// if (userEmail1) {
//     console.log("User exist")
// }
// else {
//     console.log("User not exist")
// }


/* Falsy Values */
// false, 0, -0, BigInt (0n), "", null, undefined, NaN 


/* Truthy Values */
// true, "0", "false", " ", [], {}, function(){}


/* How to check empty Array */

// const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }
// else{
//     console.log("Array is not empty");
// }



/* How to check empty Object */

// const myEmail = {}
// const myEmail1 = {email: "mohit@gmail.com"}

// if (Object.keys(myEmail1).length === 0) {
//     console.log("Object is empty");
// }
// else{
//         console.log("Object is not empty");
//     }




/* Nullish Coalescing Operator (??): null and undefined */

// let val1, val2, val3, val4
// val1 = 5 ?? 10
// val2 = null ?? 10
// val3 = undefined ?? 15
// val4 = undefined ?? 20 ?? 50 /* it takes first value, here 20 */

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)



/* Terniary Operator */

const price = 50

price >= 60 ? console.log("No money") : console.log("have money");
