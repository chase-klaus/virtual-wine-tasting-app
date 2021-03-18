const serverApp = require('../index');
const supertest = require('supertest');
const request = require('supertest');
const { it } = require('date-fns/locale');

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

describe("All Users / - simple api endpoint", () => {
    it("{Gets all users that have been created", async () => {
        const result = await request(serverApp).get("/api/allUsers");
        expect(result.statusCode).toEqual(200);
    });
});

describe("Single User / - simple api endpoint"), () => {
    it("{Gets a single user by email", async () => {
        const result = await request(serverApp).get("/api/userByMail/sample@sample.com");
        expect(result.statusCode).toEqual(400);
    })
}

describe("Register User / - simple api endpoint"), () => {
    it("{Registers a user", async () => {
        const result = await request(serverApp).get("/api/user");
        expect(result.statusCode).toEqual(200);
    })
}

describe("Login User / - simple api endpoint"), () => {
    it("{Logs in a user", async () => {
        const result = await request(serverApp).get("/api/login");
        expect(result.statusCode).toEqual(200);
    })
}
