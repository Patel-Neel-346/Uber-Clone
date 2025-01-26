const user_model=require('../models/user_model.js');

module.exports.createUser=async({firstname,lastname,email,password})=>{

    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }

    const user=user_model.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}; // Create a new user