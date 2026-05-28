# 腰椎间盘突出落地页 — 开发计划书

**项目：**  腰椎间盘突出治疗落地页
**品牌：** (xxx.com)
**类型：** SEO 优化静态落地页
**技术栈：** GitHub Pages + 纯 HTML/CSS + 少量 Vanilla JS
**内容语言：** 英语
**日期：** 2026-05-28

---

## 1. 项目概述

### 1.1 项目名称

**腰椎间盘突出治疗 —  国际患者落地页**

### 1.2 项目目标

通过提供在中国快速诊断和平价治疗服务（几天内完成），吸引来自加拿大、英国、法国、美国、俄罗斯、东南亚和中东等地面临长期等待（1–6 个月）的国际腰椎间盘突出患者前来就医。

### 1.3 目标受众

| 细分人群      | 痛点                  | 需求        |
| --------- | ------------------- | --------- |
| 加拿大/英国患者  | 公立系统等待 6+ 个月；MRI 排队 | 快速诊断 + 手术 |
| 美国患者      | 高免赔额；保险拒赔           | 海外平价选项    |
| 俄罗斯/东南亚患者 | 专家资源有限              | 高质量治疗     |
| 中东患者      | 本地缺乏脊柱专科医生          | 医疗旅游便利性   |

**患者画像：** 慢性/重度腰椎间盘突出导致日常疼痛、活动受限、保守治疗失败；愿意出国寻求更快、更便宜的手术方案。

### 1.4 独特价值主张（UVP）

1. **剧烈疼痛影响生活** — 我们理解。腰椎间盘突出带来的疼痛是致残性的。
2. **本国等待时间：3–6 个月** — 公立医疗排队使您的治疗无限期推迟。
3. **中国：几天内完成诊断 + 治疗** — MRI、专家会诊和手术治疗一次性完成。
4. **相比西方国家费用更低** — 比美国/英国/加拿大手术费用节省 60–80%。

### 1.5 交付物

一个功能完整的静态网站，托管在 GitHub Pages 上，地址为 `https://xxx.com`（或专用子域名）。

---

## 2. SEO 策略

