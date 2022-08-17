const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movie routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
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
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it.only('#GET /api/v1/movies should return a list of movies', async () => {
    const resp = await request(app).get('/api/v1/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(3);
  });
});
