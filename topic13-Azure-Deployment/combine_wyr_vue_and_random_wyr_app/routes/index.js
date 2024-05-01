const express = require('express')
const router = express.Router()

// access wyr_questions (function definition)
const randomWYRQuestion = require('../model/wyr_questions')

// get request to the home page
router.get('/', function(req, res, next) {
    res.send('Placeholder for home page')
})

// get request to would you rather page
router.get('/wyr', function(req, res, next) {
    const wyr = randomWYRQuestion()

    res.json(wyr)   // render the wyr object to json & send the response
})

module.exports = router