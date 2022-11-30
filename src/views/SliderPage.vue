<template>
  <div class="dx-page-content-warpper">
    <h1>Slider</h1>

    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <Slider />
        <Code
          :content="`
<Slider />
          `"
        />
      </Card>
      <Card title="修改最大最小值">
        <Slider :min="-10" :max="200" />
        <p class="dx-components-description">min的默认值是0，max的默认值是100，类型为number</p>
        <Code
          :content="`
<Slider :min='-10' :max='200' />
          `"
        />
      </Card>
      <Card title="赋值初始值">
        <Slider :value="50" />
        <p class="dx-components-description">value默认值是0，类型为number</p>
        <Code
          :content="`
<Slider :value='50' />
          `"
        />
      </Card>

      <Card title="定义值得间隔">
        <Slider :step="10" />
        <p class="dx-components-description">step默认值是1，类型为number,必须是大于0的整数</p>
        <Code
          :content="`
<Slider :step='10' />
          `"
        />
      </Card>

      <Card title="禁用">
        <Slider disabled />
        <Code
          :content="`
<Slider disabled />
          `"
        />
      </Card>

      <Card title="监听数值变化">
        <Slider @sliderChange="handleSliderChange" />
        <p class="dx-components-description">
          sliderChange的第一个参数会返回最新的slider的value的值
        </p>
        <Code
          :content="`
<Slider @sliderChange='handleSliderChange' />
...
setup() {
  const handleSliderChange = (sliderValue) => {
    console.log(sliderValue)
  }
  return {
    handleSliderChange
  }
}
          `"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
import Slider from '@/components/slider/Slider.vue'
// import { setup } from 'vue-class-component'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Slider
  },
  setup() {
    const handleSliderChange = (sliderValue) => {
      console.log(sliderValue)
    }
    return {
      handleSliderChange
    }
  }
}
</script>

<style></style>
