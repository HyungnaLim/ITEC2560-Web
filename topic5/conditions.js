// pre-requisites for Android programming class - C# or Java

let takenCSharp = false
let takenJava = true

if (takenCSharp || takenJava) { // conditional statement (either A or B)
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# or Java')
}

// senator requirements
let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    // === for checking both value and type without type coercion
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible')
}

// falsy values - undefined, null, empty lists, empty objects, 0, false
// It is not easy to expect what JavaScript will do with falsy values because of the type coercion
if ('' === 0) {  // it is better to use === with falsy values to avoid type coercion
    console.log('the same!')
} else {
    console.log('not the same!')
}