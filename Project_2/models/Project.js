module.exports = function(sequelize, Datatypes) {
  var Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });
  Project.associate = function(models) {
    Project.hasMany(models.Skill);
  };
  Project.associate = function(models) {
    Project.hasMany(models.Job, {
      onDelete: "cascade"
    });
  };
  Project.associate = function(models) {
    Project.hasMany(models.User);
  };
  return Project;
};
