const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()

// route imports
const usersApi = require('./routes/userApi')
const productApies = require('./routes/productApies')
const payment = require('./routes/payment')
const categories = require('./routes/categories')
const path = require("path")
const app = express()
const port =process.env.PORT || 8000

// middleware
app.use(express.json())
app.use(cors())
// for deployment
app.use(express.static(path.join(__dirname, "frontend", "build")))

app.use('/api/users', usersApi)
app.use('/api/products', productApies)
app.use('/api/categories', categories)
// Payment
app.use('/api/payment', payment)
// connect to db
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log('db connected')
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
    });
    app.listen(port, () =>
        console.log(`Server is running on port ${process.env.PORT}`)
    )
})
