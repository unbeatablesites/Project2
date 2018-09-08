module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define("Skill", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "crafting"
    }
  });
  Skill.associate = function(models) {
    Skill.hasMany(models.Job);
    Skill.belongsToMany(models.User, { through: "users_skills" });
    Skill.belongsToMany(models.Job, { through: "jobs_skills" });
  };
  return Skill;
};
