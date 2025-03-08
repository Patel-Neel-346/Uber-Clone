const express=require('express');
const router=express.Router();
const {body,query}=require('express-validator');
const { createRide, getFareController, confirmRide, startRide, endRide } = require('../controllers/ride_controller');
const { authUser, authCaptain } = require('../middlewares/user_middleware');


router.post('/create',authUser,[
    body('pickup').isString().isLength({min:3,max:100}).withMessage('pickup is required'),
    body('destination').isString().isLength({min:3,max:100}).withMessage('destination is required'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('VehicleType is required')],
    createRide
);

router.get('/get-fare',
    authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid PickUp Address'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid Destination Address'),
    getFareController

)

router.post('/confrim',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid Ride Id'),
    confirmRide
    
)

router.get('/get-ride',
    authCaptain,
    query('rideId').isMongoId().withMessage('Invalid Ride Id'),
    query('otp').isString().isLength({min:6,max:6}).withMessage('Invalid Otp'),
    startRide
)

router.post('/end-ride',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    endRide
)

module.exports = router;