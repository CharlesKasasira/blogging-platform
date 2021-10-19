const express = require("express");
const path = require("path");

const PORT = 3005
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/todos", (req, res) => {
    res.sendFile(path.join(__dirname, "json", "todos.json"))
})

app.get("/posts", (req, res) => {
    res.sendFile(path.join(__dirname, "json", "posts.json"))
})



app.listen(PORT, () => {
    console.log("Server running")
})