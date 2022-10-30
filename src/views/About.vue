<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>请稍等</h3>
      </template>
    </Suspense>
    <!-- <Child /> -->
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue'
// import Child from '@/components/template/Template.vue'
const Child = defineAsyncComponent(() => import('@/components/template/Template.vue'))
export default {
  components: {
    Child
  }
}
</script>
