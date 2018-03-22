var userModel = require('../models/user-model')
var async = require('async');


exports.userList = function(req, res){
//     async.parallel({
//         allUsers: function(callback){
//             userModel
//                 .find()
//                 .exec(callback)
//         },

//         specifiedUser: function(callback){
//             userModel
//                 .find({'firstName': 'Roberto'})
//                 .exec(callback)
//         }
    
//     },function(err, results){
//         if(err){ return next(err)}
//         if(results.specifiedUser == null){ // NO Results
//             var err = new Error('User Specified not found');
//             err.status = 404
//             return next(err);
//         }else{
//             //Succesfull, so do the thing
//             res.json(results)
//         }
//     }
// )
    // NON ASYNC database call
    userModel
        .find()
        .exec(function(err, result){
            if(err){
                res.send(err)
            }else{
                res.send(result);
            }
        });
};

exports.newUser = function(req, res){
    console.log('NOT IMPLEMENTED: POST new User')
};

exports.getUser = function(){
    console.log('NOT IMPLEMENTED: GET user by ID')
}