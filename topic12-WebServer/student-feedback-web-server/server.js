const express = require('express')  // import express library
const path = require('path')  // path is used to connect pieces of locations
const bodyParser = require('body-parser')  // import body parser

const indexRouter = require('./routes/index.js')

const app = express()  // create the web app server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }))

// typically css files are stored in public directory because they are static data, not dynamic.
// there can be many other directories to store different types of static data under the public like stylesheets, images, javascript.. etc
const staticFileLocation = path.join(__dirname, 'public')  // access public
app.use(express.static(staticFileLocation))  // import static files

// tell the app where the views (HTML files or templates) are
// __dirname is current directory where the server.js is in
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'hbs')   // use handlebars to generate views

app.use('/', indexRouter)  // all requests to the app will be passed to indexRouter

// start server running
//  run on the specific port if you are told to use one, otherwise use 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port' + server.address().port)
})
