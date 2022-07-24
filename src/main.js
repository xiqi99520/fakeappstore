import Vue from 'vue'
import App from './App.vue'
import * as api from '../http';
import 'amfe-flexible';
import '@/styles/index.scss';
import './registerServiceWorker'
api.default.install(Vue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
