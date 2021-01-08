const express = require('express');
const router = express.Router();
const verifyJWT = require('../../middleware/jwt')
const authController = require('../../Controller/authController');
const db = require('../../models');






router.post('/sign-up', authController.signUp);
router.post('/login', authController.login);





module.exports = router