const express = require('express')
const router = express.Router()
const Car = require('../models/car')
const CarController = require('../controllers/car.controller')


router.get('/',async(req,res)=>{
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (err) {
        res.send('Error : '+err)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const car = await Car.findById(req.params.id)
        res.json(car)
    } catch (err) {
        res.send('Error : '+err)
    }
})

router.post('/',CarController.getAllCars)


router.patch('/:id',async(req,res)=>{
    try {
        const car = await Car.findById(req.params.id)
        car.isCarFull = req.body.isCarFull
        const updatedCar = await car.save()
        res.json(updatedCar)
    } catch (err) {
        res.send('Error : '+err)
    }
})

module.exports = router