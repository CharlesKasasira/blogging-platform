require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose")
const morgan = require("morgan")


const PORT = process.env.PORT || 8889
const app = express();

// const testURI = "mongodb://localhost:27017/blogDB"

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => console.log('hey, database connected'))

//format log in the server (using an http server logger middleware --morgan--)
app.use(morgan("dev"));

// static folder
app.use(express.json())
app.use(express.static('public'))

const blogRouter = require('./routes/posts.js')
app.use('/posts', blogRouter)


// app.use(cors())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type']
}))


// app.get("/posts", (req, res) => {
    // Blog.getPosts((error, posts) => {
    //     if(error) throw error
    //     res.json(posts)
    // })
// })



// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"))
// })

// app.get("/todos", cors(), (req, res) => {
//     res.sendFile(path.join(__dirname, "json", "todos.json"))
// })

// app.get("/posts", (req, res) => {
//     res.sendFile(path.join(__dirname, "json", "posts.json"))
// })

// app.get("/posts/:id", (req, res) => {
//     let jsonFile = require('./json/posts.json')
//     res.send(jsonFile[+req.params['id']-1])
//     // req.params['id']
//     // res.send(data[+req.params['id']-1])
// })




app.listen(PORT, () => console.log("server connected"))