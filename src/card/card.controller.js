const bcrypt = require("bcryptjs")
const Card = require("./card.model")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../user/user.model");

exports.addCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        await User.updateOne({email: req.params.email}, {$push: {card: card._id}});
        const user = await  User.findOne({email: req.params.email});
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}

exports.deleteCard = async (req, res) => {
    try {
        const card = await Card.deleteOne(req.body);
        await User.updateOne({email: req.params.email}, {$pop: {card: card._id}});
        const user = await  User.findOne({email: req.params.email});
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}