> **注意：** 在内容上线前应通过 [trends.google.com](https://trends.google.com) 验证关键词研究。以下框架基于医疗旅游 SEO 最佳实践，待获取真实搜索量数据后应更新。

### 2.1 关键词研究框架

#### 核心关键词（全球）

| 关键词                                       | 意图      | 难度  |
| ----------------------------------------- | ------- | --- |
| lumbar disc herniation treatment          | 资讯型/商业型 | 高   |
| herniated disc surgery abroad             | 商业型     | 中   |
| lumbar disc herniation surgery cost       | 商业型     | 中   |
| spinal disc herniation treatment overseas | 商业型     | 中低  |
| minimally invasive disc surgery           | 资讯型/商业型 | 中   |

#### 次级关键词（长尾 / FAQ）

| 关键词                                              | 意图  |
| ------------------------------------------------ | --- |
| lumbar disc herniation symptoms                  | 资讯型 |
| can lumbar disc herniation heal on its own       | 资讯型 |
| recovery time after lumbar disc surgery          | 资讯型 |
| best country for herniated disc surgery          | 商业型 |
| lumbar disc herniation surgery success rate      | 资讯型 |
| cost of microdiscectomy in China                 | 商业型 |
| medical tourism spine surgery                    | 商业型 |
| lumbar disc herniation treatment without surgery | 资讯型 |

#### 地区定向关键词

| 地区  | 关键词                                                                 |
| --- | ------------------------------------------------------------------- |
| 加拿大 | lumbar disc surgery Canada wait time, herniated disc surgery Canada |
| 英国  | lumbar disc herniation NHS waiting list, spinal surgery UK          |
| 美国  | herniated disc surgery cost USA, spinal fusion cost                 |
| 俄罗斯 | грыжа поясничного отдела лечение（俄语变体）                              |
| 东南亚 | spinal disc herniation treatment Singapore/Thailand                 |
| 中东  | spinal disc herniation treatment Dubai/Saudi                        |

### 2.2 页面 SEO

#### 标题标签模板

```
[核心关键词] | 腰椎间盘突出出国治疗 | myMedVia
```

示例：`Lumbar Disc Herniation Surgery Abroad | Fast Treatment in China | myMedVia`

#### Meta 描述模板

```
正在遭受腰椎间盘突出的痛苦？几天内获得诊断和治疗——而不是等上数月。 为国际患者对接中国顶级脊柱外科医生。比西方医院节省 60-80%。免费咨询。
```

**字符数：** 155–160（Google 在约 155–160 字符处截断）

#### 标题层级（H1–H6）

```
H1: Lumbar Disc Herniation Treatment Abroad — Fast, Affordable Surgery in China
  H2: What Is Lumbar Disc Herniation?
  H2: Symptoms & Diagnosis
  H2: Treatment Options
    H3: Non-Surgical Treatments
    H3: Surgical Treatments (Microdiscectomy, Endoscopic, Fusion)
  H2: Why Choose China for Spine Surgery?
  H2: Treatment Timeline — From Arrival to Recovery
  H2: Cost Comparison: China vs. West
  H2: Patient Stories
  H2: Frequently Asked Questions
  H2: Start Your Treatment Journey
```

#### URL 结构

```
/
├── index.html                 (首页)
├── about.html                 (关于 myMedVia)
├── services.html              (服务概述)
├── treatment/
│   └── lumbar-disc-herniation.html  (主落地页)
│   ├── symptoms.html
│   ├── treatment-options.html
│   ├── cost.html
│   └── recovery.html
├── faq.html                   (FAQ 页面)
├── contact.html               (联系表单)
├── blog/                      (医疗博客文章)
│   ├── index.html
│   └── 2026-06-01-lumbar-disc-herniation-basics.html
├── sitemap.xml
└── robots.txt
```

### 2.3 技术 SEO

#### Schema 标记（JSON-LD）

**MedicalCondition Schema**（主治疗页面）：

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Lumbar disc herniation",
  "alternateName": ["Herniated disc", "Slipped disc", "Protruded disc"],
  "code": "ICD-10: M51.2",
  "affectedBodyLocation": {
    "@type": "BodyLocation",
    "name": "Lumbar spine (lower back)"
  },
  "signOrSymptom": [
    {"@type": "MedicalSignOrSymptom", "name": "Lower back pain"},
    {"@type": "MedicalSignOrSymptom", "name": "Sciatica"},
    {"@type": "MedicalSignOrSymptom", "name": "Numbness in legs"},
    {"@type": "MedicalSignOrSymptom", "name": "Muscle weakness"}
  ],
  "possibleTreatment": [
    {"@type": "MedicalProcedure", "name": "Microdiscectomy"},
    {"@type": "MedicalProcedure", "name": "Endoscopic discectomy"},
    {"@type": "MedicalProcedure", "name": "Spinal fusion"}
  ],
  "description": "Lumbar disc herniation occurs when the soft center of a spinal disc pushes through a tear in the tougher exterior casing, pressing on nerves and causing pain."
}
```

**FAQPage Schema**（FAQ 页面）：

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long is the wait time for lumbar disc surgery in my country?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Canada and the UK, wait times for non-emergency spine surgery average 6-12 months..."
      }
    }
  ]
}
```

**BreadcrumbList Schema**（子页面）：

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://xxx.com"},
    {"@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://xxx.com/treatment/"},
    {"@type": "ListItem", "position": 3, "name": "Lumbar Disc Herniation", "item": "https://xxx.com/treatment/lumbar-disc-herniation.html"}
  ]
}
```

**MedicalOrganization Schema**（全站）：

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "myMedVia",
  "url": "https://xxx.com",
  "description": "Cross-border medical acceleration service connecting international patients with top spine surgeons in China.",
  "areaServed": "Worldwide"
}
```

#### 网站地图（`sitemap.xml`）

- 包含所有页面、博客和治疗子页面
- 静态页面设置 `changefreq` 为 `monthly`，博客设置 `weekly`
- 设置 `priority`：首页 1.0，治疗页面 0.9，博客 0.7，FAQ 0.8

#### robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://xxx.com/sitemap.xml
```

#### 规范 URL

每个页面必须包含：

```html
<link rel="canonical" href="https://xxx.com/treatment/lumbar-disc-herniation.html" />
```

### 2.4 内容策略

| 页面    | 内容重点         | 目标关键词      |
| ----- | ------------ | ---------- |
| 首页    | UVP、信任信号、CTA | 品牌 + 核心关键词 |
| 治疗落地页 | 综合病症概述       | 核心关键词      |
| 症状    | 教育性质，早期患者    | 长尾资讯关键词    |
| 治疗选项  | 所有手术/非手术选项   | 次级关键词      |
| 费用    | 价格表、对比图表     | 费用 + 地区关键词 |
| 康复    | 时间线、提示、术后护理  | 康复 + 长尾    |
| 关于    | 故事、团队、医院     | 品牌 + 信任    |
| FAQ   | 患者常见问题       | FAQ schema |
| 博客    | 医学教育、患者历程故事  | 资讯型 + 次级   |

**博客文章思路（12 个月日历）：**

1. "Lumbar Disc Herniation vs. Cervical: What's the Difference?"
2. "6 Signs You Might Need Spinal Surgery"
3. "Microdiscectomy Recovery: A Week-by-Week Guide"
4. "Medical Tourism in China: A Complete Patient Guide"
5. "Why Canadians Are Traveling Abroad for Spine Surgery"
6. "Minimally Invasive vs. Open Spine Surgery: Pros and Cons"
7. "Questions to Ask Your Spine Surgeon Before Surgery"
8. "How to Prepare for Medical Travel to China"
9. "Understanding MRI Results for Disc Herniation"
10. "Insurance Coverage for International Medical Treatment"
11. "Recovery After Spinal Fusion: What to Expect"
12. "Top 5 Countries for Affordable Spine Surgery (2026)"

### 2.5 内部链接结构

```
首页
├── CTA → /treatment/lumbar-disc-herniation.html
├── Nav → 所有主页面
└── Footer → 关于、服务、FAQ、联系

治疗落地页
├── 症状板块 → /treatment/symptoms.html
├── 治疗板块 → /treatment/treatment-options.html
├── 费用板块 → /treatment/cost.html
├── 康复板块 → /treatment/recovery.html
└── CTA → /contact.html

