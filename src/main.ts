import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import NavigationBar from '@/components/NavigationBar.vue';

Vue.config.productionTip = false
Vue.component('Nav', NavigationBar);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
