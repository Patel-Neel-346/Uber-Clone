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