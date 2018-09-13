const express = require("express");
const path = require('path');
const session = require('express-session');
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./routes/handlers");
const passport = require('passport');
const models = require('./models/index.js');
const db = require("./models")
var syncOptions = { force: false };

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars",exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(session({ secret: 'project2', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport/passport')(passport, models.User);
require("./routes/handlers")(app, passport);
require('./routes/htmlRoutes')(app);
app.use(express.static('public'));
// Handlebars


if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

// db.sequelize vs models.sequelize in chris' example, also no module.exports = app
