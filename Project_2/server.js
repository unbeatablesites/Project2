const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./routes/handlers");
const db = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use("/", routes);
app.use(express.static('public'));


// Handlebars
app.engine("handlebars",exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

if (process.env.NODE_ENV === "test") {
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({syncOptions: { force: false }}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});