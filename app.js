const express = require('express')
const mongoose = require('mongoose')

const url = "mongodb+srv://root:edaedaeda@cluster0.ulkpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

mongoose.connect(url,
    // working with new url
    {useNewUrlParser: true}
    )

    //getting connection
const connection = mongoose.connection

connection.on('open', ()=>{
    console.log('Connection to db is working .....');
})


//listed to server
app.listen(9000,()=>{
    console.log('Server started ......');
})