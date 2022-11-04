<template>
  <div
    @mouseenter="handleHoverTooltipShow"
    @mouseleave="handleHoverTooltipHide"
    @click="handleClickTooltipChange"
    class="dx-tooltip-warpper"
    :class="`trigger-${trigger} position-${position}`"
  >
    <!-- 在顶层通过传入的visible进行控制 -->
    <div v-show="visible !== null ? visible : true" class="dx-tooltip-max-width">
      <!-- 在内层通过组件自身的tooltipvisible进行控制 -->
      <div v-show="tooltipVisible" class="dx-tooltip-dx-page-content-warpper">
        <div
          class="tooltip-title"
          v-if="showDefaultTitle"
          :style="
            background ? { background, color: '#fff', borderColor: background, width } : { width }
          "
        >
          {{ title }}
        </div>

        <div
          class="tooltip-title"
          v-else
          :style="
            background ? { background, color: '#fff', borderColor: background, width } : { width }
          "
        >
          <slot name="title" />
        </div>
        <div
          class="tooltip-icon"
          :style="background ? { background, color: '#fff', borderColor: background } : {}"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType, watch } from 'vue'

import { Data } from './types'

export default {
  props: {
    // tooltip的内容
    title: {
      required: false,
      default: '',
      type: String
    },
    // tooltip的触发方式 hover click
    trigger: {
      required: false,
      default: 'hover',
      type: String as PropType<'hover' | 'click'>
    },
    // 可以用来手动控制tooltip的出现或者消失
    visible: {
      required: false,
      default: null,
      type: Boolean as PropType<boolean | null>
    },
    // tooltip出现的位置
    position: {
      required: false,
      default: 'topLeft',
      type: String
    },
    // 可以设置tooltip的背景颜色
    background: {
      required: false,
      default: '',
      type: String
    },
    // 自定义tooltip的宽度,tooltip的宽度受被包裹元素的影响，这里提供自定义
    width: {
      required: false,
      default: '',
      type: String
    }
  },
  watch: {
    // 对外界传入的visible进行监听，选用了vue2的写法，因为外界传入的visible可能不是一个ref只是一个简单的boolean值
    visible(newval: boolean) {
      // this.$emit 会报错 说$emit在类型里面不存在，所以用这样的方式，但实际上是存在的，将来可能需要改进下，知道的朋友说一下
      const that: any = this
      that?.$emit('change', newval)
    }
  },
  setup(propsData: Data) {
    let tooltipVisible = ref(false)
    if (propsData.visible !== null) {
      tooltipVisible = ref(true)
    }

    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()

    const handleHoverTooltipShow = () => {
      if (propsData.trigger === 'hover' && propsData.visible === null) {
        tooltipVisible.value = true
      }
    }

    const handleHoverTooltipHide = () => {
      if (propsData.trigger === 'hover' && propsData.visible === null) {
        tooltipVisible.value = false
      }
    }

    const handleClickTooltipChange = () => {
      if (propsData.trigger === 'click' && propsData.visible === null) {
        tooltipVisible.value = !tooltipVisible.value
      }
    }

    // 如果是组件内部自己维护的tooltipVisible,就用vue3的watch触发监听，实现change的回调
    watch(tooltipVisible, (newval) => {
      currentInstance?.emit('change', newval)
    })

    // 允许以插槽的形式，自定义tooltip的内容
    const coustomTitle = currentInstance?.slots.title
    // 控制默认的title是否显示，
    const showDefaultTitle = ref(Boolean(propsData.title))
    // 如果有插槽形式的title，默认形式的将不展示
    if (coustomTitle) {
      showDefaultTitle.value = false
    }

    return {
      tooltipVisible,
      showDefaultTitle,
      handleHoverTooltipShow,
      handleHoverTooltipHide,
      handleClickTooltipChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';

.dx-tooltip-warpper {
  display: inline-block;
  position: relative;
  cursor: pointer;

  .dx-tooltip-max-width {
    text-align: initial;
    position: absolute;
    z-index: 1000;
    width: 100%;
  }

  .dx-tooltip-dx-page-content-warpper {
    display: inline-block;
    text-align: initial;
    min-width: 80px;
  }

  .tooltip-title {
    font-size: 14px;
    z-index: 1000;
    padding: 8px 10px;
    border: $border;
    background: $background-color;
    border-radius: 4px;
  }

  .tooltip-icon {
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 1001;
    transform: rotate(45deg);
    background: $background-color;
    border-bottom: $border;
    border-right: $border;
  }
}

.dx-tooltip-warpper.position-topLeft {
  .tooltip-title {
    position: absolute;
    bottom: calc(100% + 10px);
    left: -10px;
  }

  .tooltip-icon {
    position: absolute;
    bottom: calc(100% + 5px);
  }
}

.dx-tooltip-warpper.position-top {
  .tooltip-title {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
  }

  .tooltip-icon {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 2px);
    transform: rotate(45deg) translateX(-50%);
  }
}

.dx-tooltip-warpper.position-topRight {
  .tooltip-title {
    position: absolute;
    right: -10px;
    bottom: calc(100% + 10px);
  }

  .tooltip-icon {
    position: absolute;
    right: 0;
    bottom: calc(100% + 5px);
  }
}

.dx-tooltip-warpper.position-bottomLeft {
  .dx-tooltip-max-width {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .dx-tooltip-dx-page-content-warpper {
    position: absolute;
  }

  .tooltip-title {
    position: absolute;
    // top: 100%;
    left: -10px;
  }

  .tooltip-icon {
    position: absolute;
    transform: rotate(-135deg);
    top: -5px;
  }
}

.dx-tooltip-warpper.position-bottom {
  .dx-tooltip-max-width {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .dx-tooltip-dx-page-content-warpper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .tooltip-icon {
    position: absolute;
    top: -5px;
    left: 50%;
    margin-left: -4px;
    transform: rotate(-135deg);
  }
}

.dx-tooltip-warpper.position-bottomRight {
  .dx-tooltip-max-width {
    position: absolute;
    bottom: -10px;
    right: 0;
  }

  .dx-tooltip-dx-page-content-warpper {
    position: absolute;
    right: 0;
  }

  .tooltip-title {
    position: absolute;
    right: -10px;
  }

  .tooltip-icon {
    position: absolute;
    top: -5px;
    right: 0;
    transform: rotate(-135deg);
  }
}

.dx-tooltip-warpper.position-left {
  .dx-tooltip-max-width {
    position: absolute;
    top: 50%;
  }

  .dx-tooltip-dx-page-content-warpper {
    position: absolute;
    transform: translateX(-100%) translateY(-50%);
    left: -10px;
  }

  .tooltip-icon {
    position: absolute;
    right: -5px;
    top: calc(50% - 6px);
    transform: rotate(-45deg);
  }
}

.dx-tooltip-warpper.position-right {
  .dx-tooltip-max-width {
    position: absolute;
    top: 50%;
    margin-left: calc(100% + 10px);
  }

  .dx-tooltip-dx-page-content-warpper {
    position: absolute;
    transform: translateY(-50%);
  }

  .tooltip-icon {
    position: absolute;
    left: -5px;
    top: calc(50% - 6px);
    transform: rotate(135deg);
  }
}
</style>
