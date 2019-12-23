import Vue from 'vue'
import Router from 'vue-router'
import TestingArea from '@/components/TestingArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestingArea',
      component: TestingArea
    }
  ]
})
