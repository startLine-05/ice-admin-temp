# ice-stark-child

> 这是一个基于 ice(icestark) + react 微前端管理后台。它包含了 antd UI 库，能够快速构建 web 页面，能够单独部署或者与主应用一同开发 。

## 相关文档

- [ice-icestark](https://micro-frontends.ice.work/)

- [Ant Design UI](https://ant.design/index-cn)

## 使用

```bash
# 克隆项目
git clone -b react-branch https://github.com/startLine-05/startLine-05-ice-admin-temp.git

# 进入项目目录
cd react-branch

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run start

# 发布
npm run build
```

浏览器访问 [http://localhost:9528](http://localhost:3333)

## 目录结构

- 应用配置: `src/app.js`
- 路由配置: `src/routes.js`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`

## 效果图

![screenshot](https://img.alicdn.com/tfs/TB1X5.paYr1gK0jSZFDXXb9yVXa-2480-1200.png)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |
