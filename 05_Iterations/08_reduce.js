const myNumbers = [1,2,3]

/* Using normal function */
// const myTotal = myNumbers.reduce(function(acc, currval){
//     console.log(`${acc} and ${currval} `)
//     return acc + currval;
// },0)

// console.log(myTotal)


/* Using Arrow function */
// const myTotal = myNumbers.reduce((acc, currval) => {
//         console.log(`${acc} and ${currval} `)
//         return acc + currval;
// },0)

// console.log(myTotal)


/* Object in array */
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc,currval) => {

    return acc + currval.price;

}, 0 )
console.log(totalPrice)