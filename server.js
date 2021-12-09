const express = require("express")
const cors = require("cors")
const blogRoute = require("./routes/blogRoute")
const app = express()
require("./db/db")



app.use(express.json())
app.use(cors())
app.use("/posts", blogRoute)


app.listen(process.env.PORT || 8889)