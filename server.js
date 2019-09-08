var express = require('express');
var app = express();
var config = require('./config/development'); //mongo confurigation
var mongoose = require('mongoose');
var requireDir = require('require-dir'); //requires directory
var bodyParser = require('body-parser'); //expose incoming requests on req.body
var path = require('path');


//allowCrossDomain is a middleware function that allows AJAX requests coming from an other domain
var allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// check body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//check how path works
app.use(express.static(path.join(__dirname, 'client')));

app.use(allowCrossDomain);

var router = express.Router();
var routes = require('./server/routes');
routes.register(router);
app.use('/', router);

//checked mongo connect
var mongoConnect = 'mongodb://' + config.db.mongo.host + ':' + config.db.mongo.port + '/' + config.db.mongo.db
    mongoose.connect(mongoConnect,  { useNewUrlParser: true });

//server to listen on given port
app.listen(8000, function () {
    console.log("Welcome to students Management, server started at 8000 : "+ config.db.mongo.db);
})