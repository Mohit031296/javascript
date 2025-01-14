const myArrat = new Array("js", "c++", "java", "python")

/* For each - 1 */
// myArrat.forEach(function (item) {
//     console.log(item)
// })


/* For each - 2 */
// myArrat.forEach( (item) => {
//     console.log(item)
// })


/* For each - 3 */
// function printMe(item){
//     console.log(item);
    
// }
// myArrat.forEach(printMe)


/* For each - 4 */
// myArrat.forEach((a, b, c) => {

//     console.log(`value: ${a}, index: ${b}, full array: ${c}`)
// })


/* For each - 5 - object in array */

const codingLanguageType = [

    {
        codingLanguage: "javascript",
        languageType: ".js"
    },
    {
        codingLanguage: "java",
        languageType: ".java"
    },
    {
        codingLanguage: "c++",
        languageType: ".c"
    }
]

codingLanguageType.forEach((item)=>{
    console.log(item.codingLanguage)
    console.log(item.languageType)
})