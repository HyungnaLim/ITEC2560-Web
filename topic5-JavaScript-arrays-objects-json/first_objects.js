// create an object - contains properties
// properties are name: value pairs
let user = {username: 'Hyungna', password: 'kittens'}

console.log(user.username)
console.log(user['username']) // property name should be in string

let whatProperty = 'password'
console.log(user[whatProperty]) // can use variable for the property name with this method

user.password = 'elephant' // can change the value of the property
console.log(user)

user.email = 'hyungna.lim@minneapolis.edu' // add a new property-value pair in the object

user.name = 'Hyungna Lim'
user.contact = {office: 'M124', telephone: '123567842'} // nested object
user.salary = 352380
user.roles = ['developer'] // adding array as value

user.roles.push('server admin')
user.contact.location = 'Minneapolis' // add new property to the nested object

console.log(user)

// looping over all the properties
for (let property in user) {
    console.log(property, user[property])
}