# 网站部署说明

## 概述

本项目是一个静态网站，用于宣传腰椎间盘突出症医疗服务。

**网站地址**: https://xiebingcheng.github.io/lumbar-disc-herniation-site2/

## 目录结构

```
lumbar-disc-herniation/
├── index.html              # 首页
├── about.html              # 关于我们
├── services.html           # 服务介绍
├── faq.html              # 常见问题
├── contact.html           # 联系方式
├── news.html             # 新闻列表页（JS分页）
├── 404.html              # 404错误页
├── news/                  # 新闻文章目录
│   ├── index.html          # 新闻子页面入口
│   └── *.html             # 40篇新闻文章
├── treatment/              # 治疗详情目录
│   ├── lumbar-disc-herniation.html
│   ├── symptoms.html
│   ├── treatment-options.html
│   ├── cost.html
│   └── recovery.html
└── assets/               # 静态资源
    ├── css/
    └── js/
```

## 部署流程

### 方式一：GitHub Pages（推荐）

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "提交信息"
   git push origin main
   ```

2. **等待自动部署**
   - GitHub Actions 会自动检测 main 分支的推送
   - 部署通常需要 1-2 分钟
   - 访问 `https://xiebingcheng.github.io/lumbar-disc-herniation-site2/`

### 方式二：手动部署到 GitHub Pages

1. 在 GitHub 仓库 Settings → Pages
2. Source 选择 `Deploy from a branch`
3. Branch 选择 `main` 和 `/ (root)`
4. Save

## 新闻系统

### 文章结构

- **列表页**: `news.html` - 包含40篇文章，JavaScript 分页（每页10篇）
- **文章页**: `news/*.html` - 各篇新闻文章详情页

### 添加新文章

1. 在 `news/` 目录创建新 HTML 文件
2. 在 `news.html` 的 `articles` 数组中添加文章信息：
   ```javascript
   { date: '日期', category: '分类', title: '标题', excerpt: '摘要', url: '链接' }
   ```
3. 文章会自动显示在列表中

### 修改分页数量

编辑 `news.html`，修改 `ARTICLES_PER_PAGE` 变量：
```javascript
const ARTICLES_PER_PAGE = 10;
```

## 本地预览

使用 Python 简易服务器：
```bash
cd lumbar-disc-herniation
python -m http.server 8080
```
访问 http://localhost:8080

或使用 VS Code 的 Live Server 扩展。

## Git 命令速查

```bash
# 查看状态
git status

# 添加所有更改
git add .

# 提交
git commit -m "你的提交信息"

# 推送到 GitHub
git push origin main

# 拉取最新代码
git pull origin main
```

## 注意事项

- 所有 HTML 文件中的相对路径已正确配置
- `news.html` 使用 JavaScript 动态加载文章，`file://` 协议下可能无法正常工作
- 推荐使用本地服务器或部署到 GitHub Pages 后测试
- 新闻分页使用 URL hash（#page1, #page2...）支持浏览器前进后退

## 仓库信息

- **仓库**: https://github.com/xiebingcheng/lumbar-disc-herniation-site2
- **分支**: main
- **部署**: GitHub Pages 自动部署
