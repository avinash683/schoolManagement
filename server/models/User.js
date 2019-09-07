//schcema to register user
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var schema = new mongoose.Schema({
     name : {type: String}
})

var model = mongoose.model('users', schema);
module.exports = model;