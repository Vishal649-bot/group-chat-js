const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "harish-chat-app",
  "root",
  "qwert@4321",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
