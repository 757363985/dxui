import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "button" */ '../views/Button.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "Dialog" */ '../views/Dialog.vue')
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import(/* webpackChunkName: "Dialog" */ '../views/TooltipPage.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import(/* webpackChunkName: "Card" */ '../views/CardPage.vue')
  },
  {
    path: '/cardgroup',
    name: 'CardGroup',
    component: () => import(/* webpackChunkName: "CardGroup" */ '../views/CardGroupPage.vue')
  },
  {
    path: '/breadCrumb',
    name: 'BreadCrumb',
    component: () => import(/* webpackChunkName: "BreadCrumb" */ '../views/BreadCrumbPage.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import(/* webpackChunkName: "Checkbox" */ '../views/CheckboxPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
