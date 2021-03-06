import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './auth/Login.vue';
import Register from "./auth/Register.vue";

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path: '/register',
      name:'register',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('./views/Tables.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Forms.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/clients/index',
      name: 'clients.index',
      component: () => import('./views/Clients/ClientsIndex.vue'),
    },
    {
      path: '/clients/new',
      name: 'clients.new',
      component: () => import('./views/Clients/ClientsForm.vue'),
    },
    {
      path: '/clients/:id',
      name: 'clients.edit',
      component: () => import('./views/Clients/ClientsForm.vue'),
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
