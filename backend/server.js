const http=require('http');
const app=require('./app');
const { initialzeSocket } = require('./socket');
const Port=process.env.PORT || 5000;
const server=http.createServer(app);

initialzeSocket(server)
server.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})