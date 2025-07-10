const db = require("../db/queries");
const { format } = require("date-fns");

const userListGet = async (req, res) => {
  const users = await db.getAllUsers();
  res.render("index", { title: "Mini Message Board", users: users });
};

const createMsgGet = (req, res) => {
  res.render("form");
};

const createMsgPost = async (req, res) => {
  const { message, author } = req.body;
  await db.insertMsg(message, author, format(new Date(), "Pp"));

  res.redirect("/");
};

const showMsg = async (req, res) => {
  const { id } = req.params;
  const message = await db.findMsg(id);

  res.render("details", { message: message[0] });
};

module.exports = {
  userListGet,
  createMsgGet,
  createMsgPost,
  showMsg,
};
