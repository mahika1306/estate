import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})
const app=express()
app.use(express.json())// this allows us to parse json data from the request body(allows json as input to server)

app.listen(3000,()=>{
    console.log('Service is running on port 3000')
})


app.use("/api/user",userRouter) //this is the path to the user route file we created in the last step (api/routes/user.route.js)
app.use("/api/auth",authRouter) 