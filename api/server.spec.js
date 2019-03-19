const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it('should set the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
});