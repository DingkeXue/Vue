<template>
  <div class="Header">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <ul class="navbar-nav nav">
          <li class="nav-link"><router-link to="/">首页</router-link></li>
          <li class="nav-link"><router-link to="/myBlog">博客</router-link></li>
          <li class="nav-link"><router-link to="/add">写博客</router-link></li>
          <li class="nav-link"><router-link to="#">Github</router-link></li>
        </ul>
        <ul class="navbar-right nav navbar-nav">
          <li class="nav-link"><router-link to="#">登录</router-link></li>
          <li class="nav-link"><router-link to="#">注册</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
