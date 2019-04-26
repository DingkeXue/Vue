<template>
  <div id="home">
    <button @click="goToLink" class="btn btn-primary">菜单</button>
  </div>
</template>

<script>
  export default  {
    name: 'home',
    methods: {
      goToLink() {
        this.$router.go(-1);
      }
    }
  }
</script>
