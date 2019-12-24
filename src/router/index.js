import Vue from 'vue'
import Router from 'vue-router'
import Demo_Meter from '@/components/Demo_Meter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo_Meter',
      component: Demo_Meter
    }
  ]
})
