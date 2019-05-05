<template>
  <div id="about" class="container">
    <div class="row">
      <div class="col-md-4">
        <ul class="list-group">
          <router-link to="/about/culture" class="list-group-item">Company Culture</router-link>
          <router-link to="/about/contact" class="list-group-item">Contact Us</router-link>
          <router-link to="/about/order" class="list-group-item">Order Document</router-link>
          <router-link to="/about/news" class="list-group-item">News</router-link>
        </ul>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style scoped>
  .list-group-item {
    margin-bottom: 20px;
    padding: 20px;
  }

  .list-group-item:hover {
    color: deepskyblue;
  }

</style>
