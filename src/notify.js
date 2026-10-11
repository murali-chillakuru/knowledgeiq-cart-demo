const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  throw new Error("Set GITHUB_TOKEN in the environment, never in the code");
}

export async function notifyTeam(message) {
  await fetch("https://api.github.com/repos/example/shop/issues/1/comments", {
    method: "POST",
    headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    body: JSON.stringify({ body: message }),
  });
}
