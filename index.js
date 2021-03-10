const express  = require("express")

const app = express()

const data = require('./data.json');

app.get('/interns',(req,res)=>{
    res.send(data)
})

app.get('/',(req,res)=>{
    res.send('Hello WorldS!')
})

app.get('/prasad',(req,res)=>{
        res.send('Its Prasad')
})

app.get('/prasad/:id',(req,res)=>{
    const id = req.params.id
    res.send('Welcome Back Prasad with ID : ' +  id)
})

app.listen(9000 ,(req,res)=>{
    console.log('wait.... Request Under Process!!!!')
})