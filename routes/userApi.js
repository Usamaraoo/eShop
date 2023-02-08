const express = require('express')

const router = express.Router()



// get all users
router.get('/', async (req, res) => {
    res.status(200).json({ message: 'All users' })
})

module.exports = router
