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
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TLwT45VskzML3LRhU-CLxQHaE8%26pid%3DApi&f=1",
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
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wxsWtwCZemicvSNM56pIbgHaEK%26pid%3DApi&f=1",
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
