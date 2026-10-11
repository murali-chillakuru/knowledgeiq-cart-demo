import http from "node:http";

http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const formula = url.searchParams.get("formula");
  res.end(String(eval(formula)));
}).listen(8080);
