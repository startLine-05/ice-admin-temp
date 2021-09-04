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
    const container = document.getElementById("container");
    registerMicroApps([
      {
        name: "Reaact微应用",
        activePath: "/react",
        title: "React微应用",
        sandbox: true,
        // React app demo: https://github.com/alibaba-fusion/materials/tree/master/scaffolds/ice-stark-child
        // url: [
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',
        // ],
        entry: "http://localhost:3333/",
        container
      },
      {
        name: "Vue微应用",
        activePath: "/vue",
        title: "Vue微应用",
        sandbox: true,
        // Vue app demo: https://github.com/ice-lab/vue-materials/tree/master/scaffolds/icestark-child-app
        // url: [
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',
        //   'https:////iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',
        // ],
        entry: "http://localhost:7101/",
        container
      }
    ]);

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
  beforeDestroy() {
    removeMicroApps(["seller", "waiter"]);
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
