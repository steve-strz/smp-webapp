import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import InitApp from '@/views/InitApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/initapp',
      name: 'InitApp',
      component: InitApp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
