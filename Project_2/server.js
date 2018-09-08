const express = require("express");
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

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(session({ secret: 'project2', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/handlers")(app);
app.use(express.static('public'));


require('./routes/handlers')(app, passport);
require('./config/passport/passport')(passport, models.user);
require('./routes/htmlRoutes')(app);
// Handlebars
app.engine("handlebars",exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
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

  