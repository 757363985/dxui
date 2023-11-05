<template>
  <span class="dx-icon icomoon" :class="className" :style="style"></span>
</template>

<script lang="ts">
import { ref, SetupContext, PropType, CSSProperties } from 'vue'

import { Data } from './types/index'

export default {
  name: 'Icon',
  props: {
    // 通过传递类名，来自定义样式
    iconName: {
      require: false,
      default: 'anquan',
      type: String
    },
    // 自定义样式
    style: Object as PropType<CSSProperties>
  },
  setup(props: Data, context: SetupContext) {
    // const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const className = ref(`icon-${props.iconName}`)

    return {
      className
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
@import '@/fonts/icomoon.scss';
</style>
