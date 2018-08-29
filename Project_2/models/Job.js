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
    Job.hasOne(models.User);
  };
  Job.associate = function(models) {
    Job.hasOne(models.Project);
  };
  Job.associate = function(models) {
    Job.hasMany(models.Skill);
  };
};
