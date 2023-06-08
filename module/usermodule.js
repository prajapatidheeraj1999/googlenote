const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number
})

const usermodule=mongoose.model("user",userschema)

module.exports={
    usermodule
}