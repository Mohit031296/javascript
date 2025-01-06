/* =============Primitive============= */

// String
const Name = "Mohit"


//Symbol
let id = Symbol('123')
let id2 = Symbol('123')
/* It seems like both are same but actually it is not the same. */

// Number and BigInt
let Score = 80.12221
let ScoreBig = 9012221112234954795473n

// Null
let IsLoggedIn = null

// Boolean
let IsFieldEmpty = true /* Return boolean */

// Undefined
let x /* Return undefined */

// console.log(id === id2)
// console.log(typeof Name)
// console.log(typeof id)
// console.log(typeof Score)
// console.log(typeof ScoreBig)
// console.log(typeof IsLoggedIn)
// console.log(typeof IsFieldEmpty)
// console.log(typeof x)


/* =============Non-Primitive============= */
let Heros = ["Mohit", "Deep", "Xyz"]

const StudentInfo = {

    Name: "Mohit",
    Enrollment: 1,
    email: "mm303074@gmail.com"

}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(myFunction)
// console.log(typeof(myFunction))



/* Stack (Primitive) and Heap (Non-Primitive) Memory */

let FirstName = "Mohit"
let FirstNameChange = FirstName
FirstNameChange = "Mohit Mehta"
console.log(FirstName)
console.log(FirstNameChange)


let EmailAddr2 = StudentInfo
EmailAddr2.email = "mohitcmehta1@gmail.com"
console.log(StudentInfo.email)
console.log(EmailAddr2.email)