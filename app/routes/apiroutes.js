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
        if (req.params.author_lastname) {
            Book.findAll({
                where: {
                    author_lastname: req.params.author_lastname
                }
            }).then(function(results){
                res.json(results);
            });
        }
    });

    // ----- GET ONLY BOOKS IN A CERTAIN GENRE
    app.get("/api/genre/:genre", function(req, res) {
        if (req.params.genre) {
            Book.findAll({
                where: {
                    genre: req.params.genre
                }
            }).then(function(results){
                res.json(results);
            });
        }
    });
    

    // ----- GET ONLY BOOKS BY MONTH READ
    app.get("/api/month/:month_read", function(req, res) {
        if (req.params.month) {
            Book.findAll({
                where: {
                    month_read: req.params.month
                }
            }).then(function(results){
                res.json(results);
            });
        }
    });


    // ----- GET ONLY BOOKS BY A CERTAIN RATING OR HIGHER
    app.get("/api/highrating/:highrated", function(req, res) {
        Book.findAll({
            where: {
                rating: {
                    $gte: 4
                }
            }
        }).then(function(results){
            res.json(results);
        });
    });

    // ----- GET ONLY BOOKS BY A CERTAIN RATING OR LOWER
    app.get("/api/lowrating/:lowrated", function(req, res) {
       Book.findAll({
           where: {
               rating: {
                   $lte: 2.9
               }
           }
       }).then(function(results){
           res.json(results);
       });
    });

    // ----- GET ONLY BOOKS BY WHETHER OR NOT I'VE REREAD THEM
    app.get("/api/:reread", function(req, res) {
        Book.findAll({
            where: {
                reread: {
                    $not: false
                }
            }
        }).then(function(results){
            res.json(results);
        });
    });
    

    
// -------------------------------------------------------------------------------------------------------
// Because I Have Not Yet Incorporated Feminist And Diversity Ratings Yet, These Are Later Features To Add
// -------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// Need to figure out whether I want feminist, ethnic diversity, and lgbt+ diversity in three categories, two, or one
// ------------------------------------------------------------------------------------------------------------------

// // ----- GET ONLY BOOKS BY A CERTAIN FEMINIST RATING OR HIGHER
    // app.get("/api/highfemrating/:highfemrated", function(req, res) {
    //     Book.findAll({
    //         where: {
    //             fem_rating: {
    //                 $gte: 4
    //             }
    //         }
    //     }).then(function(results){
    //         res.json(results);
    //     });
    // });

    // // ----- GET ONLY BOOKS BY A CERTAIN FEMINIST RATING OR LOWER
    // app.get("/api/lowfemrating/:lowfemrated", function(req, res) {
    //    Book.findAll({
    //        where: {
    //            fem_rating: {
    //                $lte: 2
    //            }
    //        }
    //    }).then(function(results){
    //        res.json(results);
    //    });
    // });

    // // ----- GET ONLY BOOKS BY A CERTAIN DIVERSITY RATING OR HIGHER
    // app.get("/api/highdivrating/:highdivrated", function(req, res) {
    //     Book.findAll({
    //         where: {
    //             div_rating: {
    //                 $gte: 4
    //             }
    //         }
    //     }).then(function(results){
    //         res.json(results);
    //     });
    // });

    // // ----- GET ONLY BOOKS BY A CERTAIN DIVERSITY RATING OR LOWER
    // app.get("/api/lowdivrating/:lowdivrated", function(req, res) {
    //    Book.findAll({
    //        where: {
    //            div_rating: {
    //                $lte: 2
    //            }
    //        }
    //    }).then(function(results){
    //        res.json(results);
    //    });
    // });

}