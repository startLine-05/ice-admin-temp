# ice-admin-template

> 这是一个基于 ice(icestark) + vue admin 微前端管理后台。它包含了一个主应用和两个微应用这些搭建微前端后台必要的东西。

- 主应用 vue admin + icestark (master 分支)
- 微应用 react + antd + icestark (react-branch 分支)
- 微应用 vue2.0 + element + icestark (vue-branch 分支)

[线上地址](https://startline-05.github.io/startLine-05-ice-admin-temp/)

## 微前端相关

### 概念

基座（主应用）：即承载子应用运行的父级应用。包含微前端应用配置、子应用动态加卸载及入口等通用功能。
子应用：即包含独立业务块单独部署的页面。

### 微前端主要流程

## 相关改造部分

```javascript
<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <!--挂载节点-->
      <div id="container" v-loading="loading"></div>
      <app-main v-if="!microAppsActive" />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import { registerMicroApps, removeMicroApps, start } from "@ice/stark";
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      loading: false,
      microAppsActive: false
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  mounted() {
    //获取挂载节点
    const container = document.getElementById("container");
    //注册微应用
    registerMicroApps([
      {
        //微应用名称
        name: "Reaact",
        //激活路径
        activePath: "/react",
        title: "React微应用",
        sandbox: true,
        // React app demo: https://github.com/alibaba-fusion/materials/tree/master/scaffolds/ice-stark-child
        // url: [
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',
        // ],
        //微应用输出地址
        entry: "http://localhost:3333/",
        //微应用挂载节点
        container
      },
      {
        //微应用名称
        name: "Vue",
        //激活路径
        activePath: "/vue",
        title: "Vue微应用",
        sandbox: true,
        // Vue app demo: https://github.com/ice-lab/vue-materials/tree/master/scaffolds/icestark-child-app
        // url: [
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',
        // ],
        //微应用输出地址
        entry: "http://localhost:7101/",
        //微应用挂载节点
        container
      }
    ]);
    //启动微应用
    start({
      onLoadingApp: () => {
        this.loading = true;
      },
      onFinishLoading: () => {
        this.loading = false;
      },
      // 处理微应用间跳转无法触发 Vue Router 响应
      onRouteChange: (_, pathname) => {
        this.$router.push(pathname);
      },
      onActiveApps: activeApps => {
        this.microAppsActive = (activeApps || []).length ? true : false;
      }
    });
  },
  //卸载对应的子用
  beforeDestroy() {
    removeMicroApps(["Reaact", "Vue"]);
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

```

## 相关文档

- [vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/)

- [ice-icestark](https://micro-frontends.ice.work/)

- [Element UI](https://element.eleme.cn/#/)

- [Ant Design UI](https://ant.design/index-cn)

## Build Setup

```bash
# 克隆项目
git clone https://github.com/startLine-05/startLine-05-ice-admin-temp.git

# 进入项目目录
cd ice-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考

- [vue-element-admin 使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)
- [ice-icestark 使用文档](https://micro-frontends.ice.work/)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |
