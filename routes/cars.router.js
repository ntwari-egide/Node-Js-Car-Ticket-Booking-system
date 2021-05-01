const express = require('express')
const router = express.Router()
const Car = require('../models/car')
const CarController = require('../controllers/carController')


router.get('/',CarController.addCar)

router.get('/:id',CarController.getCarById)

router.post('/',CarController.addCar)


router.patch('/:id',CarController.updateCarById)

module.exports = router