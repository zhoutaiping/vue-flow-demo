import { createApp } from 'vue'
// import './style.css'
import './main.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueDraggableResizable from 'vue-draggable-resizable'

// 注册全局组件
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.component("vue-draggable-resizable", VueDraggableResizable)
app.mount('#app')

