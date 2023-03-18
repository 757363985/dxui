<template>
  <div
    class="dx-checkbox-warpper"
    :class="checkedDisabled ? 'dx-checkbox-disabled' : ''"
    @click="onClickCheckboxWarpper"
  >
    <div class="dx-checkbox-input" :class="checkedValue ? 'dx-checkbox-input-checked' : ''"></div>
    <label class="dx-checkbox-text"><slot /></label>
  </div>
</template>

<script lang="ts">
import {
  ref,
  SetupContext,
  watch,
  inject,
  ComponentInternalInstance,
  getCurrentInstance,
  watchEffect
} from 'vue'
import { Data } from './types'

export default {
  props: {
    value: {
      required: false,
      default: '',
      type: String
    },
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
    }
  },
  setup(props: Data, ctx: SetupContext) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()

    // 选中状态的值
    const checkedValue = ref(props?.checked || undefined)

    // 禁用状态的值
    let checkedDisabled = ref(props?.disabled)

    // 来自CheckboxGroup的配置
    let checkboxGroupConfig: any = ''
    watchEffect(() => {
      if (props.checked === true) {
        checkedValue.value = true
      } else if (props.checked === false) {
        checkedValue.value = false
      } else if (props.defaultChecked === true) {
        checkedValue.value = true
      } else if (props.defaultChecked === false) {
        checkedValue.value = false
      }
    })

    // 如果父组件使用了CheckboxGroup
    if (currentInstance?.parent?.type?.name === 'CheckboxGroup') {
      checkboxGroupConfig = inject('checkboxGroupConfig')
      watchEffect(() => {
        if (checkboxGroupConfig) {
          const checkboxGroupConfigValue = checkboxGroupConfig?.value?.some((item: string) => {
            return item === props.value
          })
          const checkboxGroupConfigDefaultValue = checkboxGroupConfig?.defaultValue?.some(
            (item: string) => {
              return item === props.value
            }
          )

          if (checkboxGroupConfigValue === true) {
            checkedValue.value = true
          } else if (checkboxGroupConfigValue === false) {
            checkedValue.value = false
          } else if (checkboxGroupConfigDefaultValue === true) {
            checkedValue.value = true
          } else if (checkboxGroupConfigDefaultValue === false) {
            checkedValue.value = false
          }

          checkedDisabled = ref(checkboxGroupConfig?.disabled || props?.disabled)
        }
      })
    }

    const onClickCheckboxWarpper = function () {
      // 父组件重新定义了chebox的状态，组件自身不能更改
      if (
        props.checked === undefined &&
        !checkedDisabled.value &&
        checkboxGroupConfig.value === undefined
      ) {
        checkedValue.value = !checkedValue.value
      }

      if (props.disabled) {
        return false
      } else {
        ctx?.emit('clickCheckbox', checkedValue.value)
      }
    }

    watch(checkedValue, (newVal) => {
      ctx?.emit('changeCheckbox', newVal)
      if (typeof checkboxGroupConfig?.changeCheckbox === 'function') {
        checkboxGroupConfig.changeCheckbox(props.value, newVal)
      }
    })

    return {
      checkedValue,
      checkedDisabled,
      onClickCheckboxWarpper
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
.dx-checkbox-warpper {
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  user-select: none;
  cursor: pointer;

  .dx-checkbox-text {
    padding: 0 8px;
    font-size: 14px;
    vertical-align: text-top;
    cursor: pointer;
  }

  .dx-checkbox-input {
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    display: inline-block;
    border: 1px solid $border-color;
  }
  .dx-checkbox-input-checked {
    padding: 3px 3px;
    background-color: $blue-color;
    border: 1px solid $blue-color;
    position: relative;

    &::before {
      position: absolute;
      content: ' ';
      width: 4px;
      height: 8px;
      transform: rotate(45deg);
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      top: 1px;
      left: 4px;
    }
  }
}

.dx-checkbox-disabled {
  cursor: not-allowed;

  .dx-checkbox-text {
    padding: 0 8px;
    font-size: 14px;
    vertical-align: text-top;
    color: $grey-color;
    cursor: not-allowed;
  }

  .dx-checkbox-input {
    cursor: not-allowed;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    display: inline-block;
    border: 1px solid $border-color;
  }

  .dx-checkbox-input-checked {
    padding: 3px 3px;
    background-color: $border-color;
    border: 1px solid transparent;
    position: relative;

    &::before {
      position: absolute;
      content: ' ';
      width: 4px;
      height: 8px;
      transform: rotate(45deg);
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      top: 1px;
      left: 4px;
    }
  }
}
</style>
