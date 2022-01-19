const { Router } = require("express");
const { addUser, listUser, updateUser, deleteUser, logIn, tokenCheck } = require("./user.controller.js");
const { hashPassword, decryptPassword } = require("../middleware/middleware.js");
const userRouter = Router();

userRouter.post("/user/signup", hashPassword, addUser);
userRouter.post("/user/login", decryptPassword, logIn);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:username", deleteUser);
userRouter.get("/user", tokenCheck);

module.exports = userRouter;
