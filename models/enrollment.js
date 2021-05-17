"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      enrollment.belongsToMany(models.user, {
        through: "enrollments",
        key: "userId",
      });
      enrollment.belongsToMany(models.tour, {
        through: "enrollments",
        key: "tourId",
      });
    }
  }
  enrollment.init(
    {
      userId: DataTypes.INTEGER,
      tourId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "enrollment",
    }
  );
  return enrollment;
};
