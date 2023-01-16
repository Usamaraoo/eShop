const express = require('express')
const {
    allProducts,
    singleProduct,
    addProduct,
} = require('../controllers/productController')
const router = express.Router()

router.get('/', allProducts)
router.get('/:id', singleProduct)
router.post('/', addProduct)

module.exports = router
