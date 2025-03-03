const RideModel=require('../models//ride.js');
const map_service=require('../services/map_service.js');
const crypto=require('crypto')

async function getFare(pickup,destination){
    if(!pickup || !destination){
        throw new Error('pickup and destination are required');
    }  
    
    const distanceTime=await map_service.getDistanceTime(pickup,destination);

    const baseFare={
        auto:30,
        car:50,
        moto:20
    };

    const perKmRate={
        auto:10,
        car:15,
        moto:8
    };

    const perMinuteRate={
        auto:2,
        car:3,
        moto:1.5
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;

}

module.exports.getFare=getFare;

function getOTP(num){
    function generateOTP(num){
        const otp=crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString(); 
        return otp;
    }


    return generateOTP(num);
}

module.exports.CreateRide=async({
   user,pickup,destination,vehicleType 
})=>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('user, pickup, destination and vehicleType are required');
    }

    const fare=await getFare(pickup,destination);

    const ride=new RideModel({
        user,
        pickup,
        destination,
        otp:getOTP(6),
        fare:fare[vehicleType],
    });

    return await ride.save();
};


