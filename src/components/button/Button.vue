<template>
  <button @click="buttonClick" class="dx-button" :class="className" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType } from 'vue'

import { SizeType, ButtonType, ModeType, onClickType, Data, ShapeType } from './types'

export default {
  props: {
    size: {
      required: false,
      default: 'default',
      type: String as PropType<SizeType>
    },
    type: {
      required: false,
      default: 'info',
      type: String as PropType<ButtonType>
    },
    mode: {
      required: false,
      default: 'normal',
      type: String as PropType<ModeType>
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean
    },
    block: {
      required: false,
      default: false,
      type: Boolean
    },
    shape: {
      required: false,
      default: 'rectangle',
      type: String as PropType<ShapeType>
    },
    onClick: {
      required: false,
      default: undefined,
      type: Function as PropType<onClickType>
    }
  },
  setup(propsData: Data) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const className = ref('dx-button')

    className.value = `dx-button size-${propsData.size} type-${propsData.type} mode-${
      propsData.mode
    } ${propsData.disabled ? 'disabled' : ''} ${propsData.block ? 'block' : ''} shape-${
      propsData.shape
    }`

    const buttonClick = function (e: Event) {
      currentInstance?.emit('click', e)
    }

    return {
      className,
      buttonClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';

.dx-button {
  padding: 4px 16px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 20px;
  color: $white-color;
  background: $blue-color;
  border-color: $blue-color;
  border-style: solid;
  border-width: 1px;
  outline: none;
  cursor: pointer;
}

.dx-button.size-large {
  padding: 6px 16px;
  font-size: 16px;
}

.dx-button.size-small {
  padding: 2px 6px;
}

.dx-button.mode-text {
  background: $white-color !important;
  color: $black-color;
  border: $border;
  &:hover {
    border: $blue-border !important;
    color: $blue-color !important;
  }
}

.dx-button.mode-dashed {
  background: $white-color !important;
  color: $black-color;
  border-color: $border-color;
  border-style: dashed;
  &:hover {
    border: 1px dashed $blue-color !important;
    color: $blue-color !important;
  }
}

.dx-button.type-danger {
  background: $red-color;
  border-color: $red-color;
}

.dx-button.type-success {
  background: $green-color;
  border-color: $green-color;
}

.dx-button.type-warning {
  background: $orange-color;
  border-color: $orange-color;
}

.dx-button.mode-text.type-danger,
.dx-button.mode-dashed.type-danger {
  color: $red-color;
}

.dx-button.mode-text.type-success,
.dx-button.mode-dashed.type-success {
  color: $green-color;
}

.dx-button.mode-text.type-warning,
.dx-button.mode-dashed.type-warning {
  color: $orange-color;
}

.dx-button.type-ghost {
  background: transparent !important;
  border-color: $white-color !important;
  color: $white-color !important;
  &:hover {
    color: $blue-color !important;
    border-color: $blue-color !important;
  }
}

.dx-button.disabled {
  background-color: $grey-color !important;
  cursor: not-allowed !important;
  border-color: $border-color !important;
  color: $white-color !important;
  &:hover {
    border-color: $border-color !important;
    color: $white-color !important;
  }
}

.dx-button.block {
  width: 100% !important;
}

.dx-button.shape-circle.size-small {
  padding: 0;
  width: 32px !important;
  height: 32px;
  font-size: 12px;
  border-radius: 16px;
  text-align: center;
  overflow: hidden;
}

.dx-button.shape-circle {
  padding: 0;
  width: 40px !important;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
}

.dx-button.shape-circle.size-large {
  padding: 0;
  width: 56px !important;
  height: 56px;
  border-radius: 28px;
  text-align: center;
  overflow: hidden;
}

.dx-button.shape-round.size-small {
  padding: 0 16px;
  width: auto;
  height: 32px;
  border-radius: 16px;
  text-align: center;
  overflow: hidden;
}

.dx-button.shape-round {
  padding: 0 20px;
  width: auto;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
}

.dx-button.shape-round.size-large {
  padding: 0 28px;
  width: auto;
  height: 56px;
  border-radius: 28px;
  text-align: center;
  overflow: hidden;
}
</style>
