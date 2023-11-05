<template>
  <div class="dx-home">
    <nav class="dx-home-header">
      <div class="dx-home-logo">
        <img class="dx-logo-img" src="../assets/logo.png" alt="" srcset="" />
        <h1>DXUI</h1>
      </div>
      <div class="dx-home-notice">dxui组件库有了新的域名，dxui.cn</div>
      <div class="dx-home-link">
        <a class="dx-github-link" href="https://github.com/757363985/dxui" target="_blank">
          <span class="icon-github"> </span>
        </a>
      </div>
    </nav>
    <div class="dx-home-content">
      <div class="dx-content-left">
        <h4 class="dx-nav-button">组件名称</h4>
        <router-link
          v-for="item in componentsList"
          :key="item.id"
          active-class="dx-nav-active-button"
          :to="`/home/${item.id.toLowerCase()}`"
        >
          <div class="dx-nav-button">{{item.id}} {{item.name}}</div>
        </router-link>
      </div>

      <div class="dx-content-center">
        <router-view />
      </div>
    </div>

    <!-- <footer class="dx-home-footer">紧张制作中</footer> -->
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { COMPONENTS } from '@/router/index'
import { reactive } from 'vue'
// import Button from '@/components/button/Button.vue'

export default {
  components: {
    // Button
  },
  setup() {
    const route = useRoute()
    const componentsList = reactive(COMPONENTS)

    return {
      componentsList
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
.dx-home {
  // background: url(../assets/home_back.jpg);
  min-height: 100vh;
  // background: $background-color;
}
.dx-home-header {
  height: 80px;
  width: 100%;
  background-color: #001938;
  // color: $white-color;
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  top: 0;
  display: flex;
  z-index: 10000;

  .dx-home-logo {
    padding: 0 10px;
    line-height: 80px;
    display: flex;
    color: $white-color;
    .dx-logo-img {
      width: 40px;
      height: 40px;
      margin-top: 20px;
      margin-right: 12px;
    }
  }

  .dx-home-notice {
    flex: 1;
    line-height: 80px;
    color: $white-color;
  }

  .dx-home-link {
    line-height: 80px;

    .dx-github-link {
      color: $white-color;
      font-size: 18px;
      padding: 0 12px;
    }
  }
}

.dx-home-content {
  min-height: calc(100vh - 80px);
  max-width: 1680px;
  display: inline-block;
  text-align: left;
  position: relative;

  .dx-content-left {
    width: 248px;
    // height: calc(100vh - 80px);
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
    padding: 24px 4px;
    display: inline-block;
    position: fixed;
    top: 80px;
    bottom: 0;
    font-size: 14px;
  }

  .dx-nav-button {
    width: 100%;
    // line-height: 36px;
    color: $black-light-color;
    padding: 8px 24px 8px 24px;
    cursor: pointer;
    &:hover {
      background: $background-color;
      color: #000;
    }
    border-radius: 6px;
    margin-bottom: 4px;
  }

  .dx-nav-active-button {
    .dx-nav-button {
      width: 100%;
      // line-height: 36px;
      cursor: pointer;
      background: #d9eef7 !important;
      color: $blue-color;
    }
  }
  .dx-content-center {
    display: inline-block;
    width: calc(100% - 248px);
    vertical-align: top;
    margin: 0px 0px 24px 248px;
    padding: 24px;
  }
}

@media screen and (min-width: 1680px) {
  .dx-home-content {
    // padding: 40px;
    width: 1680px;
  }
}

@media screen and (max-width: 1680px) {
  .dx-home-content {
    // padding: 40px;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .dx-content-left {
    display: none !important;
  }
  .dx-content-center {
    width: 100% !important;
    margin: 0 !important;
  }
}

// .dx-home-footer {
//   height: 300px;
//   padding: 30px 0;
//   width: 100%;
//   background-color: transparent;
//   color: $white-color;
//   position: fixed;
//   bottom: 0;
// }
</style>
