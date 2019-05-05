<template>
  <div class="wrapper">
    <h1>注册</h1>
    <form>
      <div class="form-group">
        <label for="name">账号</label>
        <input id="name" type="text" placeholder="用户名" class="form-control">
      </div>
      <div class="form-group">
        <label for='phone'>手机号</label>
        <input id="phone" type="number" placeholder="手机号" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input id="password" type="password" placeholder="密码" class="form-control">
      </div>
      <div class="form-group">
        <label for="repassword">确认密码</label>
        <input id="repassword" type="password" placeholder="确认密码" class="form-control">
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
    box-shadow: 0 3px 5px rgba(0, 0, 0, .6);
    padding: 40px;
  }

  h1 {
    text-align: center;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .btn {
    width: 100%;
  }
</style>

