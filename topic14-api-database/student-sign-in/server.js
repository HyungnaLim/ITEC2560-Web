const express = require('express')  // import express
const apiRouter = require('./routes/api')

const path = require('path')

const app = express()  // create web app server

// use console command 'npx vite build' to creat dist folder and static files manually before writing this code
// access static files (vue app)
const staticFilePath = path.join(__dirname, 'clients', 'dist')  // make sure the name of directory matches
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)  // request to home page, serve static file (index.html vue app)

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
