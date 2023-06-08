const express=require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userroute=express.Router()
const {usermodule}=require("../module/usermodule")

userroute.post("/register",async(req,res)=>{
    const {name,email,password,age}=req.body

    try{
        bcrypt.hash(password, 5, async(err, hash)=>{
           
            if(hash)
            {
                const data=new usermodule({name,email,password:hash,age})
                await data.save()
                res.send({"mas":"data has been added","data":data})
            }
            // Store hash in your password DB.
        })

    }catch(error)
    {
        res.send({"mas":"somthing is worng"})

    }

})
userroute.post("/login",async(req,res)=>{
    const {email,password}=req.body

    try{
        let users= await usermodule.findOne({email})
        if(users)
        {
            console.log(users.password)
            bcrypt.compare(password, users.password,async(err, result)=>{
                console.log(result)
             
                if(result)
                {
                    const token = jwt.sign({ username:users.name,userID:users._id }, 'dheeraj')
                    res.send({"mas":"user has been loging succefull",token:token})
                    
                }else{
                    res.send({"mas":"your password is wrong"})
                }
                // result == false
            });
        }

    }catch(error)
    {
        res.send({"mas":"user not found"})

    }

    
})

module.exports={userroute}