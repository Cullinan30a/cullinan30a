# Cullinan30a Web Tools Collection | 工具集合

## Latest Update (v6.2)

- Added ABC Drive viewer page that fetches and lists files from the "chatgpt" Google Drive folder via Apps Script
- Updated status bar to v6.2 with new timestamp
- Updated: 2025-08-10 20:30 (GMT+8)

Hudson's comprehensive web tools collection featuring AI-powere## 📋 Tool Details | 工具詳情

### Copilot Prompt Helper Workflow## 📋 Tool Details | 工具詳情

# Cullinan30a Web Tools Collection | 工具集合

Hudson's comprehensive web tools collection featuring AI-powered prompt generators, website cloning tools, and dynamic link management.

🌐 **Live Site**: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)

## 🚀 Featured Tools | 主要工具

### 1. 📱 Copilot Prompt Helper | Copilot 提示助手
**Optimized for mobile coding workflow**
- **Mobile Code Editing Templates**: 6 specialized prompt templates for quick mobile development
  - Change Text | 改文字
  - Change Colors/Styles | 改顏色/風格  
  - Add New Elements | 加新元素
  - Change Functionality | 改功能
  - Images/Icons | 圖片/圖示
  - Location Help | 定位幫助
- **Advanced Prompt Generator**: Generate comprehensive prompts for 12+ coding scenarios
- **Editable Output**: Fine-tune generated prompts with live editing
- **Interactive Selection**: Click-to-copy mobile templates with visual feedback
- **Bilingual Interface**: Full English and Traditional Chinese support

### 2. 🌐 Website Cloner | 網站複製工具
**Dual-mode website cloning with enhanced capabilities**
- **Server-Side Enhanced Mode**: Better performance with Node.js backend
- **Client-Side Fallback**: Works entirely in browser when server unavailable
- **Smart URL Processing**: Automatically converts relative to absolute URLs
- **Auto Filename Generation**: Intelligent naming based on website content
- **Multiple CORS Workarounds**: 6-method fallback system for maximum compatibility

### 3. 🔗 Dynamic Link Management | 動態連結管理
**Add and manage custom website links**
- **Auto-Title Fetching**: 6-method title extraction system
  - Web Scraping API
  - ScrapingBee API
  - HTMLQ API  
  - AllOrigins proxy
  - CorsProxy service
  - ThingProxy fallback
- **Smart Title Cleaning**: Removes site names and formatting for clean titles
- **LocalStorage Integration**: Persistent link storage across sessions
- **Bilingual Interface**: English and Traditional Chinese labels

### 4. 🤖 AI Prompt Generator | AI 提示生成器
**Traditional AI prompt generation for various use cases**
- Generate prompts for different AI applications
- Customizable templates and parameters

### 5. 📁 ABC Drive Viewer | ABC 雲端硬碟檢視器
**Google Drive integration for file management**
- **Google Apps Script Integration**: Connects to Google Drive via Apps Script web app
- **Folder-Specific Listing**: Lists files from the "chatgpt" Google Drive folder
- **File Operations**: View and download files directly from the interface
- **Real-time Statistics**: Shows file counts, folder counts, and total sizes
- **Responsive Design**: Mobile-friendly interface with bilingual support
- **Auto-refresh**: Manual refresh capability to get latest file listings
- 為各種 AI 應用生成提示

## 🛠️ Getting Started | 開始使用

### Quick Start | 快速開始
1. Visit the live site: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)
2. Choose from the available tools on the main index page
3. All tools work directly in your browser - no installation required!

### Local Development | 本地開發

#### Client-Side Only | 僅客戶端模式
For basic functionality, simply open `index.html` in your browser.
基本功能只需在瀏覽器中打開 `index.html`。

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
然後在瀏覽器中打開 **http://localhost:3000**

## ✨ Key Features | 核心功能

### 🎯 Mobile-First Design
- **Copilot Prompt Helper** specifically optimized for mobile coding workflows
- Touch-friendly interface with large, clickable prompt cards
- One-tap copying for quick mobile development

### 🔄 Dual-Mode Operation
- **Website Cloner** automatically tries enhanced server-side cloning
- Seamlessly falls back to client-side mode if server unavailable
- Best of both worlds: performance + reliability

