const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()

// route imports
const usersApi = require('./routes/userApi')
const productApies = require('./routes/productApies')
const payment = require('./routes/payment')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use('/api/users', usersApi)
app.use('/api/products', productApies)
// Payment
app.use('/api/payment', payment)
// connect to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log('db connected')
    app.listen(process.env.PORT, () =>
        console.log(`Server is running on port ${process.env.PORT}`)
    )
})
