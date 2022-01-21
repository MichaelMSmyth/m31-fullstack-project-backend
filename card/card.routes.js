const { Router } = require("express");
const { addCard } = require("./card.controller")
const cardRouter = Router();




cardRouter.post("/card/:email", addCard);