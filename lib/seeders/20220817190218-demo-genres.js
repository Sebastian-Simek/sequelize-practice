'use strict';

const db = require('../models');

module.exports = {
  async up (queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await db.genre.bulkCreate([
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
