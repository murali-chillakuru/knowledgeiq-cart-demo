import { mkdirSync, writeFileSync } from "node:fs";
import { cartTotal, checkoutSummary } from "../src/cart.js";
import { applyDiscount } from "../src/discount.js";
import { formatPrice } from "../src/format.js";

const items = [
  { name: "Notebook", price: 4.5, quantity: 2 },
  { name: "Pen", price: 1.25, quantity: 4 },
];
const total = cartTotal(items);
const rows = items.map((i) => `<li>${i.quantity} x ${i.name}, ${formatPrice(i.price)} each</li>`).join("");
const commit = (process.env.GITHUB_SHA ?? "local").slice(0, 7);

mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", `<!doctype html><meta charset="utf-8"><title>Cart demo</title>
<style>body{font:22px/1.5 system-ui,sans-serif;max-width:680px;margin:64px auto;color:#1b1b1b}</style>
<h1>Cart demo</h1><ul>${rows}</ul><p>${checkoutSummary(items)}</p>
<p>With the code WELCOME10: <b>${formatPrice(applyDiscount(total, 10))}</b></p>
<p><small>Built from commit ${commit}</small></p>`);
console.log(`Built dist/index.html from commit ${commit}`);
