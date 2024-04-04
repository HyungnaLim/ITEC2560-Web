import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// create app
const app = createApp(App)

// configure app to use Pinia store
// that multiple component can use to share data
const pinia = createPinia()
app.use(pinia)

// mount (load) configured app in browser
app.mount('#app')