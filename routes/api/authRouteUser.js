const express = require('express');
const authController = require('../../controller/auth.controller')
const router = express.Router();

router.post('/sign-up', (req, res) =>{
    res.send('Register')
});

module.exports = router;