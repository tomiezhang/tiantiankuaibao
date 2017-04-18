import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'hello',
      component: Hello
    },
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
