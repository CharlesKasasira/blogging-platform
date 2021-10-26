const express = require("express")
const blog = require("../models/blog")
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
        // const blogs = await Blog.findById(id)
        res.json(blogs)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// creating one
router.post("/", async (req, res) => {
    const blogs = new Blog({
        id: req.body.id,
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
router.patch("/:_id", async (req, res) => {
    const {_id} = req.params
    try{
        const blogs = await Blog.findOneAndUpdate({_id})
        res.json(blogs)
    } catch (err){
        res.json({message: err.message})
    }
    
})

// deleting one
router.delete("/:id", async (req, res) => {
    const {id} = req.params
    try{
        const blogs = await Blog.findOneAndDelete({id})
        res.json({message: "successfully deleted"})
    }
    catch (err){
        res.json({message: err.message})
    }
    
})


module.exports = router