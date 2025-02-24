const express=require('express');
const { authCaptain, authUser } = require('../middlewares/user_middleware');
const { getCoordinates, getDistanceCoordinates } = require('../controllers/map_controller');

const {query}=require('express-validator');

const router=express.Router();

router.get('/get-coordinates',query('address').isString().isLength({min:3}),authUser,getCoordinates)

router.get('/get-distance',query('origin').isString().isLength({min:3}),query('destination').isString().isLength({min:3}),getDistanceCoordinates)

module.exports=router;