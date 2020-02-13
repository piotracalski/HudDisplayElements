import Vue from 'vue'
import Router from 'vue-router'
import ProgressBar from '@/components/Demo_ProgressBar'
import Meter from '@/components/Demo_Meter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/progress-bar',
      name: 'ProgressBar',
      component: ProgressBar
    },
    {
      path: '/meter',
      name: 'Meter',
      component: Meter
    }
  ]
})
