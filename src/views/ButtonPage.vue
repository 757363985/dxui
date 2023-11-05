<template>
  <div class="dx-page-content-warpper">
    <h1>Button</h1>
    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="config1" />
    </div> -->

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
      </Card>

      <Card title="block属性">
        <Button block>
          <span>block</span>
        </Button>
        <div class="dx-button-divide" />
        <Button block size="large">
          <span>block large</span>
        </Button>
      </Card>

      <Card title="disabled属性">
        <Button disabled>
          <span>disabled</span>
        </Button>
      </Card>

      <Card title="click 事件">
        <Button @click="handleClickButton">
          <span>事件</span>
        </Button>
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
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from '@/components/button/Button.vue'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
@Options({
  components: {
    Card,
    CardGroup,
    Button
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
