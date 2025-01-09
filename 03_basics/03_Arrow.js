// const user = {

//     Username: "Mohit",
//     CoursePrice: 999,
//     welcomeMessage: function(){
//         console.log(`${this.Username} welcome to our website`) /* This will refer the current context - And it will only works in Object*/
//         console.log(this)
//     }

// }
// user.welcomeMessage()
// user.Username = "XYZ"
// user.welcomeMessage()

// console.log(this) /* It will only show an empty object but when you check in the browser there are multiple function which called as windows object (browser) */


// const abc = function(){
//     let Username = "Mohit"
//     // console.log(this)   /* Return some function */
//     console.log(this.Username); /* Return undefined */
    
// }

// abc()


/* Arrow Function */

// const chai = () => {

//     let Username = "Mohit"
//     console.log(this)

// }
// chai()


/* Explicit Arrow function */
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4,6))

/* Implicit Arrow function */
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(5,6))



/* How to define Object in function */

const userDetail = (num1, num2) => ({
    username: "Moiht",
    price: 123
})
console.log(userDetail(1,2))