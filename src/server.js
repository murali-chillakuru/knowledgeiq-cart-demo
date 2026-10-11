import http from "node:http";
import { applyDiscount } from "./discount.js";

http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const total = Number(url.searchParams.get("total"));
  const percent = Number(url.searchParams.get("percent"));
  res.setHeader("Content-Type", "text/plain");
  try {
    res.end(String(applyDiscount(total, percent)));
  } catch {
    res.statusCode = 400;
    res.end("invalid input");
  }
}).listen(8080);
