let FirstName = 'Mohit'
let LastName = 'Mehta'

// console.log(FirstName + ' ' + LastName);  OLD Method
// console.log(`Hello My name is ${FirstName} ${LastName}. And I am not a good engineer.`);
// This is a new method and its call String Interpolation. It will use backticks (``) and $() to embed expression.


const FullName = new String("Mohit C Mehta")
const Profession = "   An Engineer"
// console.log(FullName)
// console.log(FullName.__proto__) 
// Prototype you can see this in the browser, it will show {} in the node compiler. But there are lots of property.

// console.log(FullName.length) //Return 13
// console.log(FullName.charAt(0))
// console.log(FullName.charCodeAt(0))
// console.log(FullName.at(-5)); // 0 = M, -1 = a, -2 = t, -3 = h, -4 = e, -5 = M, -6 = space, -7 = C
// console.log(FullName.slice(-13,-2))
// console.log(FullName.slice(1)) // Cut first 5 character and return the remaining string
// console.log(FullName.substring(0,8));
// console.log(FullName.substring(8))
// console.log(FullName.toUpperCase());
// console.log(FullName.toLowerCase());
// console.log(FullName.concat(Profession))
// console.log(Profession.trim())
// console.log(FullName.indexOf("o"))
// console.log(FullName.substring(-4,1))
// console.log(FullName.slice(-4,1));
console.log(FullName.indexOf(' '))
console.log(FullName.replaceAll(' ', '-'))
console.log(FullName.includes("Meta"))
console.log(FullName.split(" "))

/* ================Logical Question================== */

let friend = "Deepika"
console.log(friend.replace("p", "r"));
