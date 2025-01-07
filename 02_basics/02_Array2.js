const myArr1 = new Array(1,2,3,4)
const myArr2 = new Array("X","Y","Z")
const myArr3 = new Array(6,7,8,9)

// Combine Two Array

//1.
// const myArr = myArr1.push(myArr2)
// console.log(myArr) /* This will return length */
// console.log(myArr1) /* This will return the combile array*/

//2.
// const conmyArr3 = myArr1.concat(myArr2)
// console.log(conmyArr3) /* It will combile all element in one array */

//3. This is spread operator
// const myArr = [...myArr1, ...myArr2, ...myArr3]
// console.log(myArr) /* Combine three array elements in one array */

//4. Flat - combile all elements in single array
// const myArr4 = [1,2,3, [4,5,6], [6,7,[8,9,10]]]
// console.log(myArr4.flat(1))
// console.log(myArr4.flat(2))
// console.log(myArr4.flat(Infinity))


// isArray

// console.log(Array.isArray("Mohit"));
// console.log(Array.isArray([1,2,4]));


// from()

// console.log(Array.from("Mohit"))
// console.log(Array.from([1,2,3], (x) => x+1))


// of()

let player1 = "Mohit"
let score1 = 100
let player2 = "XYZ"
let score2 = 200

console.log(Array.of(player1, score1, player2, score2))



