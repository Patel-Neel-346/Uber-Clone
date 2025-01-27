const blacklist_token_model = require('../models/blacklist_token_model');
const captain_model = require('../models/captain_model');
const Captain = require('../models/captain_model');
const captainService = require('../services/captain_services');
const { validationResult } = require('express-validator');

module.exports.registerCaptain=async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;

    const isCaptainAlreadyRegistered = await captain_model.findOne({email});

    if(isCaptainAlreadyRegistered){
        return res.status(400).json({message:'Captain already registered'});
    }

    const hasedPassword = await captain_model.hashPassword(password);

    const captain=await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hasedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    })

    const token = captain.generateAuthToken();

    return res.status(201).json({token,captain});

}; // Register a new captain

module.exports.loginCaptain=async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body;
    const captain = await captain_model.findOne({email}).select('+password');
    if(!captain){
        return res.status(404).json({message:'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(404).json({message:'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.status(200).json({token,captain});

}; // Login a captain

module.exports.getCaptainProfile=async (req,res)=>{
    res.status(200).json({captain:req.captain});
};  

module.exports.logoutCaptain=async (req,res)=>{
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklist_token_model.create({token});

    res.clearCookie('token1');

    res.status(200).json({message:'Logged out successfully'});
}; // Login a captain