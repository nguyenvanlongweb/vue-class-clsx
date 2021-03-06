import { createApp } from 'vue'

import App from './App.vue'
// import { vclsx } from '../dist'
import { vclsx } from "./plugins/vclsx";

const app = createApp(App)

app.use(vclsx, {name: 'css'})

app.mount('#app')
