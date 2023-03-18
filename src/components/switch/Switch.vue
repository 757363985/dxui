<template>
  <div
    class="dx-switch-warpper"
    :class="switchDisabledClass ? 'dx-switch-disabled' : ''"
    @click="changeSwitchStatus"
  >
    <div class="dx-switch-status" :class="switchStatusClass">
      <span class="dx-switch-text">{{ switchStatusText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType, watchEffect } from 'vue'
import { Data } from './types'

export default {
  props: {
    checked: {
      required: false,
      default: undefined,
      type: Boolean
    },
    defaultChecked: {
      required: false,
      default: undefined,
      type: Boolean
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean
    },
    openText: {
      required: false,
      default: '',
      type: String
    },
    closeText: {
      required: false,
      default: '',
      type: String
    }
  },
  setup(props: Data) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const checkedValue = ref(props.checked)
    const switchDisabledClass = ref(props.disabled)
    const switchStatusClass = ref('dx-switch-close')
    const switchStatusText = ref('')

    const changeSwitchStatus = function (e: Event) {
      if (props.disabled) {
        return
      }
      currentInstance?.emit('switchClick', checkedValue.value, e)

      if (props.checked !== undefined) {
        checkedValue.value = props.checked
      } else if (!props.disabled) {
        checkedValue.value = !checkedValue.value
        currentInstance?.emit('change', checkedValue.value, e)
      }
    }

    if (props.checked === true) {
      checkedValue.value = true
    } else if (props.checked === false) {
      checkedValue.value = false
    } else if (props.defaultChecked === true) {
      checkedValue.value = true
    } else if (props.defaultChecked === false) {
      checkedValue.value = false
    }

    watchEffect(() => {
      if (checkedValue.value) {
        switchStatusClass.value = 'dx-switch-open'
        switchStatusText.value = props.openText as string
      } else {
        switchStatusClass.value = 'dx-switch-close'
        switchStatusText.value = props.closeText as string
      }
    })

    return {
      checkedValue,
      switchStatusClass,
      switchStatusText,
      switchDisabledClass,
      changeSwitchStatus
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
.dx-switch-warpper {
  min-width: 44px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  user-select: none;

  .dx-switch-status {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    vertical-align: bottom;
  }

  .dx-switch-open {
    background-color: $blue-color;
    border: 1px solid $blue-color;
    .dx-switch-text {
      padding-right: 24px;
      padding-left: 6px;
      font-size: 14px;
      color: $white-color;
    }
    &::before {
      margin-top: 3px;
      margin-left: calc(100% - 22px);
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: $white-color;
    }
  }

  .dx-switch-close {
    background-color: $grey-color;
    border: 1px solid $grey-color;
    .dx-switch-text {
      padding-right: 6px;
      padding-left: 24px;
      font-size: 14px;
      color: $white-color;
    }
    &::before {
      position: absolute;
      margin: 3px 0 0 3px;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: $white-color;
    }
  }
}

.dx-switch-disabled {
  cursor: not-allowed;
  .dx-switch-open {
    background-color: $grey-color;
    border: 1px solid $grey-color;
    &::before {
      margin-top: 3px;
      margin-left: calc(100% - 22px);
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: $white-color;
    }
  }
}
</style>
