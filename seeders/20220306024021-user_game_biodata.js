"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("user_game_biodata", [
      {
        userId: "1",
        fullName: "Althaf Demiandra",
        hobby: "games",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        fullName: "Althaf Akbar",
        hobby: "Main",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_game_biodata", null, {});
  },
};
