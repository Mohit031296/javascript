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

function userStatus(username){
if(username == undefined) {
    
    return `Please enter the username.`
}
    return `${username} just logged in.`
}

// console.log(userStatus("Mohit"))
// console.log(userStatus(""))
console.log(userStatus("mohit"))
