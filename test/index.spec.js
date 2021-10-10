const request = require('supertest')
const app = require('../index')

describe('GET /users', () => {
    it('responds with "Hello World"', (done) => {
        request(app).get('/').expect('Hello World', done)
    })
})