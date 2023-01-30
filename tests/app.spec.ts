import request from "supertest";
import app from "../src/app";

describe(`App should return correct responses`, () => {
  test("GET on '/' should return 200", async () => {
    const res = await request(app).get("/");

    expect(res).toBeTruthy();
    expect(res.statusCode).toBe(200);
  });

  test("GET on '/hello' should return 'Hello world'", async () => {
    const res = await request(app).get("/hello");

    expect(res).toBeTruthy();
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("Hello world!");
  });
});
