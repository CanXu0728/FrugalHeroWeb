'use strict';
const log = console.log;

const express = require('express')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const date = require('date-and-time')

// express
const app = express();
// body-parser middleware setup.  Will parse the JSON and convert to object
app.use(bodyParser.json());
// parse incoming parameters to req.body
app.use(bodyParser.urlencoded({ extended: true }))

// set the view library
app.set('view engine', 'hbs')

// static directory
app.use("/js", express.static(__dirname + '/public/js'))
app.use("/css", express.static(__dirname + "/public/css"))
app.use("/img", express.static(__dirname + "/public/assets/img"))
app.use("/video", express.static(__dirname + "/public/assets/video"))
app.use("/html", express.static(__dirname + "/public/html"))

// route for root; redirect to login
app.get('/', (req, res) => {
	res.redirect('/home')
})


// route for homepage
app.route('/home').get((req, res) => {
	res.sendFile(__dirname + '/public/html/index.html')
})


// route for storypage
app.route('/feature').get((req, res) => {
	res.sendFile(__dirname + '/public/html/feature.html')
})


// route for potential page
app.route('/potential').get((req, res) => {
	res.sendFile(__dirname + '/public/html/potential.html')
})


// route for about us page
app.route('/us').get((req, res) => {
	res.sendFile(__dirname + '/public/html/us.html')
})

// ================================= server listener ========================================

app.listen(port, () => {
	log(`Listening on port ${port}...`)
});