FAQ 页面
└── 链接到所有相关治疗子页面
```

### 2.6 Core Web Vitals 优化

| 指标               | 目标      | 优化方式                |
| ---------------- | ------- | ------------------- |
| LCP（最大内容绘制）      | < 2.5s  | 预加载主图，最小化渲染阻塞 CSS   |
| CLS（累计布局偏移）      | < 0.1   | 为图片设置明确宽高           |
| FID/INP（交互到下次绘制） | < 100ms | 最小化 JavaScript      |
| TTFB（首字节时间）      | < 600ms | GitHub Pages CDN 处理 |

**具体措施：**

- 内联关键 CSS 到 `<head>`
- 图片懒加载：`loading="lazy"`
- 使用 WebP 图片并有回退方案
- 避免外部渲染阻塞脚本
- Google Fonts 使用 `display: swap`

---

## 3. 网站架构

### 3.1 目录结构（纯静态 HTML）

```
lumbar-disc-herniation-site/
├── index.html                      # 首页
├── about.html                      # 关于页面
├── services.html                   # 服务页面
├── faq.html                        # FAQ 页面
├── contact.html                    # 联系页面
├── treatment/
│   ├── lumbar-disc-herniation.html # 主治疗落地页
│   ├── symptoms.html               # 症状子页面
│   ├── treatment-options.html      # 治疗选项子页面
│   ├── cost.html                   # 费用子页面
│   └── recovery.html              # 康复子页面
├── blog/
│   ├── index.html                  # 博客列表
│   └── 2026-06-01-lumbar-disc-herniation-basics.html
├── assets/
│   ├── css/
│   │   ├── main.css                # 主样式表
│   │   └── components.css          # 组件样式
│   ├── js/
│   │   └── main.js                 # 客户端 JavaScript
│   └── images/                     # 图片资源
├── sitemap.xml                     # 网站地图
├── robots.txt                     # 爬虫规则
└── README.md                       # 项目说明
```

### 3.2 页面与导航

#### 顶部导航

| 链接         | 页面                                       | 描述     |
| ---------- | ---------------------------------------- | ------ |
| Treatments | `/treatment/lumbar-disc-herniation.html` | 所有治疗页面 |
| About      | `/about.html`                            | 故事     |
| FAQ        | `/faq.html`                              | 患者问题   |
| Contact    | `/contact.html`                          | 咨询请求   |

#### 首页版块（站点地图）

```
├── Hero（H1 + UVP + CTA）
├── Problem Statement（患者寻求海外治疗的原因）
├── How It Works（3 步流程）
├── Treatment Options Overview
├── Why China（信任信号 + 统计数据）
├── Cost Comparison Table
├── Partner Hospitals
├── Patient Testimonials
├── FAQ Preview（前 5 条）
└── Final CTA + Contact Form
```

---

## 4. 开发任务列表

### 阶段 1：基础搭建（第 1–2 天）

- [ ] **T1.1** 创建项目目录结构
- [ ] **T1.2** 创建 `index.html` 基础 HTML 模板
- [ ] **T1.3** 创建 `assets/css/main.css` 响应式 CSS 框架
- [ ] **T1.4** 创建共享的 CSS 组件样式
- [ ] **T1.5** 创建 `assets/js/main.js` 基础 JavaScript
- [ ] **T1.6** 建立 GitHub 仓库并启用 GitHub Pages
- [ ] **T1.7** 创建 `robots.txt` 和 `sitemap.xml`

### 阶段 2：样式与设计系统（第 3–4 天）

- [ ] **T2.1** 设置 CSS 变量（颜色、字体、间距）
- [ ] **T2.2** 构建响应式 CSS 框架
- [ ] **T2.3** 创建移动端优先导航（汉堡菜单）
- [ ] **T2.4** 实现 hero 组件
- [ ] **T2.5** 构建 CTA 组件
- [ ] **T2.6** 创建症状卡片组件
- [ ] **T2.7** 创建治疗卡片组件
- [ ] **T2.8** 构建费用对比表组件
- [ ] **T2.9** 创建时间线步骤组件
- [ ] **T2.10** 添加患者证言卡片组件
- [ ] **T2.11** 构建联系表单组件
- [ ] **T2.12** 确保移动端响应式（在 375px、768px、1280px 测试）
- [ ] **T2.13** 为所有图片设置 `loading="lazy"` 和响应式 image srcset

### 阶段 3：核心页面（第 5–8 天）

- [ ] **T3.1** 构建首页（`index.html`）
  - Hero 含 H1、UVP、主要 CTA
  - How it works（3 步）
  - 治疗概览卡片
  - 信任信号/统计数据
  - 内嵌联系表单
- [ ] **T3.2** 构建关于页面（`about.html`）
  -  故事
  - 使命和价值观
  - 合作医院简介
  - 团队/创始人板块
- [ ] **T3.3** 构建服务页面（`services.html`）
  - 服务内容列表
  - 患者历程步骤
  -  负责的内容（签证、翻译、交通、住宿）
- [ ] **T3.4** 构建联系页面（`contact.html`）
  - 联系表单（姓名、邮箱、国家、病情、留言）
  - 直接联系信息（邮箱、WhatsApp）
  - 办公室/代理地点信息
- [ ] **T3.5** 构建 FAQ 页面（`faq.html`）
  - 手风琴式 FAQ
  - FAQ schema 标记
  - 链接到相关治疗子页面

### 阶段 4：治疗落地页面（第 9–13 天）

- [ ] **T4.1** 构建主治疗落地页（`treatment/lumbar-disc-herniation.html`）
  - H1 含核心关键词
  - MedicalCondition schema
  - BreadcrumbList schema
  - 按标题层级（第 2.2 节）包含所有内容板块
  - 全文贯穿 CTA 按钮
  - 费用对比表
  - 康复时间线
  - 到子页面的内部链接
- [ ] **T4.2** 构建症状子页面（`treatment/symptoms.html`）
  - 症状列表及描述
  - 何时就医
  - 诊断流程（MRI、CT）
  - 内部链接回治疗页面
- [ ] **T4.3** 构建治疗选项子页面（`treatment/treatment-options.html`）
  - 非手术治疗选项（理疗、药物、注射）
  - 手术治疗选项（显微椎间盘切除术、内镜、融合、人工椎间盘）
  - 对比表
- [ ] **T4.4** 构建费用页面（`treatment/cost.html`）
  - 按手术类型分类的费用明细
  - 对比表（中国 vs. 美国/英国/加拿大）
  -  套餐包含内容
  - 保险/费用 FAQ
- [ ] **T4.5** 构建康复页面（`treatment/recovery.html`）
  - 按周康复时间线
  - 术后说明
  - 术后护理和物理治疗
  - 随访计划

### 阶段 5：SEO 实施（第 14–15 天）

- [ ] **T5.1** 为所有页面添加 JSON-LD schema 标记（MedicalCondition、FAQPage、BreadcrumbList、MedicalOrganization）
- [ ] **T5.2** 验证 `sitemap.xml` 包含所有页面
- [ ] **T5.3** 为所有页面设置规范 URL
- [ ] **T5.4** 配置 Open Graph 元标签（og:title、og:description、og:image）
- [ ] **T5.5** 添加 Twitter Card 元标签
- [ ] **T5.6** 使用 Google Rich Results Test 验证所有 schema 标记
- [ ] **T5.7** 在 Google Search Console 中注册网站
- [ ] **T5.8** 向 Google Search Console 提交网站地图

### 阶段 6：博客与内容（第 16–20 天）

- [ ] **T6.1** 创建博客列表页面（`blog/index.html`）
- [ ] **T6.2** 编写并发布前 3 篇博客文章（第 2.4 节内容日历中的）
- [ ] **T6.3** 添加博客文章 schema（Article 标记）
- [ ] **T6.4** 创建博客文章页面模板

### 阶段 7：性能与打磨（第 21–22 天）

- [ ] **T7.1** 优化/压缩所有图片（WebP + JPEG 回退）
- [ ] **T7.2** 为主图添加 `preload`
- [ ] **T7.3** 验证 Core Web Vitals（LCP < 2.5s，CLS < 0.1，FID < 100ms）
- [ ] **T7.4** 测试移动端响应式（Chrome DevTools 设备模式）
- [ ] **T7.5** 添加 404 页面（`404.html`）并提供有用链接
- [ ] **T7.6** 验证 SSL/HTTPS 通过 GitHub Pages 强制执行

### 阶段 8：QA 与上线（第 23 天）

- [ ] **T8.1** 完整 QA 检查清单审查（见第 8 节）
- [ ] **T8.2** 修复所有损坏链接
- [ ] **T8.3** 测试联系表单提交
- [ ] **T8.4** 通过 Google Rich Results Test 进行最终 schema 验证
- [ ] **T8.5** 推送到 GitHub — 触发 GitHub Pages 部署
- [ ] **T8.6** 验证网站在 GitHub Pages URL 上线
- [ ] **T8.7** 向 Google Search Console 提交网站以便索引

---

## 5. 技术实现

### 5.1 HTML 模板结构

每个页面应包含标准头部：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | myMedVia</title>
  <meta name="description" content="Page description (150-160 chars)">
  <link rel="canonical" href="https://xxx.com/page.html">
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Page description">
  <meta property="og:image" content="https://xxx.com/assets/images/og-image.jpg">
  <meta property="og:url" content="https://xxx.com/page.html">
  <meta property="og:type" content="website">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script type="application/ld+json">
  <!-- JSON-LD Schema here -->
  </script>
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

### 5.2 CSS 架构

使用 CSS 自定义属性（变量）实现设计系统：

```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #004499;
  --color-accent: #00a8e8;
  --color-text: #333333;
  --color-bg: #ffffff;
  --color-bg-alt: #f5f5f5;
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --max-width: 1200px;
  --border-radius: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### 5.3 GitHub Pages 部署

