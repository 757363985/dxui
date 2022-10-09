<template>
  <div class="dx-breadcrumb-warpper">
    <slot v-if="showCustomContent" />
    <template v-else>
      <div class="dx-breadcrumb-item" v-for="(item, index) in config" :key="item.name">
        <BreadcrumbItem v-if="index < config.length - 1" className="name-no-end" :config="item">{{
          item.text
        }}</BreadcrumbItem>

        <BreadcrumbItem v-else class="name-end">{{ item.text }}</BreadcrumbItem>

        <span v-if="index < config.length - 1" class="dx-breadcrumb-division">
          {{ separator }}
        </span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType } from 'vue'

import BreadcrumbItem from './BreadcrumbItem.vue'

import { ConfigType } from './types/index'

export default {
  props: {
    config: {
      required: false,
      type: Array as PropType<ConfigType>
    },
    separator: {
      required: false,
      default: '/',
      type: String
    }
  },
  components: {
    BreadcrumbItem
  },
  setup() {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()

    // 自定义内容是否显示
    const showCustomContent = ref(false)
    const customContent = currentInstance?.slots.default

    if (customContent) {
      showCustomContent.value = true
    }

    return {
      showCustomContent
    }
  },
  item: BreadcrumbItem
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
