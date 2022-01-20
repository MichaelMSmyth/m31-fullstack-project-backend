require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
<<<<<<< HEAD
const userRouter = require("./user/user.routes");
=======
const userRouter = require("./user/user.routes")
>>>>>>> 51887941de9588481141d41287d8cd46a4102124

app.use(express.json());
app.use(cors());
app.use(userRouter);

<<<<<<< HEAD
app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
=======
app.listen(port, () => {
    console.log(`listening on port${port}`)
})
>>>>>>> 51887941de9588481141d41287d8cd46a4102124
