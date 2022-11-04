<template>
  <router-view />
  <!-- <div id="jsi-cherry-container" class="cherry_container"></div> -->
</template>

<script>
export default {
  components: {}
  // setup() {}
}
</script>

<style lang="scss">
@import './scss/layout.scss';
@import './scss/html.scss';

body {
  // padding: 8px;
  text-align: center;
}

.dx-page-content-warpper {
  // max-width: 1200px;
  width: 100%;
  text-align: initial;
  display: inline-block;
  h1 {
    margin-bottom: 24px;
  }
}

@media screen and (max-width: 1280px) {
  .dx-page-content-warpper {
    // padding: 40px;
  }
}

@media screen and (max-width: 768px) {
  .dx-page-content-warpper {
    // padding: 24px;
  }
}

.content-breadcrumnb {
  margin-bottom: 24px;
}

.components-show-warpper {
  display: flex;
  flex-wrap: wrap;
  .components-show-item {
    width: calc(50% - 24px);
    margin-bottom: 24px;
    margin: 24px 12px;
    padding: 12px;
    border: $border;
    &:nth-child(2n) {
      border-left: $border;
    }
    h2 {
      margin-bottom: 12px;
    }
  }
}

.dx-components-description {
  margin: 8px 0;
}

.dx-button-divide {
  display: inline-block;
  margin: 4px;
}

.cherry_container {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  // width: 100%;
  // height: 100%;
  margin: 0;
  padding: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background: $background-color;
  opacity: 1;
  overflow: hidden;
  z-index: -1;
}
</style>
