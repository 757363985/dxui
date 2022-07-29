<template>
  <div class="content-warpper">
    <h1>Tooltip</h1>
    <div class="components-show-warpper">
      <div class="components-show-item">
        <h2>正常用法</h2>
        <Tooltip title="dx永远18岁">
          <Button>Hover</Button>
        </Tooltip>
      </div>

      <div class="components-show-item">
        <h2>position</h2>

        <div>
          <Tooltip title="默认 topLeft position" position="topLeft">
            <Button>topLeft position</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="top position" position="top">
            <Button>top position </Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="top Right position" position="topRight">
            <Button>topRight position</Button>
          </Tooltip>
        </div>

        <div class="margin-tb-12">
          <Tooltip title="bottom Left position" position="bottomLeft">
            <Button>bottom Left position</Button>
            <div>
            <Button>bottom Left position</Button>

            </div>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="bottom position" position="bottom">
            <Button>bottom position</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="bottom Right position" position="bottomRight">
            <Button>bottom Right position</Button>
          </Tooltip>
        </div>

        <div class="margin-tb-12">
          <Tooltip title="left position fyadsk fhasdk灯下的覅客户萨芬的会计师" position="left">
            <Button>left position</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="right position" position="left">
            <Button>left</Button>
          </Tooltip>
        </div>

        <div class="margin-tb-12">
          <Tooltip title="right position fyadsk fhasdk灯下的覅客户萨芬的会计师" position="right">
            <Button>right position</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="right position" position="right">
            <Button>right</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="right position" position="right"> right </Tooltip>
        </div>
      </div>

      <div class="components-show-item">
        <h2>自定义颜色</h2>
        <Tooltip title="pink color" background="#f759ab">
          <Button>pink color</Button>
        </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip title="blue color" background="#40a9ff">
          <Button>blue color</Button>
        </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip title="purple color" background="#9254de">
          <Button>purple color</Button>
        </Tooltip>
      </div>

      <div class="components-show-item">
        <h2>自定义宽度</h2>
        <Tooltip
          title="这里定义了tooltip的宽度为240px,也可以设置百分比或者其他宽度单位。"
          width="240px"
        >
          <Button>240px</Button>
        </Tooltip>
      </div>

      <div class="components-show-item">
        <h2>触发模式 trigger</h2>
        <Tooltip title="hover" @change="watchVisible">
          <Button>hover</Button>
        </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip title="click" trigger="click" @change="watchVisible">
          <Button>click</Button>
        </Tooltip>
      </div>

      <div class="components-show-item">
        <h2>自定义控制tooltip</h2>
        visible:{{ tooltipVisible }}
        <Tooltip title="hover" :visible="tooltipVisible" @change="watchVisible">
          <Button>hover</Button>
        </Tooltip>

        <div class="dx-button-divide" />
        <Button @click="handleTooltipVisibleChange">点击显示tooltip</Button>
      </div>

      <div class="components-show-item">
        <h2>自定义tooltip的内容</h2>
        <Tooltip  width="400px">
          <Button>自定义</Button>
          <template v-slot:title>
            <Button>自定义的内容</Button>
          </template>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Button from '@/components/button/Button.vue'
import Tooltip from '@/components/tooltip/Tooltip.vue'

@Options({
  components: {
    Tooltip,
    Button
  }
})
export default class TooltipPage extends Vue {
  tooltipVisible = false

  handleTooltipVisibleChange = () => {
    this.tooltipVisible = !this.tooltipVisible
  }

  watchVisible(newVisible: boolean) {
    console.log(newVisible)
  }
}
</script>

<style scoped></style>
