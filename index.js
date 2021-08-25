const express =require('express');
const cors=require('cors');
const bodyParser = require('body-parser')

const app =express();
app.use(cors());
app.use(bodyParser.json());

const users=["shamol","kausar","mim","rokib","janiya","nadida"]
app.get('/',(req,res)=>{
    const fruit ={
        product:'ada',
        price:45
    }
    res.send(fruit)
})

// app.get('/fruits/banana',(req,res)=>{
//     res.send({fruit:'banana',quantity:1000,price:10000})
// })
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    console.log(req.query.sort);
    const name=users[id];
    res.send({id,name})
})

// post
app.post('/addUser',(req,res)=>{
    //save to the database
    const user=req.body;
    user.id=55;
    res.send(user)
})

app.listen(4200,()=>console.log("listening to port 4200"));