import _ from "lodash"


const myArray = [1, 2, 3, 4]
let sum = myArray.reduce((acc, cur) => {
    return acc + cur})
console.log(sum)


// let newArray = _.concat(7,23)
// display newArray in lodash
// console.log(newArray)
// let sum = 0
// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i]
// }

// console.log(sum)