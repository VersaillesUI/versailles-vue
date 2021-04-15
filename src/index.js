import 'babel-polyfill'
import Vue from 'vue'
import { ThemeProvider } from 'packages'
import router from './router'
import VueRouter from 'vue-router'

import './style.less'

Vue.use(VueRouter)

new Vue({
  router,
  render () {
    return <div>
      <router-view></router-view>
    </div>
  }
}).$mount('#app')