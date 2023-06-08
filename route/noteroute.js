
const express =require("express")
const {varify}=require("../middelware/varify")
const {notemodule}=require("../module/notemodule")
const noteroute=express.Router()
noteroute.use(varify)
noteroute.post("/create",async(req,res)=>{

    try{
        let data=await notemodule(req.body)
        await data.save()
        res.send({"mas":"data has been added",data})

    }catch(error)
    {
        res.send({"error":"something is wrong"})

    }

    res.send("create function is working properly")

})
noteroute.get("/",async(req,res)=>{

    try{
        console.log(req.body)
        let data=await notemodule.find({userID:req.body.userID})
        res.send(data)

    }catch(error)
    {
        res.send({"mas":"something is wrong"})

    }

    
})
noteroute.patch("/:id",async(req,res)=>{
    let {id}=req.params
    let body=req.body

    try{
        let note=await notemodule.findOne({_id:id})
        if(note.userID==req.body.userID)
        {
            let update=await notemodule.findByIdAndUpdate({_id:id},body)
            res.send({"mas":"data has been updated"})

        }else{
            res.send({"mas":"user id is wrong"})
        }
        


    }catch(error)
    {

        res.send({"mas":"something is wrong"})

    }
    

    
})

noteroute.delete("/:id",async(req,res)=>{
    let {id}=req.params
   

    try{
        let update=await notemodule.findByIdAndDelete({_id:id})
        res.send({"mas":"data has been DELETED"})


    }catch(error)
    {
        res.send({"mas":"something is wrong"})


    }
    

    
})


module.exports={noteroute}