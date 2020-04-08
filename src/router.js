import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/city')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/create')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/message')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine')
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
