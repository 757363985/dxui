<template>
  <div class="dx-card-group-warpper" :class="ClassName" ref="cardGroup">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { Data } from '../dialog/types'

export default {
  props: {
    // columnNumber表示每行有多少列
    columnNumber: {
      required: false,
      default: 1,
      type: Number
    }
  },
  setup(propsData: Data) {
    // 自定义card头部
    const cardGroup: any = ref(null)
    const ClassName = `count-number-${propsData.columnNumber}`
    onMounted(() => {
      // ref只能在onMounted里面才能获取
      const hasNotCardComponents = [...cardGroup.value.children].some((item: any) => {
        return !item.className.includes('dx-card-warpper')
      })
      if (hasNotCardComponents) {
        // 算是给开发者的提醒，在CardGroup里只能使用card组件
        console.log(Error('Only Card components can be used in CardGroup'))
      }
    })

    return {
      cardGroup,
      ClassName
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
.dx-card-group-warpper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  .dx-card-warpper {
    margin-bottom: 12px !important;
  }
}

@for $i from 2 through 99 {
  .count-number-#{$i} {
    .dx-card-warpper {
      width: calc(96% / #{$i}) !important;
      margin-right: calc(4% / #{$i - 1}) !important;
    }
    .dx-card-warpper:nth-child(#{$i}n + #{$i}) {
      margin-right: 0 !important;
    }
  }
}
</style>
