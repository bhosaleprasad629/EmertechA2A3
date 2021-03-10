const mongoose = require('mongoose');
const studSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    College_name:{
        type: String,
        required: true
    },
    Branch:{
        type: String,
        required:true
    },
    Year_Of_Passing:{
        type: Number,
        required: true
    },
    Division:{
        type: String,
        required: true   
    }
});

const data = mongoose.model('STUDENT DATA',studSchema)

module.exports = data;
