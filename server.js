const express = require("express")
const cors = require("cors")
require("./db/db")
const blogRoute = require("./routes/blogRoute")
const app = express()



app.use(express.json())
app.use(cors())
app.use("/posts", blogRoute)


app.listen(process.env.PORT || 5000)