<template>
  <div class="dx-page-content-warpper">
    <h1>Card</h1>
    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="config" />
    </div> -->

    <CardGroup :columnNumber="1">
      <Card title="正常用法,这是title"> 这是内容 </Card>

      <Card>
        <template v-slot:title>
          <Button>自定义的title</Button>
        </template>
        这是内容
      </Card>

      <Card title="card内嵌card">
        <Card>
          <template v-slot:title>
            <Button>自定义的title</Button>
          </template>
          这是内容
        </Card>
      </Card>

      <Card border title="这是有border的card"> 这是有border的card </Card>

      <Card>
        <h4>一张简单的card，没有标题</h4>
        <p>只需要定义内容</p>
      </Card>

      <Card background="#f8f8f8">
        <h4>自定义背景色</h4>
        <p>background="#f8f8f8"</p>
      </Card>

      <Card hover="boxShadow">
        <h4>hover boxShadow</h4>
        <p>hover="boxShadow"</p>
      </Card>

      <Card hover="floatUp">
        <h4>hover floatUp</h4>
        <p>hover="floatUp"</p>
      </Card>

      <Card hover="enlarge">
        <h4>hover enlarge</h4>
        <p>hover="enlarge"</p>
      </Card>

      <Card hover="floatUp boxShadow">
        <h4>hover floatUp boxShadow</h4>
        <p>hover="floatUp boxShadow"</p>
      </Card>

      <Card hover="enlarge boxShadow">
        <h4>hover enlarge boxShadow</h4>
        <p>hover="enlarge boxShadow"</p>
      </Card>
    </CardGroup>

    <h2>结合CardGroup组件使用更加方便</h2>
    <p class="dx-components-description">columnNumber="3" columnNumber表示每行有多少列</p>
    <CardGroup :columnNumber="3">
      <Card>Hover</Card>
      <Card>Hover</Card>
      <Card :title="3">Hover</Card>
      <Card :title="3">Hover</Card>
    </CardGroup>

    <h2>结合CardGroup组件使用更加方便</h2>
    <p class="dx-components-description">columnNumber="4" columnNumber表示每行有多少列</p>
    <p class="dx-components-description">columnNumber支持2-99的数字</p>
    <CardGroup :columnNumber="4">
      <Card>Hover</Card>
      <Card>Hover</Card>
      <Card :title="4">Hover</Card>
      <Card :title="4">Hover</Card>
    </CardGroup>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Card from '@/components/card/Card.vue'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Button from '@/components/button/Button.vue'

@Options({
  components: {
    Card,
    CardGroup,
    Button
    // BreadCrumnb
  }
})
export default class CardPage extends Vue {
  config = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Card',
      path: '/card'
    }
  ]
}
</script>

<style></style>
