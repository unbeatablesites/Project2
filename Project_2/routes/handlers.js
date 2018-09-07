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




router.post('/add',(req,res) => {

	const newJob = req.body.new_job;



    orm.insertOne(newJob, function(error, Job) {
      if (error){
        return res.status(401).json({
          message: 'No access to DB'
        });
      }

      return res.json({
      	title: newJob,
      	id: Job.insertId

      });
  });
		
});





module.exports = router;