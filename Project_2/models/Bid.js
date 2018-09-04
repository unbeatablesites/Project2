module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define("Bid", {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Bid.associate = function(models) {
    Bid.belongsToMany(models.Job, { through: "jobs_bids" });
  };
  Bid.associate = function(models) {
    Bid.belongsToMany(models.User, { through: "users_bids" });
  };
  return Bid;
};
