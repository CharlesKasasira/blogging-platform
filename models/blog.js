const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    image_URL : {
        type: String
    },
    body : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true,
        default: Date.now
    },
    tags : {
        type: Object,
        required: true
    }
})


module.exports = mongoose.model('Blog', blogSchema);