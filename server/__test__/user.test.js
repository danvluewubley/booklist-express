const { SignUp, Login } = require("../controllers/authController");
const CustomError = require("../utils/CustomError");

describe("SignUp Function", () => {
  it("should throw an error if username already exists", async () => {
    const req = {
      body: {
        username: "test",
        password: "password123",
      },
    };
    const res = {};
    const next = jest.fn();

    await SignUp(req, res, next);

    expect(next).toHaveBeenCalledWith(
      new CustomError("Username already exists", 400, "username")
    );
  });

  it("should throw no error", async () => {
    const req = {
      body: {
        username: "test5",
        password: "password123",
      },
    };
    const res = {};
    const next = jest.fn();

    await expect(SignUp(req, res, next)).resolves.not.toThrow();
  });
});

describe("Login Function", () => {
  it("should throw an error if password is incorrect", async () => {
    const req = {
      body: {
        username: "test",
        password: "password123",
      },
    };
    const res = {};
    const next = jest.fn();

    await Login(req, res, next);

    expect(next).toHaveBeenCalledWith(
      new CustomError("Invalid Credentials", 404, "Credentials")
    );
  });

  it("should no errors", async () => {
    const req = {
      body: {
        username: "test",
        password: "test",
      },
    };
    const res = {};
    const next = jest.fn();

    await expect(Login(req, res, next)).resolves.not.toThrow();
  });
})