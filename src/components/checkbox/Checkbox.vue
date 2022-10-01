<template>
  <div class="dx-checkbox-warpper" :class="checkedDisabled ? 'dx-checkbox-disabled' : ''">
    <input
      class="dx-checkbox-input"
      type="checkbox"
      v-model="checkedValue"
      :disabled="checkedDisabled"
      @change="onCheckedValueChange"
    />
    <span class="dx-checkbox-text"><slot /></span>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, ref, PropType } from 'vue'
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
      default: false,
      type: Boolean
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean
    },
    onChange: {
      required: false,
      default: undefined,
      type: Function
    }
  },
  setup(props: Data) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const checkedValue = ref(props.checked || props.defaultChecked)
    const checkedDisabled = ref(props.disabled)

    const onCheckedValueChange = function (e: Event) {
      if (props.checked !== undefined) {
        this.checkedValue = props.checked
      }
      currentInstance?.emit('change', e)
    }

    // 自定义card头部
    const showTitle = ref(false)
    const title = currentInstance?.slots.title

    if (title) {
      showTitle.value = true
    }

    return {
      checkedValue,
      checkedDisabled,
      onCheckedValueChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
.dx-checkbox-warpper {
  display: inline-block;
  margin-right: 8px;
  .dx-checkbox-text {
    padding: 0 8px;
    font-size: 14px;
    vertical-align: text-top;
  }
  input[type='checkbox'] {
    cursor: pointer;
    font-size: 14px;
    width: 16px;
    height: 16px;
    position: relative;
  }

  input[type='checkbox']:after {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    content: ' ';
    color: $white-color;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 3px;
    background: $white-color;
    border: $border;
    box-sizing: border-box;
  }

  input[type='checkbox']:checked:after {
    content: '\2713';
    font-size: 12px;
    font-weight: 600;
    background-color: $blue-color;
    border: none;
  }
}

.dx-checkbox-disabled {
  cursor: not-allowed;
  .dx-checkbox-text {
    padding: 0 8px;
    font-size: 14px;
    vertical-align: text-top;
    color: $grey-color;
  }
  input[type='checkbox'] {
    cursor: not-allowed;
    font-size: 14px;
    width: 16px;
    height: 16px;
    position: relative;
  }

  input[type='checkbox']:after {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    content: ' ';
    color: $white-color;
    display: inline-block;
    visibility: visible;
    padding: 0px 3px;
    border-radius: 3px;
    background: $white-color;
    border: $border;
    box-sizing: border-box;
  }

  input[type='checkbox']:checked:after {
    content: '\2713';
    font-size: 12px;
    font-weight: 600;
    background-color: $grey-color;
    border: none;
  }
}
</style>
