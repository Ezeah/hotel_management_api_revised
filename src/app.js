const express = require('express')
const mongoose = require('mongoose')
const database = require('./configurations/database')
const app = express()
const router = require('./routes/index.route')

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/vi', router)
database()

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`Server is up and listening on ${PORT}`)
})