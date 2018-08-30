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
  return Skill;
};
