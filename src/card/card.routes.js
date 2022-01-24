const { Router } = require("express");
const { addCard, deleteCard } = require("./card.controller")
const cardRouter = Router();
const User = require("../user/user.model")

cardRouter.post("/card/:email", addCard);
cardRouter.delete("/card/:email", deleteCard);

module.exports = cardRouter;