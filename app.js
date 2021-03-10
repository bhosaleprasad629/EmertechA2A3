const express = require('express');
const mongoose = require('mongoose');
const app = express();

const studentModel = require('./stud_data')

const url = 'mongodb+srv://prasad123:prasad123@cluster0.wsamo.mongodb.net/prash?retryWrites=true&w=majority';

app.use(express.json());

mongoose
.connect(url);

app.get('/',async(req,res)=>{
    const studdata = new studentModel({Name:'Prasad',College_name:'Dr.DYPIT,Pimpri,Pune',Branch:'Computer Engineering',Division:'B',Year_Of_Passing: 2022});

    try{
        await studdata.save();
        res.send("Data Inserted Successfully...")
    }
    catch(err){
        console.log(err)
    }
})

app.listen(3000,()=>{
    console.log("Server running on port 3000...")
})