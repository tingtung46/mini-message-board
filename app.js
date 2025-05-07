const express = require("express");
const path = require("node:path");
const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.use(express.urlencoded({ extended: true }));

app.post("/new", (req, res) => {
  const messageText = req.body.message;
  const messageUser = req.body.author;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

app.listen(3000);
