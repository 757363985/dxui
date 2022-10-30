<template>
  <div>{{ someData }}</div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, PropType, ref } from 'vue'
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
  async setup(props: Data) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const someData = ref('dx')
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ someData })
      }, 3000)
    })
    return result
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
</style>
