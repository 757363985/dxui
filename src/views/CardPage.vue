<template>
  <div class="dx-page-content-warpper">
    <h1>Card 卡片</h1>
    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="config" />
    </div> -->

    <p class="dx-components-description">
      Card 卡片 组件通常是用于构建用户界面的一种常见 UI
      元素，它用于展示信息、内容或功能模块，并通常以卡片状的形式呈现。卡片通常包含标题、文本、图像、按钮和其他交互元素，以便向用户呈现信息并提供操作。
    </p>

    <h2>代码演示</h2>

    <CardGroup :columnNumber="2">
      <Card title="正常用法,这是title">
        这是内容
        <Code :content="`<Card title='正常用法,这是title'> 这是内容 </Card>`" />
      </Card>

      <Card>
        <template v-slot:title>
          <Button>自定义的title</Button>
        </template>
        这是内容
        <Code
          :content="`<Card>
  <template v-slot:title>
    <Button>自定义的title</Button>
  </template> 这是内容
</Card>`"
        />
      </Card>

      <Card title="card内嵌card">
        <Card>
          <template v-slot:title>
            <Button>自定义的title</Button>
          </template>
          这是内容
        </Card>
      </Card>

      <Card border title="这是有border的card">
        这是有border的card
        <Code
          :content="`<Card border title='这是有border的card'>
  这是有border的card
</Card>`"
        />
      </Card>

      <Card>
        <h4>一张简单的card，没有标题</h4>
        <p>只需要定义内容</p>
        <Code
          :content="`<Card>
  <h4>一张简单的card，没有标题</h4>
  <p>只需要定义内容</p>
</Card>`"
        />
      </Card>

      <Card background="yellow">
        <h4>自定义背景色</h4>
        <p>background=yellow</p>
        <Code
          :content="`<Card background='yellow'>
  <h4>自定义背景色</h4>
  <p>background=yellow</p>
</Card>`"
        />
      </Card>

      <Card hover="boxShadow">
        <h4>hover boxShadow</h4>
        <p>hover="boxShadow"</p>
        <Code
          :content="`<Card hover='boxShadow'>
  <h4>hover boxShadow</h4>
  <p>hover=boxShadow</p>
</Card>`"
        />
      </Card>

      <Card hover="floatUp">
        <h4>hover floatUp</h4>
        <p>hover="floatUp"</p>
        <Code
          :content="`<Card hover='floatUp'>
  <h4>hover floatUp</h4>
  <p>hover=floatUp</p>
</Card>`"
        />
      </Card>

      <Card hover="enlarge">
        <h4>hover enlarge</h4>
        <p>hover="enlarge"</p>
        <Code
          :content="`<Card hover='enlarge'>
  <h4>hover enlarge</h4>
  <p>hover=enlarge</p>
</Card>`"
        />
      </Card>

      <Card hover="floatUp boxShadow">
        <h4>hover floatUp boxShadow</h4>
        <p>hover="floatUp boxShadow"</p>
        <Code
          :content="`<Card hover='floatUp boxShadow'>
  <h4>hover floatUp boxShadow</h4>
  <p>hover=floatUp boxShadow</p>
</Card>`"
        />
      </Card>

      <Card hover="enlarge boxShadow">
        <h4>hover enlarge boxShadow</h4>
        <p>hover="enlarge boxShadow"</p>
        <Code
          :content="`<Card hover='enlarge boxShadow'>
  <h4>hover enlarge boxShadow</h4>
  <p>hover=enlarge boxShadow</p>
</Card>`"
        />
      </Card>
    </CardGroup>

    <h2>结合CardGroup组件使用更加方便</h2>
    <p class="dx-components-description">columnNumber="3" columnNumber表示每行有多少列</p>
    <CardGroup :columnNumber="3">
      <Card>Hover</Card>
      <Card>Hover</Card>
      <Card title="3">Hover</Card>
      <Card title="3">Hover</Card>
    </CardGroup>
    <Code
      :content="`<CardGroup :columnNumber='3'>
  <Card>Hover</Card>
  <Card>Hover</Card>
  <Card title='3'>Hover</Card>
  <Card title='3'>Hover</Card>
</CardGroup>`"/>

    <h2>结合CardGroup组件使用更加方便</h2>
    <p class="dx-components-description">columnNumber="4" columnNumber表示每行有多少列</p>
    <p class="dx-components-description">columnNumber支持2-99的数字</p>
    <CardGroup :columnNumber="4">
      <Card>Hover</Card>
      <Card>Hover</Card>
      <Card title="4">Hover</Card>
      <Card title="4">Hover</Card>
    </CardGroup>
    <Code
      :content="`<CardGroup :columnNumber='4'>
  <Card>Hover</Card>
  <Card>Hover</Card>
  <Card title='4'>Hover</Card>
  <Card title='4'>Hover</Card>
</CardGroup>`"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import { Button, Card, CardGroup } from 'vue3-dxui'
import Code from '@/components/code/Code.vue'

@Options({
  components: {
    Card,
    CardGroup,
    Button,
    Code
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
