var requireDir = require('require-dir'); //requires directory
var controllers = requireDir('./controllers/api');
var commonServices = require('./util/commonService');


module.exports.register = function (router) {
    console.log('router called - - - - - -' + router);
    router.route('/api/register').post(controllers.register.registerUser);
};