const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.Decimal(10, 2),
      allowNull: false,
      validate: { min: 0 },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
        validate: { min: 0 },
        defaultValue: 0,
  },
}, {
    timestamps: true,
});

module.exports = Book;
