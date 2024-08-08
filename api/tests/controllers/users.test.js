const request = require("supertest");

const app = require("../../app");
const User = require("../../models/user");

require("../mongodb_helper");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST, when email and password are provided", () => {
    test("the response code is 201", async () => {
      const response = await request(app)
        .post("/users")
        .send({ email: "poppy@email.com", password: "1234",name:"poppy" });

      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app)
        .post("/users")
        .send({ email: "scarconstt@email.com", password: "1234", name:"scarconstt" });

      const users = await User.find();
      const newUser = users[users.length - 1];
      expect(newUser.email).toEqual("scarconstt@email.com");
    });
  });

  describe("POST, when password is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ email: "skye@email.com" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ email: "skye@email.com" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      const response = await request(app)
        .post("/users")
        .send({ password: "1234" });

      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ password: "1234" });

      const users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
});

describe("POST, when email already exists", () => {
  test("returns 400 status and does not create a new user", async () => {
    // First, create a user
    await request(app)
      .post("/users")
      .send({ email: "existing@email.com", password: "1234", name: "Existing" });

    // Attempt to create another user with the same email
    const response = await request(app)
      .post("/users")
      .send({ email: "existing@email.com", password: "5678", name: "Duplicate" });

    // Check the response
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toEqual("Email already in use");

    // Verify that no new user was created
    const users = await User.find();
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual("existing@email.com");
    expect(users[0].name).toEqual("Existing");
  });
});