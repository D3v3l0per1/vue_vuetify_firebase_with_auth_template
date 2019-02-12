import Vue from 'vue'
import Router from 'vue-router'

import AuthGuard from './auth-guard'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    },
    {
      path: '/signin',
      name: 'signin',
      component: loadView('User/SignIn')
    },
    {
      path: '/signup',
      name: 'signup',
      component: loadView('User/SignUp')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      props: true,
      beforeEnter: AuthGuard,
      component: loadView('User/Profile')
    },
  ]
})
