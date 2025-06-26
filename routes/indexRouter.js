const { Router } = require("express");
const indexRoute = Router();
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
const pool = require("../db/pool");

const messages = [
  {
    id: uuid(),
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "Pp"),
  },
  {
    id: uuid(),
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "Pp"),
  },
];

indexRoute.get("/", (req, res) => {
  pool.getPgVersion();
  res.render("index", { title: "Mini Message Board", messages: messages });
});
indexRoute.get("/new", (req, res) => {
  res.render("form");
});

indexRoute.post("/new", (req, res) => {
  const { message, author } = req.body;

  messages.push({
    id: uuid(),
    text: message,
    user: author,
    added: format(new Date(), "Pp"),
  });

  res.redirect("/");
});

indexRoute.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages.find((item) => id === item.id);

  if (message) {
    res.render("details", { message: message });
  } else {
    res.status("404").render("404");
  }
});

module.exports = indexRoute;
