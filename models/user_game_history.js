"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    static associate(models) {
      user_game_history.belongsTo(models.user_game, {
        foreignKey: "userId",
      });
    }
  }
  user_game_history.init(
    {
      userId: DataTypes.INTEGER,
      win: DataTypes.INTEGER,
      lose: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_game_history",
    }
  );
  return user_game_history;
};
