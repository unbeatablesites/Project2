const express = require("express");
const router = express.Router();

const db = require("../models")
const app = express();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/signin");
}

module.exports = (app, passport) => {
app.get("/signin", (req, res) => {
  res.render("signin");
})
app.post(
  '/signin',
  passport.authenticate('signin', {
      successRedirect: '/dashboard',
      failureRedirect: '/signin'
  })
);
app.get("/dashboard", isLoggedIn, function(req,res){
  db.User.findOne({ 
    where: { id: req.params.id }, 
    include: [db.Project, db.Job, db.Bid]
  }).then(function(dbUser) {
    console.log(dbUser)
    res.render("index", {dbUser: dbUser});
  });
});

app.get('/allJobs', function(req, res){
  res.render('allJobs');
});
}

