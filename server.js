const express = require("express");
const path = require("path");

const PORT = 3000
const app = express();

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/todos", (req, res) => {
    res.sendFile(path.join(__dirname, "json", "todos.json"))
})

app.get("/posts", (req, res) => {
    res.send("Kasasira's Posts")
})



app.listen(PORT, () => {
    console.log("Server running")
})