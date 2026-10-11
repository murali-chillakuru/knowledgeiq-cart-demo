import { test } from "node:test";
import assert from "node:assert/strict";
import { couponPercent } from "../src/coupon.js";

test("known codes ignore case and spaces", () => {
  assert.equal(couponPercent(" welcome10 "), 10);
});

test("unknown codes give no discount", () => {
  assert.equal(couponPercent("FREESTUFF"), 0);
});

test("a missing code gives no discount", () => {
  // the crash a reviewer found in the coupon pull request
  assert.equal(couponPercent(undefined), 0);
});
