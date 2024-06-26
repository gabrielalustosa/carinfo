import data from "../services/data";
describe("Data", () => {
  it("Should contain data", () => {
    expect(data).not.toBeNull;
  });
});
