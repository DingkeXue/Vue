var app = new Vue({
   el: '#app',
   data: {
       text: 'world!'
   },
   methods: {
       greet: function () {
           alert('hello ' + this.text);
       },
       say: function (content, e) {
           e.preventDefault();
           alert(content);
       },
       alert1: function () {
           alert('li');
       },
       alert2: function () {
           alert('ul');
       },
       alert3: function () {
           alert('div');
       },
       onSubmit: function () {
           alert('已提交');
       },
       onLeft: function () {
           alert('您点击了鼠标左键');
       },
       onRight: function () {
           alert('您点击了鼠标右键');
       },
       onMiddle: function () {
           alert('您点击了鼠标中间键');
       },
       scroll: function () {
           alert("鼠标在滚动");
       }
   }
});