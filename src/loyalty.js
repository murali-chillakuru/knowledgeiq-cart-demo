import { applyDiscount } from "./discount.js";

// Loyal customers get 5% off for every full year they've been with us.
export function loyaltyDiscount(total, years) {
  return applyDiscount(total, years * 5);
}
