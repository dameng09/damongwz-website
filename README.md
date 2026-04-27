# 大梦贸易官网 | Dameng Trading Website

## 项目简介
大梦（贸易）有限公司官方网站，展示硅油类原材料产品和服务。

## 技术栈
- HTML5
- CSS3（原生样式）
- JavaScript（原生）
- Font Awesome 6.4.0（图标库）

## 文件结构
```
website/
├── index.html          # 主页
├── css/
│   └── style.css       # 样式表
├── js/
│   └── main.js         # JavaScript交互
└── README.md           # 本文件
```

## 功能特性

### 已实现功能
- ✅ 响应式设计（支持桌面端、平板、手机）
- ✅ 平滑滚动导航
- ✅ 产品展示（6大产品系列）
- ✅ 应用领域展示
- ✅ 在线询价表单
- ✅ 移动端汉堡菜单
- ✅ 返回顶部按钮
- ✅ 滚动动画效果
- ✅ 活动导航链接

### 待开发功能
- ⏳ 后端API集成（表单提交）
- ⏳ 产品详情页
- ⏳ 英文版本（en/index.html）
- ⏳ 产品筛选功能
- ⏳ 在线客服/WhatsApp集成
- ⏳ SEO优化（Sitemap/Robots.txt）
- ⏳ 图片懒加载
- ⏳ 性能优化（压缩、CDN）

## 部署说明

### 本地预览
1. 用浏览器打开 `index.html`
2. 或使用Live Server（VSCode插件）

### 服务器部署
推荐部署平台：
- Netlify（免费，支持自定义域名）
- Vercel（免费，性能优秀）
- GitHub Pages（免费，支持Jekyll）
- 传统虚拟主机（cPanel/Plesk）

#### Netlify部署步骤
1. 将文件上传到GitHub仓库
2. 登录Netlify，导入GitHub仓库
3. 设置构建命令：`echo "No build needed"`
4. 设置发布目录：`website/`
5. 点击Deploy

#### Vercel部署步骤
1. 将文件上传到GitHub仓库
2. 登录Vercel，导入项目
3. 设置根目录：`website`
4. 点击Deploy

### 自定义配置
修改以下文件以个性化网站：
- `index.html` - 页面内容和结构
- `css/style.css` - 样式和颜色
- `js/main.js` - 交互逻辑

## SEO优化建议

1. **Meta标签**（已在index.html中配置）
   - 标题：大梦贸易 Dameng Trading | 专业硅油类原材料供应商
   - 描述：包含核心关键词
   - 关键词：silicone oil, dimethicone, 化妆品原料

2. **下一步优化**
   - 添加Sitemap.xml
   - 添加Robots.txt
   - 优化图片Alt标签
   - 创建Google Analytics账户
   - 提交到Google Search Console

## 自定义指南

### 修改公司信息
在 `index.html` 中搜索并替换：
- "大梦贸易" → 公司名称
- "info@damengtrading.com" → 邮箱
- "+86 20 1234 5678" → 电话
- 地址信息

### 修改产品信息
在 `index.html` 中找到产品区域（id="products"），修改：
- 产品名称
- 产品描述
- 技术规格

### 修改颜色主题
在 `css/style.css` 中修改CSS变量：
```css
:root {
    --primary-color: #1e88e5;      /* 主色 */
    --secondary-color: #1565c0;     /* 次色 */
    --accent-color: #ff6f00;        /* 强调色 */
}
```

### 添加新产品
复制 `product-item` 块并修改内容：
```html
<div class="product-item">
    <div class="product-icon">
        <i class="fas fa-xxx"></i>
    </div>
    <h3>产品名称</h3>
    <p>Product Name English</p>
    <p class="product-desc">产品描述...</p>
    <ul class="product-specs">
        <li><i class="fas fa-check"></i> 规格1</li>
        <li><i class="fas fa-check"></i> 规格2</li>
    </ul>
    <a href="#contact" class="btn-link">询价 <i class="fas fa-chevron-right"></i></a>
</div>
```

## 浏览器兼容性
- Chrome/Edge（推荐）
- Firefox
- Safari
- Opera

## 性能优化建议
1. 压缩图片（使用TinyPNG或ImageOptim）
2. 启用Gzip压缩
3. 使用CDN加速（推荐Cloudflare）
4. 合并CSS/JS文件（减少HTTP请求）

## 联系方式
如有问题，请联系：
- 邮箱：info@damengtrading.com
- 技术支持：support@damengtrading.com

## 许可证
© 2026 大梦（贸易）有限公司 Dameng Trading Co., Ltd. All Rights Reserved.

---

*此官网由AI网站技术员维护和优化*
