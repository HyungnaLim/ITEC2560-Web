// note: restart server everytime checking new changes in code
// "ctrl+c" to stop the server, then "npx nodemon" to restart

// this is the main file for the web server.
// a web server creates web pages in response to a request.
// the browser can display that page to the user.

const path = require('path')
const express = require('express')

const bodyParser = require('body-parser')

// routing is figuring out what page the user wants
// typically based on a URL (browser address bar)
const indexRouter = require('./routes')

const app = express()

const staticFileLocation = path.join(__dirname, 'public')   // access public directory
app.use(express.static(staticFileLocation))  // import static files in public directory

// enable parsing of POST request from body
app.use(bodyParser.urlencoded( {extended: false} ))

// configure app to use that Handlebars template engine and
// work with template files in the view directory
app.set('views', path.join(__dirname, 'views'))
// "views" are web pages, "hbs" is handlebars
app.set('view engine', 'hbs')

// use indexRouter for all request
app.use('/', indexRouter)

// run server using port 3000 unless the port to use is specified
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port' + server.address().port)   // display console message with port number
})