const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8889
const app = express();

// app.use(cors())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type']
}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/todos", cors(), (req, res) => {
    res.sendFile(path.join(__dirname, "json", "todos.json"))
})

app.get("/posts", (req, res) => {
    res.sendFile(path.join(__dirname, "json", "posts.json"))
})

console.log(cors)



app.listen(PORT)