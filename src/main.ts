import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
