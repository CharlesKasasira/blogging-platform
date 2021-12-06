const blogModel = require('../models/Blog')

const getPost = async (postNumber) => await blogModel.getPost(postNumber)



module.exports = getPost 