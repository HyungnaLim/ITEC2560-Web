// note: restart server everytime checking new changes in code
// console commands: "ctrl+c" to quit the server, then "npm start"

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

// enable parsing of POST request from body
app.use(bodyParser.urlencoded( {extended: false} ))

// configure app to use that Handlebars template engine and
// work with template files in the view directory
app.set('views', path.join(__dirname, 'views'))
// "views" are web pages, "hbs" is handlebars
app.set('view engine', 'hbs')

app.use('/', indexRouter)

let server = app.listen(3000)