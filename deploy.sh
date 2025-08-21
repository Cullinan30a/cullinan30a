#!/bin/bash


echo "=== DEPLOYING CULLINAN30A v6.9 | AUTH + ABC DRIVE + README ==="
cd /Users/hudsonmar/Documents/GitHub/cullinan30a

# Add all updated files
git add -A

# Commit with improved message formatting
git commit -m $'🔐 feat: Deploy v6.9 | Auth, ABC Drive, README\n\n\
✅ AUTH SYSTEM:\n- auth.html: Secure login (multi-password, 24h session)\n- index.html: Protected navigation, file status\n- voice.html: Speaker v6.8, auth protected\n- facepack.html: Dashboard, live API\n\
🛡️ SECURITY:\n- Multi-password, 24h token, auto expiry, logout\n- Protected access on all pages\n\
🆕 FEATURES:\n- FacePack.ID dashboard, real-time API\n- Voice speaker with Apps Script\n- Activity log/export, mobile UX\n- ABC Drive viewer: abc_debug.html, ABC_List.html, abc_list_enhanced.html\n- README.md: Updated for v6.9\n\
🎯 PAGES:\n✅ auth.html\n✅ index.html\n✅ voice.html\n✅ facepack.html\n✅ copilot_prompt.html\n✅ abc_debug.html\n✅ ABC_List.html\n✅ abc_list_enhanced.html\n✅ README.md\n\
Version: v6.8 → v6.9 | Production Ready'

# Push to GitHub (triggers Vercel auto-deployment)
git push origin main

echo "=== DEPLOYMENT COMPLETE ==="
echo ""
echo "🌐 Live Site: https://v0-cullinan30a.vercel.app/"
echo "✅ All pages now protected with 24-hour session authentication!"
echo "✅ ABC Drive viewer and README updated!"
echo "🚪 Users can logout securely from any page"
echo "📱 Mobile-responsive auth system deployed!"