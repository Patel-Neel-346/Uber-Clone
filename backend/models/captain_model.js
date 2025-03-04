const moongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new moongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlenght:[3,'First name must be atleast 3 characters long'],
        },
        lastname:{
            type:String,
            minlenght:[3,'Last name must be atleast 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Invalid Email'],
        minlenght:[5,'Email must be atleast 5 characters long']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },

    status:{
        type:String,
        default:"inactive",
        enum:["active","inactive"]
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlenght:[3,'Color must be atleast 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minlenght:[3,'Plate must be atleast 3 characters long'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be atleast 1'],
        },
        vehicleType:{
            type:String,
            required:true,
            enum:["car","motorcycle","auto"]
        },
    },
    location:{
        ltd:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
    
});

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:'24h',
    });

    return token;
};

captainSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

module.exports=moongoose.model('Captain',captainSchema); // Export the model