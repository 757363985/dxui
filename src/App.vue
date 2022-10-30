<template>
  <router-view />
</template>

<style lang="scss">
@import './scss/layout.scss';
@import './scss/html.scss';
body {
  padding: 8px;
  text-align: center;
}

.content-warpper {
  width: 1200px;
  text-align: initial;
  display: inline-block;
  h1 {
    margin-bottom: 24px;
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
  margin: 0 4px;
}
</style>
