<template>
  <div class="dx-page-content-warpper">
    <h1>BreadCrumb 面包屑</h1>
    <!-- <div class="content-breadcrumnb">
      <BreadCrumb :config="config1" />
    </div> -->
    <p class="dx-components-description">
      面包屑（Breadcrumbs）是一种用于用户界面导航的常见元素，通常以水平线条或文本链接的形式呈现。它们用于显示用户的当前位置，并提供了导航路径，以便用户可以迅速回到之前的页面或浏览层次结构中的其他页面。
    </p>

    <h2>代码演示</h2>
    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <BreadCrumb :config="config1" />
      </Card>
      <Card title="自定义分隔符">
        <BreadCrumb :config="config1" separator=">" />
      </Card>

      <Card title="面包屑自定义点击事件">
        <BreadCrumb :config="config2" separator=">" />
        <p>config中配置的面包屑最后一位的点击事件不会生效</p>
        <p>如果采用自定义点击事件，将无法自动触发路径的跳转，请在事件中手动触发</p>
        <p>
          vue3中，手动调用路由使用userRouter import {useRouter} from 'vue-router' userRouter.push({
          path:'/about', params:{ name: 'dx', age:18 } })
        </p>
      </Card>

      <Card title="配置路由参数query">
        <BreadCrumb :config="config3" separator=">" />
        <p>config中配置的路由参数与router-link中配置query方式一致</p>
        <p>router-link path 与 query 同时配置才能生效</p>
      </Card>

      <Card title="配置路由参数params">
        <BreadCrumb :config="config5" separator=">" />
        <p>config中配置的路由参数与router-link中配置params的方式一致</p>
        <p>router-link name 与 params 同时配置才能生效</p>
      </Card>

      <Card title="replace">
        <BreadCrumb :config="config4" separator=">" />
        <p>config中配置replace为true</p>
        <p>默认是false，也就是push</p>
      </Card>

      <Card title="BreadCrumbItem">
        <BreadCrumb>
          <BreadCrumbItem
            class="name-no-end"
            :config="{
              path: '/',
              text: 'Home'
            }"
          ></BreadCrumbItem>
          <span :style="{ margin: '0 12px' }">|</span>
          <BreadCrumbItem class="name-end">BreadCrumb</BreadCrumbItem>
        </BreadCrumb>
        <p>BreadCrumnbItem组件是配合BreadCrumnb使用的</p>
        <p>这种方式相对来说可以自自定义的内容更多，可扩展性更强，但也没那么方便</p>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'

import Code from '@/components/code/Code.vue'
import { Card, CardGroup, BreadCrumb } from 'vue3-dxui'

@Options({
  components: {
    Card,
    CardGroup,
    BreadCrumb,
    BreadCrumbItem: BreadCrumb.item,
    Code
  }
})
export default class BreadCrumnbPage extends Vue {
  config1 = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'BreadCrumb',
      path: 'breadcrumnb'
    }
  ]

  config2 = [
    {
      text: 'Home',
      path: '/',
      onClick: () => {
        alert('自定义点击事件')
      }
    },
    {
      text: 'BreadCrumb',
      path: 'breadcrumnb',
      onClick: () => {
        alert('自定义点击事件')
      }
    }
  ]

  config3 = [
    {
      text: 'Home',
      path: '/',
      query: {
        dx: 'dx',
        age: 18
      }
    },
    {
      text: 'BreadCrumb',
      path: 'breadcrumnb'
    }
  ]

  config4 = [
    {
      text: 'Home是replace',
      name: 'Home',
      params: {
        dx: 'dx',
        age: 18
      },
      replace: true
    },
    {
      text: 'BreadCrumb',
      path: '/breadcrumnb'
    }
  ]

  config5 = [
    {
      text: 'Home',
      name: 'Home',
      params: {
        dx: 'dx',
        age: 18
      }
    },
    {
      text: 'BreadCrumb',
      path: '/breadcrumnb'
    }
  ]
}
</script>

<style></style>
