const express = require('express');
const authMiddleware= require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');
const { body } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

router.post('/signup',
    [
        body('name').not().isEmpty().withMessage('Please Enter Your Name'),
        body('email').isEmail().withMessage('Please Enter Valid E-Mail')
        .custom((userEmail => {
            return User.findOne({email:userEmail}).then(user =>{
                if(user) {
                    return Promise.reject('Email is already exists!');
                }
            })
        })),
        body('password').not().isEmpty().withMessage('Please Enter Your Password')
    ],    
    authController.createUser); // POST http://localhost:3000/users/signup
router.post('/login', authController.loginUser);  // POST http://localhost:3000/users/login
router.get('/logout', authController.logoutUser);  // POST http://localhost:3000/users/logout
router.get('/dashboard',authMiddleware, authController.getDashboardPage);  // POST http://localhost:3000/users/dashboard
router.delete('/:id', authController.deleteUser);

module.exports= router;