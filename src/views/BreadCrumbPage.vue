<template>
  <div class="content-warpper">
    <h1>BreadCrumnb</h1>
    <div class="content-breadcrumnb">
      <BreadCrumnb :config="config1" />
    </div>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <BreadCrumnb :config="config1" />
      </Card>
      <Card title="自定义分隔符">
        <BreadCrumnb :config="config1" separator=">" />
      </Card>

      <Card title="面包屑自定义点击事件">
        <BreadCrumnb :config="config2" separator=">" />
        <p>config中配置的面包屑最后一位的点击事件不会生效</p>
        <p>如果采用自定义点击事件，将无法自动触发路径的跳转，请在事件中手动触发</p>
        <p>
          vue3中，手动调用路由使用userRouter import {useRouter} from 'vue-router' userRouter.push({
          path:'/about', params:{ name: 'dx', age:18 } })
        </p>
      </Card>

      <Card title="配置路由参数query">
        <BreadCrumnb :config="config3" separator=">" />
        <p>config中配置的路由参数与router-link中配置query方式一致</p>
        <p>router-link path 与 query 同时配置才能生效</p>
      </Card>

      <Card title="配置路由参数params">
        <BreadCrumnb :config="config5" separator=">" />
        <p>config中配置的路由参数与router-link中配置params的方式一致</p>
        <p>router-link name 与 params 同时配置才能生效</p>
      </Card>

      <Card title="replace">
        <BreadCrumnb :config="config4" separator=">" />
        <p>config中配置replace为true</p>
        <p>默认是false，也就是push</p>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'

@Options({
  components: {
    Card,
    CardGroup,
    BreadCrumnb
  }
})
export default class BreadCrumnbPage extends Vue {
  config1 = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'BreadCrumnb',
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
      text: 'BreadCrumnb',
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
      text: 'BreadCrumnb',
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
      text: 'BreadCrumnb',
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
      text: 'BreadCrumnb',
      path: '/breadcrumnb'
    }
  ]
}
</script>

<style></style>
