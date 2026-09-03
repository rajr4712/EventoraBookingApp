const express = require('express');
const router = express.Router();
const { register, login, verifyOTP } = require('../controllers/authController');


//router create - (register , login ,verifyOTP function are in controller k authController.js me )
router.post('/register', register);
router.post('/login', login);
router.post('/verify-otp', verifyOTP);

module.exports = router;
