<template>
  <div id="app" class="container">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <router-view name="contact"></router-view>
      </div>
      <div class="col-md-4 col-sm-12">
        <router-view name="history"></router-view>
      </div>
      <div class="col-md-4 col-sm-12">
        <router-view name="orderGuide"></router-view>
      </div>
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
  #app {
    font-size: 18px;
  }
</style>
