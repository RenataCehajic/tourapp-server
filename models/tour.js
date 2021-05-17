"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tour.belongsToMany(models.user, {
        through: "enrollments",
        foreignKey: "userId",
      });
    }
  }

  tour.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      cafes: DataTypes.TEXT,
      district: DataTypes.STRING,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "tour",
    }
  );
  return tour;
};
