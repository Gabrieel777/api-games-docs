const Sequelize = require("sequelize");

const connection = new Sequelize("apigame", "root", "88105472", {

    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"

});

module.exports = connection;