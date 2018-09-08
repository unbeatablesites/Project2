module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Project.associate = function(models) {
    Project.belongsToMany(models.User, { through: "users_projects" });
    Project.belongsToMany(models.Job, { through: "projects_jobs" });
  };
  return Project;
};
