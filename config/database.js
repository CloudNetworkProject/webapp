const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "127.0.0.1",
  username: "chandukongara",
  password: 12345678, 
  database: "chandukongara",
  createDatabase: true,
});

module.exports = sequelize;