### 🌍 Full Bilingual Support
- Complete English and Traditional Chinese interface
- All tools, labels, and documentation available in both languages
- Consistent bilingual experience across all features

### 💾 Smart Data Persistence
- **Link Management** uses localStorage for persistent custom links
- Auto-sync between add_link.html and main index
- No account required - data stays in your browser

### 🛡️ Advanced CORS Handling
- Multiple proxy services and fallback methods
- 6-layer title fetching system for maximum compatibility
- Works with most websites despite CORS restrictions

## 📋 Tool Details | 工具詳情

### Copilot Prompt Helper Workflow | Copilot 提示助手工作流程
1. **Quick Mobile Templates**: Click any of the 6 mobile-optimized prompt cards
2. **Auto-Population**: Selected prompt appears in the editable output box
3. **Fine-Tuning**: Edit the generated prompt to match your specific needs
4. **One-Click Copy**: Use the copy button or Ctrl+Enter to copy to clipboard
5. **Paste & Go**: Paste into GitHub Copilot for instant code assistance

### Website Cloner Process | 網站複製工具流程
1. **Enter URL**: Input the website URL you want to clone
2. **Auto-Detection**: Tool automatically chooses best cloning method
3. **Processing**: Server-side enhanced processing or client-side fallback
4. **Download**: Automatically downloads the cloned HTML file
5. **Smart Naming**: File named based on website title or domain

### Link Management System | 連結管理系統
1. **Add Links**: Use the "Add New Website Link" button
2. **Auto-Title**: System automatically fetches and cleans website titles
3. **Persistent Storage**: Links saved in browser localStorage
4. **Dynamic Display**: Main index updates automatically with new links
5. **Easy Access**: Click any saved link to open in new tab

## 🔧 Technical Stack | 技術棧

### Frontend | 前端
- **Pure HTML5/CSS3/JavaScript**: No frameworks, maximum compatibility
- **Responsive Design**: Works on desktop and mobile devices
- **LocalStorage API**: Client-side data persistence
- **Fetch API**: Modern HTTP requests with fallbacks

### Backend | 後端 (Optional)
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **Axios**: HTTP client for enhanced web scraping
- **Cheerio**: Server-side HTML parsing
- **CORS**: Cross-origin resource sharing middleware

### APIs & Services | API 和服務
- **Multiple CORS Proxies**: AllOrigins, CorsProxy, ThingProxy
- **Web Scraping APIs**: ScrapingBee, HTMLQ, custom web-scraping-api
- **Title Extraction**: 6-method fallback system
- **DOM Parser**: Client-side HTML processing

## ⚠️ Limitations | 使用限制

### Website Cloner | 網站複製工具
- Some websites block cloning due to strict CORS policies
- JavaScript-heavy SPAs may not clone perfectly (static HTML only)
- Large websites may take time to process
- Dynamic content loaded by JS after page load won't be captured

### Link Management | 連結管理
- Title fetching may fail for heavily protected websites
- Some sites require JavaScript to display titles
- CORS restrictions may limit title extraction capabilities
- Fallback creates generic titles based on domain names

### General | 一般限制
- All data stored locally in browser (no cloud sync)
- Tools work best with standard HTML websites
- Mobile interface optimized for touch but requires internet connection

## 🚀 Deployment | 部署

### Vercel (Current) | Vercel（當前）
The site is currently deployed on Vercel:
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
*A comprehensive suite of web development and productivity tools*

### Website Cloner Process | 網站複製工具流程
1. **Enter URL**: Input the website URL you want to clone
2. **Auto-Detection**: Tool automatically chooses best cloning method
3. **Processing**: Server-side enhanced processing or client-side fallback
4. **Download**: Automatically downloads the cloned HTML file
5. **Smart Naming**: File named based on website title or domain

### Link Management System | 連結管理系統
1. **Add Links**: Use the "Add New Website Link" button
2. **Auto-Title**: System automatically fetches and cleans website titles
3. **Persistent Storage**: Links saved in browser localStorage
4. **Dynamic Display**: Main index updates automatically with new links
5. **Easy Access**: Click any saved link to open in new tab

