// More examples https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith']

// Mapping - creating a new array built from elements of an existing array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let uppercaseCats = cats.map( function(cat) {
    return cat.toUpperCase()
})

console.log(uppercaseCats) // the new array in uppercase with all the same elements from original array
console.log(cats) // the original array is not modified

// Arrow function, full version
let uppercaseCats2 = cats.map( (cat) => {
    return cat.toUpperCase()
})

console.log(uppercaseCats2)

// more concise - one line, one argument, can omit () and {}. Return statement is implied.
let uppercaseCats3 = cats.map( cat => cat.toUpperCase() )
console.log(uppercaseCats3)

// make a new array with each cat name length
let catNameLengths = cats.map( function(cat) {
    return cat.length
})

console.log(catNameLengths)

// arrow version
let catNameLengths2 = cats.map( (cat) => {
    return cat.length
})

// concise version
let catNameLengths3 = cats.map( cat => cat.length )


// Compare to the imperitive method... (loop)

let catNameLengths4 = []
cats.forEach( function(cat) {
    let length = cat.length
    catNameLengths4.push(length)
})

let catNamesLengths5 = []
for (let i = 0; i < cats.length; i++) {
    let length = cats[i].length
    catNamesLengths5.push(length)
}

console.log(catNamesLengths5)

// console.log(catNameLengths)
// console.log(catNameLengths2)
// console.log(catNameLengths3)
// console.log(catNameLengths4)

// create a new array with the first letter of each cat name
let firstLetters = cats.map( cat => cat[0] )
console.log(firstLetters)

// TODO Exercise: can you use map to create a new array with the
// last letter of each cat's name?
let lastLetters = cats.map(cat => cat[])

// create an array with boolean values from cats array
let startsWithM = cats.map( cat => {
    return (cat[0] === 'm' || cat[0] == 'M')
})
console.log(startsWithM)

// TODO  Exercise: can you use map to create a new array of boolean values;
//    whether a cat's name is longer than 6 letters or not.
//    For the example, the array will be [ true, false, true, true, false, true]

let quizScores = [90, 100, 79, 81, 100, 40, 92, 64]

let aGrades = quizScores.filter( score => score >= 90)
console.log(aGrades)

// can use multiple conditions with parenthesis
let letterGrades = quizScores.map( score => {
    if (score >= 90) { return 'A'}
    if (score >= 80) { return 'B'}
    if (score >= 70) { return 'C'}
    if (score >= 60) { return 'D'}
    return 'F'
})

console.log(letterGrades)

// can return any type of elements. this one returns objects that contain each score and grade
// Starts with [ { score: 90, grade: 'A' }  .... ]
let scoreAndLetterGrades = quizScores.map( score => {
    if (score >= 90) { return {score: score, grade: 'A'} }
    if (score >= 80) { return {score: score, grade: 'B'} }
    if (score >= 70) { return {score: score, grade: 'C'} }
    if (score >= 60) { return {score: score, grade: 'D'} }
    return {score: score, grade: 'F'}
})

console.log(scoreAndLetterGrades)

// TODO review from here
let aScoresAndGrade = scoreAndLetterGrades.filter( scoreInfo => scoreInfo.grade == 'A')

console.log(aScoresAndGrade)


// // Note: shortcut assignment operator for objects.
let cat = 'Meridith'
let owner = 'Taylor Swift'
let catAndOwner = { cat, owner }  // Variable names become the keys
console.log(catAndOwner) // { cat: 'Meridith', owner: 'Taylor Swift' }

// // Using that here,
let scoreAndLetterGrades2 = quizScores.map( score => {
    let grade
    if (score >= 90) {  grade = 'A' }
    else if (score >= 80) { grade = 'B' }
    else if (score >= 70) { grade = 'C' }
    else if (score >= 60) { grade = 'D' }
    else { grade = 'F' }
    return {score, grade }
})

console.log(scoreAndLetterGrades2)


// // more useful array/object shortcuts: the spread operator

let dogs = ['Einstein', 'Marley', 'Fly', 'Max', 'Scooby', 'Zero']
let pets = [ ...dogs, ...cats, 'Kitty']
console.log(pets)


// // Filtering

// /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// */

//let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith']

