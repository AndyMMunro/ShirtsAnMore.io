const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res) {
    
    models.User.findOne({where:{email:req.body.email,
                        username:req.body.username}}).then(results =>{
                            if(results) {
                                res.status(409).json({
                                    message: "email or username already exist"
                                });
                            };
                        }).catch(error =>{
                            if(error) {
                                res.status(500).json({
                                    message: "Something went wrong"
                                });
                            };
                        });

    bcryptjs.genSalt(10, function(err, salt) { 
        bcryptjs.hash(req.body.password, salt, function(err, hash){
            const authUser = {
                username: req.body.username,
                email: req.body.email,
                password: hash
            }
        
            models.Users.create(authUser).then(result => {
                res.status(201).json({
                    message: "User Signed Up successfully",
                });
            }).catch(error => {
                if (error) {
                    res.status(500).json({
                        message: "something when wrong"
                        
                    });
                    console.log(error);
                };
            });
        });

    });
};
module.exports = {
    signUp: signUp
};