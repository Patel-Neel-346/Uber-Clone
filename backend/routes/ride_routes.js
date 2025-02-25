const express=require('express');

const router=express.Router();
const {body}=require('express-validator');
const { createRide } = require('../controllers/ride_controller');
const { authUser } = require('../middlewares/user_middleware');


router.post('/create',authUser,[
    body('pickup').isString().isLength({min:3,max:100}).withMessage('pickup is required'),
    body('destination').isString().isLength({min:3,max:100}).withMessage('destination is required'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('VehicleType is required')],
    createRide
);

module.exports = router;