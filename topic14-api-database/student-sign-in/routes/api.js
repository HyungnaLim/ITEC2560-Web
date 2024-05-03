const express = require('express')
const database = require('../models/index')  // will require the index.js file from this directory
const Student = database.Student  // the student model

const router = express.Router()

// get request for /api/students
router.get('/students', function(req, res, next){
    Student.findAll().then(students => {
        return res.json(students)
    })
})

// post request
router.post('/students', function(req, res, next) {
    const newStudent = req.body  // get the data from request
    Student.create(newStudent).then( result => {  // create a new student
        return res.status(201).send('New student created')  // return http code
        // HTTP status codes : 200 = ok, 201 = created, 404 = not found, 500 = server error
    })
})


module.exports = router