import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
import { componentsPlugin } from './components'
const app = createApp(App)

app.use(createPinia())
app.use(router)

//使用懒加载插件
app.use(lazyPlugin)

//注册组件插件
app.use(componentsPlugin)

app.mount('#app')
