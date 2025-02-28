const express = require('express');
const router = express.Router();
const {registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain} = require('../controllers/captain.controller');
const {authCaptain} = require('../middlewares/auth.middleware');


router.post('/register',registerCaptain);

router.post('/login',loginCaptain);

router.get('/profile',authCaptain,getCaptainProfile);

router.get('/logout',authCaptain,logoutCaptain);


module.exports = router; 