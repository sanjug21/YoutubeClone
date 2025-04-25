const mongoose=require('mongoose')
const express=require('express')
const router=require('./route/user')
const app=express()
const cors=require('cors')


app.use(cors())

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/YouTube').then(()=>{
    console.log("Database connected");
    
}).catch((err)=>{
    console.log("Database not connected");
    
})


app.use('/user',router);

app.listen(3000,()=>{
    console.log("Server started");
})