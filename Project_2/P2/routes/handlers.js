const express = require("express");
const router = express.Router();

const orm = require('../config/orm');

router.get("/",function(req,res){
    orm.selectAll(function(error, Users) {
      if (error){
        return res.status(501).json({
          message: 'No access to DB'
        });
      }

      
      res.render("index");
    });
});



module.exports = router;