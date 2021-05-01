const express = require('express')
const router = express.Router()
const Car = require('../models/car')
router.get('/',async(req,res)=>{
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (err) {
        res.send('Error : '+err)
    }
})

module.exports = router