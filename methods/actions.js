const User = require("../models/User");
const jwt = require("jwt-simple")
var config = require("../config/dbConfig");
const { use } = require("passport");
const { secret } = require("../config/dbConfig");

var functions = {
    addNew : function(req, res){
        if((!req.body.name) || (!req.body.password)){
            res.json({
                 seccess: false , msg: "Enter all fields"
            })
        }
        else{
            var newUser = User({
                name : req.body.name,
                password: req.body.password,
            })
            newUser.save(function(err, newUser){
                if(err){
                    res.json({
                        seccess: false , msg: "Failed to save"
                   })
                
                }else{
                    res.json({
                        seccess: true , msg: "User Saved Succesfully"
                   })
                }
            })
        }
    },
    authenticate : function(req, res){
        if((!req.body.name) || (!req.body.password)){
            return res.json({
                'success' : false,
                'msg' : "Enter all Fields"
            })
        }
        else{
            User.findOne({ // first finding in the db with the given name 
                name : req.body.name,function(err, user){
                    if(err){
                        throw(err)
                        
                    }if(!user){
                        res.status(403).send({
                            'success' : false, 'msg' : "User Not Found"
                        })
                    }else{
                        user.comparePassword(req.body.password,function (err, isMatch){
                            if(!err && isMatch){

                                //JWT
                                // var token = jwt.encode(user, secret)
                                res.json({
                                    'success' : true,
                                    'msg' : 'User authenticated',
                                    'token' : 'token',
                                })
                            }else{
                                res.json({
                                    'success' :false,
                                    'msg' : 'Auth Failed',
                                    // 'token' : token,
                                })
                            }
                        })
                    }
                }
            })
            
        
        }
    }
}

module.exports = functions