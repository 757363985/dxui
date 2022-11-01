<template>
  <div class="content-warpper">
    <h1>Tooltip</h1>

    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="config" />
    </div> -->

    <CardGroup :columnNumber="2">
      <Card title="正常用法">
        <Tooltip title="dx永远18岁">
          <Button>Hover</Button>
        </Tooltip>
      </Card>

      <Card title="自定义颜色">
        <Tooltip width="100px" title="pink color" background="#f759ab"> #f759ab </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip width="100px" title="blue color" background="#40a9ff"> #40a9ff </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip width="110px" title="purple color" background="#9254de"> #9254de </Tooltip>
      </Card>

      <Card title="自定义宽度">
        <Tooltip
          title="这里定义了tooltip的宽度为240px,也可以设置百分比或者其他宽度单位。"
          width="240px"
        >
          <h1>240px</h1>
        </Tooltip>
      </Card>

      <Card title="触发模式 trigger">
        <Tooltip title="hover" @change="watchVisible">
          <Button>hover</Button>
        </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip title="click" trigger="click" @change="watchVisible">
          <Button>click</Button>
        </Tooltip>
      </Card>

      <Card title="自定义控制tooltip">
        visible:{{ tooltipVisible }}
        <Tooltip title="hover" :visible="tooltipVisible" @change="watchVisible">
          自定义控制tooltip的显示
        </Tooltip>

        <div class="dx-button-divide" />
        <Button @click="handleTooltipVisibleChange">点击显示或隐藏tooltip</Button>
      </Card>

      <Card title="自定义tooltip的内容">
        <Tooltip width="300px">
          <Button>自定义</Button>
          <template v-slot:title>
            <Button>自定义的内容</Button>
            <h1>自定义的内容</h1>
          </template>
        </Tooltip>
      </Card>

      <Card title="position属性">
        <div>
          <Tooltip title="默认 topLeft position" position="topLeft">
            <Button>topLeft</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="top position" position="top">
            <Button>top</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="top Right position" position="topRight">
            <Button>topRight</Button>
          </Tooltip>
        </div>

        <div class="margin-tb-12">
          <Tooltip title="bottom Left position" position="bottomLeft">
            <Button>bottomLeft</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="bottom position" position="bottom">
            <Button>bottom</Button>
          </Tooltip>

          <div class="dx-button-divide" />

          <Tooltip title="bottom Right position" position="bottomRight">
            <Button>bottomRight</Button>
          </Tooltip>
        </div>

        <div class="margin-tb-12">
          <Tooltip title="left position fyadsk fhasdk灯下的覅客户萨芬的会计师" position="left">
            <Button>left</Button>
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
        </div>
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Button from '@/components/button/Button.vue'
import Tooltip from '@/components/tooltip/Tooltip.vue'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Card from '@/components/card/Card.vue'

@Options({
  components: {
    Tooltip,
    Button,
    // BreadCrumnb
    Card,
    CardGroup
  }
})
export default class TooltipPage extends Vue {
  tooltipVisible = false

  config = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Tooltip'
    }
  ]

  handleTooltipVisibleChange = () => {
    this.tooltipVisible = !this.tooltipVisible
  }

  watchVisible(newVisible: boolean) {
    console.log(newVisible)
  }
}
</script>

<style scoped></style>
