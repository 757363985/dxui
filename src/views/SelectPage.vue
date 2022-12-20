<template>
  <div class="dx-page-content-warpper">
    <h1>Select</h1>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <div>123</div>
        <p class="dx-components-description">简单介绍</p>
        <Select />
      </Card>
      <Card title="代码展示">
        <Code
          :content="`
<Card title=&quot;基本用法&quot;>
  <div>123</div>
  <p class=&quot;dx-components-description&quot;>简单介绍</p>
</Card>
          `"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
import Select from '@/components/select/Select.vue'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Select
  }
}
</script>

<style></style>
