<template>
  <div id="home">
    <h1 class="page-header">后台管理系统</h1>
    <Alert v-if="alert" :message="alert"></Alert>
    <div class="search">
      <input type="text" class="form-control" placeholder="请输入关键字" v-model="search">
      <button class="btn btn-primary">搜索</button>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in filterUser(users, search)">
        <td>{{user.name}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td><router-link :to="'/user/' + user.id"><button class="btn btn-success">详情</button></router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  import Alert from './Alert'
  export default {
    name: 'home',
    components: {
      Alert
    },
    data() {
      return {
        users: [],
        alert: '',
        search: ''
      }
    },
    methods:{
      fetchUsers() {
        axios.get('http://localhost:3000/posts').then(response => {
          this.users = response.data;
        })
      },
      filterUser(users, value) {
        return users.filter(person => {
          return person.name.match(value);
        })
      }
    },
    created() {
      if (this.$route.query.alert) {
        this.alert = this.$route.query.alert;
      }
      this.fetchUsers();
    },
    updated(){
      this.fetchUsers();
    }
  }
</script>

<style scoped>
  .search {
    margin: 30px auto;
  }

  .form-control {
    width: 80%;
  }

  .btn,
  .form-control {
    display: inline-block;
  }

  .search .btn {
    padding: 6px 60px;
  }

  h1 {
    text-align: center;
  }
  tbody tr:hover {
    background-color: #00b0ff2b;
  }
  .table {
    font-size: 18px;
  }
</style>
