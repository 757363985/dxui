<template>
  <div class="dx-page-content-warpper">
    <h1>AnimationIcon</h1>

    <h4>内置的动画icon</h4>

    <CardGroup :columnNumber="6">
      <Card v-for="item in AnimationIconList" :key="item">
        <div class="dx-show-animation-icon">
          <AnimationIcon width="36px" height="36px" :jsonDataName="item" />
          <p class="dx-components-description">{{ item }}</p>
        </div>
      </Card>
    </CardGroup>

    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <AnimationIcon width="36px" height="36px" jsonDataName="PHONE_RINGING" />
        <AnimationIcon width="36px" height="36px" jsonDataName="ADDRESS" />
        <p class="dx-components-description">通过width和height控制icon的大小</p>
        <p class="dx-components-description">jsonDataName为自带的一些animationIcon的名称</p>
        <Code
          :content="`
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;ADDRESS&quot; />
          `"
        />
      </Card>
      <Card title="loop属性">
        <AnimationIcon width="36px" height="36px" jsonDataName="PHONE_RINGING" />
        <AnimationIcon :loop="false" width="36px" height="36px" jsonDataName="PHONE_RINGING" />
        <p class="dx-components-description">
          loop为true时，会循环一直播放，为false则只会在每次渲染后播放一轮，默认为true
        </p>
        <Code
          :content="`
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
<AnimationIcon :loop=&quot;false&quot; width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
          `"
        />
      </Card>

      <Card title="autoplay属性">
        <AnimationIcon width="36px" height="36px" jsonDataName="PHONE_RINGING" />
        <AnimationIcon :autoplay="false" width="36px" height="36px" jsonDataName="PHONE_RINGING" />
        <AnimationIcon
          :autoplay="false"
          :loop="false"
          width="36px"
          height="36px"
          jsonDataName="PHONE_RINGING"
        />
        <p class="dx-components-description">
          autoplay为true时，会从渲染后自动播放，为false则只会在鼠标移入时开始播放，默认为true
        </p>
        <Code
          :content="`
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
<AnimationIcon :autoplay=&quot;false&quot; width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
<AnimationIcon :autoplay=&quot;false&quot; :loop=&quot;false&quot; width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
          `"
        />
      </Card>

      <Card title="彩色的animationIcon">
        <AnimationIcon width="36px" height="36px" jsonDataName="PHONE_RINGING" color="#ff2d52" />
        <p class="dx-components-description">通过color属性改变animationIcon的色彩</p>

        <Code
          :content="`
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; color=&quot;#ff2d52&quot; />
          `"
        />
      </Card>

      <Card title="自定义animationIcon">
        <p class="dx-components-description">方式一,通过src属性，直接传入一个json文件</p>
        <AnimationIcon
          width="36px"
          height="36px"
          src="https://maxst.icons8.com/vue-static/landings/animated-icons/icons/phonelink-ring/phonelink-ring.json"
        />
        <Code
          :content="`
<AnimationIcon
  width=&quot;36px&quot;
  height=&quot;36px&quot;
  src=&quot;https://maxst.icons8.com/vue-static/landings/animated-icons/icons/phonelink-ring/phonelink-ring.json&quot;
/>
          `"
        />
        <p class="dx-components-description">方式二,通过jsonData属性，直接传入一个json对象</p>
        <Code
          :content="`
import { phone } from 'xxx.js'
...
<AnimationIcon
  width=&quot;36px&quot;
  height=&quot;36px&quot;
  :jsonData={ phone }
/>
          `"
        />
      </Card>

      <Card title="speed属性">
        <AnimationIcon width="36px" height="36px" jsonDataName="PHONE_RINGING" />
        <AnimationIcon width="36px" height="36px" jsonDataName="PHONE_RINGING" :speed="3" />
        <p class="dx-components-description">
          speed控制着播放的速度，默认值为1，数字越大，播放速度越快
        </p>
        <Code
          :content="`
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; />
<AnimationIcon width=&quot;36px&quot; height=&quot;36px&quot; jsonDataName=&quot;PHONE_RINGING&quot; :speed=&quot;3&quot; />
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
import AnimationIcon from '@/components/animationIcon/AnimationIcon.vue'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    AnimationIcon
  },
  setup() {
    const AnimationIconList = ['PHONE_RINGING', 'ADDRESS', 'BELL', 'CLOCK', 'CHECK_CIRCLE', 'DOWNLOAD_CLOUD']
    return {
      AnimationIconList
    }
  }
}
</script>

<style lang="scss">
.dx-show-animation-icon {
  text-align: center;
}
</style>
