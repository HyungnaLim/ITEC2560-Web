const express = require('express')
const router = express.Router()  // figure out what code to run in response to a request
// typically based on the url, and the method, GET, POST, ...


// get request to the home page
router.get('/', function(req, res, next) {
    // req = request, res = response, next = passing the request to something else to handle it
    res.render('index', {
        title: 'Feedback Application',
        author: 'Hyungna',
        timePageLoadedAt: new Date()})  // name of handlebars file (name of a template), optional object with data
    // handlebar is rendering the html template(index.hbs) with the data(title)
    // then express is sending that html to the browser
})

router.get('/feedback-form', function(req,res,next) {
    res.render('student_feedback_form')
})


router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // for a GET request - read the url query
    //const formData = req.query

    // for a POST request
    const formData = req.body

    //console.log(formData)

    // todo - save to a database, automatically email someone when feedback was submitted

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

// this line needs to be the very last line
module.exports = router  // return the router object to all the elements that require index.js