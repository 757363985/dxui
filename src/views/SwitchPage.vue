<template>
  <div class="content-warpper">
    <h1>Switch</h1>
    <div class="content-breadcrumnb">
      <BreadCrumnb :config="breadConfig" />
    </div>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <Switch />
      </Card>

      <Card title="checked">
        <Switch checked />
        <Switch :checked="false" />
        <p>checked赋值后状态不能依靠checked组件自身改变</p>
      </Card>

      <Card title="disabled">
        <Switch checked :disabled="true" />
        <Switch :checked="false" :disabled="true" />
      </Card>

      <Card title="defaultChecked">
        <Switch :defaultChecked="true" />
        <Switch :defaultChecked="false" />
        <p>
          通过defaultChecked 为
          switch组件提供初始值，布尔值类型，默认为false，defaultChecked与checked不同，组件自身可以改变其状态
        </p>
      </Card>

      <Card title="可以提供开启和关闭状态下的文案">
        <Switch :defaultChecked="true" openText="开弹幕" closeText="关弹幕" />
        <Switch :defaultChecked="false" openText="开弹幕" closeText="关弹幕" />
        <Switch :defaultChecked="true" openText="开" closeText="关" />
        <Switch :defaultChecked="false" openText="开" closeText="关" />
        <p>通过openText为switch组件提供开启状态下文案，closeText为switch组件提供关闭状态下的文案</p>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Switch from '@/components/switch/Switch.vue'

@Options({
  components: {
    Card,
    CardGroup,
    BreadCrumnb,
    BreadCrumnbItem: BreadCrumnb.item,
    Switch
  }
})
export default class BreadCrumnbPage extends Vue {
  breadConfig = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'switch',
      path: 'switch'
    }
  ]
}
</script>

<style></style>
