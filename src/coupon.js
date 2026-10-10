const CODES = { WELCOME10: 10, SPRING15: 15 };

export function couponPercent(code) {
  return CODES[code.trim().toUpperCase()] ?? 0;
}
