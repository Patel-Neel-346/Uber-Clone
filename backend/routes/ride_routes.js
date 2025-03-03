const express=require('express');
const router=express.Router();
const {body,query}=require('express-validator');
const { createRide, getFareController } = require('../controllers/ride_controller');
const { authUser } = require('../middlewares/user_middleware');


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

module.exports = router;