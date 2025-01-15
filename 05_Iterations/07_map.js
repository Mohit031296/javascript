const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNum = myNumbers.map((num) => {
//     value = num * 10;
//     return value
// })

const myNum = myNumbers
    .map((num) => {
    value = num * 10;
    return value
})
    .map( (num) => {
        value = num + 1;
    return value
    })  
    .filter( (num) => {
        value = num >= 40;
    return value
    })  


console.log(myNum)


/* Chaining */
