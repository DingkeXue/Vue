import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import AddUser from '../components/AddUser'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add',
      name: 'addUser',
      component: AddUser
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: Home
    }
  ],
  mode: 'history'
})
