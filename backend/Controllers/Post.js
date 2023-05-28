const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newpath = path + '.' + ext;
    fs.renameSync(path, newpath);
    console.log(newpath);
    const { title, summary, content } = req.body;
    const newpost = await Post.create({
        title,
        summary,
        content,
        cover: newpath,
    })

    res.status(201).json({
        message: "Success",
        data: newpost,
    })
}

exports.getAllPosts = async (req, res) => {

    const allposts = await Post.find()

    res.status(200).json({
        message: "All Posts Fetched Successfully!",
        data: allposts,
    })
}

exports.getAPost = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Post.findById(id);
        res.json({
            message: "Post Details Fetched Successfully!",
            data: data
        })
    }
    catch (error) {
        console.log(error.message)
    }
}

exports.updatePost = async (req, res) => {
    let newpath = null;
    const { id } = req.params;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newpath = path + '.' + ext;
        fs.renameSync(path, newpath);
        console.log(newpath);
    }

    const { title, summary, content } = req.body;
    console.log(req.body.id)
    const updatedpost = await Post.updateOne({ _id: req.body.id }, {
        title,
        summary,
        content,
        cover: newpath,
    })

    res.status(201).json({
        message: "Post Details Updated Successfully!",
        data: updatedpost,
    })
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    const deletePost = await Post.deleteOne({ _id: id });
    res.status(201).json({
        message: "Post Details Deleted Successfully!",
        data: deletePost,
    })
}