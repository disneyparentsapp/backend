const request = require('supertest');

const db = require('../data/dbConfig.js');

const server = require('../api/server.js');

describe('posts-router.js', () => {

        describe('GET /posts', () => {
            it('should return 200 OK', async () => {
               const res = await request(server).get("/posts");

               console.log(res.body);
               expect(res.status).toBe(200);
            });

            it('should return JSON', async () => {
                const res = await request(server).get('/posts');

                expect(res.type).toBe('application/json');
            });

            it('should return an array', async () => {
                const res = await request(server).get('/posts');

                expect(Array.isArray(res.body)).toBe(true);
            });
        });

        describe('POST /posts', () => {

            afterEach(async () => {
                await db('posts').truncate();
            });

            it('should return 201 OK', async () => {
                const res = await request(server)
                    .post('/posts')
                    .send({
                        name: 'test',
                        location: 'test',
                        kids: 1
                    });

                expect(res.status).toBe(201);
            });

            it('should add post to the db', async () => {
                let res = await request(server)
                    .post('/posts')
                    .send({
                        name: 'test',
                        location: 'test',
                        kids: 1
                    });

                res = await request(server).get('/posts');

                expect(res.body).toHaveLength(1)
            });

            it('should return JSON', async () => {
                const res = await request(server)
                    .post('/posts')
                    .send({
                        name: 'test',
                        location: 'test',
                        kids: 1
                    });

                expect(res.type).toBe('application/json');
            });
        });

        describe('DELETE /posts', () => {

        });
});