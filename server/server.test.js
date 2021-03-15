const app = require('./index');
const supertest = require('supertest'); 
const request = supertest(app);


it('Testing to see if Jest works', async done => {
  const res = await request.get('/');
  expect(res.status).toBe(200)
  done()
})