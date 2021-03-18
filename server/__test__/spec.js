const serverApp = require('../index');
const supertest = require('supertest');
const request = require('supertest')

// describe("testing get/ endpoint", () => {
//   it('hello api req', async () => {
//     request(serverApp)
//       .get("/test")
//       .expect(200)
//       .end(function (err, res) {
//         if (err) throw err;
//   })
//   });
// });

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe("Testing a simple api endpoint", () => {
  it("Test API Request", async () => {
    const result = await request(serverApp).get("/test");
    expect(result.text).toEqual("from router");
    expect(result.statusCode).toEqual(200);
  });
});

describe("Tastings / - a simple api endpoint", () => {
  it("Get tastings request from a specified userId", async () => {
    const result = await request(serverApp).get("/api/tastings/4");
    // expect(result.text).toEqual("from router");
    expect(result.statusCode).toEqual(200);
  });
  it("Get tastings request from a specified userId", async () => {
    const result = await request(serverApp).get("/api/tastings/4");
    // expect(result.text).toEqual("from router");
    expect(result.statusCode).toEqual(200);
  });
});


