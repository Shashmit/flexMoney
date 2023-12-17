const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const apiRouter = require("./hand/aceesor");
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();

app.get("/ping", (req, res) => {
  res.json("pong");
});

app.use("/api", apiRouter);

mongoose
  .connect(process.env.CONNECTION_TO_MONGOOSE)
  .then(() => {
    app.listen(port, () => {
      console.log("YOUR SERVER IS RUNNING " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
