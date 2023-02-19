<template>
  <div
    class="dx-select-warpper"
    :class="selectDisabled ? 'dx-select-warpper-disabled' : ''"
    @keydown.delete="deleteSlectedOptions"
  >
    <div @click="toggleSelectStatus">
      <div class="dx-select-input">
        <!-- 当有选中的内容时 -->
        <div class="dx-select-has-content" v-show="selectInputDataArray.length && !showSearchInput">
          <div class="dx-select-tag-warpper" v-if="isTag">
            <Tag
              @closeClick="closeTagClick(item)"
              closable
              v-for="item in selectInputDataArray"
              :key="item.value"
              >{{ item.name }}</Tag
            >
          </div>
          <span v-else>
            {{ selectInputValue }}
          </span>
          <!-- <input type="text" class="dx-select-input-focus" ref="inputFocus" /> -->
        </div>

        <input
          type="text"
          class="dx-select-input-focus"
          :class="showSearchInput ? 'dx-select-input-search' : ''"
          ref="inputFocus"
          v-model="selectSearchInputValue"
          @input="SearchInputValueChange"
          placeholder="请输入筛选条件"
        />
        <!-- 当没有选中的内容时 -->
        <span v-show="!selectInputDataArray.length" class="dx-select-placeholder">{{
          placeholder
        }}</span>
      </div>
      <span class="dx-select-icon" :class="showSearchInput ? 'dx-select-search-icon' : ''"></span>
    </div>

    <div class="dx-select-options-warpper" v-show="selectStatus === 'focus'">
      <div
        class="dx-select-options-item"
        v-for="item in selectOptions.list"
        :class="
          selectInputDataArray.some((selectedItem) => {
            return selectedItem.value === item.value
          })
            ? 'dx-options-item-active'
            : ''
        "
        :key="item.name + item.value"
        @click="toggleOptions(item, $event)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext, reactive, watch, onMounted } from 'vue'
import { Data, OptionItem } from './types/index'
// import { useRouter } from 'vue-router'
import Tag from '@/components/tag/Tag.vue'

