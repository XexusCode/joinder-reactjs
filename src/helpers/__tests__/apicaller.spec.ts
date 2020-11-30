import { apiCaller } from "../apiCaller";

describe("apiCaller __tests__", () => {
  it("should work", async function () {
    const result = await apiCaller("", {}, "POST", false);

    expect(result).toStrictEqual({ success: false });
  });
});
