var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');


var axios = require('axios');
var cheerio = require('cheerio');


var app = express();
var PORT = process.env.PORT || 3000;

var db = require('./models');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news-chat";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


require("./routes/api.js")(app);
require("./routes/index.js");
require("./routes/view.js")(app);

app.listen(PORT, function() {
    console.log('App listening on port ' + PORT + '!');
});
