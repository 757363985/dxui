<template>
  <div class="content-warpper">
    <h1>Switch 开关</h1>
    <div class="content-breadcrumnb">
      <BreadCrumnb :config="config1" />
    </div>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <Switch />
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
    Switch
  }
})
export default class SwitchPage extends Vue {
  config1 = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Switch',
      path: 'switch'
    }
  ]
}
</script>

<style></style>
