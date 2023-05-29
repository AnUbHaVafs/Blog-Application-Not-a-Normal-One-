var express = require('express');
require("./config/db");  // database connection
const cors = require('cors');
const multer = require('multer');
const env = require('dotenv');
const fs = require('fs');
const app = express();
const uploads = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.urlencoded());

app.use(cors());
app.use('/uploads', express.static(__dirname + '/uploads'));
env.config();

app.use('/api', require('./route/userRoutes'))
app.use('/api', require('./route/postRoutes'))


app.listen(process.env.PORT, () => {
    console.log(`to be started port : http://localhost:${PORT}`)
});