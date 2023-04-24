require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT
const MONGO = process.env.MONGODB

const users = require('./controllers/user.controller')

mongoose.connect(`${MONGO}/booksDB`)

const db = mongoose.connection

db.once('open', () => console.log(`connected: ${MONGO}`));

app.use(express.json())

app.use('/user', users)

app.listen(PORT, () => console.log(`Books Server on port: ${PORT}`));