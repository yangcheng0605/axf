// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vuex
import store from './store'
import axios from 'axios'
import './components/reset.js'

import { Lazyload, MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Lazyload)

Vue.prototype.$msg = MessageBox
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
