const mapsService = require('../services/map_service.js')
const {validationResult} = require('express-validator');

module.exports.getCoordinates = async (req, res) => {
    
    const errors = validationResult(req);   

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {address}  = req.query;
    console.log(address);
    try {
        const coordinates = await mapsService.getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(500).json({ message: 'Unable to find location' });
    }
};


module.exports.getDistanceCoordinates = async (req, res) => {

    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors: error.array()});
        }

        const {origin,destination}=req.query;

        const distanceTime=await mapsService.getDistanceTime(origin,destination);
        res.status(200).json(distanceTime);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Unable to find distance and time'});
    }
};


module.exports.getLocationSuggestion=async(req,res)=>{  

    try{
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({errors: error.array()});
        }

        const {suggestion}=req.query;

        const locationSuggestion=await mapsService.getAutoCompleteSuggestions(suggestion);
        res.status(200).json(locationSuggestion);
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Unable to find location suggestion'});
    }
};