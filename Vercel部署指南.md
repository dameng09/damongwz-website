# 大梦贸易官网 · Vercel 上线部署指南

**域名：** damongwz.com
**托管平台：** Vercel（免费，自动HTTPS）
**预计耗时：** 30分钟内完成

---

## 第一步：注册 Vercel 账号

1. 打开浏览器，访问 **https://vercel.com**
2. 点击右上角 **"Sign Up"**
3. 选择 **"Continue with GitHub"**（推荐，方便后续更新网站）
   - 如果没有 GitHub 账号，先注册一个：https://github.com
4. 授权 Vercel 访问你的 GitHub 账号

---

## 第二步：上传网站文件到 GitHub

### 方法A：直接在 GitHub 网页上传（推荐，简单）

1. 登录 GitHub：**https://github.com**
2. 点击右上角 **"+"** → **"New repository"**
3. 填写：
   - Repository name：`damongwz-website`
   - 选择 **Public**（公开，免费）
   - 点击 **"Create repository"**
4. 点击 **"uploading an existing file"**
5. 将以下文件全部拖入上传区域：
   ```
   website/
   ├── index.html        ← 必须上传
   ├── sitemap.xml       ← 必须上传
   ├── vercel.json       ← 必须上传
   ├── css/
   │   └── style.css     ← 必须上传
   └── js/
       └── main.js       ← 必须上传
   ```
6. 点击 **"Commit changes"** 完成上传

---

## 第三步：在 Vercel 部署网站

1. 打开 **https://vercel.com/dashboard**
2. 点击 **"Add New Project"**
3. 选择 **"Import Git Repository"**
4. 找到刚刚创建的 `damongwz-website` 仓库，点击 **"Import"**
5. 配置页面：
   - Framework Preset：选择 **"Other"**（静态网站）
   - Root Directory：保持默认 `./`
   - 其余保持默认
6. 点击 **"Deploy"**
7. 等待约 30秒，看到 **🎉 "Congratulations!"** 表示部署成功

---

## 第四步：绑定自定义域名 damongwz.com

### 在 Vercel 添加域名

1. 进入你的项目控制台，点击 **"Settings"** → **"Domains"**
2. 输入域名：`damongwz.com`，点击 **"Add"**
3. 再添加：`www.damongwz.com`，点击 **"Add"**
4. Vercel 会显示需要添加的 **DNS 记录**，记下这些记录

### 在域名商添加 DNS 解析

> 去购买域名的地方（阿里云/腾讯云/GoDaddy等）操作

**方法：在域名控制台 → DNS管理 → 添加以下记录：**

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| A | @ | `76.76.21.21`（Vercel IP）|
| CNAME | www | `cname.vercel-dns.com` |

> ⚠️ 具体记录值以 Vercel 控制台显示的为准

**等待时间：** DNS 生效通常需要 5分钟 ~ 24小时（大多数 5分钟内）

### 验证绑定成功

在 Vercel 域名管理页，看到绿色 ✅ 表示成功。
浏览器输入 **https://www.damongwz.com** 可以正常访问。

---

## 第五步：配置询价表单邮件接收（Formspree）

> 当前表单提交后，客户的询价信息要能发送到你的邮箱

1. 打开 **https://formspree.io**，点击 **"Sign Up"**（免费版每月50条）
2. 登录后点击 **"New Form"**
3. 填写你接收询价的邮箱（如：sales@damongwz.com 或 你的个人邮箱）
4. 系统会生成一个 **Form ID**，格式类似：`https://formspree.io/f/xabc1234`
5. 打开 `website/index.html`，找到这一行：
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   把 `YOUR_FORM_ID` 替换为你的真实 ID，如：`xabc1234`
6. 重新上传 `index.html` 到 GitHub（覆盖旧文件）
7. Vercel 会自动重新部署（约1分钟）

**测试：** 填写官网询价表单提交一次，检查邮箱是否收到询价邮件 ✅

---

## 第六步：提交搜索引擎收录

### Google Search Console（必须做）

1. 打开 **https://search.google.com/search-console**
2. 用 Google 账号登录（没有就注册一个）
3. 点击 **"添加资源"** → 选择 **"网址前缀"**
4. 输入：`https://www.damongwz.com`
5. 按照提示验证域名所有权（推荐：HTML 文件验证）
6. 验证成功后，点击 **"站点地图"** → 提交：
   ```
   https://www.damongwz.com/sitemap.xml
   ```
7. 完成！Google 会在 1-4 周内开始收录你的网站

### 百度站长平台（国内客户）

1. 打开 **https://ziyuan.baidu.com**
2. 登录百度账号，添加网站
3. 提交 sitemap：`https://www.damongwz.com/sitemap.xml`

---

## 完成清单

上线后逐一打勾：

- [ ] Vercel 部署成功（看到绿色域名状态）
- [ ] https://www.damongwz.com 可以正常访问
- [ ] HTTPS 锁标志正常显示（证书有效）
- [ ] 询价表单测试成功（收到测试邮件）
- [ ] 已提交 Google Search Console
- [ ] 已提交 sitemap.xml

---

## 🆘 遇到问题？

直接告诉小梦，我来帮你解决：

- DNS 解析不生效 → 检查记录值是否正确
- Vercel 部署失败 → 发截图给我
- 表单收不到邮件 → 检查 Form ID 是否替换
- 域名访问报错 → 告诉我错误信息

---

*生成时间：2026-04-03 | 适用域名：damongwz.com*
