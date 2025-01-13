// For Loop

/* For loop to print 10 numbers and set 5 is the best number */
// for (let i = 0; i <= 10; i++) {
//     if(i === 5){
//         console.log(`${i} is the best number`)
//     }
//     console.log(i)  
// }


/* For loop to print Table upto 10 numbers */
// for(let i = 1; i <= 10; i++){

//     console.log(`Outer Loop value $ {i}`)
//     for(let j = 1; j<=10; j++){
//         console.log(`${i} * ${j} = `, + i*j)
//      }

// }


/* For loop in array */
// const myHeros = ["ABC", "XYZ", "LMN"]

// for(let i = 0; i < myHeros.length; i++){
//     console.log(myHeros[i])
// }



/* Break and Countinue */

for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log(`${i} is the best number`)
        break; /* It will break and not exexute further */
    }
    console.log(i)
}


for (let i = 1; i <= 20; i++) {
    if(i === 5){
        console.log(`${i} is the best number`)
        continue; /* It will skip this part and continue */
    }
    console.log(i)
}
