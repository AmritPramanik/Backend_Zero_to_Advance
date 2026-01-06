const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./config/db");
const usermodel = require("./models/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/get-form-data", async (req, res) => {
  const { username, email, password } = req.body;
   await usermodel.create({
    username: username,
    email: email,
    password: password,
  });
  res.render("submit");
});

const port = 3000;
app.listen(port);
