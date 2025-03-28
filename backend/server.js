const express = require('express');
const app = express();

app.use(express.json());

let users = [];


app.get('/users',(req,res)=>res.json(users));

app.post('/users',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
})

app.put('/users/:id',(req,res)=>{
    const {id} = req.params;
    const updatedUser = req.body;
    users = users.map(user=>(user.id === id ? updatedUser :user));
    res.json(updatedUser);
})

app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    users = users.filter(user=>user.id !== id);
    res.status(204).send();
})

app.post('/data',(req,res)=>{
    console.log(req.body);
    res.send("Data send suucssfully");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})