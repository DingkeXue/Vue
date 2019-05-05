// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 全局守卫
/*router.beforeEach((to, from, next) => {
  if (to.path == '/signup' || to.path == '/register') {
    next();
  } else {
    next('/signup');
  }
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
