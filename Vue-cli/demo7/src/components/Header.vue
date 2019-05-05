<template>
  <div id="Header">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand"><strong>WINE</strong></a>
        <ul class="nav navbar-nav">
          <li class="navbar-link"><router-link to="/">HOME</router-link></li>
          <li class="navbar-link"><router-link to="/menu">Menu</router-link></li>
          <li class="navbar-link"><router-link to="/about">About</router-link></li>
        </ul>
        <ul class="nav navbar-right navbar-nav">
          <li class="navbar-link"><router-link to="/login">Login</router-link></li>
          <li class="navbar-link"><router-link to="/register">Register</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>
