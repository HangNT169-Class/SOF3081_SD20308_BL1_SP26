import { createApp } from 'vue'
import App from './App.vue'
import a from './router/router'

// createApp(App).mount('#app')
const a1 = createApp(App)
a1.use(a)
a1.mount('#app')
