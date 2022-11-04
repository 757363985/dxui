<template>
  <div class="dx-page-content-warpper">
    <h1>CardGroup</h1>
    <div class="components-show-warpper">
      <div class="components-show-item">
        <h2>结合cardGroup使用更加方便</h2>
        <CardGroup :countNumber="3">
          <Card>Hover</Card>
          <Card>Hover</Card>
          <Card :title="3">Hover</Card>
          <Card :title="3">Hover</Card>

        </CardGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'

@Options({
  components: {
    Card,
    CardGroup
  }
})
export default class CardGroupPage extends Vue {}
</script>

<style></style>
