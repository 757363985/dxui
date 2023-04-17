<template>
  <div
    v-show="fixed"
    :style="{
      position: 'fixed',
      top: affix.top,
      'z-index': affix.zIndex,
      bottom: affix.bottom
    }"
  >
    <slot />
  </div>

  <div :style="{ opacity: fixed ? 0 : 1 }" ref="affixTarget">
    <slot />
  </div>
</template>

<script lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount, watch, SetupContext } from 'vue'
// import { useRouter } from 'vue-router'

import { Data } from './types/index'

export default {
  name: 'Affix',
  emits: ['affixChange'],
  props: {
    // 是否禁用，禁用就不会产生固定效果，和正常的元素一样显示
    disabled: {
      require: false,
      default: false,
      type: Boolean
    },
    top: {
      require: false,
      default: undefined,
      type: Number
    },
    bottom: {
      require: false,
      default: undefined,
      type: Number
    },
    zIndex: {
      require: false,
      default: 1,
      type: Number
    }
  },
  setup(props: Data, context: SetupContext) {
    const affix = reactive({
      top: props.top + 'px',
      bottom: props.bottom + 'px',
      zIndex: props.zIndex
    })

    const affixTarget = ref<any>(null)

    const fixed = ref(false)

    const handleScroll = () => {
      if (props.disabled) {
        return
      }
      const { top, bottom } = affixTarget?.value?.getBoundingClientRect()

      if (props.top !== undefined && top < props.top) {
        fixed.value = true
        affix.bottom = 'auto'
        affix.top = props.top + 'px'
      } else if (props.bottom !== undefined && window.innerHeight - bottom < props.bottom) {
        fixed.value = true
        affix.bottom = props.bottom + 'px'
        affix.top = 'auto'
      } else {
        fixed.value = false
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
      handleScroll()
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    })

    watch(fixed, (value) => {
      context.emit('affixChange', value)
    })

    return {
      affix,
      fixed,
      affixTarget
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
</style>