**部署方式：** 直接推送 HTML 文件到 GitHub Pages

1. 在 GitHub 创建仓库 `lumbar-disc-herniation-site`
2. 启用 GitHub Pages（Settings → Pages → Source: Deploy from branch, branch: main）
3. 将所有文件推送到 `main` 分支
4. 网站自动在 `https://username.github.io/lumbar-disc-herniation-site/` 上线

**或使用自定义域名：**

- 在 DNS 中配置 CNAME 记录指向 `username.github.io`
- 在仓库根目录添加 `CNAME` 文件（内容为 `xxx.com`）
- 在 GitHub Pages 设置中启用自定义域名

### 5.4 响应式断点

| 断点  | 宽度         | 设计目标       |
| --- | ---------- | ---------- |
| 移动端 | < 640px    | 单列、叠加板块    |
| 平板  | 640–1024px | 双列网格、压缩导航  |
| 桌面  | > 1024px   | 完整布局、侧边栏元素 |

---

## 6. 内容要求

### 6.1 关键页面及内容重点

#### 首页

- **目标：** 将访问者转化为咨询请求
- **内容：** Hero UVP → How it works（3 步）→ Why China → 费用节省 → 证言 → CTA
- **语气：** 共情、自信、行动导向

#### 治疗落地页（`/treatment/lumbar-disc-herniation.html`）

- **目标：** 综合病症权威；捕获高意图搜索流量
- **内容：** 完整病症概述、所有治疗选项、费用、康复、FAQ
- **语气：** 教育性、安抚、循证

