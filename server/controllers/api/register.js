var Users = require('../../models/User');
var ObjectId = require('mongoose').Types.ObjectId;

function registerUser(req,res){
    var result = {
          status : false
    };
    var reqParam = req.body;

   if(reqParam.type === 'register'){
         var createUserData =  {
                "fullName":reqParam.fullName ,
                "password":reqParam.password ,
                "mobileNumber": reqParam.mobileNumber,
                "emailId" : reqParam.emailId,
                "userType" : reqParam.userType
          }

         Users.create(createUserData,function(err, response){
                 if (response){
                    console.log('this is the create response',JSON.stringify(response));
                    result.message = 'User created Successfully';
                    result.status = true;
                    res.json(result);
                 }else{
                    result.message = 'User creation Failed';
                    res.json(result);
                }
           })
   }else{
      var query = {
        emailId : reqParam.emailId
      }
      console.log('registerUser called',JSON.stringify(req.body));
       Users.find(query,function(err,response){
            console.log('response'+JSON.stringify(response));
            console.log('err'+JSON.stringify(err));
            if(response){
                for(var i in response){
                     if(reqParam.password === response[i].password){
                          result.message = 'Logged in successfully';
                          result.response =  response[i];
                          result.status = true;
                          res.json(result);
                    }else {
                       result.message = 'Password dont match';
                       res.json(result);
                  }
                }
            }else{
                console.log('inside else');
                result.message = 'No user found with this email-id';
                res.json(result);
            }
       })
   }

}

function loginUser(req,res){

}

module.exports.registerUser = registerUser;