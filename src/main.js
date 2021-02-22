import { createApp } from 'vue'
import app from './app.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'

createApp(app).use(store).use(router).mount('#app')
