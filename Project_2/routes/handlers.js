const express = require("express");
const router = express.Router();

const db = require("../models")


router.get("/:id",function(req,res){
  db.User.findOne({ 
    where: { id: req.params.id }, 
    include: [db.Project, db.Job, db.Bid]
  }).then(function(dbUser) {
    console.log(dbUser)
    res.render("index", {dbUser: dbUser});
  });
});

router.get('/allJobs', function(req, res){
  res.render('allJobs');
});


module.exports = router;