// in javaScript the order of function definition and using the function don't matter,
// so you can use the function first and then write define it later on the code
// javaScript also doesn't crash if you use more arguments than the function needs, it just ignores the extra arguments
// although having no argument will crash if at least one argument is expected

console.log(shout('hello world', 'hi'))
// console.log(shout()) // error

let message = shout('welcome web programmers')
console.log(message)

function shout(text) {
    let shout_text = text.toUpperCase() + '!!!'
    return shout_text
}


// optional parameter can be useful
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { // if there is an argument 'decimalPlaces' when calling the function
        return celsius.toFixed(2)
    } else { // decimalPlaces == undefined
        return  celsius
    }
}

let todayTemp = 70

todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)

todayCelsius = f_to_c(todayTemp,2)
console.log(todayCelsius)


// GPA function
function isGPA(x) {
    if (x>= 0 && x <= 4) {
        return true
    } else {
        return false
    }
}

console.log(isGPA(-3))
console.log(isGPA('4.1'))
console.log(isGPA(2.5))
console.log(isGPA('4'))
// console.log(isGPA(A)) // error


// function that joins the name of a city and state using template string
function cityCommaState(city, state) {
    return `${city}, ${state.toUpperCase()}` // use back tick (`) and ${} for template string
}

console.log(cityCommaState('minneapolis', 'mn'))