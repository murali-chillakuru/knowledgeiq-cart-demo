import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

test("adds price times quantity for every item", () => {
  // Arrange
  const items = [{ price: 2.5, quantity: 4 }, { price: 1, quantity: 3 }];
  // Act
  const total = cartTotal(items);
  // Assert
  assert.equal(total, 13);
});

test("an empty cart costs nothing", () => {
  assert.equal(cartTotal([]), 0);
});
