import { createApp } from 'vue'
import App from './App.vue'
import naive from './plugins/naive'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import '@/plugins/process'
import VueLazyLoad from 'vue-lazyload'


createApp(App).use(store).use(router).use(naive).use(VueLazyLoad, {
    preLoad: 1,
    loading: require('@/assets/loading/1.gif'),
    error: require('@/assets/loading/error.png'),
    attempt: 2,
}).mount('#app')
