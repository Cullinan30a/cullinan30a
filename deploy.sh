#!/bin/bash


echo "=== DEPLOYING CULLINAN30A v6.9 | AUTH + ABC DRIVE + README ==="
cd /Users/hudsonmar/Documents/GitHub/cullinan30a


# Ensure local branch is up-to-date before commit/push
echo "=== Pulling latest changes from remote ==="
git pull --rebase origin main


# Detect modified files and commit only those
echo "=== Detecting new and modified files ==="
CHANGED=$(git status --porcelain | grep '^[AM?]' | awk '{print $2}')
# Always include deploy.sh itself
if [[ ! "$CHANGED" =~ "deploy.sh" ]]; then
  CHANGED="$CHANGED deploy.sh"
fi
if [ -z "$CHANGED" ]; then
  echo "No changes to commit."
else
  echo "Committing new/modified files: $CHANGED"
  git add $CHANGED
  git commit -m $'🔐 feat: Deploy v6.9 | Auto commit new/modified files\n\nAuto-commit: $CHANGED\n\n✅ AUTH SYSTEM, ABC Drive, README, Index Mapping, UI Demo, and more.'
fi

# Push to GitHub (triggers Vercel auto-deployment)
git push origin main

# Push to GitHub (triggers Vercel auto-deployment)
git push origin main

echo "=== DEPLOYMENT COMPLETE ==="
echo ""
echo "🌐 Live Site: https://v0-cullinan30a.vercel.app/"
echo "✅ All pages now protected with 24-hour session authentication!"
echo "✅ ABC Drive viewer and README updated!"
echo "🚪 Users can logout securely from any page"
echo "📱 Mobile-responsive auth system deployed!"