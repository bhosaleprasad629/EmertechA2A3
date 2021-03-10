const express = require('express')

const router = express.Router()

router.get('/ins',(req,res)=>{
        var ins = {
        name: 'Prasad',
        div: 'B',
        email: 'prasad@gmail.com'
    }
})

module.exports = router