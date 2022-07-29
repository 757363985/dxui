<template>
  <span @click="breadCrumbItemClick" :class="className">
    <slot />
  </span>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType } from 'vue'
// import { useRouter } from 'vue-router'

// import { ConfigType, ConfigItemType } from './types/index'

export default {
  props: {
    text: {
      required: false,
      default: '',
      type: String
    },
    className: {
      require: false,
      default: '',
      type: String
    }
  },
  setup() {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()

    const breadCrumbItemClick = function (e: Event) {
      currentInstance?.emit('click', e)
      e.stopPropagation()
      e.stopImmediatePropagation()
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
