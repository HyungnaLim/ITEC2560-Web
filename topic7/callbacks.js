let animals = ['Giraffe', 'Elephant', 'Yak']

// classic way
animals.forEach( function(animal, index) { // call back function with index
    console.log(animal, index)
})

// arrow annotation version
animals.forEach((animal, index) => {
    console.log(animal,index)
})

// shorter version without {}
// animals.forEach((animal, index) => console.log(animal,index))

