const bcrypt = require("bcryptjs")
const User = require("./user.model");
const Card = require("./card.model")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.addCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        await User.updateOne({email: req.params.email}, {$push: {cards: card._id}});
        const user = await findOne({email: req.params.email});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}