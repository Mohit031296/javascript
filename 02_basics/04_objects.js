const myObject = new Object()

// console.log(myObject)

/* How to add values in the myObject */
myObject.id = 123
myObject.FirstName = "Mohit"
myObject.LastName = "Mehta"

// console.log(myObject)
// console.log(Object.keys(myObject)) /* Return Keys */
// console.log(Object.values(myObject)) /* Return values */
// console.log(Object.entries(myObject)) /* Return entries */
// console.log(myObject.hasOwnProperty("email")) /* Return Boolean value */

/* How to add object inside object and how to access the values */
// const myObjectEmail = {

//     email: "mm303074@gmail.com",
//     FullUserName: {
//         UserName: {
//             FirstName: "Mohit",
//             LastName: "Mehta"
//         }
//     }

// }

// console.log(myObjectEmail.FullUserName.UserName.LastName);


/* How to combine two cobject */

const myDetails1 = {

    FirstName: "Mohit",
    LastName: "Mehta" 

}

const myDetails2 = {

    Email: "mm303074@gmail.com",
    Password: "ABC!@23324"

}

// const myFullDetails = { myDetails1, myDetails2}
// console.log(myFullDetails)

// const myFullDetails = Object.assign({}, myDetails1, myDetails2)
// console.log(myFullDetails)

// const myFullDetails = {...myDetails1, ...myDetails2} /* Most used */
// console.log(myFullDetails)




/* ==========Destructure=========== */

const learn = {
    CourseName: "Js in Hindi",
    CoursePrice: 999,
    CourseInstructor: "Hitesh",
    CourseDetails: {

        Course1: "JS",
        Course2: "React"

    }
}

const {CourseDetails: {Course1: c1}} = learn
console.log(c1)