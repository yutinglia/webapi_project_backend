const request = require('supertest');
const app = require('../app');

describe('add dogs without token', () => {
    it('should return 401 error', async () => {
        const res = await request(app).post('/dogs')
        expect(res.statusCode).toEqual(401);
    })
})

