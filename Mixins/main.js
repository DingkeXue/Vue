let myMix = {
  methods: {
      hello: function () {
          alert('hello');
      },
      show: function () {
          this.visible = !this.visible;
      },
      hide: function () {
          this.visible = false;
      }
  },
  data: function () {
      return {
          visible: false
      }
  },
  created: function () {
      alert("我是mixins");
  }
};

Vue.component('tooltip', {
    template:`
    <div>
    <h3 @click="show">点我显示/隐藏</h3>
    <p v-if="visible">054A型护卫舰是中国人民解放军海军最新型的护卫舰等级。本级舰身设计与054型护卫舰相仿，火力则比较054型护卫舰强劲许多，为中国人民解放军海军装备的第一种区域防空型护卫舰。</p>
</div>
    `,
    mixins: [myMix]
});

let toggle_demo = {
  template: `
  <div>
    <button @click="hide">隐藏</button>
    <p v-show="visible">054A型护卫舰是中国人民解放军海军最新型的护卫舰等级。本级舰身设计与054型护卫舰相仿，火力则比较054型护卫舰强劲许多，为中国人民解放军海军装备的第一种区域防空型护卫舰。</p>
</div>
  `,
  mixins: [myMix],
  data: function () {
      return {
          visible: true
      }
  }
};

new Vue({
    el: '#app',
    mixins: [myMix],
    created: function () {
        alert("我是第一个Vue实例");
    }
});

new Vue({
    el: '#app2',
    mixins: [myMix],
    components: {
        toggle: toggle_demo
    },
    created: function () {
        alert("我是第二个Vue实例");
    }
});