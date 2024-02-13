const express = require('express')
const router = express.Router()

router.post('/foodData', (req, res) => {
    try {
        console.log(global.fooditems, global.foodCategory)
        res.send([global.fooditems, global.foodCategory])
    } catch (error) {
        console.error(error.message)
        res.send('Server error')
    }


})


module.exports = router;