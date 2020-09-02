import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './plugins/vue-i18n'
import global from './plugins/global'
import axios from 'axios'



axios.defaults.baseURL = 'http://localhost:8000/';
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  global,
  render: h => h(App)
}).$mount('#app')
