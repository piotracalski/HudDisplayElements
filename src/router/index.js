import Vue from 'vue'
import Router from 'vue-router'
import Demo_Container from '@/components/Demo_Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo_Container',
      component: Demo_Container
    }
  ]
})
