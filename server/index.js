const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
const PORT = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const apirouter = require("./router/routes");

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api", apirouter);

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
