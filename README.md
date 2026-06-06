<p align="center">
  <a href="#简体中文">简体中文</a> |
  <a href="#繁體中文">繁體中文</a> |
  <a href="#english">English</a> |
  <a href="#日本語">日本語</a> |
  <a href="#한국어">한국어</a> |
  <a href="#español">Español</a>
</p>

---

<h1 id="简体中文">🇨🇳 简体中文</h1>

<p align="center">
  <strong>MarkFlow Studio</strong> — 轻量级 Markdown 智能排版引擎<br/>
  <em>零依赖 · 纯前端 · 所见即所得</em>
</p>

<p align="center">
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/GitHub-MarkFlow_Studio-blue?logo=github" alt="GitHub"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/Zero_Dependencies-✓-success" alt="Zero Deps"/></a>
</p>

---

## 🎉 项目介绍

**MarkFlow Studio** 是一款专为中文用户打造的轻量级 Markdown 智能排版引擎。它采用 **纯 HTML/CSS/JavaScript** 构建，**零外部依赖**，无需安装 Node.js、Python 或任何构建工具 —— 双击 `index.html` 即可运行。

### 🎯 核心价值

- **开箱即用**：无需安装任何运行时环境，下载即用，适合所有技术水平的用户
- **所见即所得**：实时双栏预览，编辑即可看到最终排版效果
- **中文友好**：专门针对中文排版做了深度优化，自动处理中英文间距与首行缩进
- **极致轻量**：总代码量仅约 5000 行，加载速度极快，资源占用极低

### 🔥 解决的用户痛点

| 痛点 | MarkFlow Studio 的解决方案 |
|------|---------------------------|
| 现有编辑器依赖笨重的运行时环境 | **零依赖**，纯前端实现，双击即可运行 |
| 中文排版体验差，间距混乱 | **CJK 中文排版优化**，自动中英文间距与首行缩进 |
| 编辑器体积庞大，启动缓慢 | **仅约 5000 行代码**，秒级加载 |
| 需要联网才能使用在线编辑器 | **完全离线运行**，所有计算在浏览器本地完成 |
| Markdown 功能不完整 | **完整 GFM 解析** + 数学公式 + Mermaid 图表 + 代码高亮 |

### 💎 差异化亮点

- **零依赖** — 无需 Node.js / Python / 任何构建工具，双击 `index.html` 即可运行
- **纯前端** — 所有计算在浏览器本地完成，无需服务器，数据不上传
- **轻量级** — 总代码量仅约 5000 行，加载速度极快
- **中文优化** — 专门针对中文排版做了自动间距和缩进优化

### 🌟 灵感来源

灵感来源于日常写作中对轻量、高效 Markdown 编辑器的需求。市面上主流编辑器要么依赖 Electron 等重型框架（体积动辄数百 MB），要么需要联网使用，要么对中文排版支持不佳。MarkFlow Studio 旨在打造一个 **真正轻量、离线可用、中文友好** 的 Markdown 编辑体验。

---

## ✨ 核心特性

1. **🖥️ 实时双栏预览** — 左编辑右预览，所见即所得，编辑即时渲染
2. **📝 完整 Markdown/GFM 解析器** — 支持标题、**加粗**、*斜体*、~~删除线~~、代码块、表格、任务列表、引用等全部 GFM 语法
3. **🔢 数学公式支持** — 行内 `$...$` 和块级 `$$...$$` 语法，**KaTeX 兼容**，完美渲染数学表达式
4. **📊 Mermaid 图表** — 通过代码块直接嵌入 Mermaid 流程图、时序图、甘特图等
5. **🎨 代码语法高亮** — 自动识别关键字、字符串、注释、数字，多种配色方案
6. **🈶 CJK 中文排版优化** — **自动中英文间距**、**自动首行缩进**，告别手动调整
7. **🌙 三套主题** — 亮色模式 ☀️ / 暗色模式 🌑 / 护眼模式 🍃，一键切换
8. **📽️ 幻灯片模式** — 按 `---` 分割页面，全屏展示，**键盘导航**，适合演示汇报
9. **📋 六种内置文档模板** — 技术文档、会议纪要、周报、README、笔记、演示文稿，一键生成
10. **💾 文件操作** — 新建 / 打开 / 保存 / **导出 HTML 和 PDF**，完整文件管理
11. **🔄 自动保存** — 内容自动保存到 **localStorage**，意外关闭不丢失
12. **🔍 查找替换** — 支持查找与替换功能，快速定位和批量修改内容
13. **⌨️ 快捷键支持** — `Ctrl+B` 加粗、`Ctrl+I` 斜体、`Ctrl+K` 链接等丰富快捷键
14. **📱 响应式设计** — 完美适配桌面端与移动端，随时随地写作
15. **🛡️ XSS 安全防护** — 内置 XSS 过滤机制，安全可靠

---

## 🚀 快速开始

### 📋 环境要求

> **仅需一个现代浏览器！** 支持 Chrome 80+、Firefox 78+、Safari 14+、Edge 80+

无需安装 Node.js、Python、npm 或任何其他工具。

### 📥 安装步骤

**方式一：克隆仓库（推荐）**

```bash
git clone https://github.com/gitstq/MarkFlow-Studio.git
cd MarkFlow-Studio
```

**方式二：下载 ZIP**

