import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Dxui from './components/dxui/index' // 导入
import 'vue3-dxui/dxui/dxui.css'

createApp(App).use(Dxui).use(store).use(router).mount('#app')
