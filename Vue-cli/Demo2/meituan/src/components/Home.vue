<template>
  <div id="home">
    <div class="title">
      <h1>美团外卖 送啥都快</h1>
      <h2>从此刻，开启您的美食之旅吧</h2>
      <button @click="goToLink" class="btn btn-success btn-lg">订餐</button>
    </div>
  </div>
</template>

<script>
  export default  {
    name: 'home',
    methods: {
      goToLink() {
        this.$router.push({name: 'SignupLink'});
      }
    }
  }
</script>


<style scoped>
  #home {
    background: url("../assets/meituanhome.jpg") center no-repeat;
    height: 90vh;
    padding: 7%;
  }

  h1,h2 {
    margin: 5%;
  }

  .title {
    background: #eeeeee;
    opacity: .9;
    height: 60vh;
    width: 60vw;
    margin: 0 auto;
    padding: 10%;
    text-align: center;
  }
</style>
