const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    postNumber: String,
    title: {
        type: String,
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


blogSchema.statics.getPost = (postID) => Blog.findOne({postNumber: postID})


const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog