// Ways of declaring variables and constants in JavaScript

// let creates a variable - it can be changed
 let school = 'Minneapolis College'
console.log(school)
school = 'Metro State'
console.log(school)

// creating constants - it can't be changed
const language = 'JavaScript'
console.log(language)
// language = 'C#'  // error

// Why would you make a constant?
// If you have data in your program that you know what it is, and you won't change it,
// it is easier to make a constant because you can't accidentally change it

// Things to watch out for with constant arrays and objects
// You can modify (adding, editing data in arrays or objects), but can't replace the entire arrays of objects

// array example

let statesLet = ['Minnesota', 'Wisconsin', 'Iowa']
statesLet.push('Michigan')
console.log(statesLet)

const statesConst = ['Minnesota', 'Wisconsin', 'Iowa']
// statesConst = ['California', 'Oregon']   // error! replacing the data is not possible with const
statesConst.push('Michigan') // modifying the array is possible
console.log(statesConst)

// object example

const address = {
    number: '1501',
    street: 'Hennepin Ave',
    city: 'Minneapolis'
}

// This is not allowed!
// address = {
//     number: '100',
//     street: 'Main st',
//     city: 'Saint Paul'
// }

address.zip = '55403' // modifying the object is allowed!
console.log(address)


// how to choose let vs const?
// if you are not sure, use let
// if you know you won't change data, use const
// if you know you need to change data, use let


// shortcut to create objects

let number ='1234'
let street = 'Hennepin Avenue'
let city = 'Minneapolis'

// Javascript assume property name when using variables
let addressShortcut = {
    number,
    street,
    city
}

console.log(addressShortcut)