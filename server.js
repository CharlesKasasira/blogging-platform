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

app.get("/posts/:id", (req, res) => {
    let jsonFile = require('./json/posts.json')
    const data = [
        {
            "id": 1,
            "name": "Charles kasasira"
        },
        {
            "id": 2,
            "name": "Ryan Dahl"
        }
    ]
    res.send(jsonFile[+req.params['id']-1])
    // req.params['id']
    // res.send(data[+req.params['id']-1])
})

console.log(cors)



app.listen(PORT)