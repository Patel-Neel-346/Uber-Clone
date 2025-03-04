const socketIo=require('socket.io');
const User = require('./models/user_model');
const captain_model = require('./models/captain_model');

let io;

function initialzeSocket(server){
    io=socketIo(server,{
        cors:{
            origin:'*',
            methods:['GET','POST']
        }
    });

    io.on('connection',(socket)=>{
        console.log("Client Connected :",socket.id);

        
        socket.on('join', async (data) => {
            const { userId, userType } = data;

            console.log(`User ${userId} Joined as ${userType}`)
            if (userType === 'user') {
                await User.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === 'captain') {
                await captain_model.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });

        socket.on('update-location-captain',async(data)=>{
            const {userId,location}=data;

            if(!location || !location.ltd || !location.lng){
                return socket.emit('error',{message:'invalid Location data'});
            }

            await captain_model.findByIdAndUpdate(userId,{
                location:{
                    ltd:location.ltd,
                    lng:location.lng
                }
            })
        })

        socket.on('disconnect',()=>{
            console.log(`Client is Disconnected:${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId,messageObject){
    console.log(`sending message to ${socketId}`,messageObject)
    if(io){
        
        io.to(socketId).emit(messageObject.event,messageObject.data);
    }else{
        console.log('Socket.io is not Initalized');
    }
}

module.exports={initialzeSocket,sendMessageToSocketId}