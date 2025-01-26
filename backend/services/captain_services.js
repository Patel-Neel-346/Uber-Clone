const captain_model=require('../models/captain_model.js');

module.exports.createCaptain=async ({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) throw new Error('Missing required fields');

    const captain=captain_model.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }

    })

    return captain;
}   // Create a new captain