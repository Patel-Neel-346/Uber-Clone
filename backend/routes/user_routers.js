const express = require('express');
const userRouter=express.Router();
const {registerUser, loginUser, getUserProfile}=require('../controllers/user_controller.js');
const {body}=require('express-validator');
const { authUser } = require('../middlewares/user_middleware.js');

userRouter.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long'),
],registerUser);

userRouter.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long'),
],loginUser);

userRouter.get('/profile',authUser,getUserProfile);

userRouter.get('/logout',authUser,);

module.exports=userRouter;