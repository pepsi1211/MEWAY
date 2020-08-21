import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/StyleSheet.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import echarts from 'echarts';
import 'echarts/lib/component/tooltip';
import Qs from  'qs';
import { GoToAdmin, GoToBack } from './tool/tool.js';


Vue.prototype.axios = axios;
Vue.prototype.$qs = Qs;
Vue.prototype.$echarts = echarts;
Vue.prototype.$admin = GoToAdmin;
Vue.prototype.$go = GoToBack;
Vue.config.productionTip = false;
Vue.use(ElementUI);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = store.getters['login/token'];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
