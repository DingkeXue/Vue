<template>
  <header id="header">
    <div class="container">
      <nav class="navbar navbar-default">
        <a class="navbar-brand" href="#"><img src="https://s3plus.meituan.net/v1/mss_6b7c26b3db4c4bbebdbb4d7a9bb76633/static/logo-1.png" alt="logo"></a>
        <ul class="nav navbar-nav">
          <li><router-link class="nav-link" to="/">平台介绍</router-link></li>
          <li><router-link class="nav-link" to="menu">开店流程</router-link></li>
          <li><router-link class="nav-link" to="about">联系我们</router-link></li>
          <li><router-link class="nav-link" to="check">资费查询</router-link></li>
          <li><router-link class="nav-link" to="problem">常见问题</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link class="nav-link" to="signup">登录</router-link></li>
          <li><router-link class="nav-link" to="register">注册</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {

      }
    }
  }
</script>

<style>
  .navbar-header a {
    padding: 5px;
  }
  li {
    list-style: none;
  }

  .navbar a {
    font-size: 20px;
    padding: 10px;
  }

  img {
    width: 38px;
    height: 38px;
  }
  .nav-link {
    text-align: center;
  }
</style>
