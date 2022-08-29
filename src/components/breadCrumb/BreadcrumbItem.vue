<template>
  <span @click="breadCrumbItemClick" :class="className">
    <slot />
  </span>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, PropType } from 'vue'
import { useRouter } from 'vue-router'

import { ConfigItemType, Data } from './types/index'

export default {
  props: {
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
      if (config && !config.onClick) {
        userRouter.push({
          ...(props.config as any)
        })
      } else if (config && typeof config.onClick === 'function') {
        config.onClick()
      } else {
        currentInstance?.emit('click', e)
      }
    }

    return {
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
