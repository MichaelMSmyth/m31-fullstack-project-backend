const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    cards: [{
        column_id: {
            type: String,
            unique: true,
        },
        title: {
            type: String,
            default: "Card",
            require: true,
        },
        body: {
            type: String,
            default: "Type Here",
            require: true,
        }
    }]
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;