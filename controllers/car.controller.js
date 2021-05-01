exports.addCar = async(req,res)=>{
    const car = new Car({
        carType: req.body.carType,
        numberOfPassengers: req.body.numberOfPassengers,
        isCarFull: req.body.isCarFull
    })

    try {
        const carSaved = await car.save()
        res.json(carSaved)
    } catch (err) {
        res.send('Error: '+err)
    }
}

exports.getAllCars = async(req,res)=>{
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (err) {
        res.send('Error : '+err)
    }
}

exports.getCarById = async(req,res)=>{
    try {
        const car = await Car.findById(req.params.id)
        res.json(car)
    } catch (err) {
        res.send('Error : '+err)
    }
}

exports.updateCarById = async(req,res)=>{
    try {
        const car = await Car.findById(req.params.id)
        car.isCarFull = req.body.isCarFull
        const updatedCar = await car.save()
        res.json(updatedCar)
    } catch (err) {
        res.send('Error : '+err)
    }
}