/* Function */

// function myNameFunction(){

//     console.log("M")
//     console.log("o")
//     console.log("H")
//     console.log("I")
//     console.log("T")

// }

// myNameFunction()


/* Sum of two numbers and datatype results */

// function sumofTowNumber(num1, num2){

//     console.log(num1 + num2)

// }

// sumofTowNumber(3,2) /* Return 5 */
// sumofTowNumber(3,"2") /* Return 32 */
// sumofTowNumber(3, undefined) /* Return NaN */
// sumofTowNumber(3, null) /* Return 3 */
// let result = sumofTowNumber(3,2)
// console.log(`Result: ${result}`) /* Result: undefined */


/* How to store value in variables */
// function sumofTowNumber(num1, num2){

//     let result = num1 + num2;
//     return result;
//     console.log("It iwll not run") /* After retun nothing will execute */ 
// }

// let result = sumofTowNumber(2,2)
// console.log(`result: ${result}`)


/* If not add arguments in the function */
// function userStatus(username){
// if(username == undefined) {
    
//     return `Please enter the username.`
// }
//     return `${username} just logged in.`
// }

// // console.log(userStatus("Mohit"))
// // console.log(userStatus(""))
// console.log(userStatus("mohit"))




/* Don't know how many parameteres in the function - for example add to cart section */

/* Take only First Value */
// function calTwoVal(num1){
//      return num1;
// }
// console.log(calTwoVal(2,3))



/* Using Rest - It will create array of parameteres */
// function calTwoVal(...num1){
//      return num1;
// }
// console.log(calTwoVal(2,3,100,400312))


/* Using  variable + Rest - It will create array of parameteres */
// function calTwoVal(val1, val2, ...num1){
//     return val1, val2, num1;
// }
// console.log(calTwoVal(2,3,100,400312)) /* return [100, 400312] */



/* HOW TO USE object in function */

// const UserDetail = {
//     Username: "Mohit",
//     Price: 19
// }

// function UserFunction(anyobject){
//     console.log(`Username is ${anyobject.Username} and price is ${anyobject.Price}`)
// }
// UserFunction(UserDetail) /* 1st method */
// UserFunction({
//     Username: "XZJ",
//     Price: 122
// }
// ) /* 2nd method */



/* HOW TO USE Array in function */

const UserArray = new Array(1,2,4,5)

function myArrayFunction(anyArray){
    return anyArray[2]
}

console.log(myArrayFunction(UserArray)) /* 1st method */
console.log(myArrayFunction([100,200,500])) /* 2nd method */
