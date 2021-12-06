require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection