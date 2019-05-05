<template>
  <div id="app">
    <app-header></app-header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
 body {
   font-size: 18px;
 }
</style>
