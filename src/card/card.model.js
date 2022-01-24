const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    cards: {
        column_id: {
            type: String,
            unique: true,
        },
        title: {
            type: String,
            require: true,
        },
        body: {
            type: String,
            require: true,
        }
    }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;