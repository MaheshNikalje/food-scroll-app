const mongoose = require('mongoose')



function connectDB(){
    mongoose.connect("mongodb://localhost:27017/food-scroll-aap")
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:", err)
    })
}
module.exports = connectDB