<template>
  <div class="dx-page-content-warpper">
    <h1>Tooltip 提示</h1>

    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="config" />
    </div> -->

    <p class="dx-components-description">
      Dialog组件是一种用户界面元素，通常用于显示模态对话框或弹出窗口，以展示重要信息、提示、确认、表单填写或其他互动内容。这种组件提供了一种方式来引导用户的注意力，以进行特定任务或获取用户的响应。
    </p>

    <h2>代码演示</h2>

    <CardGroup :columnNumber="2">
      <Card title="正常用法">
        <Tooltip title="dx永远18岁">
          <Button>Hover</Button>
        </Tooltip>

        <Code
          :content="`
<Tooltip title='dx永远18岁'>
  <Button>Hover</Button>
</Tooltip>
          `"
        />
      </Card>

      <Card title="自定义颜色">
        <Tooltip width="100px" title="pink color" background="#f759ab"> #f759ab </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip width="100px" title="blue color" background="#40a9ff"> #40a9ff </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip width="110px" title="purple color" background="#9254de"> #9254de </Tooltip>

        <Code
          :content="`
<Tooltip width='100px' title='pink color' background='#f759ab'>
  #f759ab
</Tooltip>
          `"
        />
      </Card>

      <Card title="自定义宽度">
        <Tooltip
          title="这里定义了tooltip的宽度为240px,也可以设置百分比或者其他宽度单位。"
          width="240px"
        >
          <h1>240px</h1>
        </Tooltip>

        <Code
          :content="`
<Tooltip
  title='这里定义了tooltip的宽度为240px,也可以设置百分比或者其他宽度单位。'
  width='240px'
>
  <h1>240px</h1>
</Tooltip>
          `"
        />
      </Card>

      <Card title="触发模式 trigger">
        <Tooltip title="hover" @change="watchVisible">
          <Button>hover</Button>
        </Tooltip>

        <div class="dx-button-divide" />

        <Tooltip title="click" trigger="click" @change="watchVisible">
          <Button>click</Button>
        </Tooltip>

        <Code
          :content="`
<Tooltip title='click' trigger='click' @change='watchVisible'>
  <Button>click</Button>
</Tooltip>
          `"
        />
      </Card>

      <Card title="自定义控制tooltip">
        <Tooltip title="hover" :visible="tooltipVisible" @change="watchVisible">
          自定义控制tooltip的显示
        </Tooltip>

        <p class="dx-components-description">
          visible:{{ tooltipVisible }} 通过给tooltip绑定visible控制tooletip的显示和隐藏
        </p>

        <div class="dx-button-divide" />
        <Button @click="handleTooltipVisibleChange">点击显示或隐藏tooltip</Button>

        <Code
          :content="`
<Tooltip title='hover' :visible='tooltipVisible' @change='watchVisible'>
  自定义控制tooltip的显示
</Tooltip>
          `"
        />
      </Card>

      <Card title="自定义tooltip的内容">
        <Tooltip width="300px">
          <Button>自定义</Button>
          <template v-slot:title>
            <Button>自定义的内容</Button>
            <h1>自定义的内容</h1>
          </template>
        </Tooltip>

        <p class="dx-components-description">
          通过具名插槽，自定义tooltip的内容，不仅仅能存放字符串。
        </p>

        <Code
          :content="`
<Tooltip width='300px'>
  <Button>自定义</Button>
  <template v-slot:title>
    <Button>自定义的内容</Button>
    <h1>自定义的内容</h1>
  </template>
</Tooltip>
          `"
        />
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

        <p class="dx-components-description">
          position属性控制着tooltip出现的位置，topRight，top，topLeft，right，left，bottomRight，bottom，bottomLeft
        </p>

        <Code
          :content="`
<Tooltip title='默认 topLeft position' position='topLeft'>
  <Button>topLeft</Button>
</Tooltip>
          `"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Code from '@/components/code/Code.vue'

// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import { Button, Tooltip, CardGroup, Card } from 'vue3-dxui'

@Options({
  components: {
    Tooltip,
    Button,
    // BreadCrumnb
    Card,
    CardGroup,
    Code
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

<style></style>
