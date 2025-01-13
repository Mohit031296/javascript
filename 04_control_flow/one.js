// if

// operators = <, >, <=, >=, ==, ===, !=, !==

// if (2 == "2"){

//     console.log("executed")

// }

/* Strict check using === */
if (2 === "2"){

    console.log("executed")

}

// const temp = 41

// if(temp === 41){
//     console.log(`temp is ${temp}`)
// }
// else{
//     console.log(`temp is: not normal`)
// }


/* Scope */

// const Score = 200
// let power;

// if (Score > 100) {
//     power = "fly";
// }

// console.log(`power: ${power}`);



/* without curly braces - implicit */

// const balance = 1000

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("teest2"); /* Use comma for separation - not prefer */


/* multiple if else */

// const balance = 100

// if(balance > 800){
//     console.log("You credit score is good")
// }
// else if(balance < 200){
//     console.log("Your credit is not good")
// }



/* && and || */

// const userDebit = true
// const userCredit = true

// if(userDebit && userCredit) {
// console.log("You can save upto 10%")
// }

const userEmail = false
const userGoogle = false

if(userEmail || userGoogle) {
console.log("You have successfully logged in")
}

