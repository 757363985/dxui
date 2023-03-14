## 安装

```javascript
    npm install vue3-dxui -D
```

## 使用
### 全局引入

修改vue项目的main.ts，并引入
```ts
    import { createApp } from 'vue'
    import App from './App.vue'
    import router from './router'
    import store from './store'
    import Dxui from 'vue3-dxui' // 导入
    import 'vue3-dxui/dxui/dxui.css' // 全局样式导入

    createApp(App).use(Dxui).use(store).use(router).mount('#app')
```

### 局部引入
当然还是要全局引入样式
```vue
<template>
    <div>
        <Button>按钮</Button>
    </div>
</template>

<script>
    import { Button } from 'vue3-dxui'
    export default {
        components: {
            Button
        }
    }
</script>
```

### 关于ts
打包后暂时未有类型声明，请在 shims-vue.d.ts 中进行声明

```ts
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-dxui'

```
声明之后你就可以在lang="ts"的情况下使用了
```vue
<template>
    <div>
        <Button>按钮</Button>
    </div>
</template>

<script lang="ts">
    import { Button } from 'vue3-dxui'
    export default {
        components: {
            Button
        }
    }
</script>
```

## 其它内容介绍
[csdn介绍vue3-dxui的使用](https://dengxi.blog.csdn.net/article/details/129508840)
[dxui网站介绍](http://www.dxyx-together.cn/#/home/button)
[github](https://github.com/757363985/dxui)