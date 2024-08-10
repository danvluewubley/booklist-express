const { AddToBookList, GetAllBooks } = require("../controllers/Books");
const CustomError = require("../utils/CustomError");

describe("Adding Book", () => {
  it("should throw an error due to missing field", async () => {
    const req = {
      body: {
        title: "test",
        author: "",
        genre: "e",
      },
    };
    const res = {};
    const next = jest.fn();

    await AddToBookList(req, res, next);

    expect(next).toHaveBeenCalledWith(
      new CustomError("All fields must be filled out", 422, "Fields")
    );
  });

  it("should throw no errors", async () => {
    const req = {
      body: {
        title: "test",
        author: "e",
        genre: "e",
      },
    };
    const res = {};
    const next = jest.fn();

    await expect(AddToBookList(req, res, next)).resolves.not.toThrow();
  });
})