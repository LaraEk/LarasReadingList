// ------------------------------------------------------------
// You Need To Require Dependencies: A Story In Capital Letters
// ------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");

// --------------------------------------------------------
// There Were No Capital Letters Above: now add express too
// --------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 4001;

// ---------------------------------------------------------------------------------------------
// Continued Capital Letters: telling express to use bodyParser in these boilerplate expressions
// ---------------------------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ---------- I am not certain that I need application/vnd.api+json, but let's see what it does

// ---------------------------------------------------------------
// This Makes Sure That app/public Is What We Draw All Things From
// And That All Things In app/public Can Be Drawn From -----------
// ---------------------------------------------------------------
app.use(express.static("app/public"));

// --------------------
// Requiring The Routes
// --------------------
require("./app/routes/apiroutes.js")(app);
require("./app/routes/htmlroutes.js")(app);

// -------------------------------------------
// App listening on PORT #[insert number here]
// -------------------------------------------
app.listen(PORT, function() {
    console.log("App listening on PORT #" + PORT);
});