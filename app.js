const express = require("express");
const path = require("node:path");
const app = express();
const indexRoute = require("./routes/indexRouter");
const assetsPath = path.join(__dirname, "public");
const pgVersion = require("./db/pool");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(assetsPath));

app.use("/", indexRoute);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(3000);

pgVersion.getPgVersion();
