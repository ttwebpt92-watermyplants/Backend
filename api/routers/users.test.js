const server = require('../server');
const request = require('supertest');
const db = require('../data/db-config');
// const auth = require('../middleware/auth.js');

// jest.mock('../middleware/auth.js');

beforeEach(() => db.seed.run());
// beforeEach(() => auth.mockClear());


describe('users', () => {
    // it('get all users', async () => {
    //   auth.mockImplementationOnce((req, res, next) => {
    //     console.log("testing users endpoint");
    //     req.user = { id: 1 };
    //     next();
    //   });
    //   const res = await request(server)
    //   .get('/api/users');
    //   expect(res.status).toBe(200);
    //   expect(auth).toBeCalled();
    // });
    it('get users', async () => {
      const res = await request(server)
        .get('/api/users/');
        expect(res.status).toBe(200);
    });
})
