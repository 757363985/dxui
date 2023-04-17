<template>
  <div class="dx-page-content-warpper">
    <h1>Affix</h1>

    <p class="dx-components-description">
      当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
      页面可视范围过小时，慎用此功能以免遮挡页面内容。
    </p>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <p class="dx-components-description">设置一个top值，距离窗口顶部达到指定偏移量后触发</p>

        <Affix :top="100">
          <Button size="large">top</Button>
        </Affix>
        <p class="dx-components-description">代码</p>
        <Code
          :content="`
<Affix :top='100'>
  <Button size='large'>top</Button>
</Affix>
          `"
        />
      </Card>
      <Card title="zIndex">
        <p class="dx-components-description">
          日常开发中，我们可能遇见很多复杂的情况，为了避免zindex的值不够大，而被网页的其它内容覆盖，或者你有什么别的想法，可以自定义zindex的值
        </p>

        <Code
          :content="`
<Affix :top='100' :zIndex='100'>
  <Button size='large' >zIndex</Button>
</Affix>
          `"
        />

        <Affix :top="100" :zIndex="200">
          <Button size="large">zIndex</Button>
        </Affix>
      </Card>

      <Card title="@affixChange">
        <p class="dx-components-description">
          监听affix组件fixed状态的变化回调，该回调接收一个参数，可以获取到当前affix的状态
        </p>

        <Code
          :content="`
<Affix :top='200' :zIndex='100' @affixChange='handleAffixChange'>
  <Button size='large' >@affixChange</Button>
</Affix>
...
setup() {
  const handleAffixChange = (val: boolean) => {
    console.log(\`是否fixed：\${val}\`)
  }
  return {
    handleAffixChange
  }
}
`"
        />

        <Affix :top="200" :zIndex="200" @affixChange="handleAffixChange">
          <Button size="large">@affixChange</Button>
        </Affix>
      </Card>
      <Card title="disabled">
        <p class="dx-components-description">
          在某些情况下，你可能希望禁用affix的功能,禁用后的affix组件就和正常组件一样的文档流渲染
        </p>

        <Code
          :content="`
<Affix :top='100' :zIndex='100' :disabled='true'>
  <Button size='large' >disabled</Button>
</Affix>
          `"
        />

        <Affix :top="100" :zIndex="200" :disabled="true">
          <Button size="large">disabled</Button>
        </Affix>
      </Card>
      <Card title="bottom">
        <p class="dx-components-description">设置一个bottom值，距离窗口底部达到指定偏移量后触发</p>

        <Code
          :content="`
<Affix :bottom='30' :zIndex='100'>
  <Button size='large'>bottom</Button>
</Affix>
          `"
        />
        <Affix :bottom="30" :zIndex="100">
          <Button size="large">bottom</Button>
        </Affix>
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts" scoped>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
import { Button } from 'vue3-dxui'
import Affix from '@/components/affix/Affix.vue'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Button,
    Affix
  },
  setup() {
    const handleAffixChange = (val: boolean) => {
      console.log(`是否fixed：${val}`)
    }
    return {
      handleAffixChange
    }
  }
}
</script>

<style>
.dx-view-affix {
  height: 200vh;
}
</style>
