// in JavaScript, you can mix types if needed
let my_array = [5, 6, 'cake', 1.5]

// read individual element by index
console.log(my_array[3])
console.log(my_array[-1]) // return 'undefined' but not crashing
console.log(my_array[10]) // return 'undefined' but not crashing

my_array[6] = 'cat' // JavaScript will add 'cat' on index 6 and fill in the empty items in between
console.log(my_array)
console.log(my_array[5]) // undefined

my_array[1] = 'zebra' // change value of the item by index
console.log(my_array)

my_array.push('elephant') // add item in the end
console.log(my_array)

let lastItem = my_array.pop() // remove the last item
console.log(lastItem)
console.log(my_array)

my_array.unshift('deer') // add item in the beginning
console.log(my_array)

let firstItem = my_array.shift() // remove the first item
console.log(firstItem)
console.log(my_array)

my_array.reverse() // reverse order
console.log(my_array)

my_array.sort() // sort order number -> alphabetical
console.log(my_array)

let numberOfItems = my_array.length
console.log(numberOfItems)

let catIndex = my_array.indexOf('cat') // find index of an item by item value
console.log(catIndex)

if (my_array.includes('cat')) { // check if the item is in the array
    console.log('cat is in the array')
}

console.log(my_array.join(' * '))


// print each item in each new line
my_array.forEach(function(item) {
    console.log(item)
})


// print the length of each item
my_array.forEach(function (item) {
    console.log(item.length) // length of number type item will be 'undefined'
})


// create a new array with length of each item
let length_array = []
my_array.forEach(function(item) {
    length_array.push(item.length)
})
console.log(length_array)
