// Both are Numbers but 2nd is the most precise way to define
// const score = 400
// console.log(score);

// const balance = new Number(1000)
// console.log(balance);
// console.log(typeof (balance.toString())) //convert to string


//Fixed - It will add .00 after the number - It will return 5000.12
const fixedValue = new Number(5000.12221234)
// console.log(fixedValue.toString().length)
// console.log(fixedValue.toFixed(2))

//toPrecision - It will round off the values
// console.log(fixedValue.toPrecision(2)); /* It will return 5.0e+3 */
// console.log(fixedValue.toPrecision(3)); /* It will return 5.00e+3 */
// console.log(fixedValue.toPrecision(4)); /* It will return 5000 */
// console.log(fixedValue.toPrecision(6)); /* It will return 5000.12 */

//toLocaleString - It will add commas to the numbers based on the followed by the country
const bigNumber = 5000034223
// console.log(bigNumber.toLocaleString()); /* Default is USA */
// console.log(bigNumber.toLocaleString("en-IN")); /* India */


/* ===========MATH================== */

// console.log(Math)
// console.log(Math.abs(-5)) /* abs converts negative value to positive */
// console.log(Math.round(4.6)) /* It will round of the number */
// console.log(Math.ceil(9.1)) /* It will round of the number at highest point no matter the value is above 5 or not */
// console.log(Math.floor(9.1)) /* It will round of the number at lowest point no matter the value is above 5 or not */
// console.log(Math.sqrt(121)) /* Square root */
// console.log(Math.min(12,345,678,4323,321))
// console.log(Math.max(12,345,678,4323,321))


/* Random */
// console.log(Math.random()) /* It will retun values between 0 to 1. For example, 0.32, 0.023, 0.90, etc */
// console.log(Math.random()*10) /* It will return the values with 10x multiply. For example 3.2, 0.23, 9.0 etc */
// console.log(Math.random()*10 + 1) /* +1 help to avoide the values like 0.23 after multiply. See the above value like 0.23. For example 4.2, 1.23, 10.0 etc */
// console.log(Math.floor(Math.random()*10) + 1) /* It will return the integer value */

const min = new Number(1)
const max = new Number(6)

console.log(`Random values between ${min} and ${max} is:`)
console.log(Math.floor(Math.random() * (max - min + 1)) + min )