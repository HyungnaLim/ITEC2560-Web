console.log("Hello World!")

// JavaScript Variables

let color = 'blue'
// generic way to create variables

var size = 'medium'
// scope of the variable is much wider than using let, can cause error, not recommended

const language = 'JavaScript'
// final value, can't change the value of the variable defined with const

// number variable - no distinction for integer and floating points
let quantity = 5
let distance = 4.5
let todayTemp = 75

// string variable - can use either single quote or double quote
let text = 'Hello!'
let message = "welcome"

// join together different types of variable is possible
console.log(text + ' There are ' + quantity + ' programmers')

console.log('Today\'s Temperature is ' + todayTemp + 'F')
let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C') // rounding decimals with .toFixed

// using template string
console.log(`Today's temperature is ${tempC.toFixed(2)}C
which is equivalent to ${todayTemp}F`) // putting new line space is possible in JavaScript

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'
console.log(`This class is ${department} ${classCode} ${className}`)