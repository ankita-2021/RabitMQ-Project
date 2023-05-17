const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:
    {
        type: String, 
        required: true
    },
    std:
    {
        type: Number,
        required: true
    },
    roll:
    {
        type:Number,
        required: true
    },
    subject:
    {
        type: String,
        required: true
    },
    medium:
    {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('student',studentSchema)

