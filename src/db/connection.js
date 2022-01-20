require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
<<<<<<< HEAD
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

connection();
=======
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Success")
    } catch (error) {
        console.log(error);
    }
};

connection();
>>>>>>> 51887941de9588481141d41287d8cd46a4102124
