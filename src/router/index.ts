import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

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
    children: [
      {
        path: 'button',
        name: 'Button',
        component: () => import(/* webpackChunkName: "button" */ '../views/ButtonPage.vue')
      },
      {
        path: 'card',
        name: 'Card',
        component: () => import(/* webpackChunkName: "Card" */ '../views/CardPage.vue')
      },
      {
        path: 'dialog',
        name: 'Dialog',
        component: () => import(/* webpackChunkName: "Dialog" */ '../views/DialogPage.vue')
      },
      {
        path: 'tooltip',
        name: 'Tooltip',
        component: () => import(/* webpackChunkName: "Dialog" */ '../views/TooltipPage.vue')
      },
      {
        path: 'cardgroup',
        name: 'CardGroup',
        component: () => import(/* webpackChunkName: "CardGroup" */ '../views/CardGroupPage.vue')
      },
      {
        path: 'breadCrumb',
        name: 'BreadCrumb',
        component: () => import(/* webpackChunkName: "BreadCrumb" */ '../views/BreadCrumbPage.vue')
      },
      {
        path: 'checkbox',
        name: 'Checkbox',
        component: () => import(/* webpackChunkName: "Checkbox" */ '../views/CheckboxPage.vue')
      },
      {
        path: 'checkboxGroup',
        name: 'CheckboxGroup',
        component: () =>
          import(/* webpackChunkName: "CheckboxGroup" */ '../views/CheckboxGroupPage.vue')
      },
      {
        path: 'switch',
        name: 'Switch',
        component: () => import(/* webpackChunkName: "Switch" */ '../views/SwitchPage.vue')
      },
      {
        path: 'code',
        name: 'Code',
        component: () => import(/* webpackChunkName: "Code" */ '../views/CodePage.vue')
      },
      {
        path: 'tag',
        name: 'Tag',
        component: () => import(/* webpackChunkName: "Tag" */ '../views/TagPage.vue')
      },
      {
        path: 'animationIcon',
        name: 'AnimationIconPage',
        component: () => import(/* webpackChunkName: "AnimationIconPage" */ '../views/AnimationIconPage.vue')
      },
      {
        path: 'slider',
        name: 'SliderPage',
        component: () => import(/* webpackChunkName: "SliderPage" */ '../views/SliderPage.vue')
      },
      {
        path: 'select',
        name: 'SelectPage',
        component: () => import(/* webpackChunkName: "SelectPage" */ '../views/SelectPage.vue')
      },
      {
        path: 'message',
        name: 'MessagePage',
        component: () => import(/* webpackChunkName: "SelectPage" */ '../views/MessagePage.vue')
      }
    ]
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
