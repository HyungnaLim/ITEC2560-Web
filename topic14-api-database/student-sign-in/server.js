const express = require('express')  // import express
const apiRouter = require('./routes/api')

const app = express()  // create web app server

app.use(express.json())
app.use('/api', apiRouter)

// run server on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})