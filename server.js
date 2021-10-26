require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
require("./db/db");


const PORT = process.env.PORT || 8889


// static folder
app.use(express.json())
app.use(express.static('public'))

const blogRouter = require('./routes/posts.js')
app.use('/posts', blogRouter)


// app.use(cors())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type']
}))

app.listen(PORT, () => console.log("server connected"))