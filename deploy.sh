#!/bin/bash
echo "=== DEPLOYING CULLINAN30A v6.9 WITH AUTH PROTECTION ==="
cd /Users/hudsonmar/Documents/GitHub/cullinan30a

# Add all updated files
git add .

# Commit with current project message
git commit -m "🔐 feat: Complete auth-protected project deployment v6.9

✅ AUTHENTICATION SYSTEM:
- auth.html: Secure 5-password login with 24h session tokens
- index.html: Protected navigation with file status indicators  
- voice.html: Voice Content Speaker v6.8 with auth protection
- facepack.html: Face recognition dashboard with live API testing

🛡️ SECURITY FEATURES:
- Multi-password authentication
- 24-hour token-based session management
- Automatic session expiry and secure logout
- Protected page access control across all pages

🆕 ENHANCED FEATURES:
- FacePack.ID Dashboard with real-time API testing
- Enhanced voice content speaker with Apps Script integration
- Complete activity logging and export capabilities
- Mobile-responsive design with consistent UX

🎯 WORKING PAGES:
✅ auth.html - Secure login system
✅ index.html - Protected navigation hub
✅ voice.html - Voice content speaker v6.8
✅ facepack.html - Face recognition dashboard
✅ copilot_prompt.html - Mobile coding assistant

Version: v6.8 → v6.9 | Status: Production Ready with Full Auth Protection"

# Push to GitHub (triggers Vercel auto-deployment)
git push origin main

echo "=== DEPLOYMENT COMPLETE ==="
echo ""
echo "🌐 Live Site: https://v0-cullinan30a.vercel.app/"
echo "✅ All pages now protected with 24-hour session authentication!"
echo "🚪 Users can logout securely from any page"
echo "📱 Mobile-responsive auth system with