//schcema to register user
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var schema = new mongoose.Schema({
     name : {type: String},
     mobileNumber : {type: Number},
     address : {type: String},
     updatedBy: {type: mongoose.Schema.Types.ObjectId},
     updatedAt: {type: Date},
     createdDate: {type: Date, require: true, default: Date.now}
})

var model = mongoose.model('users', schema);
module.exports = model;