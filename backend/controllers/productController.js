const Product = require('../models/productModal')

// get all products
const allProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: 1 })
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// get single Product
const singleProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    res.status(200).json({ msg: 'Single Product' })
}

// add new product
const addProduct = async (req, res) => {
    const { title, price, description } = req.body
    try {
        let slug = title.split(' ').join('').toLowerCase()
        const product = await Product.create({ title,slug, price, description, image:'wdqq' })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    allProducts,
    singleProduct,
    addProduct,
}
