const multer = require('multer');
const fs = require('fs');
const uploads = multer({ dest: 'uploads/' });
const express = require('express')
const router = express.Router();
const { createPost, getAllPosts, getAPost, updatePost, deletePost } = require('../Controllers/Post.js');

router.post('/post', uploads.single('file'), createPost)
router.put('/post', uploads.single('file'), updatePost)
router.get('/post', getAllPosts)
router.get('/post/:id', getAPost)
router.delete('/post/:id', deletePost)
module.exports = router