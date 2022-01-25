require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./user/user.routes");
const cardRouter = require("./card/card.routes")

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(cardRouter);

app.listen(port, () => {
    console.log(`listening on port${port}`)
})
