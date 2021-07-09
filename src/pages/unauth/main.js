import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router'
import "@/assets/styles/main.css";

createApp(App).use(router).mount('#app')
