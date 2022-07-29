<template>
  <div class="content-warpper">
    <h1>button</h1>

    <div class="components-show-warpper">
      <div class="components-show-item">
        <h2>size</h2>
        <Button size="large">
          <span>large</span>
        </Button>
        <div class="dx-button-divide" />
        <Button>
          <span>default</span>
        </Button>
        <div class="dx-button-divide" />
        <Button size="small">
          <span>small</span>
        </Button>
      </div>

      <div class="components-show-item">
        <h2>type</h2>

        <div style="background: yellow">
          <Button type="info">
            <span>info</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="danger">
            <span>danger</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="success">
            <span>success</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="warning">
            <span>warning</span>
          </Button>
          <div class="dx-button-divide" />
          <Button type="ghost">
            <span>ghost</span>
          </Button>
        </div>
      </div>

      <div class="components-show-item">
        <h2>mode</h2>

        <Button mode="normal">
          <span>normal</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text">
          <span>text</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="danger">
          <span>text danger</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="success">
          <span>text success</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="warning">
          <span>text warning</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="text" type="ghost">
          <span>text ghost</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed">
          <span>dashed</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="warning">
          <span>dashed warning</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="success">
          <span>dashed success</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="danger">
          <span>dashed danger</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="ghost">
          <span>dashed ghost</span>
        </Button>
        <div class="dx-button-divide" />
        <Button mode="dashed" type="danger" disabled>
          <span>dashed ghost</span>
        </Button>
      </div>

      <div class="components-show-item">
        <h2>disabled</h2>
        <Button disabled>
          <span>disabled</span>
        </Button>
      </div>

      <div class="components-show-item">
        <h2>block</h2>
        <Button block>
          <span>block</span>
        </Button>
        <div class="dx-button-divide" />
        <Button block size="large">
          <span>block large</span>
        </Button>
      </div>

      <div class="components-show-item">
        <h2>click 事件</h2>
        <Button @click="handleClickButton">
          <span>事件</span>
        </Button>
      </div>

      <div class="components-show-item">
        <h2>shape</h2>

        <Button shape="circle" size="small" mode="text"> circle </Button>
        <div class="dx-button-divide" />
        <Button shape="circle" type="warning"> circle </Button>
        <div class="dx-button-divide" />
        <Button shape="circle" size="large" type="ghost"> circle </Button>
        <div class="dx-button-divide" />
        <Button shape="round" size="small" mode="dashed"> round </Button>
        <div class="dx-button-divide" />
        <Button shape="round" mode="text"> round </Button>
        <div class="dx-button-divide" />
        <Button shape="round" size="large" type="danger"> round </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from '@/components/button/Button.vue' // @ is an alias to /src

@Options({
  components: {
    Button
  }
})
export default class Home extends Vue {
  handleClickButton() {
    alert('点击按钮事件')
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/layout.scss';
</style>
