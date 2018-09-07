const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./routes/handlers");


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

  app.listen(PORT, function() {
    console.log(' Listening on port 3000');
  });
