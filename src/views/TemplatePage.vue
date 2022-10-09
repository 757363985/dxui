<template>
  <div class="content-warpper">
    <h1>Template</h1>
    <div class="content-breadcrumnb">
      <BreadCrumnb :config="config1" />
    </div>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <div>123</div>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'

@Options({
  components: {
    Card,
    CardGroup,
    BreadCrumnb,
    BreadCrumnbItem: BreadCrumnb.item
  }
})
export default class TemplatePage extends Vue {
  config1 = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Template',
      path: 'template'
    }
  ]
}
</script>

<style></style>
