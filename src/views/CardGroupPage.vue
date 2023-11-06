<template>
  <div class="dx-page-content-warpper">
    <h1>CardGroup 卡片组</h1>

    <h2>代码演示</h2>
    <div class="components-show-warpper">
      <div class="components-show-item">
        <h2>结合CardGroup组件使用更加方便</h2>
        <p class="dx-components-description">columnNumber="3" columnNumber表示每行有多少列</p>
        <CardGroup :columnNumber="3">
          <Card>Hover</Card>
          <Card>Hover</Card>
          <Card title="3">Hover</Card>
          <Card title="3">Hover</Card>
        </CardGroup>
        <Code
          :content="`<CardGroup :columnNumber='3'>
  <Card>Hover</Card>
  <Card>Hover</Card>
  <Card title='3'>Hover</Card>
  <Card title='3'>Hover</Card>
</CardGroup>`"
        />

        <h2>结合CardGroup组件使用更加方便</h2>
        <p class="dx-components-description">columnNumber="4" columnNumber表示每行有多少列</p>
        <p class="dx-components-description">columnNumber支持2-99的数字</p>
        <CardGroup :columnNumber="4">
          <Card>Hover</Card>
          <Card>Hover</Card>
          <Card title="4">Hover</Card>
          <Card title="4">Hover</Card>
        </CardGroup>
        <Code
          :content="`<CardGroup :columnNumber='4'>
  <Card>Hover</Card>
  <Card>Hover</Card>
  <Card title='4'>Hover</Card>
  <Card title='4'>Hover</Card>
</CardGroup>`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import { Card, CardGroup } from 'vue3-dxui'
import Code from '@/components/code/Code.vue'

@Options({
  components: {
    Card,
    CardGroup,
    Code
  }
})
export default class CardGroupPage extends Vue {}
</script>

<style></style>
