const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CarRouter = require('./routes/cars.router')
const url = "mongodb+srv://root:edaedaeda@cluster0.ulkpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

mongoose.connect(url,
    // working with new url
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err) => {
        if(!err) console.log("MongoDb Connection is currently being run ")
        else{
            console.log("Error : "+err);
        }
    })

    //getting connection
const connection = mongoose.connection

//allowing json requests
app.use(express.json)
app.use(cors)

//routing urls
app.use('/cars',CarRouter)

app.all('*',(req,res)=>{
    res.send('Url is not found ...',404)
})

//listed to server
const port = 8000
app.listen(port,()=>{
    console.log(`Server started,port ${port} ......`);
})