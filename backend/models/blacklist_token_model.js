const moongoose = require('mongoose');

const blacklistTokenSchema = new moongoose.Schema({
    token:{
        type:String,
        required:true,
        unqiue:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
});

module.exports=moongoose.model('BlacklistToken',blacklistTokenSchema); // Export the model