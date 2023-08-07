import { createApp } from 'vue'
import App from '../App.vue'
import { createWebHashHistory } from 'vue-router'
import createRouter from '../router'

const app = createApp(App)

const router = createRouter(createWebHashHistory())

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
