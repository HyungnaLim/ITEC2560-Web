let birds = ['Owl', 'Robin', 'Eagle']
// can change the size of array in JavaScript

console.log(birds) // print the array

// forEach loop
birds.forEach(function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird) // print each bird in a new line
})

// traditional for loop
for (let x = 0; x<birds.length; x++) {
    console.log(x, birds[x])
}

// string library functions
let text = 'hello world'
let stringLength = text.length
let shout = text.toUpperCase()
let whisper = text.toLowerCase()
let whereIsW = text.indexOf('w') // index of first matching character or -1 if not found
let whisperAndShout = whisper.concat(shout) // join string together
let replaceO = text.replace('o', '0')
let replaceAllO = text.replace(/o/g, '0') // g means global
let removeWhitespace = text.trim()

console.log(stringLength, shout, whisper, whereIsW, whisperAndShout, replaceO, replaceAllO, removeWhitespace)

// replace examples
let exampleText = 'The classes are itec 1150, itec 1250, itec 2560'
let replaced = exampleText.replace('itec', 'ITEC') // only first 'itec' will be replaced
console.log(replaced)
let replacedAll = exampleText.replace(/itec/g, 'ITEC') // all 'itec' will be replaced
console.log(replacedAll)

// replace using regex
let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)

