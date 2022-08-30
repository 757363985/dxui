<template>
  <span @click="breadCrumbItemClick" :class="className">
    <slot v-if="showDefaultContent" />
    <template v-else>{{ config.text }}</template>
  </span>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, PropType, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ConfigItemType, Data } from './types/index'

export default {
  props: {
    // 通过传递类名，来自定义样式
    className: {
      require: false,
      default: '',
      type: String
    },
    config: {
      require: false,
      default: undefined,
      type: Object as PropType<ConfigItemType>
    }
  },
  setup(props: Data) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const userRouter = useRouter()

    const breadCrumbItemClick = function (e: Event) {
      e.stopPropagation()
      e.stopImmediatePropagation()

      const config = props.config as ConfigItemType
      // 如果没有配置onClick,就通过userRouter触发路由
      if (config && typeof config.onClick !== 'function') {
        userRouter.push({
          ...(props.config as any)
        })
      } else if (config && typeof config.onClick === 'function') {
        // 如果自定义了点击事件，就触发自定义的事件
        config.onClick()
      } else {
        // 如果使用这个组件直接@click来自定义点击事件，也是可以的，但config不能配置才行
        currentInstance?.emit('click', e)
      }
    }

    const showDefaultContent = ref(false)
    const defaultContent = currentInstance?.slots.default
    if (defaultContent) {
      showDefaultContent.value = true
    }

    return {
      showDefaultContent,
      breadCrumbItemClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';

.dx-breadcrumb-warpper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .name-no-end {
    color: $grey-color;
    cursor: pointer;
    &:hover {
      color: $black-color;
    }
  }

  .dx-breadcrumb-division {
    margin: 0 12px;
  }
}
</style>
