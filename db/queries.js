const pool = require("./pool");

async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}

async function insertMsg(text, username, date) {
  await pool.query(
    "INSERT INTO users (text, username, date) VALUES ($1, $2, $3)",
    [text, username, date]
  );
}

async function findMsg(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows;
}

module.exports = {
  getAllUsers,
  insertMsg,
  findMsg,
};
