<template>
  <div class="dx-select-warpper" @click="stopDoucumentClick">
    <input
      type="text"
      @focus="changeSelectStatus"
      v-model="selectInputValue"
      :placeholder="placeholder"
    />
    <span class="dx-select-icon">111</span>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext } from 'vue'
// import { useRouter } from 'vue-router'

import { Data } from './types/index'

export default {
  props: {
    // 配置options的可选项
    options: {
      required: false,
      type: Object
    },
    placeholder: {
      required: false,
      default: '请选择'
    },
    // 单选或者多选
    type: {
      required: false,
      default: 'checkbox',
      type: String
    },
    // 是否支持搜索
    search: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  setup(props: Data, context: SetupContext) {
    // const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    // input字符串的值
    const selectInputValue = ref('')

    const selectStatus = ref('')

    const changeSelectStatus = () => {
      selectStatus.value = 'fcous'
    }

    const stopDoucumentClick = (e: Event) => {
      e.stopPropagation()
    }

    document.body.addEventListener('click', () => {
      selectStatus.value = 'blur'
    })

    return {
      selectInputValue,
      changeSelectStatus,
      stopDoucumentClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
.dx-select-warpper {
  display: inline-block;

  .dx-select-icon {
  }
}
</style>
