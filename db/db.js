require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.localDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection