#!/usr/bin/env bash
# Run on the Mac mini (cron or launchd). Commits and pushes changes under
# src/data/ only. GitHub Actions then rebuilds the site.
#
# Agents should write src/data/projects.json (for example, update "stat"
# and "progress" on a project). Nothing on the internet connects to the
# Mac mini. It only pushes outbound.
set -euo pipefail

cd "$(dirname "$0")/.."

git pull --rebase --quiet

if git diff --quiet -- src/data/; then
  exit 0
fi

# Fail fast on invalid JSON so a bad agent write never breaks the site.
for f in src/data/*.json; do
  python3 -m json.tool "$f" > /dev/null
done

git add src/data/
git commit --quiet -m "data: update $(date -u +%Y-%m-%dT%H:%MZ)"
git push --quiet
