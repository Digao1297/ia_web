import { createApp } from 'vue'
import app from './app.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

createApp(app).use(store).use(router).mount('#app')
