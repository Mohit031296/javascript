// let a = 110
// var c = 110

// if(true){

//     let a = 100
//     const b = 200
//     var c = 300
//     console.log(`Inner: ${a}`)
// }

// console.log(a) 
// // console.log(b)
// console.log(c)




/* Closure */


// function One(){
//     UserFirstName = "Mohit"
//         function Two(){
//             UserLastName = "Mehta"
//             console.log(`Thank you for joing ${UserFirstName} ${UserLastName}`)
//         }
//         console.log(UserFirstName)
//         // console.log(UserLastName)
        
//         Two()
// }
// One()



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}