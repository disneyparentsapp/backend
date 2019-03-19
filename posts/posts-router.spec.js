const request = require('supertest');

const db = require('../data/dbConfig.js');

const server = require('../api/server.js');

describe('posts-router.js', () => {

        describe('GET /posts', () => {
            it('should return 200 OK', async () => {
               const res = await request(server).get('/');
               expect(res.status).toBe(200);
            });

            it('should return JSON', async () => {
                const res = await request(server).get('/posts');

                expect(res.type).toBe('application/json');
            });
        });
});