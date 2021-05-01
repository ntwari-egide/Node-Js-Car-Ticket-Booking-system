const express = require('express')
const router = express.Router()

router.get('/cars',()=>{
    console.log('Get Request is sent !!');
})

module.exports = router