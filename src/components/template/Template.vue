<template>
  <div>{{ someData }}</div>
</template>

<script lang="ts">
import { ref, SetupContext } from 'vue'
// import { useRouter } from 'vue-router'

import { Data } from './types/index'

export default {
  props: {
    // 通过传递类名，来自定义样式
    className: {
      require: false,
      default: '',
      type: String
    }
  },
  setup(props: Data, context: SetupContext) {
    // const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const someData = ref('dx')

    return someData
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
</style>
