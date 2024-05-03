const express = require('express')  // import express
const apiRouter = require('./routes/api')

const app = express()  // create web app server

app.use(express.json())

app.use('/api', apiRouter)

app.use(function(req, res, next) {
    // 404 error handling for when server can't find a matching route with url
    res.status(404).send('Sorry, not found')
})

// handle database error
app.use(function(err, req, res, next) {
    // err needs to be the first argument of the function
    console.log(err)
    res.status(500).send('Server error')
})

// run server on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})