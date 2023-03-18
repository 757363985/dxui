<template>
  <div class="dx-home">
    <nav class="dx-home-header">
      <div class="dx-home-logo">
        <img class="dx-logo-img" src="../assets/logo.png" alt="" srcset="" />
        <h1>DXUI</h1>
      </div>
      <div class="dx-home-notice">欢迎体验 dxui, 持续更新中哦</div>
    </nav>
    <div class="dx-home-content">
      <div class="dx-content-left">
        <h4 class="dx-nav-button">组件名称</h4>
        <router-link active-class="dx-nav-active-button" to="/home/button">
          <div class="dx-nav-button">button</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/dialog">
          <div class="dx-nav-button">dialog</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/tooltip">
          <div class="dx-nav-button">tooltip</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/card">
          <div class="dx-nav-button">card</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/breadCrumb">
          <div class="dx-nav-button">breadCrumb</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/checkbox">
          <div class="dx-nav-button">checkbox</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/checkboxgroup">
          <div class="dx-nav-button">checkboxGroup</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/switch">
          <div class="dx-nav-button">switch</div>
        </router-link>
        <!-- <router-link active-class="dx-nav-active-button" to="/home/code">
          <div class="dx-nav-button">code</div>
        </router-link> -->
        <router-link active-class="dx-nav-active-button" to="/home/tag">
          <div class="dx-nav-button">tag</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/animationIcon">
          <div class="dx-nav-button">animationIcon</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/slider">
          <div class="dx-nav-button">slider</div>
        </router-link>
        <router-link active-class="dx-nav-active-button" to="/home/select">
          <div class="dx-nav-button">select</div>
        </router-link>

        <router-link active-class="dx-nav-active-button" to="/home/message">
          <div class="dx-nav-button">message</div>
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

// import Button from '@/components/button/Button.vue'

export default {
  components: {
    // Button
  },
  setup() {
    const route = useRoute()
    console.log(route.query)
    console.log(route.params)
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
}

.dx-home-content {
  min-height: calc(100vh - 80px);
  max-width: 1680px;
  display: inline-block;
  text-align: left;
  position: relative;

  .dx-content-left {
    width: 208px;
    // height: calc(100vh - 80px);
    background-color: #fff;
    box-shadow: 0 8px 12px #ebedf0;
    padding: 24px 0;
    display: inline-block;
    position: fixed;
    top: 80px;
    bottom: 0;
  }

  .dx-nav-button {
    width: 100%;
    // line-height: 36px;
    color: $black-light-color;
    padding: 8px 0 8px 24px;
    cursor: pointer;
    &:hover {
      background: $background-color;
      color: #000;
    }
  }

  .dx-nav-active-button {
    .dx-nav-button {
      width: 100%;
      // line-height: 36px;
      padding: 8px 0 8px 24px;
      cursor: pointer;
      background: #d9eef7 !important;
    }
  }
  .dx-content-center {
    display: inline-block;
    width: calc(100% - 208px);
    vertical-align: top;
    // background: #fff;
    // box-shadow: 0 8px 12px #ebedf0;
    margin: 0px 0px 24px 208px;
    padding: 24px;
    // border-radius: 20px;
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
