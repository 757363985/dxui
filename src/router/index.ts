import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

export const COMPONENTS = [
  'Button',
  'Card',
  'CardGroup',
  'Dialog',
  'Tooltip',
  'BreadCrumb',
  'Checkbox',
  'CheckboxGroup',
  'Switch',
  'Tag',
  'AnimationIcon',
  'Slider',
  'Select',
  'Message'
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/button'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/button',
    children: COMPONENTS.map(function(item) {
      return {
        path: item.toLocaleLowerCase(),
        name: item,
        component: () => import(/* webpackChunkName: "" */ `../views/${item}Page.vue`)
      }
    })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  // {
  //   path: '/button',
  //   name: 'Button',
  //   component: () => import(/* webpackChunkName: "button" */ '../views/ButtonPage.vue')
  // },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
