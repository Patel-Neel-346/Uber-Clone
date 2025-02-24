const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const cors=require('cors')
const connectDB=require('./db/db.js')
const userRouter = require('./routes/user_routers.js')
const cookieParser = require('cookie-parser')
const captainRoute = require('./routes/captain_route.js')
const Maprouter = require('./routes/maps_routes.js')

const app=express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api/user',userRouter)
app.use('/api/captain',captainRoute)
app.use('/api/maps',Maprouter)

app.get('/',(req,res)=>{
    res.send('API is running...')
});

module.exports=app;


