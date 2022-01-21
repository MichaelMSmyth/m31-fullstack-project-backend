const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const cardSchema = new mongoose.Schema({
    column: {
        "column1": {
            id: {
                type: String,
                unique: true,
                default: "column1"
            },
            title: {
                type: String,
                default: "Column 1",
                require: true,
            },
            cards: [{
                cardText: {
                    type: String,
                },
            }]
        },
        "column2": {
            id: {
                type: String,
                unique: true,
                default: "column2"
            },
            title: {
                type: String,
                default: "Column 2",
                require: true,
            },
            cards: [{
                cardText: {
                    type: String,
                },
            }]
        },
        "column3": {
            id: {
                type: String,
                unique: true,
                default: "column3"
            },
            title: {
                type: String,
                default: "Column 3",
                require: true,
            },
            cards: [{
                cardText: {
                    type: String,
                },
            }]
        },
        "column4": {
            id: {
                type: String,
                unique: true,
                default: "column4"
            },
            title: {
                type: String,
                default: "Column 4",
                require: true,
            },
            cards: [{
                cardText: {
                    type: String,
                },
            }]
        },
        "column5": {
            id: {
                type: String,
                unique: true,
                default: "column5"
            },
            title: {
                type: String,
                default: "Column 5",
                require: true,
            },
            cards: [{
                cardText: {
                    type: String,
                },
            }]
        }
    },
    columnOrder: {
        type: Array,
        default: ["column1", "column2", "column3", "column4", "column5"]
    }
})

cardSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this.id }, process.env.SERCRET);
};

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;