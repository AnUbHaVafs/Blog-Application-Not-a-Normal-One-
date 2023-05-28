const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const data = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });

        res.status(201).json({
            message: "Registered Successfully!",
            data: data
        })
    }

    catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}