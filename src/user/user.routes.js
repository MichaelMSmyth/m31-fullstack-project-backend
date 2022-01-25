const { Router } = require("express");
const { addUser, 
        listUser, 
        updateUser, 
        deleteUser, 
        logIn, 
        //tokenCheck 
        } = require("./user.controller.js");
const { hashPassword, 
        decryptPassword, 
        tokenCheck } = require("../middleware/index");
const userRouter = Router();

userRouter.post("/user/signup", hashPassword, addUser);
userRouter.post("/user/login", decryptPassword, logIn);
userRouter.get("/user/:email", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:email", deleteUser);
userRouter.get("/user", tokenCheck);

module.exports = userRouter;
