// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = process.env.NODE_ENV == 'development' ? 'http://localhost:5000/' : 'https://wle.cl/api/';
Vue.config.productionTip = false

import './styles/own.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../scss/landing-page.scss';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
