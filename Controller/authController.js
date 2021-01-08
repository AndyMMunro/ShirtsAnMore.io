const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

function signUp(req, res) {
    
    models.User.findOne({where:{email:req.body.email,
                        userName:req.body.userName}}).then(results =>{
                            if(results) {
                                return res.status(409).json({
                                    message: "email or username already exist",
                                });

                            }else {
                                bcryptjs.genSalt(10, function(err, salt) { 
                                    bcryptjs.hash(req.body.password, salt, function(err, hash){
                                        const authUser = {
                                            name: req.body.name,
                                            userName: req.body.userName,
                                            email: req.body.email,
                                            password: hash,
                                            token: null
                                        }
                                    
                                        models.User.create(authUser).then(result => {
                                            res.status(201).json({
                                                message: "User Signed Up successfully",
                                            });
                                        }).catch(error => {
                                            if (error) {
                                                console.log(error);
                                                res.status(500).json({
                                                    message: "something when wrong"
                                                    
                                                });
                                                console.log(error);
                                            };
                                        });
                            
                            });
                        }).catch(error =>{
                            if(error) {
                                
                                return res.status(500).json({
                                    message: "Something went wrong"
                                });
                            };
                        });


            // models.Users.authenticate(authUser).then(results => {
            //     const rightPassword =  bcryptjs.compare(req.body.password, authUser.password)
            // })
};
});
};

function login (res, req) {
        models.User.findOne({where:{userName: req.body.userName}}).then(results =>{
            console.log(userName);
                if (userName === null) {
                    res.status(401).json({message: "Credentials don't match!"});
                }else{
                    bcryptjs.compare(req.body.password, user.password, function(err, result) {
                        if(result) {
                            const token = jwt.sign({
                                email: user.email,
                                userName: user.userName
                            }, 'secret', function(err, token){
                                res.status(200).json({
                                    message: "Login Succesful",
                                    token: token
                                });
                            });
                        }else{
                            res.status(401).json({message: "Credentials don't match!"});
                        };
                    });
                }
        }).catch(error => {
           { return res.status(500).json({
                message: "Something went wrong"
           })
        };
 });
};



module.exports = {login: login, signUp: signUp}