// call the packages we need
var express    = require('express');        
var app        = express(); 
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config files
var db = require('./config/db');
mongoose.connect(db.url);
mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});


var Resource = require('./app/models/resources');

var port = process.env.PORT || 8080;        // set our port

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure our routes

app.listen(port);
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;