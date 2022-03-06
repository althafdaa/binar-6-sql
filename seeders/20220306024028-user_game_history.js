"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("user_game_histories", [
      {
        userId: "1",
        win: "10",
        lose: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        win: "2",
        lose: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_game_histories", null, {});
  },
};
