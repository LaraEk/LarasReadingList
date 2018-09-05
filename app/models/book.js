// ---------------------------------------------------------------
// We Shall First Require The Requirements (this was a Dependency)
// ---------------------------------------------------------------
var Sequelize = require("sequelize");

// ----------------------------------------------------
// We Shall Next Require The Connection To The Database
// ----------------------------------------------------
var sequelize = require("../config/connection.js");

// ----------------------------------------------------------------------
// One Must Create A Book Model: One Book Will Have These Characteristics
// ----------------------------------------------------------------------
var Book = sequelize.define("book", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.INTEGER
        },
        reread: {
            type: Sequelize.BOOLEAN
        },
        notes: {
            type: Sequelize.STRING
        }
    },
{ timestamps: false}

});

// --------------------------------------
// Snyc It Up With The DB, Then Export It
// --------------------------------------
Book.sync();

module.exports = Book;

