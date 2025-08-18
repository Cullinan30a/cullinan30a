#!/bin/bash
echo "🔍 Checking VS Code Extensions..."
echo ""

extensions=(
    "GitHub.copilot"
    "GitHub.copilot-chat" 
    "ms-vscode.vscode-typescript-next"
    "bradlc.vscode-tailwindcss"
    "formulahendry.auto-rename-tag"
    "ms-vscode.live-server"
    "streetsidesoftware.code-spell-checker"
    "esbenp.prettier-vscode"
    "ms-vscode.vscode-json"
)

installed=$(code --list-extensions)

for ext in "${extensions[@]}"; do
    if echo "$installed" | grep -q "$ext"; then
        echo "✅ $ext - INSTALLED"
    else
        echo "❌ $ext - NOT INSTALLED"
        echo "   Install with: code --install-extension $ext"
    fi
done
