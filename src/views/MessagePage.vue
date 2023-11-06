<template>
  <div class="dx-page-content-warpper">
    <h1>Message</h1>
    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <Button @click="handleOtherMessage()">display normal message</Button>
        <Code
          :content="`
    <Button @click='handleConfigMessage'>display normal message</Button>
    import { MessageApi } from 'vue3-dxui'
    const handleConfigMessage = function () {
      MessageApi.open({
        duration: 3000,
        content: 'Hello dxui!'
      })
    }
          `"
        />
      </Card>

      <Card title="其它提示类型">
        <Button @click="handleOtherMessage('success')">success</Button>
        <Button @click="handleOtherMessage('error')">error</Button>
        <Button @click="handleOtherMessage('warning')">warning</Button>

        <Code
          :content="`
    <Button @click='handleConfigMessage('success')'>display normal message</Button>
    import { MessageApi } from 'vue3-dxui'
    const handleConfigMessage = function (type: string) {
      MessageApi.open({
        type,
        duration: 3000,
        content: 'Hello dxui!'
      })
    }
          `"
        />
      </Card>

      <Card title="执行结束的回调">
        <Button @click="handleConfigMessage('success')">success</Button>
        <Code
          :content="`
    <Button @click='handleConfigMessage('success')'>display normal message</Button>
    import { MessageApi } from 'vue3-dxui'
    const handleConfigMessage = function (type: string) {
      MessageApi.open({
        type,
        duration: 3000,
        content: 'Hello dxui!'
      }).then(() => {
        alert('message执行完了')
      })
    }
          `"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts" scoped>
import Code from '@/components/code/Code.vue'
import { Button, CardGroup, Card, MessageApi } from 'vue3-dxui'
export default {
  components: {
    Card,
    CardGroup,
    Code,
    Button
  },
  setup() {
    const handleOtherMessage = function (type: string) {
      MessageApi.open({
        type,
        duration: 3000,
        content: 'Hello dxui!'
      })
    }

    const handleConfigMessage = function (type: string) {
      MessageApi.open({
        type,
        duration: 3000,
        content: 'Hello dxui!'
      }).then(() => {
        alert('message执行完了')
      })
    }

    return {
      handleConfigMessage,
      handleOtherMessage
    }
  }
}
</script>

<style></style>
