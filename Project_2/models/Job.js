module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Job.associate = function(models) {
    Job.belongsToMany(models.Skill, { through: "jobs_skills" });
  };
  Job.associate = function(models) {
    Job.belongsToMany(models.User, { through: "users_jobs" });
  };
  Job.associate = function(models) {
    Job.belongsToMany(models.Project, { through: "projects_jobs" });
  };
  Job.associate = function(models) {
    Job.belongsToMany(models.Bid, { through: "jobs_bids" });
  };
  return Job;
};
