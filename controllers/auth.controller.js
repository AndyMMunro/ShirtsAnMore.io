const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//checking validate users

function signUp(req, res) {
    const authUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    models.Users.create(authUser).then(_result => {
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
};

module.exports = {
    signUp: signUp
};