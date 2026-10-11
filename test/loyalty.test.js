import { test } from "node:test";
import assert from "node:assert/strict";
import { loyaltyDiscount } from "../src/loyalty.js";

test("two years gives 10% off", () => {
  assert.equal(loyaltyDiscount(100, 2), 90);
});
