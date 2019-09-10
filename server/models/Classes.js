//schema to register user
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var schema = new mongoose.Schema({
     class : {type: String},
     teacherAssigned : {
            name : {type : String},
            emailId : {type : String},
            mobileNumber : {type: Number}
     },
     Students :[{
             name: {
               first : { type: String, required: true },
               last: { type: String }
             },
             emergency_mobileNumber : { type: Number },
             dateOfBirth : {type : Date},
             documents :[{
                docNo:{type : String},
                docType:{type : String},
                images:[{type : String}],
                uploadedDate:{type: Date, require: true, default: Date.now}
            }]
         }],
     createdDate: {type: Date, require: true, default: Date.now},
     updatedBy: {type: mongoose.Schema.Types.ObjectId},
     updatedAt: {type: Date},
})

var model = mongoose.model('classes', schema);
module.exports = model;