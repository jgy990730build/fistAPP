import Vue from 'vue'
import VueRouter from 'vue-router'
import ajax from './config/ajax'
import routes from './router/router'
import store from './store/'
import './style/common.less'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app')
