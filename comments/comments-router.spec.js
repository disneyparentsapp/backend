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

    describe('POST /comments', () => {

        afterEach(async () => {
            await db('comments').truncate();
        });

        it('should return 201 OK', async () => {
             const res = await request(server)
                .post('/comments')
                .send({
                    post_id: 1,
                    name: 'test',
                    comment: 'test'
                });

            expect(res.status).toBe(201);
        });

        it('should add post to the db', async () => {
            let res = await request(server)
                .post('/comments')
                 .send({
                    post_id: 1,
                    name: 'test',
                    comment: 'test'
                });

            res = await request(server).get('/comments');

            expect(res.body).toHaveLength(1)
        });

        it('should return JSON', async () => {
            const res = await request(server)
                .post('/comments')
                .send({
                    post_id: 1,
                    name: 'test',
                    comment: 'test'
                });

            expect(res.type).toBe('application/json');
        });
    });
});