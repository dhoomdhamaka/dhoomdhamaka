const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router()

router.get('/', (req,res) => {
    
    return res.send("Homee")
})

module.exports = router;