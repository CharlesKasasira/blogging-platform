const express = require("express")
const Blog = require("../models/Blog")
const router = express.Router()

router.get("/", async (req, res) => {
    try{
        const posts = await Blog.find();
        res.json(posts)
    } catch(err) {
        res.json({message: err.message})
    }
})



router.patch("/:id", async (req, res) => {
    try{
        const { id } = req.params
        const post = await Blog.findByIdAndUpdate(id, {
            postNumber: req.body.postNumber,
            title: req.body.title,
            author: req.body.author,
            body: req.body.body
        })
        post.save()
            .then(() => res.json({ message: "updated successful"}))
            .catch(err => res.json({message: err.message})) 
    } catch(err) {
        res.json({message: err.message})
    } 
})

router.post("/", (req, res) => {
    try{
        const post = new Blog({
            id: req.body.title,
            postNumber: req.body.postNumber,
            title: req.body.title,
            author: req.body.author,
            body: req.body.body
        })
        post.save()
            .then(() => res.json({message: "post created successfully"}))
            .catch(err => res.json({message: err.message}))
    } catch(err){
        res.json({message: "Oops, something went wrong"})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params 
        const post = await Blog.findByIdAndDelete(id)
        res.json({message: "post deleted successfullly"})
    } catch(err) {
        res.json({message: err.message})
    }
})

router.get('/:postNumber', async (req, res) => {
    try{
        const { postNumber } = req.params
        // const post = getPost(postNumber)
        const post = await Blog.findOne({postNumber: postNumber})
        res.json(post)
    } catch(error) { res.json({message: err.message})}
})




module.exports = router