<template>
  <div id="home">
    <Header @titleChanged="change($event)" :msg="msg"></Header>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">Hello</router-link></li>
    </ul>
    <Hello :users="users"></Hello>
    <Footer :msg="msg"></Footer>
  </div>
</template>

<script>
  import Hello from './Hello'
  import Header from './Header'
  import Footer from './Footer'

  export default {
    name: 'Home',
    data() {
      return {
        users: [],
        msg: '我是值传递,点我'
      }
    },
    methods: {
      change: function (title) {
        this.msg = title;
      }
    },
    components: {
      Hello,
      Header,
      Footer
    },
    created() {
      this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
        this.users = data.body;
      })
    }
  }
</script>

<style>
  body {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  h2  {
    color: #000;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 5px;
  }
</style>
