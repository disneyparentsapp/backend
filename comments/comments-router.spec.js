const request = require('supertest');

const db = require('../data/dbConfig.js');

const server = require('../api/server.js');

describe('comments-router.js', () => {

    describe('GET /comments', () => {
        it('should return 200 OK', async () => {
            const res = await request(server).get('/comments');

            console.log(res.body);
            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/comments');

            expect(res.type).toBe('application/json');
        });

        it('should return an array', async () => {
            const res = await request(server).get('/comments');

            expect(Array.isArray(res.body)).toBe(true);
        });
    });
});