const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.createUser); // POST http://localhost:3000/users/signup
router.post('/login', authController.loginUser);  // POST http://localhost:3000/users/login
router.get('/logout', authController.logoutUser);  // POST http://localhost:3000/users/logout

module.exports= router;