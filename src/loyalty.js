import { applyDiscount } from "./discount.js";

const PERCENT_PER_YEAR = 5;
const MAX_PERCENT = 20;

// Returning customers get 5% off per full year, capped at 20%.
export function loyaltyDiscount(total, years) {
  const percent = Math.min(Math.max(0, Math.floor(years)) * PERCENT_PER_YEAR, MAX_PERCENT);
  return applyDiscount(total, percent);
}
