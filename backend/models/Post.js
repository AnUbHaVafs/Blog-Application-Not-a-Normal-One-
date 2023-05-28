const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
    },
    summary: {
        type: String,
    },
    content: {
        type: String,
    },
    cover: {
        type: String,
    },
}, {
    timestamps: true,
});
const Post = mongoose.model('postModel', PostSchema);
module.exports = Post;