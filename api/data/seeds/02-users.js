const bcrypt = require("bcryptjs")

const users = [
  { username: "admin", password: bcrypt.hashSync("1234", 8) },
  { username: "bob", password: bcrypt.hashSync("bob", 8) },
]

exports.seed = function (knex) {
  return knex("users").insert(users)
}