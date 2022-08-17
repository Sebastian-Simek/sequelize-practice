'use strict';

const db = require("../models");

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

    await db.movies.bulkCreate([
      {
        title: 'Fellowship of the Ring',
        description: 'Hobbits',
        image: 'www.hobitimage.com',
        releaseYear: 2002,
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kindergarten Cop',
        description: 'Arnold is a Teacher',
        image: 'www.arnold.com',
        releaseYear: 1996,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Shrek',
        description: 'What are you doing in my swamp donkey',
        image: 'www.shrek.com',
        releaseYear: 2002,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Little Dieter Needs to Fly',
        description: 'Werner Herzog',
        image: 'www.wernerherzog.com',
        releaseYear: 1997, 
        genre_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Saw',
        description: 'People dying creatively',
        image: 'www.saw.com',
        releaseYear: 2006,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Scary Movie',
        description: 'Doofy and the vacuum cleaner',
        image: 'www.scarymovie.com',
        releaseYear: 2000,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
