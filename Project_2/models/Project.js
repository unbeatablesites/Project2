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
    Project.hasMany(models.Job, {
      as: "project",
      foreignKey: "ProjectId"
    });
  };
  Project.associate = function(models) {
    Project.belongsTo(models.User);
  };
  return Project;
};
