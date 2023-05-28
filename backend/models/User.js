const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4
    },
    password: {
        type: String,
        required: true,
        unique: true,
        min: 4
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('userModel', user);
module.exports = User;