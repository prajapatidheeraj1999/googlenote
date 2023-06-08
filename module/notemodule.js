const mongoose=require("mongoose")

const noteschema=mongoose.Schema({
    title:String,
    body:String,
    username:String,
    userID:String,
    category:String
})

const notemodule=mongoose.model("notes",noteschema)

module.exports={
    notemodule
}