<template>
  <div class="dx-page-content-warpper">
    <h1>Tag</h1>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <Tag>12346</Tag>
        <Code :content="`<Tag>12346</Tag>`" />
      </Card>
      <Card title="closable属性">
        <Tag closable>dx</Tag>
        <Tag closable>yx</Tag>
        <p class="dx-components-description">closable属性是否可关闭</p>
        <Code :content="`<Tag closable>dx</Tag> <Tag closable>yx</Tag>`" />
      </Card>
      <Card title="自定义tag的样式">
        <Tag
          :style="{
            color: '#c41d7f',
            borderColor: '#ffadd2',
            background: '#fff0f6'
          }"
          >12346</Tag
        >
        <Tag
          :style="{
            color: '#c41d7f',
            borderColor: '#ffadd2',
            background: '#fff0f6'
          }"
          closable
          >12346</Tag
        >
        <p class="dx-components-description">通过style属性，自定义tag的基础样式</p>
        <Code
          :content="`
          <Tag :style=&quot;{color: '#c41d7f', borderColor: '#ffadd2',background: '#fff0f6' }&quot;>12346</Tag>
          <Tag :style=&quot;{color: '#c41d7f', borderColor: '#ffadd2',background: '#fff0f6' }&quot; closable>12346</Tag>
          `"
        />
      </Card>

      <Card title="彩色标签">
        <Tag color="purple">purple</Tag>
        <Tag color="red">red</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="green">green</Tag>
        <Tag color="orange" closable>orange</Tag>
        <Code
          :content="`
          <Tag color='purple'>purple</Tag>
          <Tag color='red'>red</Tag>
          <Tag color='blue'>blue</Tag>
          <Tag color='green' closable>green</Tag>`"
        />
      </Card>

      <Card title="点击回调">
        <Tag @tagClick="handleClick">点击回调</Tag>
        <Code
          :content="`
          <Tag @tagClick='handleClick'>点击回调</Tag>
          <script>
          export default {
            components: {
              Tag
            },
            setup() {
              const handleClick = () => {
                alert('你点击了标签')
              }
              return {
                handleClick
              }
            }
          }
          </script>`"
        />
      </Card>

      <Card title="关闭回调">
        <Tag @closeClick="closeClick" closable>关闭回调</Tag>
        <p class="dx-components-description">
          如果既有点击回调，又有关闭回调，关闭标签时，不会触发点击回调
        </p>
        <Code
          :content="`
          <Tag @tagClick='closeClick' closable>点击回调</Tag>
          <script>
          export default {
            components: {
              Tag
            },
            setup() {
              const closeClick = () => {
                alert('你关掉了标签')
              }
              return {
                closeClick
              }
            }
          }
          </script>`"
        />
      </Card>

      <Card title="自定义关闭入口">
        <Tag closable
          >12346
          <template v-slot:tagClose>
            <span>A</span>
          </template>
        </Tag>
        <Code
          :content="`
        <Tag closable>12346
          <template v-slot:tagClose>
            <span>A</span>
          </template>
        </Tag>`"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
import Tag from '@/components/tag/Tag.vue'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Tag
  },
  setup() {
    const handleClick = () => {
      alert('你点击了标签')
    }
    const closeClick = () => {
      alert('你关掉了标签')
    }
    return {
      closeClick,
      handleClick
    }
  }
}
</script>

<style></style>
