<template>
  <div id="login">
    <div class="container">
      <form class="form" @submit.prevent="onSubmit">
        <h1>LOGIN</h1>
        <div class="form-group">
          <input type="text" class="form-control" v-model="account" placeholder="account">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="password" placeholder="password">
        </div>
        <button type="submit" class="btn btn-danger">Login</button>
        <div class="other">
          <h2>others</h2>
          <button class="btn btn-warning">PHONE</button>
          <button class="btn btn-warning">EMAIL</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data() {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        axios.get('/users/?username=' + this.account).then(res => {
          const result =  res.data.filter(item => {
            return item.name === this.password;
          });
          if (result != null && result.length != 0) {
            this.$router.push('/');
          } else {
            alert("账号或密码错误！");
          }
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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

  h1, h2 {
    padding: 5px;
    margin: 30px auto;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
  }

</style>
