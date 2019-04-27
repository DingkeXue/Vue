import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddBlog from '../components/AddBlog'
import MyBlog from '../components/MyBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddBlog',
      component:AddBlog
    },
    {
      path: '/myBlog',
      name: 'MyBlog',
      component: MyBlog
    }
  ],
  mode: 'history'
})
