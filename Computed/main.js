let app = new Vue({
   el: '#app',
   data: {
       num1: null,
       num2: null,
       num3: null,
       num4: null,
       text: '',
       a: 0,
       b: 0,
   },
    computed: {
        addA: function() {
          console.log('add to A');
          return this.a + 100;
          
        },
        addB: function() {
          console.log('add to B');
          return this.b + 100;
        },
       
        reverse: function () {
            return this.text.split('').reverse().join('');
        }
    },
    methods: {
       adda: function() {
          console.log('add to a');
          return this.a + 100;
          
        },
        addb: function() {
          console.log('add to b');
          return this.b + 100;
        },
    }
});