# YouTubeDownloadr官方网站

这是YouTubeDownloadr软件的官方网站，包含PC和Android两个平台的下载链接和GitHub源码链接。

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 美观简洁的用户界面
- 使用SVG图标，确保高清显示
- 平滑滚动和动画效果
- FAQ交互式折叠面板
- 随机切换首页预览图

## 文件结构

- `index.html` - 网站主页HTML
- `styles.css` - 样式表
- `script.js` - JavaScript交互效果
- `favicon.svg` - 网站图标
- `hero-image1.png` 到 `hero-image5.png` - 首页预览图（需单独添加）

## 如何使用

1. 克隆此仓库到本地
2. 添加5张合适的预览图，命名为`hero-image1.png`、`hero-image2.png`、`hero-image3.png`、`hero-image4.png`和`hero-image5.png`
3. 修改下载链接和GitHub链接，指向实际的URL
4. 部署到您的网络服务器

## 需要自定义的内容

在部署前，请修改以下内容：

1. 在`index.html`文件中，更新PC和Android下载链接：
   - `<a href="https://example.com/download/pc" class="btn btn-download">下载PC版</a>`
   - `<a href="https://example.com/download/android" class="btn btn-download">下载Android版</a>`

2. 更新GitHub源码链接：
   - `<a href="https://github.com/example/YouTubeDownloadr" class="btn btn-github">`
   - `<a href="https://github.com/example/YouTubeDownloadrForAndroid" class="btn btn-github">`

3. 根据需要修改版权信息：
   - `<p>© 2023 YouTubeDownloadr. 保留所有权利。</p>`

## 许可证

MIT License 