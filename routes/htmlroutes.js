// --------------------------------------------
// HTML Routes (Will It Work For Handlebars???)
// --------------------------------------------


module.exports = function(app) {
// --------------
// The Route To /
// --------------
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../views/main.handlebars"));
});

}