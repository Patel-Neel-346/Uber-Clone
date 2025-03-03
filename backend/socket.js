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


        socket.on('disconnect',()=>{
            console.log(`Client is Disconnected:${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId,message){
    if(io){
        io.to(socketId).emit('message',message);
    }else{
        console.log('Socket.io is not Initalized');
    }
}

module.exports={initialzeSocket,sendMessageToSocketId}