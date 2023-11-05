import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const COMPONENTS: any = [
  { id: 'Icon', name: '图标' },
  { id: 'AnimationIcon', name: '动态图标' },
  { id: 'Carousel', name: '走马灯' },
  { id: 'Button', name: '通用按钮' },
  { id: 'Card', name: '卡片' },
  { id: 'CardGroup', name: '卡片组' },
  { id: 'Dialog', name: '对话框' },
  { id: 'Tooltip', name: '文字提示' },
  { id: 'BreadCrumb', name: '面包屑' },
  { id: 'Checkbox', name: '复选框' },
  { id: 'CheckboxGroup', name: '复选框组' },
  { id: 'Switch', name: '开关' },
  { id: 'Tag', name: '标签' },
  { id: 'Slider', name: '滑条' },
  { id: 'Select', name: '选择器' },
  { id: 'Message', name: '全局提示' },
  { id: 'Affix', name: '固钉' }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/icon'
  },
  // {
  //   path: '/components',
  //   name: 'Home',
  //   component: Home,
  //   redirect: '/components/icon',
  //   children: COMPONENTS.map(function (item: any) {
  //     return {
  //       path: item.id.toLocaleLowerCase(),
  //       name: item,
  //       component: () => import(/* webpackChunkName: "" */ `../views/${item.id}Page.vue`)
  //     }
  //   })
  // }
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/icon',
    children: COMPONENTS.map(function (item: any) {
      return {
        path: item.id.toLocaleLowerCase(),
        name: item,
        component: () => import(/* webpackChunkName: "" */ `../views/${item.id}Page.vue`)
      }
    })
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
