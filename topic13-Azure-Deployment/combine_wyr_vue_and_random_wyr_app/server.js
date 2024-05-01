const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index')

const app = express()

// find the static data - js, css file created with npx vite build
const staticFilePath = path.join(__dirname, 'client', 'dist')  // find the directory
const staticFiles = express.static(staticFilePath)  // get the static files
app.use('/', staticFiles)  // use the static file

app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})