let shortCatNames = cats.filter( cat => cat.length < 6)
console.log(shortCatNames)

let shortCatNames2 = cats.filter( function(cat) {
    return cat.length < 6
})

console.log(shortCatNames2)

let namesStartingWithG = cats.filter( cat => cat[0] === 'g' || cat[0] === 'G')
console.log(namesStartingWithG)

console.log(cats)  // original array is not changed.

function startsWithG(name) {
    // return name[0] === 'g' || name[0] === 'G'
    return name.toUpperCase().startsWith('G')
}

let namesStartingWithG2 = cats.filter( cat => startsWithG(cat) )
let namesStartingWithG3 = cats.filter( startsWithG )

console.log(namesStartingWithG2)
console.log(namesStartingWithG3)


// // Works with arrays of objects too

let students = [
    {name: 'andy', starId: 'aaaa', present: true},
    {name: 'brian', starId: 'bbbb', present: false},
    {name: 'catherine', starId: 'cccc', present: true},
    {name: 'clara', starId: 'ccc2', present: false},
    {name: 'duncan', starId: 'dddd', present: true},
    {name: 'steve', starId: 'ssss', present: false},

]

// // Filter = make new array from only elements of existing array that meet a condition

let presentStudents = students.filter( student => student.present )
console.log('Who is here?', presentStudents)


// // Exercise: can you use filter to create an array of students who are NOT present?

// // Filter - remove students meeting a condition
let everyoneButClara = students.filter( student => student.name != 'clara')
console.log(everyoneButClara)   // bye!

// // If we have an example student,
let brian = students[1]
// Can remove with filter
let everyoneButBrian = students.filter( student => student != brian )
console.log(everyoneButBrian)

let everyoneButDuncan = students.filter( function(student) {
    return student.name != 'duncan'
})

console.log(everyoneButDuncan)

// // QUESTION: when mapping and filtering, does the original array change?

let onlyLetterC = students.filter( student => student.name.startsWith('c'))
console.log(onlyLetterC)

// // Combine map and filter - get names of present students
// Exercise: think about how you would do this with a loop?
let presentStudentNames = students
    .filter( student => student.present )
    .map( student => student.name )

console.log(presentStudentNames)   // [ 'andy', 'catherine', 'duncan' ]

// Exercise: can you create an array of starIDs of students who are NOT present?

// // Spread operator works with arrays and objects too.
// // So if there's another class,
let moreStudents = [
    {name: 'justin', starId: 'jjj', present: true},
    {name: 'mary', starId: 'mmm', present: false},
]

let everyone = [ ...students, ...moreStudents ]
console.log(everyone)

// // And with an object, can be used to copy an object into a new object and add/edit properties,

let student = {name: 'daniel', starId: 'ddd', present: true}

let studentPlusEmail = { ...student, email: 'daniel@school.edu'}
console.log(studentPlusEmail)

// Equivalent to either of these
student.email = 'daniel@school.edu'
student['email'] = 'daniel@school.edu'

// Modify
let studentChangedStarId = { ...student, starId: 'eee'}   // make sure any attributes you change are at the end
console.log(studentChangedStarId)

// Another example object
let studentClassReg = { '1150': true, '2560': false}
// Combine two or more objects using spread operator
let studentAndReg = { ...student, ...studentClassReg}
console.log(studentAndReg)



// // Similar functions: find returns the first match
let steve = students.find( student => student.name === 'steve')
let beyonce = students.find( student => student.name === 'beyonce')
console.log('steve', steve)  // { name: 'steve', starId: 'sss', present: false }
console.log('beyonce', beyonce)  // undefined

// // every returns true if all of the items match a condition. Is everyone here?
let isEveryoneHere = students.every( student => student.present )
console.log('Is everyone here? ' + isEveryoneHere)

// // Let's use map to get everyone here!

let everyoneIsHere = students
    .map( student => { return { ...student, present: true}} )

console.log(everyoneIsHere)

let isEveryoneHere2 = everyoneIsHere.every( student => student.present )
console.log('Is everyone here? ' + isEveryoneHere2)


let starIDlength = students.every( student => student.starId.length >= 3 )
console.log('Every star ID long enough?', starIDlength)   // true