#### 症状子页面

- **目标：** 资讯类查询的 SEO；捕获处于研究早期阶段的患者
- **内容：** 症状列表、严重程度指南、就医时机、诊断流程
- **语气：** 清晰、信息丰富、不引起恐慌

#### 费用页面

- **目标：** 消除价格异议；预先筛选患者
- **内容：** 透明价格表、节省对比、包含内容
- **语气：** 诚实、透明、价值导向

#### 关于页面

- **目标：** 建立信任；克服对医疗旅游的怀疑
- **内容：**  故事、资质、合作医院认证、团队
- **语气：** 个性化、专业、透明

#### FAQ 页面

- **目标：** 消除异议；捕获长尾搜索
- **内容：** 20+ 问题覆盖：医疗（症状、手术、康复）、物流（签证、旅行、住宿）、费用
- **语气：** 以患者为中心、详尽、安抚

### 6.2 语气与措辞指南

| 做法                   | 避免                  |
| -------------------- | ------------------- |
| 使用"你/您的" — 以患者为中心的语言 | 避免在正文使用"患者"         |
| 表达共情：承认疼痛和挫败感        | 避免冷漠或漠不关心           |
| 对结果和专业知识自信           | 避免夸大成功率             |
| 用通俗语言解释医学术语（首次定义）    | 避免使用未解释的医学术语        |
| 包含具体数字和时间线           | 避免模糊（"一些时间"、"许多患者"） |
| 对国际受众保持文化敏感性         | 避免偏向任何一个国籍          |
| 使用主动语态               | 避免过度使用被动语态          |
| 包含信任信号（认证、证言）        | 避免捏造或夸大证言           |

### 6.3 医学内容免责声明要求

每个含医疗内容的页面必须包含免责声明。在页脚和治疗页面上添加。

**标准免责声明文字：**

```
医学免责声明：本网站提供的内容仅供信息和教育目的，不旨在替代专业医疗建议、诊断或治疗。如有任何关于医疗状况的问题，请始终咨询您的医生或合格的医疗提供者。 不推荐或认可任何特定的医疗程序、治疗或医疗提供者。治疗结果因个人患者状况而异。
```

---

## 7. 技术实现注意事项

### 7.1 移动端响应式

**响应式样式框架：**

- **纯 CSS（自定义）** — 最轻量；推荐用于静态站点

### 7.2 SSL/HTTPS

- GitHub Pages 通过 Let's Encrypt 自动提供 SSL
- 在 GitHub Pages 设置中强制启用 HTTPS
- 如使用自定义域名：通过 Cloudflare 配置或使用 GitHub Pages 自动 SSL
- 将所有 HTTP 重定向到 HTTPS

### 7.3 性能预算

| 资源类型        | 目标大小             |
| ----------- | ---------------- |
| HTML 页面（完整） | < 150 KB         |
| CSS（总计）     | < 50 KB          |
| JS（总计）      | < 50 KB          |
| 主图          | < 200 KB（WebP）   |
| 其他图片        | < 100 KB/张（WebP） |
| 页面总重（首次加载）  | < 1 MB           |

### 7.4 外部依赖（保持最小）

| 依赖            | 用途      | 说明                            |
| ------------- | ------- | ----------------------------- |
| Google Fonts  | 排版      | 使用 `display=swap` 加载；限制 2 种字重 |
| Unsplash 图片   | Hero/图片 | 直接 URL 或本地副本                  |
| Plausible（分析） | 分析      | 隐私友好（GDPR 合规）                 |

---

## 8. QA 检查清单

### 8.1 SEO 验证

- [ ] 每个页面存在标题标签且唯一
- [ ] 每个页面存在 meta 描述（150–160 字符）
- [ ] 每个页面存在 H1 且包含核心关键词
- [ ] H2–H6 层级逻辑清晰，符合第 2.2 节结构
- [ ] 所有图片有 `alt` 属性
- [ ] 每个页面设置了规范 URL
- [ ] `sitemap.xml` 存在且包含所有页面
- [ ] `robots.txt` 存在且允许爬取
- [ ] Schema 标记（JSON-LD）在 Google Rich Results Test 中验证通过
  - [ ] 治疗落地页上有 MedicalCondition schema
  - [ ] FAQ 页面上有 FAQPage schema
  - [ ] 所有子页面上有 BreadcrumbList schema
  - [ ] 全站有 MedicalOrganization schema
