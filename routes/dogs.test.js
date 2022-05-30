const request = require('supertest');
const app = require('../app');

describe('get dogs', () => {
    it('should return a object including status code, a list of dogs data and total dog count in database', async () => {
        const res = await request(app).get('/dogs')
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual(0);
        expect(res.body.dogs.length).toBeGreaterThan(0);
        expect(parseInt(res.body.total)).toBeGreaterThan(0);
    })
})

describe('get dogs by id', () => {
    it('should return a object including status code, a dog data', async () => {
        const res = await request(app).get('/dogs/5')
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual(0);
        expect(res.body.dog).toEqual({
            id: 5,
            type: "Hasky",
            name: "LUCKY",
            birthday: "2022-02-23T16:00:00.000Z",
            chip_id: "3453453",
            img: "dog-img-c42a4660-fa6c-48e9-bab4-6c0d559d463a.jpg",
            shelter_address: "Sha Tin DEF 456",
            shelter_id: 2,
            shelter_name: "Sha Tin Shelter",
        });
    })
})

