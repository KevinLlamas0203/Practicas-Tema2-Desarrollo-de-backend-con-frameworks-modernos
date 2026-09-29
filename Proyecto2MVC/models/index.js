const sequelize = require("../config/database");
const User = require("./user.model");
const Book = require("./book.model");

module.exports = {
  sequelize,
  User,
  Book,
};