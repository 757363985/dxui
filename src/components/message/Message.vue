<template>
  <div v-if="messageShow" class="dx-message" :class="`dx-message-${type}`" :style="style">
    <Icon :iconName="iconType" :style="{ 'vertical-align': 'baseline' }" />
    <span class="dx-message-content">{{ content }}</span>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext, PropType, CSSProperties, computed } from 'vue'

// import { useRouter } from 'vue-router'
import Icon from '@/components/icon/Icon.vue'

import { Data } from './types/index'

export default {
  props: {
    // message 的类型 info success warning error
    type: {
      type: String,
      default: 'info'
    },
    // 展示的时间 单位ms
    duration: {
      type: Number,
      default: 5000
    },
    // 内容
    content: {
      required: true,
      type: String,
      default: ''
    },
    style: Object as PropType<CSSProperties>
  },
  components: {
    Icon
  },
  data() {
    return {
      // messageShow: true,
    }
  },
  setup(props: Data, context: SetupContext) {
    // const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const messageShow = ref(true)
    const iconType = computed(() => {
      const iconTypeMap: any = {
        info: 'info',
        success: 'check-circle',
        warning: 'alert-triangle',
        error: 'x-circle'
      }

      return iconTypeMap[`${props.type}`]
    })
    // const iconName = ref(props.type)

    setTimeout(() => {
      messageShow.value = false
    }, props.duration as number)
    return {
      messageShow,
      // iconName,
      iconType
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';

.dx-message-list {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  margin-bottom: 24px;
}

.dx-message {
  border-radius: 6px;
  box-shadow: $box-shadow;
  padding: 6px 16px;
  font-size: 14px;
  // position: fixed;
  background: $white-color;
  // top: 10%;
  // left: 50%;
  // z-index: 10000;
  margin-bottom: 24px;

  .dx-message-content {
    margin-left: 8px;
  }
}

.dx-message-info {
  .dx-icon {
    color: $blue-color;
  }
}

.dx-message-success {
  .dx-icon {
    color: $green-color;
  }
}

.dx-message-error {
  .dx-icon {
    color: $red-color;
  }
}

.dx-message-warning {
  .dx-icon {
    color: $orange-color;
  }
}
</style>
