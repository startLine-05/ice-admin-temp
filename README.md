# icestark Vue 子应用

> icestark 基于 Vue 的子应用模板, 包含了 vue-2.0 + element-ui 这些主要库,可单独部署使用或结合主应用一同开发。

## Build Setup

```bash
# 克隆项目
git clone -b vue-branch https://github.com/startLine-05/startLine-05-ice-admin-temp.git

# 进入项目目录
cd ice-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run start
```

## 注意事项

````
```javascript
//允许主应用跨域访问
devServer: {
    hot: true,
    disableHostCheck: true,
    open:true,
    port,
    overlay: {
        warnings: false,
        errors: true,
    },
    // 跨域
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
},
//构建产物设置为umd
output: {
    library: 'icestark-vue-demo',
    libraryTarget: 'umd',
},
````

## 相关文档

- [ice-icestark](https://micro-frontends.ice.work/)

- [Element UI](https://element.eleme.cn/#/)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |
