const jwt = require('jsonwebtoken');
const config = require('config');

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'] || (req.body && req.body.access_token) || (req.query && req.query.access_token);
    if (!token) return res.status(401).json({
        auth: false,
        message: "Something went wrong, no token provided"
    });

    jwt.verify(token, ('secret'), function (err, decoded) {
        if (err) return res.status(500).json({
            auth: false,
            message: "Failed to authenicate token"
        });
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyJWT;