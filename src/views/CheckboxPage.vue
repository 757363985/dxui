<template>
  <div class="content-warpper">
    <h1>Checkbox</h1>
    <div class="content-breadcrumnb">
      <BreadCrumnb :config="breadConfig" />
    </div>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <Checkbox />
      </Card>

      <Card title="可以和文字配合使用">
        <Checkbox>dengxi</Checkbox>
      </Card>

      <Card title="传参数checked">
        <Checkbox :checked="true">dengxi</Checkbox>
        <p>必须在父组件里控制传入的checked的值，才能修改状态</p>
      </Card>

      <Card title="传参数defaultChecked">
        <Checkbox :defaultChecked="true">dengxi</Checkbox>
        <p>defaultChecked相当于一个初始状态，不影响组件本身对状态的切换</p>
      </Card>

      <Card title="禁用状态">
        <Checkbox :defaultChecked="true" :disabled="true">dengxi</Checkbox>
        <Checkbox :defaultChecked="false" :disabled="true">dengxi</Checkbox>
      </Card>

      <Card title="@change">
        <!-- <Checkbox :defaultChecked="true" @change="changeChecked">dengxi</Checkbox> -->
        <Checkbox checked @change="changeChecked">dengxi</Checkbox>
        <Checkbox :checked="false" @change="changeChecked">dengxi</Checkbox>
        <Checkbox :defaultChecked="false" @change="changeChecked">dengxi</Checkbox>
        <Checkbox :defaultChecked="false" @change="changeChecked" disabled>dengxi</Checkbox>
        <p>change事件监听组件状态的变化，想要改变的状态，通过@change函数的第一个参数，event.target.checked获取</p>

      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Checkbox from '@/components/checkbox/Checkbox.vue'

@Options({
  components: {
    Card,
    CardGroup,
    BreadCrumnb,
    BreadCrumnbItem: BreadCrumnb.item,
    Checkbox
  }
})
export default class BreadCrumnbPage extends Vue {
  breadConfig = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Checkbox',
      path: 'checkbox'
    }
  ]

  changeChecked(e) {
    alert(
      `你点击想要切换checkebox的状态，想要切换成${e.target.checked}的状态，如果父级传入了checked，请将该值:${e.target.checked}赋值给checked,才能成功切换`
    )
  }
}
</script>

<style></style>
