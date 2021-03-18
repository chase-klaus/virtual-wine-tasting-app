const serverApp = require('../index');
const supertest = require('supertest');
const request = require('supertest')

describe("Testing a simple api endpoint", () => {
  it("Test API Request", async () => {
    const result = await request(serverApp).get("/test");
    expect(result.text).toEqual("from router");
    expect(result.statusCode).toEqual(200);
  });
});

describe("GET requests to api endpoints", () => {
  it("Get tastings request from a specified userId", async () => {
    const result = await request(serverApp).get("/api/tastings/4");
    // expect(result.text).toEqual("from router");
    expect(result.statusCode).toEqual(200);
  });

  it("Get user request from a specified userId", async () => {
    const result = await request(serverApp).get("/api/user/4");
    expect(result.body.id).toEqual(4);
    expect(result.statusCode).toEqual(200);
  });

  it("Get all users from a specified userId", async () => {
    const result = await request(serverApp).get("/api/allusers");
    // expect(result.text).toEqual("from router");
    expect(result.statusCode).toEqual(200);
  });
});

describe("POST requests to api endpoints", () => {
  it('saves new and finds user by email', async()=> {
    const res = await request(serverApp).post('/api/user').send({
      mail:"testemail@gmail.com", 
      password:"password"
    });
    const user = await request(serverApp).get('/api/findByMail/testemail@gmail.com')
    expect(user.statusCode).toEqual(200);
    expect(user.body.mail).toEqual("testemail@gmail.com");
  })
  it('returns 500 if user not found in database', async () => {
    const user = await request(serverApp).get('/api/findByMail/notInDatabase@gmail.com')
    expect(user.statusCode).toEqual(500);
  })
})


