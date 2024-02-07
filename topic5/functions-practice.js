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