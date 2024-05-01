// create a function to create a web page in response to different URLs
// each URL will have its own function that creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()

// get request for home page
router.get('/', function(req, res, next) {
    // console.log(req.query)  // check that server is receiving data from index.hbs page, it will display on console as an object
    const height = req.query.height // save the data from the object
    res.render('index.hbs')
})

// get request for calculate
router.post('/calculate', function(req, res) {
    const formData = req.body
    const height = formData.height
    const weight = formData.weight
    const bmi = (weight / (height * height)).toFixed(2)
    res.render('result.hbs', {bmi})
})

module.exports = router