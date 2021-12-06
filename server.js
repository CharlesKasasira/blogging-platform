const express = require("express")
const cors = require("cors")
require("./db/db")
const blogRoute = require("./routes/blogRoute")
const app = express()
const PORT = process.env.PORT || 8989;



app.use(express.json())
app.use(cors())
app.use("/posts", blogRoute)


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))