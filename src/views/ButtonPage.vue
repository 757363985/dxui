<template>
  <div class="dx-page-content-warpper">
    <h1>Button 按钮</h1>

    <p class="dx-components-description">
      Button
      组件是用户界面中的常见元素，用于触发交互操作、提交表单、导航到其他页面或执行应用程序中的各种功能。按钮通常是用户与应用程序互动的主要方式之一，因此在界面设计中起着关键作用。
    </p>

    <h2>代码演示</h2>

    <CardGroup :columnNumber="2">
      <Card title="size属性">
        <Button size="large">
          <span>large</span>
        </Button>
        <div class="dx-button-divide" />
        <Button>
          <span>default</span>
        </Button>
        <div class="dx-button-divide" />
        <Button size="small">
          <span>small</span>
        </Button>

        <p class="dx-components-description">
          通过size可以控制button的大小，large、default、small 三种类型
        </p>

        <Code
          :content="`
<Button size='large'>
  <span>large</span>
</Button>
          `"
        />
      </Card>

      <Card title="type属性">
        <div style="background: yellow">
          <Button type="info">
            <span>info</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="danger">
            <span>danger</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="success">
            <span>success</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="warning">
            <span>warning</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="ghost">
            <span>ghost</span>
          </Button>
        </div>

        <p class="dx-components-description">
          通过type可以控制button的类型，info、danger、success、warning、ghost 五种类型
        </p>

        <Code
          :content="`
<Button type='success'>
  <span>success</span>
</Button>
          `"
        />
      </Card>

      <Card title="mode属性">
        <Button mode="normal">
          <span>normal</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text">
          <span>text</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="danger">
          <span>text danger</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="success">
          <span>text success</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="warning">
          <span>text warning</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="ghost">
          <span>text ghost</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed">
          <span>dashed</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="warning">
          <span>dashed warning</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="success">
          <span>dashed success</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="danger">
          <span>dashed danger</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="ghost">
          <span>dashed ghost</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="danger" disabled>
          <span>dashed ghost</span>
        </Button>

        <p class="dx-components-description">通过mode可以控制button的模式，normal、text、dashed</p>

        <Code
          :content="`
<Button mode='text'>
  <span>text</span>
</Button>
          `"
        />
      </Card>

      <Card title="block属性">
        <Button block>
          <span>block</span>
        </Button>
        <div class="dx-button-divide" />
        <Button block size="large">
          <span>block large</span>
        </Button>

        <p class="dx-components-description">通过block可以控制button是否占满宽度的100%</p>

        <Code
          :content="`
<Button block>
  <span>block</span>
</Button>
          `"
        />
      </Card>

      <Card title="disabled属性">
        <Button disabled>
          <span>disabled</span>
        </Button>

        <p class="dx-components-description">通过disabled可以控制button是否禁用</p>

        <Code
          :content="`
<Button disabled>
  <span>disabled</span>
</Button>
          `"
        />
      </Card>

      <Card title="click 事件">
        <Button @click="handleClickButton">
          <span>事件</span>
        </Button>
        <div class="dx-button-divide" />
        <Button @click="handleClickButton" disabled>
          <span>事件</span>
        </Button>

        <p class="dx-components-description">button当然也支持点击事件，在禁用状态下是无效的。</p>

        <Code
          :content="`
<Button @click='handleClickButton'>
  <span>事件</span>
</Button>
          `"
        />
      </Card>

      <Card title="shape属性">
        <Button shape="circle" size="small" mode="text"> circle </Button>
        <div class="dx-button-divide" />
        <Button shape="circle" type="warning"> circle </Button>
        <div class="dx-button-divide" />
        <Button shape="circle" size="large" type="ghost"> circle </Button>
        <div class="dx-button-divide" />
        <Button shape="round" size="small" mode="dashed"> round </Button>
        <div class="dx-button-divide" />
        <Button shape="round" mode="text"> round </Button>
        <div class="dx-button-divide" />
        <Button shape="round" size="large" type="danger"> round </Button>

        <p class="dx-components-description">
          shape属性，circle、round，搭配mode和type属性，以及size，可以让button组合出更多样式
        </p>

        <Code
          :content="`
<Button shape='circle' size='small' mode='text'> circle </Button>
          `"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Code from '@/components/code/Code.vue'
import { Button, Card, CardGroup } from 'vue3-dxui'

@Options({
  components: {
    Card,
    CardGroup,
    Button,
    Code
    // BreadCrumnb
  }
})
export default class Home extends Vue {
  // config1 = [
  //   {
  //     text: 'Home',
  //     path: '/'
  //   },
  //   {
  //     text: 'Button',
  //     path: 'button'
  //   }
  // ]

  handleClickButton() {
    alert('点击按钮事件')
  }
}
</script>

<style lang="scss">
@import '@/scss/layout.scss';
</style>
