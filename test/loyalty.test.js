import { test } from "node:test";
import assert from "node:assert/strict";
import { loyaltyDiscount } from "../src/loyalty.js";

test("two years gives 10% off", () => {
  assert.equal(loyaltyDiscount(100, 2), 90);
});

test("the discount stops at 20%", () => {
  assert.equal(loyaltyDiscount(100, 30), 80);
});

test("new customers pay full price", () => {
  assert.equal(loyaltyDiscount(100, 0), 100);
});