export default {
  components: {
    Tag
  },
  props: {
    // 配置options的可选项
    options: {
      required: false,
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      required: false,
      default: '请选择'
    },
    // 单选或者多选 multiple | single
    type: {
      required: false,
      default: 'single',
      type: String
    },
    // 是否支持搜索
    search: {
      required: false,
      default: false,
      type: Boolean
    },
    // 是否禁用
    disabled: {
      required: false,
      default: false,
      type: Boolean
    },
    // 是否启用标签模式
    mode: {
      required: false,
      default: 'normal',
      type: String
    }
  },
  setup(props: Data, context: SetupContext) {
    // const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    // input字符串的值
    const selectInputValue = ref('')
    const inputFocus = ref<any>(null)
    // 当前的状态，fcous或者blur
    const selectStatus = ref('')
    // 可选的配置项options
    const selectOptions = reactive<{ list: OptionItem[] }>({
      list: props?.options
    })

    const showSearchInputKey = ref(false)

    // 是否展示searchInput框
    const showSearchInput = ref<boolean>(
      props.search && selectStatus.value === 'focus' && showSearchInputKey.value
    )

    // 是否禁用
    const selectDisabled = ref(props.disabled)

    // 是否是tag模式
    const isTag = ref(props.mode === 'tag')

    // 用户输入的select search字段
    const selectSearchInputValue = ref('')

    // 被选中的参数的保存值
    const selectInputDataArray = reactive<OptionItem[]>(
      props?.options?.filter((item: OptionItem) => {
        return item.selected === true
      }) as OptionItem[]
    )

    // 监测用户输入的search变化
    const SearchInputValueChange = (e: any) => {
      if (!showSearchInput.value) {
        selectSearchInputValue.value = ''
      } else {
        const result = props.options.filter((item: any) => {
          return item.name.includes(e.target.value)
        })
        console.log(result)
        // selectOptions = result
        selectOptions.list = result
      }
    }

    // const changeSelectStatus = () => {
    //   selectStatus.value = 'focus'
    // }

    // 改变select的聚焦状态
    const toggleSelectStatus = (e: Event) => {
      if (props.disabled) {
        return
      }
      showSearchInputKey.value = true
      e.stopPropagation()
      if (selectStatus.value === 'focus') {
        selectStatus.value = 'blur'
      } else {
        selectStatus.value = 'focus'
      }
    }

    // 改变选项的选中状态
    const toggleOptions = (item: OptionItem, e: Event) => {
      if (props.disabled) {
        return
      }
      showSearchInputKey.value = false
      e.stopPropagation()
      inputFocus.value?.focus()
      if (props.type === 'single') {
        selectStatus.value = 'blur'
        if (selectInputDataArray[0] && selectInputDataArray[0].value === item.value) {
          selectInputDataArray.shift()
        } else {
          selectInputDataArray[0] = item
        }
      } else {
        const selectedIndex = selectInputDataArray.findIndex((selectItem) => {
          return selectItem.value === item.value
        })
        if (selectedIndex > -1) {
          selectInputDataArray.splice(selectedIndex, 1)
        } else {
          selectInputDataArray.push(item)
        }
      }
    }

    // 删除被选中的option
    const deleteSlectedOptions = () => {
      inputFocus.value?.focus()
      if (showSearchInput.value) {
        return
      }
      if (selectStatus.value === 'focus' && selectInputDataArray.length > 0) {
        selectInputDataArray.pop()
      }
    }

    // 点击tag的删除，关闭选中项
    const closeTagClick = (item: OptionItem) => {
      inputFocus.value?.focus()
      const findIndex = selectInputDataArray.findIndex((selectItem) => {
        return selectItem.value === item.value
      })
      selectInputDataArray.splice(findIndex, 1)
    }

    watch(
      showSearchInputKey,
      (val) => {
        showSearchInput.value = props.search && selectStatus.value === 'focus' && val
      },
      { immediate: true, deep: true }
    )

    watch(
      selectInputDataArray,
      (a) => {
        selectInputValue.value = a
          .map((item) => {
            return item?.name
          })
          .join(',')
      },
      { immediate: true, deep: true }
    )

    onMounted(() => {
      watch(selectStatus, (val) => {
        if (val === 'focus') {
          inputFocus.value?.focus()
        } else {
          inputFocus.value?.blur()
        }
        showSearchInput.value = props.search && val === 'focus' && showSearchInputKey
      })
    })

    document.body.addEventListener('click', () => {
      selectStatus.value = 'blur'
    })

    return {
      selectInputValue,
      selectSearchInputValue,
      inputFocus,
      isTag,
      showSearchInput,
      // changeSelectStatus,
      toggleSelectStatus,
      selectOptions,
      toggleOptions,
      selectStatus,
      selectInputDataArray,
      selectDisabled,
      deleteSlectedOptions,
      closeTagClick,
      SearchInputValueChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
.dx-select-warpper {
  // display: inline-block;
  border: $border;
  padding: 0 12px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  // min-width: 120px;

  &:hover {
    border: 1px solid $blue-middle-color;
  }

  .dx-select-placeholder {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    cursor: pointer;
    line-height: 30px;
    font-size: 14px;
    padding-right: 6px;
    width: calc(100% - 12px);
  }

  .dx-select-input {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    cursor: pointer;
    line-height: 30px;
    font-size: 14px;
    margin-right: 6px;
    width: calc(100% - 24px);
  }

  .dx-select-has-content {
    display: inline-block;
  }

  .dx-select-tag-warpper {
    display: inline-block;
    line-height: initial;
  }

  .dx-select-input-focus {
    outline: none;
    border: none;
    width: 1px;
    font-size: 14px;
    line-height: 30px;
    overflow: hidden;
  }

  .dx-select-input-search {
    width: 100% !important;
  }

  .dx-select-placeholder {
    color: $grey-color;
  }
  .dx-select-icon {
    display: inline-block;
    height: 100%;
    line-height: 30px;
    font-size: 22px;
    color: $grey-color;
    &::before {
      content: '\2228';
    }
  }

  .dx-select-search-icon {
    display: inline-block;
    height: 100%;
    line-height: 30px;
    font-size: 12px;
    &::before {
      content: '\1F50D' !important;
    }
  }

  // 改变滚动条的盒子
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }
  // 改变滚动条轨道
  ::-webkit-scrollbar-track {
    // border-radius: 10px;
    display: none;
  }
  // 改变滚动条的内容
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: $grey-color;
  }
  /*定义最上方和最下方的按钮*/
  ::-webkit-scrollbar-button {
    display: none;
  }

  .dx-select-options-warpper {
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(100% + 4px);
    padding: 4px 0;
    background: $white-color;
    box-shadow: 2px 2px 20px rgb(0 0 0 / 29%);
    border-radius: 4px;
    z-index: 1000;
    max-height: 120px;
    overflow-y: auto;

    .dx-select-options-item {
      line-height: 28px;
      padding: 0 12px;
      &:hover {
        background: $background-color;
      }
      overflow: hidden;
    }
    .dx-select-options-item.dx-options-item-active {
      background: $blue-light-color;
    }
  }
}

.dx-select-warpper-disabled {
  cursor: not-allowed !important;
  background: $border-color !important;

  &:hover {
    border: $border;
  }

  .dx-select-input-focus {
    background: transparent !important;
    cursor: not-allowed !important;
  }

  .dx-select-input,
  .dx-select-placeholder {
    background: transparent !important;
    cursor: not-allowed !important;
  }
}

::v-deep .dx-tag-warpper {
  margin: 0 8px 0 0;
}
</style>
