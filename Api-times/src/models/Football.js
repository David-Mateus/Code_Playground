const mongoose = require('mongoose')

const footballSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    foundation:{
        type: Number,
        required: true,
    },
    stadium:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
})
module.exports =  mongoose.model('Football', footballSchema)