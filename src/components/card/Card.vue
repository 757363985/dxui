<template>
  <div
    @click="cardClick"
    class="dx-card-warpper"
    :class="border ? `${hover} dx-card-border-warpper` : `${hover}`"
    :style="background ? { background } : {}"
  >
    <div class="dx-card-title" v-if="showTitle">
      <slot name="title" />
    </div>
    <div class="dx-card-title dx-card-title-default" v-else-if="title">
      <span class="dx-card-title-default-text">
        {{ title }}
      </span>
    </div>
    <div class="dx-card-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType } from 'vue'

export default {
  props: {
    title: {
      required: false,
      default: '',
      type: String
    },
    hover: {
      required: false,
      default: '',
      type: String as PropType<'boxShadow' | 'floatUp' | 'enlarge'>
    },
    background: {
      required: false,
      default: '',
      type: String
    },
    border: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  setup() {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()

    const cardClick = function (e: Event) {
      currentInstance?.emit('click', e)
    }

    // 自定义card头部
    const showTitle = ref(false)
    const title = currentInstance?.slots.title

    if (title) {
      showTitle.value = true
    }

    return {
      cardClick,
      showTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';

.dx-card-warpper {
  border-radius: 4px;
  width: 100%;
  background: $white-color;
  box-shadow: $box-shadow;

  .dx-card-title {
    padding: 24px 24px 0 24px;
  }

  .dx-card-title-default {
    font-size: 16px;
    font-weight: 600;
    display: flex;
  }

  .dx-card-content {
    padding: 24px;
  }
}

.dx-card-border-warpper {
  border: $border;
  .dx-card-title {
    padding: 24px;
    border-bottom: $border;
  }
}

.dx-card-warpper.boxShadow:hover {
  box-shadow: 4px 4px 10px rgb(0 0 0 / 29%);
}

.dx-card-warpper.floatUp:hover {
  transform: translateY(-10%);
}

.dx-card-warpper.enlarge:hover {
  transform: scale(1.1);
}
</style>
