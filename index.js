const express =require('express');


const app =express();

app.get('/',(req,res)=>{
    res.send("I know how to start node server")
})

app.listen(4200,()=>console.log("listening to port 4200"))