## 🔧 Technical Stack | 技術棧

### Frontend | 前端
- **Pure HTML5/CSS3/JavaScript**: No frameworks, maximum compatibility
- **Responsive Design**: Works on desktop and mobile devices
- **LocalStorage API**: Client-side data persistence
- **Fetch API**: Modern HTTP requests with fallbacks

### Backend | 後端 (Optional)
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **Axios**: HTTP client for enhanced web scraping
- **Cheerio**: Server-side HTML parsing
- **CORS**: Cross-origin resource sharing middleware

### APIs & Services | API 和服務
- **Multiple CORS Proxies**: AllOrigins, CorsProxy, ThingProxy
- **Web Scraping APIs**: ScrapingBee, HTMLQ, custom web-scraping-api
- **Title Extraction**: 6-method fallback system
- **DOM Parser**: Client-side HTML processing

## ⚠️ Limitations | 使用限制

### Website Cloner | 網站複製工具
- Some websites block cloning due to strict CORS policies
- JavaScript-heavy SPAs may not clone perfectly (static HTML only)
- Large websites may take time to process
- Dynamic content loaded by JS after page load won't be captured

### Link Management | 連結管理
- Title fetching may fail for heavily protected websites
- Some sites require JavaScript to display titles
- CORS restrictions may limit title extraction capabilities
- Fallback creates generic titles based on domain names

### General | 一般限制
- All data stored locally in browser (no cloud sync)
- Tools work best with standard HTML websites
- Mobile interface optimized for touch but requires internet connection

## 🚀 Deployment | 部署

### Vercel (Current) | Vercel（當前）
The site is currently deployed on Vercel:
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
*A comprehensive suite of web development and productivity tools*作流程
1. **Quick Mobile Templates**: Click any of the 6 mobile-optimized prompt cards
2. **Auto-Population**: Selected prompt appears in the editable output box
3. **Fine-Tuning**: Edit the generated prompt to match your specific needs
4. **One-Click Copy**: Use the copy button or Ctrl+Enter to copy to clipboard
5. **Paste & Go**: Paste into GitHub Copilot for instant code assistance

### Website Cloner Process | 網站複製工具流程
1. **Enter URL**: Input the website URL you want to clone
2. **Auto-Detection**: Tool automatically chooses best cloning method
3. **Processing**: Server-side enhanced processing or client-side fallback
4. **Download**: Automatically downloads the cloned HTML file
5. **Smart Naming**: File named based on website title or domain

### Link Management System | 連結管理系統
1. **Add Links**: Use the "Add New Website Link" button
2. **Auto-Title**: System automatically fetches and cleans website titles
3. **Persistent Storage**: Links saved in browser localStorage
4. **Dynamic Display**: Main index updates automatically with new links
5. **Easy Access**: Click any saved link to open in new tab

## 🔧 Technical Stack | 技術棧

### Frontend | 前端
- **Pure HTML5/CSS3/JavaScript**: No frameworks, maximum compatibility
- **Responsive Design**: Works on desktop and mobile devices
- **LocalStorage API**: Client-side data persistence
- **Fetch API**: Modern HTTP requests with fallbacks

### Backend | 後端 (Optional)
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **Axios**: HTTP client for enhanced web scraping
- **Cheerio**: Server-side HTML parsing
- **CORS**: Cross-origin resource sharing middleware

### APIs & Services | API 和服務
- **Multiple CORS Proxies**: AllOrigins, CorsProxy, ThingProxy
- **Web Scraping APIs**: ScrapingBee, HTMLQ, custom web-scraping-api
- **Title Extraction**: 6-method fallback system
- **DOM Parser**: Client-side HTML processing

## ⚠️ Limitations | 使用限制

### Website Cloner | 網站複製工具
- Some websites block cloning due to strict CORS policies
- JavaScript-heavy SPAs may not clone perfectly (static HTML only)
- Large websites may take time to process
- Dynamic content loaded by JS after page load won't be captured

### Link Management | 連結管理
- Title fetching may fail for heavily protected websites
- Some sites require JavaScript to display titles
- CORS restrictions may limit title extraction capabilities
- Fallback creates generic titles based on domain names

