<template>
  <div id="register">
    <div class="container">
      <form class="form" @submit.prevent="onSubmit">
        <h1>Register</h1>
        <div class="form-group">
          <label>Account</label>
          <input type="text" class="form-control" v-model="account" placeholder="account">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password" placeholder="password">
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" v-model="confirmpassword" placeholder="password">
        </div>
        <button type="submit" class="btn btn-danger">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'register',
    data() {
      return {
        account: '',
        password: '',
        confirmpassword: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.account) {
          if (this.password === this.confirmpassword) {
            const formData = {
              account: this.account,
              password: this.password,
              confirmpassword: this.confirmpassword
            };
            axios.post('/users',formData).then(res => {
              alert("注册成功，请登录！");
              this.$router.push('/login');
            });
          } else {
            alert("两次密码错误")
          }
        }else {
          alert("请输入正确的账号！");
        }
      }
    }
  }
</script>


<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form {
    width: 40%;
    height: 500px;
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 20px;
    margin-top: 50px;
  }

  .btn-danger {
    width: 100%;
  }

  h1 {
    margin-bottom: 30px;
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
  }
</style>
