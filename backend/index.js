var express = require('express');
require("./config/db");  // database connection
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const app = express();
const uploads = multer({ dest: 'uploads/' });

app.use(express.json());
// app.use(express.urlencoded());

app.use(cors());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api', require('./route/userRoutes'))
app.use('/api', require('./route/postRoutes'))


app.listen(5000, () => {
    console.log("to be started port : https://blog-application-backend-09l7.onrender.com")
});