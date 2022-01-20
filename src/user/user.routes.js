const { Router } = require("express");
<<<<<<< HEAD
const { addUser, 
        listUser, 
        updateUser, 
        deleteUser, 
        logIn, 
        //tokenCheck 
        } = require("./user.controller.js");
const { hashPassword, 
        decryptPassword, 
        tokenCheck } = require("../middleware/middleware.js");
const userRouter = Router();

userRouter.post("/user/signup", hashPassword, addUser);
userRouter.post("/user/login", decryptPassword, logIn);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:email", deleteUser);
userRouter.get("/user", tokenCheck);

module.exports = userRouter;
=======
const {
    addUser,
    listUser,
    updateUser,
    deleteUser,
    logIn,
    // tokenCheck,
    } = require("./user.controller");
const { tokenCheck } = require("../middleware/index")

const { hashPassword, decryptPassword } = require("../middleware/index");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/user/login", decryptPassword, logIn);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:username", deleteUser);
userRouter.get("/user", tokenCheck);

module.exports =  userRouter;
>>>>>>> 51887941de9588481141d41287d8cd46a4102124
