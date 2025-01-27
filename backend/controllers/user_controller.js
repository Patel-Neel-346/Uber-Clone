const User=require('../models/user_model.js');
const userServices=require('../services/user_services.js');
const {validationResult}=require('express-validator');
const BlacklistToken=require('../models/blacklist_token_model.js');

module.exports.registerUser=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {fullname,email,password}=req.body;
    console.log(req.body);

    const hashedPassword=await User.hashPassword(password);

    const user=await userServices.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });

    const token=await user.generateAuthToken();

    res.cookie('token',token);
    
    res.status(201).json({token,user});

};


module.exports.loginUser=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}=req.body;

    const user=await User.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message:'User not found'});
    }
    const isMatch=await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid credentials'});
    }
    const token=await user.generateAuthToken();
    res.cookie('token',token);


    return res.status(200).json({token,user});
    
};

module.exports.getUserProfile=async(req,res)=>{ 
    res.status(200).json({user:req.user});
};

module.exports.logoutUser=async(req,res)=>{
    res.clearCookie('token1');
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistToken.create({token});
    
    res.status(200).json({message:'Logged out successfully'});
}; 
 // Get user profile