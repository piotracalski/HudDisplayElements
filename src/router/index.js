import Vue from 'vue'
import Router from 'vue-router'
import Demo_ProgressBar from '@/components/Demo_ProgressBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo_ProgressBar',
      component: Demo_ProgressBar
    }
  ]
})
