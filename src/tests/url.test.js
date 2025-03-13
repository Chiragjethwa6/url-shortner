const request = require("supertest");
const app = require("../app");
const Url = require("../models/url.model");
const { v4: uuidv4 } = require("uuid");
const { connectDB, disconnectDB } = require("../config/db");

jest.mock("uuid", () => ({
  v4: jest.fn(() => "abc1123"),
}));

beforeAll(async () => {
    connectDB();
    await Url.deleteMany({});
});

afterAll(async () => {
    disconnectDB();
});

describe("URL Shortener API", () => {
    it("should create a short URL (mocking UUID)", async () => {
        const mockShortUrl = "abc1123";
        uuidv4.mockReturnValue(mockShortUrl);

        const response = await request(app)
            .post("/api/shorten")
            .send({ longUrl: "https://app.coolcompany.com/users?first_name=John&first_name_op=eq&last_name=Snow&last_name_op=neq&age=30&age_op=gte&sort=age&sort_dir=asc" });
        
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty("shortUrl");
            expect(response.body.shortUrl).toContain("/abc1123");
    });

    it("should redirect to the original URL", async () => {
        const shortCode = "abc1123";
        const mockLongUrl = "https://app.coolcompany.com/users?first_name=John&first_name_op=eq&last_name=Snow&last_name_op=neq&age=30&age_op=gte&sort=age&sort_dir=asc";

        const response = await request(app).get(`/api/${shortCode}`).expect(302);
        expect(response.headers.location).toBe(mockLongUrl);
    });
});
