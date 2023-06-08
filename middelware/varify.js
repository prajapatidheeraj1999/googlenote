const jwt=require("jsonwebtoken")
const varify=(req,res,next)=>{

    let token =req.headers.authorization
    if(token){
        jwt.verify(token, 'dheeraj',async(err, decoded)=> {
            
            if(decoded)
            {
               
               
                req.body.username=decoded.username
                req.body.userID=decoded.userID
                console.log(decoded)
                console.log("your token is varrify")
                next()
            }else{
                res.send("pls login first")
            }
            
          });
          

    }else{
        res.send({"mas":"pls login first"})
    }
    
   


}
module.exports={varify}