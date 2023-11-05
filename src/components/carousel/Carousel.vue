<template>
  <div class="carousel-warpper" ref="warpper" @mouseenter="stopAutoPaly" @mouseleave="autoPlay">
    <div
      class="carousel-all-warpper"
      :style="{ width: allWarpperWidth, transform: `translateX(${leftVal}px)` }"
      ref="allWarpper"
    >
      <slot />
    </div>

    <!-- 左箭头 -->
    <button class="carousel-arrow carousel-left-arrow" @click="clickPreItem">
      <Icon class="carousel-icon" iconName="chevron-left" />
    </button>

    <!-- 右箭头 -->
    <button class="carousel-arrow carousel-right-arrow" @click="clickNextItem">
      <Icon class="carousel-icon" iconName="chevron-right" />
    </button>

    <!-- 原点 -->
    <div class="carousel-point" v-if="openDot">
      <span
        class="carousel-point-item"
        :class="index === currentIndex ? 'active' : ''"
        v-for="(item, index) in realCountArray"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext, computed, onMounted, onBeforeUnmount, provide } from 'vue'
import Icon from '@/components/icon/Icon.vue'

export default {
  name: 'Carousel',
  components: {
    Icon
  },
  props: {
    // 同时展示在视野上carouselItem的数量
    visionCount: {
      type: Number,
      required: false,
      default: 1,
      validator: (value: number) => {
        return value >= 1 && value <= 10
      }
    },
    // 自动播放时，当动画播放后，距离下一次移动的间隔时间,单位ms
    intervalTime: {
      type: Number,
      required: false,
      default: 4000,
      validator: (value: number) => {
        return typeof value === 'number'
      }
    },
    // carousel 播放滚动时的移动速度，数字越大，移动速度越快
    transitionSpeed: {
      type: Number,
      required: false,
      default: 6,
      validator: (value: number) => {
        return typeof value === 'number'
      }
    },
    // 轮播里面内容的间隔距离，单位px
    gap: {
      type: Number,
      required: false,
      default: 16,
      validator: (value: number) => {
        return typeof value === 'number'
      }
    },
    // 轮播的内容数量
    count: {
      type: Number,
      required: false,
      default: 0,
      validator: (value: number) => {
        return typeof value === 'number'
      }
    },
    // 定义carouselItem的高度
    carouselItemHeight: {
      type: Number,
      required: false,
      default: 150,
      validator: (value: number) => {
        return typeof value === 'number'
      }
    },
    // 是否开启自动播放
    openAutoPlay: {
      type: Boolean,
      required: false,
      default: true,
      validator: (value: boolean) => {
        return typeof value === 'boolean'
      }
    },
    // 是否开启自动播放
    openDot: {
      type: Boolean,
      required: false,
      default: true,
      validator: (value: boolean) => {
        return typeof value === 'boolean'
      }
    }
  },
  setup(props: any, context: SetupContext) {
    // 整个轮播盒子的宽度
    const allWarpperWidth = ref<string>('')
    // 向左移动的距离
    const leftVal = ref<number>(0)
    // 初始左移距离
    const initLeftVal = ref<number>(0)
    // 已经移动过几次
    const showIndex = ref<number>(0)
    // 监测自动播放是否开启的关键，自动播放的定时器
    const autoPlayInterval = ref<number | null>(null)
    // 除去无缝轮播后，轮播的真实数量
    const realCount = ref<number>(0)
    // 真实的carouselItem的数量，包含无缝轮播新增的内容
    const itemLength = ref<number>(0)
    // 单个item计算后的宽度
    const itemWidth = ref<number>(0)
    // 动画是否正在进行中，其它控制会失效
    const transitionIng = ref<boolean>(false)

    const allWarpper: any = ref(null)
    const warpper: any = ref(null)

    const realCountArray = computed(() => new Array(realCount.value))

    // 当前激活的圆点是第几个
    const currentIndex = computed(() => {
      const result = showIndex.value - props.visionCount
      if (result >= 0 && result <= realCount.value - 1) {
        return result
      } else if (result < 0) {
        return realCount.value + result
      } else {
        return result - realCount.value
      }
    })

    const getItemLength = () => {
      const children = allWarpper.value.children
      realCount.value = children?.length - 2 * props.visionCount
      itemLength.value = props.count || children?.length
      return props.count || children?.length
    }

    const getWarpperWidth = () => {
      return warpper?.value?.clientWidth
    }

    // 计算单个carouselItem的宽度
    const getItemWidth = () => {
      // 减掉间距后除以展示个数
      const carouselItemWidth: number =
        (getWarpperWidth() - props.gap * (props.visionCount - 1)) / props.visionCount
      itemWidth.value = carouselItemWidth
      return carouselItemWidth
    }

    // 计算整个carousel的宽度
    const getAllCarouselWidth = () => {
      return itemWidth.value * itemLength.value + props.gap * (itemLength.value - 1)
    }

    // 动画移动函数
    const RequestAnimationFrameFun = () => {
      if (leftVal.value >= -(itemWidth.value + props.gap) * (showIndex.value + 1)) {
        leftVal.value -= props.transitionSpeed
        requestAnimationFrame(RequestAnimationFrameFun)
      } else {
        showIndex.value += 1
        leftVal.value = -(itemWidth.value + props.gap) * showIndex.value
        // 动画结束
        transitionIng.value = false
      }
    }

    // 下一个item
    const nextCarouselItem = () => {
      // 如果已经移动到最后，返回表面上的第一个
      if (
        leftVal.value <=
        -(itemWidth.value + props.gap) * (itemLength.value - props.visionCount)
      ) {
        leftVal.value = initLeftVal.value
        showIndex.value = props.visionCount
      }

      requestAnimationFrame(RequestAnimationFrameFun)
      // 动画开始
      transitionIng.value = true
    }

    // 自动开始走轮播 初次加载，移出当前dom，返回页面需要重启自动轮播
    const autoPlay = () => {
      if (props.openAutoPlay) {
        // 动画过程需要的时间，动画最长时间一般是60帧/秒，每帧大约16.6ms
        const transitionTime = ((itemWidth.value + props.gap) / props.transitionSpeed) * 16.6

        if (!autoPlayInterval.value) {
          autoPlayInterval.value = window.setInterval(() => {
            nextCarouselItem()
          }, transitionTime + props.intervalTime)
        }
      }
    }

    // 清除自动轮播（点击左右按钮，移入目标dom,离开当前页面，都需要清除dom）
    const stopAutoPaly = () => {
      if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value)
      }
      autoPlayInterval.value = null
    }

    // 点击下一个轮播item
    const clickNextItem = () => {
      const handleClickNextItem = () => {
        // 暂停自动轮播
        stopAutoPaly()
        nextCarouselItem()
      }
      // 某种意义上的节流
      if (!transitionIng.value) {
        handleClickNextItem()
      }
    }

    // 点击返回前一个轮播需要执行的动画
    const RequestAnimationFrameFunPre = () => {
      if (leftVal.value <= -(itemWidth.value + props.gap) * (showIndex.value - 1)) {
        leftVal.value += props.transitionSpeed
        requestAnimationFrame(RequestAnimationFrameFunPre)
      } else {
        showIndex.value -= 1
        leftVal.value = -(itemWidth.value + props.gap) * showIndex.value
        // 动画结束
        transitionIng.value = false
      }
    }

    // 点击返回前一个轮播
    const clickPreItem = () => {
      const handleClickPreItem = () => {
        // 暂停自动轮播
        stopAutoPaly()

        // 如果已经移动到最前边，返回表面上的最后一个
        if (leftVal.value >= 0) {
          leftVal.value =
            -(itemWidth.value + props.gap) * (itemLength.value - 2 * props.visionCount)
          showIndex.value = itemLength.value - 2 * props.visionCount
        }

        requestAnimationFrame(RequestAnimationFrameFunPre)
        // 动画开始
        transitionIng.value = true
      }

      // 某种意义上的节流
      if (!transitionIng.value) {
        handleClickPreItem()
      }
    }

    const visibilitychangeHidden = () => {
      if (document.hidden) {
        stopAutoPaly()
      } else {
        autoPlay()
      }
    }

    onMounted(() => {
      // 初始偏移item的数量
      showIndex.value = props.visionCount

      getItemWidth()
      getItemLength()

      setTimeout(() => {
        allWarpperWidth.value = getAllCarouselWidth() + 'px'
        // 计算初始位置
        initLeftVal.value = leftVal.value = -(itemWidth.value + props.gap) * props.visionCount
      }, 20)

      autoPlay()

      // 如果离开页面停止自动播放页面
      document.addEventListener('visibilitychange', visibilitychangeHidden)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('visibilitychange', visibilitychangeHidden)
    })

    // 提供父组件指定的宽度，避免CarouselItem重新计算
    provide('getItemWidth', getItemWidth)
    provide('gap', props.gap)
    provide('carouselItemHeight', props.carouselItemHeight)

    return {
      autoPlayInterval,
      autoPlay,
      stopAutoPaly,
      showIndex,
      initLeftVal,
      leftVal,
      allWarpperWidth,
      realCountArray,
      allWarpper,
      warpper,
      currentIndex,
      clickNextItem,
      clickPreItem
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
.carousel-warpper {
  width: 100%;
  height: 100%;
  min-height: 100px;
  overflow: hidden;
  position: relative;

  .carousel-all-warpper {
    height: 100%;
    white-space: nowrap;
    padding-bottom: 24px;
  }

  .carousel-arrow {
    border-radius: 18px;
    width: 36px;
    height: 36px;
    position: absolute;
    background: $border-color;
    line-height: 36px;
    font-size: 18px;
    color: $black-color;
    padding: 0px;
    border: none;
    cursor: pointer;

    .carousel-icon {
      font-size: 24px;
      line-height: 36px;
      color: $white-color;
    }
  }

  .carousel-left-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    left: 24px;
  }

  .carousel-right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    right: 24px;
  }

  .carousel-point {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    .carousel-point-item {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      border: $black-border;
      display: inline-block;
      margin-right: 8px;
    }
    .carousel-point-item:last-child {
      margin-right: 0;
    }

    .carousel-point-item.active {
      background: $black-color;
    }
  }
}
</style>
