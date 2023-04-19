const express = require('express')
const router = express.Router()
require('dotenv').config()
// Model
const Product = require('../models/productModal')

const stripe = require('stripe')(process.env.STRIPE_PRIVATEKEY)

// stripe api for payment
router.post('/create-checkout-session', async (req, res) => {
    try {
        const { items } = req.body
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: items.map((item) => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.title,
                        },
                        unit_amount: item.actualPrice * 100,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `/`,
            cancel_url: `/`,
        })
        res.json({ url: session.url })
    } catch (e) {
        res.status(200).json({ error: e.message })
    }
})

module.exports = router
