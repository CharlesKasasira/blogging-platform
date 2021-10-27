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
router.get("/:id", getPost, async (req, res) => {
    res.json(res.blog)
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


//updating one
router.patch("/:id", getPost, async(req, res) => {
    if(req.body.id != null){
        res.blog.id = req.body.id
    }
    if(req.body.title != null){
        res.blog.title = req.body.title
    }
    if(req.body.author != null){
        res.blog.author = req.body.author
    }
    if(req.body.description != null){
        res.blog.description = req.body.description
    }
    if(req.body.image_URL != null){
        res.blog.image_URL = req.body.image_URL
    }
    if(req.body.body != null){
        res.blog.body = req.body.body
    }
    if(req.body.date != null){
        res.blog.date = req.body.date
    }
    if(req.body.tags != null){
        res.blog.tags = req.body.tags
    }

    try{
        const updatedBlog = await res.blog.save();
        res.json(updatedBlog)
    } catch (err){
        res.status(400).json({message: err.message})
    }
    
})

// deleting one
router.delete("/:id", getPost, async (req, res) => {
    try{
        await res.blog.remove()
        res.json({message: "successfully deleted post"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    
})

async function getPost(req, res, next){
    let blog
    try{
        blog = await Blog.findById(req.params.id)
        if(blog == null){
            return res.status(404).json({message: "Cannot find post"})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }

    res.blog = blog
    next()
}


module.exports = router