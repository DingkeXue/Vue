<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style>
  body {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  h2  {
    color: #000;
  }
</style>
