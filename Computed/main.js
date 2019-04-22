let app = new Vue({
   el: '#app',
   data: {
       num1: null,
       num2: null,
       num3: null,
       num4: null,
       text: '',
   },
    computed: {
       sum: function () {
           return parseFloat(this.num1) + parseFloat(this.num2) || 0;
       },
        reverse: function () {
            return this.text.split('').reverse().join('');
        }
    },
    methods: {
       add: function () {
           return parseFloat(this.num3) + parseFloat(this.num4) || 0;
       }
    }
});