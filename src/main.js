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


Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
