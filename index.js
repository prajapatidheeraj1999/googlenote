
const express =require("express")
const {connection}=require("./db")
const {userroute}=require("./route/useroute")
const {noteroute}=require("./route/noteroute")
const app=express()
app.use(express.json())
require("dotenv").config()
app.use("/user",userroute)

app.use("/note",noteroute)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("server is running  port number 8080")

    }catch(error)
    {
        console.log("someting is wrong dheeraj pls check")

    }
    
})