<template>
  <div class="dx-select-warpper" @click="stopDoucumentClick">
    <span class="dx-select-input" v-if="selectInputValue"> {{ selectInputValue }}</span>
    <span class="dx-select-placeholder" v-else>{{ placeholder }}</span>
    <span class="dx-select-icon">111</span>

    <div class="dx-select-options-warpper">
      <div class="dx-select-options-item" v-for="item in selectOptions.options" :key="item.name + item.value">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext, onMounted, reactive } from 'vue'
// import { useRouter } from 'vue-router'

import { Data } from './types/index'

export default {
  props: {
    // 配置options的可选项
    options: {
      required: false,
      type: Array
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

    const selectOptions = reactive({
      options: props.options
    })

    const changeSelectStatus = () => {
      selectStatus.value = 'fcous'
    }

    const stopDoucumentClick = (e: Event) => {
      e.stopPropagation()
    }

    onMounted(() => {
      selectOptions.options = [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    })

    document.body.addEventListener('click', () => {
      selectStatus.value = 'blur'
    })

    return {
      selectInputValue,
      changeSelectStatus,
      stopDoucumentClick,
      selectOptions
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
.dx-select-warpper {
  display: inline-block;
  border: $border;
  padding: 0 12px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:hover {
    border: 1px solid $blue-middle-color;
  }

  .dx-select-input,
  .dx-select-placeholder {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    cursor: pointer;
    line-height: 30px;
    font-size: 14px;
    padding-right: 12px;
  }

  .dx-select-placeholder {
    color: $grey-color;
  }
  .dx-select-icon {
    display: inline-block;
    height: 100%;
    line-height: 30px;
  }

  .dx-select-options-warpper {
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(100% + 4px);
    padding: 8px;
    background: $white-color;
    box-shadow: 2px 2px 20px rgb(0 0 0 / 29%);
    border-radius: 4px;
  }
}
</style>