### General | 一般限制
- All data stored locally in browser (no cloud sync)
- Tools work best with standard HTML websites
- Mobile interface optimized for touch but requires internet connectionors, website cloning tools, and dynamic link management.

🌐 **Live Site**: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)

## 🚀 Featured Tools | 主要工具

### 1. 📱 Copilot Prompt Helper | Copilot 提示助手
**Optimized for mobile coding workflow**
- **Mobile Code Editing Templates**: 6 specialized prompt templates for quick mobile development
  - Change Text | 改文字
  - Change Colors/Styles | 改顏色/風格  
  - Add New Elements | 加新元素
  - Change Functionality | 改功能
  - Images/Icons | 圖片/圖示
  - Location Help | 定位幫助
- **Advanced Prompt Generator**: Generate comprehensive prompts for 12+ coding scenarios
- **Editable Output**: Fine-tune generated prompts with live editing
- **Interactive Selection**: Click-to-copy mobile templates with visual feedback
- **Bilingual Interface**: Full English and Traditional Chinese support

### 2. 🌐 Website Cloner | 網站複製工具
**Dual-mode website cloning with enhanced capabilities**
- **Server-Side Enhanced Mode**: Better performance with Node.js backend
- **Client-Side Fallback**: Works entirely in browser when server unavailable
- **Smart URL Processing**: Automatically converts relative to absolute URLs
- **Auto Filename Generation**: Intelligent naming based on website content
- **Multiple CORS Workarounds**: 6-method fallback system for maximum compatibility

### 3. 🔗 Dynamic Link Management | 動態連結管理
**Add and manage custom website links**
- **Auto-Title Fetching**: 6-method title extraction system
  - Web Scraping API
  - ScrapingBee API
  - HTMLQ API  
  - AllOrigins proxy
  - CorsProxy service
  - ThingProxy fallback
- **Smart Title Cleaning**: Removes site names and formatting for clean titles
- **LocalStorage Integration**: Persistent link storage across sessions
- **Bilingual Interface**: English and Traditional Chinese labels

### 4. 🤖 AI Prompt Generator | AI 提示生成器
**Traditional AI prompt generation for various use cases**
- Generate prompts for different AI applications
- Customizable templates and parameters
- 為各種 AI 應用生成提示

## 🛠️ Getting Started | 開始使用

### Quick Start | 快速開始
1. Visit the live site: [https://v0-cullinan30a.vercel.app/](https://v0-cullinan30a.vercel.app/)
2. Choose from the available tools on the main index page
3. All tools work directly in your browser - no installation required!

### Local Development | 本地開發

#### Client-Side Only | 僅客戶端模式
For basic functionality, simply open `index.html` in your browser.
基本功能只需在瀏覽器中打開 `index.html`。

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

Then open http://localhost:3000 in your browser
然後在瀏覽器中打開 http://localhost:3000

## ✨ Key Features | 核心功能

### 🎯 Mobile-First Design
- **Copilot Prompt Helper** specifically optimized for mobile coding workflows
- Touch-friendly interface with large, clickable prompt cards
- One-tap copying for quick mobile development

### 🔄 Dual-Mode Operation
- **Website Cloner** automatically tries enhanced server-side cloning
- Seamlessly falls back to client-side mode if server unavailable
- Best of both worlds: performance + reliability

### 🌍 Full Bilingual Support
- Complete English and Traditional Chinese interface
- All tools, labels, and documentation available in both languages
- Consistent bilingual experience across all features

### 💾 Smart Data Persistence
- **Link Management** uses localStorage for persistent custom links
- Auto-sync between add_link.html and main index
- No account required - data stays in your browser

### 🛡️ Advanced CORS Handling
- Multiple proxy services and fallback methods
- 6-layer title fetching system for maximum compatibility
- Works with most websites despite CORS restrictions

- Some websites may block cloning due to CORS policies
- JavaScript-heavy sites may not clone perfectly
- Large websites may take time to process

## Development | 開發

To run in development mode:
```bash
npm run dev
```

## License | 授權

MIT License Hi, I’m @Cullinan30a

Hudson's information display center

