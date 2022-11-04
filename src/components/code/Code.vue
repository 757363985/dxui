<template>
  <div>
    <pre class="dx-code-warpper">
      <code class="language-html">
        <Codemirror
          ref="cm"
          v-model="contentHtml"
          :options="cmOptions"
          :extensions="extensions"
          placeholder="Code gose here..."
          :style="{ height: 'auto' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tabSize="2"
        ></Codemirror>
      </code>
    </pre>
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, getCurrentInstance, PropType, ref, SetupContext } from 'vue'
// import { useRouter } from 'vue-router'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { Data } from './types/index'

export default {
  props: {
    // 通过传递类名，来自定义样式
    className: {
      require: false,
      default: '',
      type: String
    },
    content: {
      require: true,
      default: '',
      type: String
    }
  },
  components: {
    Codemirror
  },
  setup(props: Data, ctx: SetupContext) {
    const currentInstance: ComponentInternalInstance | null = getCurrentInstance()
    const contentRef = ref(props.content)
    console.log(ctx)
    console.log(currentInstance)
    const contentHtml = '11'
    const extensions = [javascript(), oneDark]
    const cmOptions = {
      // 语言及语法模式
      mode: 'text/x-sql',
      // 主题
      theme: 'idea',
      // 显示函数
      line: true,
      lineNumbers: true,
      // 软换行
      lineWrapping: true,
      // tab宽度
      tabSize: 4
    }
    return {
      contentRef,
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
}
</style>
