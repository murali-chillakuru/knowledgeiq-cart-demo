import { test } from "node:test";
import assert from "node:assert/strict";
import { applyDiscount } from "../src/discount.js";

const cases = [
  { total: 100, percent: 0, expected: 100 },
  { total: 100, percent: 10, expected: 90 },
  { total: 80, percent: 25, expected: 60 },
  { total: 100, percent: 100, expected: 0 },
];

for (const { total, percent, expected } of cases) {
  test(`${percent}% off ${total} is ${expected}`, () => {
    assert.equal(applyDiscount(total, percent), expected);
  });
}

for (const percent of [-1, 101]) {
  test(`rejects ${percent}%`, () => {
    assert.throws(() => applyDiscount(100, percent), RangeError);
  });
}