- [ ] 所有关键页面有 Open Graph 元标签
- [ ] 页面间无重复 meta 描述
- [ ] URL 结构符合第 2.2 节
- [ ] 所有内部链接可正常访问
- [ ] 无孤立页面（网站地图/导航中没有入站链接的页面）
- [ ] 移动端友好（Google Mobile-Friendly Test 通过）
- [ ] 无外部损坏链接（使用链接检查器检查）

### 8.2 内容质量

- [ ] 所有内容为原创（无抄袭其他网站）
- [ ] 所有医疗内容页面有医学免责声明
- [ ] 所有事实性声明（成功率、费用、等待时间）有来源/参考文献
- [ ] 治疗选项描述中立（非手术 → 手术递进）
- [ ] 无具体结果的保证
- [ ] 证言真实且标注为患者经历
- [ ] 联系信息准确且最新
- [ ] 所有外语术语有英文翻译
- [ ] 已检查拼写和语法（使用 Grammarly 或 Hemingway App）
- [ ] 内容英语阅读自然；无机器翻译痕迹
- [ ] 文化敏感性检查：内容不冒犯任何目标国籍

### 8.3 性能

- [ ] 所有页面通过 Google PageSpeed Insights（移动端）：
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1
  - [ ] FID < 100ms
- [ ] 所有图片使用 WebP 格式或适当压缩
- [ ] 折叠下方图片有 `loading="lazy"`
- [ ] 主图有 `width` 和 `height` 属性（防止 CLS）
- [ ] 无渲染阻塞 CSS（关键 CSS 内联或预加载）
- [ ] Google Fonts 使用 `display=swap` 加载
- [ ] 无未使用的 CSS 或 JavaScript
- [ ] TTFB < 600ms（通过 GitHub Pages CDN）

### 8.4 功能性

- [ ] 导航菜单在移动端正常工作（汉堡 → 滑出）
- [ ] 所有导航链接正确跳转到对应页面
- [ ] 联系表单提交成功（用真实数据测试）
- [ ] 所有手风琴/FAQ 组件正常展开/收起
- [ ] 所有页内平滑滚动锚链接正常工作
- [ ] 404 页面正常加载并提供导航选项
- [ ] Favicon 在浏览器标签页正常显示
- [ ] 网站在以下浏览器中正确渲染：Chrome、Firefox、Safari、Edge
- [ ] 网站在以下宽度正确渲染：320px、375px、768px、1280px、1920px

### 8.5 安全与合规

- [ ] 强制启用 HTTPS（无混合内容警告）
- [ ] 代码中无硬编码凭证或密钥
- [ ] 表单提交使用 HTTPS
- [ ] GDPR 合规：如使用分析工具则需 Cookie 同意（或使用 Plausible 无 Cookie）
- [ ] 不收集患者数据超出表单中的姓名/邮箱/病情范围
- [ ] 存在隐私政策页面

---

## 附录 A：文件清单

| 文件路径                                                 | 用途     |
| ---------------------------------------------------- | ------ |
| `index.html`                                         | 首页     |
| `about.html`                                         | 关于页面   |
| `services.html`                                      | 服务页面   |
| `faq.html`                                           | FAQ 页面 |
| `contact.html`                                       | 联系页面   |
| `treatment/lumbar-disc-herniation.html`              | 主治疗落地页 |
| `treatment/symptoms.html`                            | 症状子页面  |
| `treatment/treatment-options.html`                   | 治疗选项页面 |
| `treatment/cost.html`                                | 费用页面   |
| `treatment/recovery.html`                            | 康复页面   |
| `blog/index.html`                                    | 博客列表   |
| `blog/2026-06-01-lumbar-disc-herniation-basics.html` | 博客文章   |
| `assets/css/main.css`                                | 主样式表   |
| `assets/css/components.css`                          | 组件样式   |
| `assets/js/main.js`                                  | 客户端 JS |
| `assets/images/`                                     | 图片资源   |
| `sitemap.xml`                                        | 网站地图   |
| `robots.txt`                                         | 爬虫规则   |
| `404.html`                                           | 404 页面 |
| `CNAME`                                              | 自定义域名  |

---

*文档编制者：高级项目经理智能体 —  腰椎间盘突出项目*
*版本：2.0 | 日期：2026-05-28*
*备注：从 Jekyll改为纯 HTML/CSS 静态站点*