前往 [GitHub Releases](https://github.com/gitstq/MarkFlow-Studio/releases) 下载最新版本的 ZIP 压缩包并解压。

### 🏃 本地启动

**方式一：直接打开（最简单）**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 **就这么简单！** 零依赖，双击 `index.html` 即可使用，无需任何构建或安装步骤。

**方式二：本地服务器（可选）**

```bash
# 使用 npx 启动本地服务器
npx serve . -p 3000

# 或使用 Python
python3 -m http.server 3000

# 然后在浏览器中打开
# http://localhost:3000
```

---

## 📖 详细使用指南

### 🖊️ 编辑器操作说明

编辑器采用经典的 **左右双栏布局**：

- **左侧**：Markdown 源码编辑区，支持语法高亮和行号显示
- **右侧**：实时渲染预览区，所见即所得
- 编辑区内容变化时，预览区 **实时同步更新**

### 🧰 工具栏功能说明

工具栏位于编辑器顶部，提供常用 Markdown 语法的快捷插入按钮：

| 按钮 | 功能 | 说明 |
|------|------|------|
| **B** | 加粗 | 插入 `**加粗文本**` |
| **I** | 斜体 | 插入 `*斜体文本*` |
| **~** | 删除线 | 插入 `~~删除线文本~~` |
| **H** | 标题 | 插入标题语法 |
| **链接** | 超链接 | 插入 `[文本](URL)` |
| **图片** | 图片 | 插入 `![描述](URL)` |
| **代码** | 代码块 | 插入行内或块级代码 |
| **表格** | 表格 | 插入 GFM 表格模板 |
| **列表** | 列表 | 插入有序或无序列表 |

### ⌨️ 快捷键列表

| 快捷键 | 功能 | 说明 |
|--------|------|------|
| `Ctrl + B` | **加粗** | 将选中文本加粗 |
| `Ctrl + I` | *斜体* | 将选中文本设为斜体 |
| `Ctrl + K` | 🔗 插入链接 | 插入超链接 |
| `Ctrl + S` | 💾 保存 | 手动保存文件 |
| `Ctrl + N` | 📄 新建 | 新建文档 |
| `Ctrl + O` | 📂 打开 | 打开本地文件 |
| `Ctrl + H` | 🔍 查找替换 | 打开查找替换面板 |
| `Ctrl + Shift + P` | 📽️ 幻灯片模式 | 进入/退出幻灯片演示 |
| `Tab` | ➡️ 缩进 | 增加缩进 |
| `Shift + Tab` | ⬅️ 反缩进 | 减少缩进 |

> ⚠️ macOS 用户请将 `Ctrl` 替换为 `Cmd`。

### 🎨 主题切换说明

MarkFlow Studio 内置 **三套精心设计的主题**：

- ☀️ **亮色模式**：清爽明亮的白色主题，适合日间使用
- 🌑 **暗色模式**：护眼深色主题，适合夜间使用
- 🍃 **护眼模式**：柔和的绿色调主题，长时间写作不疲劳

点击工具栏右侧的主题切换按钮即可一键切换。

### 📽️ 幻灯片模式使用说明

1. 在 Markdown 文档中使用 `---` 分隔不同的幻灯片页面
2. 点击工具栏的幻灯片按钮或按 `Ctrl + Shift + P` 进入全屏演示模式
3. 使用以下按键进行导航：

| 按键 | 功能 |
|------|------|
| `→` / `Space` | 下一页 |
| `←` | 上一页 |
| `Esc` | 退出幻灯片模式 |
| `F` | 全屏切换 |

### 📋 文档模板使用说明

MarkFlow Studio 内置 **六种常用文档模板**，一键生成标准格式文档：

| 模板 | 适用场景 |
|------|----------|
| 📚 **技术文档** | API 文档、技术方案、架构设计 |
| 📝 **会议纪要** | 会议记录、决议跟踪、行动项 |
| 📊 **周报** | 工作周报、项目进度汇报 |
| 📖 **README** | 项目说明文档、开源项目介绍 |
| 📒 **笔记** | 学习笔记、知识整理 |
| 📽️ **演示文稿** | 幻灯片演示、汇报材料 |

点击工具栏的模板按钮，选择所需模板即可快速创建文档。

### 📤 导出功能说明

支持将编辑内容导出为多种格式：

- **导出 HTML**：生成独立的 HTML 文件，包含完整样式，可直接分享
- **导出 PDF**：通过浏览器打印功能导出为 PDF 文档
- **导出 Markdown**：保存原始 `.md` 文件

### 🔍 查找替换功能说明

- 按 `Ctrl + H` 打开查找替换面板
- 支持精确查找和批量替换
- 高亮显示所有匹配结果
- 支持大小写敏感/不敏感切换

---

## 💡 设计思路与迭代规划

### 🏗️ 项目设计理念

MarkFlow Studio 遵循以下核心设计理念：

- **极简主义**：不追求功能堆砌，聚焦核心编辑体验
- **零门槛**：无需任何技术背景，下载即用
- **离线优先**：不依赖网络，数据完全本地化
- **渐进增强**：核心功能完善，高级特性按需扩展

### 🔧 技术选型原因

| 决策 | 原因 |
|------|------|
| **纯 HTML/CSS/JS** | 零构建依赖，双击即运行，降低使用门槛 |
| **不使用框架** | 避免框架带来的体积膨胀，保持极致轻量 |
| **不使用 Electron** | 避免数百 MB 的运行时，保持秒级启动 |
| **localStorage 持久化** | 无需后端服务，数据完全本地存储 |
| **自研解析器** | 避免外部依赖，完全可控，支持深度定制 |

### 🗺️ 后续功能迭代计划

- [ ] 📐 **更多导出格式**：支持导出 DOCX、EPUB 等格式
- [ ] 🔌 **插件系统**：支持自定义扩展和第三方插件
- [ ] 📊 **大纲导航**：基于标题层级的大纲树，快速跳转
- [ ] 🖼️ **图片拖拽上传**：支持拖拽图片直接插入
- [ ] 📱 **PWA 支持**：离线缓存，安装到桌面
- [ ] 🌐 **多语言界面**：支持英文、日文等多语言 UI
- [ ] 🔄 **版本历史**：本地版本管理，支持撤销/重做到任意历史版本
- [ ] 📝 **协同编辑**：基于 WebRTC 的实时多人协作

### 🤝 社区贡献方向

我们欢迎以下方向的贡献：

- 🐛 Bug 修复和问题报告
- 🌍 新语言翻译和本地化
- 🎨 新主题设计和配色方案
- 📋 新文档模板贡献
- 📖 文档完善和教程编写
- 🔌 插件开发

---

## 📦 打包与部署指南

### 🌐 作为静态文件部署

MarkFlow Studio 是纯静态项目，可以部署到 **任何 Web 服务器**：

```bash
# 将项目文件复制到 Web 服务器目录
cp -r MarkFlow-Studio/* /var/www/html/markflow/
```

### 📄 GitHub Pages 部署

1. Fork 本仓库到你的 GitHub 账号
2. 进入仓库 **Settings → Pages**
3. Source 选择 `main` 分支，目录选择 `/ (root)`
4. 点击 Save，等待部署完成
5. 访问 `https://<your-username>.github.io/MarkFlow-Studio/`

### ⚙️ Nginx 配置示例

```nginx
server {
    listen 80;
    server_name markflow.example.com;
    root /var/www/markflow;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

### ⚙️ Apache 配置示例

```apache
<VirtualHost *:80>
    ServerName markflow.example.com
    DocumentRoot /var/www/markflow
    DirectoryIndex index.html

    <Directory /var/www/markflow>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 🔗 嵌入到现有项目中

将 MarkFlow Studio 嵌入到你的 Web 项目中：

```html
<!-- 在页面中嵌入 iframe -->
<iframe
    src="/markflow/index.html"
    width="100%"
    height="800px"
    frameborder="0">
</iframe>

<!-- 或直接引入样式和脚本 -->
<link rel="stylesheet" href="/markflow/css/style.css">
<link rel="stylesheet" href="/markflow/css/themes.css">
<script src="/markflow/js/markdown-parser.js"></script>
<script src="/markflow/js/app.js"></script>
```

---

## 🤝 贡献指南

我们欢迎并感谢所有形式的贡献！请遵循以下流程：

### 📋 贡献流程

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

1. **Fork** 本仓库
2. **Clone** 到本地：`git clone https://github.com/<your-username>/MarkFlow-Studio.git`
3. 创建 **Branch**：`git checkout -b feature/your-feature-name`
4. **Commit** 你的更改：`git commit -m "feat: 添加新功能描述"`
5. **Push** 到远程：`git push origin feature/your-feature-name`
6. 提交 **Pull Request**，描述你的更改内容

### 📝 代码规范

- 使用 **2 空格缩进**，不使用 Tab
- 变量和函数使用 **camelCase** 命名
- 常量使用 **UPPER_CASE** 命名
- CSS 类名使用 **kebab-case** 命名
- 保持代码简洁，添加必要的中文注释

### 📮 提交信息规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

类型说明：
feat:     新功能
fix:      Bug 修复
docs:     文档更新
style:    代码格式调整
refactor: 代码重构
perf:     性能优化
test:     测试相关
chore:    构建/工具变更
```

---

## 📄 开源协议

本项目基于 **[MIT License](https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE)** 开源。

> MIT License
>
> Copyright (c) 2024 MarkFlow Studio Contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq/MarkFlow-Studio">MarkFlow Studio Contributors</a>
</p>

---
---

<h1 id="繁體中文">🇹🇼 繁體中文</h1>

<p align="center">
  <strong>MarkFlow Studio</strong> — 輕量級 Markdown 智慧排版引擎<br/>
  <em>零依賴 · 純前端 · 所見即所得</em>
</p>

<p align="center">
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/GitHub-MarkFlow_Studio-blue?logo=github" alt="GitHub"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/Zero_Dependencies-✓-success" alt="Zero Deps"/></a>
</p>

---

## 🎉 專案介紹

**MarkFlow Studio** 是一款專為中文使用者打造的輕量級 Markdown 智慧排版引擎。它採用 **純 HTML/CSS/JavaScript** 建構，**零外部依賴**，無需安裝 Node.js、Python 或任何建置工具 —— 雙擊 `index.html` 即可執行。

### 🎯 核心價值

- **開箱即用**：無需安裝任何執行期環境，下載即用，適合所有技術水準的使用者
- **所見即所得**：即時雙欄預覽，編輯即可看到最終排版效果
- **中文友善**：專門針對中文排版做了深度最佳化，自動處理中英文間距與首行縮排
- **極致輕量**：總程式碼量僅約 5000 行，載入速度極快，資源佔用極低

### 🔥 解決的使用者痛點

| 痛點 | MarkFlow Studio 的解決方案 |
|------|---------------------------|
| 現有編輯器依賴笨重的執行期環境 | **零依賴**，純前端實作，雙擊即可執行 |
| 中文排版體驗差，間距混亂 | **CJK 中文排版最佳化**，自動中英文間距與首行縮排 |
| 編輯器體積龐大，啟動緩慢 | **僅約 5000 行程式碼**，秒級載入 |
| 需要連線才能使用線上編輯器 | **完全離線執行**，所有運算在瀏覽器本地端完成 |
| Markdown 功能不完整 | **完整 GFM 解析** + 數學公式 + Mermaid 圖表 + 程式碼高亮 |

### 💎 差異化亮點

- **零依賴** — 無需 Node.js / Python / 任何建置工具，雙擊 `index.html` 即可執行
- **純前端** — 所有運算在瀏覽器本地端完成，無需伺服器，資料不上傳
- **輕量級** — 總程式碼量僅約 5000 行，載入速度極快
- **中文最佳化** — 專門針對中文排版做了自動間距和縮排最佳化

### 🌟 靈感來源

靈感來源於日常寫作中對輕量、高效 Markdown 編輯器的需求。市面上主流編輯器要麼依賴 Electron 等重型框架（體積動輒數百 MB），要麼需要連線使用，要麼對中文排版支援不佳。MarkFlow Studio 旨在打造一個 **真正輕量、離線可用、中文友善** 的 Markdown 編輯體驗。

---

## ✨ 核心特性

1. **🖥️ 即時雙欄預覽** — 左編輯右預覽，所見即所得，編輯即時渲染
2. **📝 完整 Markdown/GFM 解析器** — 支援標題、**粗體**、*斜體*、~~刪除線~~、程式碼區塊、表格、任務清單、引用等全部 GFM 語法
3. **🔢 數學公式支援** — 行內 `$...$` 和區塊級 `$$...$$` 語法，**KaTeX 相容**，完美渲染數學運算式
4. **📊 Mermaid 圖表** — 透過程式碼區塊直接嵌入 Mermaid 流程圖、時序圖、甘特圖等
5. **🎨 程式碼語法高亮** — 自動識別關鍵字、字串、註解、數字，多種配色方案
6. **🈶 CJK 中文排版最佳化** — **自動中英文間距**、**自動首行縮排**，告別手動調整
7. **🌙 三套主題** — 亮色模式 ☀️ / 暗色模式 🌑 / 護眼模式 🍃，一鍵切換
8. **📽️ 簡報模式** — 按 `---` 分割頁面，全螢幕展示，**鍵盤導覽**，適合演示簡報
9. **📋 六種內建文件範本** — 技術文件、會議紀要、週報、README、筆記、簡報，一鍵生成
10. **💾 檔案操作** — 新建 / 開啟 / 儲存 / **匯出 HTML 和 PDF**，完整檔案管理
11. **🔄 自動儲存** — 內容自動儲存到 **localStorage**，意外關閉不遺失
12. **🔍 尋找取代** — 支援尋找與取代功能，快速定位和批次修改內容
13. **⌨️ 快捷鍵支援** — `Ctrl+B` 粗體、`Ctrl+I` 斜體、`Ctrl+K` 連結等豐富快捷鍵
14. **📱 響應式設計** — 完美適配桌面端與行動端，隨時隨地寫作
15. **🛡️ XSS 安全防護** — 內建 XSS 過濾機制，安全可靠

---

## 🚀 快速開始

### 📋 環境需求

> **僅需一個現代瀏覽器！** 支援 Chrome 80+、Firefox 78+、Safari 14+、Edge 80+

無需安裝 Node.js、Python、npm 或任何其他工具。

### 📥 安裝步驟

**方式一：複製儲存庫（推薦）**

```bash
git clone https://github.com/gitstq/MarkFlow-Studio.git
cd MarkFlow-Studio
```

**方式二：下載 ZIP**

前往 [GitHub Releases](https://github.com/gitstq/MarkFlow-Studio/releases) 下載最新版本的 ZIP 壓縮檔並解壓縮。

### 🏃 本地端啟動

**方式一：直接開啟（最簡單）**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 **就這麼簡單！** 零依賴，雙擊 `index.html` 即可使用，無需任何建置或安裝步驟。

**方式二：本地端伺服器（可選）**

```bash
# 使用 npx 啟動本地端伺服器
npx serve . -p 3000

# 或使用 Python
python3 -m http.server 3000

# 然後在瀏覽器中開啟
# http://localhost:3000
```

---

## 📖 詳細使用指南

### 🖊️ 編輯器操作說明

編輯器採用經典的 **左右雙欄版面配置**：

- **左側**：Markdown 原始碼編輯區，支援語法高亮和行號顯示
- **右側**：即時渲染預覽區，所見即所得
- 編輯區內容變更時，預覽區 **即時同步更新**

### 🧰 工具列功能說明

工具列位於編輯器頂部，提供常用 Markdown 語法的快捷插入按鈕：

| 按鈕 | 功能 | 說明 |
|------|------|------|
| **B** | 粗體 | 插入 `**粗體文字**` |
| **I** | 斜體 | 插入 `*斜體文字*` |
| **~** | 刪除線 | 插入 `~~刪除線文字~~` |
| **H** | 標題 | 插入標題語法 |
| **連結** | 超連結 | 插入 `[文字](URL)` |
| **圖片** | 圖片 | 插入 `![描述](URL)` |
| **程式碼** | 程式碼區塊 | 插入行內或區塊級程式碼 |
| **表格** | 表格 | 插入 GFM 表格範本 |
| **清單** | 清單 | 插入有序或無序清單 |

### ⌨️ 快捷鍵列表

| 快捷鍵 | 功能 | 說明 |
|--------|------|------|
| `Ctrl + B` | **粗體** | 將選取文字設為粗體 |
| `Ctrl + I` | *斜體* | 將選取文字設為斜體 |
| `Ctrl + K` | 🔗 插入連結 | 插入超連結 |
| `Ctrl + S` | 💾 儲存 | 手動儲存檔案 |
| `Ctrl + N` | 📄 新建 | 新建文件 |
| `Ctrl + O` | 📂 開啟 | 開啟本地端檔案 |
| `Ctrl + H` | 🔍 尋找取代 | 開啟尋找取代面板 |
| `Ctrl + Shift + P` | 📽️ 簡報模式 | 進入/退出簡報演示 |
| `Tab` | ➡️ 縮排 | 增加縮排 |
| `Shift + Tab` | ⬅️ 反縮排 | 減少縮排 |

> ⚠️ macOS 使用者請將 `Ctrl` 替換為 `Cmd`。

### 🎨 主題切換說明

MarkFlow Studio 內建 **三套精心設計的主題**：

- ☀️ **亮色模式**：清爽明亮的白色主題，適合日間使用
- 🌑 **暗色模式**：護眼深色主題，適合夜間使用
- 🍃 **護眼模式**：柔和的綠色調主題，長時間寫作不疲勞

點擊工具列右側的主題切換按鈕即可一鍵切換。

### 📽️ 簡報模式使用說明

1. 在 Markdown 文件中使用 `---` 分隔不同的簡報頁面
2. 點擊工具列的簡報按鈕或按 `Ctrl + Shift + P` 進入全螢幕演示模式
3. 使用以下按鍵進行導覽：

| 按鍵 | 功能 |
|------|------|
| `→` / `Space` | 下一頁 |
| `←` | 上一頁 |
| `Esc` | 退出簡報模式 |
| `F` | 全螢幕切換 |

### 📋 文件範本使用說明

MarkFlow Studio 內建 **六種常用文件範本**，一鍵生成標準格式文件：

| 範本 | 適用場景 |
|------|----------|
| 📚 **技術文件** | API 文件、技術方案、架構設計 |
| 📝 **會議紀要** | 會議記錄、決議追蹤、行動項 |
| 📊 **週報** | 工作週報、專案進度彙報 |
| 📖 **README** | 專案說明文件、開源專案介紹 |
| 📒 **筆記** | 學習筆記、知識整理 |
| 📽️ **簡報** | 簡報演示、彙報材料 |

點擊工具列的範本按鈕，選擇所需範本即可快速建立文件。

### 📤 匯出功能說明

支援將編輯內容匯出為多種格式：

- **匯出 HTML**：生成獨立的 HTML 檔案，包含完整樣式，可直接分享
- **匯出 PDF**：透過瀏覽器列印功能匯出為 PDF 文件
- **匯出 Markdown**：儲存原始 `.md` 檔案

### 🔍 尋找取代功能說明

- 按 `Ctrl + H` 開啟尋找取代面板
- 支援精確尋找和批次取代
- 高亮顯示所有符合結果
- 支援大小寫敏感/不敏感切換

---

## 💡 設計思路與迭代規劃

### 🏗️ 專案設計理念

MarkFlow Studio 遵循以下核心設計理念：

- **極簡主義**：不追求功能堆砌，聚焦核心編輯體驗
- **零門檻**：無需任何技術背景，下載即用
- **離線優先**：不依賴網路，資料完全本地化
- **漸進增強**：核心功能完善，進階特性按需擴充

### 🔧 技術選型原因

| 決策 | 原因 |
|------|------|
| **純 HTML/CSS/JS** | 零建置依賴，雙擊即執行，降低使用門檻 |
| **不使用框架** | 避免框架帶來的體積膨脹，保持極致輕量 |
| **不使用 Electron** | 避免數百 MB 的執行期，保持秒級啟動 |
| **localStorage 持久化** | 無需後端服務，資料完全本地端儲存 |
| **自研解析器** | 避免外部依賴，完全可控，支援深度客製化 |

### 🗺️ 後續功能迭代計畫

- [ ] 📐 **更多匯出格式**：支援匯出 DOCX、EPUB 等格式
- [ ] 🔌 **外掛系統**：支援自訂擴充和第三方外掛
- [ ] 📊 **大綱導覽**：基於標題層級的大綱樹，快速跳轉
- [ ] 🖼️ **圖片拖放上傳**：支援拖放圖片直接插入
- [ ] 📱 **PWA 支援**：離線快取，安裝到桌面
- [ ] 🌐 **多語言介面**：支援英文、日文等多語言 UI
- [ ] 🔄 **版本歷史**：本地端版本管理，支援撤銷/重做到任意歷史版本
- [ ] 📝 **協同編輯**：基於 WebRTC 的即時多人協作

### 🤝 社群貢獻方向

我們歡迎以下方向的貢獻：

- 🐛 Bug 修復和問題回報
- 🌍 新語言翻譯和在地化
- 🎨 新主題設計和配色方案
- 📋 新文件範本貢獻
- 📖 文件完善和教學撰寫
- 🔌 外掛開發

---

## 📦 打包與部署指南

### 🌐 作為靜態檔案部署

MarkFlow Studio 是純靜態專案，可以部署到 **任何 Web 伺服器**：

```bash
# 將專案檔案複製到 Web 伺服器目錄
cp -r MarkFlow-Studio/* /var/www/html/markflow/
```

### 📄 GitHub Pages 部署

1. Fork 本儲存庫到你的 GitHub 帳號
2. 進入儲存庫 **Settings → Pages**
3. Source 選擇 `main` 分支，目錄選擇 `/ (root)`
4. 點擊 Save，等待部署完成
5. 存取 `https://<your-username>.github.io/MarkFlow-Studio/`

### ⚙️ Nginx 設定範例

```nginx
server {
    listen 80;
    server_name markflow.example.com;
    root /var/www/markflow;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 啟用 gzip 壓縮
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

### ⚙️ Apache 設定範例

```apache
<VirtualHost *:80>
    ServerName markflow.example.com
    DocumentRoot /var/www/markflow
    DirectoryIndex index.html

    <Directory /var/www/markflow>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 🔗 嵌入到現有專案中

將 MarkFlow Studio 嵌入到你的 Web 專案中：

```html
<!-- 在頁面中嵌入 iframe -->
<iframe
    src="/markflow/index.html"
    width="100%"
    height="800px"
    frameborder="0">
</iframe>

<!-- 或直接引入樣式和腳本 -->
<link rel="stylesheet" href="/markflow/css/style.css">
<link rel="stylesheet" href="/markflow/css/themes.css">
<script src="/markflow/js/markdown-parser.js"></script>
<script src="/markflow/js/app.js"></script>
```

---

## 🤝 貢獻指南

我們歡迎並感謝所有形式的貢獻！請遵循以下流程：

### 📋 貢獻流程

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

1. **Fork** 本儲存庫
2. **Clone** 到本地端：`git clone https://github.com/<your-username>/MarkFlow-Studio.git`
3. 建立 **Branch**：`git checkout -b feature/your-feature-name`
4. **Commit** 你的變更：`git commit -m "feat: 新增新功能描述"`
5. **Push** 到遠端：`git push origin feature/your-feature-name`
6. 提交 **Pull Request**，描述你的變更內容

### 📝 程式碼規範

- 使用 **2 空格縮排**，不使用 Tab
- 變數和函式使用 **camelCase** 命名
- 常數使用 **UPPER_CASE** 命名
- CSS 類別名稱使用 **kebab-case** 命名
- 保持程式碼簡潔，新增必要的中文註解

### 📮 提交資訊規範

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 規範：

```
<type>(<scope>): <subject>

類型說明：
feat:     新功能
fix:      Bug 修復
docs:     文件更新
style:    程式碼格式調整
refactor: 程式碼重構
perf:     效能最佳化
test:     測試相關
chore:    建置/工具變更
```

---

## 📄 開源協議

本專案基於 **[MIT License](https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE)** 開源。

> MIT License
>
> Copyright (c) 2024 MarkFlow Studio Contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq/MarkFlow-Studio">MarkFlow Studio Contributors</a>
</p>

---
---

<h1 id="english">🇺🇸 English</h1>

<p align="center">
  <strong>MarkFlow Studio</strong> — Lightweight Markdown Smart Typesetting Engine<br/>
  <em>Zero Dependencies · Pure Frontend · WYSIWYG</em>
</p>

<p align="center">
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/GitHub-MarkFlow_Studio-blue?logo=github" alt="GitHub"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/Zero_Dependencies-✓-success" alt="Zero Deps"/></a>
</p>

---

## 🎉 Project Introduction

**MarkFlow Studio** is a lightweight Markdown smart typesetting engine designed with CJK users in mind. Built with **pure HTML/CSS/JavaScript**, it has **zero external dependencies** — no need to install Node.js, Python, or any build tools. Just double-click `index.html` and you're ready to go.

### 🎯 Core Values

- **Ready to Use** — No runtime environment needed. Download and start writing immediately, suitable for users of all technical levels
- **WYSIWYG** — Real-time dual-pane preview. See your final formatted output as you type
- **CJK-Friendly** — Deeply optimized for Chinese/Japanese/Korean typography with automatic spacing and indentation
- **Ultra-Lightweight** — Only ~5,000 lines of code in total. Lightning-fast loading with minimal resource usage

### 🔥 Pain Points We Solve

| Pain Point | Our Solution |
|------------|---------------|
| Existing editors depend on heavy runtimes | **Zero dependencies**, pure frontend — just double-click to run |
| Poor CJK typography with messy spacing | **CJK typesetting optimization** with automatic inter-character spacing and paragraph indentation |
| Bloated editors with slow startup | **Only ~5,000 lines of code**, loads in seconds |
| Online editors require internet access | **Fully offline**, all computation happens locally in the browser |
| Incomplete Markdown feature support | **Full GFM parsing** + math formulas + Mermaid diagrams + syntax highlighting |

### 💎 Key Differentiators

- **Zero Dependencies** — No Node.js / Python / build tools required. Just double-click `index.html`
- **Pure Frontend** — All computation runs locally in the browser. No server needed, no data uploads
- **Lightweight** — Only ~5,000 lines of code. Lightning-fast loading
- **CJK Optimized** — Purpose-built automatic spacing and indentation for Chinese text

### 🌟 Inspiration

The inspiration came from the everyday need for a lightweight, efficient Markdown editor. Most mainstream editors either depend on heavy frameworks like Electron (often hundreds of MB), require an internet connection, or offer poor CJK typography support. MarkFlow Studio aims to deliver a **truly lightweight, offline-capable, CJK-friendly** Markdown editing experience.

---

## ✨ Core Features

1. **🖥️ Real-Time Dual-Pane Preview** — Edit on the left, preview on the right. WYSIWYG with instant rendering
2. **📝 Complete Markdown/GFM Parser** — Full support for headings, **bold**, *italic*, ~~strikethrough~~, code blocks, tables, task lists, blockquotes, and all GFM syntax
3. **🔢 Math Formula Support** — Inline `$...$` and block-level `$$...$$` syntax, **KaTeX-compatible** for perfect math rendering
4. **📊 Mermaid Diagrams** — Embed Mermaid flowcharts, sequence diagrams, Gantt charts, and more via code blocks
5. **🎨 Code Syntax Highlighting** — Automatic keyword, string, comment, and number highlighting with multiple color schemes
6. **🈶 CJK Typography Optimization** — **Automatic CJK-Latin spacing** and **automatic first-line indentation** — no manual tweaking needed
7. **🌙 Three Themes** — Light mode ☀️ / Dark mode 🌑 / Eye-care mode 🍃. Switch with a single click
8. **📽️ Slideshow Mode** — Split pages with `---`, fullscreen presentation, **keyboard navigation** — perfect for demos
9. **📋 Six Built-in Document Templates** — Technical docs, meeting notes, weekly reports, README, notes, and presentations. Generate with one click
10. **💾 File Operations** — New / Open / Save / **Export to HTML and PDF**. Complete file management
11. **🔄 Auto-Save** — Content automatically saved to **localStorage**. Never lose work from unexpected closures
12. **🔍 Find & Replace** — Search and replace functionality with highlighted matches for quick batch modifications
13. **⌨️ Keyboard Shortcuts** — `Ctrl+B` bold, `Ctrl+I` italic, `Ctrl+K` link, and many more
14. **📱 Responsive Design** — Perfectly adapts to desktop and mobile devices. Write anywhere, anytime
15. **🛡️ XSS Protection** — Built-in XSS filtering for security and reliability

---

## 🚀 Quick Start

### 📋 Requirements

> **Just a modern browser!** Supports Chrome 80+, Firefox 78+, Safari 14+, Edge 80+

No need to install Node.js, Python, npm, or any other tools.

### 📥 Installation

**Option 1: Clone the Repository (Recommended)**

```bash
git clone https://github.com/gitstq/MarkFlow-Studio.git
cd MarkFlow-Studio
```

**Option 2: Download ZIP**

Visit [GitHub Releases](https://github.com/gitstq/MarkFlow-Studio/releases) to download the latest ZIP archive and extract it.

### 🏃 Running Locally

**Option 1: Open Directly (Simplest)**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 **It's that simple!** Zero dependencies — just double-click `index.html` and start writing. No build or installation steps needed.

**Option 2: Local Server (Optional)**

```bash
# Start a local server with npx
npx serve . -p 3000

# Or use Python
python3 -m http.server 3000

# Then open in your browser
# http://localhost:3000
```

---

## 📖 Detailed User Guide

### 🖊️ Editor Overview

The editor features a classic **side-by-side dual-pane layout**:

- **Left pane**: Markdown source code editor with syntax highlighting and line numbers
- **Right pane**: Real-time rendered preview — what you see is what you get
- Changes in the editor are **synchronized instantly** to the preview pane

### 🧰 Toolbar Guide

The toolbar at the top of the editor provides quick-insert buttons for common Markdown syntax:

| Button | Function | Description |
|--------|----------|-------------|
| **B** | Bold | Inserts `**bold text**` |
| **I** | Italic | Inserts `*italic text*` |
| **~** | Strikethrough | Inserts `~~strikethrough text~~` |
| **H** | Heading | Inserts heading syntax |
| **Link** | Hyperlink | Inserts `[text](URL)` |
| **Image** | Image | Inserts `![alt](URL)` |
| **Code** | Code Block | Inserts inline or block-level code |
| **Table** | Table | Inserts GFM table template |
| **List** | List | Inserts ordered or unordered list |

### ⌨️ Keyboard Shortcuts

| Shortcut | Function | Description |
|----------|----------|-------------|
| `Ctrl + B` | **Bold** | Toggle bold on selected text |
| `Ctrl + I` | *Italic* | Toggle italic on selected text |
| `Ctrl + K` | 🔗 Insert Link | Insert a hyperlink |
| `Ctrl + S` | 💾 Save | Save file manually |
| `Ctrl + N` | 📄 New | Create a new document |
| `Ctrl + O` | 📂 Open | Open a local file |
| `Ctrl + H` | 🔍 Find & Replace | Open find & replace panel |
| `Ctrl + Shift + P` | 📽️ Slideshow Mode | Enter/exit slideshow presentation |
| `Tab` | ➡️ Indent | Increase indentation |
| `Shift + Tab` | ⬅️ Outdent | Decrease indentation |

> ⚠️ macOS users should replace `Ctrl` with `Cmd`.

### 🎨 Theme Switching

MarkFlow Studio includes **three carefully designed themes**:

- ☀️ **Light Mode**: Clean and bright white theme for daytime use
- 🌑 **Dark Mode**: Eye-friendly dark theme for nighttime use
- 🍃 **Eye-Care Mode**: Soft green-toned theme for extended writing sessions

Click the theme toggle button on the right side of the toolbar to switch instantly.

### 📽️ Slideshow Mode

1. Use `---` separators in your Markdown document to split content into slides
2. Click the slideshow button in the toolbar or press `Ctrl + Shift + P` to enter fullscreen presentation mode
3. Navigate with the following keys:

| Key | Action |
|-----|--------|
| `→` / `Space` | Next slide |
| `←` | Previous slide |
| `Esc` | Exit slideshow mode |
| `F` | Toggle fullscreen |

### 📋 Document Templates

MarkFlow Studio includes **six built-in document templates** for instant document generation:

| Template | Use Case |
|----------|----------|
| 📚 **Technical Doc** | API docs, technical specs, architecture design |
| 📝 **Meeting Notes** | Meeting records, decision tracking, action items |
| 📊 **Weekly Report** | Work summaries, project progress reports |
| 📖 **README** | Project documentation, open-source introductions |
| 📒 **Notes** | Study notes, knowledge organization |
| 📽️ **Presentation** | Slideshow presentations, reporting materials |

Click the template button in the toolbar and select the desired template to quickly create a document.

### 📤 Export Guide

Export your edited content in multiple formats:

- **Export HTML**: Generates a standalone HTML file with complete styles, ready to share
- **Export PDF**: Export as a PDF document via the browser's print function
- **Export Markdown**: Save the original `.md` file

### 🔍 Find & Replace

- Press `Ctrl + H` to open the find & replace panel
- Supports exact search and batch replacement
- Highlights all matching results
- Toggle case-sensitive / case-insensitive search

---

## 💡 Design Philosophy & Roadmap

### 🏗️ Design Principles

MarkFlow Studio follows these core design principles:

- **Minimalism** — Focus on core editing experience rather than feature bloat
- **Zero Barrier** — No technical background needed. Download and use immediately
- **Offline First** — No network dependency. Data stays completely local
- **Progressive Enhancement** — Solid core features with advanced capabilities added incrementally

### 🔧 Technology Choices

| Decision | Rationale |
|----------|-----------|
| **Pure HTML/CSS/JS** | Zero build dependencies, double-click to run, lowest barrier to entry |
| **No Frameworks** | Avoid framework-induced bloat, maintain ultra-lightweight footprint |
| **No Electron** | Avoid hundreds of MB runtime, maintain instant startup |
| **localStorage Persistence** | No backend needed, data stored entirely on the client |
| **Custom Parser** | No external dependencies, fully controllable, supports deep customization |

### 🗺️ Roadmap

- [ ] 📐 **More Export Formats** — Support DOCX, EPUB, and more
- [ ] 🔌 **Plugin System** — Custom extensions and third-party plugins
- [ ] 📊 **Outline Navigation** — Heading-based outline tree for quick jumping
- [ ] 🖼️ **Drag & Drop Image Upload** — Drag images directly into the editor
- [ ] 📱 **PWA Support** — Offline caching, installable to desktop
- [ ] 🌐 **Multi-Language UI** — English, Japanese, and other language interfaces
- [ ] 🔄 **Version History** — Local version management with undo/redo to any historical state
- [ ] 📝 **Collaborative Editing** — Real-time multi-user collaboration via WebRTC

### 🤝 Community Contributions

We welcome contributions in the following areas:

- 🐛 Bug fixes and issue reports
- 🌍 New language translations and localization
- 🎨 New theme designs and color schemes
- 📋 New document template contributions
- 📖 Documentation improvements and tutorials
- 🔌 Plugin development

---

## 📦 Packaging & Deployment Guide

### 🌐 Deploy as Static Files

MarkFlow Studio is a purely static project that can be deployed to **any web server**:

```bash
# Copy project files to your web server directory
cp -r MarkFlow-Studio/* /var/www/html/markflow/
```

### 📄 GitHub Pages Deployment

1. Fork this repository to your GitHub account
2. Go to repository **Settings → Pages**
3. Set Source to `main` branch, directory to `/ (root)`
4. Click Save and wait for deployment to complete
5. Visit `https://<your-username>.github.io/MarkFlow-Studio/`

### ⚙️ Nginx Configuration Example

```nginx
server {
    listen 80;
    server_name markflow.example.com;
    root /var/www/markflow;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

### ⚙️ Apache Configuration Example

```apache
<VirtualHost *:80>
    ServerName markflow.example.com
    DocumentRoot /var/www/markflow
    DirectoryIndex index.html

    <Directory /var/www/markflow>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 🔗 Embedding in Existing Projects

Embed MarkFlow Studio into your web project:

```html
<!-- Embed via iframe -->
<iframe
    src="/markflow/index.html"
    width="100%"
    height="800px"
    frameborder="0">
</iframe>

<!-- Or include styles and scripts directly -->
<link rel="stylesheet" href="/markflow/css/style.css">
<link rel="stylesheet" href="/markflow/css/themes.css">
<script src="/markflow/js/markdown-parser.js"></script>
<script src="/markflow/js/app.js"></script>
```

---

## 🤝 Contributing Guide

We welcome and appreciate contributions of all kinds! Please follow this workflow:

### 📋 Contribution Workflow

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

1. **Fork** this repository
2. **Clone** locally: `git clone https://github.com/<your-username>/MarkFlow-Studio.git`
3. Create a **Branch**: `git checkout -b feature/your-feature-name`
4. **Commit** your changes: `git commit -m "feat: add new feature description"`
5. **Push** to remote: `git push origin feature/your-feature-name`
6. Submit a **Pull Request** describing your changes

### 📝 Code Standards

- Use **2-space indentation**, no tabs
- Variables and functions use **camelCase** naming
- Constants use **UPPER_CASE** naming
- CSS class names use **kebab-case** naming
- Keep code clean with necessary comments

### 📮 Commit Message Convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

Type descriptions:
feat:     New feature
fix:      Bug fix
docs:     Documentation update
style:    Code formatting
refactor: Code refactoring
perf:     Performance optimization
test:     Test-related
chore:    Build/tooling changes
```

---

## 📄 Open Source License

This project is open-sourced under the **[MIT License](https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE)**.

> MIT License
>
> Copyright (c) 2024 MarkFlow Studio Contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq/MarkFlow-Studio">MarkFlow Studio Contributors</a>
</p>

---
---

<h1 id="日本語">🇯🇵 日本語</h1>

<p align="center">
  <strong>MarkFlow Studio</strong> — 軽量 Markdown スマート組版エンジン<br/>
  <em>ゼロ依存 · 純フロントエンド · WYSIWYG</em>
</p>

<p align="center">
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/GitHub-MarkFlow_Studio-blue?logo=github" alt="GitHub"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/Zero_Dependencies-✓-success" alt="Zero Deps"/></a>
</p>

---

## 🎉 プロジェクト紹介

**MarkFlow Studio** は、CJK ユーザーのために設計された軽量 Markdown スマート組版エンジンです。** pure HTML/CSS/JavaScript** で構築され、**外部依存ゼロ**。Node.js、Python、ビルドツールのインストールは一切不要です。`index.html` をダブルクリックするだけですぐに使えます。

### 🎯 コアバリュー

- **すぐに使える** — ランタイム環境不要。ダウンロードしてすぐに書き始められます。技術レベルを問いません
- **WYSIWYG** — リアルタイム二画面プレビュー。入力したその場で最終的な組版結果を確認できます
- **CJK フレンドリー** — 自動スペーシングと字下げによる CJK 組版の最適化
- **超軽量** — 総コード量わずか約 5,000 行。瞬時にロードされ、リソース消費も最小限

### 🔥 解決する課題

| 課題 | MarkFlow Studio の解決策 |
|------|--------------------------|
| 既存エディタは重いランタイムに依存 | **ゼロ依存**、純フロントエンド — ダブルクリックで起動 |
| CJK 組版の品質が低い | **CJK 組版最適化**による自動スペーシングと字下げ |
| エディタが重く起動が遅い | **約 5,000 行のコードのみ**、秒単位でロード |
| オンラインエディタはインターネット必須 | **完全オフライン動作**、すべての処理はブラウザローカルで実行 |
| Markdown 機能が不完全 | **完全な GFM パーサー** + 数式 + Mermaid 図 + シンタックスハイライト |

### 💎 差別化ポイント

- **ゼロ依存** — Node.js / Python / ビルドツール不要。`index.html` をダブルクリックするだけ
- **純フロントエンド** — すべての処理はブラウザローカルで実行。サーバー不要、データはアップロードされません
- **軽量** — 総コード量約 5,000 行。超高速ロード
- **CJK 最適化** — 日本語・中国語の自動スペーシングと字下げに特化

### 🌟 インスピレーション

日常の執筆における軽量で効率的な Markdown エディタの必要性から着想しました。主流のエディタは Electron などの重いフレームワークに依存（数百 MB に及ぶことも）、インターネット接続が必要、あるいは CJK 組版のサポートが不十分です。MarkFlow Studio は **真に軽量で、オフラインで使え、CJK に優しい** Markdown 編集体験を目指しています。

---

## ✨ コア機能

1. **🖥️ リアルタイム二画面プレビュー** — 左に編集、右にプレビュー。WYSIWYG で即座にレンダリング
2. **📝 完全な Markdown/GFM パーサー** — 見出し、**太字**、*斜体*、~~取り消し線~~、コードブロック、テーブル、タスクリスト、引用など全 GFM 構文に対応
3. **🔢 数式サポート** — インライン `$...$` とブロックレベル `$$...$$` 構文。**KaTeX 互換**で完璧な数式レンダリング
4. **📊 Mermaid 図表** — コードブロックで Mermaid フローチャート、シーケンス図、ガントチャートなどを直接埋め込み
5. **🎨 コードシンタックスハイライト** — キーワード、文字列、コメント、数値を自動認識。複数のカラースキーム対応
6. **🈶 CJK 組版最適化** — **自動 CJK-Latin スペーシング**と**自動字下げ**。手動調整不要
7. **🌙 3つのテーマ** — ライトモード ☀️ / ダークモード 🌑 / アイケアモード 🍃。ワンクリックで切替
8. **📽️ スライドショーモード** — `---` でページ分割、フルスクリーン表示、**キーボードナビゲーション**。プレゼンに最適
9. **📋 6つの内蔵ドキュメントテンプレート** — 技術ドキュメント、議事録、週報、README、メモ、プレゼン。ワンクリックで生成
10. **💾 ファイル操作** — 新規 / 開く / 保存 / **HTML と PDF へのエクスポート**。完全なファイル管理
11. **🔄 自動保存** — コンテンツを **localStorage** に自動保存。予期せぬ終了でもデータを失いません
12. **🔍 検索と置換** — 一致結果をハイライト表示し、素早く一括修正
13. **⌨️ キーボードショートカット** — `Ctrl+B` 太字、`Ctrl+I` 斜体、`Ctrl+K` リンクなど豊富なショートカット
14. **📱 レスポンシブデザイン** — デスクトップとモバイルに完璧に対応。いつでもどこでも執筆
15. **🛡️ XSS 保護** — 内蔵 XSS フィルタリングで安全に利用

---

## 🚀 クイックスタート

### 📋 動作環境

> **モダンブラウザのみ！** Chrome 80+、Firefox 78+、Safari 14+、Edge 80+ に対応

Node.js、Python、npm などのインストールは不要です。

### 📥 インストール

**方法 1：リポジトリをクローン（推奨）**

```bash
git clone https://github.com/gitstq/MarkFlow-Studio.git
cd MarkFlow-Studio
```

**方法 2：ZIP ダウンロード**

[GitHub Releases](https://github.com/gitstq/MarkFlow-Studio/releases) から最新版の ZIP ファイルをダウンロードして展開。

### 🏃 ローカル起動

**方法 1：直接開く（最も簡単）**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 **これだけです！** ゼロ依存で `index.html` をダブルクリックするだけで使えます。ビルドやインストールは一切不要。

**方法 2：ローカルサーバー（オプション）**

```bash
# npx でローカルサーバーを起動
npx serve . -p 3000

# または Python を使用
python3 -m http.server 3000

# ブラウザで開く
# http://localhost:3000
```

---

## 📖 詳細な使い方

### 🖊️ エディタの概要

エディタはクラシックな **左右二画面レイアウト**を採用しています：

- **左ペイン**：Markdown ソースコード編集エリア。シンタックスハイライトと行番号表示対応
- **右ペイン**：リアルタイムレンダリングプレビュー。WYSIWYG
- 編集エリアの変更はプレビューペインに **即座に同期** されます

### 🧰 ツールバーガイド

エディタ上部のツールバーには、一般的な Markdown 構文のクイック挿入ボタンがあります：

| ボタン | 機能 | 説明 |
|--------|------|------|
| **B** | 太字 | `**太字テキスト**` を挿入 |
| **I** | 斜体 | `*斜体テキスト*` を挿入 |
| **~** | 取り消し線 | `~~取り消し線テキスト~~` を挿入 |
| **H** | 見出し | 見出し構文を挿入 |
| **リンク** | ハイパーリンク | `[テキスト](URL)` を挿入 |
| **画像** | 画像 | `![代替テキスト](URL)` を挿入 |
| **コード** | コードブロック | インラインまたはブロックレベルのコードを挿入 |
| **テーブル** | テーブル | GFM テーブルテンプレートを挿入 |
| **リスト** | リスト | 順序付きまたは順序なしリストを挿入 |

### ⌨️ キーボードショートカット

| ショートカット | 機能 | 説明 |
|---------------|------|------|
| `Ctrl + B` | **太字** | 選択テキストを太字に切替 |
| `Ctrl + I` | *斜体* | 選択テキストを斜体に切替 |
| `Ctrl + K` | 🔗 リンク挿入 | ハイパーリンクを挿入 |
| `Ctrl + S` | 💾 保存 | ファイルを手動保存 |
| `Ctrl + N` | 📄 新規 | 新しいドキュメントを作成 |
| `Ctrl + O` | 📂 開く | ローカルファイルを開く |
| `Ctrl + H` | 🔍 検索と置換 | 検索と置換パネルを開く |
| `Ctrl + Shift + P` | 📽️ スライドショーモード | スライドショーモードの開始/終了 |
| `Tab` | ➡️ インデント | インデントを増やす |
| `Shift + Tab` | ⬅️ アウトデント | インデントを減らす |

> ⚠️ macOS ユーザーは `Ctrl` を `Cmd` に置き換えてください。

### 🎨 テーマ切替

MarkFlow Studio には **3つのテーマ** が用意されています：

- ☀️ **ライトモード**：明るくクリーンな白系テーマ。昼間の使用に最適
- 🌑 **ダークモード**：目に優しいダークテーマ。夜間の使用に最適
- 🍃 **アイケアモード**：柔らかい緑調テーマ。長時間の執筆でも疲れにくい

ツールバー右側のテーマ切替ボタンをクリックするだけで切替可能です。

### 📽️ スライドショーモード

1. Markdown ドキュメント内で `---` 区切りを使用してスライドを分割
2. ツールバーのスライドショーボタンをクリックするか、`Ctrl + Shift + P` でフルスクリーンプレゼンテーションモードに入る
3. 以下のキーでナビゲーション：

| キー | 操作 |
|------|------|
| `→` / `Space` | 次のスライド |
| `←` | 前のスライド |
| `Esc` | スライドショーモードを終了 |
| `F` | フルスクリーン切替 |

### 📋 ドキュメントテンプレート

MarkFlow Studio には **6つの内蔵テンプレート** があり、ワンクリックで標準フォーマットのドキュメントを生成できます：

| テンプレート | 用途 |
|-------------|------|
| 📚 **技術ドキュメント** | API ドキュメント、技術仕様、アーキテクチャ設計 |
| 📝 **議事録** | 会議記録、決定事項の追跡、アクションアイテム |
| 📊 **週報** | 作業サマリー、プロジェクト進捗レポート |
| 📖 **README** | プロジェクトドキュメント、オープンソース紹介 |
| 📒 **メモ** | 学習メモ、知識の整理 |
| 📽️ **プレゼン** | スライドショープレゼンテーション、報告資料 |

ツールバーのテンプレートボタンをクリックし、目的のテンプレートを選択してください。

### 📤 エクスポート

編集内容を複数の形式でエクスポートできます：

- **HTML エクスポート**：完全なスタイルを含むスタンドアロン HTML ファイルを生成。そのまま共有可能
- **PDF エクスポート**：ブラウザの印刷機能で PDF ドキュメントとして出力
- **Markdown エクスポート**：元の `.md` ファイルを保存

### 🔍 検索と置換

- `Ctrl + H` で検索と置換パネルを開く
- 精密検索と一括置換に対応
- 一致結果をすべてハイライト表示
- 大文字・小文字の区別切替が可能

---

## 💡 設計思想とロードマップ

### 🏗️ 設計原則

MarkFlow Studio は以下のコア設計原則に従っています：

- **ミニマリズム** — 機能の詰め込みではなく、コア編集体験に集中
- **ゼロバリア** — 技術的背景不要。ダウンロードしてすぐ使える
- **オフラインファースト** — ネットワーク非依存。データは完全にローカル
- **漸進的拡張** — 堅牢なコア機能をベースに、高度な機能を段階的に追加

### 🔧 技術選定の理由

| 決定 | 理由 |
|------|------|
| **Pure HTML/CSS/JS** | ビルド依存ゼロ、ダブルクリックで起動、最低限の導入ハードル |
| **フレームワーク不使用** | フレームワークによる肥大化を回避、超軽量を維持 |
| **Electron 不使用** | 数百 MB のランタイムを回避、瞬時起動を実現 |
| **localStorage 永続化** | バックエンド不要、データは完全にクライアント側に保存 |
| **自作パーサー** | 外部依存なし、完全に制御可能、深いカスタマイズに対応 |

### 🗺️ ロードマップ

- [ ] 📐 **更多エクスポート形式** — DOCX、EPUB 等に対応
- [ ] 🔌 **プラグインシステム** — カスタム拡張とサードパーティプラグイン
- [ ] 📊 **アウトラインナビゲーション** — 見出しベースのアウトラインツリーで素早くジャンプ
- [ ] 🖼️ **ドラッグ＆ドロップ画像アップロード** — 画像を直接ドラッグして挿入
- [ ] 📱 **PWA サポート** — オフラインキャッシュ、デスクトップインストール
- [ ] 🌐 **多言語 UI** — 英語、中国語など多言語インターフェース
- [ ] 🔄 **バージョン履歴** — ローカルバージョン管理、任意の履歴状態への undo/redo
- [ ] 📝 **共同編集** — WebRTC ベースのリアルタイム多人協力編集

### 🤝 コミュニティへの貢献

以下の分野での貢献を歓迎します：

- 🐛 バグ修正と問題報告
- 🌍 新言語の翻訳とローカライゼーション
- 🎨 新テーマデザインとカラースキーム
- 📋 新ドキュメントテンプレートの提供
- 📖 ドキュメントの改善とチュートリアルの執筆
- 🔌 プラグイン開発

---

## 📦 パッケージングとデプロイガイド

### 🌐 静的ファイルとしてデプロイ

MarkFlow Studio は純粋な静的プロジェクトで、**任意の Web サーバー** にデプロイできます：

```bash
# プロジェクトファイルを Web サーバーディレクトリにコピー
cp -r MarkFlow-Studio/* /var/www/html/markflow/
```

### 📄 GitHub Pages デプロイ

1. リポジトリを GitHub アカウントにフォーク
2. リポジトリの **Settings → Pages** に移動
3. Source を `main` ブランチ、ディレクトリを `/ (root)` に設定
4. Save をクリックし、デプロイ完了を待つ
5. `https://<your-username>.github.io/MarkFlow-Studio/` にアクセス

### ⚙️ Nginx 設定例

```nginx
server {
    listen 80;
    server_name markflow.example.com;
    root /var/www/markflow;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # gzip 圧縮を有効化
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

### ⚙️ Apache 設定例

```apache
<VirtualHost *:80>
    ServerName markflow.example.com
    DocumentRoot /var/www/markflow
    DirectoryIndex index.html

    <Directory /var/www/markflow>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 🔗 既存プロジェクトへの埋め込み

Web プロジェクトに MarkFlow Studio を埋め込む方法：

```html
<!-- iframe で埋め込み -->
<iframe
    src="/markflow/index.html"
    width="100%"
    height="800px"
    frameborder="0">
</iframe>

<!-- またはスタイルとスクリプトを直接読み込み -->
<link rel="stylesheet" href="/markflow/css/style.css">
<link rel="stylesheet" href="/markflow/css/themes.css">
<script src="/markflow/js/markdown-parser.js"></script>
<script src="/markflow/js/app.js"></script>
```

---

## 🤝 コントリビューションガイド

すべての形式のコントリビューションを歓迎・感謝しています。以下のワークフローに従ってください：

### 📋 コントリビューションフロー

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

1. リポジトリを **Fork**
2. ローカルに **Clone**：`git clone https://github.com/<your-username>/MarkFlow-Studio.git`
3. **Branch** を作成：`git checkout -b feature/your-feature-name`
4. 変更を **Commit**：`git commit -m "feat: 新機能の説明を追加"`
5. リモートに **Push**：`git push origin feature/your-feature-name`
6. **Pull Request** を提出し、変更内容を説明

### 📝 コーディング規約

- **2 スペースインデント**を使用。Tab は使用しない
- 変数と関数は **camelCase** 命名
- 定数は **UPPER_CASE** 命名
- CSS クラス名は **kebab-case** 命名
- コードを簡潔に保ち、必要なコメントを追加

### 📮 コミットメッセージ規約

[Conventional Commits](https://www.conventionalcommits.org/) 仕様に従ってください：

```
<type>(<scope>): <subject>

タイプ説明：
feat:     新機能
fix:      バグ修正
docs:     ドキュメント更新
style:    コードフォーマット
refactor: リファクタリング
perf:     パフォーマンス最適化
test:     テスト関連
chore:    ビルド/ツールの変更
```

---

## 📄 オープンソースライセンス

本プロジェクトは **[MIT License](https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE)** の下でオープンソースとして公開されています。

> MIT License
>
> Copyright (c) 2024 MarkFlow Studio Contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq/MarkFlow-Studio">MarkFlow Studio Contributors</a>
</p>

---
---

<h1 id="한국어">🇰🇷 한국어</h1>

<p align="center">
  <strong>MarkFlow Studio</strong> — 경량 Markdown 스마트 조판 엔진<br/>
  <em>의존성 제로 · 순수 프론트엔드 · WYSIWYG</em>
</p>

<p align="center">
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/GitHub-MarkFlow_Studio-blue?logo=github" alt="GitHub"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/Zero_Dependencies-✓-success" alt="Zero Deps"/></a>
</p>

---

## 🎉 프로젝트 소개

**MarkFlow Studio**는 CJK 사용자를 위해 설계된 경량 Markdown 스마트 조판 엔진입니다. **순수 HTML/CSS/JavaScript**로 구축되었으며, **외부 의존성이 없습니다**. Node.js, Python 또는 빌드 도구를 설치할 필요가 없습니다. `index.html`을 더블클릭하기만 하면 바로 사용할 수 있습니다.

### 🎯 핵심 가치

- **즉시 사용 가능** — 런타임 환경이 필요 없습니다. 다운로드 후 바로 작성 시작. 기술 수준에 상관없이 누구나 사용 가능
- **WYSIWYG** — 실시간 듀얼 창 미리보기. 입력하는 즉시 최종 조판 결과를 확인
- **CJK 친화적** — 자동 간격 조절과 들여쓰기를 통한 CJK 조판 최적화
- **초경량** — 총 코드량 약 5,000줄. 순식간에 로딩되며 리소스 소모 최소화

### 🔥 해결하는 문제

| 문제 | MarkFlow Studio의 해결책 |
|------|--------------------------|
| 기존 에디터는 무거운 런타임에 의존 | **의존성 제로**, 순수 프론트엔드 — 더블클릭으로 바로 실행 |
| CJK 조판 품질이 낮음 | **CJK 조판 최적화**로 자동 간격 조절과 들여쓰기 |
| 에디터가 무거워서 시작이 느림 | **약 5,000줄의 코드만으로**, 몇 초 만에 로딩 |
| 온라인 에디터는 인터넷 연결 필수 | **완전 오프라인 동작**, 모든 처리는 브라우저 로컬에서 실행 |
| Markdown 기능이 불완전 | **완전한 GFM 파서** + 수식 + Mermaid 다이어그램 + 구문 강조 |

### 💎 차별화 포인트

- **의존성 제로** — Node.js / Python / 빌드 도구 불필요. `index.html`을 더블클릭만 하면 됩니다
- **순수 프론트엔드** — 모든 처리는 브라우저 로컬에서 실행. 서버 불필요, 데이터 업로드 없음
- **경량** — 총 코드량 약 5,000줄. 초고속 로딩
- **CJK 최적화** — 한국어/중국어 자동 간격 조절과 들여쓰기에 특화

### 🌟 영감

일상적인 글쓰기에서 가볍고 효율적인 Markdown 에디터의 필요성에서 영감을 받았습니다. 주류 에디터들은 Electron 같은 무거운 프레임워크에 의존(수백 MB에 달하기도 함), 인터넷 연결이 필요하거나, CJK 조판 지원이 미흡합니다. MarkFlow Studio는 **진정으로 가볍고, 오프라인에서 사용 가능하며, CJK에 친화적인** Markdown 편집 경험을 목표로 합니다.

---

## ✨ 핵심 기능

1. **🖥️ 실시간 듀얼 창 미리보기** — 왼쪽 편집, 오른쪽 미리보기. WYSIWYG으로 즉시 렌더링
2. **📝 완전한 Markdown/GFM 파서** — 제목, **굵게**, *기울임*, ~~취소선~~, 코드 블록, 테이블, 작업 목록, 인용 등 전체 GFM 구문 지원
3. **🔢 수식 지원** — 인라인 `$...$` 및 블록 수준 `$$...$$` 구문. **KaTeX 호환**으로 완벽한 수식 렌더링
4. **📊 Mermaid 다이어그램** — 코드 블록으로 Mermaid 순서도, 시퀀스 다이어그램, 간트 차트 등 직접 삽입
5. **🎨 코드 구문 강조** — 키워드, 문자열, 주석, 숫자를 자동 인식. 다양한 색상 구성 지원
6. **🈶 CJK 조판 최적화** — **자동 CJK-Latin 간격 조절** 및 **자동 첫 줄 들여쓰기**. 수동 조정 불필요
7. **🌙 3가지 테마** — 라이트 모드 ☀️ / 다크 모드 🌑 / 아이케어 모드 🍃. 원클릭으로 전환
8. **📽️ 슬라이드쇼 모드** — `---`로 페이지 분할, 전체 화면 표시, **키보드 탐색**. 프레젠테이션에 최적
9. **📋 6가지 내장 문서 템플릿** — 기술 문서, 회의록, 주간 보고서, README, 메모, 프레젠테이션. 원클릭 생성
10. **💾 파일 작업** — 새로 만들기 / 열기 / 저장 / **HTML 및 PDF 내보내기**. 완전한 파일 관리
11. **🔄 자동 저장** — 콘텐츠를 **localStorage**에 자동 저장. 예기치 않은 종료에서도 데이터 보존
12. **🔍 찾기 및 바꾸기** — 일치 결과를 하이라이트하여 빠르게 일괄 수정
13. **⌨️ 키보드 단축키** — `Ctrl+B` 굵게, `Ctrl+I` 기울임, `Ctrl+K` 링크 등 다양한 단축키
14. **📱 반응형 디자인** — 데스크톱과 모바일에 완벽 대응. 언제 어디서나 글쓰기
15. **🛡️ XSS 보호** — 내장 XSS 필터링으로 안전하게 이용

---

## 🚀 빠른 시작

### 📋 시스템 요구사항

> **모던 브라우저만 있으면 됩니다!** Chrome 80+, Firefox 78+, Safari 14+, Edge 80+ 지원

Node.js, Python, npm 등의 설치가 필요 없습니다.

### 📥 설치

**방법 1: 저장소 복제 (권장)**

```bash
git clone https://github.com/gitstq/MarkFlow-Studio.git
cd MarkFlow-Studio
```

**방법 2: ZIP 다운로드**

[GitHub Releases](https://github.com/gitstq/MarkFlow-Studio/releases)에서 최신 버전의 ZIP 파일을 다운로드하고 압축 해제.

### 🏃 로컬 실행

**방법 1: 직접 열기 (가장 간단)**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 **이게 전부입니다!** 의존성 제로, `index.html`을 더블클릭하면 바로 사용 가능. 빌드나 설치 단계가 전혀 필요 없습니다.

**방법 2: 로컬 서버 (선택)**

```bash
# npx로 로컬 서버 시작
npx serve . -p 3000

# 또는 Python 사용
python3 -m http.server 3000

# 브라우저에서 열기
# http://localhost:3000
```

---

## 📖 상세 사용 가이드

### 🖊️ 에디터 개요

에디터는 클래식 **좌우 듀얼 창 레이아웃**을 채택합니다:

- **왼쪽 창**: Markdown 소스 코드 편집 영역. 구문 강조 및 줄 번호 표시 지원
- **오른쪽 창**: 실시간 렌더링 미리보기. WYSIWYG
- 편집 영역의 변경 사항이 미리보기 창에 **즉시 동기화**됩니다

### 🧰 툴바 가이드

에디터 상단의 툴바에는 일반적인 Markdown 구문의 빠른 삽입 버튼이 있습니다:

| 버튼 | 기능 | 설명 |
|------|------|------|
| **B** | 굵게 | `**굵은 텍스트**` 삽입 |
| **I** | 기울임 | `*기울임 텍스트*` 삽입 |
| **~** | 취소선 | `~~취소선 텍스트~~` 삽입 |
| **H** | 제목 | 제목 구문 삽입 |
| **링크** | 하이퍼링크 | `[텍스트](URL)` 삽입 |
| **이미지** | 이미지 | `![대체 텍스트](URL)` 삽입 |
| **코드** | 코드 블록 | 인라인 또는 블록 수준 코드 삽입 |
| **테이블** | 테이블 | GFM 테이블 템플릿 삽입 |
| **목록** | 목록 | 순서 있는 또는 순서 없는 목록 삽입 |

### ⌨️ 키보드 단축키

| 단축키 | 기능 | 설명 |
|--------|------|------|
| `Ctrl + B` | **굵게** | 선택한 텍스트 굵게 전환 |
| `Ctrl + I` | *기울임* | 선택한 텍스트 기울임 전환 |
| `Ctrl + K` | 🔗 링크 삽입 | 하이퍼링크 삽입 |
| `Ctrl + S` | 💾 저장 | 파일 수동 저장 |
| `Ctrl + N` | 📄 새로 만들기 | 새 문서 만들기 |
| `Ctrl + O` | 📂 열기 | 로컬 파일 열기 |
| `Ctrl + H` | 🔍 찾기 및 바꾸기 | 찾기 및 바꾸기 패널 열기 |
| `Ctrl + Shift + P` | 📽️ 슬라이드쇼 모드 | 슬라이드쇼 모드 시작/종료 |
| `Tab` | ➡️ 들여쓰기 | 들여쓰기 증가 |
| `Shift + Tab` | ⬅️ 내어쓰기 | 들여쓰기 감소 |

> ⚠️ macOS 사용자는 `Ctrl`을 `Cmd`로 변경하세요.

### 🎨 테마 전환

MarkFlow Studio에는 **3가지 테마**가 내장되어 있습니다:

- ☀️ **라이트 모드**: 밝고 깨끗한 흰색 테마. 주간 사용에 적합
- 🌑 **다크 모드**: 눈에 편안한 다크 테마. 야간 사용에 적합
- 🍃 **아이케어 모드**: 부드러운 녹색 톤 테마. 장시간 작성 시 눈의 피로 감소

툴바 오른쪽의 테마 전환 버튼을 클릭하면 즉시 전환됩니다.

### 📽️ 슬라이드쇼 모드

1. Markdown 문서에서 `---` 구분자를 사용하여 슬라이드 분할
2. 툴바의 슬라이드쇼 버튼을 클릭하거나 `Ctrl + Shift + P`로 전체 화면 프레젠테이션 모드 진입
3. 다음 키로 탐색:

| 키 | 동작 |
|----|------|
| `→` / `Space` | 다음 슬라이드 |
| `←` | 이전 슬라이드 |
| `Esc` | 슬라이드쇼 모드 종료 |
| `F` | 전체 화면 전환 |

### 📋 문서 템플릿

MarkFlow Studio에는 **6가지 내장 템플릿**이 있어 원클릭으로 표준 형식의 문서를 생성할 수 있습니다:

| 템플릿 | 용도 |
|--------|------|
| 📚 **기술 문서** | API 문서, 기술 사양, 아키텍처 설계 |
| 📝 **회의록** | 회의 기록, 결정 사항 추적, 실행 항목 |
| 📊 **주간 보고서** | 업무 요약, 프로젝트 진행 상황 보고 |
| 📖 **README** | 프로젝트 문서, 오픈소스 소개 |
| 📒 **메모** | 학습 메모, 지식 정리 |
| 📽️ **프레젠테이션** | 슬라이드쇼 프레젠테이션, 보고 자료 |

툴바의 템플릿 버튼을 클릭하고 원하는 템플릿을 선택하세요.

### 📤 내보내기

편집한 콘텐츠를 여러 형식으로 내보낼 수 있습니다:

- **HTML 내보내기**: 완전한 스타일이 포함된 독립 HTML 파일 생성. 바로 공유 가능
- **PDF 내보내기**: 브라우저 인쇄 기능으로 PDF 문서 출력
- **Markdown 내보내기**: 원본 `.md` 파일 저장

### 🔍 찾기 및 바꾸기

- `Ctrl + H`로 찾기 및 바꾸기 패널 열기
- 정확한 검색 및 일괄 바꾸기 지원
- 일치하는 모든 결과 하이라이트 표시
- 대소문자 구분/비구분 전환 가능

---

## 💡 설계 철학과 로드맵

### 🏗️ 설계 원칙

MarkFlow Studio는 다음 핵심 설계 원칙을 따릅니다:

- **미니멀리즘** — 기능 나열보다는 핵심 편집 경험에 집중
- **제로 장벽** — 기술적 배경지식 불필요. 다운로드 후 즉시 사용
- **오프라인 우선** — 네트워크 비의존. 데이터는 완전히 로컬에 저장
- **점진적 확장** — 탄탄한 핵심 기능을 기반으로 고급 기능을 점진적으로 추가

### 🔧 기술 선택 이유

| 결정 | 이유 |
|------|------|
| **순수 HTML/CSS/JS** | 빌드 의존성 제로, 더블클릭으로 실행, 최소한의 진입 장벽 |
| **프레임워크 미사용** | 프레임워크로 인한 비대화 방지, 초경량 유지 |
| **Electron 미사용** | 수백 MB의 런타임 방지, 즉시 시작 실현 |
| **localStorage 영속화** | 백엔드 불필요, 데이터는 완전히 클라이언트에 저장 |
| **자체 파서** | 외부 의존성 없음, 완전 제어 가능, 깊은 커스터마이제이션 지원 |

### 🗺️ 로드맵

- [ ] 📐 **더 많은 내보내기 형식** — DOCX, EPUB 등 지원
- [ ] 🔌 **플러그인 시스템** — 커스텀 확장 및 서드파티 플러그인
- [ ] 📊 **아웃라인 탐색** — 제목 기반 아웃라인 트리로 빠른 이동
- [ ] 🖼️ **드래그 앤 드롭 이미지 업로드** — 이미지를 직접 드래그하여 삽입
- [ ] 📱 **PWA 지원** — 오프라인 캐싱, 데스크톱 설치
- [ ] 🌐 **다국어 UI** — 영어, 중국어 등 다국어 인터페이스
- [ ] 🔄 **버전 기록** — 로컬 버전 관리, 임의의 과거 상태로 undo/redo
- [ ] 📝 **공동 편집** — WebRTC 기반 실시간 다인 협업 편집

### 🤝 커뮤니티 기여

다음 분야의 기여를 환영합니다:

- 🐛 버그 수정 및 문제 보고
- 🌍 새 언어 번역 및 현지화
- 🎨 새 테마 디자인 및 색상 구성
- 📋 새 문서 템플릿 제공
- 📖 문서 개선 및 튜토리얼 작성
- 🔌 플러그인 개발

---

## 📦 패키징 및 배포 가이드

### 🌐 정적 파일로 배포

MarkFlow Studio는 순수 정적 프로젝트로 **모든 웹 서버**에 배포할 수 있습니다:

```bash
# 프로젝트 파일을 웹 서버 디렉토리에 복사
cp -r MarkFlow-Studio/* /var/www/html/markflow/
```

### 📄 GitHub Pages 배포

1. 저장소를 GitHub 계정으로 포크
2. 저장소의 **Settings → Pages**로 이동
3. Source를 `main` 브랜치, 디렉토리를 `/ (root)`로 설정
4. Save 클릭 후 배포 완료 대기
5. `https://<your-username>.github.io/MarkFlow-Studio/` 접속

### ⚙️ Nginx 설정 예시

```nginx
server {
    listen 80;
    server_name markflow.example.com;
    root /var/www/markflow;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # gzip 압축 활성화
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

### ⚙️ Apache 설정 예시

```apache
<VirtualHost *:80>
    ServerName markflow.example.com
    DocumentRoot /var/www/markflow
    DirectoryIndex index.html

    <Directory /var/www/markflow>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 🔗 기존 프로젝트에 임베드

웹 프로젝트에 MarkFlow Studio를 임베드하는 방법:

```html
<!-- iframe으로 임베드 -->
<iframe
    src="/markflow/index.html"
    width="100%"
    height="800px"
    frameborder="0">
</iframe>

<!-- 또는 스타일과 스크립트를 직접 포함 -->
<link rel="stylesheet" href="/markflow/css/style.css">
<link rel="stylesheet" href="/markflow/css/themes.css">
<script src="/markflow/js/markdown-parser.js"></script>
<script src="/markflow/js/app.js"></script>
```

---

## 🤝 기여 가이드

모든 형태의 기여를 환영하며 감사드립니다. 다음 워크플로를 따라주세요:

### 📋 기여 워크플로

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

1. 저장소 **Fork**
2. 로컬에 **Clone**: `git clone https://github.com/<your-username>/MarkFlow-Studio.git`
3. **Branch** 생성: `git checkout -b feature/your-feature-name`
4. 변경 사항 **Commit**: `git commit -m "feat: 새 기능 설명 추가"`
5. 리모트에 **Push**: `git push origin feature/your-feature-name`
6. **Pull Request** 제출 및 변경 내용 설명

### 📝 코딩 규칙

- **2칸 들여쓰기** 사용. Tab 미사용
- 변수 및 함수는 **camelCase** 명명
- 상수는 **UPPER_CASE** 명명
- CSS 클래스명은 **kebab-case** 명명
- 코드를 깔끔하게 유지하고 필요한 주석 추가

### 📮 커밋 메시지 규칙

[Conventional Commits](https://www.conventionalcommits.org/) 사양을 따르세요:

```
<type>(<scope>): <subject>

유형 설명:
feat:     새 기능
fix:      버그 수정
docs:     문서 업데이트
style:    코드 포맷팅
refactor: 리팩토링
perf:     성능 최적화
test:     테스트 관련
chore:    빌드/도구 변경
```

---

## 📄 오픈소스 라이선스

이 프로젝트는 **[MIT License](https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE)**에 따라 오픈소스로 공개됩니다.

> MIT License
>
> Copyright (c) 2024 MarkFlow Studio Contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq/MarkFlow-Studio">MarkFlow Studio Contributors</a>
</p>

---
---

<h1 id="español">🇪🇸 Español</h1>

<p align="center">
  <strong>MarkFlow Studio</strong> — Motor de Composicion Inteligente de Markdown Ligero<br/>
  <em>Cero Dependencias · Puro Frontend · WYSIWYG</em>
</p>

<p align="center">
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/GitHub-MarkFlow_Studio-blue?logo=github" alt="GitHub"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"/></a>
  <a href="https://github.com/gitstq/MarkFlow-Studio"><img src="https://img.shields.io/badge/Zero_Dependencies-✓-success" alt="Zero Deps"/></a>
</p>

---

## 🎉 Introduccion del Proyecto

**MarkFlow Studio** es un motor de composicion inteligente de Markdown ligero disenado pensando en los usuarios CJK. Construido con **HTML/CSS/JavaScript puro**, tiene **cero dependencias externas**. No necesita instalar Node.js, Python ni ninguna herramienta de compilacion. Simplemente haz doble clic en `index.html` y listo.

### 🎯 Valores Centrales

- **Listo para usar** — Sin necesidad de entorno de ejecucion. Descarga y empieza a escribir inmediatamente, para usuarios de cualquier nivel tecnico
- **WYSIWYG** — Vista previa en tiempo real con doble panel. Ve el resultado final de formato mientras escribes
- **Amigable con CJK** — Optimizacion profunda de tipografia CJK con espaciado automatico y sangria
- **Ultraligero** — Solo ~5.000 lineas de codigo en total. Carga instantanea con consumo minimo de recursos

### 🔥 Problemas que Resolvemos

| Problema | Nuestra Solucion |
|----------|-------------------|
| Los editores existentes dependen de entornos pesados | **Cero dependencias**, puro frontend — doble clic para ejecutar |
| Mala tipografia CJK con espaciado desordenado | **Optimizacion de tipografia CJK** con espaciado automatico y sangria de parrafo |
| Editores pesados con inicio lento | **Solo ~5.000 lineas de codigo**, carga en segundos |
| Los editores online requieren conexion a internet | **Funcionamiento completamente offline**, todo el procesamiento ocurre localmente |
| Soporte incompleto de Markdown | **Parser GFM completo** + formulas matematicas + diagramas Mermaid + resaltado de sintaxis |

### 💎 Puntos Diferenciadores

- **Cero Dependencias** — Sin Node.js / Python / herramientas de compilacion. Solo haz doble clic en `index.html`
- **Puro Frontend** — Todo el procesamiento se ejecuta localmente en el navegador. Sin servidor necesario, sin subida de datos
- **Ligero** — Solo ~5.000 lineas de codigo. Carga ultrarapida
- **Optimizado para CJK** — Espaciado automatico y sangria especializados para texto chino

### 🌟 Inspiracion

La inspiracion surgio de la necesidad cotidiana de un editor de Markdown ligero y eficiente. La mayoria de los editores principales dependen de frameworks pesados como Electron (a menudo cientos de MB), requieren conexion a internet, o ofrecen un soporte deficiente de tipografia CJK. MarkFlow Studio busca ofrecer una experiencia de edicion de Markdown **verdaderamente ligera, utilizable offline y amigable con CJK**.

---

## ✨ Caracteristicas Principales

1. **🖥️ Vista Previa en Doble Panel en Tiempo Real** — Edita a la izquierda, previsualiza a la derecha. WYSIWYG con renderizado instantaneo
2. **📝 Parser Completo de Markdown/GFM** — Soporte completo para encabezados, **negrita**, *cursiva*, ~~tachado~~, bloques de codigo, tablas, listas de tareas, citas y toda la sintaxis GFM
3. **🔢 Soporte de Formulas Matematicas** — Sintaxis inline `$...$` y de bloque `$$...$$`. **Compatible con KaTeX** para renderizado perfecto de matematicas
4. **📊 Diagramas Mermaid** — Inserta diagramas de flujo, diagramas de secuencia, diagramas de Gantt y mas mediante bloques de codigo
5. **🎨 Resaltado de Sintaxis de Codigo** — Reconocimiento automatico de palabras clave, cadenas, comentarios y numeros con multiples esquemas de color
6. **🈶 Optimizacion de Tipografia CJK** — **Espaciado automatico CJK-Latin** y **sangria automatica de primera linea**. Sin ajustes manuales necesarios
7. **🌙 Tres Temas** — Modo claro ☀️ / Modo oscuro 🌑 / Modo cuidado de ojos 🍃. Cambio con un solo clic
8. **📽️ Modo Presentacion** — Divide paginas con `---`, presentacion a pantalla completa, **navegacion por teclado**. Perfecto para demostraciones
9. **📋 Seis Plantillas de Documento Integradas** — Documentacion tecnica, actas de reunion, informes semanales, README, notas y presentaciones. Generacion con un clic
10. **💾 Operaciones de Archivo** — Nuevo / Abrir / Guardar / **Exportar a HTML y PDF**. Gestion completa de archivos
11. **🔄 Guardado Automatico** — Contenido guardado automaticamente en **localStorage**. Nunca pierdas tu trabajo por cierres inesperados
12. **🔍 Buscar y Reemplazar** — Funcionalidad de busqueda y reemplazo con resaltado de coincidencias para modificaciones rapidas por lotes
13. **⌨️ Atajos de Teclado** — `Ctrl+B` negrita, `Ctrl+I` cursiva, `Ctrl+K` enlace y muchos mas
14. **📱 Diseno Responsivo** — Se adapta perfectamente a dispositivos de escritorio y moviles. Escribe en cualquier momento y lugar
15. **🛡️ Proteccion XSS** — Filtrado XSS integrado para seguridad y confiabilidad

---

## 🚀 Inicio Rapido

### 📋 Requisitos

> **Solo un navegador moderno!** Soporta Chrome 80+, Firefox 78+, Safari 14+, Edge 80+

No necesitas instalar Node.js, Python, npm ni ninguna otra herramienta.

### 📥 Instalacion

**Opcion 1: Clonar el Repositorio (Recomendado)**

```bash
git clone https://github.com/gitstq/MarkFlow-Studio.git
cd MarkFlow-Studio
```

**Opcion 2: Descargar ZIP**

Visita [GitHub Releases](https://github.com/gitstq/MarkFlow-Studio/releases) para descargar el ultimo archivo ZIP y extraerlo.

### 🏃 Ejecucion Local

**Opcion 1: Abrir Directamente (Lo mas simple)**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 **Es asi de simple!** Cero dependencias — solo haz doble clic en `index.html` y empieza a escribir. No se necesitan pasos de compilacion ni instalacion.

**Opcion 2: Servidor Local (Opcional)**

```bash
# Iniciar un servidor local con npx
npx serve . -p 3000

# O usar Python
python3 -m http.server 3000

# Luego abrir en el navegador
# http://localhost:3000
```

---

## 📖 Guia de Uso Detallada

### 🖊️ Descripcion del Editor

El editor presenta un clasico **diseno de doble panel lado a lado**:

- **Panel izquierdo**: Area de edicion de codigo fuente Markdown con resaltado de sintaxis y numeros de linea
- **Panel derecho**: Vista previa renderizada en tiempo real. Lo que ves es lo que obtienes
- Los cambios en el editor se **sincronizan instantaneamente** con el panel de vista previa

### 🧰 Guia de la Barra de Herramientas

La barra de herramientas en la parte superior del editor proporciona botones de insercion rapida para sintaxis Markdown comun:

| Boton | Funcion | Descripcion |
|-------|---------|-------------|
| **B** | Negrita | Inserta `**texto en negrita**` |
| **I** | Cursiva | Inserta `*texto en cursiva*` |
| **~** | Tachado | Inserta `~~texto tachado~~` |
| **H** | Encabezado | Inserta sintaxis de encabezado |
| **Enlace** | Hipervinculo | Inserta `[texto](URL)` |
| **Imagen** | Imagen | Inserta `[![alt](URL)]` |
| **Codigo** | Bloque de Codigo | Inserta codigo inline o de bloque |
| **Tabla** | Tabla | Inserta plantilla de tabla GFM |
| **Lista** | Lista | Inserta lista ordenada o desordenada |

### ⌨️ Atajos de Teclado

| Atajo | Funcion | Descripcion |
|-------|---------|-------------|
| `Ctrl + B` | **Negrita** | Alternar negrita en texto seleccionado |
| `Ctrl + I` | *Cursiva* | Alternar cursiva en texto seleccionado |
| `Ctrl + K` | 🔗 Insertar Enlace | Insertar un hipervinculo |
| `Ctrl + S` | 💾 Guardar | Guardar archivo manualmente |
| `Ctrl + N` | 📄 Nuevo | Crear un nuevo documento |
| `Ctrl + O` | 📂 Abrir | Abrir un archivo local |
| `Ctrl + H` | 🔍 Buscar y Reemplazar | Abrir panel de busqueda y reemplazo |
| `Ctrl + Shift + P` | 📽️ Modo Presentacion | Entrar/salir del modo presentacion |
| `Tab` | ➡️ Sangria | Aumentar sangria |
| `Shift + Tab` | ⬅️ Quitar Sangria | Disminuir sangria |

> ⚠️ Los usuarios de macOS deben reemplazar `Ctrl` por `Cmd`.

### 🎨 Cambio de Tema

MarkFlow Studio incluye **tres temas cuidadosamente disenados**:

- ☀️ **Modo Claro**: Tema blanco limpio y brillante para uso diurno
- 🌑 **Modo Oscuro**: Tema oscuro amigable con los ojos para uso nocturno
- 🍃 **Modo Cuidado de Ojos**: Tema de tonos verdes suaves para sesiones de escritura prolongadas

Haz clic en el boton de cambio de tema en el lado derecho de la barra de herramientas para cambiar instantaneamente.

### 📽️ Modo Presentacion

1. Usa separadores `---` en tu documento Markdown para dividir el contenido en diapositivas
2. Haz clic en el boton de presentacion de la barra de herramientas o presiona `Ctrl + Shift + P` para entrar en modo de presentacion a pantalla completa
3. Navega con las siguientes teclas:

| Tecla | Accion |
|-------|--------|
| `→` / `Space` | Siguiente diapositiva |
| `←` | Diapositiva anterior |
| `Esc` | Salir del modo presentacion |
| `F` | Alternar pantalla completa |

### 📋 Plantillas de Documento

MarkFlow Studio incluye **seis plantillas integradas** para generacion instantanea de documentos:

| Plantilla | Caso de Uso |
|-----------|-------------|
| 📚 **Doc Tecnico** | Documentacion de API, especificaciones tecnicas, diseno de arquitectura |
| 📝 **Acta de Reunion** | Registros de reunion, seguimiento de decisiones, elementos de accion |
| 📊 **Informe Semanal** | Resumenes de trabajo, informes de progreso de proyectos |
| 📖 **README** | Documentacion de proyectos, introducciones de codigo abierto |
| 📒 **Notas** | Notas de estudio, organizacion del conocimiento |
| 📽️ **Presentacion** | Presentaciones de diapositivas, materiales de informes |

Haz clic en el boton de plantillas de la barra de herramientas y selecciona la plantilla deseada para crear un documento rapidamente.

### 📤 Guia de Exportacion

Exporta tu contenido editado en multiples formatos:

- **Exportar HTML**: Genera un archivo HTML independiente con estilos completos, listo para compartir
- **Exportar PDF**: Exporta como documento PDF mediante la funcion de impresion del navegador
- **Exportar Markdown**: Guarda el archivo `.md` original

### 🔍 Buscar y Reemplazar

- Presiona `Ctrl + H` para abrir el panel de busqueda y reemplazo
- Soporta busqueda exacta y reemplazo por lotes
- Resalta todos los resultados coincidentes
- Alternancia de busqueda sensible/no sensible a mayusculas y minusculas

---

## 💡 Filosofia de Diseno y Hoja de Ruta

### 🏗️ Principios de Diseno

MarkFlow Studio sigue estos principios de diseno centrales:

- **Minimalismo** — Enfoque en la experiencia de edicion central en lugar de acumulacion de funciones
- **Cero Barrera** — Sin necesidad de conocimientos tecnicos. Descarga y usa inmediatamente
- **Offline Primero** — Sin dependencia de red. Los datos permanecen completamente locales
- **Mejora Progresiva** — Funciones centrales solidas con capacidades avanzadas anadidas incrementalmente

### 🔧 Decisiones Tecnologicas

| Decision | Justificacion |
|----------|---------------|
| **HTML/CSS/JS Puro** | Cero dependencias de compilacion, doble clic para ejecutar, barrera de entrada minima |
| **Sin Frameworks** | Evitar la inflacion causada por frameworks, mantener huella ultraligera |
| **Sin Electron** | Evitar cientos de MB de runtime, mantener inicio instantaneo |
| **Persistencia localStorage** | Sin necesidad de backend, datos almacenados completamente en el cliente |
| **Parser Personalizado** — Sin dependencias externas, completamente controlable, soporta personalizacion profunda

### 🗺️ Hoja de Ruta

- [ ] 📐 **Mas Formatos de Exportacion** — Soporte para DOCX, EPUB y mas
- [ ] 🔌 **Sistema de Plugins** — Extensiones personalizadas y plugins de terceros
- [ ] 📊 **Navegacion de Esquema** — Arbol de esquema basado en encabezados para salto rapido
- [ ] 🖼️ **Carga de Imagenes Arrastrar y Soltar** — Arrastra imagenes directamente al editor
- [ ] 📱 **Soporte PWA** — Caching offline, instalable en el escritorio
- [ ] 🌐 **UI Multilingue** — Interfaces en ingles, japones y otros idiomas
- [ ] 🔄 **Historial de Versiones** — Gestion de versiones local con deshacer/rehacer a cualquier estado historico
- [ ] 📝 **Edicion Colaborativa** — Colaboracion en tiempo real multiusuario via WebRTC

### 🤝 Contribuciones de la Comunidad

Damos la bienvenida a contribuciones en las siguientes areas:

- 🐛 Correcciones de bugs e informes de problemas
- 🌍 Nuevas traducciones de idiomas y localizacion
- 🎨 Nuevos disenos de temas y esquemas de color
- 📋 Contribuciones de nuevas plantillas de documento
- 📖 Mejoras de documentacion y tutoriales
- 🔌 Desarrollo de plugins

---

## 📦 Guia de Empaquetado y Despliegue

### 🌐 Despliegue como Archivos Estaticos

MarkFlow Studio es un proyecto puramente estatico que se puede desplegar en **cualquier servidor web**:

```bash
# Copiar archivos del proyecto al directorio del servidor web
cp -r MarkFlow-Studio/* /var/www/html/markflow/
```

### 📄 Despliegue en GitHub Pages

1. Haz un fork de este repositorio en tu cuenta de GitHub
2. Ve a **Settings → Pages** del repositorio
3. Establece Source en la rama `main`, directorio en `/ (root)`
4. Haz clic en Save y espera a que se complete el despliegue
5. Visita `https://<your-username>.github.io/MarkFlow-Studio/`

### ⚙️ Ejemplo de Configuracion Nginx

```nginx
server {
    listen 80;
    server_name markflow.example.com;
    root /var/www/markflow;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Habilitar compresion gzip
    gzip on;
    gzip_types text/css application/javascript text/html;
}
```

### ⚙️ Ejemplo de Configuracion Apache

```apache
<VirtualHost *:80>
    ServerName markflow.example.com
    DocumentRoot /var/www/markflow
    DirectoryIndex index.html

    <Directory /var/www/markflow>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 🔗 Integracion en Proyectos Existentes

Integra MarkFlow Studio en tu proyecto web:

```html
<!-- Integrar via iframe -->
<iframe
    src="/markflow/index.html"
    width="100%"
    height="800px"
    frameborder="0">
</iframe>

<!-- O incluir estilos y scripts directamente -->
<link rel="stylesheet" href="/markflow/css/style.css">
<link rel="stylesheet" href="/markflow/css/themes.css">
<script src="/markflow/js/markdown-parser.js"></script>
<script src="/markflow/js/app.js"></script>
```

---

## 🤝 Guia de Contribucion

Damos la bienvenida y agradecemos todo tipo de contribuciones. Sigue este flujo de trabajo:

### 📋 Flujo de Contribucion

```
Fork → Clone → Branch → Commit → Push → Pull Request
```

1. **Fork** este repositorio
2. **Clone** localmente: `git clone https://github.com/<your-username>/MarkFlow-Studio.git`
3. Crea un **Branch**: `git checkout -b feature/your-feature-name`
4. **Commit** tus cambios: `git commit -m "feat: agregar descripcion de nueva funcion"`
5. **Push** al remoto: `git push origin feature/your-feature-name`
6. Envia un **Pull Request** describiendo tus cambios

### 📝 Estandares de Codigo

- Usa **sangria de 2 espacios**, sin tabulaciones
- Variables y funciones en **camelCase**
- Constantes en **UPPER_CASE**
- Nombres de clases CSS en **kebab-case**
- Manten el codigo limpio con comentarios necesarios

### 📮 Convencion de Mensajes de Commit

Sigue la especificacion [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

Descripciones de tipos:
feat:     Nueva funcion
fix:      Correccion de bug
docs:     Actualizacion de documentacion
style:    Formato de codigo
refactor: Refactorizacion
perf:     Optimizacion de rendimiento
test:     Relacionado con pruebas
chore:    Cambios en construccion/herramientas
```

---

## 📄 Licencia de Codigo Abierto

Este proyecto es de codigo abierto bajo la **[Licencia MIT](https://github.com/gitstq/MarkFlow-Studio/blob/main/LICENSE)**.

> MIT License
>
> Copyright (c) 2024 MarkFlow Studio Contributors
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq/MarkFlow-Studio">MarkFlow Studio Contributors</a>
</p>
