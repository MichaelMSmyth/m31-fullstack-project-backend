const { Router } = require("express");
const { addCard, deleteCard, listCard, updateCard } = require("./card.controller")
const cardRouter = Router();
const User = require("../user/user.model")

cardRouter.post("/card/:email", addCard);
cardRouter.delete("/card/:email", deleteCard);
cardRouter.get("/card/:email", listCard);
cardRouter.put("/card/:email", updateCard);

module.exports = cardRouter;