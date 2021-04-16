import 'babel-polyfill'
import { createApp } from 'vue'
import router from './router'

import './style.less'

createApp({
  render () {
    return <keep-alive>
      <router-view></router-view>
    </keep-alive>
  }
}).use(router).mount('#app')
