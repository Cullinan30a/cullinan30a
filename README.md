# Cullinan30a Web Tools Collection 20/8/2025| 工具集合

## Latest Update (v6.15) 17/10/2025

- **Index shortcut for GPS logger**: Added the Mobile GPS Logger page to the main index so field teams can launch the Apps Script capture UI directly
- **Deployment fix carryover**: Retains the hardened POST endpoint, validation, and logging updates introduced in v6.14 for stable Drive writes
- **Mobile-first continuity**: Keeps the capture preview tweaks to reassure users after every logged coordinate

🌐 **Live Site**: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)

## 🚀 Featured Tools | 主要工具

### 1. 🔐 Authentication System

- **auth.html**: Secure login (multi-password, 24h session, auto expiry, logout)
- **Protected navigation**: All pages require authentication
- **Mobile-responsive**: Auth system works on all devices

### 2. 🧑 FacePack.ID Dashboard

- **facepack.html**: Profile editor, live API testing, ChatGPT upload, activity log/export
- **Real-time API**: Add/search/export records to Google Sheet via Apps Script
- **ChatGPT integration**: One-click upload from ChatGPT to FaceSheet

### 3. 📁 ABC Drive Viewer

- **abc_debug.html / ABC_List.html / abc_list_enhanced.html**: List, view, and debug files in Google Drive folder (chatgpt)
- **Apps Script Integration**: Uses latest endpoint and passcode
- **Debug tools**: Test connection, refresh, JSONP/CORS support

### 4. 📱 Copilot Prompt Helper

- **copilot_prompt.html**: Mobile-optimized prompt cards for GitHub Copilot
- **Quick templates**: Change text, color, add elements, update functions, images, location help
- **Bilingual interface**: English/Traditional Chinese

### 5. 🌐 Website Cloner

- **Client/server dual-mode**: Node.js backend (Express, Axios, Cheerio, CORS), browser fallback
- **Smart URL and filename handling**
- **Multiple CORS workarounds**

### 6. 🔗 Dynamic Link Management

- **add_link.html**: Add/manage custom website links, auto-title fetching, localStorage persistence

### 7. 🤖 AI Prompt Generator

- **ai_prompt_generator.html**: Generate prompts for various AI applications, customizable templates

### 8. 📍 Mobile GPS Logger (Apps Script)

- **gps_logger_appscript.gs / gpsLogger.html**: Deployable Google Apps Script web app that requests mobile GPS access
- **Automatic Drive logging**: Stores timestamped coordinates inside `Lfile` within the chatgpt folder (with web + API capture modes)
- **Device metadata**: Captures accuracy + user agent for auditing and troubleshooting

## 🛠️ Getting Started | 開始使用

### Quick Start | 快速開始

1. Visit the live site: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)
2. Login via `auth.html` (password required)
3. Choose from the available tools on the main index page
4. All tools work directly in your browser - no installation required!

### Local Development | 本地開發

#### Client-Side Only | 僅客戶端模式

For basic functionality, simply open `index.html` in your browser.

#### Server-Side Enhanced | 伺服器端增強模式

For enhanced website cloning with better CORS handling:

```bash
# Install dependencies | 安裝依賴
npm install

# Start development server | 啟動開發伺服器
npm run dev

# Or start production server | 或啟動生產伺服器
npm start
```

Then open **http://localhost:3000** in your browser

## ✨ Key Features | 核心功能

- **Full authentication**: All pages protected, 24h session, logout
- **FacePack dashboard**: Real-time API, ChatGPT upload, activity log
- **ABC Drive viewer**: Latest Apps Script endpoint, debug tools
- **Mobile-first design**: Touch-friendly, responsive
- **Dual-mode website cloner**: Node.js backend + browser fallback
- **Bilingual support**: English/Traditional Chinese
- **Smart data persistence**: LocalStorage for custom links
- **Advanced CORS handling**: Multiple proxy services, fallback methods

## 🔧 Technical Stack | 技術棧

### Frontend | 前端

- **Pure HTML5/CSS3/JavaScript**
- **Tailwind CSS** (for dashboard)
- **Responsive design**
- **LocalStorage API**
- **Fetch API**

### Backend | 後端 (Optional)

- **Node.js**
- **Express.js**
- **Axios**
- **Cheerio**
- **CORS**

### APIs & Services | API 和服務

- **Google Apps Script** (Drive/Sheet integration)
- **Multiple CORS proxies**
- **Web scraping APIs**

## 🚀 Deployment | 部署

### Vercel (Current) | Vercel（當前）

- **Live URL**: https://v0-cullinan30a.vercel.app/
- **Auto-deployment**: Connected to GitHub for automatic updates
- **Static hosting**: Client-side tools work perfectly
- **Server functions**: Backend features available via Vercel Functions

### Other Deployment Options | 其他部署選項

- **GitHub Pages**: For static client-side only version
- **Netlify**: Alternative static hosting with serverless functions
- **Heroku**: For full Node.js server deployment
- **Local Server**: Use `npm start` for local development/testing

## 🤝 Contributing | 貢獻

Contributions are welcome! | 歡迎貢獻！

1. Fork the repository | Fork 這個儲存庫
2. Create a feature branch | 創建功能分支
3. Make your changes | 進行更改
4. Test thoroughly | 徹底測試
5. Submit a pull request | 提交拉取請求

## 📞 Contact | 聯繫方式

- **GitHub**: [@Cullinan30a](https://github.com/Cullinan30a)
- **Repository**: [cullinan30a](https://github.com/Cullinan30a/cullinan30a)
- **Live Site**: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)

## 📄 License | 授權

MIT License

**Hudson's Information Display Center & Web Tools Collection**
_A comprehensive suite of web development and productivity tools1_
