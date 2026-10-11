# Rollback: free shipping banner

Owner: cart team. Expected time: about ten minutes.

1. Open a pull request that sets "freeShipping" to false in config/flags.json.
2. Merge it once the required tests pass.
3. Approve the github-pages deployment, with a reason.
4. Check the live site: no banner, and the commit stamp matches the merge.

No data changes, so nothing else needs undoing.
