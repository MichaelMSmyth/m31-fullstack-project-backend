const { Router } = require("express");
const { addCard } = require("./card.controller")
const { hashPassword, 
    decryptPassword, 
    tokenCheck } = require("../middleware/index");
const cardRouter = Router();




cardRouter.post("/card/:email", addCard);