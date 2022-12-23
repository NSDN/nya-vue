import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global-styles.css'
import 'highlight.js/styles/monokai-sublime.css'
import router from '@/lib/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
