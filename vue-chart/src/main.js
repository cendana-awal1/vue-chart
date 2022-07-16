import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

createApp(App).use(VueChartkick).mount('#app')
