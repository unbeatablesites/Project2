module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define("Bid", {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Bid.associate = function(models) {
    Bid.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Bid.associate = function(models) {
      Bid.belongsTo(models.Job, {
        foreignKey: {
          allowNull: false
        }
      });
      Bid.associate = function(models) {
        Bid.hasMany(models.Skill);
      };
    };
  };
};
