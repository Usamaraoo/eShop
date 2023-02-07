const express = require('express')
const router = express.Router()
// Model
// const Product = require('../models/productModal')
const Categories = require('../models/categoriesModal')

// get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Categories.find({},{_id:0,title:1})
        res.json( categories )
    } catch (e) {
        res.status(200).json({ error: e.message })
    }
})

// get all categories
router.post('/', async (req, res) => {
    try {
        const { category } = req.body
        console.log(category)

        if (category) {
            const cat = await Categories.create({ title: category })
            res.json({ category: cat.title })
        }
    } catch (e) {
        res.status(200).json({ error: e.message })
    }
})

module.exports = router
