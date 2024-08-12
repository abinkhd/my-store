import { sum } from "./sum";

test.skip("testing sum function ", () => {
  expect(sum(5, 10)).toBe(15);
  expect(sum(3, 10)).toBe(13);
});
