import { imgUpload } from "../imgUpload";

describe("apicaller tests", () => {
  it("should work", async function () {
    const filetest = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });

    const secureUrl = await imgUpload(filetest);

    expect(typeof secureUrl).toBe("string");
    expect(secureUrl).not.toBeEmpty();
  });

  it("should throw a error when pass wrong file", async function () {
    const file = new File([""], "testfail");

    const secureUrl = await imgUpload(file);

    expect(secureUrl).toBeNull();
  });
});
