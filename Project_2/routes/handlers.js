const express = require("express");
const router = express.Router();

const db = require("../models")
const app = express();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/signin");
}

module.exports = (app, passport) => {
  app.get('/logout', (req, res) => {
    req.session.destroy(err => {
      res.redirect('/');
    })
  })

  app.get("/signin", (req, res) => {
    res.render("signin");
  })

  app.get("/signup", (req, res) => {
    res.render("signup");
  })

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/signup'
    })
  );

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    })
  );

  app.get("/", isLoggedIn, function(req,res){
    db.User.findOne({ 
      where: { id: req.user.id }, 
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
