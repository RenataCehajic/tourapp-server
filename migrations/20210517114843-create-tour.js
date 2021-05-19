"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      cafes: {
        type: Sequelize.TEXT,
      },
      district: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.DATE,
      },
      pdfDocument: {
        type: Sequelize.BLOB,
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tours");
  },
};
