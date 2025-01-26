const express=require('express');
const captainRoute=express.Router();
const {body}=require('express-validator');
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } = require('../controllers/captain_controller');
const { authCaptain } = require('../middlewares/user_middleware');

captainRoute.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color is required'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate is required'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
],registerCaptain)

captainRoute.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],loginCaptain)


captainRoute.get('/profile',authCaptain,getCaptainProfile);

captainRoute.get('/logout',authCaptain,logoutCaptain);

module.exports=captainRoute; // Export the router