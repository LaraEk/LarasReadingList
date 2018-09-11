// --------------------------------------------
// HTML Routes (Will It Work For Handlebars???)
// --------------------------------------------

// --------------------
// We Must Require Path
// --------------------
var path = require("path");

module.exports = function(app) {
// --------------
// The Route To /
// --------------
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../views/main.handlebars"));
    });

}