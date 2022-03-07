import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import "@/assets/css/common.css";
import "@/assets/less/theme.less";

createApp(App).use(Antd).use(store).use(router).mount('#app')
