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
    Job.belongsTo(models.Project, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Job.associate = function(models) {
    Job.hasMany(models.Bid, {
      onDelete: "cascade"
    });
  };
  Job.associate = function(models) {
    Job.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Job.associate = function(models) {
    Job.belongsTo(models.Project, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Job.associate = function(models) {
    Job.belongsTo(models.Skill, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Job;
};
