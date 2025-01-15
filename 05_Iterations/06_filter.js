const myArray = new Array("js", "c++", "java", "python")

// myArray.forEach( (a)=> {

//     console.log(a)

// })


/*can for each return any value? - No*/

// const value = myArray.forEach( (a)=> {

//         // console.log(a)
//         return a;
//     })

//     console.log(value) /* Return undefined */


/* Filter */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// myNumbers.filter((a) => a > 5 ) not return anything

// const value = myNumbers.filter((a) => a >= 5 )
// const value = myNumbers.filter((a) => {
//     return a >= 5
// })
// console.log(value)






/* Exercise */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 const bookDetails = books.filter((b)=> {
    return b.edition >= 2000 && b.genre === "Non-Fiction" && b.publish >= 1990
 } )

 console.log(bookDetails)
