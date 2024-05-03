const express = require('express')
const database = require('../models/index')  // will require the index.js file from this directory
const Student = database.Student  // the student model

const router = express.Router()

// get request for /api/students
router.get('/students', function(req, res, next){
    Student.findAll( { order: ['name'] } ).then(students => {  // sort student in order by name
        return res.json(students)
    })
})

// post request
// using same url '/students' because server can tell they are different api request since the method(get, post, ..) is different
// it is useful to use the same url so that we know they all operate something about students
router.post('/students', function(req, res, next) {
    const newStudent = req.body  // get the data from request
    Student.create(newStudent).then( result => {  // create a new student
        return res.status(201).send('New student created')  // return http code
        // HTTP status codes : 200 = ok, 201 = created, 404 = not found, 500 = server error
    }).catch( err => {  // error handling
        // 400 = bad request - client is sending a request the server can't fulfill
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message)
            // get messages from every error in errors array and store them in messages array
            return res.status(400).json(messages)
        } else {
            // if some other error, pass it to other part of app to handle
            // err will go back to server.js to be handled
            return next(err)
        }
    })
})

router.patch('/students/:id', function(req, res, next) {
    // matches request to any id value ( : mean it is a placeholder)
    // req.params stores the id value, any placeholders in the url
    const studentID = req.params.id
    const updatedStudent = req.body  // update data about this student
    console.log(updatedStudent)

    Student.update( updatedStudent, {where: {id: studentID} } )  // update the database
        .then( (result) => {  // pass result object
        const rowsModified = result[0]  // this will store the number of rows modified
        // handle if student id that doesn't exist
        if (rowsModified === 1) {  // if 1 row was changed, we found the student and they were updated
            return res.send('ok')  // status is 200 by default
        } else {
            // if 0 rows were updated, student was not found
            return res.status(404).send('Student not found')
        }
    }).catch(err => {  // error handling
        if (err instanceof database.Sequelize.ValidationError) {  // database validation error
            const messages = err.errors.map( e => e.message)
            // get messages from every error in errors array and store them in messages array
            return res.status(400).json(messages)
        } else {
            // if some other error (ex. can't connect database)
            // err will go back to server.js to be handled
            return next(err)
        }
    })
})

router.delete('/students/:id', function(req, res, next) {
    const studentID = req.params.id
    Student.destroy( {where: { id: studentID} } ).then( (rowsDeleted) => {
        if (rowsDeleted === 1) {
            return res.send('Student deleted')
        } else {
            return res.status(404).send('Student not found')
        }
    }).catch(err => {
        return next(err)
    })
})


module.exports = router