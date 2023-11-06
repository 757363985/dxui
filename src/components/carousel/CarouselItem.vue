<template>
  <div class="carousel-item-warpper" :style="{ width: itemWidth, marginRight: gap, height: height }">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  inject
} from 'vue'

export default {
  name: 'CarouselItem',
  setup(props: any) {
    // item的 宽度
    const itemWidth = ref<string>('')

    // item 的间距
    const gap = ref<string>('')

    // item的高度
    const height = ref<string>('')

    onMounted(() => {
      const getItemWidth = inject('getItemWidth') as any
      itemWidth.value = getItemWidth() + 'px'
      gap.value = inject('gap') + 'px'
      height.value = inject('carouselItemHeight') + 'px'
    })
    return {
      gap,
      itemWidth,
      height
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
.carousel-item-warpper {
  height: 100%;
  display: inline-block;
  white-space: initial;
  color: $black-color;
}

.carousel-item-warpper:last-child {
  margin-right: 0px !important;
}
</style>
