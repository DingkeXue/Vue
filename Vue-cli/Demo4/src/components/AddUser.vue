<template>
  <div id="addUser">
    <div class="container">
      <h1>添加新用户</h1>
      <form class="form">
        <div class="form-group">
          <label>姓名</label>
          <input v-model="user.name" type="text" placeholder="姓名" class="form-control" required>
        </div>
        <div class="form-group">
          <label>电话</label>
          <input v-model="user.phone" type="number" placeholder="电话" class="form-control" required>
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input v-model="user.email" type="email" placeholder="邮箱" class="form-control" required>
        </div>
        <div class="form-group">
          <label>备注</label>
          <textarea v-model="user.other" name="other" class="form-control"></textarea>
        </div>
        <button @click.prevent="post" type="submit" class="btn btn-primary">创建</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'addUser',
    data() {
      return {
        user: {
          name: '',
          phone: '',
          email: '',
          other: ''
        }
      }
    },
    methods:{
      post() {
        if (!this.user.name || !this.user.phone || !this.user.email) {
          alert("请填写相关信息");
          return false;
        } else {
          axios.post('http://localhost:3000/posts', this.user).then(response => {
            this.$router.push({path: '/', query: {alert: '新用户添加成功！'}});
          }).catch(error => {
            alert('发生错误：' + error);
          })
        }
      }
    }
  }
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  form {
    width: 500px;
    margin: 40px auto;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .form-control {
    padding: 8px;
  }

  .btn {
    width: 100%;
    padding: 6px;
  }
</style>
