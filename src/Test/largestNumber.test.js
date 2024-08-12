import { largestNumber } from "./largestNumber";

describe("Check cases for largest", () => {
  it("Should return second parameter as largest", () => {
    expect(largestNumber(2, 3, 1)).toBe(3);
  });
  it("Should return first parameter as largest", () => {
    expect(largestNumber(10, -3, -1)).toBe(10);
  });
  it("Should return third parameter as largest", () => {
    expect(largestNumber(1, -3, 2)).toBe(2);
  });
});
