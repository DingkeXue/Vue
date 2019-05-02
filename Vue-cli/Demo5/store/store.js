import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      products: [
        {name: "小辣椒 红辣椒7X 4+64GB 学生智能手机 美颜双摄 微Q多开 人脸识别 移动联通电", price: 655, img: '../assets/logo.png'},
        {name: "Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待", price: 5555, img: '../assets/logo.png'},
        {name: "小辣椒 红辣椒7X 4+64GB 学生智能手机 美颜双摄 微Q多开 人脸识别 移动联通电", price: 655, img: '../assets/logo.png'},
        {name: "Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待", price: 5555, img: '../assets/logo.png'},
      ]
  },
  getters: {
    discount(state) {
      const newProducts = state.products.map((product) =>{
        return {
          name: product.name,
          price: product.price,
        }
      });
      return newProducts;
    }
  },
  mutations: {
    decrement: (state, payload) => {
      state.products.forEach(product => {
        product.price *= payload.amount;
      });
    }
  },
  actions: {
    decrement:(context) => {
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          context.commit({
            type: "decrement",
            amount: .8
          });
          resolve();
        }, 2000)
      }))
    }
  }
});
