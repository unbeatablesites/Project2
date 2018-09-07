const express = require("express");
const router = express.Router();

const orm = require('../config/orm');


router.get("/",function(req,res){
    orm.selectAll(function(error, Jobs) {
      if (error){
        return res.status(501).json({
          message: 'No access to DB'
        });
      }

		console.log('Jobs:', Jobs);      
      res.render("index", { Jobs, style: 'main'});
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