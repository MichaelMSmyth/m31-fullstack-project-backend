const bcrypt = require("bcryptjs");
const User = require("../user/user.model");
const jwt = require("jsonwebtoken");

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.decryptPassword = async (req, res, next) => {
  try {
    req.user = await User.findOne({ email: req.body.email }); //changed to email as it's a unique value.
    if (await bcrypt.compare(req.body.password, req.user.password)) {
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodeToken = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(decodeToken._id);
    if (!req.user) {
      throw new Error("User not found");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
