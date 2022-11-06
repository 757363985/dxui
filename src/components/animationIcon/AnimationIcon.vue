<template>
  <div
    class="dx-icon-animaiton-warpper"
    :class="IconClass"
    @mouseenter="handlePlay"
    @mouseleave="handleStop"
    ref="animation"
    :style="{ width, height }"
    :id="randomID"
  ></div>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import * as iconSource from './iconSource/animation.js'
import lottie from 'lottie-web'
import { randomString } from '@/common/index'

export default defineComponent({
  name: 'Lottie',
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    },
    src: {
      type: String,
      default: ''
    },
    jsonData: {
      type: Object,
      default: undefined
    },
    /** 是否自动播放，false则只会在hover状态下播放，true为自动播放 */
    autoplay: {
      type: Boolean,
      default: true
    },
    /** 是否循环播放，false只会播放一次 */
    loop: {
      type: Boolean,
      default: true
    },
    jsonDataName: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    // 执行动画的速度，1为1秒
    speed: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const animation = ref(null)
    let lottieControl = {}

    const randomID = randomString(6)
    const IconClass = ref('')

    if (props.color) {
      IconClass.value = 'dx-icon-color-warpper'
    }

    onMounted(() => {
      if (animation.value) {
        lottieControl = lottie.loadAnimation({
          name: randomID,
          container: animation.value,
          renderer: 'svg',
          loop: props.loop,
          autoplay: props.autoplay,
          path: props.src,
          color: 'red',
          // animationData只能加载本地json，优先级高于path
          animationData: props.jsonData || iconSource[props.jsonDataName]
        })
        lottieControl.setSpeed(props.speed)
      }

      nextTick(() => {
        try {
          const svgDom = document.querySelector(`#${randomID} > svg`)
          if (svgDom && props.color) {
            svgDom.style.filter = `drop-shadow(${props.color} 0px -10000px)`
          }
        } catch (error) {}
      })
    })

    const handlePlay = () => {
      if (!props.autoplay) {
        lottieControl.play(randomID)
      }
      // lottieControl.goToAndStop(props.jsonDataName)
    }

    const handleStop = () => {
      if (!props.autoplay) {
        lottieControl.stop(randomID)
      }
    }

    return {
      animation,
      IconClass,
      handlePlay,
      handleStop,
      randomID
    }
  }
})
</script>

<style lang="scss">
.dx-icon-animaiton-warpper {
  cursor: pointer;
  display: inline-block;
}

.dx-icon-color-warpper {
  overflow: hidden;
  svg {
    overflow: hidden;
    transform: translate(0px, 10000px) !important;
  }
}
</style>
