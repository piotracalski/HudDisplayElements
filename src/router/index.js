import Vue from 'vue'
import Router from 'vue-router'
import Meter from '@/components/Meter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Meter',
      component: Meter
    }
  ]
})
