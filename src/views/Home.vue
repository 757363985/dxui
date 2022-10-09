<template>
  <div class="home">
    <h1>欢迎体验 dxui</h1>
    <p>持续更新中哦</p>
    <router-link to="button"> <Button>button</Button> </router-link>
    <router-link to="dialog"> <Button>dialog</Button> </router-link>
    <router-link to="tooltip"> <Button>tooltip</Button> </router-link>
    <router-link to="card"> <Button>card</Button> </router-link>
    <router-link to="breadCrumb"> <Button>breadCrumb</Button> </router-link>
    <router-link to="checkbox"> <Button>checkbox</Button> </router-link>
    <router-link to="switch"> <Button>switch</Button> </router-link>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'

import Button from '@/components/button/Button.vue'

export default {
  components: {
    Button
  },
  setup() {
    const route = useRoute()
    console.log(route.query)
    console.log(route.params)
  }
}
</script>

<style lang="sass" scoped></style>
