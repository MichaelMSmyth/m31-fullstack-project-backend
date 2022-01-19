const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { string } = require("yargs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    card: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id }, process.env.SECRET, {
        expiresIn: "365 Days",
    });
};

const User = mongoose.model("User", userSchema)

module.exports = User;