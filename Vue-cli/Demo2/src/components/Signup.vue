<template>
  <div class="wrapper">
    <h1>登录</h1>
    <form class="form">
      <div class="form-group">
        <label for="name">账号</label>
        <input id="name" type="text" placeholder="用户名/手机号" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input id="password" type="password" placeholder="密码" class="form-control">
      </div>
      <button class="btn btn-primary">登录</button>
    </form>
  </div>
</template>


<style scoped>
  .wrapper {
    width: 500px;
    margin: 100px auto;
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 0 3px 3px rgba(0, 0, 0, .6);
    padding: 40px;
  }

  h1 {
    text-align: center;
  }

  .btn {
    width: 100%;
  }
</style>
