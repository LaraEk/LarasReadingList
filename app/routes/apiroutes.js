// --------------------------------------------------------
// API Routes: These Routes Display And Save Data To The DB
// --------------------------------------------------------

// ------------
// Require Book
// ------------
var Book = require("../models/book.js");

// --------------------------
// Here They Are: The Routes:
// --------------------------
module.exports = function(app) {

    app.get("/api/all", function(req, res) {
        Book.findAll({}).then(function(results){
            res.json(results);
        });
    });
    // -- What does the .then do? As Soon as it finds all the Books (by way of 
    // -- looking in models/book.js via sequelize.define("book") in the database),
    // -- then res.json (i.e, display in JSON) everything it finds (i.e, results).






}