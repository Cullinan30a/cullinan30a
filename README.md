# Cullinan30a Tools | 工具集合

Hudson's information display center & web tools collection

## Tools Available | 可用工具

### 1. AI Prompt Generator | AI 提示生成器
- Generate AI prompts for various use cases
- 為各種用例生成 AI 提示

### 2. Copilot Prompt Helper | Copilot 提示助手  
- Help create better prompts for GitHub Copilot
- 幫助為 GitHub Copilot 創建更好的提示

### 3. Website Cloner | 網站複製工具
- Clone websites and save them as HTML files
- 複製網站並將其保存為 HTML 檔案

## Website Cloner Usage | 網站複製工具使用方法

### Client-Side Only | 僅客戶端模式
Just open `index.html` in your browser and use the Website Cloner tool.
直接在瀏覽器中打開 `index.html` 並使用網站複製工具。

### Server-Side Enhanced | 伺服器端增強模式
For better performance and fewer CORS restrictions:
為了更好的性能和更少的 CORS 限制：

1. Install dependencies | 安裝依賴：
```bash
npm install
```

2. Start the server | 啟動伺服器：
```bash
npm start
```

3. Open http://localhost:3000 in your browser
   在瀏覽器中打開 http://localhost:3000

### Features | 功能特點

- **Dual Mode Operation | 雙模式操作**: Automatically tries server-side cloning first, falls back to client-side if needed
- **Smart URL Processing | 智能 URL 處理**: Converts relative URLs to absolute URLs
- **Auto Filename Generation | 自動檔名生成**: Generates meaningful filenames based on the source website
- **Bilingual Interface | 雙語介面**: English and Traditional Chinese support

### Limitations | 限制

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

