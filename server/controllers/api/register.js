var Users = require('../../models/User');


function registerUser(req,res){
   console.log('registerUser called',JSON.stringify(req.body));
}

module.exports.registerUser = registerUser;