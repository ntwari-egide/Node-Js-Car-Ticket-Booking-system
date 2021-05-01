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

module.export = mongoose.model('Car',carSchema)