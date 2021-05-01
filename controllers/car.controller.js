exports.getAllCars = async(req,res)=>{
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