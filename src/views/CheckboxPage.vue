<template>
  <div class="dx-page-content-warpper">
    <h1>Checkbox</h1>
    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="breadConfig" />
    </div> -->

    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <Checkbox />
      </Card>

      <Card title="可以和文字配合使用">
        <Checkbox>dengxi</Checkbox>
      </Card>

      <Card title="传参数checked">
        <Checkbox :checked="true">dengxi</Checkbox>
        <p class="dx-components-description">必须在父组件里控制传入的checked的值，才能修改状态</p>
      </Card>

      <Card title="传参数defaultChecked">
        <Checkbox :defaultChecked="true">dengxi</Checkbox>
        <p class="dx-components-description">
          defaultChecked相当于一个初始状态，不影响组件本身对状态的切换
        </p>
      </Card>

      <Card title="禁用状态">
        <Checkbox :defaultChecked="true" :disabled="true">dengxi</Checkbox>
        <Checkbox :defaultChecked="false" :disabled="true">dengxi</Checkbox>
      </Card>

      <Card title="@changeCheckbox展示">
        <Checkbox checked @changeCheckbox="changeChecked">checked为true</Checkbox>
        <Checkbox :checked="false" @changeCheckbox="changeChecked">checked为false</Checkbox>
        <Checkbox :defaultChecked="true" @changeCheckbox="changeChecked"
          >defaultChecked为true</Checkbox
        >
        <Checkbox :defaultChecked="false" @changeCheckbox="changeChecked"
          >defaultChecked为false</Checkbox
        >
        <Checkbox :defaultChecked="false" @changeCheckbox="changeChecked" disabled
          >disabled</Checkbox
        >
        <p class="dx-components-description">
          change事件监听组件状态的变化，想要改变的状态，通过@changeCheckbox函数的第一个参数，获得当前checkbox的最新状态
        </p>
      </Card>

      <Card title="@clickCheckbox展示">
        <Checkbox checked @clickCheckbox="onClickCheckbox">checked为true</Checkbox>
        <Checkbox :checked="checkedVal" @clickCheckbox="onClickCheckbox1"
          >checked为checkedVal</Checkbox
        >
        <Checkbox :defaultChecked="true" @clickCheckbox="onClickCheckbox"
          >defaultChecked为true</Checkbox
        >
        <Checkbox
          :defaultChecked="false"
          @changeCheckbox="changeChecked"
          @clickCheckbox="onClickCheckbox"
          >defaultChecked为false</Checkbox
        >
        <Checkbox :defaultChecked="false" @clickCheckbox="onClickCheckbox" disabled
          >disabled</Checkbox
        >
        <p class="dx-components-description">
          click事件监听组件状态的变化，想要改变的状态，通过@clickCheckbox事件，当组件处于disabled状态时，不会触发函数的第一个参数，获得当前checkbox的最新状态
        </p>
        <p class="dx-components-description">
          clickCheckbox事件，当组件处于disabled状态时，不会触发
        </p>

        <p class="dx-components-description">clickCheckbox事件会早于changeCheckbox事件触发</p>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Checkbox from '@/components/checkbox/Checkbox.vue'

@Options({
  components: {
    Card,
    CardGroup,
    // BreadCrumnb,
    // BreadCrumnbItem: BreadCrumnb.item,
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

  checkedVal = false

  changeChecked(newVal) {
    alert(`change当前组件的值为:${newVal}`)
  }

  onClickCheckbox(newVal) {
    alert(`click当前组件的值为:${newVal}`)
  }

  onClickCheckbox1(newVal) {
    this.checkedVal = !this.checkedVal
    alert(`click当前组件的值为:${newVal}`)
  }
}
</script>

<style></style>
