<template>
  <div
    @click="tagClick"
    v-if="tagShow"
    class="dx-tag-warpper"
    :class="colorTagClass"
    :style="style"
  >
    <div class="dx-tag-content">
      <slot />
    </div>
    <span v-if="closable && !showTagClose" class="dx-tag-close" @click="closeTag">X</span>
    <div v-if="showTagClose && closable" class="dx-tag-close" @click="closeTag">
      <slot name="tagClose" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  PropType,
  ref,
  CSSProperties,
  SetupContext
} from 'vue'
// import { useRouter } from 'vue-router'
import { useShowSlotOrDefaultNode } from '@/common/index'

import { Data } from './types/index'

export default {
  props: {
    // 标签是否可以关闭
    closable: {
      require: false,
      default: false,
      type: Boolean
    },
    style: Object as PropType<CSSProperties>,
    // 彩色标签，内置了几种颜色，当然也可以自定义色彩
    color: {
      require: false,
      default: '',
      type: String
    }
  },
  setup(props: Data, ctx: SetupContext) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const tagShow = ref(true)
    const colorTagClass = ref(`dx-color-tag-${props.color}`)

    const showTagClose = useShowSlotOrDefaultNode(ctx, 'tagClose')

    const closeTag = (e: Event) => {
      tagShow.value = false
      // 防止点击关闭时也触发tagClick
      e.stopPropagation()
      ctx.emit('closeClick', e)
    }

    const tagClick = (e: Event) => {
      ctx.emit('tagClick', e)
    }

    return {
      tagShow,
      closeTag,
      tagClick,
      colorTagClass,
      showTagClose
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';

.dx-tag-warpper {
  background: $background-color;
  border: $border;
  border-radius: 2px;
  display: inline-block;
  margin: 0 8px 8px 0;
  padding: 2px 8px;
  font-size: 12px;
  .dx-tag-content {
    display: inline-block;
  }
  .dx-tag-close {
    display: inline-block;
    margin-left: 4px;
    cursor: pointer;
  }
}

.dx-color-tag-purple {
  border: 1px solid $purple-middle-color;
  color: $purple-color;
  background: $purple-light-color;
}

.dx-color-tag-red {
  border: 1px solid $red-middle-color;
  color: $red-color;
  background: $red-light-color;
}

.dx-color-tag-blue {
  border: 1px solid $blue-middle-color;
  color: $blue-color;
  background: $blue-light-color;
}

.dx-color-tag-green {
  border: 1px solid $green-middle-color;
  color: $green-color;
  background: $green-light-color;
}

.dx-color-tag-orange {
  border: 1px solid $orange-middle-color;
  color: $orange-color;
  background: $orange-light-color;
}
</style>
