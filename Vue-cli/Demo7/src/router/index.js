import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../components/Admin'

// 二级路由
import Culture from '../components/about/culture'
import News from '../components/about/news'
import Contact from '../components/about/contact'
import Order from '../components/about/order'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/about/culture',
      children: [
        {
          path: '/about/culture',
          name: 'Culture',
          component: Culture
        },
        {
          path: '/about/news',
          name: 'News',
          component: News
        },
        {
          path: '/about/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/about/contact',
          name: 'Contact',
          component: Contact
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition;
    return {x: 0, y: 0}
  }
})
