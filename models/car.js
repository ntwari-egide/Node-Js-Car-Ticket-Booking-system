const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    carType: {
        type:String,
        required: true
    },
    numberOfPassengers: {
        type: Number,
        required: true
    },
    isCarFull: {
        type: Boolean,
        required: false,
        default: false
    }
})

const Car = mongoose.model('Car',carSchema)
module.exports = Car