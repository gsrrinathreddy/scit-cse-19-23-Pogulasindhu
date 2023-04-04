import express from 'express';
import mongoose from 'mongoose';
const app = express ()

mongoose.connect("mongodb+srv://sindhu:Kavithapogula3@cluster0.cwptglu.mongodb.net/portfolio?retryWrites=true&w=majority",{})
        .then(()=>{
            console.log("connected to DB")
        }).catch((error)=> console.log(error))

app.get ("/",(req,res)=>{
    res.send("I have created my first api")
})
app.get("/about-us",(req,res)=>{

})
app.listen(8000,()=>{
    console.log("Server runnig on port 8000")
})