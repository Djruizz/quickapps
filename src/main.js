import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)
app.use(router)

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

app.mount('#app')
