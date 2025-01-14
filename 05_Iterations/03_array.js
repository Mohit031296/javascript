// For of loop

/* String */

// const myString = new String("Mohit")
// for (const print of myString) {
//     console.log(print)
// }

/*Array*/
// const myHeros = new Array("Mohit", "XYZ", "ABC", "DEF")

// for (const heros of myHeros) {

//     console.log(heros)
    
// }



/*Object*/
const myHeros = new Object()
myHeros.firstName = "Mohit"
myHeros.lastName = "Mehta"
myHeros.age = 28
myHeros.isLoggedIn = false

console.log(myHeros);

for (const [key, value] of Object.entries(myHeros)) {

    console.log(key, value)
    
}