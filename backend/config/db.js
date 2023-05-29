const mongoose = require('mongoose');
// Connecting mongoDB Database
// anubhav884
// || "mongodb://localhost:27017/blog_app"
const db = mongoose.connect('mongodb+srv://anubhav884:root@cluster0.5lny0lq.mongodb.net/?retryWrites=true&w=majority')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })


module.exports = db;