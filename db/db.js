require("dotenv").config()
const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.testURL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;