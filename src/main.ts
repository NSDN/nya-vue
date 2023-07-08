import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global-styles.css'
import 'highlight.js/styles/monokai-sublime.css'
import router from '@/lib/router'
import pinia from './lib/store'
import '@/lib/http/axios/interceptors'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
