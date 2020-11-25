import { apiCaller } from "../apiCaller";

describe("apiCaller tests", () => {
  it("should work", async function () {
    const result = await apiCaller("", {}, "POST", false);

    expect(result).toStrictEqual({ success: false });
  });
});
