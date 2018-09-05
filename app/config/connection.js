// ---------------------------------------------------------------------------------
// connection.js Initiates The Connection To MySQL: A Continuance In Capital Letters
// ---------------------------------------------------------------------------------

// -----------------------------------------------------
// Let Us Start With A Dependency (We Require Something)
// -----------------------------------------------------
var Sequelize = require("sequelize");

// ---------------------------------------------------
// Hello Jaden Smith: More Unnecessary Capital Letters
// ---------------------------------------------------

// ---------------------------------------
// Using Sequelize, Create MySQL Connexion
// ---------------------------------------
var sequelize = new Sequelize("","","", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// -------------------------------------
// Now We Must Export It For Outside Use
// -------------------------------------
module.exports = sequelize;