<template>
  <div class="dx-page-content-warpper">
    <h1>Icon 矢量图标</h1>

    <p class="dx-components-description">
      Icon组件是一个用于显示矢量图标的可重复使用元素，通常用于网页和应用程序开发。它允许你使用图标字体、SVG图标或自定义图标，以增强用户界面的美观性和交互性。
    </p>

    <h2>IconList 图标库</h2>

    <CardGroup :columnNumber="6">
      <Card v-for="item in IconList" :key="item">
        <div class="dx-show-icon">
          <Icon width="36px" height="36px" :iconName="item" />
          <p class="dx-components-description">{{ item }}</p>
        </div>
      </Card>
    </CardGroup>

    <h2>代码演示</h2>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <Icon iconName="activity" />
        <Icon iconName="alert-circle" />

        <p class="dx-components-description">通过iconName参数，自由选择图标列表中的icon图标</p>

        <Code
          :content="`<Icon iconName='activity' />
<Icon iconName='alert-circle' />`"
        />
      </Card>
      <Card title="自定义样式">
        <Icon iconName="activity" :style="{ color: 'red', fontSize: '18px' }" />

        <p class="dx-components-description">可以根据自己的想法，自由改变icon的样式</p>

        <Code content="<Icon iconName='activity' :style='{color:'red',fontSize: '18px'}' />" />
      </Card>
    </CardGroup>
  </div>
</template>

<script>
// import Card from '@/components/card/Card.vue'
// import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
// import Icon from '@/components/icon/Icon.vue'
import { Icon, Card, CardGroup } from 'vue3-dxui'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Icon
  },
  setup() {
    const IconList = [
      'activity',
      'airplay',
      'alert-circle',
      'alert-octagon',
      'alert-triangle',
      'align-center',
      'align-justify',
      'align-left',
      'align-right',
      'anchor',
      'aperture',
      'archive',
      'arrow-down',
      'arrow-down-circle',
      'arrow-down-left',
      'arrow-down-right',
      'arrow-left',
      'arrow-left-circle',
      'arrow-right',
      'arrow-right-circle',
      'arrow-up',
      'arrow-up-circle',
      'arrow-up-left',
      'arrow-up-right',
      'at-sign',
      'award',
      'bar-chart',
      'bar-chart-2',
      'battery',
      'battery-charging',
      'bell',
      'bell-off',
      'bluetooth',
      'bold',
      'book',
      'book-open',
      'bookmark',
      'box',
      'briefcase',
      'calendar',
      'camera',
      'camera-off',
      'cast',
      'check',
      'check-circle',
      'check-square',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'chevrons-down',
      'chevrons-left',
      'chevrons-right',
      'chevrons-up',
      'chrome',
      'circle',
      'clipboard',
      'clock',
      'cloud',
      'cloud-drizzle',
      'cloud-lightning',
      'cloud-off',
      'cloud-rain',
      'cloud-snow',
      'code',
      'codepen',
      'codesandbox',
      'coffee',
      'github',
      'wind',
      'x-circle'
    ]
    return {
      IconList
    }
  }
}
</script>

<style lang="scss">
.dx-show-icon {
  text-align: center;
  font-size: 24px;
}
</style>
