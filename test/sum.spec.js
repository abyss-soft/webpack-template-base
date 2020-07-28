/* eslint-disable no-undef */
/* eslint-disable no-var */
import { sumMy } from "../src/js/common";

test("Sum(1)(2)", () => {
  const result = sumMy(1)(2);
  expect(result).toBe(3);
});
