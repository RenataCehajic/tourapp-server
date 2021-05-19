"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tours", [
      {
        title: "Tour der Wallen",
        description: "×××",
        cafes: "De Bananenbar, pingpongBallade ",
        district: "Centrum",
        time: "2021-05-17",
        rate: 22,
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tour de buffet",
        description:
          "Eating food as much as you can, never forget the bitterballen ofcourse.",
        cafes: "Het vreethuis, De FEBO ",
        district: "Centrum-ish",
        time: "2021-05-17",
        rate: 16,
        pdfDocument: Buffer.from("whatever"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("tours", null, {});
  },
};
