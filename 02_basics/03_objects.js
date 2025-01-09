// singleton
// Object.create - constructor method singleton

// How to access String
// const myArr = new Array("Mohit", "XYZ")
// console.log(myArr[1]) /* This is the only way to get elements */

// Create Object

const mySymbol = Symbol("mykey")

const jsUser = {
    name: "Mohit",
    "full name": "Mohit Mehta",
    age: 18,
    email: "mohit@uplers.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Tuesday", "Wednseday"],
    // mySymbol: "mykey1" 
    [mySymbol]: "mykey2"
}

/* How to access Objects */

// console.log(jsUser.email) /* First way to get values from object */
// console.log(jsUser["age"]) /* Second way to get values from object */
// /* full name key can't access using the 1st method */
// console.log(jsUser["full name"])


/* Interview Question - declare symbol add in object and return the value */

// create symbol above the object
// console.log(jsUser["mySymbol"]) /* It will not generate any error but the type of this is String not symbol */
// console.log(typeof jsUser["mySymbol"])
// console.log(jsUser[mySymbol])
// console.log(typeof jsUser[mySymbol])


/* How to change value and freez the object */
// jsUser.email = "mohitcmehta1996@gmail.com"
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.email = "mohitcmehta1996@gl.com"
// Object.freeze(jsUser)

/* How to use function */

// jsUser.greeting = function(){

//     console.log("Hello Js User")
// }

// console.log(jsUser.greeting)
// console.log(jsUser.greeting())



/* this method */

const jsUser1 = {
    name: "Mohit",
    "full name": "Mohit Mehta",
    age: 18,
    email: "mohit@uplers.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Tuesday", "Wednseday"],
    // mySymbol: "mykey1" 
    [mySymbol]: "mykey2"
}

jsUser1.greeting2 = function(){

    console.log(`Hello js user, ${this["full name"]}`)


}

console.log(jsUser1.greeting2())
console.log(jsUser1)
