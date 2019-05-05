<template>
  <div id="home">
    <div class="content">
      <div class="main">
        <h1>Golden Grail in Snow Kingdom</h1>
        <button class="btn btn-success"><router-link to="/menu">Let's Order</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
  .content {
    background: url("../assets/banner.jpg") center no-repeat;
    height: 90vh;
    font-family: "Microsoft YaHei";
  }

  .content,
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .main {
    width: 80vw;
    height: 60vh;
    background: #fffdef;
    opacity: .8;
    flex-direction: column;
  }

  h1 {
    margin: 60px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
  }

  .btn {
    padding: 15px 30px;
  }

</style>
