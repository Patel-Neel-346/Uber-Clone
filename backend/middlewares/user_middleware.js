const User=require('../models/user_model.js');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const BlacklistToken=require('../models/blacklist_token_model.js');
const captain_model = require('../models/captain_model.js');

module.exports.authUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }

    const isBlacklisted=await BlacklistToken.findOne({token:token});
    if(!isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user=await User.findById(decoded._id);
        req.user=user;
        return next();
    }catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }
};    // Authenticate user

module.exports.authCaptain=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }

    const isBlacklisted=await BlacklistToken.findOne({token:token});

    if(!isBlacklisted){
        return res.status(401).json({message:'Unauthorized'});
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain=await captain_model.findById(decoded._id);
        req.captain=captain;
        return next();

    }catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }

};    // Authenticate captain
