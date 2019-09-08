//schcema to register user
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var schema = new mongoose.Schema({
     fullName : {type: String},
     emailId : {type : String},
     mobileNumber : {type: Number},
     password: {type : String},
     address : {type: String},
     updatedBy: {type: mongoose.Schema.Types.ObjectId},
     updatedAt: {type: Date},
     userType : {type: String,  enum: ['ADMIN', 'STUDENT', 'TEACHER'], default: 'ADMIN'},
     createdDate: {type: Date, require: true, default: Date.now}
})

var model = mongoose.model('users', schema);
module.exports = model;