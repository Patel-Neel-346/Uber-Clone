const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {

    const apikey=process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`;

    try {
        const  respones= await axios.get(url);
        if(respones.data.status === 'OK'){
           const location=respones.data.results[0].geometry.location;
           return {
            ltd: location.lat,
            lng: location.lng
           }
        }else{
            console.log("Error")
            throw new Error('Unable to find location');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime=async(origin,destination)=>{

    if(!origin || !destination){
        throw new Error('Origin and destination are required');
    }

    const apikey=process.env.GOOGLE_MAPS_API_KEY;

    const url=`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apikey}`;

    try{
            const response=await axios.get(url);
            if(response.data.status==='OK'){
                if(response.data.rows[0].elements[0].status==='ZERO_RESULTS'){
                    throw new Error('No routes found');
                }

                return {
                    distance: response.data.rows[0].elements[0].distance.text,
                    time: response.data.rows[0].elements[0].duration.text
                }
            }else{
                throw new Error('Unable to find distance and time');
            }
    }
    catch(error){
        console.error(error);
        throw error;
    }

    
};