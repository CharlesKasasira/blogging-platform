const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    postNumber: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        unique: true
        required: true
    }, 
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})



const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
