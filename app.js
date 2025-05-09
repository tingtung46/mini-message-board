const express = require("express");
const path = require("node:path");
const app = express();
const indexRoute = require("./routes/indexRoute");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoute);

app.listen(3000);
