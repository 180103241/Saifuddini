import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './utils/api'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'normalize.css'
import 'nprogress/nprogress.css'
import 'swiper/css/swiper.css'
import './assets/css/main.css'
import './assets/css/style.css'

// ----------------------------------
Vue.config.productionTip = false
Vue.prototype.$api = api;

// ---------USE----------------------
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
