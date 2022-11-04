// const express = require("express");
// const app = express();
// const path = require("path");
// PORT = 3000;

// const staticpath = path.join(__dirname, "public");

// app.use("/jayant", express.static(staticpath));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, ".", "/public/index.html"));
// });
// app.listen(PORT, () => {
//   console.log(`server listening at ${PORT}`);
// });

/* --- Middleware functions example----*/

const express = require("express");
const app = express();

app.use(middlewareThree);
app.use(middlewareOne);

app.get("/", middlewareTwo, middlewareFour, (req, res) => {
  console.log("Inside Home Page");
  res.send("Home Page");
});

function middlewareOne(req, res, next) {
  console.log("Middleware One");
  next();
}

function middlewareTwo(req, res, next) {
  console.log("Middleware Two");
  next();
}

function middlewareThree(req, res, next) {
  console.log("Middleware Three");
  next();
}

function middlewareFour(req, res, next) {
  console.log("Middleware Four");
  next();
}

app.listen(3000, () => console.log("Server Started"));
