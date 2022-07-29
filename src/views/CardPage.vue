<template>
  <div class="content-warpper">
    <h1>Card</h1>
    <div class="components-show-warpper">
      <div class="components-show-item">
        <h2>正常用法</h2>
        <Card title="这是title"> 这是内容 </Card>
      </div>

      <div class="components-show-item">
        <h2>自定义的title</h2>
        <Card>
          <template v-slot:title>
            <Button>自定义的title</Button>
          </template>
          这是内容
        </Card>
      </div>

      <div class="components-show-item">
        <h2>内嵌型</h2>
        <Card title="内嵌型">
          <Card>
            <template v-slot:title>
              <Button>自定义的title</Button>
            </template>
            这是内容
          </Card>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>简洁型</h2>
        <Card>
          <h4>一张简单的card，没有标题</h4>
          <p>只需要定义内容</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>背景色</h2>
        <Card background="#f8f8f8">
          <h4>常用的背景色</h4>
          <p>background="#f8f8f8"</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>hover boxShadow</h2>
        <Card background="#f8f8f8" hover="boxShadow">
          <h4>hover boxShadow</h4>
          <p>hover="boxShadow"</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>hover floatUp</h2>
        <Card background="#f8f8f8" hover="floatUp">
          <h4>hover floatUp</h4>
          <p>hover="floatUp"</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>hover enlarge</h2>
        <Card background="#f8f8f8" hover="enlarge">
          <h4>hover enlarge</h4>
          <p>hover="enlarge"</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>hover floatUp boxShadow</h2>
        <Card background="#f8f8f8" hover="floatUp boxShadow">
          <h4>hover floatUp boxShadow</h4>
          <p>hover="floatUp boxShadow"</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>hover enlarge boxShadow</h2>
        <Card background="#f8f8f8" hover="enlarge boxShadow">
          <h4>hover enlarge boxShadow</h4>
          <p>hover="enlarge boxShadow"</p>
        </Card>
      </div>

      <div class="components-show-item">
        <h2>结合CardGroup组件使用更加方便</h2>
        <P>columnNumber="3" columnNumber表示每行有多少列</P>
        <CardGroup :columnNumber="3">
          <Card>Hover</Card>
          <Card>Hover</Card>
          <Card :title="3">Hover</Card>
          <Card :title="3">Hover</Card>
        </CardGroup>
      </div>

      <div class="components-show-item">
        <h2>结合CardGroup组件使用更加方便</h2>
        <P>columnNumber="4" columnNumber表示每行有多少列</P>
        <p>columnNumber支持2-99的数字</p>
        <CardGroup :columnNumber="4">
          <Card>Hover</Card>
          <Card>Hover</Card>
          <Card :title="4">Hover</Card>
          <Card :title="4">Hover</Card>
        </CardGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Button from '@/components/button/Button.vue'

@Options({
  components: {
    Card,
    CardGroup,
    Button
  }
})
export default class CardPage extends Vue {}
</script>

<style></style>
