module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        len: [5]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  });
  console.log(User);

  User.associate = function(models) {
    User.belongsToMany(models.Project, { through: "users_projects" });
    User.belongsToMany(models.Bid, { through: "users_bids" });
    User.belongsToMany(models.Skill, { through: "users_skills" });
    User.belongsToMany(models.Job, { through: "users_jobs" });
  };
  return User;
};
