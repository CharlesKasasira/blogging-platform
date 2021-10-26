const express = require("express")
const router = express.Router()
const Blog = require("../models/blog")

// getting all
router.get("/", async (req, res) => {
    try{
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (err){
        res.status(500).json({message: err.message})
    } 
})


// getting one
router.get("/:id", async (req, res) => {
    // res.send(req.params.id)
    const {id} = req.params
    try{
        const blogs = await Blog.findOne({id})
        res.json(blogs)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// creating one
router.post("/", async (req, res) => {
    const blogs = new Blog({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        image_URL: req.body.image_URL,
        body: req.body.body,
        date: req.body.date,
        tags: req.body.tags
    })
    try{
        const newBlog = await blogs.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// updating one
router.patch("/:id", (req, res) => {
    
})

// deleting one
router.delete("/:id", (req, res) => {
    
})


module.exports = router