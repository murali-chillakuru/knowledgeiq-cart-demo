export function cartTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

export function checkoutSummary(items) {
  return `Items: ${items.length}. Total: ${cartTotal(items)}`;
}
