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

    // ----- GET ALL BOOKS
    app.get("/api/all", function(req, res) {
        Book.findAll({}).then(function(results){
            res.json(results);
        });
    });
    // -- What does the .then do? As Soon as it finds all the Books (by way of 
    // -- looking in models/book.js via sequelize.define("book") in the database),
    // -- then res.json (i.e, display in JSON) everything it finds (i.e, results).

    // ----- GET JUST ONE BOOK
    app.get("/api/:book", function(req, res) {
        if (req.params.book) {
            Book.findAll({
                where: {
                    title: req.params.book
                }
            }).then(function(results){
                res.json(results);
            });
        }
    });
    // -- On the API Route, we put a parameter, :book. 
    // -- IF that exists, THEN findAll ONLY WHERE TITLE: that book.
    // -- (Then display the results in JSON format :D )

    // ----- GET ONLY BOOKS BY A CERTAIN AUTHOR
    app.get("/api/author/:author_lastname", function(req, res) {
        console.log("trying app.get");
        if (req.params.author_lastname) {
            Book.findAll({
                where: {
                    author_lastname: req.params.author_lastname
                }
            }).then(function(results){
                res.json(results);
                console.log("this is the result");
            });
        }
    });






}