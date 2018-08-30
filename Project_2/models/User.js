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
  User.associate = function(models) {
    User.hasMany(models.Skill);
  };
  return User;
};
