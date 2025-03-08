const { getAddressCoordinates, getCaptainInTheRadius } = require('../services/map_service.js');
const rideService=require('../services/ride_services.js');
const { validationResult } = require('express-validator');
const { sendMessageToSocketId } = require('../socket.js');
const rideModel =require('../models/ride.js')

module.exports.createRide=async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {userId,pickup,destination,vehicleType} = req.body;

    try{
        const ride=await rideService.CreateRide({
            user:req.user._id,
            pickup,
            destination,
            vehicleType
        });

        res.status(201).json({ride});

        const pickupCoordinates=await getAddressCoordinates(pickup)
        console.log(pickupCoordinates)

        const CaptainsInRadius=await getCaptainInTheRadius(pickupCoordinates.ltd,pickupCoordinates.lng,2);

        ride.otp='';

        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
        CaptainsInRadius.map((captain)=>{
            sendMessageToSocketId(captain.socketId,{
                event:'new-ride',
                data:rideWithUser
            })
        })

        console.log(CaptainsInRadius)

    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:err.message});
    }

};

module.exports.getFareController=async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }

    const {pickup,destination}=req.query;

    try{
        const fare=await rideService.getFare(pickup,destination)
        console.log(fare)
        return res.status(200).json(fare);
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}


module.exports.confirmRide=async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    const {rideId}=req.body;

    try{
        const ride=await rideService.confirmRide({rideId,captain:req.captain});

        sendMessageToSocketId(ride.user.socketId,{
            event:'ride-confirmed',
            data:ride
        })
        return res.status(200).json(ride);
    }catch(error){
        console.log(error)
        return res.status(500).json({message:error.message})
    }
}

module.exports.startRide=async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

  
    try{
        const {rideId,otp}=req.query;
        console.log(rideId,otp)
        const ride=await rideService.StartRide({rideId,otp,captain:req.captain})
        console.log(ride)
        
        sendMessageToSocketId(ride.user.socketId,{
            event:'ride-started',
            data:ride
        })
        return res.status(200).json(ride);

    }catch(err){
        console.log(err)
        return res.status(500).json({message:err.message})
    }
}


module.exports.endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.endRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })



        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    } 
}