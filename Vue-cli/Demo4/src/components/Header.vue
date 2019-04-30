<template>
  <div id="header">
    <nav class="navbar navbar-default">
      <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nbs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><strong>后台管理</strong></a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/add">AddUser</router-link></li>
        </ul>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'header',
  }
</script>
