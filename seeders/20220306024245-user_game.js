"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("user_games", [
      {
        userId: "1",
        username: "admin",
        password: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        username: "adminDua",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_games", null, {});
  },
};
