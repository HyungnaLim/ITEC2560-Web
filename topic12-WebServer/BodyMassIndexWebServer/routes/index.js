// create a function to create a web page in response to different URLs
// each URL will have its own function that creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    console.log(req.query)  // check that server is receiving data from index.hbs page, it will display on console as an object
    const height = req.query.height // save the data from the object
    res.render('index.hbs')
})

// add new routes, restart server
router.get('/cat', function(req, res) {
    res.send('miaow')
})

module.exports = router