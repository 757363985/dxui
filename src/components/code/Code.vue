<template>
  <div class="dx-code-warpper">
    <!-- <pre class="dx-code-warpper"> -->
      <!-- <code class="language-html"> -->
        <Codemirror
          v-model="contentHtml"
          :options="cmOptions"
          :extensions="extensions"
          placeholder="Code gose here..."
          :style="{ height: 'auto' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tabSize="1"
          :disabled="readOnly"
          :indentWithTab="true"
        >
        </Codemirror>
      <!-- </code> -->
    <!-- </pre> -->
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { oneDark } from '@codemirror/theme-one-dark'
import { Data } from './types/index'

export default {
  props: {
    // 是否启用只可读
    readOnly: {
      require: false,
      default: true,
      type: Boolean
    },
    content: {
      require: true,
      default: ''
    }
  },
  data: () => {
    return {
      codeContent: ''
    }
  },
  components: {
    Codemirror
  },
  setup(props: Data) {
    const contentHtml = ref(props.content)
    const extensions = [javascript(), html(), oneDark]
    const cmOptions = {
      // 语言及语法模式
      mode: 'text/javascript',
      // 主题
      theme: 'base16-dark',
      readOnly: true,
      disabled: true,
      // 显示函数
      line: true,
      lineNumbers: true,
      // 软换行
      lineWrapping: true,
      // tab宽度
      tabSize: 0
    }

    watch(
      () => props.content,
      (newVal) => {
        contentHtml.value = newVal
      },
      {
        deep: true
      }
    )
    return {
      contentHtml,
      cmOptions,
      extensions
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';

.dx-code-warpper {
  background: $black-color;
  color: $white-color;
  border-radius: 4px;
  margin: 12px 0;
}
</style>
