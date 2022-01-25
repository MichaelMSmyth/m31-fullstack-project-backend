const bcrypt = require("bcryptjs")
const Card = require("./card.model")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../user/user.model");

exports.addCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        await User.updateOne({email: req.params.email}, {$push: {card: card._id}});
        const user = await User.findOne({email: req.params.email});
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}

exports.listCard = async (req, res) => {
    try {
        const card = Card.listIndexes();
        await Card.find({$in: {card: card._id}});
        const user = await User.findOne({email: req.params.email});
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}

exports.updateCard = async (req, res) => {
    try {
        const card = await Card.updateOne(req.body);
        await User.updateOne({email: req.params.email}, {$set: {card: card._id}});
        const user = await Card.findOne({email: req.params.email});
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}

exports.deleteCard = async (req, res) => {
    try {
        await User.deleteOne({email: req.params.email}, {$pop: {card: req.params.title}});
        const user = await  Card.findOne({email: req.params.email});
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
}