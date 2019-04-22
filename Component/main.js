// 调度器
let Event = new Vue({});

Vue.component('click-demo', {
   data: function () {
       return {
           count: 0
       }
   },
   template: `
   <button @click="count++">You Click me {{count}} times</button>
   `,
    methods: {
       alert: function () {
           alert('我出来了');
       }
    }
});

let alert_demo = {
  template: `
  <button @click="alert">Click Me</button>
  `,
  data: function () {
      return {
          count: 1,
      }
  },
  methods: {
      alert: function () {
          alert("You Clicked Me");
      }
  }
};

let like_demo = {
    template: '#like-tpl',
    data: function () {
        return {
            like_count: 34,
            liked: false
        }
    },
    methods: {
        add: function () {
            if (!this.liked)
                this.like_count ++;
            else
                this.like_count --;
            this.liked = !this.liked;
        }
    }
};

let alert_demo_2 = {
    template: '#alert-tpl',
    props: ['msg', 'username'],
    methods: {
        Alert: function () {
            alert(this.msg);
        }
    }
};

Vue.component('show-balance', {
   template: `
    <div>
    <show @show-balance="show_balance"></show>
    <p v-show="show">您的余额是： <strong>32423</strong> 元</p>
</div>
   ` ,
    methods: {
       show_balance: function (data) {
           this.show = !this.show;
           alert(data.user);
       }
    },
    data: function () {
        return {
            show: false
        }
    }
});

Vue.component('show', {
   template: `
   <button @click="on_click">显示余额</button>
   ` ,
    methods: {
       on_click: function () {
           this.$emit('show-balance', {user: 'Xue'});
       }
    }
});

Vue.component('lbb-say', {
   template: `
   <div>
   <label>
    我说：
    <input v-model="i_said" @keyup="change" type="text">
</label>
</div>
   ` ,
    data: function () {
        return {
            i_said: '',
        }
    },
    methods: {
        change: function () {
            Event.$emit('lbb-saying', this.i_said);
        }
    }
});

Vue.component('repeat', {
   template: `
   <div>
   复读机：
   <p>{{lbb_say}}</p>
</div>
   ` ,
    data: function () {
        return {
            lbb_say: ''
        }
    },
    mounted: function () {
        let _this = this;
        Event.$on('lbb-saying', function (data) {
            _this.lbb_say = data;
        })
    }
});

new Vue({
   el: '#app',
});

new Vue({
   el: '#seg1',
   components: {
       alert: alert_demo
   }
});

new Vue({
    el: '#seg2',
    components: {
        'like-demo': like_demo,
    }
});

new Vue({
   el: '#seg3',
   components: {
       alert: alert_demo_2,
   }
});

new Vue({
    el: '#seg4',
});

new Vue({
    el: '#seg5',
});