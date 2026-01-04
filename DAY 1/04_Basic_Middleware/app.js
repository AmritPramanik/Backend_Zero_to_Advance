const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("view engine", "ejs");

// to use middleware :
// middleware is three type:
//   1. InBuild
//   2. Custom
//   3. Third Party

// It is a custom middleware
app.use((req, res, next) => {
  let a = 10;
  let b = 5;
  console.log(a + b);
  next(); // it is importent esle sever always wait for responce
});

// It is a Third Party middleware
app.use(morgan("dev"));

app.get(
  "/",
  // this middlware only work for "/" router
  (req, res, next) => {
    const a = 5;
    const b = 5;
    console.log(a + b);
    next();
  },
  (req, res) => {
    res.render("index");
  }
);
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
