const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const apiRouter = require("./router/Routes");

app.use(
  cors({
    origin: "*",
  })
);

const PORT = 3000;

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api", apiRouter);

mongoose
  .connect(process.env.CONNECTION_TO_MONGOOSE)
  .then(() => {
    app.listen(PORT, () => {
      console.log("YOUR SERVER IS RUNNING" + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
