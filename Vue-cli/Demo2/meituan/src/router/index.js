import Vue from 'vue'
import Router from 'vue-router'
import Home from  '../components/Home'
import About from '../components/About'
import Check from '../components/Check'
import Problem from '../components/Problem'
import Register from '../components/Register'
import Signup from '../components/Signup'
import Menu from '../components/Menu'

// 二级路由
import Contact from '../components/about/Contact'
import History from '../components/about/History'
import OrderGuide from '../components/about/OrderGuide'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLink',
      component: Home
    },
    {
      path: '/about',
      name: 'AboutLink',
      component: About,
      redirect: '/about/contact',
      children: [
        {
          path:'/about/contact',
          name: 'ContactLink',
          component: Contact
        },
        {
          path: '/history',
          name: 'HistoryLink',
          component: History,
        },
        {
          path: '/orderGuide',
          name: 'OrderGuideLink',
          component: OrderGuide
        }
      ]
    },
    {
      path: '/check',
      name: 'CheckLink',
      component: Check,
      // 路由独享守卫
      /*beforeEnter: (to,from, next) => {
        alert("即将进入");
        next();
      }*/
    },
    {
      path: '/problem',
      name: 'ProblemLink',
      component: Problem
    },
    {
      path: '/register',
      name: 'RegisterLink',
      component: Register
    },
    {
      path: '/signup',
      name: 'SignupLink',
      component: Signup
    },
    {
      path: '/menu',
      name: 'MenuLink',
      components: {
        default: Menu,
        'contact': Contact,
        'history': History,
        'orderGuide': OrderGuide
      }
    },
    {
      path: '*',
      name: 'redirect',
      redirect: '/'
    }

  ],
  mode: 'history'
})


