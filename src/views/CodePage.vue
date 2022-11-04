<template>
  <div class="dx-page-content-warpper">
    <h1>Template</h1>

    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <Code></Code>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'

export default {
  components: {
    Card,
    CardGroup,
    Code
  },
  setup() {
    return {}
  }
}
</script>

<style></style>
