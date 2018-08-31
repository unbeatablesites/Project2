var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/dashboard/:id", function(req, res) {
    db.User.findOne({
      where: { UserId: req.params.id },
      include: [{ model: Project }],
      include: [{ models: Job }]
    }).then(function(dbDashboard) {
      res.json(dbDashboard);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
