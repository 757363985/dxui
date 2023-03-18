<template>
  <div
    v-if="showSlots"
    :class="isCloumns ? 'dx-checkboxgroup-direaction-column' : ''"
    ref="checkboxGroup"
  >
    <slot />
  </div>
  <div v-else-if="options">
    <div
      class="dx-checkbox-item-warpper"
      :class="isCloumns ? 'dx-checkboxgroup-direaction-column' : ''"
      v-for="item in options"
      :key="item.value"
    >
      <Checkbox :disabled="disabled" :value="item.value">{{ item.label }}</Checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, PropType, ref, SetupContext, provide, watch, reactive } from 'vue'
import { useShowSlotOrDefaultNode } from '@/common/index'

import { Data, Option, CheckedValue } from './types/index'
import Checkbox from '@/components/checkbox/Checkbox.vue'

export default {
  name: 'CheckboxGroup',
  props: {
    // checkbox配置的配置项
    options: {
      required: false,
      default: undefined,
      type: Array as PropType<Option[]>
    },
    //  默认的选中项,与Option中的value值相对应
    defaultValue: {
      required: false,
      default: undefined,
      type: Array as PropType<string[]>
    },
    // 整组失效
    disabled: {
      required: false,
      default: undefined,
      type: Boolean
    },
    // 指定的选中项,与Option中的value值相对应，由父组件确定后，组件自身无法更改，需要通过父组件改变传入的值
    value: {
      required: false,
      default: undefined,
      type: Array as PropType<string[]>
    },
    // 当选中的值发生改变时触发，也可以通过@Change的方式触发
    cheboxGroupChange: {
      required: false,
      default: undefined,
      type: Function as PropType<(params1: CheckedValue) => void> | undefined
    },
    // 是否希望每个选项单独一行
    isCloumns: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  components: {
    Checkbox
  },
  setup(props: Data, ctx: SetupContext) {
    const showSlots = useShowSlotOrDefaultNode(ctx)
    const checkboxGroup: any = ref(null)
    let nowValue: string[] = []

    if (Object.prototype.toString.call(props.value) === '[object Array]') {
      nowValue = JSON.parse(JSON.stringify(props.value))
    } else if (Object.prototype.toString.call(props.defaultValue) === '[object Array]') {
      nowValue = JSON.parse(JSON.stringify(props.defaultValue))
    }

    const allCheckboxChange = function (value: string, checked: boolean) {
      const index = nowValue.findIndex((item: string) => {
        return item === value
      })
      if (checked) {
        if (index === -1) {
          nowValue.push(value)
        }
      } else {
        if (index !== -1) {
          nowValue.splice(index, 1)
        }
      }
      if (typeof props.cheboxGroupChange === 'function') {
        props.cheboxGroupChange(nowValue)
      }
      ctx.emit('checkboxGroupChange', nowValue)
    }

    const reactiveValue = reactive({
      disabled: props.disabled,
      value: props.value,
      defaultValue: props.defaultValue,
      changeCheckbox: allCheckboxChange
    })

    provide('checkboxGroupConfig', reactiveValue)

    watch(
      props,
      () => {
        reactiveValue.value = props.value
        reactiveValue.defaultValue = props.defaultValue
        reactiveValue.disabled = props.disabled
      },
      { deep: true }
    )

    onMounted(() => {
      if (checkboxGroup.value?.children && checkboxGroup.value?.children?.length) {
        const newList = Array.from(checkboxGroup?.value?.children)

        const hasNotCheckboxComponents = newList.some((item: any) => {
          return !item.className.includes('dx-checkbox-warpper')
        })
        if (hasNotCheckboxComponents) {
          // 算是给开发者的提醒，在CardGroup里只能使用card组件
          console.log(Error('Only Checkbox components can be used in CheckboxGroup'))
        }
      }
    })

    return {
      showSlots,
      checkboxGroup
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';

.dx-checkbox-item-warpper {
  display: inline-block;
}

.dx-checkboxgroup-direaction-column {
  display: block;
}

.dx-checkboxgroup-direaction-column {
  ::v-deep .dx-checkbox-warpper {
    display: block;
  }
}
</style>
